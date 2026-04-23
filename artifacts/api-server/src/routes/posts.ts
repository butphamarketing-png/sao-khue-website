import { Router, type IRouter, type Request, type Response } from "express";
import { db, postsTable } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import { z } from "zod";
import { isAdmin } from "../lib/auth";

const PostInput = z.object({
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/i),
  title: z.string().min(1),
  category: z.string().min(1).max(64),
  excerpt: z.string().default(""),
  content: z.string().default(""),
  imageUrl: z.string().default(""),
  metaTitle: z.string().default(""),
  metaDescription: z.string().default(""),
  metaKeywords: z.string().default(""),
});

const router: IRouter = Router();

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

function serialize(p: typeof postsTable.$inferSelect) {
  return {
    ...p,
    createdAt: p.createdAt.toISOString(),
    updatedAt: p.updatedAt.toISOString(),
  };
}

router.get("/posts", async (req, res) => {
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  const limitRaw = typeof req.query.limit === "string" ? parseInt(req.query.limit, 10) : undefined;
  const limit = limitRaw && !isNaN(limitRaw) ? Math.min(Math.max(limitRaw, 1), 100) : undefined;

  const q = db.select().from(postsTable).orderBy(desc(postsTable.createdAt)).$dynamic();
  if (category) q.where(eq(postsTable.category, category));
  if (limit) q.limit(limit);
  const rows = await q;
  res.json(rows.map(serialize));
});

router.get("/posts/:slug", async (req, res) => {
  const [row] = await db.select().from(postsTable).where(eq(postsTable.slug, req.params.slug)).limit(1);
  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(serialize(row));
});

router.post("/posts", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const parsed = PostInput.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db.insert(postsTable).values(parsed.data).returning();
  res.status(201).json(serialize(row));
});

router.put("/posts/:slug", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const parsed = PostInput.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const [row] = await db
    .update(postsTable)
    .set({ ...parsed.data, updatedAt: new Date() })
    .where(eq(postsTable.slug, req.params.slug))
    .returning();
  if (!row) {
    res.status(404).json({ error: "Not found" });
    return;
  }
  res.json(serialize(row));
});

router.delete("/posts/:slug", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  await db.delete(postsTable).where(eq(postsTable.slug, req.params.slug));
  res.status(204).end();
});

export default router;

import { Router, type IRouter, type Request, type Response } from "express";
import { db, postsTable } from "@workspace/db";
import { eq, desc, inArray } from "drizzle-orm";
import { z } from "zod";
import {
  categoriesForFilter,
  getFallbackPost,
  listFallbackPosts,
  mergePostMedia,
} from "@workspace/seed-content";
import { isAdmin } from "../lib/auth";

const PostInput = z.object({
  slug: z.string().min(1).max(255).regex(/^[a-z0-9-]+$/i),
  title: z.string().min(1),
  category: z.string().min(1).max(64),
  excerpt: z.string().default(""),
  content: z.string().default(""),
  imageUrl: z.string().default(""),
  imageAlt: z.string().default(""),
  imageCaption: z.string().default(""),
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

function serialize(p: Record<string, unknown> & {
  createdAt: Date | string;
  updatedAt: Date | string;
}) {
  return {
    ...p,
    createdAt: p.createdAt instanceof Date ? p.createdAt.toISOString() : p.createdAt,
    updatedAt: p.updatedAt instanceof Date ? p.updatedAt.toISOString() : p.updatedAt,
  };
}

const listPostColumns = {
  id: postsTable.id,
  slug: postsTable.slug,
  title: postsTable.title,
  category: postsTable.category,
  excerpt: postsTable.excerpt,
  imageUrl: postsTable.imageUrl,
  imageAlt: postsTable.imageAlt,
  imageCaption: postsTable.imageCaption,
  metaTitle: postsTable.metaTitle,
  metaDescription: postsTable.metaDescription,
  metaKeywords: postsTable.metaKeywords,
  createdAt: postsTable.createdAt,
  updatedAt: postsTable.updatedAt,
} as const;

function wantsFullPosts(req: Request): boolean {
  const raw = req.query.full;
  return raw === "1" || raw === "true";
}

function slimFallbackPosts(options?: { category?: string; limit?: number; full?: boolean }) {
  const rows = listFallbackPosts(options);
  if (options?.full) return rows;
  return rows.map((p) => ({ ...p, content: "" }));
}

router.get("/posts", async (req, res) => {
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  const limitRaw = typeof req.query.limit === "string" ? parseInt(req.query.limit, 10) : undefined;
  const limit = limitRaw && !isNaN(limitRaw) ? Math.min(Math.max(limitRaw, 1), 2000) : undefined;
  const full = wantsFullPosts(req);

  try {
    // List cards không cần HTML bài — bỏ content mặc định (giảm ~300KB+/request).
    // Admin SEO/editor: ?full=1
    const q = full
      ? db.select().from(postsTable).orderBy(desc(postsTable.createdAt)).$dynamic()
      : db.select(listPostColumns).from(postsTable).orderBy(desc(postsTable.createdAt)).$dynamic();
    if (category) q.where(inArray(postsTable.category, categoriesForFilter(category)));
    if (limit) q.limit(limit);
    const rows = await q;
    res.json(
      rows.map((row) =>
        mergePostMedia(
          serialize({ ...row, content: full ? (row as { content?: string }).content ?? "" : "" }) as any,
          getFallbackPost(row.slug),
          { includeContent: full },
        ),
      ),
    );
  } catch (err) {
    console.error("[posts] list failed, using fallback", err);
    res.json(slimFallbackPosts({ category, limit, full }));
  }
});

router.get("/posts/:slug", async (req, res) => {
  try {
    const [row] = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.slug, req.params.slug))
      .limit(1);
    if (row) {
      const serialized = serialize(row) as any;
      const fallback = getFallbackPost(req.params.slug);
      res.json(mergePostMedia(serialized, fallback));
      return;
    }
  } catch (err) {
    console.error("[posts] get failed, using fallback", err);
  }

  const fallback = getFallbackPost(req.params.slug);
  if (fallback) {
    res.json(fallback);
    return;
  }

  res.status(404).json({ error: "Not found" });
});

router.post("/posts", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const parsed = PostInput.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  // Check if slug already exists
  const existing = await db.select().from(postsTable).where(eq(postsTable.slug, parsed.data.slug));
  if (existing.length > 0) {
    res.status(400).json({ error: "Slug đã tồn tại. Vui lòng chọn slug khác." });
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

  // Check if new slug already exists (and it's not the current post)
  if (parsed.data.slug !== req.params.slug) {
    const existing = await db.select().from(postsTable).where(eq(postsTable.slug, parsed.data.slug));
    if (existing.length > 0) {
      res.status(400).json({ error: "Slug đã tồn tại. Vui lòng chọn slug khác." });
      return;
    }
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

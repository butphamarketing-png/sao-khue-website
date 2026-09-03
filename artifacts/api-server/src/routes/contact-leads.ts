import { Router, type IRouter, type Request, type Response } from "express";
import { db, contactLeadsTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { isAdmin } from "../lib/auth";
import { getClientIp } from "../lib/client-ip";
import { ensureAppTablesOnce } from "../lib/ensure-tables";
import { notifyLeadByEmail } from "../lib/notify-lead-email";

const LeadInput = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(6).max(32),
  email: z.string().max(120).optional().default(""),
  service: z.string().max(120).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  source: z.string().max(64).optional().default("website"),
});

const router: IRouter = Router();

function serialize(row: typeof contactLeadsTable.$inferSelect) {
  return { ...row, createdAt: row.createdAt.toISOString() };
}

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

router.post("/contact-leads", async (req, res) => {
  try {
    const parsed = LeadInput.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ error: parsed.error.message });
      return;
    }
    await ensureAppTablesOnce();
    const [row] = await db
      .insert(contactLeadsTable)
      .values({ ...parsed.data, ip: getClientIp(req).slice(0, 64) })
      .returning();
    const payload = serialize(row);
    void notifyLeadByEmail(payload);
    res.status(201).json(payload);
  } catch (err) {
    console.error("[contact-leads] create failed", err);
    res.status(503).json({ error: "Could not save contact request" });
  }
});

router.get("/contact-leads", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  try {
    await ensureAppTablesOnce();
    const limitRaw = typeof req.query.limit === "string" ? parseInt(req.query.limit, 10) : 100;
    const limit = limitRaw && !isNaN(limitRaw) ? Math.min(Math.max(limitRaw, 1), 200) : 100;
    const rows = await db
      .select()
      .from(contactLeadsTable)
      .orderBy(desc(contactLeadsTable.createdAt))
      .limit(limit);
    res.json(rows.map(serialize));
  } catch (err) {
    console.error("[contact-leads] list failed", err);
    res.status(503).json({ error: "Database unavailable" });
  }
});

router.delete("/contact-leads/:id", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }
  try {
    await ensureAppTablesOnce();
    await db.delete(contactLeadsTable).where(eq(contactLeadsTable.id, id));
    res.status(204).end();
  } catch (err) {
    console.error("[contact-leads] delete failed", err);
    res.status(503).json({ error: "Database unavailable" });
  }
});

export default router;

import { Router, type IRouter, type Request, type Response } from "express";
import { db, siteVisitsTable, contactLeadsTable } from "@workspace/db";
import { and, desc, eq, gte } from "drizzle-orm";
import { z } from "zod";
import { isAdmin } from "../lib/auth";
import { getClientIp, getRequestGeo } from "../lib/client-ip";

const VisitInput = z.object({
  path: z.string().max(300).optional().default("/"),
});

const SKIP_PATH_PREFIXES = ["/admin", "/api", "/assets", "/src"];

const BOT_UA =
  /bot|crawler|spider|crawling|preview|slurp|bingpreview|facebookexternalhit|whatsapp|telegram|discord|bytespider|semrush|ahrefs|dotbot|petalbot/i;

const router: IRouter = Router();

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

function normalizePath(raw: string): string {
  try {
    const url = raw.startsWith("http") ? new URL(raw).pathname : raw;
    const path = url.split("?")[0]?.replace(/\/+$/, "") || "/";
    return path.slice(0, 300);
  } catch {
    return "/";
  }
}

function shouldSkipPath(path: string): boolean {
  return SKIP_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

function visitLevel(input: {
  userAgent: string;
  visits: number;
  lastPath: string;
}): "an toàn" | "nghi ngờ" {
  if (BOT_UA.test(input.userAgent)) return "nghi ngờ";
  if (input.visits >= 80) return "nghi ngờ";
  if (/\.(php|env|sql|bak)$/i.test(input.lastPath) || /wp-admin|xmlrpc/i.test(input.lastPath)) {
    return "nghi ngờ";
  }
  return "an toàn";
}

router.post("/site-visits", async (req, res) => {
  try {
    const parsed = VisitInput.safeParse(req.body ?? {});
    const path = normalizePath(parsed.success ? parsed.data.path : "/");
    if (shouldSkipPath(path)) {
      res.status(204).end();
      return;
    }

    const ip = getClientIp(req).slice(0, 64);
    const userAgent = String(req.headers["user-agent"] ?? "").slice(0, 400);
    const geo = getRequestGeo(req);

    const recent = await db
      .select({ id: siteVisitsTable.id })
      .from(siteVisitsTable)
      .where(
        and(
          eq(siteVisitsTable.ip, ip),
          eq(siteVisitsTable.path, path),
          gte(siteVisitsTable.createdAt, sql`now() - interval '20 seconds'`),
        ),
      )
      .limit(1);

    if (recent.length > 0) {
      res.status(204).end();
      return;
    }

    await db.insert(siteVisitsTable).values({
      ip: ip || "unknown",
      path,
      city: geo.city.slice(0, 80),
      region: geo.region.slice(0, 80),
      country: geo.country.slice(0, 8),
      userAgent,
    });
    res.status(204).end();
  } catch (err) {
    console.error("[site-visits] track failed", err);
    res.status(204).end();
  }
});

router.get("/site-visits", async (req, res) => {
  if (!requireAdmin(req, res)) return;
  try {
    const daysRaw = Number(req.query.days ?? 31);
    const days = Number.isFinite(daysRaw) ? Math.min(Math.max(daysRaw, 1), 62) : 31;
    const sinceDate = new Date(Date.now() - days * 86_400_000);

    const visits = await db
      .select()
      .from(siteVisitsTable)
      .where(gte(siteVisitsTable.createdAt, sinceDate))
      .orderBy(desc(siteVisitsTable.createdAt))
      .limit(4000);

    const leads = await db
      .select({ ip: contactLeadsTable.ip, name: contactLeadsTable.name, phone: contactLeadsTable.phone })
      .from(contactLeadsTable)
      .where(gte(contactLeadsTable.createdAt, sinceDate))
      .limit(500);

    const leadByIp = new Map<string, { name: string; phone: string }>();
    for (const lead of leads) {
      const key = lead.ip.trim();
      if (key && !leadByIp.has(key)) leadByIp.set(key, { name: lead.name, phone: lead.phone });
    }

    type Agg = {
      ip: string;
      city: string;
      region: string;
      country: string;
      userAgent: string;
      visits: number;
      lastSeen: Date;
      lastPath: string;
    };
    const byIp = new Map<string, Agg>();
    for (const row of visits) {
      const key = row.ip || "unknown";
      const existing = byIp.get(key);
      if (!existing) {
        byIp.set(key, {
          ip: key,
          city: row.city,
          region: row.region,
          country: row.country,
          userAgent: row.userAgent,
          visits: 1,
          lastSeen: row.createdAt,
          lastPath: row.path,
        });
        continue;
      }
      existing.visits += 1;
      if (row.createdAt > existing.lastSeen) {
        existing.lastSeen = row.createdAt;
        existing.lastPath = row.path;
        existing.city = row.city || existing.city;
        existing.region = row.region || existing.region;
        existing.country = row.country || existing.country;
        existing.userAgent = row.userAgent || existing.userAgent;
      }
    }

    const rows = [...byIp.values()]
      .sort((a, b) => b.lastSeen.getTime() - a.lastSeen.getTime())
      .slice(0, 200)
      .map((row) => {
        const lead = leadByIp.get(row.ip);
        const level = visitLevel(row);
        return {
          ip: row.ip,
          city: row.city,
          region: row.region,
          country: row.country,
          level,
          visits: row.visits,
          lead: lead ? `${lead.name} · ${lead.phone}` : "",
          lastSeen: row.lastSeen.toISOString(),
          lastPath: row.lastPath,
        };
      });

    const dailyMap = new Map<string, number>();
    for (const row of visits) {
      const key = row.createdAt.toISOString().slice(0, 10);
      dailyMap.set(key, (dailyMap.get(key) ?? 0) + 1);
    }
    const daily = [...dailyMap.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, count]) => ({ date, visits: count }));

    res.json({
      period: { days },
      totals: {
        visits: visits.length,
        uniqueIps: byIp.size,
        suspicious: rows.filter((r) => r.level === "nghi ngờ").length,
      },
      daily,
      rows,
    });
  } catch (err) {
    console.error("[site-visits] list failed", err);
    res.status(503).json({ error: "Database unavailable" });
  }
});

export default router;

import { Router, type IRouter } from "express";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { db, postsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { getPostPublicPath, seedPosts, isSitemapIndexablePost, shouldNoindexPostSlug } from "@workspace/seed-content";
import { logger } from "../lib/logger";

const SITE_URL =
  (process.env.SITE_URL ?? "https://www.kientrucsaokhue.com").replace(/\/$/, "");

type SitemapEntry = {
  loc: string;
  lastmod: string | null;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

const STATIC_PAGES: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: 1.0, lastmod: null },
  { loc: "/bao-gia", changefreq: "weekly", priority: 0.95, lastmod: null },
  { loc: "/thiet-ke", changefreq: "weekly", priority: 0.91, lastmod: null },
  { loc: "/xay-moi", changefreq: "weekly", priority: 0.93, lastmod: null },
  { loc: "/xay-nha", changefreq: "weekly", priority: 0.95, lastmod: null },
  { loc: "/cai-tao-nha", changefreq: "weekly", priority: 0.95, lastmod: null },
  { loc: "/lien-he", changefreq: "monthly", priority: 0.9, lastmod: null },
  { loc: "/bai-viet/ve-chung-toi", changefreq: "monthly", priority: 0.88, lastmod: null },
  { loc: "/dich-vu", changefreq: "weekly", priority: 0.9, lastmod: null },
  { loc: "/dich-vu/xay-nha-tron-goi", changefreq: "weekly", priority: 0.93, lastmod: null },
  { loc: "/cong-trinh", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/tin-tuc", changefreq: "weekly", priority: 0.85, lastmod: null },
];

function moneyPostPriority(slug: string): number {
  const s = slug.toLowerCase();
  if (
    /bao-gia-xay-nha-tron-goi|don-gia-xay-nha|chi-phi-xay-nha|xay-nha-gia-re|xay-nha-tphcm$|xay-nha-tron-goi-tphcm|cai-tao-nha-cu|thiet-ke-nha-pho-tphcm|cong-ty-xay-dung-nha-pho-uy-tin/.test(
      s,
    )
  ) {
    return 0.93;
  }
  if (/bao-gia|don-gia|chi-phi|tron-goi|cai-tao|thiet-ke-nha|xay-nha-2-tang|xay-nha-3-tang|gia-re|uy-tin/.test(s)) {
    return 0.88;
  }
  return 0.8;
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildSitemapXml(urls: SitemapEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const parts = [
      `  <url>`,
      `    <loc>${escapeXml(u.loc)}</loc>`,
      u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : "",
      u.changefreq ? `    <changefreq>${u.changefreq}</changefreq>` : "",
      u.priority != null ? `    <priority>${u.priority.toFixed(2)}</priority>` : "",
      `  </url>`,
    ];
    return parts.filter(Boolean).join("\n");
  })
  .join("\n")}
</urlset>`;
}

function staticUrls(): SitemapEntry[] {
  const today = new Date().toISOString().slice(0, 10);
  return STATIC_PAGES.map((p) => ({
    ...p,
    loc: p.loc === "/" ? `${SITE_URL}/` : `${SITE_URL}${p.loc}`,
    lastmod: today,
  }));
}

function seedPostUrls(): SitemapEntry[] {
  return seedPosts.filter((p) => isSitemapIndexablePost(p)).map((p) => ({
    loc: `${SITE_URL}${getPostPublicPath(p)}`,
    lastmod: "2026-07-16",
    changefreq: "monthly" as const,
    priority: moneyPostPriority(p.slug),
  }));
}

function toLastmod(value: unknown): string {
  if (value instanceof Date) return value.toISOString().split("T")[0] ?? "2026-07-16";
  if (typeof value === "string") return value.slice(0, 10);
  return "2026-07-16";
}

async function collectPostUrls(): Promise<SitemapEntry[]> {
  try {
    const posts = await Promise.race([
      db
        .select({
          slug: postsTable.slug,
          category: postsTable.category,
          updatedAt: postsTable.updatedAt,
        })
        .from(postsTable)
        .orderBy(desc(postsTable.updatedAt)),
      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("sitemap db timeout")), 8000),
      ),
    ]);

    if (!posts.length) return seedPostUrls();

    return posts
      .filter((p) => isSitemapIndexablePost(p) && !shouldNoindexPostSlug(p.slug))
      .map((p) => ({
        loc: `${SITE_URL}${getPostPublicPath(p)}`,
        lastmod: toLastmod(p.updatedAt),
        changefreq: "monthly" as const,
        priority: moneyPostPriority(p.slug),
      }));
  } catch (err) {
    logger.warn({ err }, "sitemap: DB unavailable — falling back to seedPosts");
    return seedPostUrls();
  }
}

function tryReadStaticSitemap(): string | null {
  try {
    const here = path.dirname(fileURLToPath(import.meta.url));
    // Opaque segment so NFT does not pull the entire `public/` tree into the function.
    const publicSeg = ["pub", "lic"].join("");
    const publicRoot = path.join(here, "..", "..", publicSeg);
    const candidates = [
      path.join(publicRoot, "sitemap.xml"),
      path.join(process.cwd(), publicSeg, "sitemap.xml"),
    ];
    for (const file of candidates) {
      if (existsSync(file)) {
        const xml = readFileSync(file, "utf8");
        if (xml.includes("<urlset") && xml.includes("<loc>")) return xml;
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

const router: IRouter = Router();

router.get("/robots.txt", (_req, res) => {
  const body = `User-agent: *
Allow: /

Disallow: /admin
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send(body);
});

router.get("/sitemap.xml", async (_req, res) => {
  try {
    const staticSitemap = tryReadStaticSitemap();
    if (staticSitemap) {
      res.set("Content-Type", "application/xml; charset=utf-8");
      res.set("Cache-Control", "public, max-age=3600");
      res.send(staticSitemap);
      return;
    }

    const postUrls = await collectPostUrls();
    const seen = new Set<string>();
    const urls = [...staticUrls(), ...postUrls].filter((u) => {
      if (seen.has(u.loc)) return false;
      seen.add(u.loc);
      return true;
    });
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(buildSitemapXml(urls));
  } catch (err) {
    logger.error({ err }, "sitemap.xml generation failed");
    const fallback = tryReadStaticSitemap();
    if (fallback) {
      res.set("Content-Type", "application/xml; charset=utf-8");
      res.send(fallback);
      return;
    }
    try {
      const urls = [...staticUrls(), ...seedPostUrls()];
      res.set("Content-Type", "application/xml; charset=utf-8");
      res.send(buildSitemapXml(urls));
    } catch (err2) {
      logger.error({ err: err2 }, "sitemap.xml seed fallback failed");
      res.status(503).type("text/plain").send("Sitemap temporarily unavailable");
    }
  }
});

export default router;

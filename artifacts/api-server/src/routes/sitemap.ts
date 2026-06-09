import { Router, type IRouter } from "express";
import { db, postsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { getPostPublicPath, seedPosts } from "@workspace/seed-content";

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
  { loc: "/lien-he", changefreq: "monthly", priority: 0.9, lastmod: null },
  { loc: "/bai-viet/ve-chung-toi", changefreq: "monthly", priority: 0.85, lastmod: null },
  { loc: "/dich-vu", changefreq: "weekly", priority: 0.9, lastmod: null },
  { loc: "/cong-trinh", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/tin-tuc", changefreq: "weekly", priority: 0.85, lastmod: null },
];

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
  return STATIC_PAGES.map((p) => ({
    ...p,
    loc: p.loc === "/" ? `${SITE_URL}/` : `${SITE_URL}${p.loc}`,
  }));
}

async function collectPostUrls(): Promise<SitemapEntry[]> {
  const toEntry = (p: { slug: string; category: string; updatedAt?: Date | string }) => ({
    loc: `${SITE_URL}${getPostPublicPath(p)}`,
    lastmod:
      p.updatedAt instanceof Date
        ? p.updatedAt.toISOString().split("T")[0]
        : typeof p.updatedAt === "string"
          ? p.updatedAt.slice(0, 10)
          : "2026-01-15",
    changefreq: "monthly" as const,
    priority: 0.8,
  });

  try {
    const posts = await db
      .select({
        slug: postsTable.slug,
        category: postsTable.category,
        updatedAt: postsTable.updatedAt,
      })
      .from(postsTable)
      .orderBy(desc(postsTable.updatedAt));

    return posts.map(toEntry);
  } catch {
    return seedPosts.map((p) => toEntry({ ...p, updatedAt: "2026-01-15" }));
  }
}

const router: IRouter = Router();

router.get("/robots.txt", (_req, res) => {
  const body = `User-agent: *
Allow: /

Disallow: /admin
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml

# RSS (Google Discover / đọc tin)
# ${SITE_URL}/feed.xml
`;
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send(body);
});

router.get("/sitemap.xml", async (_req, res) => {
  const postUrls = await collectPostUrls();
  const urls = [...staticUrls(), ...postUrls];
  res.set("Content-Type", "application/xml; charset=utf-8");
  res.send(buildSitemapXml(urls));
});

export default router;

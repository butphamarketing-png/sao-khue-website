import { Router, type IRouter } from "express";
import { db, postsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { seedPosts } from "@workspace/seed-content";

const SITE_URL =
  (process.env.SITE_URL ?? "https://kientrucsaokhue.com").replace(/\/$/, "");

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
  { loc: "/gioi-thieu", changefreq: "monthly", priority: 0.85, lastmod: null },
  { loc: "/gioi-thieu/so-do-to-chuc", changefreq: "monthly", priority: 0.7, lastmod: null },
  { loc: "/gioi-thieu/ve-chung-toi", changefreq: "monthly", priority: 0.75, lastmod: null },
  { loc: "/gioi-thieu/hoat-dong", changefreq: "monthly", priority: 0.7, lastmod: null },
  { loc: "/gioi-thieu/tuyen-dung", changefreq: "weekly", priority: 0.7, lastmod: null },
  { loc: "/dich-vu", changefreq: "weekly", priority: 0.9, lastmod: null },
  { loc: "/dich-vu/xay-nha-tron-goi", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/dich-vu/sua-chua-nha", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/dich-vu/xay-dung-phan-tho", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/dich-vu/thiet-ke-nha", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/dich-vu/nang-tang-nha-pho", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/dich-vu/hoan-thien-nha", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/dich-vu/khuyen-mai", changefreq: "weekly", priority: 0.75, lastmod: null },
  { loc: "/cong-trinh", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/cong-trinh/xay-nha", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/cong-trinh/sua-nha", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/cong-trinh/thiet-ke-nha", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/kinh-nghiem", changefreq: "weekly", priority: 0.85, lastmod: null },
  { loc: "/kinh-nghiem/cam-nang", changefreq: "weekly", priority: 0.8, lastmod: null },
  { loc: "/kinh-nghiem/luat-xay-dung", changefreq: "monthly", priority: 0.75, lastmod: null },
  { loc: "/kinh-nghiem/phong-thuy", changefreq: "monthly", priority: 0.75, lastmod: null },
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
  try {
    const posts = await db
      .select({ slug: postsTable.slug, updatedAt: postsTable.updatedAt })
      .from(postsTable)
      .orderBy(desc(postsTable.updatedAt));

    return posts.map((p) => ({
      loc: `${SITE_URL}/bai-viet/${p.slug}`,
      lastmod: p.updatedAt.toISOString().split("T")[0],
      changefreq: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    return seedPosts.map((p) => ({
      loc: `${SITE_URL}/bai-viet/${p.slug}`,
      lastmod: "2026-01-15",
      changefreq: "monthly" as const,
      priority: 0.8,
    }));
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

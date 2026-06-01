/**
 * Sinh sitemap.xml + robots.txt tĩnh — Google nhận XML, không phải HTML SPA.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "../../../lib/seed-content/src/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, "..", "dist", "public");
const SITE_URL = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://kientrucsaokhue.com").replace(
  /\/$/,
  "",
);

const STATIC_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/bao-gia", priority: "0.92", changefreq: "weekly" },
  { path: "/lien-he", priority: "0.88", changefreq: "monthly" },
  { path: "/gioi-thieu", priority: "0.85", changefreq: "monthly" },
  { path: "/gioi-thieu/so-do-to-chuc", priority: "0.75", changefreq: "monthly" },
  { path: "/gioi-thieu/ve-chung-toi", priority: "0.80", changefreq: "monthly" },
  { path: "/gioi-thieu/hoat-dong", priority: "0.75", changefreq: "monthly" },
  { path: "/gioi-thieu/tuyen-dung", priority: "0.70", changefreq: "monthly" },
  { path: "/dich-vu", priority: "0.90", changefreq: "weekly" },
  { path: "/dich-vu/xay-nha-tron-goi", priority: "0.88", changefreq: "weekly" },
  { path: "/dich-vu/sua-chua-nha", priority: "0.85", changefreq: "weekly" },
  { path: "/dich-vu/xay-dung-phan-tho", priority: "0.88", changefreq: "weekly" },
  { path: "/dich-vu/thiet-ke-nha", priority: "0.85", changefreq: "weekly" },
  { path: "/dich-vu/nang-tang-nha-pho", priority: "0.82", changefreq: "weekly" },
  { path: "/dich-vu/hoan-thien-nha", priority: "0.82", changefreq: "weekly" },
  { path: "/dich-vu/khuyen-mai", priority: "0.78", changefreq: "weekly" },
  { path: "/cong-trinh", priority: "0.85", changefreq: "weekly" },
  { path: "/cong-trinh/xay-nha", priority: "0.82", changefreq: "weekly" },
  { path: "/cong-trinh/sua-nha", priority: "0.80", changefreq: "weekly" },
  { path: "/cong-trinh/thiet-ke-nha", priority: "0.80", changefreq: "weekly" },
  { path: "/kinh-nghiem", priority: "0.85", changefreq: "weekly" },
  { path: "/kinh-nghiem/cam-nang", priority: "0.82", changefreq: "weekly" },
  { path: "/kinh-nghiem/luat-xay-dung", priority: "0.78", changefreq: "monthly" },
  { path: "/kinh-nghiem/phong-thuy", priority: "0.78", changefreq: "monthly" },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function loc(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function toLastmod(iso?: string | null): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toISOString().slice(0, 10);
}

const BUILD_DATE = new Date().toISOString().slice(0, 10);

type SitemapEntry = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
};

const urls: SitemapEntry[] = [
  ...STATIC_PATHS.map((entry) => ({
    ...entry,
    lastmod: BUILD_DATE,
  })),
  ...seedPosts.map((p) => ({
    path: `/bai-viet/${p.slug}`,
    priority: "0.80",
    changefreq: "monthly",
    lastmod: toLastmod(p.updatedAt ?? p.createdAt) ?? BUILD_DATE,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    const lastmodLine = u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : "";
    return `  <url>
    <loc>${escapeXml(loc(u.path))}</loc>${lastmodLine}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

const robots = `User-agent: *
Allow: /

Disallow: /admin
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(outDir, "sitemap.xml"), xml, "utf8");
writeFileSync(join(outDir, "robots.txt"), robots, "utf8");
console.log(`[sitemap] Wrote ${urls.length} URLs → ${outDir}/sitemap.xml`);

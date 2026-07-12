/**
 * Sinh sitemap.xml + robots.txt tĩnh — Google nhận XML, không phải HTML SPA.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "../../../lib/seed-content/src/index.ts";
import { getPostPublicPath } from "../src/lib/post-url.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, "..", "dist", "public");
const SITE_URL = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://www.kientrucsaokhue.com").replace(
  /\/$/,
  "",
);

const STATIC_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/bao-gia", priority: "0.92", changefreq: "weekly" },
  { path: "/thiet-ke", priority: "0.91", changefreq: "weekly" },
  { path: "/xay-moi", priority: "0.91", changefreq: "weekly" },
  { path: "/lien-he", priority: "0.88", changefreq: "monthly" },
  { path: "/bai-viet/ve-chung-toi", priority: "0.85", changefreq: "monthly" },
  { path: "/dich-vu", priority: "0.90", changefreq: "weekly" },
  { path: "/cong-trinh", priority: "0.85", changefreq: "weekly" },
  { path: "/tin-tuc", priority: "0.85", changefreq: "weekly" },
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
    path: getPostPublicPath(p),
    priority: "0.80",
    changefreq: "monthly",
    lastmod: toLastmod(p.updatedAt ?? p.createdAt) ?? BUILD_DATE,
  })),
].filter((entry, index, arr) => arr.findIndex((e) => e.path === entry.path) === index);

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

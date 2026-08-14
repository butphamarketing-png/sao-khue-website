/**
 * Sinh sitemap.xml + robots.txt tĩnh — Google nhận XML, không phải HTML SPA.
 */
import { writeFileSync, mkdirSync, unlinkSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts, isSitemapIndexablePost } from "../../../lib/seed-content/src/index.ts";
import { getPostPublicPath } from "../src/lib/post-url.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, "..", "dist", "public");
const SITE_URL = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://www.kientrucsaokhue.com").replace(
  /\/$/,
  "",
);

const STATIC_PATHS: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.00", changefreq: "weekly" },
  { path: "/bao-gia", priority: "0.95", changefreq: "weekly" },
  { path: "/thiet-ke", priority: "0.91", changefreq: "weekly" },
  { path: "/xay-moi", priority: "0.93", changefreq: "weekly" },
  { path: "/xay-nha", priority: "0.95", changefreq: "weekly" },
  { path: "/cai-tao-nha", priority: "0.95", changefreq: "weekly" },
  { path: "/lien-he", priority: "0.88", changefreq: "monthly" },
  { path: "/bai-viet/ve-chung-toi", priority: "0.88", changefreq: "monthly" },
  { path: "/dich-vu", priority: "0.90", changefreq: "weekly" },
  { path: "/dich-vu/xay-nha-tron-goi", priority: "0.93", changefreq: "weekly" },
  { path: "/cong-trinh", priority: "0.85", changefreq: "weekly" },
  { path: "/tin-tuc", priority: "0.85", changefreq: "weekly" },
];

function moneyPostPriority(slug: string, path: string): string {
  const s = `${slug} ${path}`.toLowerCase();
  if (
    /bao-gia-xay-nha-tron-goi|don-gia-xay-nha|chi-phi-xay-nha|xay-nha-gia-re|xay-nha-tphcm$|xay-nha-tron-goi-tphcm|cai-tao-nha-cu|thiet-ke-nha-pho-tphcm|cong-ty-xay-dung-nha-pho-uy-tin/.test(
      s,
    )
  ) {
    return "0.93";
  }
  if (/bao-gia|don-gia|chi-phi|tron-goi|cai-tao|thiet-ke-nha|xay-nha-2-tang|xay-nha-3-tang|gia-re|uy-tin/.test(s)) {
    return "0.88";
  }
  return "0.80";
}

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

mkdirSync(outDir, { recursive: true });

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
  ...seedPosts
    .filter((p) => isSitemapIndexablePost(p) && !p.noindex)
    .map((p) => {
    const path = getPostPublicPath(p);
    return {
      path,
      priority: moneyPostPriority(p.slug, path),
      changefreq: "monthly",
      lastmod: toLastmod(p.updatedAt ?? p.createdAt) ?? BUILD_DATE,
    };
  }),
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

// Không ghi sitemap.xml vào public/ — Vercel phục vụ file tĩnh trước rewrite,
// khiến CDN có thể cache bản factory cũ (~3000 URL -ngan). Sitemap chỉ qua /api.
writeFileSync(join(outDir, "robots.txt"), robots, "utf8");
console.log(`[sitemap] Wrote robots.txt (${urls.length} seed URLs for API fallback)`);

const apiPublic = join(scriptDir, "..", "..", "api-server", "public");
mkdirSync(apiPublic, { recursive: true });
writeFileSync(join(apiPublic, "sitemap.seed.xml"), xml, "utf8");
writeFileSync(join(apiPublic, "robots.txt"), robots, "utf8");
// Xóa bản tĩnh cũ nếu còn (tránh đè rewrite /sitemap.xml → API).
for (const dir of [outDir, apiPublic]) {
  const stale = join(dir, "sitemap.xml");
  if (existsSync(stale)) unlinkSync(stale);
}
console.log(`[sitemap] Wrote ${urls.length} URLs → ${apiPublic}/sitemap.seed.xml`);

if (process.env.AUTO_SUBMIT_INDEXING === "1" || process.env.AUTO_SUBMIT_INDEXING === "true") {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;
  const encoded = encodeURIComponent(sitemapUrl);
  for (const pingUrl of [
    `https://www.bing.com/ping?sitemap=${encoded}`,
    `https://www.google.com/ping?sitemap=${encoded}`,
  ]) {
    fetch(pingUrl)
      .then((r) => console.log(`[sitemap] Ping ${pingUrl.includes("bing") ? "Bing" : "Google"}: ${r.ok ? "OK" : r.status}`))
      .catch((err) => console.warn("[sitemap] Ping failed:", err instanceof Error ? err.message : err));
  }
}

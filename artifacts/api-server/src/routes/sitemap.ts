import { Router, type IRouter } from "express";
import { db, postsTable } from "@workspace/db";
import { desc } from "drizzle-orm";

const SITE_URL =
  (process.env.SITE_URL ?? "https://kientrucsaokhue.com").replace(/\/$/, "");

const STATIC_PATHS = [
  "/",
  "/gioi-thieu",
  "/gioi-thieu/so-do-to-chuc",
  "/gioi-thieu/ve-chung-toi",
  "/gioi-thieu/hoat-dong",
  "/gioi-thieu/tuyen-dung",
  "/dich-vu",
  "/dich-vu/xay-nha-tron-goi",
  "/dich-vu/sua-chua-nha",
  "/dich-vu/xay-dung-phan-tho",
  "/dich-vu/thiet-ke-nha",
  "/dich-vu/nang-tang-nha-pho",
  "/dich-vu/hoan-thien-nha",
  "/dich-vu/khuyen-mai",
  "/cong-trinh",
  "/cong-trinh/xay-nha",
  "/cong-trinh/sua-nha",
  "/cong-trinh/thiet-ke-nha",
  "/bao-gia",
  "/kinh-nghiem",
  "/kinh-nghiem/cam-nang",
  "/kinh-nghiem/luat-xay-dung",
  "/kinh-nghiem/phong-thuy",
  "/lien-he",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const router: IRouter = Router();

router.get("/sitemap.xml", async (_req, res) => {
  try {
    const posts = await db
      .select({ slug: postsTable.slug, updatedAt: postsTable.updatedAt })
      .from(postsTable)
      .orderBy(desc(postsTable.updatedAt));

    const urls = [
      ...STATIC_PATHS.map((p) => ({ loc: `${SITE_URL}${p}`, lastmod: null as string | null })),
      ...posts.map((p) => ({
        loc: `${SITE_URL}/bai-viet/${p.slug}`,
        lastmod: p.updatedAt.toISOString().split("T")[0],
      })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

    res.set("Content-Type", "application/xml; charset=utf-8");
    res.send(body);
  } catch {
    res.status(503).send("Sitemap unavailable");
  }
});

export default router;

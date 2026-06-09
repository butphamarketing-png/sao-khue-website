import { Router, type IRouter } from "express";
import { db, postsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { getPostPublicPath, seedPosts } from "@workspace/seed-content";

const SITE_URL =
  (process.env.SITE_URL ?? "https://www.kientrucsaokhue.com").replace(/\/$/, "");
const SITE_NAME = "Kiến Trúc Sao Khuê";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

type FeedPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  updatedAt: Date | string;
};

const router: IRouter = Router();

router.get("/feed.xml", async (_req, res) => {
  let posts: FeedPost[] = [];
  try {
    posts = await db
      .select({
        slug: postsTable.slug,
        category: postsTable.category,
        title: postsTable.title,
        excerpt: postsTable.excerpt,
        content: postsTable.content,
        updatedAt: postsTable.updatedAt,
      })
      .from(postsTable)
      .orderBy(desc(postsTable.updatedAt))
      .limit(30);
  } catch {
    posts = seedPosts.slice(0, 30).map((p) => ({
      slug: p.slug,
      category: p.category,
      title: p.title,
      excerpt: p.excerpt,
      content: p.content,
      updatedAt: "2026-01-15",
    }));
  }

  const items = posts
    .map((p) => {
      const link = `${SITE_URL}${getPostPublicPath(p)}`;
      const pubDate =
        p.updatedAt instanceof Date
          ? p.updatedAt.toUTCString()
          : new Date(p.updatedAt).toUTCString();
      const desc = escapeXml(p.excerpt || stripHtml(p.content).slice(0, 280));
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${desc}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <description>Tin tức, kinh nghiệm xây dựng và dịch vụ từ ${escapeXml(SITE_NAME)}</description>
    <language>vi-vn</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  res.set("Content-Type", "application/rss+xml; charset=utf-8");
  res.send(xml);
});

export default router;

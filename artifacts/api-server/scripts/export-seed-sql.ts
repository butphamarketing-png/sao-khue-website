/**
 * Generates supabase/seed-posts.sql from @workspace/seed-content
 * Run: pnpm --filter @workspace/api-server run export-seed-sql
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "@workspace/seed-content";

function dollarQuote(text: string, tag = "body"): string {
  let t = tag;
  let n = 0;
  while (text.includes(`$${t}$`)) {
    t = `${tag}${n++}`;
  }
  return `$${t}$${text}$${t}$`;
}

function lines(parts: string[]): string {
  return parts.filter(Boolean).join("\n");
}

const header = `-- Sao Khuê — seed bài viết (18 posts)
-- Chạy trong Supabase: SQL Editor → New query → Paste → Run
-- Cập nhật theo slug nếu bài đã tồn tại (ON CONFLICT).

BEGIN;

`;

const footer = `
COMMIT;

-- Kiểm tra:
-- SELECT slug, category, left(title, 50) AS title FROM posts ORDER BY category, slug;
`;

const upserts = seedPosts.map((p) => {
  const excerpt = dollarQuote(p.excerpt, "excerpt");
  const content = dollarQuote(p.content, "content");
  const metaTitle = dollarQuote(p.metaTitle ?? "", "mt");
  const metaDesc = dollarQuote(p.metaDescription ?? "", "md");
  const metaKw = dollarQuote(p.metaKeywords ?? "", "mk");

  return lines([
    `INSERT INTO posts (`,
    `  slug, title, category, excerpt, content, image_url,`,
    `  meta_title, meta_description, meta_keywords, created_at, updated_at`,
    `) VALUES (`,
    `  ${dollarQuote(p.slug, "slug")},`,
    `  ${dollarQuote(p.title, "title")},`,
    `  ${dollarQuote(p.category, "cat")},`,
    `  ${excerpt},`,
    `  ${content},`,
    `  ${dollarQuote(p.imageUrl, "img")},`,
    `  ${metaTitle},`,
    `  ${metaDesc},`,
    `  ${metaKw},`,
    `  now(),`,
    `  now()`,
    `)`,
    `ON CONFLICT (slug) DO UPDATE SET`,
    `  title = EXCLUDED.title,`,
    `  category = EXCLUDED.category,`,
    `  excerpt = EXCLUDED.excerpt,`,
    `  content = EXCLUDED.content,`,
    `  image_url = EXCLUDED.image_url,`,
    `  meta_title = EXCLUDED.meta_title,`,
    `  meta_description = EXCLUDED.meta_description,`,
    `  meta_keywords = EXCLUDED.meta_keywords,`,
    `  updated_at = now();`,
    ``,
  ]);
});

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, "..", "..", "..", "supabase");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "seed-posts.sql");
const sql = header + upserts.join("\n") + footer;
writeFileSync(outPath, sql, "utf8");
console.log(`Wrote ${seedPosts.length} posts → ${outPath}`);
console.log(`Size: ${(sql.length / 1024).toFixed(1)} KB`);

/**
 * Export one post to supabase/seed-post-{slug}.sql (UTF-8).
 * Run: pnpm --filter @workspace/api-server exec tsx scripts/export-post-sql.ts xay-nha-tron-goi-binh-duong
 */
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts, type SeedPost } from "@workspace/seed-content";

function dollarQuote(text: string, tag = "body"): string {
  let t = tag;
  let n = 0;
  while (text.includes(`$${t}$`)) {
    t = `${tag}${n++}`;
  }
  return `$${t}$${text}$${t}$`;
}

function buildUpsert(p: SeedPost): string {
  return [
    `INSERT INTO posts (`,
    `  slug, title, category, excerpt, content, image_url, image_alt, image_caption,`,
    `  meta_title, meta_description, meta_keywords, created_at, updated_at`,
    `) VALUES (`,
    `  ${dollarQuote(p.slug, "slug")},`,
    `  ${dollarQuote(p.title, "title")},`,
    `  ${dollarQuote(p.category, "cat")},`,
    `  ${dollarQuote(p.excerpt, "excerpt")},`,
    `  ${dollarQuote(p.content, "content")},`,
    `  ${dollarQuote(p.imageUrl, "img")},`,
    `  ${dollarQuote(p.imageAlt ?? "", "alt")},`,
    `  ${dollarQuote(p.imageCaption ?? p.imageAlt ?? "", "cap")},`,
    `  ${dollarQuote(p.metaTitle ?? "", "mt")},`,
    `  ${dollarQuote(p.metaDescription ?? "", "md")},`,
    `  ${dollarQuote(p.metaKeywords ?? "", "mk")},`,
    `  now(),`,
    `  now()`,
    `)`,
    `ON CONFLICT (slug) DO UPDATE SET`,
    `  title = EXCLUDED.title,`,
    `  category = EXCLUDED.category,`,
    `  excerpt = EXCLUDED.excerpt,`,
    `  content = EXCLUDED.content,`,
    `  image_url = EXCLUDED.image_url,`,
    `  image_alt = EXCLUDED.image_alt,`,
    `  image_caption = EXCLUDED.image_caption,`,
    `  meta_title = EXCLUDED.meta_title,`,
    `  meta_description = EXCLUDED.meta_description,`,
    `  meta_keywords = EXCLUDED.meta_keywords,`,
    `  updated_at = now();`,
  ].join("\n");
}

const slug = process.argv[2]?.trim();
if (!slug) {
  console.error("Usage: tsx scripts/export-post-sql.ts <slug>");
  process.exit(1);
}

const post = seedPosts.find((p) => p.slug === slug);
if (!post) {
  console.error(`Unknown slug: ${slug}`);
  process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outPath = join(scriptDir, "..", "..", "..", "supabase", `seed-post-${slug}.sql`);
const sql = [
  `-- Sao Khuê — ${post.title}`,
  `-- UTF-8 — Supabase SQL Editor → paste TOÀN BỘ file → Run`,
  `-- Kiểm tra: SELECT slug, title FROM posts WHERE slug = '${slug}';`,
  ``,
  `BEGIN;`,
  ``,
  buildUpsert(post),
  ``,
  `COMMIT;`,
  ``,
].join("\n");

writeFileSync(outPath, sql, "utf8");
console.log(`Wrote ${outPath}`);

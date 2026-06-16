/**
 * Chia seed-posts.sql thành nhiều file nhỏ (chạy được trong Supabase SQL Editor).
 * Run: pnpm --filter @workspace/api-server run export-seed-sql-batches
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "@workspace/seed-content";

const BATCH_SIZE = 10;

function dollarQuote(text: string, tag = "body"): string {
  let t = tag;
  let n = 0;
  while (text.includes(`$${t}$`)) {
    t = `${tag}${n++}`;
  }
  return `$${t}$${text}$${t}$`;
}

function upsertSql(p: (typeof seedPosts)[number]): string {
  const excerpt = dollarQuote(p.excerpt, "excerpt");
  const content = dollarQuote(p.content, "content");
  const metaTitle = dollarQuote(p.metaTitle ?? "", "mt");
  const metaDesc = dollarQuote(p.metaDescription ?? "", "md");
  const metaKw = dollarQuote(p.metaKeywords ?? "", "mk");

  return [
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
  ].join("\n");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outDir = join(scriptDir, "..", "..", "..", "supabase", "seed-batches");
mkdirSync(outDir, { recursive: true });

const batches: string[] = [];
for (let i = 0; i < seedPosts.length; i += BATCH_SIZE) {
  batches.push(seedPosts.slice(i, i + BATCH_SIZE));
}

const indexLines = [
  `-- Sao Khuê — seed bài viết (chia ${batches.length} batch × tối đa ${BATCH_SIZE} bài)`,
  `-- Chạy lần lượt trong Supabase SQL Editor: seed-batches/seed-posts-01.sql … seed-posts-${String(batches.length).padStart(2, "0")}.sql`,
  ``,
];

batches.forEach((chunk, idx) => {
  const n = String(idx + 1).padStart(2, "0");
  const from = idx * BATCH_SIZE + 1;
  const to = idx * BATCH_SIZE + chunk.length;
  const header = `-- Batch ${n}/${String(batches.length).padStart(2, "0")} — bài ${from}–${to} / ${seedPosts.length}
-- Supabase SQL Editor: New query → Paste → Run (từng file một)

BEGIN;

`;
  const footer = `
COMMIT;
`;
  const sql = header + chunk.map(upsertSql).join("\n\n") + footer;
  const outPath = join(outDir, `seed-posts-${n}.sql`);
  writeFileSync(outPath, sql, "utf8");
  indexLines.push(`-- ${n}. seed-posts-${n}.sql — ${from}–${to} (${(sql.length / 1024).toFixed(0)} KB)`);
  console.log(`Wrote ${outPath} (${chunk.length} posts, ${(sql.length / 1024).toFixed(1)} KB)`);
});

writeFileSync(join(outDir, "README.txt"), indexLines.join("\n") + "\n", "utf8");
console.log(`\nTotal: ${seedPosts.length} posts in ${batches.length} batches → ${outDir}`);

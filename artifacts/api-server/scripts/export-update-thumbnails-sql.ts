/**
 * Chỉ cập nhật image_url — file nhỏ, chạy được Supabase SQL Editor.
 * Run: pnpm --filter @workspace/api-server run export-update-thumbnails-sql
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "@workspace/seed-content";

function dollarQuote(text: string, tag = "v"): string {
  let t = tag;
  let n = 0;
  while (text.includes(`$${t}$`)) t = `${tag}${n++}`;
  return `$${t}$${text}$${t}$`;
}

const lines = [
  `-- Sao Khuê — cập nhật thumbnail (image_url) cho ${seedPosts.length} bài`,
  `-- Chạy trong Supabase SQL Editor (file nhỏ, không cần paste seed-posts.sql)`,
  ``,
  `BEGIN;`,
  ``,
];

for (const p of seedPosts) {
  lines.push(
    `UPDATE posts SET image_url = ${dollarQuote(p.imageUrl, "img")}, updated_at = now() WHERE slug = ${dollarQuote(p.slug, "slug")};`,
  );
}

lines.push(``, `COMMIT;`, ``);

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "supabase");
const outPath = join(outDir, "update-post-thumbnails.sql");
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Wrote ${seedPosts.length} updates → ${outPath}`);
console.log(`Size: ${(lines.join("\n").length / 1024).toFixed(1)} KB`);

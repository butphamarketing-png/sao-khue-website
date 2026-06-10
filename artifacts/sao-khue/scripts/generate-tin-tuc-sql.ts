/**
 * Sinh SQL seed cho bài tin tức mới (chạy thủ công trên Supabase).
 * Usage: pnpm exec tsx --tsconfig tsconfig.prerender.json scripts/generate-tin-tuc-sql.ts
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { TIN_TUC_SEED_ENTRIES } from "../../../lib/seed-content/src/tin-tuc-seed.ts";
import { prepareArticleHtml } from "../../../lib/seed-content/src/image-seo.ts";

const EXISTING = new Set([
  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "thiet-ke-nha-pho-hien-dai-tphcm",
  "mau-nha-pho-2-tang-binh-duong",
  "thiet-ke-thi-cong-nha-pho-dong-nai",
  "cam-nang-xay-nha-2026",
  "luat-xay-dung-moi-nhat",
  "phong-thuy-nha-o",
]);

function escSql(value: string): string {
  return value.replace(/'/g, "''");
}

const rows = TIN_TUC_SEED_ENTRIES.filter((e) => !EXISTING.has(e.slug));

const statements = rows.map((e) => {
  const a = e.article;
  const { html } = prepareArticleHtml(a.content, {
    imageUrl: e.image,
    imageAlt: a.imageAlt,
    imageCaption: a.imageCaption,
  });
  return `-- ${a.title}
INSERT INTO posts (slug, title, category, excerpt, content, image_url, image_alt, image_caption, meta_title, meta_description, meta_keywords, published, created_at, updated_at)
VALUES (
  '${escSql(e.slug)}',
  '${escSql(a.title)}',
  'tin-tuc',
  '${escSql(a.excerpt)}',
  '${escSql(html)}',
  '${escSql(e.image)}',
  '${escSql(a.imageAlt ?? "")}',
  '${escSql(a.imageCaption ?? a.imageAlt ?? "")}',
  '${escSql(a.metaTitle)}',
  '${escSql(a.metaDescription)}',
  '${escSql(a.metaKeywords)}',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  image_alt = EXCLUDED.image_alt,
  image_caption = EXCLUDED.image_caption,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = NOW();`;
});

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "supabase");
const outPath = join(outDir, "seed-posts-tin-tuc-batch.sql");
writeFileSync(
  outPath,
  `-- Seed ${rows.length} bài tin tức (lịch #8–#30)\n-- Chạy sau add-posts-image-alt.sql và add-posts-image-caption.sql\n\n${statements.join("\n\n")}\n`,
  "utf8",
);
console.log(`[sql] Wrote ${rows.length} posts → ${outPath}`);

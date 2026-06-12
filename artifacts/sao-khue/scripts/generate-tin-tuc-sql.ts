/**
 * Sinh SQL seed cho bài tin tức mới (chạy thủ công trên Supabase).
 * Usage: pnpm exec tsx --tsconfig tsconfig.prerender.json scripts/generate-tin-tuc-sql.ts
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { TIN_TUC_SEED_ENTRIES } from "../../../lib/seed-content/src/tin-tuc-seed.ts";
import { stripFaqSectionFromHtml } from "../../../lib/seed-content/src/article-seo-blocks.ts";
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

/** Dollar-quote an toàn cho nội dung HTML dài. */
function dollarTag(value: string, prefix: string): string {
  let tag = prefix;
  let n = 0;
  while (value.includes(`$${tag}$`)) {
    tag = `${prefix}${++n}`;
  }
  return `$${tag}$${value}$${tag}$`;
}

const rows = TIN_TUC_SEED_ENTRIES.filter((e) => !EXISTING.has(e.slug));

const statements = rows.map((e) => {
  const a = e.article;
  const { html } = prepareArticleHtml(stripFaqSectionFromHtml(a.content), {
    imageUrl: e.image,
    imageAlt: a.imageAlt,
    imageCaption: a.imageCaption,
  });
  return `-- ${a.title}
INSERT INTO posts (
  slug, title, category, excerpt, content, image_url, image_alt, image_caption,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  ${dollarTag(e.slug, "slug")},
  ${dollarTag(a.title, "title")},
  ${dollarTag("tin-tuc", "cat")},
  ${dollarTag(a.excerpt, "excerpt")},
  ${dollarTag(html, "content")},
  ${dollarTag(e.image, "img")},
  ${dollarTag(a.imageAlt ?? "", "alt")},
  ${dollarTag(a.imageCaption ?? a.imageAlt ?? "", "cap")},
  ${dollarTag(a.metaTitle, "mtitle")},
  ${dollarTag(a.metaDescription, "mdesc")},
  ${dollarTag(a.metaKeywords, "mkey")},
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
const body = [
  `-- Seed ${rows.length} bài tin tức (lịch #8–#30)`,
  `-- Chạy sau add-posts-image-alt.sql và add-posts-image-caption.sql`,
  `-- Schema posts KHÔNG có cột published`,
  "",
  "BEGIN;",
  "",
  ...statements,
  "",
  "COMMIT;",
  "",
].join("\n");

writeFileSync(outPath, body, "utf8");
console.log(`[sql] Wrote ${rows.length} posts → ${outPath}`);

import { SEO_DESC_MAX, SEO_TITLE_MAX, truncateMeta } from "@/lib/seo";
import { buildCtrMetaDescription, buildCtrMetaTitle, getPrimaryFocusKeyword } from "@workspace/seed-content";

const CATEGORY_KEYWORD: Record<string, string[]> = {
  "dich-vu": ["xây dựng", "thi công", "báo giá xây nhà", "tphcm"],
  "gioi-thieu": ["kiến trúc sao khuê", "công ty xây dựng"],
  "cong-trinh": ["công trình", "nhà phố", "biệt thự", "tphcm"],
  "tin-tuc": ["tin tức xây dựng", "cẩm nang xây nhà", "báo giá xây nhà"],
  "kinh-nghiem": ["tin tức xây dựng", "cẩm nang xây nhà"],
};

export function plainTextFromHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildAutoMetaTitle(title: string, brand: string, slug = ""): string {
  const t = title.trim();
  if (!t) return "";
  if (t.includes(brand)) return truncateMeta(t, SEO_TITLE_MAX);
  const ctr = buildCtrMetaTitle(t, { slug });
  if (ctr) return ctr;
  return truncateMeta(`${t} | ${brand}`, SEO_TITLE_MAX);
}

export function buildAutoMetaDescription(
  excerpt: string,
  contentHtml: string,
  slug = "",
  metaKeywords = "",
): string {
  const primary = getPrimaryFocusKeyword(metaKeywords);
  if (primary) {
    const ctr = buildCtrMetaDescription(primary, { slug });
    if (ctr) return ctr;
  }
  const plain = excerpt.trim() || plainTextFromHtml(contentHtml);
  if (!plain) return "";
  return truncateMeta(plain, SEO_DESC_MAX);
}

export function buildAutoExcerpt(contentHtml: string, maxLen = 180): string {
  const plain = plainTextFromHtml(contentHtml);
  if (!plain) return "";
  return truncateMeta(plain, maxLen).replace(/…$/, "");
}

/**
 * Từ khóa SEO — cụm đầu = focus keyword (Rank Math).
 * Lấy từ slug / menu con, không nhét nguyên tiêu đề bài vào từ khóa chính.
 */
export function buildAutoMetaKeywords(
  slug: string,
  category: string,
  subCategoryLabel?: string,
): string {
  const ordered: string[] = [];
  const seen = new Set<string>();
  const push = (s: string) => {
    const k = s.trim().toLowerCase().replace(/\s+/g, " ");
    if (k.length < 2 || seen.has(k)) return;
    seen.add(k);
    ordered.push(k);
  };

  const fromSlug = slug.replace(/-/g, " ").trim();
  if (fromSlug) push(fromSlug);
  if (subCategoryLabel) push(subCategoryLabel);
  for (const k of CATEGORY_KEYWORD[category] ?? []) push(k);
  push("tp.hcm");

  return ordered.slice(0, 8).join(", ");
}

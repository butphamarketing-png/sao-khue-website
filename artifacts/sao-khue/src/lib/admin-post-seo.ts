import { SEO_DESC_MAX, SEO_TITLE_MAX, truncateMeta } from "@/lib/seo";

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

export function buildAutoMetaTitle(title: string, brand: string): string {
  const t = title.trim();
  if (!t) return "";
  const withBrand = t.includes(brand) ? t : `${t} | ${brand}`;
  return truncateMeta(withBrand, SEO_TITLE_MAX);
}

export function buildAutoMetaDescription(excerpt: string, contentHtml: string): string {
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

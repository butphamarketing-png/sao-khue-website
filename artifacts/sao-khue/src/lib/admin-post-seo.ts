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

export function buildAutoMetaKeywords(
  title: string,
  category: string,
  subCategoryLabel?: string,
): string {
  const tokens = new Set<string>();
  const add = (s: string) => {
    s.split(/[,;|]/g)
      .map((x) => x.trim().toLowerCase())
      .filter((x) => x.length > 1)
      .forEach((x) => tokens.add(x));
  };

  add(title);
  if (subCategoryLabel) add(subCategoryLabel);
  (CATEGORY_KEYWORD[category] ?? []).forEach((k) => tokens.add(k));
  tokens.add("tp.hcm");
  tokens.add("sao khuê");

  return [...tokens].slice(0, 8).join(", ");
}

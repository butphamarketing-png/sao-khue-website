import type { SeedPost } from "./index";

const LEGACY_IMAGE_RE =
  /unsplash\.com|images\.unsplash|\/images\/project_[0-9]|\/images\/news_[0-9]|\/images\/service-[0-9]|\/images\/interior_/i;

const LEGACY_CONTENT_RE =
  /unsplash\.com|images\.unsplash|\/images\/project_[23]\.jpg/i;

/** URL ảnh placeholder / stock — cần thay bằng ảnh công trình Sao Khuê. */
export function isLegacyPostImageUrl(url: string | null | undefined): boolean {
  const u = (url ?? "").trim();
  if (!u) return true;
  if (LEGACY_IMAGE_RE.test(u)) return true;
  if (u.startsWith("http") && !u.includes("/images/sao-khue/")) return true;
  return false;
}

export function isLegacyPostContent(html: string | null | undefined): boolean {
  const h = (html ?? "").trim();
  if (!h) return true;
  return LEGACY_CONTENT_RE.test(h);
}

type PostRow = {
  slug: string;
  imageUrl?: string | null;
  imageAlt?: string | null;
  imageCaption?: string | null;
  content?: string | null;
  excerpt?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
};

/** Gộp ảnh/nội dung từ seed khi DB còn URL hoặc HTML cũ. */
export function mergePostMedia<T extends PostRow>(row: T, seed?: SeedPost): T {
  if (!seed) return row;

  const imageUrl = isLegacyPostImageUrl(row.imageUrl)
    ? seed.imageUrl
    : String(row.imageUrl ?? "").trim() || seed.imageUrl;
  const content = isLegacyPostContent(row.content) ? seed.content : (row.content ?? seed.content);

  return {
    ...row,
    imageUrl,
    content,
    excerpt: String(row.excerpt ?? "").trim() || seed.excerpt,
    metaTitle: String(row.metaTitle ?? "").trim() || seed.metaTitle || "",
    metaDescription: String(row.metaDescription ?? "").trim() || seed.metaDescription || "",
    metaKeywords: String(row.metaKeywords ?? "").trim() || seed.metaKeywords || "",
    imageAlt: String(row.imageAlt ?? "").trim() || seed.imageAlt,
    imageCaption:
      String(row.imageCaption ?? "").trim() || seed.imageCaption || seed.imageAlt,
  };
}

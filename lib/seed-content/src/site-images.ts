/** Ảnh công trình Sao Khuê — thư mục public/images/sao-khue/ (sk-01 … sk-53). */
export const SAO_KHUE_IMAGE_COUNT = 53;
export const SAO_KHUE_IMAGE_DIR = "/images/sao-khue";

const featuredIndexBySlug = new Map<string, number>();
let nextFeaturedIndex = 1;

export function siteImage(index: number): string {
  const n = ((Math.floor(index) - 1 + SAO_KHUE_IMAGE_COUNT * 1000) % SAO_KHUE_IMAGE_COUNT) + 1;
  return `${SAO_KHUE_IMAGE_DIR}/sk-${String(n).padStart(2, "0")}.jpg`;
}

/** Ảnh đại diện — mỗi slug một ảnh riêng (theo thứ tự khai báo trong seed). */
export function featuredImageForSlug(slug: string): string {
  let i = featuredIndexBySlug.get(slug);
  if (i === undefined) {
    i = nextFeaturedIndex++;
    featuredIndexBySlug.set(slug, i);
  }
  return siteImage(i);
}

/** Ảnh trong nội dung bài (slot 1, 2, …). */
export function slugImage(slug: string, slot = 0): string {
  let h = slot * 997;
  for (let j = 0; j < slug.length; j++) h = (h * 31 + slug.charCodeAt(j)) >>> 0;
  return siteImage((h % SAO_KHUE_IMAGE_COUNT) + 1);
}

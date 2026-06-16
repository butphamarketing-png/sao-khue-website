/** Ảnh công trình Sao Khuê — thư mục public/images/sao-khue/ (sk-01 … sk-53). */
export const SAO_KHUE_IMAGE_COUNT = 53;
export const SAO_KHUE_IMAGE_DIR = "/images/sao-khue";

export function siteImage(index: number): string {
  const n = ((Math.floor(index) - 1 + SAO_KHUE_IMAGE_COUNT * 1000) % SAO_KHUE_IMAGE_COUNT) + 1;
  return `${SAO_KHUE_IMAGE_DIR}/sk-${String(n).padStart(2, "0")}.jpg`;
}

/** Chọn ảnh ổn định theo slug bài viết (slot 0 = featured, 1–2 = ảnh trong bài). */
export function slugImage(slug: string, slot = 0): string {
  let h = slot * 997;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return siteImage((h % SAO_KHUE_IMAGE_COUNT) + 1);
}

/** Ảnh công trình Sao Khuê — thư mục public/images/sao-khue/ (sk-01 … sk-53). */
export const SAO_KHUE_IMAGE_COUNT = 53;
export const SAO_KHUE_IMAGE_DIR = "/images/sao-khue";

/** Mẫu nhà 2 tầng — thư mục public/images/nha-2-tang/ (nha-2-tang-01 … 15). */
export const NHA_2_TANG_IMAGE_COUNT = 15;
export const NHA_2_TANG_IMAGE_DIR = "/images/nha-2-tang";

/** Mẫu nhà cấp 4 — thư mục public/images/nha-cap-4/ (nha-cap-4-01 … 09). */
export const NHA_CAP_4_IMAGE_COUNT = 9;
export const NHA_CAP_4_IMAGE_DIR = "/images/nha-cap-4";

/** Hình cải tạo / sửa chữa — thư mục public/images/cai-tao/ (cai-tao-01 … 13). */
export const CAI_TAO_IMAGE_COUNT = 13;
export const CAI_TAO_IMAGE_DIR = "/images/cai-tao";

/** Hình xây nhà / thi công — thư mục public/images/xay-nha/ (xay-nha-01 … 04). */
export const XAY_NHA_IMAGE_COUNT = 4;
export const XAY_NHA_IMAGE_DIR = "/images/xay-nha";

/** Ảnh render/banner đẹp — chỉ dùng cho thumbnail (featuredImageForSlug). */
const FEATURED_NHA_2_TANG = [1, 2, 3, 4, 6, 9, 11, 13] as const;
const FEATURED_NHA_CAP_4 = [1, 2, 3, 5, 7, 8] as const;
const FEATURED_CAI_TAO = [1, 2, 3, 5, 10, 11, 12] as const;
const FEATURED_XAY_NHA = [1, 2, 3, 4] as const;
/** Banner quảng cáo sk-35 … sk-52 — tránh ảnh thi công thô / lễ động thổ. */
const FEATURED_SK = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 48, 52] as const;

function isNha2TangSlug(slug: string): boolean {
  return slug.includes("2-tang");
}

function isNhaCap4Slug(slug: string): boolean {
  return slug.includes("cap-4");
}

/** Bài cải tạo, sửa chữa, nâng cấp, tái thiết nhà. */
function isCaiTaoSlug(slug: string): boolean {
  return (
    slug.includes("cai-tao") ||
    slug.includes("sua-chua") ||
    slug.includes("lam-moi") ||
    slug.includes("nang-cap") ||
    slug.includes("tai-thiet") ||
    slug.startsWith("sua-nha")
  );
}

/** Bài xây dựng, thi công, báo giá xây nhà trọn gói. */
function isXayNhaSlug(slug: string): boolean {
  return (
    slug.includes("xay-nha") ||
    slug.includes("xay-dung") ||
    slug.includes("thi-cong") ||
    slug.includes("don-gia-xay") ||
    slug.includes("chi-phi-xay") ||
    slug.includes("bao-gia-xay") ||
    slug.includes("phan-tho") ||
    slug.includes("doi-tho") ||
    slug.includes("nha-thau") ||
    slug.includes("cong-ty-xay") ||
    (slug.includes("tron-goi") && !slug.includes("sua-chua") && !slug.includes("cai-tao"))
  );
}

function hashSlug(slug: string, slot = 0): number {
  let h = slot * 997;
  for (let j = 0; j < slug.length; j++) h = (h * 31 + slug.charCodeAt(j)) >>> 0;
  return h;
}

function pickFeaturedIndex(pool: readonly number[], slug: string): number {
  return pool[hashSlug(slug) % pool.length]!;
}

export function nha2TangImage(index: number): string {
  const n = ((Math.floor(index) - 1 + NHA_2_TANG_IMAGE_COUNT * 1000) % NHA_2_TANG_IMAGE_COUNT) + 1;
  return `${NHA_2_TANG_IMAGE_DIR}/nha-2-tang-${String(n).padStart(2, "0")}.jpg`;
}

export function nhaCap4Image(index: number): string {
  const n = ((Math.floor(index) - 1 + NHA_CAP_4_IMAGE_COUNT * 1000) % NHA_CAP_4_IMAGE_COUNT) + 1;
  return `${NHA_CAP_4_IMAGE_DIR}/nha-cap-4-${String(n).padStart(2, "0")}.jpg`;
}

export function caiTaoImage(index: number): string {
  const n = ((Math.floor(index) - 1 + CAI_TAO_IMAGE_COUNT * 1000) % CAI_TAO_IMAGE_COUNT) + 1;
  return `${CAI_TAO_IMAGE_DIR}/cai-tao-${String(n).padStart(2, "0")}.jpg`;
}

export function xayNhaImage(index: number): string {
  const n = ((Math.floor(index) - 1 + XAY_NHA_IMAGE_COUNT * 1000) % XAY_NHA_IMAGE_COUNT) + 1;
  return `${XAY_NHA_IMAGE_DIR}/xay-nha-${String(n).padStart(2, "0")}.jpg`;
}

export function siteImage(index: number): string {
  const n = ((Math.floor(index) - 1 + SAO_KHUE_IMAGE_COUNT * 1000) % SAO_KHUE_IMAGE_COUNT) + 1;
  return `${SAO_KHUE_IMAGE_DIR}/sk-${String(n).padStart(2, "0")}.jpg`;
}

/** Ảnh đại diện — chọn từ pool render/banner đẹp, mỗi slug một ảnh ổn định. */
export function featuredImageForSlug(slug: string): string {
  if (isCaiTaoSlug(slug)) {
    return caiTaoImage(pickFeaturedIndex(FEATURED_CAI_TAO, slug));
  }
  if (isNhaCap4Slug(slug)) {
    return nhaCap4Image(pickFeaturedIndex(FEATURED_NHA_CAP_4, slug));
  }
  if (isXayNhaSlug(slug)) {
    return xayNhaImage(pickFeaturedIndex(FEATURED_XAY_NHA, slug));
  }
  if (isNha2TangSlug(slug)) {
    return nha2TangImage(pickFeaturedIndex(FEATURED_NHA_2_TANG, slug));
  }
  return siteImage(pickFeaturedIndex(FEATURED_SK, slug));
}

/** Ảnh trong nội dung bài (slot 1, 2, …). */
export function slugImage(slug: string, slot = 0): string {
  if (isCaiTaoSlug(slug)) {
    return caiTaoImage((hashSlug(slug, slot) % CAI_TAO_IMAGE_COUNT) + 1);
  }
  if (isNhaCap4Slug(slug)) {
    return nhaCap4Image((hashSlug(slug, slot) % NHA_CAP_4_IMAGE_COUNT) + 1);
  }
  if (isXayNhaSlug(slug)) {
    return xayNhaImage((hashSlug(slug, slot) % XAY_NHA_IMAGE_COUNT) + 1);
  }
  if (isNha2TangSlug(slug)) {
    return nha2TangImage((hashSlug(slug, slot) % NHA_2_TANG_IMAGE_COUNT) + 1);
  }
  return siteImage((hashSlug(slug, slot) % SAO_KHUE_IMAGE_COUNT) + 1);
}

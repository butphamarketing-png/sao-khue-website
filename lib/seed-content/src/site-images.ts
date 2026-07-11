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

/** Ảnh render/banner đẹp — chỉ dùng cho thumbnail (featuredImageForSlug). Không chèn logo/icon. */
const FEATURED_NHA_2_TANG = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] as const;
const FEATURED_NHA_CAP_4 = [1, 2, 3, 5, 6, 7, 8, 9] as const;
const FEATURED_CAI_TAO = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const;
/** Banner quảng cáo — tránh ảnh thi công thô / lễ động thổ (sk-01 … sk-34). */
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

function mapIndices(count: number, fn: (index: number) => string): string[] {
  return Array.from({ length: count }, (_, i) => fn(i + 1));
}

function mapFeatured(indices: readonly number[], fn: (index: number) => string): string[] {
  return indices.map((i) => fn(i));
}

function uniqueUrls(urls: readonly string[]): readonly string[] {
  return [...new Set(urls)];
}

function buildThumbPool(...groups: readonly string[][]): readonly string[] {
  return uniqueUrls(groups.flat());
}

function pickFromUrlPool(pool: readonly string[], slug: string): string {
  if (pool.length === 0) return `${SAO_KHUE_IMAGE_DIR}/sk-35.jpg`;
  const h = hashSlug(slug);
  const h2 = hashSlug(slug, 1);
  const idx = ((h ^ (h2 * 2654435761)) >>> 0) % pool.length;
  return pool[idx]!;
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

/** Pool thumbnail — gộp nhiều folder render/banner để giảm trùng ảnh giữa các bài. */
const THUMB_POOL_XAY_NHA = buildThumbPool(
  mapIndices(XAY_NHA_IMAGE_COUNT, xayNhaImage),
  mapFeatured(FEATURED_NHA_2_TANG, nha2TangImage),
  mapFeatured(FEATURED_SK, siteImage),
);

const THUMB_POOL_CAI_TAO = buildThumbPool(mapFeatured(FEATURED_CAI_TAO, caiTaoImage));

const THUMB_POOL_NHA_CAP_4 = buildThumbPool(
  mapFeatured(FEATURED_NHA_CAP_4, nhaCap4Image),
  mapFeatured(FEATURED_NHA_2_TANG, nha2TangImage),
);

const THUMB_POOL_NHA_2_TANG = buildThumbPool(
  mapFeatured(FEATURED_NHA_2_TANG, nha2TangImage),
  mapIndices(XAY_NHA_IMAGE_COUNT, xayNhaImage),
  mapFeatured(FEATURED_SK, siteImage),
);

const THUMB_POOL_GENERAL = buildThumbPool(
  mapFeatured(FEATURED_SK, siteImage),
  mapFeatured(FEATURED_NHA_2_TANG, nha2TangImage),
  mapFeatured(FEATURED_NHA_CAP_4, nhaCap4Image),
  mapIndices(XAY_NHA_IMAGE_COUNT, xayNhaImage),
  mapFeatured(FEATURED_CAI_TAO, caiTaoImage),
);

/** Thumbnail tùy chỉnh — ưu tiên hiển thị trang chủ / OG. */
const CUSTOM_FEATURED_IMAGES: Record<string, string> = {
  "xay-nha-moi": "/images/articles/xay-nha-moi.jpg",
  "cai-tao-nha-cu": "/images/articles/cai-tao-nha-cu.jpg",
  "xay-dung-nha-3-tang": "/images/articles/xay-dung-nha-3-tang.jpg",
  "xay-dung-nha-2-tang": "/images/articles/xay-dung-nha-2-tang.jpg",
  "xay-dung-biet-thu": "/images/articles/xay-dung-biet-thu.jpg",
  "nang-tang-nha-pho": "/images/articles/nang-tang-nha-pho.jpg",
  "bao-gia-xay-nha-moi": "/images/articles/xay-nha-moi.jpg",
  "bao-gia-cai-tao-nha-cu": "/images/articles/cai-tao-nha-cu.jpg",
  "bao-gia-xay-dung-nha-2-tang": "/images/articles/xay-dung-nha-2-tang.jpg",
  "bao-gia-xay-dung-nha-3-tang": "/images/articles/xay-dung-nha-3-tang.jpg",
  "bao-gia-xay-dung-biet-thu": "/images/articles/xay-dung-biet-thu.jpg",
  "bao-gia-nang-tang-nha-pho": "/images/articles/nang-tang-nha-pho.jpg",
  "thiet-ke-nha-dep-dong-nai": "/images/articles/thiet-ke-nha-dep-dong-nai.jpg",
  "thiet-ke-nha-dep-long-an": "/images/articles/thiet-ke-nha-dep-long-an.jpg",
  "thiet-ke-nha-dep-binh-duong": "/images/articles/thiet-ke-nha-dep-binh-duong.jpg",
  "thiet-ke-nha-dep-phu-yen": "/images/articles/thiet-ke-nha-dep-phu-yen.jpg",
  "thiet-ke-nha-dep-dak-lak": "/images/articles/thiet-ke-nha-dep-dak-lak.jpg",
  "thiet-ke-nha-dep-tphcm": "/images/articles/thiet-ke-nha-dep-tphcm.jpg",
};

/** Ảnh đại diện — pool lớn, hash slug ổn định, ít trùng hơn. */
export function featuredImageForSlug(slug: string): string {
  const custom = CUSTOM_FEATURED_IMAGES[slug];
  if (custom) return custom;
  if (isCaiTaoSlug(slug)) return pickFromUrlPool(THUMB_POOL_CAI_TAO, slug);
  if (isNhaCap4Slug(slug)) return pickFromUrlPool(THUMB_POOL_NHA_CAP_4, slug);
  if (isXayNhaSlug(slug)) return pickFromUrlPool(THUMB_POOL_XAY_NHA, slug);
  if (isNha2TangSlug(slug)) return pickFromUrlPool(THUMB_POOL_NHA_2_TANG, slug);
  return pickFromUrlPool(THUMB_POOL_GENERAL, slug);
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

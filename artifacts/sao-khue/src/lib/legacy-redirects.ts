import { getPostPublicPathFromSlug } from "./post-url";

/**
 * Old WordPress URLs indexed by Google (root-level slugs, no /bai-viet/ prefix).
 * Maps legacy slug → new canonical path.
 */
export const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  // Google / bookmarks — sửa nhà trọn gói
  "sua-nha-tron-goi-tphcm": "/dich-vu/sua-chua-nha",
  "sua-nha-tron-goi": "/dich-vu/sua-chua-nha",
  "sua-chua-nha-tron-goi": "/dich-vu/sua-chua-nha",

  // Xây nhà trọn gói
  "xay-nha-tron-goi-tphcm": "/dich-vu/xay-nha-tron-goi",
  "xay-nha-tron-goi": "/dich-vu/xay-nha-tron-goi",
  "xay-dung-nha-dep": "/dich-vu/xay-nha-tron-goi",
  "xay-dung-nha-dep-tphcm": "/dich-vu/xay-nha-tron-goi",
  "xay-dung-nha-tron-goi": "/dich-vu/xay-nha-tron-goi",
  "xay-dung-nha-tron-goi-tphcm": "/dich-vu/xay-nha-tron-goi",
  "xay-nha-tron-goi-binh-duong": "/dich-vu/xay-nha-tron-goi-binh-duong",
  "xay-nha-tron-goi-dong-nai": "/dich-vu/xay-nha-tron-goi-dong-nai",

  // Top-level service shortcuts
  "thiet-ke-nha": "/dich-vu/thiet-ke-nha",
  "xay-dung-phan-tho": "/dich-vu/xay-dung-phan-tho",
  "sua-chua-nha": "/dich-vu/sua-chua-nha",
  "nang-tang-nha-pho": "/dich-vu/nang-tang-nha-pho",
  "hoan-thien-nha": "/dich-vu/hoan-thien-nha",
  "khuyen-mai-xay-dung": "/dich-vu/khuyen-mai",

  // Giới thiệu
  "ve-chung-toi": "/bai-viet/ve-chung-toi",
  "so-do-to-chuc": "/bai-viet/so-do-to-chuc",
  "hoat-dong-sao-khue": "/bai-viet/hoat-dong-sao-khue",
  "tuyen-dung": "/bai-viet/tuyen-dung",

  // WordPress taxonomy
  "category": "/dich-vu",
  "tag": "/tin-tuc",
  "author": "/bai-viet/ve-chung-toi",

  // Common typos / old paths
  "gioi-thieu-ve-chung-toi": "/bai-viet/ve-chung-toi",
  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm": "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm": "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "thiet-ke-thi-cong-nha-pho-dong-nai": "/tin-tuc/thiet-ke-thi-cong-nha-pho-dong-nai",
  "thi-cong-nha-pho-dong-nai": "/tin-tuc/thiet-ke-thi-cong-nha-pho-dong-nai",
  "lien-he-ngay": "/lien-he",
  "bang-bao-gia": "/bao-gia",
  "kinh-nghiem-xay-dung": "/kinh-nghiem",
};

/** Seed post slugs — old WP often linked posts at /{slug} instead of /bai-viet/{slug}. */
export const KNOWN_POST_SLUGS = new Set([
  "sua-nha-tron-goi-tphcm",
  "xay-nha-tron-goi-tphcm",
  "xay-nha-tron-goi-binh-duong",
  "xay-nha-tron-goi-dong-nai",
  "sua-chua-nha-tphcm",
  "xay-dung-phan-tho",
  "thiet-ke-nha",
  "nang-tang-nha-pho",
  "hoan-thien-nha",
  "khuyen-mai-xay-dung",
  "so-do-to-chuc",
  "ve-chung-toi",
  "hoat-dong-sao-khue",
  "tuyen-dung",
  "xay-nha-pho-binh-thanh",
  "xay-nha-pho-thuan-an",
  "sua-nha-quan-3",
  "thiet-ke-nha-biet-thu-thu-duc",
  "thiet-ke-nha-phong-cach-hien-dai",
  "cam-nang-xay-nha-2026",
  "luat-xay-dung-moi-nhat",
  "phong-thuy-nha-o",
  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "mau-nha-pho-2-tang-binh-duong",
  "thiet-ke-thi-cong-nha-pho-dong-nai",
  "thiet-ke-biet-thu-thu-duc",
  "thiet-ke-nha-biet-thu-thu-duc",
]);

/** Slug bài cũ (WordPress) → slug bài hiện tại trong DB/seed */
export const POST_SLUG_ALIASES: Record<string, string> = {
  "xay-dung-nha-dep": "xay-nha-tron-goi-tphcm",
  "xay-dung-nha-dep-tphcm": "xay-nha-tron-goi-tphcm",
  "xay-dung-nha-tron-goi": "xay-nha-tron-goi-tphcm",
  "xay-dung-nha-tron-goi-tphcm": "xay-nha-tron-goi-tphcm",
  "thiet-ke-biet-thu-thu-duc": "thiet-ke-nha-biet-thu-thu-duc",
};

export function resolvePostSlugAlias(slug: string): string {
  const normalized = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  return POST_SLUG_ALIASES[normalized] ?? slug;
}

/** Redirect cho /bai-viet/{slug-cũ} (Google, bookmark) */
export function resolveBaiVietLegacyRedirect(slug: string): string | null {
  const normalized = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!normalized) return null;

  if (LEGACY_SLUG_REDIRECTS[normalized]) {
    return LEGACY_SLUG_REDIRECTS[normalized];
  }

  const alias = POST_SLUG_ALIASES[normalized];
  if (alias) {
    return getPostPublicPathFromSlug(alias);
  }

  if (KNOWN_POST_SLUGS.has(normalized)) {
    return getPostPublicPathFromSlug(normalized);
  }

  return null;
}

export function resolveLegacyPath(slug: string): string | null {
  const normalized = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!normalized || normalized.includes("/")) return null;

  if (LEGACY_SLUG_REDIRECTS[normalized]) {
    return LEGACY_SLUG_REDIRECTS[normalized];
  }

  if (KNOWN_POST_SLUGS.has(normalized)) {
    return getPostPublicPathFromSlug(normalized);
  }

  // Heuristic: long hyphenated slugs were usually WP posts / tin tức
  if (normalized.split("-").length >= 3) {
    return getPostPublicPathFromSlug(normalized);
  }

  return null;
}

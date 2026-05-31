/**
 * Old WordPress URLs indexed by Google (root-level slugs, no /bai-viet/ prefix).
 * Maps legacy slug → new canonical path.
 */
export const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  // Google / bookmarks — sửa nhà trọn gói
  "sua-nha-tron-goi-tphcm": "/bai-viet/sua-nha-tron-goi-tphcm",
  "sua-nha-tron-goi": "/dich-vu/sua-chua-nha",
  "sua-chua-nha-tron-goi": "/dich-vu/sua-chua-nha",

  // Xây nhà trọn gói
  "xay-nha-tron-goi-tphcm": "/bai-viet/xay-nha-tron-goi-tphcm",
  "xay-nha-tron-goi": "/dich-vu/xay-nha-tron-goi",

  // Top-level service shortcuts
  "thiet-ke-nha": "/dich-vu/thiet-ke-nha",
  "xay-dung-phan-tho": "/dich-vu/xay-dung-phan-tho",
  "sua-chua-nha": "/dich-vu/sua-chua-nha",
  "nang-tang-nha-pho": "/dich-vu/nang-tang-nha-pho",
  "hoan-thien-nha": "/dich-vu/hoan-thien-nha",
  "khuyen-mai-xay-dung": "/dich-vu/khuyen-mai",

  // Giới thiệu
  "ve-chung-toi": "/gioi-thieu/ve-chung-toi",
  "so-do-to-chuc": "/gioi-thieu/so-do-to-chuc",
  "hoat-dong-sao-khue": "/gioi-thieu/hoat-dong",
  "tuyen-dung": "/gioi-thieu/tuyen-dung",

  // WordPress taxonomy
  "category": "/dich-vu",
  "tag": "/kinh-nghiem",
  "author": "/gioi-thieu/ve-chung-toi",

  // Common typos / old paths
  "gioi-thieu-ve-chung-toi": "/gioi-thieu/ve-chung-toi",
  "lien-he-ngay": "/lien-he",
  "bang-bao-gia": "/bao-gia",
  "kinh-nghiem-xay-dung": "/kinh-nghiem",
};

/** Seed post slugs — old WP often linked posts at /{slug} instead of /bai-viet/{slug}. */
export const KNOWN_POST_SLUGS = new Set([
  "sua-nha-tron-goi-tphcm",
  "xay-nha-tron-goi-tphcm",
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
  "sua-nha-quan-3",
  "thiet-ke-nha-biet-thu-thu-duc",
  "thiet-ke-nha-phong-cach-hien-dai",
  "cam-nang-xay-nha-2026",
  "luat-xay-dung-moi-nhat",
  "phong-thuy-nha-o",
  "thiet-ke-biet-thu-thu-duc",
  "thiet-ke-nha-biet-thu-thu-duc",
]);

export function resolveLegacyPath(slug: string): string | null {
  const normalized = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!normalized || normalized.includes("/")) return null;

  if (LEGACY_SLUG_REDIRECTS[normalized]) {
    return LEGACY_SLUG_REDIRECTS[normalized];
  }

  if (KNOWN_POST_SLUGS.has(normalized)) {
    return `/bai-viet/${normalized}`;
  }

  // Heuristic: long hyphenated slugs were usually WP posts
  if (normalized.split("-").length >= 3) {
    return `/bai-viet/${normalized}`;
  }

  return null;
}

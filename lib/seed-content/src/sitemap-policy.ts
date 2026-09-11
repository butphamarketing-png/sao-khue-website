/**
 * Chính sách lập chỉ mục — giảm thin/factory content khỏi sitemap + gắn noindex.
 * Money pages (override) luôn được index trừ cannibal/redirect.
 */
import { MONEY_PAGE_OVERRIDE_SLUGS } from "./articles/money-page-overrides";
import { phuYenDakLakTinTucSlugs } from "./articles/phu-yen-dak-lak-tin-tuc-articles";
import { longAnDongNaiTinTucSlugs } from "./articles/long-an-dong-nai-tin-tuc-articles";
import { binhDuongTphcmTinTucSlugs } from "./articles/binh-duong-tphcm-tin-tuc-articles";
import { mienTrungSuaNhaSlugs } from "./articles/mien-trung-sua-nha-tin-tuc-articles";
import { mienTrungXayNhaSlugs } from "./articles/mien-trung-xay-nha-tin-tuc-articles";
import { dakLakBatch4Slugs } from "./articles/dak-lak-tin-tuc-articles-batch4";
import { dakLakTphcmBatch5Slugs } from "./articles/dak-lak-tphcm-tin-tuc-articles-batch5";
import { tphcmBatch6Slugs } from "./articles/tphcm-tin-tuc-articles-batch6";
import { xayNhaTphcmBatch7Slugs } from "./articles/xay-nha-tphcm-tin-tuc-articles-batch7";
import { xayCaiTaoTphcmBatch8Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch8";
import { xayCaiTaoTphcmBatch9Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch9";
import { nhomKinhBatch10Slugs } from "./articles/nhom-kinh-tin-tuc-articles-batch10";
import { ADS_BO_SUNG_100_CAI_TAO_SLUGS } from "./articles/ads-bo-sung-100-cai-tao";
import { ADS_BO_SUNG_100_XAY_NHA_SLUGS } from "./articles/ads-bo-sung-100-xay-nha";
import { ADS_BO_SUNG_100_DOT2_CAI_TAO_SLUGS } from "./articles/ads-bo-sung-100-dot2-cai-tao";
import { ADS_BO_SUNG_100_DOT2_XAY_NHA_SLUGS } from "./articles/ads-bo-sung-100-dot2-xay-nha";
import { ADS_BO_SUNG_100_DOT3_CAI_TAO_SLUGS } from "./articles/ads-bo-sung-100-dot3-cai-tao";
import { ADS_BO_SUNG_100_DOT3_XAY_NHA_SLUGS } from "./articles/ads-bo-sung-100-dot3-xay-nha";

/** Bài pillar viết tay — không noindex. */
const HAND_PILLAR_SLUGS = new Set([
  "sua-chua-nha-dak-lak",
  "cai-tao-nha-dak-lak",
  "thiet-ke-nha-dep-dak-lak",
  "xay-nha-dep-dak-lak",
  "bao-gia-xay-nha-tron-goi-phu-yen",
]);

/**
 * URL đã 301 về trang tiền/hub khác — noindex + bỏ sitemap để hết cannibalization.
 * Redirect thật nằm ở legacy-redirects.ts.
 */
export const HUB_SUA_NHA = "/dich-vu/sua-nha-tron-goi-tphcm";
export const HUB_XAY_NHA = "/dich-vu/xay-nha-tron-goi";
export const HUB_CAI_TAO = "/cai-tao-nha";

const CANNIBAL_REDIRECT_SLUGS = new Set([
  "sua-chua-nha-tron-goi-tphcm",
  "bao-gia-sua-nha-tron-goi-tphcm",
  "sua-chua-nha-tphcm",
  "bao-gia-sua-chua-nha-tphcm",
  "xay-nha-gia-re-tphcm",
  "xay-nha-tphcm",
  "xay-nha-tron-goi-binh-thanh",
  "thiet-ke-nha-pho-2-tang-tphcm",
  "sua-nha-go-vap",
  "sua-nha-thu-duc",
  "cai-tao-nha-tphcm",
  "cai-tao-nha-tan-binh",
  "cai-tao-nha-binh-thanh",
  "cai-tao-nha-thu-duc",
  "cai-tao-nha-quan-7",
  "cai-tao-nha-go-vap",
  "cai-tao-nha-binh-chanh",
  "cai-tao-nha-tan-phu",
  "cai-tao-nha-quan-1",
  "cai-tao-nha-hoc-mon",
  // Cluster sửa chữa cải tạo trùng với cai-tao-nha-* / trang tiền sửa nhà
  "sua-chua-cai-tao-nha-tphcm",
  "sua-chua-cai-tao-nha-binh-thanh",
  "sua-chua-cai-tao-nha-thu-duc",
  "sua-chua-cai-tao-nha-quan-7",
  "sua-chua-cai-tao-nha-go-vap",
  "sua-chua-cai-tao-nha-binh-chanh",
  "sua-chua-cai-tao-nha-tan-phu",
  "sua-chua-cai-tao-nha-quan-1",
  "sua-chua-cai-tao-nha-hoc-mon",
  // Cluster xây nhà trọn gói — gom về /dich-vu/xay-nha-tron-goi
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "nha-thau-xay-nha-tron-goi-tphcm",
  "xay-nha-moi",
  "bao-gia-xay-nha-moi",
]);

const MONEY_SET = new Set(MONEY_PAGE_OVERRIDE_SLUGS);

/** Factory/calendar batches — nội dung mẫu trùng, gây "Crawled – not indexed". */
export const THIN_FACTORY_SLUGS: ReadonlySet<string> = new Set([
  ...phuYenDakLakTinTucSlugs,
  ...longAnDongNaiTinTucSlugs,
  ...binhDuongTphcmTinTucSlugs,
  ...mienTrungSuaNhaSlugs,
  ...mienTrungXayNhaSlugs,
  ...dakLakBatch4Slugs,
  ...dakLakTphcmBatch5Slugs,
  ...tphcmBatch6Slugs,
  ...xayNhaTphcmBatch7Slugs,
  ...xayCaiTaoTphcmBatch8Slugs,
  ...xayCaiTaoTphcmBatch9Slugs,
  ...nhomKinhBatch10Slugs,
  // Ads mass batches từng ép index → doorway risk sau spam update 2026
  ...ADS_BO_SUNG_100_CAI_TAO_SLUGS,
  ...ADS_BO_SUNG_100_XAY_NHA_SLUGS,
  ...ADS_BO_SUNG_100_DOT2_CAI_TAO_SLUGS,
  ...ADS_BO_SUNG_100_DOT2_XAY_NHA_SLUGS,
  ...ADS_BO_SUNG_100_DOT3_CAI_TAO_SLUGS,
  ...ADS_BO_SUNG_100_DOT3_XAY_NHA_SLUGS,
]);

/** Tin-tức geo/quận dạng khuôn — thường <700 từ, tranh KW với hub. */
const DISTRICT_TEMPLATE_SLUG_RE =
  /^(xay-nha(-tron-goi)?|cai-tao-nha|sua-nha)-(quan-\d+|binh-thanh|binh-tan|binh-chanh|go-vap|thu-duc|tan-binh|tan-phu|hoc-mon|cu-chi|nha-be|phu-nhuan)(-|$)/i;

export function isMoneyPageSlug(slug: string): boolean {
  return MONEY_SET.has(slug);
}

/**
 * Factory từ khóa ngắn (calendar batch 15–64) — slug luôn kết thúc `-ngan`.
 * Batch 65+ dùng suffix `-sk65`…`-sk73` (cùng khung doorway) — cũng noindex.
 */
function isShortKeywordFactorySlug(slug: string): boolean {
  return slug.endsWith("-ngan") || /-sk\d+$/i.test(slug);
}

const RETIRED_REPAIR_SLUG_RE =
  /^(sua-|sua-chua-|chong-tham|cai-tao|nang-tang|son-|gia-co|lam-moi|cong-ty-sua|bao-gia-sua|bao-gia-cai|chi-phi-cai|chi-phi-sua)/i;
const RETIRED_BUILD_SLUG_RE =
  /^(xay-|thiet-ke|thi-cong|bao-gia-xay|ep-coc|hoan-thien|nha-thau|don-gia|chi-phi-xay|cong-ty-xay)/i;

/** Hub 301 cho slug factory / thin đã gỡ index. */
export function hubForRetiredSlug(slug: string): string | null {
  const leaf = slug.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (!leaf) return null;
  if (RETIRED_REPAIR_SLUG_RE.test(leaf)) return HUB_SUA_NHA;
  if (RETIRED_BUILD_SLUG_RE.test(leaf)) return HUB_XAY_NHA;
  if (isShortKeywordFactorySlug(leaf)) return "/tin-tuc";
  return null;
}

/**
 * URL nội dung không còn trong known-paths → 301 về hub (không 404 nuốt equity).
 * Giữ 404 cho path lạ ngoài tin tức / dịch vụ / công trình / slug gốc WP.
 */
export function hubForUnknownPathname(pathname: string): string | null {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  if (normalized === "/" || normalized === "/404" || normalized === "/admin") return null;
  const parts = normalized.split("/").filter(Boolean);
  if (parts.length === 0) return null;
  const ns = parts[0];
  const leaf = parts[parts.length - 1] ?? "";
  const contentNs =
    ns === "tin-tuc" || ns === "bai-viet" || ns === "dich-vu" || ns === "cong-trinh";
  const rootSlug = parts.length === 1 && leaf.includes("-");
  if (!contentNs && !rootSlug) return null;

  const bySlug = hubForRetiredSlug(leaf);
  if (bySlug) return bySlug;
  if (ns === "dich-vu") return "/dich-vu";
  if (ns === "cong-trinh") return "/cong-trinh";
  if (contentNs) return "/tin-tuc";
  return null;
}

const CANONICAL_PATH_OVERRIDES: Record<string, string> = {
  "/dich-vu/sua-chua-nha": HUB_SUA_NHA,
  "/dich-vu/sua-chua-nha-tphcm": HUB_SUA_NHA,
  "/dich-vu/xay-nha-moi": HUB_XAY_NHA,
};

/** Path nội bộ còn sống; factory/cannibal → hub. */
export function canonicalInternalPath(pathname: string): string {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  if (CANONICAL_PATH_OVERRIDES[normalized]) return CANONICAL_PATH_OVERRIDES[normalized];
  const leaf = normalized.split("/").filter(Boolean).pop() ?? "";
  if (leaf && shouldNoindexPostSlug(leaf)) {
    return hubForRetiredSlug(leaf) ?? hubForUnknownPathname(normalized) ?? normalized;
  }
  return normalized;
}

/** Sửa href trong HTML seed — Google + user không còn đi URL 404/noindex. */
export function rewriteRetiredHrefsInHtml(html: string): string {
  if (!html) return html;
  return html.replace(/\bhref=(["'])(\/[^"'#?]*)\1/gi, (full, quote: string, path: string) => {
    if (
      path.startsWith("/images") ||
      path.startsWith("/assets") ||
      path.startsWith("/mau-nha") ||
      path === "/bao-gia" ||
      path === "/lien-he"
    ) {
      return full;
    }
    const next = canonicalInternalPath(path);
    if (next === path) return full;
    return `href=${quote}${next}${quote}`;
  });
}

/** Thin factory trừ money/hand pillar → noindex + bỏ sitemap. */
export function shouldNoindexPostSlug(slug: string): boolean {
  if (CANNIBAL_REDIRECT_SLUGS.has(slug)) return true;
  if (HAND_PILLAR_SLUGS.has(slug)) return false;
  if (isShortKeywordFactorySlug(slug)) return true;
  if (DISTRICT_TEMPLATE_SLUG_RE.test(slug)) return true;
  if (THIN_FACTORY_SLUGS.has(slug)) return true;
  // Money page vẫn index trừ khi nằm trong cannibal/factory ở trên.
  if (MONEY_SET.has(slug)) return false;
  return false;
}

export function isSitemapIndexablePost(post: {
  slug: string;
  category?: string;
  noindex?: boolean;
}): boolean {
  if (post.noindex) return false;
  // Cannibal / factory — kể cả dich-vu/cong-trinh đã 301
  if (shouldNoindexPostSlug(post.slug)) return false;
  const category = (post.category ?? "").toLowerCase();
  // Dịch vụ / công trình / giới thiệu — luôn đưa vào sitemap (trừ noindex ở trên)
  if (category === "dich-vu" || category === "cong-trinh" || category === "bai-viet") {
    return true;
  }
  return true;
}

/** Shell SPA routes — fallback index.html nếu thiếu prerender (tránh 404 landing ads). */
export const SPA_SHELL_FALLBACK_PATHS: ReadonlySet<string> = new Set([
  "/",
  "/bao-gia",
  "/lien-he",
  "/thiet-ke",
  "/xay-moi",
  "/xay-nha",
  "/cai-tao-nha",
  "/dich-vu",
  "/cong-trinh",
  "/tin-tuc",
  "/admin",
]);

export function shouldSpaShellFallback(pathname: string): boolean {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "") || "/";
  return SPA_SHELL_FALLBACK_PATHS.has(normalized);
}

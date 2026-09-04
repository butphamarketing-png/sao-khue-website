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
const CANNIBAL_REDIRECT_SLUGS = new Set([
  "sua-chua-nha-tron-goi-tphcm",
  "bao-gia-sua-nha-tron-goi-tphcm",
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
  const category = (post.category ?? "").toLowerCase();
  // Dịch vụ / công trình / giới thiệu — luôn đưa vào sitemap
  if (category === "dich-vu" || category === "cong-trinh" || category === "bai-viet") {
    return true;
  }
  return !shouldNoindexPostSlug(post.slug);
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

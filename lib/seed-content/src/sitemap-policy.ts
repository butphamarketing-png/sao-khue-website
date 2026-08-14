/**
 * Chính sách lập chỉ mục — giảm thin/factory content khỏi sitemap + gắn noindex.
 * Money pages (override) luôn được index.
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

/** Bài pillar viết tay Đắk Lắk — không noindex. */
const HAND_PILLAR_SLUGS = new Set([
  "sua-chua-nha-dak-lak",
  "cai-tao-nha-dak-lak",
  "thiet-ke-nha-dep-dak-lak",
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
]);

export function isMoneyPageSlug(slug: string): boolean {
  return MONEY_SET.has(slug);
}

/**
 * Factory từ khóa ngắn (calendar batch 15–64) — slug luôn kết thúc `-ngan`.
 * Trùng khung intro/H2/FAQ; money page không dùng suffix này.
 */
function isShortKeywordFactorySlug(slug: string): boolean {
  return slug.endsWith("-ngan");
}

/** Thin factory trừ money/hand pillar → noindex + bỏ sitemap. */
export function shouldNoindexPostSlug(slug: string): boolean {
  if (MONEY_SET.has(slug) || HAND_PILLAR_SLUGS.has(slug)) return false;
  if (isShortKeywordFactorySlug(slug)) return true;
  return THIN_FACTORY_SLUGS.has(slug);
}

export function isSitemapIndexablePost(post: { slug: string; category?: string }): boolean {
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

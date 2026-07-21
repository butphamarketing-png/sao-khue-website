import {
  suaNhaTronGoiTphcm,
  xayNhaTronGoiTphcm,
  xayNhaMoi,
  caiTaoNhaCu,
  xayDungNha3Tang,
  xayDungNha2Tang,
  xayDungBietThu,
  xayNhaTronGoiBinhDuong,
  xayDungPhanTho,
  thietKeNha,
  suaChuaNhaTphcm,
  nangTangNhaPho,
  hoanThienNha,
  khuyenMaiXayDung,
  soDoToChuc,
  veChungToi,
  hoatDongSaoKhue,
  tuyenDung,
  xayNhaPhoBinhThanh,
  xayNhaPhoThuanAn,
  suaNhaQuan3,
  thietKeNhaBietThuThuDuc,
  thietKeNhaPhongCachHienDai,
  camNangXayNha2026,
  luatXayDungMoiNhat,
  phongThuyNhaO,
  congTyXayDungNhaPhoUyTinTphcm,
  baoGiaXayNhaTronGoiMoiNhatTphcm,
  baoGiaPillarArticlesBySlug,
  BAO_GIA_PILLAR_SLUGS,
  mauNhaPho2TangBinhDuong,
  xayNhaTronGoiDongNai,
  thietKeThiCongNhaPhoDongNai,
  thietKeNhaDepDongNai,
  thietKeNhaDepLongAn,
  thietKeNhaDepBinhDuong,
  thietKeNhaDepDakLak,
  thietKeNhaDepTphcm,
  thietKeNhaPhoHienDaiTphcm,
  xayDungNhaPhuYen,
  xayDungNhaDakLak,
  xayNhaDepDakLak,
  suaChuaNhaDakLak,
  caiTaoNhaDakLak,
  suaChuaCaiTaoNhaTphcm,
  suaChuaCaiTaoNhaBinhThanh,
  suaChuaCaiTaoNhaThuDuc,
  suaChuaCaiTaoNhaQuan7,
  suaChuaCaiTaoNhaGoVap,
  suaChuaCaiTaoNhaBinhChanh,
  suaChuaCaiTaoNhaTanPhu,
  suaChuaCaiTaoNhaQuan1,
  suaChuaCaiTaoNhaHocMon,
  phuYenDakLakTinTucArticlesBySlug,
  phuYenDakLakTinTucSlugs,
  longAnDongNaiTinTucArticlesBySlug,
  longAnDongNaiTinTucSlugs,
  binhDuongTphcmTinTucArticlesBySlug,
  binhDuongTphcmTinTucSlugs,
  mienTrungSuaNhaArticlesBySlug,
  mienTrungSuaNhaSlugs,
  mienTrungXayNhaArticlesBySlug,
  mienTrungXayNhaSlugs,
  dakLakBatch4ArticlesBySlug,
  dakLakBatch4Slugs,
  dakLakTphcmBatch5ArticlesBySlug,
  dakLakTphcmBatch5Slugs,
  tphcmBatch6ArticlesBySlug,
  tphcmBatch6Slugs,
  xayNhaTphcmBatch7ArticlesBySlug,
  xayNhaTphcmBatch7Slugs,
  xayCaiTaoTphcmBatch8ArticlesBySlug,
  xayCaiTaoTphcmBatch8Slugs,
  xayCaiTaoTphcmBatch9ArticlesBySlug,
  xayCaiTaoTphcmBatch9Slugs,
  nhomKinhBatch10ArticlesBySlug,
  nhomKinhBatch10Slugs,
  moneyPageOverridesBySlug,
  type SeoArticle,
} from "./articles";
import { matchesCategory, normalizeCategory } from "./categories";
import { buildImageAlt } from "./image-seo";
import { TIN_TUC_SEED_ENTRIES } from "./tin-tuc-seed";
import { featuredImageForSlug } from "./site-images";

/** Bài pillar viết tay — không dùng bản factory phu-yen-dak-lak. */
const DAK_LAK_HAND_PILLAR_SLUGS = new Set([
  "sua-chua-nha-dak-lak",
  "cai-tao-nha-dak-lak",
  "thiet-ke-nha-dep-dak-lak",
]);

export type SeedPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

function seoPost(
  slug: string,
  category: string,
  imageUrl: string,
  article: SeoArticle,
): SeedPost {
  const metaKeywords = article.metaKeywords;
  const imageAlt =
    article.imageAlt?.trim() || buildImageAlt({ slug, metaKeywords });
  const imageCaption = article.imageCaption?.trim() || imageAlt;
  const content = article.content;

  return {
    slug,
    category,
    imageUrl,
    imageAlt,
    imageCaption,
    title: article.title,
    excerpt: article.excerpt,
    content,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    metaKeywords,
  };
}

export type FallbackPost = SeedPost & {
  id: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  createdAt: string;
  updatedAt: string;
};

const FALLBACK_TIMESTAMP = "2026-01-15T00:00:00.000Z";

function dedupeSeedPosts(posts: SeedPost[]): SeedPost[] {
  const seen = new Set<string>();
  return posts.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });
}

/** 23 bài — khớp menu con + bài công trình bổ sung */
const seedPostsRaw: SeedPost[] = [
  seoPost(
    "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
    "tin-tuc",
    featuredImageForSlug("bao-gia-xay-nha-tron-goi-moi-nhat-tphcm"),
    baoGiaXayNhaTronGoiMoiNhatTphcm,
  ),
  ...BAO_GIA_PILLAR_SLUGS.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), baoGiaPillarArticlesBySlug[slug]),
  ),
  seoPost(
    "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
    "tin-tuc",
    featuredImageForSlug("cong-ty-xay-dung-nha-pho-uy-tin-tphcm"),
    congTyXayDungNhaPhoUyTinTphcm,
  ),
  seoPost(
    "mau-nha-pho-2-tang-binh-duong",
    "tin-tuc",
    featuredImageForSlug("mau-nha-pho-2-tang-binh-duong"),
    mauNhaPho2TangBinhDuong,
  ),
  seoPost(
    "thiet-ke-thi-cong-nha-pho-dong-nai",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-thi-cong-nha-pho-dong-nai"),
    thietKeThiCongNhaPhoDongNai,
  ),
  seoPost(
    "thiet-ke-nha-dep-dong-nai",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-dep-dong-nai"),
    thietKeNhaDepDongNai,
  ),
  seoPost(
    "thiet-ke-nha-dep-long-an",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-dep-long-an"),
    thietKeNhaDepLongAn,
  ),
  seoPost(
    "thiet-ke-nha-dep-binh-duong",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-dep-binh-duong"),
    thietKeNhaDepBinhDuong,
  ),
  seoPost(
    "thiet-ke-nha-dep-dak-lak",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-dep-dak-lak"),
    thietKeNhaDepDakLak,
  ),
  seoPost(
    "thiet-ke-nha-dep-tphcm",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-dep-tphcm"),
    thietKeNhaDepTphcm,
  ),
  seoPost(
    "thiet-ke-nha-pho-hien-dai-tphcm",
    "tin-tuc",
    featuredImageForSlug("thiet-ke-nha-pho-hien-dai-tphcm"),
    thietKeNhaPhoHienDaiTphcm,
  ),
  seoPost("xay-dung-biet-thu", "dich-vu", featuredImageForSlug("xay-dung-biet-thu"), xayDungBietThu),
  seoPost("xay-dung-nha-2-tang", "dich-vu", featuredImageForSlug("xay-dung-nha-2-tang"), xayDungNha2Tang),
  seoPost("xay-dung-nha-3-tang", "dich-vu", featuredImageForSlug("xay-dung-nha-3-tang"), xayDungNha3Tang),
  seoPost("xay-nha-moi", "dich-vu", featuredImageForSlug("xay-nha-moi"), xayNhaMoi),
  seoPost("xay-nha-tron-goi-tphcm", "dich-vu", featuredImageForSlug("xay-nha-tron-goi-tphcm"), xayNhaTronGoiTphcm),
  seoPost("xay-nha-tron-goi-binh-duong", "dich-vu", featuredImageForSlug("xay-nha-tron-goi-binh-duong"), xayNhaTronGoiBinhDuong),
  seoPost("xay-nha-tron-goi-dong-nai", "dich-vu", featuredImageForSlug("xay-nha-tron-goi-dong-nai"), xayNhaTronGoiDongNai),
  seoPost("sua-nha-tron-goi-tphcm", "dich-vu", featuredImageForSlug("sua-nha-tron-goi-tphcm"), suaNhaTronGoiTphcm),
  seoPost("cai-tao-nha-cu", "dich-vu", featuredImageForSlug("cai-tao-nha-cu"), caiTaoNhaCu),
  seoPost("sua-chua-nha-tphcm", "dich-vu", featuredImageForSlug("sua-chua-nha-tphcm"), suaChuaNhaTphcm),
  seoPost("xay-dung-phan-tho", "dich-vu", featuredImageForSlug("xay-dung-phan-tho"), xayDungPhanTho),
  seoPost("thiet-ke-nha", "dich-vu", featuredImageForSlug("thiet-ke-nha"), thietKeNha),
  seoPost("nang-tang-nha-pho", "dich-vu", featuredImageForSlug("nang-tang-nha-pho"), nangTangNhaPho),
  seoPost("hoan-thien-nha", "dich-vu", featuredImageForSlug("hoan-thien-nha"), hoanThienNha),
  seoPost("khuyen-mai-xay-dung", "dich-vu", featuredImageForSlug("khuyen-mai-xay-dung"), khuyenMaiXayDung),
  seoPost("so-do-to-chuc", "gioi-thieu", featuredImageForSlug("so-do-to-chuc"), soDoToChuc),
  seoPost("ve-chung-toi", "gioi-thieu", featuredImageForSlug("ve-chung-toi"), veChungToi),
  seoPost("hoat-dong-sao-khue", "gioi-thieu", featuredImageForSlug("hoat-dong-sao-khue"), hoatDongSaoKhue),
  seoPost("tuyen-dung", "gioi-thieu", featuredImageForSlug("tuyen-dung"), tuyenDung),
  seoPost("xay-nha-pho-binh-thanh", "cong-trinh", featuredImageForSlug("xay-nha-pho-binh-thanh"), xayNhaPhoBinhThanh),
  seoPost("xay-nha-pho-thuan-an", "cong-trinh", featuredImageForSlug("xay-nha-pho-thuan-an"), xayNhaPhoThuanAn),
  seoPost("sua-nha-quan-3", "cong-trinh", featuredImageForSlug("sua-nha-quan-3"), suaNhaQuan3),
  seoPost("thiet-ke-nha-biet-thu-thu-duc", "cong-trinh", featuredImageForSlug("thiet-ke-nha-biet-thu-thu-duc"), thietKeNhaBietThuThuDuc),
  seoPost("thiet-ke-nha-phong-cach-hien-dai", "cong-trinh", featuredImageForSlug("thiet-ke-nha-phong-cach-hien-dai"), thietKeNhaPhongCachHienDai),
  ...TIN_TUC_SEED_ENTRIES.filter(
    (e) =>
      ![
        "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
        "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
        "thiet-ke-nha-pho-hien-dai-tphcm",
        "mau-nha-pho-2-tang-binh-duong",
        "thiet-ke-thi-cong-nha-pho-dong-nai",
        "cam-nang-xay-nha-2026",
        "luat-xay-dung-moi-nhat",
        "phong-thuy-nha-o",
      ].includes(e.slug),
  ).map((e) => seoPost(e.slug, "tin-tuc", featuredImageForSlug(e.slug), e.article)),
  seoPost("cam-nang-xay-nha-2026", "tin-tuc", featuredImageForSlug("cam-nang-xay-nha-2026"), camNangXayNha2026),
  seoPost("luat-xay-dung-moi-nhat", "tin-tuc", featuredImageForSlug("luat-xay-dung-moi-nhat"), luatXayDungMoiNhat),
  seoPost("phong-thuy-nha-o", "tin-tuc", featuredImageForSlug("phong-thuy-nha-o"), phongThuyNhaO),
  seoPost("xay-dung-nha-phu-yen", "tin-tuc", featuredImageForSlug("xay-dung-nha-phu-yen"), xayDungNhaPhuYen),
  seoPost("xay-dung-nha-dak-lak", "tin-tuc", featuredImageForSlug("xay-dung-nha-dak-lak"), xayDungNhaDakLak),
  seoPost("xay-nha-dep-dak-lak", "tin-tuc", featuredImageForSlug("xay-nha-dep-dak-lak"), xayNhaDepDakLak),
  seoPost("sua-chua-nha-dak-lak", "tin-tuc", featuredImageForSlug("sua-chua-nha-dak-lak"), suaChuaNhaDakLak),
  seoPost("cai-tao-nha-dak-lak", "tin-tuc", featuredImageForSlug("cai-tao-nha-dak-lak"), caiTaoNhaDakLak),
  seoPost("sua-chua-cai-tao-nha-tphcm", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-tphcm"), suaChuaCaiTaoNhaTphcm),
  seoPost("sua-chua-cai-tao-nha-binh-thanh", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-binh-thanh"), suaChuaCaiTaoNhaBinhThanh),
  seoPost("sua-chua-cai-tao-nha-thu-duc", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-thu-duc"), suaChuaCaiTaoNhaThuDuc),
  seoPost("sua-chua-cai-tao-nha-quan-7", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-quan-7"), suaChuaCaiTaoNhaQuan7),
  seoPost("sua-chua-cai-tao-nha-go-vap", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-go-vap"), suaChuaCaiTaoNhaGoVap),
  seoPost("sua-chua-cai-tao-nha-binh-chanh", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-binh-chanh"), suaChuaCaiTaoNhaBinhChanh),
  seoPost("sua-chua-cai-tao-nha-tan-phu", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-tan-phu"), suaChuaCaiTaoNhaTanPhu),
  seoPost("sua-chua-cai-tao-nha-quan-1", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-quan-1"), suaChuaCaiTaoNhaQuan1),
  seoPost("sua-chua-cai-tao-nha-hoc-mon", "tin-tuc", featuredImageForSlug("sua-chua-cai-tao-nha-hoc-mon"), suaChuaCaiTaoNhaHocMon),
  ...phuYenDakLakTinTucSlugs.filter((slug) => !DAK_LAK_HAND_PILLAR_SLUGS.has(slug)).map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), phuYenDakLakTinTucArticlesBySlug[slug]!),
  ),
  ...longAnDongNaiTinTucSlugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), longAnDongNaiTinTucArticlesBySlug[slug]!),
  ),
  ...binhDuongTphcmTinTucSlugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), binhDuongTphcmTinTucArticlesBySlug[slug]!),
  ),
  ...mienTrungSuaNhaSlugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), mienTrungSuaNhaArticlesBySlug[slug]!),
  ),
  ...mienTrungXayNhaSlugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), mienTrungXayNhaArticlesBySlug[slug]!),
  ),
  ...dakLakBatch4Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), dakLakBatch4ArticlesBySlug[slug]!),
  ),
  ...dakLakTphcmBatch5Slugs.filter((slug) => slug !== "thiet-ke-nha-dep-tphcm").map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), dakLakTphcmBatch5ArticlesBySlug[slug]!),
  ),
  ...tphcmBatch6Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), tphcmBatch6ArticlesBySlug[slug]!),
  ),
  ...xayNhaTphcmBatch7Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), xayNhaTphcmBatch7ArticlesBySlug[slug]!),
  ),
  ...xayCaiTaoTphcmBatch8Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), xayCaiTaoTphcmBatch8ArticlesBySlug[slug]!),
  ),
  ...xayCaiTaoTphcmBatch9Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), xayCaiTaoTphcmBatch9ArticlesBySlug[slug]!),
  ),
  ...nhomKinhBatch10Slugs.map((slug) =>
    seoPost(slug, "tin-tuc", featuredImageForSlug(slug), nhomKinhBatch10ArticlesBySlug[slug]!),
  ),
];

export const seedPosts: SeedPost[] = applyMoneyPageOverrides(dedupeSeedPosts(seedPostsRaw));

function applyMoneyPageOverrides(posts: SeedPost[]): SeedPost[] {
  return posts.map((p) => {
    const override = moneyPageOverridesBySlug[p.slug];
    if (!override) return p;
    const imageAlt = override.imageAlt?.trim() || p.imageAlt;
    return {
      ...p,
      title: override.title?.trim() || p.title,
      excerpt: override.excerpt,
      content: override.content,
      metaTitle: override.metaTitle,
      metaDescription: override.metaDescription,
      metaKeywords: override.metaKeywords,
      imageAlt,
      imageCaption: override.imageCaption?.trim() || imageAlt || p.imageCaption,
    };
  });
}

export {
  DEFAULT_POST_CATEGORY,
  normalizeCategory,
  categoriesForFilter,
  matchesCategory,
} from "./categories";

export { getPostPublicPath } from "./public-path";
export { INDEXING_BATCH_SLUGS, xayCaiTaoTphcmBatch8Slugs, xayCaiTaoTphcmBatch9Slugs, xayNhaTphcmBatch7Slugs } from "./indexing-batches";
export {
  buildImageAlt,
  pickImageAltKeyword,
  parseFocusKeywords,
  getPrimaryFocusKeyword,
  altMatchesFocusKeywordPhrase,
  imageAltContainsFocusKeyword,
  normalizeSeoText,
  buildFeaturedImageFigure,
  buildInlineImageFigure,
  prepareArticleHtml,
  suggestImageFilename,
  contentHasImage,
  auditContentImages,
  countArticleImages,
} from "./image-seo";

export {
  injectArticleToc,
  shouldInjectArticleToc,
  hasArticleToc,
  TOC_MIN_WORDS,
  TOC_MIN_H2,
} from "./article-toc";

export { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, stripFaqSectionFromHtml } from "./article-seo-blocks";

export {
  CONG_TRINH_CASE_STUDIES,
  TIN_TUC_MAIN_HUBS,
  hubLinkParagraph,
  resolvePostHubLinks,
  resolveRelevantCaseStudies,
  type HubLink,
} from "./hub-links";

export { caseStudyRelatedBlock } from "./case-study-blocks";

export {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
  detectContentRegion,
  detectRepairSubtopic,
  metaPriceHint,
  type ContentIntent,
} from "./article-content-blocks";

export {
  isLegacyPostImageUrl,
  isLegacyPostContent,
  mergePostMedia,
} from "./post-media";

export { caiTaoImage, featuredImageForSlug, nha2TangImage, nhaCap4Image, slugImage, siteImage, xayNhaImage } from "./site-images";

/** Chuẩn bài SEO dài (Rank Math / WP). */
export const ARTICLE_WORDS_TARGET_MIN = 1500;
export const ARTICLE_WORDS_TARGET_MAX = 2500;
export const ARTICLE_IMAGES_TARGET_MIN = 2;

export function toFallbackPost(seed: SeedPost, id: number): FallbackPost {
  return {
    ...seed,
    id,
    metaTitle: seed.metaTitle ?? "",
    metaDescription: seed.metaDescription ?? "",
    metaKeywords: seed.metaKeywords ?? "",
    createdAt: FALLBACK_TIMESTAMP,
    updatedAt: FALLBACK_TIMESTAMP,
  };
}

const fallbackPosts: FallbackPost[] = seedPosts.map((p, i) => toFallbackPost(p, i + 1));

const fallbackBySlug = new Map(fallbackPosts.map((p) => [p.slug, p]));

export function getFallbackPost(slug: string): FallbackPost | undefined {
  return fallbackBySlug.get(slug);
}

export function listFallbackPosts(options?: { category?: string; limit?: number }): FallbackPost[] {
  let rows = fallbackPosts;
  if (options?.category) {
    rows = rows.filter((p) => matchesCategory(p.category, options.category!));
  }
  if (options?.limit) {
    rows = rows.slice(0, options.limit);
  }
  return rows;
}

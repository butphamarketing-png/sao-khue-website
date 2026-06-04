import {
  suaNhaTronGoiTphcm,
  xayNhaTronGoiTphcm,
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
  mauNhaPho2TangBinhDuong,
  xayNhaTronGoiDongNai,
  thietKeThiCongNhaPhoDongNai,
  thietKeNhaPhoHienDaiTphcm,
  type SeoArticle,
} from "./articles";
import { matchesCategory } from "./categories";
import { buildImageAlt } from "./image-seo";

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
  return {
    slug,
    category,
    imageUrl,
    imageAlt,
    imageCaption,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
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

const HERO = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200";
const BUILD = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200";
const REPAIR = "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&q=80&w=1200";
const DESIGN = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200";
const TEAM = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200";

const FALLBACK_TIMESTAMP = "2026-01-15T00:00:00.000Z";

/** 23 bài — khớp menu con + bài công trình bổ sung */
export const seedPosts: SeedPost[] = [
  seoPost(
    "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
    "tin-tuc",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    baoGiaXayNhaTronGoiMoiNhatTphcm,
  ),
  seoPost(
    "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
    "tin-tuc",
    "/images/project_3.jpg",
    congTyXayDungNhaPhoUyTinTphcm,
  ),
  seoPost(
    "mau-nha-pho-2-tang-binh-duong",
    "tin-tuc",
    "/images/project_2.jpg",
    mauNhaPho2TangBinhDuong,
  ),
  seoPost(
    "thiet-ke-thi-cong-nha-pho-dong-nai",
    "tin-tuc",
    DESIGN,
    thietKeThiCongNhaPhoDongNai,
  ),
  seoPost(
    "thiet-ke-nha-pho-hien-dai-tphcm",
    "tin-tuc",
    "/images/project_2.jpg",
    thietKeNhaPhoHienDaiTphcm,
  ),
  seoPost("xay-nha-tron-goi-tphcm", "dich-vu", BUILD, xayNhaTronGoiTphcm),
  seoPost("xay-nha-tron-goi-binh-duong", "dich-vu", BUILD, xayNhaTronGoiBinhDuong),
  seoPost("xay-nha-tron-goi-dong-nai", "dich-vu", BUILD, xayNhaTronGoiDongNai),
  seoPost("sua-nha-tron-goi-tphcm", "dich-vu", REPAIR, suaNhaTronGoiTphcm),
  seoPost("sua-chua-nha-tphcm", "dich-vu", REPAIR, suaChuaNhaTphcm),
  seoPost("xay-dung-phan-tho", "dich-vu", BUILD, xayDungPhanTho),
  seoPost("thiet-ke-nha", "dich-vu", DESIGN, thietKeNha),
  seoPost("nang-tang-nha-pho", "dich-vu", BUILD, nangTangNhaPho),
  seoPost("hoan-thien-nha", "dich-vu", REPAIR, hoanThienNha),
  seoPost("khuyen-mai-xay-dung", "dich-vu", HERO, khuyenMaiXayDung),
  seoPost("so-do-to-chuc", "gioi-thieu", TEAM, soDoToChuc),
  seoPost("ve-chung-toi", "gioi-thieu", TEAM, veChungToi),
  seoPost("hoat-dong-sao-khue", "gioi-thieu", TEAM, hoatDongSaoKhue),
  seoPost("tuyen-dung", "gioi-thieu", TEAM, tuyenDung),
  seoPost("xay-nha-pho-binh-thanh", "cong-trinh", BUILD, xayNhaPhoBinhThanh),
  seoPost("xay-nha-pho-thuan-an", "cong-trinh", "/images/project_2.jpg", xayNhaPhoThuanAn),
  seoPost("sua-nha-quan-3", "cong-trinh", REPAIR, suaNhaQuan3),
  seoPost("thiet-ke-nha-biet-thu-thu-duc", "cong-trinh", DESIGN, thietKeNhaBietThuThuDuc),
  seoPost("thiet-ke-nha-phong-cach-hien-dai", "cong-trinh", DESIGN, thietKeNhaPhongCachHienDai),
  seoPost("cam-nang-xay-nha-2026", "tin-tuc", HERO, camNangXayNha2026),
  seoPost("luat-xay-dung-moi-nhat", "tin-tuc", HERO, luatXayDungMoiNhat),
  seoPost("phong-thuy-nha-o", "tin-tuc", HERO, phongThuyNhaO),
];

export {
  DEFAULT_POST_CATEGORY,
  normalizeCategory,
  categoriesForFilter,
  matchesCategory,
} from "./categories";

export { getPostPublicPath } from "./public-path";
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

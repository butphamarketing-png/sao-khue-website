import {
  suaNhaTronGoiTphcm,
  xayNhaTronGoiTphcm,
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
  suaNhaQuan3,
  thietKeNhaBietThuThuDuc,
  thietKeNhaPhongCachHienDai,
  camNangXayNha2026,
  luatXayDungMoiNhat,
  phongThuyNhaO,
  type SeoArticle,
} from "./articles";

export type SeedPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  imageUrl: string;
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
  return {
    slug,
    category,
    imageUrl,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    metaTitle: article.metaTitle,
    metaDescription: article.metaDescription,
    metaKeywords: article.metaKeywords,
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

/** 18 bài — khớp menu con + bài công trình bổ sung */
export const seedPosts: SeedPost[] = [
  seoPost("xay-nha-tron-goi-tphcm", "dich-vu", BUILD, xayNhaTronGoiTphcm),
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
  seoPost("sua-nha-quan-3", "cong-trinh", REPAIR, suaNhaQuan3),
  seoPost("thiet-ke-nha-biet-thu-thu-duc", "cong-trinh", DESIGN, thietKeNhaBietThuThuDuc),
  seoPost("thiet-ke-nha-phong-cach-hien-dai", "cong-trinh", DESIGN, thietKeNhaPhongCachHienDai),
  seoPost("cam-nang-xay-nha-2026", "kinh-nghiem", HERO, camNangXayNha2026),
  seoPost("luat-xay-dung-moi-nhat", "kinh-nghiem", HERO, luatXayDungMoiNhat),
  seoPost("phong-thuy-nha-o", "kinh-nghiem", HERO, phongThuyNhaO),
];

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
    rows = rows.filter((p) => p.category === options.category);
  }
  if (options?.limit) {
    rows = rows.slice(0, options.limit);
  }
  return rows;
}

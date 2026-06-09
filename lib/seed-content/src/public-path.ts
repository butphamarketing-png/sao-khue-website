import { normalizeCategory } from "./categories";

/** Slug bài → segment URL ngắn (khớp artifacts/sao-khue post-url). */
const POST_URL_LEAF_OVERRIDES: Record<string, string> = {
  "xay-nha-tron-goi-tphcm": "xay-nha-tron-goi",
  /** Menu «Sửa chữa nhà» — slug riêng, không gộp với sua-nha-tron-goi-tphcm */
  "sua-chua-nha-tphcm": "sua-chua-nha",
  "khuyen-mai-xay-dung": "khuyen-mai",
};

/** Đường dẫn canonical công khai theo danh mục (dùng sitemap, RSS). */
export function getPostPublicPath(post: { slug: string; category: string }): string {
  const cat = normalizeCategory(post.category);

  if (cat === "tin-tuc") return `/tin-tuc/${post.slug}`;
  if (cat === "gioi-thieu") return `/bai-viet/${post.slug}`;

  if (cat === "dich-vu" || cat === "cong-trinh") {
    const leaf = POST_URL_LEAF_OVERRIDES[post.slug] ?? post.slug;
    return cat === "dich-vu" ? `/dich-vu/${leaf}` : `/cong-trinh/${leaf}`;
  }

  return `/bai-viet/${post.slug}`;
}

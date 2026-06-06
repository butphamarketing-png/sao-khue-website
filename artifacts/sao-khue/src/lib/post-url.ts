import type { Post } from "@workspace/api-client-react";
import { seedPosts } from "@workspace/seed-content";
import { normalizeCategory } from "./categories";
import { defaultNavMenu, type MenuItem } from "./menu";
import { getMenuLeafSlug, inferSubSlugFromPost } from "./menu-posts";

/** Slug bài → segment URL ngắn (menu cũ / SEO). */
const POST_URL_LEAF_OVERRIDES: Record<string, string> = {
  "xay-nha-tron-goi-tphcm": "xay-nha-tron-goi",
  "sua-chua-nha-tphcm": "sua-chua-nha",
  "khuyen-mai-xay-dung": "khuyen-mai",
};

export function getPostUrlLeaf(
  post: Pick<Post, "slug" | "category">,
  menu: MenuItem[] = defaultNavMenu,
): string | null {
  const override = POST_URL_LEAF_OVERRIDES[post.slug];
  if (override) return override;

  const fromMenu = inferSubSlugFromPost(post, menu);
  if (fromMenu) return fromMenu;

  const cat = normalizeCategory(post.category);
  if (cat === "dich-vu" || cat === "cong-trinh") {
    if (post.slug.includes("-")) {
      const parts = post.slug.split("-");
      if (parts.length >= 3) return post.slug;
    }
    return post.slug;
  }

  return null;
}

/** Đường dẫn công khai (canonical) theo danh mục. */
export function getPostPublicPath(
  post: Pick<Post, "slug" | "category">,
  menu: MenuItem[] = defaultNavMenu,
): string {
  const cat = normalizeCategory(post.category);

  if (cat === "tin-tuc") return `/tin-tuc/${post.slug}`;

  if (cat === "gioi-thieu") return `/bai-viet/${post.slug}`;

  if (cat === "dich-vu") {
    const leaf = getPostUrlLeaf(post, menu);
    return `/dich-vu/${leaf ?? post.slug}`;
  }

  if (cat === "cong-trinh") {
    const leaf = getPostUrlLeaf(post, menu);
    return `/cong-trinh/${leaf ?? post.slug}`;
  }

  return `/bai-viet/${post.slug}`;
}

export function getPostPublicPathFromSlug(
  slug: string,
  menu: MenuItem[] = defaultNavMenu,
): string {
  const seed = seedPosts.find((p) => p.slug === slug);
  if (seed) return getPostPublicPath(seed, menu);
  return `/bai-viet/${slug}`;
}

/** Đổi segment trên URL (leaf hoặc slug đầy đủ) → slug bài trong DB. */
export function resolvePostSlugFromCategorySegment(
  category: string,
  segment: string,
  posts: Pick<Post, "slug" | "category">[],
  menu: MenuItem[] = defaultNavMenu,
): string | null {
  const normCat = normalizeCategory(category);
  const seg = segment.trim().toLowerCase();
  if (!seg) return null;

  const inCategory = posts.filter((p) => normalizeCategory(p.category) === normCat);

  const exact = inCategory.find((p) => p.slug.toLowerCase() === seg);
  if (exact) return exact.slug;

  // URL ngắn cố định (vd. /dich-vu/xay-nha-tron-goi → xay-nha-tron-goi-tphcm, không nhầm bài *-binh-duong)
  for (const [postSlug, leaf] of Object.entries(POST_URL_LEAF_OVERRIDES)) {
    if (leaf.toLowerCase() !== seg) continue;
    const found = inCategory.find((p) => p.slug === postSlug);
    if (found) return found.slug;
  }

  for (const p of inCategory) {
    const leaf = getPostUrlLeaf(p, menu);
    if (leaf?.toLowerCase() === seg) return p.slug;
  }

  const seed = seedPosts.find((p) => {
    if (normalizeCategory(p.category) !== normCat) return false;
    if (p.slug.toLowerCase() === seg) return true;
    if (POST_URL_LEAF_OVERRIDES[p.slug]?.toLowerCase() === seg) return true;
    return getPostUrlLeaf(p, menu)?.toLowerCase() === seg;
  });
  return seed?.slug ?? null;
}

export function parsePostPathFromLocation(location: string): {
  mode: "category" | "legacy-bai-viet" | null;
  category: string | null;
  segment: string | null;
} {
  const path = location.split("?")[0];
  const parts = path.split("/").filter(Boolean);

  if (parts[0] === "bai-viet" && parts[1]) {
    return { mode: "legacy-bai-viet", category: null, segment: parts[1] };
  }

  if (
    (parts[0] === "tin-tuc" || parts[0] === "dich-vu" || parts[0] === "cong-trinh") &&
    parts[1]
  ) {
    return { mode: "category", category: parts[0], segment: parts[1] };
  }

  return { mode: null, category: null, segment: null };
}

/** href menu con dịch vụ (breadcrumb) */
export function getDichVuLeafHref(leaf: string): string {
  return `/dich-vu/${leaf}`;
}

export { getMenuLeafSlug };

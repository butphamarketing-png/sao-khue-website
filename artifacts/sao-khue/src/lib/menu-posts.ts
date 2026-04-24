import type { Post } from "@workspace/api-client-react";
import { navMenu, type MenuItem } from "@/lib/menu";

export type MenuChild = MenuItem & { category: string };
export type MenuChildOption = MenuChild & {
  leaf: string;
  key: string;
  parentTitle: string;
};

export function getMenuLeafSlug(href: string): string {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function getMenuChildren(category: string): MenuChild[] {
  const section = navMenu.find((item) => item.category === category);
  return (section?.children ?? []).filter(
    (child): child is MenuChild => Boolean(child.category),
  );
}

export function getSubCategoryKey(category: string, leaf: string): string {
  return `${category}::${leaf}`;
}

export function parseSubCategoryKey(
  key: string,
): { category: string; leaf: string } | null {
  const [category, leaf] = key.split("::");
  if (!category || !leaf) return null;
  return { category, leaf };
}

export function getMenuChildOptions(category?: string | null): MenuChildOption[] {
  const sections = category
    ? navMenu.filter((item) => item.category === category)
    : navMenu.filter((item) => item.category);

  return sections.flatMap((section) =>
    getMenuChildren(section.category!).map((child) => {
      const leaf = getMenuLeafSlug(child.href);
      return {
        ...child,
        leaf,
        key: getSubCategoryKey(child.category, leaf),
        parentTitle: section.title,
      };
    }),
  );
}

export function getMenuChildLabel(category: string, leaf: string): string | null {
  const match = getMenuChildOptions(category).find((child) => child.leaf === leaf);
  return match?.title ?? null;
}

export function inferSubSlugFromPost(post: Pick<Post, "slug" | "category">): string | null {
  const children = getMenuChildren(post.category);

  for (const child of children) {
    const leaf = getMenuLeafSlug(child.href);
    if (!leaf) continue;

    if (
      post.slug === leaf ||
      post.slug.startsWith(`${leaf}-`) ||
      post.slug.startsWith(`${leaf}--`)
    ) {
      return leaf;
    }
  }

  return null;
}

export function postMatchesSubSlug(
  post: Pick<Post, "slug" | "category">,
  subSlug: string,
): boolean {
  return inferSubSlugFromPost(post) === subSlug;
}

export function ensureSlugMatchesSubSlug(rawSlug: string, subSlug?: string | null): string {
  const slug = rawSlug.trim().replace(/^\/+|\/+$/g, "");
  if (!slug) return slug;
  if (!subSlug) return slug;
  if (slug === subSlug || slug.startsWith(`${subSlug}-`) || slug.startsWith(`${subSlug}--`)) {
    return slug;
  }
  return `${subSlug}-${slug}`;
}

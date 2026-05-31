import type { Post } from "@workspace/api-client-react";
import type { FeaturedPostsConfig } from "@/lib/home-content";

export function pickFeaturedPosts(
  allPosts: Post[],
  slugs: string[],
  limit: number,
): Post[] {
  if (!slugs.length) return allPosts.slice(0, limit);

  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const picked: Post[] = [];
  for (const slug of slugs) {
    const post = bySlug.get(slug);
    if (post) picked.push(post);
    if (picked.length >= limit) break;
  }
  return picked.length > 0 ? picked : allPosts.slice(0, limit);
}

export function pickFeaturedByCategory(
  allPosts: Post[],
  config: FeaturedPostsConfig,
  key: keyof FeaturedPostsConfig,
  category: string,
  limit: number,
): Post[] {
  const inCategory = allPosts.filter((p) => p.category === category);
  return pickFeaturedPosts(inCategory, config[key], limit);
}

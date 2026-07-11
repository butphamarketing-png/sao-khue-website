import type { Post } from "@workspace/api-client-react";
import type { HomePostsBandConfig } from "@/lib/home-content";

/** Lọc bài theo slug ưu tiên hoặc từ khóa — dùng cho band trang chủ và hub /bao-gia */
export function pickBandPosts(allPosts: Post[], config: HomePostsBandConfig): Post[] {
  const limit = config.limit ?? allPosts.length;
  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));

  if (config.slugs?.length) {
    const picked: Post[] = [];
    const seen = new Set<number>();
    for (const slug of config.slugs) {
      const post = bySlug.get(slug);
      if (post && !seen.has(post.id)) {
        picked.push(post);
        seen.add(post.id);
      }
    }
    if (picked.length > 0) {
      const rest = filterPostsByKeywords(allPosts, config.slugKeywords).filter(
        (p) => !seen.has(p.id),
      );
      return [...picked, ...rest].slice(0, limit);
    }
  }

  return filterPostsByKeywords(allPosts, config.slugKeywords, config.category).slice(0, limit);
}

export function filterPostsByKeywords(
  posts: Post[],
  keywords?: string[],
  category?: string,
): Post[] {
  let filtered = [...posts];
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (keywords?.length) {
    filtered = filtered.filter((p) => {
      const slug = p.slug.toLowerCase();
      const title = p.title.toLowerCase();
      return keywords.some((kw) => slug.includes(kw) || title.includes(kw));
    });
  }
  return filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function paginatePosts<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
    total: items.length,
  };
}

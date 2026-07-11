import type { Post } from "@workspace/api-client-react";
import { getFallbackPost } from "@workspace/seed-content";
import type { HomePostsBandConfig } from "@/lib/home-content";
import { repairPostText } from "./post-encoding";

function postForSlug(slug: string, bySlug: Map<string, Post>): Post | undefined {
  const fromApi = bySlug.get(slug);
  if (fromApi) return fromApi;
  const fallback = getFallbackPost(slug);
  return fallback ? repairPostText(fallback as Post) : undefined;
}

/** Ghép bài ghim (slugs) trước — dùng seed fallback nếu DB chưa có slug. */
export function pickBandPosts(allPosts: Post[], config: HomePostsBandConfig): Post[] {
  const limit = config.limit ?? 4;
  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const out: Post[] = [];
  const seen = new Set<string>();

  if (config.slugs?.length) {
    for (const slug of config.slugs) {
      const post = postForSlug(slug, bySlug);
      if (post && !seen.has(post.slug)) {
        out.push(post);
        seen.add(post.slug);
      }
    }
  }

  if (out.length >= limit) return out.slice(0, limit);

  let filtered = allPosts.filter((p) => !seen.has(p.slug));
  if (config.category) {
    filtered = filtered.filter((p) => p.category === config.category);
  }
  if (config.slugKeywords?.length) {
    filtered = filtered.filter((p) => {
      const slug = p.slug.toLowerCase();
      const title = p.title.toLowerCase();
      return config.slugKeywords!.some((kw) => slug.includes(kw) || title.includes(kw));
    });
  }

  for (const post of filtered) {
    out.push(post);
    if (out.length >= limit) break;
  }

  return out.slice(0, limit);
}

export function paginatePosts<T>(items: T[], page: number, perPage: number) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    total,
    totalPages,
    page: safePage,
  };
}

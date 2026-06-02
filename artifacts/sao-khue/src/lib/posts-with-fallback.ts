import type { Post } from "@workspace/api-client-react";
import { getFallbackPost, listFallbackPosts, matchesCategory } from "@workspace/seed-content";
import { normalizePosts } from "./posts";

type PostCollection =
  | Post[]
  | {
      data?: unknown;
      items?: unknown;
      posts?: unknown;
    }
  | null
  | undefined;

/** Prefer API data; fall back to bundled seed content when DB is offline. */
export function resolvePosts(input: PostCollection, options?: { category?: string; limit?: number }): Post[] {
  const fromApi = normalizePosts(input);
  let rows = fromApi.length > 0 ? fromApi : (listFallbackPosts(options) as Post[]);
  if (options?.category && fromApi.length > 0) {
    rows = rows.filter((p) => matchesCategory(p.category, options.category!));
  }
  if (options?.limit) rows = rows.slice(0, options.limit);
  return rows;
}

/** Prefer API; fill missing body fields from bundled seed when DB row is incomplete. */
export function resolvePost(slug: string | undefined, apiPost: Post | undefined | null): Post | undefined {
  const fallback = slug ? (getFallbackPost(slug) as Post | undefined) : undefined;
  if (!apiPost) return fallback;
  if (!fallback) return apiPost;

  const content = (apiPost.content ?? "").trim();
  const fallbackContent = (fallback.content ?? "").trim();
  if (content.length >= 80 || !fallbackContent) return apiPost;

  return {
    ...apiPost,
    content: fallback.content,
    excerpt: (apiPost.excerpt ?? "").trim() || fallback.excerpt,
    metaTitle: (apiPost.metaTitle ?? "").trim() || fallback.metaTitle,
    metaDescription: (apiPost.metaDescription ?? "").trim() || fallback.metaDescription,
    metaKeywords: (apiPost.metaKeywords ?? "").trim() || fallback.metaKeywords,
    imageUrl: (apiPost.imageUrl ?? "").trim() || fallback.imageUrl,
  };
}

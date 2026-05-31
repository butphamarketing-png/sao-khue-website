import type { Post } from "@workspace/api-client-react";
import { getFallbackPost, listFallbackPosts } from "@workspace/seed-content";
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
  if (fromApi.length > 0) return fromApi;
  return listFallbackPosts(options) as Post[];
}

export function resolvePost(slug: string | undefined, apiPost: Post | undefined | null): Post | undefined {
  if (apiPost) return apiPost;
  if (!slug) return undefined;
  return getFallbackPost(slug) as Post | undefined;
}

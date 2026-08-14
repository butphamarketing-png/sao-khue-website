import type { Post } from "@workspace/api-client-react";
import {
  getFallbackPost,
  listFallbackPosts,
  matchesCategory,
  mergePostMedia,
  shouldNoindexPostSlug,
} from "@workspace/seed-content";
import { repairPostText } from "./post-encoding";
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
export function resolvePosts(
  input: PostCollection,
  options?: { category?: string; limit?: number; includeNoindex?: boolean },
): Post[] {
  const fromApi = normalizePosts(input);
  let rows = fromApi.length > 0 ? fromApi : (listFallbackPosts(options) as Post[]);
  if (options?.category && fromApi.length > 0) {
    rows = rows.filter((p) => matchesCategory(p.category, options.category!));
  }
  if (!options?.includeNoindex) {
    rows = rows.filter(
      (p) => !shouldNoindexPostSlug(p.slug) && !(p as { noindex?: boolean }).noindex,
    );
  }
  if (options?.limit) rows = rows.slice(0, options.limit);
  return rows.map((p) => repairPostText(mergePostMedia(p, getFallbackPost(p.slug))));
}

/** Prefer API; fill missing body fields from bundled seed when DB row is incomplete. */
export function resolvePost(slug: string | undefined, apiPost: Post | undefined | null): Post | undefined {
  const fallback = slug ? (getFallbackPost(slug) as Post | undefined) : undefined;
  if (!apiPost) return fallback;
  const repaired = repairPostText(apiPost);
  if (!fallback) return repaired;
  return repairPostText(mergePostMedia(repaired, fallback));
}

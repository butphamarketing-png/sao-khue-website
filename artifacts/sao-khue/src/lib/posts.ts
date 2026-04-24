import type { Post } from "@workspace/api-client-react";

type PostCollection =
  | Post[]
  | {
      data?: unknown;
      items?: unknown;
      posts?: unknown;
    }
  | null
  | undefined;

export function normalizePosts(input: PostCollection): Post[] {
  if (Array.isArray(input)) return input;
  if (!input || typeof input !== "object") return [];

  const candidate = input.data ?? input.items ?? input.posts;
  return Array.isArray(candidate) ? (candidate as Post[]) : [];
}

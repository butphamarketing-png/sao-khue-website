import type { Post } from "@workspace/api-client-react";

export type PostDraftPayload = {
  form: {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    imageAlt: string;
    imageCaption: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
  };
  subCategory: string;
  savedAt: number;
};

const DRAFT_KEY = "sao-khue-admin-post-draft";

export function savePostDraft(payload: PostDraftPayload) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(payload));
  } catch {
    /* quota */
  }
}

export function loadPostDraft(): PostDraftPayload | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PostDraftPayload;
  } catch {
    return null;
  }
}

export function clearPostDraft() {
  localStorage.removeItem(DRAFT_KEY);
}

export function duplicatePostSlug(baseSlug: string, existingSlugs: string[]): string {
  const root = baseSlug.replace(/-\d+$/, "");
  let candidate = baseSlug;
  let n = 2;
  while (existingSlugs.includes(candidate)) {
    candidate = `${root}-${n}`;
    n += 1;
  }
  return candidate;
}

export function filterPostsBySearch<T extends Pick<Post, "title" | "slug" | "excerpt">>(
  posts: T[],
  query: string,
): T[] {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q) ||
      (p.excerpt ?? "").toLowerCase().includes(q),
  );
}

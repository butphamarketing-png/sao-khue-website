import type { Post } from "@workspace/api-client-react";
import { getFallbackPost } from "@workspace/seed-content";

/** UTF-8 read as Latin-1/Windows-1252 (common after bad SQL export). */
export function isMojibakeText(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  return /Ã.|Æ.|áº|Ä.|Å.|â€|ï»|Æ°|Ä'|á»|áº|Ã¢|Ã |Ã©|Ã³|Ãª|Ã¬nh|BÃ¬nh/.test(v);
}

function pickText(api: string | undefined, fallback: string | undefined): string {
  const a = (api ?? "").trim();
  const f = (fallback ?? "").trim();
  if (!f) return a;
  if (!a || isMojibakeText(a)) return f;
  return a;
}

/** Prefer seed UTF-8 when API/DB row was saved with broken encoding. */
export function repairPostText(post: Post): Post {
  const fallback = getFallbackPost(post.slug);
  if (!fallback) return post;

  const titleBroken = isMojibakeText(post.title);
  const excerptBroken = isMojibakeText(post.excerpt ?? "");
  const contentBroken = isMojibakeText((post.content ?? "").slice(0, 500));

  if (!titleBroken && !excerptBroken && !contentBroken) return post;

  return {
    ...post,
    title: pickText(post.title, fallback.title),
    excerpt: pickText(post.excerpt, fallback.excerpt),
    content: pickText(post.content, fallback.content),
    metaTitle: pickText(post.metaTitle, fallback.metaTitle),
    metaDescription: pickText(post.metaDescription, fallback.metaDescription),
    metaKeywords: pickText(post.metaKeywords, fallback.metaKeywords),
  };
}

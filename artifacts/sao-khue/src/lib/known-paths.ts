import { getPostPublicPath, type SeedPost, seedPosts, shouldNoindexPostSlug } from "@workspace/seed-content";
import { collectMauNhaPaths } from "./mau-nha";
import { defaultNavMenu } from "./menu";

/** Tập URL hợp lệ — dùng middleware Vercel + Express 404. */
export function collectKnownPaths(posts: SeedPost[] = seedPosts): Set<string> {
  const paths = new Set<string>([
    "/",
    "/bao-gia",
    "/lien-he",
    "/thiet-ke",
    "/xay-moi",
    "/xay-nha",
    "/cai-tao-nha",
    ...collectMauNhaPaths(),
    "/admin",
    "/dich-vu",
    "/cong-trinh",
    "/tin-tuc",
    "/about-legacy",
    "/services-legacy",
    "/404",
  ]);

  for (const post of posts) {
    // Factory/thin (noindex) — không đưa vào known paths → Edge 404, tiết kiệm crawl budget.
    if (shouldNoindexPostSlug(post.slug) || post.noindex) continue;
    paths.add(getPostPublicPath(post));
  }

  for (const section of defaultNavMenu) {
    if (section.children?.length) {
      for (const child of section.children) {
        paths.add(child.href);
      }
    }
  }

  return paths;
}

export function normalizeRequestPath(pathname: string): string {
  const withoutQuery = pathname.split("?")[0] ?? pathname;
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "") || "/";
}

export function isKnownPath(pathname: string, known: Set<string>): boolean {
  return known.has(normalizeRequestPath(pathname));
}

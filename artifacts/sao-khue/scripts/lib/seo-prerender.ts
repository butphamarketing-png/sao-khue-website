/** SEO helpers for prerender scripts (no Vite asset imports). */

import { getMenuChildren, getMenuLeafSlug } from "../../src/lib/menu-posts.ts";
import { defaultNavMenu, type MenuItem } from "../../src/lib/menu.ts";
import { getPostPublicPath, getPostUrlLeaf } from "../../src/lib/post-url.ts";

export const CATEGORY_CRUMBS: Record<string, { label: string; path: string }> = {
  "dich-vu": { label: "Dịch vụ", path: "/dich-vu" },
  "gioi-thieu": { label: "Giới thiệu", path: "/bai-viet/ve-chung-toi" },
  "cong-trinh": { label: "Công trình", path: "/cong-trinh" },
  "tin-tuc": { label: "Tin tức", path: "/tin-tuc" },
  "kinh-nghiem": { label: "Tin tức", path: "/tin-tuc" },
};

export function truncateMeta(text: string, maxLen: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLen) return normalized;
  const slice = normalized.slice(0, maxLen - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > maxLen * 0.55 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

export function stripPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildFAQSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function buildPostBreadcrumbItems(
  post: { slug: string; title: string; category: string },
  menu: MenuItem[] = defaultNavMenu,
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Trang chủ", path: "/" }];
  const cat = CATEGORY_CRUMBS[post.category];
  if (cat) items.push({ name: cat.label, path: cat.path });

  const leaf = getPostUrlLeaf(post, menu);
  if (leaf) {
    const child = getMenuChildren(post.category, menu).find(
      (c) => getMenuLeafSlug(c.href) === leaf,
    );
    if (child) items.push({ name: child.title, path: child.href });
  }

  items.push({ name: post.title, path: getPostPublicPath(post, menu) });
  return items;
}

export function breadcrumbListJsonLd(
  items: BreadcrumbItem[],
  siteUrl: string,
): Record<string, unknown> {
  const base = siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${base}/` : `${base}${item.path}`,
    })),
  };
}

export function itemListJsonLd(
  items: { name: string; path: string }[],
  siteUrl: string,
  listName?: string,
): Record<string, unknown> {
  const base = siteUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${base}${item.path}`,
    })),
  };
}

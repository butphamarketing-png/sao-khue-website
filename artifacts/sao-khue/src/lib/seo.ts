/** SEO helpers — meta tags, canonical, JSON-LD (tương đương Rank Math cơ bản). */

import { getMenuChildren, getMenuLeafSlug } from "@/lib/menu-posts";
import { defaultNavMenu, type MenuItem } from "@/lib/menu";
import { getPostPublicPath, getPostUrlLeaf } from "@/lib/post-url";

const DEFAULT_SITE_URL = "https://www.kientrucsaokhue.com";

export const SEO_TITLE_MAX = 60;
export const SEO_DESC_MAX = 160;

export const CATEGORY_CRUMBS: Record<string, { label: string; path: string }> = {
  "dich-vu": { label: "Dịch vụ", path: "/dich-vu" },
  "gioi-thieu": { label: "Giới thiệu", path: "/bai-viet/ve-chung-toi" },
  "cong-trinh": { label: "Công trình", path: "/cong-trinh" },
  "tin-tuc": { label: "Tin tức", path: "/tin-tuc" },
  "kinh-nghiem": { label: "Tin tức", path: "/tin-tuc" },
};

/** Cắt title/description để snippet Google không bị cắt xấu. */
export function truncateMeta(text: string | null | undefined, maxLen: number): string {
  const normalized = (text ?? "").replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLen) return normalized;
  const slice = normalized.slice(0, maxLen - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > maxLen * 0.55 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

export function countWordsFromHtml(html: string): number {
  return stripHtmlForSchema(html).split(/\s+/).filter(Boolean).length;
}

/** Fallback OG — path tĩnh (prerender Node không import được .jpg/.png qua Vite). */
const DEFAULT_OG_FALLBACK_PATH = "/images/hero-1.jpg";

export function resolveOgImage(
  url?: string | null,
  fallback = absoluteUrl(DEFAULT_OG_FALLBACK_PATH),
): string {
  const trimmed = (url ?? "").trim();
  if (!trimmed) return fallback;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return absoluteUrl(trimmed.startsWith("/") ? trimmed : `/${trimmed}`);
}

export function getSiteOrigin(): string {
  if (typeof window !== "undefined") {
    return window.location.origin.replace(/\/$/, "");
  }
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined;
  return (fromEnv ?? DEFAULT_SITE_URL).replace(/\/$/, "");
}

export function absoluteUrl(path: string = "/"): string {
  const origin = getSiteOrigin();
  if (!path || path === "/") return `${origin}/`;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function setMetaName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setMetaProperty(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!content) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function setStructuredData(id: string, data: Record<string, unknown> | null) {
  const selector = `script[data-structured="${id}"]`;
  const existing = document.head.querySelector<HTMLScriptElement>(selector);
  if (!data) {
    existing?.remove();
    return;
  }
  let el = existing;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.structured = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

export function setStructuredDataList(id: string, items: Record<string, unknown>[]) {
  if (items.length === 0) {
    setStructuredData(id, null);
    return;
  }
  setStructuredData(id, { "@context": "https://schema.org", "@graph": items });
}

/** Schema trang do prerender chèn — gỡ trước khi React ghi @graph để tránh trùng FAQPage/BlogPosting. */
const PRERENDER_PAGE_SCHEMA_TYPES = new Set([
  "FAQPage",
  "BlogPosting",
  "BreadcrumbList",
  "ItemList",
  "CollectionPage",
]);

function schemaNodeTypes(node: Record<string, unknown>): string[] {
  const raw = node["@type"];
  if (Array.isArray(raw)) return raw.map(String);
  return raw ? [String(raw)] : [];
}

export function removePrerenderPageJsonLd(): void {
  document.head
    .querySelectorAll<HTMLScriptElement>(
      'script[type="application/ld+json"]:not([data-structured])',
    )
    .forEach((el) => {
      const text = el.textContent?.trim();
      if (!text) return;
      try {
        const data = JSON.parse(text) as Record<string, unknown>;
        const nodes = Array.isArray(data["@graph"])
          ? (data["@graph"] as Record<string, unknown>[])
          : [data];
        const isPageSchema = nodes.some((node) =>
          schemaNodeTypes(node).some((t) => PRERENDER_PAGE_SCHEMA_TYPES.has(t)),
        );
        if (isPageSchema) el.remove();
      } catch {
        /* giữ script lỗi parse */
      }
    });
}

export type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  noindex?: boolean;
  /** ISO 8601 — bài viết (article:published_time) */
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function stripHtmlForSchema(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function applyPageSeo(input: PageSeoInput) {
  const canonical = absoluteUrl(input.path ?? window.location.pathname);
  const robots = input.noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large";
  const title = truncateMeta(input.title, SEO_TITLE_MAX);
  const description = truncateMeta(input.description, SEO_DESC_MAX);
  const ogImage = resolveOgImage(input.ogImage);
  const isArticle = input.ogType === "article";

  document.title = title;
  setMetaName("description", description);
  setMetaName("robots", robots);
  if (input.keywords) setMetaName("keywords", input.keywords);
  else setMetaName("keywords", "");

  setMetaProperty("og:type", input.ogType ?? "website");
  setMetaProperty("og:title", title);
  setMetaProperty("og:description", description);
  setMetaProperty("og:url", canonical);
  setMetaProperty("og:locale", "vi_VN");
  if (ogImage) {
    setMetaProperty("og:image", ogImage);
    if (input.ogImageAlt) setMetaProperty("og:image:alt", input.ogImageAlt);
  }

  if (isArticle && input.publishedTime) {
    setMetaProperty("article:published_time", input.publishedTime);
    setMetaProperty("article:modified_time", input.modifiedTime ?? input.publishedTime);
  } else {
    setMetaProperty("article:published_time", "");
    setMetaProperty("article:modified_time", "");
  }

  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", title);
  setMetaName("twitter:description", description);
  setMetaName("twitter:image", ogImage);

  setCanonical(canonical);

  if (input.jsonLd) {
    removePrerenderPageJsonLd();
    const list = Array.isArray(input.jsonLd) ? input.jsonLd : [input.jsonLd];
    setStructuredDataList("page", list);
  } else {
    removePrerenderPageJsonLd();
    setStructuredData("page", null);
  }
}

export type LocalBusinessInput = {
  name: string;
  url: string;
  telephone: string;
  email: string;
  image: string;
  address: string;
  sameAs: string[];
  description?: string;
  /** Link Google Maps (hasMap) — khớp NAP & embed trên /lien-he */
  mapsUrl?: string;
  taxID?: string;
  foundingDate?: string;
};

export type AggregateRatingInput = {
  ratingValue: number;
  reviewCount: number;
};

const DEFAULT_SERVICE_OFFERS = [
  { name: "Xây nhà trọn gói TP.HCM", url: "/dich-vu/xay-nha-tron-goi" },
  { name: "Thiết kế nhà phố", url: "/dich-vu/thiet-ke-nha" },
  { name: "Cải tạo nhà cũ", url: "/dich-vu/sua-chua-nha" },
  { name: "Báo giá xây dựng", url: "/bao-gia" },
];

export function buildLocalBusinessSchema(
  input: LocalBusinessInput & {
    openingHours?: string;
    aggregateRating?: AggregateRatingInput;
  },
) {
  const origin = input.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: input.name,
    description:
      input.description ??
      "Thiết kế và thi công xây dựng nhà phố, biệt thự trọn gói tại TP.HCM và các tỉnh lân cận.",
    url: input.url,
    telephone: input.telephone,
    email: input.email || undefined,
    image: input.image,
    priceRange: "$$",
    taxID: input.taxID?.trim() || undefined,
    foundingDate: input.foundingDate?.trim() || "2014",
    knowsAbout: [
      "Xây nhà trọn gói",
      "Báo giá xây nhà",
      "Cải tạo nhà cũ",
      "Thiết kế nhà phố",
      "Xây dựng TP.HCM",
    ],
    makesOffer: DEFAULT_SERVICE_OFFERS.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${origin}${s.url}`,
        provider: { "@type": "LocalBusiness", name: input.name },
      },
    })),
    openingHours: input.openingHours || undefined,
    aggregateRating: input.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: input.aggregateRating.ratingValue,
          reviewCount: input.aggregateRating.reviewCount,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined,
    areaServed: [
      { "@type": "City", name: "Thành phố Hồ Chí Minh" },
      { "@type": "AdministrativeArea", name: "Bình Dương" },
      { "@type": "AdministrativeArea", name: "Đồng Nai" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: input.address,
      addressLocality: "TP. Hồ Chí Minh",
      addressRegion: "Hồ Chí Minh",
      addressCountry: "VN",
    },
    sameAs: input.sameAs.length > 0 ? input.sameAs : undefined,
    hasMap: input.mapsUrl?.trim() || undefined,
  };
}

export function buildWebSiteSchema(name: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    inLanguage: "vi-VN",
    publisher: { "@type": "Organization", name },
  };
}

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
  publisherLogoUrl?: string;
};

export function buildArticleSchema(
  input: ArticleSchemaInput & { wordCount?: number; articleBody?: string },
) {
  const wordCount =
    input.wordCount ??
    (input.articleBody ? countWordsFromHtml(input.articleBody) : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: input.image ? [resolveOgImage(input.image)] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "vi-VN",
    wordCount: wordCount && wordCount > 0 ? wordCount : undefined,
    author: { "@type": "Organization", name: input.authorName },
    publisher: {
      "@type": "Organization",
      name: input.authorName,
      logo: input.publisherLogoUrl
        ? { "@type": "ImageObject", url: input.publisherLogoUrl }
        : undefined,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
  };
}

/** Chuẩn hóa HTML bài viết: lazy-load ảnh, alt, external link an toàn */
export function enhanceArticleHtml(html: string, defaultImageAlt?: string): string {
  // Bỏ khoảng trắng giữa thẻ HTML — tránh chèn <br/> ảo gây giãn dòng (ul/li, h2/p…)
  let out = html.replace(/>\s+</g, "><").trim();
  // Chỉ dùng <br/> khi nội dung thuần text (không có thẻ block)
  if (!/<(?:p|h[1-6]|ul|ol|li|table|div|figure|blockquote)\b/i.test(out)) {
    out = out.replace(/\n/g, "<br/>");
  }
  out = out.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    let next = attrs;
    const safeAlt = defaultImageAlt?.replace(/"/g, "&quot;") ?? "";
    if (safeAlt) {
      if (!/\balt\s*=/i.test(next)) {
        next = `${next} alt="${safeAlt}"`;
      } else if (/\balt\s*=\s*["']\s*["']/i.test(next)) {
        next = next.replace(/\balt\s*=\s*["']\s*["']/i, `alt="${safeAlt}"`);
      }
    }
    if (!/loading\s*=/i.test(next)) next = `${next} loading="lazy"`;
    if (!/decoding\s*=/i.test(next)) next = `${next} decoding="async"`;
    return `<img${next}>`;
  });
  out = out.replace(/<a\b([^>]*href=["']https?:\/\/[^"']+["'][^>]*)>/gi, (match, attrs: string) => {
    if (/rel\s*=/i.test(attrs)) return match;
    return `<a${attrs} rel="noopener noreferrer" target="_blank">`;
  });
  return out;
}

export function buildServiceOfferSchema(
  serviceName: string,
  description: string,
  lowPrice: number,
  highPrice: number,
  url: string,
  providerName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: { "@type": "Organization", name: providerName },
    areaServed: "TP. Hồ Chí Minh",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      lowPrice,
      highPrice,
      url,
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Trích FAQ từ HTML bài viết (h2 FAQ → các cặp h3 + p). */
export function extractFaqFromArticleHtml(html: string): { q: string; a: string }[] {
  const faqBlock = html.match(
    /<h2[^>]*>[^<]*(?:FAQ|Câu hỏi thường gặp)[^<]*<\/h2>([\s\S]*?)(?=<h2\b|$)/i,
  );
  if (!faqBlock) return [];

  const items: { q: string; a: string }[] = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(faqBlock[1])) !== null) {
    const q = stripHtmlForSchema(match[1]);
    const a = stripHtmlForSchema(match[2]);
    if (q && a) items.push({ q, a });
  }
  return items;
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

export function buildItemListSchema(
  items: { name: string; url: string }[],
  listName?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function buildCollectionPageSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description: truncateMeta(description, SEO_DESC_MAX),
    url,
    inLanguage: "vi-VN",
    isPartOf: { "@type": "WebSite", url: getSiteOrigin() },
  };
}

type PostBreadcrumbInput = {
  slug: string;
  title: string;
  category: string;
};

/** Breadcrumb đầy đủ: Trang chủ → Danh mục → Mục menu con → Bài viết */
export function buildPostBreadcrumbItems(
  post: PostBreadcrumbInput,
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

export function findMenuSectionPathForPost(
  post: PostBreadcrumbInput,
  menu: MenuItem[] = defaultNavMenu,
): string | null {
  const leaf = getPostUrlLeaf(post, menu);
  if (!leaf) return CATEGORY_CRUMBS[post.category]?.path ?? null;
  const child = getMenuChildren(post.category, menu).find(
    (c) => getMenuLeafSlug(c.href) === leaf,
  );
  return child?.href ?? CATEGORY_CRUMBS[post.category]?.path ?? null;
}

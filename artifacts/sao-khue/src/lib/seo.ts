/** SEO helpers — meta tags, canonical, JSON-LD (tương đương Rank Math cơ bản). */

const DEFAULT_SITE_URL = "https://kientrucsaokhue.com";

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
  const ogImage = input.ogImage ?? "";
  const isArticle = input.ogType === "article";

  document.title = input.title;
  setMetaName("description", input.description);
  setMetaName("robots", robots);
  if (input.keywords) setMetaName("keywords", input.keywords);
  else setMetaName("keywords", "");

  setMetaProperty("og:type", input.ogType ?? "website");
  setMetaProperty("og:title", input.title);
  setMetaProperty("og:description", input.description);
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
  setMetaName("twitter:title", input.title);
  setMetaName("twitter:description", input.description);
  if (ogImage) setMetaName("twitter:image", ogImage);

  setCanonical(canonical);

  if (input.jsonLd) {
    const list = Array.isArray(input.jsonLd) ? input.jsonLd : [input.jsonLd];
    setStructuredDataList("page", list);
  } else {
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
};

export type AggregateRatingInput = {
  ratingValue: number;
  reviewCount: number;
};

export function buildLocalBusinessSchema(
  input: LocalBusinessInput & {
    openingHours?: string;
    aggregateRating?: AggregateRatingInput;
  },
) {
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

export function buildArticleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: input.image ? [input.image] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "vi-VN",
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

/** Chuẩn hóa HTML bài viết: lazy-load ảnh, external link an toàn */
export function enhanceArticleHtml(html: string): string {
  let out = html.replace(/\n/g, "<br/>");
  out = out.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    if (/loading\s*=/i.test(attrs)) return `<img${attrs}>`;
    return `<img${attrs} loading="lazy" decoding="async">`;
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

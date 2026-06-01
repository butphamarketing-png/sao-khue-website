/** Pure HTML head builders for static prerender (no DOM). */

export const GSC_VERIFICATION_TOKEN = "YwY_bBLvygZlyntSLWYe9bShrCJQJKbq_A5IMOJtUIo";

export type PrerenderMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function absoluteUrl(siteUrl: string, path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildHeadTags(meta: PrerenderMeta, siteUrl: string): string {
  const canonical = absoluteUrl(siteUrl, meta.path);
  const robots = meta.noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large";
  const lines: string[] = [
    `<meta name="google-site-verification" content="${escapeHtml(GSC_VERIFICATION_TOKEN)}" />`,
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.ogType ?? "website")}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:locale" content="vi_VN" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  ];
  if (meta.keywords) {
    lines.push(`<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`);
  }
  if (meta.ogImage) {
    lines.push(`<meta property="og:image" content="${escapeHtml(meta.ogImage)}" />`);
    lines.push(`<meta name="twitter:image" content="${escapeHtml(meta.ogImage)}" />`);
  }
  if (meta.ogType === "article" && meta.publishedTime) {
    lines.push(
      `<meta property="article:published_time" content="${escapeHtml(meta.publishedTime)}" />`,
    );
    lines.push(
      `<meta property="article:modified_time" content="${escapeHtml(meta.modifiedTime ?? meta.publishedTime)}" />`,
    );
  }
  return lines.join("\n    ");
}

export function buildJsonLdScript(data: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

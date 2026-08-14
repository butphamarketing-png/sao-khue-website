/** Pure HTML head builders for static prerender (no DOM). */

export const GSC_VERIFICATION_TOKEN = "YwY_bBLvygZlyntSLWYe9bShrCJQJKbq_A5IMOJtUIo";
export const BING_VERIFICATION_TOKEN = "51EDA808239AC9FD6C41A2B221789CEF";

export type PrerenderMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
};

const OG_SITE_NAME = "Kiến Trúc Sao Khuê";
const DEFAULT_OG_IMAGE_ALT =
  "Kiến Trúc Sao Khuê — thiết kế và xây nhà trọn gói TP.HCM";

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

function truncateMeta(text: string, maxLen: number): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLen) return normalized;
  const slice = normalized.slice(0, maxLen - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > maxLen * 0.55 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

export function buildHeadTags(meta: PrerenderMeta, siteUrl: string): string {
  const canonical = absoluteUrl(siteUrl, meta.path);
  const robots = meta.noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large";
  const title = truncateMeta(meta.title, 60);
  const description = truncateMeta(meta.description, 160);
  const rawOg = meta.ogImage?.trim() || "/images/hero-1.jpg";
  const ogImage = /^https?:\/\//i.test(rawOg) ? rawOg : absoluteUrl(siteUrl, rawOg);
  const lines: string[] = [
    `<meta name="google-site-verification" content="${escapeHtml(GSC_VERIFICATION_TOKEN)}" />`,
    `<meta name="msvalidate.01" content="${escapeHtml(BING_VERIFICATION_TOKEN)}" />`,
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${escapeHtml(meta.ogType ?? "website")}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:locale" content="vi_VN" />`,
    `<meta property="og:site_name" content="${escapeHtml(OG_SITE_NAME)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(meta.ogImageAlt?.trim() || DEFAULT_OG_IMAGE_ALT)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
  ];
  if (meta.keywords) {
    lines.push(`<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`);
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

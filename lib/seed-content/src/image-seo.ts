/**
 * Chuẩn SEO ảnh — WordPress / Rank Math:
 * - Alt & chú thích = cụm từ khóa focus (KHÔNG dùng tiêu đề bài)
 * - Từ khóa đầu trong metaKeywords = focus keyword (dấu sao Rank Math)
 */
export type ImageSeoInput = {
  slug?: string;
  metaKeywords?: string;
  imageAlt?: string;
};

/** Danh sách từ khóa focus. Phần tử đầu = từ khóa chính. */
export function parseFocusKeywords(metaKeywords?: string): string[] {
  return (metaKeywords ?? "")
    .split(",")
    .map((k) => k.trim().replace(/\s+/g, " "))
    .filter(Boolean);
}

/** Từ khóa chính (focus) — cụm đầu tiên trong ô Từ khóa SEO. */
export function getPrimaryFocusKeyword(metaKeywords?: string): string {
  return parseFocusKeywords(metaKeywords)[0] ?? "";
}

export function normalizeSeoText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/\./g, "")
    .toLowerCase();
}

/**
 * Chọn cụm từ khóa cho alt — chỉ từ danh sách focus keyword:
 * 1) Cụm khớp slug (vd. thi-cong-duong-giao-thong → "thi công đường giao thông")
 * 2) Không khớp → từ khóa chính (phần tử đầu)
 * Không dùng tiêu đề bài.
 */
export function pickImageAltKeyword(input: {
  slug?: string;
  metaKeywords?: string;
}): string {
  const keywords = parseFocusKeywords(input.metaKeywords);
  if (!keywords.length) return "";

  const slugHay = normalizeSeoText((input.slug ?? "").replace(/-/g, " "));

  const inSlug = keywords
    .map((raw) => ({ raw, hay: normalizeSeoText(raw) }))
    .filter((k) => k.hay.length > 0 && slugHay.includes(k.hay))
    .sort((a, b) => b.raw.length - a.raw.length);

  if (inSlug[0]) return inSlug[0].raw;
  return keywords[0];
}

/** Alt = cụm từ khóa (custom hoặc tự chọn từ focus keywords). Không fallback tiêu đề. */
export function buildImageAlt(input: ImageSeoInput): string {
  const custom = input.imageAlt?.trim();
  if (custom) return truncateAlt(custom);

  const kw = pickImageAltKeyword({
    slug: input.slug,
    metaKeywords: input.metaKeywords,
  });
  if (kw) return truncateAlt(kw);

  const fromSlug = (input.slug ?? "").replace(/-/g, " ").trim();
  if (fromSlug) return truncateAlt(fromSlug);

  return "";
}

/** Alt trùng đúng một cụm từ khóa focus (chuẩn WP — không phải cả tiêu đề). */
export function altMatchesFocusKeywordPhrase(alt: string, metaKeywords?: string): boolean {
  const hay = normalizeSeoText(alt.trim());
  if (!hay) return false;
  return parseFocusKeywords(metaKeywords).some((kw) => normalizeSeoText(kw) === hay);
}

/** Rank Math: alt chứa ít nhất một từ khóa focus (lỏng hơn — dùng khi alt hơi dài). */
export function imageAltContainsFocusKeyword(alt: string, metaKeywords?: string): boolean {
  const haystack = normalizeSeoText(alt);
  if (!haystack) return false;
  const keywords = parseFocusKeywords(metaKeywords);
  if (!keywords.length) return false;
  return keywords.some((kw) => haystack.includes(normalizeSeoText(kw)));
}

function truncateAlt(text: string, max = 125): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trimEnd()}…`;
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function suggestImageFilename(slug: string, suffix = ""): string {
  const base = slug
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return suffix ? `${base}-${suffix}.jpg` : `${base}.jpg`;
}

export function buildFeaturedImageFigure(
  imageUrl: string,
  alt: string,
  caption?: string,
): string {
  const safeAlt = escapeAttr(alt);
  const cap = (caption?.trim() || alt).trim();
  const safeCaption = escapeAttr(cap);
  return `<figure class="article-figure">
<img src="${escapeAttr(imageUrl)}" alt="${safeAlt}" width="1200" height="630" loading="eager" decoding="async" />
<figcaption>${safeCaption}</figcaption>
</figure>
`;
}

/** Ảnh trong nội dung — alt = từ khóa; chú thích tuỳ chọn (WP). */
export function buildInlineImageFigure(
  imageUrl: string,
  alt: string,
  caption?: string,
): string {
  const safeAlt = escapeAttr(alt);
  const cap = caption?.trim();
  const figcaption = cap
    ? `<figcaption>${escapeAttr(cap)}</figcaption>`
    : "";
  return `<figure class="article-figure article-figure--inline">
<img src="${escapeAttr(imageUrl)}" alt="${safeAlt}" loading="lazy" decoding="async" />
${figcaption}
</figure>
`;
}

export function contentHasImage(html: string): boolean {
  return /<img\b/i.test(html);
}

export type ContentImageAudit = {
  total: number;
  missingAlt: number;
  weakAlt: number;
  good: number;
  details: string[];
};

function parseImgAlt(attrs: string): string {
  const m = /\balt\s*=\s*["']([^"']*)["']/i.exec(attrs);
  return m?.[1]?.trim() ?? "";
}

/** Kiểm tra mọi &lt;img&gt; trong HTML bài — Rank Math / Google Images. */
export function auditContentImages(
  html: string,
  metaKeywords?: string,
): ContentImageAudit {
  const details: string[] = [];
  let missingAlt = 0;
  let weakAlt = 0;
  let good = 0;
  let total = 0;

  const re = /<img\b([^>]*)>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    total += 1;
    const alt = parseImgAlt(m[1]);
    if (!alt) {
      missingAlt += 1;
      details.push(`Ảnh #${total}: thiếu alt`);
      continue;
    }
    if (
      altMatchesFocusKeywordPhrase(alt, metaKeywords) ||
      imageAltContainsFocusKeyword(alt, metaKeywords)
    ) {
      good += 1;
    } else {
      weakAlt += 1;
      details.push(`Ảnh #${total}: alt chưa có từ khóa focus — "${alt}"`);
    }
  }

  return { total, missingAlt, weakAlt, good, details: details.slice(0, 6) };
}

export function countArticleImages(html: string, featuredUrl?: string): number {
  const inHtml = (html.match(/<img\b/gi) ?? []).length;
  if (featuredUrl?.trim() && !contentHasImage(html)) return inHtml + 1;
  return inHtml;
}

export function prepareArticleHtml(
  content: string,
  options?: { imageUrl?: string; imageAlt?: string; imageCaption?: string },
): { html: string; featuredInjected: boolean } {
  const imageUrl = options?.imageUrl?.trim() ?? "";
  const alt = options?.imageAlt?.trim() ?? "";
  const caption = options?.imageCaption?.trim();
  const body = content ?? "";

  if (!imageUrl || contentHasImage(body)) {
    return { html: body, featuredInjected: false };
  }

  return {
    html: `${buildFeaturedImageFigure(imageUrl, alt, caption)}\n${body}`,
    featuredInjected: true,
  };
}

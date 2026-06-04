import { normalizeSeoText } from "./image-seo";

export const TOC_MIN_WORDS = 600;
export const TOC_MIN_H2 = 3;

export type TocHeading = {
  level: 2 | 3;
  id: string;
  text: string;
};

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function slugifyHeading(text: string, used: Set<string>): string {
  let base = normalizeSeoText(stripTags(text))
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  if (!base) base = "muc";
  let id = base;
  let n = 2;
  while (used.has(id)) {
    id = `${base}-${n++}`;
  }
  used.add(id);
  return id;
}

/** Gắn id cho H2/H3 (phục vụ anchor TOC). */
export function ensureHeadingIds(html: string): { html: string; headings: TocHeading[] } {
  const used = new Set<string>();
  const headings: TocHeading[] = [];

  const withIds = html.replace(
    /<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi,
    (full, level: string, attrs: string | undefined, inner: string) => {
      const lv = Number(level) as 2 | 3;
      const text = stripTags(inner);
      if (!text) return full;

      let attrStr = attrs ?? "";
      let id = "";
      const idMatch = /\bid\s*=\s*["']([^"']+)["']/i.exec(attrStr);
      if (idMatch) {
        id = idMatch[1];
        used.add(id);
      } else {
        id = slugifyHeading(text, used);
        attrStr = attrStr.trim()
          ? `${attrStr.trim()} id="${id}"`
          : ` id="${id}"`;
      }
      headings.push({ level: lv, id, text });
      return `<h${level}${attrStr}>${inner}</h${level}>`;
    },
  );

  return { html: withIds, headings };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildTocHtml(headings: TocHeading[]): string {
  const h2Count = headings.filter((h) => h.level === 2).length;
  if (h2Count < TOC_MIN_H2) return "";

  let html = '<nav class="article-toc" aria-label="Mục lục bài viết">\n';
  html += '<p class="article-toc__title">Mục lục</p>\n<ol class="article-toc__list">\n';

  for (const h of headings) {
    const sub = h.level === 3 ? ' class="article-toc__item--sub"' : "";
    html += `<li${sub}><a href="#${h.id}">${escapeHtml(h.text)}</a></li>\n`;
  }
  html += "</ol>\n</nav>\n";

  return html;
}

export function hasArticleToc(html: string): boolean {
  return /class=["'][^"']*article-toc[^"']*["']/i.test(html) || /id=["']toc["']/i.test(html);
}

export function countWordsFromArticleHtml(html: string): number {
  const plain = stripTags(html.replace(/<br\s*\/?>/gi, "\n"));
  return plain.split(/\s+/).filter(Boolean).length;
}

export function shouldInjectArticleToc(html: string, wordCount?: number): boolean {
  if (hasArticleToc(html)) return false;
  const words = wordCount ?? countWordsFromArticleHtml(html);
  if (words < TOC_MIN_WORDS) return false;
  const h2 = (html.match(/<h2\b/gi) ?? []).length;
  return h2 >= TOC_MIN_H2;
}

function insertTocAfterIntro(html: string, toc: string): string {
  const figureMatch = /<\/figure>\s*/i.exec(html);
  if (figureMatch?.index != null) {
    const pos = figureMatch.index + figureMatch[0].length;
    return `${html.slice(0, pos)}\n${toc}\n${html.slice(pos)}`;
  }
  const pMatch = /<\/p>/i.exec(html);
  if (pMatch?.index != null) {
    const pos = pMatch.index + pMatch[0].length;
    return `${html.slice(0, pos)}\n${toc}\n${html.slice(pos)}`;
  }
  return `${toc}\n${html}`;
}

/** Tự chèn mục lục cho bài dài (≥600 từ, ≥3 H2). */
export function injectArticleToc(html: string, wordCount?: number): string {
  const body = html ?? "";
  if (!shouldInjectArticleToc(body, wordCount)) return body;

  const { html: withIds, headings } = ensureHeadingIds(body);
  const toc = buildTocHtml(headings);
  if (!toc) return withIds;

  return insertTocAfterIntro(withIds, toc);
}

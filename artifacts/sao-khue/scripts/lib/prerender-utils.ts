/** Helpers for prerender script only (no Vite path aliases). */

export function enhanceArticleHtml(html: string, defaultImageAlt?: string): string {
  let out = html.replace(/\n/g, "<br/>");
  out = out.replace(/<img\b([^>]*)>/gi, (_match, attrs: string) => {
    let next = attrs;
    if (defaultImageAlt && !/\balt\s*=/i.test(next)) {
      next = `${next} alt="${defaultImageAlt.replace(/"/g, "&quot;")}"`;
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

/** Helpers for prerender script only (no Vite path aliases). */

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

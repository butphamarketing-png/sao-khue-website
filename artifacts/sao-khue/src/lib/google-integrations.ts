/** Chuẩn hóa mã Google dán từ admin (ID hoặc cả thẻ script/meta). */

export function parseGaMeasurementId(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (/^(G-[A-Z0-9]+|UA-\d+-\d+)$/i.test(trimmed)) return trimmed;
  const fromConfig = trimmed.match(/gtag\s*\(\s*['"]config['"]\s*,\s*['"]([^'"]+)['"]/i);
  if (fromConfig?.[1]) return fromConfig[1];
  const fromJs = trimmed.match(/(?:id=|['"])(G-[A-Z0-9]+|UA-\d+-\d+)/i);
  return fromJs?.[1] ?? trimmed.split(/\s+/)[0] ?? "";
}

export function parseGscVerificationToken(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  const fromMeta = trimmed.match(/content=["']([^"']+)["']/i);
  if (fromMeta?.[1]) return fromMeta[1].trim();
  return trimmed.replace(/\s+/g, "");
}

function isGoogleMapsEmbedSource(value: string): boolean {
  return /google\.com\/maps|maps\.google\.com/i.test(value);
}

/** Chỉ giữ iframe Google Maps (bỏ script). Chấp nhận dán cả đoạn iframe hoặc chỉ URL embed. */
export function sanitizeGoogleMapEmbed(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";

  if (!/<iframe/i.test(trimmed)) {
    const src = trimmed.replace(/^["']|["']$/g, "");
    if (isGoogleMapsEmbedSource(src) && /^https?:\/\//i.test(src)) {
      return `<iframe src="${src}" width="600" height="450" style="border:0" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
    return "";
  }

  if (!isGoogleMapsEmbedSource(trimmed)) return "";
  return trimmed.replace(/<script\b[^<]*<\/script>/gi, "");
}

export function mapEmbedSrc(embedHtml: string, fallbackAddress: string): string {
  const sanitized = sanitizeGoogleMapEmbed(embedHtml);
  if (sanitized) {
    const match = sanitized.match(/\bsrc=["']([^"']+)["']/i);
    if (match?.[1]) return match[1];
  }
  if (!fallbackAddress.trim()) return "";
  return `https://maps.google.com/maps?q=${encodeURIComponent(fallbackAddress.trim())}&z=15&output=embed`;
}

export type SocialLinkOption = {
  url: string;
  label: string;
};

/** Thu thập URL mạng xã hội không rỗng từ site settings (hỗ trợ URL phụ). */
export function collectSocialUrls(
  ...values: (string | undefined | null)[]
): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    const url = value?.trim();
    if (!url || seen.has(url)) continue;
    seen.add(url);
    out.push(url);
  }
  return out;
}

function labelFromFacebookUrl(url: string, index: number): string {
  try {
    const pathname = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
    const slug = pathname.split("/").filter(Boolean)[0];
    if (slug && slug !== "profile.php" && slug !== "people") {
      return slug.replace(/[-_.]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    }
  } catch {
    /* invalid url */
  }
  return index === 0 ? "Fanpage chính" : `Fanpage ${index + 1}`;
}

function labelFromMessengerUrl(url: string, index: number): string {
  try {
    const host = new URL(url).hostname;
    if (host.includes("m.me")) {
      const slug = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
      if (slug) {
        return slug.replace(/[-_.]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      }
    }
  } catch {
    /* invalid url */
  }
  return index === 0 ? "Messenger chính" : `Messenger ${index + 1}`;
}

function buildSocialOptions(
  entries: { url?: string; label?: string }[],
  labelFromUrl: (url: string, index: number) => string,
): SocialLinkOption[] {
  const seen = new Set<string>();
  const out: SocialLinkOption[] = [];

  entries.forEach((entry, index) => {
    const url = entry.url?.trim();
    if (!url || seen.has(url)) return;
    seen.add(url);
    const label = entry.label?.trim() || labelFromUrl(url, index);
    out.push({ url, label });
  });

  return out;
}

export function facebookUrlsFromSettings(s: {
  facebookUrl?: string;
  facebookUrl2?: string;
}): string[] {
  return collectSocialUrls(s.facebookUrl, s.facebookUrl2);
}

export function messengerUrlsFromSettings(s: {
  messengerUrl?: string;
  messengerUrl2?: string;
}): string[] {
  return collectSocialUrls(s.messengerUrl, s.messengerUrl2);
}

export function facebookOptionsFromSettings(s: {
  facebookUrl?: string;
  facebookUrl2?: string;
  facebookLabel1?: string;
  facebookLabel2?: string;
}): SocialLinkOption[] {
  return buildSocialOptions(
    [
      { url: s.facebookUrl, label: s.facebookLabel1 },
      { url: s.facebookUrl2, label: s.facebookLabel2 },
    ],
    labelFromFacebookUrl,
  );
}

export function messengerOptionsFromSettings(s: {
  messengerUrl?: string;
  messengerUrl2?: string;
  messengerLabel1?: string;
  messengerLabel2?: string;
}): SocialLinkOption[] {
  return buildSocialOptions(
    [
      { url: s.messengerUrl, label: s.messengerLabel1 },
      { url: s.messengerUrl2, label: s.messengerLabel2 },
    ],
    labelFromMessengerUrl,
  );
}

export const DEFAULT_GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/RFwHGqVyQTiAz4zy9";

export function googleMapsUrlFromAddress(address?: string): string | null {
  const trimmed = address?.trim();
  if (!trimmed) return null;
  return `https://maps.google.com/?q=${encodeURIComponent(trimmed)}`;
}

/** Link mở Google Maps (ưu tiên link rút gọn từ admin, không thì theo địa chỉ). */
export function resolveGoogleMapsOpenUrl(settings: {
  googleMapsUrl?: string;
  address1?: string;
}): string | null {
  const custom = settings.googleMapsUrl?.trim();
  if (custom) return custom;
  return googleMapsUrlFromAddress(settings.address1);
}

export function openExternalUrl(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

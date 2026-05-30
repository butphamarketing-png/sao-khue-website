import bundledLogo from "@/assets/logo.png";
import bundledOpenGraph from "@/assets/opengraph.jpg";

/** Logo baked into the JS build — works even when /images/logo.png is missing on the server. */
export const BUNDLED_LOGO_URL = bundledLogo;

export const BUNDLED_OPENGRAPH_URL = bundledOpenGraph;

export const LEGACY_LOGO_PATH = "/images/logo.png";

function isBrokenLogoPath(url: string): boolean {
  const lower = url.toLowerCase();
  if (!lower) return true;
  if (lower.includes("/wp-content/")) return true;
  if (lower.endsWith("/images/logo.png") || lower.endsWith("images/logo.png")) return true;
  if (lower === LEGACY_LOGO_PATH) return true;
  if (lower.includes("logo.png") && lower.includes("kientrucsaokhue.com")) return true;
  return false;
}

/** Normalize CMS logo URLs — production often still points at missing /images/logo.png. */
export function resolveLogoUrl(url?: string | null): string {
  const trimmed = (url ?? "").trim();
  if (isBrokenLogoPath(trimmed)) return BUNDLED_LOGO_URL;
  return trimmed;
}

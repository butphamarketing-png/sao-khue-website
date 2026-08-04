/** Google Ads + GA4 conversion helpers — fire after lead / call / Zalo. */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AdsConversionKind = "lead" | "call" | "zalo";

function adsId(): string {
  const raw = (import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined)?.trim() ?? "";
  if (/^AW-\d+$/i.test(raw)) return raw;
  const m = raw.match(/AW-\d+/i);
  return m?.[0] ?? "";
}

function labelFor(kind: AdsConversionKind): string {
  const map: Record<AdsConversionKind, string | undefined> = {
    lead: import.meta.env.VITE_GOOGLE_ADS_CONV_LEAD as string | undefined,
    call: import.meta.env.VITE_GOOGLE_ADS_CONV_CALL as string | undefined,
    zalo: import.meta.env.VITE_GOOGLE_ADS_CONV_ZALO as string | undefined,
  };
  return (map[kind] ?? "").trim();
}

const GA4_EVENT: Record<AdsConversionKind, string> = {
  lead: "generate_lead",
  call: "click_call",
  zalo: "click_zalo",
};

/** Ensure AW- config is registered alongside GA4 (idempotent). */
export function ensureGoogleAdsConfig(): void {
  const id = adsId();
  if (!id || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("config", id);
}

/**
 * Fire GA4 event + optional Google Ads conversion.
 * Safe no-op when gtag / IDs missing.
 */
export function trackAdsConversion(
  kind: AdsConversionKind,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined") return;
  ensureGoogleAdsConfig();

  const eventName = GA4_EVENT[kind];
  const payload = {
    send_to: undefined as string | undefined,
    ...params,
  };

  const id = adsId();
  const label = labelFor(kind);
  if (id && label) {
    payload.send_to = `${id}/${label}`;
  }

  if (typeof window.gtag === "function") {
    if (id && label) {
      window.gtag("event", "conversion", {
        send_to: `${id}/${label}`,
        ...params,
      });
    }
    window.gtag("event", eventName, {
      event_category: "ads",
      event_label: kind,
      ...params,
    });
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ads_conversion: kind, ...params });
}

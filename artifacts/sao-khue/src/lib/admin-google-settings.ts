const STORAGE_KEY = "sao-khue-admin-google-settings-v1";

export type GoogleAdminFields = {
  googleMapEmbed: string;
  gaTrackingId: string;
  gscVerification: string;
};

export function pickApiString(
  data: Record<string, unknown>,
  camelKey: string,
  snakeKey: string,
  fallback = "",
): string {
  const value = data[camelKey] ?? data[snakeKey];
  return typeof value === "string" ? value : fallback;
}

export function readGoogleFieldsFromApi(
  data: Record<string, unknown> | null | undefined,
  defaults: GoogleAdminFields,
): GoogleAdminFields {
  const rest = data ?? {};
  return {
    googleMapEmbed: pickApiString(rest, "googleMapEmbed", "google_map_embed", defaults.googleMapEmbed),
    gaTrackingId: pickApiString(rest, "gaTrackingId", "ga_tracking_id", defaults.gaTrackingId),
    gscVerification: pickApiString(rest, "gscVerification", "gsc_verification", defaults.gscVerification),
  };
}

export function loadGoogleSettingsDraft(): GoogleAdminFields | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<GoogleAdminFields>;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      googleMapEmbed: typeof parsed.googleMapEmbed === "string" ? parsed.googleMapEmbed : "",
      gaTrackingId: typeof parsed.gaTrackingId === "string" ? parsed.gaTrackingId : "",
      gscVerification: typeof parsed.gscVerification === "string" ? parsed.gscVerification : "",
    };
  } catch {
    return null;
  }
}

export function saveGoogleSettingsDraft(fields: GoogleAdminFields) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fields));
  } catch {
    /* quota / private mode */
  }
}

export function mergeGoogleFieldsWithDraft(
  fromApi: GoogleAdminFields,
): GoogleAdminFields {
  const draft = loadGoogleSettingsDraft();
  if (!draft) return fromApi;

  return {
    googleMapEmbed: fromApi.googleMapEmbed.trim() ? fromApi.googleMapEmbed : draft.googleMapEmbed,
    gaTrackingId: fromApi.gaTrackingId.trim() ? fromApi.gaTrackingId : draft.gaTrackingId,
    gscVerification: fromApi.gscVerification.trim() ? fromApi.gscVerification : draft.gscVerification,
  };
}

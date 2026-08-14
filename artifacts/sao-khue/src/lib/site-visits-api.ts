export type SiteVisitRow = {
  ip: string;
  city: string;
  region: string;
  country: string;
  level: "an toàn" | "nghi ngờ";
  visits: number;
  lead: string;
  lastSeen: string;
  lastPath: string;
};

export type SiteVisitsResponse = {
  period: { days: number };
  totals: { visits: number; uniqueIps: number; suspicious: number };
  daily: Array<{ date: string; visits: number }>;
  rows: SiteVisitRow[];
};

export async function trackSiteVisit(path: string): Promise<void> {
  try {
    await fetch("/api/site-visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
      keepalive: true,
    });
  } catch {
    /* ignore tracking errors */
  }
}

export async function fetchSiteVisits(days = 31): Promise<SiteVisitsResponse | null> {
  const res = await fetch(`/api/site-visits?days=${days}`, { credentials: "include" });
  if (!res.ok) return null;
  return (await res.json()) as SiteVisitsResponse;
}

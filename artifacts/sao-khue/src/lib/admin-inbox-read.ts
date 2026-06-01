import type { ContactLead } from "@/lib/contact-leads-api";

const SEEN_KEY = "sao-khue-admin-inbox-seen";

function loadSeenIds(): number[] {
  try {
    const raw = localStorage.getItem(SEEN_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "number") : [];
  } catch {
    return [];
  }
}

export function markLeadsSeen(ids: number[]) {
  if (!ids.length) return;
  const prev = new Set(loadSeenIds());
  ids.forEach((id) => prev.add(id));
  const merged = [...prev].slice(-500);
  try {
    localStorage.setItem(SEEN_KEY, JSON.stringify(merged));
  } catch {
    /* quota */
  }
}

export function countUnreadLeads(leads: ContactLead[]): number {
  const seen = new Set(loadSeenIds());
  return leads.filter((l) => !seen.has(l.id)).length;
}

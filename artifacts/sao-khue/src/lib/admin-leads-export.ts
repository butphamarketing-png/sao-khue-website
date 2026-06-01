import type { ContactLead } from "@/lib/contact-leads-api";

function csvCell(value: string): string {
  const safe = value.replace(/"/g, '""').replace(/\r?\n/g, " ");
  return `"${safe}"`;
}

export function exportLeadsToCsv(leads: ContactLead[], filename = "lien-he-sao-khue.csv") {
  const headers = ["id", "name", "phone", "email", "service", "message", "createdAt"];
  const rows = leads.map((l) =>
    [
      String(l.id),
      l.name,
      l.phone,
      l.email ?? "",
      l.service ?? "",
      l.message ?? "",
      l.createdAt,
    ]
      .map(csvCell)
      .join(","),
  );
  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

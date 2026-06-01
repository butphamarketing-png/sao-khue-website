import type { Post } from "@workspace/api-client-react";

function csvCell(value: string): string {
  const safe = value.replace(/"/g, '""').replace(/\r?\n/g, " ");
  return `"${safe}"`;
}

export function exportPostsToCsv(posts: Post[], filename = "bai-viet-sao-khue.csv") {
  const headers = [
    "id",
    "slug",
    "title",
    "category",
    "excerpt",
    "metaTitle",
    "metaDescription",
    "metaKeywords",
    "imageUrl",
    "createdAt",
  ];
  const rows = posts.map((p) =>
    [
      String(p.id),
      p.slug,
      p.title,
      p.category,
      p.excerpt ?? "",
      p.metaTitle ?? "",
      p.metaDescription ?? "",
      p.metaKeywords ?? "",
      p.imageUrl ?? "",
      p.createdAt ?? "",
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

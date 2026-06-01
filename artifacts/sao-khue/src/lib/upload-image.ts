/** Upload ảnh lên API (Supabase) — dùng chung Admin. */
export async function uploadImageFile(file: File, folder = "uploads"): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  form.append("folder", folder);

  const res = await fetch("/api/uploads", {
    method: "POST",
    body: form,
    credentials: "include",
  });

  const data = (await res.json()) as { url?: string; error?: string };
  if (!res.ok) throw new Error(data.error ?? "Upload thất bại");
  if (!data.url) throw new Error("Không nhận được URL ảnh");
  return data.url;
}

import { useRef, useState } from "react";
import { ImagePlus, Link2, Loader2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  label?: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  hint?: string;
};

export function ImageUploadField({
  label = "Hình ảnh",
  value,
  onChange,
  folder = "uploads",
  hint,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setError(null);
    setUploading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", folder);

      const res = await fetch("/api/uploads", {
        method: "POST",
        body: form,
        credentials: "include",
      });

      const data = (await res.json()) as { url?: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? "Upload that bai");

      onChange(data.url ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload that bai");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      {label && (
        <div className="text-sm font-semibold text-slate-700">{label}</div>
      )}

      {value ? (
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <img src={value} alt="Preview" className="h-44 w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-slate-950/80 to-transparent p-3">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="flex-1"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            >
              {uploading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Upload className="mr-2 h-4 w-4" />
              )}
              Doi anh
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={() => onChange("")}
            >
              Xoa
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className="flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-slate-600 transition hover:border-[#17579d] hover:bg-blue-50/50 hover:text-[#17579d] disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-10 w-10 animate-spin text-[#17579d]" />
          ) : (
            <ImagePlus className="h-10 w-10 text-[#17579d]" />
          )}
          <span className="text-sm font-semibold">
            {uploading ? "Dang tai len Supabase..." : "Chon anh tu may tinh"}
          </span>
          <span className="text-xs text-slate-500">JPG, PNG, WebP — toi da 8MB</span>
        </button>
      )}

      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
        <Link2 className="h-3.5 w-3.5" />
        Hoac dan link anh
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://... hoac /images/..."
      />
      {hint && <p className="text-xs text-slate-500">{hint}</p>}
      {error && <p className="text-xs font-medium text-red-600">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}

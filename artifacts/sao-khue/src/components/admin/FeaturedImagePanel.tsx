import { useRef, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadImageFile } from "@/lib/upload-image";

type Props = {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  /** Gợi ý đặt tên file khi upload (SEO) */
  suggestedFilename?: string;
};

export function FeaturedImagePanel({
  value,
  onChange,
  folder = "posts",
  suggestedFilename,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Chỉ chấp nhận file ảnh (JPG, PNG, WebP…)");
      return;
    }
    setError(null);
    setUploading(true);
    try {
      const url = await uploadImageFile(file, folder);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload thất bại");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h4 className="text-sm font-bold text-slate-900">Hình đại diện</h4>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        Kéo thả hoặc chọn ảnh. Khuyến nghị <strong>1200×630 px</strong> (ngang) — đẹp trên
        Facebook/Zalo và Google. Logo Sao Khuê tự động đóng dấu ở trên giữa ảnh khi tải lên.
        {suggestedFilename ? (
          <>
            {" "}
            Đặt tên file gợi ý: <strong>{suggestedFilename}</strong>
          </>
        ) : null}
      </p>

      {value ? (
        <div className="relative mt-4 overflow-hidden rounded-xl border border-slate-200">
          <img src={value} alt="Hình đại diện" className="aspect-[3/2] w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-slate-950/80 to-transparent p-3">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="flex-1"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            >
              Đổi ảnh
            </Button>
            <Button type="button" size="sm" variant="destructive" onClick={() => onChange("")}>
              Xóa
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`mt-4 flex flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-10 text-center transition ${
            dragOver
              ? "border-[#17579d] bg-[#eef6ff]"
              : "border-slate-300 bg-slate-50 hover:border-[#17579d]/50"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const file = e.dataTransfer.files?.[0];
            if (file) void handleFile(file);
          }}
        >
          {uploading ? (
            <Loader2 className="h-10 w-10 animate-spin text-[#17579d]" />
          ) : (
            <ImagePlus className="h-10 w-10 text-[#17579d]" />
          )}
          <p className="mt-3 text-sm font-semibold text-slate-700">
            Kéo và thả hình vào đây
          </p>
          <p className="mt-1 text-xs text-slate-500">hoặc</p>
          <Button
            type="button"
            className="mt-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
          >
            Chọn hình
          </Button>
          <p className="mt-3 text-[11px] text-slate-400">.jpg · .png · .webp · tối đa 8MB</p>
        </div>
      )}

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-semibold text-slate-600">
          Hoặc dán link ảnh
        </label>
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://..."
          className="text-sm"
        />
      </div>

      {error && <p className="mt-2 text-xs font-medium text-red-600">{error}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
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

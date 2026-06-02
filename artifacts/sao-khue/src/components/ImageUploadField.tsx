import { useEffect, useRef, useState } from "react";
import { ImagePlus, Link2, Loader2, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatImageDimensions, isAspectRatioMatch } from "@/lib/hero-media";

type RecommendedSize = {
  width: number;
  height: number;
  label?: string;
};

type Props = {
  label?: string;
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  hint?: string;
  /** Tỷ lệ khung preview (Tailwind class), ví dụ aspect-[1920/820] */
  previewAspectClass?: string;
  recommendedSize?: RecommendedSize;
};

export function ImageUploadField({
  label = "Hình ảnh",
  value,
  onChange,
  folder = "uploads",
  hint,
  previewAspectClass = "aspect-video",
  recommendedSize,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(
    null,
  );

  useEffect(() => {
    setNaturalSize(null);
  }, [value]);

  const recommendedLabel =
    recommendedSize?.label ??
    (recommendedSize
      ? formatImageDimensions(recommendedSize.width, recommendedSize.height)
      : null);

  const dimensionOk =
    naturalSize && recommendedSize
      ? isAspectRatioMatch(
          naturalSize.width,
          naturalSize.height,
          recommendedSize.width,
          recommendedSize.height,
        )
      : null;

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
      if (!res.ok) throw new Error(data.error ?? "Upload thất bại");

      onChange(data.url ?? "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload thất bại");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      {label && (
        <div className="text-sm font-semibold text-slate-700">{label}</div>
      )}

      {recommendedLabel && (
        <div className="rounded-lg border border-blue-100 bg-blue-50/80 px-3 py-2 text-xs leading-relaxed text-slate-700">
          <span className="font-semibold text-[#17579d]">Kích thước khuyến nghị:</span>{" "}
          {recommendedLabel}
          {hint ? (
            <>
              <br />
              <span className="text-slate-600">{hint}</span>
            </>
          ) : null}
        </div>
      )}

      {value ? (
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <div className={`relative w-full ${previewAspectClass}`}>
            <img
              src={value}
              alt="Preview"
              className="absolute inset-0 h-full w-full object-cover object-center"
              onLoad={(e) => {
                const img = e.currentTarget;
                setNaturalSize({
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              }}
            />
          </div>
          {naturalSize && (
            <div
              className={`border-t px-3 py-2 text-xs ${
                dimensionOk === false
                  ? "border-amber-200 bg-amber-50 text-amber-900"
                  : dimensionOk === true
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-slate-200 bg-slate-50 text-slate-600"
              }`}
            >
              <span className="font-semibold">Ảnh hiện tại:</span>{" "}
              {formatImageDimensions(naturalSize.width, naturalSize.height)}
              {dimensionOk === false && recommendedLabel ? (
                <span className="ml-1">
                  — lệch tỷ lệ khuyến nghị ({recommendedLabel}), có thể bị cắt khi hiển thị.
                </span>
              ) : null}
              {dimensionOk === true ? (
                <span className="ml-1">— đúng tỷ lệ slideshow.</span>
              ) : null}
            </div>
          )}
          <div className="flex gap-2 border-t border-slate-200 bg-slate-50 p-3">
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
              Đổi ảnh
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={() => onChange("")}
            >
              Xóa
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          disabled={uploading}
          onClick={() => inputRef.current?.click()}
          className={`flex w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-slate-600 transition hover:border-[#17579d] hover:bg-blue-50/50 hover:text-[#17579d] disabled:opacity-60 ${previewAspectClass} max-h-56`}
        >
          {uploading ? (
            <Loader2 className="h-10 w-10 animate-spin text-[#17579d]" />
          ) : (
            <ImagePlus className="h-10 w-10 text-[#17579d]" />
          )}
          <span className="text-sm font-semibold">
            {uploading ? "Đang tải lên..." : "Chọn ảnh từ máy tính"}
          </span>
          <span className="text-xs text-slate-500">JPG, PNG, WebP — tối đa 8MB</span>
        </button>
      )}

      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400">
        <Link2 className="h-3.5 w-3.5" />
        Hoặc dán link ảnh
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://... hoặc /images/..."
      />
      {hint && !recommendedLabel && (
        <p className="text-xs text-slate-500">{hint}</p>
      )}
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

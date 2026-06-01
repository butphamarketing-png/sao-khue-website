import { useEffect, useRef, useState } from "react";
import { Loader2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { uploadImageFile } from "@/lib/upload-image";

export type ImageInsertValues = {
  url: string;
  alt: string;
  width: string;
  height: string;
  align: "none" | "left" | "center" | "right";
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initial?: Partial<ImageInsertValues>;
  imageFolder?: string;
  onConfirm: (values: ImageInsertValues) => void;
};

export function buildImageHtml(values: ImageInsertValues): string {
  const url = values.url.trim();
  if (!url) return "";

  const esc = (v: string) =>
    v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

  const attrs = [`src="${esc(url)}"`];
  if (values.alt.trim()) attrs.push(`alt="${esc(values.alt.trim())}"`);
  if (values.width.trim()) attrs.push(`width="${esc(values.width.trim())}"`);
  if (values.height.trim()) attrs.push(`height="${esc(values.height.trim())}"`);

  let style = "max-width:100%;height:auto;";
  if (values.align === "center") style += "display:block;margin:1rem auto;";
  else if (values.align === "left") style += "float:left;margin:0 1rem 1rem 0;";
  else if (values.align === "right") style += "float:right;margin:0 0 1rem 1rem;";
  attrs.push(`style="${style}"`);
  attrs.push('loading="lazy"', 'decoding="async"');

  return `<img ${attrs.join(" ")} />`;
}

export function parseImageElement(img: HTMLImageElement): ImageInsertValues {
  const align = img.style.float
    ? img.style.float === "left"
      ? "left"
      : "right"
    : img.style.marginLeft === "auto" && img.style.marginRight === "auto"
      ? "center"
      : "none";

  return {
    url: img.getAttribute("src") ?? "",
    alt: img.getAttribute("alt") ?? "",
    width: img.getAttribute("width") ?? "",
    height: img.getAttribute("height") ?? "",
    align,
  };
}

export function ImageInsertDialog({
  open,
  onOpenChange,
  initial,
  imageFolder = "posts",
  onConfirm,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [align, setAlign] = useState<ImageInsertValues["align"]>("none");

  useEffect(() => {
    if (!open) return;
    setUrl(initial?.url ?? "");
    setAlt(initial?.alt ?? "");
    setWidth(initial?.width ?? "");
    setHeight(initial?.height ?? "");
    setAlign(initial?.align ?? "none");
  }, [open, initial]);

  async function onPickFile(file: File) {
    setUploading(true);
    try {
      const uploaded = await uploadImageFile(file, imageFolder);
      setUrl(uploaded);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Không tải được ảnh");
    } finally {
      setUploading(false);
    }
  }

  function handleConfirm() {
    if (!url.trim()) {
      alert("Vui lòng nhập URL ảnh hoặc tải ảnh lên.");
      return;
    }
    onConfirm({ url, alt, width, height, align });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Thuộc tính ảnh</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>URL</Label>
            <div className="flex gap-2">
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://..."
                className="font-mono text-xs"
              />
              <Button
                type="button"
                variant="outline"
                disabled={uploading}
                onClick={() => fileRef.current?.click()}
              >
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                <span className="ml-2 hidden sm:inline">Duyệt máy</span>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Chú thích ảnh (alt — quan trọng cho SEO)</Label>
            <Input
              value={alt}
              onChange={(e) => setAlt(e.target.value)}
              placeholder="Mô tả ngắn nội dung ảnh"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label>Chiều rộng (px)</Label>
              <Input
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="480"
                inputMode="numeric"
              />
            </div>
            <div className="space-y-2">
              <Label>Chiều cao (px)</Label>
              <Input
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="320"
                inputMode="numeric"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Vị trí</Label>
            <Select value={align} onValueChange={(v) => setAlign(v as ImageInsertValues["align"])}>
              <SelectTrigger>
                <SelectValue placeholder="Chọn vị trí" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Không thiết lập</SelectItem>
                <SelectItem value="left">Trái</SelectItem>
                <SelectItem value="center">Giữa</SelectItem>
                <SelectItem value="right">Phải</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {url.trim() && (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="mb-2 text-xs font-semibold text-slate-500">Xem trước</p>
              <img
                src={url}
                alt={alt || "Xem trước"}
                className="max-h-40 max-w-full rounded border border-slate-200 bg-white object-contain"
              />
            </div>
          )}
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Bỏ qua
          </Button>
          <Button
            type="button"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
            onClick={handleConfirm}
          >
            Đồng ý
          </Button>
        </DialogFooter>

        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void onPickFile(file);
            e.target.value = "";
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

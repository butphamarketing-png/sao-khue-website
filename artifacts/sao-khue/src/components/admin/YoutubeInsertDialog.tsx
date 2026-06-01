import { useEffect, useState } from "react";
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

function extractYoutubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1).split("/")[0] || null;
    if (url.searchParams.get("v")) return url.searchParams.get("v");
    const embed = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embed?.[1]) return embed[1];
  } catch {
    return null;
  }
  return null;
}

export function buildYoutubeEmbedHtml(videoId: string): string {
  return `<div class="video-embed" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5rem 0;border-radius:12px;"><iframe src="https://www.youtube.com/embed/${videoId}" title="YouTube video" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen loading="lazy"></iframe></div>`;
}

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (html: string) => void;
};

export function YoutubeInsertDialog({ open, onOpenChange, onConfirm }: Props) {
  const [raw, setRaw] = useState("");
  const videoId = extractYoutubeId(raw);

  useEffect(() => {
    if (open) setRaw("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Chèn video YouTube</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <Label>Link hoặc mã video</Label>
          <Input
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=..."
          />
          {videoId && (
            <p className="text-xs text-emerald-700">Mã video: {videoId}</p>
          )}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Bỏ qua
          </Button>
          <Button
            type="button"
            className="bg-red-600 text-white hover:bg-red-700"
            disabled={!videoId}
            onClick={() => {
              if (!videoId) return;
              onConfirm(buildYoutubeEmbedHtml(videoId));
              onOpenChange(false);
            }}
          >
            Chèn video
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

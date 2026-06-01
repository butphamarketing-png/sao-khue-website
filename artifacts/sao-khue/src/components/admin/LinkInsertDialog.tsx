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

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialUrl?: string;
  onConfirm: (url: string, openNewTab: boolean) => void;
};

export function LinkInsertDialog({ open, onOpenChange, initialUrl = "", onConfirm }: Props) {
  const [url, setUrl] = useState("");
  const [openNewTab, setOpenNewTab] = useState(true);

  useEffect(() => {
    if (open) {
      setUrl(initialUrl);
      setOpenNewTab(true);
    }
  }, [open, initialUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Chèn liên kết</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Đường dẫn</Label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://... hoặc /bao-gia"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={openNewTab}
              onChange={(e) => setOpenNewTab(e.target.checked)}
              className="rounded border-slate-300"
            />
            Mở tab mới (liên kết ngoài)
          </label>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            Bỏ qua
          </Button>
          <Button
            type="button"
            className="bg-[#1f7ae0] text-white"
            onClick={() => {
              if (!url.trim()) return;
              onConfirm(url.trim(), openNewTab);
              onOpenChange(false);
            }}
          >
            Đồng ý
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

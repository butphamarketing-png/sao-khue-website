import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { SocialLinkOption } from "@/lib/social-links";
import { openExternalUrl } from "@/lib/social-links";
import { ChevronRight } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  options: SocialLinkOption[];
};

export function SocialLinkPickerSheet({
  open,
  onOpenChange,
  title,
  description,
  options,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-3xl px-4 pb-8 pt-6">
        <SheetHeader className="text-left">
          <SheetTitle className="text-lg text-primary">{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>

        <ul className="mt-5 space-y-2">
          {options.map((option) => (
            <li key={option.url}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-left transition hover:border-primary/30 hover:bg-white"
                onClick={() => {
                  openExternalUrl(option.url);
                  onOpenChange(false);
                }}
              >
                <span className="text-base font-semibold text-slate-900">{option.label}</span>
                <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
              </button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

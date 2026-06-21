import { useState, type FormEvent } from "react";
import { Facebook, Hammer, Home, PhoneCall, Send } from "lucide-react";
import { SiMessenger, SiZalo } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactLead } from "@/lib/contact-leads-api";
import {
  facebookUrlsFromSettings,
  messengerUrlsFromSettings,
  openExternalUrl,
} from "@/lib/social-links";
import { useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";
import { toast } from "@/hooks/use-toast";

type ProjectType = "xay-moi" | "cai-tao";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EMPTY_FORM = {
  name: "",
  phone: "",
  address: "",
  area: "",
  floors: "",
  needs: "",
};

export function QuoteRequestModal({ open, onOpenChange }: Props) {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : null;
  const facebookUrl = facebookUrlsFromSettings(s)[0];
  const messengerUrl = messengerUrlsFromSettings(s)[0];

  const [projectType, setProjectType] = useState<ProjectType>("xay-moi");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  const resetAndClose = () => {
    setForm(EMPTY_FORM);
    setProjectType("xay-moi");
    onOpenChange(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const serviceLabel = projectType === "xay-moi" ? "Xây mới" : "Cải tạo";
    const message = [
      `Loại công trình: ${serviceLabel}`,
      form.address && `Địa chỉ: ${form.address}`,
      form.area && `Diện tích: ${form.area} m²`,
      form.floors && `Số tầng: ${form.floors}`,
      form.needs && `Nhu cầu: ${form.needs}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await submitContactLead({
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: serviceLabel,
        message,
        source: "quote-popup",
      });

      toast({
        title: "Đã gửi yêu cầu báo giá",
        description: `Cảm ơn ${form.name}! Sao Khuê sẽ liên hệ qua ${form.phone} trong thời gian sớm nhất.`,
      });
      resetAndClose();
    } catch (err) {
      toast({
        title: "Không gửi được yêu cầu",
        description: err instanceof Error ? err.message : "Vui lòng thử lại hoặc gọi hotline.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-lg overflow-y-auto rounded-2xl border-slate-200 p-0 sm:max-w-xl">
        <div className="border-b border-slate-100 bg-gradient-to-r from-primary/5 via-white to-accent/5 px-6 py-5">
          <DialogHeader className="space-y-1 text-left">
            <DialogTitle className="text-xl font-bold text-slate-900 md:text-2xl">
              Yêu cầu tư vấn &amp; báo giá
            </DialogTitle>
            <DialogDescription className="text-sm text-slate-600">
              Điền thông tin — Kiến Trúc Sao Khuê sẽ khảo sát và báo giá miễn phí.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-5">
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-slate-700">Loại công trình</Label>
            <div className="grid grid-cols-2 gap-2">
              <TypeToggle
                active={projectType === "xay-moi"}
                onClick={() => setProjectType("xay-moi")}
                icon={Home}
                label="Xây mới"
              />
              <TypeToggle
                active={projectType === "cai-tao"}
                onClick={() => setProjectType("cai-tao")}
                icon={Hammer}
                label="Cải tạo"
              />
            </div>
          </div>

          <Field label="Họ và tên" required>
            <Input
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Nguyễn Văn A"
              className="h-11 rounded-xl"
              required
            />
          </Field>

          <Field label="Số điện thoại" required>
            <Input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              placeholder="0909 075 668"
              className="h-11 rounded-xl"
              required
            />
          </Field>

          <Field label="Địa chỉ công trình">
            <Input
              value={form.address}
              onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
              placeholder="Phường, quận, tỉnh/thành"
              className="h-11 rounded-xl"
            />
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Diện tích (m²)">
              <Input
                value={form.area}
                onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
                placeholder="VD: 80"
                className="h-11 rounded-xl"
                inputMode="decimal"
              />
            </Field>
            <Field label="Số tầng">
              <Input
                value={form.floors}
                onChange={(e) => setForm((f) => ({ ...f, floors: e.target.value }))}
                placeholder="VD: 2"
                className="h-11 rounded-xl"
                inputMode="numeric"
              />
            </Field>
          </div>

          <Field label="Nhu cầu">
            <Textarea
              value={form.needs}
              onChange={(e) => setForm((f) => ({ ...f, needs: e.target.value }))}
              placeholder="Mô tả ngắn: nhà phố, biệt thự, thời gian mong muốn, ngân sách dự kiến..."
              rows={3}
              className="resize-none rounded-xl"
            />
          </Field>

          <Button
            type="submit"
            disabled={submitting}
            className="btn-gradient-accent h-12 w-full rounded-xl text-base font-bold"
          >
            {submitting ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
            {!submitting && <Send className="ml-2 h-4 w-4" />}
          </Button>

          <div className="border-t border-slate-100 pt-4">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
              Liên hệ nhanh
            </p>
            <div className="flex items-center justify-center gap-3">
              {facebookUrl ? (
                <QuickIcon
                  label="Facebook"
                  className="bg-[#1877f2]"
                  onClick={() => openExternalUrl(facebookUrl)}
                >
                  <Facebook size={20} />
                </QuickIcon>
              ) : null}
              {zaloHref ? (
                <QuickIcon label="Zalo" className="bg-blue-500" onClick={() => openExternalUrl(zaloHref)}>
                  <SiZalo size={22} />
                </QuickIcon>
              ) : null}
              {messengerUrl ? (
                <QuickIcon
                  label="Messenger"
                  className="bg-[#0084ff]"
                  onClick={() => openExternalUrl(messengerUrl)}
                >
                  <SiMessenger size={20} />
                </QuickIcon>
              ) : null}
              {phone ? (
                <QuickIcon
                  label={phone}
                  className="bg-accent"
                  onClick={() => {
                    window.location.href = telHref(phone);
                  }}
                >
                  <PhoneCall size={20} />
                </QuickIcon>
              ) : null}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-semibold text-slate-700">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}

function TypeToggle({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Home;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all ${
        active
          ? "border-primary bg-primary/10 text-primary shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:bg-slate-50"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function QuickIcon({
  label,
  className,
  children,
  onClick,
}: {
  label: string;
  className: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md transition hover:scale-105 hover:shadow-lg ${className}`}
      aria-label={label}
      title={label}
    >
      {children}
    </button>
  );
}

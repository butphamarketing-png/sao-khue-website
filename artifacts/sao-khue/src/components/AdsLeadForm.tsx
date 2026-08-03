import { useState, type FormEvent } from "react";
import { PhoneCall, Send } from "lucide-react";
import { SiZalo } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactLead } from "@/lib/contact-leads-api";
import { buildAdsLeadSource, type AdsLandingConfig } from "@/lib/ads-landing";
import { useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";
import { toast } from "@/hooks/use-toast";

type Props = {
  config: AdsLandingConfig;
  compact?: boolean;
  /** Anchor id for CTA links — only set on the primary (hero) form. */
  anchorId?: string;
};

export function AdsLeadForm({ config, compact = false, anchorId }: Props) {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : null;
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    area: "",
    needs: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const message = [
      `Landing: ${config.path}`,
      form.address && `Địa chỉ công trình: ${form.address}`,
      form.area && `Diện tích: ${form.area} m²`,
      form.needs && `Nhu cầu: ${form.needs}`,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await submitContactLead({
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: config.serviceLabel,
        message,
        source: buildAdsLeadSource(config.source),
      });
      toast({
        title: "Đã gửi yêu cầu báo giá",
        description: `Cảm ơn ${form.name}! Sao Khuê sẽ gọi lại qua ${form.phone} sớm nhất.`,
      });
      setForm({ name: "", phone: "", address: "", area: "", needs: "" });
    } catch (err) {
      toast({
        title: "Không gửi được yêu cầu",
        description: err instanceof Error ? err.message : "Vui lòng gọi hotline hoặc nhắn Zalo.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id={anchorId}
      className={`border border-white/20 bg-white shadow-2xl ${
        compact ? "rounded-2xl p-4 sm:p-5" : "rounded-2xl p-5 sm:p-6 md:p-7"
      }`}
    >
      <h2 className="font-display text-lg font-bold uppercase tracking-wide text-primary sm:text-xl">
        {config.formTitle}
      </h2>
      <p className="mt-1 text-sm text-slate-600">Để lại SĐT — kỹ sư gọi tư vấn miễn phí.</p>

      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Họ và tên *
            </label>
            <Input
              required
              placeholder="Nhập họ tên"
              className="h-11 rounded-lg border-slate-200 bg-slate-50"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
              Số điện thoại *
            </label>
            <Input
              required
              type="tel"
              inputMode="tel"
              placeholder="09xx xxx xxx"
              className="h-11 rounded-lg border-slate-200 bg-slate-50"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
          </div>
        </div>

        {!compact && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Địa chỉ công trình
              </label>
              <Input
                placeholder="Quận / huyện, TP"
                className="h-11 rounded-lg border-slate-200 bg-slate-50"
                value={form.address}
                onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                Diện tích (m²)
              </label>
              <Input
                placeholder="VD: 80"
                className="h-11 rounded-lg border-slate-200 bg-slate-50"
                value={form.area}
                onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))}
              />
            </div>
          </div>
        )}

        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            Nhu cầu
          </label>
          <Textarea
            placeholder={
              config.path === "/xay-nha"
                ? "VD: Xây nhà phố 1 trệt 2 lầu, diện tích 4x18m…"
                : "VD: Cải tạo nhà cũ 2 tầng, chống thấm, làm mới mặt tiền…"
            }
            className="min-h-[72px] rounded-lg border-slate-200 bg-slate-50"
            value={form.needs}
            onChange={(e) => setForm((f) => ({ ...f, needs: e.target.value }))}
          />
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="btn-gradient-accent h-12 w-full rounded-lg text-base font-bold uppercase tracking-wide"
        >
          <Send size={18} className="mr-2" />
          {submitting ? "Đang gửi…" : "Nhận báo giá miễn phí"}
        </Button>
      </form>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {phone && (
          <a
            href={telHref(phone)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
          >
            <PhoneCall size={16} />
            Gọi ngay
          </a>
        )}
        {zaloHref && (
          <a
            href={zaloHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#0068ff]/25 bg-[#0068ff]/5 text-sm font-bold text-[#0068ff] transition hover:bg-[#0068ff] hover:text-white"
          >
            <SiZalo size={18} />
            Chat Zalo
          </a>
        )}
      </div>
    </div>
  );
}

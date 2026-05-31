import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, MapPin, PhoneCall, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactSection, useSiteSettings, telHref } from "@/lib/site-settings";
import { submitContactLead } from "@/lib/contact-leads-api";
import { toast } from "@/hooks/use-toast";

export function ContactCTASection() {
  const s = useSiteSettings();
  const contact = useContactSection();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContactLead({
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        service: form.service || undefined,
        message: form.message || undefined,
      });

      const body = [
        `Họ tên: ${form.name}`,
        `Điện thoại: ${form.phone}`,
        form.email && `Email: ${form.email}`,
        form.service && `Dịch vụ: ${form.service}`,
        form.message && `Nội dung: ${form.message}`,
      ]
        .filter(Boolean)
        .join("\n");

      if (s.email) {
        window.location.href = `mailto:${s.email}?subject=${encodeURIComponent(
          `[Sao Khuê] Yêu cầu báo giá — ${form.name}`,
        )}&body=${encodeURIComponent(body)}`;
      }

      toast({
        title: "Đã ghi nhận yêu cầu",
        description: `Cảm ơn ${form.name}! Chúng tôi sẽ liên hệ qua ${form.phone} trong thời gian sớm nhất.`,
      });
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
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
    <section id="lien-he" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        <img src={contact.backgroundImageUrl || "/images/hero-3.png"} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#0a3d6b]/90 to-slate-900/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
          <div className="w-full text-white lg:w-[45%]">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-accent">
              {contact.eyebrow}
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
              {contact.titleLine1}
              <span className="mt-2 block text-accent">{contact.titleAccent}</span>
            </h2>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-blue-100/90 md:text-lg">
              {contact.description}
            </p>

            <div className="space-y-5">
              <a
                href={telHref(s.hotline1)}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition hover:bg-white/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                  <PhoneCall size={22} />
                </div>
                <div>
                  <div className="text-sm text-blue-200">{contact.hotlineLabel}</div>
                  <div className="text-xl font-bold">{s.hotline1}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-sm text-blue-200">{contact.addressLabel}</div>
                  <div className="text-base font-semibold leading-relaxed">{s.address1}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-md md:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                  <Building2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-primary md:text-2xl">{contact.formTitle}</h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Họ và tên *</label>
                    <Input
                      placeholder="Nhập họ tên"
                      className="rounded-xl border-slate-200 bg-slate-50"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Số điện thoại *</label>
                    <Input
                      placeholder="Nhập số điện thoại"
                      type="tel"
                      className="rounded-xl border-slate-200 bg-slate-50"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input
                    placeholder="Nhập email"
                    type="email"
                    className="rounded-xl border-slate-200 bg-slate-50"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Dịch vụ quan tâm</label>
                  <select
                    className="flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                  >
                    <option value="">Chọn dịch vụ</option>
                    {contact.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nội dung yêu cầu</label>
                  <Textarea
                    placeholder="Mô tả sơ bộ nhu cầu (diện tích, quy mô, ý tưởng...)"
                    className="min-h-[110px] rounded-xl border-slate-200 bg-slate-50"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-auto w-full rounded-full bg-accent py-6 text-base font-bold uppercase tracking-wide hover:bg-accent/90"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {contact.submitLabel}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

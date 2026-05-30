import { PageShell } from "@/components/PageShell";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FAQSection } from "@/components/FAQSection";
import { PageBanner } from "@/components/PageBanner";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useSiteSettings, telHref } from "@/lib/site-settings";

export default function Contact() {
  const s = useSiteSettings();
  const phones = [s.hotline1, s.hotline2].filter(Boolean);

  return (
    <PageShell>
      <PageBanner title="Liên hệ">
        <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
          Hotline 24/7 — khảo sát miễn phí — báo giá trong 24–48 giờ.
        </p>
      </PageBanner>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phones.map((phone) => (
            <a
              key={phone}
              href={telHref(phone)}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Hotline</div>
                <div className="font-bold text-primary">{phone}</div>
              </div>
            </a>
          ))}

          {s.email && (
            <a
              href={`mailto:${s.email}`}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</div>
                <div className="break-all font-semibold text-slate-800">{s.email}</div>
              </div>
            </a>
          )}

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Giờ làm việc</div>
              <div className="text-sm font-semibold text-slate-800">Thứ 2 – Thứ 7: 8:00 – 17:30</div>
              <div className="text-xs text-slate-500">Hotline hỗ trợ 24/7</div>
            </div>
          </div>

          {s.address1 && (
            <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Trụ sở</div>
                <div className="text-sm font-semibold leading-relaxed text-slate-800">{s.address1}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTASection />

      <div className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-primary">
              <MapPin size={20} />
              Vị trí văn phòng
            </h2>
          </div>
          <div className="relative flex h-[420px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 md:h-[480px]">
            <iframe
              title="Bản đồ Sao Khuê"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(s.address1)}&output=embed`}
            />
          </div>
          <div className="px-6 py-4 text-sm text-slate-600">{s.address1}</div>
        </div>
      </div>

      <FAQSection
        title="Câu hỏi khi liên hệ"
        subtitle="Một số thắc mắc thường gặp trước khi gặp đội ngũ tư vấn."
        className="section-muted pb-20"
      />
    </PageShell>
  );
}

import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, PhoneCall } from "lucide-react";
import { AdsLandingShell } from "@/components/AdsLandingShell";
import { AdsLeadForm } from "@/components/AdsLeadForm";
import { usePageSeo } from "@/hooks/use-page-seo";
import { type AdsLandingConfig } from "@/lib/ads-landing";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";
import { useOpenGraphImage, useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";

type Props = {
  config: AdsLandingConfig;
};

export function AdsLandingPage({ config }: Props) {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const ogImage = useOpenGraphImage() || config.heroImage;
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const trustChips = config.trustLine
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);

  usePageSeo({
    title: config.seoTitle,
    description: config.seoDescription,
    path: config.path,
    keywords: config.keywords,
    ogImage: config.heroImage || ogImage,
    ogImageAlt: `${config.serviceLabel} — ${brand}`,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: "Trang chủ", path: "/" },
        { name: config.serviceLabel, path: config.path },
      ]),
      buildFAQSchema(config.faqs.map((f) => ({ q: f.q, a: f.a }))),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: config.serviceLabel,
        provider: {
          "@type": "LocalBusiness",
          name: brand,
          telephone: phone || "0909075668",
          url: absoluteUrl("/"),
        },
        areaServed: [
          { "@type": "City", name: "Thành phố Hồ Chí Minh" },
          { "@type": "AdministrativeArea", name: "Bình Dương" },
          { "@type": "AdministrativeArea", name: "Đồng Nai" },
        ],
        url: absoluteUrl(config.path),
        description: config.seoDescription,
      },
    ],
  });

  return (
    <AdsLandingShell>
      {/* Hero: navy đặc cho chữ — ảnh công trình chỉ bên phải, không đè headline */}
      <section className="relative overflow-hidden bg-[#062a4a]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(56%,740px)] lg:block">
          <img
            src={config.heroImage}
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062a4a] via-[#062a4a]/55 to-black/25" />
        </div>

        <div className="site-container relative z-10 grid min-h-[min(100svh,820px)] items-center gap-8 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-white"
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200/90">
              {config.brandHeadline}
            </p>
            <h1 className="mt-3 max-w-xl font-display text-3xl font-bold uppercase leading-[1.15] tracking-wide text-white sm:text-4xl md:text-[2.45rem]">
              {config.h1}
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-blue-100 sm:text-lg">
              {config.support}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#bao-gia"
                className="btn-gradient-accent inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-bold uppercase tracking-wide text-white"
              >
                Nhận báo giá miễn phí
              </a>
              {phone && (
                <a
                  href={telHref(phone)}
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/20"
                >
                  <PhoneCall size={18} />
                  {phone}
                </a>
              )}
            </div>

            {trustChips.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {trustChips.map((chip) => (
                  <li
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-50 ring-1 ring-white/15"
                  >
                    <CheckCircle2 size={14} className="shrink-0 text-accent" />
                    {chip}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <AdsLeadForm config={config} anchorId="bao-gia" />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Cam kết Sao Khuê</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-primary md:text-3xl">
              Vì sao chọn chúng tôi
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border-t-2 border-primary/80 pt-4"
              >
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad bg-gradient-to-b from-slate-50 to-white">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Bảng giá tham khảo</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-primary md:text-3xl">
              Đơn giá minh bạch
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Mức giá mang tính tham khảo — báo giá chính xác sau khảo sát hiện trạng.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {config.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col border p-6 ${
                  pkg.highlighted
                    ? "border-accent bg-white shadow-lg ring-1 ring-accent/20"
                    : "border-slate-200 bg-white"
                }`}
              >
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {pkg.note}
                </p>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-accent">{pkg.price}</span>
                  {pkg.unit ? (
                    <span className="ml-1 text-sm font-semibold text-slate-500">{pkg.unit}</span>
                  ) : null}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#bao-gia"
                  className={`mt-6 inline-flex h-11 items-center justify-center rounded-lg text-sm font-bold uppercase tracking-wide ${
                    pkg.highlighted
                      ? "btn-gradient-accent text-white"
                      : "border border-primary/25 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Nhận báo giá
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#0a3d6b] text-white">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Quy trình</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase md:text-3xl">
              4 bước làm việc
            </h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {config.process.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="font-display text-4xl font-bold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base font-bold uppercase tracking-wide">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/90">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Hình ảnh thực tế</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-primary md:text-3xl">
              Công trình Sao Khuê
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
            {config.gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[4/5] overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-slate-50">
        <div className="site-container max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQ</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase text-primary md:text-3xl">
              Câu hỏi thường gặp
            </h2>
          </div>
          <div className="mt-8 space-y-3">
            {config.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-slate-200 bg-white open:border-primary/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-slate-800">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-primary transition group-open:rotate-180"
                  />
                </summary>
                <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-14 md:py-20">
          <img
            src={config.heroImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062a4a]/95 via-[#0a3d6b]/90 to-[#062a4a]/80" />
        <div className="site-container relative z-10 grid items-center gap-8 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="font-display text-2xl font-bold uppercase leading-tight md:text-3xl">
              Sẵn sàng bắt đầu công trình?
            </h2>
            <p className="mt-3 max-w-md text-blue-100/90">
              Để lại số điện thoại — Sao Khuê gọi lại tư vấn và khảo sát miễn phí trong ngày.
            </p>
            {phone && (
              <a
                href={telHref(phone)}
                className="mt-6 inline-flex items-center gap-2 text-xl font-extrabold text-accent"
              >
                <PhoneCall size={22} />
                {phone}
              </a>
            )}
          </div>
          <AdsLeadForm config={config} compact />
        </div>
      </section>
    </AdsLandingShell>
  );
}

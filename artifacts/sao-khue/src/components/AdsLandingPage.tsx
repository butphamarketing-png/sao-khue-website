import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, PhoneCall } from "lucide-react";
import { Link } from "wouter";
import { AdsLandingShell } from "@/components/AdsLandingShell";
import { AdsLeadForm } from "@/components/AdsLeadForm";
import { usePageSeo } from "@/hooks/use-page-seo";
import { type AdsLandingConfig } from "@/lib/ads-landing";
import { MAU_NHA_CATEGORIES } from "@/lib/mau-nha";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";
import { useOpenGraphImage, useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";

type Props = {
  config: AdsLandingConfig;
};

function DiamondHeading({
  eyebrow,
  title,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  const tone = light ? "text-white/80" : "text-primary/70";
  const titleCls = light ? "text-white" : "text-primary";
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      <p className={`text-[11px] font-bold uppercase tracking-[0.28em] ${tone}`}>{eyebrow}</p>
      <div className={`sk-diamond-row my-3 ${tone} ${align === "left" ? "justify-start" : ""}`}>
        <span className="sk-diamond" />
      </div>
      <h2 className={`font-display text-2xl font-bold uppercase leading-tight tracking-wide md:text-[1.85rem] ${titleCls}`}>
        {title}
      </h2>
    </div>
  );
}

export function AdsLandingPage({ config }: Props) {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const ogImage = useOpenGraphImage() || config.heroImage;
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const trustChips = config.trustLine
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);
  const featured = config.packages.find((p) => p.highlighted) || config.packages[1];
  const others = config.packages.filter((p) => p !== featured);
  const [heroShot] = config.gallery;

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
      <section className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#062a4a]">
        <img
          src={config.heroImage}
          alt={config.heroImageAlt}
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[center_20%]"
          fetchPriority="high"
        />
        <div className="sk-vignette absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#062a4a] to-transparent" />

        <div className="site-container relative z-10 grid items-end gap-8 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:items-center lg:gap-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pb-2 text-white"
          >
            <div className="sk-diamond-row mb-5 max-w-md justify-start text-white/80">
              <span className="sk-diamond border-white" />
            </div>
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/80">
              {config.brandHeadline}
            </p>
            <h1 className="sk-hero-title mt-4 max-w-[16ch] font-display text-[2.05rem] font-bold uppercase leading-[1.12] tracking-[0.04em] text-white sm:text-5xl md:text-[3.15rem]">
              {config.h1}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
              {config.support}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#bao-gia"
                className="btn-gradient-accent inline-flex h-12 items-center justify-center px-7 text-sm font-bold uppercase tracking-wide text-white"
              >
                Nhận báo giá miễn phí
              </a>
              {phone && (
                <a
                  href={telHref(phone)}
                  className="inline-flex h-12 items-center gap-2 border border-white/40 bg-white/5 px-5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <PhoneCall size={18} />
                  {phone}
                </a>
              )}
            </div>

            {trustChips.length > 0 && (
              <p className="mt-8 max-w-lg text-[13px] leading-relaxed tracking-wide text-white/70">
                {trustChips.join("  ·  ")}
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:translate-y-8"
          >
            <AdsLeadForm config={config} anchorId="bao-gia" />
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#f7f4ef] py-16 md:py-24">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -left-4 top-8 hidden h-[78%] w-full border border-primary/25 lg:block" />
            <img
              src={heroShot?.src || config.heroImage}
              alt={heroShot?.alt || config.heroImageAlt}
              className="relative z-[1] aspect-[3/4] w-full object-cover"
              loading="lazy"
            />
            <p className="absolute -bottom-4 left-6 z-[2] bg-[#062a4a] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              Công trình thực tế
            </p>
          </div>
          <div>
            <DiamondHeading eyebrow="Cam kết Sao Khuê" title="Vì sao chọn chúng tôi" align="left" />
            <ul className="mt-10 space-y-7">
              {config.benefits.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-[auto_1fr] gap-4"
                >
                  <span className="font-display text-2xl font-bold leading-none text-primary/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#062a4a] py-16 text-white md:py-24">
        <img
          src={config.gallery[1]?.src || config.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#062a4a]/80" />
        <div className="site-container relative z-10">
          <DiamondHeading eyebrow="Quy trình" title="Hành trình làm nhà" light />
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {config.process.map((step, i) => (
              <li key={step.title} className="relative border-t border-white/20 pt-6">
                <span className="absolute -top-4 right-0 font-display text-6xl font-bold leading-none text-white/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-display text-base font-bold uppercase tracking-wide">{step.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/75">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <DiamondHeading eyebrow="Bảng giá tham khảo" title="Đơn giá minh bạch" />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-600">
            Mức giá mang tính tham khảo — báo giá chính xác sau khảo sát hiện trạng.
          </p>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
            {others[0] && (
              <article className="flex flex-col border border-slate-200 p-7 lg:mt-8">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">{others[0].name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{others[0].note}</p>
                <p className="mt-6">
                  <span className="text-3xl font-extrabold text-primary">{others[0].price}</span>
                  {others[0].unit ? <span className="ml-1 text-sm text-slate-500">{others[0].unit}</span> : null}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {others[0].features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#bao-gia" className="mt-6 inline-flex h-11 items-center justify-center border border-primary/25 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white">
                  Nhận báo giá
                </a>
              </article>
            )}

            {featured && (
              <article className="relative z-[1] flex flex-col bg-[#062a4a] p-8 text-white lg:-translate-y-4 lg:shadow-[0_24px_60px_rgba(6,42,74,0.28)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">Chọn nhiều nhất</p>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide">{featured.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/60">{featured.note}</p>
                <p className="mt-6">
                  <span className="text-4xl font-extrabold text-accent">{featured.price}</span>
                  {featured.unit ? <span className="ml-1 text-sm text-white/70">{featured.unit}</span> : null}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/85">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#bao-gia" className="btn-gradient-accent mt-6 inline-flex h-11 items-center justify-center text-sm font-bold uppercase tracking-wide text-white">
                  Nhận báo giá
                </a>
              </article>
            )}

            {others[1] && (
              <article className="flex flex-col border border-slate-200 p-7 lg:mt-8">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">{others[1].name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{others[1].note}</p>
                <p className="mt-6">
                  <span className="text-3xl font-extrabold text-primary">{others[1].price}</span>
                  {others[1].unit ? <span className="ml-1 text-sm text-slate-500">{others[1].unit}</span> : null}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {others[1].features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#bao-gia" className="mt-6 inline-flex h-11 items-center justify-center border border-primary/25 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white">
                  Nhận báo giá
                </a>
              </article>
            )}
          </div>
        </div>
      </section>

      <section id="mau-nha" className="bg-[#f7f4ef] py-16 md:py-24">
        <div className="site-container">
          <DiamondHeading eyebrow="Catalog thiết kế" title="Mẫu nhà hiện đại" />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-600">
            Bấm danh mục để xem list mẫu — nhà cấp 4, 2 tầng, 3 tầng, biệt thự.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {MAU_NHA_CATEGORIES.map((category, i) => (
              <Link key={category.slug} href={`/mau-nha/${category.slug}`} className="group block">
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                    <img
                      src={category.cover}
                      alt={category.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-[#062a4a] px-3 py-3 text-white sm:px-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      {category.models.length} mẫu
                    </p>
                    <h3 className="mt-1 font-display text-sm font-bold uppercase tracking-wide sm:text-base">
                      {category.title}
                    </h3>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/mau-nha"
              className="text-sm font-bold uppercase tracking-wide text-primary underline-offset-4 hover:underline"
            >
              Xem tất cả mẫu nhà →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <DiamondHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-px bg-slate-200 md:grid-cols-2">
            {config.faqs.map((faq) => (
              <details key={faq.q} className="group bg-white open:bg-[#f7f4ef]">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-6 py-5 text-left font-semibold text-slate-800">
                  {faq.q}
                  <ChevronDown size={18} className="mt-0.5 shrink-0 text-primary transition group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <img
          src={config.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#062a4a]/78" />
        <div className="site-container relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_minmax(300px,400px)]">
          <div className="text-white">
            <div className="sk-diamond-row mb-5 max-w-sm justify-start text-white/70">
              <span className="sk-diamond border-white" />
            </div>
            <h2 className="sk-hero-title font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
              Sẵn sàng bắt đầu công trình?
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Để lại số điện thoại — Sao Khuê gọi lại tư vấn và khảo sát miễn phí trong ngày.
            </p>
            {phone && (
              <a href={telHref(phone)} className="mt-6 inline-flex items-center gap-2 text-2xl font-extrabold text-white">
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

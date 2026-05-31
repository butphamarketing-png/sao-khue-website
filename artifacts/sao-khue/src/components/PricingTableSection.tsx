import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { usePricingItems, useSectionMeta } from "@/lib/site-settings";

export function PricingTableSection() {
  const items = usePricingItems();
  const meta = useSectionMeta();

  return (
    <section id="bao-gia" className="section-muted section-pad">
      <div className="site-container">
        <SectionHeader title={meta.pricing.title} subtitle={meta.pricing.subtitle} />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`card-premium relative overflow-hidden ${
                item.highlighted ? "ring-2 ring-accent/30 lg:-translate-y-1" : ""
              }`}
            >
              {item.highlighted && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-accent to-[#ff4757] px-4 py-1.5 text-xs font-bold uppercase text-white shadow">
                  Phổ biến
                </div>
              )}

              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-primary/[0.03] p-8 text-center">
                <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-primary md:text-2xl">
                  {item.name}
                </h3>
                <div className="my-4 text-3xl font-extrabold text-accent md:text-4xl">
                  {item.priceFrom}
                  <span className="mx-1 text-lg font-normal text-slate-400">–</span>
                  {item.priceTo}
                  <span className="text-base font-semibold text-slate-500">{item.unit}</span>
                </div>
                <p className="text-sm text-slate-500">{item.note}</p>
              </div>

              <div className="p-8">
                <ul className="mb-8 space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm leading-relaxed md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.ctaHref}
                  className={`block w-full rounded-full px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:scale-[1.02] ${
                    item.highlighted
                      ? "btn-gradient-accent shadow-lg shadow-accent/20"
                      : "bg-primary shadow-lg shadow-primary/20 hover:bg-primary/90"
                  }`}
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
          * Đơn giá có thể thay đổi tùy quy mô, vị trí công trình và chủng loại vật tư. Vui lòng
          liên hệ trực tiếp để có báo giá chính xác nhất.
        </p>
      </div>
    </section>
  );
}

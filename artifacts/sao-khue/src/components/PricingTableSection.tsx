import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { usePricingItems, useSectionMeta } from "@/lib/site-settings";

export function PricingTableSection() {
  const items = usePricingItems();
  const meta = useSectionMeta();

  return (
    <section id="bao-gia" className="bg-slate-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader title={meta.pricing.title} subtitle={meta.pricing.subtitle} />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl border bg-white shadow-lg transition hover:shadow-xl ${
                item.highlighted
                  ? "border-accent/30 ring-2 ring-accent/20 lg:-translate-y-2"
                  : "border-slate-200"
              }`}
            >
              {item.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white shadow">
                  Phổ biến
                </div>
              )}

              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-primary">{item.name}</h3>
                <div className="my-4 text-3xl font-bold text-accent">
                  {item.priceFrom}
                  <span className="mx-1 text-lg font-normal text-slate-400">–</span>
                  {item.priceTo}
                  <span className="text-lg font-normal text-slate-500">{item.unit}</span>
                </div>
                <p className="text-sm text-slate-500">{item.note}</p>
              </div>

              <div className="p-8">
                <ul className="mb-8 space-y-3">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.ctaHref}
                  className={`block w-full rounded-full px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition ${
                    item.highlighted
                      ? "bg-accent shadow-lg shadow-accent/25 hover:bg-accent/90"
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

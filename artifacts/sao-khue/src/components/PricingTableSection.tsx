import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { usePricingItems } from "@/lib/site-settings";

export function PricingTableSection() {
  const items = usePricingItems();

  return (
    <section id="bao-gia" className="bg-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
            Bang gia tham khao
          </h2>
          <div className="mx-auto h-1 w-24 rounded bg-accent"></div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl border-t-4 bg-white shadow-lg transition-shadow hover:shadow-xl ${
                item.highlighted
                  ? "border-accent lg:-translate-y-4"
                  : "border-primary"
              }`}
            >
              {item.highlighted && (
                <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase text-white">
                  Pho bien
                </div>
              )}

              <div className="border-b bg-slate-50 p-8 text-center">
                <h3 className="mb-2 text-2xl font-bold text-primary">{item.name}</h3>
                <div className="my-4 text-3xl font-bold text-accent">
                  {item.priceFrom} <span className="text-lg font-normal text-slate-500">-</span>{" "}
                  {item.priceTo}
                  <span className="text-lg font-normal text-slate-500">{item.unit}</span>
                </div>
                <p className="text-sm text-slate-500">{item.note}</p>
              </div>

              <div className="p-8">
                <ul className="mb-8 space-y-4">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.ctaHref}
                  className={`block w-full rounded px-4 py-3 text-center font-bold uppercase text-white transition-colors ${
                    item.highlighted
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm italic text-slate-600">
          * Don gia co the thay doi tuy thuoc vao quy mo, vi tri cong trinh va chung
          loai vat tu. Vui long lien he truc tiep de co bao gia chinh xac nhat.
        </div>
      </div>
    </section>
  );
}

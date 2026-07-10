import { resolveLucideIcon } from "@/lib/lucide-icons";
import { QhSectionTitle } from "@/components/QhSectionTitle";
import { useHomeStats } from "@/lib/site-settings";

type Props = {
  variant?: "default" | "qh";
};

export function StatsSection({ variant = "default" }: Props) {
  const stats = useHomeStats();

  if (stats.length === 0) return null;

  if (variant === "qh") {
    return (
      <section className="qh-home-stats">
        <QhSectionTitle title="Chúng tôi có những gì?" />
        <div className="site-container py-8 md:py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((item, index) => {
              const Icon = resolveLucideIcon(item.icon);
              return (
                <div key={`${item.label}-${index}`} className="qh-home-stats__item">
                  <div className="qh-home-stats__icon">
                    <Icon size={28} />
                  </div>
                  <div className="qh-home-stats__value">{item.value}</div>
                  <div className="qh-home-stats__label">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-20 -mt-10 pb-2 md:-mt-14">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/60 bg-white/90 p-4 shadow-[0_20px_60px_rgba(23,87,157,0.12)] backdrop-blur-md md:grid-cols-4 md:gap-5 md:p-6">
          {stats.map((item, index) => {
            const Icon = resolveLucideIcon(item.icon);
            return (
              <div
                key={`${item.label}-${index}`}
                className="group flex flex-col items-center rounded-2xl border border-slate-100/80 bg-gradient-to-b from-white to-slate-50/80 p-4 text-center transition hover:border-primary/20 hover:shadow-md md:flex-row md:gap-4 md:p-5 md:text-left"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition group-hover:from-primary group-hover:to-[#0c4a8a] group-hover:text-white md:mb-0">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-primary md:text-3xl">{item.value}</div>
                  <div className="mt-0.5 text-xs font-medium leading-snug text-slate-600 md:text-sm">
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

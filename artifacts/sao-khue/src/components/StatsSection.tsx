import { motion } from "framer-motion";
import { resolveLucideIcon } from "@/lib/lucide-icons";
import { useHomeStats } from "@/lib/site-settings";

export function StatsSection() {
  const stats = useHomeStats();

  if (stats.length === 0) return null;

  return (
    <section className="relative z-20 -mt-8 pb-4 md:-mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xl shadow-slate-900/10 md:grid-cols-4 md:gap-6 md:p-6 lg:rounded-3xl">
          {stats.map((item, index) => {
            const Icon = resolveLucideIcon(item.icon);
            return (
              <motion.div
                key={`${item.label}-${index}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex flex-col items-center text-center md:flex-row md:gap-4 md:text-left"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary md:mb-0">
                  <Icon size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary md:text-3xl">{item.value}</div>
                  <div className="text-xs font-medium text-slate-600 md:text-sm">{item.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

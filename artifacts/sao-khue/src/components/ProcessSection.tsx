import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { resolveLucideIcon } from "@/lib/lucide-icons";
import { useProcessSteps, useSectionMeta } from "@/lib/site-settings";

export function ProcessSection() {
  const steps = useProcessSteps();
  const meta = useSectionMeta();

  if (steps.length === 0) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader title={meta.process.title} subtitle={meta.process.subtitle} />

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-12 hidden h-0.5 border-t-2 border-dashed border-slate-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = resolveLucideIcon(step.icon);
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-center transition hover:border-primary/20 hover:bg-white hover:shadow-lg"
              >
                <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-primary shadow-md ring-1 ring-slate-100 transition group-hover:bg-primary group-hover:text-white">
                  <Icon size={32} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow">
                    {step.id}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-800 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

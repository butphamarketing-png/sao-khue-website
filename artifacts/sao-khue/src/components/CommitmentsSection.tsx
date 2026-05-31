import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { resolveLucideIcon } from "@/lib/lucide-icons";
import { useCommitments, useSectionMeta } from "@/lib/site-settings";

export function CommitmentsSection() {
  const commitments = useCommitments();
  const meta = useSectionMeta();

  return (
    <section className="section-dark section-pad relative overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="site-container relative z-10">
        <SectionHeader light title={meta.commitments.title} subtitle={meta.commitments.subtitle} />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, index) => {
            const Icon = resolveLucideIcon(item.icon, Shield);

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/12 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-lg transition group-hover:scale-105">
                  <Icon size={28} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-100/90">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

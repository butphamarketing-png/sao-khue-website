import { motion } from "framer-motion";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { useQuoteServices, useSectionMeta } from "@/lib/site-settings";

export function QuoteSection() {
  const services = useQuoteServices();
  const meta = useSectionMeta();

  if (services.length === 0) return null;

  return (
    <section className="section-muted section-pad">
      <div className="site-container">
        <SectionHeader title={meta.quote.title} subtitle={meta.quote.subtitle} />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex justify-center"
            >
              <Link href={service.link} className="group block">
                <div className="relative h-64 w-64">
                  <div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 transition-all duration-700 group-hover:rotate-180 group-hover:border-primary"
                    style={{ transitionDuration: "1.2s" }}
                  />
                  <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary via-[#1565a8] to-[#0c4a8a] text-white shadow-[0_12px_40px_rgba(23,87,157,0.35)] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_16px_50px_rgba(23,87,157,0.45)]">
                    <h3 className="whitespace-pre-line px-4 text-center text-lg font-bold uppercase leading-tight">
                      {service.title}
                    </h3>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition group-hover:bg-accent/90">
                      {service.buttonLabel || "Xem chi tiết"}
                    </div>
                  </div>
                  <div className="absolute -left-1 -top-1 z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-accent text-lg font-bold text-white shadow-xl">
                    {service.id}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

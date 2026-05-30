import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useSectionMeta, useTestimonials } from "@/lib/site-settings";

export function TestimonialsSection() {
  const reviews = useTestimonials();
  const meta = useSectionMeta();

  if (reviews.length === 0) return null;

  return (
    <section className="section-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={meta.testimonials.title}
          subtitle={meta.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
              <div className="mb-4 flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                "{review.text}"
              </p>
              <div className="border-t border-slate-100 pt-4">
                <div className="font-bold text-primary">{review.name}</div>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {review.project}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

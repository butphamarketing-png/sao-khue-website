import { Quote, Star } from "lucide-react";
import { QhSectionTitle } from "@/components/QhSectionTitle";
import { SectionHeader } from "@/components/SectionHeader";
import { useSectionMeta, useTestimonials } from "@/lib/site-settings";

type Props = {
  variant?: "default" | "qh";
};

export function TestimonialsSection({ variant = "default" }: Props) {
  const reviews = useTestimonials();
  const meta = useSectionMeta();

  if (reviews.length === 0) return null;

  if (variant === "qh") {
    return (
      <section className="qh-home-band qh-home-testimonials">
        <QhSectionTitle title="KHÁCH HÀNG NÓI GÌ ?" />
        <div className="site-container py-6 md:py-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {reviews.map((review, index) => (
              <article key={`${review.name}-${index}`} className="qh-home-testimonial">
                <Quote className="qh-home-testimonial__icon" size={28} />
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="qh-home-testimonial__text">"{review.text}"</p>
                <div className="qh-home-testimonial__meta">
                  <strong>{review.name}</strong>
                  <span>{review.project}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-alt">
      <div className="site-container">
        <SectionHeader title={meta.testimonials.title} subtitle={meta.testimonials.subtitle} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="card-premium relative flex flex-col p-6"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

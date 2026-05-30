import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAboutContent } from "@/lib/site-settings";

export function AboutSection() {
  const content = useAboutContent();

  return (
    <section id="gioi-thieu" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10" />
            <img
              src={content.imageUrl}
              alt={content.title}
              className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-slate-200"
            />
            <div className="absolute -bottom-5 -right-2 z-20 rounded-2xl bg-gradient-to-br from-primary to-[#0c4a8a] p-5 text-white shadow-xl md:-right-6 md:p-6">
              <div className="text-3xl font-bold md:text-4xl">{content.experienceYears}</div>
              <div className="mt-1 max-w-[140px] whitespace-pre-line text-xs font-semibold uppercase tracking-wide text-blue-100 md:text-sm">
                {content.experienceLabel}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-4"
          >
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              {content.eyebrow}
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-primary md:text-4xl">
              {content.title}
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-slate-600">{content.intro}</p>
            <p className="mb-8 leading-relaxed text-slate-600">{content.body}</p>

            <ul className="mb-10 space-y-3">
              {content.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              <Link href="/gioi-thieu">
                Xem chi tiết
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAboutContent } from "@/lib/site-settings";

export function AboutSection() {
  const content = useAboutContent();

  return (
    <section id="gioi-thieu" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 z-0 -skew-y-3 rounded-3xl bg-primary/5" />
            <img
              src={content.imageUrl}
              alt={content.title}
              className="relative z-10 aspect-[4/3] h-auto w-full rounded-lg object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 z-20 hidden rounded-lg bg-primary p-6 text-white shadow-2xl md:block">
              <div className="mb-1 text-4xl font-bold">{content.experienceYears}</div>
              <div className="text-sm font-medium opacity-90 whitespace-pre-line">
                {content.experienceLabel}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1 w-10 rounded bg-accent"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
                {content.eyebrow}
              </h3>
            </div>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-primary md:text-4xl">
              {content.title}
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600 text-justify">
              {content.intro}
            </p>

            <p className="mb-8 leading-relaxed text-slate-600 text-justify">
              {content.body}
            </p>

            <ul className="mb-10 space-y-4">
              {content.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="mr-3 mt-0.5 h-6 w-6 shrink-0 text-accent" />
                  <span className="font-medium text-slate-700">{point}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-sm bg-primary px-8 text-white hover:bg-primary/90">
              <Link href="/gioi-thieu">
                XEM CHI TIET <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

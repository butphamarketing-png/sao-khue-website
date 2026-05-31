import { Link } from "wouter";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCtaBanner, usePrimaryPhone, telHref } from "@/lib/site-settings";

export function CTABanner() {
  const phone = usePrimaryPhone();
  const cta = useCtaBanner();

  return (
    <section className="py-12 md:py-16">
      <div className="site-container">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-[#0c4a8a] to-slate-900 px-6 py-10 text-white shadow-[0_24px_60px_rgba(23,87,157,0.25)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent ring-1 ring-white/15">
                {cta.eyebrow}
              </p>
              <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">{cta.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-blue-100/90 md:text-lg">{cta.subtitle}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className="btn-gradient-accent h-12 rounded-full px-8"
              >
                <a href={telHref(phone)}>
                  <PhoneCall className="mr-2 h-5 w-5" />
                  {phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur hover:bg-white hover:text-primary"
              >
                <Link href={cta.secondaryHref}>
                  {cta.secondaryLabel}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

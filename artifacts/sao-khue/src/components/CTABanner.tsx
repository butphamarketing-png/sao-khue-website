import { Link } from "wouter";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCtaBanner, usePrimaryPhone, telHref } from "@/lib/site-settings";

export function CTABanner() {
  const phone = usePrimaryPhone();
  const cta = useCtaBanner();

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#0c4a8a] to-slate-900 px-6 py-10 text-white shadow-xl md:px-12 md:py-14">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
                {cta.eyebrow}
              </p>
              <h2 className="text-2xl font-bold md:text-3xl">{cta.title}</h2>
              <p className="mt-3 text-blue-100/90">{cta.subtitle}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent shadow-lg hover:bg-accent/90"
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
                className="rounded-full border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary"
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

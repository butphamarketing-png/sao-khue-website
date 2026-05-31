import type { ReactNode } from "react";
import { Link } from "wouter";
import { useSiteSettings, useTopBarSlogan } from "@/lib/site-settings";

type Props = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageBanner({ title, subtitle, children }: Props) {
  const s = useSiteSettings();
  const slogan = useTopBarSlogan();

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-[#0c4a8a] to-slate-900 text-white">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="site-container relative py-14 md:py-16 lg:py-20">
        <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-accent ring-1 ring-white/15">
          {s.companyName || slogan}
        </p>
        <h1 className="max-w-4xl text-3xl font-bold uppercase leading-[1.15] tracking-wide md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100/90 md:text-lg">
            {subtitle}
          </p>
        )}
        {children ?? (
          <nav
            className="mt-5 flex flex-wrap items-center gap-2 text-sm text-blue-100/90"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition hover:text-white">
              Trang chủ
            </Link>
            <span aria-hidden className="opacity-50">
              ›
            </span>
            <span className="text-white/95">{title}</span>
          </nav>
        )}
      </div>

      <div className="pointer-events-none absolute -bottom-px left-0 right-0 text-white">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-6 w-full md:h-8"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 48V24C240 0 480 0 720 12C960 24 1200 48 1440 36V48H0Z"
            fill="currentColor"
            className="text-[hsl(var(--background))]"
          />
        </svg>
      </div>
    </div>
  );
}

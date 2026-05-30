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
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container relative mx-auto px-4 py-16 md:py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-accent">
          {s.companyName || slogan}
        </p>
        <h1 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-wide md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-blue-100/90 md:text-lg">{subtitle}</p>
        )}
        {children ?? (
          <div className="mt-4 flex items-center gap-2 text-sm text-blue-100">
            <Link href="/" className="transition hover:text-white">
              Trang chủ
            </Link>
            <span aria-hidden>›</span>
            <span>{title}</span>
          </div>
        )}
      </div>
    </div>
  );
}

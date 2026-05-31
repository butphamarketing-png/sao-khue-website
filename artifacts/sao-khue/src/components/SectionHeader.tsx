import type { ReactNode } from "react";
import { useTopBarSlogan } from "@/lib/site-settings";

type Props = {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  action?: ReactNode;
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  action,
  light = false,
  className = "",
}: Props) {
  const centered = align === "center";
  const eyebrow = useTopBarSlogan();

  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? "text-center" : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <div className={centered ? "mx-auto max-w-3xl" : ""}>
        <div
          className={`mb-4 inline-flex items-center gap-3 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent" />
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] ${
              light
                ? "bg-white/10 text-blue-100 ring-1 ring-white/15"
                : "bg-accent/10 text-accent ring-1 ring-accent/15"
            }`}
          >
            {eyebrow}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent" />
        </div>
        <h2
          className={`text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-[2.75rem] ${
            light ? "text-white" : "text-gradient-brand"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-base leading-relaxed md:mt-5 md:text-lg ${
              light ? "text-blue-100/90" : "text-slate-600"
            } ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className={centered ? "mt-6 flex justify-center" : "shrink-0"}>{action}</div>}
    </div>
  );
}

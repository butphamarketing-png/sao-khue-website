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
      className={`mb-12 md:mb-16 ${
        centered ? "text-center" : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      } ${className}`}
    >
      <div className={centered ? "mx-auto max-w-3xl" : ""}>
        <div
          className={`mb-3 inline-flex items-center gap-2 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-1 w-8 rounded-full bg-accent" />
          <span
            className={`text-xs font-bold uppercase tracking-[0.25em] ${
              light ? "text-blue-200" : "text-accent"
            }`}
          >
            {eyebrow}
          </span>
        </div>
        <h2
          className={`text-3xl font-bold uppercase md:text-4xl ${
            light ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h2>
        <div
          className={`mt-4 h-1 w-20 rounded-full bg-accent ${
            centered ? "mx-auto" : ""
          }`}
        />
        {subtitle && (
          <p
            className={`mt-5 text-base leading-relaxed md:text-lg ${
              light ? "text-blue-100/90" : "text-slate-600"
            } ${centered ? "mx-auto" : "max-w-2xl"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className={centered ? "mt-6" : "shrink-0"}>{action}</div>}
    </div>
  );
}

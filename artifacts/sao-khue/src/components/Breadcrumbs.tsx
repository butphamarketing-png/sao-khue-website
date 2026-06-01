import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";

type Props = {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean;
};

export function Breadcrumbs({ items, className = "", light = false }: Props) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex flex-wrap items-center gap-1.5 text-sm ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.path}-${index}`} className="inline-flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight
                size={14}
                className={light ? "text-blue-200/70" : "text-slate-400"}
                aria-hidden
              />
            )}
            {isLast ? (
              <span
                className={light ? "font-medium text-white" : "font-semibold text-primary"}
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path}
                className={
                  light
                    ? "text-blue-100 transition hover:text-white"
                    : "text-slate-600 transition hover:text-primary"
                }
              >
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

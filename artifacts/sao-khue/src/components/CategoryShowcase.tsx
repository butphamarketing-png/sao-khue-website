import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { navMenu } from "@/lib/menu";
import { useCategoryPages } from "@/lib/site-settings";

type Props = {
  category: string;
};

export function CategoryShowcase({ category }: Props) {
  const pages = useCategoryPages();
  const section = navMenu.find((m) => m.category === category);
  const content = pages[category];
  const children = section?.children ?? [];

  if (!content) return null;

  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
          {content.title}
        </p>
        <p className="max-w-3xl leading-relaxed text-slate-600">{content.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {content.highlights.map((h) => (
            <li
              key={h}
              className="rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>

      {children.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <span className="font-semibold text-slate-800 group-hover:text-primary">
                {child.title}
              </span>
              <ArrowRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-primary"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

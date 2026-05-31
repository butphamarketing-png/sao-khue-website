import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useCategoryPages, useNavMenu } from "@/lib/site-settings";

type Props = {
  category: string;
};

export function CategoryShowcase({ category }: Props) {
  const pages = useCategoryPages();
  const menu = useNavMenu();
  const section = menu.find((m) => m.category === category);
  const content = pages[category];
  const children = section?.children ?? [];

  if (!content) return null;

  return (
    <div className="site-container pb-8 pt-2">
      <div className="content-card mb-10 p-6 md:p-8">
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
              className="card-premium group flex items-center justify-between p-5 hover:border-primary/30"
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

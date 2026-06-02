import { useCategoryPages } from "@/lib/site-settings";
import { normalizeCategory } from "@/lib/categories";

type Props = {
  category: string;
};

/** Khối mô tả đầu trang danh mục — không còn link menu con */
export function CategoryShowcase({ category }: Props) {
  const pages = useCategoryPages();
  const key = normalizeCategory(category);
  const content = pages[key] ?? pages[category];

  if (!content) return null;

  return (
    <div className="site-container pb-6 pt-2">
      <div className="content-card p-6 md:p-8">
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
    </div>
  );
}

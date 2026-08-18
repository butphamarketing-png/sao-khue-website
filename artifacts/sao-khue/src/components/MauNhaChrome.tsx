import { Link } from "wouter";
import { MAU_NHA_CATEGORIES } from "@/lib/mau-nha";

export function MauNhaDiamondHeading({
  eyebrow,
  title,
  as = "h1",
}: {
  eyebrow: string;
  title: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div className="text-center">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/70">{eyebrow}</p>
      <div className="sk-diamond-row my-3 text-primary/70">
        <span className="sk-diamond" />
      </div>
      <Tag className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-primary md:text-[1.85rem]">
        {title}
      </Tag>
    </div>
  );
}

export function MauNhaCategoryStrip({ active }: { active?: string }) {
  return (
    <nav className="flex flex-wrap justify-center gap-2" aria-label="Danh mục mẫu nhà">
      <Link
        href="/mau-nha"
        className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
          !active
            ? "bg-[#062a4a] text-white"
            : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
        }`}
      >
        Tất cả
      </Link>
      {MAU_NHA_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/mau-nha/${category.slug}`}
          className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide ${
            active === category.slug
              ? "bg-[#062a4a] text-white"
              : "border border-primary/20 text-primary hover:bg-primary hover:text-white"
          }`}
        >
          {category.shortTitle}
        </Link>
      ))}
    </nav>
  );
}

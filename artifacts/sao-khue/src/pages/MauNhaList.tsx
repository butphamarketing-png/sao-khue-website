import { Link, useParams } from "wouter";
import { PageShell } from "@/components/PageShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { MauNhaCategoryStrip, MauNhaDiamondHeading } from "@/components/MauNhaChrome";
import { usePageSeo } from "@/hooks/use-page-seo";
import { getMauNhaCategory } from "@/lib/mau-nha";
import { absoluteUrl, buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";
import { useSiteSettings } from "@/lib/site-settings";
import NotFound from "@/pages/not-found";

export default function MauNhaList() {
  const { category: categorySlug } = useParams<{ category: string }>();
  const category = getMauNhaCategory(categorySlug);
  const s = useSiteSettings();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const breadcrumbs = category
    ? [
        { name: "Trang chủ", path: "/" },
        { name: "Mẫu nhà hiện đại", path: "/mau-nha" },
        { name: category.title, path: `/mau-nha/${category.slug}` },
      ]
    : [];

  usePageSeo(
    category
      ? {
          title: `${category.title} đẹp hiện đại | ${brand}`,
          description: category.description,
          path: `/mau-nha/${category.slug}`,
          keywords: `${category.title}, mẫu nhà hiện đại, xây nhà trọn gói`,
          ogImage: category.cover,
          ogImageAlt: `${category.title} — ${brand}`,
          jsonLd: [
            buildBreadcrumbSchema(breadcrumbs),
            buildCollectionPageSchema(category.title, category.description, absoluteUrl(`/mau-nha/${category.slug}`)),
            buildItemListSchema(
              category.models.map((model) => ({
                name: model.name,
                url: absoluteUrl(`/mau-nha/${category.slug}/${model.slug}`),
              })),
              category.title,
            ),
          ],
        }
      : null,
  );

  if (!category) return <NotFound />;

  return (
    <PageShell>
      <section className="relative min-h-[280px] overflow-hidden bg-[#062a4a] md:min-h-[360px]">
        <img
          src={category.cover}
          alt={category.title}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[#062a4a]/55" />
        <div className="site-container relative z-10 flex min-h-[280px] flex-col items-center justify-center py-16 text-center text-white md:min-h-[360px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/80">Mẫu nhà hiện đại</p>
          <div className="sk-diamond-row my-3 text-white/80">
            <span className="sk-diamond border-white" />
          </div>
          <h1 className="sk-hero-title font-display text-3xl font-bold uppercase tracking-wide md:text-4xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-white/85">{category.description}</p>
        </div>
      </section>

      <section className="bg-[#f7f4ef] py-10 md:py-14">
        <div className="site-container">
          <Breadcrumbs items={breadcrumbs} className="mb-8 justify-center" />
          <MauNhaCategoryStrip active={category.slug} />
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-container">
          <MauNhaDiamondHeading
            as="h2"
            eyebrow={`${category.models.length} mẫu`}
            title={`Danh sách ${category.shortTitle.toLowerCase()}`}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {category.models.map((model) => (
              <Link
                key={model.slug}
                href={`/mau-nha/${category.slug}/${model.slug}`}
                className="group block"
              >
                <article>
                  <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary/70">
                      {model.size} · {model.style}
                    </p>
                    <h3 className="mt-1 font-display text-sm font-bold uppercase leading-snug tracking-wide text-primary group-hover:underline">
                      {model.name}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}

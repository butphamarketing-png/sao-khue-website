import { Link, useParams } from "wouter";
import { PageShell } from "@/components/PageShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { MauNhaCategoryStrip } from "@/components/MauNhaChrome";
import { usePageSeo } from "@/hooks/use-page-seo";
import { getMauNhaModel } from "@/lib/mau-nha";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";
import { telHref, usePrimaryPhone, useSiteSettings } from "@/lib/site-settings";
import NotFound from "@/pages/not-found";

export default function MauNhaDetail() {
  const { category: categorySlug, slug } = useParams<{ category: string; slug: string }>();
  const found = getMauNhaModel(categorySlug, slug);
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const category = found?.category;
  const model = found?.model;
  const related = category && model ? category.models.filter((item) => item.slug !== model.slug).slice(0, 4) : [];
  const breadcrumbs =
    category && model
      ? [
          { name: "Trang chủ", path: "/" },
          { name: "Mẫu nhà hiện đại", path: "/mau-nha" },
          { name: category.title, path: `/mau-nha/${category.slug}` },
          { name: model.name, path: `/mau-nha/${category.slug}/${model.slug}` },
        ]
      : [];

  usePageSeo(
    category && model
      ? {
          title: `${model.name} — ${model.size} | ${brand}`,
          description: `${model.name} (${model.size}, phong cách ${model.style}). Xem mẫu và nhận báo giá xây nhà trọn gói tại Sao Khuê.`,
          path: `/mau-nha/${category.slug}/${model.slug}`,
          keywords: `${model.name}, ${category.title}, mẫu nhà hiện đại`,
          ogImage: model.image,
          ogImageAlt: `${model.name} — ${brand}`,
          jsonLd: [
            buildBreadcrumbSchema(breadcrumbs),
            {
              "@context": "https://schema.org",
              "@type": "ImageObject",
              name: model.name,
              contentUrl: absoluteUrl(model.image),
              description: `${model.name} — ${model.size}`,
            },
          ],
        }
      : null,
  );

  if (!category || !model) return <NotFound />;

  return (
    <PageShell>
      <section className="bg-[#f7f4ef] py-8">
        <div className="site-container">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <MauNhaCategoryStrip active={category.slug} />
        </div>
      </section>

      <section className="bg-white py-10 md:py-16">
        <div className="site-container grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div className="overflow-hidden bg-slate-100">
            <img src={model.image} alt={model.name} className="w-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary/70">{category.title}</p>
            <div className="sk-diamond-row my-3 justify-start text-primary/70">
              <span className="sk-diamond" />
            </div>
            <h1 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-primary md:text-3xl">
              {model.name}
            </h1>
            <dl className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Kích thước</dt>
                <dd className="font-semibold text-primary">{model.size}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Phong cách</dt>
                <dd className="font-semibold text-primary">{model.style}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Loại nhà</dt>
                <dd className="font-semibold text-primary">{category.shortTitle}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              Ảnh mẫu tham khảo — Sao Khuê thiết kế lại cho đúng khuôn đất, công năng và ngân sách của bạn.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/xay-nha#bao-gia"
                className="btn-gradient-accent inline-flex h-12 items-center justify-center px-6 text-sm font-bold uppercase tracking-wide text-white"
              >
                Nhận báo giá mẫu này
              </Link>
              {phone && (
                <a
                  href={telHref(phone)}
                  className="inline-flex h-12 items-center justify-center border border-primary/25 text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white"
                >
                  Gọi {phone}
                </a>
              )}
              <Link
                href={`/mau-nha/${category.slug}`}
                className="text-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                ← Xem tất cả {category.shortTitle.toLowerCase()}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-[#f7f4ef] py-12 md:py-16">
          <div className="site-container">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-primary">Mẫu cùng loại</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <Link key={item.slug} href={`/mau-nha/${category.slug}/${item.slug}`} className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-primary">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </PageShell>
  );
}

import { Link } from "wouter";
import { PageShell } from "@/components/PageShell";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { MauNhaCategoryStrip, MauNhaDiamondHeading } from "@/components/MauNhaChrome";
import { usePageSeo } from "@/hooks/use-page-seo";
import { MAU_NHA_CATEGORIES } from "@/lib/mau-nha";
import { absoluteUrl, buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";
import { useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function MauNhaHub() {
  const s = useSiteSettings();
  const ogImage = useOpenGraphImage() || MAU_NHA_CATEGORIES[0]?.cover;
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Mẫu nhà hiện đại", path: "/mau-nha" },
  ];

  usePageSeo({
    title: `Mẫu nhà hiện đại — cấp 4, 2 tầng, 3 tầng | ${brand}`,
    description:
      "Catalog mẫu nhà hiện đại Sao Khuê: nhà cấp 4, nhà phố 2–4 tầng, biệt thự, nhà ống. Ảnh thực tế — bấm danh mục để xem list mẫu.",
    path: "/mau-nha",
    keywords: "mẫu nhà hiện đại, mẫu nhà cấp 4, mẫu nhà phố 2 tầng, mẫu nhà 3 tầng, biệt thự hiện đại",
    ogImage,
    ogImageAlt: `Mẫu nhà hiện đại — ${brand}`,
    jsonLd: [
      buildBreadcrumbSchema(breadcrumbs),
      buildCollectionPageSchema(
        "Mẫu nhà hiện đại",
        "Danh mục mẫu nhà cấp 4, nhà phố, biệt thự và nhà ống.",
        absoluteUrl("/mau-nha"),
      ),
      buildItemListSchema(
        MAU_NHA_CATEGORIES.map((c) => ({
          name: c.title,
          url: absoluteUrl(`/mau-nha/${c.slug}`),
        })),
        "Danh mục mẫu nhà",
      ),
    ],
  });

  return (
    <PageShell>
      <section className="bg-[#f7f4ef] py-12 md:py-16">
        <div className="site-container">
          <Breadcrumbs items={breadcrumbs} className="mb-8 justify-center" />
          <MauNhaDiamondHeading eyebrow="Catalog thiết kế" title="Mẫu nhà hiện đại" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-600">
            Chọn loại nhà — xem list mẫu ảnh thực tế, không banner chữ đè lên hình.
          </p>
          <div className="mt-8">
            <MauNhaCategoryStrip />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MAU_NHA_CATEGORIES.map((category) => (
            <Link key={category.slug} href={`/mau-nha/${category.slug}`} className="group block">
              <article>
                <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                  <img
                    src={category.cover}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#062a4a] px-4 py-3 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                    {category.models.length} mẫu
                  </p>
                  <h2 className="mt-1 font-display text-base font-bold uppercase tracking-wide">
                    {category.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}

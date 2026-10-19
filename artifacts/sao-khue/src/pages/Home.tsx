import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/HeroSection";
import { HomeBelowHero } from "@/components/HomeBelowHero";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildFAQSchema, HOME_SEO_DESCRIPTION, HOME_SEO_TITLE, stripHtmlForSchema } from "@/lib/seo";
import { useFaqs, useOpenGraphImage } from "@/lib/site-settings";

export default function Home() {
  const ogImage = useOpenGraphImage();
  const faqs = useFaqs();
  const description = HOME_SEO_DESCRIPTION;

  const faqSchema =
    faqs.length > 0
      ? buildFAQSchema(
          faqs.map((item) => ({
            q: item.q,
            a: stripHtmlForSchema(item.a),
          })),
        )
      : null;

  usePageSeo({
    title: HOME_SEO_TITLE,
    description,
    path: "/",
    keywords:
      "xây nhà trọn gói tphcm, thiết kế nhà phố, xây dựng sao khuê, báo giá xây nhà, công ty xây dựng tphcm",
    ogImage,
    ogImageAlt: HOME_SEO_TITLE,
    jsonLd: faqSchema ?? undefined,
  });

  return (
    <PageShell>
      <HeroSection />
      <HomeBelowHero />
    </PageShell>
  );
}

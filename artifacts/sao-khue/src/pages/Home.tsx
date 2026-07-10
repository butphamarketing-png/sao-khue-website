import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/HeroSection";
import { HomeBelowHero } from "@/components/HomeBelowHero";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildFAQSchema, stripHtmlForSchema } from "@/lib/seo";
import { useFaqs, useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function Home() {
  const s = useSiteSettings();
  const ogImage = useOpenGraphImage();
  const faqs = useFaqs();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const description =
    s.footerDescription ||
    "Thiết kế và thi công xây dựng nhà phố, biệt thự trọn gói uy tín tại TP.HCM. Khảo sát miễn phí, báo giá minh bạch, bảo hành kết cấu 10 năm.";

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
    title: `${brand} | Thiết kế & xây dựng nhà trọn gói TP.HCM`,
    description,
    path: "/",
    keywords:
      "xây nhà trọn gói tphcm, thiết kế nhà phố, xây dựng sao khuê, báo giá xây nhà, công ty xây dựng tphcm",
    ogImage,
    jsonLd: faqSchema ?? undefined,
  });

  return (
    <PageShell>
      <HeroSection />
      <HomeBelowHero />
    </PageShell>
  );
}

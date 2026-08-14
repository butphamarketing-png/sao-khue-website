import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CTABanner } from "@/components/CTABanner";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema } from "@/lib/seo";
import { useCategoryPages, useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function Projects() {
  const s = useSiteSettings();
  const pages = useCategoryPages();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const content = pages["cong-trinh"];

  usePageSeo({
    title: `Công trình đã thi công | ${brand}`,
    description:
      content?.description ??
      "Dự án nhà phố, biệt thự và cải tạo do Sao Khuê thi công tại TP.HCM và lân cận.",
    path: "/cong-trinh",
    keywords: "công trình xây dựng, nhà phố, biệt thự, xây nhà tphcm",
    ogImage,
    ogImageAlt: `Công trình đã thi công — ${brand}`,
    jsonLd: [
      buildBreadcrumbSchema([
        { name: "Trang chủ", path: "/" },
        { name: "Công trình", path: "/cong-trinh" },
      ]),
    ],
  });

  return (
    <PageShell>
      <PageBanner
        title="Công trình đã thi công"
        subtitle="Một số dự án nhà phố, biệt thự và cải tạo do Sao Khuê thiết kế và thi công."
      />
      <ProjectsSection />
      <CTABanner />
    </PageShell>
  );
}

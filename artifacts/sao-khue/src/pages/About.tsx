import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { AboutSection } from "@/components/AboutSection";
import { CommitmentsSection } from "@/components/CommitmentsSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { useCategoryPages, useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function About() {
  const s = useSiteSettings();
  const pages = useCategoryPages();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const content = pages["gioi-thieu"];

  usePageSeo({
    title: `Về chúng tôi | ${brand}`,
    description: content?.description ?? "Giới thiệu Sao Khuê — thiết kế và xây dựng uy tín TP.HCM.",
    path: "/gioi-thieu",
    ogImage,
  });

  return (
    <PageShell>
      <PageBanner
        title="Về chúng tôi"
        subtitle="Kiến trúc và xây dựng trọn gói — uy tín, minh bạch, đồng hành cùng gia đình bạn."
      />
      <AboutSection />
      <CommitmentsSection />
    </PageShell>
  );
}

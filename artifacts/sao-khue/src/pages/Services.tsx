import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { useCategoryPages, useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function Services() {
  const s = useSiteSettings();
  const pages = useCategoryPages();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const content = pages["dich-vu"];

  usePageSeo({
    title: `Dịch vụ xây dựng | ${brand}`,
    description:
      content?.description ??
      "Xây nhà trọn gói, phần thô, thiết kế, sửa chữa và nâng tầng nhà phố tại TP.HCM.",
    path: "/dich-vu",
    keywords: "dịch vụ xây dựng, xây nhà trọn gói, xây phần thô, thiết kế nhà tphcm",
    ogImage,
  });

  return (
    <PageShell>
      <PageBanner
        title="Dịch vụ"
        subtitle="Xây nhà trọn gói, phần thô, thiết kế, sửa chữa và cải tạo nhà tại TP.HCM và các tỉnh lân cận."
      />
      <ServicesSection />
      <ProcessSection />
      <ContactCTASection />
    </PageShell>
  );
}

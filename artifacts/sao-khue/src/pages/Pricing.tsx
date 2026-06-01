import { PageShell } from "@/components/PageShell";
import { QuoteSection } from "@/components/QuoteSection";
import { PricingTableSection } from "@/components/PricingTableSection";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { PageBanner } from "@/components/PageBanner";
import { useOpenGraphImage, usePageBanner, useSiteSettings } from "@/lib/site-settings";
import { usePageSeo } from "@/hooks/use-page-seo";
import { absoluteUrl, buildServiceOfferSchema } from "@/lib/seo";

export default function Pricing() {
  const banner = usePageBanner("pricing");
  const s = useSiteSettings();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";

  usePageSeo({
    title: `Báo giá xây dựng 2026 | ${brand}`,
    description:
      banner.subtitle +
      " Đơn giá xây phần thô, trọn gói và công cụ tính chi phí xây dựng trực tuyến.",
    path: "/bao-gia",
    keywords:
      "báo giá xây nhà, đơn giá xây dựng, xây nhà trọn gói giá, xây phần thô tphcm",
    ogImage,
    jsonLd: [
      buildServiceOfferSchema(
        "Xây dựng phần thô",
        "Thi công móng, khung, mái và hệ thống điện nước âm tường.",
        3550000,
        3800000,
        absoluteUrl("/bao-gia"),
        brand,
      ),
      buildServiceOfferSchema(
        "Xây nhà trọn gói",
        "Thiết kế, thi công và hoàn thiện chìa khóa trao tay.",
        4850000,
        6700000,
        absoluteUrl("/bao-gia"),
        brand,
      ),
    ],
  });

  return (
    <PageShell>
      <PageBanner title={banner.title}>
        <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">{banner.subtitle}</p>
      </PageBanner>

      <QuoteSection />
      <PricingTableSection />
      <CostCalculator />
      <CTABanner />
      <FAQSection
        title="Giải đáp về báo giá"
        subtitle="Hiểu rõ cách Sao Khuê lập dự toán và cam kết chi phí trước khi ký hợp đồng."
      />
      <ContactCTASection />
    </PageShell>
  );
}

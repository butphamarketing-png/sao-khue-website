import { PageShell } from "@/components/PageShell";
import { QuoteSection } from "@/components/QuoteSection";
import { PricingTableSection } from "@/components/PricingTableSection";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { PageBanner } from "@/components/PageBanner";
import { usePageBanner } from "@/lib/site-settings";

export default function Pricing() {
  const banner = usePageBanner("pricing");

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

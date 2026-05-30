import { PageShell } from "@/components/PageShell";
import { QuoteSection } from "@/components/QuoteSection";
import { PricingTableSection } from "@/components/PricingTableSection";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FAQSection } from "@/components/FAQSection";
import { CTABanner } from "@/components/CTABanner";
import { PageBanner } from "@/components/PageBanner";

export default function Pricing() {
  return (
    <PageShell>
      <PageBanner title="Báo giá xây dựng">
        <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">
          Tham khảo đơn giá xây thô, trọn gói và công cụ tính chi phí nhanh — minh bạch, không phát sinh.
        </p>
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

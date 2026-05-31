import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactCTASection } from "@/components/ContactCTASection";

export default function Services() {
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

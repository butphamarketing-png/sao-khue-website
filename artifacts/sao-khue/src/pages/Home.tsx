import { PageShell } from "@/components/PageShell";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CommitmentsSection } from "@/components/CommitmentsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTABanner } from "@/components/CTABanner";
import { PricingTableSection } from "@/components/PricingTableSection";
import { QuoteSection } from "@/components/QuoteSection";
import { CostCalculator } from "@/components/CostCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsSection } from "@/components/NewsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { VideoSection } from "@/components/VideoSection";
import { usePageSeo } from "@/hooks/use-page-seo";
import { useOpenGraphImage, useSiteSettings } from "@/lib/site-settings";

export default function Home() {
  const s = useSiteSettings();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";

  usePageSeo({
    title: `${brand} | Thiết kế & xây dựng nhà trọn gói TP.HCM`,
    description:
      s.footerDescription ||
      "Thiết kế và thi công xây dựng nhà phố, biệt thự trọn gói uy tín tại TP.HCM. Khảo sát miễn phí, báo giá minh bạch, bảo hành kết cấu 10 năm.",
    path: "/",
    ogImage,
  });

  return (
    <PageShell>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <CommitmentsSection />
      <ProjectsSection />
      <ProcessSection />
      <VideoSection />
      <CTABanner />
      <PricingTableSection />
      <QuoteSection />
      <CostCalculator />
      <TestimonialsSection />
      <NewsSection />
      <FAQSection />
      <ContactCTASection />
    </PageShell>
  );
}

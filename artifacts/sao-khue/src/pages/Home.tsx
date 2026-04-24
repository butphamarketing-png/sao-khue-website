import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CommitmentsSection } from "@/components/CommitmentsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { CostCalculator } from "@/components/CostCalculator";
import { PricingTableSection } from "@/components/PricingTableSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { NewsSection } from "@/components/NewsSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CommitmentsSection />
        <PricingTableSection />
        <QuoteSection />
        <CostCalculator />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <NewsSection />
        <ContactCTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

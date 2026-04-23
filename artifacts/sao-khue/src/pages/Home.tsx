import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { QuoteSection } from "@/components/QuoteSection";
import { CommitmentsSection } from "@/components/CommitmentsSection";
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
        <QuoteSection />
        <CommitmentsSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <CommitmentsSection />
        <NewsSection />
        <ContactCTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

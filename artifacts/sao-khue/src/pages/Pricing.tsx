import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { QuoteSection } from "@/components/QuoteSection";
import { PricingTableSection } from "@/components/PricingTableSection";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center uppercase">BÁO GIÁ XÂY DỰNG</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <QuoteSection />
        <PricingTableSection />
        <ContactCTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

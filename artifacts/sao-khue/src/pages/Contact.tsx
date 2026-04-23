import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { ContactCTASection } from "@/components/ContactCTASection";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar />
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center uppercase">LIÊN HỆ</h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>
        
        <ContactCTASection />
        
        <div className="container mx-auto px-4 py-20">
          <div className="w-full h-[500px] bg-slate-200 rounded-lg overflow-hidden border border-slate-300 flex items-center justify-center">
             <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-2">Bản đồ vị trí (Placeholder)</h3>
                <p className="text-slate-600 mb-4">245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM</p>
                <div className="text-5xl">🗺️</div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

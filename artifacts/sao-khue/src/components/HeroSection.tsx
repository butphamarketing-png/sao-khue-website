import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "KIẾN TẠO KHÔNG GIAN SỐNG ĐẲNG CẤP",
    subtitle: "Thiết Kế & Thi Công Nhà Phố, Biệt Thự Trọn Gói",
    description: "CÔNG TY TNHH KIẾN TRÚC SAO KHUÊ cam kết mang đến những giải pháp không gian hoàn hảo, tối ưu chi phí và chất lượng vượt trội."
  },
  {
    image: "/images/hero-2.png",
    title: "UY TÍN - CHẤT LƯỢNG - TẬN TĂM",
    subtitle: "Xây Dựng Biệt Thự Hiện Đại",
    description: "Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm, chúng tôi tự hào đồng hành cùng hàng trăm gia đình kiến tạo tổ ấm mơ ước."
  },
  {
    image: "/images/hero-3.png",
    title: "THI CÔNG ĐÚNG TIẾN ĐỘ & BẢO HÀNH DÀI HẠN",
    subtitle: "Quản Lý Dự Án Chuyên Nghiệp",
    description: "Minh bạch trong báo giá, sử dụng vật tư chính hãng, không phát sinh chi phí. Bảo hành kết cấu lên đến 10 năm."
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-accent font-bold tracking-wider text-sm md:text-lg mb-4 uppercase inline-block border-b-2 border-accent pb-1">
                  {slide.subtitle}
                </h2>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-none rounded-sm px-8 py-6 text-lg font-bold">
                    <Link href="/bao-gia">
                      NHẬN BÁO GIÁ NGAY <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-sm px-8 py-6 text-lg font-bold">
                    <Link href="/du-an">
                      XEM DỰ ÁN <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeroSlides, useSiteSettings } from "@/lib/site-settings";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useHeroSlides();
  const s = useSiteSettings();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(slides.length, 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-home">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={`${slide.image}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={slide.image}
                alt={slide.title || `${brand} — thiết kế và xây nhà trọn gói TP.HCM`}
                className="hero-home__img absolute inset-0 h-full w-full object-cover object-center"
                width={1920}
                height={820}
                sizes="100vw"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      <div className="hero-home__copy">
        <h1 className="hero-home__title">{brand}</h1>
        <p className="hero-home__tag">Thiết kế &amp; xây nhà trọn gói tại TP.HCM — khảo sát miễn phí</p>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2 sm:bottom-10">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-10 bg-accent shadow-[0_0_12px_rgba(230,57,70,0.6)]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

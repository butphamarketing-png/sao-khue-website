import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useHeroSlides, useHomeVideo } from "@/lib/site-settings";

function toEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("youtube.com/embed/") || url.includes("player.vimeo.com")) {
    return url;
  }

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.replace("/", "");
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
    return url;
  } catch {
    return url;
  }
}

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const slides = useHeroSlides();
  const homeVideo = useHomeVideo();
  const embedUrl = useMemo(() => toEmbedUrl(homeVideo.url), [homeVideo.url]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(slides.length, 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="relative h-[min(88vh,820px)] min-h-[520px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={`${slide.title}-${index}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/85 via-slate-900/55 to-slate-900/30" />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 z-20 flex items-center">
                  <div className="container mx-auto px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.15 }}
                      className="max-w-3xl text-white"
                    >
                      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent backdrop-blur-md md:text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {slide.subtitle}
                      </p>
                      <h1 className="mb-5 text-4xl font-bold leading-[1.1] drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl">
                        {slide.title}
                      </h1>
                      <p className="mb-10 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg lg:text-xl">
                        {slide.description}
                      </p>

                      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                        <Button
                          asChild
                          size="lg"
                          className="btn-gradient-accent h-auto rounded-full px-8 py-6 text-base font-bold shadow-xl"
                        >
                          <Link href="/bao-gia">
                            NHẬN BÁO GIÁ NGAY
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="h-auto rounded-full border-white/40 bg-white/10 px-8 py-6 text-base font-bold text-white backdrop-blur hover:bg-white hover:text-primary"
                        >
                          <Link href="/cong-trinh">
                            XEM CÔNG TRÌNH
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        {embedUrl && (
                          <Button
                            type="button"
                            size="lg"
                            variant="ghost"
                            className="h-auto rounded-full px-8 py-6 text-base font-bold text-white hover:bg-white/15"
                            onClick={() => setIsVideoOpen(true)}
                          >
                            {homeVideo.label || "Xem video"}
                            <PlayCircle className="ml-2 h-5 w-5" />
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>

        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-10 bg-accent"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl border-0 bg-black p-2">
          <DialogHeader className="sr-only">
            <DialogTitle>{homeVideo.label || "Video giới thiệu"}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={embedUrl}
              title={homeVideo.label || "Video giới thiệu"}
              className="h-full w-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

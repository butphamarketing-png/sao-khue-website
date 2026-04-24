import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
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
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-10 bg-black/50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 30,
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mx-auto max-w-4xl"
                >
                  <h2 className="mb-4 inline-block border-b-2 border-accent pb-1 text-sm font-bold uppercase tracking-wider text-accent md:text-lg">
                    {slide.subtitle}
                  </h2>
                  <h1 className="mb-6 text-4xl font-bold leading-tight drop-shadow-lg md:text-5xl lg:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 drop-shadow-md md:text-xl">
                    {slide.description}
                  </p>

                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-sm border-none bg-accent px-8 py-6 text-lg font-bold text-white hover:bg-accent/90"
                    >
                      <Link href="/bao-gia">
                        NHẬN BÁO GIÁ NGAY <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="rounded-sm border-white bg-transparent px-8 py-6 text-lg font-bold text-white hover:bg-white hover:text-primary"
                    >
                      <Link href="/du-an">
                        XEM DỰ ÁN <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    {embedUrl && (
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="rounded-sm border-white/70 bg-white/10 px-8 py-6 text-lg font-bold text-white backdrop-blur hover:bg-white hover:text-primary"
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
          </div>
        ))}

        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-accent" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
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

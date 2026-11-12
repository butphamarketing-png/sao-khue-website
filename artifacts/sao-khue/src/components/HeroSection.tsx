import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { HOME_SEO_H1 } from "@/lib/seo";

const HERO_VIDEO = "/videos/hero.mp4";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const userChoseRef = useRef(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncMuted = () => setMuted(video.muted);
    video.addEventListener("volumechange", syncMuted);

    const removeUnlock = () => {
      document.removeEventListener("pointerdown", unlock, { capture: true });
      document.removeEventListener("keydown", unlock, { capture: true });
    };

    const unlock = (event: Event) => {
      if (buttonRef.current?.contains(event.target as Node)) return;
      removeUnlock();
      if (userChoseRef.current) return;
      video.muted = false;
      video.volume = 1;
      video.play().catch(() => {});
    };

    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {
      // Trình duyệt chặn phát có tiếng khi chưa tương tác: phát không tiếng, bật tiếng ở lần chạm đầu.
      video.muted = true;
      video.play().catch(() => {});
      document.addEventListener("pointerdown", unlock, { capture: true });
      document.addEventListener("keydown", unlock, { capture: true });
    });

    return () => {
      video.removeEventListener("volumechange", syncMuted);
      removeUnlock();
    };
  }, []);

  const toggleMuted = () => {
    const video = videoRef.current;
    if (!video) return;
    userChoseRef.current = true;
    video.muted = !video.muted;
    if (!video.muted) video.volume = 1;
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <section className="hero-home">
      <video
        ref={videoRef}
        className="hero-home__img absolute inset-0 h-full w-full object-cover object-center"
        src={HERO_VIDEO}
        autoPlay
        loop
        playsInline
        preload="auto"
        aria-label={HOME_SEO_H1}
      />
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMuted}
        aria-label={muted ? "Bật tiếng video" : "Tắt tiếng video"}
        aria-pressed={muted}
        title={muted ? "Bật tiếng" : "Tắt tiếng"}
        className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-1 ring-white/40 backdrop-blur-sm transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:bottom-6 md:right-6 md:h-12 md:w-12"
      >
        {muted ? <VolumeX className="h-5 w-5 md:h-6 md:w-6" /> : <Volume2 className="h-5 w-5 md:h-6 md:w-6" />}
      </button>
      <h1 className="sr-only">{HOME_SEO_H1}</h1>
    </section>
  );
}

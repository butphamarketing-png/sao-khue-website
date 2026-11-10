import { useEffect, useRef } from "react";
import { HOME_SEO_H1 } from "@/lib/seo";

const HERO_VIDEO = "/videos/hero.mp4";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playWithSound = () => {
      video.muted = false;
      video.volume = 1;
      return video.play();
    };

    const unlock = () => {
      playWithSound().catch(() => {});
    };

    playWithSound().catch(() => {
      document.addEventListener("pointerdown", unlock, { capture: true, once: true });
      document.addEventListener("keydown", unlock, { capture: true, once: true });
    });

    return () => {
      document.removeEventListener("pointerdown", unlock, { capture: true });
      document.removeEventListener("keydown", unlock, { capture: true });
    };
  }, []);

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
      <h1 className="sr-only">{HOME_SEO_H1}</h1>
    </section>
  );
}

import { useEffect, useState } from "react";
import { BUNDLED_LOGO_URL, resolveLogoUrl } from "@/lib/brand-assets";

const LOGO_FALLBACKS = [BUNDLED_LOGO_URL, "/favicon.svg"];

type BrandLogoProps = {
  src?: string | null;
  alt: string;
  className?: string;
  /** @deprecated kept for API compat — transparent PNG needs no blend hack */
  variant?: "default" | "on-dark";
};

export function BrandLogo({ src, alt, className }: BrandLogoProps) {
  const resolved = resolveLogoUrl(src);
  const [currentSrc, setCurrentSrc] = useState(resolved);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  useEffect(() => {
    setCurrentSrc(resolveLogoUrl(src));
    setFallbackIndex(0);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className ?? ""}
      decoding="async"
      onError={() => {
        const nextIndex = fallbackIndex + 1;
        const nextSrc = LOGO_FALLBACKS[nextIndex] ?? LOGO_FALLBACKS[LOGO_FALLBACKS.length - 1];
        setFallbackIndex(nextIndex);
        setCurrentSrc(nextSrc);
      }}
    />
  );
}

import { useEffect } from "react";
import { useSiteSettings } from "@/lib/site-settings";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function setMeta(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function injectGA(id: string) {
  document.querySelectorAll('script[data-ga="1"]').forEach((s) => s.remove());
  if (!id) return;
  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  s1.dataset.ga = "1";
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.dataset.ga = "1";
  s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id.replace(/'/g, "")}');`;
  document.head.appendChild(s2);
}

export function SiteHead() {
  const s = useSiteSettings();
  useEffect(() => {
    setMeta("google-site-verification", s.gscVerification);
    injectGA(s.gaTrackingId);
  }, [s.gscVerification, s.gaTrackingId]);
  return null;
}

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

function setPropertyMeta(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!content) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, type?: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (type) {
    el.setAttribute("type", type);
  } else {
    el.removeAttribute("type");
  }
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function setStructuredData(id: string, data: Record<string, unknown>) {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-structured="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.dataset.structured = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
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
    const currentUrl = window.location.href;
    const pageTitle =
      s.companyName || "Kien Truc Sao Khue - Thiet Ke va Xay Dung Nha Tron Goi TP.HCM";
    const pageDescription =
      s.footerDescription ||
      "Thiet ke va thi cong xay dung nha tron goi uy tin, minh bach va toi uu chi phi.";

    document.title =
      pageTitle;
    setMeta("description", pageDescription);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("theme-color", "#17579d");
    setMeta("google-site-verification", s.gscVerification);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:title", pageTitle);
    setPropertyMeta("og:description", pageDescription);
    setPropertyMeta("og:site_name", s.companyName || "Kien Truc Sao Khue");
    setPropertyMeta("og:url", currentUrl);
    setPropertyMeta("og:image", s.logoUrl || "/opengraph.jpg");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", s.logoUrl || "/opengraph.jpg");
    setCanonical(currentUrl);
    setLink("icon", s.logoUrl || "/favicon.svg");
    setLink("apple-touch-icon", s.logoUrl || "/favicon.svg");
    setStructuredData("organization", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: s.companyName,
      image: s.logoUrl || "/opengraph.jpg",
      url: window.location.origin,
      telephone: s.hotline1,
      email: s.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: s.address1,
        addressLocality: "TP.HCM",
        addressCountry: "VN",
      },
      sameAs: [s.facebookUrl, s.youtubeUrl, s.instagramUrl].filter(Boolean),
    });
    setStructuredData("website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: s.companyName,
      url: window.location.origin,
      inLanguage: "vi-VN",
    });
    injectGA(s.gaTrackingId);
  }, [
    s.address1,
    s.companyName,
    s.email,
    s.facebookUrl,
    s.footerDescription,
    s.gaTrackingId,
    s.gscVerification,
    s.hotline1,
    s.instagramUrl,
    s.logoUrl,
    s.youtubeUrl,
  ]);
  return null;
}

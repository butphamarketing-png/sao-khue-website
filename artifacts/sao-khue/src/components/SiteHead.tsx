import { useEffect } from "react";
import { useSiteSettings, resolveLogoUrl, useOpenGraphImage, usePrimaryPhone } from "@/lib/site-settings";
import { BUNDLED_OPENGRAPH_URL } from "@/lib/brand-assets";

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
  const ogImage = useOpenGraphImage();
  const phone = usePrimaryPhone();
  useEffect(() => {
    const currentUrl = window.location.href;
    const pageTitle =
      s.companyName ||
      "Kiến Trúc Sao Khuê - Thiết kế và xây dựng nhà trọn gói TP.HCM";
    const pageDescription =
      s.footerDescription ||
      "Thiết kế và thi công xây dựng nhà trọn gói uy tín, minh bạch và tối ưu chi phí.";

    document.title =
      pageTitle;
    setMeta("description", pageDescription);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("theme-color", "#17579d");
    setMeta("google-site-verification", s.gscVerification);
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:title", pageTitle);
    setPropertyMeta("og:description", pageDescription);
    setPropertyMeta("og:site_name", s.companyName || "Kiến Trúc Sao Khuê");
    setPropertyMeta("og:url", currentUrl);
    setPropertyMeta("og:image", ogImage || BUNDLED_OPENGRAPH_URL);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", pageDescription);
    setMeta("twitter:image", ogImage || BUNDLED_OPENGRAPH_URL);
    setCanonical(currentUrl);
    setLink("icon", "/favicon.svg", "image/svg+xml");
    setLink("apple-touch-icon", resolveLogoUrl(s.logoUrl));
    setStructuredData("organization", {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: s.companyName,
      image: resolveLogoUrl(s.logoUrl),
      url: window.location.origin,
      telephone: phone,
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
    phone,
    s.instagramUrl,
    s.logoUrl,
    s.youtubeUrl,
    ogImage,
  ]);
  return null;
}

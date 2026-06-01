import { useEffect } from "react";
import { BUNDLED_LOGO_URL } from "@/lib/brand-assets";
import {
  useSiteSettings,
  resolveLogoUrl,
  useOpenGraphImage,
  useTestimonials,
} from "@/lib/site-settings";
import { BUNDLED_OPENGRAPH_URL } from "@/lib/brand-assets";
import {
  absoluteUrl,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  setMetaName,
  setMetaProperty,
  setStructuredData,
} from "@/lib/seo";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function setLink(rel: string, href: string, type?: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  if (type) el.setAttribute("type", type);
  else el.removeAttribute("type");
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

/** Global head: schema doanh nghiệp, GA, GSC, favicon — meta từng trang dùng usePageSeo. */
export function SiteHead() {
  const s = useSiteSettings();
  const ogImage = useOpenGraphImage();
  const testimonials = useTestimonials();
  const origin = typeof window !== "undefined" ? window.location.origin : absoluteUrl("/");

  useEffect(() => {
    setMetaName("theme-color", "#17579d");
    setMetaName("geo.region", "VN-SG");
    setMetaName("geo.placename", "Thành phố Hồ Chí Minh");
    setMetaName("google-site-verification", s.gscVerification);
    setMetaProperty("og:site_name", s.companyName || "Kiến Trúc Sao Khuê");
    setMetaProperty("og:locale", "vi_VN");

    const faviconHref = resolveLogoUrl(s.logoUrl) || BUNDLED_LOGO_URL || "/favicon.png";
    const faviconType = faviconHref.endsWith(".svg") ? "image/svg+xml" : "image/png";
    setLink("icon", faviconHref, faviconType);
    setLink("shortcut icon", faviconHref, faviconType);
    setLink("apple-touch-icon", faviconHref);
    setLink("sitemap", `${origin}/sitemap.xml`, "application/xml");
    setLink("alternate", `${origin}/feed.xml`, "application/rss+xml");

    const brand = s.companyName || "Kiến Trúc Sao Khuê";
    const reviewCount = testimonials.length;
    setStructuredData(
      "organization",
      buildLocalBusinessSchema({
        name: brand,
        url: origin,
        telephone: s.hotline1 || "",
        email: s.email,
        image: ogImage || resolveLogoUrl(s.logoUrl) || BUNDLED_OPENGRAPH_URL,
        address: s.address1,
        sameAs: [s.facebookUrl, s.youtubeUrl, s.instagramUrl].filter(Boolean),
        description: s.footerDescription,
        openingHours: s.workingHours,
        aggregateRating:
          reviewCount >= 3
            ? { ratingValue: 4.9, reviewCount }
            : undefined,
      }),
    );
    setStructuredData("website", buildWebSiteSchema(brand, origin));

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
    ogImage,
    origin,
    testimonials.length,
    s.workingHours,
  ]);

  return null;
}

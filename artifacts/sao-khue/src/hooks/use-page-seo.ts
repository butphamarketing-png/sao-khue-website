import { useEffect } from "react";
import { useLocation } from "wouter";
import { applyPageSeo, type PageSeoInput } from "@/lib/seo";

export function usePageSeo(input: PageSeoInput | null) {
  const [location] = useLocation();

  useEffect(() => {
    if (!input) return;
    applyPageSeo({
      ...input,
      path: input.path ?? location.split("?")[0],
    });
    return () => {
      document.head.querySelector('script[data-structured="page"]')?.remove();
    };
  }, [
    location,
    input?.title,
    input?.description,
    input?.path,
    input?.keywords,
    input?.ogImage,
    input?.ogType,
    input?.noindex,
    input?.publishedTime,
    input?.modifiedTime,
    input?.ogImageAlt,
    input?.jsonLd == null ? null : JSON.stringify(input.jsonLd),
  ]);
}

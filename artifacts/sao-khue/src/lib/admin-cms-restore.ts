/**
 * Khôi phục dấu tiếng Việt cho dữ liệu CMS hiển thị trong Admin
 * (DB cũ / nhập thiếu dấu — khớp bản sửa trên website).
 */
import type { CategoryPagesMap, HomeSectionMeta, PageBannersMap } from "@/lib/home-content";
import type { MenuItem } from "@/lib/menu";
import type {
  CommitmentItem,
  CostCalculatorConfig,
  HeroSlide,
  PricingItem,
} from "@/lib/site-settings";
import {
  restoreCommitments,
  restoreHeroSlides,
  restoreKnownVietnameseText,
  restorePricing,
} from "@/lib/site-settings";
import type { FaqItem, ProcessStep, QuoteServiceItem, StatItem, TestimonialItem } from "@/lib/home-content";
import type { ContactSectionContent, CtaBannerContent } from "@/lib/home-content";

export type AdminSettingsFields = {
  companyName: string;
  footerDescription: string;
  address1: string;
  address2: string;
  workingHours: string;
  topBarSlogan: string;
  homeAboutEyebrow: string;
  homeAboutTitle: string;
  homeAboutIntro: string;
  homeAboutBody: string;
  homeAboutExperienceLabel: string;
  homeVideoLabel: string;
};

export function restoreAdminSettingsFields<T extends AdminSettingsFields>(form: T): T {
  return {
    ...form,
    companyName: restoreKnownVietnameseText(form.companyName),
    footerDescription: restoreKnownVietnameseText(form.footerDescription),
    address1: restoreKnownVietnameseText(form.address1),
    address2: restoreKnownVietnameseText(form.address2),
    workingHours: restoreKnownVietnameseText(form.workingHours),
    topBarSlogan: restoreKnownVietnameseText(form.topBarSlogan),
    homeAboutEyebrow: restoreKnownVietnameseText(form.homeAboutEyebrow),
    homeAboutTitle: restoreKnownVietnameseText(form.homeAboutTitle),
    homeAboutIntro: restoreKnownVietnameseText(form.homeAboutIntro),
    homeAboutBody: restoreKnownVietnameseText(form.homeAboutBody),
    homeAboutExperienceLabel: restoreKnownVietnameseText(form.homeAboutExperienceLabel),
    homeVideoLabel: restoreKnownVietnameseText(form.homeVideoLabel),
  };
}

export function restoreStats(items: StatItem[]): StatItem[] {
  return items.map((item) => ({
    ...item,
    label: restoreKnownVietnameseText(item.label),
  }));
}

export function restoreFaqs(items: FaqItem[]): FaqItem[] {
  return items.map((item) => ({
    ...item,
    q: restoreKnownVietnameseText(item.q),
    a: restoreKnownVietnameseText(item.a),
  }));
}

export function restoreTestimonials(items: TestimonialItem[]): TestimonialItem[] {
  return items.map((item) => ({
    ...item,
    name: restoreKnownVietnameseText(item.name),
    project: restoreKnownVietnameseText(item.project),
    text: restoreKnownVietnameseText(item.text),
  }));
}

export function restoreProcessSteps(items: ProcessStep[]): ProcessStep[] {
  return items.map((item) => ({
    ...item,
    title: restoreKnownVietnameseText(item.title),
    desc: restoreKnownVietnameseText(item.desc),
  }));
}

export function restoreQuoteServices(items: QuoteServiceItem[]): QuoteServiceItem[] {
  return items.map((item) => ({
    ...item,
    title: restoreKnownVietnameseText(item.title),
    buttonLabel: restoreKnownVietnameseText(item.buttonLabel),
  }));
}

export function restoreCategoryPages(pages: CategoryPagesMap): CategoryPagesMap {
  const keys = Object.keys(pages) as (keyof CategoryPagesMap)[];
  const out = { ...pages };
  for (const key of keys) {
    const page = pages[key];
    if (!page) continue;
    out[key] = {
      ...page,
      title: restoreKnownVietnameseText(page.title),
      description: restoreKnownVietnameseText(page.description),
      highlights: page.highlights.map((h) => restoreKnownVietnameseText(h)),
    };
  }
  return out;
}

export function restoreSectionMeta(meta: HomeSectionMeta): HomeSectionMeta {
  const out = { ...meta };
  for (const key of Object.keys(meta) as (keyof HomeSectionMeta)[]) {
    const section = meta[key];
    if (!section) continue;
    out[key] = {
      ...section,
      title: restoreKnownVietnameseText(section.title),
      subtitle: restoreKnownVietnameseText(section.subtitle),
    };
  }
  return out;
}

export function restoreCtaBanner(cta: CtaBannerContent): CtaBannerContent {
  return {
    ...cta,
    eyebrow: restoreKnownVietnameseText(cta.eyebrow),
    title: restoreKnownVietnameseText(cta.title),
    subtitle: restoreKnownVietnameseText(cta.subtitle),
    secondaryLabel: restoreKnownVietnameseText(cta.secondaryLabel),
  };
}

export function restoreContactSection(contact: ContactSectionContent): ContactSectionContent {
  return {
    ...contact,
    eyebrow: restoreKnownVietnameseText(contact.eyebrow),
    titleLine1: restoreKnownVietnameseText(contact.titleLine1),
    titleAccent: restoreKnownVietnameseText(contact.titleAccent),
    description: restoreKnownVietnameseText(contact.description),
    hotlineLabel: restoreKnownVietnameseText(contact.hotlineLabel),
    addressLabel: restoreKnownVietnameseText(contact.addressLabel),
    formTitle: restoreKnownVietnameseText(contact.formTitle),
    submitLabel: restoreKnownVietnameseText(contact.submitLabel),
    serviceOptions: contact.serviceOptions.map((o) => restoreKnownVietnameseText(o)),
  };
}

export function restorePageBanners(banners: PageBannersMap): PageBannersMap {
  const out = { ...banners };
  for (const key of Object.keys(banners) as (keyof PageBannersMap)[]) {
    const b = banners[key];
    if (!b) continue;
    out[key] = {
      ...b,
      title: restoreKnownVietnameseText(b.title),
      subtitle: restoreKnownVietnameseText(b.subtitle),
      bodyTitle: b.bodyTitle ? restoreKnownVietnameseText(b.bodyTitle) : b.bodyTitle,
      bodyText: b.bodyText ? restoreKnownVietnameseText(b.bodyText) : b.bodyText,
    };
  }
  return out;
}

export function restoreCalculatorConfig(config: CostCalculatorConfig): CostCalculatorConfig {
  return {
    ...config,
    note: restoreKnownVietnameseText(config.note),
  };
}

export function restoreAboutPoints(points: string[]): string[] {
  return points.map((p) => restoreKnownVietnameseText(p));
}

export function restoreNavMenu(menu: MenuItem[]): MenuItem[] {
  return menu.map((item) => ({
    ...item,
    title: restoreKnownVietnameseText(item.title),
    children: item.children?.map((child) => ({
      ...child,
      title: restoreKnownVietnameseText(child.title),
    })),
  }));
}

export {
  restoreHeroSlides,
  restoreCommitments,
  restorePricing,
  restoreKnownVietnameseText,
};

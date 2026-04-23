import { useGetSiteSettings, type SiteSettings } from "@workspace/api-client-react";

export const defaultSiteSettings: SiteSettings = {
  id: 0,
  companyName: "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
  taxCode: "",
  hotline1: "0936 045 268",
  hotline2: "0909 075 668",
  email: "kientrucsaokhue@gmail.com",
  address1: "245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM",
  address2: "146 đường 16, khu đô thị Vạn Phúc",
  workingHours: "8:00 - 17:30",
  logoUrl: "https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg",
  facebookUrl: "https://facebook.com/kientrucsaokhue",
  youtubeUrl: "",
  instagramUrl: "",
  zaloPhone: "0936045268",
  messengerUrl: "",
  footerDescription: "Uy tín – Chất lượng – Tận tâm. Chúng tôi chuyên thiết kế và thi công xây dựng nhà phố, biệt thự chuyên nghiệp.",
};

export function useSiteSettings(): SiteSettings {
  const { data } = useGetSiteSettings({ query: { staleTime: 60_000 } });
  return data ?? defaultSiteSettings;
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

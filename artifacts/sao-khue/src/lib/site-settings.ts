import { useGetSiteSettings, type SiteSettings } from "@workspace/api-client-react";
import { GSC_VERIFICATION_TOKEN } from "@/lib/gsc-verification";
import {
  type CategoryPagesMap,
  type ContactSectionContent,
  type CtaBannerContent,
  type FaqItem,
  type FeaturedPostsConfig,
  type HomeSectionMeta,
  type PageBannerContent,
  type PageBannersMap,
  type ProcessStep,
  type QuoteServiceItem,
  type StatItem,
  type TestimonialItem,
  defaultCategoryPages,
  defaultContactSection,
  defaultCtaBanner,
  defaultFaqs,
  defaultFeaturedPosts,
  defaultPageBanners,
  defaultProcessSteps,
  defaultQuoteServices,
  defaultSectionMeta,
  defaultStats,
  defaultTestimonials,
} from "@/lib/home-content";
import { BUNDLED_LOGO_URL, BUNDLED_OPENGRAPH_URL, resolveLogoUrl } from "@/lib/brand-assets";
import { defaultNavMenu, type MenuItem } from "@/lib/menu";
import { DEFAULT_GOOGLE_MAPS_LINK } from "@/lib/social-links";

export const DEFAULT_GOOGLE_MAP_EMBED =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5886520565614!2d106.706948!3d10.842758199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752865f3cba1ab%3A0xf5bc0409b063c587!2zMzYgxJDGsOG7nW5nIDI3LCBLaHUgxJHDtCBUaOG7iyBW4bqhbiBQaMO6YywgSGnhu4dwIELDrG5oLCBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1780382963471!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

export type HeroSlide = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
};

export type CommitmentItem = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

export type PricingItem = {
  id: string;
  name: string;
  priceFrom: string;
  priceTo: string;
  unit: string;
  note: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  highlighted?: boolean;
};

export type HomeVideoSettings = {
  url: string;
  label: string;
};

export type CostCalculatorConfig = {
  phanThoRates: Record<"trung-binh" | "tb-kha" | "kha", number>;
  tronGoiRates: Record<"trung-binh" | "tb-kha" | "kha", number>;
  note: string;
};

export const defaultHeroSlides: HeroSlide[] = [
  {
    image: "/images/hero-1.jpg",
    title: "Đội ngũ Kiến Trúc Sao Khuê — tận tâm uy tín chất lượng",
    subtitle: "Kiến Trúc Sao Khuê",
    description:
      "Công ty TNHH Kiến Trúc Sao Khuê — thiết kế và thi công nhà phố, biệt thự trọn gói tại TP.HCM và các tỉnh.",
  },
];

export const defaultCommitments: CommitmentItem[] = [
  { id: 1, icon: "shield", title: "KHÔNG BÁN THẦU", desc: "Sao Khuê trực tiếp thi công, quản lý nghiêm ngặt chất lượng dự án." },
  { id: 2, icon: "thumbs-up", title: "VẬT TƯ CHẤT LƯỢNG", desc: "Cam kết sử dụng đúng chủng loại vật tư chính hãng đã ký kết." },
  { id: 3, icon: "clock", title: "ĐÚNG TIẾN ĐỘ", desc: "Quản lý tiến độ chuyên nghiệp, bàn giao nhà đúng thời hạn." },
  { id: 4, icon: "map-pin", title: "TƯ VẤN MIỄN PHÍ", desc: "Khảo sát và tư vấn tận nơi miễn phí, nhiệt tình, nhanh chóng." },
  { id: 5, icon: "dollar-sign", title: "BÁO GIÁ CẠNH TRANH", desc: "Bảng giá chi tiết, minh bạch, phù hợp với ngân sách của bạn." },
  { id: 6, icon: "users", title: "ĐỘI NGŨ CHUYÊN NGHIỆP", desc: "Kiến trúc sư, kỹ sư, thợ thi công lành nghề, giàu kinh nghiệm." },
  { id: 7, icon: "award", title: "CAM KẾT BẢO HÀNH", desc: "Bảo hành kết cấu 10 năm, bảo hành hoàn thiện 1-3 năm." },
  { id: 8, icon: "zap", title: "SÁNG TẠO, THẨM MỸ", desc: "Thiết kế hiện đại, tối ưu công năng và tính thẩm mỹ cao." },
  { id: 9, icon: "file-x-2", title: "KHÔNG PHÁT SINH", desc: "Dự toán chính xác, cam kết không phát sinh chi phí." },
];

export const defaultPricingItems: PricingItem[] = [
  {
    id: "phan-tho",
    name: "XÂY DỰNG PHẦN THÔ",
    priceFrom: "3.550.000",
    priceTo: "3.800.000",
    unit: "đ/m²",
    note: "Bao gồm nhân công và vật tư thô",
    features: [
      "Cung cấp vật tư thô",
      "Nhân công xây thô toàn bộ công trình",
      "Nhân công hoàn thiện cơ bản",
      "Lắp đặt hệ thống điện nước âm tường",
      "Bảo hành kết cấu 10 năm",
    ],
    ctaHref: "/lien-he",
    ctaLabel: "Nhận báo giá chi tiết",
  },
  {
    id: "tron-goi",
    name: "XÂY NHÀ TRỌN GÓI",
    priceFrom: "4.850.000",
    priceTo: "6.700.000",
    unit: "đ/m²",
    note: "Chìa khóa trao tay - vào ở ngay",
    features: [
      "Bao gồm toàn bộ dịch vụ xây thô",
      "Cung cấp vật tư hoàn thiện",
      "Lắp đặt cửa, lan can, cầu thang, thiết bị vệ sinh",
      "Miễn phí thiết kế kiến trúc 2D/3D",
      "Bảo hành hoàn thiện 12-36 tháng",
    ],
    ctaHref: "/lien-he",
    ctaLabel: "Nhận báo giá chi tiết",
    highlighted: true,
  },
];

export const defaultAboutPoints = [
  "Khách hàng là trên hết - luôn lắng nghe và thấu hiểu",
  "Sáng tạo không ngừng - mang đến thiết kế độc bản",
  "Đội ngũ giàu kinh nghiệm, tận tâm với từng dự án",
  "Cam kết hành động, thi công đúng tiến độ và chất lượng",
];

export const LOCAL_LOGO = BUNDLED_LOGO_URL;

export { resolveLogoUrl };

export const PRIMARY_PHONE = "0909 075 668";
export const PRIMARY_PHONE_RAW = "0909075668";

export const defaultSiteSettings: SiteSettings & Record<string, unknown> = {
  id: 0,
  companyName: "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
  taxCode: "",
  hotline1: PRIMARY_PHONE,
  hotline2: "",
  email: "kientrucsaokhue@gmail.com",
  address1: "245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM",
  address2: "36 đường 27, KĐT Vạn Phúc, phường Hiệp Bình, TP.HCM",
  workingHours: "T2–T7, 8:00–17:30",
  logoUrl: LOCAL_LOGO,
  loadingLogoUrl: LOCAL_LOGO,
  facebookUrl: "https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi",
  facebookUrl2: "https://www.facebook.com/kientrucsaokhue",
  facebookLabel1: "Cải tạo nhà trọn gói",
  facebookLabel2: "Kiến Trúc Sao Khuê",
  youtubeUrl: "",
  instagramUrl: "",
  zaloPhone: PRIMARY_PHONE_RAW,
  messengerUrl: "https://m.me/dichvusuachuanha.caitaonhatrongoi",
  messengerUrl2: "https://m.me/kientrucsaokhue",
  messengerLabel1: "Cải tạo nhà trọn gói",
  messengerLabel2: "Kiến Trúc Sao Khuê",
  footerDescription:
    "Uy tín - Chất lượng - Tận tâm. Chúng tôi chuyên thiết kế và thi công xây dựng nhà phố, biệt thự chuyên nghiệp.",
  heroSlidesJson: JSON.stringify(defaultHeroSlides),
  homeCommitmentsJson: JSON.stringify(defaultCommitments),
  homePricingJson: JSON.stringify(defaultPricingItems),
  homeVideoUrl: "",
  homeVideoLabel: "Xem video",
  homeAboutEyebrow: "Về chúng tôi",
  homeAboutTitle: "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
  homeAboutIntro:
    "Chuyên thiết kế, thi công xây dựng, sửa chữa và cải tạo nhà trọn gói tại TP.HCM, Bình Dương, Đồng Nai và các tỉnh lân cận.",
  homeAboutBody:
    "Với tầm nhìn trở thành công ty hàng đầu trong ngành kiến trúc và xây dựng, Sao Khuê tự hào sở hữu đội ngũ kiến trúc sư, kỹ sư giỏi chuyên môn và giàu nhiệt huyết.",
  homeAboutPointsJson: JSON.stringify(defaultAboutPoints),
  homeAboutImageUrl: "/images/about.jpg?v=2",
  homeAboutExperienceLabel: "Năm Kinh Nghiệm\nXây Dựng",
  homeAboutExperienceYears: "10+",
  homeCalculatorConfigJson: JSON.stringify({
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, "kha": 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, "kha": 6700000 },
    note: "Công thức tham khảo theo đơn giá xây dựng nhà phố/biệt thự phổ biến trên thị trường.",
  } satisfies CostCalculatorConfig),
  homeStatsJson: JSON.stringify(defaultStats),
  homeTestimonialsJson: JSON.stringify(defaultTestimonials),
  homeFaqJson: JSON.stringify(defaultFaqs),
  homeProcessJson: JSON.stringify(defaultProcessSteps),
  categoryPagesJson: JSON.stringify(defaultCategoryPages),
  homeSectionMetaJson: JSON.stringify(defaultSectionMeta),
  homeCtaJson: JSON.stringify(defaultCtaBanner),
  homeQuoteServicesJson: JSON.stringify(defaultQuoteServices),
  homeContactJson: JSON.stringify(defaultContactSection),
  topBarSlogan: "Tận tâm — Uy tín — Chất lượng",
  gaTrackingId: "G-WGDHV88C2B",
  gscVerification: GSC_VERIFICATION_TOKEN,
  googleMapsUrl: DEFAULT_GOOGLE_MAPS_LINK,
  googleMapEmbed: DEFAULT_GOOGLE_MAP_EMBED,
  navMenuJson: JSON.stringify(defaultNavMenu),
  pageBannersJson: JSON.stringify(defaultPageBanners),
  homeFeaturedPostsJson: JSON.stringify(defaultFeaturedPosts),
  opengraphImageUrl: "",
};

function parseJsonValue<T>(value: unknown, fallback: T): T {
  if (typeof value !== "string" || value.trim() === "") return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

/** Use defaults when DB stores `[]` or invalid arrays. */
function parseJsonArray<T>(value: unknown, fallback: T[]): T[] {
  const parsed = parseJsonValue<unknown>(value, fallback);
  return Array.isArray(parsed) && parsed.length > 0 ? (parsed as T[]) : fallback;
}

/** Merge partial CMS objects onto defaults (handles `{}` from empty DB rows). */
function parseJsonObject<T extends object>(value: unknown, fallback: T): T {
  const parsed = parseJsonValue<unknown>(value, fallback);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  const merged = { ...fallback, ...(parsed as Partial<T>) };
  for (const key of Object.keys(fallback) as (keyof T)[]) {
    const v = merged[key];
    if (typeof v === "string" && v.trim() === "") {
      merged[key] = fallback[key];
    }
  }
  return merged;
}

export function restoreKnownVietnameseText(value: string | null | undefined) {
  if (value == null || typeof value !== "string") return "";
  const replacements: Record<string, string> = {
    "CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE": "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
    "Ve chung toi": "Về chúng tôi",
    "Nam Kinh Nghiem\nXay Dung": "Năm Kinh Nghiệm\nXây Dựng",
    "245/8 Binh Loi, Phuong 13, Quan Binh Thanh, TP.HCM":
      "245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM",
    "245/8 Bình Lợi, Phường 13, Quan Bình Thạnh, TP.HCM":
      "245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM",
    "146 duong 16, khu do thi Van Phuc": "146 đường 16, khu đô thị Vạn Phúc",
    "Uy tin - Chat luong - Tan tam. Chung toi chuyen thiet ke va thi cong xay dung nha pho, biet thu chuyen nghiep.": "Uy tín - Chất lượng - Tận tâm. Chúng tôi chuyên thiết kế và thi công xây dựng nhà phố, biệt thự chuyên nghiệp.",
    "Chuyen thiet ke, thi cong xay dung, sua chua va cai tao nha tron goi tai TP.HCM, Binh Duong, Dong Nai va cac tinh lan can.": "Chuyên thiết kế, thi công xây dựng, sửa chữa và cải tạo nhà trọn gói tại TP.HCM, Bình Dương, Đồng Nai và các tỉnh lân cận.",
    "Voi tam nhin tro thanh cong ty hang dau trong nganh kien truc va xay dung, Sao Khue tu hao so huu doi ngu kien truc su, ky su gioi chuyen mon va giau nhiet huyet.": "Với tầm nhìn trở thành công ty hàng đầu trong ngành kiến trúc và xây dựng, Sao Khuê tự hào sở hữu đội ngũ kiến trúc sư, kỹ sư giỏi chuyên môn và giàu nhiệt huyết.",
    "KIEN TAO KHONG GIAN SONG DANG CAP": "KIẾN TẠO KHÔNG GIAN SỐNG ĐẲNG CẤP",
    "Thiet ke va thi cong nha pho, biet thu tron goi": "Thiết kế và thi công nhà phố, biệt thự trọn gói",
    "Cong ty TNHH Kien Truc Sao Khue cam ket mang den nhung giai phap khong gian hoan hao, toi uu chi phi va chat luong vuot troi.": "Công ty TNHH Kiến Trúc Sao Khuê cam kết mang đến những giải pháp không gian hoàn hảo, tối ưu chi phí và chất lượng vượt trội.",
    "UY TIN - CHAT LUONG - TAN TAM": "UY TÍN - CHẤT LƯỢNG - TẬN TÂM",
    "Xay dung biet thu hien dai": "Xây dựng biệt thự hiện đại",
    "Voi doi ngu ky su, kien truc su giau kinh nghiem, chung toi tu hao dong hanh cung hang tram gia dinh kien tao to am mo uoc.": "Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm, chúng tôi tự hào đồng hành cùng hàng trăm gia đình kiến tạo tổ ấm mơ ước.",
    "THI CONG DUNG TIEN DO VA BAO HANH DAI HAN": "THI CÔNG ĐÚNG TIẾN ĐỘ VÀ BẢO HÀNH DÀI HẠN",
    "Quan ly du an chuyen nghiep": "Quản lý dự án chuyên nghiệp",
    "Minh bach trong bao gia, su dung vat tu chinh hang, khong phat sinh chi phi. Bao hanh ket cau len den 10 nam.": "Minh bạch trong báo giá, sử dụng vật tư chính hãng, không phát sinh chi phí. Bảo hành kết cấu lên đến 10 năm.",
    "KHONG BAN THAU": "KHÔNG BÁN THẦU",
    "Sao Khue truc tiep thi cong, quan ly nghiem ngat chat luong du an.": "Sao Khuê trực tiếp thi công, quản lý nghiêm ngặt chất lượng dự án.",
    "VAT TU CHAT LUONG": "VẬT TƯ CHẤT LƯỢNG",
    "Cam ket su dung dung chung loai vat tu chinh hang da ky ket.": "Cam kết sử dụng đúng chủng loại vật tư chính hãng đã ký kết.",
    "DUNG TIEN DO": "ĐÚNG TIẾN ĐỘ",
    "Quan ly tien do chuyen nghiep, ban giao nha dung thoi han.": "Quản lý tiến độ chuyên nghiệp, bàn giao nhà đúng thời hạn.",
    "TU VAN MIEN PHI": "TƯ VẤN MIỄN PHÍ",
    "Khao sat va tu van tan noi mien phi, nhiet tinh, nhanh chong.": "Khảo sát và tư vấn tận nơi miễn phí, nhiệt tình, nhanh chóng.",
    "BAO GIA CANH TRANH": "BÁO GIÁ CẠNH TRANH",
    "Bang gia chi tiet, minh bach, phu hop voi ngan sach cua ban.": "Bảng giá chi tiết, minh bạch, phù hợp với ngân sách của bạn.",
    "DOI NGU CHUYEN NGHIEP": "ĐỘI NGŨ CHUYÊN NGHIỆP",
    "Kien truc su, ky su, tho thi cong lanh nghe, giau kinh nghiem.": "Kiến trúc sư, kỹ sư, thợ thi công lành nghề, giàu kinh nghiệm.",
    "CAM KET BAO HANH": "CAM KẾT BẢO HÀNH",
    "Bao hanh ket cau 10 nam, bao hanh hoan thien 1-3 nam.": "Bảo hành kết cấu 10 năm, bảo hành hoàn thiện 1-3 năm.",
    "SANG TAO, THAM MY": "SÁNG TẠO, THẨM MỸ",
    "Thiet ke hien dai, toi uu cong nang va tinh tham my cao.": "Thiết kế hiện đại, tối ưu công năng và tính thẩm mỹ cao.",
    "KHONG PHAT SINH": "KHÔNG PHÁT SINH",
    "Du toan chinh xac, cam ket khong phat sinh chi phi.": "Dự toán chính xác, cam kết không phát sinh chi phí.",
    "XAY DUNG PHAN THO": "XÂY DỰNG PHẦN THÔ",
    "Bao gom nhan cong va vat tu tho": "Bao gồm nhân công và vật tư thô",
    "Cung cap vat tu tho": "Cung cấp vật tư thô",
    "Nhan cong xay tho toan bo cong trinh": "Nhân công xây thô toàn bộ công trình",
    "Nhan cong hoan thien co ban": "Nhân công hoàn thiện cơ bản",
    "Lap dat he thong dien nuoc am tuong": "Lắp đặt hệ thống điện nước âm tường",
    "Bao hanh ket cau 10 nam": "Bảo hành kết cấu 10 năm",
    "Nhan bao gia chi tiet": "Nhận báo giá chi tiết",
    "XAY NHA TRON GOI": "XÂY NHÀ TRỌN GÓI",
    "Chia khoa trao tay - vao o ngay": "Chìa khóa trao tay - vào ở ngay",
    "Bao gom toan bo dich vu xay tho": "Bao gồm toàn bộ dịch vụ xây thô",
    "Cung cap vat tu hoan thien": "Cung cấp vật tư hoàn thiện",
    "Lap dat cua, lan can, cau thang, thiet bi ve sinh": "Lắp đặt cửa, lan can, cầu thang, thiết bị vệ sinh",
    "Mien phi thiet ke kien truc 2D/3D": "Miễn phí thiết kế kiến trúc 2D/3D",
    "Bao hanh hoan thien 12-36 thang": "Bảo hành hoàn thiện 12-36 tháng",
    "Khach hang la tren het - luon lang nghe va thau hieu": "Khách hàng là trên hết - luôn lắng nghe và thấu hiểu",
    "Sang tao khong ngung - mang den thiet ke doc ban": "Sáng tạo không ngừng - mang đến thiết kế độc bản",
    "Doi ngu giau kinh nghiem, tan tam voi tung du an": "Đội ngũ giàu kinh nghiệm, tận tâm với từng dự án",
    "Cam ket hanh dong, thi cong dung tien do va chat luong": "Cam kết hành động, thi công đúng tiến độ và chất lượng",
    "Cong thuc tham khao theo don gia xay dung nha pho/biet thu pho bien tren thi truong.": "Công thức tham khảo theo đơn giá xây dựng nhà phố/biệt thự phổ biến trên thị trường.",
    "Xem video": "Xem video",
  };

  const mapped = replacements[value] ?? value;
  return mapped.replace(/, Quan Bình Thạnh,/g, ", Quận Bình Thạnh,");
}

export function restoreHeroSlides(slides: HeroSlide[] | null | undefined) {
  return (slides ?? []).map((slide) => ({
    ...slide,
    title: restoreKnownVietnameseText(slide.title),
    subtitle: restoreKnownVietnameseText(slide.subtitle),
    description: restoreKnownVietnameseText(slide.description),
  }));
}

export function restoreCommitments(items: CommitmentItem[] | null | undefined) {
  return (items ?? []).map((item) => ({
    ...item,
    title: restoreKnownVietnameseText(item.title),
    desc: restoreKnownVietnameseText(item.desc),
  }));
}

export function restorePricing(items: PricingItem[] | null | undefined) {
  return (items ?? []).map((item) => ({
    ...item,
    name: restoreKnownVietnameseText(item.name),
    unit: item.unit === "d/m2" ? "đ/m²" : item.unit,
    note: restoreKnownVietnameseText(item.note),
    ctaLabel: restoreKnownVietnameseText(item.ctaLabel),
    features: (item.features ?? []).map((feature) => restoreKnownVietnameseText(feature)),
  }));
}

export interface SiteSettingsFull extends SiteSettings {
  loadingLogoUrl?: string;
  homeVideoUrl?: string;
  homeVideoLabel?: string;
  homeAboutEyebrow?: string;
  homeAboutTitle?: string;
  homeAboutIntro?: string;
  homeAboutBody?: string;
  homeAboutPointsJson?: string;
  homeAboutImageUrl?: string;
  homeAboutExperienceLabel?: string;
  homeAboutExperienceYears?: string;
  homeCalculatorConfigJson?: string;
  homeStatsJson?: string;
  homeTestimonialsJson?: string;
  homeFaqJson?: string;
  homeProcessJson?: string;
  categoryPagesJson?: string;
  homeSectionMetaJson?: string;
  homeCtaJson?: string;
  homeQuoteServicesJson?: string;
  homeContactJson?: string;
  topBarSlogan?: string;
  gaTrackingId?: string;
  gscVerification?: string;
  googleMapsUrl?: string;
  googleMapEmbed?: string;
  facebookUrl2?: string;
  facebookLabel1?: string;
  facebookLabel2?: string;
  messengerUrl2?: string;
  messengerLabel1?: string;
  messengerLabel2?: string;
  navMenuJson?: string;
  pageBannersJson?: string;
  homeFeaturedPostsJson?: string;
  opengraphImageUrl?: string;
}

export function useSiteSettings(): SiteSettingsFull {
  const { data, error } = useGetSiteSettings({
    // Removed the invalid 'query' wrapper!
    ...({ staleTime: 60000, retry: 1 } as any),
  });
  
  if (error) {
    console.warn("[useSiteSettings] Using defaults due to error:", error);
  }
  
  const merged = { ...defaultSiteSettings, ...(data as Record<string, unknown> | undefined) } as SiteSettingsFull;
  return {
    ...merged,
    gscVerification: (merged.gscVerification as string)?.trim() || GSC_VERIFICATION_TOKEN,
    logoUrl: resolveLogoUrl(merged.logoUrl as string),
    loadingLogoUrl: resolveLogoUrl((merged.loadingLogoUrl as string) || (merged.logoUrl as string)),
    companyName: restoreKnownVietnameseText(merged.companyName as string),
    footerDescription: restoreKnownVietnameseText(merged.footerDescription as string),
    address1: restoreKnownVietnameseText(merged.address1 as string),
    address2: restoreKnownVietnameseText(merged.address2 as string),
    hotline1: (merged.hotline1 as string)?.trim() || (merged.hotline2 as string)?.trim() || PRIMARY_PHONE,
    hotline2: "",
    homeAboutEyebrow: restoreKnownVietnameseText(merged.homeAboutEyebrow as string),
    homeAboutTitle: restoreKnownVietnameseText(merged.homeAboutTitle as string),
    homeAboutIntro: restoreKnownVietnameseText(merged.homeAboutIntro as string),
    homeAboutBody: restoreKnownVietnameseText(merged.homeAboutBody as string),
    homeAboutExperienceLabel: restoreKnownVietnameseText(merged.homeAboutExperienceLabel as string),
  };
}

export function useHeroSlides(): HeroSlide[] {
  // Luôn dùng hero-1 mặc định, bỏ qua dữ liệu trong database
  return restoreHeroSlides(defaultHeroSlides);
}

export function useCommitments(): CommitmentItem[] {
  const settings = useSiteSettings();
  return restoreCommitments(parseJsonArray(settings.homeCommitmentsJson, defaultCommitments));
}

export function usePricingItems(): PricingItem[] {
  const settings = useSiteSettings();
  return restorePricing(parseJsonArray(settings.homePricingJson, defaultPricingItems));
}

export function useHomeVideo(): HomeVideoSettings {
  const settings = useSiteSettings();
  return {
    url: settings.homeVideoUrl || "",
    label: settings.homeVideoLabel || "Xem video",
  };
}

export function useCalculatorConfig(): CostCalculatorConfig {
  const settings = useSiteSettings();
  return parseJsonObject(settings.homeCalculatorConfigJson, {
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, "kha": 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, "kha": 6700000 },
    note: "Công thức tham khảo theo đơn giá xây dựng nhà phố/biệt thự phổ biến trên thị trường.",
  });
}

const STOCK_ABOUT_IMAGE = /unsplash\.com|images\.unsplash|\/images\/project_|\/images\/interior_/i;

function resolveAboutImageUrl(url?: string): string {
  const val = (url ?? "").trim();
  if (!val || STOCK_ABOUT_IMAGE.test(val)) {
    return defaultSiteSettings.homeAboutImageUrl;
  }
  if (val.startsWith("/images/about.")) {
    return `${val.split("?")[0]}?v=2`;
  }
  return val;
}

export function useAboutContent() {
  const settings = useSiteSettings();

  return {
    eyebrow: settings.homeAboutEyebrow || defaultSiteSettings.homeAboutEyebrow,
    title: settings.homeAboutTitle || defaultSiteSettings.homeAboutTitle,
    intro: settings.homeAboutIntro || defaultSiteSettings.homeAboutIntro,
    body: settings.homeAboutBody || defaultSiteSettings.homeAboutBody,
    imageUrl: resolveAboutImageUrl(settings.homeAboutImageUrl),
    experienceLabel:
      restoreKnownVietnameseText(
        settings.homeAboutExperienceLabel || defaultSiteSettings.homeAboutExperienceLabel,
      ),
    experienceYears:
      settings.homeAboutExperienceYears || defaultSiteSettings.homeAboutExperienceYears,
    points: parseJsonArray(settings.homeAboutPointsJson, defaultAboutPoints).map((point) =>
      restoreKnownVietnameseText(point),
    ),
  };
}

export function useHomeStats(): StatItem[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.homeStatsJson, defaultStats);
}

export function useTestimonials(): TestimonialItem[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.homeTestimonialsJson, defaultTestimonials);
}

export function useFaqs(): FaqItem[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.homeFaqJson, defaultFaqs);
}

export function useProcessSteps(): ProcessStep[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.homeProcessJson, defaultProcessSteps);
}

export function useCategoryPages(): CategoryPagesMap {
  const settings = useSiteSettings();
  const parsed = parseJsonObject<CategoryPagesMap>(settings.categoryPagesJson, defaultCategoryPages);
  return Object.keys(parsed).length > 0 ? parsed : defaultCategoryPages;
}

export function useSectionMeta(): HomeSectionMeta {
  const settings = useSiteSettings();
  return parseJsonObject(settings.homeSectionMetaJson, defaultSectionMeta);
}

export function useCtaBanner(): CtaBannerContent {
  const settings = useSiteSettings();
  return parseJsonObject(settings.homeCtaJson, defaultCtaBanner);
}

export function useQuoteServices(): QuoteServiceItem[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.homeQuoteServicesJson, defaultQuoteServices);
}

export function useContactSection(): ContactSectionContent {
  const settings = useSiteSettings();
  return parseJsonObject(settings.homeContactJson, defaultContactSection);
}

export function useTopBarSlogan(): string {
  const settings = useSiteSettings();
  return settings.topBarSlogan || defaultSiteSettings.topBarSlogan;
}

export function useNavMenu(): MenuItem[] {
  const settings = useSiteSettings();
  return parseJsonArray(settings.navMenuJson, defaultNavMenu);
}

export function usePageBanners(): PageBannersMap {
  const settings = useSiteSettings();
  return parseJsonObject(settings.pageBannersJson, defaultPageBanners);
}

export function usePageBanner(key: keyof PageBannersMap): PageBannerContent {
  return usePageBanners()[key];
}

export function useFeaturedPostsConfig(): FeaturedPostsConfig {
  const settings = useSiteSettings();
  return parseJsonObject(settings.homeFeaturedPostsJson, defaultFeaturedPosts);
}

export function useGoogleMapEmbed(): string {
  const settings = useSiteSettings();
  return String((settings as SiteSettings & { googleMapEmbed?: string }).googleMapEmbed ?? "");
}

export function useOpenGraphImage(): string {
  const settings = useSiteSettings();
  const custom = settings.opengraphImageUrl?.trim();
  if (custom) return resolveLogoUrl(custom);
  return BUNDLED_OPENGRAPH_URL;
}

export function usePrimaryPhone(): string {
  const s = useSiteSettings();
  return s.hotline1?.trim() || PRIMARY_PHONE;
}

export function telHref(phone?: string | null): string {
  return `tel:${(phone ?? "").replace(/\s+/g, "")}`;
}

import { useGetSiteSettings, type SiteSettings } from "@workspace/api-client-react";

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
    image: "/images/hero-1.png",
    title: "KIẾN TẠO KHÔNG GIAN SỐNG ĐẲNG CẤP",
    subtitle: "Thiết kế và thi công nhà phố, biệt thự trọn gói",
    description:
      "Công ty TNHH Kiến Trúc Sao Khuê cam kết mang đến những giải pháp không gian hoàn hảo, tối ưu chi phí và chất lượng vượt trội.",
  },
  {
    image: "/images/hero-2.png",
    title: "UY TÍN - CHẤT LƯỢNG - TẬN TÂM",
    subtitle: "Xây dựng biệt thự hiện đại",
    description:
      "Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm, chúng tôi tự hào đồng hành cùng hàng trăm gia đình kiến tạo tổ ấm mơ ước.",
  },
  {
    image: "/images/hero-3.png",
    title: "THI CÔNG ĐÚNG TIẾN ĐỘ VÀ BẢO HÀNH DÀI HẠN",
    subtitle: "Quản lý dự án chuyên nghiệp",
    description:
      "Minh bạch trong báo giá, sử dụng vật tư chính hãng, không phát sinh chi phí. Bảo hành kết cấu lên đến 10 năm.",
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

export const defaultSiteSettings: SiteSettings & Record<string, string> = {
  id: 0,
  companyName: "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
  taxCode: "",
  hotline1: "0936 045 268",
  hotline2: "0909 075 668",
  email: "kientrucsaokhue@gmail.com",
  address1: "245/8 Binh Loi, Phuong 13, Quan Binh Thanh, TP.HCM",
  address2: "146 duong 16, khu do thi Van Phuc",
  workingHours: "8:00 - 17:30",
  logoUrl:
    "https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg",
  loadingLogoUrl: "",
  facebookUrl: "https://facebook.com/kientrucsaokhue",
  youtubeUrl: "",
  instagramUrl: "",
  zaloPhone: "0936045268",
  messengerUrl: "",
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
  homeAboutImageUrl: "/images/about.png",
  homeAboutExperienceLabel: "Năm Kinh Nghiệm\nXây Dựng",
  homeAboutExperienceYears: "10+",
  homeCalculatorConfigJson: JSON.stringify({
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, "kha": 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, "kha": 6700000 },
    note: "Công thức tham khảo theo đơn giá xây dựng nhà phố/biệt thự phổ biến trên thị trường.",
  } satisfies CostCalculatorConfig),
  gaTrackingId: "",
  gscVerification: "",
};

function parseJsonValue<T>(value: unknown, fallback: T): T {
  if (typeof value !== "string" || value.trim() === "") return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function restoreKnownVietnameseText(value: string) {
  const replacements: Record<string, string> = {
    "CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE": "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ",
    "Ve chung toi": "Về chúng tôi",
    "Nam Kinh Nghiem\nXay Dung": "Năm Kinh Nghiệm\nXây Dựng",
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

  return replacements[value] ?? value;
}

function restoreHeroSlides(slides: HeroSlide[]) {
  return slides.map((slide) => ({
    ...slide,
    title: restoreKnownVietnameseText(slide.title),
    subtitle: restoreKnownVietnameseText(slide.subtitle),
    description: restoreKnownVietnameseText(slide.description),
  }));
}

function restoreCommitments(items: CommitmentItem[]) {
  return items.map((item) => ({
    ...item,
    title: restoreKnownVietnameseText(item.title),
    desc: restoreKnownVietnameseText(item.desc),
  }));
}

function restorePricing(items: PricingItem[]) {
  return items.map((item) => ({
    ...item,
    name: restoreKnownVietnameseText(item.name),
    unit: item.unit === "d/m2" ? "đ/m²" : item.unit,
    note: restoreKnownVietnameseText(item.note),
    ctaLabel: restoreKnownVietnameseText(item.ctaLabel),
    features: item.features.map((feature) => restoreKnownVietnameseText(feature)),
  }));
}

export function useSiteSettings(): SiteSettings & Record<string, string> {
  const { data } = useGetSiteSettings({ query: { staleTime: 60_000 } });
  const merged = { ...defaultSiteSettings, ...(data as Record<string, string> | undefined) };
  return {
    ...merged,
    companyName: restoreKnownVietnameseText(merged.companyName),
    footerDescription: restoreKnownVietnameseText(merged.footerDescription),
    homeAboutEyebrow: restoreKnownVietnameseText(merged.homeAboutEyebrow),
    homeAboutTitle: restoreKnownVietnameseText(merged.homeAboutTitle),
    homeAboutIntro: restoreKnownVietnameseText(merged.homeAboutIntro),
    homeAboutBody: restoreKnownVietnameseText(merged.homeAboutBody),
    homeAboutExperienceLabel: restoreKnownVietnameseText(merged.homeAboutExperienceLabel),
  };
}

export function useHeroSlides(): HeroSlide[] {
  const settings = useSiteSettings();
  return restoreHeroSlides(parseJsonValue(settings.heroSlidesJson, defaultHeroSlides));
}

export function useCommitments(): CommitmentItem[] {
  const settings = useSiteSettings();
  return restoreCommitments(parseJsonValue(settings.homeCommitmentsJson, defaultCommitments));
}

export function usePricingItems(): PricingItem[] {
  const settings = useSiteSettings();
  return restorePricing(parseJsonValue(settings.homePricingJson, defaultPricingItems));
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
  return parseJsonValue<CostCalculatorConfig>(settings.homeCalculatorConfigJson, {
    phanThoRates: { "trung-binh": 3550000, "tb-kha": 3700000, "kha": 3800000 },
    tronGoiRates: { "trung-binh": 4850000, "tb-kha": 5500000, "kha": 6700000 },
    note: "Cong thuc tham khao theo don gia xay dung nha pho/biet thu pho bien tren thi truong.",
  });
}

export function useAboutContent() {
  const settings = useSiteSettings();

  return {
    eyebrow: settings.homeAboutEyebrow || defaultSiteSettings.homeAboutEyebrow,
    title: settings.homeAboutTitle || defaultSiteSettings.homeAboutTitle,
    intro: settings.homeAboutIntro || defaultSiteSettings.homeAboutIntro,
    body: settings.homeAboutBody || defaultSiteSettings.homeAboutBody,
    imageUrl: settings.homeAboutImageUrl || defaultSiteSettings.homeAboutImageUrl,
    experienceLabel:
      restoreKnownVietnameseText(
        settings.homeAboutExperienceLabel || defaultSiteSettings.homeAboutExperienceLabel,
      ),
    experienceYears:
      settings.homeAboutExperienceYears || defaultSiteSettings.homeAboutExperienceYears,
    points: parseJsonValue(settings.homeAboutPointsJson, defaultAboutPoints).map((point) =>
      restoreKnownVietnameseText(point),
    ),
  };
}

export function telHref(phone?: string | null): string {
  return `tel:${(phone ?? "").replace(/\s+/g, "")}`;
}

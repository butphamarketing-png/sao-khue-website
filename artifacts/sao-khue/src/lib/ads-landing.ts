export type AdsPricePackage = {
  name: string;
  price: string;
  unit: string;
  note: string;
  features: string[];
  highlighted?: boolean;
};

export type AdsLandingConfig = {
  path: string;
  source: string;
  serviceLabel: string;
  brandHeadline: string;
  h1: string;
  support: string;
  heroImage: string;
  heroImageAlt: string;
  keywords: string;
  seoTitle: string;
  seoDescription: string;
  formTitle: string;
  benefits: { title: string; desc: string }[];
  packages: AdsPricePackage[];
  process: { title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  faqs: { q: string; a: string }[];
  trustLine: string;
};

export const ADS_LANDING_PATHS = ["/xay-nha", "/cai-tao-nha"] as const;

export function isAdsLandingPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return (ADS_LANDING_PATHS as readonly string[]).includes(normalized);
}

export function buildAdsLeadSource(base: string): string {
  if (typeof window === "undefined") return base;
  const params = new URLSearchParams(window.location.search);
  const parts = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"]
    .map((key) => {
      const value = params.get(key)?.trim();
      return value ? `${key}=${value}` : null;
    })
    .filter(Boolean);
  return parts.length ? `${base}|${parts.join("&")}` : base;
}

export const XAY_NHA_LANDING: AdsLandingConfig = {
  path: "/xay-nha",
  source: "ads-xay-nha",
  serviceLabel: "Xây nhà trọn gói",
  brandHeadline: "Kiến Trúc Sao Khuê",
  h1: "Xây nhà trọn gói chìa khóa trao tay",
  support:
    "Khảo sát miễn phí — báo giá minh bạch — bảo hành kết cấu 10 năm tại TP.HCM, Bình Dương, Đồng Nai.",
  heroImage: "/images/ads/hero-xay-nha.jpg",
  heroImageAlt: "Nhà phố hiện đại xây trọn gói Sao Khuê",
  keywords:
    "xây nhà trọn gói, xây nhà tphcm, nhà thầu xây nhà tphcm, đơn giá xây nhà, báo giá xây nhà trọn gói, xây nhà phần thô, xây nhà phố tphcm, xây nhà chìa khóa trao tay",
  seoTitle: "Xây nhà trọn gói TP.HCM — Báo giá miễn phí | Sao Khuê",
  seoDescription:
    "Xây nhà trọn gói chìa khóa trao tay tại TP.HCM. Đơn giá phần thô từ 3,55 triệu/m², trọn gói từ 4,85 triệu/m². Khảo sát miễn phí — hotline 0909 075 668.",
  formTitle: "Nhận báo giá xây nhà trong 15 phút",
  benefits: [
    {
      title: "Không bán thầu",
      desc: "Sao Khuê trực tiếp thi công và giám sát chất lượng từng hạng mục.",
    },
    {
      title: "Báo giá minh bạch",
      desc: "Dự toán chi tiết vật tư — nhân công, cam kết không phát sinh ảo.",
    },
    {
      title: "Đúng tiến độ",
      desc: "Lộ trình thi công rõ ràng, bàn giao đúng hạn trong hợp đồng.",
    },
    {
      title: "Bảo hành 10 năm",
      desc: "Bảo hành kết cấu tối thiểu 10 năm, hoàn thiện 1–3 năm.",
    },
  ],
  packages: [
    {
      name: "Xây phần thô",
      price: "3,55 – 3,8",
      unit: "triệu/m²",
      note: "Nhân công + vật tư thô",
      features: ["Vật tư thô chính hãng", "Điện nước âm tường", "Bảo hành kết cấu 10 năm"],
    },
    {
      name: "Xây trọn gói",
      price: "4,85 – 6,7",
      unit: "triệu/m²",
      note: "Chìa khóa trao tay",
      features: ["Thiết kế tối ưu", "Hoàn thiện theo mẫu", "Bàn giao sẵn ở"],
      highlighted: true,
    },
    {
      name: "Thiết kế + thi công",
      price: "Theo hồ sơ",
      unit: "",
      note: "Nhà phố · biệt thự · cấp 4",
      features: ["Phương án 2D/3D", "Tối ưu công năng", "Đồng bộ kiến trúc"],
    },
  ],
  process: [
    { title: "Gọi / để lại SĐT", desc: "Tư vấn sơ bộ nhu cầu và ngân sách trong ngày." },
    { title: "Khảo sát miễn phí", desc: "Kỹ sư đo đạc hiện trạng, tư vấn giải pháp xây mới." },
    { title: "Báo giá & ký HĐ", desc: "Dự toán chi tiết, chốt vật tư và tiến độ thi công." },
    { title: "Thi công & bàn giao", desc: "Giám sát chất lượng, nghiệm thu và kích hoạt bảo hành." },
  ],
  gallery: [
    { src: "/images/xay-nha/xay-nha-01.jpg", alt: "Công trình xây nhà Sao Khuê 1" },
    { src: "/images/xay-nha/xay-nha-02.jpg", alt: "Công trình xây nhà Sao Khuê 2" },
    { src: "/images/xay-nha/xay-nha-03.jpg", alt: "Công trình xây nhà Sao Khuê 3" },
    { src: "/images/xay-nha/xay-nha-04.jpg", alt: "Công trình xây nhà Sao Khuê 4" },
  ],
  faqs: [
    {
      q: "Đơn giá xây nhà trọn gói khoảng bao nhiêu?",
      a: "Tham khảo phần thô khoảng 3,55–3,8 triệu/m² và trọn gói khoảng 4,85–6,7 triệu/m² tùy tiêu chuẩn vật tư. Báo giá chính xác sau khảo sát.",
    },
    {
      q: "Thời gian xây nhà phố 3–4 tầng mất bao lâu?",
      a: "Thông thường 4–7 tháng tùy quy mô, điều kiện mặt bằng và mức độ hoàn thiện.",
    },
    {
      q: "Có khảo sát và tư vấn miễn phí không?",
      a: "Có. Hotline 0909 075 668 — kỹ sư khảo sát tận nơi và tư vấn sơ bộ miễn phí.",
    },
    {
      q: "Sao Khuê nhận thi công khu vực nào?",
      a: "TP.HCM, Bình Dương, Đồng Nai và các tỉnh lân cận theo thỏa thuận.",
    },
  ],
  trustLine: "Hơn 10 năm kinh nghiệm · Không bán thầu · Bảo hành kết cấu 10 năm",
};

export const CAI_TAO_NHA_LANDING: AdsLandingConfig = {
  path: "/cai-tao-nha",
  source: "ads-cai-tao-nha",
  serviceLabel: "Cải tạo nhà",
  brandHeadline: "Kiến Trúc Sao Khuê",
  h1: "Cải tạo & sửa nhà trọn gói — báo giá rõ từng hạng mục",
  support:
    "Báo giá sửa nhà · cải tạo nhà phố · nâng tầng · chống thấm · làm mới mặt tiền. Khảo sát miễn phí tại TP.HCM.",
  heroImage: "/images/ads/hero-cai-tao.jpg",
  heroImageAlt: "Nhà phố sau cải tạo Sao Khuê",
  keywords:
    "báo giá sửa nhà, báo giá sửa nhà trọn gói, sửa nhà trọn gói tphcm, cải tạo nhà, cải tạo nhà cũ tphcm, cải tạo nhà phố, nâng tầng nhà phố, chống thấm nhà cũ, dịch vụ sửa nhà tphcm",
  seoTitle: "Báo Giá Sửa Nhà Trọn Gói TP.HCM | Sao Khuê",
  seoDescription:
    "Báo giá sửa nhà trọn gói TP.HCM: làm mới 1–2 triệu/m², cải tạo 2,5–5 triệu/m². Khảo sát miễn phí, bảo hành kết cấu 10 năm — 0909 075 668.",
  formTitle: "Nhận báo giá sửa nhà trong 15 phút",
  benefits: [
    {
      title: "Khảo sát hiện trạng",
      desc: "Đánh giá kết cấu, chống thấm, điện nước trước khi làm thẩm mỹ.",
    },
    {
      title: "Tối ưu ngân sách",
      desc: "Giữ phần còn tốt, chỉ thay hạng mục cần thiết — tiết kiệm chi phí.",
    },
    {
      title: "Thi công gọn nhẹ",
      desc: "Lịch trình rõ ràng, hạn chế ảnh hưởng sinh hoạt gia đình.",
    },
    {
      title: "Bảo hành rõ ràng",
      desc: "Cam kết bảo hành chống thấm và hạng mục hoàn thiện theo hợp đồng.",
    },
  ],
  packages: [
    {
      name: "Làm mới",
      price: "1 – 2",
      unit: "triệu/m²",
      note: "Sơn · sàn · điện nước nhẹ",
      features: ["Sơn lại toàn bộ", "Sửa điện nước cơ bản", "Vệ sinh bàn giao"],
    },
    {
      name: "Cải tạo công năng",
      price: "2,5 – 3,5",
      unit: "triệu/m²",
      note: "Đổi bố trí phòng · nâng cấp",
      features: ["Bố trí lại mặt bằng", "Điện nước mới", "Hoàn thiện theo mẫu"],
      highlighted: true,
    },
    {
      name: "Cải tạo sâu",
      price: "3,5 – 5",
      unit: "triệu/m²",
      note: "Gia cố · nâng tầng · mặt tiền",
      features: ["Gia cố kết cấu", "Nâng tầng / mở rộng", "Đổi mặt tiền"],
    },
  ],
  process: [
    { title: "Tiếp nhận nhu cầu", desc: "Mô tả hiện trạng nhà và hạng mục muốn cải tạo." },
    { title: "Khảo sát miễn phí", desc: "Kỹ sư kiểm tra kết cấu, thấm dột, điện nước tại chỗ." },
    { title: "Phương án & báo giá", desc: "Đề xuất giải pháp tối ưu chi phí — ký hợp đồng." },
    { title: "Thi công & bàn giao", desc: "Thi công gọn, nghiệm thu từng hạng mục và bảo hành." },
  ],
  gallery: [
    { src: "/images/cai-tao/cai-tao-01.jpg", alt: "Cải tạo nhà Sao Khuê 1" },
    { src: "/images/cai-tao/cai-tao-04.jpg", alt: "Cải tạo nhà Sao Khuê 2" },
    { src: "/images/cai-tao/cai-tao-07.jpg", alt: "Cải tạo nhà Sao Khuê 3" },
    { src: "/images/cai-tao/cai-tao-11.jpg", alt: "Cải tạo nhà Sao Khuê 4" },
  ],
  faqs: [
    {
      q: "Báo giá sửa nhà trọn gói hết bao nhiêu?",
      a: "Làm mới khoảng 1–2 triệu/m²; sửa nhà trọn gói / cải tạo công năng 2,5–3,5 triệu/m²; cải tạo sâu hoặc gia cố khoảng 3,5–5 triệu/m². Báo giá chính thức sau khảo sát.",
    },
    {
      q: "Chi phí cải tạo nhà cũ khoảng bao nhiêu?",
      a: "Làm mới khoảng 1–2 triệu/m²; cải tạo công năng 2,5–3,5 triệu/m²; cải tạo sâu / gia cố khoảng 3,5–5 triệu/m² tùy hiện trạng.",
    },
    {
      q: "Nhà cũ có cần gia cố kết cấu không?",
      a: "Sau khảo sát, kỹ sư sẽ đánh giá. Chỉ gia cố khi cần thiết để đảm bảo an toàn và tối ưu ngân sách.",
    },
    {
      q: "Có thể ở tạm trong lúc cải tạo không?",
      a: "Tùy phạm vi hạng mục. Sao Khuê lên lịch theo giai đoạn để giảm ảnh hưởng sinh hoạt.",
    },
    {
      q: "Thời gian cải tạo mất bao lâu?",
      a: "Thường từ vài tuần đến vài tháng tùy diện tích và mức độ cải tạo. Tiến độ ghi rõ trong hợp đồng.",
    },
  ],
  trustLine: "Chuyên cải tạo nhà phố · Chống thấm · Nâng tầng · Bảo hành rõ ràng",
};

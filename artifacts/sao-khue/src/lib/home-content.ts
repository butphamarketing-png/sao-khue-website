export type StatItem = {
  icon: string;
  value: string;
  label: string;
};

export type TestimonialItem = {
  name: string;
  project: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ProcessStep = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

export type SectionMeta = {
  title: string;
  subtitle: string;
};

export type HomeSectionMeta = {
  commitments: SectionMeta;
  pricing: SectionMeta;
  quote: SectionMeta;
  calculator: SectionMeta;
  contact: SectionMeta;
  testimonials: SectionMeta;
  faq: SectionMeta;
  process: SectionMeta;
  services: SectionMeta;
  projects: SectionMeta;
  news: SectionMeta;
  video: SectionMeta;
};

export type QuoteServiceItem = {
  id: string;
  title: string;
  link: string;
  buttonLabel: string;
};

export type ContactSectionContent = {
  eyebrow: string;
  titleLine1: string;
  titleAccent: string;
  description: string;
  hotlineLabel: string;
  addressLabel: string;
  formTitle: string;
  submitLabel: string;
  serviceOptions: string[];
  backgroundImageUrl: string;
};

export type CtaBannerContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type CategoryPageContent = {
  title: string;
  description: string;
  highlights: string[];
};

export type CategoryPagesMap = Record<string, CategoryPageContent>;

export const defaultStats: StatItem[] = [
  { icon: "building-2", value: "500+", label: "Công trình bàn giao" },
  { icon: "users", value: "50+", label: "Kỹ sư & kiến trúc sư" },
  { icon: "shield-check", value: "10 năm", label: "Bảo hành kết cấu" },
];

export const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Anh Tuấn — Quận 7",
    project: "Xây nhà phố 4 tầng",
    text: "Sao Khuê thi công đúng tiến độ, báo giá minh bạch không phát sinh. Đội giám sát nhiệt tình, bàn giao nhà đẹp hơn mong đợi.",
  },
  {
    name: "Chị Lan — Bình Thạnh",
    project: "Cải tạo nhà cũ",
    text: "Tư vấn rất kỹ từ khâu thiết kế đến vật tư. Công trình gọn gàng, sạch sẽ sau mỗi ngày thi công. Gia đình rất hài lòng.",
  },
  {
    name: "Chú Ba — Đồng Nai",
    project: "Biệt thự sân vườn",
    text: "Làm việc chuyên nghiệp, hợp đồng rõ ràng. Hotline hỗ trợ nhanh khi cần điều chỉnh trong quá trình xây dựng.",
  },
];

export const defaultFaqs: FaqItem[] = [
  {
    q: "Sao Khuê báo giá xây nhà trọn gói như thế nào?",
    a: "Chúng tôi khảo sát mặt bằng, lập dự toán chi tiết theo hạng mục và vật tư. Báo giá minh bạch, cam kết không phát sinh khi không có yêu cầu thay đổi từ khách hàng.",
  },
  {
    q: "Thời gian thi công nhà phố 3–4 tầng mất bao lâu?",
    a: "Thông thường từ 4–7 tháng tùy quy mô, mùa mưa và tiến độ hoàn thiện. Sao Khuê cam kết bám sát tiến độ trong hợp đồng.",
  },
  {
    q: "Có được tư vấn và khảo sát miễn phí không?",
    a: "Có. Hotline 0909 075 668 hỗ trợ 24/7. Kỹ sư sẽ khảo sát hiện trạng và tư vấn sơ bộ miễn phí tại công trình.",
  },
  {
    q: "Bảo hành công trình bao lâu?",
    a: "Bảo hành kết cấu tối thiểu 10 năm. Phần hoàn thiện bảo hành từ 12–36 tháng tùy hạng mục trong hợp đồng.",
  },
  {
    q: "Sao Khuê có nhận xây ở Bình Dương, Đồng Nai không?",
    a: 'Có. Chúng tôi nhận thi công tại TP.HCM và các tỉnh lân cận như Bình Dương, Đồng Nai, Long An. Xem <a href="/dich-vu/xay-nha-tron-goi-binh-duong">xây nhà trọn gói Bình Dương</a>.',
  },
];

export const defaultProcessSteps: ProcessStep[] = [
  {
    id: 1,
    icon: "phone-call",
    title: "Tiếp nhận yêu cầu",
    desc: "Lắng nghe nhu cầu, tư vấn sơ bộ và đặt lịch hẹn khảo sát.",
  },
  {
    id: 2,
    icon: "clipboard-check",
    title: "Khảo sát thực tế",
    desc: "Kỹ sư đo đạc, khảo sát hiện trạng và tư vấn giải pháp tối ưu.",
  },
  {
    id: 3,
    icon: "pencil-ruler",
    title: "Thiết kế 2D/3D",
    desc: "Lên phương án kiến trúc, nội thất chi tiết chốt với khách hàng.",
  },
  {
    id: 4,
    icon: "file-text",
    title: "Báo giá & ký HĐ",
    desc: "Lập dự toán chi tiết, minh bạch vật tư và ký hợp đồng thi công.",
  },
  {
    id: 5,
    icon: "hammer",
    title: "Thi công xây dựng",
    desc: "Triển khai thi công an toàn, giám sát chất lượng và tiến độ chặt chẽ.",
  },
  {
    id: 6,
    icon: "shield-check",
    title: "Bàn giao & bảo hành",
    desc: "Nghiệm thu, vệ sinh công trình, bàn giao và kích hoạt bảo hành.",
  },
];

export const defaultQuoteServices: QuoteServiceItem[] = [
  { id: "01", title: "XÂY NHÀ\nTRỌN GÓI", link: "/bao-gia", buttonLabel: "Xem chi tiết" },
  { id: "02", title: "SỬA CHỮA\nNHÀ", link: "/bao-gia", buttonLabel: "Xem chi tiết" },
  { id: "03", title: "XÂY DỰNG\nPHẦN THÔ", link: "/bao-gia", buttonLabel: "Xem chi tiết" },
  { id: "04", title: "THIẾT KẾ\nNHÀ", link: "/dich-vu", buttonLabel: "Xem chi tiết" },
];

export const defaultContactSection: ContactSectionContent = {
  eyebrow: "Tư vấn miễn phí",
  titleLine1: "Liên hệ tư vấn",
  titleAccent: "miễn phí",
  description:
    "Để lại thông tin, đội ngũ kiến trúc sư và kỹ sư của Sao Khuê sẽ liên hệ tư vấn và khảo sát tận nơi hoàn toàn miễn phí.",
  hotlineLabel: "Hotline tư vấn 24/7",
  addressLabel: "Trụ sở chính",
  formTitle: "Nhận báo giá ngay",
  submitLabel: "Gửi yêu cầu",
  serviceOptions: [
    "Xây nhà trọn gói",
    "Sửa chữa nhà",
    "Xây dựng phần thô",
    "Thiết kế nội thất/kiến trúc",
  ],
  backgroundImageUrl: "/images/hero-3.png",
};

export const defaultSectionMeta: HomeSectionMeta = {
  commitments: {
    title: "9 Cam kết vàng của Sao Khuê",
    subtitle: "Sự an tâm của khách hàng là thước đo thành công của chúng tôi.",
  },
  pricing: {
    title: "Bảng giá tham khảo",
    subtitle: "Đơn giá minh bạch, cập nhật theo từng gói dịch vụ xây dựng.",
  },
  quote: {
    title: "Gói dịch vụ báo giá",
    subtitle: "Chọn hạng mục phù hợp để xem chi tiết đơn giá và tư vấn nhanh.",
  },
  calculator: {
    title: "Tính chi phí xây dựng",
    subtitle:
      "Quý khách vui lòng nhập đầy đủ thông tin bên dưới. Lưu ý nhập diện tích xây dựng (không phải diện tích đất) để có kết quả tham khảo chính xác nhất.",
  },
  contact: {
    title: "Liên hệ tư vấn",
    subtitle: "Hotline 24/7 — khảo sát miễn phí — báo giá trong 24–48 giờ.",
  },
  testimonials: {
    title: "Khách hàng nói gì về Sao Khuê",
    subtitle: "Niềm tin của khách hàng là động lực để chúng tôi không ngừng nâng cao chất lượng.",
  },
  faq: {
    title: "Câu hỏi thường gặp",
    subtitle: "Giải đáp nhanh các thắc mắc phổ biến khi xây nhà và chọn nhà thầu.",
  },
  process: {
    title: "Quy trình làm việc",
    subtitle:
      "Sao Khuê áp dụng quy trình chuẩn hóa, chuyên nghiệp giúp khách hàng tiết kiệm thời gian và hoàn toàn an tâm.",
  },
  services: {
    title: "Dịch vụ của chúng tôi",
    subtitle: "Giải pháp trọn gói từ thiết kế, thi công đến hoàn thiện công trình.",
  },
  projects: {
    title: "Công trình tiêu biểu",
    subtitle: "Những dự án nhà phố, biệt thự và cải tạo mà Sao Khuê đã thi công.",
  },
  news: {
    title: "Tin tức",
    subtitle: "Cập nhật bài viết, kinh nghiệm xây dựng và xu hướng kiến trúc tại TP.HCM.",
  },
  video: {
    title: "Video giới thiệu",
    subtitle: "Khám phá quy trình thi công và các công trình tiêu biểu của Sao Khuê.",
  },
};

export const defaultCtaBanner: CtaBannerContent = {
  eyebrow: "Tận tâm — Uy tín — Chất lượng",
  title: "Sẵn sàng bắt đầu công trình của bạn?",
  subtitle: "Liên hệ ngay để được khảo sát miễn phí và nhận báo giá chi tiết trong 24–48h.",
  secondaryLabel: "Nhận báo giá",
  secondaryHref: "/lien-he",
};

export const defaultCategoryPages: CategoryPagesMap = {
  "gioi-thieu": {
    title: "Giới thiệu Sao Khuê",
    description:
      "Công ty TNHH Kiến Trúc Sao Khuê — đơn vị thiết kế và thi công xây dựng uy tín tại TP.HCM với hơn 10 năm kinh nghiệm, đội ngũ chuyên môn vững và quy trình minh bạch.",
    highlights: ["Hơn 500 công trình bàn giao", "Trực tiếp thi công, không bán thầu", "Bảo hành kết cấu lên đến 10 năm"],
  },
  "dich-vu": {
    title: "Dịch vụ xây dựng trọn gói",
    description:
      "Từ thiết kế, xây thô, hoàn thiện đến sửa chữa nhà — Sao Khuê cung cấp giải pháp trọn gói, báo giá rõ ràng và cam kết tiến độ.",
    highlights: ["Xây nhà trọn gói chìa khóa trao tay", "Thiết kế kiến trúc 2D/3D", "Tư vấn miễn phí tận nơi"],
  },
  "cong-trinh": {
    title: "Công trình tiêu biểu",
    description:
      "Khám phá các dự án nhà phố, biệt thự và cải tạo mà Sao Khuê đã thiết kế, thi công và bàn giao cho khách hàng tại TP.HCM và các tỉnh lân cận.",
    highlights: ["Nhà phố hiện đại", "Biệt thự sân vườn", "Cải tạo, nâng tầng"],
  },
  "tin-tuc": {
    title: "Tin tức xây dựng",
    description:
      "Bài viết, cẩm nang, kinh nghiệm thực tế và kiến thức pháp lý giúp chủ nhà chủ động hơn khi xây nhà, chọn nhà thầu và giám sát công trình.",
    highlights: ["Cẩm nang xây nhà A–Z", "Luật xây dựng cập nhật", "Báo giá & xu hướng"],
  },
};

export const CATEGORY_PAGE_KEYS = ["dich-vu", "cong-trinh", "tin-tuc"] as const;

export type PageBannerContent = {
  title: string;
  subtitle: string;
  bodyTitle?: string;
  bodyText?: string;
};

export type PageBannersMap = {
  pricing: PageBannerContent;
  contact: PageBannerContent;
  notFound: PageBannerContent;
};

export type FeaturedPostsConfig = {
  services: string[];
  projects: string[];
  news: string[];
};

export const defaultPageBanners: PageBannersMap = {
  pricing: {
    title: "Báo giá xây dựng",
    subtitle:
      "Tham khảo đơn giá xây thô, trọn gói và công cụ tính chi phí nhanh — minh bạch, không phát sinh.",
  },
  contact: {
    title: "Liên hệ",
    subtitle: "Hotline 24/7 — khảo sát miễn phí — báo giá trong 24–48 giờ.",
  },
  notFound: {
    title: "404 — Không tìm thấy trang",
    subtitle: "Đường dẫn không tồn tại hoặc đã được đổi tên.",
    bodyTitle: "Trang bạn tìm không có ở đây",
    bodyText:
      "Vui lòng quay về trang chủ, gọi hotline tư vấn hoặc chọn một mục bên dưới.",
  },
};

export const defaultFeaturedPosts: FeaturedPostsConfig = {
  services: [],
  projects: [],
  news: [],
};

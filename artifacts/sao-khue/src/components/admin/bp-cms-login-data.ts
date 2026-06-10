import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarClock,
  Headphones,
  MapPinned,
  Megaphone,
  Monitor,
  Rocket,
  Server,
} from "lucide-react";

export const ZALO_TECH_URL = "https://zalo.me/0937417982";
export const BP_LOGO_URL = "/images/logo-butpha.png";

export const bpContacts = [
  { label: "Hotline", value: "093.741.7982" },
  { label: "Website", value: "butphamarketing.com" },
  { label: "Email", value: "butphamarketing@gmail.com" },
  { label: "Zalo", value: "093.741.7982" },
] as const;

export const bpLoginFeatures = [
  "Quản lý website & landing page",
  "SEO & quảng cáo Google Ads",
  "Chăm sóc fanpage & Google Maps",
  "Hỗ trợ kỹ thuật tận tâm",
] as const;

export type BpServiceModal =
  | "website-care"
  | "google-ads"
  | "website-upgrade"
  | "hosting"
  | null;

export type BpServiceCardAction = "renewal";

export type BpServiceCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  modal?: BpServiceModal;
  href?: string;
  action?: BpServiceCardAction;
};

export const bpServiceCards: BpServiceCard[] = [
  {
    id: "website-care",
    icon: Monitor,
    title: "Chăm Sóc Website",
    desc: "Cập nhật nội dung, hình ảnh, backup định kỳ.",
    modal: "website-care",
  },
  {
    id: "google-ads",
    icon: BarChart3,
    title: "Google Ads",
    desc: "Quản lý chiến dịch, ngân sách, chuyển đổi.",
    modal: "google-ads",
  },
  {
    id: "website-upgrade",
    icon: Rocket,
    title: "Nâng Cấp Website",
    desc: "Tính năng mới, cải thiện UI/UX.",
    modal: "website-upgrade",
  },
  {
    id: "hosting",
    icon: Server,
    title: "Nâng Cấp Hosting",
    desc: "Quản lý hosting, SSL, tốc độ.",
    modal: "hosting",
  },
  {
    id: "fanpage",
    icon: Megaphone,
    title: "Marketing Fanpage",
    desc: "Lịch đăng bài, quản lý nội dung.",
    href: "https://www.butphamarketing.com/facebook",
  },
  {
    id: "maps",
    icon: MapPinned,
    title: "Marketing Maps",
    desc: "Google Business Profile, SEO Maps.",
    href: "https://www.butphamarketing.com/google-maps",
  },
  {
    id: "tech-support",
    icon: Headphones,
    title: "Liên Hệ Kỹ Thuật",
    desc: "Hỗ trợ kỹ thuật chuyên nghiệp, tận tâm.",
    href: ZALO_TECH_URL,
  },
  {
    id: "renewal",
    icon: CalendarClock,
    title: "Thông Tin Gia Hạn",
    desc: "Ngày gia hạn, hosting và tên miền.",
    action: "renewal",
  },
];

export const websiteCarePackages: Array<{
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}> = [
  {
    title: "10 bài viết/tháng",
    price: "1.000.000đ",
    features: ["Viết bài SEO", "Tối ưu Onpage cơ bản", "Cập nhật hình ảnh", "Báo cáo tháng"],
  },
  {
    title: "20 bài viết/tháng",
    price: "2.000.000đ",
    popular: true,
    features: [
      "Viết bài SEO chuyên sâu",
      "Tối ưu từ khóa",
      "Internal Link",
      "Báo cáo & đề xuất cải thiện",
    ],
  },
  {
    title: "30 bài viết/tháng",
    price: "2.500.000đ",
    features: ["Chiến lược Content", "SEO + CTA", "Tối ưu tốc độ", "Hỗ trợ ưu tiên"],
  },
];

export const googleAdsFeatures = [
  "Thiết lập chiến dịch",
  "Tối ưu từ khóa",
  "Theo dõi chuyển đổi",
  "Báo cáo hàng tháng",
  "Hỗ trợ kỹ thuật",
] as const;

export const currentWebsiteFeatures = [
  "Trang chủ",
  "Dịch vụ",
  "Tin tức",
  "Liên hệ",
  "Form liên hệ",
  "Responsive mobile",
] as const;

export const upgradeSuggestions = [
  "AI Chat hỗ trợ khách hàng",
  "Landing Page chuyển đổi",
  "Tích hợp CRM",
  "Theo dõi chuyển đổi",
  "Tối ưu tốc độ nâng cao",
  "Bộ lọc nâng cao",
  "Tích hợp Marketing Automation",
  "Dashboard báo cáo",
] as const;

export const hostingPlans = [
  { storage: "3GB", price: "3.348.000đ/năm" },
  { storage: "5GB", price: "4.872.000đ/năm" },
  { storage: "7GB", price: "6.000.000đ/năm" },
  { storage: "8GB", price: "6.504.000đ/năm" },
  { storage: "10GB", price: "7.200.000đ/năm" },
  { storage: "16GB", price: "10.080.000đ/năm" },
  { storage: "20GB", price: "12.000.000đ/năm" },
  { storage: "30GB", price: "16.080.000đ/năm" },
  { storage: "50GB", price: "24.000.000đ/năm" },
  { storage: "60GB", price: "28.008.000đ/năm" },
  { storage: "70GB", price: "32.040.000đ/năm" },
  { storage: "80GB", price: "36.000.000đ/năm" },
  { storage: "90GB", price: "39.960.000đ/năm" },
  { storage: "100GB", price: "43.200.000đ/năm" },
] as const;

export const renewalInfo = {
  renewalDate: "01/06/2027",
  hosting: "3GB",
  hostingPrice: "3.348.000đ/năm",
  domain: "kientrucsaokhue.com",
  domainPrice: "346.500đ",
} as const;

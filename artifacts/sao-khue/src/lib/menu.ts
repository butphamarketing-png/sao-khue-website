import { ABOUT_POST_SLUG } from "./categories";

export type MenuItem = {
  title: string;
  /** Nhãn ngắn trên header desktop — tránh xuống dòng */
  shortTitle?: string;
  href: string;
  category?: string;
  children?: MenuItem[];
};

/** Menu kiểu Quang Hào — thanh ngang + dropdown hover */
export const defaultNavMenu: MenuItem[] = [
  {
    title: "GIỚI THIỆU",
    href: `/bai-viet/${ABOUT_POST_SLUG}`,
    category: "gioi-thieu",
    children: [
      { title: "TỔNG QUAN", href: `/bai-viet/${ABOUT_POST_SLUG}`, category: "gioi-thieu" },
      { title: "THÔNG ĐIỆP CEO", href: `/bai-viet/${ABOUT_POST_SLUG}`, category: "gioi-thieu" },
      { title: "TẦM NHÌN - SỨ MỆNH", href: `/bai-viet/${ABOUT_POST_SLUG}`, category: "gioi-thieu" },
      { title: "HỒ SƠ NĂNG LỰC", href: "/bai-viet/so-do-to-chuc", category: "gioi-thieu" },
    ],
  },
  {
    title: "BÁO GIÁ",
    href: "/bao-gia",
    children: [
      { title: "BÁO GIÁ TRỌN GÓI", href: "/dich-vu/xay-nha-tron-goi" },
      { title: "ĐƠN GIÁ XÂY NHÀ", href: "/dich-vu/xay-nha-tron-goi" },
      { title: "CHI PHÍ XÂY NHÀ", href: "/dich-vu/xay-nha-tron-goi" },
      { title: "XÂY NHÀ GIÁ RẺ", href: "/dich-vu/xay-nha-tron-goi" },
      { title: "BÁO GIÁ PHẦN THÔ", href: "/dich-vu/xay-dung-phan-tho" },
      { title: "BÁO GIÁ CẢI TẠO", href: "/dich-vu/sua-nha-tron-goi-tphcm" },
      { title: "BÁO GIÁ THIẾT KẾ", href: "/bao-gia" },
      { title: "BÁO GIÁ HOÀN THIỆN", href: "/dich-vu/hoan-thien-nha", category: "dich-vu" },
      { title: "QUY TRÌNH", href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z" },
    ],
  },
  {
    title: "THIẾT KẾ",
    href: "/thiet-ke",
    category: "dich-vu",
    children: [
      { title: "THIẾT KẾ NHÀ PHỐ", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "DỊCH VỤ THIẾT KẾ", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "THIẾT KẾ NHÀ ĐẸP TP.HCM", href: "/thiet-ke", category: "dich-vu" },
      { title: "THIẾT KẾ NHÀ ĐẸP ĐẮK LẮK", href: "/tin-tuc/thiet-ke-nha-dep-dak-lak", category: "tin-tuc" },
      { title: "THIẾT KẾ BIỆT THỰ", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "THIẾT KẾ NỘI THẤT", href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai", category: "cong-trinh" },
      { title: "BÁO GIÁ THIẾT KẾ", href: "/bao-gia" },
      { title: "QUY TRÌNH THIẾT KẾ", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
    ],
  },
  {
    title: "XÂY MỚI",
    href: "/xay-moi",
    category: "dich-vu",
    children: [
      { title: "NHÀ PHỐ", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "BIỆT THỰ", href: "/mau-nha/biet-thu" },
      { title: "NHÀ CẤP 4", href: "/mau-nha/cap-4" },
      { title: "XÂY TRỌN GÓI TP.HCM", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "NHÀ 2 TẦNG", href: "/mau-nha/2-tang" },
      { title: "NHÀ 3 TẦNG", href: "/mau-nha/3-tang" },
      { title: "XÂY TRỌN GÓI BÌNH DƯƠNG", href: "/dich-vu/xay-nha-tron-goi-binh-duong", category: "dich-vu" },
      { title: "XÂY TRỌN GÓI ĐỒNG NAI", href: "/dich-vu/xay-nha-tron-goi-dong-nai", category: "dich-vu" },
      { title: "BÁO GIÁ XÂY MỚI", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "QUY TRÌNH XÂY NHÀ", href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z", category: "tin-tuc" },
    ],
  },
  {
    title: "MẪU NHÀ",
    href: "/mau-nha",
    children: [
      { title: "NHÀ CẤP 4", href: "/mau-nha/cap-4" },
      { title: "NHÀ 2 TẦNG", href: "/mau-nha/2-tang" },
      { title: "NHÀ 3 TẦNG", href: "/mau-nha/3-tang" },
      { title: "NHÀ 4 TẦNG", href: "/mau-nha/4-tang" },
      { title: "BIỆT THỰ", href: "/mau-nha/biet-thu" },
      { title: "NHÀ ỐNG", href: "/mau-nha/nha-ong" },
    ],
  },
  {
    title: "CẢI TẠO",
    href: "/dich-vu/sua-nha-tron-goi-tphcm",
    category: "dich-vu",
    children: [
      { title: "CẢI TẠO NHÀ CŨ", href: "/cai-tao-nha", category: "dich-vu" },
      { title: "CẢI TẠO NHÀ TRỌN GÓI", href: "/dich-vu/sua-nha-tron-goi-tphcm", category: "dich-vu" },
      { title: "CẢI TẠO NHÀ PHỐ", href: "/cai-tao-nha", category: "dich-vu" },
      { title: "NÂNG TẦNG NHÀ PHỐ", href: "/dich-vu/nang-tang-nha-pho", category: "dich-vu" },
      { title: "CHỐNG THẤM NHÀ", href: "/dich-vu/sua-nha-tron-goi-tphcm", category: "dich-vu" },
      { title: "CẢI TẠO MẶT TIỀN", href: "/cai-tao-nha", category: "dich-vu" },
    ],
  },
  {
    title: "CẨM NANG",
    href: "/tin-tuc",
    category: "tin-tuc",
    children: [
      { title: "Cẩm nang nhà phố", href: "/tin-tuc/cam-nang-xay-nha-2026", category: "tin-tuc" },
      { title: "Cẩm nang biệt thự", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "Cẩm nang cải tạo nhà", href: "/cai-tao-nha" },
      { title: "Cẩm nang thiết kế", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "Cẩm nang xây nhà A–Z", href: "/tin-tuc/cam-nang-xay-nha-2026", category: "tin-tuc" },
      { title: "Công ty xây dựng uy tín", href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", category: "tin-tuc" },
    ],
  },
  {
    title: "TIN TỨC",
    href: "/tin-tuc",
    category: "tin-tuc",
  },
  { title: "LIÊN HỆ", href: "/lien-he" },
];

/** @deprecated use defaultNavMenu or useNavMenu() */
export const navMenu = defaultNavMenu;

export const allCategorySlugs = ["dich-vu", "cong-trinh", "tin-tuc", "gioi-thieu"] as const;

export { findMenuByPath } from "./menu-posts";

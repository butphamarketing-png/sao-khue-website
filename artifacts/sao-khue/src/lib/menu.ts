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
      { title: "BÁO GIÁ THIẾT KẾ", href: "/tin-tuc/thiet-ke-nha-dep-gia-re" },
      { title: "BÁO GIÁ PHẦN THÔ", href: "/tin-tuc/bao-gia-xay-nha-phan-tho-long-an" },
      { title: "BÁO GIÁ TRỌN GÓI", href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm" },
      { title: "BÁO GIÁ HOÀN THIỆN", href: "/dich-vu/hoan-thien-nha", category: "dich-vu" },
      { title: "BÁO GIÁ CẢI TẠO", href: "/dich-vu/sua-chua-nha", category: "dich-vu" },
      { title: "QUY TRÌNH", href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z" },
      { title: "BẢO HÀNH", href: `/bai-viet/${ABOUT_POST_SLUG}` },
    ],
  },
  {
    title: "THIẾT KẾ",
    href: "/dich-vu/thiet-ke-nha",
    category: "dich-vu",
    children: [
      { title: "THIẾT KẾ NHÀ PHỐ", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "THIẾT KẾ BIỆT THỰ", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "THIẾT KẾ NỘI THẤT", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
    ],
  },
  {
    title: "XÂY MỚI",
    href: "/dich-vu/xay-nha-moi",
    category: "dich-vu",
    children: [
      { title: "XÂY NHÀ MỚI", href: "/dich-vu/xay-nha-moi", category: "dich-vu" },
      { title: "Nhà 2 tầng", href: "/dich-vu/xay-dung-nha-2-tang", category: "dich-vu" },
      { title: "Nhà 3 tầng", href: "/dich-vu/xay-dung-nha-3-tang", category: "dich-vu" },
      { title: "Nhà phố", href: "/dich-vu/xay-nha-tron-goi-tphcm", category: "dich-vu" },
      { title: "Biệt thự", href: "/dich-vu/xay-dung-biet-thu", category: "dich-vu" },
      { title: "Nhà cấp 4", href: "/dich-vu/xay-nha-tron-goi-tphcm", category: "dich-vu" },
    ],
  },
  {
    title: "HOẠT ĐỘNG",
    href: "/bai-viet/hoat-dong-sao-khue",
    category: "gioi-thieu",
  },
  {
    title: "CẢI TẠO",
    href: "/dich-vu/cai-tao-nha-cu",
    category: "dich-vu",
    children: [
      { title: "Nâng tầng nhà phố", href: "/dich-vu/nang-tang-nha-pho", category: "dich-vu" },
      { title: "Cải tạo nhà cũ", href: "/dich-vu/cai-tao-nha-cu", category: "dich-vu" },
      { title: "Nhà phố", href: "/dich-vu/sua-chua-nha-tphcm", category: "dich-vu" },
      { title: "Biệt thự", href: "/dich-vu/sua-chua-nha-tphcm", category: "dich-vu" },
      { title: "Sửa chữa trọn gói", href: "/dich-vu/sua-nha-tron-goi-tphcm", category: "dich-vu" },
    ],
  },
  {
    title: "CÔNG TRÌNH",
    href: "/cong-trinh",
    category: "cong-trinh",
    children: [
      { title: "CÔNG TRÌNH TIÊU BIỂU", href: "/cong-trinh", category: "cong-trinh" },
      { title: "CÔNG TRÌNH ĐANG THI CÔNG", href: "/cong-trinh", category: "cong-trinh" },
    ],
  },
  {
    title: "CẨM NANG",
    href: "/tin-tuc",
    category: "tin-tuc",
    children: [
      { title: "Cẩm nang nhà phố", href: "/tin-tuc/thiet-ke-nha-pho-hien-dai-tphcm", category: "tin-tuc" },
      { title: "Cẩm nang biệt thự", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "Cẩm nang cải tạo nhà", href: "/dich-vu/sua-chua-nha", category: "dich-vu" },
      { title: "Cẩm nang thiết kế", href: "/tin-tuc/thiet-ke-nha-dep-gia-re", category: "tin-tuc" },
      { title: "Cẩm nang xây nhà A–Z", href: "/tin-tuc/cam-nang-xay-nha-2026", category: "tin-tuc" },
    ],
  },
  {
    title: "TIN NỘI BỘ",
    href: "/bai-viet/hoat-dong-sao-khue",
    category: "gioi-thieu",
    children: [
      { title: "HOẠT ĐỘNG NỘI BỘ", href: "/bai-viet/hoat-dong-sao-khue", category: "gioi-thieu" },
      { title: "TUYỂN DỤNG", href: "/bai-viet/tuyen-dung", category: "gioi-thieu" },
    ],
  },
  { title: "LIÊN HỆ", href: "/lien-he" },
];

/** @deprecated use defaultNavMenu or useNavMenu() */
export const navMenu = defaultNavMenu;

export const allCategorySlugs = ["dich-vu", "cong-trinh", "tin-tuc", "gioi-thieu"] as const;

export { findMenuByPath } from "./menu-posts";

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
    href: "/thiet-ke",
    category: "dich-vu",
    children: [
      { title: "THIẾT KẾ NHÀ PHỐ", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "THIẾT KẾ NHÀ ĐẸP TP.HCM", href: "/tin-tuc/thiet-ke-nha-dep-tphcm", category: "tin-tuc" },
      { title: "THIẾT KẾ NHÀ ĐẸP ĐẮK LẮK", href: "/tin-tuc/thiet-ke-nha-dep-dak-lak", category: "tin-tuc" },
      { title: "THIẾT KẾ NHÀ ĐẸP PHÚ YÊN", href: "/tin-tuc/thiet-ke-nha-dep-phu-yen", category: "tin-tuc" },
      { title: "THIẾT KẾ NHÀ ĐẸP BÌNH DƯƠNG", href: "/tin-tuc/thiet-ke-nha-dep-binh-duong", category: "tin-tuc" },
      { title: "THIẾT KẾ NHÀ ĐẸP LONG AN", href: "/tin-tuc/thiet-ke-nha-dep-long-an", category: "tin-tuc" },
      { title: "THIẾT KẾ NHÀ ĐẸP ĐỒNG NAI", href: "/tin-tuc/thiet-ke-nha-dep-dong-nai", category: "tin-tuc" },
      { title: "THIẾT KẾ BIỆT THỰ", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "THIẾT KẾ NỘI THẤT", href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai", category: "cong-trinh" },
      { title: "BÁO GIÁ THIẾT KẾ", href: "/tin-tuc/thiet-ke-nha-dep-gia-re", category: "tin-tuc" },
      { title: "QUY TRÌNH THIẾT KẾ", href: "/tin-tuc/thue-thiet-ke-nha-truoc-khi-xay", category: "tin-tuc" },
    ],
  },
  {
    title: "XÂY MỚI",
    href: "/xay-moi",
    category: "dich-vu",
    children: [
      { title: "NHÀ PHỐ", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "BIỆT THỰ", href: "/dich-vu/xay-dung-biet-thu", category: "dich-vu" },
      { title: "NHÀ CẤP 4", href: "/dich-vu/xay-nha-moi", category: "dich-vu" },
      { title: "XÂY TRỌN GÓI TP.HCM", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "NHÀ 2 TẦNG", href: "/dich-vu/xay-dung-nha-2-tang", category: "dich-vu" },
      { title: "NHÀ 3 TẦNG", href: "/dich-vu/xay-dung-nha-3-tang", category: "dich-vu" },
      { title: "XÂY TRỌN GÓI BÌNH DƯƠNG", href: "/dich-vu/xay-nha-tron-goi-binh-duong", category: "dich-vu" },
      { title: "XÂY TRỌN GÓI ĐỒNG NAI", href: "/dich-vu/xay-nha-tron-goi-dong-nai", category: "dich-vu" },
      { title: "BÁO GIÁ XÂY MỚI", href: "/tin-tuc/bao-gia-xay-nha-moi", category: "tin-tuc" },
      { title: "QUY TRÌNH XÂY NHÀ", href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z", category: "tin-tuc" },
    ],
  },
  {
    title: "CẢI TẠO",
    href: "/dich-vu/sua-chua-nha",
    category: "dich-vu",
    children: [
      { title: "CẢI TẠO NHÀ CŨ", href: "/tin-tuc/cai-tao-nha-cu-tphcm", category: "tin-tuc" },
      { title: "CẢI TẠO NHÀ TRỌN GÓI", href: "/tin-tuc/cai-tao-nha-tron-goi-tphcm", category: "tin-tuc" },
      { title: "CẢI TẠO NHÀ PHỐ", href: "/tin-tuc/cai-tao-nha-pho-tphcm", category: "tin-tuc" },
      { title: "NÂNG TẦNG NHÀ PHỐ", href: "/tin-tuc/nang-tang-nha-pho-tphcm", category: "tin-tuc" },
      { title: "CHỐNG THẤM NHÀ", href: "/tin-tuc/chong-tham-nha-tphcm", category: "tin-tuc" },
      { title: "CẢI TẠO MẶT TIỀN", href: "/tin-tuc/cai-tao-mat-tien-nha-tphcm", category: "tin-tuc" },
    ],
  },
  {
    title: "CẨM NANG",
    href: "/tin-tuc",
    category: "tin-tuc",
    children: [
      { title: "Cẩm nang nhà phố", href: "/tin-tuc/thiet-ke-nha-pho-hien-dai-tphcm", category: "tin-tuc" },
      { title: "Cẩm nang biệt thự", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", category: "cong-trinh" },
      { title: "Cẩm nang cải tạo nhà", href: "/tin-tuc/cai-tao-nha-cu-tphcm", category: "tin-tuc" },
      { title: "Cẩm nang thiết kế", href: "/tin-tuc/thiet-ke-nha-dep-gia-re", category: "tin-tuc" },
      { title: "Cẩm nang xây nhà A–Z", href: "/tin-tuc/cam-nang-xay-nha-2026", category: "tin-tuc" },
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

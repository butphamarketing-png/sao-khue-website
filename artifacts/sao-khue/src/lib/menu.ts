import { ABOUT_POST_SLUG } from "./categories";

export type MenuItem = {
  title: string;
  /** Nhãn ngắn trên header desktop — tránh xuống dòng */
  shortTitle?: string;
  href: string;
  category?: string;
  /** @deprecated Không còn menu xổ cấp — chỉ dùng khi CMS menu JSON cũ */
  children?: MenuItem[];
};

/** Menu con dịch vụ — chỉ map URL /dich-vu/{leaf}, không hiện dropdown header */
const dichVuUrlChildren: MenuItem[] = [
  { title: "Xây nhà trọn gói", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
  { title: "Sửa chữa nhà", href: "/dich-vu/sua-chua-nha", category: "dich-vu" },
  { title: "Xây dựng phần thô", href: "/dich-vu/xay-dung-phan-tho", category: "dich-vu" },
  { title: "Thiết kế nhà", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
  { title: "Nâng tầng nhà phố", href: "/dich-vu/nang-tang-nha-pho", category: "dich-vu" },
  { title: "Hoàn thiện nhà", href: "/dich-vu/hoan-thien-nha", category: "dich-vu" },
  { title: "Khuyến mại xây dựng", href: "/dich-vu/khuyen-mai", category: "dich-vu" },
];

/** Menu phẳng: bấm mục → trang danh sách hoặc bài viết (không hover dropdown) */
export const defaultNavMenu: MenuItem[] = [
  { title: "TRANG CHỦ", href: "/" },
  { title: "GIỚI THIỆU", href: `/bai-viet/${ABOUT_POST_SLUG}` },
  {
    title: "DỊCH VỤ",
    href: "/dich-vu",
    category: "dich-vu",
    children: dichVuUrlChildren,
  },
  { title: "CÔNG TRÌNH", href: "/cong-trinh", category: "cong-trinh" },
  { title: "BẢNG BÁO GIÁ", shortTitle: "BÁO GIÁ", href: "/bao-gia" },
  { title: "TIN TỨC", href: "/tin-tuc", category: "tin-tuc" },
  { title: "LIÊN HỆ", href: "/lien-he" },
];

/** @deprecated use defaultNavMenu or useNavMenu() */
export const navMenu = defaultNavMenu;

export const allCategorySlugs = ["dich-vu", "cong-trinh", "tin-tuc", "gioi-thieu"] as const;

export { findMenuByPath } from "./menu-posts";

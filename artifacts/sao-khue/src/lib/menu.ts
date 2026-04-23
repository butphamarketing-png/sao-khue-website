export type MenuItem = {
  title: string;
  href: string;
  category?: string;
  children?: MenuItem[];
};

export const navMenu: MenuItem[] = [
  { title: "TRANG CHỦ", href: "/" },
  {
    title: "GIỚI THIỆU",
    href: "/gioi-thieu",
    category: "gioi-thieu",
    children: [
      { title: "Sơ đồ tổ chức", href: "/gioi-thieu/so-do-to-chuc", category: "gioi-thieu" },
      { title: "Về chúng tôi", href: "/gioi-thieu/ve-chung-toi", category: "gioi-thieu" },
      { title: "Hoạt động Sao Khuê", href: "/gioi-thieu/hoat-dong", category: "gioi-thieu" },
      { title: "Tuyển dụng", href: "/gioi-thieu/tuyen-dung", category: "gioi-thieu" },
    ],
  },
  {
    title: "DỊCH VỤ",
    href: "/dich-vu",
    category: "dich-vu",
    children: [
      { title: "Xây nhà trọn gói", href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu" },
      { title: "Sửa chữa nhà", href: "/dich-vu/sua-chua-nha", category: "dich-vu" },
      { title: "Xây dựng phần thô", href: "/dich-vu/xay-dung-phan-tho", category: "dich-vu" },
      { title: "Thiết kế nhà", href: "/dich-vu/thiet-ke-nha", category: "dich-vu" },
      { title: "Nâng tầng nhà phố", href: "/dich-vu/nang-tang-nha-pho", category: "dich-vu" },
      { title: "Hoàn thiện nhà / Căn hộ", href: "/dich-vu/hoan-thien-nha", category: "dich-vu" },
      { title: "Khuyến mại xây dựng", href: "/dich-vu/khuyen-mai", category: "dich-vu" },
    ],
  },
  {
    title: "CÔNG TRÌNH",
    href: "/cong-trinh",
    category: "cong-trinh",
    children: [
      { title: "Xây nhà", href: "/cong-trinh/xay-nha", category: "cong-trinh" },
      { title: "Sửa nhà", href: "/cong-trinh/sua-nha", category: "cong-trinh" },
      { title: "Thiết kế nhà", href: "/cong-trinh/thiet-ke-nha", category: "cong-trinh" },
    ],
  },
  { title: "BẢNG BÁO GIÁ", href: "/bao-gia" },
  {
    title: "KINH NGHIỆM XÂY DỰNG",
    href: "/kinh-nghiem",
    category: "kinh-nghiem",
    children: [
      { title: "Cẩm nang xây nhà", href: "/kinh-nghiem/cam-nang", category: "kinh-nghiem" },
      { title: "Luật xây dựng", href: "/kinh-nghiem/luat-xay-dung", category: "kinh-nghiem" },
      { title: "Phong thuỷ", href: "/kinh-nghiem/phong-thuy", category: "kinh-nghiem" },
    ],
  },
  { title: "LIÊN HỆ", href: "/lien-he" },
];

export const allCategorySlugs = ["gioi-thieu", "dich-vu", "cong-trinh", "kinh-nghiem"];

export function findMenuByPath(path: string): MenuItem | undefined {
  for (const top of navMenu) {
    if (top.href === path) return top;
    if (top.children) {
      const child = top.children.find((c) => c.href === path);
      if (child) return child;
    }
  }
  return undefined;
}

/** Màn hình admin — dùng chung cho shell cũ, V2 và dashboard. */
export type AdminView =
  | "dashboard"
  | "posts"
  | "settings-general"
  | "settings-mobile-bar"
  | "settings-google"
  | "settings-hero"
  | "settings-about"
  | "settings-commitments"
  | "settings-pricing"
  | "settings-calculator"
  | "settings-stats"
  | "settings-testimonials"
  | "settings-faq"
  | "settings-process"
  | "settings-video"
  | "settings-categories"
  | "settings-sections"
  | "settings-quote"
  | "settings-contact"
  | "settings-menu"
  | "settings-banners"
  | "settings-featured"
  | "settings-seo"
  | "contact-inbox";

export type SidebarGroup = "dashboard" | "posts" | "homepage" | "settings" | "tools";

/** Nhóm bài viết — cùng bảng `posts` Supabase, lọc theo category. */
export const POST_CATEGORY_NAV = [
  { category: "all", label: "Tất cả bài viết" },
  { category: "tin-tuc", label: "Tin tức" },
  { category: "dich-vu", label: "Dịch vụ" },
  { category: "cong-trinh", label: "Công trình" },
  { category: "gioi-thieu", label: "Giới thiệu" },
] as const;

export type PostCategoryFilter = (typeof POST_CATEGORY_NAV)[number]["category"];

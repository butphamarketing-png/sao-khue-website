import {
  normalizeCategory,
  categoriesForFilter,
  matchesCategory,
} from "@workspace/seed-content";

/** Slug bài giới thiệu chính — menu Giới thiệu trỏ thẳng tới đây */
export const ABOUT_POST_SLUG = "ve-chung-toi";

export const POST_CATEGORIES = ["dich-vu", "cong-trinh", "tin-tuc", "gioi-thieu"] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<string, string> = {
  "dich-vu": "Dịch vụ",
  "cong-trinh": "Công trình",
  "tin-tuc": "Tin tức",
  "gioi-thieu": "Giới thiệu",
};

export { normalizeCategory, categoriesForFilter, matchesCategory };

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[normalizeCategory(category)] ?? category;
}

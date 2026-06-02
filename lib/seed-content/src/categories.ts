export function normalizeCategory(category: string): string {
  if (category === "kinh-nghiem") return "tin-tuc";
  return category;
}

export function categoriesForFilter(category: string): string[] {
  const normalized = normalizeCategory(category);
  if (normalized === "tin-tuc") return ["tin-tuc", "kinh-nghiem"];
  return [normalized];
}

export function matchesCategory(postCategory: string, filterCategory: string): boolean {
  return categoriesForFilter(filterCategory).includes(normalizeCategory(postCategory));
}

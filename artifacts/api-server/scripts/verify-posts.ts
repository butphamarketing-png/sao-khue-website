/**
 * Verifies every menu sub-category has at least one matching post slug.
 * Run: pnpm --filter @workspace/api-server run verify-posts
 */
import { seedPosts } from "@workspace/seed-content";

const menuChildren: { href: string; category: string; title: string }[] = [
  { href: "/gioi-thieu/so-do-to-chuc", category: "gioi-thieu", title: "Sơ đồ tổ chức" },
  { href: "/gioi-thieu/ve-chung-toi", category: "gioi-thieu", title: "Về chúng tôi" },
  { href: "/gioi-thieu/hoat-dong", category: "gioi-thieu", title: "Hoạt động Sao Khuê" },
  { href: "/gioi-thieu/tuyen-dung", category: "gioi-thieu", title: "Tuyển dụng" },
  { href: "/dich-vu/xay-nha-tron-goi", category: "dich-vu", title: "Xây nhà trọn gói" },
  { href: "/dich-vu/xay-nha-tron-goi-binh-duong", category: "dich-vu", title: "Xây nhà trọn gói Bình Dương" },
  { href: "/dich-vu/sua-chua-nha", category: "dich-vu", title: "Sửa chữa nhà" },
  { href: "/dich-vu/xay-dung-phan-tho", category: "dich-vu", title: "Xây dựng phần thô" },
  { href: "/dich-vu/thiet-ke-nha", category: "dich-vu", title: "Thiết kế nhà" },
  { href: "/dich-vu/nang-tang-nha-pho", category: "dich-vu", title: "Nâng tầng nhà phố" },
  { href: "/dich-vu/hoan-thien-nha", category: "dich-vu", title: "Hoàn thiện nhà" },
  { href: "/dich-vu/khuyen-mai", category: "dich-vu", title: "Khuyến mại" },
  { href: "/cong-trinh/xay-nha", category: "cong-trinh", title: "Xây nhà" },
  { href: "/cong-trinh/sua-nha", category: "cong-trinh", title: "Sửa nhà" },
  { href: "/cong-trinh/thiet-ke-nha", category: "cong-trinh", title: "Thiết kế nhà" },
  { href: "/kinh-nghiem/cam-nang", category: "kinh-nghiem", title: "Cẩm nang xây nhà" },
  { href: "/kinh-nghiem/luat-xay-dung", category: "kinh-nghiem", title: "Luật xây dựng" },
  { href: "/kinh-nghiem/phong-thuy", category: "kinh-nghiem", title: "Phong thủy" },
];

function leafFromHref(href: string): string {
  return href.split("/").filter(Boolean).pop() ?? "";
}

function postMatchesSubSlug(post: { slug: string }, subSlug: string): boolean {
  return (
    post.slug === subSlug ||
    post.slug.startsWith(`${subSlug}-`) ||
    post.slug.startsWith(`${subSlug}--`)
  );
}

console.log("=== Kiểm tra bài viết vs menu ===\n");

let missing = 0;
for (const item of menuChildren) {
  const leaf = leafFromHref(item.href);
  const matches = seedPosts.filter(
    (p) => p.category === item.category && postMatchesSubSlug(p, leaf),
  );
  const status = matches.length > 0 ? "OK" : "THIẾU";
  if (status === "THIẾU") missing++;
  console.log(
    `${status.padEnd(6)} ${item.href.padEnd(34)} → ${matches.map((m) => m.slug).join(", ") || "(không có bài)"}`,
  );
}

console.log(`\nTổng mục menu con: ${menuChildren.length}`);
console.log(`Tổng bài seed: ${seedPosts.length}`);
console.log(`Thiếu bài: ${missing}`);
console.log(`Logo: /images/logo.png`);

if (missing === 0) {
  console.log("\n✓ Tất cả mục menu đều có bài viết khớp.");
}

process.exit(missing > 0 ? 1 : 0);

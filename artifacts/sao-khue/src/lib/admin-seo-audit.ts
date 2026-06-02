import type { Post } from "@workspace/api-client-react";
import { countWordsFromHtml, SEO_DESC_MAX, SEO_TITLE_MAX } from "@/lib/seo";

export type SeoLevel = "ok" | "warn" | "error";

export type PostSeoAudit = {
  postId: number;
  slug: string;
  title: string;
  category: string;
  score: number;
  level: SeoLevel;
  issues: string[];
};

export const STATIC_SEO_PAGES = [
  { path: "/", label: "Trang chủ" },
  { path: "/gioi-thieu", label: "Giới thiệu" },
  { path: "/dich-vu", label: "Dịch vụ" },
  { path: "/cong-trinh", label: "Công trình" },
  { path: "/tin-tuc", label: "Tin tức" },
  { path: "/bao-gia", label: "Báo giá" },
  { path: "/lien-he", label: "Liên hệ" },
] as const;

export function auditPostSeo(post: Post): PostSeoAudit {
  const issues: string[] = [];
  const metaTitle = (post.metaTitle ?? "").trim() || post.title.trim();
  const metaDesc = (post.metaDescription ?? "").trim() || (post.excerpt ?? "").trim();

  if (!post.imageUrl?.trim()) issues.push("Thiếu ảnh đại diện");
  if (!post.excerpt?.trim()) issues.push("Thiếu mô tả ngắn");
  if (metaTitle.length > SEO_TITLE_MAX) issues.push(`Meta title > ${SEO_TITLE_MAX} ký tự`);
  if (metaTitle.length < 20) issues.push("Meta title quá ngắn");
  if (metaDesc.length > SEO_DESC_MAX) issues.push(`Meta description > ${SEO_DESC_MAX} ký tự`);
  if (metaDesc.length < 80) issues.push("Meta description quá ngắn");
  if (!(post.metaKeywords ?? "").trim()) issues.push("Thiếu từ khóa SEO");
  const words = countWordsFromHtml(post.content ?? "");
  if (words < 300) issues.push(`Nội dung mỏng (${words} từ, nên ≥ 300)`);

  const level: SeoLevel =
    issues.length === 0 ? "ok" : issues.length <= 2 ? "warn" : "error";
  const score = Math.max(0, 100 - issues.length * 14);

  return {
    postId: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
    score,
    level,
    issues,
  };
}

export function summarizeSeoAudits(audits: PostSeoAudit[]) {
  const ok = audits.filter((a) => a.level === "ok").length;
  const warn = audits.filter((a) => a.level === "warn").length;
  const error = audits.filter((a) => a.level === "error").length;
  return { ok, warn, error, total: audits.length, needsWork: warn + error };
}

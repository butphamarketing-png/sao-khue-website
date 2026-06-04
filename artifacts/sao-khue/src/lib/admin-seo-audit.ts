import type { Post } from "@workspace/api-client-react";
import { auditRankMath, type RankMathAuditResult, type SeoLevel } from "@/lib/rank-math-audit";
import { getSiteOrigin } from "@/lib/seo";

export type { SeoLevel };

export type PostSeoAudit = {
  postId: number;
  slug: string;
  title: string;
  category: string;
  score: number;
  level: SeoLevel;
  issues: string[];
  checks: RankMathAuditResult["checks"];
  primaryKeyword: string;
  stats: RankMathAuditResult["stats"];
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

function siteHostFromOrigin(): string {
  try {
    return new URL(getSiteOrigin()).hostname;
  } catch {
    return "kientrucsaokhue.com";
  }
}

export function auditPostSeo(post: Post, allPosts?: Post[]): PostSeoAudit {
  const others = (allPosts ?? [])
    .filter((p) => p.id !== post.id)
    .map((p) => ({ id: p.id, slug: p.slug, metaKeywords: p.metaKeywords }));

  const result = auditRankMath(post, {
    otherPosts: others,
    siteHost: siteHostFromOrigin(),
  });

  return {
    postId: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
    score: result.score,
    level: result.level,
    issues: result.issues,
    checks: result.checks,
    primaryKeyword: result.primaryKeyword,
    stats: result.stats,
  };
}

export function summarizeSeoAudits(audits: PostSeoAudit[]) {
  const ok = audits.filter((a) => a.level === "ok").length;
  const warn = audits.filter((a) => a.level === "warn").length;
  const error = audits.filter((a) => a.level === "error").length;
  const avgScore =
    audits.length > 0
      ? Math.round(audits.reduce((s, a) => s + a.score, 0) / audits.length)
      : 0;
  return { ok, warn, error, total: audits.length, needsWork: warn + error, avgScore };
}

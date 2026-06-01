import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, ExternalLink, Pencil, Search, XCircle } from "lucide-react";
import type { Post } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Panel } from "@/components/admin/admin-ui";
import {
  auditPostSeo,
  STATIC_SEO_PAGES,
  summarizeSeoAudits,
  type PostSeoAudit,
  type SeoLevel,
} from "@/lib/admin-seo-audit";
import { getSiteOrigin } from "@/lib/seo";

type Filter = "all" | SeoLevel;

type Props = {
  posts: Post[];
  gscConfigured: boolean;
  gaConfigured: boolean;
  onEditPost: (post: Post) => void;
};

function LevelBadge({ level }: { level: SeoLevel }) {
  if (level === "ok") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Tốt
      </span>
    );
  }
  if (level === "warn") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
        <AlertTriangle className="h-3.5 w-3.5" />
        Cần chỉnh
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
      <XCircle className="h-3.5 w-3.5" />
      Yếu
    </span>
  );
}

export function AdminSeoPanel({ posts, gscConfigured, gaConfigured, onEditPost }: Props) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const audits = useMemo(() => posts.map(auditPostSeo), [posts]);
  const summary = useMemo(() => summarizeSeoAudits(audits), [audits]);
  const origin = getSiteOrigin();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return audits.filter((a) => {
      if (filter !== "all" && a.level !== filter) return false;
      if (!q) return true;
      return a.title.toLowerCase().includes(q) || a.slug.toLowerCase().includes(q);
    });
  }, [audits, filter, query]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard label="Bài đạt chuẩn" value={summary.ok} tone="emerald" />
        <StatCard label="Cần chỉnh nhẹ" value={summary.warn} tone="amber" />
        <StatCard label="SEO yếu" value={summary.error} tone="red" />
        <StatCard label="Tổng bài" value={summary.total} tone="slate" />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Panel>
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="text-lg font-bold text-slate-900">Trang tĩnh & công cụ</h3>
            <p className="mt-1 text-sm text-slate-500">
              Các URL được prerender — kiểm tra trên Google Search Console.
            </p>
          </div>
          <ul className="divide-y divide-slate-100 p-4">
            {STATIC_SEO_PAGES.map((page) => (
              <li key={page.path} className="flex flex-wrap items-center justify-between gap-2 py-3">
                <div>
                  <div className="font-semibold text-slate-800">{page.label}</div>
                  <div className="text-xs text-slate-500">{page.path}</div>
                </div>
                <a
                  href={`${origin}${page.path === "/" ? "" : page.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#17579d] hover:underline"
                >
                  Xem <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-4">
            <Button type="button" variant="outline" size="sm" className="rounded-lg" asChild>
              <a href={`${origin}/sitemap.xml`} target="_blank" rel="noopener noreferrer">
                Sitemap.xml
              </a>
            </Button>
            <Button type="button" variant="outline" size="sm" className="rounded-lg" asChild>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
              >
                Search Console {gscConfigured ? "✓" : "— chưa cấu hình"}
              </a>
            </Button>
            <Button type="button" variant="outline" size="sm" className="rounded-lg" asChild>
              <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                Analytics {gaConfigured ? "✓" : "— chưa GA"}
              </a>
            </Button>
          </div>
        </Panel>

        <Panel>
          <div className="border-b border-slate-200 px-6 py-4">
            <h3 className="text-lg font-bold text-slate-900">Gợi ý nhanh</h3>
          </div>
          <ul className="list-disc space-y-2 px-6 py-5 text-sm leading-relaxed text-slate-600">
            <li>Ảnh đại diện <strong>1200×630</strong>, meta title ≤ 60 ký tự, description 80–160.</li>
            <li>Mỗi bài nên ≥ 300 từ, có H2/H3, alt ảnh trong nội dung.</li>
            <li>Slug khớp mục menu con (dịch vụ / công trình) để URL chuẩn SEO.</li>
            <li>
              {summary.needsWork > 0
                ? `Còn ${summary.needsWork} bài cần tối ưu — bấm Sửa trong bảng bên dưới.`
                : "Tất cả bài đã đạt checklist cơ bản."}
            </li>
          </ul>
        </Panel>
      </div>

      <Panel>
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 px-6 py-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Kiểm tra SEO từng bài</h3>
            <p className="mt-1 text-sm text-slate-500">Điểm tự động theo meta, ảnh và độ dài nội dung.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", "error", "warn", "ok"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  filter === f
                    ? "bg-[#17579d] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f === "all" ? "Tất cả" : f === "ok" ? "Tốt" : f === "warn" ? "Cảnh báo" : "Yếu"}
              </button>
            ))}
          </div>
        </div>

        <div className="border-b border-slate-100 px-6 py-3">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              className="h-10 pl-10"
              placeholder="Tìm bài theo tiêu đề hoặc slug…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-3">Bài viết</th>
                <th className="px-4 py-3">Điểm</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3">Vấn đề</th>
                <th className="px-6 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((row) => (
                <AuditRow key={row.postId} audit={row} posts={posts} onEditPost={onEditPost} />
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p className="p-8 text-center text-sm text-slate-500">Không có bài nào khớp bộ lọc.</p>
          )}
        </div>
      </Panel>
    </div>
  );
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "emerald" | "amber" | "red" | "slate";
}) {
  const colors = {
    emerald: "text-emerald-700 bg-emerald-50",
    amber: "text-amber-800 bg-amber-50",
    red: "text-red-700 bg-red-50",
    slate: "text-slate-800 bg-slate-100",
  };
  return (
    <div className={`rounded-2xl border border-slate-200 p-4 ${colors[tone]}`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide opacity-80">{label}</div>
    </div>
  );
}

function AuditRow({
  audit,
  posts,
  onEditPost,
}: {
  audit: PostSeoAudit;
  posts: Post[];
  onEditPost: (post: Post) => void;
}) {
  const post = posts.find((p) => p.id === audit.postId);
  return (
    <tr className="hover:bg-slate-50/80">
      <td className="px-6 py-4">
        <div className="font-semibold text-slate-900">{audit.title}</div>
        <div className="text-xs text-slate-500">/{audit.slug}</div>
      </td>
      <td className="px-4 py-4 font-bold text-slate-800">{audit.score}</td>
      <td className="px-4 py-4">
        <LevelBadge level={audit.level} />
      </td>
      <td className="max-w-xs px-4 py-4 text-xs text-slate-600">
        {audit.issues.length ? audit.issues.join(" · ") : "—"}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" size="sm" className="rounded-lg" asChild>
            <a href={`/bai-viet/${audit.slug}`} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-3.5 w-3.5" />
              Xem
            </a>
          </Button>
          {post && (
            <Button
              type="button"
              size="sm"
              className="rounded-lg bg-[#17579d] hover:bg-[#134a85]"
              onClick={() => onEditPost(post)}
            >
              <Pencil className="mr-1 h-3.5 w-3.5" />
              Sửa
            </Button>
          )}
        </div>
      </td>
    </tr>
  );
}

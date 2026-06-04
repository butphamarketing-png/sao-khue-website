import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import {
  auditRankMath,
  checksToChecklistItems,
  getSeoSectionLabel,
  groupChecksBySection,
  type PostSeoInput,
  type RankMathAuditContext,
  type SeoCheck,
  type SeoCheckSection,
} from "@/lib/rank-math-audit";

type Props = {
  post: PostSeoInput;
  context?: RankMathAuditContext;
  compact?: boolean;
};

function StatusIcon({ status }: { status: SeoCheck["status"] }) {
  if (status === "pass") return <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />;
  if (status === "warn") return <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600" />;
  return <XCircle className="h-4 w-4 shrink-0 text-red-600" />;
}

function scoreTone(score: number): string {
  if (score >= 82) return "text-emerald-600";
  if (score >= 55) return "text-amber-600";
  return "text-red-600";
}

function scoreRing(score: number): string {
  if (score >= 82) return "border-emerald-200 bg-emerald-50";
  if (score >= 55) return "border-amber-200 bg-amber-50";
  return "border-red-200 bg-red-50";
}

function SectionBlock({
  section,
  checks,
}: {
  section: SeoCheckSection;
  checks: SeoCheck[];
}) {
  if (!checks.length) return null;
  const pass = checks.filter((c) => c.status === "pass").length;
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-600">
          {getSeoSectionLabel(section)}
        </span>
        <span className="text-[10px] font-semibold text-slate-500">
          {pass}/{checks.length}
        </span>
      </div>
      <ul className="space-y-1.5">
        {checks.map((c) => (
          <li key={c.id} className="flex gap-2 text-xs leading-snug text-slate-700">
            <StatusIcon status={c.status} />
            <span>
              <span className="font-medium">{c.label}</span>
              {c.detail ? (
                <span className="block text-[11px] text-slate-500">{c.detail}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RankMathSeoPanel({ post, context, compact }: Props) {
  const audit = auditRankMath(post, context);
  const grouped = groupChecksBySection(audit.checks);

  if (compact) {
    const items = checksToChecklistItems(audit.checks);
    const done = items.filter((i) => i.done).length;
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 ${scoreRing(audit.score)}`}
          >
            <span className={`text-lg font-bold leading-none ${scoreTone(audit.score)}`}>
              {audit.score}
            </span>
            <span className="text-[9px] font-semibold text-slate-500">/100</span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              Rank Math SEO
            </div>
            <div className="mt-0.5 text-sm font-semibold text-slate-800">
              {done}/{items.length} tiêu chí đạt
            </div>
            {audit.primaryKeyword ? (
              <div className="mt-1 truncate text-xs text-slate-500">
                Từ khóa chính: <strong>{audit.primaryKeyword}</strong>
              </div>
            ) : (
              <div className="mt-1 text-xs text-amber-700">Chưa nhập từ khóa SEO</div>
            )}
          </div>
        </div>
        {audit.stats.wordCount > 0 && (
          <p className="mt-3 text-[11px] text-slate-500">
            {audit.stats.wordCount} từ
            {audit.primaryKeyword
              ? ` · Mật độ "${audit.primaryKeyword}": ${audit.stats.keywordDensityPct}%`
              : null}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 ${scoreRing(audit.score)}`}
        >
          <span className={`text-xl font-bold leading-none ${scoreTone(audit.score)}`}>
            {audit.score}
          </span>
          <span className="text-[10px] font-semibold text-slate-500">SEO</span>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            Phân tích Rank Math
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {audit.primaryKeyword ? (
              <>
                Từ khóa chính: <strong className="text-slate-900">{audit.primaryKeyword}</strong>
              </>
            ) : (
              "Thêm từ khóa SEO (cụm đầu tiên = focus keyword)."
            )}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {audit.stats.wordCount} từ · Slug {audit.stats.slugLength} ký tự · Meta{" "}
            {audit.stats.metaTitleLength}/{audit.stats.metaDescLength} ký tự
          </p>
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <SectionBlock section="basic" checks={grouped.basic} />
        <SectionBlock section="additional" checks={grouped.additional} />
        <SectionBlock section="title" checks={grouped.title} />
        <SectionBlock section="content" checks={grouped.content} />
      </div>
    </div>
  );
}

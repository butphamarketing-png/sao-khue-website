import { useEffect, useMemo, useState } from "react";
import { BarChart3, ExternalLink, Globe, Inbox, Loader2, Newspaper, SearchCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/admin/admin-ui";
import { fetchAnalyticsTraffic, type AnalyticsDailyRow, type AnalyticsTrafficResponse } from "@/lib/analytics-api";
import { parseGaMeasurementId } from "@/lib/google-integrations";
import type { AdminView } from "@/components/admin/admin-views";

type Props = {
  gaTrackingRaw: string;
  postCount: number;
  seoNeedsWork: number;
  inboxUnread: number;
  onNavigate: (view: AdminView) => void;
};

function formatNumber(n: number): string {
  return n.toLocaleString("vi-VN");
}

function ShortcutCard({
  icon: Icon,
  title,
  desc,
  gradient,
  onClick,
}: {
  icon: typeof Newspaper;
  title: string;
  desc: string;
  gradient: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl border border-violet-100/80 bg-white p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-violet-500/20 transition group-hover:scale-105 ${gradient}`}
      >
        <Icon size={22} />
      </div>
      <div>
        <div className="font-bold text-slate-900 group-hover:text-violet-700">{title}</div>
        <div className="text-xs text-slate-500">{desc}</div>
      </div>
    </button>
  );
}

function TrafficStatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-violet-100 bg-white px-4 py-3 text-center shadow-sm">
      <div className="text-lg font-black text-violet-700">{value}</div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}

function TrafficChart({ daily }: { daily: AnalyticsDailyRow[] }) {
  const maxViews = Math.max(...daily.map((d) => d.pageViews), 1);

  return (
    <div className="space-y-3">
      <div className="flex h-48 items-end justify-between gap-2 rounded-xl border border-violet-100 bg-gradient-to-t from-violet-50/80 to-white px-3 pb-3 pt-6">
        {daily.map((row) => {
          const heightPct = Math.max(8, Math.round((row.pageViews / maxViews) * 100));
          return (
            <div key={row.date} className="flex min-w-0 flex-1 flex-col items-center gap-1">
              <span className="text-[10px] font-semibold text-violet-700">{row.pageViews > 0 ? row.pageViews : ""}</span>
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-violet-600 to-violet-400 transition-all"
                style={{ height: `${heightPct}%`, minHeight: row.pageViews > 0 ? "8px" : "4px", opacity: row.pageViews > 0 ? 1 : 0.25 }}
                title={`${row.label}: ${row.pageViews} lượt xem · ${row.users} người dùng · ${row.sessions} phiên`}
              />
              <span className="truncate text-[9px] font-medium text-slate-500">{row.label.split(" ")[0]}</span>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-slate-500">
        Biểu đồ <strong>lượt xem trang</strong> theo ngày — dữ liệu từ Google Analytics 4 (7 ngày gần nhất).
      </p>
    </div>
  );
}

export function AdminDashboardExtras({
  gaTrackingRaw,
  postCount,
  seoNeedsWork,
  inboxUnread,
  onNavigate,
}: Props) {
  const gaId = parseGaMeasurementId(gaTrackingRaw);
  const [traffic, setTraffic] = useState<AnalyticsTrafficResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    void fetchAnalyticsTraffic(7)
      .then((data) => {
        if (!cancelled) setTraffic(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const periodLabel = useMemo(() => {
    if (!traffic || !traffic.configured) return "";
    const start = traffic.period.start;
    const end = traffic.period.end;
    const fmt = (s: string) => `${s.slice(6, 8)}/${s.slice(4, 6)}/${s.slice(0, 4)}`;
    return `${fmt(start)} – ${fmt(end)}`;
  }, [traffic]);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <Panel>
        <div className="border-b border-violet-50 bg-gradient-to-r from-violet-50/50 to-white px-6 py-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <BarChart3 className="h-5 w-5 text-violet-600" />
            Thống kê truy cập
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Lượt xem, người dùng và phiên truy cập từ Google Analytics 4.
            {gaId ? (
              <>
                {" "}
                Mã đo: <strong className="text-violet-700">{gaId}</strong>
              </>
            ) : null}
          </p>
        </div>
        <div className="space-y-4 p-6">
          {loading ? (
            <div className="flex h-48 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-violet-200 bg-violet-50/30">
              <Loader2 className="h-8 w-8 animate-spin text-violet-500" />
              <p className="text-sm text-slate-500">Đang tải dữ liệu Analytics…</p>
            </div>
          ) : traffic?.configured ? (
            <>
              <div className="grid grid-cols-3 gap-3">
                <TrafficStatPill label="Lượt xem" value={formatNumber(traffic.totals.pageViews)} />
                <TrafficStatPill label="Người dùng" value={formatNumber(traffic.totals.users)} />
                <TrafficStatPill label="Phiên" value={formatNumber(traffic.totals.sessions)} />
              </div>
              {periodLabel ? (
                <p className="text-center text-xs font-medium text-slate-400">{periodLabel}</p>
              ) : null}
              <TrafficChart daily={traffic.daily} />
            </>
          ) : (
            <>
              <div className="flex h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-amber-200 bg-amber-50/50 px-4 text-center">
                <Users className="h-8 w-8 text-amber-500/70" />
                <p className="text-sm font-medium text-slate-700">Chưa hiển thị được dữ liệu truy cập</p>
                <p className="max-w-md text-xs leading-relaxed text-slate-500">
                  {traffic?.message ??
                    "Cấu hình GA4_PROPERTY_ID và GOOGLE_SERVICE_ACCOUNT_JSON trên server để xem số liệu thật tại đây."}
                </p>
              </div>
              {!gaId ? (
                <p className="text-xs text-slate-500">
                  Bước 1: Lưu mã đo Google Analytics (G-…) ở menu <strong>Google &amp; Maps</strong>.
                </p>
              ) : null}
            </>
          )}

          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              className="rounded-xl border-violet-200 text-violet-700 hover:bg-violet-50"
              onClick={() => onNavigate("settings-google")}
            >
              <Globe className="mr-2 h-4 w-4" />
              Cấu hình Google Analytics
            </Button>
            {gaId ? (
              <Button
                type="button"
                className="rounded-xl border-0 text-white hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
                asChild
              >
                <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Mở Analytics ({gaId})
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Panel>

      <Panel>
        <div className="border-b border-violet-50 bg-gradient-to-r from-violet-50/50 to-white px-6 py-4">
          <h3 className="text-xl font-bold text-slate-900">Lối tắt quản lý</h3>
        </div>
        <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2">
          <ShortcutCard
            icon={Newspaper}
            title="Quản lý bài viết"
            desc={`${postCount} bài — tin tức, dịch vụ`}
            gradient="bg-gradient-to-br from-violet-600 to-indigo-600"
            onClick={() => onNavigate("posts")}
          />
          <ShortcutCard
            icon={SearchCheck}
            title="SEO tổng quan"
            desc={seoNeedsWork > 0 ? `${seoNeedsWork} bài cần tối ưu` : "Tất cả bài ổn"}
            gradient="bg-gradient-to-br from-purple-600 to-violet-600"
            onClick={() => onNavigate("settings-seo")}
          />
          <ShortcutCard
            icon={Inbox}
            title="Hộp thư liên hệ"
            desc={inboxUnread > 0 ? `${inboxUnread} yêu cầu mới` : "Không có tin mới"}
            gradient="bg-gradient-to-br from-fuchsia-600 to-violet-600"
            onClick={() => onNavigate("contact-inbox")}
          />
          <ShortcutCard
            icon={Globe}
            title="Google & Maps"
            desc="Analytics, Search Console, bản đồ"
            gradient="bg-gradient-to-br from-indigo-600 to-violet-700"
            onClick={() => onNavigate("settings-google")}
          />
        </div>
      </Panel>
    </div>
  );
}

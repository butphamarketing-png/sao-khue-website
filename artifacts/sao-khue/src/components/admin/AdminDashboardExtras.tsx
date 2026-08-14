import { useEffect, useMemo, useState } from "react";
import { BarChart3, ExternalLink, Globe, Inbox, Loader2, Newspaper, RefreshCw, SearchCheck, ShieldAlert, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/admin/admin-ui";
import { fetchAnalyticsTraffic, type AnalyticsDailyRow, type AnalyticsTrafficResponse } from "@/lib/analytics-api";
import { fetchSiteVisits, type SiteVisitRow, type SiteVisitsResponse } from "@/lib/site-visits-api";
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

function formatVisitTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
}

function locationLabel(row: SiteVisitRow): string {
  const parts = [row.city, row.region, row.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "Không xác định";
}

function VisitorTable() {
  const [data, setData] = useState<SiteVisitsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [onlySuspicious, setOnlySuspicious] = useState(false);

  async function load() {
    setLoading(true);
    const next = await fetchSiteVisits(31);
    setData(next);
    setLoading(false);
  }

  useEffect(() => {
    void load();
  }, []);

  const rows = useMemo(() => {
    const all = data?.rows ?? [];
    return onlySuspicious ? all.filter((r) => r.level === "nghi ngờ") : all;
  }, [data, onlySuspicious]);

  const monthLabel = useMemo(() => {
    const now = new Date();
    return `Từ ngày 1 đến hết tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`;
  }, []);

  return (
    <Panel>
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-violet-50 bg-gradient-to-r from-violet-50/50 to-white px-6 py-4">
        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <Users className="h-5 w-5 text-violet-600" />
            Người truy cập và IP
          </h3>
          <p className="mt-1 text-sm text-slate-500">{monthLabel}. Cột Lead hiện khi IP đó đã gửi form liên hệ.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            size="sm"
            variant={onlySuspicious ? "outline" : "default"}
            className={onlySuspicious ? "rounded-lg" : "rounded-lg bg-violet-600 hover:bg-violet-700"}
            onClick={() => setOnlySuspicious(false)}
          >
            Tất cả
          </Button>
          <Button
            type="button"
            size="sm"
            variant={onlySuspicious ? "default" : "outline"}
            className={onlySuspicious ? "rounded-lg bg-amber-600 hover:bg-amber-700" : "rounded-lg"}
            onClick={() => setOnlySuspicious(true)}
          >
            Chỉ nghi ngờ
          </Button>
          <Button type="button" size="sm" variant="outline" className="rounded-lg" onClick={() => void load()}>
            <RefreshCw className="mr-1 h-3.5 w-3.5" />
            Làm mới
          </Button>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <TrafficStatPill label="Lượt ghi nhận" value={formatNumber(data?.totals.visits ?? 0)} />
          <TrafficStatPill label="IP khác nhau" value={formatNumber(data?.totals.uniqueIps ?? 0)} />
          <div className="rounded-xl border border-amber-100 bg-amber-50/60 px-4 py-3 text-center shadow-sm">
            <div className="flex items-center justify-center gap-1 text-lg font-black text-amber-700">
              <ShieldAlert className="h-4 w-4" />
              {formatNumber(data?.totals.suspicious ?? 0)}
            </div>
            <div className="text-[11px] font-medium uppercase tracking-wide text-slate-500">IP nghi ngờ</div>
          </div>
        </div>

        {loading ? (
          <div className="flex h-40 items-center justify-center gap-2 text-sm text-slate-500">
            <Loader2 className="h-5 w-5 animate-spin text-violet-500" />
            Đang tải nhật ký truy cập…
          </div>
        ) : rows.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500">
            Chưa có lượt truy cập ghi nhận. Bảng sẽ hiện sau khi khách vào website (trừ trang admin).
          </p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-3 py-2">IP</th>
                  <th className="px-3 py-2">Địa điểm</th>
                  <th className="px-3 py-2">Mức</th>
                  <th className="px-3 py-2">Lượt</th>
                  <th className="px-3 py-2">Lead</th>
                  <th className="px-3 py-2">Lần cuối</th>
                  <th className="px-3 py-2">Trang</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.ip}-${row.lastSeen}`} className="border-t border-slate-100">
                    <td className="whitespace-nowrap px-3 py-2 font-mono text-xs text-slate-700">{row.ip}</td>
                    <td className="px-3 py-2 text-slate-600">{locationLabel(row)}</td>
                    <td className="px-3 py-2">
                      <span
                        className={
                          row.level === "nghi ngờ"
                            ? "rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800"
                            : "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800"
                        }
                      >
                        {row.level}
                      </span>
                    </td>
                    <td className="px-3 py-2 font-semibold text-slate-800">{row.visits}</td>
                    <td className="max-w-[180px] truncate px-3 py-2 text-violet-700">{row.lead || "—"}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-500">{formatVisitTime(row.lastSeen)}</td>
                    <td className="max-w-[220px] truncate px-3 py-2 font-mono text-xs text-slate-500" title={row.lastPath}>
                      {row.lastPath}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Panel>
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
    <div className="space-y-6">
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
    <VisitorTable />
    </div>
  );
}

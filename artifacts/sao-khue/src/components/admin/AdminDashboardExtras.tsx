import { BarChart3, ExternalLink, Globe, Inbox, Newspaper, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/admin/admin-ui";
import { parseGaMeasurementId } from "@/lib/google-integrations";
import type { AdminView } from "@/components/admin/AdminShell";

type Props = {
  gaTrackingRaw: string;
  postCount: number;
  seoNeedsWork: number;
  inboxUnread: number;
  onNavigate: (view: AdminView) => void;
};

export function AdminDashboardExtras({
  gaTrackingRaw,
  postCount,
  seoNeedsWork,
  inboxUnread,
  onNavigate,
}: Props) {
  const gaId = parseGaMeasurementId(gaTrackingRaw);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <Panel>
        <div className="border-b border-slate-200 px-6 py-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <BarChart3 className="h-5 w-5 text-[#17579d]" />
            Thống kê truy cập
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Lượt xem thật theo ngày/tháng xem trên Google Analytics (sau khi cấu hình mã GA).
          </p>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex h-48 items-end justify-between gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 pb-4 pt-8">
            {[40, 65, 90, 55, 120, 85, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-[#17579d]/20"
                style={{ height: `${h}%` }}
                title="Minh họa — dữ liệu thật trên Analytics"
              />
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Biểu đồ minh họa. Để xem số liệu chính xác, mở Google Analytics sau khi lưu mã đo ở menu{" "}
            <strong>Google &amp; Maps</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              className="rounded-lg"
              onClick={() => onNavigate("settings-google")}
            >
              <Globe className="mr-2 h-4 w-4" />
              Cấu hình Google Analytics
            </Button>
            {gaId ? (
              <Button type="button" className="rounded-lg bg-emerald-600 hover:bg-emerald-700" asChild>
                <a
                  href="https://analytics.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Mở Analytics ({gaId})
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Panel>

      <Panel>
        <div className="border-b border-slate-200 px-6 py-4">
          <h3 className="text-xl font-bold text-slate-900">Lối tắt quản lý</h3>
        </div>
        <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onNavigate("posts")}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-[#17579d] hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-white">
              <Newspaper size={22} />
            </div>
            <div>
              <div className="font-bold text-slate-900">Quản lý bài viết</div>
              <div className="text-xs text-slate-500">{postCount} bài — tin tức, dịch vụ</div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => onNavigate("settings-seo")}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-[#17579d] hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-white">
              <SearchCheck size={22} />
            </div>
            <div>
              <div className="font-bold text-slate-900">SEO tổng quan</div>
              <div className="text-xs text-slate-500">
                {seoNeedsWork > 0 ? `${seoNeedsWork} bài cần tối ưu` : "Tất cả bài ổn"}
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => onNavigate("contact-inbox")}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-[#17579d] hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white">
              <Inbox size={22} />
            </div>
            <div>
              <div className="font-bold text-slate-900">Hộp thư liên hệ</div>
              <div className="text-xs text-slate-500">
                {inboxUnread > 0 ? `${inboxUnread} yêu cầu mới` : "Không có tin mới"}
              </div>
            </div>
          </button>
          <button
            type="button"
            onClick={() => onNavigate("settings-google")}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-[#17579d] hover:shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Globe size={22} />
            </div>
            <div>
              <div className="font-bold text-slate-900">Google &amp; Maps</div>
              <div className="text-xs text-slate-500">Analytics, Search Console, bản đồ</div>
            </div>
          </button>
        </div>
      </Panel>
    </div>
  );
}

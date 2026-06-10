import { BarChart3, ExternalLink, Globe, Inbox, Newspaper, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/admin/admin-ui";
import { parseGaMeasurementId } from "@/lib/google-integrations";
import type { AdminView } from "@/components/admin/admin-views";

type Props = {
  gaTrackingRaw: string;
  postCount: number;
  seoNeedsWork: number;
  inboxUnread: number;
  onNavigate: (view: AdminView) => void;
};

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
        <div className="border-b border-violet-50 bg-gradient-to-r from-violet-50/50 to-white px-6 py-4">
          <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900">
            <BarChart3 className="h-5 w-5 text-violet-600" />
            Thống kê truy cập
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Lượt xem thật theo ngày/tháng xem trên Google Analytics (sau khi cấu hình mã GA).
          </p>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex h-48 items-end justify-between gap-2 rounded-xl border border-dashed border-violet-200 bg-gradient-to-t from-violet-50/80 to-white px-4 pb-4 pt-8">
            {[40, 65, 90, 55, 120, 85, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-violet-600/30 to-violet-400/50"
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

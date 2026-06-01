import { ExternalLink } from "lucide-react";
import type { AdminView } from "./AdminShell";

type SiteMapItem = {
  label: string;
  view: AdminView;
  desc: string;
};

const siteMapGroups: { title: string; items: SiteMapItem[] }[] = [
  {
    title: "Nội dung",
    items: [
      { label: "Bài viết", view: "posts", desc: "Tất cả bài viết & SEO" },
      { label: "SEO tổng quan", view: "settings-seo", desc: "Kiểm tra meta, ảnh, độ dài bài" },
      { label: "Hộp thư liên hệ", view: "contact-inbox", desc: "Form báo giá từ website" },
      { label: "Trang danh mục", view: "settings-categories", desc: "Intro /dich-vu, /cong-trinh..." },
      { label: "Menu website", view: "settings-menu", desc: "Header, footer, menu con" },
      { label: "Banner trang", view: "settings-banners", desc: "/bao-gia, /lien-he, 404" },
    ],
  },
  {
    title: "Trang chủ — Hero & giới thiệu",
    items: [
      { label: "Slideshow Hero", view: "settings-hero", desc: "3 slide đầu trang" },
      { label: "Số liệu", view: "settings-stats", desc: "500+ công trình..." },
      { label: "Thông tin công ty", view: "settings-about", desc: "Block giới thiệu" },
      { label: "Cam kết", view: "settings-commitments", desc: "9 cam kết vàng" },
    ],
  },
  {
    title: "Trang chủ — Báo giá & liên hệ",
    items: [
      { label: "Gói báo giá", view: "settings-quote", desc: "4 vòng tròn dịch vụ" },
      { label: "Bảng giá", view: "settings-pricing", desc: "Phần thô / trọn gói" },
      { label: "Tính chi phí", view: "settings-calculator", desc: "Công thức & đơn giá" },
      { label: "Form liên hệ", view: "settings-contact", desc: "Nội dung & form CTA" },
    ],
  },
  {
    title: "Trang chủ — Tin cậy & nội dung",
    items: [
      { label: "Quy trình", view: "settings-process", desc: "6 bước làm việc" },
      { label: "Video", view: "settings-video", desc: "YouTube / Vimeo trang chủ" },
      { label: "Đánh giá", view: "settings-testimonials", desc: "Review khách hàng" },
      { label: "FAQ", view: "settings-faq", desc: "Câu hỏi thường gặp" },
      { label: "Tiêu đề sections", view: "settings-sections", desc: "Tiêu đề + banner CTA" },
      { label: "Bài nổi bật", view: "settings-featured", desc: "Dịch vụ, công trình, tin tức trang chủ" },
    ],
  },
  {
    title: "Hệ thống",
    items: [
      { label: "Google & Maps", view: "settings-google", desc: "Analytics, Search Console, bản đồ" },
      { label: "Thông tin website", view: "settings-general", desc: "Logo, hotline, slogan" },
    ],
  },
];

type Props = {
  onNavigate: (view: AdminView) => void;
  postCount: number;
};

export function AdminSiteMap({ onNavigate, postCount }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Bản đồ quản lý website</h3>
          <p className="mt-1 text-sm text-slate-500">
            {postCount} bài viết · Chọn khu vực để chỉnh sửa
          </p>
        </div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
        >
          <ExternalLink size={16} />
          Xem website
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 p-6 lg:grid-cols-2">
        {siteMapGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {group.title}
            </h4>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item.view}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.view)}
                    className="flex w-full items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-left transition hover:border-primary/30 hover:bg-white hover:shadow-sm"
                  >
                    <div>
                      <div className="font-semibold text-slate-800">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                    <span className="text-xs font-bold text-primary">Sửa →</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState, type ReactNode, type ComponentType } from "react";
import {
  BookOpen,
  Building2,
  Calculator,
  FileText,
  Globe,
  HelpCircle,
  ImagePlus,
  LayoutDashboard,
  LayoutGrid,
  Layers3,
  ListOrdered,
  LogOut,
  Menu,
  MessageSquareQuote,
  BarChart3,
  Newspaper,
  Settings2,
  ShieldCheck,
  Mail,
  CircleDollarSign,
  Type,
  PlayCircle,
  X,
  Navigation,
  PanelTop,
  Star,
  Inbox,
  SearchCheck,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { SidebarButton, SidebarGroupBlock } from "./admin-ui";

export type AdminView =
  | "dashboard"
  | "posts"
  | "settings-general"
  | "settings-google"
  | "settings-hero"
  | "settings-about"
  | "settings-commitments"
  | "settings-pricing"
  | "settings-calculator"
  | "settings-stats"
  | "settings-testimonials"
  | "settings-faq"
  | "settings-process"
  | "settings-video"
  | "settings-categories"
  | "settings-sections"
  | "settings-quote"
  | "settings-contact"
  | "settings-menu"
  | "settings-banners"
  | "settings-featured"
  | "settings-seo"
  | "contact-inbox";

type SidebarGroup = "dashboard" | "posts" | "homepage" | "settings" | "tools";

type Props = {
  userLabel: string;
  view: AdminView;
  setView: (view: AdminView) => void;
  expandedGroup: Record<SidebarGroup, boolean>;
  toggleGroup: (group: SidebarGroup) => void;
  logout: () => void;
  inboxUnreadCount?: number;
  children: ReactNode;
};

export function AdminShell({
  userLabel,
  view,
  setView,
  expandedGroup,
  toggleGroup,
  logout,
  inboxUnreadCount = 0,
  children,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <div className="flex-1 space-y-2 overflow-y-auto px-3 py-4">
      <SidebarGroupBlock
        title="Bảng điều khiển"
        icon={LayoutDashboard}
        open={expandedGroup.dashboard}
        onToggle={() => toggleGroup("dashboard")}
      >
        <SidebarButton
          active={view === "dashboard"}
          onClick={() => { setView("dashboard"); setMobileOpen(false); }}
          icon={LayoutDashboard}
          label="Tổng quan"
        />
      </SidebarGroupBlock>

      <SidebarGroupBlock
        title="Quản lý bài viết"
        icon={Newspaper}
        open={expandedGroup.posts}
        onToggle={() => toggleGroup("posts")}
      >
        <SidebarButton
          active={view === "posts"}
          onClick={() => { setView("posts"); setMobileOpen(false); }}
          icon={FileText}
          label="Tất cả bài viết"
        />
        <SidebarButton
          active={view === "contact-inbox"}
          onClick={() => { setView("contact-inbox"); setMobileOpen(false); }}
          icon={Inbox}
          label="Hộp thư liên hệ"
          badge={inboxUnreadCount}
        />
      </SidebarGroupBlock>

      <SidebarGroupBlock
        title="Trang chủ"
        icon={ImagePlus}
        open={expandedGroup.homepage}
        onToggle={() => toggleGroup("homepage")}
      >
        <NavItem view={view} target="settings-hero" setView={setView} setMobileOpen={setMobileOpen} icon={ImagePlus} label="Slideshow / Hero" />
        <NavItem view={view} target="settings-about" setView={setView} setMobileOpen={setMobileOpen} icon={Building2} label="Thông tin công ty" />
        <NavItem view={view} target="settings-commitments" setView={setView} setMobileOpen={setMobileOpen} icon={ShieldCheck} label="Cam kết" />
        <NavItem view={view} target="settings-pricing" setView={setView} setMobileOpen={setMobileOpen} icon={Layers3} label="Bảng báo giá" />
        <NavItem view={view} target="settings-quote" setView={setView} setMobileOpen={setMobileOpen} icon={CircleDollarSign} label="Gói báo giá" />
        <NavItem view={view} target="settings-stats" setView={setView} setMobileOpen={setMobileOpen} icon={BarChart3} label="Số liệu" />
        <NavItem view={view} target="settings-testimonials" setView={setView} setMobileOpen={setMobileOpen} icon={MessageSquareQuote} label="Đánh giá" />
        <NavItem view={view} target="settings-faq" setView={setView} setMobileOpen={setMobileOpen} icon={HelpCircle} label="FAQ" />
        <NavItem view={view} target="settings-process" setView={setView} setMobileOpen={setMobileOpen} icon={ListOrdered} label="Quy trình" />
        <NavItem view={view} target="settings-video" setView={setView} setMobileOpen={setMobileOpen} icon={PlayCircle} label="Video" />
        <NavItem view={view} target="settings-sections" setView={setView} setMobileOpen={setMobileOpen} icon={Type} label="Tiêu đề sections" />
        <NavItem view={view} target="settings-featured" setView={setView} setMobileOpen={setMobileOpen} icon={Star} label="Bài nổi bật" />
        <NavItem view={view} target="settings-contact" setView={setView} setMobileOpen={setMobileOpen} icon={Mail} label="Form liên hệ" />
      </SidebarGroupBlock>

      <SidebarGroupBlock
        title="Nội dung trang"
        icon={LayoutGrid}
        open={expandedGroup.settings}
        onToggle={() => toggleGroup("settings")}
      >
        <NavItem view={view} target="settings-categories" setView={setView} setMobileOpen={setMobileOpen} icon={LayoutGrid} label="Trang danh mục" />
        <NavItem view={view} target="settings-menu" setView={setView} setMobileOpen={setMobileOpen} icon={Navigation} label="Menu website" />
        <NavItem view={view} target="settings-banners" setView={setView} setMobileOpen={setMobileOpen} icon={PanelTop} label="Banner trang" />
        <NavItem view={view} target="settings-seo" setView={setView} setMobileOpen={setMobileOpen} icon={SearchCheck} label="SEO tổng quan" />
        <NavItem view={view} target="settings-google" setView={setView} setMobileOpen={setMobileOpen} icon={Globe} label="Google & Maps" />
        <NavItem view={view} target="settings-general" setView={setView} setMobileOpen={setMobileOpen} icon={Globe} label="Thông tin website" />
      </SidebarGroupBlock>

      <SidebarGroupBlock
        title="Công cụ tính toán"
        icon={Calculator}
        open={expandedGroup.tools}
        onToggle={() => toggleGroup("tools")}
      >
        <NavItem view={view} target="settings-calculator" setView={setView} setMobileOpen={setMobileOpen} icon={Calculator} label="Bảng tính giá" />
      </SidebarGroupBlock>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden w-[272px] shrink-0 flex-col bg-gradient-to-b from-slate-900 via-primary to-[#0a3d6b] text-white xl:flex">
          <SidebarBrand />
          {nav}
          <SidebarFooter />
        </aside>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <aside className="absolute left-0 top-0 flex h-full w-[280px] flex-col bg-gradient-to-b from-slate-900 via-primary to-[#0a3d6b] text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                <BrandLogo alt="Sao Khuê" className="h-10 rounded bg-white p-1 object-contain" />
                <button type="button" onClick={() => setMobileOpen(false)} className="rounded-lg p-2 hover:bg-white/10">
                  <X size={20} />
                </button>
              </div>
              {nav}
              <SidebarFooter />
            </aside>
          </div>
        )}

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 px-4 py-4 shadow-sm backdrop-blur-md md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileOpen(true)}
                  className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-50 xl:hidden"
                  aria-label="Mở menu"
                >
                  <Menu size={20} />
                </button>
                <div>
                  <p className="text-sm text-slate-500">Xin chào, {userLabel}!</p>
                  <h1 className="text-xl font-bold text-slate-900 md:text-2xl">Bảng quản trị</h1>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
                >
                  <Globe size={16} />
                  Xem website
                </a>
                <button
                  onClick={logout}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
                >
                  <LogOut size={16} />
                  Đăng xuất
                </button>
              </div>
            </div>
          </header>

          <div className="p-4 md:p-6 xl:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

function SidebarBrand() {
  return (
    <div className="border-b border-white/10 px-5 py-6">
      <BrandLogo alt="Sao Khuê" className="mb-4 h-12 rounded-lg bg-white p-1.5 object-contain" />
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Sao Khuê CMS</p>
      <p className="mt-1 text-lg font-bold leading-tight">Quản trị nội dung</p>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="border-t border-white/10 p-4">
      <a
        href="/"
        className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold ring-1 ring-white/10 transition hover:bg-white/15"
      >
        <BookOpen size={16} />
        Về trang chủ
      </a>
    </div>
  );
}

function NavItem({
  view,
  target,
  setView,
  setMobileOpen,
  icon,
  label,
}: {
  view: AdminView;
  target: AdminView;
  setView: (v: AdminView) => void;
  setMobileOpen: (v: boolean) => void;
  icon: ComponentType<{ size?: number }>;
  label: string;
}) {
  return (
    <SidebarButton
      active={view === target}
      onClick={() => { setView(target); setMobileOpen(false); }}
      icon={icon}
      label={label}
    />
  );
}

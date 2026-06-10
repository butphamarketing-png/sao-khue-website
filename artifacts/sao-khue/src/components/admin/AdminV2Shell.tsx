import { useMemo, useState, type ComponentType, type ReactNode } from "react";
import {
  BarChart3,
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Globe,
  HelpCircle,
  ImagePlus,
  Inbox,
  Layers3,
  LayoutDashboard,
  LayoutGrid,
  ListOrdered,
  LogOut,
  Mail,
  Menu,
  MessageSquareQuote,
  Navigation,
  Newspaper,
  PanelTop,
  PlayCircle,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Smartphone,
  Star,
  Type,
} from "lucide-react";
import { BP_LOGO_URL } from "./bp-cms-login-data";
import {
  POST_CATEGORY_NAV,
  type AdminView,
  type PostCategoryFilter,
  type SidebarGroup,
} from "./admin-views";

type MenuItem = {
  view: AdminView;
  icon: ComponentType<{ style?: React.CSSProperties }>;
  label: string;
  badge?: number;
};

type MenuGroup = {
  key: SidebarGroup;
  label: string;
  items: MenuItem[];
  children?: MenuItem[];
};

const VIEW_LABELS: Record<AdminView, string> = {
  dashboard: "Tổng quan",
  posts: "Quản lý bài viết",
  "settings-general": "Thông tin website",
  "settings-mobile-bar": "Thanh liên hệ mobile",
  "settings-google": "Google & Maps",
  "settings-hero": "Slideshow / Hero",
  "settings-about": "Thông tin công ty",
  "settings-commitments": "Cam kết",
  "settings-pricing": "Bảng báo giá",
  "settings-calculator": "Bảng tính giá",
  "settings-stats": "Số liệu",
  "settings-testimonials": "Đánh giá",
  "settings-faq": "FAQ",
  "settings-process": "Quy trình",
  "settings-video": "Video",
  "settings-categories": "Trang danh mục",
  "settings-sections": "Tiêu đề sections",
  "settings-quote": "Gói báo giá",
  "settings-contact": "Form liên hệ",
  "settings-menu": "Menu website",
  "settings-banners": "Banner trang",
  "settings-featured": "Bài nổi bật",
  "settings-seo": "SEO tổng quan",
  "contact-inbox": "Hộp thư liên hệ",
};

const POST_CATEGORY_ICONS: Record<PostCategoryFilter, ComponentType<{ style?: React.CSSProperties }>> = {
  all: FileText,
  "tin-tuc": Newspaper,
  "dich-vu": Briefcase,
  "cong-trinh": Layers3,
  "gioi-thieu": Building2,
};

type Props = {
  userLabel: string;
  view: AdminView;
  setView: (view: AdminView) => void;
  expandedGroup: Record<SidebarGroup, boolean>;
  toggleGroup: (group: SidebarGroup) => void;
  logout: () => void;
  inboxUnreadCount?: number;
  /** Lọc bài viết theo danh mục — cùng dữ liệu Supabase admin cũ. */
  postsCategoryFilter?: string;
  postCounts?: Partial<Record<PostCategoryFilter, number>>;
  onOpenPosts?: (category: PostCategoryFilter) => void;
  children: ReactNode;
};

function buildMenuGroups(inboxUnreadCount: number): MenuGroup[] {
  return [
    {
      key: "dashboard",
      label: "TỔNG QUAN",
      items: [{ view: "dashboard", icon: LayoutDashboard, label: "Tổng quan" }],
    },
    {
      key: "posts",
      label: "NỘI DUNG",
      items: [
        {
          view: "contact-inbox",
          icon: Inbox,
          label: "Hộp thư liên hệ",
          badge: inboxUnreadCount,
        },
      ],
    },
    {
      key: "homepage",
      label: "TRANG CHỦ",
      items: [
        { view: "settings-hero", icon: ImagePlus, label: "Slideshow / Hero" },
        { view: "settings-about", icon: Building2, label: "Thông tin công ty" },
        { view: "settings-commitments", icon: ShieldCheck, label: "Cam kết" },
        { view: "settings-pricing", icon: BookOpen, label: "Bảng báo giá" },
        { view: "settings-quote", icon: CircleDollarSign, label: "Gói báo giá" },
        { view: "settings-stats", icon: BarChart3, label: "Số liệu" },
        { view: "settings-testimonials", icon: MessageSquareQuote, label: "Đánh giá" },
        { view: "settings-faq", icon: HelpCircle, label: "FAQ" },
        { view: "settings-process", icon: ListOrdered, label: "Quy trình" },
        { view: "settings-video", icon: PlayCircle, label: "Video" },
        { view: "settings-sections", icon: Type, label: "Tiêu đề sections" },
        { view: "settings-featured", icon: Star, label: "Bài nổi bật" },
        { view: "settings-contact", icon: Mail, label: "Form liên hệ" },
      ],
    },
    {
      key: "settings",
      label: "CẤU HÌNH",
      items: [
        { view: "settings-categories", icon: LayoutGrid, label: "Trang danh mục" },
        { view: "settings-menu", icon: Navigation, label: "Menu website" },
        { view: "settings-banners", icon: PanelTop, label: "Banner trang" },
        { view: "settings-seo", icon: SearchCheck, label: "SEO tổng quan" },
        { view: "settings-google", icon: Globe, label: "Google & Maps" },
        { view: "settings-mobile-bar", icon: Smartphone, label: "Thanh liên hệ mobile" },
        { view: "settings-general", icon: Settings2, label: "Thông tin website" },
      ],
    },
    {
      key: "tools",
      label: "CÔNG CỤ",
      items: [{ view: "settings-calculator", icon: Calculator, label: "Bảng tính giá" }],
    },
  ];
}

export function AdminV2Shell({
  userLabel,
  view,
  setView,
  expandedGroup,
  toggleGroup,
  logout,
  inboxUnreadCount = 0,
  postsCategoryFilter = "all",
  postCounts = {},
  onOpenPosts,
  children,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuGroups = useMemo(() => buildMenuGroups(inboxUnreadCount), [inboxUnreadCount]);
  const pageTitle =
    view === "posts" && postsCategoryFilter !== "all"
      ? (POST_CATEGORY_NAV.find((c) => c.category === postsCategoryFilter)?.label ??
        VIEW_LABELS.posts)
      : (VIEW_LABELS[view] ?? "Quản trị");
  const userInitial = ((userLabel ?? "Admin").trim()[0] ?? "A").toUpperCase();

  const sidebar = (
    <SidebarNav
      menuGroups={menuGroups}
      view={view}
      setView={setView}
      expandedGroup={expandedGroup}
      toggleGroup={toggleGroup}
      onNavigate={() => setMobileOpen(false)}
      userLabel={userLabel}
      userInitial={userInitial}
      logout={logout}
      postsCategoryFilter={postsCategoryFilter}
      postCounts={postCounts}
      onOpenPosts={onOpenPosts}
    />
  );

  return (
    <div
      className="flex h-screen w-full overflow-hidden font-sans"
      style={{
        fontFamily: "'Inter','Be Vietnam Pro',system-ui,sans-serif",
        background: "linear-gradient(180deg, #f5f3ff 0%, #f8fafc 40%, #f1f5f9 100%)",
      }}
    >
      <aside className="hidden w-[248px] shrink-0 xl:flex">{sidebar}</aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[272px] shadow-2xl shadow-violet-900/30">{sidebar}</aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="relative flex h-[60px] shrink-0 items-center justify-between border-b border-violet-100/80 bg-white/90 px-4 shadow-sm shadow-violet-500/5 backdrop-blur-md md:px-7">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-0.5"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9, #4f46e5)" }}
          />
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl border border-violet-100 bg-violet-50/50 p-2.5 text-violet-700 transition hover:bg-violet-100 xl:hidden"
              aria-label="Mở menu"
            >
              <Menu style={{ width: "1rem", height: "1rem" }} />
            </button>
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden rounded-lg bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-500 sm:inline">
                CMS
              </span>
              <span className="text-slate-400">/</span>
              <span className="font-bold text-slate-800">{pageTitle}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold transition hover:opacity-90 sm:inline-flex"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                color: "white",
                boxShadow: "0 2px 12px rgba(124,58,237,0.3)",
              }}
            >
              <Globe style={{ width: "0.85rem", height: "0.85rem" }} />
              Xem website
            </a>
            {inboxUnreadCount > 0 && (
              <div className="relative">
                <Bell style={{ width: "1rem", height: "1rem", color: "#94a3b8" }} />
                <span
                  className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-black text-white"
                  style={{ background: "#ef4444" }}
                >
                  {inboxUnreadCount > 9 ? "9+" : inboxUnreadCount}
                </span>
              </div>
            )}
            <div
              className="flex items-center gap-2.5 rounded-xl border border-violet-100 bg-violet-50/30 py-1 pl-1 pr-3"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black text-white shadow-md shadow-violet-500/30"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
              >
                {userInitial}
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold leading-none text-slate-900">{userLabel}</div>
                <div className="mt-0.5 text-[10px] font-medium leading-none text-violet-500">
                  Quản trị viên
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6 xl:p-8">{children}</main>
      </div>
    </div>
  );
}

function SidebarNav({
  menuGroups,
  view,
  setView,
  expandedGroup,
  toggleGroup,
  onNavigate,
  userLabel,
  userInitial,
  logout,
  postsCategoryFilter,
  postCounts,
  onOpenPosts,
}: {
  menuGroups: MenuGroup[];
  view: AdminView;
  setView: (view: AdminView) => void;
  expandedGroup: Record<SidebarGroup, boolean>;
  toggleGroup: (group: SidebarGroup) => void;
  onNavigate: () => void;
  userLabel: string;
  userInitial: string;
  logout: () => void;
  postsCategoryFilter: string;
  postCounts: Partial<Record<PostCategoryFilter, number>>;
  onOpenPosts?: (category: PostCategoryFilter) => void;
}) {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-y-auto"
      style={{ background: "linear-gradient(180deg, #1a0a3d 0%, #2d0a6b 40%, #1e1b4b 100%)" }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 -left-8 h-32 w-32 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 border-b border-white/10 px-4 py-5">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-lg"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,.7), rgba(99,102,241,.5))",
              border: "1px solid rgba(167,139,250,.35)",
            }}
          >
            <img
              src={BP_LOGO_URL}
              alt="Bứt Phá Marketing"
              className="h-6 w-6 object-contain"
              style={{ filter: "brightness(10)" }}
            />
          </div>
          <div>
            <div className="text-[11px] font-black leading-none tracking-tight text-white">
              BỨT PHÁ MARKETING
            </div>
            <div className="mt-1 text-[8px] font-bold tracking-[0.22em]" style={{ color: "#c4b5fd" }}>
              KIẾN TRÚC SAO KHUÊ
            </div>
          </div>
        </div>
      </div>

      <nav className="relative z-10 flex-1 space-y-3 px-2.5 py-4">
        {menuGroups.map((group) => {
          const isOpen = expandedGroup[group.key];
          const groupItems = group.items ?? [];
          const hasActive =
            groupItems.some((item) => item.view === view) ||
            (group.key === "posts" && view === "posts");

          return (
            <div key={group.key}>
              <button
                type="button"
                onClick={() => toggleGroup(group.key)}
                className="mb-1.5 flex w-full items-center justify-between px-2.5"
              >
                <span
                  className="text-[8px] font-bold tracking-[.18em]"
                  style={{ color: "rgba(167,139,250,.4)" }}
                >
                  {group.label}
                </span>
                <ChevronDown
                  style={{
                    width: "0.65rem",
                    height: "0.65rem",
                    color: "rgba(167,139,250,.35)",
                    transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
                    transition: "transform .2s",
                  }}
                />
              </button>

              {isOpen && (
                <div className="space-y-0.5">
                  {group.key === "posts" &&
                    onOpenPosts &&
                    POST_CATEGORY_NAV.map(({ category, label }) => {
                      const Icon = POST_CATEGORY_ICONS[category];
                      const isActive = view === "posts" && postsCategoryFilter === category;
                      const count = postCounts[category];
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() => {
                            onOpenPosts(category);
                            onNavigate();
                          }}
                          className="flex w-full items-center gap-2.5 rounded-xl py-2.5 text-left transition-all duration-200"
                          style={{
                            paddingLeft: "10px",
                            paddingRight: "8px",
                            background: isActive
                              ? "linear-gradient(90deg, rgba(124,58,237,0.35), rgba(255,255,255,0.08))"
                              : "transparent",
                            color: isActive ? "white" : "rgba(255,255,255,0.55)",
                            fontWeight: isActive ? 600 : 500,
                            borderLeft: isActive ? "2px solid #c4b5fd" : "2px solid transparent",
                            boxShadow: isActive ? "0 2px 12px rgba(124,58,237,0.15)" : "none",
                          }}
                        >
                          <Icon
                            style={{
                              width: "0.85rem",
                              height: "0.85rem",
                              flexShrink: 0,
                              color: isActive ? "#c4b5fd" : "rgba(255,255,255,0.35)",
                            }}
                          />
                          <span className="flex-1 text-[12px] leading-tight">{label}</span>
                          {typeof count === "number" ? (
                            <span
                              className="rounded-full px-1.5 py-0.5 text-[10px] font-bold"
                              style={{
                                background: isActive ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)",
                                color: isActive ? "white" : "rgba(255,255,255,0.45)",
                              }}
                            >
                              {count}
                            </span>
                          ) : (
                            <ChevronRight
                              style={{
                                width: "0.7rem",
                                height: "0.7rem",
                                opacity: isActive ? 0.5 : 0.15,
                              }}
                            />
                          )}
                        </button>
                      );
                    })}
                  {groupItems.map((item) => {
                    const isActive = view === item.view;
                    return (
                      <button
                        key={item.view}
                        type="button"
                        onClick={() => {
                          setView(item.view);
                          onNavigate();
                        }}
                        className="flex w-full items-center gap-2.5 rounded-xl py-2.5 text-left transition-all duration-200"
                        style={{
                          paddingLeft: "10px",
                          paddingRight: "8px",
                          background: isActive
                            ? "linear-gradient(90deg, rgba(124,58,237,0.35), rgba(255,255,255,0.08))"
                            : "transparent",
                          color: isActive ? "white" : "rgba(255,255,255,0.55)",
                          fontWeight: isActive ? 600 : 500,
                          borderLeft: isActive ? "2px solid #c4b5fd" : "2px solid transparent",
                          boxShadow: isActive ? "0 2px 12px rgba(124,58,237,0.15)" : "none",
                        }}
                      >
                        <item.icon
                          style={{
                            width: "0.85rem",
                            height: "0.85rem",
                            flexShrink: 0,
                            color: isActive ? "#c4b5fd" : "rgba(255,255,255,0.35)",
                          }}
                        />
                        <span className="flex-1 text-[12px] leading-tight">{item.label}</span>
                        {item.badge ? (
                          <span
                            className="rounded-full px-1.5 py-0.5 text-[10px] font-bold text-white"
                            style={{ background: "#ef4444" }}
                          >
                            {item.badge > 9 ? "9+" : item.badge}
                          </span>
                        ) : (
                          <ChevronRight
                            style={{
                              width: "0.7rem",
                              height: "0.7rem",
                              opacity: isActive ? 0.5 : 0.15,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {!isOpen && hasActive && (
                <div className="px-2.5 py-1 text-[10px] font-medium" style={{ color: "#c4b5fd" }}>
                  {VIEW_LABELS[view]}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="relative z-10 space-y-1 border-t border-white/10 px-3 pb-4 pt-3">
        <div
          className="flex cursor-default items-center gap-2.5 rounded-xl p-2.5"
          style={{ background: "rgba(255,255,255,0.07)" }}
        >
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
          >
            {userInitial}
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] font-semibold leading-none text-white">{userLabel}</div>
            <div className="mt-0.5 text-[9px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Quản trị viên
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-all hover:bg-white/10"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <LogOut style={{ width: "0.8rem", height: "0.8rem", flexShrink: 0 }} />
          <span className="text-[12px] font-medium">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Facebook,
  Search,
  Shield,
  User,
  Activity,
  ChevronRight,
  Bell,
  LogOut,
  Save,
  CheckCircle,
  Edit3,
  Trash2,
  Plus,
  MoreHorizontal,
  Home,
  Package,
  Tag,
  ShoppingCart,
  Briefcase,
  Newspaper,
  File,
  Image as ImageIcon,
} from "lucide-react";

/* ─── Types ─── */
type Page =
  | "website-info"
  | "contact-info"
  | "seo-config"
  | "email-system"
  | "admin-accounts"
  | "permissions"
  | "activity-logs";

/* ─── Sample data ─── */
const sampleAdmins = [
  { id: 1, username: "admin", name: "Nguyễn Văn Admin", email: "admin@butpha.com", role: "Super Admin", status: "active", phone: "0901234567" },
  { id: 2, username: "editor", name: "Trần Thị Editor", email: "editor@butpha.com", role: "Editor", status: "active", phone: "0912345678" },
  { id: 3, username: "sales", name: "Lê Văn Sales", email: "sales@butpha.com", role: "Sales", status: "inactive", phone: "0923456789" },
];

const sampleLogs = [
  { id: 1, user: "admin", action: "Cập nhật thông tin website", module: "Settings", time: "10:35" },
  { id: 2, user: "editor", action: "Sửa bài viết", module: "Nội dung", time: "09:20" },
  { id: 3, user: "sales", action: "Xác nhận đơn hàng", module: "Đơn hàng", time: "08:45" },
  { id: 4, user: "admin", action: "Thêm tài khoản", module: "Users", time: "07:30" },
  { id: 5, user: "editor", action: "Đăng xuất", module: "Auth", time: "18:00" },
];

const rolePermissions = {
  "Super Admin": { products: true, orders: true, news: true, settings: true },
  "Admin": { products: true, orders: true, news: true, settings: false },
  "Editor": { products: false, orders: false, news: true, settings: false },
  "Sales": { products: false, orders: true, news: false, settings: false },
};

/* ─── Sidebar menu ─── */
const sidebarGroups = [
  { label: "TỔNG QUAN", items: [{ icon: Home, label: "Tổng quan", sub: null }] },
  { label: "SẢN PHẨM", items: [
    { icon: Package, label: "Quản lý sản phẩm", sub: null, children: [
      { icon: Tag, label: "Danh mục", sub: null },
      { icon: Package, label: "Sản phẩm", sub: null },
      { icon: ShoppingCart, label: "Đơn hàng", sub: null },
    ]},
  ]},
  { label: "NỘI DUNG", items: [
    { icon: Briefcase, label: "Dịch vụ", sub: null, children: [] },
    { icon: Newspaper, label: "Tin tức", sub: null, children: [] },
    { icon: File, label: "Trang tĩnh", sub: null },
    { icon: ImageIcon, label: "Hình ảnh", sub: null, children: [] },
  ]},
  { label: "HỆ THỐNG", items: [
    { icon: Search, label: "SEO Page", sub: null },
    { icon: SettingsIcon, label: "Thiết lập thông tin", sub: "website-info" as Page, children: [
      { icon: Globe, label: "Thông tin website", sub: "website-info" as Page },
      { icon: Phone, label: "Thông tin liên hệ", sub: "contact-info" as Page },
      { icon: Search, label: "Cấu hình SEO", sub: "seo-config" as Page },
      { icon: Mail, label: "Email hệ thống", sub: "email-system" as Page },
      { icon: User, label: "Tài khoản quản trị", sub: "admin-accounts" as Page },
      { icon: Shield, label: "Phân quyền", sub: "permissions" as Page },
      { icon: Activity, label: "Nhật ký hoạt động", sub: "activity-logs" as Page },
    ]},
  ]},
];

/* ─── Helpers ─── */
function FormField({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1 text-xs font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-gray-400">{hint}</p>}
    </div>
  );
}

function CharCounter({ current, max }: { current: number; max: number }) {
  const percent = Math.min((current / max) * 100, 100);
  const isOver = current > max;
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{
          width: `${percent}%`,
          background: isOver ? "#ef4444" : percent > 90 ? "#f59e0b" : "#7c3aed"
        }} />
      </div>
      <span className={`text-xs font-bold ${isOver ? "text-red-500" : "text-gray-400"}`}>{current}/{max}</span>
    </div>
  );
}

function GooglePreview({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
      <div className="text-[10px] font-bold text-gray-500 mb-3">Xem trước Google</div>
      <div className="max-w-md space-y-1.5">
        <div className="text-xs text-gray-500 truncate">{url}</div>
        <div className="text-sm font-semibold text-blue-700 leading-tight hover:underline cursor-pointer">{title}</div>
        <div className="text-xs text-gray-600 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SHARED LAYOUT WRAPPER
═══════════════════════════════════════════════════ */
function Layout({
  children, page, setPage,
}: {
  children: React.ReactNode;
  page: Page;
  setPage: (p: Page) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  const pageTitle =
    page === "website-info" ? "Thông tin website"
    : page === "contact-info" ? "Thông tin liên hệ"
    : page === "seo-config" ? "Cấu hình SEO"
    : page === "email-system" ? "Email hệ thống"
    : page === "admin-accounts" ? "Tài khoản quản trị"
    : page === "permissions" ? "Phân quyền"
    : "Nhật ký hoạt động";

  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ fontFamily: "'Inter','Plus Jakarta Sans',system-ui,sans-serif", background: "#f8fafc" }}>

      {/* ── SIDEBAR ── */}
      <aside className="w-[210px] flex-shrink-0 flex flex-col overflow-y-auto relative"
        style={{ background: "linear-gradient(180deg,#1a0a3d 0%,#2d0a6b 40%,#1e1b4b 100%)" }}>
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }} />

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/10 relative z-10">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,rgba(124,58,237,.6),rgba(99,102,241,.4))", border: "1px solid rgba(167,139,250,.3)" }}>
            <img src="/images/logo-butpha.png" alt="Logo" style={{ filter: "brightness(10)", width: "1.1rem", height: "1.1rem", objectFit: "contain" }} />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-tight leading-none">BỨT PHÁ</div>
            <div className="text-[7px] font-bold mt-0.5 tracking-[.2em]" style={{ color: "#a78bfa" }}>MARKETING</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2.5 py-4 space-y-3 relative z-10">
          {sidebarGroups.map(({ label, items }) => (
            <div key={label}>
              <div className="text-[8px] font-bold tracking-[.18em] px-2.5 mb-1.5" style={{ color: "rgba(167,139,250,.4)" }}>{label}</div>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const hasChildren = "children" in item && item.children;
                  const isParentActive = hasChildren && item.children!.some(c => c.sub === page);
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => { if (hasChildren) setExpanded(!expanded); else if (item.sub) { setPage(item.sub as Page); } }}
                        className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all"
                        style={{
                          paddingLeft: "10px",
                          paddingRight: "8px",
                          background: isParentActive ? "rgba(255,255,255,.08)" : "transparent",
                          color: isParentActive ? "white" : "rgba(255,255,255,.55)",
                          fontWeight: isParentActive ? 600 : 500,
                          borderLeft: isParentActive ? "2px solid #a78bfa" : "2px solid transparent",
                        }}
                      >
                        <item.icon style={{ width: ".85rem", height: ".85rem", flexShrink: 0, color: isParentActive ? "#c4b5fd" : "rgba(255,255,255,.35)" }} />
                        <span className="flex-1 text-[12px] leading-tight">{item.label}</span>
                        {hasChildren ? (
                          <div style={{ width: ".7rem", height: ".7rem", opacity: .4, transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform .2s" }}>
                            <ChevronRight style={{ width: "100%", height: "100%" }} />
                          </div>
                        ) : null}
                      </button>
                      {hasChildren && expanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {item.children!.map((child) => {
                            const isActive = child.sub === page;
                            return (
                              <button key={child.label}
                                onClick={() => { setPage(child.sub); }}
                                className="w-full flex items-center gap-2 py-2 rounded-lg text-left transition-all"
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "8px",
                                  background: isActive ? "rgba(124,58,237,.25)" : "transparent",
                                  color: isActive ? "white" : "rgba(255,255,255,.45)",
                                  fontWeight: isActive ? 600 : 400,
                                  borderLeft: isActive ? "2px solid #7c3aed" : "2px solid transparent",
                                }}
                              >
                                <child.icon style={{ width: ".75rem", height: ".75rem", flexShrink: 0, color: isActive ? "#c4b5fd" : "rgba(255,255,255,.3)" }} />
                                <span className="text-[11px]">{child.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-3 pb-4 border-t border-white/10 pt-3 relative z-10 space-y-1">
          <div className="flex items-center gap-2.5 rounded-xl p-2.5 cursor-pointer" style={{ background: "rgba(255,255,255,.07)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 text-xs" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>A</div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[11px] font-semibold leading-none">Admin</div>
              <div className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,.35)" }}>Quản trị viên</div>
            </div>
            <ChevronRight style={{ width: ".75rem", height: ".75rem", color: "rgba(255,255,255,.3)" }} />
          </div>
          <button 
            onClick={() => {
              const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
              window.location.href = `${basePath}/preview/cms-login/Login`;
            }}
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            <LogOut style={{ width: ".8rem", height: ".8rem" }} />
            <span className="text-[12px]">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-6 flex-shrink-0" style={{ background: "white", borderBottom: "1px solid #f1f5f9", boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Trang chủ</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-400">Thiết lập thông tin</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="font-semibold text-gray-800">{pageTitle}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full text-[9px] font-black text-white" style={{ background: "#ef4444" }}>3</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>A</div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-none">Admin</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Quản trị viên</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   1. THÔNG TIN WEBSITE
═══════════════════════════════════════════════════ */
function WebsiteInfo() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Thông tin website</h1>
        <p className="text-sm text-gray-400 mt-0.5">Quản lý thông tin chung của doanh nghiệp</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Thông tin doanh nghiệp</div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Tên website" required>
              <input defaultValue="Bứt Phá Marketing" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Tên công ty">
              <input defaultValue="Công ty TNHH Bứt Phá" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Hotline" required>
              <input defaultValue="0901234567" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Email">
              <input defaultValue="contact@butpha.com" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Website" className="col-span-2">
              <input defaultValue="https://butpha.com" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Thông tin địa chỉ</div>
          <FormField label="Địa chỉ">
            <input defaultValue="123 Đường ABC, Quận 1, TP.HCM" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <FormField label="Google Maps">
            <textarea rows={3} defaultValue="https://maps.google.com/..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
          </FormField>
          <FormField label="Giờ làm việc">
            <input defaultValue="Thứ 2 - Thứ 7: 8h00 - 18h00" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   2. THÔNG TIN LIÊN HỆ
═══════════════════════════════════════════════════ */
function ContactInfo() {
  const [zalo, setZalo] = useState(true);
  const [messenger, setMessenger] = useState(true);
  const [fanpage, setFanpage] = useState(true);
  const [hotline, setHotline] = useState(true);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Thông tin liên hệ</h1>
        <p className="text-sm text-gray-400 mt-0.5">Quản lý các kênh liên hệ hiển thị trên website</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Hotline 1">
              <input defaultValue="0901234567" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Hotline 2">
              <input defaultValue="0912345678" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Zalo">
              <input defaultValue="0901234567" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Messenger">
              <input defaultValue="https://m.me/butpha" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Fanpage Facebook" className="col-span-2">
              <input defaultValue="https://facebook.com/butpha" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Google Maps" className="col-span-2">
              <textarea rows={3} defaultValue="https://maps.google.com/..." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            </FormField>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <div className="text-sm font-bold text-gray-800 mb-4">Hiển thị kênh liên hệ</div>
            <div className="space-y-3">
              {[
                { label: "Hiển thị Zalo", checked: zalo, set: setZalo, icon: MessageSquare },
                { label: "Hiển thị Messenger", checked: messenger, set: setMessenger, icon: MessageSquare },
                { label: "Hiển thị Fanpage", checked: fanpage, set: setFanpage, icon: Facebook },
                { label: "Hiển thị Hotline", checked: hotline, set: setHotline, icon: Phone },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f5f3ff" }}>
                      <item.icon className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                  </div>
                  <button onClick={() => item.set(!item.checked)}
                    className="relative w-11 h-6 rounded-full transition-all flex-shrink-0"
                    style={{ background: item.checked ? "#7c3aed" : "#e2e8f0" }}>
                    <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all" style={{ left: item.checked ? "calc(100% - 22px)" : "2px" }} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   3. CẤU HÌNH SEO
═══════════════════════════════════════════════════ */
function SeoConfig() {
  const [seoTitle, setSeoTitle] = useState("Bứt Phá Marketing - Giải pháp marketing doanh nghiệp");
  const [seoDesc, setSeoDesc] = useState("Cung cấp các giải pháp marketing toàn diện cho doanh nghiệp, thiết kế website, quản lý mạng xã hội.");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Cấu hình SEO</h1>
        <p className="text-sm text-gray-400 mt-0.5">Quản lý SEO mặc định của toàn bộ website</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">SEO Website</div>
          <FormField label="SEO Title mặc định" hint="Tối đa 70 ký tự">
            <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            <CharCounter current={seoTitle.length} max={70} />
          </FormField>
          <FormField label="Meta Description" hint="Tối đa 160 ký tự">
            <textarea rows={3} value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            <CharCounter current={seoDesc.length} max={160} />
          </FormField>
          <FormField label="Keywords">
            <input defaultValue="marketing, website, doanh nghiệp" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <GooglePreview title={seoTitle} url="butpha.com" desc={seoDesc} />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Google</div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Google Analytics ID">
              <input defaultValue="G-XXXXXXXXXX" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Google Search Console Verification">
              <input defaultValue="xxxxxxxxxxxxxx" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Google Tag Manager ID" className="col-span-2">
              <input defaultValue="GTM-XXXXXXX" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Facebook</div>
          <FormField label="Facebook Pixel ID">
            <input defaultValue="1234567890" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Mã nhúng</div>
          <FormField label="Mã nhúng Google Maps">
            <textarea rows={3} defaultValue="<iframe ...></iframe>" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none font-mono" />
          </FormField>
          <FormField label="Script Header">
            <textarea rows={4} defaultValue="<!-- Script header -->" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none font-mono" />
          </FormField>
          <FormField label="Script Footer">
            <textarea rows={4} defaultValue="<!-- Script footer -->" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none font-mono" />
          </FormField>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   4. EMAIL HỆ THỐNG
═══════════════════════════════════════════════════ */
function EmailSystem() {
  const [encryption, setEncryption] = useState("ssl");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Email hệ thống</h1>
        <p className="text-sm text-gray-400 mt-0.5">Quản lý gửi email tự động</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">SMTP</div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="SMTP Host" required>
              <input defaultValue="smtp.gmail.com" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="SMTP Port" required>
              <input defaultValue="465" type="number" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="SMTP User" required>
              <input defaultValue="noreply@butpha.com" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="SMTP Password" required>
              <input defaultValue="••••••••" type="password" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="SMTP Encryption" required>
              <select value={encryption} onChange={(e) => setEncryption(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                <option value="ssl">SSL</option>
                <option value="tls">TLS</option>
              </select>
            </FormField>
          </div>
          <div className="flex gap-2 pt-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <CheckCircle className="w-4 h-4" /> Kiểm tra SMTP
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              <Mail className="w-4 h-4" /> Gửi email test
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="text-sm font-bold text-gray-800">Email nhận thông báo</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f5f3ff" }}>
                  <div className="w-4 h-4 text-violet-600">🛒</div>
                </div>
                <span className="text-sm font-semibold text-gray-700">Đơn hàng mới</span>
              </div>
              <input defaultValue="sales@butpha.com" className="w-64 h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-violet-400" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f5f3ff" }}>
                  <MessageSquare className="w-4 h-4 text-violet-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Liên hệ mới</span>
              </div>
              <input defaultValue="contact@butpha.com" className="w-64 h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-violet-400" />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f5f3ff" }}>
                  <Clock className="w-4 h-4 text-violet-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Đặt lịch mới</span>
              </div>
              <input defaultValue="booking@butpha.com" className="w-64 h-9 px-3 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-violet-400" />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu cấu hình
          </button>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   5. TÀI KHOẢN QUẢN TRỊ
═══════════════════════════════════════════════════ */
function AdminAccounts() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-gray-900">Tài khoản quản trị</h1>
          <p className="text-sm text-gray-400 mt-0.5">{sampleAdmins.length} tài khoản</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Thêm tài khoản
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">
          <div className="text-sm font-bold text-gray-800 mb-4">Thêm tài khoản mới</div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FormField label="Họ tên" required>
              <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Tên đăng nhập" required>
              <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Email" required>
              <input type="email" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Số điện thoại">
              <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Mật khẩu" required>
              <input type="password" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Xác nhận mật khẩu" required>
              <input type="password" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Nhóm quyền">
              <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                <option>Super Admin</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Sales</option>
              </select>
            </FormField>
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              Hủy
            </button>
            <button className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
              Lưu
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              {["Tài khoản", "Họ tên", "Email", "Nhóm quyền", "Trạng thái", ""].map((h) => (
                <th key={h} className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleAdmins.map((admin) => (
              <tr key={admin.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#f5f3ff,#ede9fe)" }}>
                      <User className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{admin.username}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{admin.name}</td>
                <td className="px-4 py-4 text-sm text-gray-500">{admin.email}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: admin.role === "Super Admin" ? "#fef3c7" : "#f5f3ff", color: admin.role === "Super Admin" ? "#92400e" : "#7c3aed" }}>
                    {admin.role}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: admin.status === "active" ? "#f0fdf4" : "#f8fafc", color: admin.status === "active" ? "#15803d" : "#94a3b8" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: admin.status === "active" ? "#22c55e" : "#cbd5e1" }} />
                    {admin.status === "active" ? "Hoạt động" : "Khóa"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Sửa">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors" title="Xóa">
                      <Trash2 className="w-3.5 h-3.5 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   6. PHÂN QUYỀN
═══════════════════════════════════════════════════ */
function Permissions() {
  const [perms, setPerms] = useState(rolePermissions);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-gray-900">Phân quyền</h1>
          <p className="text-sm text-gray-400 mt-0.5">Quản lý quyền truy cập hệ thống</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Tạo nhóm quyền
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100 w-48">Chức năng</th>
              {Object.keys(perms).map((role) => (
                <th key={role} className="text-center text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">{role}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Quản lý sản phẩm", "Quản lý đơn hàng", "Quản lý tin tức", "Thiết lập hệ thống"].map((func, i) => {
              const keys = ["products", "orders", "news", "settings"] as const;
              return (
                <tr key={func} className="border-b border-gray-50 last:border-0">
                  <td className="px-4 py-4 text-sm font-semibold text-gray-700">{func}</td>
                  {Object.entries(perms).map(([role, rolePerms]) => (
                    <td key={role} className="px-4 py-4 text-center">
                      <button onClick={() => setPerms({ ...perms, [role]: { ...rolePerms, [keys[i]]: !rolePerms[keys[i]] } })}
                        className="w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all"
                        style={{
                          borderColor: rolePerms[keys[i]] ? "#7c3aed" : "#d1d5db",
                          background: rolePerms[keys[i]] ? "#7c3aed" : "transparent"
                        }}>
                        {rolePerms[keys[i]] && <CheckCircle className="w-4 h-4 text-white" />}
                      </button>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Save className="w-4 h-4" /> Lưu thay đổi
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   7. NHẬT KÝ HOẠT ĐỘNG
═══════════════════════════════════════════════════ */
function ActivityLogs() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Nhật ký hoạt động</h1>
        <p className="text-sm text-gray-400 mt-0.5">Theo dõi các thao tác quan trọng trên hệ thống</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              {["Tài khoản", "Hành động", "Module", "Thời gian", ""].map((h) => (
                <th key={h} className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleLogs.map((log) => (
              <tr key={log.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#f5f3ff,#ede9fe)" }}>
                      <User className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{log.user}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{log.action}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                    {log.module}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{log.time}</td>
                <td className="px-4 py-4">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function Settings() {
  const [page, setPage] = useState<Page>("website-info");

  return (
    <Layout page={page} setPage={setPage}>
      {page === "website-info" && <WebsiteInfo />}
      {page === "contact-info" && <ContactInfo />}
      {page === "seo-config" && <SeoConfig />}
      {page === "email-system" && <EmailSystem />}
      {page === "admin-accounts" && <AdminAccounts />}
      {page === "permissions" && <Permissions />}
      {page === "activity-logs" && <ActivityLogs />}
    </Layout>
  );
}

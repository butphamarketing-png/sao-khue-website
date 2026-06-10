import React, { useState } from "react";
import {
  Calendar, Briefcase, Tag, ChevronDown, ChevronRight, Search,
  Plus, Edit3, Trash2, Copy, Eye, EyeOff, ArrowLeft, Upload,
  Home, Settings, Newspaper, File, FolderOpen, ImageIcon,
  User, Bell, LogOut, CheckCircle, XCircle, Filter,
  MoreHorizontal, Star, Clock, Check, X, GripVertical,
  Smartphone, Laptop, Monitor, Tablet, Shield, Phone, Mail, Activity,
  Image, Link, Table, Video, Bold, Italic, List, Save,
} from "lucide-react";

/* ─── Types ─── */
type Page = "cat-list" | "cat-form" | "service-list" | "service-form" | "appointment-list" | "appointment-detail";
type SubMenu = "categories" | "services" | "appointments";

/* ─── Sample data ─── */
const sampleCategories = [
  { id: 1, name: "Thiết kế website", slug: "thiet-ke-website", visible: true, date: "01/06/2025", services: 12 },
  { id: 2, name: "SEO tổng thể", slug: "seo-tong-the", visible: true, date: "02/06/2025", services: 8 },
  { id: 3, name: "Google Ads", slug: "google-ads", visible: false, date: "03/06/2025", services: 5 },
  { id: 4, name: "Facebook Ads", slug: "facebook-ads", visible: true, date: "04/06/2025", services: 6 },
  { id: 5, name: "Xây nhà trọn gói", slug: "xay-nha-tron-goi", visible: true, date: "05/06/2025", services: 3 },
];

const sampleServices = [
  { id: 1, name: "Thiết kế website doanh nghiệp", category: "Thiết kế website", visible: true, featured: true, date: "01/06/2025" },
  { id: 2, name: "SEO website tổng thể", category: "SEO tổng thể", visible: true, featured: false, date: "02/06/2025" },
  { id: 3, name: "Quảng cáo Google Ads", category: "Google Ads", visible: false, featured: true, date: "03/06/2025" },
  { id: 4, name: "Quảng cáo Facebook/Instagram", category: "Facebook Ads", visible: true, featured: true, date: "04/06/2025" },
  { id: 5, name: "Xây nhà trọn gói", category: "Xây nhà trọn gói", visible: true, featured: false, date: "05/06/2025" },
];

const sampleAppointments = [
  { id: "LH-2506001", customer: "Nguyễn Văn A", phone: "0901234567", service: "Thiết kế website doanh nghiệp", date: "08/06/2025", time: "09:00", status: "pending" },
  { id: "LH-2506002", customer: "Trần Thị B", phone: "0912345678", service: "SEO website tổng thể", date: "08/06/2025", time: "14:00", status: "confirmed" },
  { id: "LH-2506003", customer: "Lê Văn C", phone: "0923456789", service: "Quảng cáo Google Ads", date: "09/06/2025", time: "10:30", status: "processing" },
  { id: "LH-2506004", customer: "Phạm Thị D", phone: "0934567890", service: "Xây nhà trọn gói", date: "09/06/2025", time: "15:00", status: "completed" },
  { id: "LH-2506005", customer: "Hoàng Văn E", phone: "0945678901", service: "Quảng cáo Facebook/Instagram", date: "10/06/2025", time: "11:00", status: "cancelled" },
];

const appointmentStatusMap: Record<string, { label: string; color: string; bg: string }> = {
  pending: { label: "Chờ xác nhận", color: "#f59e0b", bg: "#fffbeb" },
  confirmed: { label: "Đã xác nhận", color: "#1d4ed8", bg: "#eff6ff" },
  processing: { label: "Đang xử lý", color: "#7c3aed", bg: "#f5f3ff" },
  completed: { label: "Hoàn thành", color: "#15803d", bg: "#f0fdf4" },
  cancelled: { label: "Đã hủy", color: "#dc2626", bg: "#fef2f2" },
};

/* ─── Sidebar menu ─── */
const sidebarGroups = [
  { label: "TỔNG QUAN", items: [{ icon: Home, label: "Tổng quan", sub: null }] },
  { label: "DỊCH VỤ", items: [
    { icon: Briefcase, label: "Quản lý dịch vụ", sub: "services" as SubMenu, children: [
      { icon: Tag, label: "Danh mục dịch vụ", sub: "categories" as SubMenu },
      { icon: Briefcase, label: "Dịch vụ", sub: "services" as SubMenu },
      { icon: Calendar, label: "Quản lý đặt lịch", sub: "appointments" as SubMenu },
    ]},
  ]},
  { label: "NỘI DUNG", items: [
    { icon: Newspaper, label: "Tin tức", sub: null },
    { icon: File, label: "Trang tĩnh", sub: null },
    { icon: ImageIcon, label: "Hình ảnh", sub: null },
  ]},
  { label: "HỆ THỐNG", items: [
    { icon: Search, label: "SEO Page", sub: null },
    { icon: Settings, label: "Thiết lập", sub: null },
  ]},
];

/* ─── Char Counter ─── */
function CharCounter({ current, max }: { current: number; max: number }) {
  const percent = Math.min((current / max) * 100, 100);
  const isOver = current > max;
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full transition-colors" style={{ 
          width: `${percent}%`, 
          background: isOver ? "#ef4444" : percent > 90 ? "#f59e0b" : "#7c3aed" 
        }} />
      </div>
      <span className={`text-xs font-bold ${isOver ? "text-red-500" : "text-gray-400"}`}>{current}/{max}</span>
    </div>
  );
}

/* ─── Google Preview ─── */
function GooglePreview({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 bg-white">
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
  children, subMenu, setSubMenu, page, setPage,
}: {
  children: React.ReactNode;
  subMenu: SubMenu;
  setSubMenu: (s: SubMenu) => void;
  page: Page;
  setPage: (p: Page) => void;
}) {
  const [expanded, setExpanded] = useState(true);

  const pageTitle =
    subMenu === "categories" ? "Danh mục dịch vụ" :
    subMenu === "services" ? "Dịch vụ" :
    "Quản lý đặt lịch";

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
                  const isParentActive = hasChildren && item.children!.some(c => c.sub === subMenu);
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => {
                          if (hasChildren) {
                            setExpanded(!expanded);
                          } else if (item.sub) {
                            setSubMenu(item.sub as SubMenu);
                            setPage(item.sub === "categories" ? "cat-list" : item.sub === "services" ? "service-list" : "appointment-list");
                          }
                        }}
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
                          <ChevronDown style={{ width: ".7rem", height: ".7rem", opacity: .4, transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform .2s" }} />
                        ) : (
                          <ChevronRight style={{ width: ".7rem", height: ".7rem", opacity: isParentActive ? .5 : .15 }} />
                        )}
                      </button>
                      {hasChildren && expanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {item.children!.map((child) => {
                            const isActive = child.sub === subMenu;
                            return (
                              <button
                                key={child.label}
                                onClick={() => {
                                  setSubMenu(child.sub);
                                  setPage(child.sub === "categories" ? "cat-list" : child.sub === "services" ? "service-list" : "appointment-list");
                                }}
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
            <ChevronDown style={{ width: ".75rem", height: ".75rem", color: "rgba(255,255,255,.3)" }} />
          </div>
          <button 
            onClick={() => {
              const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
              window.location.href = `${basePath}/preview/cms-login/Login`;
            }}
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer"
            style={{ color: "rgba(255,255,255,.45)" }}>
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
            <span className="text-gray-400">Quản lý dịch vụ</span>
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
   1. DANH MỤC DỊCH VỤ
═══════════════════════════════════════════════════ */
function CategoryList({ onBack, onAdd, onEdit, onDelete }: { onBack: () => void; onAdd: () => void; onEdit: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Danh mục dịch vụ</h1>
            <p className="text-sm text-gray-400 mt-0.5">{sampleCategories.length} danh mục</p>
          </div>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Thêm danh mục
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b border-gray-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Tìm kiếm danh mục..." className="w-full pl-9 pr-4 h-10 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-violet-400 outline-none transition-all" />
          </div>
        </div>
        <table className="w-full">
          <thead style={{ background: "#fafafa" }}>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">STT</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hình ảnh</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tên danh mục</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Slug</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Số dịch vụ</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hiển thị</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sampleCategories.map((cat, idx) => (
              <tr key={cat.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4 text-sm text-gray-500">{idx + 1}</td>
                <td className="px-4 py-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-violet-500" />
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{cat.name}</td>
                <td className="px-4 py-4 text-sm text-gray-400">{cat.slug}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{cat.services}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${cat.visible ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                    {cat.visible ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {cat.visible ? "Hiển thị" : "Ẩn"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(cat.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Chỉnh sửa">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button onClick={() => onDelete(cat.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors" title="Xóa">
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

function CategoryForm({ onBack }: { onBack: () => void }) {
  const [seoTitle, setSeoTitle] = useState("Thiết kế website doanh nghiệp | Bứt Phá Marketing");
  const [seoDesc, setSeoDesc] = useState("Dịch vụ thiết kế website chuyên nghiệp, hiện đại, chuẩn SEO cho doanh nghiệp, cửa hàng, agency.");
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Thêm danh mục dịch vụ</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
            Hủy
          </button>
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin cơ bản</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tên danh mục <span className="text-red-500">*</span></label>
                <input defaultValue="Thiết kế website" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug</label>
                <input defaultValue="thiet-ke-website" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mô tả ngắn</label>
                <textarea rows={3} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" placeholder="Mô tả ngắn gọn về danh mục dịch vụ..." />
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Hình đại diện</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Kéo thả ảnh hoặc click để chọn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">SEO</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">SEO Title <span className="text-gray-400">(tối đa 70 ký tự)</span></label>
                <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                <CharCounter current={seoTitle.length} max={70} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Meta Description <span className="text-gray-400">(tối đa 160 ký tự)</span></label>
                <textarea rows={3} value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
                <CharCounter current={seoDesc.length} max={160} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Keywords</label>
                <input defaultValue="thiết kế website, website doanh nghiệp" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" placeholder="Từ khóa, phân cách bằng dấu phẩy" />
              </div>
            </div>
            <GooglePreview title={seoTitle} url="butpha.com/thiet-ke-website" desc={seoDesc} />
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thiết lập hiển thị</div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center" style={{ borderColor: "#7c3aed", background: "#7c3aed" }}>
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">Hiển thị</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   2. DỊCH VỤ
═══════════════════════════════════════════════════ */
function ServiceList({ onBack, onAdd, onEdit, onDelete }: { onBack: () => void; onAdd: () => void; onEdit: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Dịch vụ</h1>
            <p className="text-sm text-gray-400 mt-0.5">{sampleServices.length} dịch vụ</p>
          </div>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Thêm dịch vụ
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b border-gray-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Tìm kiếm dịch vụ..." className="w-full pl-9 pr-4 h-10 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-violet-400 outline-none transition-all" />
          </div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option>Tất cả danh mục</option>
            {sampleCategories.map(cat => <option key={cat.id}>{cat.name}</option>)}
          </select>
          <select className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option>Tất cả trạng thái</option>
            <option>Hiển thị</option>
            <option>Ẩn</option>
          </select>
        </div>
        <table className="w-full">
          <thead style={{ background: "#fafafa" }}>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Ảnh</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tên dịch vụ</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Danh mục</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hiển thị</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Nổi bật</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Ngày tạo</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sampleServices.map((svc) => (
              <tr key={svc.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4">
                  <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-violet-500" />
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{svc.name}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "#f5f3ff", color: "#7c3aed" }}>{svc.category}</span>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${svc.visible ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                    {svc.visible ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {svc.visible ? "Hiển thị" : "Ẩn"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${svc.featured ? "bg-yellow-50 text-yellow-700" : "bg-gray-50 text-gray-500"}`}>
                    {svc.featured ? <Star className="w-3.5 h-3.5 fill-current" /> : <Star className="w-3.5 h-3.5" />}
                    {svc.featured ? "Nổi bật" : ""}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{svc.date}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(svc.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Chỉnh sửa">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50 transition-colors" title="Nhân bản">
                      <Copy className="w-3.5 h-3.5 text-blue-500" />
                    </button>
                    <button onClick={() => onDelete(svc.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors" title="Xóa">
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

function ServiceForm({ onBack }: { onBack: () => void }) {
  const [seoTitle, setSeoTitle] = useState("Thiết kế website doanh nghiệp chuyên nghiệp | Bứt Phá Marketing");
  const [seoDesc, setSeoDesc] = useState("Thiết kế website doanh nghiệp hiện đại, responsive, chuẩn SEO, tốc độ nhanh, giúp doanh nghiệp tăng doanh thu.");
  const [priceType, setPriceType] = useState("range");
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Thêm dịch vụ</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
            Hủy
          </button>
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin cơ bản</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tên dịch vụ <span className="text-red-500">*</span></label>
                <input defaultValue="Thiết kế website doanh nghiệp" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug</label>
                <input defaultValue="thiet-ke-website-doanh-nghiep" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Danh mục dịch vụ <span className="text-red-500">*</span></label>
                <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                  {sampleCategories.map(cat => <option key={cat.id}>{cat.name}</option>)}
                </select>
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mô tả ngắn</label>
                <textarea rows={2} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" placeholder="Mô tả ngắn gọn về dịch vụ..." />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Nội dung chi tiết</div>
            <div className="border border-gray-200 rounded-xl bg-gray-50">
              <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-white rounded-t-xl">
                {[Bold, Italic, List, Image, Video, Table, Link].map((Icon, idx) => (
                  <button key={idx} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-violet-50 text-gray-600">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <textarea rows={8} className="w-full p-3 text-sm text-gray-700 bg-transparent outline-none resize-none" placeholder="Nhập nội dung chi tiết về dịch vụ..." />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Hình ảnh dịch vụ</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Ảnh đại diện</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click để chọn ảnh</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Album ảnh</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Kéo thả nhiều ảnh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin dịch vụ</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Giá dịch vụ</label>
                <div className="flex gap-3 mb-3">
                  <button onClick={() => setPriceType("range")} className={`flex-1 py-2 rounded-lg border text-sm font-semibold transition-all ${priceType === "range" ? "border-violet-500 bg-violet-50 text-violet-700" : "border-gray-200 bg-gray-50 text-gray-600"}`}>
                    Giá từ - Giá đến
                  </button>
                  <button onClick={() => setPriceType("contact")} className={`flex-1 py-2 rounded-lg border text-sm font-semibold transition-all ${priceType === "contact" ? "border-violet-500 bg-violet-50 text-violet-700" : "border-gray-200 bg-gray-50 text-gray-600"}`}>
                    Liên hệ báo giá
                  </button>
                </div>
                {priceType === "range" && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Giá từ</label>
                      <input defaultValue="1000000" type="number" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700">Giá đến</label>
                      <input defaultValue="5000000" type="number" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Thời gian thực hiện</label>
                <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                  <option>3 ngày</option>
                  <option>7 ngày</option>
                  <option>30 ngày</option>
                  <option>60 ngày</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Hình thức thực hiện</label>
                <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                  <option>Tại văn phòng</option>
                  <option>Tại công trình</option>
                  <option>Online</option>
                  <option>Tại nhà khách hàng</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">SEO dịch vụ</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">SEO Title <span className="text-gray-400">(tối đa 70 ký tự)</span></label>
                <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                <CharCounter current={seoTitle.length} max={70} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Meta Description <span className="text-gray-400">(tối đa 160 ký tự)</span></label>
                <textarea rows={3} value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
                <CharCounter current={seoDesc.length} max={160} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Keywords</label>
                  <input defaultValue="thiết kế website, website doanh nghiệp" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Canonical URL</label>
                  <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                </div>
              </div>
            </div>
            <GooglePreview title={seoTitle} url="butpha.com/thiet-ke-website-doanh-nghiep" desc={seoDesc} />
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thiết lập hiển thị</div>
            <div className="space-y-3">
              {[
                { label: "Hiển thị", checked: true },
                { label: "Dịch vụ nổi bật", checked: false },
                { label: "Hiển thị trang chủ", checked: false },
                { label: "Hiển thị menu", checked: true },
                { label: "Cho phép đặt lịch", checked: true },
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${item.checked ? "border-violet-500 bg-violet-500" : "border-gray-300 bg-gray-50"}`}>
                    {item.checked && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   3. QUẢN LÝ ĐẶT LỊCH
═══════════════════════════════════════════════════ */
function AppointmentList({ onBack, onDetail }: { onBack: () => void; onDetail: (id: string) => void }) {
  const stats = [
    { label: "Lịch hẹn mới", value: 3, color: "#7c3aed", bg: "#f5f3ff" },
    { label: "Đã xác nhận", value: 2, color: "#1d4ed8", bg: "#eff6ff" },
    { label: "Đang xử lý", value: 1, color: "#f59e0b", bg: "#fffbeb" },
    { label: "Hoàn thành", value: 5, color: "#15803d", bg: "#f0fdf4" },
    { label: "Đã hủy", value: 1, color: "#dc2626", bg: "#fef2f2" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Quản lý đặt lịch</h1>
            <p className="text-sm text-gray-400 mt-0.5">{sampleAppointments.length} lịch hẹn</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: stat.bg }}>
                <Calendar className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div>
                <div className="text-xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-4 p-4 border-b border-gray-100">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Tìm kiếm lịch hẹn..." className="w-full pl-9 pr-4 h-10 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-violet-400 outline-none transition-all" />
          </div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option>Tất cả trạng thái</option>
            {Object.entries(appointmentStatusMap).map(([key, val]) => <option key={key}>{val.label}</option>)}
          </select>
        </div>
        <table className="w-full">
          <thead style={{ background: "#fafafa" }}>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Mã lịch</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Khách hàng</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Điện thoại</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Dịch vụ</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Ngày hẹn</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Giờ hẹn</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Trạng thái</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sampleAppointments.map((apt) => (
              <tr key={apt.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4 text-sm font-bold text-violet-600">{apt.id}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{apt.customer}</td>
                <td className="px-4 py-4">
                  <a href={`tel:${apt.phone}`} className="text-sm text-blue-600 hover:underline font-medium flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {apt.phone}
                  </a>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{apt.service}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{apt.date}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{apt.time}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: appointmentStatusMap[apt.status].bg, color: appointmentStatusMap[apt.status].color }}>
                    {appointmentStatusMap[apt.status].label}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onDetail(apt.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Chi tiết">
                      <Eye className="w-3.5 h-3.5 text-violet-600" />
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

function AppointmentDetail({ onBack }: { onBack: () => void }) {
  const apt = sampleAppointments[0];
  const [status, setStatus] = useState(apt.status);
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-black text-gray-900">Chi tiết lịch hẹn</h1>
            <p className="text-sm text-gray-400 mt-0.5">{apt.id}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin khách hàng</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Họ tên</label>
                <input value={apt.customer} readOnly className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Điện thoại</label>
                <input value={apt.phone} readOnly className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none" />
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Email</label>
                <input placeholder="email@example.com" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Địa chỉ</label>
                <input placeholder="Địa chỉ của khách hàng" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin dịch vụ</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Dịch vụ quan tâm</label>
                <input value={apt.service} readOnly className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Ngày đặt lịch</label>
                <input value={apt.date} readOnly className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Giờ đặt lịch</label>
                <input value={apt.time} readOnly className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Nội dung yêu cầu</div>
            <textarea rows={3} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" placeholder="Ghi chú của khách hàng..." />
          </div>
        </div>

        <div className="col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Trạng thái lịch hẹn</div>
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
              {Object.entries(appointmentStatusMap).map(([key, val]) => <option key={key} value={key}>{val.label}</option>)}
            </select>
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
                <Mail className="w-4 h-4" /> Gửi email xác nhận
              </button>
              <a href={`tel:${apt.phone}`} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
                <Phone className="w-4 h-4" /> Gọi nhanh khách hàng
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Ghi chú nội bộ</div>
            <textarea rows={5} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" placeholder="Ghi chú nội bộ..." />
          </div>

          <div className="flex gap-2">
            <button onClick={onBack} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
              Quay lại
            </button>
            <button onClick={onBack} className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function ServiceManagement() {
  const [page, setPage] = useState<Page>("service-list");
  const [subMenu, setSubMenu] = useState<SubMenu>("services");

  const renderPage = () => {
    switch (page) {
      case "cat-list": return <CategoryList onBack={() => setPage("service-list")} onAdd={() => setPage("cat-form")} onEdit={() => setPage("cat-form")} onDelete={() => {}} />;
      case "cat-form": return <CategoryForm onBack={() => setPage("cat-list")} />;
      case "service-list": return <ServiceList onBack={() => {}} onAdd={() => setPage("service-form")} onEdit={() => setPage("service-form")} onDelete={() => {}} />;
      case "service-form": return <ServiceForm onBack={() => setPage("service-list")} />;
      case "appointment-list": return <AppointmentList onBack={() => {}} onDetail={() => setPage("appointment-detail")} />;
      case "appointment-detail": return <AppointmentDetail onBack={() => setPage("appointment-list")} />;
    }
  };

  return (
    <Layout subMenu={subMenu} setSubMenu={setSubMenu} page={page} setPage={setPage}>
      {renderPage()}
    </Layout>
  );
}

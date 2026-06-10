import React, { useState } from "react";
import {
  Package, Tag, ShoppingCart, ChevronRight, ChevronDown, Search,
  Plus, Edit3, Trash2, Copy, Eye, EyeOff, ArrowLeft, Upload,
  Home, Settings, Newspaper, File, FolderOpen, ImageIcon,
  Briefcase, Bell, LogOut, User, GripVertical, Check, X,
  TrendingUp, Clock, Truck, CheckCircle, XCircle, Filter,
  ChevronLeft, MoreHorizontal, Star, BarChart3, AlertCircle,
  Image, Link, Table, Video, Bold, Italic, List,
} from "lucide-react";

/* ─── Types ─── */
type Page = "cat-list" | "cat-form" | "prod-list" | "prod-form" | "order-list" | "order-detail";
type SubMenu = "categories" | "products" | "orders";

/* ─── Sample data ─── */
const sampleCategories = [
  { id: 1, name: "Cúp Kim Loại", slug: "cup-kim-loai", visible: true, date: "01/06/2025", products: 24 },
  { id: 2, name: "Huy Chương", slug: "huy-chuong", visible: true, date: "02/06/2025", products: 18 },
  { id: 3, name: "Cúp Pha Lê", slug: "cup-pha-le", visible: false, date: "03/06/2025", products: 12 },
  { id: 4, name: "Bảng Vàng", slug: "bang-vang", visible: true, date: "04/06/2025", products: 9 },
  { id: 5, name: "Phụ Kiện", slug: "phu-kien", visible: true, date: "05/06/2025", products: 31 },
];

const sampleProducts = [
  { id: 1, name: "Cúp Kim Loại JB-DB284", sku: "JB-DB284", cat: "Cúp Kim Loại", price: 850000, salePrice: 680000, stock: 45, status: "active", date: "01/06/2025" },
  { id: 2, name: "Huy Chương Vàng Classic", sku: "HCV-001", cat: "Huy Chương", price: 120000, salePrice: 0, stock: 200, status: "active", date: "02/06/2025" },
  { id: 3, name: "Cúp Pha Lê Crystal Pro", sku: "PL-CR01", cat: "Cúp Pha Lê", price: 2400000, salePrice: 1980000, stock: 8, status: "active", date: "03/06/2025" },
  { id: 4, name: "Bảng Vàng Khắc Laser", sku: "BV-L01", cat: "Bảng Vàng", price: 350000, salePrice: 280000, stock: 0, status: "inactive", date: "04/06/2025" },
  { id: 5, name: "Cúp Kim Loại Premium", sku: "KL-PM01", cat: "Cúp Kim Loại", price: 1200000, salePrice: 960000, stock: 15, status: "active", date: "05/06/2025" },
  { id: 6, name: "Huy Chương Bạc Sport", sku: "HCB-SP01", cat: "Huy Chương", price: 95000, salePrice: 0, stock: 180, status: "active", date: "06/06/2025" },
];

const sampleOrders = [
  { id: "DH-2506001", customer: "Nguyễn Văn An", phone: "0901234567", total: 1360000, status: "new", date: "06/06/2025" },
  { id: "DH-2506002", customer: "Trần Thị Bình", phone: "0912345678", total: 5940000, status: "confirmed", date: "05/06/2025" },
  { id: "DH-2506003", customer: "Lê Minh Cường", phone: "0923456789", total: 680000, status: "shipping", date: "04/06/2025" },
  { id: "DH-2506004", customer: "Phạm Thị Dung", phone: "0934567890", total: 840000, status: "done", date: "03/06/2025" },
  { id: "DH-2506005", customer: "Hoàng Văn Em", phone: "0945678901", total: 280000, status: "cancelled", date: "02/06/2025" },
  { id: "DH-2506006", customer: "Võ Thị Phương", phone: "0956789012", total: 2880000, status: "new", date: "01/06/2025" },
];

const orderStatusMap: Record<string, { label: string; color: string; bg: string }> = {
  new:       { label: "Mới đặt",     color: "#7c3aed", bg: "#f5f3ff" },
  confirmed: { label: "Đã xác nhận", color: "#1d4ed8", bg: "#eff6ff" },
  shipping:  { label: "Đang giao",   color: "#b45309", bg: "#fffbeb" },
  done:      { label: "Hoàn thành",  color: "#15803d", bg: "#f0fdf4" },
  cancelled: { label: "Đã hủy",      color: "#dc2626", bg: "#fef2f2" },
};

const fmt = (n: number) => n.toLocaleString("vi-VN") + "đ";
const discount = (orig: number, sale: number) => sale ? Math.round((1 - sale / orig) * 100) : 0;

/* ─── Sidebar menu ─── */
const sidebarGroups = [
  { label: "TỔNG QUAN",  items: [{ icon: Home,      label: "Tổng quan",          sub: null }] },
  { label: "SẢN PHẨM",  items: [
    { icon: Package,    label: "Quản lý sản phẩm",  sub: "products" as SubMenu, children: [
      { icon: Tag,         label: "Danh mục",         sub: "categories" as SubMenu },
      { icon: Package,     label: "Sản phẩm",         sub: "products"   as SubMenu },
      { icon: ShoppingCart,label: "Đơn hàng",         sub: "orders"     as SubMenu },
    ]},
  ]},
  { label: "NỘI DUNG",  items: [
    { icon: Briefcase,  label: "Dịch vụ",            sub: null },
    { icon: Newspaper,  label: "Tin tức",             sub: null },
    { icon: File,       label: "Trang tĩnh",          sub: null },
    { icon: ImageIcon,  label: "Hình ảnh",            sub: null },
  ]},
  { label: "HỆ THỐNG",  items: [
    { icon: Search,     label: "SEO Page",            sub: null },
    { icon: Settings,   label: "Thiết lập",           sub: null },
  ]},
];

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
    subMenu === "categories" ? "Danh mục sản phẩm"
    : subMenu === "products" ? "Quản lý sản phẩm"
    : "Đơn hàng";

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
                        onClick={() => { if (hasChildren) setExpanded(!expanded); else if (item.sub) { setSubMenu(item.sub as SubMenu); setPage(item.sub === "categories" ? "cat-list" : item.sub === "products" ? "prod-list" : "order-list"); } }}
                        className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all"
                        style={{
                          paddingLeft: "10px", paddingRight: "8px",
                          background: isParentActive ? "rgba(255,255,255,.08)" : "transparent",
                          color: isParentActive ? "white" : "rgba(255,255,255,.55)",
                          fontWeight: isParentActive ? 600 : 500,
                          borderLeft: isParentActive ? "2px solid #a78bfa" : "2px solid transparent",
                        }}
                      >
                        <item.icon style={{ width: ".85rem", height: ".85rem", flexShrink: 0, color: isParentActive ? "#c4b5fd" : "rgba(255,255,255,.35)" }} />
                        <span className="flex-1 text-[12px] leading-tight">{item.label}</span>
                        {hasChildren ? <ChevronDown style={{ width: ".7rem", height: ".7rem", opacity: .4, transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform .2s" }} /> : <ChevronRight style={{ width: ".7rem", height: ".7rem", opacity: isParentActive ? .5 : .15 }} />}
                      </button>
                      {hasChildren && expanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {item.children!.map((child) => {
                            const isActive = child.sub === subMenu;
                            return (
                              <button key={child.label}
                                onClick={() => { setSubMenu(child.sub); setPage(child.sub === "categories" ? "cat-list" : child.sub === "products" ? "prod-list" : "order-list"); }}
                                className="w-full flex items-center gap-2 py-2 rounded-lg text-left transition-all"
                                style={{
                                  paddingLeft: "10px", paddingRight: "8px",
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
            <span className="text-gray-400">Quản lý sản phẩm</span>
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
   1. DANH MỤC SẢN PHẨM — LIST
═══════════════════════════════════════════════════ */
function CategoryList({ onAdd, onEdit }: { onAdd: () => void; onEdit: () => void }) {
  const [search, setSearch] = useState("");
  const [cats, setCats] = useState(sampleCategories);

  const toggleVisible = (id: number) => setCats(c => c.map(x => x.id === id ? { ...x, visible: !x.visible } : x));
  const filtered = cats.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Title row */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-black text-gray-900">Danh mục sản phẩm</h1>
          <p className="text-sm text-gray-400 mt-0.5">{cats.length} danh mục</p>
        </div>
        <button onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" />Thêm danh mục
        </button>
      </div>

      {/* Search bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Tìm kiếm danh mục..." className="w-full pl-9 pr-3 h-10 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              {["", "STT", "Tên danh mục", "Slug", "Sản phẩm", "Hiển thị", "Ngày tạo", "Thao tác"].map(h => (
                <th key={h} className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((cat, i) => (
              <tr key={cat.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-3 py-3.5 w-8">
                  <GripVertical className="w-4 h-4 text-gray-300 group-hover:text-gray-400 cursor-grab" />
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-500 font-medium">{i + 1}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#f5f3ff,#ede9fe)" }}>
                      <Tag className="w-4 h-4 text-violet-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{cat.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <code className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{cat.slug}</code>
                </td>
                <td className="px-4 py-3.5">
                  <span className="text-sm font-bold text-gray-700">{cat.products}</span>
                </td>
                <td className="px-4 py-3.5">
                  <button onClick={() => toggleVisible(cat.id)}
                    className="relative w-11 h-6 rounded-full transition-all flex-shrink-0"
                    style={{ background: cat.visible ? "#7c3aed" : "#e2e8f0" }}>
                    <div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all" style={{ left: cat.visible ? "calc(100% - 22px)" : "2px" }} />
                  </button>
                </td>
                <td className="px-4 py-3.5 text-sm text-gray-500">{cat.date}</td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <button onClick={onEdit} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Sửa">
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
   1b. DANH MỤC — FORM THÊM/SỬA
═══════════════════════════════════════════════════ */
function CategoryForm({ onBack }: { onBack: () => void }) {
  const [name, setName] = useState("Cúp Kim Loại");
  const [slug] = useState("cup-kim-loai");
  const [tab, setTab] = useState<"basic" | "seo">("basic");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div>
          <h1 className="text-xl font-black text-gray-900">Chỉnh sửa danh mục</h1>
          <p className="text-sm text-gray-400 mt-0.5">Cúp Kim Loại</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button onClick={onBack} className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">Hủy</button>
          <button className="px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>Lưu thay đổi</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-xl w-fit mb-5">
        {[["basic","Thông tin cơ bản"],["seo","SEO"]].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key as "basic" | "seo")}
            className="px-4 py-1.5 rounded-lg text-sm font-semibold transition-all"
            style={{ background: tab === key ? "white" : "transparent", color: tab === key ? "#7c3aed" : "#94a3b8", boxShadow: tab === key ? "0 1px 4px rgba(0,0,0,.08)" : "none" }}>
            {label}
          </button>
        ))}
      </div>

      {tab === "basic" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
            <FormField label="Tên danh mục" required>
              <input value={name} onChange={e => setName(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Slug (URL)">
              <div className="flex items-center h-11 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <span className="px-3 text-xs text-gray-400 border-r border-gray-200 h-full flex items-center bg-gray-100">domain.com/</span>
                <input defaultValue={slug} className="flex-1 px-3 text-sm outline-none bg-transparent" />
              </div>
            </FormField>
            <FormField label="Mô tả ngắn">
              <textarea rows={3} defaultValue="Danh mục cúp kim loại các loại, thiết kế đa dạng, chất lượng cao." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            </FormField>
            <FormField label="Hình đại diện">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-violet-300 transition-colors hover:bg-violet-50/20">
                <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center">
                  <Upload className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-sm font-semibold text-gray-700">Kéo thả hoặc click để tải ảnh</p>
                <p className="text-xs text-gray-400">PNG, JPG, WEBP tối đa 5MB</p>
              </div>
            </FormField>
          </div>
        </div>
      )}

      {tab === "seo" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <FormField label="SEO Title" hint="Tối đa 70 ký tự">
            <input defaultValue="Cúp Kim Loại Cao Cấp - Bứt Phá Marketing" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            <CharCounter current={42} max={70} />
          </FormField>
          <FormField label="Meta Description" hint="Tối đa 160 ký tự">
            <textarea rows={3} defaultValue="Mua cúp kim loại chất lượng cao, thiết kế đẹp, giá tốt. Giao hàng toàn quốc, khắc tên theo yêu cầu." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            <CharCounter current={98} max={160} />
          </FormField>
          <FormField label="Keywords">
            <input defaultValue="cúp kim loại, cúp thể thao, cúp giải thưởng" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <GooglePreview title="Cúp Kim Loại Cao Cấp - Bứt Phá Marketing" url="domain.com/cup-kim-loai" desc="Mua cúp kim loại chất lượng cao, thiết kế đẹp, giá tốt. Giao hàng toàn quốc, khắc tên theo yêu cầu." />
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   2. SẢN PHẨM — DANH SÁCH
═══════════════════════════════════════════════════ */
function ProductList({ onAdd, onEdit }: { onAdd: () => void; onEdit: () => void }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [catFilter, setCatFilter] = useState("all");
  const [selected, setSelected] = useState<number[]>([]);

  const filtered = sampleProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter === "all" || p.status === statusFilter) &&
    (catFilter === "all" || p.cat === catFilter)
  );

  const toggleSelect = (id: number) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const allSelected = filtered.length > 0 && filtered.every(p => selected.includes(p.id));
  const toggleAll = () => setSelected(allSelected ? [] : filtered.map(p => p.id));

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Title */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-black text-gray-900">Sản phẩm</h1>
          <p className="text-sm text-gray-400 mt-0.5">{sampleProducts.length} sản phẩm</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
            <Upload className="w-4 h-4" />Import CSV
          </button>
          <button onClick={onAdd}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Plus className="w-4 h-4" />Thêm sản phẩm
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 p-4">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Tìm tên sản phẩm, mã SKU..." className="w-full pl-9 pr-3 h-10 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </div>
          <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
            className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option value="all">Tất cả danh mục</option>
            {sampleCategories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
          </select>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
            className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Đang hiện</option>
            <option value="inactive">Đã ẩn</option>
          </select>
          <button className="flex items-center gap-2 h-10 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-600 hover:bg-gray-100 transition-colors">
            <Filter className="w-4 h-4" />Lọc thêm
          </button>
        </div>
      </div>

      {/* Bulk actions */}
      {selected.length > 0 && (
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl mb-3 text-sm" style={{ background: "#f5f3ff", border: "1px solid #ede9fe" }}>
          <span className="font-semibold text-violet-700">Đã chọn {selected.length} sản phẩm</span>
          <div className="w-px h-4 bg-violet-200" />
          <button className="text-violet-600 font-medium hover:text-violet-800">Ẩn</button>
          <button className="text-violet-600 font-medium hover:text-violet-800">Hiện</button>
          <button className="text-red-500 font-medium hover:text-red-700">Xóa</button>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              <th className="px-4 py-3 border-b border-gray-100 w-10">
                <input type="checkbox" checked={allSelected} onChange={toggleAll} className="w-4 h-4 rounded accent-violet-600 cursor-pointer" />
              </th>
              {["Sản phẩm", "Mã SP", "Danh mục", "Giá", "Tồn kho", "Trạng thái", "Ngày tạo", ""].map(h => (
                <th key={h} className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4 w-10">
                  <input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggleSelect(p.id)} className="w-4 h-4 rounded accent-violet-600 cursor-pointer" />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100"
                      style={{ background: "linear-gradient(135deg,#f5f3ff,#ede9fe)" }}>
                      <Package className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 leading-tight max-w-[180px] truncate">{p.name}</div>
                      {p.salePrice > 0 && <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">Giảm {discount(p.price, p.salePrice)}%</div>}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4"><code className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">{p.sku}</code></td>
                <td className="px-4 py-4 text-sm text-gray-600">{p.cat}</td>
                <td className="px-4 py-4">
                  <div>
                    {p.salePrice > 0 ? (
                      <>
                        <div className="text-sm font-bold text-gray-900">{fmt(p.salePrice)}</div>
                        <div className="text-xs text-gray-400 line-through">{fmt(p.price)}</div>
                      </>
                    ) : (
                      <div className="text-sm font-bold text-gray-900">{fmt(p.price)}</div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-sm font-bold ${p.stock === 0 ? "text-red-500" : p.stock < 10 ? "text-amber-600" : "text-gray-800"}`}>{p.stock}</span>
                  {p.stock === 0 && <div className="text-[10px] text-red-500 font-medium">Hết hàng</div>}
                  {p.stock > 0 && p.stock < 10 && <div className="text-[10px] text-amber-500 font-medium">Sắp hết</div>}
                </td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: p.status === "active" ? "#f0fdf4" : "#f8fafc", color: p.status === "active" ? "#15803d" : "#94a3b8" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.status === "active" ? "#22c55e" : "#cbd5e1" }} />
                    {p.status === "active" ? "Đang hiện" : "Đã ẩn"}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{p.date}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={onEdit} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors" title="Sửa">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors" title="Nhân bản">
                      <Copy className="w-3.5 h-3.5 text-gray-500" />
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
        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-500">Hiển thị {filtered.length} / {sampleProducts.length} sản phẩm</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
            {[1, 2, 3].map(n => (
              <button key={n} className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold transition-colors"
                style={{ background: n === 1 ? "#7c3aed" : "transparent", color: n === 1 ? "white" : "#6b7280" }}>
                {n}
              </button>
            ))}
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   2b. SẢN PHẨM — FORM THÊM/SỬA
═══════════════════════════════════════════════════ */
function ProductForm({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"basic"|"images"|"price"|"stock"|"seo"|"display">("basic");
  const [origPrice, setOrigPrice] = useState(1000000);
  const [salePrice, setSalePrice] = useState(800000);
  const disc = origPrice > 0 && salePrice > 0 ? Math.round((1 - salePrice / origPrice) * 100) : 0;

  const tabs = [
    { key: "basic",   label: "Thông tin" },
    { key: "images",  label: "Hình ảnh"  },
    { key: "price",   label: "Giá"       },
    { key: "stock",   label: "Tồn kho"   },
    { key: "seo",     label: "SEO"       },
    { key: "display", label: "Hiển thị"  },
  ] as const;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-black text-gray-900">Thêm sản phẩm mới</h1>
          <p className="text-sm text-gray-400 mt-0.5">Điền đầy đủ thông tin sản phẩm</p>
        </div>
        <button onClick={onBack} className="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">Hủy</button>
        <button className="px-4 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          Lưu sản phẩm
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex gap-0.5 bg-gray-100 p-1 rounded-xl w-fit mb-5 overflow-x-auto">
        {tabs.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className="px-3.5 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all"
            style={{ background: tab === t.key ? "white" : "transparent", color: tab === t.key ? "#7c3aed" : "#94a3b8", boxShadow: tab === t.key ? "0 1px 4px rgba(0,0,0,.08)" : "none" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Thông tin */}
      {tab === "basic" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <FormField label="Tên sản phẩm" required>
            <input defaultValue="Cúp Kim Loại JB-DB284" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Mã sản phẩm (SKU)" required>
              <input defaultValue="JB-DB284" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            </FormField>
            <FormField label="Danh mục">
              <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                {sampleCategories.map(c => <option key={c.id}>{c.name}</option>)}
              </select>
            </FormField>
          </div>
          <FormField label="Slug (URL)">
            <div className="flex items-center h-11 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
              <span className="px-3 text-xs text-gray-400 border-r border-gray-200 h-full flex items-center bg-gray-100 whitespace-nowrap">domain.com/</span>
              <input defaultValue="cup-kim-loai-jb-db284" className="flex-1 px-3 text-sm outline-none bg-transparent" />
            </div>
          </FormField>
          <FormField label="Mô tả ngắn">
            <textarea rows={2} defaultValue="Cúp Kim Loại cao cấp JB-DB284, chiều cao 39cm, chất liệu nhựa mạ vàng, đế nhựa." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
          </FormField>
          <FormField label="Nội dung sản phẩm">
            {/* Mini editor toolbar */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100 bg-gray-50 flex-wrap">
                {([
                  [Bold, "Bold"], [Italic, "Italic"], [List, "List"],
                  [Image, "Ảnh"], [Video, "Video"], [Table, "Bảng"], [Link, "Link"],
                ] as [React.ElementType, string][]).map(([Ic, label]) => (
                  <button key={label} title={label} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-colors text-gray-600">
                    <Ic className="w-3.5 h-3.5" />
                  </button>
                ))}
                <div className="w-px h-5 bg-gray-200 mx-1" />
                {["H1","H2","H3"].map(h => (
                  <button key={h} className="px-2 h-7 text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors text-gray-600">{h}</button>
                ))}
              </div>
              <textarea rows={6} defaultValue="Cúp Kim Loại JB-DB284 là lựa chọn hoàn hảo cho các giải đấu thể thao và sự kiện doanh nghiệp. Thiết kế sang trọng, đẳng cấp với chất liệu kim loại cao cấp.&#10;&#10;• Chiều cao: 39cm&#10;• Chất liệu: Nhựa mạ vàng&#10;• Đế: Nhựa cao cấp&#10;• Có thể khắc tên theo yêu cầu" className="w-full px-4 py-3 text-sm outline-none resize-none bg-white text-gray-700 leading-relaxed" />
            </div>
          </FormField>
        </div>
      )}

      {/* Tab: Hình ảnh */}
      {tab === "images" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-3">Ảnh đại diện</h3>
            <div className="flex items-start gap-5">
              <div className="w-36 h-36 rounded-2xl border-2 border-dashed border-violet-200 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 transition-colors hover:bg-violet-50/20 bg-gray-50">
                <Upload className="w-7 h-7 text-violet-300" />
                <p className="text-xs text-gray-400 text-center px-2">Click để tải ảnh</p>
              </div>
              <div className="flex-1 text-sm text-gray-500 space-y-1.5 pt-2">
                <p className="font-semibold text-gray-700">Yêu cầu ảnh đại diện</p>
                <p>• Kích thước tối thiểu: 600×600px</p>
                <p>• Định dạng: JPG, PNG, WEBP</p>
                <p>• Dung lượng tối đa: 5MB</p>
                <button className="mt-2 text-xs font-semibold text-violet-600 hover:text-violet-800">Crop ảnh</button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-800 mb-3">Album ảnh sản phẩm</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-violet-300 transition-colors hover:bg-violet-50/10 mb-4">
              <Upload className="w-8 h-8 text-gray-300" />
              <p className="text-sm font-semibold text-gray-600">Kéo thả nhiều ảnh vào đây</p>
              <p className="text-xs text-gray-400">Hoặc click để chọn ảnh · Tối đa 20 ảnh</p>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[1,2,3].map(i => (
                <div key={i} className="relative group aspect-square rounded-xl overflow-hidden border border-gray-100"
                  style={{ background: `linear-gradient(135deg, #f5f3ff, #ede9fe)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="w-6 h-6 text-violet-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="w-7 h-7 bg-white rounded-lg flex items-center justify-center"><Trash2 className="w-3.5 h-3.5 text-red-500" /></button>
                  </div>
                  <div className="absolute top-1.5 left-1.5 w-5 h-5 bg-violet-600 rounded-md flex items-center justify-center">
                    <GripVertical className="w-3 h-3 text-white" />
                  </div>
                </div>
              ))}
              <div className="aspect-square rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-violet-300 transition-colors hover:bg-violet-50/10">
                <Plus className="w-6 h-6 text-gray-300" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Giá */}
      {tab === "price" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Giá gốc (đ)" required>
              <div className="relative">
                <input type="number" value={origPrice} onChange={e => setOrigPrice(+e.target.value)}
                  className="w-full h-11 px-3.5 pr-10 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-bold">đ</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{origPrice.toLocaleString("vi-VN")} đồng</p>
            </FormField>
            <FormField label="Giá bán (đ)">
              <div className="relative">
                <input type="number" value={salePrice} onChange={e => setSalePrice(+e.target.value)}
                  className="w-full h-11 px-3.5 pr-10 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-bold">đ</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{salePrice.toLocaleString("vi-VN")} đồng</p>
            </FormField>
          </div>
          {disc > 0 && (
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "#f0fdf4", border: "1px solid #dcfce7" }}>
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-emerald-800">Đang giảm {disc}%</p>
                <p className="text-xs text-emerald-600">Khách tiết kiệm {(origPrice - salePrice).toLocaleString("vi-VN")}đ</p>
              </div>
              <div className="ml-auto">
                <span className="text-3xl font-black text-emerald-700">-{disc}%</span>
              </div>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            <div className="text-sm">
              <p className="text-gray-500 mb-0.5">Giá gốc</p>
              <p className="text-xl font-black text-gray-800">{fmt(origPrice)}</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-500 mb-0.5">Giá bán</p>
              <p className="text-xl font-black text-violet-700">{salePrice > 0 ? fmt(salePrice) : "—"}</p>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Tồn kho */}
      {tab === "stock" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <FormField label="Số lượng tồn kho" required>
            <input type="number" defaultValue={45} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <FormField label="Cảnh báo khi còn lại">
            <input type="number" defaultValue={5} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            <p className="text-xs text-gray-400 mt-1">Khi tồn kho ≤ số này sẽ hiển thị cảnh báo "Sắp hết hàng"</p>
          </FormField>
          <FormField label="Trạng thái">
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "instock", label: "Còn hàng", color: "#15803d", bg: "#f0fdf4" },
                { val: "outstock", label: "Hết hàng", color: "#dc2626", bg: "#fef2f2" },
                { val: "stop", label: "Ngừng KD", color: "#78716c", bg: "#f5f5f4" },
              ].map(opt => (
                <label key={opt.val} className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all"
                  style={{ borderColor: "#e2e8f0" }}>
                  <input type="radio" name="stock_status" defaultChecked={opt.val === "instock"} className="accent-violet-600" />
                  <span className="text-sm font-semibold" style={{ color: opt.color }}>{opt.label}</span>
                </label>
              ))}
            </div>
          </FormField>
        </div>
      )}

      {/* Tab: SEO */}
      {tab === "seo" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
          <FormField label="SEO Title" hint="Tối đa 70 ký tự">
            <input defaultValue="Cúp Kim Loại JB-DB284 - Cao Cấp, Đẹp | Bứt Phá Marketing" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
            <CharCounter current={58} max={70} />
          </FormField>
          <FormField label="Meta Description" hint="Tối đa 160 ký tự">
            <textarea rows={3} defaultValue="Mua Cúp Kim Loại JB-DB284 chính hãng, cao 39cm, chất liệu nhựa mạ vàng. Giao hàng toàn quốc, khắc tên theo yêu cầu. Giá tốt nhất!" className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            <CharCounter current={130} max={160} />
          </FormField>
          <FormField label="Keywords">
            <input defaultValue="cúp kim loại, cúp JB-DB284, cúp thể thao, cúp giải thưởng" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
          </FormField>
          <FormField label="URL chuẩn SEO">
            <div className="h-11 flex items-center px-3.5 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-500">
              https://domain.com/<span className="text-violet-700 font-medium">cup-kim-loai-jb-db284</span>
            </div>
          </FormField>
          <GooglePreview
            title="Cúp Kim Loại JB-DB284 - Cao Cấp, Đẹp | Bứt Phá Marketing"
            url="domain.com/cup-kim-loai-jb-db284"
            desc="Mua Cúp Kim Loại JB-DB284 chính hãng, cao 39cm, chất liệu nhựa mạ vàng. Giao hàng toàn quốc, khắc tên theo yêu cầu. Giá tốt nhất!"
          />
        </div>
      )}

      {/* Tab: Hiển thị */}
      {tab === "display" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
          <h3 className="text-sm font-bold text-gray-800 mb-2">Tuỳ chọn hiển thị</h3>
          {[
            { key: "featured",    label: "Nổi bật",               desc: "Hiển thị nhãn 'Nổi bật' trên sản phẩm",          default: true  },
            { key: "home",        label: "Hiển thị trang chủ",     desc: "Sản phẩm xuất hiện trên trang chủ",               default: true  },
            { key: "cat",         label: "Hiển thị danh mục",      desc: "Hiển thị trong trang danh mục sản phẩm",          default: true  },
            { key: "order",       label: "Cho phép đặt hàng",      desc: "Khách hàng có thể đặt hàng sản phẩm này",          default: true  },
            { key: "showprice",   label: "Hiển thị giá",           desc: "Hiển thị giá sản phẩm công khai",                 default: true  },
          ].map(opt => (
            <div key={opt.key} className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0">
              <input type="checkbox" defaultChecked={opt.default} className="w-4 h-4 rounded accent-violet-600 cursor-pointer mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-800">{opt.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   3. ĐƠN HÀNG — DANH SÁCH
═══════════════════════════════════════════════════ */
function OrderList({ onDetail }: { onDetail: () => void }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const filtered = sampleOrders.filter(o => statusFilter === "all" || o.status === statusFilter);

  const stats = [
    { label: "Đơn mới",      status: "new",       count: sampleOrders.filter(o => o.status === "new").length,       icon: ShoppingCart, color: "#7c3aed", bg: "#f5f3ff" },
    { label: "Đã xác nhận",  status: "confirmed",  count: sampleOrders.filter(o => o.status === "confirmed").length, icon: CheckCircle,  color: "#1d4ed8", bg: "#eff6ff" },
    { label: "Đang giao",    status: "shipping",   count: sampleOrders.filter(o => o.status === "shipping").length,  icon: Truck,        color: "#b45309", bg: "#fffbeb" },
    { label: "Hoàn thành",   status: "done",       count: sampleOrders.filter(o => o.status === "done").length,      icon: Check,        color: "#15803d", bg: "#f0fdf4" },
    { label: "Đã hủy",       status: "cancelled",  count: sampleOrders.filter(o => o.status === "cancelled").length, icon: XCircle,      color: "#dc2626", bg: "#fef2f2" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-black text-gray-900">Đơn hàng</h1>
          <p className="text-sm text-gray-400 mt-0.5">{sampleOrders.length} đơn hàng</p>
        </div>
        <button className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">
          <Upload className="w-4 h-4" />Xuất Excel
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {stats.map(({ label, status, count, icon: Icon, color, bg }) => (
          <button key={status} onClick={() => setStatusFilter(statusFilter === status ? "all" : status)}
            className="p-4 rounded-2xl text-left transition-all"
            style={{
              background: statusFilter === status ? bg : "white",
              border: `1px solid ${statusFilter === status ? color + "40" : "#f1f5f9"}`,
              boxShadow: statusFilter === status ? `0 0 0 2px ${color}30` : "0 1px 3px rgba(0,0,0,.04)",
            }}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-2" style={{ background: bg }}>
              <Icon className="w-4 h-4" style={{ color }} />
            </div>
            <div className="text-2xl font-black" style={{ color }}>{count}</div>
            <div className="text-xs text-gray-500 mt-0.5 font-medium">{label}</div>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 p-4">
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input placeholder="Tìm mã đơn, tên khách hàng, SĐT..." className="w-full pl-9 pr-3 h-10 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors" />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr style={{ background: "#fafafa" }}>
              {["Mã đơn", "Khách hàng", "SĐT", "Tổng tiền", "Trạng thái", "Ngày tạo", "Thao tác"].map(h => (
                <th key={h} className="text-left text-xs font-bold text-gray-500 px-5 py-3 border-b border-gray-100">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => {
              const st = orderStatusMap[order.status];
              return (
                <tr key={order.id} className="group hover:bg-violet-50/20 transition-colors border-b border-gray-50 last:border-0">
                  <td className="px-5 py-4">
                    <span className="text-sm font-bold text-violet-700 cursor-pointer hover:underline" onClick={onDetail}>{order.id}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
                        {order.customer[0]}
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{order.phone}</td>
                  <td className="px-5 py-4 text-sm font-bold text-gray-900">{fmt(order.total)}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: st.bg, color: st.color }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: st.color }} />
                      {st.label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-5 py-4">
                    <button onClick={onDetail} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                      style={{ background: "#f5f3ff", color: "#7c3aed" }}>
                      <Eye className="w-3.5 h-3.5" />Chi tiết
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-5 py-3.5 border-t border-gray-100">
          <p className="text-xs text-gray-500">Hiển thị {filtered.length} đơn hàng</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold text-white" style={{ background: "#7c3aed" }}>1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   3b. ĐƠN HÀNG — CHI TIẾT
═══════════════════════════════════════════════════ */
function OrderDetail({ onBack }: { onBack: () => void }) {
  const [status, setStatus] = useState("confirmed");
  const order = sampleOrders[1];
  const st = orderStatusMap[status];

  const items = [
    { name: "Cúp Kim Loại JB-DB284", sku: "JB-DB284", qty: 2, price: 680000, img: "🏆" },
    { name: "Huy Chương Vàng Classic", sku: "HCV-001", qty: 5, price: 120000, img: "🥇" },
  ];
  const total = items.reduce((acc, i) => acc + i.qty * i.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-black text-gray-900">{order.id}</h1>
          <p className="text-sm text-gray-400 mt-0.5">Đặt lúc {order.date} · {order.customer}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-xl"
          style={{ background: st.bg, color: st.color }}>
          <div className="w-2 h-2 rounded-full" style={{ background: st.color }} />
          {st.label}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Left: 2 cols */}
        <div className="col-span-2 space-y-4">
          {/* Order items */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h3 className="text-sm font-bold text-gray-900">Sản phẩm đặt hàng</h3>
            </div>
            <div className="p-5 space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "#f5f3ff" }}>{item.img}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">SKU: {item.sku} · SL: {item.qty}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{fmt(item.qty * item.price)}</p>
                    <p className="text-xs text-gray-400">{fmt(item.price)}/cái</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-4 border-t border-gray-100 space-y-2">
              <div className="flex justify-between text-sm text-gray-500"><span>Tạm tính</span><span>{fmt(total)}</span></div>
              <div className="flex justify-between text-sm text-gray-500"><span>Phí vận chuyển</span><span className="text-green-600 font-semibold">Miễn phí</span></div>
              <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-100"><span>Tổng cộng</span><span className="text-violet-700">{fmt(total)}</span></div>
            </div>
          </div>

          {/* Internal notes */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Ghi chú nội bộ</h3>
            <textarea rows={3} defaultValue="Khách yêu cầu khắc tên: 'Công Ty TNHH ABC'. Giao trước 20/06/2025." className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
            <button className="mt-2 px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
              Lưu ghi chú
            </button>
          </div>
        </div>

        {/* Right: 1 col */}
        <div className="space-y-4">
          {/* Customer info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Thông tin khách hàng</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>{order.customer[0]}</div>
              <div>
                <p className="text-sm font-bold text-gray-900">{order.customer}</p>
                <p className="text-xs text-gray-400">Khách hàng mới</p>
              </div>
            </div>
            <div className="space-y-2.5 text-sm">
              {[
                { label: "Điện thoại", value: order.phone },
                { label: "Email", value: "khach@email.com" },
                { label: "Địa chỉ", value: "123 Lê Lợi, Q.1, TP.HCM" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <p className="text-gray-800 font-medium mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Status update */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Cập nhật trạng thái</h3>
            <select value={status} onChange={e => setStatus(e.target.value)}
              className="w-full h-11 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer mb-3">
              <option value="new">Mới đặt</option>
              <option value="confirmed">Đã xác nhận</option>
              <option value="shipping">Đang giao</option>
              <option value="done">Hoàn thành</option>
              <option value="cancelled">Đã hủy</option>
            </select>
            <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)" }}>
              Cập nhật
            </button>
          </div>

          {/* Order timeline */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Lịch sử đơn hàng</h3>
            <div className="space-y-3">
              {[
                { text: "Đơn hàng đã xác nhận", time: "05/06 10:30", done: true },
                { text: "Đã tiếp nhận đơn hàng", time: "05/06 09:15", done: true },
                { text: "Khách đặt hàng", time: "05/06 08:42", done: true },
              ].map((event, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#f0fdf4" }}>
                    <Check className="w-3 h-3 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{event.text}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Shared sub-components ─── */
function FormField({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
        {hint && <span className="font-normal text-gray-400 ml-2 normal-case tracking-normal">({hint})</span>}
      </label>
      {children}
    </div>
  );
}

function CharCounter({ current, max }: { current: number; max: number }) {
  const pct = current / max;
  const color = pct > .9 ? "#ef4444" : pct > .7 ? "#f59e0b" : "#7c3aed";
  return (
    <div className="flex items-center gap-2 mt-1.5">
      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct * 100}%`, background: color }} />
      </div>
      <span className="text-xs font-semibold" style={{ color }}>{current}/{max}</span>
    </div>
  );
}

function GooglePreview({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-4 bg-white">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-3">Xem trước Google</p>
      <div className="flex items-center gap-2 mb-1">
        <div className="w-4 h-4 rounded-full bg-gray-100" />
        <span className="text-xs text-gray-600">{url}</span>
        <ChevronDown className="w-3 h-3 text-gray-400" />
      </div>
      <p className="text-[15px] text-blue-700 font-medium hover:underline cursor-pointer leading-snug mb-0.5">{title}</p>
      <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════════════ */
export function ProductManagement() {
  const [subMenu, setSubMenu] = useState<SubMenu>("products");
  const [page, setPage] = useState<Page>("prod-list");

  const content = () => {
    switch (page) {
      case "cat-list":   return <CategoryList onAdd={() => setPage("cat-form")} onEdit={() => setPage("cat-form")} />;
      case "cat-form":   return <CategoryForm onBack={() => setPage("cat-list")} />;
      case "prod-list":  return <ProductList onAdd={() => setPage("prod-form")} onEdit={() => setPage("prod-form")} />;
      case "prod-form":  return <ProductForm onBack={() => setPage("prod-list")} />;
      case "order-list": return <OrderList onDetail={() => setPage("order-detail")} />;
      case "order-detail": return <OrderDetail onBack={() => setPage("order-list")} />;
    }
  };

  return (
    <Layout subMenu={subMenu} setSubMenu={setSubMenu} page={page} setPage={setPage}>
      {content()}
    </Layout>
  );
}

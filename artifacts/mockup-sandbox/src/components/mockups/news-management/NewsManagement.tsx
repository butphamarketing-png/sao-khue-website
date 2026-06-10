import React, { useState } from "react";
import {
  Newspaper, Tag, ChevronDown, ChevronRight, Search,
  Plus, Edit3, Trash2, Copy, Eye, ArrowLeft, Upload,
  Home, Settings, File, FolderOpen, ImageIcon,
  User, Bell, LogOut, CheckCircle, XCircle, Filter,
  MoreHorizontal, Star, Check, X, Calendar,
  Image, Link, Table, Video, Bold, Italic, List,
  Save,
} from "lucide-react";

/* ─── Types ─── */
type Page = "cat-list" | "cat-form" | "post-list" | "post-form";
type SubMenu = "categories" | "posts";

/* ─── Sample Data ─── */
const sampleCategories = [
  { id: 1, name: "Tin tức công ty", slug: "tin-tuc-cong-ty", visible: true, posts: 15 },
  { id: 2, name: "Kiến thức SEO", slug: "kien-thuc-seo", visible: true, posts: 24 },
  { id: 3, name: "Thiết kế website", slug: "thiet-ke-website", visible: true, posts: 18 },
  { id: 4, name: "Marketing Online", slug: "marketing-online", visible: true, posts: 12 },
];

const samplePosts = [
  { id: 1, title: "10 Mẹo SEO giúp website lên top Google", category: "Kiến thức SEO", author: "Admin", status: "published", date: "08/06/2025", featured: true },
  { id: 2, title: "Thiết kế website doanh nghiệp chuẩn UX/UI", category: "Thiết kế website", author: "Editor", status: "draft", date: "07/06/2025", featured: false },
  { id: 3, title: "Tin tức: Bứt Phá Marketing mở chi nhánh mới", category: "Tin tức công ty", author: "Admin", status: "published", date: "06/06/2025", featured: true },
];

const statusMap: Record<string, { label: string; color: string; bg: string }> = {
  published: { label: "Đã xuất bản", color: "#15803d", bg: "#f0fdf4" },
  draft: { label: "Nháp", color: "#64748b", bg: "#f1f5f9" },
};

/* ─── Components ─── */
function CharCounter({ current, max }: { current: number; max: number }) {
  const percent = Math.min((current / max) * 100, 100);
  const isOver = current > max;
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${percent}%`, background: isOver ? "#ef4444" : percent > 90 ? "#f59e0b" : "#7c3aed" }} />
      </div>
      <span className={`text-xs font-bold ${isOver ? "text-red-500" : "text-gray-400"}`}>{current}/{max}</span>
    </div>
  );
}

function GooglePreview({ title, url, desc }: { title: string; url: string; desc: string }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white">
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
   LAYOUT
═══════════════════════════════════════════════════ */
function Layout({ children, subMenu, setSubMenu, page, setPage }: { children: React.ReactNode; subMenu: SubMenu; setSubMenu: (s: SubMenu) => void; page: Page; setPage: (p: Page) => void }) {
  const [expanded, setExpanded] = useState(true);
  const pageTitle = subMenu === "categories" ? "Danh mục tin tức" : "Bài viết";
  return (
    <div className="flex h-screen w-full overflow-hidden" style={{ fontFamily: "'Inter','Plus Jakarta Sans',system-ui,sans-serif", background: "#f8fafc" }}>
      <aside className="w-[210px] flex-shrink-0 flex flex-col overflow-y-auto relative" style={{ background: "linear-gradient(180deg,#1a0a3d 0%,#2d0a6b 40%,#1e1b4b 100%)" }}>
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none opacity-20" style={{ background: "radial-gradient(circle,#7c3aed,transparent)" }} />
        
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/10 relative z-10">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,rgba(124,58,237,.6),rgba(99,102,241,.4))", border: "1px solid rgba(167,139,250,.3)" }}>
            <img src="/images/logo-butpha.png" alt="Logo" style={{ filter: "brightness(10)", width: "1.1rem", height: "1.1rem", objectFit: "contain" }} />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-tight leading-none">BỨT PHÁ</div>
            <div className="text-[7px] font-bold mt-0.5 tracking-[.2em]" style={{ color: "#a78bfa" }}>MARKETING</div>
          </div>
        </div>

        <nav className="flex-1 px-2.5 py-4 space-y-3 relative z-10">
          {[{ label: "TỔNG QUAN", items: [{ icon: Home, label: "Tổng quan", sub: null }] },
            { label: "NỘI DUNG", items: [
              { icon: Newspaper, label: "Quản lý tin tức", sub: "posts" as SubMenu, children: [
                { icon: Tag, label: "Danh mục tin tức", sub: "categories" as SubMenu },
                { icon: Newspaper, label: "Bài viết", sub: "posts" as SubMenu },
              ]}
            ]}
          ].map(({ label, items }) => (
            <div key={label}>
              <div className="text-[8px] font-bold tracking-[.18em] px-2.5 mb-1.5" style={{ color: "rgba(167,139,250,.4)" }}>{label}</div>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const hasChildren = "children" in item && item.children;
                  const isParentActive = hasChildren && item.children!.some(c => c.sub === subMenu);
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => hasChildren ? setExpanded(!expanded) : (item.sub && (setSubMenu(item.sub), setPage(item.sub === "categories" ? "cat-list" : "post-list")))}
                        className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all"
                        style={{ padding: "0.625rem 0.5rem 0.625rem 0.625rem", background: isParentActive ? "rgba(255,255,255,.08)" : "transparent", color: isParentActive ? "white" : "rgba(255,255,255,.55)", fontWeight: isParentActive ? 600 : 500, borderLeft: isParentActive ? "2px solid #a78bfa" : "2px solid transparent" }}
                      >
                        <item.icon style={{ width: ".85rem", height: ".85rem", flexShrink: 0, color: isParentActive ? "#c4b5fd" : "rgba(255,255,255,.35)" }} />
                        <span className="flex-1 text-[12px] leading-tight">{item.label}</span>
                        {hasChildren && <ChevronDown style={{ width: ".7rem", height: ".7rem", opacity: 0.4, transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform .2s" }} />}
                      </button>
                      {hasChildren && expanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {item.children!.map(c => {
                            const isActive = c.sub === subMenu;
                            return (
                              <button key={c.label}
                                onClick={() => { setSubMenu(c.sub); setPage(c.sub === "categories" ? "cat-list" : "post-list"); }}
                                className="w-full flex items-center gap-2 py-2 rounded-lg text-left transition-all"
                                style={{ padding: "0.5rem 0.5rem 0.5rem 0.625rem", background: isActive ? "rgba(124,58,237,.25)" : "transparent", color: isActive ? "white" : "rgba(255,255,255,.45)", fontWeight: isActive ? 600 : 400, borderLeft: isActive ? "2px solid #7c3aed" : "2px solid transparent" }}
                              >
                                <c.icon style={{ width: ".75rem", height: ".75rem", flexShrink: 0, color: isActive ? "#c4b5fd" : "rgba(255,255,255,.3)" }} />
                                <span className="text-[11px]">{c.label}</span>
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

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 flex items-center justify-between px-6 flex-shrink-0" style={{ background: "white", borderBottom: "1px solid #f1f5f9", boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Trang chủ</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-400">Quản lý tin tức</span>
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

        <div className="flex-1 overflow-y-auto bg-gray-50">{children}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   CATEGORY LIST & FORM
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
            <h1 className="text-xl font-black text-gray-900">Danh mục tin tức</h1>
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
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tên danh mục</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Slug</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Số bài viết</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hiển thị</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sampleCategories.map((cat, idx) => (
              <tr key={cat.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4 text-sm text-gray-500">{idx + 1}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{cat.name}</td>
                <td className="px-4 py-4 text-sm text-gray-400">{cat.slug}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{cat.posts}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${cat.visible ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                    {cat.visible ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {cat.visible ? "Hiển thị" : "Ẩn"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(cat.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button onClick={() => onDelete(cat.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
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
  const [seoTitle, setSeoTitle] = useState("Tin tức công ty | Bứt Phá Marketing");
  const [seoDesc, setSeoDesc] = useState("Tin tức, cập nhật hoạt động và thông báo mới nhất từ Bứt Phá Marketing.");
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="text-xl font-black text-gray-900">Thêm danh mục tin tức</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={onBack} className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-colors text-gray-700">Hủy</button>
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <Save className="w-4 h-4" /> Lưu
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tên danh mục <span className="text-red-500">*</span></label>
                <input defaultValue="Tin tức công ty" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Slug</label>
                <input defaultValue="tin-tuc-cong-ty" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mô tả ngắn</label>
                <textarea rows={3} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" placeholder="Mô tả ngắn gọn..." />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">SEO</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">SEO Title <span className="text-gray-400">(tối đa 70)</span></label>
                <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                <CharCounter current={seoTitle.length} max={70} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Meta Description <span className="text-gray-400">(tối đa 160)</span></label>
                <textarea rows={3} value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
                <CharCounter current={seoDesc.length} max={160} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Keywords</label>
                <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" placeholder="từ khóa 1, từ khóa 2" />
              </div>
            </div>
            <GooglePreview title={seoTitle} url="butpha.com/tin-tuc-cong-ty" desc={seoDesc} />
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thiết lập</div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded border-2 flex items-center justify-center" style={{ borderColor: "#7c3aed", background: "#7c3aed" }}><Check className="w-3.5 h-3.5 text-white" /></div>
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
   POST LIST & FORM
═══════════════════════════════════════════════════ */
function PostList({ onBack, onAdd, onEdit, onDelete }: { onBack: () => void; onAdd: () => void; onEdit: (id: number) => void; onDelete: (id: number) => void }) {
  const stats = [
    { label: "Tổng bài viết", value: samplePosts.length, color: "#7c3aed" },
    { label: "Nổi bật", value: 2, color: "#f59e0b" },
    { label: "Đã xuất bản", value: 2, color: "#15803d" },
    { label: "Nháp", value: 1, color: "#64748b" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-xl font-black text-gray-900">Bài viết</h1>
            <p className="text-sm text-gray-400 mt-0.5">{samplePosts.length} bài viết</p>
          </div>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Thêm bài viết
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${s.color}10` }}>
              <Newspaper className="w-5 h-5" style={{ color: s.color }} />
            </div>
            <div>
              <div className="text-xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-xs text-gray-500 font-medium">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center gap-3 p-4 border-b border-gray-100 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Tìm kiếm bài viết..." className="w-full pl-9 pr-4 h-10 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-violet-400 outline-none transition-all" />
          </div>
          <select className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option>Tất cả danh mục</option>
            {sampleCategories.map(c => <option key={c.id}>{c.name}</option>)}
          </select>
          <select className="h-10 px-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
            <option>Tất cả trạng thái</option>
            <option>Đã xuất bản</option><option>Nháp</option>
          </select>
        </div>

        <table className="w-full">
          <thead style={{ background: "#fafafa" }}>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Ảnh</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tiêu đề</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Danh mục</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tác giả</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Trạng thái</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Ngày đăng</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {samplePosts.map(post => (
              <tr key={post.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4">
                  <div className="w-14 h-10 rounded-lg bg-violet-50 flex items-center justify-center"><ImageIcon className="w-5 h-5 text-violet-500" /></div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                  <div className="flex items-center gap-2">
                    {post.title}
                    {post.featured && <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />}
                  </div>
                </td>
                <td className="px-4 py-4"><span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "#f5f3ff", color: "#7c3aed" }}>{post.category}</span></td>
                <td className="px-4 py-4 text-sm text-gray-600">{post.author}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: statusMap[post.status].bg, color: statusMap[post.status].color }}>
                    {statusMap[post.status].label}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500">{post.date}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-50" title="Xem trước"><Eye className="w-3.5 h-3.5 text-blue-600" /></button>
                    <button onClick={() => onEdit(post.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100"><Edit3 className="w-3.5 h-3.5 text-violet-600" /></button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100" title="Nhân bản"><Copy className="w-3.5 h-3.5 text-gray-600" /></button>
                    <button onClick={() => onDelete(post.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50"><Trash2 className="w-3.5 h-3.5 text-red-500" /></button>
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

function PostForm({ onBack }: { onBack: () => void }) {
  const [seoTitle, setSeoTitle] = useState("10 Mẹo SEO giúp website lên top Google");
  const [seoDesc, setSeoDesc] = useState("Cách tối ưu SEO hiệu quả giúp website doanh nghiệp lên top đầu kết quả tìm kiếm Google nhanh chóng và bền vững.");
  const [status, setStatus] = useState<"published" | "draft">("published");
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="text-xl font-black text-gray-900">Thêm bài viết</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { setStatus("draft"); onBack(); }} className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 text-gray-700 transition-all">Lưu nháp</button>
          <button onClick={() => { setStatus("published"); onBack(); }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
            <CheckCircle className="w-4 h-4" /> Đăng bài
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin cơ bản</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tiêu đề bài viết <span className="text-red-500">*</span></label>
                <input defaultValue="10 Mẹo SEO giúp website lên top Google" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Slug</label>
                  <input defaultValue="10-meo-seo-giup-website-len-top-google" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Danh mục tin tức</label>
                  <select className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:border-violet-400 cursor-pointer">
                    {sampleCategories.map(c => <option key={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mô tả ngắn</label>
                <textarea rows={2} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Nội dung bài viết</div>
            <div className="border border-gray-200 rounded-xl bg-gray-50">
              <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-white rounded-t-xl">
                {[Bold, Italic, List, Image, Video, Table, Link].map((Icon, i) => (
                  <button key={i} className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-violet-50 text-gray-600">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
              <textarea rows={12} className="w-full p-3 text-sm text-gray-700 bg-transparent outline-none resize-none" placeholder="Viết nội dung bài viết..." />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Hình ảnh</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Ảnh đại diện</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Click để chọn ảnh</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Thư viện ảnh</label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <FolderOpen className="w-8 h-8 text-gray-400" />
                  <span className="text-sm text-gray-500">Upload nhiều ảnh</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">SEO bài viết</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">SEO Title <span className="text-gray-400">(tối đa 70)</span></label>
                <input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                <CharCounter current={seoTitle.length} max={70} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Meta Description <span className="text-gray-400">(tối đa 160)</span></label>
                <textarea rows={3} value={seoDesc} onChange={(e) => setSeoDesc(e.target.value)} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
                <CharCounter current={seoDesc.length} max={160} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Keywords</label>
                  <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">Canonical URL</label>
                  <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                </div>
              </div>
            </div>
            <GooglePreview title={seoTitle} url="butpha.com/10-meo-seo-giup-website-len-top-google" desc={seoDesc} />
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thiết lập bài viết</div>
            <div className="space-y-3">
              {[
                { label: "Hiển thị", checked: true },
                { label: "Bài viết nổi bật", checked: true },
                { label: "Hiển thị trang chủ", checked: true },
                { label: "Cho phép bình luận", checked: true },
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${item.checked ? "border-violet-500 bg-violet-500" : "border-gray-300 bg-gray-50"}`}>{item.checked && <Check className="w-3.5 h-3.5 text-white" />}</div>
                  <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thông tin bài viết</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Tác giả</span>
                <span className="font-semibold text-gray-800">Admin</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Ngày đăng</span>
                <span className="font-semibold text-gray-800">08/06/2025</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Lượt xem</span>
                <span className="font-semibold text-gray-800">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════ */
export default function NewsManagement() {
  const [page, setPage] = useState<Page>("post-list");
  const [subMenu, setSubMenu] = useState<SubMenu>("posts");

  const renderPage = () => {
    switch (page) {
      case "cat-list": return <CategoryList onBack={() => setPage("post-list")} onAdd={() => setPage("cat-form")} onEdit={() => setPage("cat-form")} onDelete={() => {}} />;
      case "cat-form": return <CategoryForm onBack={() => setPage("cat-list")} />;
      case "post-list": return <PostList onBack={() => {}} onAdd={() => setPage("post-form")} onEdit={() => setPage("post-form")} onDelete={() => {}} />;
      case "post-form": return <PostForm onBack={() => setPage("post-list")} />;
    }
  };

  return <Layout subMenu={subMenu} setSubMenu={setSubMenu} page={page} setPage={setPage}>{renderPage()}</Layout>;
}

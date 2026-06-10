import React, { useState } from "react";
import {
  Palette, Image as ImageIcon, Monitor, Smartphone, Upload,
  ChevronDown, ChevronRight, Home, CheckCircle, XCircle, Plus,
  Edit3, Trash2, GripVertical, Eye, Check, X, Save,
  Bell, LogOut, User, Newspaper, ArrowLeft, Link2,
} from "lucide-react";

/* ─── Types ─── */
type Page = "logo-favicon" | "slideshow" | "slide-form";
type SubMenu = "logo-favicon" | "slideshow";

/* ─── Sample Data ─── */
const sampleSlides = [
  { id: 1, title: "Thiết kế website chuyên nghiệp", description: "Giải pháp toàn diện cho doanh nghiệp", desktopImage: "/__mockup/images/slide-1.jpg", mobileImage: "/__mockup/images/slide-1-mobile.jpg", link: "https://butpha.com/dich-vu", openNewTab: true, order: 1, visible: true },
  { id: 2, title: "Marketing Online hiệu quả", description: "Tăng doanh thu, mở rộng thị trường", desktopImage: "/__mockup/images/slide-2.jpg", mobileImage: "/__mockup/images/slide-2-mobile.jpg", link: "https://butpha.com/marketing", openNewTab: true, order: 2, visible: true },
];

/* ═══════════════════════════════════════════════════
   LAYOUT
═══════════════════════════════════════════════════ */
function Layout({ children, subMenu, setSubMenu, page, setPage }: { children: React.ReactNode; subMenu: SubMenu; setSubMenu: (s: SubMenu) => void; page: Page; setPage: (p: Page) => void }) {
  const [expanded, setExpanded] = useState(true);
  const pageTitle = subMenu === "logo-favicon" ? "Logo & Favicon" : "Slideshow";
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
            { label: "GIAO DIỆN", items: [
              { icon: Palette, label: "Quản lý giao diện", sub: "logo-favicon" as SubMenu, children: [
                { icon: ImageIcon, label: "Logo & Favicon", sub: "logo-favicon" as SubMenu },
                { icon: Monitor, label: "Slideshow", sub: "slideshow" as SubMenu },
              ]},
            ]},
          ].map(({ label, items }) => (
            <div key={label}>
              <div className="text-[8px] font-bold tracking-[.18em] px-2.5 mb-1.5" style={{ color: "rgba(167,139,250,.4)" }}>{label}</div>
              <div className="space-y-0.5">
                {items.map((item) => {
                  const hasChildren = "children" in item && item.children;
                  const isParentActive = hasChildren && item.children!.some(c => c.sub === subMenu);
                  return (
                    <div key={item.label}>
                      <button onClick={() => hasChildren ? setExpanded(!expanded) : (item.sub && (setSubMenu(item.sub), setPage(item.sub)))}
                        className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all"
                        style={{ paddingLeft: "10px", paddingRight: "8px", background: isParentActive ? "rgba(255,255,255,.08)" : "transparent", color: isParentActive ? "white" : "rgba(255,255,255,.55)", fontWeight: isParentActive ? 600 : 500, borderLeft: isParentActive ? "2px solid #a78bfa" : "2px solid transparent" }}
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
                              <button key={c.label} onClick={() => { setSubMenu(c.sub); setPage(c.sub as Page); }}
                                className="w-full flex items-center gap-2 py-2 rounded-lg text-left transition-all"
                                style={{ paddingLeft: "10px", paddingRight: "8px", background: isActive ? "rgba(124,58,237,.25)" : "transparent", color: isActive ? "white" : "rgba(255,255,255,.45)", fontWeight: isActive ? 600 : 400, borderLeft: isActive ? "2px solid #7c3aed" : "2px solid transparent" }}
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
            <span className="text-gray-400">Quản lý giao diện</span>
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
   LOGO & FAVICON PAGE
═══════════════════════════════════════════════════ */
function LogoFaviconPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-black text-gray-900">Logo & Favicon</h1>
        <p className="text-sm text-gray-400 mt-0.5">Quản lý nhận diện thương hiệu website</p>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
            <div className="text-sm font-bold text-gray-800">Logo Website</div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-600 flex items-center gap-2"><Monitor className="w-4 h-4" /> Logo Desktop</div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <div className="w-40 h-20 rounded-xl bg-violet-100 flex items-center justify-center">
                    <img src="/images/logo-butpha.png" alt="Logo Preview" className="h-12" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-violet-600 font-semibold">
                      <Upload className="w-4 h-4" /> Thay đổi logo
                    </div>
                    <div className="text-xs text-gray-500 mt-1">PNG, SVG, WEBP</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-600 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Logo Mobile</div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <div className="w-20 h-20 rounded-xl bg-violet-100 flex items-center justify-center">
                    <img src="/images/logo-butpha.png" alt="Logo Preview" className="h-10" />
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-violet-600 font-semibold">
                      <Upload className="w-4 h-4" /> Thay đổi logo
                    </div>
                    <div className="text-xs text-gray-500 mt-1">PNG, SVG, WEBP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
            <div className="text-sm font-bold text-gray-800">Favicon Website</div>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-600 flex items-center gap-2"><ImageIcon className="w-4 h-4" /> Favicon</div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                      <img src="/images/logo-butpha.png" alt="Favicon Preview" className="h-6" />
                    </div>
                    <div className="text-xs text-gray-500 text-center">32x32<br/>64x64</div>
                  </div>
                  <div className="flex-1">
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                      <div className="flex items-center justify-center gap-2 text-sm text-violet-600 font-semibold">
                        <Upload className="w-4 h-4" /> Upload favicon
                      </div>
                      <div className="text-xs text-gray-500">ICO, PNG</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
                <Save className="w-4 h-4" /> Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   SLIDESHOW PAGE
═══════════════════════════════════════════════════ */
function SlideshowPage({ onBack, onAdd, onEdit, onDelete }: { onBack: () => void; onAdd: () => void; onEdit: (id: number) => void; onDelete: (id: number) => void }) {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-black text-gray-900">Slideshow</h1>
          <p className="text-sm text-gray-400 mt-0.5">Quản lý banner trình chiếu trang chủ</p>
        </div>
        <button onClick={onAdd} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}>
          <Plus className="w-4 h-4" /> Thêm slide
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead style={{ background: "#fafafa" }}>
            <tr>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100 w-12"></th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hình ảnh</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Tiêu đề</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Liên kết</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thứ tự</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Hiển thị</th>
              <th className="text-left text-xs font-bold text-gray-500 px-4 py-3 border-b border-gray-100">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {sampleSlides.map((slide) => (
              <tr key={slide.id} className="group hover:bg-violet-50/30 transition-colors border-b border-gray-50 last:border-0">
                <td className="px-4 py-4 cursor-grab">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-10 rounded-lg bg-violet-100 flex items-center justify-center overflow-hidden">
                      <img src={slide.desktopImage} alt="Slide" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">{slide.title}</td>
                <td className="px-4 py-4 text-sm text-blue-600 truncate max-w-xs">{slide.link}</td>
                <td className="px-4 py-4 text-sm text-gray-600">{slide.order}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${slide.visible ? "bg-green-50 text-green-700" : "bg-gray-50 text-gray-500"}`}>
                    {slide.visible ? <CheckCircle className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                    {slide.visible ? "Hiển thị" : "Ẩn"}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => onEdit(slide.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-violet-100 transition-colors">
                      <Edit3 className="w-3.5 h-3.5 text-violet-600" />
                    </button>
                    <button onClick={() => onDelete(slide.id)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition-colors">
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

function SlideForm({ onBack }: { onBack: () => void }) {
  const [openNewTab, setOpenNewTab] = useState(true);
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white hover:border-gray-200 border border-transparent transition-all">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h1 className="text-xl font-black text-gray-900">Thêm slide</h1>
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
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
            <div className="text-sm font-bold text-gray-800">Hình ảnh</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-600 flex items-center gap-2"><Monitor className="w-4 h-4" /> Ảnh Desktop</div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <div className="text-sm text-gray-500">Upload ảnh Desktop</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-gray-600 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Ảnh Mobile</div>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                  <Upload className="w-8 h-8 text-gray-400" />
                  <div className="text-sm text-gray-500">Upload ảnh Mobile</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Nội dung</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Tiêu đề</label>
                <input className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Mô tả ngắn</label>
                <textarea rows={2} className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-colors resize-none" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Liên kết</div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">URL</label>
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input defaultValue="https://butpha.com/dich-vu" className="w-full h-11 pl-10 pr-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <div className="text-sm font-bold text-gray-800">Thiết lập</div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${visible ? "border-violet-500 bg-violet-500" : "border-gray-300 bg-gray-50"}`} onClick={() => setVisible(!visible)}>{visible && <Check className="w-3.5 h-3.5 text-white" />}</div>
                <span className="text-sm text-gray-700 font-medium">Hiển thị</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${openNewTab ? "border-violet-500 bg-violet-500" : "border-gray-300 bg-gray-50"}`} onClick={() => setOpenNewTab(!openNewTab)}>{openNewTab && <Check className="w-3.5 h-3.5 text-white" />}</div>
                <span className="text-sm text-gray-700 font-medium">Mở liên kết tab mới</span>
              </label>
            </div>
            <div className="pt-3 border-t border-gray-100 space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Thứ tự hiển thị</label>
              <input type="number" defaultValue="3" className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all" />
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
export default function AppearanceManagement() {
  const [page, setPage] = useState<Page>("logo-favicon");
  const [subMenu, setSubMenu] = useState<SubMenu>("logo-favicon");

  const renderPage = () => {
    switch (page) {
      case "logo-favicon": return <LogoFaviconPage />;
      case "slideshow": return <SlideshowPage onBack={() => {}} onAdd={() => setPage("slide-form")} onEdit={() => setPage("slide-form")} onDelete={() => {}} />;
      case "slide-form": return <SlideForm onBack={() => setPage("slideshow")} />;
    }
  };

  return <Layout subMenu={subMenu} setSubMenu={setSubMenu} page={page} setPage={setPage}>{renderPage()}</Layout>;
}

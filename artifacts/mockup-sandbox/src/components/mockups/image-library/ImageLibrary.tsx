import React, { useState } from "react";
import {
  FolderOpen, ChevronDown, ChevronRight, Search, Plus, Copy,
  Eye, Trash2, Upload, Image as ImageIcon, CheckCircle,
  XCircle, File, Home, Bell, LogOut, User, AlertTriangle,
  X, Check
} from "lucide-react";

/* --- Types --- */
type ImageItem = {
  id: number;
  name: string;
  url: string;
  size: string;
  dimensions: string;
  uploadDate: string;
  altText: string;
  title: string;
  description: string;
};

/* --- Sample Data --- */
const sampleImages: ImageItem[] = [
  { 
    id: 1, 
    name: "gia-cong-cnc-chinh-xac.jpg", 
    url: "https://images.unsplash.com/photo-1581091226033-d5c78f4676a8?w=400&q=80", 
    size: "245 KB", 
    dimensions: "1920x1080", 
    uploadDate: "05/06/2025",
    altText: "Gia công cơ khí CNC chính xác tại TP.HCM",
    title: "Dịch vụ gia công cơ khí CNC theo yêu cầu",
    description: "Hình ảnh gia công cơ khí CNC chính xác bằng máy CNC hiện đại."
  },
  { 
    id: 2, 
    name: "thiet-ke-website-doanh-nghiep.jpg", 
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", 
    size: "320 KB", 
    dimensions: "1200x800", 
    uploadDate: "04/06/2025",
    altText: "Thiết kế website doanh nghiệp chuyên nghiệp",
    title: "Mẫu thiết kế website đẹp và hiện đại",
    description: "Hình ảnh minh họa thiết kế website doanh nghiệp với giao diện hiện đại, phản hồi tốt."
  },
  { 
    id: 3, 
    name: "seo-tong-the.jpg", 
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80", 
    size: "180 KB", 
    dimensions: "1000x600", 
    uploadDate: "03/06/2025",
    altText: "Dịch vụ SEO tổng thể",
    title: "SEO website lên đầu trang Google",
    description: "Hình ảnh minh họa dịch vụ SEO tổng thể giúp tăng thứ hạng tìm kiếm."
  },
  { 
    id: 4, 
    name: "facebook-marketing.jpg", 
    url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80", 
    size: "410 KB", 
    dimensions: "1600x900", 
    uploadDate: "02/06/2025",
    altText: "Marketing trên Facebook và Instagram",
    title: "Quảng cáo Facebook hiệu quả",
    description: "Hình ảnh chiến dịch marketing trên Facebook và Instagram."
  },
];

/* --- Helpers --- */
const formatBytes = (bytes: number): string => {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
};

/* --- Main Component --- */
export default function ImageLibrary() {
  const [activeMenu, setActiveMenu] = useState<string | null>("Kho hình ảnh");
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (label: string) => {
    const next = new Set(expandedMenus);
    next.has(label) ? next.delete(label) : next.add(label);
    setExpandedMenus(next);
  };

  const handleLogout = () => {
    const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
    window.location.href = `${basePath}/preview/cms-login/Login`;
  };

  const filteredImages = sampleImages.filter(img => 
    img.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.altText.toLowerCase().includes(searchQuery.toLowerCase()) ||
    img.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalStorage = 50 * 1024 * 1024 * 1024; // 50 GB
  const usedStorage = 12.5 * 1024 * 1024 * 1024; // 12.5 GB
  const usagePercent = (usedStorage / totalStorage) * 100;
  const usageColor = usagePercent >= 95 ? "bg-red-500" : usagePercent >= 80 ? "bg-yellow-500" : "bg-gradient-to-r from-violet-600 to-indigo-600";

  const openImageDetail = (img: ImageItem) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden font-sans"
      style={{ fontFamily: "'Inter','Plus Jakarta Sans',system-ui,sans-serif", background: "#f8fafc" }}
    >
      {/* --- Sidebar --- */}
      <aside
        className="w-[210px] flex-shrink-0 flex flex-col overflow-y-auto relative"
        style={{ background: "linear-gradient(180deg, #1a0a3d 0%, #2d0a6b 40%, #1e1b4b 100%)" }}
      >
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none opacity-20" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
        
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/10 relative z-10">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,.6), rgba(99,102,241,.4))", border: "1px solid rgba(167,139,250,.3)" }}
          >
            <img src="/images/logo-butpha.png" alt="Logo" style={{ filter: "brightness(10)", width: "1.1rem", height: "1.1rem", objectFit: "contain" }} />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-tight leading-none">BỨT PHÁ</div>
            <div className="text-[7px] font-bold mt-0.5 tracking-[.2em]" style={{ color: "#a78bfa" }}>MARKETING</div>
          </div>
        </div>

        <nav className="flex-1 px-2.5 py-4 space-y-4 relative z-10">
          {[
            { label: "TỔNG QUAN", items: [{ icon: Home, label: "Tổng quan" }] },
            { label: "MEDIA & SEO", items: [{ icon: FolderOpen, label: "Kho hình ảnh" }] },
          ].map(({ label, items }) => (
            <div key={label}>
              <div className="text-[8px] font-bold tracking-[.18em] px-2.5 mb-1.5" style={{ color: "rgba(167,139,250,.4)" }}>{label}</div>
              <div className="space-y-0.5">
                {items.map(({ icon: Icon, label: itemLabel }) => {
                  const isActive = activeMenu === itemLabel;
                  return (
                    <button
                      key={itemLabel}
                      onClick={() => setActiveMenu(itemLabel)}
                      className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer"
                      style={{
                        paddingLeft: "10px",
                        paddingRight: "8px",
                        background: isActive ? "rgba(124,58,237,0.25)" : "transparent",
                        color: isActive ? "white" : "rgba(255,255,255,0.45)",
                        fontWeight: isActive ? 600 : 400,
                        borderLeft: isActive ? "2px solid #7c3aed" : "2px solid transparent",
                      }}
                    >
                      <Icon style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0, color: isActive ? "#c4b5fd" : "rgba(255,255,255,0.3)" }} />
                      <span className="text-[11px]">{itemLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User + Logout */}
        <div className="px-3 pb-4 border-t border-white/10 pt-3 relative z-10 space-y-1">
          <div className="flex items-center gap-2.5 rounded-xl p-2.5 cursor-pointer" style={{ background: "rgba(255,255,255,.07)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 text-xs"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
            >
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[11px] font-semibold leading-none">Admin</div>
              <div className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,.35)" }}>Quản trị viên</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer"
            style={{ color: "rgba(255,255,255,.45)" }}
          >
            <LogOut style={{ width: "0.8rem", height: "0.8rem" }} />
            <span className="text-[12px]">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* --- Main --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-14 flex items-center justify-between px-6 flex-shrink-0" style={{ background: "white", borderBottom: "1px solid #f1f5f9", boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Trang chủ</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-400">Media & SEO</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="font-semibold text-gray-800">Kho hình ảnh</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <Bell className="w-4 h-4 text-gray-400" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center rounded-full text-[9px] font-black text-white" style={{ background: "#ef4444" }}>3</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs" style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>A</div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-none">Admin</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Quản trị viên</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Tổng số hình ảnh", value: "2.568", icon: ImageIcon, color: "from-violet-600 to-indigo-600" },
                { label: "Dung lượng đã sử dụng", value: "12.5 GB / 50 GB", icon: File, color: "from-emerald-600 to-teal-600" },
                { label: "Hình ảnh tháng này", value: "128", icon: Plus, color: "from-amber-600 to-orange-600" },
                { label: "Dung lượng còn lại", value: "37.5 GB", icon: CheckCircle, color: "from-blue-600 to-cyan-600" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-xl font-black text-gray-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Storage Progress */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-800">Quản lý dung lượng</span>
                {usagePercent >= 80 && (
                  <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${usagePercent >=95 ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {usagePercent >=95 ? "Dung lượng gần đầy!" : "Sắp hết dung lượng!"}
                  </span>
                )}
              </div>
              <div className="relative">
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${usageColor}`} style={{ width: `${usagePercent}%` }} />
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Đã sử dụng: {formatBytes(usedStorage)}</span>
                <span>Tổng: {formatBytes(totalStorage)}</span>
              </div>
            </div>

            {/* Upload & Search */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-gray-800 mb-4">Upload hình ảnh</h3>
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 bg-gray-50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-violet-400 hover:bg-violet-50/30 transition-all">
                    <Upload className="w-8 h-8 text-gray-400" />
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700">Kéo thả ảnh vào đây</p>
                      <p className="text-xs text-gray-500 mt-1">Hoặc click để chọn tệp</p>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">Định dạng hỗ trợ: JPG, JPEG, PNG, WEBP, SVG</p>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}
                  >
                    <Plus className="w-4 h-4" />
                    Chọn hình ảnh
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-4">
                {/* Search Bar */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm kiếm hình ảnh theo tên, Alt Text, tiêu đề..."
                      className="w-full pl-10 pr-4 h-11 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Image Grid */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-gray-800 mb-4">Thư viện hình ảnh</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredImages.map((img) => (
                      <div
                        key={img.id}
                        onClick={() => openImageDetail(img)}
                        className="group cursor-pointer"
                      >
                        <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                          <img
                            src={img.url}
                            alt={img.altText}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
                        </div>
                        <div className="mt-2 space-y-1">
                          <p className="text-xs font-semibold text-gray-800 truncate">{img.name}</p>
                          <p className="text-[10px] text-gray-500 flex items-center justify-between">
                            <span>{img.size}</span>
                            <span>{img.dimensions}</span>
                          </p>
                          <p className="text-[9px] text-gray-400">{img.uploadDate}</p>
                        </div>
                      </div>
                    ))}
                    {filteredImages.length === 0 && (
                      <div className="col-span-full py-12 text-center">
                        <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-gray-700">Không tìm thấy hình ảnh nào</p>
                        <p className="text-xs text-gray-400">Thử tìm kiếm với từ khóa khác!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Image Detail Modal --- */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Thông tin hình ảnh</h3>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Preview */}
              <div className="space-y-3">
                <div className="aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center">
                  <img src={selectedImage.url} alt={selectedImage.altText} className="w-full h-full object-cover" />
                </div>
                <button
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 transition-all text-gray-700"
                  onClick={() => navigator.clipboard.writeText(`https://domain.com/uploads/${selectedImage.name}`).then(() => alert("Đã sao chép URL!"))}
                >
                  <Copy className="w-4 h-4" />
                  Sao chép URL
                </button>
              </div>

              {/* Info & SEO */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-800">Thông tin cơ bản</h4>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Tên hình ảnh</label>
                    <input
                      defaultValue={selectedImage.name}
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Đường dẫn hình ảnh</label>
                    <div className="flex items-center gap-2">
                      <input
                        value={`https://domain.com/uploads/${selectedImage.name}`}
                        readOnly
                        className="flex-1 h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-xs text-gray-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-3">
                  <h4 className="text-sm font-bold text-gray-800 flex items-center gap-1">
                    SEO hình ảnh
                    <span className="text-red-500">*</span>
                  </h4>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Văn bản thay thế (Alt Text)</label>
                    <input
                      defaultValue={selectedImage.altText}
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Tiêu đề ảnh (Image Title)</label>
                    <input
                      defaultValue={selectedImage.title}
                      className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">Mô tả ảnh</label>
                    <textarea
                      rows={3}
                      defaultValue={selectedImage.description}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-violet-400 focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex gap-2">
                  <button className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-gray-50 text-gray-700 transition-all">
                    Xem ảnh lớn
                  </button>
                  <button className="px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 hover:bg-red-50 text-red-600 transition-all">
                    <Trash2 className="w-4 h-4 inline-block mr-1" />
                    Xóa
                  </button>
                  <button className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", boxShadow: "0 4px 14px rgba(124,58,237,.3)" }}
                  >
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import {
  Bell, ChevronDown, LogOut,
  Home, Briefcase, Newspaper, File, FolderOpen,
  Search, Settings, User, Package, ImageIcon,
  ChevronRight, BarChart3, TrendingUp,
  Monitor, Smartphone, Laptop, Tablet,
  ShoppingCart, Calendar, Lock, Edit3,
  Globe, Clock, Users, Activity, Shield, Phone, Mail,
} from "lucide-react";

/* ─── Menu ─── */
const menuGroups = [
  {
    label: "TỔNG QUAN",
    items: [{ icon: Home, label: "Tổng quan" }],
  },
  {
    label: "NỘI DUNG",
    items: [
      { icon: Package,   label: "Quản lý sản phẩm" },
      { icon: Briefcase, label: "Quản lý dịch vụ"  },
      { icon: Newspaper, label: "Quản lý tin tức"   },
      { icon: File,      label: "Quản lý trang tĩnh" },
      { icon: ImageIcon, label: "Quản lý hình ảnh" },
    ],
  },
  {
    label: "MEDIA & SEO",
    items: [
      { icon: Search,    label: "Quản lý SEO Page" },
      { icon: FolderOpen,label: "Kho hình ảnh"      },
    ],
  },
  {
    label: "HỆ THỐNG",
    items: [
      { 
        icon: Settings, 
        label: "Thiết lập thông tin", 
        children: [
          { icon: Globe, label: "Thông tin website" },
          { icon: Phone, label: "Thông tin liên hệ" },
          { icon: Search, label: "Cấu hình SEO" },
          { icon: Mail, label: "Email hệ thống" },
          { icon: User, label: "Tài khoản quản trị" },
          { icon: Shield, label: "Phân quyền" },
          { icon: Activity, label: "Nhật ký hoạt động" },
        ]
      },
    ],
  },
];

/* ─── Line chart helper ─── */
const visitData = [
  { date: "01/06", value: 285 },
  { date: "02/06", value: 410 },
  { date: "03/06", value: 495 },
  { date: "04/06", value: 605 },
  { date: "05/06", value: 715 },
  { date: "06/06", value: 840 },
  { date: "07/06", value: 960 },
];

const maxVisit = 1000;
const W = 700;
const H = 140;
const PAD_X = 0;

function LineChart() {
  const points = visitData.map((d, i) => {
    const x = PAD_X + (i / (visitData.length - 1)) * (W - PAD_X * 2);
    const y = H - (d.value / maxVisit) * H;
    return { x, y, ...d };
  });

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");

  const areaPath =
    `M${points[0].x},${H} ` +
    points.map((p) => `L${p.x},${p.y}`).join(" ") +
    ` L${points[points.length - 1].x},${H} Z`;

  const yLabels = [0, 200, 400, 600, 800, 1000];

  return (
    <div className="relative w-full" style={{ height: "220px" }}>
      <svg
        viewBox={`-40 -10 ${W + 50} ${H + 50}`}
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.01" />
          </linearGradient>
        </defs>

        {/* Y-axis grid + labels */}
        {yLabels.map((v) => {
          const cy = H - (v / maxVisit) * H;
          return (
            <g key={v}>
              <line x1={-8} y1={cy} x2={W} y2={cy} stroke="#e2e8f0" strokeWidth="0.8" strokeDasharray="4,3" />
              <text x={-12} y={cy + 4} fontSize="9" fill="#94a3b8" textAnchor="end" fontFamily="Inter,sans-serif">
                {v}
              </text>
            </g>
          );
        })}

        {/* Area fill */}
        <path d={areaPath} fill="url(#areaGrad)" />

        {/* Line */}
        <path
          d={linePath}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Dots + X labels */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="white" stroke="#7c3aed" strokeWidth="2.5" />
            <text
              x={p.x}
              y={H + 18}
              fontSize="9"
              fill="#94a3b8"
              textAnchor="middle"
              fontFamily="Inter,sans-serif"
            >
              {p.date}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ─── Visitor log ─── */
const visitorLog = [
  { id: "KH0001", device: "Desktop - Windows", deviceIcon: Monitor,    page: "/dich-vu-seo",      time: "07/06/2024 10:23:45" },
  { id: "KH0002", device: "Mobile - Android",  deviceIcon: Smartphone, page: "/thiet-ke-website", time: "07/06/2024 10:21:12" },
  { id: "KH0003", device: "iPhone",            deviceIcon: Smartphone, page: "/bang-gia",          time: "07/06/2024 10:18:07" },
  { id: "KH0004", device: "Desktop - MacOS",   deviceIcon: Laptop,     page: "/lien-he",           time: "07/06/2024 10:15:33" },
  { id: "KH0005", device: "Mobile - Android",  deviceIcon: Smartphone, page: "/gia-cong-cnc",      time: "07/06/2024 10:12:54" },
];

/* ─── Tổng Quan Screen ─── */
function TongQuanScreen() {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-[960px] mx-auto px-8 py-7 space-y-6">

        {/* Page title */}
        <h1 className="text-2xl font-black text-gray-900">Dashboard Tổng Quan</h1>

        {/* ── 4 Stat Cards ── */}
        <div className="grid grid-cols-4 gap-4">

          {/* Card 1: Lượt truy cập */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Lượt truy cập tháng</p>
                <div className="text-2xl font-black text-gray-900 mt-0.5">12.568</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-semibold text-green-600">18.2% so với tháng trước</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Doanh thu */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Doanh thu sản phẩm</p>
                <div className="text-2xl font-black text-gray-900 mt-0.5">86.500.000đ</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-semibold text-green-600">24.7% so với tháng trước</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Khách đặt lịch */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Khách hàng đặt lịch</p>
                <div className="text-2xl font-black text-gray-900 mt-0.5">42 khách</div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-semibold text-green-600">12.5% so với tháng trước</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Tài khoản */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium">Tài khoản mật khẩu</p>
                <div className="text-lg font-black text-gray-900 mt-0.5 leading-tight">Admin</div>
                <p className="text-[11px] text-gray-400 mb-2">Quản trị viên</p>
                <button
                  className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors"
                  style={{ background: "#f5f3ff", color: "#7c3aed", border: "1px solid #ddd6fe" }}
                >
                  <Edit3 className="w-3 h-3" />
                  Đổi tên &amp; mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Line Chart ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-base font-bold text-gray-900">Lượt truy cập website</h2>
              <p className="text-xs text-gray-400 mt-0.5">Thống kê truy cập 7 ngày gần nhất</p>
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer"
              style={{ background: "#f5f3ff", color: "#7c3aed", border: "1px solid #ede9fe" }}
            >
              7 ngày qua
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>

          <LineChart />

          {/* Sub-stats */}
          <div className="grid grid-cols-4 gap-4 mt-4 pt-5 border-t border-gray-100">
            {[
              { icon: Clock,    label: "Truy cập hôm nay",   value: "890",    trend: "+15.3%",   online: false },
              { icon: Activity, label: "Truy cập tuần này",  value: "5.420",  trend: "+18.6%",   online: false },
              { icon: Globe,    label: "Truy cập tháng này", value: "12.568", trend: "+18.2%",   online: false },
              { icon: Users,    label: "Người dùng đang online", value: "128", trend: null, online: true },
            ].map(({ icon: Icon, label, value, trend, online }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f5f3ff" }}>
                  <Icon className="w-4 h-4" style={{ color: "#7c3aed" }} />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium leading-tight">{label}</p>
                  <div className="text-xl font-black text-gray-900 mt-0.5">{value}</div>
                  {trend && (
                    <div className="flex items-center gap-0.5 mt-0.5">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-[11px] font-semibold text-green-600">{trend}</span>
                    </div>
                  )}
                  {online && (
                    <div className="flex items-center gap-1 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"
                        style={{ boxShadow: "0 0 4px #22c55e" }} />
                      <span className="text-[11px] font-semibold text-green-600">Đang online</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Visitor Log ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900">Nhật ký khách truy cập</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr style={{ background: "#fafafa" }}>
                {["ID", "Thiết bị", "Trang truy cập", "Thời gian truy cập"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-bold text-gray-500 px-6 py-3 border-b border-gray-100"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visitorLog.map(({ id, device, deviceIcon: Icon, page, time }, i) => (
                <tr
                  key={id}
                  className="transition-colors"
                  style={{ borderBottom: i < visitorLog.length - 1 ? "1px solid #f1f5f9" : "none" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#fafbff")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <td className="px-6 py-3.5">
                    <span className="text-sm font-bold text-gray-700">{id}</span>
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{device}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3.5">
                    <a
                      href="#"
                      className="text-sm font-medium"
                      style={{ color: "#7c3aed" }}
                    >
                      {page}
                    </a>
                  </td>
                  <td className="px-6 py-3.5">
                    <span className="text-sm text-gray-500">{time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 border-t border-gray-100 text-center">
            <a
              href="#"
              className="text-sm font-semibold"
              style={{ color: "#7c3aed" }}
            >
              Xem tất cả nhật ký
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}

/* ─── Welcome Screen ─── */
function WelcomeScreen() {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
      <div className="max-w-[1000px] mx-auto space-y-5">

        {/* Hero */}
        <div
          className="rounded-3xl overflow-hidden relative flex min-h-[300px]"
          style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)" }}
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />

          <div className="flex flex-col justify-center px-12 py-10 flex-1 z-10 relative">
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full mb-5 w-fit uppercase tracking-wider"
              style={{ background: "rgba(124,58,237,0.12)", color: "#7c3aed" }}
            >
              Hệ thống quản trị
            </span>
            <h1 className="text-5xl font-black text-gray-900 leading-[1.05] mb-1">Xin chào,</h1>
            <h1
              className="text-5xl font-black leading-[1.05] mb-5"
              style={{
                background: "linear-gradient(90deg, #7c3aed, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Quý Khách!
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[360px]">
              Chào mừng bạn đến với hệ thống quản lý website của{" "}
              <span className="font-bold text-violet-700">ButPhaMarketing</span>. Vui lòng chọn mục từ menu để bắt đầu.
            </p>
          </div>

          <div className="w-[360px] flex-shrink-0 flex items-end justify-center pb-0 relative z-10 pr-8">
            <div className="flex items-end gap-3">
              <div className="flex flex-col items-center">
                <div className="w-[190px] h-[120px] rounded-xl overflow-hidden shadow-2xl border-[3px] border-white border-b-0">
                  <div className="flex items-center gap-1 px-2 py-1.5 bg-gray-50 border-b border-gray-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <div className="flex-1 h-3.5 bg-gray-100 rounded mx-1.5" />
                  </div>
                  <div className="flex h-[calc(100%-24px)]">
                    <div className="w-9 bg-violet-700 flex flex-col items-center pt-2 gap-1.5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-5 h-1 rounded-full ${i===0?"bg-white":"bg-white/30"}`} />
                      ))}
                    </div>
                    <div className="flex-1 p-2 space-y-1.5">
                      <div className="h-2.5 w-3/4 bg-violet-200 rounded" />
                      <div className="grid grid-cols-2 gap-1">
                        <div className="h-7 bg-violet-50 rounded border border-violet-100" />
                        <div className="h-7 bg-indigo-50 rounded border border-indigo-100" />
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded" />
                    </div>
                  </div>
                </div>
                <div className="w-[190px] h-2 bg-gray-200 rounded-b-sm" />
                <div className="w-14 h-1 bg-gray-300 rounded-b-lg" />
              </div>
              <div className="mb-3">
                <div className="w-[65px] h-[105px] rounded-[16px] overflow-hidden shadow-xl border-[3px] border-white">
                  <div className="flex justify-center pt-1.5 bg-gray-50 border-b border-gray-100">
                    <div className="w-7 h-1.5 bg-gray-200 rounded-full mb-1" />
                  </div>
                  <div className="p-1.5 space-y-1">
                    <div className="h-9 bg-violet-600 rounded-lg" />
                    <div className="h-2 bg-gray-100 rounded" />
                    <div className="h-2 w-4/5 bg-gray-100 rounded" />
                    <div className="grid grid-cols-2 gap-1 pt-0.5">
                      <div className="h-7 bg-violet-50 rounded border border-violet-100" />
                      <div className="h-7 bg-indigo-50 rounded border border-indigo-100" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-stretch">
            <div className="flex items-center gap-4 p-5 flex-1">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">Hỗ trợ khách hàng</h3>
                <p className="text-xs text-gray-500 max-w-[280px]">
                  Liên hệ đội ngũ ButPhaMarketing nếu bạn cần hỗ trợ sử dụng hệ thống.
                </p>
              </div>
            </div>
            <div className="w-px bg-gray-100 my-4" />
            <div className="flex items-center gap-3 px-7">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#0068FF" }}>
                <svg viewBox="0 0 40 40" className="w-4 h-4 fill-white">
                  <path d="M20 4C11.163 4 4 11.163 4 20c0 3.15.875 6.1 2.396 8.613L4.91 34.9a.833.833 0 0 0 1.038 1.004l6.527-2.153A15.917 15.917 0 0 0 20 36c8.837 0 16-7.163 16-16S28.837 4 20 4zm0 3.333c6.983 0 12.667 5.684 12.667 12.667S26.983 32.667 20 32.667a12.583 12.583 0 0 1-5.952-1.491l-.407-.228-4.213 1.39 1.39-4.038-.25-.424A12.583 12.583 0 0 1 7.333 20C7.333 13.017 13.017 7.333 20 7.333z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-medium">Zalo hỗ trợ</p>
                <p className="text-lg font-black text-gray-900">093.741.7982</p>
              </div>
            </div>
            <div className="w-px bg-gray-100 my-4" />
            <div className="flex items-center px-7 max-w-[180px]">
              <p className="text-xs text-gray-400 leading-relaxed">
                Đội ngũ luôn sẵn sàng đồng hành và hỗ trợ bạn xuyên suốt.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─── Placeholder ─── */
function PlaceholderScreen({ label }: { label: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-gray-50">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #ede9fe, #ddd6fe)" }}>
        <BarChart3 className="w-7 h-7 text-violet-500" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-black text-gray-800 mb-1">{label}</h2>
        <p className="text-sm text-gray-400">Tính năng đang được phát triển</p>
      </div>
    </div>
  );
}

/* ─── Main Dashboard ─── */
// Mapping from menu label to preview path
const menuPathMap: Record<string, string> = {
  "Tổng quan": null,
  "Quản lý sản phẩm": "/preview/product-management/ProductManagement",
  "Quản lý dịch vụ": "/preview/service-management/ServiceManagement",
  "Quản lý tin tức": "/preview/news-management/NewsManagement",
  "Quản lý trang tĩnh": null,
  "Quản lý hình ảnh": "/preview/appearance-management/AppearanceManagement",
  "Quản lý SEO Page": null,
  "Kho hình ảnh": "/preview/image-library/ImageLibrary",
  "Thông tin website": "/preview/settings/Settings",
  "Thông tin liên hệ": "/preview/settings/Settings",
  "Cấu hình SEO": "/preview/settings/Settings",
  "Email hệ thống": "/preview/settings/Settings",
  "Tài khoản quản trị": "/preview/settings/Settings",
  "Phân quyền": "/preview/settings/Settings",
  "Nhật ký hoạt động": "/preview/settings/Settings",
};

export function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set(["Thiết lập thông tin"]));
  const pageTitle = activeMenu ?? "Trang Quản Trị";

  const toggleExpand = (label: string) => {
    const next = new Set(expandedMenus);
    if (next.has(label)) next.delete(label);
    else next.add(label);
    setExpandedMenus(next);
  };

  const navigateToMenu = (label: string) => {
    setActiveMenu(label);
    const path = menuPathMap[label];
    if (path) {
      const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
      window.location.href = basePath + path;
    }
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden font-sans"
      style={{ fontFamily: "'Inter','Plus Jakarta Sans',system-ui,sans-serif", background: "#f8fafc" }}
    >
      {/* ── SIDEBAR ── */}
      <aside
        className="w-[210px] flex-shrink-0 flex flex-col overflow-y-auto relative"
        style={{ background: "linear-gradient(180deg, #1a0a3d 0%, #2d0a6b 40%, #1e1b4b 100%)" }}
      >
        <div className="absolute top-0 right-0 w-36 h-36 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-white/10 relative z-10">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(99,102,241,0.4))",
              border: "1px solid rgba(167,139,250,0.3)",
            }}>
            <img src="/images/logo-butpha.png" alt="Logo" className="w-4.5 h-4.5 object-contain"
              style={{ filter: "brightness(10)", width: "1.1rem", height: "1.1rem" }} />
          </div>
          <div>
            <div className="text-xs font-black text-white tracking-tight leading-none">BỨT PHÁ</div>
            <div className="text-[7px] font-bold mt-0.5 tracking-[0.2em]" style={{ color: "#a78bfa" }}>MARKETING</div>
          </div>
        </div>

        {/* Menu groups */}
        <nav className="flex-1 px-2.5 py-4 space-y-4 relative z-10">
          {menuGroups.map(({ label, items }) => (
            <div key={label}>
              <div className="text-[8px] font-bold tracking-[0.18em] px-2.5 mb-1.5"
                style={{ color: "rgba(167,139,250,0.4)" }}>
                {label}
              </div>
              <div className="space-y-0.5">
                {items.map(({ icon: Icon, label: itemLabel, children }) => {
                  const isActive = activeMenu === itemLabel;
                  const isExpanded = expandedMenus.has(itemLabel);
                  const hasChildren = children && children.length > 0;
                  
                  return (
                    <div key={itemLabel}>
                      <button
                        onClick={() => {
                          if (hasChildren) {
                            toggleExpand(itemLabel);
                          } else {
                            navigateToMenu(itemLabel);
                          }
                        }}
                        className="w-full flex items-center gap-2.5 py-2.5 rounded-xl text-left transition-all cursor-pointer"
                        style={{
                          paddingLeft: "10px",
                          paddingRight: "8px",
                          background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
                          color: isActive ? "white" : "rgba(255,255,255,0.55)",
                          fontWeight: isActive ? 600 : 500,
                          borderLeft: isActive ? "2px solid #a78bfa" : "2px solid transparent",
                        }}
                      >
                        <Icon style={{ width: "0.85rem", height: "0.85rem", flexShrink: 0, color: isActive ? "#c4b5fd" : "rgba(255,255,255,0.35)" }} />
                        <span className="flex-1 text-[12px] leading-tight">{itemLabel}</span>
                        {hasChildren && (
                          <div style={{
                            width: "0.7rem",
                            height: "0.7rem",
                            opacity: 0.4,
                            transform: isExpanded ? "rotate(0deg)" : "rotate(-90deg)",
                            transition: "transform .2s"
                          }}>
                            <ChevronRight style={{ width: "100%", height: "100%" }} />
                          </div>
                        )}
                        {!hasChildren && <ChevronRight style={{ width: "0.7rem", height: "0.7rem", opacity: isActive ? 0.5 : 0.15 }} />}
                      </button>
                      {/* Sub-menu */}
                      {hasChildren && isExpanded && (
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {children.map((child) => {
                            const isChildActive = activeMenu === child.label;
                            return (
                              <button
                                key={child.label}
                                onClick={() => navigateToMenu(child.label)}
                                className="w-full flex items-center gap-2 py-2 rounded-lg text-left transition-all cursor-pointer"
                                style={{
                                  paddingLeft: "10px",
                                  paddingRight: "8px",
                                  background: isChildActive ? "rgba(124,58,237,0.25)" : "transparent",
                                  color: isChildActive ? "white" : "rgba(255,255,255,0.45)",
                                  fontWeight: isChildActive ? 600 : 400,
                                  borderLeft: isChildActive ? "2px solid #7c3aed" : "2px solid transparent",
                                }}
                              >
                                <child.icon style={{ width: "0.75rem", height: "0.75rem", flexShrink: 0, color: isChildActive ? "#c4b5fd" : "rgba(255,255,255,0.3)" }} />
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

        {/* User + Logout */}
        <div className="px-3 pb-4 border-t border-white/10 pt-3 relative z-10 space-y-1">
          <div className="flex items-center gap-2.5 rounded-xl p-2.5 cursor-pointer transition-all"
            style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 text-xs"
              style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[11px] font-semibold leading-none">Admin</div>
              <div className="text-[9px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Quản trị viên</div>
            </div>
            <ChevronDown style={{ width: "0.75rem", height: "0.75rem", color: "rgba(255,255,255,0.3)" }} />
          </div>
          <button 
            onClick={() => {
              // Navigate to Login preview
              const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
              window.location.href = `${basePath}/preview/cms-login/Login`;
            }}
            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-all hover:bg-white/10 cursor-pointer"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            <LogOut style={{ width: "0.8rem", height: "0.8rem", flexShrink: 0 }} />
            <span className="text-[12px] font-medium">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[56px] flex items-center justify-between px-7 flex-shrink-0"
          style={{ background: "white", borderBottom: "1px solid #f1f5f9", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-400">
              Trang chủ
              {activeMenu && (
                <>
                  <span className="mx-2 text-gray-200">/</span>
                  <span className="font-semibold text-gray-700">{activeMenu}</span>
                </>
              )}
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <h1 className="text-sm font-black text-gray-900">{pageTitle}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <Bell style={{ width: "1rem", height: "1rem", color: "#94a3b8" }} />
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-black text-white"
                style={{ background: "#ef4444" }}>3</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-white font-black text-xs"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}>
                A
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-none">Admin</div>
                <div className="text-[10px] text-gray-400 leading-none mt-0.5">Quản trị viên</div>
              </div>
              <ChevronDown style={{ width: "0.75rem", height: "0.75rem", color: "#94a3b8" }} />
            </div>
          </div>
        </header>

        {/* Content */}
        {activeMenu === null             && <WelcomeScreen />}
        {activeMenu === "Tổng quan"      && <TongQuanScreen />}
        {activeMenu !== null && activeMenu !== "Tổng quan" && <PlaceholderScreen label={activeMenu} />}
      </div>
    </div>
  );
}

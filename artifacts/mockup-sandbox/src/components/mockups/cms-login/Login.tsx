import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Phone,
  Globe,
  Mail,
  User,
  MessageCircle,
  FileText,
  Search,
  Monitor,
  Code2,
  Megaphone,
  Headphones,
  ShieldCheck,
  Star,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const services = [
  { icon: FileText,    title: "Viết bài chuẩn SEO",       desc: "Nội dung chất lượng, tăng thứ hạng tìm kiếm." },
  { icon: Search,      title: "Quảng cáo từ khoá",         desc: "Tiếp cận khách hàng đúng nhu cầu, hiệu quả cao." },
  { icon: Monitor,     title: "Nâng cấp giao diện",        desc: "Giao diện hiện đại, chuẩn UX/UI chuyên nghiệp." },
  { icon: Code2,       title: "Nâng cấp tính năng",        desc: "Tối ưu chức năng, vận hành mượt mà, ổn định." },
  { icon: Megaphone,   title: "Dịch vụ marketing",         desc: "Đa dạng giải pháp marketing toàn diện." },
  { icon: Globe,       title: "Thông tin Website",         desc: "Quản lý nội dung website dễ dàng, nhanh chóng." },
  { icon: Headphones,  title: "Liên hệ kỹ thuật",          desc: "Hỗ trợ kỹ thuật chuyên nghiệp, tận tâm." },
  { icon: Star,        title: "Phản ánh dịch vụ",          desc: "Gửi phản hồi, đánh giá chất lượng dịch vụ." },
];

const contacts = [
  { icon: Phone,         label: "Hotline",       value: "093.741.7982" },
  { icon: Globe,         label: "Website",       value: "butphamarketing.com" },
  { icon: Mail,          label: "Email",         value: "butphamarketing@gmail.com" },
  { icon: MessageCircle, label: "Zalo",          value: "093.741.7982" },
];

const features = [
  "Quản lý nội dung dễ dàng",
  "Cập nhật thời gian thực",
  "Bảo mật dữ liệu tuyệt đối",
];

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex font-sans"
      style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* ── LEFT PANEL ── */}
      <div className="w-[38%] flex flex-col bg-white relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.6,
          }}
        />
        {/* Top gradient accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9, #4f46e5)" }}
        />

        <div className="relative z-10 flex flex-col h-full px-10 py-10 justify-between">
          <div>
            {/* Logo area */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
              >
                <img
                  src="/images/logo-butpha.png"
                  alt="Bứt Phá Marketing"
                  className="w-7 h-7 object-contain"
                  style={{ filter: "brightness(10)" }}
                />
              </div>
              <div>
                <div className="text-lg font-black text-gray-900 leading-none tracking-tight">Bứt Phá Marketing</div>
                <div className="text-[10px] font-semibold text-gray-400 tracking-widest mt-0.5">HỆ THỐNG QUẢN TRỊ</div>
              </div>
            </div>

            {/* Welcome */}
            <div className="mb-8">
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{ background: "#f5f3ff", color: "#7c3aed" }}
              >
                <Sparkles className="w-3 h-3" />
                CMS v1.0
              </div>
              <h1 className="text-[28px] font-black text-gray-900 leading-tight mb-2">
                Đăng nhập<br />
                <span style={{ color: "#7c3aed" }}>Trang quản trị</span>
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Quản lý website doanh nghiệp của bạn<br />mọi lúc, mọi nơi.
              </p>
            </div>

            {/* Features checklist */}
            <div className="flex flex-col gap-2 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-violet-500 flex-shrink-0" />
                  <span className="text-xs text-gray-500 font-medium">{f}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // Navigate to Dashboard preview
              const basePath = import.meta.env.BASE_URL ? import.meta.env.BASE_URL.replace(/\/$/, '') : '';
              window.location.href = `${basePath}/preview/cms-dashboard/Dashboard`;
            }}>
              {/* Tài khoản */}
              <div className="space-y-1.5">
                <Label htmlFor="username" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Tài khoản
                </Label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    defaultValue="butphamarketing@gmail.com"
                    className="pl-10 h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors"
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </div>

              {/* Mật khẩu */}
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-xs font-bold text-gray-600 uppercase tracking-wide">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    defaultValue="butphamarketing@gmail.com"
                    className="pl-10 pr-10 h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    defaultChecked
                    className="rounded data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer font-normal">
                    Ghi nhớ đăng nhập
                  </Label>
                </div>
                <a href="#" className="text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors">
                  Quên mật khẩu?
                </a>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 rounded-xl font-bold text-sm text-white mt-2 flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-xl cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                  boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
                }}
              >
                Đăng nhập ngay
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-100 mt-6">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
              <span>© 2026 Bứt Phá Marketing · Bảo mật SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div
        className="flex-1 flex flex-col relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(160deg, #0f0720 0%, #1a0a3d 20%, #2d0a6b 45%, #1e1b4b 75%, #0d1230 100%)",
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)" }} />
        <div className="absolute bottom-[-60px] left-[-40px] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.06) 0%, transparent 65%)" }} />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col h-full px-12 py-10">

          {/* Top header */}
          <div className="flex items-start justify-between mb-8">
            {/* Brand + tagline */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/images/logo-butpha.png"
                  alt="Logo"
                  className="w-11 h-11 object-contain"
                  style={{ filter: "brightness(1.4) drop-shadow(0 0 10px rgba(167,139,250,0.7))" }}
                />
                <div>
                  <div className="text-lg font-black text-white tracking-tight leading-none">BỨT PHÁ</div>
                  <div className="text-[9px] font-bold tracking-[0.35em] mt-0.5" style={{ color: "#a78bfa" }}>MARKETING</div>
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="text-[36px] font-black text-white leading-[1.1] tracking-tight">Đối Tác</div>
                <div
                  className="text-[36px] font-black leading-[1.1] tracking-tight"
                  style={{
                    background: "linear-gradient(90deg, #c4b5fd 0%, #a78bfa 50%, #818cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Chuyển Đổi Số
                </div>
                <div className="text-[36px] font-black text-white leading-[1.1] tracking-tight">Doanh Nghiệp</div>
              </div>
              <p className="text-sm text-white/50 mt-3 leading-relaxed max-w-[260px]">
                Nền tảng quản trị website thông minh, giúp doanh nghiệp bứt phá trong kỷ nguyên số.
              </p>
            </div>

            {/* Decorative floating cards */}
            <div className="relative w-48 h-44 flex-shrink-0 mt-2">
              {/* Card 1 */}
              <div
                className="absolute top-0 right-0 w-32 h-[90px] rounded-2xl p-3"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(99,102,241,0.2))",
                  border: "1px solid rgba(167,139,250,0.25)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(124,58,237,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                  transform: "rotate(-6deg)",
                }}
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <div className="h-1.5 w-14 rounded-full bg-violet-400/30" />
                </div>
                <div className="flex gap-1 items-end">
                  {[35, 55, 80, 50, 70, 60, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h * 0.4}px`,
                        background: i === 6
                          ? "linear-gradient(to top, #7c3aed, #c4b5fd)"
                          : "rgba(167,139,250,0.35)",
                      }}
                    />
                  ))}
                </div>
                <div className="text-[9px] text-white/40 mt-1.5 font-medium">Lượt xem tuần này</div>
              </div>

              {/* Card 2 */}
              <div
                className="absolute bottom-0 left-0 w-28 h-[76px] rounded-2xl p-3"
                style={{
                  background: "linear-gradient(135deg, rgba(79,70,229,0.35), rgba(124,58,237,0.2))",
                  border: "1px solid rgba(129,140,248,0.25)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 24px rgba(79,70,229,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                  transform: "rotate(5deg)",
                }}
              >
                <div className="text-[9px] text-white/40 font-medium mb-1.5">Trạng thái</div>
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                  <div className="text-[10px] text-white/70 font-semibold">Online</div>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-4/5 rounded-full" style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa)" }} />
                </div>
              </div>

              {/* Glow dot */}
              <div
                className="absolute top-3 right-6 w-2 h-2 rounded-full"
                style={{ background: "white", boxShadow: "0 0 0 4px rgba(255,255,255,0.15), 0 0 16px 4px rgba(255,255,255,0.6)" }}
              />
            </div>
          </div>

          {/* Contact strip */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.35)", border: "1px solid rgba(167,139,250,0.25)" }}
                >
                  <Icon className="h-3.5 w-3.5 text-violet-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] font-medium text-white/40 uppercase tracking-wide">{label}</div>
                  <div className="text-xs font-bold text-white truncate">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Services section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Dịch vụ của chúng tôi</div>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-4 gap-3 flex-1">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col p-4 rounded-2xl group transition-all cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(99,102,241,0.25))",
                    border: "1px solid rgba(167,139,250,0.25)",
                    boxShadow: "0 2px 8px rgba(124,58,237,0.2)",
                  }}
                >
                  <Icon className="text-violet-300" style={{ width: "1rem", height: "1rem" }} />
                </div>
                <div className="font-bold text-sm text-white leading-snug mb-1">{title}</div>
                <div className="text-[11px] text-white/40 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
              <span className="text-[11px] text-white/35 font-medium">Powered by Bứt Phá Marketing</span>
            </div>
            <div
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg"
              style={{ background: "rgba(124,58,237,0.3)", color: "#c4b5fd", border: "1px solid rgba(167,139,250,0.2)" }}
            >
              Phiên bản v1.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

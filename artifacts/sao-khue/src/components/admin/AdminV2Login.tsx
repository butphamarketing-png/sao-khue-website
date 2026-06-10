import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrandLogo } from "@/components/BrandLogo";

type Props = {
  authMode: string;
  loginError: string | null;
  adminEmail: string;
  setAdminEmail: (v: string) => void;
  adminPassword: string;
  setAdminPassword: (v: string) => void;
  adminSubmitting: boolean;
  setAdminSubmitting: (v: boolean) => void;
  loginWithPassword: (email: string, pass: string) => Promise<boolean>;
  login: () => void;
};

const features = [
  "Quản lý bài viết & trang chủ",
  "Cập nhật SEO & hình ảnh",
  "Bảo mật dữ liệu tuyệt đối",
];

export function AdminV2Login({
  authMode,
  loginError,
  adminEmail,
  setAdminEmail,
  adminPassword,
  setAdminPassword,
  adminSubmitting,
  setAdminSubmitting,
  loginWithPassword,
  login,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAdminSubmitting(true);
    const ok = await loginWithPassword(adminEmail, adminPassword);
    setAdminSubmitting(false);
    if (ok) setAdminPassword("");
  };

  return (
    <div
      className="flex min-h-screen w-full font-sans"
      style={{ fontFamily: "'Inter', 'Be Vietnam Pro', system-ui, sans-serif" }}
    >
      <div className="relative flex w-full flex-col overflow-hidden bg-white lg:w-[42%]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute left-0 right-0 top-0 h-1"
          style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9, #4f46e5)" }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 md:px-10">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <BrandLogo alt="Kiến Trúc Sao Khuê" className="h-11 w-11 rounded-lg bg-white object-contain p-1 shadow-sm" />
              <div>
                <div className="text-sm font-black tracking-tight text-gray-900">KIẾN TRÚC SAO KHUÊ</div>
                <div className="text-[10px] font-bold tracking-[0.25em] text-violet-500">CMS ADMIN</div>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-violet-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-violet-500">
                  Khu vực quản trị
                </span>
              </div>
              <h1 className="text-3xl font-black tracking-tight text-gray-900">Đăng nhập</h1>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Quản lý toàn bộ website: bài viết, trang chủ, SEO, hình ảnh và cài đặt hệ thống.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-sm font-semibold text-gray-700">
                  Email quản trị
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="admin-email"
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="h-12 rounded-xl border-gray-200 pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="admin-password" className="text-sm font-semibold text-gray-700">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-12 rounded-xl border-gray-200 pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {loginError && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {loginError}
                </p>
              )}

              <Button
                type="submit"
                disabled={adminSubmitting}
                className="h-12 w-full rounded-xl text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
              >
                {adminSubmitting ? "Đang đăng nhập..." : "Đăng nhập CMS"}
                {!adminSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>

              {authMode === "replit" && (
                <Button type="button" variant="outline" className="h-11 w-full rounded-xl" onClick={login}>
                  Đăng nhập Replit
                </Button>
              )}
            </form>

            <ul className="mt-8 space-y-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 shrink-0 text-violet-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="h-3.5 w-3.5 text-violet-400" />
              <span>© Kiến Trúc Sao Khuê · Khu vực nội bộ</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative hidden flex-1 flex-col overflow-hidden text-white lg:flex"
        style={{
          background:
            "linear-gradient(160deg, #0f0720 0%, #1a0a3d 20%, #2d0a6b 45%, #1e1b4b 75%, #0d1230 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 65%)" }}
        />
        <div className="relative z-10 flex h-full flex-col justify-between px-12 py-10">
          <div>
            <div className="mb-6 space-y-1">
              <div className="text-4xl font-black leading-tight tracking-tight">Quản Lý</div>
              <div
                className="text-4xl font-black leading-tight tracking-tight"
                style={{
                  background: "linear-gradient(90deg, #c4b5fd 0%, #a78bfa 50%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Toàn Bộ Website
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Thiết kế, xây dựng, tin tức, báo giá, SEO và cài đặt Google — tất cả trong một bảng điều khiển.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Phone, label: "Hotline", value: "0909 075 668" },
              { icon: Globe, label: "Website", value: "kientrucsaokhue.com" },
              { icon: Mail, label: "Email", value: "kientrucsaokhue@gmail.com" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                <Icon className="h-4 w-4 shrink-0 text-violet-300" />
                <div>
                  <div className="text-[10px] text-white/40">{label}</div>
                  <div className="text-xs font-semibold text-white/80">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

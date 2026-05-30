import type { FormEvent } from "react";
import { ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export function AdminLogin({
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
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAdminSubmitting(true);
    const ok = await loginWithPassword(adminEmail, adminPassword);
    setAdminSubmitting(false);
    if (ok) setAdminPassword("");
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-primary via-[#0c4a8a] to-slate-900 lg:flex lg:flex-col lg:justify-between">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative p-10">
          <BrandLogo alt="Sao Khuê" className="h-16 rounded-xl bg-white p-2 object-contain" />
        </div>
        <div className="relative px-10 pb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/20">
            <Building2 size={16} />
            Kiến Trúc Sao Khuê
          </div>
          <h2 className="text-4xl font-bold leading-tight text-white">
            Quản trị website
            <span className="mt-2 block text-accent">chuyên nghiệp</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-blue-100/90">
            Quản lý bài viết, hero, cam kết, bảng báo giá và toàn bộ nội dung hiển thị trên trang chủ.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-slate-50 p-6">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <BrandLogo alt="Sao Khuê" className="mx-auto h-14 object-contain" />
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
              <ShieldCheck size={24} />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Đăng nhập Admin</h1>
            <p className="mt-2 text-sm text-slate-500">
              Chỉ dành cho quản trị viên được cấp quyền.
            </p>

            {authMode === "password" ? (
              <form className="mt-8 space-y-4" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email admin</label>
                  <Input
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    type="email"
                    autoComplete="username"
                    className="h-11 rounded-xl border-slate-200"
                    placeholder="admin@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Mật khẩu</label>
                  <Input
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    className="h-11 rounded-xl border-slate-200"
                    placeholder="Nhập mật khẩu"
                  />
                </div>
                {loginError && (
                  <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600">
                    {loginError}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={adminSubmitting}
                  className="h-12 w-full rounded-xl bg-primary text-base font-semibold hover:bg-primary/90"
                >
                  {adminSubmitting ? "Đang đăng nhập..." : "Đăng nhập"}
                </Button>
              </form>
            ) : (
              <Button
                onClick={login}
                className="mt-8 h-12 w-full rounded-xl bg-primary text-base font-semibold hover:bg-primary/90"
              >
                Đăng nhập để tiếp tục
              </Button>
            )}

            <p className="mt-6 text-center text-xs text-slate-400">
              <a href="/" className="font-medium text-primary hover:underline">
                ← Về trang chủ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

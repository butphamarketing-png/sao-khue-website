import * as React from "react";
import { CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ZALO_TECH_URL,
  currentWebsiteFeatures,
  googleAdsFeatures,
  hostingPlans,
  renewalInfo,
  upgradeSuggestions,
  websiteCarePackages,
  type BpServiceModal,
} from "./bp-cms-login-data";

const purpleBtn =
  "h-11 rounded-xl border-0 text-sm font-bold text-white shadow-lg transition-all hover:opacity-90 hover:shadow-xl";
const purpleBtnStyle = {
  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
  boxShadow: "0 4px 20px rgba(124,58,237,0.35)",
};

function ContactButton() {
  return (
    <Button asChild className={purpleBtn} style={purpleBtnStyle}>
      <a href={ZALO_TECH_URL} target="_blank" rel="noopener noreferrer">
        Liên hệ kỹ thuật
        <ExternalLink className="ml-2 h-4 w-4" />
      </a>
    </Button>
  );
}

function ModalShell({
  open,
  onOpenChange,
  title,
  description,
  children,
  maxWidth = "max-w-4xl",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={`${maxWidth} max-h-[90vh] overflow-y-auto rounded-2xl border-violet-100 p-6 sm:p-8`}
      >
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-black tracking-tight text-violet-900 sm:text-2xl">
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription className="text-center text-sm text-gray-500">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type ServiceModalsProps = {
  activeModal: BpServiceModal;
  onClose: () => void;
};

export function BpCmsServiceModals({ activeModal, onClose }: ServiceModalsProps) {
  return (
    <>
      <ModalShell
        open={activeModal === "website-care"}
        onOpenChange={(open) => !open && onClose()}
        title="BẢNG GIÁ CHĂM SÓC WEBSITE"
        maxWidth="max-w-5xl"
      >
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {websiteCarePackages.map((pkg) => (
            <div
              key={pkg.title}
              className="relative flex flex-col rounded-2xl border border-violet-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              {pkg.popular ? (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
                >
                  Phổ biến
                </span>
              ) : null}
              <h3 className="text-sm font-bold text-gray-800">{pkg.title}</h3>
              <p className="mt-2 text-2xl font-black text-violet-700">{pkg.price}</p>
              <div className="my-4 h-px bg-violet-100" />
              <FeatureList items={pkg.features} />
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <ContactButton />
        </div>
      </ModalShell>

      <ModalShell
        open={activeModal === "google-ads"}
        onOpenChange={(open) => !open && onClose()}
        title="DỊCH VỤ GOOGLE ADS"
        maxWidth="max-w-lg"
      >
        <div className="mt-2 rounded-2xl border border-violet-100 bg-violet-50/50 p-6 text-center">
          <p className="text-sm font-semibold text-gray-600">Chi phí quản lý</p>
          <p className="mt-2 text-3xl font-black text-violet-700">1.000.000đ</p>
          <p className="text-sm font-medium text-violet-500">/ tháng</p>
        </div>
        <div className="mt-6">
          <p className="mb-3 text-sm font-bold text-gray-700">Bao gồm:</p>
          <FeatureList items={googleAdsFeatures} />
        </div>
        <div className="mt-6 flex justify-center">
          <ContactButton />
        </div>
      </ModalShell>

      <ModalShell
        open={activeModal === "website-upgrade"}
        onOpenChange={(open) => !open && onClose()}
        title="NÂNG CẤP WEBSITE"
        maxWidth="max-w-4xl"
      >
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-violet-100 bg-violet-50/30 p-5">
            <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-violet-800">
              Tính năng hiện có
            </h3>
            <FeatureList items={currentWebsiteFeatures} />
          </div>
          <div className="rounded-2xl border border-violet-100 bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-sm font-black uppercase tracking-wide text-violet-800">
              Đề xuất nâng cấp
            </h3>
            <FeatureList items={upgradeSuggestions} />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <ContactButton />
        </div>
      </ModalShell>

      <ModalShell
        open={activeModal === "hosting"}
        onOpenChange={(open) => !open && onClose()}
        title="BẢNG GIÁ HOSTING"
        maxWidth="max-w-2xl"
      >
        <div className="mt-4 overflow-hidden rounded-2xl border border-violet-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-violet-700 text-left text-white">
                <th className="px-4 py-3 font-bold">Dung lượng</th>
                <th className="px-4 py-3 text-right font-bold">Giá (VNĐ/năm)</th>
              </tr>
            </thead>
            <tbody>
              {hostingPlans.map((plan, i) => (
                <tr
                  key={plan.storage}
                  className={i % 2 === 0 ? "bg-white" : "bg-violet-50/40"}
                >
                  <td className="px-4 py-2.5 font-semibold text-gray-800">{plan.storage}</td>
                  <td className="px-4 py-2.5 text-right font-medium text-violet-700">
                    {plan.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-center">
          <ContactButton />
        </div>
      </ModalShell>
    </>
  );
}

type RenewalModalsProps = {
  passwordOpen: boolean;
  renewalOpen: boolean;
  onPasswordOpenChange: (open: boolean) => void;
  onRenewalOpenChange: (open: boolean) => void;
  adminEmail: string;
  verifyAdminPassword: (email: string, password: string) => Promise<boolean>;
};

export function BpCmsRenewalModals({
  passwordOpen,
  renewalOpen,
  onPasswordOpenChange,
  onRenewalOpenChange,
  adminEmail,
  verifyAdminPassword,
}: RenewalModalsProps) {
  const [renewalPassword, setRenewalPassword] = React.useState("");
  const [renewalError, setRenewalError] = React.useState<string | null>(null);
  const [renewalSubmitting, setRenewalSubmitting] = React.useState(false);

  const onVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setRenewalSubmitting(true);
    setRenewalError(null);
    const ok = await verifyAdminPassword(adminEmail, renewalPassword);
    setRenewalSubmitting(false);
    if (ok) {
      setRenewalPassword("");
      onPasswordOpenChange(false);
      onRenewalOpenChange(true);
      return;
    }
    setRenewalError("Mật khẩu không đúng. Vui lòng thử lại.");
  };

  return (
    <>
      <Dialog open={passwordOpen} onOpenChange={onPasswordOpenChange}>
        <DialogContent className="max-w-md rounded-2xl border-violet-100 p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-black text-violet-900">
              Xác thực quản trị
            </DialogTitle>
            <DialogDescription>
              Nhập mật khẩu Admin để xem thông tin gia hạn website.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onVerify} className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="renewal-password" className="text-sm font-semibold text-gray-700">
                Mật khẩu Admin
              </Label>
              <Input
                id="renewal-password"
                type="password"
                value={renewalPassword}
                onChange={(e) => setRenewalPassword(e.target.value)}
                placeholder="••••••••"
                className="h-11 rounded-xl"
                required
                autoFocus
              />
            </div>
            {renewalError ? (
              <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {renewalError}
              </p>
            ) : null}
            <Button
              type="submit"
              disabled={renewalSubmitting}
              className={`${purpleBtn} w-full`}
              style={purpleBtnStyle}
            >
              {renewalSubmitting ? "Đang xác thực..." : "Xác nhận"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <ModalShell
        open={renewalOpen}
        onOpenChange={onRenewalOpenChange}
        title="THÔNG TIN GIA HẠN WEBSITE"
        maxWidth="max-w-lg"
      >
        <div className="mt-4 space-y-4">
          {[
            { label: "Ngày gia hạn", value: renewalInfo.renewalDate },
            { label: "Hosting", value: `${renewalInfo.hosting} — ${renewalInfo.hostingPrice}` },
            {
              label: "Tên miền",
              value: `${renewalInfo.domain} — ${renewalInfo.domainPrice}`,
            },
          ].map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-violet-100 bg-violet-50/40 px-4 py-3"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-violet-500">
                {row.label}
              </p>
              <p className="mt-1 text-sm font-bold text-gray-800">{row.value}</p>
            </div>
          ))}
        </div>
      </ModalShell>
    </>
  );
}

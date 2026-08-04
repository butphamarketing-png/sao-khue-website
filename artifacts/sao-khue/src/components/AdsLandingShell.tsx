import { Link } from "wouter";
import { PhoneCall } from "lucide-react";
import { SiZalo } from "react-icons/si";
import { BrandLogo } from "@/components/BrandLogo";
import { FloatingButtons } from "@/components/FloatingButtons";
import { trackAdsConversion } from "@/lib/ads-conversions";
import { useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Shell gọn cho landing ads — giữ logo + hotline, bỏ mega menu. */
export function AdsLandingShell({ children }: Props) {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : null;
  const brand = s.companyName || "Kiến Trúc Sao Khuê";

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 text-slate-900 backdrop-blur-md">
        <div className="site-container flex h-14 items-center justify-between gap-3 sm:h-16">
          <Link href="/" className="flex min-w-0 items-center gap-2.5">
            <div className="logo-header-wrap shrink-0">
              <BrandLogo src={s.logoUrl} alt={brand} className="logo-header-img h-9 w-auto sm:h-10" />
            </div>
            <span className="hidden truncate text-sm font-extrabold uppercase tracking-wide text-primary sm:inline">
              Kiến Trúc Sao Khuê
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {zaloHref && (
              <a
                href={zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAdsConversion("zalo", { source: "ads_shell" })}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-[#0068ff] px-3 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
              >
                <SiZalo size={18} />
                <span className="hidden sm:inline">Zalo</span>
              </a>
            )}
            {phone && (
              <a
                href={telHref(phone)}
                onClick={() => trackAdsConversion("call", { source: "ads_shell" })}
                className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-accent px-3 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:brightness-110 sm:px-4"
              >
                <PhoneCall size={16} />
                <span className="sm:hidden">Gọi</span>
                <span className="hidden sm:inline">{phone}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="relative flex-1 pb-36 md:pb-0">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50 py-8">
        <div className="site-container text-center text-sm text-slate-600">
          <p className="font-bold uppercase tracking-wide text-primary">{brand}</p>
          {s.address1 && <p className="mt-2">{s.address1}</p>}
          {phone && (
            <p className="mt-1">
              Hotline:{" "}
              <a href={telHref(phone)} className="font-semibold text-accent">
                {phone}
              </a>
            </p>
          )}
          <p className="mt-4 text-xs text-slate-400">
            <Link href="/" className="underline-offset-2 hover:underline">
              Về trang chủ
            </Link>
            {" · "}
            <Link href="/bao-gia" className="underline-offset-2 hover:underline">
              Báo giá
            </Link>
            {" · "}
            <Link href="/lien-he" className="underline-offset-2 hover:underline">
              Liên hệ
            </Link>
          </p>
        </div>
      </footer>

      <FloatingButtons />
    </div>
  );
}


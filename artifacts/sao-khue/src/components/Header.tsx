import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { useSiteSettings, telHref, useNavMenu, usePrimaryPhone } from "@/lib/site-settings";
import { useQuoteRequest } from "@/lib/quote-request-context";
import { useEffect, useState } from "react";

export function Header() {
  const s = useSiteSettings();
  const menu = useNavMenu();
  const phone = usePrimaryPhone();
  const { openQuoteRequest } = useQuoteRequest();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  function isNavActive(item: { href: string; category?: string }) {
    if (location === item.href) return true;
    if (item.category && location.startsWith(`${item.href}/`)) return true;
    if (item.category === "tin-tuc" && location.startsWith("/kinh-nghiem")) return true;
    if (item.href.startsWith("/bai-viet/") && location === item.href) return true;
    return false;
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "border-slate-200/70 bg-white/92 py-0 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-slate-100/90 bg-white/98 py-0 shadow-[0_2px_16px_rgba(15,23,42,0.04)] backdrop-blur-sm"
      }`}
    >
      <div className="site-container max-w-[1440px]">
        <div className="grid h-[72px] grid-cols-[minmax(0,1fr)_auto] items-center gap-1 sm:gap-2 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:h-[88px] lg:gap-3">
          <Link href="/" className="group flex min-w-0 items-center self-center">
            <div className="logo-header-wrap">
              <BrandLogo
                src={s.logoUrl}
                alt={s.companyName}
                className="logo-header-img transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <nav className="hidden min-w-0 flex-nowrap items-center justify-center gap-0 lg:flex">
            {menu.map((item) => {
              const active = isNavActive(item);
              const label = item.shortTitle ?? item.title;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  title={item.title}
                  className={`relative shrink-0 whitespace-nowrap rounded-lg px-2 py-2 text-[11px] font-semibold leading-none tracking-wide transition-colors lg:px-2.5 xl:px-3 xl:text-xs 2xl:text-[13px] ${
                    active
                      ? "text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-2 lg:flex">
            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-full border-primary/20 px-3 text-xs font-bold text-primary hover:bg-primary/5 xl:h-11 xl:px-4 xl:text-sm"
              onClick={openQuoteRequest}
            >
              <ClipboardList size={16} className="mr-1.5 shrink-0" />
              Báo giá
            </Button>
            <Button
              asChild
              className="btn-gradient-accent group h-10 rounded-full px-3 transition-transform hover:scale-[1.02] xl:h-11 xl:px-5"
            >
              <a href={telHref(phone)} aria-label={`Gọi ${phone}`}>
                <PhoneCall size={16} className="shrink-0 group-hover:animate-pulse" />
                <span className="ml-1.5 hidden text-xs font-bold xl:ml-2 xl:inline xl:text-sm">
                  {phone}
                </span>
              </a>
            </Button>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-1.5 sm:gap-2 lg:hidden">
            {phone && (
              <a
                href={telHref(phone)}
                className="mobile-call-shake inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-accent to-[#ff4757] text-white shadow-md ring-2 ring-accent/15"
                aria-label={`Gọi ngay ${phone}`}
              >
                <span className="flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
                  <PhoneCall size={18} strokeWidth={2.5} className="sm:hidden" />
                  <PhoneCall size={20} strokeWidth={2.5} className="hidden sm:block" />
                </span>
                <span className="hidden max-w-[7.5rem] truncate pr-2.5 text-[11px] font-extrabold leading-none tracking-wide min-[400px]:inline sm:max-w-[9rem] sm:text-xs">
                  {phone}
                </span>
              </a>
            )}
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 sm:h-10 sm:w-10 sm:p-2.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={22} className="sm:hidden" /> : <Menu size={22} className="sm:hidden" />}
              {isMobileMenuOpen ? <X size={24} className="hidden sm:block" /> : <Menu size={24} className="hidden sm:block" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-slate-100 bg-white shadow-2xl lg:hidden">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block border-b border-slate-50 px-4 py-3.5 text-sm font-bold ${
                isNavActive(item) ? "bg-primary/5 text-primary" : "text-slate-800"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <div className="p-4 space-y-2">
            <Button
              type="button"
              className="w-full rounded-full bg-primary hover:bg-primary/90"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openQuoteRequest();
              }}
            >
              <ClipboardList size={18} />
              <span className="ml-2 font-bold">NHẬN BÁO GIÁ</span>
            </Button>
            <Button asChild className="w-full rounded-full bg-accent hover:bg-accent/90">
              <a href={telHref(phone)}>
                <PhoneCall size={18} />
                <span className="ml-2 font-bold">GỌI TƯ VẤN NGAY</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { useSiteSettings, telHref, useNavMenu, usePrimaryPhone } from "@/lib/site-settings";
import { useEffect, useState } from "react";

export function Header() {
  const s = useSiteSettings();
  const menu = useNavMenu();
  const phone = usePrimaryPhone();
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
        <div className="grid h-[72px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 lg:h-[88px] xl:gap-3">
          <Link href="/" className="group flex items-center self-center">
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

          <div className="hidden shrink-0 items-center justify-end lg:flex">
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

          <div className="col-start-3 flex items-center justify-end gap-2 lg:hidden">
            {phone && (
              <a
                href={telHref(phone)}
                className="mobile-call-shake inline-flex max-w-[min(52vw,200px)] items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-[#ff4757] px-2.5 py-2 text-white shadow-md ring-2 ring-accent/20"
                aria-label={`Gọi ngay ${phone}`}
              >
                <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <PhoneCall size={16} strokeWidth={2.5} />
                </span>
                <span className="truncate text-xs font-extrabold leading-none tracking-wide">
                  {phone}
                </span>
              </a>
            )}
            <button
              type="button"
              className="shrink-0 rounded-xl border border-slate-200 p-2.5 text-slate-800 transition hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div className="p-4">
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

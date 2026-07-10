import { Link, useLocation } from "wouter";
import { ChevronDown, ClipboardList, Menu, PhoneCall, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { MainNav } from "@/components/MainNav";
import { useSiteSettings, telHref, useNavMenu, usePrimaryPhone } from "@/lib/site-settings";
import { useQuoteRequest } from "@/lib/quote-request-context";
import { useEffect, useState } from "react";
import type { MenuItem } from "@/lib/menu";

function isItemActive(location: string, item: MenuItem): boolean {
  if (location === item.href) return true;
  if (item.category && location.startsWith(`/${item.category}`)) return true;
  if (item.category === "tin-tuc" && location.startsWith("/kinh-nghiem")) return true;
  if (item.children?.some((child) => location === child.href || location.startsWith(`${child.href}/`))) {
    return true;
  }
  return false;
}

export function Header() {
  const s = useSiteSettings();
  const menu = useNavMenu();
  const phone = usePrimaryPhone();
  const { openQuoteRequest } = useQuoteRequest();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
  }, [location]);

  const tagline =
    s.footerDescription ||
    "Chuyên tư vấn thiết kế & xây dựng nhà ở các loại — Uy tín — Chất lượng";

  return (
    <header className="qh-site-header sticky top-0 z-50 w-full">
      <div className="qh-branding border-b border-slate-200/80 bg-white">
        <div className="site-container max-w-[1440px]">
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 py-2 sm:gap-3 sm:py-2.5 lg:gap-4 lg:py-3">
            <Link href="/" className="group flex shrink-0 items-center self-center">
              <div className="logo-header-wrap">
                <BrandLogo
                  src={s.logoUrl}
                  alt={s.companyName}
                  className="logo-header-img transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <div className="hidden min-w-0 text-center lg:block">
              <p className="text-[13px] font-extrabold uppercase leading-tight tracking-wide text-primary xl:text-[15px]">
                {s.companyName}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase leading-snug tracking-wide text-slate-600 xl:text-[11px]">
                {tagline}
              </p>
            </div>

            <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
              <Button
                type="button"
                variant="outline"
                className="hidden h-10 rounded-sm border-primary/25 px-3 text-xs font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-white lg:inline-flex xl:px-4"
                onClick={openQuoteRequest}
              >
                <ClipboardList size={16} className="mr-1.5 shrink-0" />
                Đặt lịch
              </Button>

              {phone && (
                <a
                  href={telHref(phone)}
                  className="qh-hotline hidden items-center gap-2 sm:flex"
                  aria-label={`Gọi hotline ${phone}`}
                >
                  <span className="qh-hotline__avatar" aria-hidden>
                    <PhoneCall size={18} className="text-primary" />
                  </span>
                  <span className="text-left leading-none">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-700">
                      Hotline:
                    </span>
                    <span className="block text-lg font-extrabold tracking-wide text-accent xl:text-xl">
                      {phone}
                    </span>
                  </span>
                </a>
              )}

              {phone && (
                <a
                  href={telHref(phone)}
                  className="mobile-call-shake inline-flex shrink-0 items-center rounded-full bg-gradient-to-r from-accent to-[#ff4757] text-white shadow-md ring-2 ring-accent/15 sm:hidden"
                  aria-label={`Gọi ngay ${phone}`}
                >
                  <span className="flex h-9 w-9 items-center justify-center">
                    <PhoneCall size={18} strokeWidth={2.5} />
                  </span>
                </a>
              )}

              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:bg-slate-50 lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MainNav menu={menu} />

      {isMobileMenuOpen && (
        <div className="qh-mobile-nav absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-slate-200 bg-white shadow-2xl lg:hidden">
          {menu.map((item) => {
            const active = isItemActive(location, item);
            const hasChildren = Boolean(item.children?.length);
            const isExpanded = expandedMobile === item.title;

            return (
              <div key={item.title} className="border-b border-slate-100">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex-1 px-4 py-3.5 text-sm font-bold uppercase ${
                      active ? "bg-primary/5 text-primary" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      className="flex h-full items-center px-4 py-3.5 text-slate-500"
                      onClick={() => setExpandedMobile(isExpanded ? null : item.title)}
                      aria-label={`Mở menu ${item.title}`}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <div className="bg-slate-50 pb-1">
                    {item.children!.map((child) => (
                      <Link
                        key={`${item.title}-${child.title}`}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block border-t border-slate-100 px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-white hover:text-primary"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="space-y-2 p-4">
            <Button
              type="button"
              className="w-full rounded-sm bg-primary font-bold uppercase tracking-wide hover:bg-primary/90"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openQuoteRequest();
              }}
            >
              <ClipboardList size={18} />
              <span className="ml-2">Đặt lịch tư vấn</span>
            </Button>
            {phone && (
              <Button asChild className="w-full rounded-sm bg-accent font-bold uppercase hover:bg-accent/90">
                <a href={telHref(phone)}>
                  <PhoneCall size={18} />
                  <span className="ml-2">Gọi hotline</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

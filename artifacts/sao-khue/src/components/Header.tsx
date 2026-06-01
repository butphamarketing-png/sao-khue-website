import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall, ChevronDown, ArrowRight } from "lucide-react";
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
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileSub(null);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "border-slate-200/70 bg-white/92 py-0 shadow-[0_8px_32px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "border-slate-100/90 bg-white/98 py-0 shadow-[0_2px_16px_rgba(15,23,42,0.04)] backdrop-blur-sm"
      }`}
    >
      <div className="site-container">
        <div className="flex h-[72px] items-center justify-between gap-3 md:h-[88px]">
          <Link href="/" className="group flex shrink-0 items-center">
            <div className="logo-header-wrap">
              <BrandLogo
                src={s.logoUrl}
                alt={s.companyName}
                className="logo-header-img transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
            {menu.map((item) => {
              const active =
                location === item.href ||
                (item.category && location.startsWith(item.href + "/"));
              return (
                <div key={item.title} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 rounded-xl px-3 py-2.5 text-[13px] font-semibold tracking-wide transition-colors xl:px-3.5 xl:text-sm ${
                      active
                        ? "text-primary"
                        : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="opacity-60 transition-transform group-hover:rotate-180"
                      />
                    )}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-accent" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-slate-100/80 bg-white/95 py-2 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group/link flex items-center justify-between px-4 py-2.5 text-sm text-slate-700 transition hover:bg-primary/5 hover:text-primary"
                          >
                            {child.title}
                            <ArrowRight
                              size={14}
                              className="opacity-0 transition group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <Button
              asChild
              className="btn-gradient-accent group h-11 rounded-full px-5 transition-transform hover:scale-[1.02]"
            >
              <a href={telHref(phone)}>
                <PhoneCall size={16} className="group-hover:animate-pulse" />
                <span className="ml-2 text-sm font-bold">{phone}</span>
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2.5 text-slate-800 transition hover:bg-slate-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-slate-100 bg-white shadow-2xl lg:hidden">
          {menu.map((item) => (
            <div key={item.title} className="border-b border-slate-50">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3.5 text-sm font-bold text-slate-800"
                >
                  {item.title}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileSub(openMobileSub === item.title ? null : item.title)
                    }
                    className="px-4 py-3.5 text-slate-500"
                  >
                    <ChevronDown
                      size={18}
                      className={
                        openMobileSub === item.title ? "rotate-180 transition-transform" : "transition-transform"
                      }
                    />
                  </button>
                )}
              </div>
              {item.children && openMobileSub === item.title && (
                <div className="bg-slate-50/80 pb-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-8 py-2.5 text-sm text-slate-700 hover:text-primary"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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

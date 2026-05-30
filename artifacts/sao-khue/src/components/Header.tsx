import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/BrandLogo";
import { navMenu } from "@/lib/menu";
import { useSiteSettings, telHref } from "@/lib/site-settings";
import { useEffect, useState } from "react";

export function Header() {
  const s = useSiteSettings();
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "border-b border-transparent bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <BrandLogo
              src={s.logoUrl}
              alt={s.companyName}
              className={`object-contain transition-all duration-300 group-hover:scale-[1.02] ${
                isScrolled ? "h-10 md:h-11 max-w-[180px]" : "h-12 md:h-14 max-w-[220px]"
              }`}
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            {navMenu.map((item) => {
              const active =
                location === item.href ||
                (item.category && location.startsWith(item.href + "/"));
              return (
                <div key={item.title} className="group relative">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1 rounded-lg px-3 py-2.5 text-[13px] font-bold tracking-wide transition-all hover:text-primary ${
                      active ? "text-primary" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown
                        size={14}
                        className="transition-transform group-hover:rotate-180"
                      />
                    )}
                    {active && (
                      <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-2xl shadow-slate-900/10">
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
              className="group rounded-full bg-accent px-5 shadow-md shadow-accent/25 hover:bg-accent/90"
            >
              <a href={telHref(s.hotline1)}>
                <PhoneCall size={16} className="group-hover:animate-pulse" />
                <span className="ml-2 text-sm font-bold">{s.hotline1}</span>
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
          {navMenu.map((item) => (
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
              <a href={telHref(s.hotline1)}>
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

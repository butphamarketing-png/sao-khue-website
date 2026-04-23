import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navMenu } from "@/lib/menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg"
              alt="Kiến Trúc Sao Khuê"
              className={`transition-all duration-300 object-contain ${isScrolled ? "h-12" : "h-16"}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center flex-1 justify-center">
            {navMenu.map((item) => {
              const active = location === item.href || (item.category && location.startsWith(item.href + "/"));
              return (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-bold tracking-wide transition-colors hover:text-primary ${
                      active ? "text-primary" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                    {item.children && <ChevronDown size={14} />}
                  </Link>
                  {item.children && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 w-64 z-50">
                      <div className="bg-white shadow-xl border-t-2 border-primary py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center shrink-0">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 flex items-center gap-2 group">
              <a href="tel:0936045268">
                <PhoneCall size={16} className="group-hover:animate-bounce" />
                <span className="font-bold text-sm">0936 045 268</span>
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          {navMenu.map((item) => (
            <div key={item.title} className="border-b border-slate-100">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {item.title}
                </Link>
                {item.children && (
                  <button
                    onClick={() => setOpenMobileSub(openMobileSub === item.title ? null : item.title)}
                    className="px-4 py-3 text-slate-500"
                  >
                    <ChevronDown size={18} className={openMobileSub === item.title ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                )}
              </div>
              {item.children && openMobileSub === item.title && (
                <div className="bg-slate-50">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-8 py-2 text-sm text-slate-700"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-white w-full flex items-center gap-2 justify-center">
              <a href="tel:0936045268">
                <PhoneCall size={18} />
                <span>GỌI TƯ VẤN NGAY</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

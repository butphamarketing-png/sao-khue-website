import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Home } from "lucide-react";
import type { MenuItem } from "@/lib/menu";
import { isBaoGiaArticlePath } from "@/lib/menu";

type Props = {
  menu: MenuItem[];
  className?: string;
};

function isItemActive(location: string, item: MenuItem): boolean {
  if (location === item.href) return true;
  if (item.href === "/bao-gia" && isBaoGiaArticlePath(location)) return true;
  if (item.category && location.startsWith(`/${item.category}`)) return true;
  if (item.category === "tin-tuc" && location.startsWith("/kinh-nghiem")) return true;
  if (item.children?.some((child) => isItemActive(location, child))) return true;
  return false;
}

function isChildActive(location: string, href: string): boolean {
  return location === href || location.startsWith(`${href}/`);
}

export function MainNav({ menu, className = "" }: Props) {
  const [location] = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className={`qh-main-nav hidden lg:block ${className}`} aria-label="Menu chính">
      <div className="qh-main-nav__inner">
        <Link
          href="/"
          className={`qh-main-nav__home ${location === "/" ? "is-active" : ""}`}
          aria-label="Trang chủ"
          title="Trang chủ"
        >
          <Home size={18} strokeWidth={2.5} />
        </Link>

        {menu.map((item, index) => {
          const active = isItemActive(location, item);
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              className="qh-main-nav__item"
              onMouseEnter={() => hasChildren && setOpenIndex(index)}
              onMouseLeave={() => hasChildren && setOpenIndex(null)}
            >
              <Link
                href={item.href}
                className={`qh-main-nav__link ${active ? "is-active" : ""} ${isOpen ? "is-open" : ""}`}
                aria-haspopup={hasChildren ? "true" : undefined}
                aria-expanded={hasChildren ? isOpen : undefined}
              >
                <span>{item.title}</span>
                {hasChildren && <ChevronDown size={14} className="qh-main-nav__chevron" />}
              </Link>

              {hasChildren && (
                <div className={`qh-main-nav__dropdown ${isOpen ? "is-visible" : ""}`}>
                  {item.children!.map((child) => (
                    <Link
                      key={`${item.title}-${child.title}-${child.href}`}
                      href={child.href}
                      className={`qh-main-nav__dropdown-link ${
                        isChildActive(location, child.href) ? "is-active" : ""
                      }`}
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

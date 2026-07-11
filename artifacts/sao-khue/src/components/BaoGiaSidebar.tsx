import { Link } from "wouter";
import type { MenuItem } from "@/lib/menu";

const COST_BUTTONS = [
  { label: "CHI PHÍ XÂY DỰNG", href: "#tinh-chi-phi", tone: "green" },
  { label: "CHI PHÍ THIẾT BỊ", href: "#tinh-chi-phi", tone: "red" },
  { label: "CHI PHÍ QUẢN LÝ DỰ ÁN", href: "#tinh-chi-phi", tone: "yellow" },
  { label: "CHI PHÍ NGUYÊN VẬT LIỆU", href: "#tinh-chi-phi", tone: "pink" },
  { label: "CHI PHÍ TƯ VẤN XÂY DỰNG", href: "#tinh-chi-phi", tone: "teal" },
  { label: "CHI PHÍ DỰ PHÒNG", href: "#tinh-chi-phi", tone: "blue" },
  { label: "CHI PHÍ CÁC HẠNG MỤC CHUNG", href: "#tinh-chi-phi", tone: "orange" },
  { label: "CHI PHÍ NHÂN CÔNG", href: "#tinh-chi-phi", tone: "green" },
  { label: "CHI PHÍ KHÁC...", href: "#tinh-chi-phi", tone: "green" },
] as const;

type Props = {
  menuChildren?: MenuItem[];
};

export function BaoGiaSidebar({ menuChildren }: Props) {
  return (
    <aside className="qh-bao-gia-sidebar">
      {menuChildren && menuChildren.length > 0 && (
        <div className="qh-bao-gia-sidebar__panel mb-5">
          <h2 className="qh-bao-gia-sidebar__title">BÁO GIÁ XÂY DỰNG</h2>
          <ul className="qh-bao-gia-sidebar__links">
            {menuChildren.map((child) => (
              <li key={`${child.title}-${child.href}`}>
                <Link href={child.href} className="qh-bao-gia-sidebar__link">
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="qh-bao-gia-sidebar__panel">
        <h2 className="qh-bao-gia-sidebar__title">TÍNH PHÍ XÂY DỰNG</h2>
        <p className="qh-bao-gia-sidebar__subtitle">TÍNH CHI PHÍ XÂY NHÀ</p>
        <div className="qh-bao-gia-sidebar__buttons">
          {COST_BUTTONS.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className={`qh-bao-gia-sidebar__btn qh-bao-gia-sidebar__btn--${btn.tone}`}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

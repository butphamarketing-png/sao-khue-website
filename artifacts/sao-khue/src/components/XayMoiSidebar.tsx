import { Link } from "wouter";
import type { MenuItem } from "@/lib/menu";

const CONSTRUCTION_BUTTONS = [
  { label: "XÂY NHÀ TRỌN GÓI", href: "/dich-vu/xay-nha-tron-goi", tone: "blue" },
  { label: "NHÀ PHỐ", href: "/dich-vu/xay-nha-tron-goi", tone: "blue" },
  { label: "BIỆT THỰ", href: "/dich-vu/xay-dung-biet-thu", tone: "green" },
  { label: "NHÀ CẤP 4", href: "/dich-vu/xay-nha-moi", tone: "teal" },
  { label: "NHÀ 2 TẦNG", href: "/dich-vu/xay-dung-nha-2-tang", tone: "orange" },
  { label: "NHÀ 3 TẦNG", href: "/dich-vu/xay-dung-nha-3-tang", tone: "yellow" },
  { label: "XÂY TRỌN GÓI BÌNH DƯƠNG", href: "/dich-vu/xay-nha-tron-goi-binh-duong", tone: "pink" },
  { label: "XÂY TRỌN GÓI ĐỒNG NAI", href: "/dich-vu/xay-nha-tron-goi-dong-nai", tone: "orange" },
  { label: "BÁO GIÁ XÂY MỚI", href: "/tin-tuc/bao-gia-xay-nha-moi", tone: "red" },
  { label: "QUY TRÌNH XÂY NHÀ", href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z", tone: "teal" },
  { label: "BẢNG BÁO GIÁ XÂY DỰNG", href: "/bao-gia", tone: "red" },
  { label: "TÍNH CHI PHÍ XÂY NHÀ", href: "#tinh-chi-phi", tone: "yellow" },
  { label: "ĐẶT LỊCH TƯ VẤN", href: "/lien-he", tone: "green" },
] as const;

type Props = {
  menuChildren?: MenuItem[];
};

export function XayMoiSidebar({ menuChildren }: Props) {
  return (
    <aside className="qh-bao-gia-sidebar">
      {menuChildren && menuChildren.length > 0 && (
        <div className="qh-bao-gia-sidebar__panel mb-5">
          <h2 className="qh-bao-gia-sidebar__title">XÂY NHÀ TRỌN GÓI</h2>
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
        <h2 className="qh-bao-gia-sidebar__title">DỊCH VỤ XÂY MỚI</h2>
        <p className="qh-bao-gia-sidebar__subtitle">TƯ VẤN &amp; BÁO GIÁ NHANH</p>
        <div className="qh-bao-gia-sidebar__buttons">
          {CONSTRUCTION_BUTTONS.map((btn) =>
            btn.href.startsWith("#") ? (
              <a
                key={btn.label}
                href={btn.href}
                className={`qh-bao-gia-sidebar__btn qh-bao-gia-sidebar__btn--${btn.tone}`}
              >
                {btn.label}
              </a>
            ) : (
              <Link
                key={btn.label}
                href={btn.href}
                className={`qh-bao-gia-sidebar__btn qh-bao-gia-sidebar__btn--${btn.tone}`}
              >
                {btn.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </aside>
  );
}

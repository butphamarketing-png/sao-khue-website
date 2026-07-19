import { Link } from "wouter";
import type { MenuItem } from "@/lib/menu";

/** Link crawlable tới trang money — ưu tiên SEO hơn hash calculator. */
const MONEY_LINKS = [
  { label: "BÁO GIÁ TRỌN GÓI TP.HCM", href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", tone: "green" },
  { label: "ĐƠN GIÁ XÂY NHÀ", href: "/tin-tuc/don-gia-xay-nha-tphcm", tone: "red" },
  { label: "CHI PHÍ XÂY NHÀ", href: "/tin-tuc/chi-phi-xay-nha-tphcm", tone: "yellow" },
  { label: "XÂY NHÀ GIÁ RẺ", href: "/tin-tuc/xay-nha-gia-re-tphcm", tone: "pink" },
  { label: "BÁO GIÁ PHẦN THÔ", href: "/tin-tuc/bao-gia-xay-nha-phan-tho-tphcm", tone: "teal" },
  { label: "BÁO GIÁ CẢI TẠO", href: "/tin-tuc/bao-gia-cai-tao-nha-tphcm", tone: "blue" },
  { label: "XÂY NHÀ TRỌN GÓI", href: "/dich-vu/xay-nha-tron-goi", tone: "orange" },
  { label: "CẢI TẠO NHÀ CŨ", href: "/tin-tuc/cai-tao-nha-cu-tphcm", tone: "green" },
  { label: "TÍNH CHI PHÍ NHANH", href: "#tinh-chi-phi", tone: "green" },
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
        <h2 className="qh-bao-gia-sidebar__title">TỪ KHÓA NỔI BẬT</h2>
        <p className="qh-bao-gia-sidebar__subtitle">BÁO GIÁ &amp; CHI PHÍ XÂY NHÀ</p>
        <div className="qh-bao-gia-sidebar__buttons">
          {MONEY_LINKS.map((btn) =>
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

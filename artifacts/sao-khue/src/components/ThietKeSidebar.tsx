import { Link } from "wouter";
import type { MenuItem } from "@/lib/menu";

const DESIGN_BUTTONS = [
  { label: "THIẾT KẾ NHÀ PHỐ", href: "/dich-vu/thiet-ke-nha", tone: "blue" },
  { label: "THIẾT KẾ TP.HCM", href: "/tin-tuc/thiet-ke-nha-dep-tphcm", tone: "blue" },
  { label: "THIẾT KẾ ĐẮK LẮK", href: "/tin-tuc/thiet-ke-nha-dep-dak-lak", tone: "red" },
  { label: "THIẾT KẾ PHÚ YÊN", href: "/tin-tuc/thiet-ke-nha-dep-phu-yen", tone: "yellow" },
  { label: "THIẾT KẾ BÌNH DƯƠNG", href: "/tin-tuc/thiet-ke-nha-dep-binh-duong", tone: "pink" },
  { label: "THIẾT KẾ LONG AN", href: "/tin-tuc/thiet-ke-nha-dep-long-an", tone: "teal" },
  { label: "THIẾT KẾ ĐỒNG NAI", href: "/tin-tuc/thiet-ke-nha-dep-dong-nai", tone: "orange" },
  { label: "THIẾT KẾ BIỆT THỰ", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", tone: "green" },
  { label: "BÁO GIÁ THIẾT KẾ", href: "/tin-tuc/thiet-ke-nha-dep-gia-re", tone: "teal" },
  { label: "QUY TRÌNH THIẾT KẾ", href: "/tin-tuc/thue-thiet-ke-nha-truoc-khi-xay", tone: "orange" },
  { label: "XU HƯỚNG NHÀ PHỐ", href: "/tin-tuc/xu-huong-thiet-ke-nha-pho-hien-dai", tone: "pink" },
  { label: "CÔNG TRÌNH TIÊU BIỂU", href: "/cong-trinh", tone: "yellow" },
  { label: "BẢNG BÁO GIÁ XÂY DỰNG", href: "/bao-gia", tone: "red" },
  { label: "ĐẶT LỊCH TƯ VẤN", href: "/lien-he", tone: "green" },
] as const;

type Props = {
  menuChildren?: MenuItem[];
};

export function ThietKeSidebar({ menuChildren }: Props) {
  return (
    <aside className="qh-bao-gia-sidebar">
      {menuChildren && menuChildren.length > 0 && (
        <div className="qh-bao-gia-sidebar__panel mb-5">
          <h2 className="qh-bao-gia-sidebar__title">THIẾT KẾ KIẾN TRÚC</h2>
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
        <h2 className="qh-bao-gia-sidebar__title">DỊCH VỤ THIẾT KẾ</h2>
        <p className="qh-bao-gia-sidebar__subtitle">TƯ VẤN &amp; BÁO GIÁ NHANH</p>
        <div className="qh-bao-gia-sidebar__buttons">
          {DESIGN_BUTTONS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`qh-bao-gia-sidebar__btn qh-bao-gia-sidebar__btn--${btn.tone}`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

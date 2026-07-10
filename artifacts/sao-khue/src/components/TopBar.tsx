import { Mail, MapPin } from "lucide-react";
import { useSiteSettings, useTopBarSlogan } from "@/lib/site-settings";

export function TopBar() {
  const s = useSiteSettings();
  const slogan = useTopBarSlogan();
  const brandShort = "SAO KHUÊ";

  return (
    <div className="qh-topbar hidden text-xs text-white md:grid">
      <div className="qh-topbar__left">
        <span className="font-bold uppercase tracking-wide">
          {brandShort} — {slogan || "Tận tâm — Uy tín — Chất lượng"}
        </span>
      </div>
      <div className="qh-topbar__right">
        {s.address1 && (
          <span className="qh-topbar__contact">
            <MapPin size={13} className="shrink-0" />
            <span className="truncate">Địa chỉ: {s.address1}</span>
          </span>
        )}
        {s.email && (
          <a href={`mailto:${s.email}`} className="qh-topbar__contact qh-topbar__contact--link">
            <Mail size={13} className="shrink-0" />
            <span className="truncate">Email: {s.email}</span>
          </a>
        )}
      </div>
    </div>
  );
}

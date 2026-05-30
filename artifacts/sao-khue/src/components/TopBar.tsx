import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useSiteSettings, telHref, useTopBarSlogan } from "@/lib/site-settings";

export function TopBar() {
  const s = useSiteSettings();
  const slogan = useTopBarSlogan();
  const phones = [s.hotline1, s.hotline2].filter(Boolean);

  return (
    <div className="hidden border-b border-white/10 bg-gradient-to-r from-slate-900 via-primary to-[#0c4a8a] py-2.5 text-sm text-white md:block">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4">
        <div className="flex min-w-0 flex-1 items-center gap-5 overflow-hidden">
          {slogan && (
            <span className="hidden shrink-0 rounded-full bg-accent/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent lg:inline">
              {slogan}
            </span>
          )}
          {phones.map((phone) => (
            <a
              key={phone}
              href={telHref(phone)}
              className="flex shrink-0 items-center gap-2 transition hover:text-accent"
            >
              <Phone size={14} className="text-accent" />
              <span className="font-semibold">{phone}</span>
            </a>
          ))}
          {s.email && (
            <a
              href={`mailto:${s.email}`}
              className="hidden items-center gap-2 transition hover:text-accent lg:flex"
            >
              <Mail size={14} className="text-accent" />
              <span className="truncate">{s.email}</span>
            </a>
          )}
          {s.address1 && (
            <div className="hidden min-w-0 items-center gap-2 xl:flex">
              <MapPin size={14} className="shrink-0 text-accent" />
              <span className="truncate text-white/80">{s.address1}</span>
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-4">
          {s.workingHours && (
            <div className="hidden items-center gap-2 lg:flex">
              <Clock size={14} className="text-accent" />
              <span className="text-white/90">{s.workingHours}</span>
            </div>
          )}
          <div className="flex items-center gap-1 border-l border-white/15 pl-4">
            {s.facebookUrl && (
              <a
                href={s.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-accent"
              >
                <Facebook size={15} />
              </a>
            )}
            {s.youtubeUrl && (
              <a
                href={s.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-accent"
              >
                <Youtube size={15} />
              </a>
            )}
            {s.instagramUrl && (
              <a
                href={s.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 transition hover:bg-white/10 hover:text-accent"
              >
                <Instagram size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

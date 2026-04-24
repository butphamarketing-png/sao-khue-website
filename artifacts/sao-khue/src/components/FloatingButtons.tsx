import { PhoneCall, MessageCircleMore } from "lucide-react";
import { SiMessenger, SiZalo } from "react-icons/si";
import { useSiteSettings, telHref } from "@/lib/site-settings";

export function FloatingButtons() {
  const s = useSiteSettings();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : "#";

  return (
    <>
      <div className="fixed bottom-24 right-4 z-50 hidden flex-col gap-4 md:flex">
        {s.zaloPhone && (
          <QuickFab href={zaloHref} label="Chat Zalo" className="bg-blue-500">
            <SiZalo size={24} />
          </QuickFab>
        )}

        {s.messengerUrl && (
          <QuickFab href={s.messengerUrl} label="Chat Messenger" className="bg-blue-600">
            <SiMessenger size={24} />
          </QuickFab>
        )}

        {s.hotline1 && (
          <QuickFab href={telHref(s.hotline1)} label={s.hotline1} className="bg-accent shadow-[0_0_15px_rgba(230,57,70,0.5)]">
            <div className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping" />
            <PhoneCall size={28} className="relative" />
          </QuickFab>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-3 gap-3">
          {s.hotline1 && (
            <MobileAction href={telHref(s.hotline1)} className="bg-accent text-white">
              <PhoneCall size={18} />
              Goi ngay
            </MobileAction>
          )}
          {s.zaloPhone && (
            <MobileAction href={zaloHref} className="bg-blue-500 text-white">
              <SiZalo size={18} />
              Zalo
            </MobileAction>
          )}
          {s.messengerUrl ? (
            <MobileAction href={s.messengerUrl} className="bg-[#17579d] text-white">
              <SiMessenger size={18} />
              Messenger
            </MobileAction>
          ) : (
            <a
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#17579d] px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <MessageCircleMore size={18} />
              Lien he
            </a>
          )}
        </div>
      </div>
    </>
  );
}

function QuickFab({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110 ${className}`}
      aria-label={label}
    >
      {children}
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

function MobileAction({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-sm ${className}`}
    >
      {children}
    </a>
  );
}

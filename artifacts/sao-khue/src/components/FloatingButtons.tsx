import { PhoneCall } from "lucide-react";
import { SiZalo, SiMessenger } from "react-icons/si";
import { useSiteSettings, telHref } from "@/lib/site-settings";

export function FloatingButtons() {
  const s = useSiteSettings();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : "#";
  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-4">
      {s.zaloPhone && (
        <a
          href={zaloHref}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
          aria-label="Zalo"
        >
          <SiZalo size={24} />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat Zalo
          </span>
        </a>
      )}

      {s.messengerUrl && (
        <a
          href={s.messengerUrl}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
          aria-label="Messenger"
        >
          <SiMessenger size={24} />
          <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat Messenger
          </span>
        </a>
      )}

      {s.hotline1 && (
        <a
          href={telHref(s.hotline1)}
          className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(230,57,70,0.5)] hover:scale-110 transition-transform relative group animate-bounce"
          aria-label="Hotline"
        >
          <PhoneCall size={28} />
          <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
          <span className="absolute right-full mr-4 bg-accent text-white text-sm font-bold px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {s.hotline1}
          </span>
        </a>
      )}
    </div>
  );
}

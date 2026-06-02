import { useState, type MouseEvent, type ReactNode } from "react";
import { Facebook, MapPin, PhoneCall } from "lucide-react";
import { SiMessenger, SiZalo } from "react-icons/si";
import { SocialLinkPickerSheet } from "@/components/SocialLinkPickerSheet";
import {
  facebookOptionsFromSettings,
  facebookUrlsFromSettings,
  resolveGoogleMapsOpenUrl,
  messengerOptionsFromSettings,
  messengerUrlsFromSettings,
  openExternalUrl,
  type SocialLinkOption,
} from "@/lib/social-links";
import { useSiteSettings, telHref, usePrimaryPhone } from "@/lib/site-settings";

type PickerState = {
  title: string;
  description: string;
  options: SocialLinkOption[];
};

export function FloatingButtons() {
  const s = useSiteSettings();
  const phone = usePrimaryPhone();
  const zaloHref = s.zaloPhone ? `https://zalo.me/${s.zaloPhone.replace(/\s+/g, "")}` : null;
  const mapsHref = resolveGoogleMapsOpenUrl(s);
  const facebookOptions = facebookOptionsFromSettings(s);
  const messengerOptions = messengerOptionsFromSettings(s);
  const facebookUrls = facebookUrlsFromSettings(s);
  const messengerUrls = messengerUrlsFromSettings(s);

  const [picker, setPicker] = useState<PickerState | null>(null);

  function openSocialChoice(
    title: string,
    description: string,
    options: SocialLinkOption[],
  ) {
    if (options.length === 0) return;
    if (options.length === 1) {
      openExternalUrl(options[0].url);
      return;
    }
    setPicker({ title, description, options });
  }

  return (
    <>
      <div className="fixed bottom-24 right-4 z-50 hidden flex-col gap-4 md:flex">
        {s.zaloPhone && zaloHref && (
          <QuickFab href={zaloHref} label="Chat Zalo" className="bg-blue-500">
            <SiZalo size={24} />
          </QuickFab>
        )}

        {messengerUrls.length > 0 && (
          <QuickFab
            href="#"
            label="Messenger"
            className="bg-[#0084ff]"
            onClick={(e) => {
              e.preventDefault();
              openSocialChoice(
                "Chọn Messenger",
                "Bạn muốn nhắn tin qua tài khoản nào?",
                messengerOptions,
              );
            }}
          >
            <SiMessenger size={24} />
          </QuickFab>
        )}

        {facebookUrls.length > 0 && (
          <QuickFab
            href="#"
            label="Facebook"
            className="bg-[#1877f2]"
            onClick={(e) => {
              e.preventDefault();
              openSocialChoice(
                "Chọn Facebook",
                "Bạn muốn xem fanpage nào?",
                facebookOptions,
              );
            }}
          >
            <Facebook size={24} />
          </QuickFab>
        )}

        {phone && (
          <QuickFab href={telHref(phone)} label={phone} className="bg-accent shadow-[0_0_15px_rgba(230,57,70,0.5)]">
            <div className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping" />
            <PhoneCall size={28} className="relative" />
          </QuickFab>
        )}
      </div>

      {phone && (
        <a
          href={telHref(phone)}
          className="mobile-call-banner mobile-call-shake fixed inset-x-3 bottom-[5.25rem] z-50 flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-accent to-[#ff4757] px-4 py-3.5 text-white shadow-[0_8px_28px_rgba(230,57,70,0.45)] ring-2 ring-white/90 md:hidden"
          aria-label={`Gọi ngay ${phone}`}
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20">
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
            <PhoneCall size={22} className="relative" strokeWidth={2.5} />
          </span>
          <span className="flex min-w-0 flex-col items-start leading-tight">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
              Hotline tư vấn
            </span>
            <span className="text-lg font-extrabold tracking-wide sm:text-xl">{phone}</span>
          </span>
          <span className="ml-auto shrink-0 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-accent">
            Gọi ngay
          </span>
        </a>
      )}

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {mapsHref ? (
            <MobileBarButton
              label="Maps"
              className="bg-emerald-600 text-white"
              onClick={() => openExternalUrl(mapsHref)}
            >
              <MapPin size={18} />
            </MobileBarButton>
          ) : (
            <MobileBarButton
              label="Maps"
              className="bg-slate-300 text-white"
              disabled
            >
              <MapPin size={18} />
            </MobileBarButton>
          )}

          <MobileBarButton
            label="Facebook"
            className="bg-[#1877f2] text-white"
            disabled={facebookOptions.length === 0}
            onClick={() =>
              openSocialChoice(
                "Chọn Facebook",
                "Bạn muốn xem fanpage nào?",
                facebookOptions,
              )
            }
          >
            <Facebook size={18} />
          </MobileBarButton>

          <MobileBarButton
            label="Messenger"
            className="bg-[#0084ff] text-white"
            disabled={messengerOptions.length === 0}
            onClick={() =>
              openSocialChoice(
                "Chọn Messenger",
                "Bạn muốn nhắn tin qua tài khoản nào?",
                messengerOptions,
              )
            }
          >
            <SiMessenger size={18} />
          </MobileBarButton>

          {zaloHref ? (
            <MobileBarButton
              label="Zalo"
              className="bg-blue-500 text-white"
              onClick={() => openExternalUrl(zaloHref)}
            >
              <SiZalo size={18} />
            </MobileBarButton>
          ) : (
            <MobileBarButton label="Zalo" className="bg-slate-300 text-white" disabled>
              <SiZalo size={18} />
            </MobileBarButton>
          )}
        </div>
      </div>

      <SocialLinkPickerSheet
        open={picker !== null}
        onOpenChange={(open) => {
          if (!open) setPicker(null);
        }}
        title={picker?.title ?? ""}
        description={picker?.description}
        options={picker?.options ?? []}
      />
    </>
  );
}

function QuickFab({
  href,
  label,
  className,
  children,
  onClick,
}: {
  href: string;
  label: string;
  className: string;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={label}
    >
      {children}
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-800 opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </a>
  );
}

function MobileBarButton({
  label,
  className,
  children,
  disabled,
  onClick,
}: {
  label: string;
  className: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-3 text-[11px] font-semibold shadow-sm disabled:opacity-45 sm:text-xs ${className}`}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

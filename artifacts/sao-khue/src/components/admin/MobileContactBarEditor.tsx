import type { ReactNode } from "react";
import { Facebook, MapPin } from "lucide-react";
import { SiMessenger, SiZalo } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/admin/admin-ui";
import {
  facebookOptionsFromSettings,
  resolveGoogleMapsOpenUrl,
  messengerOptionsFromSettings,
} from "@/lib/social-links";

export type MobileContactBarSettings = {
  googleMapsUrl?: string;
  address1: string;
  zaloPhone: string;
  facebookUrl: string;
  facebookUrl2?: string;
  facebookLabel1?: string;
  facebookLabel2?: string;
  messengerUrl: string;
  messengerUrl2?: string;
  messengerLabel1?: string;
  messengerLabel2?: string;
};

type Props = {
  settings: MobileContactBarSettings;
  onChange: <K extends keyof MobileContactBarSettings>(
    key: K,
    value: MobileContactBarSettings[K],
  ) => void;
  onOpenGoogleMaps?: () => void;
};

function ChannelCard({
  title,
  badgeClass,
  icon,
  children,
}: {
  title: string;
  badgeClass: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${badgeClass}`}
        >
          {icon}
        </span>
        <h4 className="text-base font-bold text-slate-900">{title}</h4>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function MobileContactBarPreview({ settings }: { settings: MobileContactBarSettings }) {
  const mapsOk = Boolean(resolveGoogleMapsOpenUrl(settings));
  const fbCount = facebookOptionsFromSettings(settings).length;
  const messCount = messengerOptionsFromSettings(settings).length;
  const zaloOk = Boolean(settings.zaloPhone?.trim());

  const items = [
    { label: "Maps", ok: mapsOk, className: "bg-emerald-600" },
    { label: "Facebook", ok: fbCount > 0, className: "bg-[#1877f2]", sub: fbCount > 1 ? `${fbCount} lựa chọn` : undefined },
    { label: "Messenger", ok: messCount > 0, className: "bg-[#0084ff]", sub: messCount > 1 ? `${messCount} lựa chọn` : undefined },
    { label: "Zalo", ok: zaloOk, className: "bg-blue-500" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Xem trước thanh mobile
      </p>
      <div className="grid grid-cols-4 gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-inner">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-[10px] font-semibold text-white sm:text-[11px] ${
              item.ok ? item.className : "bg-slate-300"
            }`}
          >
            <span>{item.label}</span>
            {item.sub && <span className="text-[9px] font-normal opacity-90">{item.sub}</span>}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Bấm Facebook / Messenger trên điện thoại → hiện menu để khách chọn tên bạn đặt bên dưới.
      </p>
    </div>
  );
}

export function MobileContactBarEditor({ settings, onChange, onOpenGoogleMaps }: Props) {
  const facebookOptions = facebookOptionsFromSettings(settings);
  const messengerOptions = messengerOptionsFromSettings(settings);

  return (
    <div className="space-y-5">
      <MobileContactBarPreview settings={settings} />

      <ChannelCard title="Maps" badgeClass="bg-emerald-600" icon={<MapPin size={20} />}>
        <Field label="Link Google Maps (nút Maps)">
          <Input
            value={settings.googleMapsUrl ?? ""}
            onChange={(e) => onChange("googleMapsUrl", e.target.value)}
            placeholder="https://maps.app.goo.gl/..."
          />
        </Field>
        <Field label="Địa chỉ dự phòng (nếu chưa có link Maps)">
          <Input
            value={settings.address1}
            onChange={(e) => onChange("address1", e.target.value)}
            placeholder="245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM"
          />
        </Field>
        {onOpenGoogleMaps && (
          <button
            type="button"
            className="text-sm font-semibold text-[#17579d] underline"
            onClick={onOpenGoogleMaps}
          >
            Cấu hình iframe bản đồ footer → Google &amp; Maps
          </button>
        )}
      </ChannelCard>

      <ChannelCard title="Zalo" badgeClass="bg-blue-500" icon={<SiZalo size={20} />}>
        <Field label="Số Zalo (chỉ số, không khoảng trắng)">
          <Input
            value={settings.zaloPhone}
            onChange={(e) => onChange("zaloPhone", e.target.value)}
            placeholder="0909075668"
          />
        </Field>
      </ChannelCard>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ChannelCard title="Facebook" badgeClass="bg-[#1877f2]" icon={<Facebook size={20} />}>
          <Field label="Link fanpage 1">
            <Input
              value={settings.facebookUrl}
              onChange={(e) => onChange("facebookUrl", e.target.value)}
              placeholder="https://facebook.com/kientrucsaokhue"
            />
          </Field>
          <Field label="Tên hiện trong menu chọn">
            <Input
              value={settings.facebookLabel1 ?? ""}
              onChange={(e) => onChange("facebookLabel1", e.target.value)}
              placeholder={
                facebookOptions[0]?.label ?? "VD: Kiến Trúc Sao Khuê"
              }
            />
          </Field>
          <Field label="Link fanpage 2 (tùy chọn)">
            <Input
              value={settings.facebookUrl2 ?? ""}
              onChange={(e) => onChange("facebookUrl2", e.target.value)}
              placeholder="https://facebook.com/..."
            />
          </Field>
          <Field label="Tên hiện trong menu chọn (fanpage 2)">
            <Input
              value={settings.facebookLabel2 ?? ""}
              onChange={(e) => onChange("facebookLabel2", e.target.value)}
              placeholder={
                facebookOptions[1]?.label ?? "VD: Sao Khuê Xây Dựng"
              }
            />
          </Field>
        </ChannelCard>

        <ChannelCard title="Messenger" badgeClass="bg-[#0084ff]" icon={<SiMessenger size={20} />}>
          <Field label="Link Messenger 1">
            <Input
              value={settings.messengerUrl}
              onChange={(e) => onChange("messengerUrl", e.target.value)}
              placeholder="https://m.me/..."
            />
          </Field>
          <Field label="Tên hiện trong menu chọn">
            <Input
              value={settings.messengerLabel1 ?? ""}
              onChange={(e) => onChange("messengerLabel1", e.target.value)}
              placeholder={
                messengerOptions[0]?.label ?? "VD: Tư vấn thiết kế"
              }
            />
          </Field>
          <Field label="Link Messenger 2 (tùy chọn)">
            <Input
              value={settings.messengerUrl2 ?? ""}
              onChange={(e) => onChange("messengerUrl2", e.target.value)}
              placeholder="https://m.me/..."
            />
          </Field>
          <Field label="Tên hiện trong menu chọn (tài khoản 2)">
            <Input
              value={settings.messengerLabel2 ?? ""}
              onChange={(e) => onChange("messengerLabel2", e.target.value)}
              placeholder={
                messengerOptions[1]?.label ?? "VD: Báo giá xây dựng"
              }
            />
          </Field>
        </ChannelCard>
      </div>
    </div>
  );
}

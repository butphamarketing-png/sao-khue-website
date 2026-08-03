import { useState } from "react";
import { ExternalLink, Monitor } from "lucide-react";
import { PreviewShell } from "./admin-ui";

const PREVIEW_PATHS = [
  { label: "Trang chủ", path: "/" },
  { label: "Báo giá", path: "/bao-gia" },
  { label: "Xây nhà (Ads)", path: "/xay-nha" },
  { label: "Cải tạo (Ads)", path: "/cai-tao-nha" },
  { label: "Liên hệ", path: "/lien-he" },
  { label: "Dịch vụ", path: "/dich-vu" },
  { label: "Công trình", path: "/cong-trinh" },
  { label: "Giới thiệu", path: "/gioi-thieu" },
  { label: "Kinh nghiệm", path: "/kinh-nghiem" },
] as const;

type Props = {
  defaultPath?: string;
  compact?: boolean;
};

export function AdminLivePreview({ defaultPath = "/", compact = false }: Props) {
  const [path, setPath] = useState(defaultPath);
  const height = compact ? "min-h-[360px]" : "min-h-[520px]";

  return (
    <PreviewShell label="Live preview" title="Xem trước website">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <select
            className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          >
            {PREVIEW_PATHS.map((item) => (
              <option key={item.path} value={item.path}>
                {item.label}
              </option>
            ))}
          </select>
          <a
            href={path}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
          >
            <ExternalLink size={15} />
            Mở tab
          </a>
        </div>

        <div
          className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${height}`}
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2.5 text-xs text-slate-500">
            <Monitor size={14} />
            <span className="font-medium">{path}</span>
          </div>
          <iframe
            title="Xem trước website"
            src={path}
            className="h-[calc(100%-40px)] w-full bg-white"
            loading="lazy"
          />
        </div>
      </div>
    </PreviewShell>
  );
}

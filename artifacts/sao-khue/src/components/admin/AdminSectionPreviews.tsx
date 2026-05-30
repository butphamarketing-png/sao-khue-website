import { ChevronDown, PlayCircle, Quote, Star } from "lucide-react";
import {
  CATEGORY_PAGE_KEYS,
  type CategoryPagesMap,
  type ContactSectionContent,
  type CtaBannerContent,
  type FaqItem,
  type ProcessStep,
  type QuoteServiceItem,
  type StatItem,
  type TestimonialItem,
} from "@/lib/home-content";
import { resolveLucideIcon } from "@/lib/lucide-icons";
import { PreviewShell } from "./admin-ui";

function toEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("youtube.com/embed/") || url.includes("player.vimeo.com")) return url;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be")) {
      const id =
        parsed.searchParams.get("v") ||
        parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }
  } catch {
    return url;
  }
  return url;
}

export function StatsPreviewCard({ items }: { items: StatItem[] }) {
  return (
    <PreviewShell label="Trang chủ" title="Số liệu nổi bật">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item, index) => {
          const Icon = resolveLucideIcon(item.icon);
          return (
            <div
              key={`stat-preview-${index}`}
              className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center"
            >
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
              <div className="text-lg font-bold text-primary">{item.value || "—"}</div>
              <div className="text-xs text-slate-600">{item.label || "Nhãn"}</div>
            </div>
          );
        })}
      </div>
    </PreviewShell>
  );
}

export function TestimonialsPreviewCard({ items }: { items: TestimonialItem[] }) {
  return (
    <PreviewShell label="Trang chủ" title="Đánh giá khách hàng">
      <div className="space-y-3">
        {items.slice(0, 3).map((item, index) => (
          <div key={`review-preview-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <Quote size={16} className="mb-2 text-primary/40" />
            <p className="text-sm leading-relaxed text-slate-700">
              {item.text || "Nội dung đánh giá..."}
            </p>
            <div className="mt-3 text-sm font-bold text-slate-900">{item.name || "Khách hàng"}</div>
            <div className="text-xs text-slate-500">{item.project || "Loại công trình"}</div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

export function FaqPreviewCard({ items }: { items: FaqItem[] }) {
  return (
    <PreviewShell label="Trang chủ" title="Câu hỏi thường gặp">
      <div className="space-y-2">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={`faq-preview-${index}`}
            className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
          >
            <div>
              <div className="text-sm font-semibold text-slate-900">{item.q || "Câu hỏi?"}</div>
              <div className="mt-1 line-clamp-2 text-xs text-slate-500">{item.a || "Câu trả lời..."}</div>
            </div>
            <ChevronDown size={16} className="mt-1 shrink-0 text-slate-400" />
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

export function ProcessPreviewCard({ items }: { items: ProcessStep[] }) {
  return (
    <PreviewShell label="Trang chủ" title="Quy trình làm việc">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((step) => {
          const Icon = resolveLucideIcon(step.icon);
          return (
            <div
              key={step.id}
              className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {step.id}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-primary" />
                  <div className="text-sm font-bold text-slate-900">{step.title || "Bước"}</div>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{step.desc || "Mô tả..."}</p>
              </div>
            </div>
          );
        })}
      </div>
    </PreviewShell>
  );
}

export function QuoteServicesPreviewCard({ items }: { items: QuoteServiceItem[] }) {
  return (
    <PreviewShell label="Trang chủ" title="Gói dịch vụ báo giá">
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center rounded-full border-4 border-primary/20 bg-white p-4 text-center"
          >
            <div className="text-[10px] font-bold text-slate-400">{item.id}</div>
            <div className="mt-2 whitespace-pre-line text-xs font-bold uppercase text-primary">
              {item.title || "Dịch vụ"}
            </div>
            <div className="mt-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold text-white">
              {item.buttonLabel || "Xem chi tiết"}
            </div>
          </div>
        ))}
      </div>
    </PreviewShell>
  );
}

export function ContactPreviewCard({
  content,
  hotline,
  address,
}: {
  content: ContactSectionContent;
  hotline: string;
  address: string;
}) {
  return (
    <PreviewShell label="Trang chủ" title="Form liên hệ">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-slate-900 p-4 text-white">
        {content.backgroundImageUrl && (
          <div className="mb-3 overflow-hidden rounded-xl">
            <img
              src={content.backgroundImageUrl}
              alt=""
              className="h-24 w-full object-cover opacity-60"
            />
          </div>
        )}
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{content.eyebrow}</p>
        <h3 className="mt-1 text-lg font-bold uppercase">
          {content.titleLine1}{" "}
          <span className="text-accent">{content.titleAccent}</span>
        </h3>
        <p className="mt-2 text-xs text-blue-100">{content.description}</p>
        <div className="mt-4 space-y-2 text-xs">
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <span className="text-blue-200">{content.hotlineLabel}: </span>
            <span className="font-bold">{hotline}</span>
          </div>
          <div className="rounded-lg bg-white/10 px-3 py-2">
            <span className="text-blue-200">{content.addressLabel}: </span>
            <span className="font-semibold">{address}</span>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-white/95 p-3 text-slate-800">
          <div className="text-sm font-bold text-primary">{content.formTitle}</div>
          <div className="mt-2 h-8 rounded-lg bg-slate-100" />
          <div className="mt-2 rounded-full bg-accent py-2 text-center text-[10px] font-bold text-white">
            {content.submitLabel}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

export function CtaBannerPreviewCard({ cta }: { cta: CtaBannerContent }) {
  return (
    <PreviewShell label="Trang chủ" title="Banner CTA giữa trang">
      <div className="rounded-2xl bg-gradient-to-r from-primary to-[#0a3d6b] p-6 text-center text-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-accent">{cta.eyebrow}</p>
        <h3 className="mt-2 text-xl font-bold">{cta.title || "Tiêu đề CTA"}</h3>
        <p className="mt-2 text-sm text-blue-100">{cta.subtitle || "Mô tả ngắn"}</p>
        <div className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-xs font-bold">
          {cta.secondaryLabel || "Nút phụ"}
        </div>
      </div>
    </PreviewShell>
  );
}

export function VideoPreviewCard({
  url,
  label,
  sectionTitle,
}: {
  url: string;
  label: string;
  sectionTitle?: string;
}) {
  const embed = toEmbedUrl(url);

  return (
    <PreviewShell label="Trang chủ" title={sectionTitle || "Video giới thiệu"}>
      {embed ? (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-black">
          <iframe
            title="Video preview"
            src={embed}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
          <PlayCircle size={40} className="mb-2 text-primary/40" />
          <p className="text-sm">Chưa có link video</p>
        </div>
      )}
      {label && (
        <p className="mt-3 text-center text-sm font-semibold text-primary">{label}</p>
      )}
    </PreviewShell>
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  "gioi-thieu": "Giới thiệu",
  "dich-vu": "Dịch vụ",
  "cong-trinh": "Công trình",
  "kinh-nghiem": "Kinh nghiệm",
};

export function CategoryPagesPreviewCard({ pages }: { pages: CategoryPagesMap }) {
  return (
    <PreviewShell label="Trang danh mục" title="Intro khi vào từng menu">
      <div className="space-y-4">
        {CATEGORY_PAGE_KEYS.map((key) => {
          const page = pages[key];
          return (
            <div
              key={key}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                /{key}
              </div>
              <h4 className="mt-2 text-lg font-bold text-slate-900">
                {page?.title || CATEGORY_LABELS[key]}
              </h4>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
                {page?.description || "Mô tả trang danh mục..."}
              </p>
              {(page?.highlights ?? []).filter(Boolean).length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {(page?.highlights ?? []).filter(Boolean).slice(0, 3).map((h, i) => (
                    <li key={`${key}-h-${i}`} className="flex gap-2 text-xs text-slate-600">
                      <span className="text-accent">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </PreviewShell>
  );
}

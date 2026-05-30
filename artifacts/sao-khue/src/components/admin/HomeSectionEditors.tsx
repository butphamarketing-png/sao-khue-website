import { type Dispatch, type SetStateAction } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploadField } from "@/components/ImageUploadField";
import {
  CATEGORY_PAGE_KEYS,
  type CategoryPageContent,
  type CategoryPagesMap,
  type ContactSectionContent,
  type CtaBannerContent,
  type FaqItem,
  type HomeSectionMeta,
  type ProcessStep,
  type QuoteServiceItem,
  type StatItem,
  type TestimonialItem,
} from "@/lib/home-content";
import { IconPickerField } from "./IconPickerField";
import { AddRowButton, Field, FormSection, RepeatCard } from "./admin-ui";

type SetState<T> = Dispatch<SetStateAction<T>>;

export function StatsEditor({
  items,
  setItems,
}: {
  items: StatItem[];
  setItems: SetState<StatItem[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <RepeatCard
          key={`stat-${index}`}
          title={`Số liệu ${index + 1}`}
          onRemove={
            items.length > 1
              ? () => setItems((prev) => prev.filter((_, i) => i !== index))
              : undefined
          }
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <IconPickerField
              label="Icon (lucide)"
              listId={`stat-icons-${index}`}
              value={item.icon}
              onChange={(icon) =>
                setItems((prev) =>
                  prev.map((row, i) => (i === index ? { ...row, icon } : row)),
                )
              }
            />
            <Field label="Giá trị">
              <Input
                value={item.value}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, value: e.target.value } : row)),
                  )
                }
                placeholder="500+"
              />
            </Field>
            <Field label="Nhãn">
              <Input
                value={item.label}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, label: e.target.value } : row)),
                  )
                }
              />
            </Field>
          </div>
        </RepeatCard>
      ))}
      <AddRowButton
        label="Thêm số liệu"
        onClick={() =>
          setItems((prev) => [...prev, { icon: "building-2", value: "", label: "" }])
        }
      />
    </div>
  );
}

export function TestimonialsEditor({
  items,
  setItems,
}: {
  items: TestimonialItem[];
  setItems: SetState<TestimonialItem[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <RepeatCard
          key={`review-${index}`}
          title={`Đánh giá ${index + 1}`}
          onRemove={() => setItems((prev) => prev.filter((_, i) => i !== index))}
        >
          <div className="grid grid-cols-1 gap-4">
            <Field label="Tên khách hàng">
              <Input
                value={item.name}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, name: e.target.value } : row)),
                  )
                }
              />
            </Field>
            <Field label="Loại công trình">
              <Input
                value={item.project}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) =>
                      i === index ? { ...row, project: e.target.value } : row,
                    ),
                  )
                }
              />
            </Field>
            <Field label="Nội dung">
              <Textarea
                rows={4}
                value={item.text}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, text: e.target.value } : row)),
                  )
                }
              />
            </Field>
          </div>
        </RepeatCard>
      ))}
      <AddRowButton
        label="Thêm đánh giá"
        onClick={() => setItems((prev) => [...prev, { name: "", project: "", text: "" }])}
      />
    </div>
  );
}

export function FaqEditor({
  items,
  setItems,
}: {
  items: FaqItem[];
  setItems: SetState<FaqItem[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <RepeatCard
          key={`faq-${index}`}
          title={`Câu hỏi ${index + 1}`}
          onRemove={() => setItems((prev) => prev.filter((_, i) => i !== index))}
        >
          <div className="grid grid-cols-1 gap-4">
            <Field label="Câu hỏi">
              <Input
                value={item.q}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, q: e.target.value } : row)),
                  )
                }
              />
            </Field>
            <Field label="Trả lời">
              <Textarea
                rows={4}
                value={item.a}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, a: e.target.value } : row)),
                  )
                }
              />
            </Field>
          </div>
        </RepeatCard>
      ))}
      <AddRowButton
        label="Thêm câu hỏi"
        onClick={() => setItems((prev) => [...prev, { q: "", a: "" }])}
      />
    </div>
  );
}

export function ProcessEditor({
  items,
  setItems,
}: {
  items: ProcessStep[];
  setItems: SetState<ProcessStep[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <RepeatCard
          key={`step-${item.id}-${index}`}
          title={`Bước ${item.id}`}
          onRemove={
            items.length > 1
              ? () => setItems((prev) => prev.filter((_, i) => i !== index))
              : undefined
          }
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <IconPickerField
              label="Icon"
              listId={`process-icons-${index}`}
              value={item.icon}
              onChange={(icon) =>
                setItems((prev) =>
                  prev.map((row, i) => (i === index ? { ...row, icon } : row)),
                )
              }
            />
            <Field label="Tiêu đề">
              <Input
                value={item.title}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, title: e.target.value } : row)),
                  )
                }
              />
            </Field>
            <div className="md:col-span-2">
              <Field label="Mô tả">
                <Textarea
                  rows={3}
                  value={item.desc}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((row, i) => (i === index ? { ...row, desc: e.target.value } : row)),
                    )
                  }
                />
              </Field>
            </div>
          </div>
        </RepeatCard>
      ))}
      <AddRowButton
        label="Thêm bước"
        onClick={() =>
          setItems((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              icon: "shield-check",
              title: "",
              desc: "",
            },
          ])
        }
      />
    </div>
  );
}

export function CategoryPagesEditor({
  pages,
  setPages,
}: {
  pages: CategoryPagesMap;
  setPages: SetState<CategoryPagesMap>;
}) {
  const updatePage = (key: string, patch: Partial<CategoryPageContent>) => {
    setPages((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...patch },
    }));
  };

  const updateHighlight = (key: string, index: number, value: string) => {
    setPages((prev) => {
      const page = prev[key];
      const highlights = [...(page?.highlights ?? [])];
      highlights[index] = value;
      return { ...prev, [key]: { ...page, highlights } };
    });
  };

  const labels: Record<string, string> = {
    "gioi-thieu": "Giới thiệu",
    "dich-vu": "Dịch vụ",
    "cong-trinh": "Công trình",
    "kinh-nghiem": "Kinh nghiệm",
  };

  return (
    <div className="space-y-6">
      {CATEGORY_PAGE_KEYS.map((key) => {
        const page = pages[key] ?? { title: "", description: "", highlights: [] };
        return (
          <FormSection key={key} title={`Trang ${labels[key] ?? key}`}>
            <div className="grid grid-cols-1 gap-4">
              <Field label="Tiêu đề">
                <Input
                  value={page.title}
                  onChange={(e) => updatePage(key, { title: e.target.value })}
                />
              </Field>
              <Field label="Mô tả">
                <Textarea
                  rows={4}
                  value={page.description}
                  onChange={(e) => updatePage(key, { description: e.target.value })}
                />
              </Field>
              <div>
                <div className="mb-2 text-sm font-semibold text-slate-700">Điểm nổi bật</div>
                <div className="space-y-2">
                  {(page.highlights ?? []).map((h, index) => (
                    <div key={`${key}-h-${index}`} className="flex gap-2">
                      <Input
                        value={h}
                        onChange={(e) => updateHighlight(key, index, e.target.value)}
                      />
                      <button
                        type="button"
                        className="shrink-0 rounded-lg border border-red-200 px-3 text-sm text-red-600 hover:bg-red-50"
                        onClick={() =>
                          setPages((prev) => ({
                            ...prev,
                            [key]: {
                              ...prev[key],
                              highlights: (prev[key]?.highlights ?? []).filter(
                                (_, i) => i !== index,
                              ),
                            },
                          }))
                        }
                      >
                        Xóa
                      </button>
                    </div>
                  ))}
                  <AddRowButton
                    label="Thêm điểm nổi bật"
                    onClick={() =>
                      setPages((prev) => ({
                        ...prev,
                        [key]: {
                          ...prev[key],
                          highlights: [...(prev[key]?.highlights ?? []), ""],
                        },
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </FormSection>
        );
      })}
    </div>
  );
}

export function QuoteServicesEditor({
  items,
  setItems,
}: {
  items: QuoteServiceItem[];
  setItems: SetState<QuoteServiceItem[]>;
}) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <RepeatCard
          key={`quote-${index}`}
          title={`Gói ${item.id || index + 1}`}
          onRemove={() => setItems((prev) => prev.filter((_, i) => i !== index))}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Mã (01, 02...)">
              <Input
                value={item.id}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, id: e.target.value } : row)),
                  )
                }
              />
            </Field>
            <Field label="Link">
              <Input
                value={item.link}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, link: e.target.value } : row)),
                  )
                }
                placeholder="/bao-gia"
              />
            </Field>
            <Field label="Tiêu đề (\\n để xuống dòng)">
              <Textarea
                rows={3}
                value={item.title}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) => (i === index ? { ...row, title: e.target.value } : row)),
                  )
                }
              />
            </Field>
            <Field label="Nút">
              <Input
                value={item.buttonLabel}
                onChange={(e) =>
                  setItems((prev) =>
                    prev.map((row, i) =>
                      i === index ? { ...row, buttonLabel: e.target.value } : row,
                    ),
                  )
                }
              />
            </Field>
          </div>
        </RepeatCard>
      ))}
      <AddRowButton
        label="Thêm gói"
        onClick={() =>
          setItems((prev) => [
            ...prev,
            {
              id: String(prev.length + 1).padStart(2, "0"),
              title: "",
              link: "/bao-gia",
              buttonLabel: "Xem chi tiết",
            },
          ])
        }
      />
    </div>
  );
}

export function ContactSectionEditor({
  content,
  setContent,
}: {
  content: ContactSectionContent;
  setContent: SetState<ContactSectionContent>;
}) {
  const update = <K extends keyof ContactSectionContent>(
    key: K,
    value: ContactSectionContent[K],
  ) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <FormSection title="Hình nền section">
        <ImageUploadField
          label="Ảnh nền liên hệ"
          value={content.backgroundImageUrl}
          onChange={(url) => update("backgroundImageUrl", url)}
          folder="homepage"
          hint="Hiển thị phía sau lớp gradient xanh"
        />
      </FormSection>

      <FormSection title="Nội dung bên trái">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Eyebrow">
            <Input value={content.eyebrow} onChange={(e) => update("eyebrow", e.target.value)} />
          </Field>
          <Field label="Tiêu đề dòng 1">
            <Input
              value={content.titleLine1}
              onChange={(e) => update("titleLine1", e.target.value)}
            />
          </Field>
          <Field label="Tiêu đề accent (màu đỏ)">
            <Input
              value={content.titleAccent}
              onChange={(e) => update("titleAccent", e.target.value)}
            />
          </Field>
          <Field label="Nhãn hotline">
            <Input
              value={content.hotlineLabel}
              onChange={(e) => update("hotlineLabel", e.target.value)}
            />
          </Field>
          <Field label="Nhãn địa chỉ">
            <Input
              value={content.addressLabel}
              onChange={(e) => update("addressLabel", e.target.value)}
            />
          </Field>
          <div className="md:col-span-2">
            <Field label="Mô tả">
              <Textarea
                rows={3}
                value={content.description}
                onChange={(e) => update("description", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </FormSection>

      <FormSection title="Form báo giá">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Tiêu đề form">
            <Input value={content.formTitle} onChange={(e) => update("formTitle", e.target.value)} />
          </Field>
          <Field label="Nút gửi">
            <Input
              value={content.submitLabel}
              onChange={(e) => update("submitLabel", e.target.value)}
            />
          </Field>
          <div className="md:col-span-2">
            <div className="mb-2 text-sm font-semibold text-slate-700">Tùy chọn dịch vụ</div>
            <div className="space-y-2">
              {content.serviceOptions.map((opt, index) => (
                <div key={`svc-${index}`} className="flex gap-2">
                  <Input
                    value={opt}
                    onChange={(e) =>
                      setContent((prev) => ({
                        ...prev,
                        serviceOptions: prev.serviceOptions.map((o, i) =>
                          i === index ? e.target.value : o,
                        ),
                      }))
                    }
                  />
                  <button
                    type="button"
                    className="shrink-0 rounded-lg border border-red-200 px-3 text-sm text-red-600"
                    onClick={() =>
                      setContent((prev) => ({
                        ...prev,
                        serviceOptions: prev.serviceOptions.filter((_, i) => i !== index),
                      }))
                    }
                  >
                    Xóa
                  </button>
                </div>
              ))}
              <AddRowButton
                label="Thêm dịch vụ"
                onClick={() =>
                  setContent((prev) => ({
                    ...prev,
                    serviceOptions: [...prev.serviceOptions, ""],
                  }))
                }
              />
            </div>
          </div>
        </div>
      </FormSection>
    </div>
  );
}

const SECTION_KEYS: Array<keyof HomeSectionMeta> = [
  "commitments",
  "pricing",
  "quote",
  "calculator",
  "contact",
  "services",
  "projects",
  "process",
  "testimonials",
  "faq",
  "news",
  "video",
];

const SECTION_LABELS: Record<keyof HomeSectionMeta, string> = {
  commitments: "Cam kết",
  pricing: "Bảng giá",
  quote: "Gói báo giá (vòng tròn)",
  calculator: "Tính chi phí",
  contact: "Form liên hệ",
  services: "Dịch vụ",
  projects: "Công trình",
  process: "Quy trình",
  testimonials: "Đánh giá khách hàng",
  faq: "FAQ",
  news: "Tin tức",
  video: "Video",
};

export function SectionsMetaEditor({
  meta,
  setMeta,
  cta,
  setCta,
}: {
  meta: HomeSectionMeta;
  setMeta: SetState<HomeSectionMeta>;
  cta: CtaBannerContent;
  setCta: SetState<CtaBannerContent>;
}) {
  return (
    <div className="space-y-6">
      <FormSection title="Banner CTA giữa trang">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Field label="Dòng phụ (eyebrow)">
            <Input
              value={cta.eyebrow}
              onChange={(e) => setCta((prev) => ({ ...prev, eyebrow: e.target.value }))}
            />
          </Field>
          <Field label="Tiêu đề">
            <Input
              value={cta.title}
              onChange={(e) => setCta((prev) => ({ ...prev, title: e.target.value }))}
            />
          </Field>
          <div className="md:col-span-2">
            <Field label="Mô tả">
              <Textarea
                rows={3}
                value={cta.subtitle}
                onChange={(e) => setCta((prev) => ({ ...prev, subtitle: e.target.value }))}
              />
            </Field>
          </div>
          <Field label="Nút phụ — nhãn">
            <Input
              value={cta.secondaryLabel}
              onChange={(e) => setCta((prev) => ({ ...prev, secondaryLabel: e.target.value }))}
            />
          </Field>
          <Field label="Nút phụ — link">
            <Input
              value={cta.secondaryHref}
              onChange={(e) => setCta((prev) => ({ ...prev, secondaryHref: e.target.value }))}
            />
          </Field>
        </div>
      </FormSection>

      {SECTION_KEYS.map((key) => (
        <FormSection key={key} title={`Tiêu đề section: ${SECTION_LABELS[key]}`}>
          <div className="grid grid-cols-1 gap-4">
            <Field label="Tiêu đề">
              <Input
                value={meta[key].title}
                onChange={(e) =>
                  setMeta((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], title: e.target.value },
                  }))
                }
              />
            </Field>
            <Field label="Mô tả phụ">
              <Textarea
                rows={2}
                value={meta[key].subtitle}
                onChange={(e) =>
                  setMeta((prev) => ({
                    ...prev,
                    [key]: { ...prev[key], subtitle: e.target.value },
                  }))
                }
              />
            </Field>
          </div>
        </FormSection>
      ))}
    </div>
  );
}

const RATE_TIERS = [
  { key: "trung-binh", label: "Trung bình" },
  { key: "tb-kha", label: "TB khá" },
  { key: "kha", label: "Khá" },
] as const;

export type CalculatorConfig = {
  phanThoRates: Record<string, number>;
  tronGoiRates: Record<string, number>;
  note: string;
};

export function CalculatorRatesEditor({
  config,
  onChange,
}: {
  config: CalculatorConfig;
  onChange: (config: CalculatorConfig) => void;
}) {
  const updateRate = (
    group: "phanThoRates" | "tronGoiRates",
    tier: string,
    raw: string,
  ) => {
    const value = Number(raw.replace(/\D/g, ""));
    onChange({
      ...config,
      [group]: {
        ...config[group],
        [tier]: Number.isFinite(value) ? value : 0,
      },
    });
  };

  return (
    <div className="space-y-6">
      <FormSection title="Đơn giá xây phần thô (đ/m²)">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RATE_TIERS.map((tier) => (
            <Field key={`phan-tho-${tier.key}`} label={tier.label}>
              <Input
                type="number"
                value={config.phanThoRates[tier.key] ?? 0}
                onChange={(e) => updateRate("phanThoRates", tier.key, e.target.value)}
              />
            </Field>
          ))}
        </div>
      </FormSection>

      <FormSection title="Đơn giá xây trọn gói (đ/m²)">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {RATE_TIERS.map((tier) => (
            <Field key={`tron-goi-${tier.key}`} label={tier.label}>
              <Input
                type="number"
                value={config.tronGoiRates[tier.key] ?? 0}
                onChange={(e) => updateRate("tronGoiRates", tier.key, e.target.value)}
              />
            </Field>
          ))}
        </div>
      </FormSection>

      <FormSection title="Ghi chú hiển thị">
        <Field label="Ghi chú dưới bảng tính">
          <Textarea
            rows={4}
            value={config.note}
            onChange={(e) => onChange({ ...config, note: e.target.value })}
          />
        </Field>
      </FormSection>
    </div>
  );
}

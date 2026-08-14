import { PageShell } from "@/components/PageShell";
import { ContactCTASection } from "@/components/ContactCTASection";
import { FAQSection } from "@/components/FAQSection";
import { PageBanner } from "@/components/PageBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import {
  useOpenGraphImage,
  useGoogleMapEmbed,
  useSiteSettings,
  telHref,
  usePageBanner,
  usePrimaryPhone,
} from "@/lib/site-settings";
import { MapEmbed } from "@/components/MapEmbed";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema } from "@/lib/seo";

const CONTACT_FAQS = [
  {
    q: "Khảo sát nhà ở TP.HCM mất bao lâu, có mất phí không?",
    a: "Khảo sát hiện trạng nội thành thường 30–60 phút, miễn phí khi đi kèm báo giá thi công. Hẻm xe máy vẫn đến được. Gửi ảnh nhà + vị trí trước để kỹ sư chuẩn bị.",
  },
  {
    q: "Có bắt buộc đến văn phòng Bình Thạnh không?",
    a: "Không. Có thể gọi 0909 075 668, gửi form trên trang này, hoặc hẹn khảo sát tại công trình. Văn phòng 245/8 Bình Lợi dùng khi ký hợp đồng / xem mẫu.",
  },
  {
    q: "Chi nhánh Đắk Lắk nhận khảo sát thế nào?",
    a: "Có địa chỉ chi nhánh 2 tại Đắk Lắk. Công trình Buôn Ma Thuột / tỉnh: hẹn lịch trước. Gói lớn vẫn do cùng đội kỹ thuật Sao Khuê.",
  },
  {
    q: "Gửi form liên hệ xong được gọi lại khi nào?",
    a: "Trong giờ làm việc thường trong ngày. Ngoài giờ: hotline 24/7 cho việc khẩn (dột, chập điện). Báo giá chính thức sau khảo sát, không chốt hợp đồng chỉ qua ảnh.",
  },
  {
    q: "Báo giá qua Zalo / ảnh nhà có chính xác không?",
    a: "Ảnh giúp ước mốc. Đơn giá m² trên mạng chưa gồm hẻm, móng cọc, hoàn thiện. Sao Khuê chốt sau đo đạc tại chỗ.",
  },
];

export default function Contact() {
  const s = useSiteSettings();
  const mapEmbed = useGoogleMapEmbed();
  const banner = usePageBanner("contact");
  const phone = usePrimaryPhone();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Liên hệ", path: "/lien-he" },
  ];

  usePageSeo({
    title: `Liên hệ ${brand} | Hotline ${phone}`,
    description:
      banner.subtitle +
      (s.address1 ? ` Địa chỉ: ${s.address1}.` : "") +
      " Gửi yêu cầu báo giá trực tuyến.",
    path: "/lien-he",
    keywords: "liên hệ xây dựng, báo giá xây nhà, khảo sát miễn phí tphcm",
    ogImage,
    ogImageAlt: `Liên hệ ${brand} — khảo sát và báo giá xây nhà`,
    jsonLd: [buildBreadcrumbSchema(breadcrumbs)],
  });

  return (
    <PageShell>
      <PageBanner title={banner.title}>
        <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">{banner.subtitle}</p>
        <Breadcrumbs items={breadcrumbs} light className="mt-4" />
      </PageBanner>

      <section className="site-container py-10 md:py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {phone && (
            <a
              key={phone}
              href={telHref(phone)}
              className="card-premium flex items-start gap-4 p-5 hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Hotline</div>
                <div className="font-bold text-primary">{phone}</div>
              </div>
            </a>
          )}

          {s.email && (
            <a
              href={`mailto:${s.email}`}
              className="card-premium flex items-start gap-4 p-5 hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</div>
                <div className="break-all font-semibold text-slate-800">{s.email}</div>
              </div>
            </a>
          )}

          <div className="card-premium flex items-start gap-4 p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock size={20} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Giờ làm việc</div>
              <div className="text-sm font-semibold text-slate-800">{s.workingHours || "8:00 – 17:30"}</div>
              <div className="text-xs text-slate-500">Hotline hỗ trợ 24/7</div>
            </div>
          </div>

          {s.address1 && (
            <div className="card-premium flex items-start gap-4 p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Chi nhánh TP.HCM</div>
                <div className="text-sm font-semibold leading-relaxed text-slate-800">{s.address1}</div>
              </div>
            </div>
          )}
          {s.address2 && (
            <div className="card-premium flex items-start gap-4 p-5 sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Chi nhánh 2 – Đắk Lắk</div>
                <div className="text-sm font-semibold leading-relaxed text-slate-800">{s.address2}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactCTASection />

      <div className="site-container pb-16 md:pb-20">
        <div className="content-card overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
            <h2 className="flex items-center gap-2 text-lg font-bold text-primary">
              <MapPin size={20} />
              Vị trí văn phòng
            </h2>
          </div>
          <div className="relative flex h-[420px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 md:h-[480px]">
            <MapEmbed
              embedHtml={mapEmbed}
              address={s.address1}
              title="Bản đồ Sao Khuê"
            />
          </div>
          <div className="px-6 py-4 text-sm text-slate-600">{s.address1}</div>
        </div>
      </div>

      <FAQSection
        title="Câu hỏi khi liên hệ"
        subtitle="Khảo sát, văn phòng Bình Thạnh, chi nhánh Đắk Lắk và cách chốt báo giá."
        items={CONTACT_FAQS}
        enableSchema
        className="section-muted pb-20"
      />
    </PageShell>
  );
}

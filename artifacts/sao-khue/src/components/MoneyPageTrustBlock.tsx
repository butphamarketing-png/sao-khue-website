import { MapPin, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import {
  PRIMARY_PHONE,
  useSiteSettings,
  useTestimonials,
} from "@/lib/site-settings";
import { DEFAULT_GOOGLE_MAPS_LINK } from "@/lib/social-links";

/** Slug trang tiền — hiện khối E-E-A-T (công trình + địa chỉ + đánh giá). */
export const MONEY_EEAT_SLUGS = new Set([
  "sua-nha-tron-goi-tphcm",
  "xay-nha-tron-goi-tphcm",
  "xay-nha-tron-goi-binh-duong",
  "xay-nha-tron-goi-dong-nai",
  "cai-tao-nha-cu",
  "sua-chua-nha",
  "xay-dung-phan-tho",
  "thiet-ke-nha",
]);

const PROJECT_SHOTS = [
  {
    src: "/images/nha-2-tang/nha-2-tang-02.jpg",
    alt: "Nhà phố trọn gói bàn giao — Sao Khuê",
    href: "/cong-trinh/xay-nha-pho-thuan-an",
    label: "Nhà phố Thuận An",
  },
  {
    src: "/images/cai-tao/cai-tao-07.jpg",
    alt: "Cải tạo nhà phố thực tế — Sao Khuê",
    href: "/cong-trinh/sua-nha-quan-3",
    label: "Cải tạo Quận 3",
  },
  {
    src: "/images/cai-tao/cai-tao-06.jpg",
    alt: "Biệt thự sân vườn — Sao Khuê",
    href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc",
    label: "Biệt thự Thủ Đức",
  },
] as const;

type Props = { slug: string };

export function MoneyPageTrustBlock({ slug }: Props) {
  if (!MONEY_EEAT_SLUGS.has(slug)) return null;

  const s = useSiteSettings();
  const reviews = useTestimonials().slice(0, 3);
  const mapsUrl = (s.googleMapsUrl || DEFAULT_GOOGLE_MAPS_LINK).trim();
  const address = s.address1 || "36 Đường 27, KDC Vạn Phúc, Thủ Đức, TP.HCM";
  const phone = s.hotline1 || PRIMARY_PHONE;

  return (
    <section
      className="mt-10 space-y-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 md:p-8"
      aria-label="Thông tin uy tín Sao Khuê"
    >
      <div>
        <h2 className="text-xl font-bold text-primary">Công trình thực tế đã bàn giao</h2>
        <p className="mt-2 text-sm text-slate-600">
          Ảnh hiện trường — không dùng stock. Xem thêm tại{" "}
          <Link href="/cong-trinh" className="font-semibold text-primary underline">
            mục công trình
          </Link>
          .
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {PROJECT_SHOTS.map((shot) => (
            <Link
              key={shot.src}
              href={shot.href}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                width={640}
                height={400}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="px-3 py-2 text-sm font-semibold text-slate-800">{shot.label}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-primary">Địa chỉ &amp; liên hệ</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong>TP.HCM:</strong> {address}
                {s.address2 ? (
                  <>
                    <br />
                    <strong>Đắk Lắk:</strong> {s.address2}
                  </>
                ) : null}
              </span>
            </li>
            <li>
              <strong>Hotline / Zalo:</strong> {phone}
            </li>
            <li>
              <strong>Email:</strong> {s.email || "kientrucsaokhue@gmail.com"}
            </li>
          </ul>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Xem trên Google Maps
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div>
          <h2 className="text-xl font-bold text-primary">Đánh giá khách hàng</h2>
          <p className="mt-1 text-xs text-slate-500">
            Phản hồi sau bàn giao — xác minh thêm trên Google Maps / fanpage.
          </p>
          <ul className="mt-3 space-y-3">
            {reviews.map((r) => (
              <li
                key={`${r.name}-${r.project}`}
                className="rounded-xl border border-slate-200 bg-white p-3 text-sm"
              >
                <div className="mb-1 flex items-center gap-1 text-amber-500" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700">&ldquo;{r.text}&rdquo;</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {r.name}
                  {r.project ? (
                    <span className="font-normal text-slate-500"> — {r.project}</span>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Xem đánh giá trên Google
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

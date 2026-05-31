import { db, siteSettingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv() {
  const envPath = resolve(process.cwd(), "../../.env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv();

function isEmptyJson(value: string | null | undefined): boolean {
  if (!value || value.trim() === "") return true;
  const t = value.trim();
  return t === "[]" || t === "{}" || t === "null";
}

/** Defaults aligned with sao-khue site-settings.ts / home-content.ts */
const defaults: Record<string, string> = {
  heroSlidesJson: JSON.stringify([
    {
      image: "/images/hero-1.png",
      title: "KIẾN TẠO KHÔNG GIAN SỐNG ĐẲNG CẤP",
      subtitle: "Thiết kế và thi công nhà phố, biệt thự trọn gói",
      description:
        "Công ty TNHH Kiến Trúc Sao Khuê cam kết mang đến những giải pháp không gian hoàn hảo, tối ưu chi phí và chất lượng vượt trội.",
    },
    {
      image: "/images/hero-2.png",
      title: "UY TÍN - CHẤT LƯỢNG - TẬN TÂM",
      subtitle: "Xây dựng biệt thự hiện đại",
      description:
        "Với đội ngũ kỹ sư, kiến trúc sư giàu kinh nghiệm, chúng tôi tự hào đồng hành cùng hàng trăm gia đình kiến tạo tổ ấm mơ ước.",
    },
    {
      image: "/images/hero-3.png",
      title: "THI CÔNG ĐÚNG TIẾN ĐỘ VÀ BẢO HÀNH DÀI HẠN",
      subtitle: "Quản lý dự án chuyên nghiệp",
      description:
        "Minh bạch trong báo giá, sử dụng vật tư chính hãng, không phát sinh chi phí. Bảo hành kết cấu lên đến 10 năm.",
    },
  ]),
  homePricingJson: JSON.stringify([
    {
      id: "phan-tho",
      name: "XÂY DỰNG PHẦN THÔ",
      priceFrom: "3.550.000",
      priceTo: "3.800.000",
      unit: "đ/m²",
      note: "Bao gồm nhân công và vật tư thô",
      features: [
        "Cung cấp vật tư thô",
        "Nhân công xây thô toàn bộ công trình",
        "Nhân công hoàn thiện cơ bản",
        "Lắp đặt hệ thống điện nước âm tường",
        "Bảo hành kết cấu 10 năm",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nhận báo giá chi tiết",
    },
    {
      id: "tron-goi",
      name: "XÂY NHÀ TRỌN GÓI",
      priceFrom: "4.850.000",
      priceTo: "6.700.000",
      unit: "đ/m²",
      note: "Chìa khóa trao tay - vào ở ngay",
      features: [
        "Bao gồm toàn bộ dịch vụ xây thô",
        "Cung cấp vật tư hoàn thiện",
        "Lắp đặt cửa, lan can, cầu thang, thiết bị vệ sinh",
        "Miễn phí thiết kế kiến trúc 2D/3D",
        "Bảo hành hoàn thiện 12-36 tháng",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nhận báo giá chi tiết",
      highlighted: true,
    },
  ]),
  homeStatsJson: JSON.stringify([
    { icon: "building-2", value: "500+", label: "Công trình bàn giao" },
    { icon: "hard-hat", value: "10+", label: "Năm kinh nghiệm" },
    { icon: "users", value: "50+", label: "Kỹ sư & kiến trúc sư" },
    { icon: "shield-check", value: "10 năm", label: "Bảo hành kết cấu" },
  ]),
  homeQuoteServicesJson: JSON.stringify([
    { id: "1", title: "XÂY NHÀ\nTRỌN GÓI", link: "/dich-vu/xay-nha-tron-goi", buttonLabel: "Xem chi tiết" },
    { id: "2", title: "SỬA CHỮA\nNHÀ CŨ", link: "/dich-vu/sua-chua-nha", buttonLabel: "Xem chi tiết" },
    { id: "3", title: "THIẾT KẾ\nKIẾN TRÚC", link: "/dich-vu/thiet-ke-kien-truc", buttonLabel: "Xem chi tiết" },
    { id: "4", title: "THI CÔNG\nPHẦN THÔ", link: "/dich-vu/xay-dung-phan-tho", buttonLabel: "Xem chi tiết" },
  ]),
  homeCtaJson: JSON.stringify({
    eyebrow: "Tận tâm — Uy tín — Chất lượng",
    title: "Sẵn sàng bắt đầu công trình của bạn?",
    subtitle: "Liên hệ ngay để được khảo sát miễn phí và nhận báo giá chi tiết trong 24–48h.",
    secondaryLabel: "Nhận báo giá",
    secondaryHref: "/lien-he",
  }),
  homeTestimonialsJson: JSON.stringify([
    {
      name: "Anh Tuấn — Quận 7",
      project: "Xây nhà phố 4 tầng",
      text: "Sao Khuê thi công đúng tiến độ, báo giá minh bạch không phát sinh. Đội giám sát nhiệt tình, bàn giao nhà đẹp hơn mong đợi.",
    },
    {
      name: "Chị Lan — Bình Thạnh",
      project: "Cải tạo nhà cũ",
      text: "Tư vấn rất kỹ từ khâu thiết kế đến vật tư. Công trình gọn gàng, sạch sẽ sau mỗi ngày thi công. Gia đình rất hài lòng.",
    },
    {
      name: "Chú Ba — Đồng Nai",
      project: "Biệt thự sân vườn",
      text: "Làm việc chuyên nghiệp, hợp đồng rõ ràng. Hotline hỗ trợ nhanh khi cần điều chỉnh trong quá trình xây dựng.",
    },
  ]),
  homeFaqJson: JSON.stringify([
    {
      q: "Sao Khuê báo giá xây nhà trọn gói như thế nào?",
      a: "Chúng tôi khảo sát mặt bằng, lập dự toán chi tiết theo hạng mục và vật tư. Báo giá minh bạch, cam kết không phát sinh khi không có yêu cầu thay đổi từ khách hàng.",
    },
    {
      q: "Có được tư vấn và khảo sát miễn phí không?",
      a: "Có. Hotline 0909 085 668 hỗ trợ 24/7. Kỹ sư sẽ khảo sát hiện trạng và tư vấn sơ bộ miễn phí tại công trình.",
    },
  ]),
};

const fields = [
  "heroSlidesJson",
  "homePricingJson",
  "homeStatsJson",
  "homeQuoteServicesJson",
  "homeCtaJson",
  "homeTestimonialsJson",
  "homeFaqJson",
] as const;

async function main() {
  const [row] = await db.select().from(siteSettingsTable).where(eq(siteSettingsTable.id, 1)).limit(1);
  if (!row) {
    await db.insert(siteSettingsTable).values({ id: 1 });
  }

  const [current] = await db.select().from(siteSettingsTable).where(eq(siteSettingsTable.id, 1)).limit(1);
  const patch: Record<string, string> = {};

  for (const key of fields) {
    const val = current[key] as string;
    if (isEmptyJson(val)) {
      patch[key] = defaults[key];
    }
  }

  if (Object.keys(patch).length === 0) {
    console.log("Site settings already populated — nothing to seed.");
    return;
  }

  await db.update(siteSettingsTable).set(patch).where(eq(siteSettingsTable.id, 1));
  console.log("Seeded empty fields:", Object.keys(patch).join(", "));
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

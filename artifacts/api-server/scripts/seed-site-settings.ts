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
      title: "KI?N T?O KHÔNG GIAN S?NG Ð?NG C?P",
      subtitle: "Thi?t k? và thi công nhà ph?, bi?t th? tr?n gói",
      description:
        "Công ty TNHH Ki?n Trúc Sao Khuê cam k?t mang d?n nh?ng gi?i pháp không gian hoàn h?o, t?i uu chi phí và ch?t lu?ng vu?t tr?i.",
    },
    {
      image: "/images/hero-2.png",
      title: "UY TÍN - CH?T LU?NG - T?N TÂM",
      subtitle: "Xây d?ng bi?t th? hi?n d?i",
      description:
        "V?i d?i ngu k? su, ki?n trúc su giàu kinh nghi?m, chúng tôi t? hào d?ng hành cùng hàng tram gia dình ki?n t?o t? ?m mo u?c.",
    },
    {
      image: "/images/hero-3.png",
      title: "THI CÔNG ÐÚNG TI?N Ð? VÀ B?O HÀNH DÀI H?N",
      subtitle: "Qu?n lý d? án chuyên nghi?p",
      description:
        "Minh b?ch trong báo giá, s? d?ng v?t tu chính hãng, không phát sinh chi phí. B?o hành k?t c?u lên d?n 10 nam.",
    },
  ]),
  homePricingJson: JSON.stringify([
    {
      id: "phan-tho",
      name: "XÂY D?NG PH?N THÔ",
      priceFrom: "3.550.000",
      priceTo: "3.800.000",
      unit: "d/m²",
      note: "Bao g?m nhân công và v?t tu thô",
      features: [
        "Cung c?p v?t tu thô",
        "Nhân công xây thô toàn b? công trình",
        "Nhân công hoàn thi?n co b?n",
        "L?p d?t h? th?ng di?n nu?c âm tu?ng",
        "B?o hành k?t c?u 10 nam",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n báo giá chi ti?t",
    },
    {
      id: "tron-goi",
      name: "XÂY NHÀ TR?N GÓI",
      priceFrom: "4.850.000",
      priceTo: "6.700.000",
      unit: "d/m²",
      note: "Chìa khóa trao tay - vào ? ngay",
      features: [
        "Bao g?m toàn b? d?ch v? xây thô",
        "Cung c?p v?t tu hoàn thi?n",
        "L?p d?t c?a, lan can, c?u thang, thi?t b? v? sinh",
        "Mi?n phí thi?t k? ki?n trúc 2D/3D",
        "B?o hành hoàn thi?n 12-36 tháng",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n báo giá chi ti?t",
      highlighted: true,
    },
  ]),
  homeStatsJson: JSON.stringify([
    { icon: "building-2", value: "500+", label: "Công trình bàn giao" },
    { icon: "hard-hat", value: "10+", label: "Nam kinh nghi?m" },
    { icon: "users", value: "50+", label: "K? su & ki?n trúc su" },
    { icon: "shield-check", value: "10 nam", label: "B?o hành k?t c?u" },
  ]),
  homeQuoteServicesJson: JSON.stringify([
    { id: "1", title: "XÂY NHÀ\nTR?N GÓI", link: "/dich-vu/xay-nha-tron-goi", buttonLabel: "Xem chi ti?t" },
    { id: "2", title: "S?A CH?A\nNHÀ CU", link: "/dich-vu/sua-chua-nha", buttonLabel: "Xem chi ti?t" },
    { id: "3", title: "THI?T K?\nKI?N TRÚC", link: "/dich-vu/thiet-ke-kien-truc", buttonLabel: "Xem chi ti?t" },
    { id: "4", title: "THI CÔNG\nPH?N THÔ", link: "/dich-vu/xay-dung-phan-tho", buttonLabel: "Xem chi ti?t" },
  ]),
  homeCtaJson: JSON.stringify({
    eyebrow: "T?n tâm — Uy tín — Ch?t lu?ng",
    title: "S?n sàng b?t d?u công trình c?a b?n?",
    subtitle: "Liên h? ngay d? du?c kh?o sát mi?n phí và nh?n báo giá chi ti?t trong 24–48h.",
    secondaryLabel: "Nh?n báo giá",
    secondaryHref: "/lien-he",
  }),
  homeTestimonialsJson: JSON.stringify([
    {
      name: "Anh Tu?n — Qu?n 7",
      project: "Xây nhà ph? 4 t?ng",
      text: "Sao Khuê thi công dúng ti?n d?, báo giá minh b?ch không phát sinh. Ð?i giám sát nhi?t tình, bàn giao nhà d?p hon mong d?i.",
    },
    {
      name: "Ch? Lan — Bình Th?nh",
      project: "C?i t?o nhà cu",
      text: "Tu v?n r?t k? t? khâu thi?t k? d?n v?t tu. Công trình g?n gàng, s?ch s? sau m?i ngày thi công. Gia dình r?t hài lòng.",
    },
    {
      name: "Chú Ba — Ð?ng Nai",
      project: "Bi?t th? sân vu?n",
      text: "Làm vi?c chuyên nghi?p, h?p d?ng rõ ràng. Hotline h? tr? nhanh khi c?n di?u ch?nh trong quá trình xây d?ng.",
    },
  ]),
  homeFaqJson: JSON.stringify([
    {
      q: "Sao Khuê báo giá xây nhà tr?n gói nhu th? nào?",
      a: "Chúng tôi kh?o sát m?t b?ng, l?p d? toán chi ti?t theo h?ng m?c và v?t tu. Báo giá minh b?ch, cam k?t không phát sinh khi không có yêu c?u thay d?i t? khách hàng.",
    },
    {
      q: "Có du?c tu v?n và kh?o sát mi?n phí không?",
      a: "Có. Hotline 0909 075 668 h? tr? 24/7. K? su s? kh?o sát hi?n tr?ng và tu v?n so b? mi?n phí t?i công trình.",
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

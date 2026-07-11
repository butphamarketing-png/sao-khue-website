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
      image: "/images/hero-1.jpg",
      title: "Thiết kế & xây nhà trọn gói",
      subtitle: "Kiến Trúc Sao Khuê",
      description:
        "Kiến tạo không gian sống hiện đại, bền vững và đẳng cấp. Hotline 0909 075 668.",
    },
    {
      image: "/images/hero-2.jpg",
      title: "Thiết kế & thi công nhà phố, biệt thự",
      subtitle: "Kiến Trúc Sao Khuê",
      description:
        "Uy tín — chất lượng — tận tâm. Tư vấn và khảo sát miễn phí tại công trình.",
    },
    {
      image: "/images/hero-3.jpg",
      title: "Cải tạo sửa chữa nhà",
      subtitle: "Kiến Trúc Sao Khuê",
      description:
        "Cải tạo nhà cũ thành không gian mới — minh bạch báo giá, đúng tiến độ.",
    },
  ]),
  homePricingJson: JSON.stringify([
    {
      id: "phan-tho",
      name: "XY D?NG PH?N TH",
      priceFrom: "3.550.000",
      priceTo: "3.800.000",
      unit: "d/m",
      note: "Bao g?m nhn cng v v?t tu th",
      features: [
        "Cung c?p v?t tu th",
        "Nhn cng xy th ton b? cng trnh",
        "Nhn cng hon thi?n co b?n",
        "L?p d?t h? th?ng di?n nu?c m tu?ng",
        "B?o hnh k?t c?u 10 nam",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n bo gi chi ti?t",
    },
    {
      id: "tron-goi",
      name: "XY NH TR?N GI",
      priceFrom: "4.850.000",
      priceTo: "6.700.000",
      unit: "d/m",
      note: "Cha kha trao tay - vo ? ngay",
      features: [
        "Bao g?m ton b? d?ch v? xy th",
        "Cung c?p v?t tu hon thi?n",
        "L?p d?t c?a, lan can, c?u thang, thi?t b? v? sinh",
        "Mi?n ph thi?t k? ki?n trc 2D/3D",
        "B?o hnh hon thi?n 12-36 thng",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n bo gi chi ti?t",
      highlighted: true,
    },
  ]),
  homeStatsJson: JSON.stringify([
    { icon: "building-2", value: "500+", label: "Cng trnh bn giao" },
    { icon: "hard-hat", value: "10+", label: "Nam kinh nghi?m" },
    { icon: "users", value: "50+", label: "K? su & ki?n trc su" },
    { icon: "shield-check", value: "10 nam", label: "B?o hnh k?t c?u" },
  ]),
  homeQuoteServicesJson: JSON.stringify([
    { id: "1", title: "XY NH\nTR?N GI", link: "/dich-vu/xay-nha-tron-goi", buttonLabel: "Xem chi ti?t" },
    { id: "2", title: "S?A CH?A\nNH CU", link: "/dich-vu/sua-chua-nha", buttonLabel: "Xem chi ti?t" },
    { id: "3", title: "THI?T K?\nKI?N TRC", link: "/dich-vu/thiet-ke-kien-truc", buttonLabel: "Xem chi ti?t" },
    { id: "4", title: "THI CNG\nPH?N TH", link: "/dich-vu/xay-dung-phan-tho", buttonLabel: "Xem chi ti?t" },
  ]),
  homeCtaJson: JSON.stringify({
    eyebrow: "T?n tm  Uy tn  Ch?t lu?ng",
    title: "S?n sng b?t d?u cng trnh c?a b?n?",
    subtitle: "Lin h? ngay d? du?c kh?o st mi?n ph v nh?n bo gi chi ti?t trong 2448h.",
    secondaryLabel: "Nh?n bo gi",
    secondaryHref: "/lien-he",
  }),
  homeTestimonialsJson: JSON.stringify([
    {
      name: "Anh Tu?n  Qu?n 7",
      project: "Xy nh ph? 4 t?ng",
      text: "Sao Khu thi cng dng ti?n d?, bo gi minh b?ch khng pht sinh. ?i gim st nhi?t tnh, bn giao nh d?p hon mong d?i.",
    },
    {
      name: "Ch? Lan  Bnh Th?nh",
      project: "C?i t?o nh cu",
      text: "Tu v?n r?t k? t? khu thi?t k? d?n v?t tu. Cng trnh g?n gng, s?ch s? sau m?i ngy thi cng. Gia dnh r?t hi lng.",
    },
    {
      name: "Ch Ba  ?ng Nai",
      project: "Bi?t th? sn vu?n",
      text: "Lm vi?c chuyn nghi?p, h?p d?ng r rng. Hotline h? tr? nhanh khi c?n di?u ch?nh trong qu trnh xy d?ng.",
    },
  ]),
  homeFaqJson: JSON.stringify([
    {
      q: "Sao Khu bo gi xy nh tr?n gi nhu th? no?",
      a: "Chng ti kh?o st m?t b?ng, l?p d? ton chi ti?t theo h?ng m?c v v?t tu. Bo gi minh b?ch, cam k?t khng pht sinh khi khng c yu c?u thay d?i t? khch hng.",
    },
    {
      q: "C du?c tu v?n v kh?o st mi?n ph khng?",
      a: "C. Hotline 0909 075 668 h? tr? 24/7. K? su s? kh?o st hi?n tr?ng v tu v?n so b? mi?n ph t?i cng trnh.",
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
    console.log("Site settings already populated  nothing to seed.");
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

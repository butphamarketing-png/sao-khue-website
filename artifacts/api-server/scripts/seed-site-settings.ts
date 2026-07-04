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
      title: "??i ng? Ki?n Tr˙c Sao KhuÍ ó t?n t‚m uy tÌn ch?t l??ng",
      subtitle: "Ki?n Tr˙c Sao KhuÍ",
      description:
        "CÙng ty TNHH Ki?n Tr˙c Sao KhuÍ ó thi?t k? v‡ thi cÙng nh‡ ph?, bi?t th? tr?n gÛi t?i TP.HCM v‡ c·c t?nh.",
    },
    {
      image: "/images/hero-2.png",
      title: "Uy tÌn ó ch?t l??ng ó t?n t‚m",
      subtitle: "X‚y d?ng bi?t th? hi?n ??i",
      description:
        "V?i ??i ng? k? s?, ki?n tr˙c s? gi‡u kinh nghi?m, ch˙ng tÙi t? h‡o ??ng h‡nh c˘ng h‡ng tr?m gia ?Ïnh ki?n t?o t? ?m m? ??c.",
    },
    {
      image: "/images/hero-3.png",
      title: "Thi cÙng ?˙ng ti?n ?? v‡ b?o h‡nh d‡i h?n",
      subtitle: "Qu?n l˝ d? ·n chuyÍn nghi?p",
      description:
        "Minh b?ch trong b·o gi·, s? d?ng v?t t? chÌnh h„ng, khÙng ph·t sinh chi phÌ. B?o h‡nh k?t c?u lÍn ??n 10 n?m.",
    },
  ]),
  homePricingJson: JSON.stringify([
    {
      id: "phan-tho",
      name: "XùY D?NG PH?N THù",
      priceFrom: "3.550.000",
      priceTo: "3.800.000",
      unit: "d/mù",
      note: "Bao g?m nhùn cùng vù v?t tu thù",
      features: [
        "Cung c?p v?t tu thù",
        "Nhùn cùng xùy thù toùn b? cùng trùnh",
        "Nhùn cùng hoùn thi?n co b?n",
        "L?p d?t h? th?ng di?n nu?c ùm tu?ng",
        "B?o hùnh k?t c?u 10 nam",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n bùo giù chi ti?t",
    },
    {
      id: "tron-goi",
      name: "XùY NHù TR?N GùI",
      priceFrom: "4.850.000",
      priceTo: "6.700.000",
      unit: "d/mù",
      note: "Chùa khùa trao tay - vùo ? ngay",
      features: [
        "Bao g?m toùn b? d?ch v? xùy thù",
        "Cung c?p v?t tu hoùn thi?n",
        "L?p d?t c?a, lan can, c?u thang, thi?t b? v? sinh",
        "Mi?n phù thi?t k? ki?n trùc 2D/3D",
        "B?o hùnh hoùn thi?n 12-36 thùng",
      ],
      ctaHref: "/lien-he",
      ctaLabel: "Nh?n bùo giù chi ti?t",
      highlighted: true,
    },
  ]),
  homeStatsJson: JSON.stringify([
    { icon: "building-2", value: "500+", label: "Cùng trùnh bùn giao" },
    { icon: "hard-hat", value: "10+", label: "Nam kinh nghi?m" },
    { icon: "users", value: "50+", label: "K? su & ki?n trùc su" },
    { icon: "shield-check", value: "10 nam", label: "B?o hùnh k?t c?u" },
  ]),
  homeQuoteServicesJson: JSON.stringify([
    { id: "1", title: "XùY NHù\nTR?N GùI", link: "/dich-vu/xay-nha-tron-goi", buttonLabel: "Xem chi ti?t" },
    { id: "2", title: "S?A CH?A\nNHù CU", link: "/dich-vu/sua-chua-nha", buttonLabel: "Xem chi ti?t" },
    { id: "3", title: "THI?T K?\nKI?N TRùC", link: "/dich-vu/thiet-ke-kien-truc", buttonLabel: "Xem chi ti?t" },
    { id: "4", title: "THI CùNG\nPH?N THù", link: "/dich-vu/xay-dung-phan-tho", buttonLabel: "Xem chi ti?t" },
  ]),
  homeCtaJson: JSON.stringify({
    eyebrow: "T?n tùm ù Uy tùn ù Ch?t lu?ng",
    title: "S?n sùng b?t d?u cùng trùnh c?a b?n?",
    subtitle: "Liùn h? ngay d? du?c kh?o sùt mi?n phù vù nh?n bùo giù chi ti?t trong 24ù48h.",
    secondaryLabel: "Nh?n bùo giù",
    secondaryHref: "/lien-he",
  }),
  homeTestimonialsJson: JSON.stringify([
    {
      name: "Anh Tu?n ù Qu?n 7",
      project: "Xùy nhù ph? 4 t?ng",
      text: "Sao Khuù thi cùng dùng ti?n d?, bùo giù minh b?ch khùng phùt sinh. ù?i giùm sùt nhi?t tùnh, bùn giao nhù d?p hon mong d?i.",
    },
    {
      name: "Ch? Lan ù Bùnh Th?nh",
      project: "C?i t?o nhù cu",
      text: "Tu v?n r?t k? t? khùu thi?t k? d?n v?t tu. Cùng trùnh g?n gùng, s?ch s? sau m?i ngùy thi cùng. Gia dùnh r?t hùi lùng.",
    },
    {
      name: "Chù Ba ù ù?ng Nai",
      project: "Bi?t th? sùn vu?n",
      text: "Lùm vi?c chuyùn nghi?p, h?p d?ng rù rùng. Hotline h? tr? nhanh khi c?n di?u ch?nh trong quù trùnh xùy d?ng.",
    },
  ]),
  homeFaqJson: JSON.stringify([
    {
      q: "Sao Khuù bùo giù xùy nhù tr?n gùi nhu th? nùo?",
      a: "Chùng tùi kh?o sùt m?t b?ng, l?p d? toùn chi ti?t theo h?ng m?c vù v?t tu. Bùo giù minh b?ch, cam k?t khùng phùt sinh khi khùng cù yùu c?u thay d?i t? khùch hùng.",
    },
    {
      q: "Cù du?c tu v?n vù kh?o sùt mi?n phù khùng?",
      a: "Cù. Hotline 0909 075 668 h? tr? 24/7. K? su s? kh?o sùt hi?n tr?ng vù tu v?n so b? mi?n phù t?i cùng trùnh.",
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
    console.log("Site settings already populated ù nothing to seed.");
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

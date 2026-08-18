/**
 * Gom 500 KW → cluster SEO (1 intent = 1 URL).
 * Run: npx tsx scripts/cluster-seo-kw-xay-nha-500.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kwFile = join(root, "docs", "ads-seo-7m", "keywords-seo-xay-nha-tron-goi-500.txt");
const outMap = join(root, "docs", "ads-seo-7m", "keywords-seo-xay-nha-tron-goi-500-map.csv");

const GEOS: { re: RegExp; slug: string; name: string }[] = [
  { re: /\bquận 1\b/, slug: "quan-1", name: "Quận 1" },
  { re: /\bquận 2\b/, slug: "quan-2", name: "Quận 2" },
  { re: /\bquận 3\b/, slug: "quan-3", name: "Quận 3" },
  { re: /\bquận 4\b/, slug: "quan-4", name: "Quận 4" },
  { re: /\bquận 5\b/, slug: "quan-5", name: "Quận 5" },
  { re: /\bquận 6\b/, slug: "quan-6", name: "Quận 6" },
  { re: /\bquận 7\b/, slug: "quan-7", name: "Quận 7" },
  { re: /\bquận 8\b/, slug: "quan-8", name: "Quận 8" },
  { re: /\bquận 9\b/, slug: "quan-9", name: "Quận 9" },
  { re: /\bquận 10\b/, slug: "quan-10", name: "Quận 10" },
  { re: /\bquận 11\b/, slug: "quan-11", name: "Quận 11" },
  { re: /\bquận 12\b/, slug: "quan-12", name: "Quận 12" },
  { re: /bình thạnh/, slug: "binh-thanh", name: "Bình Thạnh" },
  { re: /thủ đức/, slug: "thu-duc", name: "Thủ Đức" },
  { re: /gò vấp/, slug: "go-vap", name: "Gò Vấp" },
  { re: /tân bình/, slug: "tan-binh", name: "Tân Bình" },
  { re: /tân phú/, slug: "tan-phu", name: "Tân Phú" },
  { re: /phú nhuận/, slug: "phu-nhuan", name: "Phú Nhuận" },
  { re: /bình tân/, slug: "binh-tan", name: "Bình Tân" },
  { re: /nhà bè/, slug: "nha-be", name: "Nhà Bè" },
  { re: /hóc môn/, slug: "hoc-mon", name: "Hóc Môn" },
  { re: /củ chi/, slug: "cu-chi", name: "Củ Chi" },
  { re: /bình chánh/, slug: "binh-chanh", name: "Bình Chánh" },
  { re: /cần giờ/, slug: "can-gio", name: "Cần Giờ" },
  { re: /thuận an/, slug: "thuan-an", name: "Thuận An" },
  { re: /dĩ an/, slug: "di-an", name: "Dĩ An" },
  { re: /thủ dầu một/, slug: "thu-dau-mot", name: "Thủ Dầu Một" },
  { re: /tân uyên/, slug: "tan-uyen", name: "Tân Uyên" },
  { re: /bến cát/, slug: "ben-cat", name: "Bến Cát" },
  { re: /nhơn trạch/, slug: "nhon-trach", name: "Nhơn Trạch" },
  { re: /long thành/, slug: "long-thanh", name: "Long Thành" },
  { re: /trảng bom/, slug: "trang-bom", name: "Trảng Bom" },
  { re: /bến lức/, slug: "ben-luc", name: "Bến Lức" },
  { re: /cần giuộc/, slug: "can-giuoc", name: "Cần Giuộc" },
  { re: /đức hòa/, slug: "duc-hoa", name: "Đức Hòa" },
  { re: /biên hòa/, slug: "bien-hoa", name: "Biên Hòa" },
  { re: /bình dương/, slug: "binh-duong", name: "Bình Dương" },
  { re: /đồng nai/, slug: "dong-nai", name: "Đồng Nai" },
  { re: /long an/, slug: "long-an", name: "Long An" },
];

const TYPES: { re: RegExp; slug: string; name: string }[] = [
  { re: /nhà phố 4x16|4x16/, slug: "nha-pho-4x16", name: "nhà phố 4x16" },
  { re: /nhà phố 5x20|5x20/, slug: "nha-pho-5x20", name: "nhà phố 5x20" },
  { re: /1 trệt 3 lầu/, slug: "1-tret-3-lau", name: "1 trệt 3 lầu" },
  { re: /1 trệt 2 lầu/, slug: "1-tret-2-lau", name: "1 trệt 2 lầu" },
  { re: /1 trệt 1 lầu/, slug: "1-tret-1-lau", name: "1 trệt 1 lầu" },
  { re: /nhà 5 tầng/, slug: "nha-5-tang", name: "nhà 5 tầng" },
  { re: /nhà 4 tầng/, slug: "nha-4-tang", name: "nhà 4 tầng" },
  { re: /nhà 3 tầng/, slug: "nha-3-tang", name: "nhà 3 tầng" },
  { re: /nhà 2 tầng/, slug: "nha-2-tang", name: "nhà 2 tầng" },
  { re: /nhà cấp 4/, slug: "nha-cap-4", name: "nhà cấp 4" },
  { re: /biệt thự/, slug: "biet-thu", name: "biệt thự" },
  { re: /nhà ống/, slug: "nha-ong", name: "nhà ống" },
  { re: /trong hẻm|nhà trong hẻm/, slug: "trong-hem", name: "nhà trong hẻm" },
  { re: /mái thái/, slug: "mai-thai", name: "nhà mái thái" },
  { re: /mái nhật/, slug: "mai-nhat", name: "nhà mái nhật" },
  { re: /liền kề/, slug: "lien-ke", name: "nhà liền kề" },
  { re: /nhà phố hiện đại/, slug: "nha-pho-hien-dai", name: "nhà phố hiện đại" },
  { re: /nhà phố/, slug: "nha-pho", name: "nhà phố" },
];

function geoOf(kw: string) {
  for (const g of GEOS) if (g.re.test(kw)) return g;
  if (/\b(tphcm|tp hcm|sài gòn|hồ chí minh)\b/.test(kw)) {
    return { slug: "tphcm", name: "TP.HCM", re: /tphcm/ };
  }
  return null;
}

function typeOf(kw: string) {
  for (const t of TYPES) if (t.re.test(kw)) return t;
  return null;
}

function intentOf(kw: string): { id: string; name: string } {
  if (/giá rẻ|4 triệu|5 triệu/.test(kw)) return { id: "gia-re", name: "giá rẻ" };
  if (/báo giá|bảng giá/.test(kw)) return { id: "bao-gia", name: "báo giá" };
  if (/đơn giá|m2|1m2/.test(kw)) return { id: "don-gia", name: "đơn giá" };
  if (/chi phí|hết bao nhiêu|bao nhiêu tiền|giá bao nhiêu|đắt không/.test(kw))
    return { id: "chi-phi", name: "chi phí" };
  if (/dự toán|cách tính/.test(kw)) return { id: "du-toan", name: "dự toán" };
  if (/chìa khóa trao tay/.test(kw)) return { id: "chia-khoa", name: "chìa khóa trao tay" };
  if (/nhà thầu/.test(kw)) return { id: "nha-thau", name: "nhà thầu" };
  if (/công ty/.test(kw)) return { id: "cong-ty", name: "công ty" };
  if (/phần thô/.test(kw)) return { id: "phan-tho", name: "phần thô" };
  if (/gói .*tiêu chuẩn|gói .*khá|gói .*cao cấp/.test(kw)) return { id: "goi", name: "gói dịch vụ" };
  if (/thời gian|bao lâu/.test(kw)) return { id: "thoi-gian", name: "thời gian" };
  if (/gồm những gì|có thiết kế/.test(kw)) return { id: "pham-vi", name: "phạm vi gói" };
  if (/không phát sinh|bảo hành|uy tín|không bán thầu|minh bạch/.test(kw))
    return { id: "cam-ket", name: "cam kết" };
  return { id: "tron-goi", name: "trọn gói" };
}

type Row = {
  keyword: string;
  cluster: string;
  target_url: string;
  action: "exists-fold" | "write-handcraft" | "fold-into-hub";
  note: string;
};

const EXISTS: Record<string, string> = {
  "hub-tphcm": "/dich-vu/xay-nha-tron-goi",
  "bao-gia-tphcm": "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "chi-phi-tphcm": "/tin-tuc/chi-phi-xay-nha-tphcm",
  "don-gia-tphcm": "/tin-tuc/don-gia-xay-nha-tphcm",
  "gia-re-tphcm": "/tin-tuc/xay-nha-gia-re-tphcm",
  "chia-khoa-tphcm": "/tin-tuc/xay-nha-chia-khoa-trao-tay-tphcm",
  "nha-thau-tphcm": "/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm",
  "phan-tho-tphcm": "/dich-vu/xay-dung-phan-tho",
  "nha-2-tang": "/tin-tuc/xay-nha-2-tang-tphcm",
  "nha-3-tang": "/tin-tuc/xay-nha-3-tang-tphcm",
  "trong-hem": "/tin-tuc/xay-nha-trong-hem-tphcm",
  "binh-duong": "/dich-vu/xay-nha-tron-goi-binh-duong",
  "dong-nai": "/dich-vu/xay-nha-tron-goi-dong-nai",
};

function clusterKey(kw: string): Row {
  const geo = geoOf(kw);
  const typ = typeOf(kw);
  const intent = intentOf(kw);
  const geoSlug = geo?.slug ?? "tphcm";
  const isCityWide = !geo || geo.slug === "tphcm";

  if (typ && isCityWide) {
    const url = `/tin-tuc/xay-${typ.slug}-tron-goi-tphcm`;
    const exists =
      EXISTS[typ.slug] ??
      (typ.slug === "nha-pho" ? "/tin-tuc/xay-nha-tphcm" : null);
    return {
      keyword: kw,
      cluster: `type:${typ.slug}`,
      target_url: exists ?? url,
      action: exists ? "exists-fold" : "write-handcraft",
      note: `Loại nhà ${typ.name} — 1 URL, KW phụ: ${intent.name}`,
    };
  }

  if (typ && geo && geo.slug !== "tphcm") {
    return {
      keyword: kw,
      cluster: `geo:${geo.slug}`,
      target_url: `/tin-tuc/xay-nha-tron-goi-${geo.slug}`,
      action: "write-handcraft",
      note: `Gộp vào geo ${geo.name}; loại ${typ.name} = H2 trên bài geo`,
    };
  }

  if (!isCityWide) {
    const provinceHub =
      geo.slug === "binh-duong"
        ? EXISTS["binh-duong"]
        : geo.slug === "dong-nai"
          ? EXISTS["dong-nai"]
          : geo.slug === "long-an"
            ? "/dich-vu/xay-dung-nha-long-an"
            : null;
    const url = provinceHub ?? `/tin-tuc/xay-nha-tron-goi-${geo.slug}`;
    const cityTown = ["thuan-an", "di-an", "bien-hoa", "thu-dau-mot", "tan-uyen", "ben-cat", "nhon-trach", "long-thanh", "trang-bom", "ben-luc", "can-giuoc", "duc-hoa"].includes(
      geo.slug,
    );
    return {
      keyword: kw,
      cluster: `geo:${geo.slug}`,
      target_url: url,
      action: provinceHub && !cityTown ? "exists-fold" : "write-handcraft",
      note: cityTown
        ? `Huyện/thành ${geo.name} — 1 bài nếu có công trình; không thì fold tỉnh`
        : `Geo ${geo.name} — 1 URL; ${intent.name} = H2/FAQ`,
    };
  }

  const intentUrl: Record<string, string | undefined> = {
    "gia-re": EXISTS["gia-re-tphcm"],
    "bao-gia": EXISTS["bao-gia-tphcm"],
    "don-gia": EXISTS["don-gia-tphcm"],
    "chi-phi": EXISTS["chi-phi-tphcm"],
    "chia-khoa": EXISTS["chia-khoa-tphcm"],
    "nha-thau": EXISTS["nha-thau-tphcm"],
    "phan-tho": EXISTS["phan-tho-tphcm"],
    "du-toan": "/tin-tuc/du-toan-chi-phi-xay-nha",
    "cong-ty": "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
    "thoi-gian": EXISTS["hub-tphcm"],
    "pham-vi": EXISTS["hub-tphcm"],
    "cam-ket": EXISTS["hub-tphcm"],
    goi: EXISTS["hub-tphcm"],
    "tron-goi": EXISTS["hub-tphcm"],
  };

  const url = intentUrl[intent.id] ?? EXISTS["hub-tphcm"];
  const writeNew = intent.id === "goi" ? false : false;
  return {
    keyword: kw,
    cluster: `intent:${intent.id}`,
    target_url: url!,
    action: writeNew ? "write-handcraft" : "exists-fold",
    note: `Intent ${intent.name} city-wide — gộp money page, không URL mới`,
  };
}

const lines = readFileSync(kwFile, "utf8")
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

const rows = lines.map(clusterKey);
const header = "keyword,cluster,target_url,action,note";
const csv = [
  header,
  ...rows.map((r) =>
    [r.keyword, r.cluster, r.target_url, r.action, r.note].map((c) => `"${c.replace(/"/g, '""')}"`).join(","),
  ),
].join("\n");

writeFileSync(outMap, csv + "\n", "utf8");

const clusters = new Map<string, number>();
const actions = new Map<string, number>();
const urls = new Set<string>();
const writeUrls = new Set<string>();
for (const r of rows) {
  clusters.set(r.cluster, (clusters.get(r.cluster) ?? 0) + 1);
  actions.set(r.action, (actions.get(r.action) ?? 0) + 1);
  urls.add(r.target_url);
  if (r.action === "write-handcraft") writeUrls.add(r.target_url);
}

console.log(`keywords ${rows.length}`);
console.log(`unique target URLs ${urls.size}`);
console.log(`to write (unique URLs) ${writeUrls.size}`);
console.log("actions", Object.fromEntries(actions));
console.log("clusters", clusters.size);

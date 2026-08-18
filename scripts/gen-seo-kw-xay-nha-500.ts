/**
 * Sinh 500 từ khóa SEO cluster "xây nhà trọn gói TP.HCM".
 * Run: npx tsx scripts/gen-seo-kw-xay-nha-500.ts
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const out = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "docs",
  "ads-seo-7m",
  "keywords-seo-xay-nha-tron-goi-500.txt",
);

const seeds = ["xây nhà trọn gói tphcm", "xây nhà trọn gói giá rẻ tphcm"];

const cores = [
  "xây nhà trọn gói",
  "xây nhà chìa khóa trao tay",
  "thi công nhà trọn gói",
  "nhà thầu xây nhà trọn gói",
  "công ty xây nhà trọn gói",
  "dịch vụ xây nhà trọn gói",
  "xây dựng nhà trọn gói",
  "thi công xây nhà trọn gói",
  "xây nhà mới trọn gói",
  "nhà thầu xây dựng trọn gói",
];

const geos = [
  "tphcm",
  "tp hcm",
  "sài gòn",
  "hồ chí minh",
  "quận 1",
  "quận 2",
  "quận 3",
  "quận 4",
  "quận 5",
  "quận 6",
  "quận 7",
  "quận 8",
  "quận 9",
  "quận 10",
  "quận 11",
  "quận 12",
  "bình thạnh",
  "thủ đức",
  "gò vấp",
  "tân bình",
  "tân phú",
  "phú nhuận",
  "bình tân",
  "nhà bè",
  "hóc môn",
  "củ chi",
  "bình chánh",
  "cần giờ",
  "bình dương",
  "đồng nai",
  "long an",
  "thuận an",
  "dĩ an",
  "biên hòa",
  "thủ dầu một",
  "tân uyên",
  "bến cát",
  "nhơn trạch",
  "long thành",
  "trảng bom",
  "bến lức",
  "cần giuộc",
  "đức hòa",
];

const types = [
  "nhà phố",
  "nhà ống",
  "nhà cấp 4",
  "biệt thự",
  "nhà 2 tầng",
  "nhà 3 tầng",
  "nhà 4 tầng",
  "nhà 5 tầng",
  "1 trệt 1 lầu",
  "1 trệt 2 lầu",
  "1 trệt 3 lầu",
  "nhà trong hẻm",
  "nhà phố hiện đại",
  "nhà mái thái",
  "nhà mái nhật",
  "nhà phố 4x16",
  "nhà phố 5x20",
  "nhà liền kề",
];

const extras = [
  "xây nhà trọn gói giá rẻ",
  "giá xây nhà trọn gói tphcm",
  "báo giá xây nhà trọn gói tphcm",
  "đơn giá xây nhà trọn gói tphcm",
  "chi phí xây nhà trọn gói tphcm",
  "bảng giá xây nhà trọn gói tphcm",
  "giá xây nhà trọn gói 2026 tphcm",
  "báo giá xây nhà trọn gói 2026",
  "xây nhà trọn gói bao nhiêu 1m2 tphcm",
  "xây nhà trọn gói bao nhiêu tiền tphcm",
  "xây nhà trọn gói giá bao nhiêu tphcm",
  "công ty xây nhà trọn gói uy tín tphcm",
  "nhà thầu xây nhà trọn gói uy tín tphcm",
  "xây nhà trọn gói không phát sinh tphcm",
  "xây nhà trọn gói bảo hành 10 năm tphcm",
  "xây nhà chìa khóa trao tay tphcm",
  "xây nhà chìa khóa trao tay giá rẻ tphcm",
  "thi công nhà phố trọn gói tphcm",
  "xây nhà phố trọn gói tphcm",
  "xây nhà phố trọn gói giá rẻ tphcm",
  "xây nhà cấp 4 trọn gói tphcm",
  "xây nhà cấp 4 trọn gói giá rẻ tphcm",
  "xây biệt thự trọn gói tphcm",
  "xây nhà 2 tầng trọn gói tphcm",
  "xây nhà 3 tầng trọn gói tphcm",
  "xây nhà 4 tầng trọn gói tphcm",
  "xây nhà 1 trệt 1 lầu trọn gói tphcm",
  "xây nhà 1 trệt 2 lầu trọn gói tphcm",
  "xây nhà trong hẻm trọn gói tphcm",
  "xây nhà ống trọn gói tphcm",
  "đơn giá xây nhà phố trọn gói tphcm",
  "chi phí xây nhà phố 3 tầng tphcm",
  "chi phí xây nhà phố 4 tầng tphcm",
  "nhà thầu xây nhà phố tphcm",
  "công ty xây dựng nhà phố tphcm",
  "dịch vụ xây nhà trọn gói hồ chí minh",
  "xây nhà trọn gói sài gòn giá rẻ",
  "xây nhà mới trọn gói tphcm",
  "xây nhà mới giá rẻ tphcm",
  "thi công xây nhà phố tphcm",
  "xây nhà phần thô và hoàn thiện tphcm",
  "xây nhà trọn gói vật tư tphcm",
  "gói xây nhà trọn gói tiêu chuẩn tphcm",
  "gói xây nhà trọn gói khá tphcm",
  "gói xây nhà trọn gói cao cấp tphcm",
  "xây nhà trọn gói 4 triệu m2 tphcm",
  "xây nhà trọn gói 5 triệu m2 tphcm",
  "dự toán xây nhà trọn gói tphcm",
  "bảng dự toán xây nhà tphcm",
  "cách tính giá xây nhà trọn gói tphcm",
  "xây nhà trọn gói có thiết kế không",
  "xây nhà trọn gói gồm những gì tphcm",
  "xây nhà trọn gói thời gian bao lâu tphcm",
  "nhà thầu xây nhà bình thạnh",
  "nhà thầu xây nhà thủ đức",
  "công ty xây nhà gò vấp",
  "xây nhà trọn gói quận 7 giá rẻ",
  "xây nhà trọn gói thủ đức giá rẻ",
  "xây nhà trọn gói bình thạnh giá rẻ",
  "xây nhà trọn gói tân phú giá rẻ",
  "xây nhà trọn gói tân bình giá rẻ",
  "xây nhà trọn gói nhà bè giá rẻ",
  "xây nhà trọn gói hóc môn giá rẻ",
  "xây nhà trọn gói củ chi giá rẻ",
  "xây nhà trọn gói bình chánh giá rẻ",
  "xây nhà trọn gói thuận an giá rẻ",
  "xây nhà trọn gói dĩ an giá rẻ",
  "xây nhà trọn gói biên hòa giá rẻ",
  "xây nhà trọn gói long an giá rẻ",
  "đơn giá xây nhà m2 tphcm 2026",
  "giá xây nhà phần thô tphcm",
  "giá xây nhà hoàn thiện tphcm",
  "xây nhà trọn gói hẻm xe máy tphcm",
  "xây nhà trọn gói hẻm xe hơi tphcm",
  "xây nhà trên đất trống tphcm",
  "xây nhà mới trên đất sẵn tphcm",
  "công ty xây nhà trọn gói bình dương",
  "công ty xây nhà trọn gói đồng nai",
  "nhà thầu xây nhà bình dương",
  "nhà thầu xây nhà đồng nai",
];

function add(set: Set<string>, kw: string) {
  const n = kw.replace(/\s+/g, " ").trim().toLowerCase();
  if (n.length < 10 || n.length > 80) return;
  if (/\d+$/.test(n) && !/2026|m2|tầng|lầu|trệt/.test(n)) return;
  if (/(sửa nhà|cải tạo|nâng tầng|tuyển dụng|là gì|mẫu nhà đẹp|download|pdf)/.test(n)) return;
  set.add(n);
}

const set = new Set<string>();
for (const s of seeds) add(set, s);
for (const e of extras) add(set, e);

for (const c of cores) {
  for (const g of geos) add(set, `${c} ${g}`);
}

for (const t of types) {
  add(set, `xây ${t} trọn gói tphcm`);
  add(set, `xây ${t} trọn gói giá rẻ tphcm`);
  add(set, `báo giá xây ${t} trọn gói tphcm`);
  add(set, `chi phí xây ${t} tphcm`);
  add(set, `đơn giá xây ${t} tphcm`);
  add(set, `nhà thầu xây ${t} tphcm`);
  add(set, `công ty xây ${t} tphcm`);
  add(set, `thi công ${t} trọn gói tphcm`);
}

for (const g of geos) {
  add(set, `xây nhà trọn gói ${g}`);
  add(set, `xây nhà trọn gói giá rẻ ${g}`);
  add(set, `công ty xây nhà trọn gói ${g}`);
  add(set, `báo giá xây nhà trọn gói ${g}`);
  add(set, `đơn giá xây nhà ${g}`);
  add(set, `chi phí xây nhà ${g}`);
  add(set, `giá xây nhà trọn gói ${g}`);
  add(set, `nhà thầu xây nhà ${g}`);
}

const mods = [
  "giá rẻ",
  "báo giá",
  "đơn giá",
  "chi phí",
  "uy tín",
  "không phát sinh",
  "bảo hành",
  "2026",
  "phần thô",
  "hoàn thiện",
  "chìa khóa trao tay",
  "minh bạch",
];
for (const m of mods) {
  add(set, `xây nhà trọn gói ${m} tphcm`);
  add(set, `xây nhà phố ${m} tphcm`);
  add(set, `xây biệt thự ${m} tphcm`);
}

const fillers = [
  "uy tín nhất",
  "tốt nhất",
  "chuyên nghiệp",
  "trực tiếp thi công",
  "không bán thầu",
  "cam kết tiến độ",
  "bảo hành kết cấu",
  "miễn phí thiết kế",
  "miễn phí khảo sát",
  "báo giá 24h",
  "vật tư minh bạch",
  "hợp đồng rõ ràng",
  "giám sát kỹ sư",
  "một đầu mối",
];
for (const f of fillers) {
  add(set, `xây nhà trọn gói ${f} tphcm`);
  add(set, `công ty xây nhà ${f} tphcm`);
}

const questions = [
  "xây nhà trọn gói tphcm giá bao nhiêu",
  "xây nhà trọn gói tphcm hết bao nhiêu",
  "xây nhà phố 3 tầng tphcm hết bao nhiêu",
  "xây nhà phố 4 tầng tphcm hết bao nhiêu",
  "xây nhà cấp 4 tphcm hết bao nhiêu",
  "xây nhà 1 trệt 1 lầu tphcm hết bao nhiêu",
  "đơn giá xây nhà trọn gói 2026 bao nhiêu",
  "xây nhà trọn gói có đắt không tphcm",
  "nên chọn công ty xây nhà trọn gói nào tphcm",
  "nhà thầu xây nhà uy tín tphcm",
];
for (const q of questions) add(set, q);

const list = [...set];
if (list.length < 500) {
  throw new Error(`Only ${list.length} unique keywords — expand combinatorics`);
}

const top = list.slice(0, 500);
const header = `# 500 từ khóa SEO — cluster xây nhà trọn gói TP.HCM
# Seed: xây nhà trọn gói tphcm | xây nhà trọn gói giá rẻ tphcm
# Trang xếp hạng chính: /dich-vu/xay-nha-tron-goi
# Landing Ads (không SEO): /xay-nha
# Không tạo 500 bài mỏng; dùng list này cho GSC, internal link, FAQ, title, Ads Phrase.
# ${top.length} dòng — mỗi dòng 1 từ khóa (bỏ dòng comment)

`;

writeFileSync(out, header + top.join("\n") + "\n", "utf8");
console.log(`Wrote ${top.length} / pool ${list.length} → ${out}`);

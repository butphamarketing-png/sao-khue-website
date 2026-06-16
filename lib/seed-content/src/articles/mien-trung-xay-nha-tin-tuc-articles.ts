/**
 * 50 bài tin tức — xây dựng nhà miền Trung & Tây Nguyên (#197–#246).
 */
import { homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { mienTrungXayNhaKeywordCalendar } from "../mien-trung-xay-nha-keyword-calendar";
import { slugImage } from "../site-images";

type SeoArticleShape = {
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  content: string;
  imageAlt?: string;
  imageCaption?: string;
};

type Province =
  | "mien-trung"
  | "gia-lai"
  | "khanh-hoa"
  | "binh-dinh"
  | "quang-ngai"
  | "kon-tum"
  | "quang-nam"
  | "hue";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  province: Province;
  topic: string;
  locality?: string;
};

const HUB_LINKS: Record<Province, { href: string; label: string }[]> = {
  "mien-trung": [
    { href: "/tin-tuc/xay-dung-nha-phu-yen", label: "xây dựng nhà Phú Yên" },
    { href: "/tin-tuc/xay-dung-nha-dak-lak", label: "xây dựng nhà Đắk Lắk" },
    { href: "/tin-tuc/sua-chua-cai-tao-nha-mien-trung", label: "sửa chữa nhà miền Trung" },
  ],
  "gia-lai": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-tron-goi-gia-lai", label: "xây nhà trọn gói Gia Lai" },
    { href: "/tin-tuc/sua-chua-nha-gia-lai", label: "sửa chữa nhà Gia Lai" },
  ],
  "khanh-hoa": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-nha-trang", label: "xây nhà Nha Trang" },
    { href: "/tin-tuc/sua-chua-nha-khanh-hoa", label: "sửa chữa nhà Khánh Hòa" },
  ],
  "binh-dinh": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-quy-nhon", label: "xây nhà Quy Nhơn" },
    { href: "/tin-tuc/sua-chua-nha-binh-dinh", label: "sửa chữa nhà Bình Định" },
  ],
  "quang-ngai": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-quang-ngai", label: "xây nhà Quảng Ngãi" },
    { href: "/tin-tuc/sua-chua-nha-quang-ngai", label: "sửa chữa nhà Quảng Ngãi" },
  ],
  "kon-tum": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-kon-tum", label: "xây nhà Kon Tum" },
    { href: "/tin-tuc/sua-chua-nha-kon-tum", label: "sửa chữa nhà Kon Tum" },
  ],
  "quang-nam": [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-hoi-an-quang-nam", label: "xây nhà Hội An" },
    { href: "/tin-tuc/xay-nha-tron-goi-quang-nam", label: "xây nhà trọn gói Quảng Nam" },
  ],
  hue: [
    { href: "/tin-tuc/xay-dung-nha-mien-trung", label: "xây dựng nhà miền Trung" },
    { href: "/tin-tuc/xay-nha-hue", label: "xây nhà Huế" },
    { href: "/tin-tuc/xay-nha-tron-goi-hue", label: "xây nhà trọn gói Huế" },
  ],
};

const PROVINCE_LABEL: Record<Province, string> = {
  "mien-trung": "miền Trung",
  "gia-lai": "Gia Lai",
  "khanh-hoa": "Khánh Hòa",
  "binh-dinh": "Bình Định",
  "quang-ngai": "Quảng Ngãi",
  "kon-tum": "Kon Tum",
  "quang-nam": "Quảng Nam",
  hue: "Huế",
};

function provinceOf(slug: string): Province {
  if (slug.includes("mien-trung")) return "mien-trung";
  if (slug.includes("gia-lai") || slug.includes("pleiku")) return "gia-lai";
  if (slug.includes("khanh-hoa") || slug.includes("nha-trang")) return "khanh-hoa";
  if (slug.includes("binh-dinh") || slug.includes("quy-nhon")) return "binh-dinh";
  if (slug.includes("quang-ngai")) return "quang-ngai";
  if (slug.includes("kon-tum")) return "kon-tum";
  if (slug.includes("quang-nam") || slug.includes("hoi-an") || slug.includes("tam-ky")) return "quang-nam";
  if (slug.includes("hue")) return "hue";
  return "mien-trung";
}

function detectTopic(slug: string): string {
  if (slug.includes("gia-re")) return "budget";
  if (slug.includes("1-tret-1-lau")) return "floors";
  if (slug.includes("3-tang") || slug.includes("2-tang")) return "floors";
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("cong-ty") || slug.includes("nha-thau")) return "contractor";
  if (slug.includes("chi-phi") || slug.includes("bao-gia")) return "pricing";
  if (slug.includes("mau-nha") || slug.includes("nha-pho")) return "townhouse";
  if (slug.includes("thiet-ke")) return "design";
  if (slug.includes("biet-thu")) return "villa";
  if (slug.includes("mien-trung") && slug.includes("xay-dung-nha")) return "hub";
  return "general";
}

function localityNote(p: Province): string {
  const notes: Record<Province, string> = {
    "mien-trung":
      "duyên hải Nam Trung Bộ (Phú Yên, Khánh Hòa, Bình Định, Quảng Nam) và Tây Nguyên (Gia Lai, Kon Tum, Đắk Lắk)",
    "gia-lai": "cao nguyên Pleiku — mưa lớn theo mùa, cần mái dốc và thoát nước tốt",
    "khanh-hoa": "Nha Trang ven biển — chống muối, chống thấm và chịu gió bão",
    "binh-dinh": "Quy Nhơn — nhu cầu nhà phố và biệt thự ven biển tăng mạnh",
    "quang-ngai": "ven biển và đồi núi — móng cần khảo sát địa chất kỹ",
    "kon-tum": "vùng cao — cách nhiệt, chống ẩm mốc và thoát nước mưa",
    "quang-nam": "Hội An, Tam Kỳ — quy hoạch di sản và khu dân cư mới",
    hue: "cố đô — kiến trúc hài hòa mái ngói, thông gió mùa nóng ẩm",
  };
  return notes[p];
}

function pricingTable(p: Province): { rough: string; full: string } {
  const coastal = ["khanh-hoa", "binh-dinh", "quang-ngai", "quang-nam", "hue", "mien-trung"];
  if (coastal.includes(p)) return { rough: "3,8 – 5,2", full: "5,5 – 7,8" };
  return { rough: "3,5 – 4,8", full: "5,0 – 7,2" };
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const prov = PROVINCE_LABEL[b.province];
  const city =
    b.province === "gia-lai"
      ? "Pleiku"
      : b.province === "khanh-hoa"
        ? "Nha Trang"
        : b.province === "binh-dinh"
          ? "Quy Nhơn"
          : b.province === "quang-nam"
            ? "Hội An / Tam Kỳ"
            : prov;
  const { rough, full } = pricingTable(b.province);

  switch (b.topic) {
    case "hub":
      return `<h2>${kw} — Phạm vi dịch vụ Sao Khuê</h2>
<p>Sao Khuê nhận <strong>thiết kế và thi công xây nhà trọn gói</strong> tại các tỉnh miền Trung — một đầu mối từ khảo sát đến bàn giao.</p>
<h3>Duyên hải</h3>
<p>Phú Yên, Khánh Hòa, Bình Định, Quảng Ngãi, Quảng Nam, Huế — nhà phố, biệt thự ven biển, chống thấm và chịu gió bão.</p>
<h3>Tây Nguyên</h3>
<p>Đắk Lắk, Gia Lai, Kon Tum — nhà phố, nhà vườn, thi công phù hợp khí hậu cao nguyên.</p>`;
    case "contractor":
      return `<h2>${kw} — Chọn đơn vị uy tín</h2>
<ul>
  <li>Hợp đồng rõ ràng, công trình tham chiếu tại ${prov}.</li>
  <li>Giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li><strong>Bảo hành kết cấu 10 năm</strong> — cam kết bằng văn bản.</li>
</ul>`;
    case "pricing":
      return `<h2>Bảng giá — ${kw}</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá (2026)</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>${rough} triệu đ/m² sàn</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>${full} triệu đ/m² sàn</td></tr>
  </tbody>
</table>
<p><a href="/bao-gia">Báo giá online</a> · Hotline 0909 075 668</p>`;
    case "design":
      return `<h2>${kw} — Thiết kế phù hợp khí hậu</h2>
<p>Phối cảnh 3D, bản vẽ thi công, tối ưu thông gió và ánh sáng tự nhiên tại ${city}. Đặc thù: ${localityNote(b.province)}.</p>`;
    case "townhouse":
      return `<h2>${kw} — Mẫu nhà phố tham khảo</h2>
<p>Nhà phố mặt tiền 4–5 m, 1–3 tầng — giếng trời thông gió, phòng ngủ đủ ánh sáng. Sao Khuê thiết kế và thi công trọn gói tại ${prov}.</p>`;
    case "turnkey":
      return `<h2>${kw} — Trọn gói một đầu mối</h2>
<p>Thiết kế, vật tư, thi công, bàn giao tại ${prov} — tiết kiệm thời gian và tránh phát sinh chi phí cho chủ nhà.</p>`;
    case "villa":
      return `<h2>${kw} — Biệt thự chuẩn kỹ thuật</h2>
<p>${b.province === "khanh-hoa" || b.province === "binh-dinh" ? "Ven biển — vật liệu chịu muối, chống thấm kỹ" : "Không gian sân vườn, hồ bơi — thiết kế theo phong cách chủ nhà"} tại ${city}.</p>`;
    case "floors":
      return `<h2>${kw} — Kết cấu an toàn</h2>
<p>Móng, cột, dầm BTCT đúng tiêu chuẩn TCVN — đặc biệt quan trọng tại ${prov} (${localityNote(b.province)}).</p>`;
    case "budget":
      return `<h2>${kw} — Tối ưu ngân sách</h2>
<ul>
  <li>Chọn vật liệu phù hợp — không ép dùng hạng cao khi không cần.</li>
  <li>Thiết kế gọn, tận dụng diện tích — giảm chi phí m² sàn.</li>
  <li>Báo giá từng hạng mục — minh bạch, không phát sinh bất ngờ.</li>
</ul>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại ${city}. Đặc thù khu vực: ${localityNote(b.province)}.</p>`;
  }
}

function notesSection(b: Brief): string {
  const prov = PROVINCE_LABEL[b.province];
  const coastal = ["khanh-hoa", "binh-dinh", "quang-ngai", "quang-nam", "hue"];
  const tips = coastal.includes(b.province)
    ? `<ul>
  <li><strong>Chống thấm:</strong> Mái, sân thượng, tường ngoài — bắt buộc ven biển.</li>
  <li><strong>Chịu bão:</strong> Kết cấu BTCT, cửa sổ chịu gió.</li>
  <li><strong>Giấy phép:</strong> Tuân thủ quy hoạch địa phương tại ${prov}.</li>
</ul>`
    : `<ul>
  <li><strong>Thoát nước mưa:</strong> Mái dốc, cống thoát đủ công suất.</li>
  <li><strong>Cách nhiệt:</strong> Tường, mái — giảm nóng mùa khô.</li>
  <li><strong>Móng:</strong> Khảo sát địa chất trước khi đào tại ${prov}.</li>
</ul>`;
  return `<h2>Lưu ý xây nhà tại ${prov}</h2>${tips}`;
}

function hubLinksHtml(p: Province, excludeSlug: string): string {
  return HUB_LINKS[p]
    .filter((l) => !l.href.endsWith(excludeSlug))
    .slice(0, 3)
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join(", ");
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const prov = PROVINCE_LABEL[b.province];
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);

  return {
    title: b.title,
    excerpt: `${kw}: Sao Khuê thi công uy tín, bảo hành kết cấu 10 năm — 0909 075 668.`,
    metaTitle: `${kw} | Sao Khuê`.slice(0, 65),
    metaDescription:
      `Dịch vụ ${kw} tại ${prov}: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.`.slice(
        0,
        160,
      ),
    metaKeywords: `${kw}, xây nhà ${prov}, xây nhà trọn gói ${prov}, công ty xây dựng ${prov}, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Chuyên nghiệp tại ${prov}</h2>
<p><strong>${kw}</strong> là nhu cầu thực tế khi nhiều gia đình tại <strong>${prov}</strong> chọn xây nhà mới hoặc đầu tư bất động sản. Đặc thù khu vực: ${localityNote(b.province)}.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (TP.HCM) triển khai <strong>${kw}</strong> — khảo sát miễn phí, báo giá minh bạch theo hạng mục, <strong>bảo hành kết cấu 10 năm</strong>.</p>

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát &amp; tư vấn</strong> — địa hình, quy hoạch, nhu cầu gia đình.</li>
  <li><strong>Thiết kế &amp; báo giá</strong> — bản vẽ, dự toán chi tiết từng hạng mục.</li>
  <li><strong>Thi công</strong> — giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li><strong>Nghiệm thu &amp; bảo hành</strong> — bàn giao, cam kết kết cấu 10 năm.</li>
</ol>
<p>Tham khảo: ${hubLinksHtml(b.province, b.slug)}.</p>

${notesSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = mienTrungXayNhaKeywordCalendar.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    province: provinceOf(slug),
    topic: detectTopic(slug),
  };
});

export const mienTrungXayNhaArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const mienTrungXayNhaSlugs = briefs.map((b) => b.slug);

export function getMienTrungXayNhaArticle(slug: string): SeoArticleShape | undefined {
  return mienTrungXayNhaArticlesBySlug[slug];
}

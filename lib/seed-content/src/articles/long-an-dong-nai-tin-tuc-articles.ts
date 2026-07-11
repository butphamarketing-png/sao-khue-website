/**
 * 30 bài tin tức SEO — Long An & Đồng Nai (#91–#120).
 */
import { homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { longAnDongNaiKeywordCalendar } from "../long-an-dong-nai-keyword-calendar";
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

type Region = "long-an" | "dong-nai";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  region: Region;
  topic: string;
};

const LONG_AN_HUB = [
  "/tin-tuc/thiet-ke-nha-dep-long-an",
  "/tin-tuc/xay-dung-nha-long-an",
  "/tin-tuc/bao-gia-xay-nha-phan-tho-long-an",
  "/tin-tuc/mau-nha-ong-dep-long-an",
];

const DONG_NAI_HUB = [
  "/tin-tuc/xay-dung-nha-dong-nai",
  "/tin-tuc/thiet-ke-thi-cong-nha-pho-dong-nai",
  "/dich-vu/xay-nha-tron-goi-dong-nai",
];

function regionOf(slug: string): Region {
  if (slug.includes("long-an") || slug.includes("tan-an") || slug.includes("ben-luc") || slug.includes("can-giuoc"))
    return "long-an";
  return "dong-nai";
}

function detectTopic(slug: string): string {
  if (slug.includes("sua-chua")) return "renovation";
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("cong-ty") || slug.includes("nha-thau")) return "contractor";
  if (slug.includes("chi-phi") || slug.includes("bao-gia")) return "pricing";
  if (slug.includes("mau-nha")) return "sample";
  if (slug.includes("thiet-ke")) return "design";
  if (slug.includes("phan-tho")) return "rough";
  if (slug.includes("hoan-thien")) return "finish";
  if (slug.includes("biet-thu")) return "villa";
  if (slug.includes("2-tang")) return "floors";
  if (
    slug.includes("tan-an") ||
    slug.includes("ben-luc") ||
    slug.includes("can-giuoc") ||
    slug.includes("bien-hoa") ||
    slug.includes("long-thanh") ||
    slug.includes("nhon-trach")
  )
    return "locality";
  if (slug.includes("nha-pho") || slug.includes("thi-cong-nha-pho")) return "townhouse";
  if (slug.includes("xay-dung-nha")) return "general";
  return "general";
}

function regionLabel(r: Region): string {
  return r === "long-an" ? "Long An" : "Đồng Nai";
}

function regionCity(r: Region): string {
  return r === "long-an" ? "Tân An" : "Biên Hòa";
}

function hubLinks(r: Region): string {
  const hubs = r === "long-an" ? LONG_AN_HUB : DONG_NAI_HUB;
  const labels =
    r === "long-an"
      ? ["xây dựng nhà Long An", "báo giá phần thô Long An", "mẫu nhà ống Long An"]
      : ["xây dựng nhà Đồng Nai", "thi công nhà phố Đồng Nai", "xây nhà trọn gói Đồng Nai"];
  return hubs.map((h, i) => `<a href="${h}">${labels[i]}</a>`).join(", ");
}

function introParagraph(b: Brief): string {
  const city = regionCity(b.region);
  const note =
    b.region === "long-an"
      ? "cửa ngõ phía Tây TP.HCM, giá đất hợp lý và nhiều khu dân cư mới tại Bến Lức, Cần Giuộc, Đức Hòa"
      : "vệ tinh công nghiệp phía Đông TP.HCM, hạ tầng mạnh quanh Biên Hòa, Long Thành, Nhơn Trạch";
  return `<p><strong>${b.focusKeyword}</strong> là nhu cầu lớn khi nhiều gia đình chọn định cư tại <strong>${regionLabel(b.region)}</strong> — ${note}. Khu vực <strong>${city}</strong> và các huyện lân cận đang phát triển nhanh, đòi hỏi đơn vị thi công am hiểu móng đất yếu, thoát nước và quy hoạch địa phương.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (TP.HCM) triển khai <strong>${b.focusKeyword}</strong> từ khảo sát, thiết kế, thi công đến bàn giao — <strong>bảo hành kết cấu 10 năm</strong>, báo giá minh bạch. Hotline <strong>0909 075 668</strong>.</p>`;
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const r = b.region;
  const city = regionCity(r);
  const roughPrice = r === "long-an" ? "3,4 – 4,8" : "3,5 – 5";
  const fullPrice = r === "long-an" ? "5 – 6,5" : "5,2 – 7";

  switch (b.topic) {
    case "contractor":
      return `<h2>${kw} — Tiêu chí chọn nhà thầu</h2>
<ul>
  <li>Hợp đồng rõ ràng, tiến độ thanh toán theo giai đoạn.</li>
  <li>Công trình tham chiếu tại ${regionLabel(r)} — ảnh nghiệm thu thực tế.</li>
  <li>Giám sát móng, cốt thép, chống thấm trước khi đổ tiếp.</li>
  <li>Bảo hành kết cấu 10 năm bằng văn bản.</li>
</ul>`;
    case "pricing":
      return `<h2>Bảng giá tham khảo — ${kw}</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá (2026)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>${roughPrice} triệu đ/m² sàn</td><td>Móng, khung, mái</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>${fullPrice} triệu đ/m² sàn</td><td>Hoàn thiện cơ bản</td></tr>
    <tr><td>Trọn gói cao cấp</td><td>7 – 9,5 triệu đ/m² sàn</td><td>Vật liệu tốt</td></tr>
  </tbody>
</table>
<p>Giá tại ${regionLabel(r)} thường thấp hơn nội thành TP.HCM 5–12%. Dùng <a href="/bao-gia">báo giá online</a> hoặc gọi hotline.</p>`;
    case "design":
    case "sample":
      return `<h2>${kw} — Thiết kế tối ưu công năng</h2>
<p>Sao Khuê tư vấn mặt bằng, phối cảnh 3D — phù hợp nhà phố ${city}, giếng trời thông gió, tận dụng sân sau.</p>
<ul>
  <li>Phong cách hiện đại, tối giản hoặc Indochine.</li>
  <li>Hồ sơ 2D/3D, dự toán sơ bộ, tư vấn giấy phép.</li>
</ul>`;
    case "rough":
      return `<h2>${kw} — Phạm vi phần thô</h2>
<p>Móng, khung BTCT, mái — chưa hoàn thiện. Khảo sát địa chất ${r === "long-an" ? "đất yếu ven sông" : "khu đô thị mới"} trước khi đào móng.</p>`;
    case "finish":
      return `<h2>${kw} — Hoàn thiện sau thô</h2>
<ul>
  <li>Trát, sơn, lát gạch, trần, cửa.</li>
  <li>Điện nước, thiết bị vệ sinh.</li>
  <li>Nội thất tùy chọn theo ngân sách.</li>
</ul>`;
    case "villa":
      return `<h2>${kw} — Biệt thự vùng ven</h2>
<p>Lô đất rộng tại ${regionLabel(r)} — sân vườn, hồ bơi (nếu có), thiết kế 2D/3D trước khi thi công.</p>`;
    case "floors":
      return `<h2>${kw} — Nhà 2 tầng phổ biến</h2>
<p>Diện tích 60–100 m²/tầng, thời gian thi công 4–6 tháng. Gia cố móng kỹ tại ${city}.</p>`;
    case "locality":
      return `<h2>${kw} — Kinh nghiệm địa phương</h2>
<p>Sao Khuê am hiểu quy hoạch và giấy phép xây dựng khu vực này — khảo sát tận nơi, báo giá theo hạng mục.</p>`;
    case "townhouse":
      return `<h2>${kw} — Nhà phố mặt tiền 4–5 m</h2>
<p>Tối ưu giếng trời, cầu thang, chống thấm sân thượng — chuẩn nhà phố ${regionLabel(r)}.</p>`;
    case "renovation":
      return `<h2>${kw} — Sửa chữa trọn gói</h2>
<p>Chống thấm, gia cố, thay điện nước, cải tạo nội thất nhà cũ tại ${regionLabel(r)}.</p>`;
    case "turnkey":
      return `<h2>${kw} — Một đầu mối</h2>
<p>Thiết kế + vật tư + thi công + bàn giao. Tiết kiệm thời gian cho chủ nhà ở ${city} và các huyện lân cận.</p>`;
    default:
      return `<h2>${kw} — Dịch vụ Sao Khuê</h2>
<p>Trọn gói từ khảo sát đến bàn giao tại ${regionLabel(r)}. Liên kết vùng: TP.HCM — Bình Dương — <strong>${regionLabel(r)}</strong>.</p>`;
  }
}

function notesSection(b: Brief): string {
  const tips =
    b.region === "long-an"
      ? `<ul>
  <li><strong>Móng đất yếu:</strong> Khảo sát địa chất — vùng ven sông Vàm Cỏ.</li>
  <li><strong>Thoát nước:</strong> Cốt nền và mái dốc đủ khi mưa lớn.</li>
  <li><strong>Giấy phép:</strong> Mỗi huyện có quy định tầng cao, lộ giới riêng.</li>
</ul>`
      : `<ul>
  <li><strong>Khu công nghiệp:</strong> Lưu ý rung, bụi — thiết kế cửa sổ kín hợp lý.</li>
  <li><strong>Hạ tầng Long Thành:</strong> Cơ hội đầu tư nhà ở tăng — chọn móng vững.</li>
  <li><strong>Chống thấm:</strong> Mùa mưa miền Nam — mái và sân thượng cần kỹ thuật tốt.</li>
</ul>`;
  return `<h2>Lưu ý xây nhà tại ${regionLabel(b.region)}</h2>${tips}`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const img1 = slugImage(b.slug, 0);
  const img2 = slugImage(b.slug, 1);
  const img3 = slugImage(b.slug, 2);
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);

  return {
    title: b.title,
    excerpt: `${kw}: Sao Khuê thiết kế + thi công trọn gói tại ${regionLabel(b.region)}. Bảo hành 10 năm — 0909 075 668.`,
    metaTitle: `${kw} | Sao Khuê`.slice(0, 65),
    metaDescription: `Dịch vụ ${kw}: khảo sát miễn phí, báo giá rõ ràng, bảo hành kết cấu 10 năm. Gọi 0909 075 668.`.slice(
      0,
      160,
    ),
    metaKeywords: `${kw}, xây nhà ${regionLabel(b.region)}, xây nhà trọn gói ${regionLabel(b.region)}, ${regionCity(b.region)}, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Giải pháp chuyên nghiệp tại ${regionLabel(b.region)}</h2>
${introParagraph(b)}

${imageFigure(img1, kw, 1)}

${topicSection(b)}

${imageFigure(img2, kw, 2)}

<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí tại ${regionLabel(b.region)}.</li>
  <li>Thiết kế / dự toán chi tiết.</li>
  <li>Ký hợp đồng — tiến độ thanh toán rõ ràng.</li>
  <li>Thi công có giám sát, nghiệm thu từng hạng mục.</li>
  <li>Bàn giao &amp; bảo hành kết cấu 10 năm.</li>
</ol>
<p>Tham khảo: ${hubLinks(b.region)}.</p>

${notesSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(img3, kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = longAnDongNaiKeywordCalendar.map((item) => ({
  slug: item.slug!,
  title: item.title,
  focusKeyword: item.keyword,
  region: regionOf(item.slug!),
  topic: detectTopic(item.slug!),
}));

export const longAnDongNaiTinTucArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const longAnDongNaiTinTucSlugs = briefs.map((b) => b.slug);

export function getLongAnDongNaiArticle(slug: string): SeoArticleShape | undefined {
  return longAnDongNaiTinTucArticlesBySlug[slug];
}

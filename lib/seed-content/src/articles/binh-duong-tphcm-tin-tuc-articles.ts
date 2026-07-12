/**
 * 50 bài tin tức SEO — Bình Dương & TP.HCM (#121–#170).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { binhDuongTphcmKeywordCalendar } from "../binh-duong-tphcm-keyword-calendar";
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

type Region = "binh-duong" | "tphcm";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  region: Region;
  topic: string;
  districtLabel?: string;
};

const BINH_DUONG_HUB = [
  "/dich-vu/xay-nha-tron-goi-binh-duong",
  "/tin-tuc/mau-nha-pho-2-tang-binh-duong",
  "/cong-trinh/xay-nha-pho-thuan-an",
];

const TPHCM_HUB = [
  "/dich-vu/xay-nha-tron-goi-tphcm",
  "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "/tin-tuc/sua-chua-cai-tao-nha-tphcm",
];

function regionOf(slug: string): Region {
  if (slug.includes("binh-duong")) return "binh-duong";
  return "tphcm";
}

function detectTopic(slug: string): string {
  if (slug.includes("sua-chua-cai-tao")) return "renovation";
  if (slug.includes("cai-tao")) return "renovation";
  if (slug.includes("nang-tang")) return "extend";
  if (slug.includes("gia-re")) return "budget";
  if (slug.includes("shophouse")) return "shophouse";
  if (slug.includes("nha-ong")) return "rowhouse";
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("cong-ty") || slug.includes("nha-thau")) return "contractor";
  if (slug.includes("chi-phi") || slug.includes("bao-gia")) return "pricing";
  if (slug.includes("mau-nha")) return "sample";
  if (slug.includes("thiet-ke")) return "design";
  if (slug.includes("phan-tho")) return "rough";
  if (slug.includes("hoan-thien")) return "finish";
  if (slug.includes("biet-thu")) return "villa";
  if (slug.includes("2-tang") || slug.includes("3-tang")) return "floors";
  if (
    slug.includes("thu-dau-mot") ||
    slug.includes("di-an") ||
    slug.includes("tan-uyen") ||
    slug.includes("ben-cat") ||
    slug.includes("bau-bang")
  )
    return "locality";
  if (slug.includes("nha-pho")) return "townhouse";
  if (slug.includes("xay-dung-nha")) return "general";
  return "general";
}

function districtFromSlug(slug: string): string | undefined {
  const m = slug.match(/quan-(\d+)|binh-tan|phu-nhuan|tan-binh|nha-be|cu-chi|can-gio/);
  if (!m) return undefined;
  const map: Record<string, string> = {
    "binh-tan": "Quận Bình Tân",
    "phu-nhuan": "Quận Phú Nhuận",
    "tan-binh": "Quận Tân Bình",
    "nha-be": "Huyện Nhà Bè",
    "cu-chi": "Huyện Củ Chi",
    "can-gio": "Huyện Cần Giờ",
  };
  if (m[1]) return `Quận ${m[1]}`;
  return map[m[0]];
}

function regionLabel(r: Region): string {
  return r === "binh-duong" ? "Bình Dương" : "TP.HCM";
}

function regionCity(r: Region): string {
  return r === "binh-duong" ? "Thủ Dầu Một" : "TP.HCM";
}

function hubLinks(r: Region): string {
  const hubs = r === "binh-duong" ? BINH_DUONG_HUB : TPHCM_HUB;
  const labels =
    r === "binh-duong"
      ? ["xây nhà trọn gói Bình Dương", "nhà phố 2 tầng Bình Dương", "xây nhà Thuận An"]
      : ["xây nhà trọn gói TP.HCM", "công ty xây dựng nhà phố TP.HCM", "sửa chữa cải tạo nhà TP.HCM"];
  return hubs.map((h, i) => `<a href="${h}">${labels[i]}</a>`).join(", ");
}

function introParagraph(b: Brief): string {
  const loc = b.districtLabel ?? regionLabel(b.region);
  const note =
    b.region === "binh-duong"
      ? "tỉnh giáp ranh TP.HCM, hạ tầng khu công nghiệp mạnh — Thủ Dầu Một, Dĩ An, Thuận An, Tân Uyên"
      : "trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ";
  return `<p><strong>${b.focusKeyword}</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>${loc}</strong>. ${regionLabel(b.region)} là ${note}.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>${b.focusKeyword}</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>`;
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const r = b.region;
  const city = b.districtLabel ?? regionCity(r);
  const rough = r === "binh-duong" ? "3,5 – 5" : "3,8 – 5,5";
  const full = r === "binh-duong" ? "5,2 – 7,5" : "5,5 – 8";

  switch (b.topic) {
    case "renovation":
      return `<h2>${kw} — Dịch vụ tại ${city}</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>`;
    case "contractor":
      return `<h2>${kw} — Chọn đơn vị uy tín</h2>
<ul>
  <li>Hợp đồng rõ ràng, công trình tham chiếu tại ${regionLabel(r)}.</li>
  <li>Giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
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
    case "sample":
    case "townhouse":
      return `<h2>${kw} — Thiết kế &amp; thi công</h2>
<p>Nhà phố mặt tiền 4–5 m, giếng trời thông gió — chuẩn ${city}. Phối cảnh 3D trước khi thi công.</p>`;
    case "turnkey":
      return `<h2>${kw} — Trọn gói một đầu mối</h2>
<p>Thiết kế, vật tư, thi công, bàn giao tại ${regionLabel(r)} — tiết kiệm thời gian chủ nhà.</p>`;
    case "locality":
      return `<h2>${kw} — Đặc thù địa phương</h2>
<p>Sao Khuê am hiểu quy hoạch và giấy phép xây dựng khu vực này.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại ${regionLabel(r)}.</p>`;
  }
}

function notesSection(b: Brief): string {
  const tips =
    b.region === "binh-duong"
      ? `<ul>
  <li><strong>KCN:</strong> Nhiều khu công nghiệp — chọn vật liệu bền, thông gió tốt.</li>
  <li><strong>Móng:</strong> Khảo sát địa chất trước khi đào.</li>
  <li><strong>Giá đất:</strong> Lợi thế so với nội thành TP.HCM.</li>
</ul>`
      : `<ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>`;
  return `<h2>Lưu ý tại ${b.districtLabel ?? regionLabel(b.region)}</h2>${tips}`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic: b.topic, location: regionLabel(b.region) }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic: b.topic }),
    metaDescription: buildCtrMetaDescription(kw, {
      slug: b.slug,
      batchTopic: b.topic,
      location: regionLabel(b.region),
    }),
    metaKeywords: `${kw}, xây nhà ${regionLabel(b.region)}, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Chuyên nghiệp tại ${b.districtLabel ?? regionLabel(b.region)}</h2>
${introParagraph(b)}

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw}</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: ${hubLinks(b.region)}.</p>

${notesSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = binhDuongTphcmKeywordCalendar.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    region: regionOf(slug),
    topic: detectTopic(slug),
    districtLabel: districtFromSlug(slug),
  };
});

export const binhDuongTphcmTinTucArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const binhDuongTphcmTinTucSlugs = briefs.map((b) => b.slug);

export function getBinhDuongTphcmArticle(slug: string): SeoArticleShape | undefined {
  return binhDuongTphcmTinTucArticlesBySlug[slug];
}

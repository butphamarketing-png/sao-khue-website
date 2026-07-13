/**
 * 100 bài tin tức SEO — batch 6 TP.HCM (#397–#496).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { tphcmKeywordCalendarBatch6 } from "../tphcm-keyword-calendar-batch6";
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

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  topic: string;
  districtLabel?: string;
};

const TPHCM_HUB = [
  "/dich-vu/xay-nha-tron-goi-tphcm",
  "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "/tin-tuc/sua-chua-cai-tao-nha-tphcm",
];

function detectTopic(slug: string): string {
  if (
    slug.includes("sua-chua") ||
    slug.includes("sua-san") ||
    slug.includes("sua-ong") ||
    slug.includes("son-nha") ||
    slug.includes("lat-gach") ||
    slug.includes("thay-mai") ||
    slug.includes("chong-tham")
  )
    return "repair";
  if (
    slug.includes("cai-tao") ||
    slug.includes("nang-tang") ||
    slug.includes("mo-rong") ||
    slug.includes("tang-lung") ||
    slug.includes("tum-san") ||
    slug.includes("phong-tho")
  )
    return "renovation";
  if (slug.includes("chi-phi") || slug.includes("bao-gia") || slug.includes("don-gia")) return "pricing";
  if (
    slug.includes("thiet-ke") ||
    slug.includes("phoi-canh") ||
    slug.includes("noi-that")
  )
    return "design";
  if (slug.includes("phan-mong") || slug.includes("phan-tho")) return "rough";
  if (slug.includes("container") || slug.includes("tien-che")) return "commercial";
  if (slug.includes("trong-hem") || slug.includes("pho-hep") || slug.includes("dat-hep")) return "rowhouse";
  if (
    slug.includes("6-tang") ||
    slug.includes("5-tang") ||
    slug.includes("1-tret") ||
    slug.includes("mini") ||
    slug.includes("lien-ke") ||
    slug.includes("vuon")
  )
    return "floors";
  if (
    slug.includes("cong-ty") ||
    slug.includes("don-vi") ||
    slug.includes("nha-thau") ||
    slug.includes("giam-sat") ||
    slug.includes("khao-sat")
  )
    return "contractor";
  if (slug.includes("gia-re") || slug.includes("chat-luong") || slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("giay-phep") || slug.includes("xin-phep")) return "legal";
  if (
    slug.includes("quan-") ||
    slug.includes("binh-tan") ||
    slug.includes("tan-binh") ||
    slug.includes("phu-nhuan") ||
    slug.includes("hoc-mon") ||
    slug.includes("binh-chanh") ||
    slug.includes("cu-chi") ||
    slug.includes("can-gio") ||
    slug.includes("thu-duc") ||
    slug.includes("an-lac") ||
    slug.includes("an-phu") ||
    slug.includes("phu-my-hung") ||
    slug.includes("thao-dien") ||
    slug.includes("linh-trung") ||
    slug.includes("hiep-thanh") ||
    slug.includes("trung-my-tay") ||
    slug.includes("binh-tri-dong") ||
    slug.includes("binh-hung") ||
    slug.includes("tan-nhut") ||
    slug.includes("phuoc-long") ||
    slug.includes("long-phuoc") ||
    slug.includes("hiep-binh") ||
    slug.includes("tan-hung-thuan")
  )
    return "district";
  return "general";
}

function districtFromSlug(slug: string): string | undefined {
  const map: Record<string, string> = {
    "an-lac-binh-tan": "An Lạc, Quận Bình Tân",
    "binh-hung-hoc-mon": "Bình Hưng, Hóc Môn",
    "tan-nhut-binh-chanh": "Tân Nhựt, Bình Chánh",
    "long-phuoc-thu-duc": "Long Phước, Thủ Đức",
    "hiep-binh-chanh-thu-duc": "Hiệp Bình Chánh, Thủ Đức",
    "phuoc-long-b-thu-duc": "Phước Long B, Thủ Đức",
    "an-phu-quan-2": "An Phú, Quận 2",
    "phu-my-hung-quan-7": "Phú Mỹ Hưng, Quận 7",
    "thao-dien-thu-duc": "Thảo Điền, Thủ Đức",
    "linh-trung-thu-duc": "Linh Trung, Thủ Đức",
    "tan-hung-thuan-quan-12": "Tân Hưng Thuận, Quận 12",
    "binh-tri-dong-binh-tan": "Bình Trị Đông, Bình Tân",
    "hiep-thanh-quan-12": "Hiệp Thành, Quận 12",
    "trung-my-tay-quan-12": "Trung Mỹ Tây, Quận 12",
    "binh-tan": "Quận Bình Tân",
    "tan-binh": "Quận Tân Bình",
    "phu-nhuan": "Quận Phú Nhuận",
    "hoc-mon": "Huyện Hóc Môn",
    "binh-chanh": "Huyện Bình Chánh",
    "cu-chi": "Huyện Củ Chi",
    "can-gio": "Huyện Cần Giờ",
  };
  for (const [key, label] of Object.entries(map)) {
    if (slug.includes(key)) return label;
  }
  const m = slug.match(/quan-(\d+)/);
  if (m) return `Quận ${m[1]}`;
  return undefined;
}

function hubLinks(): string {
  const labels = [
    "xây nhà trọn gói TP.HCM",
    "công ty xây dựng nhà phố TP.HCM",
    "sửa chữa cải tạo nhà TP.HCM",
  ];
  return TPHCM_HUB.map((h, i) => `<a href="${h}">${labels[i]}</a>`).join(", ");
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.districtLabel ?? "TP.HCM";

  switch (b.topic) {
    case "repair":
      return `<h2>${kw} — Dịch vụ tại ${loc}</h2>
<ul>
  <li>Khảo sát hiện trạng miễn phí, chẩn đoán nguyên nhân gốc.</li>
  <li>Thi công đúng kỹ thuật, vật liệu rõ nguồn gốc.</li>
  <li>Bảo hành hạng mục sửa chữa theo hợp đồng.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>`;
    case "renovation":
      return `<h2>${kw} — Nâng cấp không gian sống</h2>
<ul>
  <li>Phối cảnh 3D trước khi thi công — giảm phát sinh.</li>
  <li>Gia cố kết cấu khi nâng tầng / mở rộng.</li>
  <li>Thanh toán theo tiến độ nghiệm thu từng hạng mục.</li>
</ul>
<p>Tham khảo <a href="/dich-vu/nang-tang-nha-pho">nâng tầng nhà phố</a> và <a href="/dich-vu/cai-tao-nha-cu">cải tạo nhà cũ</a>.</p>`;
    case "pricing":
      return `<h2>Bảng giá — ${kw}</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá tham khảo (2026)</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,8 – 5,5 triệu đ/m² sàn</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>5,5 – 8 triệu đ/m² sàn</td></tr>
    <tr><td>Sửa chữa / cải tạo</td><td>1,5 – 12 triệu đ/m² (tùy hạng mục)</td></tr>
  </tbody>
</table>
<p><a href="/bao-gia">Báo giá online</a> · Hotline 0909 075 668</p>`;
    case "design":
      return `<h2>${kw} — Thiết kế chuyên nghiệp</h2>
<ul>
  <li>Bản vẽ kiến trúc + kết cấu + điện nước đồng bộ.</li>
  <li>Phối cảnh 3D giúp chủ nhà hình dung trước khi xây.</li>
  <li>Tối ưu thông gió, ánh sáng cho nhà phố hẹp tại ${loc}.</li>
</ul>`;
    case "legal":
      return `<h2>${kw} — Hỗ trợ hồ sơ</h2>
<p>Sao Khuê hỗ trợ tra cứu quy hoạch, hoàn thiện hồ sơ xin phép xây dựng / nâng tầng tại các quận huyện TP.HCM — tiết kiệm thời gian chủ nhà.</p>`;
    case "rowhouse":
      return `<h2>${kw} — Đặc thù nhà phố / hẻm Sài Gòn</h2>
<p>Mặt tiền hẹp, giếng trời thông gió, kế hoạch vận chuyển vật tư trong hẻm — chuẩn ${loc}. Sao Khuê tối ưu diện tích sử dụng từng mét vuông.</p>`;
    case "floors":
      return `<h2>${kw} — Quy mô và chi phí</h2>
<ul>
  <li>Khảo sát móng &amp; kết cấu trước khi chốt số tầng.</li>
  <li>Giám sát cốt thép, chống thấm từng sàn.</li>
  <li>Thời gian thi công phụ thuộc diện tích và gói hoàn thiện.</li>
</ul>`;
    case "contractor":
    case "turnkey":
      return `<h2>${kw} — Chọn đơn vị uy tín</h2>
<ul>
  <li>Hợp đồng rõ ràng, công trình tham chiếu tại TP.HCM.</li>
  <li>Giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
</ul>`;
    case "district":
      return `<h2>${kw} — Đặc thù địa phương</h2>
<p>Sao Khuê (Q. Bình Thạnh) am hiểu quy hoạch, giấy phép và điều kiện thi công khu vực <strong>${loc}</strong> — khảo sát thực địa trước khi báo giá cố định.</p>`;
    case "commercial":
      return `<h2>${kw} — Giải pháp linh hoạt</h2>
<p>Phù hợp nhu cầu kinh doanh, cho thuê hoặc xây nhanh tại ${loc}. Sao Khuê tư vấn kết cấu và chi phí theo ngân sách thực tế.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại <strong>${loc}</strong>. Bảo hành kết cấu 10 năm.</p>`;
  }
}

function notesSection(b: Brief): string {
  const loc = b.districtLabel ?? "TP.HCM";
  return `<h2>Lưu ý khi triển khai tại ${loc}</h2>
<ul>
  <li><strong>Mật độ cao:</strong> Tối ưu thông gió, ánh sáng nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư, hạn chế ồn ban đêm.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC, mái — bắt buộc tại TP.HCM.</li>
  <li><strong>Nhà hẻm:</strong> Lên kế hoạch vật tư, xe tải và thời gian thi công sớm.</li>
</ul>`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const loc = b.districtLabel ?? "TP.HCM";
  const intent = mapBatchTopicToIntent(b.topic, b.slug);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic: b.topic }),
    metaDescription: buildCtrMetaDescription(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaKeywords: `${kw}, xây nhà TP.HCM, sửa nhà TP.HCM, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Chuyên nghiệp tại ${loc}</h2>
<p><strong>${kw}</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>${loc}</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ liên tục.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>${kw}</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${articleWhenNeededBlock(intent, kw, loc)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw}</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: ${hubLinks()}.</p>

${notesSection(b)}

${articlePricingTableBlock(intent, loc, b.slug, kw)}

${articleMistakesBlock(intent, kw, loc)}

${homeLinkParagraph()}

${buildIntentFaq(intent, kw, loc)}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = tphcmKeywordCalendarBatch6.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    topic: detectTopic(slug),
    districtLabel: districtFromSlug(slug),
  };
});

export const tphcmBatch6ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const tphcmBatch6Slugs = briefs.map((b) => b.slug);

export function getTphcmBatch6Article(slug: string): SeoArticleShape | undefined {
  return tphcmBatch6ArticlesBySlug[slug];
}

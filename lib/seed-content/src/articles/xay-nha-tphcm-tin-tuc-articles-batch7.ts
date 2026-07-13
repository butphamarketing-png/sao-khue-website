/**
 * 100 bài xây nhà TP.HCM — batch #12 (#597–#696).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { xayNhaTphcmKeywordCalendarBatch7 } from "../xay-nha-tphcm-keyword-calendar-batch7";
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
  "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
];

function detectTopic(slug: string): string {
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("nha-pho") || slug.includes("mat-tien") || slug.includes("3-mat-tien")) return "townhouse";
  if (slug.includes("phuong-")) return "district";
  if (slug.includes("100m2") || slug.includes("120m2") || slug.includes("150m2") || slug.includes("200m2")) return "floors";
  if (slug.includes("4x15") || slug.includes("5x20") || slug.includes("4x20") || slug.includes("3x10")) return "rowhouse";
  if (slug.includes("7-tang") || slug.includes("8-tang") || slug.includes("cap-3") || slug.includes("2-tang")) return "floors";
  if (slug.includes("biet-thu") || slug.includes("ho-boi") || slug.includes("thang-may")) return "villa";
  if (slug.includes("thuong-mai") || slug.includes("kdc") || slug.includes("cho-thue")) return "commercial";
  if (slug.includes("gia-re") || slug.includes("tiet-kiem") || slug.includes("nhanh")) return "budget";
  return "general";
}

function districtFromSlug(slug: string): string | undefined {
  const phuongMap: Record<string, string> = {
    "phuong-25-binh-thanh": "Phường 25, Bình Thạnh",
    "phuong-13-binh-thanh": "Phường 13, Bình Thạnh",
    "phuong-26-binh-thanh": "Phường 26, Bình Thạnh",
    "phuong-15-tan-binh": "Phường 15, Tân Bình",
    "phuong-4-tan-binh": "Phường 4, Tân Bình",
    "phuong-7-go-vap": "Phường 7, Gò Vấp",
    "phuong-10-go-vap": "Phường 10, Gò Vấp",
    "phuong-14-quan-10": "Phường 14, Quận 10",
    "phuong-15-quan-10": "Phường 15, Quận 10",
    "phuong-tan-hung-quan-7": "Phường Tân Hưng, Quận 7",
    "phuong-tan-phong-quan-7": "Phường Tân Phong, Quận 7",
    "phuong-an-khanh-quan-2": "Phường An Khánh, Quận 2",
    "phuong-thao-dien-quan-2": "Phường Thảo Điền, Quận 2",
    "phuong-linh-trung-thu-duc": "Phường Linh Trung, Thủ Đức",
    "phuong-hiep-binh-thu-duc": "Phường Hiệp Bình, Thủ Đức",
    "phuong-long-phuoc-thu-duc": "Phường Long Phước, Thủ Đức",
    "phuong-binh-hung-hoa-binh-tan": "Phường Bình Hưng Hòa, Bình Tân",
    "phuong-an-lac-binh-tan": "Phường An Lạc, Bình Tân",
    "phuong-tan-hung-thuan-quan-12": "Phường Tân Hưng Thuận, Quận 12",
    "phuong-hiep-thanh-quan-12": "Phường Hiệp Thành, Quận 12",
    "phuong-tan-son-nhi-tan-phu": "Phường Tân Sơn Nhì, Tân Phú",
    "phuong-phu-thanh-tan-phu": "Phường Phú Thạnh, Tân Phú",
    "phuong-5-quan-8": "Phường 5, Quận 8",
    "phuong-11-quan-8": "Phường 11, Quận 8",
  };
  for (const [key, label] of Object.entries(phuongMap)) {
    if (slug.includes(key)) return label;
  }
  const map: Record<string, string> = {
    "binh-thanh": "Quận Bình Thạnh",
    "thu-duc": "TP. Thủ Đức",
    "go-vap": "Quận Gò Vấp",
    "tan-binh": "Quận Tân Bình",
    "binh-tan": "Quận Bình Tân",
    "tan-phu": "Quận Tân Phú",
    "phu-nhuan": "Quận Phú Nhuận",
    "hoc-mon": "Huyện Hóc Môn",
    "binh-chanh": "Huyện Bình Chánh",
    "nha-be": "Huyện Nhà Bè",
    "cu-chi": "Huyện Củ Chi",
    "quan-9": "Quận 9",
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
    "báo giá xây nhà trọn gói TP.HCM",
  ];
  return TPHCM_HUB.map((h, i) => `<a href="${h}">${labels[i]}</a>`).join(", ");
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.districtLabel ?? "TP.HCM";

  switch (b.topic) {
    case "turnkey":
      return `<h2>${kw} — Trọn gói một đầu mối</h2>
<ul>
  <li>Thiết kế, thi công, hoàn thiện — báo giá cố định theo hợp đồng.</li>
  <li>Giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li>Bảo hành kết cấu 10 năm tại ${loc}.</li>
</ul>`;
    case "townhouse":
    case "rowhouse":
      return `<h2>${kw} — Nhà phố chuẩn Sài Gòn</h2>
<p>Mặt tiền hẹp, giếng trời thông gió, tối ưu ánh sáng — chuẩn ${loc}. Sao Khuê khảo sát địa hình và quy hoạch trước khi báo giá.</p>`;
    case "floors":
      return `<h2>${kw} — Quy mô và chi phí</h2>
<ul>
  <li>Khảo sát móng &amp; kết cấu phù hợp số tầng / diện tích.</li>
  <li>Giám sát cốt thép, chống thấm từng sàn.</li>
  <li>Bàn giao đúng tiến độ, nghiệm thu từng hạng mục.</li>
</ul>`;
    case "villa":
      return `<h2>${kw} — Thi công cao cấp</h2>
<p>Kết cấu chịu tải, thiết kế 2D/3D, hoàn thiện linh hoạt theo ngân sách tại ${loc}.</p>`;
    case "commercial":
      return `<h2>${kw} — Giải pháp kinh doanh</h2>
<p>Phù hợp shophouse, nhà trọ, khu dân cư — tối ưu công năng và dòng tiền cho chủ đầu tư tại ${loc}.</p>`;
    case "budget":
      return `<h2>${kw} — Tiết kiệm đúng chỗ</h2>
<p>Sao Khuê tư vấn gói vật liệu và hạng mục phù hợp ngân sách — không cắt giảm kết cấu, chống thấm, an toàn PCCC.</p>`;
    case "district":
      return `<h2>${kw} — Đặc thù địa phương</h2>
<p>Sao Khuê am hiểu quy hoạch, giấy phép và điều kiện thi công khu vực <strong>${loc}</strong>.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại <strong>${loc}</strong>. Bảo hành kết cấu 10 năm.</p>`;
  }
}

function notesSection(b: Brief): string {
  const loc = b.districtLabel ?? "TP.HCM";
  return `<h2>Lưu ý xây nhà tại ${loc}</h2>
<ul>
  <li><strong>Giấy phép:</strong> Xin phép xây dựng trước khi động thổ.</li>
  <li><strong>Móng:</strong> Khảo sát địa chất — đặc biệt khu ven sông, đất yếu.</li>
  <li><strong>Chống thấm:</strong> Mái, sân thượng, WC — bắt buộc tại TP.HCM.</li>
  <li><strong>Nhà hẻm:</strong> Kế hoạch vận chuyển vật tư và giờ thi công.</li>
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
    metaKeywords: `${kw}, xây nhà TP.HCM, xây nhà trọn gói, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Uy tín tại ${loc}</h2>
<p><strong>${kw}</strong> là nhu cầu phổ biến khi gia đình tại <strong>${loc}</strong> muốn xây nhà mới, đầu tư bất động sản hoặc nâng cấp không gian sống. TP.HCM có mật độ xây dựng cao — cần đơn vị am hiểu quy hoạch, giấy phép và kỹ thuật nhà phố hẹp.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>${kw}</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${articleWhenNeededBlock(intent, kw, loc)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát &amp; tư vấn</strong> — địa hình, quy hoạch, nhu cầu gia đình.</li>
  <li><strong>Thiết kế &amp; báo giá</strong> — bản vẽ, dự toán chi tiết từng hạng mục.</li>
  <li><strong>Thi công</strong> — giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li><strong>Nghiệm thu &amp; bảo hành</strong> — bàn giao, cam kết kết cấu 10 năm.</li>
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

const briefs: Brief[] = xayNhaTphcmKeywordCalendarBatch7.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    topic: detectTopic(slug),
    districtLabel: districtFromSlug(slug),
  };
});

export const xayNhaTphcmBatch7ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const xayNhaTphcmBatch7Slugs = briefs.map((b) => b.slug);

export function getXayNhaTphcmBatch7Article(slug: string): SeoArticleShape | undefined {
  return xayNhaTphcmBatch7ArticlesBySlug[slug];
}

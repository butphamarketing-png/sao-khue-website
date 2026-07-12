/**
 * 100 bài tin tức SEO — batch 5 (#297–#396): 50 Đắk Lắk + 50 TP.HCM.
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { dakLakTphcmKeywordCalendarBatch5 } from "../dak-lak-tphcm-keyword-calendar-batch5";
import { buildDakLakSeoArticle } from "./dak-lak-tin-tuc-articles-batch4";
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

type Region = "dak-lak" | "tphcm";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  region: Region;
  topic: string;
  districtLabel?: string;
};

const TPHCM_HUB = [
  "/dich-vu/xay-nha-tron-goi-tphcm",
  "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "/tin-tuc/sua-chua-cai-tao-nha-tphcm",
];

function regionOf(slug: string): Region {
  if (slug.endsWith("-tphcm") || slug.startsWith("xay-nha-quan-") || slug.startsWith("xay-nha-binh-") || slug.startsWith("xay-nha-thu-") || slug.startsWith("xay-nha-go-") || slug.startsWith("xay-nha-tan-") || slug.startsWith("xay-nha-nha-be")) {
    return "tphcm";
  }
  return "dak-lak";
}

function detectTopic(slug: string): string {
  if (slug.includes("sua-chua") || slug.includes("sua-nha") || slug.includes("sua-mai") || slug.includes("sua-dien") || slug.includes("sua-tuong") || slug.includes("sua-san")) return "repair";
  if (slug.includes("cai-tao") || slug.includes("nang-tang") || slug.includes("lam-moi") || slug.includes("mo-rong") || slug.includes("pha-do")) return "renovation";
  if (slug.includes("chi-phi") || slug.includes("bao-gia") || slug.includes("don-gia")) return "pricing";
  if (slug.includes("thiet-ke") || slug.includes("kien-truc") || slug.includes("mau-nha")) return "design";
  if (slug.includes("phan-tho") || slug.includes("nha-tho") || slug.includes("thi-cong-phan")) return "rough";
  if (slug.includes("hoan-thien")) return "finish";
  if (slug.includes("biet-thu") || slug.includes("homestay")) return "villa";
  if (slug.includes("shophouse") || slug.includes("mat-tien") || slug.includes("tro") || slug.includes("nghi")) return "commercial";
  if (slug.includes("nha-ong") || slug.includes("trong-hem")) return "rowhouse";
  if (slug.includes("4-tang") || slug.includes("5-tang") || slug.includes("cap-4") || slug.includes("1-tret")) return "floors";
  if (slug.includes("chong-tham") || slug.includes("tham-dot") || slug.includes("gia-co")) return "structural";
  if (slug.includes("giay-phep")) return "legal";
  if (slug.includes("giam-sat") || slug.includes("tu-xa")) return "remote";
  if (slug.includes("buon-ma-thuot") || slug.includes("buon-don") || slug.includes("ea-hleo") || slug.includes("cu-kuin") || slug.includes("tan-loi") || slug.includes("ea-tam")) return "locality";
  if (slug.startsWith("xay-nha-quan-") || slug.includes("binh-thanh") || slug.includes("thu-duc") || slug.includes("go-vap") || slug.includes("tan-phu") || slug.includes("nha-be")) return "district";
  return "general";
}

function districtFromSlug(slug: string): string | undefined {
  const map: Record<string, string> = {
    "binh-thanh": "Quận Bình Thạnh",
    "thu-duc": "TP. Thủ Đức",
    "go-vap": "Quận Gò Vấp",
    "tan-phu": "Quận Tân Phú",
    "nha-be": "Huyện Nhà Bè",
  };
  for (const [key, label] of Object.entries(map)) {
    if (slug.includes(key)) return label;
  }
  const m = slug.match(/quan-(\d+)/);
  if (m) return `Quận ${m[1]}`;
  return undefined;
}

function hubLinks(): string {
  const labels = ["xây nhà trọn gói TP.HCM", "công ty xây dựng nhà phố TP.HCM", "sửa chữa cải tạo nhà TP.HCM"];
  return TPHCM_HUB.map((h, i) => `<a href="${h}">${labels[i]}</a>`).join(", ");
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.districtLabel ?? "TP.HCM";

  switch (b.topic) {
    case "repair":
      return `<h2>${kw} — Dịch vụ tại ${loc}</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước âm tường.</li>
  <li>Cải tạo WC, bếp, sân thượng, mái nhà.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá cố định.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>`;
    case "renovation":
      return `<h2>${kw} — Nâng cấp không gian sống</h2>
<ul>
  <li>Cải tạo mặt tiền, nâng tầng, mở rộng phòng ngủ/bếp.</li>
  <li>Phối cảnh 3D trước khi thi công — giảm phát sinh.</li>
  <li>Thanh toán theo tiến độ nghiệm thu từng hạng mục.</li>
</ul>`;
    case "pricing":
      return `<h2>Bảng giá — ${kw}</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá tham khảo (2026)</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,8 – 5,5 triệu đ/m² sàn</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>5,5 – 8 triệu đ/m² sàn</td></tr>
    <tr><td>Cải tạo toàn căn</td><td>6 – 12 triệu đ/m² (tùy hiện trạng)</td></tr>
  </tbody>
</table>
<p><a href="/bao-gia">Báo giá online</a> · Hotline 0909 075 668</p>`;
    case "legal":
      return `<h2>${kw} — Hỗ trợ hồ sơ</h2>
<p>Sao Khuê hỗ trợ tra cứu quy hoạch, hoàn thiện hồ sơ xin phép xây dựng tại các quận/huyện TP.HCM — tiết kiệm thời gian chủ nhà.</p>`;
    case "rowhouse":
      return `<h2>${kw} — Đặc thù nhà phố Sài Gòn</h2>
<p>Mặt tiền 3,5–5 m, giếng trời thông gió, tối ưu ánh sáng tự nhiên — chuẩn ${loc}. Thi công trong hẻm có kế hoạch vận chuyển vật tư riêng.</p>`;
    case "district":
    case "locality":
      return `<h2>${kw} — Đặc thù địa phương</h2>
<p>Sao Khuê (Q. Bình Thạnh) am hiểu quy hoạch, giấy phép và điều kiện thi công khu vực <strong>${loc}</strong>.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại <strong>${loc}</strong>. Bảo hành kết cấu 10 năm.</p>`;
  }
}

function notesSection(b: Brief): string {
  return `<h2>Lưu ý khi triển khai tại ${b.districtLabel ?? "TP.HCM"}</h2>
<ul>
  <li><strong>Mật độ cao:</strong> Tối ưu thông gió, ánh sáng nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư, hạn chế ồn ban đêm.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC, mái — bắt buộc tại TP.HCM.</li>
  <li><strong>Nhà hẻm:</strong> Lên kế hoạch vật tư, xe tải và thời gian thi công sớm.</li>
</ul>`;
}

function buildTphcmArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const loc = b.districtLabel ?? "TP.HCM";
  const intent = mapBatchTopicToIntent(b.topic, b.slug);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic: b.topic }),
    metaDescription: buildCtrMetaDescription(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaKeywords: `${kw}, xây nhà TP.HCM, kiến trúc sao khuê`,
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

function buildArticle(item: { slug: string; title: string; keyword: string }): SeoArticleShape {
  const region = regionOf(item.slug);
  if (region === "dak-lak") {
    return buildDakLakSeoArticle({
      slug: item.slug,
      title: item.title,
      focusKeyword: item.keyword,
    });
  }
  const brief: Brief = {
    slug: item.slug,
    title: item.title,
    focusKeyword: item.keyword,
    region: "tphcm",
    topic: detectTopic(item.slug),
    districtLabel: districtFromSlug(item.slug),
  };
  return buildTphcmArticle(brief);
}

const briefs = dakLakTphcmKeywordCalendarBatch5.map((item) => ({
  slug: item.slug!,
  title: item.title,
  keyword: item.keyword,
}));

export const dakLakTphcmBatch5ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const dakLakTphcmBatch5Slugs = briefs.map((b) => b.slug);

export function getDakLakTphcmBatch5Article(slug: string): SeoArticleShape | undefined {
  return dakLakTphcmBatch5ArticlesBySlug[slug];
}

/**
 * 100 bài xây nhà / cải tạo TP.HCM — batch #13 (#697–#796).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { xayCaiTaoTphcmKeywordCalendarBatch8 } from "../xay-cai-tao-tphcm-keyword-calendar-batch8";
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

const TPHCM_HUB: Record<string, { href: string; label: string }[]> = {
  build: [
    { href: "/dich-vu/xay-nha-tron-goi-tphcm", label: "xây nhà trọn gói TP.HCM" },
    { href: "/tin-tuc/bao-gia-xay-nha-phan-tho-tphcm", label: "báo giá xây nhà phần thô TP.HCM" },
    { href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", label: "công ty xây dựng nhà phố uy tín" },
  ],
  renovation: [
    { href: "/dich-vu/cai-tao-nha-cu", label: "cải tạo nhà cũ" },
    { href: "/tin-tuc/cai-tao-nha-tron-goi-tphcm", label: "cải tạo nhà trọn gói TP.HCM" },
    { href: "/tin-tuc/chi-phi-cai-tao-nha-tphcm", label: "chi phí cải tạo nhà TP.HCM" },
  ],
  repair: [
    { href: "/tin-tuc/sua-chua-nha-tron-goi-tphcm", label: "sửa chữa nhà trọn gói TP.HCM" },
    { href: "/tin-tuc/chong-tham-nha-tphcm", label: "chống thấm nhà TP.HCM" },
    { href: "/tin-tuc/bao-gia-sua-chua-nha-tphcm", label: "báo giá sửa chữa nhà TP.HCM" },
  ],
  design: [
    { href: "/tin-tuc/thiet-ke-nha-pho-tphcm", label: "thiết kế nhà phố TP.HCM" },
    { href: "/tin-tuc/thiet-ke-thi-cong-nha-pho-tphcm", label: "thiết kế thi công nhà phố TP.HCM" },
    { href: "/tin-tuc/phoi-canh-3d-nha-pho-tphcm", label: "phối cảnh 3D nhà phố TP.HCM" },
  ],
};

function detectTopic(slug: string): string {
  if (slug.startsWith("cai-tao")) return "renovation";
  if (slug.startsWith("nang-tang")) return "extend";
  if (slug.startsWith("chong-tham")) return "waterproof";
  if (slug.startsWith("sua-nha")) return "repair";
  if (slug.startsWith("thiet-ke-thi-cong")) return "design";
  return "build";
}

function districtFromSlug(slug: string): string | undefined {
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
  };
  for (const [key, label] of Object.entries(map)) {
    if (slug.includes(key)) return label;
  }
  const m = slug.match(/quan-(\d+)/);
  if (m) return `Quận ${m[1]}`;
  return undefined;
}

function hubLinks(topic: string): string {
  const key = ["renovation", "extend"].includes(topic)
    ? "renovation"
    : ["repair", "waterproof"].includes(topic)
      ? "repair"
      : topic === "design"
        ? "design"
        : "build";
  return TPHCM_HUB[key].map((h) => `<a href="${h.href}">${h.label}</a>`).join(", ");
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.districtLabel ?? "TP.HCM";

  switch (b.topic) {
    case "renovation":
      return `<h2>${kw} — Làm mới không gian sống</h2>
<ul>
  <li>Đánh giá kết cấu móng, cột, dầm trước khi cải tạo.</li>
  <li>Tối ưu công năng, ánh sáng, thông gió — thường tiết kiệm <strong>30–50%</strong> so với xây mới.</li>
  <li>Thi công gọn, ít ảnh hưởng sinh hoạt tại ${loc}.</li>
</ul>`;
    case "extend":
      return `<h2>${kw} — Tăng diện tích không cần mở rộng ngang</h2>
<p>Kiểm tra khả năng chịu tải của móng, cột hiện hữu; gia cố nếu cần trước khi nâng thêm 1–2 tầng tại ${loc}. Giải pháp tối ưu khi bị giới hạn lộ giới, hàng xóm.</p>`;
    case "waterproof":
      return `<h2>${kw} — Xử lý triệt để nguồn thấm</h2>
<ul>
  <li>Xác định nguyên nhân: nứt kết cấu, sân thượng, WC, tường giáp ranh.</li>
  <li>Thi công đúng vật liệu, đúng quy trình, bảo hành rõ ràng.</li>
  <li>Đặc biệt cần thiết cho khu vực mưa nhiều, đất lún như ${loc}.</li>
</ul>`;
    case "repair":
      return `<h2>${kw} — Sửa nhanh, đúng hạng mục</h2>
<p>Sao Khuê khảo sát, báo giá minh bạch từng hạng mục điện nước, chống thấm, sơn, sàn — không phát sinh tại ${loc}.</p>`;
    case "design":
      return `<h2>${kw} — Bản vẽ trước, thi công sau</h2>
<p>Thiết kế 2D/3D theo nhu cầu gia đình và đặc thù đất tại ${loc}, kèm dự toán chi tiết trước khi thi công — tránh phát sinh.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại <strong>${loc}</strong>. Bảo hành kết cấu 10 năm.</p>`;
  }
}

function notesSection(b: Brief): string {
  const loc = b.districtLabel ?? "TP.HCM";
  return `<h2>Lưu ý khi thi công tại ${loc}</h2>
<ul>
  <li><strong>Giấy phép:</strong> Xây mới, nâng tầng, cải tạo thay đổi kết cấu đều cần xin phép.</li>
  <li><strong>Kết cấu:</strong> Khảo sát móng, cột trước khi nâng tầng / cải tạo.</li>
  <li><strong>Chống thấm:</strong> Mái, sân thượng, WC — bắt buộc tại TP.HCM.</li>
  <li><strong>Nhà hẻm:</strong> Lên phương án vận chuyển vật tư, giờ thi công phù hợp.</li>
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
    metaKeywords: `${kw}, ${b.topic === "build" ? "xây nhà" : "cải tạo sửa nhà"} TP.HCM, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Uy tín tại ${loc}</h2>
<p><strong>${kw}</strong> là nhu cầu phổ biến của gia đình tại <strong>${loc}</strong> khi muốn xây mới, nâng cấp hoặc làm mới không gian sống. TP.HCM có mật độ xây dựng cao, nhà hẻm nhiều — cần đơn vị am hiểu quy hoạch, giấy phép và kỹ thuật thi công đô thị.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>${kw}</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành 10 năm</strong> hạng mục kết cấu.</p>

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${articleWhenNeededBlock(intent, kw, loc)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát &amp; tư vấn</strong> — hiện trạng, quy hoạch, nhu cầu gia đình.</li>
  <li><strong>Thiết kế &amp; báo giá</strong> — bản vẽ, dự toán chi tiết từng hạng mục.</li>
  <li><strong>Thi công</strong> — giám sát kết cấu, chống thấm từng giai đoạn.</li>
  <li><strong>Nghiệm thu &amp; bảo hành</strong> — bàn giao, cam kết rõ ràng.</li>
</ol>
<p>Tham khảo: ${hubLinks(b.topic)}.</p>

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

const briefs: Brief[] = xayCaiTaoTphcmKeywordCalendarBatch8.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    topic: detectTopic(slug),
    districtLabel: districtFromSlug(slug),
  };
});

export const xayCaiTaoTphcmBatch8ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const xayCaiTaoTphcmBatch8Slugs = briefs.map((b) => b.slug);

export function getXayCaiTaoTphcmBatch8Article(slug: string): SeoArticleShape | undefined {
  return xayCaiTaoTphcmBatch8ArticlesBySlug[slug];
}

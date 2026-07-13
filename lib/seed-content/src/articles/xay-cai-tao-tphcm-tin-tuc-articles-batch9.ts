/**
 * 100 bài xây nhà / cải tạo TP.HCM — batch #14 (#797–#896).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { xayCaiTaoTphcmKeywordCalendarBatch9 } from "../xay-cai-tao-tphcm-keyword-calendar-batch9";
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
  structural: [
    { href: "/tin-tuc/gia-co-nha-cu-tphcm", label: "gia cố nhà cũ TP.HCM" },
    { href: "/tin-tuc/nang-tang-nha-pho-tphcm", label: "nâng tầng nhà phố TP.HCM" },
    { href: "/tin-tuc/sua-tuong-nut-nha-tphcm", label: "sửa tường nứt nhà TP.HCM" },
  ],
  pricing: [
    { href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", label: "báo giá xây nhà trọn gói TP.HCM" },
    { href: "/tin-tuc/don-gia-xay-nha-tphcm", label: "đơn giá xây nhà TP.HCM" },
    { href: "/tin-tuc/chi-phi-xay-nha-tphcm", label: "chi phí xây nhà TP.HCM" },
  ],
  legal: [
    { href: "/tin-tuc/xin-giay-phep-xay-dung-tphcm", label: "xin giấy phép xây dựng TP.HCM" },
    { href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z", label: "quy trình xây nhà trọn gói A-Z" },
    { href: "/tin-tuc/luat-xay-dung-moi-nhat", label: "luật xây dựng mới nhất" },
  ],
};

function detectTopic(slug: string): string {
  if (slug.startsWith("cai-tao")) return "renovation";
  if (slug.startsWith("nang-tang") || slug.startsWith("cay-thep")) return "extend";
  if (slug.startsWith("sua-nha") || slug.startsWith("thay-")) return "repair";
  if (slug.startsWith("gia-co") || slug.startsWith("xu-ly") || slug.startsWith("kiem-dinh")) return "structural";
  if (slug.startsWith("xin-phep") || slug.startsWith("hoan-cong")) return "legal";
  if (slug.startsWith("chi-phi") || slug.startsWith("bao-gia")) return "pricing";
  if (slug.includes("hem") || slug.includes("trong-hem")) return "rowhouse";
  if (slug.startsWith("thao-do")) return "renovation";
  if (slug.startsWith("xay-nha-ngan-sach")) return "budget";
  if (slug.startsWith("xay-nha-ket-hop")) return "commercial";
  return "build";
}

function districtFromSlug(slug: string): string | undefined {
  const phuongMap: Record<string, string> = {
    "phuong-25-binh-thanh": "Phường 25, Bình Thạnh",
    "phuong-13-binh-thanh": "Phường 13, Bình Thạnh",
    "phuong-26-binh-thanh": "Phường 26, Bình Thạnh",
    "phuong-thao-dien": "Phường Thảo Điền, Quận 2",
    "phuong-an-phu-thu-duc": "Phường An Phú, Thủ Đức",
    "phuong-hiep-binh-chanh": "Phường Hiệp Bình Chánh, Thủ Đức",
    "phuong-linh-trung": "Phường Linh Trung, Thủ Đức",
    "phuong-long-phuoc-thu-duc": "Phường Long Phước, Thủ Đức",
    "phuong-7-go-vap": "Phường 7, Gò Vấp",
    "phuong-10-go-vap": "Phường 10, Gò Vấp",
    "phuong-15-tan-binh": "Phường 15, Tân Bình",
    "phuong-4-tan-binh": "Phường 4, Tân Bình",
    "phuong-tan-son-nhi": "Phường Tân Sơn Nhì, Tân Phú",
    "phuong-phu-thanh": "Phường Phú Thạnh, Tân Phú",
    "phuong-phu-thanh-tan-phu": "Phường Phú Thạnh, Tân Phú",
    "phuong-an-lac": "Phường An Lạc, Bình Tân",
    "phuong-an-lac-binh-tan": "Phường An Lạc, Bình Tân",
    "phuong-binh-hung-hoa": "Phường Bình Hưng Hòa, Bình Tân",
    "phuong-binh-tri-dong": "Phường Bình Trị Đông, Bình Tân",
    "phuong-tan-phong-quan-7": "Phường Tân Phong, Quận 7",
    "phuong-tan-hung-quan-7": "Phường Tân Hưng, Quận 7",
    "phuong-hiep-thanh-quan-12": "Phường Hiệp Thành, Quận 12",
    "phuong-tan-hung-thuan": "Phường Tân Hưng Thuận, Quận 12",
    "phuong-5-quan-8": "Phường 5, Quận 8",
    "phuong-11-quan-8": "Phường 11, Quận 8",
    "phuong-thao-dien-thu-duc": "Phường Thảo Điền, Quận 2",
    "phuong-linh-trung-thu-duc": "Phường Linh Trung, Thủ Đức",
    "phuong-hiep-binh-thu-duc": "Phường Hiệp Bình, Thủ Đức",
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
    : ["repair"].includes(topic)
      ? "repair"
      : topic === "structural"
        ? "structural"
        : topic === "pricing"
          ? "pricing"
          : topic === "legal"
            ? "legal"
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
<p>Kiểm tra khả năng chịu tải của móng, cột hiện hữu; gia cố nếu cần trước khi nâng thêm 1–2 tầng tại ${loc}.</p>`;
    case "repair":
      return `<h2>${kw} — Sửa nhanh, đúng hạng mục</h2>
<p>Sao Khuê khảo sát, báo giá minh bạch từng hạng mục điện nước, chống thấm, sơn, sàn — không phát sinh tại ${loc}.</p>`;
    case "structural":
      return `<h2>${kw} — An toàn kết cấu trước tiên</h2>
<ul>
  <li>Kiểm định hiện trạng móng, cột, dầm, sàn bởi kỹ sư có kinh nghiệm.</li>
  <li>Phương án gia cố đúng chuẩn trước khi cải tạo hoặc nâng tầng.</li>
  <li>Cam kết an toàn, bảo hành hạng mục kết cấu tại ${loc}.</li>
</ul>`;
    case "rowhouse":
      return `<h2>${kw} — Đặc thù nhà hẻm Sài Gòn</h2>
<ul>
  <li>Kế hoạch vận chuyển vật tư, giờ thi công phù hợp hẻm hẹp.</li>
  <li>Thiết kế tối ưu ánh sáng, thông gió cho nhà hẹp, sâu.</li>
  <li>Giám sát móng, chống thấm chặt chẽ tại ${loc}.</li>
</ul>`;
    case "pricing":
      return `<h2>${kw} — Minh bạch, không phát sinh</h2>
<p>Sao Khuê báo giá chi tiết từng hạng mục sau khảo sát thực tế tại ${loc}. Khách hàng nắm rõ chi phí trước khi ký hợp đồng.</p>`;
    case "legal":
      return `<h2>${kw} — Thủ tục đúng quy định</h2>
<p>Sao Khuê hỗ trợ tư vấn hồ sơ, quy trình xin phép xây dựng / hoàn công tại ${loc} — tránh rủi ro pháp lý sau này.</p>`;
    case "budget":
      return `<h2>${kw} — Tối ưu ngân sách đúng chỗ</h2>
<p>Tư vấn gói vật liệu và hạng mục phù hợp ngân sách — không cắt giảm kết cấu, chống thấm, an toàn PCCC tại ${loc}.</p>`;
    case "commercial":
      return `<h2>${kw} — Tối ưu công năng kinh doanh</h2>
<p>Thiết kế linh hoạt: tầng trệt kinh doanh, tầng trên sinh hoạt — phù hợp đầu tư tại ${loc}.</p>`;
    default:
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại <strong>${loc}</strong>. Bảo hành kết cấu 10 năm.</p>`;
  }
}

function notesSection(b: Brief): string {
  const loc = b.districtLabel ?? "TP.HCM";
  const hemNote = b.topic === "rowhouse" || b.slug.includes("hem")
    ? "<li><strong>Hẻm hẹp:</strong> Lên phương án vận chuyển vật tư, giờ thi công trước khi động thổ.</li>"
    : "";
  return `<h2>Lưu ý khi thi công tại ${loc}</h2>
<ul>
  <li><strong>Giấy phép:</strong> Xây mới, nâng tầng, cải tạo thay đổi kết cấu đều cần xin phép.</li>
  <li><strong>Kết cấu:</strong> Khảo sát móng, cột trước khi nâng tầng / cải tạo.</li>
  <li><strong>Chống thấm:</strong> Mái, sân thượng, WC — bắt buộc tại TP.HCM.</li>
  ${hemNote}
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
    metaKeywords: `${kw}, xây nhà cải tạo TP.HCM, kiến trúc sao khuê`,
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

const briefs: Brief[] = xayCaiTaoTphcmKeywordCalendarBatch9.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    topic: detectTopic(slug),
    districtLabel: districtFromSlug(slug),
  };
});

export const xayCaiTaoTphcmBatch9ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const xayCaiTaoTphcmBatch9Slugs = briefs.map((b) => b.slug);

export function getXayCaiTaoTphcmBatch9Article(slug: string): SeoArticleShape | undefined {
  return xayCaiTaoTphcmBatch9ArticlesBySlug[slug];
}

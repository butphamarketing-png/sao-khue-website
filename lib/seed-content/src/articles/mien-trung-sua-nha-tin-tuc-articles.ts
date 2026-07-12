/**
 * 26 bài tin tức — sửa chữa / cải tạo nhà miền Trung (#171–#196).
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, mapBatchTopicToIntent, seoCtaBlock } from "../article-seo-blocks";
import {
  articleMistakesBlock,
  articlePricingTableBlock,
  articleWhenNeededBlock,
  buildIntentFaq,
} from "../article-content-blocks";
import { buildDakLakSeoArticle } from "./dak-lak-tin-tuc-articles-batch4";
import { mienTrungSuaNhaKeywordCalendar } from "../mien-trung-sua-nha-keyword-calendar";
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
  | "phu-yen"
  | "dak-lak"
  | "gia-lai"
  | "khanh-hoa"
  | "binh-dinh"
  | "quang-ngai"
  | "kon-tum"
  | "mien-trung";

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
    { href: "/tin-tuc/sua-chua-nha-phu-yen", label: "sửa chữa nhà Phú Yên" },
    { href: "/tin-tuc/sua-chua-nha-dak-lak", label: "sửa chữa nhà Đắk Lắk" },
    { href: "/tin-tuc/xay-dung-nha-phu-yen", label: "xây dựng nhà Phú Yên" },
  ],
  "phu-yen": [
    { href: "/tin-tuc/sua-chua-nha-phu-yen", label: "sửa chữa nhà Phú Yên" },
    { href: "/tin-tuc/cai-tao-nha-phu-yen", label: "cải tạo nhà Phú Yên" },
    { href: "/tin-tuc/xay-dung-nha-phu-yen", label: "xây dựng nhà Phú Yên" },
  ],
  "dak-lak": [
    { href: "/tin-tuc/sua-chua-nha-dak-lak", label: "sửa chữa nhà Đắk Lắk" },
    { href: "/tin-tuc/cai-tao-nha-dak-lak", label: "cải tạo nhà Đắk Lắk" },
    { href: "/tin-tuc/xay-dung-nha-dak-lak", label: "xây dựng nhà Đắk Lắk" },
  ],
  "gia-lai": [
    { href: "/tin-tuc/sua-chua-nha-gia-lai", label: "sửa chữa nhà Gia Lai" },
    { href: "/tin-tuc/cai-tao-nha-gia-lai", label: "cải tạo nhà Gia Lai" },
    { href: "/tin-tuc/sua-chua-cai-tao-nha-mien-trung", label: "sửa chữa miền Trung" },
  ],
  "khanh-hoa": [
    { href: "/tin-tuc/sua-chua-nha-khanh-hoa", label: "sửa chữa nhà Khánh Hòa" },
    { href: "/tin-tuc/sua-chua-nha-nha-trang", label: "sửa nhà Nha Trang" },
    { href: "/tin-tuc/cai-tao-nha-khanh-hoa", label: "cải tạo nhà Khánh Hòa" },
  ],
  "binh-dinh": [
    { href: "/tin-tuc/sua-chua-nha-binh-dinh", label: "sửa chữa nhà Bình Định" },
    { href: "/tin-tuc/sua-chua-nha-quy-nhon", label: "sửa nhà Quy Nhơn" },
    { href: "/tin-tuc/cai-tao-nha-binh-dinh", label: "cải tạo nhà Bình Định" },
  ],
  "quang-ngai": [
    { href: "/tin-tuc/sua-chua-nha-quang-ngai", label: "sửa chữa nhà Quảng Ngãi" },
    { href: "/tin-tuc/cai-tao-nha-quang-ngai", label: "cải tạo nhà Quảng Ngãi" },
    { href: "/tin-tuc/sua-chua-cai-tao-nha-mien-trung", label: "sửa chữa miền Trung" },
  ],
  "kon-tum": [
    { href: "/tin-tuc/sua-chua-nha-kon-tum", label: "sửa chữa nhà Kon Tum" },
    { href: "/tin-tuc/cai-tao-nha-kon-tum", label: "cải tạo nhà Kon Tum" },
    { href: "/tin-tuc/sua-chua-cai-tao-nha-mien-trung", label: "sửa chữa miền Trung" },
  ],
};

const PROVINCE_LABEL: Record<Province, string> = {
  "mien-trung": "miền Trung",
  "phu-yen": "Phú Yên",
  "dak-lak": "Đắk Lắk",
  "gia-lai": "Gia Lai",
  "khanh-hoa": "Khánh Hòa",
  "binh-dinh": "Bình Định",
  "quang-ngai": "Quảng Ngãi",
  "kon-tum": "Kon Tum",
};

function provinceOf(slug: string): Province {
  if (slug.includes("mien-trung")) return "mien-trung";
  if (slug.includes("phu-yen") || slug.includes("tuy-hoa") || slug.includes("song-cau")) return "phu-yen";
  if (slug.includes("dak-lak") || slug.includes("buon-")) return "dak-lak";
  if (slug.includes("gia-lai") || slug.includes("pleiku")) return "gia-lai";
  if (slug.includes("khanh-hoa") || slug.includes("nha-trang")) return "khanh-hoa";
  if (slug.includes("binh-dinh") || slug.includes("quy-nhon")) return "binh-dinh";
  if (slug.includes("quang-ngai")) return "quang-ngai";
  if (slug.includes("kon-tum")) return "kon-tum";
  return "mien-trung";
}

function detectTopic(slug: string): string {
  if (slug.includes("chong-tham")) return "waterproof";
  if (slug.includes("gia-co")) return "structural";
  if (slug.includes("nang-tang")) return "extend";
  if (slug.includes("hoan-thien")) return "finish";
  if (slug.includes("cai-tao")) return "renovation";
  if (slug.includes("ven-bien")) return "coastal";
  if (slug.includes("mien-trung")) return "hub";
  return "repair";
}

function localityNote(p: Province): string {
  const notes: Record<Province, string> = {
    "mien-trung":
      "từ duyên hải Nam Trung Bộ (Phú Yên, Khánh Hòa, Bình Định) đến Tây Nguyên (Đắk Lắk, Gia Lai, Kon Tum)",
    "phu-yen": "khí hậu ven biển — nắng gió, muối biển, mùa mưa bão",
    "dak-lak": "khí hậu cao nguyên — mưa lớn theo mùa, nhà cũ cần gia cố mái và chống thấm",
    "gia-lai": "Pleiku và các huyện lân cận — nhà cũ 15–30 năm cần nâng cấp",
    "khanh-hoa": "Nha Trang, ven biển — chống thấm và chống muối là bắt buộc",
    "binh-dinh": "Quy Nhơn và khu vực ven biển — nhu cầu cải tạo nhà phố tăng",
    "quang-ngai": "thành phố và huyện ven biển — sửa chữa sau bão thường xuyên",
    "kon-tum": "vùng cao — nhà cũ cần cách nhiệt và thoát nước mưa tốt",
  };
  return notes[p];
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const prov = PROVINCE_LABEL[b.province];

  switch (b.topic) {
    case "hub":
      return `<h2>${kw} — Phạm vi dịch vụ Sao Khuê</h2>
<p>Sao Khuê nhận <strong>sửa chữa, cải tạo nhà cũ</strong> tại các tỉnh miền Trung và Tây Nguyên — một đầu mối từ khảo sát đến bàn giao.</p>
<h3>Phú Yên &amp; duyên hải</h3>
<p>Tuy Hòa, Sông Cầu, Tuy An — chống thấm, chống muối, gia cố sau bão.</p>
<h3>Đắk Lắk &amp; Tây Nguyên</h3>
<p>Buôn Ma Thuột, Buôn Hồ, Ea Kar — gia cố kết cấu, chống thấm mái mùa mưa.</p>
<h3>Nam Trung Bộ</h3>
<p>Khánh Hòa, Bình Định, Quảng Ngãi — cải tạo nhà phố, biệt thự ven biển.</p>`;
    case "waterproof":
      return `<h2>${kw} — Kỹ thuật chống thấm</h2>
<ul>
  <li><strong>Mái, sân thượng:</strong> Lớp waterproof kép, thoát nước đúng cốt.</li>
  <li><strong>Tường ngoài:</strong> ${b.province === "phu-yen" || b.province === "khanh-hoa" ? "Chống muối biển, sơn chống thấm" : "Trát chống thấm, sơn elastomeric"}.</li>
  <li><strong>WC, ban công:</strong> Chống thấm ngược, nghiệm thu ngâm nước.</li>
</ul>`;
    case "structural":
      return `<h2>${kw} — Gia cố an toàn</h2>
<p>Nhà 20–40 năm tại ${prov} cần đánh giá cột, dầm, sàn trước khi cải tạo. Sao Khuê khảo sát kỹ thuật, lập phương án gia cố BTCT hoặc thép.</p>`;
    case "extend":
      return `<h2>${kw} — Mở rộng diện tích</h2>
<p>Nâng tầng hoặc mở rộng phía sau — cần giấy phép và gia cố móng tại ${prov}.</p>`;
    case "finish":
      return `<h2>${kw} — Hoàn thiện sau sửa</h2>
<ul>
  <li>Trát, sơn, lát gạch mới.</li>
  <li>Thay cửa, điện nước, thiết bị vệ sinh.</li>
  <li>Nội thất theo ngân sách chủ nhà.</li>
</ul>`;
    case "coastal":
      return `<h2>${kw} — Nhà gần biển</h2>
<p>Vật liệu chịu muối, bu lông inox, chống thấm kỹ — đặc thù ${prov} ven biển.</p>`;
  case "renovation":
      return `<h2>${kw} — Cải tạo toàn diện</h2>
<ul>
  <li>Tái bố trí phòng, mở rộng bếp, WC.</li>
  <li>Thay hệ thống điện nước — an toàn PCCC.</li>
  <li>Hoàn thiện nội thất theo phong cách mới.</li>
</ul>`;
    default:
      return `<h2>${kw} — Hạng mục phổ biến</h2>
<ul>
  <li><strong>Chống thấm</strong> — mái, tường, WC (đặc biệt ${localityNote(b.province)}).</li>
  <li><strong>Gia cố kết cấu</strong> — nhà cũ 20–30 năm.</li>
  <li><strong>Thay điện nước</strong> — chống giật, đủ tải.</li>
  <li><strong>Cải tạo nội thất</strong> — bếp, phòng ngủ, phòng khách.</li>
</ul>`;
  }
}

function hubLinksHtml(p: Province, excludeSlug: string): string {
  return HUB_LINKS[p]
    .filter((l) => !l.href.endsWith(excludeSlug))
    .slice(0, 3)
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join(", ");
}

function buildArticle(b: Brief): SeoArticleShape {
  if (b.province === "dak-lak") {
    return buildDakLakSeoArticle({
      slug: b.slug,
      title: b.title,
      focusKeyword: b.focusKeyword,
    });
  }

  const kw = b.focusKeyword;
  const prov = PROVINCE_LABEL[b.province];
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const intent = mapBatchTopicToIntent(b.topic, b.slug);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic: b.topic, location: prov }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic: b.topic }),
    metaDescription: buildCtrMetaDescription(kw, { slug: b.slug, batchTopic: b.topic, location: prov }),
    metaKeywords: `${kw}, sửa chữa nhà ${prov}, cải tạo nhà ${prov}, sửa nhà trọn gói, kiến trúc sao khuê`,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Dịch vụ chuyên nghiệp tại ${prov}</h2>
<p><strong>${kw}</strong> là nhu cầu thực tế khi nhà ở tại <strong>${prov}</strong> đã xuống cấp sau nhiều năm. Đặc thù khu vực: ${localityNote(b.province)}.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (TP.HCM) triển khai <strong>sửa chữa, cải tạo nhà</strong> tại ${prov} — khảo sát hiện trạng, báo giá theo hạng mục rõ ràng, không ép ký gói thừa.</p>

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${articleWhenNeededBlock(intent, kw, prov)}

${topicSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát tận nhà</strong> — ghi nhận thấm, nứt, điện nước cũ.</li>
  <li><strong>Báo giá chi tiết</strong> — từng hạng mục, tiến độ rõ ràng.</li>
  <li><strong>Thi công</strong> — che chắn, vệ sinh, giám sát kỹ thuật.</li>
  <li><strong>Nghiệm thu &amp; bảo hành</strong> — biên bản theo hạng mục.</li>
</ol>
<p>Tham khảo: ${hubLinksHtml(b.province, b.slug)}.</p>

${articlePricingTableBlock(intent, prov, b.slug, kw)}

${articleMistakesBlock(intent, kw, prov)}

${homeLinkParagraph()}

${buildIntentFaq(intent, kw, prov)}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = mienTrungSuaNhaKeywordCalendar.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    province: provinceOf(slug),
    topic: detectTopic(slug),
  };
});

export const mienTrungSuaNhaArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const mienTrungSuaNhaSlugs = briefs.map((b) => b.slug);

export function getMienTrungSuaNhaArticle(slug: string): SeoArticleShape | undefined {
  return mienTrungSuaNhaArticlesBySlug[slug];
}

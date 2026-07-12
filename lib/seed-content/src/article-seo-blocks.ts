/**
 * Khối HTML dùng chung — CTA, ảnh, link trang chủ (chuẩn brief SEO).
 */
import { buildInlineImageFigure } from "./image-seo";

export const META_TITLE_MAX = 60;
export const META_DESC_MAX = 160;
export const BRAND_SUFFIX = " | Sao Khuê";

export type MetaTitleIntent = "repair" | "renovation" | "build" | "pricing" | "design" | "general";

const META_TITLE_HOOKS: Record<MetaTitleIntent, string> = {
  repair: "Uy Tín, Chống Thấm Trọn Gói",
  renovation: "Tiết Kiệm, Đẹp Hơn",
  build: "Trọn Gói, BH 10 Năm",
  pricing: "Minh Bạch 2026",
  design: "Phối Cảnh 3D",
  general: "Uy Tín, Khảo Sát Miễn Phí",
};

const TITLE_CASE_SKIP = new Set(["tại", "và", "của", "theo", "cho", "với", "trên", "dưới"]);

export function titleCaseVi(text: string): string {
  return text
    .trim()
    .split(/\s+/)
    .map((word, i) => {
      if (i > 0 && TITLE_CASE_SKIP.has(word.toLowerCase())) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function detectMetaTitleIntent(keyword: string, slug = ""): MetaTitleIntent {
  const k = keyword.toLowerCase();
  const s = slug.toLowerCase();
  if (/báo giá|chi phí|đơn giá|giá\s/.test(k) || /bao-gia|chi-phi|don-gia/.test(s)) return "pricing";
  if (/thiết kế|mẫu nhà|kiến trúc|phối cảnh/.test(k) || /thiet-ke|mau-nha|kien-truc/.test(s)) return "design";
  if (
    /sửa|chống thấm|gia cố|thấm dột|sửa điện|sửa tường|sửa mái|sửa sàn/.test(k) ||
    /sua-|chong-tham|gia-co|tham-dot/.test(s)
  )
    return "repair";
  if (
    /cải tạo|nâng tầng|nâng cấp|tái thiết|làm mới|mở rộng|pha dỡ/.test(k) ||
    /cai-tao|nang-tang|nang-cap|lam-moi|mo-rong|pha-do/.test(s)
  )
    return "renovation";
  if (/xây|thi công|xây dựng|trọn gói|nhà thầu|công ty|nhà phố|biệt thự/.test(k) || /xay-|thi-cong/.test(s))
    return "build";
  return "general";
}

/** Map topic nội bộ batch bài viết → intent meta title. */
export function mapBatchTopicToIntent(batchTopic: string, slug = ""): MetaTitleIntent {
  switch (batchTopic) {
    case "repair":
    case "waterproof":
    case "structural":
      return "repair";
    case "renovation":
    case "renovate":
    case "extend":
    case "finish":
    case "coastal":
      return "renovation";
    case "pricing":
      return "pricing";
    case "design":
    case "sample":
      return "design";
    case "build":
    case "turnkey":
    case "contractor":
    case "general":
    case "floors":
    case "villa":
    case "townhouse":
    case "rowhouse":
    case "locality":
    case "district":
    case "rough":
    case "commercial":
    case "hub":
    case "budget":
    case "shophouse":
    case "cap4":
    case "garden":
    case "homestay":
    case "permit":
    case "remote":
    case "legal":
      return detectMetaTitleIntent("", slug) === "general" ? "build" : detectMetaTitleIntent("", slug);
    default:
      return detectMetaTitleIntent("", slug);
  }
}

function trimKeywordForTitle(keyword: string, maxLen: number): string {
  let kw = titleCaseVi(keyword);
  if (kw.length <= maxLen) return kw;

  const withoutProvince = kw.replace(
    /\s+(Bình Định|Phú Yên|Đắk Lắk|Gia Lai|Khánh Hòa|Quảng Ngãi|Kon Tum|Quảng Nam|Huế|TP\.HCM|Đồng Nai|Long An|Bình Dương|Miền Trung)$/i,
    "",
  );
  if (withoutProvince.length <= maxLen) return withoutProvince;

  return kw.slice(0, Math.max(maxLen - 1, 1)).trimEnd() + "…";
}

/**
 * Meta title thu hút click: từ khóa + hook giá trị + thương hiệu (≤65 ký tự).
 * Thay cho pattern cũ `${kw} | Sao Khuê` quá khô trên SERP.
 */
export function buildCtrMetaTitle(
  keyword: string,
  opts?: { intent?: MetaTitleIntent; slug?: string; batchTopic?: string },
): string {
  const slug = opts?.slug ?? "";
  const intent =
    opts?.intent ??
    (opts?.batchTopic ? mapBatchTopicToIntent(opts.batchTopic, slug) : detectMetaTitleIntent(keyword, slug));
  const hook = META_TITLE_HOOKS[intent];
  const separator = " — ";
  const budget = META_TITLE_MAX - BRAND_SUFFIX.length;
  const hookBudget = budget - separator.length - hook.length;

  const kw = trimKeywordForTitle(keyword, hookBudget);
  let title = `${kw}${separator}${hook}${BRAND_SUFFIX}`;

  if (title.length > META_TITLE_MAX) {
    const shortHook =
      intent === "repair"
        ? "Trọn Gói"
        : intent === "build"
          ? "Uy Tín"
          : intent === "pricing"
            ? "2026"
            : "Miễn Phí";
    const shortBudget = budget - separator.length - shortHook.length;
    const shortKw = trimKeywordForTitle(keyword, shortBudget);
    title = `${shortKw}${separator}${shortHook}${BRAND_SUFFIX}`;
  }

  return title.slice(0, META_TITLE_MAX);
}

function resolveMetaIntent(
  keyword: string,
  opts?: { intent?: MetaTitleIntent; slug?: string; batchTopic?: string },
): MetaTitleIntent {
  const slug = opts?.slug ?? "";
  return (
    opts?.intent ??
    (opts?.batchTopic ? mapBatchTopicToIntent(opts.batchTopic, slug) : detectMetaTitleIntent(keyword, slug))
  );
}

/** Tránh lặp "tại Quận 7" khi keyword đã chứa địa danh. */
function locationSuffix(keyword: string, location?: string): string {
  if (!location?.trim()) return "";
  const loc = location.trim();
  if (keyword.toLowerCase().includes(loc.toLowerCase())) return "";
  return ` tại ${loc}`;
}

const META_DESC_TEMPLATES: Record<MetaTitleIntent, (kw: string, at: string) => string> = {
  repair: (kw, at) =>
    `${kw}${at}: chống thấm, gia cố kết cấu trọn gói. Khảo sát miễn phí, bảo hành 10 năm. Hotline 0909 075 668.`,
  renovation: (kw, at) =>
    `${kw}${at} — tiết kiệm 20–40%, nâng tầm không gian sống. Báo giá minh bạch từng hạng mục. Gọi 0909 075 668.`,
  build: (kw, at) =>
    `${kw}${at}: thiết kế + thi công trọn gói, bàn giao đúng hạn. Cam kết BH kết cấu 10 năm — 0909 075 668.`,
  pricing: (kw, at) =>
    `Bảng giá ${kw} cập nhật 2026${at}. Minh bạch từng hạng mục, không phát sinh bất ngờ. Sao Khuê — 0909 075 668.`,
  design: (kw, at) =>
    `${kw}${at}: phối cảnh 3D, tối ưu thông gió & ánh sáng. Tư vấn miễn phí — Kiến Trúc Sao Khuê 0909 075 668.`,
  general: (kw, at) =>
    `${kw}${at} uy tín. Khảo sát miễn phí, báo giá rõ từng hạng mục. Sao Khuê — 0909 075 668.`,
};

/**
 * Meta description thu hút click — hook theo intent, tránh template "Dịch vụ ${kw}…" lặp.
 */
export function buildCtrMetaDescription(
  keyword: string,
  opts?: { intent?: MetaTitleIntent; slug?: string; batchTopic?: string; location?: string },
): string {
  const intent = resolveMetaIntent(keyword, opts);
  const kw = titleCaseVi(keyword);
  const at = locationSuffix(keyword, opts?.location);
  return META_DESC_TEMPLATES[intent](kw, at).slice(0, META_DESC_MAX);
}

const EXCERPT_TEMPLATES: Record<MetaTitleIntent, (kw: string, at: string) => string> = {
  repair: (kw, at) => `${kw}${at}: chống thấm trọn gói, khảo sát miễn phí — Sao Khuê BH 10 năm.`,
  renovation: (kw, at) => `${kw}${at}: cải tạo tiết kiệm, đẹp như nhà mới — báo giá rõ từng hạng mục.`,
  build: (kw, at) => `${kw}${at}: thi công trọn gói, bảo hành kết cấu 10 năm — 0909 075 668.`,
  pricing: (kw, at) => `${kw}${at}: bảng giá 2026 minh bạch, không phát sinh — Sao Khuê.`,
  design: (kw, at) => `${kw}${at}: phối cảnh 3D, tư vấn miễn phí — Kiến Trúc Sao Khuê.`,
  general: (kw, at) => `${kw}${at}: khảo sát miễn phí, báo giá rõ ràng — Sao Khuê 0909 075 668.`,
};

/** Excerpt ngắn gọn, khác meta description — dùng trên listing & OG fallback. */
export function buildCtrExcerpt(
  keyword: string,
  opts?: { intent?: MetaTitleIntent; slug?: string; batchTopic?: string; location?: string },
  maxLen = 180,
): string {
  const intent = resolveMetaIntent(keyword, opts);
  const at = locationSuffix(keyword, opts?.location);
  return EXCERPT_TEMPLATES[intent](keyword, at).slice(0, maxLen);
}

export const SITE_HOME = "https://kientrucsaokhue.com/";
export const SITE_FANPAGE = "https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi";

export function slugifyAlt(focusKeyword: string): string {
  return focusKeyword
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function imageFigure(
  src: string,
  focusKeyword: string,
  index: 1 | 2 | 3 | 4 | 5,
): string {
  const kw = focusKeyword.trim();
  return buildInlineImageFigure(src, kw, `${kw} — hình ${index}`);
}

/** Ba liên kết trang chủ trong đoạn văn (yêu cầu brief). */
export function homeLinkParagraph(intro = "Tham khảo thêm thông tin tại"): string {
  return `<p>${intro} <a href="${SITE_HOME}" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="${SITE_HOME}">kientrucsaokhue.com</a> và <a href="${SITE_HOME}">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>`;
}

export function seoCtaBlock(focusKeyword: string): string {
  return `<h2>Liên hệ tư vấn ${focusKeyword}</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>${focusKeyword}</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="${SITE_HOME}">${SITE_HOME}</a></li>
  <li><strong>Fanpage:</strong> <a href="${SITE_FANPAGE}" rel="noopener noreferrer" target="_blank">${SITE_FANPAGE}</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>`;
}

export function faqSection(
  items: { q: string; a: string }[],
  heading = "FAQ — Câu hỏi thường gặp",
): string {
  const body = items
    .map((item) => `<h3>${item.q}</h3>\n<p>${item.a}</p>`)
    .join("\n");
  return `<h2>${heading}</h2>\n${body}`;
}

/** Gỡ khối FAQ khỏi HTML bài viết (h2 FAQ / Câu hỏi thường gặp → các cặp h3 + p). */
export function stripFaqSectionFromHtml(html: string): string {
  return html
    .replace(
      /<h2[^>]*>[^<]*(?:FAQ|Câu hỏi thường gặp)[^<]*<\/h2>[\s\S]*?(?=<h2\b|$)/gi,
      "",
    )
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

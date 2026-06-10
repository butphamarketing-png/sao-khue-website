/**
 * Kiểm tra SEO theo nhóm Rank Math (WordPress) — SEO cơ bản, Bổ sung, Tiêu đề, Nội dung.
 */
import {
  altMatchesFocusKeywordPhrase,
  ARTICLE_IMAGES_TARGET_MIN,
  ARTICLE_WORDS_TARGET_MIN,
  ARTICLE_WORDS_TARGET_MAX,
  auditContentImages,
  contentHasImage,
  countArticleImages,
  getPrimaryFocusKeyword,
  hasArticleToc,
  imageAltContainsFocusKeyword,
  normalizeSeoText,
  parseFocusKeywords,
  shouldInjectArticleToc,
} from "@workspace/seed-content";
import { resolvePostImageAlt } from "@/lib/post-body";
import { countWordsFromHtml, SEO_DESC_MAX, SEO_TITLE_MAX } from "@/lib/seo";
import { plainTextFromHtml } from "@/lib/admin-post-seo";

export type SeoCheckStatus = "pass" | "warn" | "fail" | "skip";

export type SeoCheckSection = "basic" | "additional" | "title" | "content";

export type SeoCheck = {
  id: string;
  section: SeoCheckSection;
  label: string;
  status: SeoCheckStatus;
  detail?: string;
  weight: number;
};

export type SeoLevel = "ok" | "warn" | "error";

export type PostSeoInput = {
  id?: number;
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  imageUrl?: string;
  imageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
};

export type RankMathAuditContext = {
  otherPosts?: Array<{ id?: number; slug: string; metaKeywords?: string }>;
  siteHost?: string;
};

export type RankMathAuditResult = {
  checks: SeoCheck[];
  score: number;
  level: SeoLevel;
  issues: string[];
  primaryKeyword: string;
  stats: {
    wordCount: number;
    keywordCount: number;
    keywordDensityPct: number;
    slugLength: number;
    metaTitleLength: number;
    metaDescLength: number;
  };
};

const SECTION_LABELS: Record<SeoCheckSection, string> = {
  basic: "SEO cơ bản",
  additional: "Bổ sung",
  title: "Khả năng đọc tiêu đề",
  content: "Khả năng đọc nội dung",
};

export function getSeoSectionLabel(section: SeoCheckSection): string {
  return SECTION_LABELS[section];
}

function normalizeHay(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

function hayContains(haystack: string, needle: string): boolean {
  const n = normalizeHay(needle);
  if (!n) return false;
  return normalizeHay(haystack).includes(n);
}

function anyKeywordInText(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => hayContains(text, kw));
}

function countKeywordInText(text: string, keyword: string): number {
  const hay = normalizeHay(text);
  const kw = normalizeHay(keyword);
  if (!kw) return 0;
  let count = 0;
  let pos = 0;
  while (true) {
    const idx = hay.indexOf(kw, pos);
    if (idx === -1) break;
    count += 1;
    pos = idx + kw.length;
  }
  return count;
}

function extractHeadings(html: string): string {
  const chunks: string[] = [];
  const re = /<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    chunks.push(plainTextFromHtml(m[1]));
  }
  return chunks.join(" ");
}

function extractLinks(html: string): Array<{ href: string; rel: string }> {
  const links: Array<{ href: string; rel: string }> = [];
  const re = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const tag = m[0];
    const relMatch = /rel=["']([^"']+)["']/i.exec(tag);
    links.push({ href: m[1], rel: relMatch?.[1] ?? "" });
  }
  return links;
}

function longestParagraphWords(html: string): number {
  const parts = html
    .split(/<\/p>/i)
    .map((p) => plainTextFromHtml(p.replace(/<p[^>]*>/i, "")))
    .filter(Boolean);
  let max = 0;
  for (const p of parts) {
    const w = p.split(/\s+/).filter(Boolean).length;
    if (w > max) max = w;
  }
  if (max === 0) {
    const plain = plainTextFromHtml(html);
    return plain.split(/\s+/).filter(Boolean).length;
  }
  return max;
}

function firstPortionWords(text: string, ratio = 0.1, minWords = 40): string {
  const words = text.split(/\s+/).filter(Boolean);
  const n = Math.max(minWords, Math.ceil(words.length * ratio));
  return words.slice(0, n).join(" ");
}

function push(
  checks: SeoCheck[],
  id: string,
  section: SeoCheckSection,
  label: string,
  status: SeoCheckStatus,
  weight: number,
  detail?: string,
) {
  checks.push({ id, section, label, status, detail, weight });
}

function computeScore(checks: SeoCheck[]): number {
  const active = checks.filter((c) => c.status !== "skip");
  if (!active.length) return 0;
  let earned = 0;
  let total = 0;
  for (const c of active) {
    total += c.weight;
    if (c.status === "pass") earned += c.weight;
    else if (c.status === "warn") earned += c.weight * 0.5;
  }
  return Math.round((earned / total) * 100);
}

function computeLevel(score: number, checks: SeoCheck[]): SeoLevel {
  const criticalFail = checks.some(
    (c) =>
      c.status === "fail" &&
      ["has_title", "has_content", "has_focus_keyword"].includes(c.id),
  );
  if (criticalFail || score < 45) return "error";
  if (score < 82 || checks.some((c) => c.status === "fail")) return "warn";
  return "ok";
}

/** Audit đầy đủ — dùng khi sửa bài (form) hoặc danh sách bài (Post). */
export function auditRankMath(
  post: PostSeoInput,
  context: RankMathAuditContext = {},
): RankMathAuditResult {
  const checks: SeoCheck[] = [];
  const title = (post.title ?? "").trim();
  const slug = (post.slug ?? "").trim();
  const contentHtml = post.content ?? "";
  const plain = plainTextFromHtml(contentHtml);
  const wordCount = countWordsFromHtml(contentHtml);
  const keywords = parseFocusKeywords(post.metaKeywords);
  const primary = getPrimaryFocusKeyword(post.metaKeywords);
  const metaTitle = (post.metaTitle ?? "").trim() || title;
  const metaDesc = (post.metaDescription ?? "").trim() || (post.excerpt ?? "").trim();
  const headingsText = extractHeadings(contentHtml);
  const alt = resolvePostImageAlt({
    slug,
    content: contentHtml,
    imageUrl: post.imageUrl,
    imageAlt: post.imageAlt,
    metaKeywords: post.metaKeywords,
  });

  const keywordCount = primary ? countKeywordInText(plain, primary) : 0;
  const keywordDensityPct =
    wordCount > 0 && primary ? Math.round((keywordCount / wordCount) * 10000) / 100 : 0;

  push(checks, "has_title", "basic", "Đã nhập tiêu đề", title ? "pass" : "fail", 4);
  push(
    checks,
    "has_focus_keyword",
    "basic",
    "Đã có từ khóa chính (focus)",
    keywords.length ? "pass" : "fail",
    4,
  );

  if (!primary) {
    push(checks, "kw_meta_title", "basic", "Từ khóa trong SEO title", "skip", 0);
    push(checks, "kw_meta_desc", "basic", "Từ khóa trong meta description", "skip", 0);
    push(checks, "kw_slug", "basic", "Từ khóa trong URL (slug)", "skip", 0);
    push(checks, "kw_intro", "basic", "Từ khóa trong 10% đầu nội dung", "skip", 0);
    push(checks, "kw_body", "basic", "Từ khóa trong thân bài", "skip", 0);
  } else {
    push(
      checks,
      "kw_meta_title",
      "basic",
      "Từ khóa chính trong SEO title",
      hayContains(metaTitle, primary) ? "pass" : "fail",
      6,
    );
    push(
      checks,
      "kw_meta_desc",
      "basic",
      "Từ khóa chính trong meta description",
      hayContains(metaDesc, primary) ? "pass" : "fail",
      6,
    );
    push(
      checks,
      "kw_slug",
      "basic",
      "Từ khóa chính trong URL (slug)",
      hayContains(slug.replace(/-/g, " "), primary) ? "pass" : "fail",
      5,
    );
    const intro = firstPortionWords(plain);
    push(
      checks,
      "kw_intro",
      "basic",
      "Từ khóa chính trong 10% đầu nội dung",
      hayContains(intro, primary) ? "pass" : "fail",
      6,
    );
    push(
      checks,
      "kw_body",
      "basic",
      "Từ khóa chính trong nội dung",
      hayContains(plain, primary) ? "pass" : "fail",
      6,
    );
  }

  if (wordCount >= ARTICLE_WORDS_TARGET_MIN) {
    const detail =
      wordCount >= ARTICLE_WORDS_TARGET_MAX
        ? `${wordCount} từ (chuẩn ${ARTICLE_WORDS_TARGET_MIN}–${ARTICLE_WORDS_TARGET_MAX})`
        : `${wordCount} từ`;
    push(checks, "content_length", "basic", "Độ dài nội dung (chuẩn WP)", "pass", 5, detail);
  } else if (wordCount >= 600) {
    push(
      checks,
      "content_length",
      "basic",
      "Độ dài nội dung",
      "warn",
      5,
      `${wordCount} từ — nên ${ARTICLE_WORDS_TARGET_MIN}–${ARTICLE_WORDS_TARGET_MAX}`,
    );
  } else {
    push(
      checks,
      "content_length",
      "basic",
      "Độ dài nội dung",
      "fail",
      5,
      `${wordCount} từ (tối thiểu ~600, chuẩn ${ARTICLE_WORDS_TARGET_MIN}+)`,
    );
  }

  if (primary) {
    push(
      checks,
      "kw_headings",
      "additional",
      "Từ khóa trong tiêu đề phụ (H2/H3)",
      anyKeywordInText(headingsText, keywords) ? "pass" : "fail",
      5,
    );
    if (keywordDensityPct >= 0.4 && keywordDensityPct <= 2.5) {
      push(
        checks,
        "keyword_density",
        "additional",
        "Mật độ từ khóa chính",
        "pass",
        4,
        `${keywordDensityPct}% (${keywordCount} lần)`,
      );
    } else if (keywordDensityPct > 0 && keywordDensityPct < 3.5) {
      push(
        checks,
        "keyword_density",
        "additional",
        "Mật độ từ khóa chính",
        "warn",
        4,
        `${keywordDensityPct}% — nên 0,5–2,5%`,
      );
    } else {
      push(
        checks,
        "keyword_density",
        "additional",
        "Mật độ từ khóa chính",
        "fail",
        4,
        `${keywordDensityPct}% (${keywordCount} lần)`,
      );
    }
  } else {
    push(checks, "kw_headings", "additional", "Từ khóa trong H2/H3", "skip", 0);
    push(checks, "keyword_density", "additional", "Mật độ từ khóa", "skip", 0);
  }

  const slugLen = slug.length;
  push(
    checks,
    "url_length",
    "additional",
    "Độ dài URL (slug)",
    slugLen <= 75 ? "pass" : slugLen <= 95 ? "warn" : "fail",
    3,
    `${slugLen} ký tự`,
  );

  const links = extractLinks(contentHtml);
  const host = (context.siteHost ?? "kientrucsaokhue.com").replace(/^www\./, "");
  const internal = links.filter((l) => l.href.startsWith("/") || l.href.startsWith("#"));
  const external = links.filter((l) => {
    if (!/^https?:\/\//i.test(l.href)) return false;
    try {
      const u = new URL(l.href);
      return !u.hostname.replace(/^www\./, "").includes(host);
    } catch {
      return false;
    }
  });
  push(
    checks,
    "internal_links",
    "additional",
    "Liên kết nội bộ trong bài",
    internal.length > 0 ? "pass" : "warn",
    4,
    internal.length ? `${internal.length} link` : "Nên thêm 1–2 link nội bộ",
  );
  push(
    checks,
    "external_links",
    "additional",
    "Liên kết ra website khác",
    external.length > 0 ? "pass" : "warn",
    3,
    external.length ? `${external.length} link` : "Có thể thêm nguồn uy tín",
  );

  if (primary && context.otherPosts?.length) {
    const dup = context.otherPosts.filter((p) => {
      if (post.id != null && p.id === post.id) return false;
      const otherPrimary = parseFocusKeywords(p.metaKeywords)[0] ?? "";
      return (
        otherPrimary &&
        normalizeHay(otherPrimary) === normalizeHay(primary)
      );
    });
    push(
      checks,
      "unique_keyword",
      "additional",
      "Từ khóa chính chưa dùng bài khác",
      dup.length === 0 ? "pass" : "warn",
      4,
      dup.length ? `Trùng ${dup.length} bài: ${dup.map((p) => p.slug).join(", ")}` : undefined,
    );
  } else {
    push(checks, "unique_keyword", "additional", "Từ khóa chính độc nhất", "skip", 0);
  }

  const hasImg =
    Boolean(post.imageUrl?.trim()) || contentHasImage(contentHtml);
  const altHay = normalizeSeoText(alt);
  const titleHay = normalizeSeoText(title);
  const altLooksLikeTitle =
    Boolean(altHay && titleHay && (altHay === titleHay || titleHay.includes(altHay)));
  let altStatus: SeoCheckStatus = "fail";
  let altDetail = alt ? `Alt: ${alt}` : "Thiếu alt";
  if (!hasImg) {
    altStatus = "fail";
    altDetail = "Thiếu ảnh";
  } else if (!alt.trim()) {
    altStatus = "fail";
    altDetail = "Điền alt = cụm từ khóa (không dùng tiêu đề)";
  } else if (altLooksLikeTitle) {
    altStatus = "fail";
    altDetail = "Alt đang giống tiêu đề — dùng cụm từ khóa focus";
  } else if (altMatchesFocusKeywordPhrase(alt, post.metaKeywords)) {
    altStatus = "pass";
    altDetail = `Alt = từ khóa: ${alt}`;
  } else if (imageAltContainsFocusKeyword(alt, post.metaKeywords)) {
    altStatus = "warn";
    altDetail = `Alt có từ khóa nhưng nên chỉ là cụm focus (vd. "${primary}")`;
  } else {
    altStatus = "fail";
    altDetail = primary
      ? `Alt cần chứa từ khóa focus, ví dụ: ${primary}`
      : "Thêm từ khóa SEO rồi điền alt";
  }
  push(checks, "kw_image_alt", "additional", "Alt ảnh = cụm từ khóa (WP)", altStatus, 6, altDetail);

  if (primary) {
    const titleHay = normalizeHay(metaTitle);
    const kwHay = normalizeHay(primary);
    const atStart =
      titleHay.startsWith(kwHay) || titleHay.indexOf(kwHay) <= 12;
    push(
      checks,
      "title_kw_start",
      "title",
      "Từ khóa ở đầu SEO title",
      atStart ? "pass" : "warn",
      5,
    );
  } else {
    push(checks, "title_kw_start", "title", "Từ khóa ở đầu SEO title", "skip", 0);
  }

  push(
    checks,
    "title_has_number",
    "title",
    "Tiêu đề SEO có số (năm, bảng giá…)",
    /\d/.test(metaTitle) ? "pass" : "warn",
    4,
  );

  push(
    checks,
    "meta_title_len",
    "title",
    `Meta title (${SEO_TITLE_MAX} ký tự)`,
    metaTitle.length >= 20 && metaTitle.length <= SEO_TITLE_MAX
      ? "pass"
      : metaTitle.length > SEO_TITLE_MAX
        ? "fail"
        : "warn",
    4,
    `${metaTitle.length} ký tự`,
  );

  push(
    checks,
    "meta_desc_len",
    "title",
    `Meta description (${SEO_DESC_MAX} ký tự)`,
    metaDesc.length >= 80 && metaDesc.length <= SEO_DESC_MAX
      ? "pass"
      : metaDesc.length > SEO_DESC_MAX
        ? "fail"
        : "warn",
    4,
    `${metaDesc.length} ký tự`,
  );

  const imageCount = countArticleImages(contentHtml, post.imageUrl);
  if (imageCount >= ARTICLE_IMAGES_TARGET_MIN) {
    push(
      checks,
      "has_media",
      "content",
      `Có ≥${ARTICLE_IMAGES_TARGET_MIN} ảnh`,
      "pass",
      4,
      `${imageCount} ảnh`,
    );
  } else if (imageCount >= 1 || hasImg) {
    push(
      checks,
      "has_media",
      "content",
      `Có ≥${ARTICLE_IMAGES_TARGET_MIN} ảnh`,
      "warn",
      4,
      `${imageCount} ảnh — thêm ảnh trong bài`,
    );
  } else {
    push(checks, "has_media", "content", "Có ảnh trong bài", "fail", 4, "Thiếu ảnh đại diện / trong nội dung");
  }

  const imgAudit = auditContentImages(post.content ?? "", post.metaKeywords);
  if (imgAudit.total > 0) {
    if (imgAudit.missingAlt > 0) {
      push(
        checks,
        "content_img_alt",
        "additional",
        "Mọi ảnh trong HTML có alt",
        "fail",
        6,
        `${imgAudit.missingAlt}/${imgAudit.total} ảnh thiếu alt`,
      );
    } else if (imgAudit.weakAlt > 0) {
      push(
        checks,
        "content_img_alt",
        "additional",
        "Alt ảnh trong bài = từ khóa focus",
        "warn",
        6,
        `${imgAudit.weakAlt}/${imgAudit.total} ảnh cần sửa alt`,
      );
    } else {
      push(
        checks,
        "content_img_alt",
        "additional",
        "Alt mọi ảnh trong bài = từ khóa (WP)",
        "pass",
        6,
        `${imgAudit.good}/${imgAudit.total} ảnh`,
      );
    }
  } else if (post.imageUrl?.trim()) {
    push(
      checks,
      "content_img_alt",
      "additional",
      "Ảnh trong bài (HTML)",
      imageAltContainsFocusKeyword(alt, post.metaKeywords) ? "pass" : "warn",
      3,
      "Chỉ ảnh đại diện — thêm 1–2 ảnh &lt;img&gt; trong nội dung",
    );
  } else {
    push(checks, "content_img_alt", "additional", "Ảnh + alt trong bài", "fail", 6, "Thiếu ảnh");
  }

  const tocOk =
    hasArticleToc(contentHtml) || shouldInjectArticleToc(contentHtml, wordCount);
  push(
    checks,
    "has_toc",
    "content",
    "Có mục lục (TOC)",
    tocOk ? "pass" : "warn",
    3,
    tocOk ? "Tự chèn khi ≥3 H2" : "Cần ≥3 H2 và ~600+ từ",
  );

  const longPara = longestParagraphWords(contentHtml);
  push(
    checks,
    "short_paragraphs",
    "content",
    "Đoạn văn không quá dài",
    longPara <= 120 ? "pass" : longPara <= 180 ? "warn" : "fail",
    5,
    longPara > 120 ? `Đoạn dài nhất ~${longPara} từ` : undefined,
  );

  push(
    checks,
    "has_excerpt",
    "content",
    "Có tóm tắt / excerpt",
    (post.excerpt ?? "").trim() ? "pass" : "warn",
    3,
  );

  const score = computeScore(checks);
  const level = computeLevel(score, checks);
  const issues = checks
    .filter((c) => c.status === "fail")
    .map((c) => (c.detail ? `${c.label}: ${c.detail}` : c.label))
    .concat(
      checks
        .filter((c) => c.status === "warn")
        .slice(0, 3)
        .map((c) => (c.detail ? `${c.label} (cảnh báo): ${c.detail}` : `${c.label} (cảnh báo)`)),
    )
    .slice(0, 8);

  return {
    checks,
    score,
    level,
    issues,
    primaryKeyword: primary,
    stats: {
      wordCount,
      keywordCount,
      keywordDensityPct,
      slugLength: slugLen,
      metaTitleLength: metaTitle.length,
      metaDescLength: metaDesc.length,
    },
  };
}

export function checksToChecklistItems(
  checks: SeoCheck[] | null | undefined,
): Array<{ label: string; done: boolean; warn?: boolean }> {
  return (checks ?? [])
    .filter((c) => c.status !== "skip")
    .map((c) => ({
      label: c.detail ? `${c.label} — ${c.detail}` : c.label,
      done: c.status === "pass",
      warn: c.status === "warn",
    }));
}

export function groupChecksBySection(
  checks: SeoCheck[],
): Record<SeoCheckSection, SeoCheck[]> {
  const groups: Record<SeoCheckSection, SeoCheck[]> = {
    basic: [],
    additional: [],
    title: [],
    content: [],
  };
  for (const c of checks) {
    if (c.status !== "skip") groups[c.section].push(c);
  }
  return groups;
}

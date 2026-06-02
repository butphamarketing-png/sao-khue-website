/**
 * Static HTML prerender — Google/Facebook nhận nội dung ngay (mạnh hơn SPA thuần).
 * Chạy sau `vite build`.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts } from "../../../lib/seed-content/src/index.ts";
import {
  defaultCategoryPages,
  defaultFaqs,
  defaultPageBanners,
} from "../src/lib/home-content.ts";
import { defaultNavMenu } from "../src/lib/menu.ts";
import {
  getMenuLeafSlug,
  postMatchesSubSlug,
} from "../src/lib/menu-posts.ts";
import { enhanceArticleHtml } from "./lib/prerender-utils.ts";
import {
  breadcrumbListJsonLd,
  buildFAQSchema,
  buildPostBreadcrumbItems,
  itemListJsonLd,
  stripPlainText,
} from "./lib/seo-prerender.ts";
import { getPostPublicPath } from "../src/lib/post-url.ts";
import {
  buildHeadTags,
  buildJsonLdScript,
  escapeHtml,
  absoluteUrl,
  type PrerenderMeta,
} from "./lib/prerender-head.ts";
import type { SeedPost } from "../../../lib/seed-content/src/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(scriptDir, "..", "dist", "public");
const SITE_URL = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://kientrucsaokhue.com").replace(
  /\/$/,
  "",
);
const BRAND = "CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ";
const BRAND_SHORT = "Kiến Trúc Sao Khuê";
const DEFAULT_OG = `${SITE_URL}/images/hero-1.png`;
const FOOTER_DESC =
  "Thiết kế và thi công xây dựng nhà phố, biệt thự trọn gói uy tín tại TP.HCM. Khảo sát miễn phí, báo giá minh bạch, bảo hành kết cấu 10 năm.";

const SHELL_STYLE = `
  <style id="prerender-shell-style">
    .prerender-shell{max-width:52rem;margin:0 auto;padding:1.5rem 1.25rem 3rem;font-family:system-ui,sans-serif;line-height:1.65;color:#1e293b}
    .prerender-shell h1{font-size:1.75rem;color:#17579d;margin:0 0 1rem;line-height:1.25}
    .prerender-shell h2{font-size:1.25rem;color:#17579d;margin:1.5rem 0 .75rem}
    .prerender-shell p{margin:0 0 1rem}
    .prerender-shell a{color:#17579d;font-weight:600}
    .prerender-shell nav{margin:1rem 0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:.5rem 1rem}
    .prerender-shell .excerpt{font-size:1.1rem;color:#475569;border-left:4px solid #e63946;padding-left:1rem;margin:1rem 0}
    .prerender-shell table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.9rem}
    .prerender-shell th,.prerender-shell td{border:1px solid #e2e8f0;padding:.5rem .75rem;text-align:left}
  </style>`;

type PrerenderPage = {
  path: string;
  meta: PrerenderMeta;
  bodyHtml: string;
  jsonLd?: Record<string, unknown>[];
};

const CATEGORY_PATHS: Record<string, keyof typeof defaultCategoryPages> = {
  "/gioi-thieu": "gioi-thieu",
  "/dich-vu": "dich-vu",
  "/cong-trinh": "cong-trinh",
  "/tin-tuc": "tin-tuc",
};

function shell(inner: string): string {
  return `${SHELL_STYLE}<div class="prerender-shell">${inner}</div>`;
}

function navHome(): string {
  return `<nav aria-label="Điều hướng">
    <a href="/">Trang chủ</a> ·
    <a href="/dich-vu">Dịch vụ</a> ·
    <a href="/bao-gia">Báo giá</a> ·
    <a href="/cong-trinh">Công trình</a> ·
    <a href="/tin-tuc">Tin tức</a> ·
    <a href="/lien-he">Liên hệ</a>
  </nav>`;
}

function buildStaticPages(): PrerenderPage[] {
  const pages: PrerenderPage[] = [
    {
      path: "/",
      meta: {
        title: `${BRAND_SHORT} | Thiết kế & xây dựng nhà trọn gói TP.HCM`,
        description: FOOTER_DESC,
        path: "/",
        keywords:
          "xây nhà trọn gói tphcm, thiết kế nhà phố, xây dựng sao khuê, báo giá xây nhà",
        ogImage: DEFAULT_OG,
      },
      bodyHtml: shell(`
        ${navHome()}
        <h1>${escapeHtml(BRAND_SHORT)} — Thiết kế &amp; xây dựng nhà trọn gói TP.HCM</h1>
        <p>${escapeHtml(FOOTER_DESC)}</p>
        <h2>Dịch vụ chính</h2>
        <p><a href="/dich-vu/xay-nha-tron-goi">Xây nhà trọn gói</a>, <a href="/dich-vu/xay-dung-phan-tho">Xây phần thô</a>, <a href="/dich-vu/thiet-ke-nha">Thiết kế nhà</a>, <a href="/dich-vu/sua-chua-nha">Sửa chữa nhà</a>.</p>
        <p><a href="/bao-gia">Xem bảng báo giá &amp; tính chi phí xây dựng</a> · <a href="/lien-he">Liên hệ tư vấn miễn phí</a></p>
        <h2>Câu hỏi thường gặp</h2>
        ${defaultFaqs
          .map(
            (f) =>
              `<h3>${escapeHtml(f.q)}</h3><p>${escapeHtml(stripPlainText(f.a))}</p>`,
          )
          .join("\n        ")}
      `),
      jsonLd: [
        buildFAQSchema(
          defaultFaqs.map((f) => ({ q: f.q, a: stripPlainText(f.a) })),
        ),
      ],
    },
    {
      path: "/bao-gia",
      meta: {
        title: `Báo giá xây dựng 2026 | ${BRAND_SHORT}`,
        description: `${defaultPageBanners.pricing.subtitle} Đơn giá phần thô, trọn gói và máy tính chi phí.`,
        path: "/bao-gia",
        keywords: "báo giá xây nhà, đơn giá xây dựng, xây nhà trọn gói giá",
        ogImage: DEFAULT_OG,
      },
      bodyHtml: shell(`
        ${navHome()}
        <h1>${escapeHtml(defaultPageBanners.pricing.title)}</h1>
        <p>${escapeHtml(defaultPageBanners.pricing.subtitle)}</p>
        <p>Phần thô từ 3,55 triệu/m² · Trọn gói từ 4,85 triệu/m². <a href="/lien-he">Nhận báo giá chi tiết</a>.</p>
      `),
    },
    {
      path: "/lien-he",
      meta: {
        title: `Liên hệ ${BRAND_SHORT} | Hotline 0909 075 668`,
        description: defaultPageBanners.contact.subtitle,
        path: "/lien-he",
        keywords: "liên hệ xây dựng, báo giá xây nhà tphcm",
        ogImage: DEFAULT_OG,
      },
      bodyHtml: shell(`
        ${navHome()}
        <h1>${escapeHtml(defaultPageBanners.contact.title)}</h1>
        <p>${escapeHtml(defaultPageBanners.contact.subtitle)}</p>
        <p>Hotline: <a href="tel:0909075668">0909 075 668</a> · Email: kientrucsaokhue@gmail.com</p>
      `),
    },
  ];

  for (const [path, key] of Object.entries(CATEGORY_PATHS)) {
    const cat = defaultCategoryPages[key];
    pages.push({
      path,
      meta: {
        title: `${cat.title} | ${BRAND_SHORT}`,
        description: cat.description,
        path,
        keywords: `${cat.title}, xây dựng tphcm, ${BRAND_SHORT}`,
        ogImage: DEFAULT_OG,
      },
      bodyHtml: shell(`
        ${navHome()}
        <h1>${escapeHtml(cat.title)}</h1>
        <p>${escapeHtml(cat.description)}</p>
        <p>${cat.highlights.map((h) => escapeHtml(h)).join(" · ")}</p>
      `),
    });
  }

  return pages;
}

function buildMenuSubPages(posts: SeedPost[]): PrerenderPage[] {
  const pages: PrerenderPage[] = [];

  for (const section of defaultNavMenu) {
    if (!section.children?.length || !section.category) continue;

    for (const child of section.children) {
      const path = child.href;
      const leaf = getMenuLeafSlug(path);
      const matched = posts.filter((p) =>
        postMatchesSubSlug(p, leaf, defaultNavMenu),
      );
      const primary = matched[0];
      const description =
        primary?.metaDescription?.trim() ||
        primary?.excerpt ||
        `${child.title} — ${BRAND_SHORT}`;

      const jsonLd: Record<string, unknown>[] = [];
      if (matched.length > 0) {
        jsonLd.push(
          itemListJsonLd(
            matched.map((p) => ({
              name: p.title,
              path: getPostPublicPath(p),
            })),
            SITE_URL,
            child.title,
          ),
        );
      }

      pages.push({
        path,
        meta: {
          title: `${child.title} | ${BRAND_SHORT}`,
          description,
          path,
          keywords: primary?.metaKeywords?.trim(),
          ogImage: primary?.imageUrl ?? DEFAULT_OG,
        },
        jsonLd: jsonLd.length > 0 ? jsonLd : undefined,
        bodyHtml: shell(`
          ${navHome()}
          <h1>${escapeHtml(child.title)}</h1>
          ${primary?.excerpt ? `<p class="excerpt">${escapeHtml(primary.excerpt)}</p>` : `<p>${escapeHtml(description)}</p>`}
          ${
            primary
              ? `<p><a href="/bai-viet/${primary.slug}">Đọc chi tiết: ${escapeHtml(primary.title)}</a></p>`
              : ""
          }
          ${
            matched.length > 1
              ? `<h2>Bài viết liên quan</h2><ul>${matched
                  .slice(1)
                  .map(
                    (p) =>
                      `<li><a href="${escapeHtml(getPostPublicPath(p))}">${escapeHtml(p.title)}</a></li>`,
                  )
                  .join("")}</ul>`
              : ""
          }
        `),
      });
    }
  }

  return pages;
}

function buildPostPages(posts: PrerenderPost[]): PrerenderPage[] {
  return posts.map((post) => {
    const path = getPostPublicPath(post);
    const title = post.metaTitle?.trim() || `${post.title} | ${BRAND_SHORT}`;
    const description = post.metaDescription?.trim() || post.excerpt || "";
    const contentHtml = enhanceArticleHtml(post.content ?? "", post.title);
    const crumbs = buildPostBreadcrumbItems(post);
    const crumbNav = crumbs
      .map(
        (c, i) =>
          i === crumbs.length - 1
            ? escapeHtml(c.name)
            : `<a href="${escapeHtml(c.path)}">${escapeHtml(c.name)}</a>`,
      )
      .join(" › ");
    const wordCount = stripPlainText(post.content ?? "")
      .split(/\s+/)
      .filter(Boolean).length;
    const sectionPath =
      crumbs.length >= 3 ? crumbs[crumbs.length - 2]?.path : `/${post.category}`;

    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description,
        image: post.imageUrl ? [post.imageUrl] : undefined,
        datePublished: (post.createdAt ?? "2026-01-15").slice(0, 10),
        dateModified: (post.updatedAt ?? post.createdAt ?? "2026-01-15").slice(0, 10),
        inLanguage: "vi-VN",
        wordCount: wordCount > 0 ? wordCount : undefined,
        author: { "@type": "Organization", name: BRAND },
        mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(SITE_URL, path) },
      },
      breadcrumbListJsonLd(crumbs, SITE_URL),
    ];

    return {
      path,
      meta: {
        title,
        description,
        path,
        keywords: post.metaKeywords?.trim(),
        ogImage: post.imageUrl || DEFAULT_OG,
        ogType: "article",
        publishedTime: post.createdAt ?? "2026-01-15T00:00:00.000Z",
        modifiedTime: post.updatedAt ?? post.createdAt ?? "2026-01-15T00:00:00.000Z",
      },
      bodyHtml: shell(`
        ${navHome()}
        <nav aria-label="Breadcrumb">${crumbNav}</nav>
        <h1>${escapeHtml(post.title)}</h1>
        ${post.excerpt ? `<p class="excerpt">${escapeHtml(post.excerpt)}</p>` : ""}
        <div class="prose-article">${contentHtml}</div>
        <p><a href="${escapeHtml(sectionPath)}">← Xem tất cả bài trong mục này</a></p>
        <p><strong><a href="/lien-he">Liên hệ ${escapeHtml(BRAND_SHORT)}</a></strong> — khảo sát &amp; báo giá miễn phí.</p>
      `),
      jsonLd,
    };
  });
}

function injectPage(template: string, page: PrerenderPage): string {
  let html = template.replace(/<title>[^<]*<\/title>/i, "");
  html = html.replace(
    /<meta\s+name="description"[^>]*>/i,
    "",
  );
  html = html.replace(/<meta\s+name="keywords"[^>]*>/i, "");
  html = html.replace(/<meta\s+name="robots"[^>]*>/i, "");
  html = html.replace(/<link\s+rel="canonical"[^>]*>/i, "");
  html = html.replace(/<meta\s+property="og:[^"]+"[^>]*>/gi, "");
  html = html.replace(/<meta\s+name="twitter:[^"]+"[^>]*>/gi, "");

  const headInject = [
    buildHeadTags(page.meta, SITE_URL),
    ...(page.jsonLd?.map((j) => buildJsonLdScript(j)) ?? []),
  ].join("\n    ");

  html = html.replace("</head>", `    ${headInject}\n  </head>`);
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${page.bodyHtml}</div>`,
  );
  return html;
}

function writePage(template: string, page: PrerenderPage, outRoot: string) {
  const filePath =
    page.path === "/"
      ? join(outRoot, "index.html")
      : join(outRoot, page.path.slice(1), "index.html");

  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, injectPage(template, page), "utf8");
}

type PrerenderPost = SeedPost & { createdAt?: string; updatedAt?: string };

async function loadPostsForPrerender(): Promise<PrerenderPost[]> {
  // Vercel build: tránh kết nối DB (pg/ssl) — dùng seed. Bật PRERENDER_USE_DB=1 nếu cần.
  if (process.env.VERCEL && process.env.PRERENDER_USE_DB !== "1") {
    return seedPosts;
  }

  const conn =
    process.env.DATABASE_URL ?? process.env.SUPABASE_DATABASE_URL ?? "";
  if (!conn) return seedPosts;

  try {
    const { db, postsTable } = await import("@workspace/db");
    const rows = await db.select().from(postsTable);
    if (rows.length === 0) return seedPosts;
    return rows.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      excerpt: r.excerpt,
      content: r.content,
      imageUrl: r.imageUrl,
      metaTitle: r.metaTitle || undefined,
      metaDescription: r.metaDescription || undefined,
      metaKeywords: r.metaKeywords || undefined,
      createdAt: r.createdAt?.toISOString(),
      updatedAt: r.updatedAt?.toISOString(),
    }));
  } catch (err) {
    console.warn("[prerender] DB unavailable, using seed posts:", err);
    return seedPosts;
  }
}

async function main() {
  const templatePath = join(distDir, "index.html");
  const template = readFileSync(templatePath, "utf8");
  const posts = await loadPostsForPrerender();
  const pages = [
    ...buildStaticPages(),
    ...buildMenuSubPages(posts),
    ...buildPostPages(posts),
  ];

  for (const page of pages) {
    writePage(template, page, distDir);
  }

  console.log(`[prerender] Wrote ${pages.length} HTML pages → ${distDir}`);
  console.log(`[prerender] Site URL: ${SITE_URL}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

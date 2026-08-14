import { useEffect, useMemo } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { CTABanner } from "@/components/CTABanner";
import { useListPosts } from "@workspace/api-client-react";
import { findMenuByPath } from "@/lib/menu";
import { resolvePosts } from "@/lib/posts-with-fallback";
import { categoryLabel, normalizeCategory } from "@/lib/categories";
import {
  useCategoryPages,
  useOpenGraphImage,
  useSiteSettings,
  telHref,
  useNavMenu,
  usePrimaryPhone,
} from "@/lib/site-settings";
import { usePageSeo } from "@/hooks/use-page-seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildItemListSchema,
} from "@/lib/seo";
import { getPostPublicPath } from "@/lib/post-url";
import { resolvePostImageAlt } from "@/lib/post-body";
import { TinTucHubStrip } from "@/components/TinTucHubStrip";
import { CONG_TRINH_CASE_STUDIES } from "@workspace/seed-content";
import { paginatePosts } from "@/lib/post-band";

interface Props {
  category: string;
}

const PER_PAGE = 24;

export default function CategoryPage({ category }: Props) {
  const [location, setLocation] = useLocation();
  const search = useSearch();
  const s = useSiteSettings();
  const menu = useNavMenu();
  const phone = usePrimaryPhone();
  const normalized = normalizeCategory(category);
  const { data: posts, isLoading } = useListPosts({ category: normalized, limit: 1000 });
  const allItems = resolvePosts(posts, { category: normalized });

  const page = useMemo(() => {
    const raw = new URLSearchParams(search).get("trang");
    const n = raw ? parseInt(raw, 10) : 1;
    return Number.isFinite(n) && n > 0 ? n : 1;
  }, [search]);
  const { items, totalPages, total, page: currentPage } = paginatePosts(allItems, page, PER_PAGE);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, currentPage]);

  const currentItem = findMenuByPath(location, menu);
  const pageTitle = currentItem?.title || categoryLabel(category);

  const topItem = menu.find((m) => m.category === normalized);
  const categoryPages = useCategoryPages();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const categoryContent = categoryPages[normalized] ?? categoryPages[category];
  const seoDescription =
    categoryContent?.description ??
    `Tổng hợp bài viết ${pageTitle} — ${brand}. Tư vấn xây dựng, báo giá minh bạch.`;

  const path = location.split("?")[0];
  const breadcrumbs: { name: string; path: string }[] = [{ name: "Trang chủ", path: "/" }];
  if (topItem) {
    breadcrumbs.push({ name: pageTitle, path: topItem.href });
  }

  const jsonLd: Record<string, unknown>[] = [];
  if (breadcrumbs.length > 1) jsonLd.push(buildBreadcrumbSchema(breadcrumbs));
  jsonLd.push(
    buildCollectionPageSchema(pageTitle, seoDescription, absoluteUrl(path)),
  );
  if (items.length > 0) {
    jsonLd.push(
      buildItemListSchema(
        items.slice(0, 24).map((p) => ({
          name: p.title,
          url: absoluteUrl(getPostPublicPath(p, menu)),
        })),
        pageTitle,
      ),
    );
  }

  usePageSeo({
    title: `${pageTitle} | ${brand}`,
    description: seoDescription,
    path,
    noindex: currentPage > 1,
    keywords: `${pageTitle}, xây dựng tphcm, ${brand}`,
    ogImage,
    ogImageAlt: `${pageTitle} — ${brand}`,
    jsonLd: jsonLd.length > 0 ? jsonLd : undefined,
  });

  const isNewsLayout = normalized === "tin-tuc";
  const gridClass = isNewsLayout
    ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";

  function goToPage(next: number) {
    const safe = Math.min(Math.max(1, next), totalPages);
    setLocation(safe === 1 ? path : `${path}?trang=${safe}`);
  }

  return (
    <PageShell>
      <PageBanner title={pageTitle}>
        <Breadcrumbs items={breadcrumbs} light className="mt-4" />
      </PageBanner>

      <CategoryShowcase category={normalized} />

      {isNewsLayout && <TinTucHubStrip />}

      {normalized === "cong-trinh" && (
        <section className="site-container pb-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <h2 className="text-lg font-bold text-primary">Case study thực tế — Sao Khuê</h2>
            <p className="mt-1 text-sm text-slate-600">
              5 công trình nhà phố, biệt thự và cải tạo đã bàn giao tại TP.HCM và lân cận. Mỗi dự án có
              thông số, giải pháp kỹ thuật và ảnh minh họa.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONG_TRINH_CASE_STUDIES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="site-container pb-12 pt-2 lg:pb-16">
        <p className="mb-6 text-slate-600">
          {total > 0
            ? `${total} bài trong mục "${pageTitle}"${totalPages > 1 ? ` — trang ${currentPage}/${totalPages}` : ""}. Chọn bài để xem chi tiết.`
            : `Đang cập nhật nội dung cho mục "${pageTitle}".`}
        </p>

        {isLoading ? (
          <div className={gridClass}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="content-card h-80 animate-pulse" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="content-card border-dashed p-12 text-center">
            <p className="mb-2 text-lg font-semibold text-slate-700">Chưa có bài viết</p>
            <p className="mb-6 text-slate-500">
              Nội dung đang được cập nhật. Liên hệ hotline để được tư vấn trực tiếp.
            </p>
            <a
              href={telHref(phone)}
              className="inline-flex rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:opacity-90"
            >
              Gọi {phone}
            </a>
          </div>
        ) : (
          <div className={gridClass}>
            {items.map((post) => (
              <article
                key={post.id}
                className="card-premium group flex flex-col overflow-hidden"
              >
                <Link
                  href={getPostPublicPath(post, menu)}
                  className="relative block h-48 overflow-hidden bg-slate-100 sm:h-52"
                >
                  <img
                    src={post.imageUrl?.trim() || "/images/project_3.jpg"}
                    alt={resolvePostImageAlt(post)}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    {categoryLabel(post.category)} ·{" "}
                    {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                  </p>
                  <h2 className="mb-3 line-clamp-2 text-base font-bold leading-snug text-slate-800 group-hover:text-primary md:text-lg">
                    <Link href={getPostPublicPath(post, menu)}>{post.title}</Link>
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>
                  <Link
                    href={getPostPublicPath(post, menu)}
                    className="text-sm font-bold uppercase text-primary hover:text-accent"
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {totalPages > 1 && (
          <nav className="qh-bao-gia-pagination mt-8" aria-label={`Phân trang ${pageTitle}`}>
            <button
              type="button"
              className="qh-bao-gia-pagination__btn"
              disabled={currentPage <= 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              ← Trước
            </button>
            <div className="qh-bao-gia-pagination__pages">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`qh-bao-gia-pagination__page ${n === currentPage ? "is-active" : ""}`}
                  onClick={() => goToPage(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="qh-bao-gia-pagination__btn"
              disabled={currentPage >= totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Sau →
            </button>
          </nav>
        )}
      </div>

      <CTABanner />
    </PageShell>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { CTABanner } from "@/components/CTABanner";
import { useListPosts } from "@workspace/api-client-react";
import { findMenuByPath } from "@/lib/menu";
import { useLocation } from "wouter";
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

interface Props {
  category: string;
}

export default function CategoryPage({ category }: Props) {
  const [location] = useLocation();
  const s = useSiteSettings();
  const menu = useNavMenu();
  const phone = usePrimaryPhone();
  const normalized = normalizeCategory(category);
  const { data: posts, isLoading } = useListPosts({ category: normalized });
  const items = resolvePosts(posts, { category: normalized });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    keywords: `${pageTitle}, xây dựng tphcm, ${brand}`,
    ogImage,
    jsonLd: jsonLd.length > 0 ? jsonLd : undefined,
  });

  const isNewsLayout = normalized === "tin-tuc";
  const gridClass = isNewsLayout
    ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3";

  return (
    <PageShell>
      <PageBanner title={pageTitle}>
        <Breadcrumbs items={breadcrumbs} light className="mt-4" />
      </PageBanner>

      <CategoryShowcase category={normalized} />

      <div className="site-container pb-12 pt-2 lg:pb-16">
        <p className="mb-6 text-slate-600">
          {items.length > 0
            ? `${items.length} bài trong mục "${pageTitle}". Chọn bài để xem chi tiết.`
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
      </div>

      <CTABanner />
    </PageShell>
  );
}

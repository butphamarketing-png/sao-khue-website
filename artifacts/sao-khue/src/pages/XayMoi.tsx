import { useEffect, useMemo } from "react";
import { Link, useLocation, useSearch } from "wouter";
import { PageShell } from "@/components/PageShell";
import { XayMoiSidebar } from "@/components/XayMoiSidebar";
import { CostCalculator } from "@/components/CostCalculator";
import { ContactCTASection } from "@/components/ContactCTASection";
import { CTABanner } from "@/components/CTABanner";
import { PageBanner } from "@/components/PageBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useListPosts } from "@workspace/api-client-react";
import { useOpenGraphImage, usePageBanner, useSiteSettings, useNavMenu } from "@/lib/site-settings";
import { usePageSeo } from "@/hooks/use-page-seo";
import { absoluteUrl, buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema } from "@/lib/seo";
import { defaultHomePostsBands } from "@/lib/home-content";
import { paginatePosts, pickBandPosts } from "@/lib/post-band";
import { resolvePosts } from "@/lib/posts-with-fallback";
import { getPostPublicPath } from "@/lib/post-url";
import { resolvePostImageAlt } from "@/lib/post-body";

const PER_PAGE = 12;
const XAY_MOI_BAND = defaultHomePostsBands.find((b) => b.id === "xay-moi")!;

export default function XayMoi() {
  const banner = usePageBanner("xayMoi");
  const s = useSiteSettings();
  const menu = useNavMenu();
  const ogImage = useOpenGraphImage();
  const brand = s.companyName || "Kiến Trúc Sao Khuê";
  const [, setLocation] = useLocation();
  const search = useSearch();

  const page = useMemo(() => {
    const raw = new URLSearchParams(search).get("trang");
    const n = raw ? parseInt(raw, 10) : 1;
    return Number.isFinite(n) && n > 0 ? n : 1;
  }, [search]);

  const { data, isLoading } = useListPosts({ limit: 300 });
  const allPosts = resolvePosts(data, { limit: 300 });
  const allItems = pickBandPosts(allPosts, { ...XAY_MOI_BAND, limit: 999 });
  const { items, totalPages, total, page: currentPage } = paginatePosts(allItems, page, PER_PAGE);

  const xayMoiMenu = menu.find((m) => m.href === "/xay-moi");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const breadcrumbs = [
    { name: "Trang chủ", path: "/" },
    { name: "Xây nhà trọn gói", path: "/xay-moi" },
  ];

  usePageSeo({
    title: `Xây nhà trọn gói 2026 — Chìa khóa trao tay | ${brand}`,
    description:
      banner.subtitle +
      " Tổng hợp bài viết xây nhà mới, nhà phố, biệt thự, nhà cấp 4 và quy trình thi công trọn gói.",
    path: currentPage > 1 ? `/xay-moi?trang=${currentPage}` : "/xay-moi",
    keywords:
      "xây nhà trọn gói, xây nhà mới, xây nhà phố, xây biệt thự, xây nhà tphcm",
    ogImage,
    jsonLd: [
      buildBreadcrumbSchema(breadcrumbs),
      buildCollectionPageSchema("Xây nhà trọn gói", banner.subtitle, absoluteUrl("/xay-moi")),
      ...(items.length > 0
        ? [
            buildItemListSchema(
              items.map((p) => ({
                name: p.title,
                url: absoluteUrl(getPostPublicPath(p, menu)),
              })),
              "Xây nhà trọn gói",
            ),
          ]
        : []),
    ],
  });

  function goToPage(next: number) {
    const safe = Math.min(Math.max(1, next), totalPages);
    setLocation(safe === 1 ? "/xay-moi" : `/xay-moi?trang=${safe}`);
  }

  return (
    <PageShell>
      <PageBanner title={banner.title || "Xây nhà trọn gói"}>
        <Breadcrumbs items={breadcrumbs} light className="mt-4" />
        <p className="mt-3 max-w-2xl text-sm text-blue-100 md:text-base">{banner.subtitle}</p>
      </PageBanner>

      <div className="site-container py-8 lg:py-10">
        <div className="qh-bao-gia-layout">
          <main className="qh-bao-gia-main">
            <p className="mb-5 text-sm text-slate-600">
              {total > 0
                ? `${total} bài xây mới — trang ${currentPage}/${totalPages}`
                : "Đang cập nhật bài xây nhà trọn gói."}
            </p>

            {isLoading ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="qh-home-card h-72 animate-pulse bg-slate-100" />
                ))}
              </div>
            ) : items.length === 0 ? (
              <div className="content-card border-dashed p-10 text-center">
                <p className="text-lg font-semibold text-slate-700">Chưa có bài xây mới</p>
                <p className="mt-2 text-slate-500">Nội dung đang được cập nhật.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {items.map((post) => (
                  <article key={post.id} className="qh-home-card group">
                    <Link href={getPostPublicPath(post, menu)} className="qh-home-card__image-wrap">
                      <img
                        src={post.imageUrl?.trim() || "/images/project_3.jpg"}
                        alt={resolvePostImageAlt(post)}
                        className="qh-home-card__image"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </Link>
                    <div className="qh-home-card__body">
                      <h2 className="qh-home-card__title">
                        <Link href={getPostPublicPath(post, menu)}>{post.title}</Link>
                      </h2>
                      <p className="qh-home-card__excerpt">{post.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <nav className="qh-bao-gia-pagination" aria-label="Phân trang xây mới">
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
          </main>

          <XayMoiSidebar menuChildren={xayMoiMenu?.children} />
        </div>
      </div>

      <CostCalculator titleVariant="qh" />
      <CTABanner />
      <ContactCTASection />
    </PageShell>
  );
}

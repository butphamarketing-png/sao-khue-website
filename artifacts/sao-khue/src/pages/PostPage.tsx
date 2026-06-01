import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Calendar, Clock3, ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CTABanner } from "@/components/CTABanner";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { useGetPostBySlug, useListPosts } from "@workspace/api-client-react";
import { resolvePost, resolvePosts } from "@/lib/posts-with-fallback";
import { resolveLogoUrl, useSiteSettings } from "@/lib/site-settings";
import { usePageSeo } from "@/hooks/use-page-seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  absoluteUrl,
  buildArticleSchema,
  buildBreadcrumbSchema,
  enhanceArticleHtml,
  type BreadcrumbItem,
} from "@/lib/seo";

const CATEGORY_CRUMBS: Record<string, { label: string; path: string }> = {
  "dich-vu": { label: "Dịch vụ", path: "/dich-vu" },
  "gioi-thieu": { label: "Giới thiệu", path: "/gioi-thieu" },
  "cong-trinh": { label: "Công trình", path: "/cong-trinh" },
  "kinh-nghiem": { label: "Kinh nghiệm", path: "/kinh-nghiem" },
};

function estimateReadingMinutes(content: string) {
  const words = content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const site = useSiteSettings();
  const brandName = site.companyName || "Kiến Trúc Sao Khuê";
  const { data: postFromApi, isLoading, error } = useGetPostBySlug(slug);
  const post = resolvePost(slug, postFromApi);
  const { data: posts } = useListPosts({ limit: 12 });
  const relatedPosts = resolvePosts(posts)
    .filter((item) => item.slug !== slug && (!post || item.category === post.category))
    .slice(0, 3);
  const readingMinutes = post ? estimateReadingMinutes(post.content ?? "") : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const postPath = slug ? `/bai-viet/${slug}` : undefined;
  const postTitle = post
    ? post.metaTitle?.trim() || `${post.title} | ${brandName}`
    : isLoading
      ? `Đang tải... | ${brandName}`
      : brandName;
  const postDescription = post
    ? post.metaDescription?.trim() || post.excerpt || ""
    : "";

  const breadcrumbItems: BreadcrumbItem[] = post
    ? (() => {
        const cat = CATEGORY_CRUMBS[post.category];
        const items: BreadcrumbItem[] = [{ name: "Trang chủ", path: "/" }];
        if (cat) items.push({ name: cat.label, path: cat.path });
        items.push({ name: post.title, path: postPath! });
        return items;
      })()
    : [];

  usePageSeo(
    post && postPath
      ? {
          title: postTitle,
          description: postDescription,
          path: postPath,
          keywords: post.metaKeywords?.trim(),
          ogImage: post.imageUrl,
          ogImageAlt: post.title,
          ogType: "article",
          publishedTime: post.createdAt,
          modifiedTime: post.updatedAt,
          jsonLd: [
            buildArticleSchema({
              headline: post.title,
              description: postDescription,
              image: post.imageUrl,
              datePublished: post.createdAt,
              dateModified: post.updatedAt,
              authorName: brandName,
              url: absoluteUrl(postPath),
              publisherLogoUrl: absoluteUrl(resolveLogoUrl(site.logoUrl)),
            }),
            buildBreadcrumbSchema(breadcrumbItems),
          ],
        }
      : null,
  );

  return (
    <PageShell>
      <PageBanner title={post?.title ?? (isLoading ? "Đang tải..." : "Bài viết")}>
        {breadcrumbItems.length > 0 && (
          <Breadcrumbs items={breadcrumbItems} light className="mt-4" />
        )}
      </PageBanner>

      <article
        className="site-container max-w-4xl pb-8 pt-4 md:pb-12 md:pt-6"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <Button asChild variant="ghost" className="mb-6 -ml-2 text-primary hover:text-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại
          </Link>
        </Button>

        {isLoading && (
          <div className="content-card animate-pulse space-y-4 p-8">
            <div className="h-4 w-1/3 rounded bg-slate-200" />
            <div className="h-64 rounded-xl bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-5/6 rounded bg-slate-200" />
          </div>
        )}

        {error && !post && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-700">
            Không tìm thấy bài viết.
          </div>
        )}

        {post && (
          <div className="content-card">
            <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 px-6 py-4 text-sm text-slate-500 md:px-10">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(post.createdAt).toLocaleDateString("vi-VN")}
              </span>
              {readingMinutes && (
                <span className="flex items-center gap-1">
                  <Clock3 size={14} />
                  {readingMinutes} phút đọc
                </span>
              )}
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase text-primary">
                {post.category}
              </span>
            </div>

            <div className="p-6 md:p-10">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="mb-8 max-h-[460px] w-full rounded-xl object-cover"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
              {post.excerpt && (
                <p className="mb-8 border-l-4 border-accent bg-slate-50 py-3 pl-5 text-lg italic leading-relaxed text-slate-700">
                  {post.excerpt}
                </p>
              )}
              <div
                className="prose-article"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{
                  __html: enhanceArticleHtml(post.content ?? ""),
                }}
              />
            </div>
          </div>
        )}

        {post && relatedPosts.length > 0 && (
          <section className="content-card mt-10 p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary">Bài viết liên quan</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/bai-viet/${item.slug}`}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition hover:border-primary hover:bg-white hover:shadow-md"
                >
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-32 w-full object-cover transition group-hover:scale-105"
                    />
                  )}
                  <div className="p-4">
                    <div className="text-xs font-semibold uppercase text-primary">
                      {item.category}
                    </div>
                    <div className="mt-2 line-clamp-2 font-bold text-slate-900 group-hover:text-primary">
                      {item.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTABanner />
    </PageShell>
  );
}

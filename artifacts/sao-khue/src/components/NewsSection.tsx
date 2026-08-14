import { Calendar, Clock3 } from "lucide-react";
import { Link } from "wouter";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useListPosts } from "@workspace/api-client-react";
import { resolvePosts } from "@/lib/posts-with-fallback";
import { useFeaturedPostsConfig, useSectionMeta } from "@/lib/site-settings";
import { pickFeaturedPosts } from "@/lib/featured-posts";
import { getPostPublicPath } from "@/lib/post-url";

function readingMinutes(content: string | null | undefined) {
  const words = (content ?? "").replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function NewsSection() {
  const meta = useSectionMeta();
  const featuredConfig = useFeaturedPostsConfig();
  const { data: posts, isLoading, error } = useListPosts({ limit: 100 });
  
  if (error) {
    console.warn("[NewsSection] Using fallback posts due to error:", error);
  }
  
  const allItems = resolvePosts(posts, { limit: 100 });
  const items = pickFeaturedPosts(allItems, featuredConfig.news, 6);

  return (
    <section id="tin-tuc" className="section-alt">
      <div className="site-container">
        <SectionHeader
          align="left"
          title={meta.news.title}
          subtitle={meta.news.subtitle}
          action={
            <Link
              href="/tin-tuc"
              className="inline-flex rounded-full border border-primary/15 bg-primary/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              Xem tất cả bài viết
            </Link>
          }
        />

        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`news-skeleton-${index}`}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm"
              >
                <Skeleton className="h-56 w-full rounded-2xl" />
                <Skeleton className="mt-4 h-4 w-1/2" />
                <Skeleton className="mt-4 h-6 w-5/6" />
                <Skeleton className="mt-2 h-6 w-3/4" />
                <Skeleton className="mt-4 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-4/5" />
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-slate-500">Chưa có bài viết nào.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {items.slice(0, 6).map((item) => (
              <article
                key={item.id}
                className="card-premium group overflow-hidden"
              >
                <Link
                  href={getPostPublicPath(item)}
                  className="relative block h-60 overflow-hidden bg-slate-100"
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1541889028647-5c256a124021?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-200 text-sm font-medium text-slate-500">
                      Chưa có hình đại diện
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2 py-1">{item.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock3 className="h-3.5 w-3.5" />
                      {readingMinutes(item.content)} phút đọc
                    </span>
                  </div>
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-primary">
                    <Link href={getPostPublicPath(item)}>{item.title}</Link>
                  </h3>
                  <p className="mb-5 line-clamp-3 text-sm leading-7 text-slate-600">
                    {item.excerpt}
                  </p>
                  <Link
                    href={getPostPublicPath(item)}
                    className="inline-flex items-center rounded-full border border-primary/20 px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Đọc tiếp
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

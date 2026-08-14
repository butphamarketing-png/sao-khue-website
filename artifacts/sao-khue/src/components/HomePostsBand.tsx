import { Link } from "wouter";
import type { Post } from "@workspace/api-client-react";
import { useListPosts } from "@workspace/api-client-react";
import { QhSectionTitle } from "@/components/QhSectionTitle";
import { Skeleton } from "@/components/ui/skeleton";
import type { HomePostsBandConfig } from "@/lib/home-content";
import { pickBandPosts } from "@/lib/post-band";
import { resolvePosts } from "@/lib/posts-with-fallback";
import { getPostPublicPath } from "@/lib/post-url";

type Props = {
  config: HomePostsBandConfig;
};

export function HomePostsBand({ config }: Props) {
  const { data, isLoading } = useListPosts({ limit: 200 });
  const allPosts = resolvePosts(data, { limit: 200 });
  const items = pickBandPosts(allPosts, config);
  const limit = config.limit ?? 4;
  const gridClass =
    limit >= 6
      ? "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      : "grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4";

  return (
    <section id={config.id} className="qh-home-band">
      <QhSectionTitle title={config.title} />

      <div className="site-container py-6 md:py-8">
        {isLoading ? (
          <div className={gridClass}>
            {Array.from({ length: limit }).map((_, index) => (
              <div key={`${config.id}-sk-${index}`} className="qh-home-card">
                <Skeleton className="qh-home-card__image" />
                <div className="qh-home-card__body space-y-3">
                  <Skeleton className="h-5 w-4/5" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-sm text-slate-500">Chưa có bài viết cho mục này.</p>
        ) : (
          <div className={gridClass}>
            {items.map((item) => (
              <article key={item.id} className="qh-home-card group">
                <Link href={getPostPublicPath(item)} className="qh-home-card__image-wrap">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="qh-home-card__image"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1541889028647-5c256a124021?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 text-xs text-slate-500">
                      Chưa có hình
                    </div>
                  )}
                </Link>
                <div className="qh-home-card__body">
                  <h3 className="qh-home-card__title">
                    <Link href={getPostPublicPath(item)}>{item.title}</Link>
                  </h3>
                  <p className="qh-home-card__excerpt">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-6 text-center md:mt-8">
          <Link href={config.viewAllHref} className="qh-home-band__cta">
            {config.viewAllLabel ?? "XEM TẤT CẢ BÀI VIẾT"}
          </Link>
        </div>
      </div>
    </section>
  );
}

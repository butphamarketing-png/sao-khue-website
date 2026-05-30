import { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Folder } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageBanner } from "@/components/PageBanner";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { CTABanner } from "@/components/CTABanner";
import { useListPosts } from "@workspace/api-client-react";
import { findMenuByPath, navMenu } from "@/lib/menu";
import { useLocation } from "wouter";
import { normalizePosts } from "@/lib/posts";
import { postMatchesSubSlug } from "@/lib/menu-posts";
import { useSiteSettings, telHref } from "@/lib/site-settings";

const categoryLabels: Record<string, string> = {
  "gioi-thieu": "Giới thiệu",
  "dich-vu": "Dịch vụ",
  "cong-trinh": "Công trình",
  "kinh-nghiem": "Kinh nghiệm xây dựng",
};

interface Props {
  category: string;
  subSlug?: string;
}

export default function CategoryPage({ category, subSlug }: Props) {
  const [location] = useLocation();
  const s = useSiteSettings();
  const { data: posts, isLoading } = useListPosts({ category });
  const items = normalizePosts(posts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const currentItem = findMenuByPath(location);
  const pageTitle = currentItem?.title || categoryLabels[category] || "Bài viết";

  const filteredPosts = subSlug
    ? items.filter((p) => postMatchesSubSlug(p, subSlug))
    : items;

  const topItem = navMenu.find((m) => m.category === category);

  return (
    <PageShell className="bg-slate-50">
      <PageBanner title={pageTitle}>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-blue-100">
          <Link href="/" className="transition hover:text-white">
            Trang chủ
          </Link>
          <span aria-hidden>›</span>
          {topItem && location !== topItem.href && (
            <>
              <Link href={topItem.href} className="transition hover:text-white">
                {categoryLabels[category]}
              </Link>
              <span aria-hidden>›</span>
            </>
          )}
          <span>{pageTitle}</span>
        </div>
      </PageBanner>

      {!subSlug && <CategoryShowcase category={category} />}

      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 lg:grid-cols-4 lg:py-12">
        <main className="lg:col-span-3">
          {subSlug && (
            <p className="mb-6 text-slate-600">
              {filteredPosts.length > 0
                ? `${filteredPosts.length} bài viết trong mục "${pageTitle}".`
                : `Đang cập nhật nội dung cho mục "${pageTitle}".`}
            </p>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-72 animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
                />
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="mb-2 text-lg font-semibold text-slate-700">Chưa có bài viết</p>
              <p className="mb-6 text-slate-500">
                Nội dung đang được cập nhật. Liên hệ hotline để được tư vấn trực tiếp.
              </p>
              <a
                href={telHref(s.hotline1)}
                className="inline-flex rounded-full bg-accent px-6 py-3 font-bold text-white transition hover:opacity-90"
              >
                Gọi {s.hotline1}
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link
                    href={`/bai-viet/${post.slug}`}
                    className="relative block h-52 overflow-hidden bg-slate-100"
                  >
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1541889028647-5c256a124021?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/50 to-transparent" />
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="mb-2 line-clamp-2 text-lg font-bold text-slate-800 group-hover:text-primary">
                      <Link href={`/bai-viet/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.createdAt).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-3 flex-1 text-sm text-slate-600">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/bai-viet/${post.slug}`}
                      className="text-sm font-bold uppercase text-primary hover:text-accent"
                    >
                      Đọc tiếp →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        <aside className="space-y-6 lg:col-span-1">
          {topItem?.children && (
            <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <h3 className="mb-3 flex items-center gap-2 font-bold uppercase text-primary">
                <Folder size={16} />
                Danh mục
              </h3>
              <ul className="space-y-1">
                {topItem.children.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className={`block rounded-lg px-3 py-2.5 text-sm transition hover:bg-slate-50 ${
                        location === c.href
                          ? "bg-primary/10 font-bold text-primary"
                          : "text-slate-700"
                      }`}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl bg-gradient-to-br from-primary to-[#0c4a8a] p-6 text-white shadow-lg">
            <h3 className="mb-2 font-bold uppercase">Yêu cầu báo giá</h3>
            <p className="mb-4 text-sm text-blue-100">
              Liên hệ ngay để được tư vấn miễn phí 24/7.
            </p>
            <a
              href={telHref(s.hotline1)}
              className="block rounded-full bg-accent py-3 text-center font-bold transition hover:opacity-90"
            >
              {s.hotline1}
            </a>
          </div>
        </aside>
      </div>

      <CTABanner />
    </PageShell>
  );
}

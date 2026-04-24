import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Calendar, Clock3 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useGetPostBySlug, useListPosts } from "@workspace/api-client-react";
import { normalizePosts } from "@/lib/posts";

function estimateReadingMinutes(content: string) {
  const words = content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { data: post, isLoading, error } = useGetPostBySlug(slug);
  const { data: posts } = useListPosts({ limit: 12 });
  const relatedPosts = normalizePosts(posts).filter(
    (item) => item.slug !== slug && (!post || item.category === post.category),
  ).slice(0, 3);
  const readingMinutes = post ? estimateReadingMinutes(post.content ?? "") : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const title = post.metaTitle?.trim() || `${post.title} | Kiến Trúc Sao Khuê`;
    document.title = title;
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      if (!content) return;
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", post.metaDescription?.trim() || post.excerpt || "");
    setMeta("keywords", post.metaKeywords?.trim() || "");
    setMeta("og:title", title, "property");
    setMeta("og:description", post.metaDescription?.trim() || post.excerpt || "", "property");
    if (post.imageUrl) setMeta("og:image", post.imageUrl, "property");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.href);

    let schema = document.head.querySelector<HTMLScriptElement>('script[data-structured="article"]');
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.structured = "article";
      document.head.appendChild(schema);
    }
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription?.trim() || post.excerpt || "",
      image: post.imageUrl ? [post.imageUrl] : undefined,
      datePublished: post.createdAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Organization",
        name: "Kien Truc Sao Khue",
      },
      mainEntityOfPage: window.location.href,
    });
  }, [post]);

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar />
      <Header />

      <div className="bg-gradient-to-r from-primary to-blue-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="text-sm text-blue-100 mb-2">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <span className="mx-2">›</span>
            <span>Bài viết</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold">{post?.title ?? (isLoading ? "Đang tải..." : "Bài viết")}</h1>
        </div>
      </div>

      <article className="container mx-auto px-4 py-10 max-w-4xl">
        {isLoading && <p className="text-slate-500">Đang tải...</p>}
        {error && <p className="text-red-600">Không tìm thấy bài viết.</p>}
        {post && (
          <div className="bg-white rounded-lg shadow-sm border p-6 md:p-10">
            <div className="flex items-center text-sm text-slate-500 gap-4 mb-6">
              <span className="flex items-center gap-1"><Calendar size={14} />{new Date(post.createdAt).toLocaleDateString("vi-VN")}</span>
              {readingMinutes && (
                <span className="flex items-center gap-1"><Clock3 size={14} />{readingMinutes} phut doc</span>
              )}
              <span className="bg-slate-100 px-2 py-1 rounded text-xs uppercase">{post.category}</span>
            </div>
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full max-h-[420px] object-cover rounded mb-6"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            )}
            {post.excerpt && (
              <p className="text-lg text-slate-700 italic border-l-4 border-primary pl-4 mb-6">
                {post.excerpt}
              </p>
            )}
            <div
              className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: (post.content ?? "").replace(/\n/g, "<br/>") }}
            />
          </div>
        )}

        {post && relatedPosts.length > 0 && (
          <section className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary">Bai viet lien quan</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  href={`/bai-viet/${item.slug}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-primary hover:bg-white"
                >
                  <div className="text-xs font-semibold uppercase text-primary">{item.category}</div>
                  <div className="mt-2 line-clamp-2 text-base font-bold text-slate-900">{item.title}</div>
                  {item.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">{item.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

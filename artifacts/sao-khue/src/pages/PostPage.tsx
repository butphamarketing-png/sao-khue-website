import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { Calendar } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useGetPostBySlug } from "@workspace/api-client-react";

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const { data: post, isLoading, error } = useGetPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
            />
          </div>
        )}
      </article>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

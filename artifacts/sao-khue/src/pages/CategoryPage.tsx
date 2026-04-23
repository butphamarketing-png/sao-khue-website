import { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Folder } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useListPosts } from "@workspace/api-client-react";
import { findMenuByPath, navMenu } from "@/lib/menu";
import { useLocation } from "wouter";

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
  const { data: posts, isLoading } = useListPosts({ category });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const currentItem = findMenuByPath(location);
  const pageTitle = currentItem?.title || categoryLabels[category] || "Bài viết";

  // If a sub-slug is provided, filter posts whose slug starts with it
  const filteredPosts = subSlug
    ? (posts ?? []).filter((p) => p.slug.startsWith(subSlug))
    : posts ?? [];

  const topItem = navMenu.find((m) => m.category === category);

  return (
    <div className="min-h-screen bg-slate-50">
      <TopBar />
      <Header />

      <div className="bg-gradient-to-r from-primary to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold uppercase">{pageTitle}</h1>
          <div className="mt-2 text-sm text-blue-100">
            <Link href="/" className="hover:text-white">Trang chủ</Link>
            <span className="mx-2">›</span>
            <span>{pageTitle}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3">
          {isLoading ? (
            <p className="text-slate-500">Đang tải bài viết...</p>
          ) : filteredPosts.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center text-slate-500 border">
              Chưa có bài viết trong mục này. Hãy đăng nhập admin để thêm bài viết mới.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-xl transition-shadow group flex flex-col">
                  <Link href={`/bai-viet/${post.slug}`} className="block relative h-52 overflow-hidden bg-slate-100">
                    {post.imageUrl && (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541889028647-5c256a124021?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    )}
                  </Link>
                  <div className="p-5 flex-1 flex flex-col">
                    <h2 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-primary">
                      <Link href={`/bai-viet/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="flex items-center text-xs text-slate-500 gap-3 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={12} />{new Date(post.createdAt).toLocaleDateString("vi-VN")}</span>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                    <Link href={`/bai-viet/${post.slug}`} className="text-sm font-bold text-primary hover:text-accent uppercase">
                      Đọc tiếp →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>

        <aside className="lg:col-span-1 space-y-6">
          {topItem?.children && (
            <div className="bg-white border rounded-lg p-5">
              <h3 className="font-bold text-primary uppercase mb-3 flex items-center gap-2"><Folder size={16} />Danh mục</h3>
              <ul className="space-y-2">
                {topItem.children.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className={`block px-3 py-2 rounded text-sm hover:bg-slate-50 ${
                        location === c.href ? "bg-slate-100 text-primary font-bold" : "text-slate-700"
                      }`}
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-primary text-white rounded-lg p-6">
            <h3 className="font-bold uppercase mb-2">Yêu cầu báo giá</h3>
            <p className="text-sm text-blue-100 mb-4">Liên hệ ngay để được tư vấn miễn phí 24/7.</p>
            <a href="tel:0936045268" className="block bg-accent text-white text-center font-bold py-2 rounded hover:opacity-90">
              0936 045 268
            </a>
          </div>
        </aside>
      </div>

      <Footer />
      <FloatingButtons />
    </div>
  );
}

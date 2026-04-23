import { Calendar } from "lucide-react";
import { Link } from "wouter";
import { useListPosts } from "@workspace/api-client-react";

export function NewsSection() {
  const { data: posts, isLoading } = useListPosts({ limit: 6 });

  return (
    <section id="kinh-nghiem" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
              Bài viết mới nhất
            </h2>
            <div className="w-24 h-1 bg-accent rounded"></div>
          </div>
          <Link href="/kinh-nghiem" className="text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0 uppercase text-sm border-b-2 border-transparent hover:border-accent pb-1">
            Xem tất cả bài viết
          </Link>
        </div>

        {isLoading ? (
          <p className="text-center text-slate-500">Đang tải bài viết...</p>
        ) : (posts ?? []).length === 0 ? (
          <p className="text-center text-slate-500">Chưa có bài viết nào.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(posts ?? []).slice(0, 6).map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group">
                <Link href={`/bai-viet/${item.slug}`} className="block relative h-56 overflow-hidden bg-slate-100">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541889028647-5c256a124021?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded flex items-center">
                    <Calendar className="w-3 h-3 mr-1" /> {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    <Link href={`/bai-viet/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Link href={`/bai-viet/${item.slug}`} className="text-sm font-bold text-primary hover:text-accent uppercase transition-colors">Đọc tiếp →</Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

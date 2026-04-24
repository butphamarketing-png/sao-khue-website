import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useListPosts } from "@workspace/api-client-react";
import { normalizePosts } from "@/lib/posts";

const fallback = [
  { id: 1, title: "Biệt thự hiện đại chị Lan - Q.2", imageUrl: "/images/project_1.jpg", slug: "" },
  { id: 2, title: "Nhà phố tân cổ điển anh Tuấn - Q.7", imageUrl: "/images/project_2.jpg", slug: "" },
  { id: 3, title: "Nhà phố 3 tầng anh Hùng - Bình Thạnh", imageUrl: "/images/project_3.jpg", slug: "" },
  { id: 4, title: "Nội thất căn hộ Vinhomes chị Mai", imageUrl: "/images/interior_2.jpg", slug: "" },
  { id: 5, title: "Biệt thự vườn cô Hoa - Đồng Nai", imageUrl: "/images/project_4.jpg", slug: "" },
  { id: 6, title: "Thiết kế nhà phố kết hợp kinh doanh", imageUrl: "/images/interior_3.jpg", slug: "" },
  { id: 7, title: "Nhà phố hiện đại 4 tầng - Gò Vấp", imageUrl: "/images/interior_4.jpg", slug: "" },
  { id: 8, title: "Biệt thự nghỉ dưỡng chú Ba - Vũng Tàu", imageUrl: "/images/project-1.png", slug: "" },
];

export function ProjectsSection() {
  const { data, isLoading } = useListPosts({ category: "cong-trinh", limit: 8 });
  const posts = normalizePosts(data);
  const projects =
    posts.length > 0
      ? posts.slice(0, 8).map((p) => ({
          id: p.id,
          title: p.title,
          imageUrl: p.imageUrl || "/images/project_1.jpg",
          slug: p.slug,
        }))
      : fallback;

  return (
    <section id="du-an" className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
            Dự án tiêu biểu
          </h2>
          <div className="mx-auto h-1 w-24 rounded bg-accent"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Hàng trăm công trình đã được Sao Khuê thiết kế và thi công, mang lại
            sự hài lòng cho khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`project-skeleton-${index}`}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                  <Skeleton className="mt-4 h-5 w-4/5" />
                  <Skeleton className="mt-3 h-4 w-1/2" />
                </div>
              ))
            : projects.map((project, index) => {
                const link = project.slug ? `/bai-viet/${project.slug}` : "/cong-trinh";
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link
                      href={link}
                      className="relative block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,87,157,0.18)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent opacity-90" />
                        <div className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                          <ArrowUpRight size={20} />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 p-5">
                          <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                            Công trình
                          </div>
                          <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cong-trinh"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 font-bold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
          >
            Xem thêm dự án
          </Link>
        </div>
      </div>
    </section>
  );
}

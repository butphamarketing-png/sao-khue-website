import { motion } from "framer-motion";
import { Link } from "wouter";
import { useListPosts } from "@workspace/api-client-react";

const fallback = [
  { id: 1, title: "Biệt Thự Hiện Đại Chị Lan - Q.2", imageUrl: "/images/project_1.jpg", slug: "" },
  { id: 2, title: "Nhà Phố Tân Cổ Điển Anh Tuấn - Q.7", imageUrl: "/images/project_2.jpg", slug: "" },
  { id: 3, title: "Nhà Phố 3 Tầng Anh Hùng - Bình Thạnh", imageUrl: "/images/project_3.jpg", slug: "" },
  { id: 4, title: "Nội Thất Căn Hộ Vinhomes Chị Mai", imageUrl: "/images/interior_2.jpg", slug: "" },
  { id: 5, title: "Biệt Thự Vườn Cô Hoa - Đồng Nai", imageUrl: "/images/project_4.jpg", slug: "" },
  { id: 6, title: "Thiết Kế Nhà Phố Kết Hợp Kinh Doanh", imageUrl: "/images/interior_3.jpg", slug: "" },
  { id: 7, title: "Nhà Phố Hiện Đại 4 Tầng - Gò Vấp", imageUrl: "/images/interior_4.jpg", slug: "" },
  { id: 8, title: "Biệt Thự Nghỉ Dưỡng Chú Ba - Vũng Tàu", imageUrl: "/images/project-1.png", slug: "" },
];

export function ProjectsSection() {
  const { data } = useListPosts({ category: "cong-trinh", limit: 8 });
  const projects = (data && data.length > 0)
    ? data.slice(0, 8).map((p) => ({ id: p.id, title: p.title, imageUrl: p.imageUrl || "/images/project_1.jpg", slug: p.slug }))
    : fallback;

  return (
    <section id="du-an" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">DỰ ÁN TIÊU BIỂU</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            Hàng trăm công trình đã được Sao Khuê thiết kế và thi công, mang lại sự hài lòng tuyệt đối cho quý khách hàng.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => {
            const link = project.slug ? `/bai-viet/${project.slug}` : "/cong-trinh";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg shadow-sm aspect-[4/3] cursor-pointer"
              >
                <Link href={link} className="block w-full h-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <h3 className="font-bold text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                    <div className="w-10 h-1 bg-accent mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/cong-trinh" className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors rounded-sm uppercase tracking-wide">
            Xem Thêm Dự Án
          </Link>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "wouter";
import { QhSectionTitle } from "@/components/QhSectionTitle";
import { SectionHeader } from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { useListPosts } from "@workspace/api-client-react";
import { resolvePosts } from "@/lib/posts-with-fallback";
import { useFeaturedPostsConfig, useSectionMeta } from "@/lib/site-settings";
import { pickFeaturedByCategory } from "@/lib/featured-posts";
import { getPostPublicPath } from "@/lib/post-url";

const fallback = [
  { id: 1, title: "Xây nhà phố 4 tầng Bình Thạnh", imageUrl: "/images/project_1.jpg", href: "/cong-trinh/xay-nha-pho-binh-thanh" },
  { id: 2, title: "Xây nhà phố Thuận An, Bình Dương", imageUrl: "/images/project_2.jpg", href: "/cong-trinh/xay-nha-pho-thuan-an" },
  { id: 3, title: "Cải tạo nhà phố Quận 3", imageUrl: "/images/project_3.jpg", href: "/cong-trinh/sua-nha-quan-3" },
  { id: 4, title: "Biệt thự sân vườn Thủ Đức", imageUrl: "/images/interior_2.jpg", href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc" },
  { id: 5, title: "Nhà phố phong cách hiện đại", imageUrl: "/images/interior_3.jpg", href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai" },
];

type Props = {
  variant?: "default" | "qh";
};

export function ProjectsSection({ variant = "default" }: Props) {
  const meta = useSectionMeta();
  const featuredConfig = useFeaturedPostsConfig();
  const [activeTab, setActiveTab] = useState<"all" | "ongoing">("all");
  const { data, isLoading } = useListPosts({ category: "cong-trinh", limit: 100 });
  const posts = resolvePosts(data, { category: "cong-trinh", limit: 100 });
  const picked = pickFeaturedByCategory(posts, featuredConfig, "projects", "cong-trinh", 8);
  const projects =
    picked.length > 0
      ? picked.slice(0, 8).map((p) => ({
          id: p.id,
          title: p.title,
          imageUrl: p.imageUrl || "/images/project_1.jpg",
          href: getPostPublicPath(p),
          slug: p.slug,
        }))
      : fallback;

  const visibleProjects =
    activeTab === "ongoing"
      ? projects.filter((p) => "slug" in p && String(p.slug).includes("dang-thi-cong"))
      : projects;

  const displayProjects = (visibleProjects.length > 0 ? visibleProjects : projects).slice(0, 8);

  if (variant === "qh") {
    return (
      <section id="cong-trinh" className="qh-home-band qh-home-projects">
        <QhSectionTitle title="CÔNG TRÌNH TIÊU BIỂU" />

        <div className="site-container py-6 md:py-8">
          <div className="qh-home-projects__tabs">
            <button
              type="button"
              className={activeTab === "all" ? "is-active" : ""}
              onClick={() => setActiveTab("all")}
            >
              Tất cả
            </button>
            <button
              type="button"
              className={activeTab === "ongoing" ? "is-active" : ""}
              onClick={() => setActiveTab("ongoing")}
            >
              Công trình đang thi công
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {isLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <Skeleton key={`project-sk-${index}`} className="aspect-[4/3] w-full rounded-md" />
                ))
              : displayProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={project.href}
                    className="qh-home-project-card group"
                  >
                    <div className="qh-home-project-card__image-wrap">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="qh-home-project-card__image"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </div>
                    <h3 className="qh-home-project-card__title">{project.title}</h3>
                  </Link>
                ))}
          </div>

          <div className="mt-6 text-center md:mt-8">
            <Link href="/cong-trinh" className="qh-home-band__cta">
              XEM TẤT CẢ CÔNG TRÌNH
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cong-trinh" className="section-alt">
      <div className="site-container">
        <SectionHeader title={meta.projects.title} subtitle={meta.projects.subtitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`project-skeleton-${index}`}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                  <Skeleton className="mt-4 h-5 w-4/5" />
                </div>
              ))
            : projects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="line-clamp-2 text-sm font-bold text-slate-800 group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/cong-trinh"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-3 font-bold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
          >
            Xem thêm công trình
          </Link>
        </div>
      </div>
    </section>
  );
}

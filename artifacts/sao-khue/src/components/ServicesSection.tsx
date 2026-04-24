import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useListPosts } from "@workspace/api-client-react";
import { normalizePosts } from "@/lib/posts";

const fallback = [
  { id: "sn", title: "SỬA NHÀ TRỌN GÓI", imageUrl: "/images/service-2.png", slug: "" },
  { id: "xn", title: "XÂY NHÀ TRỌN GÓI", imageUrl: "/images/service-1.png", slug: "" },
  { id: "nt", title: "THIẾT KẾ NỘI THẤT", imageUrl: "/images/interior_1.jpg", slug: "" },
  { id: "xd", title: "THIẾT KẾ XÂY DỰNG", imageUrl: "/images/service-4.png", slug: "" },
];

export function ServicesSection() {
  const { data, isLoading } = useListPosts({ category: "dich-vu", limit: 4 });
  const posts = normalizePosts(data);
  const services =
    posts.length > 0
      ? posts.slice(0, 4).map((p) => ({
          id: String(p.id),
          title: p.title.toUpperCase(),
          imageUrl: p.imageUrl || "/images/service-1.png",
          slug: p.slug,
        }))
      : fallback;

  return (
    <section id="dich-vu" className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-primary md:text-4xl">
            Dịch vụ của chúng tôi
          </h2>
          <div className="mx-auto h-1 w-24 rounded bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={`service-skeleton-${index}`}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Skeleton className="h-64 w-full rounded-2xl" />
                  <Skeleton className="mt-4 h-5 w-3/4" />
                  <Skeleton className="mt-3 h-10 w-32 rounded-full" />
                </div>
              ))
            : services.map((service, index) => {
                const link = service.slug ? `/bai-viet/${service.slug}` : "/dich-vu";
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <Card className="group overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,87,157,0.18)]">
                      <div className="relative h-72 overflow-hidden">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent transition-colors group-hover:from-slate-950/95" />
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800";
                          }}
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-left">
                          <div className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur">
                            Dịch vụ
                          </div>
                          <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-white transition-transform duration-300 group-hover:-translate-y-1">
                            {service.title}
                          </h3>
                          <Link
                            href={link}
                            className="inline-flex w-fit items-center rounded-full border border-white/80 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent"
                          >
                            Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/dich-vu"
            className="inline-flex items-center rounded-full border-2 border-primary px-7 py-3 font-bold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
          >
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
}

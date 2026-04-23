import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useListPosts } from "@workspace/api-client-react";

const fallback = [
  { id: "sn", title: "SỬA NHÀ TRỌN GÓI", imageUrl: "/images/service-2.png", slug: "" },
  { id: "xn", title: "XÂY NHÀ TRỌN GÓI", imageUrl: "/images/service-1.png", slug: "" },
  { id: "nt", title: "THIẾT KẾ NỘI THẤT", imageUrl: "/images/interior_1.jpg", slug: "" },
  { id: "xd", title: "THIẾT KẾ XÂY DỰNG", imageUrl: "/images/service-4.png", slug: "" },
];

export function ServicesSection() {
  const { data } = useListPosts({ category: "dich-vu", limit: 4 });
  const services = (data && data.length > 0)
    ? data.slice(0, 4).map((p) => ({ id: String(p.id), title: p.title.toUpperCase(), imageUrl: p.imageUrl || "/images/service-1.png", slug: p.slug }))
    : fallback;

  return (
    <section id="dich-vu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">DỊCH VỤ CỦA CHÚNG TÔI</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const link = service.slug ? `/bai-viet/${service.slug}` : "/dich-vu";
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group border-none shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
                      <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">{service.title}</h3>
                      <Link href={link} className="inline-flex items-center text-white border border-white px-4 py-2 text-sm font-semibold hover:bg-accent hover:border-accent transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                        XEM CHI TIẾT <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/dich-vu" className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition uppercase tracking-wide rounded-sm">
            Xem tất cả dịch vụ
          </Link>
        </div>
      </div>
    </section>
  );
}

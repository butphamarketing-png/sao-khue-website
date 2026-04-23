import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "sn",
    title: "SỬA NHÀ TRỌN GÓI",
    image: "/images/service-2.png",
    link: "/dich-vu"
  },
  {
    id: "xn",
    title: "XÂY NHÀ TRỌN GÓI",
    image: "/images/service-1.png",
    link: "/dich-vu"
  },
  {
    id: "nt",
    title: "THIẾT KẾ NỘI THẤT",
    image: "/images/interior_1.jpg",
    link: "/dich-vu"
  },
  {
    id: "xd",
    title: "THIẾT KẾ XÂY DỰNG",
    image: "/images/service-4.png",
    link: "/dich-vu"
  }
];

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            DỊCH VỤ CỦA CHÚNG TÔI
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">{service.title}</h3>
                    <Link href={service.link} className="inline-flex items-center text-white border border-white px-4 py-2 text-sm font-semibold hover:bg-accent hover:border-accent transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 duration-300">
                      XEM CHI TIẾT <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

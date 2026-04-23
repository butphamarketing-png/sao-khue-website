import { motion } from "framer-motion";
import { Link } from "wouter";

const services = [
  { id: "01", title: "XÂY NHÀ\nTRỌN GÓI", link: "/bao-gia" },
  { id: "02", title: "SỬA CHỮA\nNHÀ", link: "/bao-gia" },
  { id: "03", title: "XÂY DỰNG\nPHẦN THÔ", link: "/bao-gia" },
  { id: "04", title: "THIẾT KẾ\nNHÀ", link: "/dich-vu" },
];

export function QuoteSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase tracking-wide">
            BẢNG BÁO GIÁ
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <Link href={service.link} className="group block">
                <div className="relative w-64 h-64">
                  {/* Dashed outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 group-hover:border-primary transition-colors duration-500 group-hover:rotate-180 transform transition-transform"
                       style={{ transitionDuration: '1.5s' }} />

                  {/* Inner solid blue circle */}
                  <div className="absolute inset-3 rounded-full bg-primary flex flex-col items-center justify-center text-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold uppercase text-center leading-tight whitespace-pre-line px-4">
                      {service.title}
                    </h3>

                    {/* Red XEM CHI TIẾT pill at bottom */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase px-5 py-2 rounded-full shadow-lg group-hover:bg-accent/90 whitespace-nowrap tracking-wider">
                      Xem chi tiết
                    </div>
                  </div>

                  {/* Red number badge top-left */}
                  <div className="absolute -top-1 -left-1 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-xl border-4 border-white z-10">
                    {service.id}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

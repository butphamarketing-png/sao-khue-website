import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  const points = [
    "Khách hàng là trên hết - Luôn lắng nghe và thấu hiểu",
    "Sáng tạo không ngừng - Mang đến thiết kế độc bản",
    "Đội ngũ giàu kinh nghiệm, tận tâm với từng dự án",
    "Cam kết hành động, thi công đúng tiến độ và chất lượng"
  ];

  return (
    <section id="gioi-thieu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 transform -skew-y-3 z-0 rounded-3xl" />
            <img 
              src="/images/about.png" 
              alt="Đội ngũ Kiến Trúc Sao Khuê" 
              className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-primary text-white p-6 rounded-lg shadow-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm font-medium opacity-90">Năm Kinh Nghiệm<br/>Xây Dựng</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-10 bg-accent rounded"></div>
              <h3 className="text-accent font-bold uppercase tracking-wider text-sm">Về Chúng Tôi</h3>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ
            </h2>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-lg text-justify">
              Chuyên thiết kế, thi công xây dựng, sửa chữa và cải tạo nhà trọn gói tại Tp.HCM, Bình Dương, Đồng Nai và các tỉnh lân cận. Sứ mệnh của chúng tôi là mang lại không gian sống và làm việc lý tưởng cho mỗi khách hàng.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-justify">
              Với tầm nhìn trở thành công ty hàng đầu trong ngành kiến trúc và xây dựng, KIẾN TRÚC SAO KHUÊ tự hào sở hữu đội ngũ kiến trúc sư, kỹ sư giỏi chuyên môn, giàu nhiệt huyết, luôn đặt chất lượng công trình và sự hài lòng của khách hàng lên hàng đầu.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mr-3 mt-0.5" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-sm px-8">
              <Link href="/gioi-thieu">
                XEM CHI TIẾT <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

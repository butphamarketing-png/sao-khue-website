import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactCTASection() {
  return (
    <section id="lien-he" className="relative py-20 bg-primary">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/images/hero-3.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight uppercase">
              LIÊN HỆ TƯ VẤN <br/><span className="text-accent">MIỄN PHÍ</span>
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Để lại thông tin, đội ngũ kiến trúc sư và kỹ sư của Sao Khuê sẽ liên hệ tư vấn và khảo sát tận nơi hoàn toàn miễn phí cho bạn.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent text-xl">📞</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Hotline Tư Vấn 24/7</div>
                  <div className="text-2xl font-bold text-accent">0936 045 268</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-accent text-xl">🏢</span>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Trụ sở chính</div>
                  <div className="text-lg font-semibold">245/8 Bình Lợi, P. 13, Bình Thạnh</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">NHẬN BÁO GIÁ NGAY</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Họ và tên *</label>
                    <Input placeholder="Nhập họ tên của bạn" className="bg-slate-50 border-slate-200" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Số điện thoại *</label>
                    <Input placeholder="Nhập số điện thoại" type="tel" className="bg-slate-50 border-slate-200" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input placeholder="Nhập địa chỉ email" type="email" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Dịch vụ quan tâm</label>
                  <select className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Chọn dịch vụ</option>
                    <option value="Xây nhà trọn gói">Xây nhà trọn gói</option>
                    <option value="Sửa chữa nhà">Sửa chữa nhà</option>
                    <option value="Xây dựng phần thô">Xây dựng phần thô</option>
                    <option value="Thiết kế nội thất/kiến trúc">Thiết kế nội thất/kiến trúc</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Nội dung yêu cầu</label>
                  <Textarea placeholder="Vui lòng mô tả sơ bộ về nhu cầu của bạn (diện tích, quy mô, ý tưởng...)" className="bg-slate-50 border-slate-200 min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg rounded uppercase tracking-wider">
                  GỬI YÊU CẦU
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

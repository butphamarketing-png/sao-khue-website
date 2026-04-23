import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, PencilRuler, FileText, Hammer, ShieldCheck } from "lucide-react";

const steps = [
  { id: 1, icon: <PhoneCall size={32} />, title: "Tiếp Nhận Yêu Cầu", desc: "Lắng nghe nhu cầu, tư vấn sơ bộ và đặt lịch hẹn khảo sát." },
  { id: 2, icon: <ClipboardCheck size={32} />, title: "Khảo Sát Thực Tế", desc: "Kỹ sư đo đạc, khảo sát hiện trạng và tư vấn giải pháp tối ưu." },
  { id: 3, icon: <PencilRuler size={32} />, title: "Thiết Kế 2D/3D", desc: "Lên phương án kiến trúc, nội thất chi tiết chốt với khách hàng." },
  { id: 4, icon: <FileText size={32} />, title: "Báo Giá & Ký HĐ", desc: "Lập dự toán chi tiết, minh bạch vật tư và ký hợp đồng thi công." },
  { id: 5, icon: <Hammer size={32} />, title: "Thi Công Xây Dựng", desc: "Triển khai thi công an toàn, giám sát chất lượng và tiến độ chặt chẽ." },
  { id: 6, icon: <ShieldCheck size={32} />, title: "Bàn Giao & Bảo Hành", desc: "Nghiệm thu, vệ sinh công trình, bàn giao và kích hoạt bảo hành." },
];

export function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            QUY TRÌNH LÀM VIỆC
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            Sao Khuê áp dụng quy trình làm việc chuẩn hóa, chuyên nghiệp giúp khách hàng tiết kiệm thời gian và hoàn toàn an tâm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line (visible on large screens) */}
          <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0 border-t-2 border-dashed border-slate-300"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-slate-100 shadow-lg text-primary group-hover:bg-primary group-hover:text-white group-hover:border-accent transition-all duration-300 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md">
                  {step.id}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 mb-3 text-primary">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

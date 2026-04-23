import { Shield, ThumbsUp, Clock, MapPin, DollarSign, Users, Award, Zap, FileX2 } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  { id: 1, icon: <Shield size={32} />, title: "KHÔNG BÁN THẦU", desc: "Sao Khuê trực tiếp thi công, quản lý nghiêm ngặt chất lượng dự án." },
  { id: 2, icon: <ThumbsUp size={32} />, title: "VẬT TƯ CHẤT LƯỢNG", desc: "Cam kết sử dụng đúng chủng loại vật tư chính hãng đã ký kết." },
  { id: 3, icon: <Clock size={32} />, title: "ĐÚNG TIẾN ĐỘ", desc: "Quản lý tiến độ chuyên nghiệp, bàn giao nhà đúng thời hạn." },
  { id: 4, icon: <MapPin size={32} />, title: "TƯ VẤN MIỄN PHÍ", desc: "Khảo sát và tư vấn tận nơi miễn phí, nhiệt tình, nhanh chóng." },
  { id: 5, icon: <DollarSign size={32} />, title: "BÁO GIÁ CẠNH TRANH", desc: "Bảng giá chi tiết, minh bạch, phù hợp với ngân sách của bạn." },
  { id: 6, icon: <Users size={32} />, title: "ĐỘI NGŨ CHUYÊN NGHIỆP", desc: "Kiến trúc sư, kỹ sư, thợ thi công lành nghề, giàu kinh nghiệm." },
  { id: 7, icon: <Award size={32} />, title: "CAM KẾT BẢO HÀNH", desc: "Bảo hành kết cấu 10 năm, bảo hành hoàn thiện 1-3 năm." },
  { id: 8, icon: <Zap size={32} />, title: "SÁNG TẠO, THẨM MỸ", desc: "Thiết kế hiện đại, tối ưu công năng và tính thẩm mỹ cao." },
  { id: 9, icon: <FileX2 size={32} />, title: "KHÔNG PHÁT SINH", desc: "Dự toán chính xác 99%, cam kết không phát sinh chi phí." },
];

export function CommitmentsSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\"%3E%3Cpath d=\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
            9 CAM KẾT VÀNG CỦA SAO KHUÊ
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
          <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Sự an tâm của khách hàng là thước đo thành công của chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg p-6 transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="text-accent bg-white rounded-full p-3 group-hover:scale-110 transition-transform shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export function PricingTableSection() {
  return (
    <section id="bao-gia" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 uppercase">
            BẢNG GIÁ THAM KHẢO
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Thô */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-primary hover:shadow-xl transition-shadow">
            <div className="p-8 text-center bg-slate-50 border-b">
              <h3 className="text-2xl font-bold text-primary mb-2">XÂY DỰNG PHẦN THÔ</h3>
              <div className="text-3xl font-bold text-accent my-4">3.550.000 <span className="text-lg text-slate-500 font-normal">-</span> 3.800.000<span className="text-lg text-slate-500 font-normal">đ/m²</span></div>
              <p className="text-slate-500 text-sm">Bao gồm nhân công và vật tư thô</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Cung cấp vật tư thô (cát, đá, xi măng, sắt thép...)</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Nhân công xây thô toàn bộ công trình</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Nhân công hoàn thiện (ốp lát, sơn bả...)</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Lắp đặt hệ thống điện nước âm tường</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Bảo hành kết cấu 10 năm</li>
              </ul>
              <Link href="/lien-he" className="block w-full py-3 px-4 bg-primary text-white text-center font-bold rounded hover:bg-primary/90 transition-colors uppercase">
                Nhận Báo Giá Chi Tiết
              </Link>
            </div>
          </div>

          {/* Trọn gói */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-accent relative hover:shadow-xl transition-shadow transform lg:-translate-y-4">
            <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase animate-pulse">Phổ biến</div>
            <div className="p-8 text-center bg-slate-50 border-b">
              <h3 className="text-2xl font-bold text-primary mb-2">XÂY NHÀ TRỌN GÓI</h3>
              <div className="text-3xl font-bold text-accent my-4">4.850.000 <span className="text-lg text-slate-500 font-normal">-</span> 6.700.000<span className="text-lg text-slate-500 font-normal">đ/m²</span></div>
              <p className="text-slate-500 text-sm">Chìa khóa trao tay - Vào ở ngay</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Bao gồm toàn bộ dịch vụ xây thô</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Cung cấp vật tư hoàn thiện (gạch, sơn, thiết bị...)</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Lắp đặt cửa, lan can, cầu thang, thiết bị vệ sinh</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Miễn phí thiết kế kiến trúc 2D/3D</li>
                <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0" /> Bảo hành hoàn thiện 12-36 tháng</li>
              </ul>
              <Link href="/lien-he" className="block w-full py-3 px-4 bg-accent text-white text-center font-bold rounded hover:bg-accent/90 transition-colors uppercase">
                Nhận Báo Giá Chi Tiết
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-slate-600 italic text-sm">
          * Đơn giá có thể thay đổi tùy thuộc vào quy mô, vị trí công trình và chủng loại vật tư. Vui lòng liên hệ trực tiếp để có báo giá chính xác nhất.
        </div>
      </div>
    </section>
  );
}

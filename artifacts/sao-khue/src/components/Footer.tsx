import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, ArrowRight, Map } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 */}
          <div>
            <img 
              src="https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg" 
              alt="Logo" 
              className="h-16 mb-6 bg-white p-2 rounded"
            />
            <h3 className="text-white font-bold text-lg mb-4">CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Uy tín – Chất lượng – Tận tâm. Chúng tôi chuyên thiết kế và thi công xây dựng nhà phố, biệt thự chuyên nghiệp.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-white">Trụ sở:</strong> 245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM</span>
              </div>
              <div className="flex items-start gap-3">
                <Map className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-white">VP:</strong> 146 đường 16, khu đô thị Vạn Phúc</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-white">Hotline:</strong> 0936 045 268 / 0909 075 668</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span><strong className="text-white">Email:</strong> kientrucsaokhue@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              LIÊN KẾT NHANH
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              <li><Link href="/" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Trang chủ</Link></li>
              <li><Link href="/gioi-thieu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Giới thiệu</Link></li>
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Dịch vụ</Link></li>
              <li><Link href="/bao-gia" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Bảng báo giá</Link></li>
              <li><Link href="/du-an" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Dự án tiêu biểu</Link></li>
              <li><Link href="/lien-he" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Liên hệ</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              DỊCH VỤ CỦA CHÚNG TÔI
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded"></span>
            </h3>
            <ul className="space-y-3 mt-4">
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Xây nhà trọn gói</Link></li>
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Sửa chữa nhà trọn gói</Link></li>
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Xây dựng phần thô</Link></li>
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Thiết kế kiến trúc</Link></li>
              <li><Link href="/dich-vu" className="hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Thiết kế nội thất</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              BẢN ĐỒ
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded"></span>
            </h3>
            <div className="w-full h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden mt-4 group">
              <div className="absolute inset-0 bg-slate-800/80 group-hover:bg-slate-800/60 transition-colors flex flex-col items-center justify-center p-4 text-center">
                <MapPin className="w-8 h-8 text-accent mb-2" />
                <span className="text-white font-semibold block mb-1">KIẾN TRÚC SAO KHUÊ</span>
                <span className="text-xs text-slate-300">245/8 Bình Lợi, Q. Bình Thạnh, TP.HCM</span>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <a href="https://facebook.com/kientrucsaokhue" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} KIẾN TRÚC SAO KHUÊ. All rights reserved.</p>
          <p className="mt-2 md:mt-0">MST: 0317734955 | Website by Replit</p>
        </div>
      </div>
    </footer>
  );
}

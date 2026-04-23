import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, ArrowRight, Map } from "lucide-react";
import { Link } from "wouter";
import { useSiteSettings } from "@/lib/site-settings";

export function Footer() {
  const s = useSiteSettings();
  const phones = [s.hotline1, s.hotline2].filter(Boolean).join(" / ");
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 */}
          <div>
            <img src={s.logoUrl} alt={s.companyName} className="h-16 mb-6 bg-white p-2 rounded" />
            <h3 className="text-white font-bold text-lg mb-4">{s.companyName}</h3>
            <p className="mb-4 text-sm leading-relaxed">{s.footerDescription}</p>
            <div className="space-y-3 text-sm">
              {s.address1 && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><strong className="text-white">Trụ sở:</strong> {s.address1}</span>
                </div>
              )}
              {s.address2 && (
                <div className="flex items-start gap-3">
                  <Map className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><strong className="text-white">VP:</strong> {s.address2}</span>
                </div>
              )}
              {phones && (
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><strong className="text-white">Hotline:</strong> {phones}</span>
                </div>
              )}
              {s.email && (
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span><strong className="text-white">Email:</strong> {s.email}</span>
                </div>
              )}
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
                <span className="text-white font-semibold block mb-1">{s.companyName}</span>
                <span className="text-xs text-slate-300">{s.address1}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              {s.facebookUrl && (
                <a href={s.facebookUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              )}
              {s.youtubeUrl && (
                <a href={s.youtubeUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              )}
              {s.instagramUrl && (
                <a href={s.instagramUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {s.companyName}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">{s.taxCode ? `MST: ${s.taxCode} | ` : ""}Website by Replit</p>
        </div>
      </div>
    </footer>
  );
}

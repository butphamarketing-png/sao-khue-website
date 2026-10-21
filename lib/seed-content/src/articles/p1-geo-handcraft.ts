/**
 * P1 geo money pages — bài hand-craft (không khung batch 3).
 * Merge sau batch3 để thắng template factory.
 */
import { faqSection } from "../article-seo-blocks";

type MoneyPageOverride = {
  title?: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  content: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const p1GeoHandcraftOverrides: Record<string, MoneyPageOverride> = {
  "xay-nha-tron-goi-quan-7": {
    title: "Xây Nhà Trọn Gói Quận 7 — KDC Nam Sài Gòn & Hẻm Tân Thuận 2026",
    excerpt:
      "Xây nhà trọn gói Quận 7: Phú Mỹ Hưng / Tân Phong vs hẻm Tân Thuận, facade BQL, đơn giá 2026. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Quận 7 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Quận 7: KDC PMH 5–8 tỷ, hẻm Tân Thuận 3,8–5,8 tỷ, facade BQL. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói quận 7, xây nhà trọn gói giá rẻ quận 7, xây nhà quận 7, nhà thầu quận 7, sao khuê",
    imageAlt: "Xây nhà trọn gói Quận 7 — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Quận 7 — hai hiện trạng, hai gói giá</h2>
<p><strong>Xây nhà trọn gói Quận 7</strong> không dùng một đơn giá m² cho cả quận. Phú Mỹ Hưng, Tân Phong, Tân Hưng: KDC quy chuẩn, đường xe tải, facade phải duyệt ban quản lý. Tân Thuận Đông / Tây, hẻm cũ: logistics hẹp, GPXD theo phường Q.7, ít nội quy KDC. <strong>Kiến Trúc Sao Khuê</strong> khảo sát miễn phí, tách hai gói ngay từ dự toán — BH kết cấu <strong>10 năm</strong>.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-quan-7">xây nhà Quận 7</a> · Pillar: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a> · Cải tạo: <a href="/tin-tuc/cai-tao-nha-quan-7">cải tạo nhà Quận 7</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Quận 7 (2026)</h2>
<table>
  <thead><tr><th>Phân khúc Q.7</th><th>Mốc trọn gói (tham khảo)</th><th>Đặc thù</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng, hẻm Tân Thuận</td><td>3,8 – 5,8 tỷ</td><td>+ logistics hẻm 8–12%</td></tr>
    <tr><td>Nhà phố 4 tầng KDC / hoàn thiện cao</td><td>5,0 – 8,0 tỷ</td><td>Facade, cửa kính tách dòng</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Chưa nội thất gỗ, chưa cọc</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Quận 7</strong> khả thi ở hẻm cũ với gói tiêu chuẩn (cắt phào/đèn). Trong KDC, “giá rẻ” thường vỡ vì quy chế mặt đứng — xem <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a> trước khi so m² mạng.</p>

<h2>KDC Nam Sài Gòn — facade, giờ ồn, rác</h2>
<p>Phú Mỹ Hưng và nhiều KDC Tân Phong: BQL duyệt màu sơn, hàng rào, mái, biển. Cửa kính lớn, đá ốp, đèn âm — <strong>phụ lục</strong>, không nuốt vào m² trọn gói. Giờ đổ bê tông và xe phế thải theo nội quy khu. Sao Khuê hỏi quy chế trước khi chốt 3D — tránh làm xong bị yêu cầu hoàn trả mặt đứng.</p>

<h2>Hẻm Tân Thuận — logistics và liền kề</h2>
<p>Hẻm 2,5–4m: bơm bê tông từ mặt tiền, ca sớm, xe phế thải nhỏ. Nhà sát: biên bản tường chung trước đào móng. Không copy hồ sơ KDC sang hẻm (và ngược lại).</p>

<h2>Giấy phép xây dựng tại Quận 7</h2>
<p>KDC: GPXD phường + nội quy BQL. Hẻm: GPXD phường Q.7, lộ giới, số tầng. Sao Khuê không thi công vượt phép. Chi tiết: <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin GPXD TP.HCM</a>.</p>

<h2>Quy trình trọn gói 6 bước tại Q.7</h2>
<ol>
  <li>Gửi ảnh: KDC hay hẻm, mặt tiền, sổ (che số), số tầng.</li>
  <li>Khảo sát: facade BQL (nếu có), hẻm, nền.</li>
  <li>Thiết kế 2D/3D khớp quy chế khu.</li>
  <li>Báo giá tách facade / hẻm / cọc; ký HĐ list vật tư.</li>
  <li>Thi công: KDC thường 6–10 tháng (duyệt mặt đứng); hẻm 5–8 tháng.</li>
  <li>Nghiệm thu, BH kết cấu 10 năm.</li>
</ol>
<p>Quy trình chuẩn: <a href="/dich-vu/xay-nha-tron-goi-tphcm">pillar trọn gói</a>.</p>

<h2>Shophouse và nhà ở kết hợp kinh doanh</h2>
<p>Một số tuyến Q.7 trệt quán + lầu ở: tách điện, WC khách, PCCC. Xem <a href="/tin-tuc/xay-shophouse-tphcm">xây shophouse TP.HCM</a>. Chốt thô hay trọn gói trước phụ lục cửa kính.</p>

${faqSection([
  { q: "Xây trong Phú Mỹ Hưng có khác hẻm Tân Thuận không?", a: "Có. KDC: facade + giờ BQL, hoàn thiện cao hơn. Hẻm: logistics hẹp, GPXD phường. Hai gói không dùng chung một báo giá m²." },
  { q: "Xây nhà trọn gói giá rẻ Quận 7 được không?", a: "Hẻm cũ: gói tiêu chuẩn 4,85–5,5 triệu/m² + phụ phí. KDC: khó “giá rẻ” vì mặt đứng — cắt phào được, không cắt kết cấu." },
  { q: "BQL có bắt màu sơn không?", a: "Nhiều khu có. Sao Khuê hỏi quy chế trước khi chọn đá ốp / cửa kính — phụ lục, không gộp m²." },
  { q: "Khảo sát Q.7 có phí không?", a: "Miễn phí theo lịch. Gọi 0909 075 668 gửi ảnh + ghi rõ KDC hay hẻm." },
  { q: "Thời gian thi công Q.7?", a: "Hẻm 5–8 tháng; KDC 6–10 tháng vì duyệt facade. Mùa mưa có thể dời ca đổ." },
  { q: "Nên thô hay trọn gói tại Q.7?", a: "Trọn gói khi muốn một đầu mối chống thấm + facade. Tách thô nếu nội thất cao cấp chọn sau." },
])}
<p>Hotline <strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh · <a href="/lien-he">/lien-he</a> · kientrucsaokhue.com</p>`,
  },

  "xay-nha-tron-goi-tan-binh": {
    title: "Xây Nhà Trọn Gói Tân Bình — Gần Sân Bay, Chiều Cao & Hẻm 2026",
    excerpt:
      "Xây nhà trọn gói Tân Bình: hạn chế tầng gần sân bay, hẻm Phạm Văn Hai, cách âm. Sao Khuê BH 10 năm — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Tân Bình 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Tân Bình: tra chiều cao gần sân bay, hẻm hẹp, 3,6–6,5 tỷ. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói tân bình, xây nhà trọn gói giá rẻ tân bình, xây nhà tân bình, nhà thầu tân bình, sao khuê",
    imageAlt: "Xây nhà trọn gói Tân Bình — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Tân Bình — hạn chế chiều cao trước khi vẽ 3D</h2>
<p><strong>Xây nhà trọn gói Tân Bình</strong> hay vướng quy hoạch gần sân bay Tân Sơn Nhất: một số phường/tuyến không cho 5 tầng dù lô đủ rộng. Sao Khuê <strong>tra chiều cao cho phép</strong> trước khi vẽ 3D — không bán nhà 5 tầng ảo. Hẻm Phạm Văn Hai, Hoàng Văn Thụ, Cộng Hòa: giờ ồn hành chính, xe tải hạn chế. BH kết cấu <strong>10 năm</strong>.</p>
<p>Lân cận: <a href="/tin-tuc/xay-nha-tron-goi-tan-phu">trọn gói Tân Phú</a> · <a href="/dich-vu/xay-nha-tron-goi-tphcm">pillar TP.HCM</a> · Cải tạo: <a href="/tin-tuc/cai-tao-nha-tan-binh">cải tạo nhà Tân Bình</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Tân Bình (2026)</h2>
<table>
  <thead><tr><th>Quy mô Tân Bình</th><th>Mốc trọn gói (tham khảo)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng</td><td>3,6 – 5,2 tỷ</td><td>Chưa cọc, chưa cách âm đặc biệt</td></tr>
    <tr><td>Nhà phố 4 tầng</td><td>4,6 – 6,5 tỷ</td><td>Tra phép chiều cao trước</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>+ ca hành chính / hẻm</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Tân Bình</strong>: gói tiêu chuẩn + cắt phào/đèn. Cách âm cửa kính gần đường bay là <strong>phụ lục</strong>, không “nuốt” vào m². City-wide: <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a>.</p>

<h2>Hẻm, giờ đổ bê tông và ồn máy bay</h2>
<ul>
  <li>Hẻm Phạm Văn Hai / nhiều tuyến nội thành: bơm từ mặt tiền, ca sớm, không đổ đêm nếu phường cấm.</li>
  <li>Gần bay: cửa kính cách âm, lan can kín gió — báo tách dòng.</li>
  <li>Mặt tiền đường lớn: hoàn thiện facade + chỉ giới lộ giới hỏi phường trước đúc bậc cấp.</li>
</ul>
<p>Nhà liền kề: biên bản tường chung trước đào móng. Phế thải cuối ngày.</p>

<h2>Giấy phép và quy hoạch gần sân bay</h2>
<p>Số tầng theo quy hoạch phường + hạn chế hàng không (nơi áp dụng). Không copy nhà bên cạnh. Cho thuê 4–5 tầng: hỏi PCCC sớm. Sao Khuê từ chối vẽ vượt phép. Xem <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin GPXD</a> · so <a href="/tin-tuc/xay-nha-5-tang-tphcm">nhà 5 tầng</a>.</p>

<h2>Quy trình trọn gói 6 bước tại Tân Bình</h2>
<ol>
  <li>Ảnh hẻm + mặt tiền + sổ (che số) + số tầng mong muốn.</li>
  <li>Khảo sát: tra chiều cao, đo hẻm, giờ ồn.</li>
  <li>Thiết kế khớp GPXD thực tế (không 5 tầng ảo).</li>
  <li>HĐ: list vật tư, phụ lục cách âm / hẻm, mốc thanh toán.</li>
  <li>Thi công 6–9 tháng vì ca hành chính; mưa dời ngày đổ.</li>
  <li>Nghiệm thu, BH 10 năm.</li>
</ol>
<p>Chi tiết: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>.</p>

<h2>Mặt tiền kinh doanh vs nhà ở thuần</h2>
<p>Tuyến Cộng Hòa, Hoàng Văn Thụ: shophouse trệt cần điện tách, PCCC. Đừng dùng một bản vẽ cho nhà ở thuần. Landing Ads: <a href="/xay-nha">/xay-nha</a>.</p>

${faqSection([
  { q: "Gần sân bay Tân Bình xây 5 tầng được không?", a: "Tùy phường và hạn chế chiều cao. Sao Khuê tra trước khi vẽ — không hứa 5 tầng khi chưa có xác nhận." },
  { q: "Xây nhà trọn gói giá rẻ Tân Bình bao nhiêu?", a: "Nhà phố 3 tầng thường 3,6–5,2 tỷ + phụ phí hẻm. Cách âm cửa kính tính phụ lục." },
  { q: "Hẻm Phạm Văn Hai đổ bê tông đêm được không?", a: "Thường không. Ca hành chính / sớm; phụ lục giờ máy trong HĐ." },
  { q: "Ồn máy bay xử lý thế nào?", a: "Cửa kính cách âm, khe kín. Báo tách dòng — không gộp m² trọn gói." },
  { q: "Khảo sát Tân Bình mất phí không?", a: "Miễn phí nội thành theo lịch. 0909 075 668 — văn phòng Bình Lợi." },
  { q: "Tân Bình khác Tân Phú chỗ nào?", a: "Tân Bình siết chiều cao và ồn bay hơn. Tân Phú hay gặp cao độ nền / ngập cục bộ. Hai bài riêng — không copy báo giá." },
])}
<p><strong>0909 075 668</strong> · <a href="/lien-he">Đặt lịch khảo sát</a> · kientrucsaokhue.com</p>`,
  },

  "xay-nha-tron-goi-tan-phu": {
    title: "Xây Nhà Trọn Gói Tân Phú — Cao Độ Nền, Hẻm & Cấp 4 Lên Phố 2026",
    excerpt:
      "Xây nhà trọn gói Tân Phú: Tân Sơn Nhì, Phú Thạnh, chống ngập trệt, hẻm hẹp. Sao Khuê BH 10 năm — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Tân Phú 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Tân Phú: cao độ nền chống ngập, hẻm hẹp, 3,3–5,8 tỷ. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói tân phú, xây nhà trọn gói giá rẻ tân phú, xây nhà tân phú, nhà thầu tân phú, sao khuê",
    imageAlt: "Xây nhà trọn gói Tân Phú — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Tân Phú — nhà phố thế hệ 2</h2>
<p><strong>Xây nhà trọn gói Tân Phú</strong> tập trung Tân Sơn Nhì, Phú Thạnh, Lũy Bán Bích: nhiều nhà cấp 4 hoặc phố cũ đập xây lại cho 2 thế hệ. Hẻm ổn định hơn ven rạch, nhưng một số tuyến <strong>thấp hơn mặt đường</strong> — trệt cần cao độ và chống thấm chân tường. Sao Khuê khảo sát miễn phí, BH kết cấu <strong>10 năm</strong>.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-tan-phu">xây nhà Tân Phú</a> · <a href="/dich-vu/xay-nha-tron-goi-tphcm">pillar trọn gói</a> · Cải tạo: <a href="/tin-tuc/cai-tao-nha-tan-phu">cải tạo Tân Phú</a> · Trong hẻm: <a href="/tin-tuc/xay-nha-trong-hem-tphcm">xây nhà trong hẻm</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Tân Phú (2026)</h2>
<table>
  <thead><tr><th>Quy mô Tân Phú</th><th>Mốc trọn gói (tham khảo)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng / 1 trệt 2 lầu</td><td>3,3 – 4,7 tỷ</td><td>Hẻm xe hơi thuận hơn</td></tr>
    <tr><td>Nhà phố 4 tầng</td><td>4,2 – 5,8 tỷ</td><td>Chưa cọc nếu nền yếu</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Hẻm hẹp +5–10%</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Tân Phú</strong> phù hợp ngân sách trung bình nếu chốt gói tiêu chuẩn và không “đổ thêm tầng” lên tường gạch cấp 4. City-wide: <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a>.</p>

<h2>Cao độ nền, thoát nước và ngập cục bộ</h2>
<p>Tuyến Lũy Bán Bích / Tân Sơn Nhì một số đoạn thấp hơn đường: nâng trệt, van một chiều thoát, chống thấm chân tường. Không lấy cao độ nhà bên cạnh miệng — đo so mặt đường khi khảo sát.</p>

<h2>Hẻm hẹp và cấp 4 lên phố</h2>
<p>Hẻm xe máy: bơm bê tông từ mặt tiền, ca sớm. Cấp 4 lên 3–4 tầng: <strong>khảo sát móng bắt buộc</strong> — nhiều nhà tường gạch không đủ. Phương án: gia cố hoặc tháo dựng trọn gói. Sao Khuê từ chối “đổ thêm” khi khung yếu. Xem <a href="/tin-tuc/nang-tang-nha-tphcm">nâng tầng</a>.</p>
<p>Hẻm xe hơi 3–4 tầng: trọn gói đỡ phát sinh hoàn thiện. Hẻm siêu hẹp: có thể tách thô rồi hoàn thiện sau — <a href="/dich-vu/xay-dung-phan-tho">phần thô</a>.</p>

<h2>Giấy phép xây dựng Tân Phú</h2>
<p>GPXD theo phường hiện hành; mật độ cấp 4 lên phố phải đúng quy hoạch. Mặt tiền kinh doanh: hỏi công năng, điện tách, PCCC. Sao Khuê không thi công vượt phép.</p>

<h2>Quy trình trọn gói 6 bước tại Tân Phú</h2>
<ol>
  <li>Ảnh hẻm, cao độ so đường, số tầng, thô hay trọn gói.</li>
  <li>Khảo sát móng (nếu nhà cũ) + đo hẻm.</li>
  <li>Thiết kế 1 trệt 2 lầu hoặc 4 tầng đúng phép.</li>
  <li>HĐ: list vật tư, phụ phí hẻm, cao độ trệt.</li>
  <li>Thi công 5–8 tháng nhà phố 3–4 tầng.</li>
  <li>Nghiệm thu, BH 10 năm.</li>
</ol>
<p>Quy trình đầy đủ: <a href="/dich-vu/xay-nha-tron-goi-tphcm">pillar</a>.</p>

<h2>Mặt tiền vs hẻm — đừng một đơn giá</h2>
<p>Mặt tiền KD: điện tách, PCCC, facade. Hẻm sâu: logistics + giờ đổ. Không dùng chung m². Gửi ảnh hiện trạng khi gọi hotline.</p>

${faqSection([
  { q: "Nhà Tân Phú khu thấp có cần cao độ nền?", a: "Có — một số tuyến thấp hơn đường: nâng trệt và chống thấm chân tường, van thoát một chiều." },
  { q: "Cấp 4 Tân Phú đổ thêm 2 tầng được không?", a: "Chỉ sau khảo sát móng–cột. Nhiều nhà gạch không đủ — gia cố hoặc xây lại trọn gói. Không đổ thêm “cho vui”." },
  { q: "Xây nhà trọn gói giá rẻ Tân Phú bao nhiêu?", a: "3 tầng thường 3,3–4,7 tỷ + hẻm 5–10%. Số chính sau đo đất — không chốt giá mạng." },
  { q: "Hẻm Tân Phú dưới 3m xây được không?", a: "Được: bơm từ mặt tiền, ca sớm, phụ phí ghi rõ. Khảo sát đo hẻm trước khi hứa cẩu." },
  { q: "Nên thô hay trọn gói?", a: "Hẻm xe hơi 3–4 tầng: trọn gói đỡ phát sinh. Hẻm siêu hẹp / nội thất chọn sau: tách thô." },
  { q: "Khảo sát Tân Phú có phí không?", a: "Miễn phí nội thành theo lịch. 0909 075 668 — 245/8 Bình Lợi, Bình Thạnh." },
])}
<p>Gọi <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · Landing: <a href="/xay-nha">/xay-nha</a></p>`,
  },

  "xay-nha-tron-goi-binh-tan": {
    title: "Xây Nhà Trọn Gói Bình Tân — KDC Mới, Hẻm Cũ & Báo Giá 2026",
    excerpt:
      "Xây nhà trọn gói Bình Tân: An Lạc, Bình Hưng Hòa, KDC mới vs hẻm cũ. Sao Khuê báo giá minh bạch — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Bình Tân 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Bình Tân: KDC mới 3,3–4,8 tỷ, nhà 4 tầng 4,2–5,8 tỷ, logistics rõ ràng. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói bình tân, xây nhà trọn gói giá rẻ bình tân, xây nhà bình tân, nhà thầu bình tân, sao khuê",
    imageAlt: "Xây nhà trọn gói Bình Tân — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Bình Tân — KDC mới và phố cũ là hai bài toán khác nhau</h2>
<p><strong>Xây nhà trọn gói Bình Tân</strong> thường rơi vào hai nhóm: <strong>KDC mới</strong> như An Lạc, Bình Hưng Hòa có đường xe tải, logistics dễ; và <strong>phố cũ / hẻm trong khu dân cư lâu năm</strong> vẫn phải khiêng vật tư, bơm bê tông từ mặt tiền. <strong>Kiến Trúc Sao Khuê</strong> tách hai hiện trạng ngay từ dự toán để không báo một giá ảo cho cả quận. Gói trọn gồm khảo sát, thiết kế, thi công thô, hoàn thiện và bàn giao, BH kết cấu <strong>10 năm</strong>.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-binh-tan">xây nhà Bình Tân</a> · Pillar: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a> · <a href="/bao-gia">/bao-gia</a> · Landing Ads: <a href="/xay-nha">/xay-nha</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Bình Tân (2026)</h2>
<table>
  <thead><tr><th>Quy mô Bình Tân</th><th>Mốc trọn gói (tham khảo)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng KDC mới</td><td>3,3 – 4,8 tỷ</td><td>Đường xe tải, ít phụ phí hẻm</td></tr>
    <tr><td>Nhà phố 4 tầng</td><td>4,2 – 5,8 tỷ</td><td>Hẻm cũ có thể cộng logistics</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Chưa cọc, chưa nội thất gỗ</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Bình Tân</strong> phù hợp hơn ở KDC mới vì logistics nhẹ. Hẻm cũ vẫn có thể đi gói tiêu chuẩn, nhưng phụ phí khiêng/bơm phải tách rõ. Xem mốc city-wide: <a href="/tin-tuc/xay-nha-gia-re-tphcm">xây nhà giá rẻ TP.HCM</a>.</p>

<h2>KDC mới An Lạc, Bình Hưng Hòa vs hẻm cũ</h2>
<p>KDC mới: đường rộng, xe vật tư vào dễ, tiến độ thường đúng kế hoạch hơn. Đổi lại có thể có <strong>quy chế facade</strong>, màu sơn, cổng, hàng rào. Hẻm cũ: ít nội quy khu nhưng phát sinh điểm tập kết vật liệu, phế thải cuối ngày, giờ đổ bê tông phải chốt trước.</p>
<p>Đây là lý do Sao Khuê không dùng một bảng giá m² chung cho cả Bình Tân.</p>

<h2>Giấy phép xây dựng và quy hoạch Bình Tân</h2>
<p>Nhà trong KDC: kiểm tra quy chế chủ đầu tư đi cùng GPXD phường. Nhà phố cũ: tra chỉ giới, số tầng theo phường hiện hành. Không copy giấy phép nhà kế bên. Nếu có công năng cho thuê / kinh doanh tầng trệt, nên hỏi PCCC và điện tải ngay từ bản vẽ.</p>

<h2>Quy trình trọn gói 6 bước tại Bình Tân</h2>
<ol>
  <li>Gửi ảnh hẻm hoặc KDC, mặt tiền, sổ (che số), số tầng.</li>
  <li>Khảo sát tận lô: đường vào, nền, vị trí đổ vật tư, liền kề.</li>
  <li>Thiết kế 2D/3D theo đúng số tầng được phép.</li>
  <li>Báo giá tách rõ KDC hay hẻm cũ, list vật tư, tiến độ thanh toán.</li>
  <li>Thi công móng → thô → hoàn thiện; nghiệm thu từng mốc.</li>
  <li>Bàn giao hồ sơ bảo hành kết cấu 10 năm.</li>
</ol>

<h2>Chi phí phát sinh nào nên chốt trước?</h2>
<ul>
  <li>Phụ phí khiêng vật tư nếu hẻm nhỏ.</li>
  <li>Cửa kính, đá ốp, hàng rào nếu KDC có chuẩn mặt đứng.</li>
  <li>Móng/cọc nếu khảo sát nền không đạt.</li>
  <li>Điện tách/PCCC nếu có công năng cho thuê.</li>
</ul>
<p>Những dòng này nên có trong HĐ từ đầu, không để phát sinh miệng cuối công trình.</p>

${faqSection([
  { q: "Xây nhà trọn gói giá rẻ Bình Tân có dễ hơn nội thành không?", a: "Dễ hơn nếu nằm trong KDC mới đường rộng vì logistics nhẹ. Hẻm cũ vẫn phải cộng khiêng/bơm rõ ràng, không thể lấy cùng một giá." },
  { q: "Bình Tân nên xây 3 tầng hay 4 tầng?", a: "Phụ thuộc GPXD từng phường và nhu cầu ở/cho thuê. Sao Khuê tra quy hoạch trước khi lên phương án 3D." },
  { q: "KDC mới có cần duyệt facade không?", a: "Nhiều khu có. Cổng, hàng rào, màu sơn, mặt đứng cần hỏi chủ đầu tư hoặc ban quản lý trước khi chốt vật tư." },
  { q: "Khảo sát Bình Tân có mất phí không?", a: "Miễn phí theo lịch với khu nội thành TP.HCM. Gửi ảnh hiện trạng và vị trí tương đối khi gọi 0909 075 668." },
  { q: "Hẻm nhỏ ở Bình Tân có xây trọn gói được không?", a: "Được, nhưng phải đo hẻm để chốt phương án bơm bê tông, khiêng vật tư và giờ đổ sớm." },
  { q: "Nên chọn thô hay trọn gói tại Bình Tân?", a: "KDC mới và nhà 3–4 tầng nên đi trọn gói để đỡ phát sinh hoàn thiện. Nếu muốn tự chọn nội thất cao cấp sau, có thể tách phần thô." },
])}
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · 245/8 Bình Lợi, Bình Thạnh · kientrucsaokhue.com</p>`,
  },

  "xay-nha-tron-goi-phu-nhuan": {
    title: "Xây Nhà Trọn Gói Phú Nhuận — Hẻm Hẹp, Lô Nhỏ & 4 Tầng 2026",
    excerpt:
      "Xây nhà trọn gói Phú Nhuận: hẻm xe máy, lô nhỏ, giếng trời, liền kề. Sao Khuê khảo sát miễn phí — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Phú Nhuận 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Phú Nhuận: lô nhỏ 3,8–5,6 tỷ, 4 tầng 4,8–7 tỷ, hẻm hẹp và nhà liền kề. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói phú nhuận, xây nhà trọn gói giá rẻ phú nhuận, xây nhà phú nhuận, nhà thầu phú nhuận, sao khuê",
    imageAlt: "Xây nhà trọn gói Phú Nhuận — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Phú Nhuận — tối ưu từng mét vuông</h2>
<p><strong>Xây nhà trọn gói Phú Nhuận</strong> thường gặp lô nhỏ, giá đất cao, hẻm xe máy và nhà liền kề sát nhau. Vì vậy, bài toán ở đây không chỉ là báo giá mà còn là <strong>tối ưu công năng</strong>: giếng trời, cầu thang gọn, 3–4 tầng cho gia đình trẻ hoặc cho thuê. <strong>Kiến Trúc Sao Khuê</strong> nhận khảo sát, thiết kế, thi công và hoàn thiện một đầu mối; BH kết cấu <strong>10 năm</strong>.</p>
<p>Pillar: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a> · <a href="/bao-gia">/bao-gia</a> · Phú Nhuận gần: <a href="/tin-tuc/xay-nha-tron-goi-tan-binh">Tân Bình</a> · <a href="/tin-tuc/xay-nha-tron-goi-binh-thanh">Bình Thạnh</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Phú Nhuận (2026)</h2>
<table>
  <thead><tr><th>Quy mô Phú Nhuận</th><th>Mốc trọn gói (tham khảo)</th><th>Đặc thù</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng</td><td>3,8 – 5,6 tỷ</td><td>Lô nhỏ, công năng chặt</td></tr>
    <tr><td>Nhà phố 4 tầng</td><td>4,8 – 7,0 tỷ</td><td>Chi phí/m² cao hơn vì hẻm</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,8 triệu</td><td>Hẻm, hoàn thiện ảnh hưởng mạnh</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Phú Nhuận</strong> khó “rẻ” theo kiểu cào bằng vì chi phí logistics và hoàn thiện/m² thường cao hơn quận ven. Cách tiết kiệm đúng là tối ưu mặt bằng, cắt hạng mục trang trí, không cắt thép–bê tông–chống thấm.</p>

<h2>Hẻm xe máy, liền kề và biên bản hiện trạng</h2>
<p>Nhiều tuyến Phú Nhuận không mở xe tải lớn: bơm bê tông từ mặt tiền, xe phế thải nhỏ, ca đổ sớm. Nhà liền kề sát nên <strong>biên bản hiện trạng tường chung</strong> trước đào móng là bắt buộc. Khe nhiệt, chống thấm vách giáp phải ghi trong bản vẽ và HĐ, không để thợ xử lý miệng ngoài hiện trường.</p>

<h2>Thiết kế giếng trời và nhà 4 tầng</h2>
<p>Lô nhỏ nhưng giá đất cao khiến nhiều chủ nhà muốn thêm tầng. Sao Khuê ưu tiên giếng trời, cầu thang gọn, lấy sáng giữa nhà để 4 tầng vẫn ở thoáng. Không nên nhồi đủ phòng mà bỏ thông gió tự nhiên — nhà sẽ tối và ẩm.</p>

<h2>Giấy phép xây dựng tại Phú Nhuận</h2>
<p>Lô nhỏ vẫn phải có GPXD đủ tầng, đúng chỉ giới. Không xây vượt để “gỡ giá đất”. Nếu có công năng cho thuê từng tầng/phòng, nên hỏi PCCC sớm. Xem thêm: <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin GPXD TP.HCM</a>.</p>

<h2>Quy trình trọn gói tại Phú Nhuận</h2>
<ol>
  <li>Gửi ảnh hẻm, mặt tiền, sổ (che số), số tầng mong muốn.</li>
  <li>Khảo sát: bề rộng hẻm, tường chung, nền, vị trí vật tư.</li>
  <li>Thiết kế 2D/3D, chốt giếng trời và công năng.</li>
  <li>Báo giá minh bạch, list vật tư, phụ phí logistics.</li>
  <li>Thi công 6–9 tháng tùy hẻm và số tầng.</li>
  <li>Bàn giao, hồ sơ bảo hành kết cấu 10 năm.</li>
</ol>

<h2>Khi nào nên tách thô và hoàn thiện?</h2>
<p>Nếu gia chủ muốn hoàn thiện cao cấp, nội thất chọn sau, có thể tách <a href="/dich-vu/xay-dung-phan-tho">phần thô</a>. Nếu muốn kiểm soát một đầu mối, nhất là nhà 4 tầng hẻm nhỏ, trọn gói sẽ ít phát sinh hơn.</p>

${faqSection([
  { q: "Xây nhà trọn gói giá rẻ Phú Nhuận có khả thi không?", a: "Có thể theo gói tiêu chuẩn, nhưng Phú Nhuận thường có chi phí/m² cao hơn vì hẻm nhỏ và nhà liền kề. Tiết kiệm bằng tối ưu mặt bằng, không cắt kết cấu." },
  { q: "Nhà liền kề Phú Nhuận có cần biên bản hiện trạng không?", a: "Có. Đây là bước nên làm trước đào móng để tránh tranh chấp nứt tường, thấm vách về sau." },
  { q: "Phú Nhuận nên làm 3 tầng hay 4 tầng?", a: "Tùy GPXD và nhu cầu ở/cho thuê. Sao Khuê tra số tầng trước khi lên phối cảnh." },
  { q: "Hẻm xe máy có xây trọn gói được không?", a: "Được, với phương án bơm bê tông từ mặt tiền, ca sớm và xe vật tư/phế thải nhỏ." },
  { q: "Khảo sát Phú Nhuận có mất phí không?", a: "Miễn phí nội thành theo lịch. Gửi ảnh hiện trạng và mô tả số tầng khi gọi 0909 075 668." },
  { q: "Nhà 4 tầng ở Phú Nhuận có cần giếng trời không?", a: "Rất nên có, đặc biệt với lô nhỏ sâu. Chốt từ bản vẽ sớm sẽ an toàn và tiết kiệm hơn khoét dầm sau." },
])}
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · 245/8 Bình Lợi, Bình Thạnh</p>`,
  },

  "xay-nha-tron-goi-nha-be": {
    title: "Xây Nhà Trọn Gói Nhà Bè — Ven Kênh, Cao Độ Nền & Biệt Thự 2026",
    excerpt:
      "Xây nhà trọn gói Nhà Bè: ven kênh, địa chất, cao độ chống ngập, biệt thự và nhà phố. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Nhà Bè 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Nhà Bè: nhà phố 3,6–5,5 tỷ, biệt thự 6–15 tỷ+, địa chất ven kênh và cao độ nền. Khảo sát 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói nhà bè, xây nhà trọn gói giá rẻ nhà bè, xây nhà nhà bè, nhà thầu nhà bè, sao khuê",
    imageAlt: "Xây nhà trọn gói Nhà Bè — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Nhà Bè — địa chất và cao độ là ưu tiên số một</h2>
<p><strong>Xây nhà trọn gói Nhà Bè</strong> khác nội thành ở chỗ nhiều lô ven kênh, biệt thự mini, sân vườn và nền đất cần khảo sát kỹ. Ở đây, báo giá đúng phải đi sau <strong>khoan địa chất</strong>, cao độ nền chống triều/ngập và phương án móng. <strong>Kiến Trúc Sao Khuê</strong> nhận nhà phố, biệt thự và gói tách thô/hoàn thiện nếu ngân sách cần giãn theo quý; BH kết cấu <strong>10 năm</strong>.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-nha-be">xây nhà Nhà Bè</a> · Pillar: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Nhà Bè (2026)</h2>
<table>
  <thead><tr><th>Phân khúc Nhà Bè</th><th>Mốc trọn gói (tham khảo)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng</td><td>3,6 – 5,5 tỷ</td><td>Chưa cọc nếu địa chất yếu</td></tr>
    <tr><td>Biệt thự / quy mô lớn</td><td>6 – 15 tỷ+</td><td>Sân, hồ, hàng rào tách phụ lục</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,8 triệu</td><td>Đất ven kênh có thể tăng mạnh vì móng</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Nhà Bè</strong> chỉ đúng với lô đất ổn định, quy mô vừa và gói tiêu chuẩn. Với nền yếu ven kênh, “giá rẻ” dễ thành rủi ro nếu bỏ qua khảo sát móng. Xem mốc city-wide: <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a>.</p>

<h2>Ven kênh, khoan địa chất và cọc</h2>
<p>Nhiều lô Nhà Bè cần <strong>khoan địa chất bắt buộc</strong>; không dùng móng nông đại trà. Cọc, tường vây, chống thấm chân tường là những khoản phải tách dòng. Nếu chưa có địa chất, Sao Khuê chỉ báo khoảng ngân sách, không chốt HĐ cuối.</p>

<h2>Cao độ nền chống triều và ngập</h2>
<p>Nhà sát kênh hoặc khu thấp nên chốt cao độ trệt, sân, dốc thoát nước và van một chiều ngay từ bản vẽ. Đây là khác biệt lớn giữa Nhà Bè và quận nội thành. Làm sai cao độ có thể kéo theo thấm chân tường, nước sân tràn ngược về sau.</p>

<h2>Biệt thự, sân vườn và gói tách theo ngân sách</h2>
<p>Nhà Bè phù hợp biệt thự mini, nhà phố view nước, sân vườn. Nếu dòng tiền giãn theo quý, có thể tách <strong>thô rồi hoàn thiện sau</strong>. Tuy nhiên, móng, chống thấm và cao độ vẫn phải làm chuẩn từ đầu. Hồ bơi, hàng rào, sân đá, cổng là các hạng mục nên ghi phụ lục riêng.</p>

<h2>Giấy phép xây dựng tại Nhà Bè</h2>
<p>Ven kênh: hỏi chỉ giới, cao độ, khoảng lùi theo phường/xã trước thiết kế. Không vẽ biệt thự lớn khi quy hoạch chưa rõ. Nếu là nhà ở kết hợp cho thuê, cần hỏi thêm PCCC và công năng.</p>

<h2>Quy trình trọn gói tại Nhà Bè</h2>
<ol>
  <li>Gửi ảnh đường vào, cao độ so mặt đường, mặt tiền và sổ (che số).</li>
  <li>Khảo sát hiện trạng + khoan địa chất nếu cần.</li>
  <li>Thiết kế móng, cao độ và mặt bằng biệt thự/nhà phố.</li>
  <li>Báo giá tách rõ cọc, chống thấm, sân/hồ/hàng rào.</li>
  <li>Thi công phố 6–9 tháng; biệt thự 9–14 tháng.</li>
  <li>Bàn giao, bảo hành kết cấu 10 năm.</li>
</ol>

${faqSection([
  { q: "Xây nhà trọn gói giá rẻ Nhà Bè có nên không?", a: "Chỉ nên nếu lô đất ổn định và gói tiêu chuẩn phù hợp. Đất ven kênh mà bỏ khảo sát móng để giữ giá rẻ là rất rủi ro." },
  { q: "Nhà Bè có bắt buộc khoan địa chất không?", a: "Nhiều lô ven kênh hoặc nền yếu nên làm. Sao Khuê không chốt móng khi chưa có dữ liệu địa chất đủ tin cậy." },
  { q: "Cao độ nền ở Nhà Bè quan trọng thế nào?", a: "Rất quan trọng vì ảnh hưởng chống triều/ngập, thoát nước sân và thấm chân tường. Nên chốt ngay từ bản vẽ." },
  { q: "Biệt thự Nhà Bè có thể tách thô và hoàn thiện không?", a: "Có. Nhiều chủ nhà chọn làm thô chuẩn trước rồi hoàn thiện theo quý để giãn ngân sách." },
  { q: "Khảo sát Nhà Bè có mất phí không?", a: "Khảo sát miễn phí theo lịch hẹn; nên gửi ảnh đường vào, cao độ và vị trí tương đối trước khi gọi 0909 075 668." },
  { q: "Thời gian thi công Nhà Bè bao lâu?", a: "Nhà phố thường 6–9 tháng; biệt thự 9–14 tháng, chưa kể thời gian khoan địa chất và hoàn thiện sân/hồ." },
])}
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · 245/8 Bình Lợi, Bình Thạnh · kientrucsaokhue.com</p>`,
  },

  "xay-nha-quan-3": {
    title: "Xây nhà Quận 3",
    excerpt:
      "Xây nhà Quận 3: nhà phố cũ, tường chung, giờ đổ bê tông nội thành. Đơn giá từ 4,85 triệu/m². Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Quận 3 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Quận 3 2026 từ 4,85 triệu/m². Nhà cũ giá đất cao, thường cân phá dựng hay giữ khung. Khảo sát miễn phí 0909 075 668.",
    metaKeywords: "xây nhà quận 3, xây nhà phố quận 3, nhà thầu quận 3, sao khuê",
    imageAlt: "Xây nhà Quận 3 — nhà phố nội thành Sao Khuê",
    content: `<h2>Xây nhà Quận 3 thường là phá dựng, không phải đất trống</h2>
<p><strong>Xây nhà Quận 3</strong> hiếm khi là lô đất trống. Phần lớn là nhà phố cũ trên Võ Văn Tấn, Cách Mạng Tháng 8, Nguyễn Đình Chiểu, hẻm sâu, tường chung hai bên. Giá đất cao nên phải tính phá đi xây lại hay giữ khung trước khi ký. <strong>Kiến Trúc Sao Khuê</strong> khảo sát miễn phí; bảo hành kết cấu <strong>10 năm</strong>.</p>
<p>Gói city-wide: <a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a>. Công trình cải tạo đã làm trong quận: <a href="/cong-trinh/sua-nha-quan-3">sửa nhà Quận 3</a>. Ước lượng: <a href="/bao-gia">/bao-gia</a>.</p>
<h2>Đơn giá xây nhà Quận 3 2026</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá</th><th>Ghi chú Quận 3</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu/m²</td><td>Chưa gồm phá dỡ nhà cũ</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Nhà phố 3–4 tầng</td></tr>
    <tr><td>Trọn gói khá</td><td>5,5 – 6,7 triệu+/m²</td><td>Mặt tiền kinh doanh</td></tr>
  </tbody>
</table>
<p>Phá dỡ, vận chuyển hẻm và giờ cấm xe ban ngày ghi phụ lục. Không gộp vào đơn giá m².</p>
<h2>Giấy phép và tường chung</h2>
<p>Nội thành siết chỉ giới và chiều cao. Sao Khuê không đổ móng khi hồ sơ phép còn treo. Tường chung: chụp hiện trạng hai bên trước khi đục; hư hỏng có sẵn ghi biên bản, không để thành phát sinh cuối công trình.</p>
<h2>Ví dụ lô phố cũ</h2>
<p>Lô khoảng 4×16 m, 1 trệt 2 lầu, 3 sàn ở ≈ 192 m². Mốc thấp 4,85 triệu/m² ≈ 931 triệu phần sàn ở. Chưa gồm phá dỡ, cọc nếu nền yếu, mái và lệ phí phép. Số hợp đồng sau khi đo hẻm.</p>
${faqSection([
  { q: "Xây nhà Quận 3 hết bao nhiêu?", a: "Đơn giá trọn gói tiêu chuẩn 4,85–5,5 triệu/m² sàn. Tổng tiền phụ thuộc phá dỡ và hẻm, không lấy một con số cho cả quận." },
  { q: "Nhà cũ Quận 3 nên sửa hay xây lại?", a: "Giữ khung nếu cột–móng còn đủ và phép không cho thêm tầng. Xây lại khi muốn đổi số tầng hoặc khung nứt chéo." },
  { q: "Đổ bê tông trong hẻm Quận 3 giờ nào?", a: "Thường ca sớm hoặc theo giờ phường cho phép. Phụ phí bơm tách dòng, không nuốt vào m²." },
])}
<p>Hotline <strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-quan-5": {
    title: "Xây nhà Quận 5",
    excerpt:
      "Xây nhà Quận 5: nhà ống Chợ Lớn, trệt kinh doanh, hẻm sâu. Đơn giá từ 4,85 triệu/m². Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Quận 5 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Quận 5 2026 từ 4,85 triệu/m². Nhà ống sâu, trệt bán hàng, điện tách nếu kinh doanh. Khảo sát miễn phí 0909 075 668.",
    metaKeywords: "xây nhà quận 5, xây nhà phố quận 5, nhà ống chợ lớn, sao khuê",
    imageAlt: "Xây nhà Quận 5 — nhà ống Chợ Lớn",
    content: `<h2>Xây nhà Quận 5 là nhà ống sâu, trệt thường để kinh doanh</h2>
<p><strong>Xây nhà Quận 5</strong> (khu Chợ Lớn, Trần Hưng Đạo, Hải Thượng Lãn Ông) hay gặp nhà ống sâu 15–20 m, tầng trệt mở cửa hàng, các tầng trên để ở. Một đơn giá “nhà ở” không đúng nếu trệt cần điện 3 pha, cửa cuốn và PCCC. Sao Khuê tách hai dòng trong dự toán. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · <a href="/bao-gia">bảng báo giá</a>.</p>
<h2>Đơn giá xây nhà Quận 5 2026</h2>
<table>
  <thead><tr><th>Kiểu nhà</th><th>Đơn giá m²</th><th>Tách riêng</th></tr></thead>
  <tbody>
    <tr><td>Nhà ở, gói tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Hẻm, phá dỡ</td></tr>
    <tr><td>Trệt kinh doanh + ở trên</td><td>5,5 – 6,7 triệu+</td><td>Cửa cuốn, điện mạnh, PCCC</td></tr>
    <tr><td>Chỉ phần thô</td><td>3,55 – 3,8 triệu</td><td>Chủ nhà lo hoàn thiện</td></tr>
  </tbody>
</table>
<h2>Hẻm Chợ Lớn và giờ tập kết</h2>
<p>Hẻm xe máy không cho xe tải vào. Vật tư khiêng hoặc bơm từ miệng hẻm, ca sớm trước giờ chợ. Phụ phí này viết thành dòng, không “làm tròn” vào m² cho đẹp báo giá.</p>
<h2>Giấy phép khi đổi công năng trệt</h2>
<p>Ở thành cửa hàng có thể đổi công năng và yêu cầu thoát hiểm. Sao Khuê không thi công mở mặt tiền khi chưa rõ chỉ giới vỉa hè. Lệ phí nhà nước không nằm trong đơn giá xây.</p>
${faqSection([
  { q: "Xây nhà Quận 5 giá bao nhiêu?", a: "Nhà ở 4,85–5,5 triệu/m². Trệt kinh doanh thường cao hơn vì cửa, điện và PCCC, báo sau khi xem mặt bằng." },
  { q: "Nhà ống sâu Quận 5 có tối không?", a: "Sâu 15–20 m cần giếng trời. Không đục dầm để lấy sáng khi chưa có phương án kết cấu." },
  { q: "Có xây trong hẻm xe máy được không?", a: "Được. Logistics và giờ đổ bê tông ghi phụ lục trước khi ký." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-quan-8": {
    title: "Xây nhà Quận 8",
    excerpt:
      "Xây nhà Quận 8: nền thấp, ven kênh, hay cần cọc. Đơn giá từ 4,85 triệu/m², cọc tính riêng. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Quận 8 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Quận 8 2026 từ 4,85 triệu/m². Nền thấp ven kênh, cọc và cao độ trệt tách khỏi đơn giá. Khảo sát miễn phí 0909 075 668.",
    metaKeywords: "xây nhà quận 8, xây nhà ven kênh quận 8, nhà thầu quận 8, sao khuê",
    imageAlt: "Xây nhà Quận 8 — nhà phố ven kênh",
    content: `<h2>Xây nhà Quận 8: hỏi nền và ngập trước khi hỏi đơn giá</h2>
<p><strong>Xây nhà Quận 8</strong> dọc Phạm Thế Hiển và các phường ven kênh thường thấp hơn mặt đường. Móng nông cho nhà phố nội thành không phải mặc định ở đây. Sao Khuê báo đơn giá sàn riêng, cọc và tôn nền riêng. Bảo hành kết cấu <strong>10 năm</strong> không che một móng đoán mò.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · <a href="/bao-gia">máy tính chi phí</a>.</p>
<h2>Đơn giá xây nhà Quận 8 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th><th>Khi nào phát sinh</th></tr></thead>
  <tbody>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Nền đủ chịu, nhà phố</td></tr>
    <tr><td>Trọn gói khá</td><td>5,5 – 6,7 triệu+/m²</td><td>Hoàn thiện và mặt đứng</td></tr>
    <tr><td>Cọc / tôn nền</td><td>Theo khối lượng</td><td>Đất yếu, triều, lô thấp</td></tr>
  </tbody>
</table>
<h2>Cao độ trệt</h2>
<p>Chốt cao độ sàn trệt, sân và dốc thoát nước ngay trên bản vẽ. Làm thấp hơn đường là rước nước mùa mưa. Chống thấm chân tường ghi trong hợp đồng, không để “làm sau”.</p>
<h2>Giấy phép khu thấp</h2>
<p>Hỏi chỉ giới và cao độ cho phép trước khi vẽ thêm tầng. Lệ phí phép tách khỏi tiền xây. Chưa có phép thì chưa đào.</p>
${faqSection([
  { q: "Xây nhà Quận 8 có bắt buộc cọc không?", a: "Không phải lô nào cũng cọc, nhưng ven kênh và đất đắp nên khoan kiểm tra. Không chốt móng nông khi chưa có số liệu." },
  { q: "Đơn giá 4,85 triệu đã gồm cọc chưa?", a: "Chưa. 4,85–5,5 triệu là gói sàn tiêu chuẩn. Cọc và tôn nền là dòng khác." },
  { q: "Mùa mưa có xây được không?", a: "Được nếu thoát nước hố móng và che đổ bê tông. Tiến độ dài hơn mùa khô, ghi trong hợp đồng." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-quan-10": {
    title: "Xây nhà Quận 10",
    excerpt:
      "Xây nhà Quận 10: lô hẹp quanh Ba Tháng Hai, Sư Vạn Hạnh, nhà cho thuê nhiều tầng. Từ 4,85 triệu/m². Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Quận 10 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Quận 10 2026 từ 4,85 triệu/m². Lô hẹp, tường chung, nhà cho thuê nhiều phòng. Khảo sát miễn phí, báo giá sau khi đo — 0909 075 668.",
    metaKeywords: "xây nhà quận 10, xây nhà phố quận 10, nhà cho thuê quận 10, sao khuê",
    imageAlt: "Xây nhà Quận 10 — nhà phố lô hẹp",
    content: `<h2>Xây nhà Quận 10 là lô hẹp, nhiều nhà làm để cho thuê</h2>
<p><strong>Xây nhà Quận 10</strong> quanh Ba Tháng Hai, Sư Vạn Hạnh, Lý Thường Kiệt thường mặt tiền 3–4 m, sâu, tường chung, nhu cầu phòng cho thuê từng tầng. Công năng khác nhà một hộ: cầu thang, WC mỗi tầng, điện đồng hồ. Sao Khuê chốt số phòng trước khi ra đơn giá. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · Bài phường đang có hạng: <a href="/tin-tuc/xay-nha-phuong-15-quan-10">xây nhà Phường 15 Quận 10</a> · <a href="/bao-gia">/bao-gia</a>.</p>
<h2>Đơn giá xây nhà Quận 10 2026</h2>
<table>
  <thead><tr><th>Nhu cầu</th><th>Đơn giá</th><th>Lưu ý</th></tr></thead>
  <tbody>
    <tr><td>Một hộ ở</td><td>4,85 – 5,5 triệu/m²</td><td>Gói tiêu chuẩn</td></tr>
    <tr><td>Cho thuê nhiều phòng</td><td>5,5 – 6,7 triệu+/m²</td><td>Thêm WC, điện, cửa từng phòng</td></tr>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu/m²</td><td>Chủ nhà tự hoàn thiện</td></tr>
  </tbody>
</table>
<h2>Hẻm và giờ bệnh viện</h2>
<p>Trục bệnh viện đông xe. Tập kết vật tư tránh giờ cao điểm; hẻm dưới 3 m tính bốc vác. Phụ phí không gộp vào m².</p>
<h2>Giấy phép nhà nhiều phòng</h2>
<p>Thêm tầng hoặc đổi thành nhà trọ có thể vướng mật độ và PCCC. Hỏi phường trước khi vẽ năm tầng trên lô 4 m. Lệ phí nhà nước tách khỏi gói thi công.</p>
${faqSection([
  { q: "Xây nhà Quận 10 hết bao nhiêu một mét?", a: "Tiêu chuẩn 4,85–5,5 triệu/m². Nhà nhiều phòng cho thuê đắt hơn vì WC và điện, không dùng giá nhà một hộ." },
  { q: "Lô 3,5 m có xây 4 tầng được không?", a: "Chỉ khi quy hoạch phường cho phép. Không hứa số tầng trước khi xem chỉ giới." },
  { q: "Sao Khuê có công trình gần Quận 10 không?", a: "Văn phòng ở Bình Thạnh, nhận nội thành kể cả Quận 10. Xem thêm bài Phường 15 và đặt khảo sát 0909 075 668." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-tan-binh": {
    title: "Xây nhà Tân Bình",
    excerpt:
      "Xây nhà Tân Bình: hẻm nối Tân Phú, một số phường hạn chế chiều cao gần sân bay. Từ 4,85 triệu/m². Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Tân Bình 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Tân Bình 2026 từ 4,85 triệu/m². Hỏi tĩnh không sân bay trước khi vẽ tầng. Hẻm Trường Chinh tính bốc vác riêng. 0909 075 668.",
    metaKeywords: "xây nhà tân bình, xây nhà phố tân bình, nhà thầu tân bình, sao khuê",
    imageAlt: "Xây nhà Tân Bình — nhà phố gần sân bay",
    content: `<h2>Xây nhà Tân Bình phải hỏi chiều cao trước khi vẽ tầng</h2>
<p><strong>Xây nhà Tân Bình</strong> khác Gò Vấp ở chỗ một số phường gần sân bay bị khống chế tĩnh không. Hàng xóm 4 tầng không có nghĩa lô mình được 4 tầng. Trường Chinh, Cộng Hòa, hẻm nối Tân Phú: mật độ cao, xe khó vào. Sao Khuê không nhận hồ sơ “thêm một lầu” khi chưa tra quy hoạch. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · Bài hẻm đang có hạng: <a href="/tin-tuc/xay-nha-phuong-15-tan-binh">Phường 15 Tân Bình</a> · <a href="/bao-gia">/bao-gia</a>.</p>
<h2>Đơn giá xây nhà Tân Bình 2026</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá</th><th>Tách riêng</th></tr></thead>
  <tbody>
    <tr><td>Tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Phá dỡ, hẻm</td></tr>
    <tr><td>Khá – cao cấp</td><td>5,5 – 6,7 triệu+/m²</td><td>Cách ồn nếu dưới đường bay</td></tr>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu/m²</td><td>Chủ nhà lo hoàn thiện</td></tr>
  </tbody>
</table>
<h2>Ồn và hẻm</h2>
<p>Nhà dưới đường bay hoặc sát Trường Chinh nên tính cửa kính và hướng phòng ngủ từ bản vẽ, không vá sau khi xây. Hẻm xe máy: bơm từ miệng hẻm, ca sớm. Phụ phí không gộp vào m².</p>
<h2>Giấy phép</h2>
<p>Chiều cao, khoảng lùi và số tầng lấy theo thửa, không theo nhà đối diện. Lệ phí nhà nước tách khỏi đơn giá xây. Chưa có phép thì chưa đào.</p>
${faqSection([
  { q: "Xây nhà Tân Bình được mấy tầng?", a: "Từng thửa một. Gần sân bay có thể thấp hơn quận lân cận. Sao Khuê không hứa số tầng trước khi xem quy hoạch." },
  { q: "Đơn giá đã gồm cách âm chưa?", a: "Gói tiêu chuẩn 4,85–5,5 triệu chưa gồm kính cách ồn đặc biệt. Hạng mục đó báo riêng nếu nhà nằm dưới đường bay." },
  { q: "Hẻm Tân Bình có đổ bê tông được không?", a: "Được nếu tính bơm và giờ xe. Ghi phụ lục trước khi ký." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-binh-tan": {
    title: "Xây nhà Bình Tân",
    excerpt:
      "Xây nhà Bình Tân: lô rộng hơn nội thành, An Lạc và trục Bình Long. Từ 4,85 triệu/m², nền thấp tính riêng. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Bình Tân 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Bình Tân 2026 từ 4,85 triệu/m². Lô mặt tiền rộng, khu thấp cần cao độ trệt. Không lấy giá hẻm Quận 3 áp vào An Lạc. 0909 075 668.",
    metaKeywords: "xây nhà bình tân, xây nhà phố bình tân, nhà thầu bình tân, sao khuê",
    imageAlt: "Xây nhà Bình Tân — nhà phố An Lạc",
    content: `<h2>Xây nhà Bình Tân không dùng giá hẻm nội thành</h2>
<p><strong>Xây nhà Bình Tân</strong> trải từ nhà ống An Lạc, Bình Hưng Hòa đến lô rộng hơn dọc Bình Long, Kinh Dương Vương. Xe tải vào được nhiều hơn Quận 3, nên phụ phí hẻm thường thấp hơn — nhưng nhiều lô đắp, trệt thấp hơn đường. Sao Khuê tách đơn giá sàn và tôn nền. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · <a href="/tin-tuc/xay-nha-phuong-an-lac-binh-tan">xây nhà An Lạc</a> · <a href="/bao-gia">/bao-gia</a>.</p>
<h2>Đơn giá xây nhà Bình Tân 2026</h2>
<table>
  <thead><tr><th>Hiện trạng</th><th>Đơn giá sàn</th><th>Hay phát sinh</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố ở</td><td>4,85 – 5,5 triệu/m²</td><td>Ít hơn nếu xe vào được</td></tr>
    <tr><td>Trệt cho thuê / kinh doanh</td><td>5,5 – 6,7 triệu+/m²</td><td>Cửa, điện, WC từng phòng</td></tr>
    <tr><td>Nền thấp</td><td>Cộng khối đắp</td><td>Cao độ trệt, chống thấm chân tường</td></tr>
  </tbody>
</table>
<h2>Nhà cho thuê nhiều phòng</h2>
<p>Bình Tân có nhiều nhu cầu phòng trọ từng tầng. Công năng này đắt hơn nhà một hộ vì thêm WC và đồng hồ điện. Chốt số phòng trước khi nhận “giá rẻ theo m²”.</p>
<h2>Giấy phép</h2>
<p>Lô rộng vẫn bị khống chế mật độ và khoảng lùi. Không vẽ full đất rồi mới xin phép. Lệ phí tách khỏi tiền thi công.</p>
${faqSection([
  { q: "Xây nhà Bình Tân có rẻ hơn Quận 3 không?", a: "Đơn giá m² sàn cùng gói tiêu chuẩn vẫn 4,85–5,5 triệu. Rẻ hơn thường vì ít phụ phí hẻm, không phải vì đơn giá bị cắt kết cấu." },
  { q: "An Lạc có cần tôn nền không?", a: "Lô nào thấp hơn đường thì cần. Khảo sát cao độ trước, không đoán trong báo giá sơ bộ." },
  { q: "Xe tải vào được thì còn phụ phí không?", a: "Mặt tiền xe vào được thì bỏ dòng bốc vác. Hẻm cụt vẫn tính." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-hoc-mon": {
    title: "Xây nhà Hóc Môn",
    excerpt:
      "Xây nhà Hóc Môn: đất rộng hơn nội thành, Quốc lộ 22, nền đắp. Từ 4,85 triệu/m², cọc tính riêng. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Hóc Môn 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Hóc Môn 2026 từ 4,85 triệu/m². Đất rộng, nền đắp, vận chuyển xa hơn nội thành. Cọc và hầm cầu tách khỏi đơn giá. 0909 075 668.",
    metaKeywords: "xây nhà hóc môn, xây nhà huyện hóc môn, nhà thầu hóc môn, sao khuê",
    imageAlt: "Xây nhà Hóc Môn — nhà phố đất rộng",
    content: `<h2>Xây nhà Hóc Môn là đất rộng và quãng đường chở vật tư</h2>
<p><strong>Xây nhà Hóc Môn</strong> (Bình Hưng, dọc Quốc lộ 22, các xã giáp Củ Chi) thường lô lớn hơn nhà ống Sài Gòn. Đơn giá m² không tự giảm chỉ vì đất rẻ. Đội và xe bê tông đi xa hơn từ nội thành; nền đắp hay gặp. Sao Khuê ghi vận chuyển và móng thành dòng riêng. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · <a href="/tin-tuc/xay-nha-binh-hung-hoc-mon">Bình Hưng Hóc Môn</a> · <a href="/bao-gia">/bao-gia</a>.</p>
<h2>Đơn giá xây nhà Hóc Môn 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th><th>Vì sao tách</th></tr></thead>
  <tbody>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Phần sàn ở</td></tr>
    <tr><td>Khá – cao cấp</td><td>5,5 – 6,7 triệu+/m²</td><td>Mặt đứng, thiết bị</td></tr>
    <tr><td>Cọc, hầm tự hoại, tôn nền</td><td>Theo khối</td><td>Chưa có cống hoặc đất đắp</td></tr>
  </tbody>
</table>
<h2>Hạ tầng chưa đồng đều</h2>
<p>Một số tuyến chưa có cống thoát đủ. Hầm tự hoại, cao độ sân và hướng thoát mưa phải có trên bản vẽ. Không xây trệt ngang mặt đường nếu mùa mưa nước tràn vào.</p>
<h2>Giấy phép ngoại thành</h2>
<p>Đất nông nghiệp hoặc đất xen kẹt không được phép xây nhà ở chỉ vì đã đổ nền. Sao Khuê hỏi loại đất trước khi nhận cọc. Lệ phí tách khỏi gói xây.</p>
${faqSection([
  { q: "Xây nhà Hóc Môn giá bao nhiêu?", a: "Sàn tiêu chuẩn 4,85–5,5 triệu/m². Tổng tăng nếu phải cọc, tôn nền hoặc đi xa để đổ bê tông." },
  { q: "Đất lớn có được xây full không?", a: "Không. Mật độ và loại đất quyết định. Đất lúa hoặc đất chưa chuyển mục đích thì dừng." },
  { q: "Có đội ở lại công trình không?", a: "Thi công theo hợp đồng, vật tư chở theo đợt. Không cộng “giá nội thành” rồi cắt giám sát." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },

  "xay-nha-cu-chi": {
    title: "Xây nhà Củ Chi",
    excerpt:
      "Xây nhà Củ Chi: lô vườn, đất nền, đường xa. Từ 4,85 triệu/m², vận chuyển và móng tính riêng. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây nhà Củ Chi 2026 từ 4,85tr | Sao Khuê",
    metaDescription:
      "Xây nhà Củ Chi 2026 từ 4,85 triệu/m². Lô vườn và đất nền, xe bê tông đi xa, móng không đoán. Khảo sát miễn phí trước khi ký — 0909 075 668.",
    metaKeywords: "xây nhà củ chi, xây nhà huyện củ chi, nhà vườn củ chi, sao khuê",
    imageAlt: "Xây nhà Củ Chi — nhà vườn ngoại thành",
    content: `<h2>Xây nhà Củ Chi không lấy đơn giá hẻm Quận 10</h2>
<p><strong>Xây nhà Củ Chi</strong> thường là lô vườn, đất nền, mặt tiền rộng, cách nội thành một chuyến xe. Việc đắt thêm nằm ở chuyến bê tông, ăn ở đội và móng trên đất đắp — không nằm ở việc “cắt thép cho rẻ”. Sao Khuê báo sàn theo cùng mốc thành phố, cộng phụ lục đường xa. Bảo hành kết cấu <strong>10 năm</strong>.</p>
<p><a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói TPHCM</a> · <a href="/bao-gia">máy tính chi phí</a>.</p>
<h2>Đơn giá xây nhà Củ Chi 2026</h2>
<table>
  <thead><tr><th>Phần</th><th>Mốc</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố / nhà vườn, tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Sàn ở, chưa sân vườn</td></tr>
    <tr><td>Hoàn thiện khá</td><td>5,5 – 6,7 triệu+/m²</td><td>Mặt đứng, thiết bị</td></tr>
    <tr><td>Sân, hàng rào, giếng, hầm cầu</td><td>Phụ lục</td><td>Hay gặp đất vườn</td></tr>
    <tr><td>Chuyến bê tông, lưu trú</td><td>Theo đợt</td><td>Xa hơn Bình Thạnh</td></tr>
  </tbody>
</table>
<h2>Đất vườn và mục đích sử dụng</h2>
<p>Nhiều thửa vẫn là đất trồng cây hoặc đất ở một phần. Xây nhà ở trên phần chưa được phép là rủi ro phá dỡ. Sao Khuê xem sổ trước khi vẽ biệt thự. Giếng khoan và hầm cầu thiết kế cùng cao độ nền, không để sau khi đã lát sân.</p>
<h2>Tiến độ</h2>
<p>Nhà phố thường 5–8 tháng nếu đường xe vào được. Mùa mưa đường đất kéo dài hơn. Mốc ghi trong hợp đồng, không hứa tiến độ nội thành.</p>
${faqSection([
  { q: "Xây nhà Củ Chi có rẻ hơn TP.HCM không?", a: "Đơn giá sàn không rẻ hơn để bù đất. Khoản thêm thường là xe, móng và công trình phụ ngoài nhà." },
  { q: "Nhà vườn có gồm hàng rào không?", a: "Không, trừ khi phụ lục ghi. Hàng rào, cổng, sân đá tính riêng khỏi m² sàn." },
  { q: "Cần khảo sát không?", a: "Cần. Gửi ảnh đường vào và sổ (che số) trước, rồi hẹn đo. Hotline 0909 075 668." },
])}
<p>Hotline <strong>0909 075 668</strong>.</p>`,
  },
};

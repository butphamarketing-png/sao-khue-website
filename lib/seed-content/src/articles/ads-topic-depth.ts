/**
 * Khối H2 phụ — unique theo slug — gắn vào bài Ads topic còn mỏng.
 * Không dùng cho trang quận (đã có district-cai-tao-rich).
 */
type ArticleLike = { content: string };

export const ADS_TOPIC_DEPTH: Record<string, string> = {
  "cai-tao-gieng-troi-nha-pho-tphcm": `
<h2>Giếng trời nhà ống TP.HCM — kích thước và thoát nước mưa</h2>
<p>Nhà phố 4–5m mặt tiền thường chừa giếng 1,2–2,0m theo chiều sâu, đặt giữa hoặc sát cầu thang. Kính mái / polycarbonate phải có dốc và máng thu; cổ ống xuống tầng trệt không được nhỏ hơn ống thoát sân thượng. Sao Khuê đo thông thủy từng tầng trước khi cắt sàn — không “đục mắt cáo” rồi vá.</p>
<ul>
  <li>Giếng kín kính: lấy sáng mạnh, nóng hơn — cần lam / cây / quạt hút.</li>
  <li>Giếng hở một phần: mát hơn nhưng chống thấm diềm phức tạp.</li>
  <li>Thông tầng lớn: kiểm tra dầm, PCCC, giấy phép.</li>
</ul>
<h2>Cầu thang và ban công khi đụng giếng trời</h2>
<p>Đổi vị trí thang gần giếng giúp nhà sáng nhưng chiếm diện tích ngủ. Ban công giật cấp lấy gió chéo; lan can kính tăng sáng nhưng phải đạt chiều cao an toàn. Tầng trệt: giữ chỗ xe máy + lối thoát nếu thông tầng.</p>
<p>Khảo sát giếng trời / thông tầng: gọi <strong>0909 075 668</strong>.</p>
`.trim(),

  "cai-tao-nha-ket-hop-kinh-doanh-tphcm": `
<h2>Mặt tiền quán — điện 3 pha, hút mùi, WC khách</h2>
<p>Nhà kết hợp kinh doanh ở TP.HCM hay hỏng vì điện 1 pha quá tải (máy lạnh + bếp + biển) hoặc ống hút mùi xả ra hẻm. Sao Khuê tách tủ điện quán / nhà ở, ghi công suất dự kiến. WC khách không dùng chung ống đứng WC gia đình nếu quán đông — tránh tắc và mùi.</p>
<table>
  <thead><tr><th>Hạng mục quán</th><th>Lưu ý kỹ thuật</th></tr></thead>
  <tbody>
    <tr><td>Cửa kính mặt tiền</td><td>Hệ nhôm, bản lề sàn, chống ngập chân cửa</td></tr>
    <tr><td>Sàn trệt</td><td>Gạch chống trơn, dốc ra hẻm đúng</td></tr>
    <tr><td>Sau mưa ngập</td><td>Thay thiết bị thấp, ốp chân tường, bơm</td></tr>
  </tbody>
</table>
<h2>Nhà cũ 4 tầng mở quán: PCCC và lối thoát</h2>
<p>Trệt quán, 3 lầu ở: giữ lối thang thông, không bịt giếng bằng kho. Đổi công năng mặt tiền cần hỏi phường. Sao Khuê không thi công vượt phép hay bịt lối thoát.</p>
`.trim(),

  "cai-tao-gac-lung-nha-pho-tphcm": `
<h2>Tải trọng gác lửng — neo cột, không hàn treo tường gạch</h2>
<p>Gác lửng nhà ống 4m thường dùng thép hình hoặc bê tông mỏng trên dầm hiện hữu. Tường gạch 100–200mm không chịu tải giường + người. Sao Khuê khoan hóa chất vào cột/dầm hoặc gia cố thêm cột thép rồi mới trải tôn/gỗ/tấm cemboard.</p>
<ul>
  <li>Chiều cao dưới gác: tối thiểu để đi lại / để xe tùy công năng.</li>
  <li>Chiều cao trên gác: đủ ngồi / nằm; mái tôn nóng thì cách nhiệt.</li>
  <li>Cách âm sàn gác nếu phòng ngủ bên dưới.</li>
</ul>
<h2>Gác lửng có tính tầng xin phép không?</h2>
<p>Phụ thuộc diện tích sàn gác và chiều cao thông thủy theo hướng dẫn phường. Gác nhỏ “kho / ngủ phụ” khác sàn lửng chiếm gần hết mặt bằng. Tư vấn hiện trạng trước khi hàn — gọi <strong>0909 075 668</strong>.</p>
`.trim(),

  "chong-tham-tuong-wc-tphcm": `
<h2>Chống thấm WC — tháo ốp, cổ ống, ngâm thử</h2>
<p>Keo mặt gạch chỉ che thấm tạm. Gói bền: tháo ốp, xử lý cổ ống thoát, quét 2–3 lớp (xi măng polyme / gốc PU tùy hiện trạng), ngâm nước 24–72 giờ trước khi ốp lại. Tường ngoài nhà phố: nứt chân chim khác nứt chân tường — sơn trang trí không thay chống thấm.</p>
<table>
  <thead><tr><th>Hạng mục</th><th>Thời gian tham khảo</th></tr></thead>
  <tbody>
    <tr><td>WC 3–6m² (tháo ốp + ngâm)</td><td>4–8 ngày / phòng</td></tr>
    <tr><td>Tường ngoài 1 mặt nhà phố</td><td>3–10 ngày tùy giàn giáo</td></tr>
    <tr><td>Thay mái tôn nhà ống</td><td>1–4 ngày (tránh mưa)</td></tr>
  </tbody>
</table>
<h2>Sàn phồng gạch và sơn mặt tiền</h2>
<p>Sàn WC / ban công phồng: xử lý thấm rồi mới lát. Sơn mặt tiền và cửa nhôm kính làm sau khi tường khô. Sân thượng: xem bài chống thấm sân thượng riêng — không gộp “sơn tum” thành chống thấm.</p>
`.trim(),

  "xin-giay-phep-cai-tao-nha-tphcm": `
<h2>Việc nào cần phép cải tạo, việc nào không</h2>
<p>Sơn, lát, thay thiết bị WC, chống thấm không đục kết cấu: thường không xin phép. Đục cột/dầm, thông tầng, nâng tum, đổi mặt đứng lớn, đổi công năng ở → quán: phải đối chiếu GPXD và hỏi phường. Sao Khuê lập hiện trạng + tư vấn hồ sơ; lệ phí nhà nước do chủ nhà nộp.</p>
<ol>
  <li>Chụp giấy phép cũ (nếu có) và sổ.</li>
  <li>Khảo sát kết cấu — ghi việc được làm / việc cần điều chỉnh phép.</li>
  <li>Bản vẽ cải tạo nếu đụng số tầng / mật độ / mặt đứng.</li>
  <li>Nộp đúng nơi phân cấp (phường / quận).</li>
</ol>
<h2>Cải tạo khác xây mới thế nào?</h2>
<p>Xây mới trên đất trống đi giấy phép xây dựng. Cải tạo nhà đang ở thường phức tạp hơn vì hiện trạng lệch bản vẽ cũ. Không thi công vượt phép. Hotline <strong>0909 075 668</strong> — 245/8 Bình Lợi, Bình Thạnh.</p>
<h2>Gửi hồ sơ để tư vấn nhanh</h2>
<p>Ảnh mặt đứng + GPXD cũ (nếu có) + mô tả hạng mục muốn làm. Sao Khuê trả lời việc nào làm ngay, việc nào cần điều chỉnh phép — trước khi đục tường. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>
`.trim(),

  "cai-tao-bep-wc-tphcm": `
<h2>Ống đứng, dốc sàn và nhà 1 WC</h2>
<p>Cải tạo bếp–WC nhà phố TP.HCM hay thất bại vì giữ ống cũ lệch dốc hoặc thu nhỏ ống đứng. Sao Khuê đo dốc sàn, cổ ống, van chặn từng tầng. Nhà 1 WC: làm nhanh 5–10 ngày hoặc thuê toilet tạm; không để gia đình không WC quá 1 ngày nếu ở lại.</p>
<ul>
  <li>Bếp: hút mùi ống cứng ra mặt tiền / giếng, không xả hẻm hẹp.</li>
  <li>WC: chống thấm trước ốp; ngâm thử.</li>
  <li>Đục tường chịu lực đổi ống: cần kỹ sư, có thể xin phép.</li>
</ul>
<h2>Chi phí bếp–WC tham khảo</h2>
<p>Một WC 4–6m² (tháo ốp + thấm + thiết bị trung cấp) thường 35–80 triệu. Bếp 8–12m² (điện, nước, ốp, tủ không gỗ cao cấp) 40–120 triệu. Gói cả hai khi đang ở: chia ca, che bụi — xem cải tạo nhà đang ở.</p>
`.trim(),

  "son-nha-va-noi-that-tphcm": `
<h2>Sơn trọn gói — số lớp, bả, che chắn</h2>
<p>Gói sơn nhà phố TP.HCM ghi rõ: bả 1–2 lớp, lót, phủ 2 lớp, thương hiệu, diện tích tường/trần tách sàn. Thợ sơn lẻ thường bỏ bả và không che đồ — chủ nhà phải dọn lại. Trần thạch cao ố: xử lý thấm rồi mới sơn; sơn đè mốc sẽ lại ố.</p>
<ul>
  <li>Nhà đang ở: sơn từng phòng, lịch 7–14 ngày nhà 3 tầng.</li>
  <li>Thay gạch nền: tháo lớp cũ để dốc đúng; ốp đè dễ phồng.</li>
  <li>Phòng khách: đèn, vách, kệ làm sau sơn–lát.</li>
</ul>
<h2>Sơn trong khác sơn chống thấm ngoài</h2>
<p>Sơn nội thất không thay chống thấm tường ngoài / sân thượng. Nếu cần cả hai, Sao Khuê tách dòng báo giá. Gọi <strong>0909 075 668</strong>.</p>
`.trim(),

  "cai-tao-nha-2-tang-tphcm": `
<h2>Nhà 2 tầng và 3 tầng — ống đứng, sàn, thang</h2>
<p>Cải tạo nhà 2 tầng TP.HCM khác nhà cấp 4: mọi đục sàn ảnh hưởng tầng dưới. Nhà 3 tầng thêm ống đứng WC/thoát mưa xuyên nhiều tầng — tắc một điểm ngập cả nhà. Sao Khuê camera/nội soi ống khi gói lớn.</p>
<table>
  <thead><tr><th>Việc</th><th>Rủi ro nếu làm ẩu</th></tr></thead>
  <tbody>
    <tr><td>Đập thông phòng</td><td>Mất tường chịu lực, nứt sàn trên</td></tr>
    <tr><td>Mở rộng hiên / lùi chỉ giới</td><td>Vượt phép, hàng xóm khiếu nại</td></tr>
    <tr><td>Thêm tầng</td><td>Móng–cột không đủ — xem nâng tầng</td></tr>
  </tbody>
</table>
<h2>Ở lại khi sửa nhà 3 tầng</h2>
<p>Làm từng tầng được nếu không đập thông liên tầng. Đục dầm / thông giếng: nên chuyển tạm. Đơn giá cải tạo sâu thường 3,5–5 triệu/m² sàn đụng — khảo sát tại chỗ.</p>
`.trim(),

  "cai-tao-nha-cho-thue-tphcm": `
<h2>Hạng mục cho thuê — WC, điện, khóa, PCCC tối thiểu</h2>
<p>Chủ nhà hay sơn lại cho “đẹp ảnh” trong khi WC thấm và điện cũ. Sao Khuê ưu tiên: không thấm, aptomat từng phòng, khóa cửa, thoát hiểm. Nội thất đắt không tăng giá thuê tương ứng thì cắt.</p>
<ul>
  <li>Phòng trọ: WC riêng, đồng hồ điện nếu tách được.</li>
  <li>Nhà nguyên căn: bếp–WC, sơn–lát, máy nước nóng an toàn.</li>
  <li>Nhà nát / nứt cột: khảo sát kết cấu trước khi sơn che.</li>
</ul>
<h2>Phá dỡ có kiểm soát</h2>
<p>Phá toàn bộ hoặc đụng hàng xóm: làm việc phường, che chắn, xe đổ phế thải đúng giờ hẻm. Không phá chui. Xây lại cho thuê: xem bài xây nhà cho thuê.</p>
`.trim(),

  "xay-nha-co-ham-tphcm": `
<h2>Hầm nhà phố — tường vây, chống thấm ngược, ngập</h2>
<p>Hầm TP.HCM (Nhà Bè, Q.7, Bình Chánh, hẻm gần rạch) cần tính mực nước và bơm. Tường vây / cừ: máy vào hẻm 3m hạn chế — khảo sát lối. Chống thấm ngược thành hầm khác quét sân thượng. Thông gió và PCCC ghi trong hồ sơ, không “để sau”.</p>
<ul>
  <li>Hầm để xe: dốc, bán kính quay, chiều cao cửa.</li>
  <li>Tum: diện tích / chiều cao theo quy hoạch — không đổ tum vượt phép.</li>
  <li>Mái bằng: dốc, cổ ống, ngâm nước nghiệm thu.</li>
</ul>
<p>Chi phí hầm thường +15–30% phần móng so nhà không hầm. Báo tách dòng, không nuốt vào đơn giá m² thô.</p>
`.trim(),

  "xay-nha-pho-4x16-tphcm": `
<h2>Mặt bằng 4×16 — trệt xe, giếng, 2–3 lầu</h2>
<p>Lô 4×16 (~64m² đất) phổ biến Gò Vấp, Tân Bình, Bình Tân. Trệt: xe + khách–bếp; giếng giữa hoặc sát thang; 2–3 lầu ngủ. Nhà liền kề sát hai bên: khe nhiệt, chống thấm tường chung, thỏa thuận hàng xóm khi đào móng.</p>
<table>
  <thead><tr><th>Quy mô</th><th>Trọn gói cơ bản (mốc)</th></tr></thead>
  <tbody>
    <tr><td>4×16 — 1 trệt 2 lầu</td><td>3,2 – 4,8 tỷ</td></tr>
    <tr><td>4×16 — 4 tầng</td><td>4,0 – 5,8 tỷ</td></tr>
    <tr><td>Hẻm 3m / nền yếu</td><td>Cộng cọc, máy nhỏ — khảo sát</td></tr>
  </tbody>
</table>
<h2>4×16 khác 4×12 và 5×20</h2>
<p>4×12 hẹp sâu: thang chiếm tỷ lệ lớn. 5×20 dễ phòng khách và giếng. Số tầng theo quy hoạch + PCCC, không chỉ theo bề rộng hẻm.</p>
`.trim(),

  "xay-nha-cho-thue-tphcm": `
<h2>Nhà cho thuê — số phòng hợp pháp, WC, điện 3 pha</h2>
<p>Xây nhà cho thuê TP.HCM khác nhà ở gia đình: tối ưu phòng 12–20m² + WC, lối thoát, đồng hồ. Không nhồi phòng vượt phép. Shophouse trệt + ở trên tính công năng quán riêng.</p>
<ol>
  <li>Chốt loại hình: phòng trọ / nguyên căn / mix.</li>
  <li>PCCC theo quy mô thực tế — tư vấn trước khi vẽ.</li>
  <li>Điện 3 pha nếu nhiều máy lạnh.</li>
  <li>Hầm hoặc trệt để xe nếu khu khan chỗ đậu.</li>
</ol>
<p>Cải tạo nhà sẵn rẻ hơn xây mới nếu khung còn tốt. Khung nát: phá dỡ có phép rồi xây lại.</p>
<h2>Mặt bằng cho thuê hiệu quả</h2>
<p>WC từng phòng/tầng, điện tách, lối đi chung rõ. Đừng copy nhà ở gia đình rồi “chia phòng sau”. Sao Khuê tư vấn công năng khi khảo sát — gọi <strong>0909 075 668</strong>.</p>
`.trim(),

  "chi-phi-xay-nha-3-tang-tphcm": `
<h2>Vì sao cùng 3 tầng giá lệch 1–2 tỷ?</h2>
<p>Lô, hẻm, móng cọc, hoàn thiện (gạch, cửa, WC) quyết định nhiều hơn “đơn giá m²” trên mạng. Hẻm xe hơi khác hẻm 2,5m (vật tư khiêng). Nền ao cũ cộng ép cọc. Sao Khuê tách thô / hoàn thiện / móng — không gộp m² ảo.</p>
<ul>
  <li>Thô 2026 nhà phố: khoảng 3,5–5,5 triệu/m² (chưa cọc).</li>
  <li>Trọn gói cơ bản 3 tầng: khoảng 6,5–9,5 triệu/m².</li>
  <li>Cấp 4: ít sàn hơn, đơn giá khác — không so một con số.</li>
</ul>
<h2>Cách chốt ngân sách</h2>
<p>Gửi sổ + ảnh hẻm + số tầng mong muốn. Máy tính <a href="/bao-gia">/bao-gia</a> cho mốc; khảo sát mới ra hợp đồng. Hotline <strong>0909 075 668</strong>.</p>
`.trim(),

  "xay-nha-tra-gop-tphcm": `
<h2>Thanh toán theo nghiệm thu — không phải vay 0%</h2>
<p>Sao Khuê không phải tổ chức tín dụng. “Trả góp” ở đây là tạm ứng theo mốc móng / thô / hoàn thiện / bàn giao. Chủ nhà tự vay ngân hàng thì chúng tôi hỗ trợ dự toán hồ sơ vay.</p>
<ol>
  <li>Ký HĐ: 10–20% tùy gói.</li>
  <li>Sau móng / đài.</li>
  <li>Sau thô (từng sàn nếu nhà cao).</li>
  <li>Hoàn thiện theo khối.</li>
  <li>Quyết toán khi bàn giao.</li>
</ol>
<h2>Thời gian 5–8 tháng và mùa mưa</h2>
<p>Nhà phố 3–4 tầng thường 5–8 tháng. Đổ bê tông ngoài trời có thể dời ngày mưa; hợp đồng ghi ngày làm việc + điều khoản mưa. Không hứa “3 tháng chìa khóa” nếu hẻm hẹp và móng cọc.</p>
`.trim(),

  "don-gia-hoan-thien-nha-2026": `
<h2>Hoàn thiện gồm gì, không gồm gì (2026)</h2>
<p>Mốc 2,5–5,5 triệu/m² nhà phố TP.HCM thường gồm: sơn bả, lát nền–ốp, trần, cửa bộ, thiết bị WC–bếp cơ bản theo list. Không gồm: nội thất gỗ, điều hòa, rèm, tủ bếp cao cấp, sân vườn — trừ khi ghi phụ lục.</p>
<table>
  <thead><tr><th>Mức</th><th>Định hướng vật tư</th></tr></thead>
  <tbody>
    <tr><td>Cơ bản 2,5–3,5 triệu/m²</td><td>Gạch, sơn, cửa tầm trung</td></tr>
    <tr><td>Khá 3,5–5,0</td><td>Gạch lớn, cửa nhôm kính tốt hơn</td></tr>
    <tr><td>Cao 5,0+</td><td>Theo mẫu chủ nhà duyệt</td></tr>
  </tbody>
</table>
<h2>Làm hoàn thiện khi đang ở</h2>
<p>Sơn–lát từng tầng được. Thay cửa cả nhà và ốp WC: chia ca. Xem cải tạo nhà đang ở nếu gia đình không chuyển đi.</p>
<h2>Cách đọc đơn giá và nghiệm thu</h2>
<p>Gạch/sơn/cửa ghi mã rõ trong HĐ. Nhà thô: nghiệm thu chống thấm WC–sân trước khi ốp. Ba gói hay gặp (cơ bản / khá / cao) khác nhau ở vật tư — không “gói A/B” mơ hồ. Nội thất rời và điều hòa luôn phụ lục. Xem <a href="/dich-vu/hoan-thien-nha">dịch vụ hoàn thiện</a> · hotline <strong>0909 075 668</strong>.</p>
`.trim(),

  "xay-nha-tiet-kiem-tphcm": `
<h2>Cắt đúng chỗ — không cắt thép và chống thấm</h2>
<p>Tiết kiệm bền: mái bằng thay thái, gạch trung cấp, làm thô xong hoàn thiện sau, giảm gỗ nội thất. Không giảm mác bê tông, thép, chiều dày sàn, chống thấm sân–WC. Cắt kết cấu là nợ thấm–nứt 2–5 năm.</p>
<ul>
  <li>Giấy phép + lệ phí + bản vẽ: tính vào ngân sách từ đầu.</li>
  <li>Hẻm hẹp: nhân công khiêng — không “giá rẻ như đường lớn”.</li>
  <li>Long An / Bình Dương: đơn giá khác TP.HCM — khảo sát riêng.</li>
</ul>
<p>Muốn giảm 15–20% so gói khá: chốt list vật tư trước khi ký, không mặc cả miệng trên công trường.</p>
<h2>Lịch thanh toán khi siết ngân sách</h2>
<p>Chia mốc móng–sàn–mái–hoàn thiện; giữ 10% đến nghiệm thu. Đừng cắt chống thấm tum/WC để “giảm giá” — sửa sau đắt hơn. Landing <a href="/xay-nha">/xay-nha</a> · <strong>0909 075 668</strong>.</p>
`.trim(),

  "ep-coc-nha-pho-tphcm": `
<h2>Ép cọc hay khoan nhồi — hẻm quyết định máy</h2>
<p>Hẻm &lt; 3m thường không mở máy ép lớn: chuyển khoan cọc nhồi hoặc máy nhỏ. Nền gần rạch (Q.7, Nhà Bè, Q.4, Q.8, Bình Chánh) hay cần cọc dù nhà phố 3 tầng. Chi phí theo số cọc × mét sâu + máy + phụ phí hẻm — tách khỏi đơn giá thô.</p>
<ul>
  <li>Biên bản giao cọc, nhật ký độ sâu.</li>
  <li>Thí nghiệm nén khi hồ sơ yêu cầu.</li>
  <li>Thông báo hàng xóm ca máy; khu hạn giờ ồn lập phụ lục.</li>
</ul>
`.trim(),

  "xay-nha-lech-tang-tphcm": `
<h2>Lệch tầng — công năng trước “đẹp 3D”</h2>
<p>Lệch tầng lấy giếng trời nhà ống 4–5m, gara trệt + lửng. Kết cấu và ván khuôn phức tạp hơn nhà đều tầng (thường +5–12% khung). Không lệch tầng chỉ vì phối cảnh nếu phòng ngủ bị méo và chi phí đội mà không thêm chỗ ở.</p>
<p>Nhà 5 tầng: quy hoạch + PCCC, không tự ý thêm lửng tính tầng. Gara ống 4m: đo bề rộng cửa và bán kính quay tại hẻm.</p>
<h2>Xin phép và khảo sát lệch tầng</h2>
<p>Chiều cao tổng và chỉ giới phải khớp GPXD. Không tự đúc thêm nửa sàn sau nghiệm thu. Gửi ảnh lô + số tầng mong muốn qua hotline <strong>0909 075 668</strong> trước khi vẽ 3D.</p>
`.trim(),

  "xay-nha-4x12-tphcm": `
<h2>Nhà 4×12 — giếng trời bắt buộc nếu không muốn tối</h2>
<p>~48m² đất: cầu thang chiếm tỷ lệ lớn. Ưu tiên bản thang hẹp hợp lý, giếng sát thang, phòng ngủ không chia vụn. 1 trệt 2 lầu trọn gói cơ bản thường 2,6–4,0 tỷ tùy hẻm và móng. 5×16 thêm ~32m² đất: khách–bếp tách dễ hơn.</p>
<p>4 tầng trên lô 4×12: theo phép phường, không theo ý chủ nhà. So 4×16 nếu đất đủ sâu — xem bài 4×16.</p>
<h2>Hẻm 3m và móng trên lô 4×12</h2>
<p>Hẻm xe máy: bơm bê tông, khiêng gạch, cọc máy nhỏ. Nền ao cũ cộng ép cọc — tách dòng khỏi đơn giá thô. Gửi ảnh hẻm + sổ khi gọi <strong>0909 075 668</strong>.</p>
<h2>Công năng và ngân sách</h2>
<p>Cầu thang chữ I, giếng nhỏ, ít hành lang. Báo giá sau đo đất — không chốt theo m² mạng. Xem thêm <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">4×16</a> nếu lô sâu hơn.</p>
`.trim(),
};

export function applyAdsTopicDepth<T extends ArticleLike>(
  bySlug: Record<string, T>,
): Record<string, T> {
  const out: Record<string, T> = { ...bySlug };
  for (const [slug, art] of Object.entries(out)) {
    const extra = ADS_TOPIC_DEPTH[slug];
    if (!extra) continue;
    if (art.content.includes("data-ads-topic-depth")) continue;
    out[slug] = {
      ...art,
      content: `${art.content}\n<div data-ads-topic-depth="1">\n${extra}\n</div>`,
    };
  }
  return out;
}

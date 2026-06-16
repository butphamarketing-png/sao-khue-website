-- Batch 02/15 — bài 11–20 / 149
-- Supabase SQL Editor: New query → Paste → Run (từng file một)

BEGIN;

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$xay-dung-phan-tho$slug$,
  $title$Xây Dựng Phần Thô Nhà Phố TP.HCM — Giá Tốt 2026$title$,
  $cat$dich-vu$cat$,
  $excerpt$Thi công phần thô nhà phố, biệt thự: móng, khung BTCT, điện nước âm tường. Bảo hành kết cấu 10 năm. Báo giá 0909 075 668.$excerpt$,
  $content$<h2>Xây dựng phần thô nhà phố — Nền móng vững chắc cho ngôi nhà</h2>
<p><strong>Phần thô</strong> là khung xương của công trình: móng, cột, dầm sàn, tường bao che, mái và hệ thống điện nước âm tường. Chất lượng giai đoạn này quyết định độ an toàn và tuổ thọ nhà. <strong>Sao Khuê</strong> nhận <strong>thi công xây dựng phần thô</strong> tại TP.HCM cho nhà phố, biệt thự, nhà ở riêng lẻ — phù hợp chủ nhà đã có bản vẽ thiết kế hoặc muốn chủ động giai đoạn hoàn thiện.</p>

<h2>Phạm vi thi công phần thô tại Sao Khuê</h2>
<ul>
  <li>Đào móng, đổ bê tông móng (băng, cọc, đơn theo thiết kế).</li>
  <li>Xây tường, dầm sàn, cột, cầu thang bê tông.</li>
  <li>Kết cấu mái (BTCT, mái tôn kết hợp theo bản vẽ).</li>
  <li>Hệ thống điện, nước, thoát nước âm tường.</li>
  <li>Nhân công hoàn thiện thô cơ bản (trát ngoài trong mức hợp đồng).</li>
</ul>
<p>Sau phần thô, bạn có thể ký tiếp gói <a href="/dich-vu/hoan-thien-nha">hoàn thiện nhà</a> hoặc <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây trọn gói</a> ngay từ đầu.</p>

<h2>Đơn giá xây phần thô tham khảo 2026</h2>
<table>
  <thead>
    <tr><th>Mức</th><th>Đơn giá (đ/m²)</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    <tr><td>Trung bình</td><td>3,55 triệu</td><td>Vật tư tiêu chuẩn</td></tr>
    <tr><td>TB – Khá</td><td>3,7 triệu</td><td>Thép, xi măng chủng loại tốt hơn</td></tr>
    <tr><td>Khá</td><td>3,8 triệu</td><td>Yêu cầu kỹ thuật cao hơn</td></tr>
  </tbody>
</table>
<p>Giá tính theo diện tích xây dựng quy đổi (gồm móng, tầng, mái). Chi tiết: <a href="/bao-gia">bảng báo giá</a> và <a href="/bao-gia#tinh-chi-phi">máy tính chi phí</a>.</p>

<h2>Lợi ích khi chọn thầu phần thô uy tín</h2>
<ul>
  <li><strong>Giám sát kỹ thuật</strong> tại hiện trường, nghiệm thu cốt thép trước khi đổ bê tông.</li>
  <li><strong>Bảo hành kết cấu 10 năm</strong> theo hợp đồng.</li>
  <li><strong>Minh bạch vật tư</strong> — chủng loại thép, xi măng thống nhất từ đầu.</li>
  <li><strong>Tiến độ rõ ràng</strong> — tránh kéo dài làm tốn chi phí vận hành.</li>
</ul>

<h2>Quy trình làm việc</h2>
<ol>
  <li>Khảo sát mặt bằng, đối chiếu bản vẽ thiết kế kết cấu.</li>
  <li>Lập dự toán phần thô chi tiết, ký hợp đồng.</li>
  <li>Thi công theo đúng hồ sơ, cập nhật hình ảnh tiến độ.</li>
  <li>Nghiệm thu, bàn giao hồ sơ as-built và kích hoạt bảo hành.</li>
</ol>

<h2>FAQ — Xây phần thô</h2>
<h3>Phần thô khác trọn gói thế nào?</h3>
<p>Phần thô chỉ gồm kết cấu và hệ thống âm tường; trọn gói thêm hoàn thiện, cửa, thiết bị để vào ở.</p>
<h3>Tôi chưa có bản vẽ có xây được không?</h3>
<p>Có. Sao Khuê hỗ trợ <a href="/dich-vu/thiet-ke-nha">thiết kế nhà</a> trước khi thi công.</p>
<h3>Thời gian thi công phần thô?</h3>
<p>Nhà phố 3–4 tầng thường <strong>2–4 tháng</strong> tùy quy mô và thời tiết.</p>

<h2>Liên hệ</h2>
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">Liên hệ tư vấn</a> · Địa chỉ: Quận Bình Thạnh, TP.HCM.</p>$content$,
  $img$/images/sao-khue/sk-35.jpg$img$,
  $mt$Xây Dựng Phần Thô Nhà Phố TP.HCM | Đơn Giá 3,55–3,8 Triệu/m² | Sao Khuê$mt$,
  $md$Xây phần thô TP.HCM uy tín: nhân công + vật tư thô, giám sát kỹ thuật, bảo hành kết cấu 10 năm. Khảo sát miễn phí — Sao Khuê 0909 075 668.$md$,
  $mk$xây dựng phần thô, xây thô nhà phố tphcm, đơn giá xây thô 2026, thi công phần thô, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$thiet-ke-nha$slug$,
  $title$Thiết Kế Nhà Ở TP.HCM — Nhà Phố, Biệt Thự 2D/3D$title$,
  $cat$dich-vu$cat$,
  $excerpt$Dịch vụ thiết kế nhà phố, biệt thự tại TP.HCM: tối ưu công năng, phối cảnh 3D, hồ sơ xin phép. Miễn phí khi ký xây trọn gói.$excerpt$,
  $content$<h2>Thiết kế nhà ở — Bước đầu quyết định chất lượng công trình</h2>
<p>Một bản thiết kế tốt giúp tối ưu <strong>diện tích sử dụng</strong>, <strong>ánh sáng tự nhiên</strong>, <strong>thông gió</strong> và chi phí xây dựng lâu dài. <strong>Công ty TNHH Kiến Trúc Sao Khuê</strong> cung cấp dịch vụ <strong>thiết kế nhà ở tại TP.HCM</strong> cho nhà phố, biệt thự, nhà phố kết hợp kinh doanh — từ phác thảo ý tưởng đến hồ sơ thi công và hỗ trợ xin giấy phép.</p>

<h2>Hồ sơ thiết kế bàn giao</h2>
<ul>
  <li><strong>Mặt bằng từng tầng</strong> — bố trí phòng, cầu thang, giếng trời.</li>
  <li><strong>Mặt đứng, mặt cắt</strong> — cao độ, mái, lan can.</li>
  <li><strong>Phối cảnh 3D</strong> — hình dung ngoại thất trước khi xây.</li>
  <li><strong>Thuyết minh kỹ thuật</strong> — vật liệu, kết cấu sơ bộ phục vụ dự toán.</li>
  <li><strong>Hồ sơ xin phép</strong> (theo gói) — hỗ trợ thủ tục với cơ quan có thẩm quyền.</li>
</ul>

<h2>Phong cách thiết kế phổ biến</h2>
<ul>
  <li>Nhà phố hiện đại, tối giản.</li>
  <li>Tân cổ điển, Indochine.</li>
  <li>Biệt thự sân vườn, mái Thái.</li>
  <li>Nhà phố kinh doanh tầng trệt.</li>
</ul>
<p>Tham khảo <a href="/cong-trinh/thiet-ke-nha-phong-cach-hien-dai">mẫu nhà phố hiện đại</a> và <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a> trên website.</p>

<h2>Thiết kế và thi công trọn gói</h2>
<p>Khi ký <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói</a> tại Sao Khuê, khách hàng được <strong>miễn phí thiết kế kiến trúc 2D/3D</strong> (theo quy mô công trình áp dụng). Thiết kế và thi công cùng một đơn vị giúp giảm sai lệch giữa bản vẽ và hiện trường.</p>

<h2>Quy trình thiết kế</h2>
<ol>
  <li>Trao đổi nhu cầu, ngân sách, quy hoạch đất.</li>
  <li>Phác thảo phương án 1–2 options.</li>
  <li>Chốt mặt bằng, triển khai 3D và hồ sơ kỹ thuật.</li>
  <li>Bàn giao file, hỗ trợ giải trình với nhà thầu hoặc Sao Khuê thi công.</li>
</ol>

<h2>FAQ thiết kế nhà</h2>
<h3>Thiết kế nhà mất bao lâu?</h3>
<p>Nhà phố 3–4 tầng thường <strong>2–4 tuần</strong> sau khi chốt yêu cầu và có số đo đất đầy đủ.</p>
<h3>Chi phí thiết kế riêng?</h3>
<p>Báo giá theo diện tích sàn và độ phức tạp. Liên hệ <strong>0909 075 668</strong> để nhận báo giá.</p>
<h3>Có kết hợp phong thủy không?</h3>
<p>Có thể tư vấn bố trí theo yêu cầu — xem thêm <a href="/kinh-nghiem/phong-thuy-nha-o">phong thủy nhà ở</a>.</p>

<h2>Liên hệ thiết kế</h2>
<p>Hotline <strong>0909 075 668</strong> · Email kientrucsaokhue@gmail.com · <a href="/lien-he">Đặt lịch tư vấn</a></p>$content$,
  $img$/images/sao-khue/sk-36.jpg$img$,
  $mt$Thiết Kế Nhà Ở TP.HCM — Kiến Trúc 2D/3D | Sao Khuê$mt$,
  $md$Thiết kế nhà phố, biệt thự TP.HCM: mặt bằng, phối cảnh 3D, hồ sơ kỹ thuật. Kiến trúc sư Sao Khuê — tư vấn 0909 075 668.$md$,
  $mk$thiết kế nhà tphcm, thiết kế nhà phố, thiết kế biệt thự, thiết kế kiến trúc, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$nang-tang-nha-pho$slug$,
  $title$Nâng Tầng Nhà Phố TP.HCM — An Toàn, Tiết Kiệm Chi Phí$title$,
  $cat$dich-vu$cat$,
  $excerpt$Dịch vụ nâng tầng nhà phố: khảo sát kết cấu, gia cố, thiết kế, xin phép và thi công. Sao Khuê — Hotline 0909 075 668.$excerpt$,
  $content$<h2>Nâng tầng nhà phố — Mở rộng diện tích khi đất hạn hẹp</h2>
<p>Khi không thể mở rộng ngang, <strong>nâng thêm tầng</strong> là giải pháp phổ biến tại TP.HCM. Tuy nhiên, nhà cũ có kết cấu, móng giới hạn — cần <strong>khảo sát kỹ thuật</strong> trước khi thi công. <strong>Sao Khuê</strong> cung cấp dịch vụ <strong>nâng tầng nhà phố trọn gói</strong>: khảo sát, thiết kế gia cố, hỗ trợ thủ tục và thi công.</p>

<h2>Khi nào nên nâng tầng?</h2>
<ul>
  <li>Gia đình đông người, thiếu phòng ngủ.</li>
  <li>Muốn cho thuê thêm tầng.</li>
  <li>Nhà cũ 1–2 tầng, móng và cột còn tốt hoặc có thể gia cố.</li>
</ul>

<h2>Quy trình nâng tầng tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát kết cấu:</strong> Móng, cột, dầm, tường chịu lực hiện có.</li>
  <li><strong>Thiết kế gia cố + tầng mới:</strong> Tính toán tải trọng, bản vẽ thi công.</li>
  <li><strong>Thủ tục:</strong> Tư vấn xin giấy phép nâng tầng (nếu thuộc diện bắt buộc).</li>
  <li><strong>Thi công:</strong> Gia cố trước, dựng khung tầng mới, hoàn thiện.</li>
  <li><strong>Nghiệm thu &amp; bảo hành</strong> phần kết cấu mới và gia cố.</li>
</ol>

<h2>Chi phí nâng tầng tham khảo</h2>
<p>Phụ thuộc số tầng thêm, mức gia cố, vật liệu. Thường tính theo m² sàn tầng mới + hạng mục gia cố. Liên hệ khảo sát để nhận <strong>báo giá chính xác</strong> — xem thêm <a href="/bao-gia">bảng giá</a>.</p>

<h2>Rủi ro nếu không khảo sát</h2>
<ul>
  <li>Nứt tường, lún nền do quá tải.</li>
  <li>Bị đình chỉ thi công khi không có giấy phép.</li>
  <li>Chi phí sửa chữa cao hơn nếu phải đập làm lại.</li>
</ul>

<h2>FAQ nâng tầng</h2>
<h3>Nâng 1 tầng mất bao lâu?</h3>
<p>Thường <strong>2–4 tháng</strong> tùy gia cố và hoàn thiện.</p>
<h3>Có phải di dời khi thi công?</h3>
<p>Tùy phương án; nhiều công trình vẫn ở tầng dưới với biện pháp an toàn che chắn.</p>

<h2>Liên hệ</h2>
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · Xem <a href="/cong-trinh">công trình</a> tham khảo.</p>$content$,
  $img$/images/sao-khue/sk-37.jpg$img$,
  $mt$Nâng Tầng Nhà Phố TP.HCM — Khảo Sát Kết Cấu | Sao Khuê$mt$,
  $md$Nâng tầng nhà phố an toàn tại TP.HCM: khảo sát móng, gia cố, thi công trọn gói. Bảo hành kết cấu 10 năm. Tư vấn 0909 075 668.$md$,
  $mk$nâng tầng nhà phố, nâng tầng nhà cũ tphcm, gia cố nâng tầng, xin phép nâng tầng, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$hoan-thien-nha$slug$,
  $title$Hoàn Thiện Nhà Trọn Gói TP.HCM — Nhà Xây Thô, Căn Hộ$title$,
  $cat$dich-vu$cat$,
  $excerpt$Hoàn thiện nhà phố, căn hộ thô: ốp lát, sơn, trần, điện nước, cửa. Báo giá minh bạch, bảo hành 12–36 tháng.$excerpt$,
  $content$<h2>Hoàn thiện nhà — Giai đoạn tạo nên không gian sống</h2>
<p>Sau <a href="/dich-vu/xay-dung-phan-tho">phần thô</a>, giai đoạn <strong>hoàn thiện</strong> quyết định thẩm mỹ và công năng: trát, sơn, ốp lát, trần, cửa, thiết bị vệ sinh, điện nước hoàn thiện. <strong>Sao Khuê</strong> nhận <strong>hoàn thiện nhà trọn gói</strong> cho nhà phố, biệt thự và căn hộ đã bàn giao thô tại TP.HCM.</p>

<h2>Hạng mục hoàn thiện phổ biến</h2>
<ul>
  <li>Trát, chống thấm nhà vệ sinh, sân thượng.</li>
  <li>Sơn nước nội ngoại thất.</li>
  <li>Ốp lát sàn, ốp tường nhà bếp, WC.</li>
  <li>Trần thạch cao, đèn âm trần.</li>
  <li>Cửa nhôm kính, cửa gỗ, lan can.</li>
  <li>Thiết bị vệ sinh, bếp (theo gói chọn).</li>
</ul>

<h2>Hoàn thiện nhà thô hay căn hộ chung cư</h2>
<p><strong>Nhà phố xây thô:</strong> Thường tùy chỉnh theo thiết kế, thời gian linh hoạt hơn.</p>
<p><strong>Căn hộ:</strong> Tuân thủ quy định tòa nhà về giờ thi công, vận chuyểi vật liệu; Sao Khuê có kinh nghiệm phối hợp ban quản lý.</p>

<h2>Đơn giá hoàn thiện tham khảo</h2>
<p>Thường từ <strong>2,5–5 triệu đ/m²</strong> tùy vật liệu (gạch, sơn, thiết bị). Báo giá chính thức sau khảo sát hiện trạng.</p>

<h2>Kết hợp với xây trọn gói</h2>
<p>Khách mới xây nên cân nhắc <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói</a> để đồng bộ thiết kế – thi công – bảo hành. Chỉ hoàn thiện riêng phù hợp khi đã có khung nhà vững.</p>

<h2>FAQ</h2>
<h3>Hoàn thiện mất bao lâu?</h3>
<p>Căn hộ 80–100 m² khoảng <strong>1,5–2,5 tháng</strong>; nhà phố 3–4 tầng có thể 2–4 tháng.</p>
<h3>Bảo hành bao lâu?</h3>
<p>Hoàn thiện thường <strong>12–36 tháng</strong> theo hạng mục trong hợp đồng.</p>

<h2>Liên hệ</h2>
<p><strong>0909 075 668</strong> · <a href="/bao-gia">Báo giá</a> · <a href="/lien-he">Liên hệ</a></p>$content$,
  $img$/images/sao-khue/sk-38.jpg$img$,
  $mt$Hoàn Thiện Nhà Trọn Gói TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ hoàn thiện nhà, căn hộ thô tại TP.HCM. Sơn, gạch, thiết bị vệ sinh, tủ bếp. Hotline 0909 075 668 — khảo sát miễn phí.$md$,
  $mk$hoàn thiện nhà, hoàn thiện nhà thô, hoàn thiện căn hộ, sửa chữa hoàn thiện, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$khuyen-mai-xay-dung$slug$,
  $title$Khuyến Mại Xây Dựng 2026 — Tặng Thiết Kế Khi Xây Trọn Gói$title$,
  $cat$dich-vu$cat$,
  $excerpt$Ưu đãi xây nhà trọn gói: miễn phí thiết kế kiến trúc 2D/3D, báo giá minh bạch, bảo hành kết cấu 10 năm. Liên hệ 0909 075 668.$excerpt$,
  $content$<h2>Chương trình khuyến mại xây dựng — Ưu đãi khi ký xây trọn gói</h2>
<p><strong>Công ty TNHH Kiến Trúc Sao Khuê</strong> thường xuyên triển khai <strong>chương trình khuyến mại xây dựng</strong> dành cho khách hàng ký <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói</a> tại TP.HCM và vùng lân cận. Mục tiêu là giúp chủ nhà tiết kiệm chi phí thiết kế ban đầu và khởi công với <strong>báo giá minh bạch</strong>, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<h2>Ưu đãi thường áp dụng</h2>
<ul>
  <li><strong>Miễn phí thiết kế kiến trúc 2D/3D</strong> khi ký hợp đồng xây trọn gói (theo diện tích công trình quy định).</li>
  <li>Hỗ trợ <strong>khảo sát mặt bằng miễn phí</strong> và tư vấn phương án tối ưu ngân sách.</li>
  <li>Ưu tiên lịch thi công cho khách đặt cọc trong thời gian chương trình.</li>
  <li>Tặng gói tư vấn <strong>phong thủy cơ bản</strong> hoặc bố trí phòng (nếu có trong đợt khuyến mại).</li>
</ul>
<p><em>Lưu ý:</em> Nội dung ưu đãi có thể thay đổi theo từng đợt — vui lòng gọi hotline để xác nhận chương trình đang hiệu lực.</p>

<h2>Điều kiện tham gia (tham khảo)</h2>
<ul>
  <li>Công trình nhà ở riêng lẻ tại TP.HCM, Bình Dương, Đồng Nai, Long An…</li>
  <li>Diện tích xây dựng từ mức tối thiểu theo từng đợt ưu đãi.</li>
  <li>Ký hợp đồng trọn gói hoặc phần thô + hoàn thiện theo gói quy định.</li>
  <li>Thanh toán theo tiến độ hợp đồng, không yêu cầu trả 100% trước thi công.</li>
</ul>

<h2>Kết hợp dịch vụ Sao Khuê</h2>
<p>Khuyến mại áp dụng cùng cam kết chất lượng: trực tiếp thi công, vật tư chính hãng, không phát sinh khi không đổi thiết kế. Xem <a href="/bao-gia">bảng giá tham khảo</a> và <a href="/dich-vu/thiet-ke-nha">thiết kế nhà</a>.</p>

<h2>Cách đăng ký nhận ưu đãi</h2>
<ol>
  <li>Gọi <strong>0909 075 668</strong> hoặc điền <a href="/lien-he">form liên hệ</a>.</li>
  <li>Cung cấp địa chỉ công trình, diện tích dự kiến, số tầng.</li>
  <li>Nhận báo giá và xác nhận ưu đãi còn hiệu lực.</li>
  <li>Ký hợp đồng và triển khai theo quy trình 6 bước chuẩn.</li>
</ol>

<h2>FAQ khuyến mại</h2>
<h3>Khuyến mại có áp dụng cho sửa nhà không?</h3>
<p>Một số đợt có ưu đãi <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a> — cần xác nhận khi tư vấn.</p>
<h3>Miễn phí thiết kế gồm những gì?</h3>
<p>Thường gồm mặt bằng, phối cảnh 3D cơ bản phục vụ thi công; hồ sơ xin phép phức tạp có thể báo giá riêng.</p>

<h2>Liên hệ</h2>
<p>Hotline <strong>0909 075 668</strong> · Email kientrucsaokhue@gmail.com · 245/8 Bình Lợi, Quận Bình Thạnh, TP.HCM</p>$content$,
  $img$/images/sao-khue/sk-39.jpg$img$,
  $mt$Khuyến Mại Xây Dựng 2026 — Tặng Thiết Kế | Sao Khuê$mt$,
  $md$Chương trình khuyến mại xây nhà trọn gói TP.HCM: tặng thiết kế, đơn giá ưu đãi. Sao Khuê — hotline 0909 075 668, khảo sát miễn phí.$md$,
  $mk$khuyến mại xây dựng, ưu đãi xây nhà, tặng thiết kế xây nhà, xây nhà trọn gói giá rẻ, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$so-do-to-chuc$slug$,
  $title$Sơ Đồ Tổ Chức Công Ty Kiến Trúc Sao Khuê$title$,
  $cat$gioi-thieu$cat$,
  $excerpt$Cơ cấu tổ chức Sao Khuê: Ban giám đốc, phòng Thiết kế, Thi công, Vật tư, Kế toán, Chăm sóc khách hàng — vận hành gọn, phản hồi nhanh.$excerpt$,
  $content$<h2>Sơ đồ tổ chức — Vận hành chuyên nghiệp, một đầu mối</h2>
<p><strong>Sao Khuê</strong> tổ chức theo mô hình <strong>tinh gọn, rõ trách nhiệm</strong> để mỗi dự án có người phụ trách xuyên suốt từ tư vấn đến bàn giao. Cơ cấu này giúp khách hàng không bị “đá quả cầu” giữa nhiều bộ phận khi theo dõi tiến độ.</p>

<h2>Ban điều hành</h2>
<p>Ban Giám đốc định hướng chiến lược, phê duyệt phương án lớn, giám sát chất lượng thương hiệu và cam kết với khách hàng.</p>

<h2>Các khối chức năng chính</h2>
<h3>Phòng Thiết kế</h3>
<p>Kiến trúc sư triển khai <a href="/dich-vu/thiet-ke-nha">thiết kế nhà</a>, mặt bằng, phối cảnh 3D, hồ sơ kỹ thuật phục vụ thi công và xin phép.</p>
<h3>Phòng Thi công</h3>
<p>Điều phối đội thợ, giám sát hiện trường, nghiệm thu hạng mục — <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây trọn gói</a>, <a href="/dich-vu/xay-dung-phan-tho">phần thô</a>, <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa chữa</a>.</p>
<h3>Phòng Vật tư</h3>
<p>Mua sắm, kiểm tra chủng loại vật tư đúng hợp đồng (xi măng, thép, gạch, thiết bị…).</p>
<h3>Phòng Kế toán — Hành chính</h3>
<p>Hợp đồng, thanh toán theo tiến độ, hóa đơn, hồ sơ bảo hành.</p>
<h3>Chăm sóc khách hàng</h3>
<p>Tiếp nhận hotline, Zalo, form website; hỗ trợ sau bàn giao và bảo hành.</p>

<h2>Lợi ích cho khách hàng</h2>
<ul>
  <li>Một người điều phối dự án (PM) làm đầu mối chính.</li>
  <li>Báo cáo tiến độ định kỳ, minh bạch chi phí.</li>
  <li>Quy trình xử lý khiếu nại/bảo hành rõ ràng.</li>
</ul>

<h2>Liên hệ</h2>
<p>Tìm hiểu thêm <a href="/gioi-thieu/ve-chung-toi">về chúng tôi</a> · Hotline <strong>0909 075 668</strong></p>$content$,
  $img$/images/sao-khue/sk-40.jpg$img$,
  $mt$Sơ Đồ Tổ Chức — Sao Khuê | Cơ Cấu Công Ty$mt$,
  $md$Tìm hiểu sơ đồ tổ chức Kiến Trúc Sao Khuê: các phòng ban phụ trách thiết kế, thi công và chăm sóc khách hàng. Hotline 0909 075 668.$md$,
  $mk$sơ đồ tổ chức sao khuê, cơ cấu công ty xây dựng, kiến trúc sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$ve-chung-toi$slug$,
  $title$Về Sao Khuê — Hơn 10 Năm Thiết Kế & Xây Dựng TP.HCM$title$,
  $cat$gioi-thieu$cat$,
  $excerpt$Giới thiệu Công ty TNHH Kiến Trúc Sao Khuê: 500+ công trình, đội ngũ chuyên môn, quy trình minh bạch, bảo hành 10 năm kết cấu.$excerpt$,
  $content$<h2>Về Công ty TNHH Kiến Trúc Sao Khuê</h2>
<p><strong>Sao Khuê</strong> (Công ty TNHH Kiến Trúc Sao Khuê) là đơn vị <strong>thiết kế và thi công xây dựng</strong> nhà ở dân dụng tại TP.HCM với hơn <strong>10 năm kinh nghiệm</strong> và hơn <strong>500 công trình</strong> đã bàn giao. Chúng tôi chuyên <strong>nhà phố, biệt thự, cải tạo, nâng tầng</strong> — cam kết minh bạch báo giá, trực tiếp thi công và bảo hành dài hạn.</p>

<h2>Sứ mệnh và giá trị</h2>
<ul>
  <li><strong>Uy tín:</strong> Làm đúng cam kết hợp đồng, không bán thầu trá hình.</li>
  <li><strong>Chất lượng:</strong> Vật tư chính hãng, giám sát kỹ thuật tại hiện trường.</li>
  <li><strong>Tận tâm:</strong> Lắng nghe nhu cầu, tư vấn giải pháp phù hợp ngân sách.</li>
</ul>

<h2>Năng lực cốt lõi</h2>
<ul>
  <li><a href="/dich-vu/thiet-ke-nha">Thiết kế kiến trúc</a> 2D/3D, tối ưu công năng.</li>
  <li><a href="/dich-vu/xay-dung-phan-tho">Xây dựng phần thô</a> và <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói</a>.</li>
  <li><a href="/dich-vu/sua-nha-tron-goi-tphcm">Sửa chữa, cải tạo</a> nhà cũ.</li>
  <li><a href="/dich-vu/hoan-thien-nha">Hoàn thiện</a> sau thô.</li>
</ul>

<h2>Con số nổi bật</h2>
<ul>
  <li>10+ năm kinh nghiệm xây dựng dân dụng.</li>
  <li>500+ công trình bàn giao.</li>
  <li>50+ kỹ sư, kiến trúc sư và cộng tác viên.</li>
  <li>Bảo hành kết cấu lên đến <strong>10 năm</strong>.</li>
</ul>

<h2>Khu vực hoạt động</h2>
<p>Trụ sở: <strong>245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM</strong>. Nhận thi công toàn TP.HCM và tỉnh lân cận: Bình Dương, Đồng Nai, Long An…</p>

<h2>Liên hệ</h2>
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · Xem <a href="/cong-trinh">công trình tiêu biểu</a></p>$content$,
  $img$/images/sao-khue/sk-41.jpg$img$,
  $mt$Về Chúng Tôi — Kiến Trúc Sao Khuê | 10+ Năm Kinh Nghiệm$mt$,
  $md$Sao Khuê — thiết kế và thi công nhà phố, biệt thự TP.HCM từ 2014. Uy tín, chất lượng, tận tâm. Hotline 0909 075 668.$md$,
  $mk$về sao khuê, công ty xây dựng tphcm, kiến trúc sao khuê, nhà thầu uy tín, xây dựng nhà phố$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$hoat-dong-sao-khue$slug$,
  $title$Hoạt Động Sao Khuê — Đồng Hành Cộng Đồng & Nghề Xây Dựng$title$,
  $cat$gioi-thieu$cat$,
  $excerpt$Các hoạt động Sao Khuê: đào tạo nghề, an toàn lao động, chia sẻ kinh nghiệm xây nhà và tham gia cộng đồng tại TP.HCM.$excerpt$,
  $content$<h2>Hoạt động Sao Khuê — Xây dựng bền vững, gắn kết cộng đồng</h2>
<p>Bên cạnh <strong>thi công công trình</strong>, Sao Khuê chú trọng <strong>đào tạo nội bộ</strong>, <strong>an toàn lao động</strong> và <strong>chia sẻ kinh nghiệm</strong> với khách hàng, đối tác. Các hoạt động giúp nâng cao chất lượng dịch vụ và trách nhiệm xã hội của doanh nghiệp xây dựng.</p>

<h2>Đào tạo &amp; an toàn lao động</h2>
<ul>
  <li>Tập huấn định kỳ cho thợ mộc, thợ hồ, thợ điện nước về quy trình và PPE.</li>
  <li>Cập nhật tiêu chuẩn nghiệm thu cốt thép, chống té ngã trên cao.</li>
  <li>Giám sát kỹ thuật hướng dẫn tại hiện trường theo từng giai đoạn.</li>
</ul>

<h2>Chia sẻ kiến thức với khách hàng</h2>
<p>Chúng tôi đăng tải bài viết tại mục <a href="/kinh-nghiem">kinh nghiệm xây dựng</a>:</p>
<ul>
  <li><a href="/kinh-nghiem/cam-nang-xay-nha-2026">Cẩm nang xây nhà A–Z</a></li>
  <li><a href="/kinh-nghiem/luat-xay-dung-moi-nhat">Luật xây dựng cần lưu ý</a></li>
  <li><a href="/kinh-nghiem/phong-thuy-nha-o">Phong thủy nhà ở cơ bản</a></li>
</ul>

<h2>Tham quan công trình</h2>
<p>Khách hàng có thể đặt lịch <strong>tham quan công trình đang thi công</strong> hoặc đã bàn giao — minh chứng thực tế cho chất lượng và quy trình Sao Khuê. Liên hệ hotline trước 1–2 ngày.</p>

<h2>Theo dõi hoạt động</h2>
<ul>
  <li>Website: tin tức và <a href="/cong-trinh">công trình mới</a>.</li>
  <li>Fanpage Facebook: hình ảnh tiến độ, ưu đãi <a href="/dich-vu/khuyen-mai-xay-dung">khuyến mại</a>.</li>
</ul>

<h2>Liên hệ</h2>
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a></p>$content$,
  $img$/images/sao-khue/sk-42.jpg$img$,
  $mt$Hoạt Động Sao Khuê — Cộng Đồng & Đào Tạo$mt$,
  $md$Hoạt động Công ty Kiến Trúc Sao Khuê: đào tạo thợ, an toàn công trình, chia sẻ kiến thức xây dựng. Theo dõi fanpage và tin tức.$md$,
  $mk$hoạt động sao khuê, công ty xây dựng tphcm, kiến trúc sao khuê, tin tức xây dựng$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$tuyen-dung$slug$,
  $title$Tuyển Dụng Sao Khuê 2026 — Kỹ Sư, Kiến Trúc Sư, Giám Sát$title$,
  $cat$gioi-thieu$cat$,
  $excerpt$Tuyển dụng tại Sao Khuê: kỹ sư xây dựng, kiến trúc sư, giám sát công trình, kinh doanh. Môi trường dự án thực tế, TP.HCM.$excerpt$,
  $content$<h2>Tuyển dụng — Gia nhập đội ngũ Sao Khuê</h2>
<p><strong>Công ty TNHH Kiến Trúc Sao Khuê</strong> đang mở rộng hoạt động thi công và thiết kế tại TP.HCM, tìm kiếm nhân sự có <strong>chuyên môn vững</strong>, <strong>tinh thần trách nhiệm</strong> và mong muốn gắn bó lâu dài với các dự án nhà ở dân dụng.</p>

<h2>Vị trí tuyển dụng (tham khảo)</h2>
<ul>
  <li><strong>Kiến trúc sư:</strong> Triển khai thiết kế nhà phố, biệt thự; SketchUp, AutoCAD, Revit là lợi thế.</li>
  <li><strong>Kỹ sư xây dựng / Giám sát:</strong> Giám sát thi công, nghiệm thu, quản lý tiến độ hiện trường.</li>
  <li><strong>Kỹ sư dự toán:</strong> Lập báo giá, BOQ, kiểm soát vật tư.</li>
  <li><strong>Nhân viên kinh doanh:</strong> Tư vấn khách hàng, khảo sát, chốt hợp đồng xây dựng.</li>
  <li><strong>Thợ lành nghề:</strong> Mộc, hồ, điện, nước (ưu tiên có kinh nghiệm nhà phố).</li>
</ul>

<h2>Quyền lợi</h2>
<ul>
  <li>Lương thưởng theo năng lực và hiệu quả dự án.</li>
  <li>Làm việc với công trình thực tế, học hỏi từ ban giám sát giàu kinh nghiệm.</li>
  <li>Môi trường đồng nghiệp hỗ trợ, rõ quy trình nội bộ.</li>
  <li>Cơ hội thăng tiến khi dự án và quy mô công ty phát triển.</li>
</ul>

<h2>Yêu cầu chung</h2>
<ul>
  <li>Trung thực, đúng giờ, chịu được áp lực tiến độ công trường.</li>
  <li>Tuân thủ an toàn lao động và quy định công ty.</li>
  <li>Ưu tiên ứng viên đã có kinh nghiệm nhà phố, biệt thự tại TP.HCM.</li>
</ul>

<h2>Cách ứng tuyển</h2>
<ol>
  <li>Gửi CV + portfolio (nếu có) qua email: <strong>kientrucsaokhue@gmail.com</strong></li>
  <li>Tiêu đề: [Ứng tuyển] Họ tên — Vị trí</li>
  <li>Hoặc gọi <strong>0909 075 668</strong> để được hướng dẫn.</li>
</ol>
<p>Tìm hiểu thêm <a href="/gioi-thieu/ve-chung-toi">về công ty</a> và <a href="/gioi-thieu/so-do-to-chuc">sơ đồ tổ chức</a>.</p>$content$,
  $img$/images/sao-khue/sk-43.jpg$img$,
  $mt$Tuyển Dụng 2026 — Kiến Trúc Sao Khuê | Kỹ Sư, KTS$mt$,
  $md$Tuyển dụng Sao Khuê 2026: kỹ sư, kiến trúc sư, giám sát thi công nhà phố. Gửi CV qua email hoặc hotline 0909 075 668.$md$,
  $mk$tuyển dụng sao khuê, tuyển kỹ sư xây dựng tphcm, tuyển kiến trúc sư, việc làm xây dựng$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$xay-nha-pho-binh-thanh$slug$,
  $title$Công Trình Xây Nhà Phố 4 Tầng Quận Bình Thạnh — Sao Khuê$title$,
  $cat$cong-trinh$cat$,
  $excerpt$Case study xây nhà phố 5x18m, 4 tầng tại Bình Thạnh: hiện đại, giếng trời, bàn giao đúng tiến độ. Tham khảo mẫu Sao Khuê.$excerpt$,
  $content$<h2>Công trình xây nhà phố tại Quận Bình Thạnh</h2>
<p>Dự án <strong>nhà phố 4 tầng</strong> tại <strong>Quận Bình Thạnh</strong> do <strong>Sao Khuê</strong> thi công trọn gói — minh họa khả năng triển khai trên lô đất phổ biến <strong>5m x 18m</strong> khu dân cư nội thành TP.HCM.</p>

<h2>Thông số công trình</h2>
<ul>
  <li><strong>Vị trí:</strong> Quận Bình Thạnh, TP.HCM</li>
  <li><strong>Quy mô:</strong> 4 tầng + sân thượng</li>
  <li><strong>Diện tích khu đất:</strong> ~5m x 18m</li>
  <li><strong>Phong cách:</strong> Hiện đại, gam trung tính, lan can kính</li>
  <li><strong>Hình thức:</strong> <a href="/dich-vu/xay-nha-tron-goi-tphcm">Xây nhà trọn gói</a></li>
</ul>

<h2>Giải pháp thiết kế — thi công</h2>
<ul>
  <li><strong>Giếng trời giữa nhà:</strong> Lấy sáng, thông gió cho cầu thang và phòng giữa.</li>
  <li><strong>Phòng khách kép trần:</strong> Không gian thoáng tầng 1.</li>
  <li><strong>Điện nước âm tường:</strong> Gọn mặt, dễ bảo trì.</li>
  <li><strong>Sân thượng có mái che:</strong> Sinh hoạt ngoài trời, phơi đồ.</li>
</ul>

<h2>Kết quả bàn giao</h2>
<ul>
  <li>Bàn giao đúng tiến độ hợp đồng.</li>
  <li>Báo giá minh bạch, không phát sinh ngoài hạng mục đã thống nhất.</li>
  <li>Bảo hành kết cấu <strong>10 năm</strong>, hoàn thiện theo hợp đồng.</li>
</ul>

<h2>Bạn có dự án tương tự?</h2>
<p>Sao Khuê nhận <strong>xây nhà phố</strong> toàn TP.HCM. Liên hệ khảo sát miễn phí:</p>
<ul>
  <li>Hotline <strong>0909 075 668</strong></li>
  <li><a href="/bao-gia">Bảng báo giá</a> · <a href="/lien-he">Liên hệ</a></li>
  <li>Xem thêm <a href="/cong-trinh/sua-nha-quan-3">cải tạo Quận 3</a></li>
</ul>$content$,
  $img$/images/sao-khue/sk-44.jpg$img$,
  $mt$Xây Nhà Phố Bình Thạnh 4 Tầng | Công Trình Sao Khuê$mt$,
  $md$Công trình xây nhà phố Quận Bình Thạnh: 5x18m, 4 tầng, phong cách hiện đại. Sao Khuê thi công trọn gói — tư vấn 0909 075 668.$md$,
  $mk$xây nhà phố bình thạnh, công trình nhà phố, xây nhà 4 tầng tphcm, sao khuê$mk$,
  now(),
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  image_url = EXCLUDED.image_url,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  meta_keywords = EXCLUDED.meta_keywords,
  updated_at = now();
COMMIT;

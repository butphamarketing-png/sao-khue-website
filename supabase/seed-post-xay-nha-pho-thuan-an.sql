-- Sao Khuê — Công Trình Xây Nhà Phố 4 Tầng Tại Thuận An, Bình Dương
-- UTF-8 — Supabase SQL Editor → paste TOÀN BỘ file → Run
-- Kiểm tra: SELECT slug, title FROM posts WHERE slug = 'xay-nha-pho-thuan-an';

BEGIN;

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$xay-nha-pho-thuan-an$slug$,
  $title$Công Trình Xây Nhà Phố 4 Tầng Tại Thuận An, Bình Dương$title$,
  $cat$cong-trinh$cat$,
  $excerpt$Case study nhà phố Thuận An: lô 5x16m, 4 tầng hiện đại, thi công trọn gói Sao Khuê — bàn giao đúng tiến độ, bảo hành kết cấu 10 năm.$excerpt$,
  $content$<h2>Công trình xây nhà phố tại Thuận An, Bình Dương</h2>
<p>Dự án <strong>nhà phố 4 tầng</strong> tại <strong>TP. Thuận An, Bình Dương</strong> do <strong>Sao Khuê</strong> thi công <a href="/dich-vu/xay-nha-tron-goi-binh-duong">xây nhà trọn gói Bình Dương</a> — minh họa khả năng triển khai trên lô đất phổ biến <strong>5m x 16m</strong> tại khu dân cư ven TP.HCM.</p>

<h2>Thông số công trình</h2>
<ul>
  <li><strong>Vị trí:</strong> Thuận An, Bình Dương</li>
  <li><strong>Quy mô:</strong> 4 tầng</li>
  <li><strong>Diện tích khu đất:</strong> ~5m x 16m</li>
  <li><strong>Phong cách:</strong> Hiện đại, mặt tiền gọn, lan can kính tầng trên</li>
  <li><strong>Hình thức:</strong> <a href="/dich-vu/xay-nha-tron-goi-binh-duong">Xây nhà trọn gói Bình Dương</a></li>
</ul>

<h2>Giải pháp thiết kế — thi công</h2>
<ul>
  <li><strong>Tối ưu công năng từng tầng:</strong> Phòng khách, bếp, phòng ngủ, sân phơi hợp lý trên diện tích hẹp.</li>
  <li><strong>Thông gió — chiếu sáng:</strong> Giếng trời nhỏ và cửa sổ hai mặt hạn chế bí bách.</li>
  <li><strong>Kết cấu vững:</strong> Móng, khung BTCT theo hồ sơ thiết kế, nghiệm thu từng hạng mục.</li>
  <li><strong>Hoàn thiện đồng bộ:</strong> Trát, sơn, ốp lát, điện nước âm tường trong một gói trọn gói.</li>
</ul>

<h2>Kết quả bàn giao</h2>
<ul>
  <li>Bàn giao đúng tiến độ cam kết hợp đồng.</li>
  <li>Báo giá minh bạch, không phát sinh ngoài hạng mục đã thống nhất.</li>
  <li>Bảo hành kết cấu <strong>10 năm</strong>, hoàn thiện theo hợp đồng.</li>
</ul>

<h2>Bạn có dự án nhà phố tại Bình Dương?</h2>
<p>Sao Khuê nhận <strong>xây nhà phố</strong> tại Thuận An, Dĩ An, Thủ Dầu Một và các khu vực lân cận. Xem thêm <a href="/dich-vu/xay-nha-tron-goi-binh-duong">dịch vụ xây nhà trọn gói Bình Dương</a> hoặc <a href="/bao-gia">bảng báo giá</a>.</p>
<ul>
  <li>Hotline <strong>0909 075 668</strong></li>
  <li><a href="/lien-he">Liên hệ khảo sát miễn phí</a></li>
  <li>Xem thêm <a href="/cong-trinh/xay-nha-pho-binh-thanh">công trình Bình Thạnh</a> (TP.HCM)</li>
</ul>$content$,
  $img$/images/project_2.jpg$img$,
  $mt$Xây Nhà Phố Thuận An Bình Dương | Sao Khuê$mt$,
  $md$Công trình xây nhà phố Thuận An, Bình Dương: 4 tầng, thi công trọn gói, báo giá minh bạch. Tham khảo mẫu Sao Khuê — 0909 075 668.$md$,
  $mk$xây nhà phố thuận an, xây nhà bình dương, công trình nhà phố, xây nhà trọn gói bình dương, sao khuê$mk$,
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

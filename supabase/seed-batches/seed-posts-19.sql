-- Batch 19/33 — bài 181–190 / 326
-- Supabase SQL Editor: New query → Paste → Run (từng file một)

BEGIN;

INSERT INTO posts (
  slug, title, category, excerpt, content, image_url,
  meta_title, meta_description, meta_keywords, created_at, updated_at
) VALUES (
  $slug$nha-pho-tphcm$slug$,
  $title$Mẫu Nhà Phố Đẹp Tại TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$nhà phố TP.HCM: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Nhà phố TP.HCM — Chuyên nghiệp tại TP.HCM</h2>
<p><strong>nhà phố TP.HCM</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>TP.HCM</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>nhà phố TP.HCM</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/sao-khue/sk-40.jpg" alt="nha-pho-tphcm-1" loading="lazy" decoding="async" />
<figcaption>nha-pho-tphcm-1</figcaption>
</figure>

<h2>nhà phố TP.HCM — Thiết kế &amp; thi công</h2>
<p>Nhà phố mặt tiền 4–5 m, giếng trời thông gió — chuẩn TP.HCM. Phối cảnh 3D trước khi thi công.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/sao-khue/sk-04.jpg" alt="nha-pho-tphcm-2" loading="lazy" decoding="async" />
<figcaption>nha-pho-tphcm-2</figcaption>
</figure>

<h2>Quy trình nhà phố TP.HCM</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại TP.HCM</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn nhà phố TP.HCM</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>nhà phố TP.HCM</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/sao-khue/sk-32.jpg" alt="nha-pho-tphcm-3" loading="lazy" decoding="async" />
<figcaption>nha-pho-tphcm-3</figcaption>
</figure>$content$,
  $img$/images/sao-khue/sk-44.jpg$img$,
  $mt$nhà phố TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ nhà phố TP.HCM: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$nhà phố TP.HCM, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$xay-nha-2-tang-tphcm$slug$,
  $title$Xây Nhà 2 Tầng Tại TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$xây nhà 2 tầng TP.HCM: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Xây nhà 2 tầng TP.HCM — Chuyên nghiệp tại TP.HCM</h2>
<p><strong>xây nhà 2 tầng TP.HCM</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>TP.HCM</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>xây nhà 2 tầng TP.HCM</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-02.jpg" alt="xay-nha-2-tang-tphcm-1" loading="lazy" decoding="async" />
<figcaption>xay-nha-2-tang-tphcm-1</figcaption>
</figure>

<h2>xây nhà 2 tầng TP.HCM — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại TP.HCM.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-03.jpg" alt="xay-nha-2-tang-tphcm-2" loading="lazy" decoding="async" />
<figcaption>xay-nha-2-tang-tphcm-2</figcaption>
</figure>

<h2>Quy trình xây nhà 2 tầng TP.HCM</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại TP.HCM</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn xây nhà 2 tầng TP.HCM</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>xây nhà 2 tầng TP.HCM</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-04.jpg" alt="xay-nha-2-tang-tphcm-3" loading="lazy" decoding="async" />
<figcaption>xay-nha-2-tang-tphcm-3</figcaption>
</figure>$content$,
  $img$/images/xay-nha/xay-nha-02.jpg$img$,
  $mt$xây nhà 2 tầng TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ xây nhà 2 tầng TP.HCM: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$xây nhà 2 tầng TP.HCM, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$xay-nha-3-tang-tphcm$slug$,
  $title$Xây Nhà 3 Tầng Tại TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$xây nhà 3 tầng TP.HCM: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Xây nhà 3 tầng TP.HCM — Chuyên nghiệp tại TP.HCM</h2>
<p><strong>xây nhà 3 tầng TP.HCM</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>TP.HCM</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>xây nhà 3 tầng TP.HCM</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-01.jpg" alt="xay-nha-3-tang-tphcm-1" loading="lazy" decoding="async" />
<figcaption>xay-nha-3-tang-tphcm-1</figcaption>
</figure>

<h2>xây nhà 3 tầng TP.HCM — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại TP.HCM.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-02.jpg" alt="xay-nha-3-tang-tphcm-2" loading="lazy" decoding="async" />
<figcaption>xay-nha-3-tang-tphcm-2</figcaption>
</figure>

<h2>Quy trình xây nhà 3 tầng TP.HCM</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại TP.HCM</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn xây nhà 3 tầng TP.HCM</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>xây nhà 3 tầng TP.HCM</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-03.jpg" alt="xay-nha-3-tang-tphcm-3" loading="lazy" decoding="async" />
<figcaption>xay-nha-3-tang-tphcm-3</figcaption>
</figure>$content$,
  $img$/images/xay-nha/xay-nha-01.jpg$img$,
  $mt$xây nhà 3 tầng TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ xây nhà 3 tầng TP.HCM: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$xây nhà 3 tầng TP.HCM, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$nha-thau-xay-dung-tphcm$slug$,
  $title$Nhà Thầu Xây Dựng Uy Tín Tại TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$nhà thầu xây dựng TP.HCM: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Nhà thầu xây dựng TP.HCM — Chuyên nghiệp tại TP.HCM</h2>
<p><strong>nhà thầu xây dựng TP.HCM</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>TP.HCM</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>nhà thầu xây dựng TP.HCM</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-04.jpg" alt="nha-thau-xay-dung-tphcm-1" loading="lazy" decoding="async" />
<figcaption>nha-thau-xay-dung-tphcm-1</figcaption>
</figure>

<h2>nhà thầu xây dựng TP.HCM — Chọn đơn vị uy tín</h2>
<ul>
  <li>Hợp đồng rõ ràng, công trình tham chiếu tại TP.HCM.</li>
  <li>Giám sát móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
</ul>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-03.jpg" alt="nha-thau-xay-dung-tphcm-2" loading="lazy" decoding="async" />
<figcaption>nha-thau-xay-dung-tphcm-2</figcaption>
</figure>

<h2>Quy trình nhà thầu xây dựng TP.HCM</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại TP.HCM</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn nhà thầu xây dựng TP.HCM</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>nhà thầu xây dựng TP.HCM</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-02.jpg" alt="nha-thau-xay-dung-tphcm-3" loading="lazy" decoding="async" />
<figcaption>nha-thau-xay-dung-tphcm-3</figcaption>
</figure>$content$,
  $img$/images/xay-nha/xay-nha-04.jpg$img$,
  $mt$nhà thầu xây dựng TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ nhà thầu xây dựng TP.HCM: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$nhà thầu xây dựng TP.HCM, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$thi-cong-nha-phan-tho-tphcm$slug$,
  $title$Thi Công Nhà Phần Thô Tại TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$thi công nhà phần thô TP.HCM: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Thi công nhà phần thô TP.HCM — Chuyên nghiệp tại TP.HCM</h2>
<p><strong>thi công nhà phần thô TP.HCM</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>TP.HCM</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>thi công nhà phần thô TP.HCM</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-03.jpg" alt="thi-cong-nha-phan-tho-tphcm-1" loading="lazy" decoding="async" />
<figcaption>thi-cong-nha-phan-tho-tphcm-1</figcaption>
</figure>

<h2>thi công nhà phần thô TP.HCM — Giải pháp Sao Khuê</h2>
<p>Trọn gói khảo sát → thiết kế → thi công → bàn giao tại TP.HCM.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-02.jpg" alt="thi-cong-nha-phan-tho-tphcm-2" loading="lazy" decoding="async" />
<figcaption>thi-cong-nha-phan-tho-tphcm-2</figcaption>
</figure>

<h2>Quy trình thi công nhà phần thô TP.HCM</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại TP.HCM</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn thi công nhà phần thô TP.HCM</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>thi công nhà phần thô TP.HCM</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/xay-nha/xay-nha-01.jpg" alt="thi-cong-nha-phan-tho-tphcm-3" loading="lazy" decoding="async" />
<figcaption>thi-cong-nha-phan-tho-tphcm-3</figcaption>
</figure>$content$,
  $img$/images/xay-nha/xay-nha-03.jpg$img$,
  $mt$thi công nhà phần thô TP.HCM | Sao Khuê$mt$,
  $md$Dịch vụ thi công nhà phần thô TP.HCM: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$thi công nhà phần thô TP.HCM, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$sua-chua-cai-tao-nha-quan-2$slug$,
  $title$Sửa Chữa Cải Tạo Nhà Quận 2 TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$sửa chữa nhà Quận 2: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Sửa chữa nhà Quận 2 — Chuyên nghiệp tại Quận 2</h2>
<p><strong>sửa chữa nhà Quận 2</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>Quận 2</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>sửa chữa nhà Quận 2</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-08.jpg" alt="sua-chua-nha-quan-2-1" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-2-1</figcaption>
</figure>

<h2>sửa chữa nhà Quận 2 — Dịch vụ tại Quận 2</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-11.jpg" alt="sua-chua-nha-quan-2-2" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-2-2</figcaption>
</figure>

<h2>Quy trình sửa chữa nhà Quận 2</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại Quận 2</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn sửa chữa nhà Quận 2</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>sửa chữa nhà Quận 2</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-01.jpg" alt="sua-chua-nha-quan-2-3" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-2-3</figcaption>
</figure>$content$,
  $img$/images/cai-tao/cai-tao-10.jpg$img$,
  $mt$sửa chữa nhà Quận 2 | Sao Khuê$mt$,
  $md$Dịch vụ sửa chữa nhà Quận 2: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$sửa chữa nhà Quận 2, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$sua-chua-cai-tao-nha-quan-3$slug$,
  $title$Sửa Chữa Cải Tạo Nhà Quận 3 TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$sửa chữa nhà Quận 3: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Sửa chữa nhà Quận 3 — Chuyên nghiệp tại Quận 3</h2>
<p><strong>sửa chữa nhà Quận 3</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>Quận 3</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>sửa chữa nhà Quận 3</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-09.jpg" alt="sua-chua-nha-quan-3-1" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-3-1</figcaption>
</figure>

<h2>sửa chữa nhà Quận 3 — Dịch vụ tại Quận 3</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-12.jpg" alt="sua-chua-nha-quan-3-2" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-3-2</figcaption>
</figure>

<h2>Quy trình sửa chữa nhà Quận 3</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại Quận 3</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn sửa chữa nhà Quận 3</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>sửa chữa nhà Quận 3</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-02.jpg" alt="sua-chua-nha-quan-3-3" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-3-3</figcaption>
</figure>$content$,
  $img$/images/cai-tao/cai-tao-11.jpg$img$,
  $mt$sửa chữa nhà Quận 3 | Sao Khuê$mt$,
  $md$Dịch vụ sửa chữa nhà Quận 3: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$sửa chữa nhà Quận 3, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$sua-chua-cai-tao-nha-quan-4$slug$,
  $title$Sửa Chữa Cải Tạo Nhà Quận 4 TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$sửa chữa nhà Quận 4: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Sửa chữa nhà Quận 4 — Chuyên nghiệp tại Quận 4</h2>
<p><strong>sửa chữa nhà Quận 4</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>Quận 4</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>sửa chữa nhà Quận 4</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-10.jpg" alt="sua-chua-nha-quan-4-1" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-4-1</figcaption>
</figure>

<h2>sửa chữa nhà Quận 4 — Dịch vụ tại Quận 4</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-13.jpg" alt="sua-chua-nha-quan-4-2" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-4-2</figcaption>
</figure>

<h2>Quy trình sửa chữa nhà Quận 4</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại Quận 4</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn sửa chữa nhà Quận 4</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>sửa chữa nhà Quận 4</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-03.jpg" alt="sua-chua-nha-quan-4-3" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-4-3</figcaption>
</figure>$content$,
  $img$/images/cai-tao/cai-tao-12.jpg$img$,
  $mt$sửa chữa nhà Quận 4 | Sao Khuê$mt$,
  $md$Dịch vụ sửa chữa nhà Quận 4: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$sửa chữa nhà Quận 4, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$sua-chua-cai-tao-nha-quan-5$slug$,
  $title$Sửa Chữa Cải Tạo Nhà Quận 5 TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$sửa chữa nhà Quận 5: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Sửa chữa nhà Quận 5 — Chuyên nghiệp tại Quận 5</h2>
<p><strong>sửa chữa nhà Quận 5</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>Quận 5</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>sửa chữa nhà Quận 5</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-11.jpg" alt="sua-chua-nha-quan-5-1" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-5-1</figcaption>
</figure>

<h2>sửa chữa nhà Quận 5 — Dịch vụ tại Quận 5</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-01.jpg" alt="sua-chua-nha-quan-5-2" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-5-2</figcaption>
</figure>

<h2>Quy trình sửa chữa nhà Quận 5</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại Quận 5</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn sửa chữa nhà Quận 5</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>sửa chữa nhà Quận 5</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-04.jpg" alt="sua-chua-nha-quan-5-3" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-5-3</figcaption>
</figure>$content$,
  $img$/images/cai-tao/cai-tao-01.jpg$img$,
  $mt$sửa chữa nhà Quận 5 | Sao Khuê$mt$,
  $md$Dịch vụ sửa chữa nhà Quận 5: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$sửa chữa nhà Quận 5, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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
  $slug$sua-chua-cai-tao-nha-quan-6$slug$,
  $title$Sửa Chữa Cải Tạo Nhà Quận 6 TP.HCM$title$,
  $cat$tin-tuc$cat$,
  $excerpt$sửa chữa nhà Quận 6: Sao Khuê thi công uy tín, bảo hành 10 năm — 0909 075 668.$excerpt$,
  $content$<h2>Sửa chữa nhà Quận 6 — Chuyên nghiệp tại Quận 6</h2>
<p><strong>sửa chữa nhà Quận 6</strong> là dịch vụ được nhiều chủ nhà tìm kiếm tại <strong>Quận 6</strong>. TP.HCM là trung tâm đô thị lớn nhất miền Nam — nhà phố mật độ cao, nhu cầu xây mới và cải tạo nhà cũ.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) triển khai <strong>sửa chữa nhà Quận 6</strong> — khảo sát miễn phí, báo giá minh bạch, <strong>bảo hành kết cấu 10 năm</strong>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-12.jpg" alt="sua-chua-nha-quan-6-1" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-6-1</figcaption>
</figure>

<h2>sửa chữa nhà Quận 6 — Dịch vụ tại Quận 6</h2>
<ul>
  <li>Chống thấm, gia cố kết cấu, thay điện nước.</li>
  <li>Cải tạo WC, bếp, mở rộng phòng ngủ.</li>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
</ul>
<p>Xem thêm <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> và <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-02.jpg" alt="sua-chua-nha-quan-6-2" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-6-2</figcaption>
</figure>

<h2>Quy trình sửa chữa nhà Quận 6</h2>
<ol>
  <li>Khảo sát &amp; tư vấn miễn phí.</li>
  <li>Báo giá chi tiết theo hạng mục.</li>
  <li>Thi công có giám sát kỹ thuật.</li>
  <li>Nghiệm thu &amp; bảo hành 10 năm kết cấu.</li>
</ol>
<p>Tham khảo: <a href="/dich-vu/xay-nha-tron-goi-tphcm">xây nhà trọn gói TP.HCM</a>, <a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty xây dựng nhà phố TP.HCM</a>, <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a>.</p>

<h2>Lưu ý tại Quận 6</h2><ul>
  <li><strong>Mật độ cao:</strong> Tối ưu ánh sáng, thông gió nhà phố hẹp.</li>
  <li><strong>Giờ thi công:</strong> Tuân thủ quy định khu dân cư.</li>
  <li><strong>Chống thấm:</strong> Sân thượng, WC — bắt buộc tại TP.HCM.</li>
</ul>

<p>Tham khảo thêm thông tin tại <a href="https://kientrucsaokhue.com/" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="https://kientrucsaokhue.com/">kientrucsaokhue.com</a> và <a href="https://kientrucsaokhue.com/">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>

<h2>Liên hệ tư vấn sửa chữa nhà Quận 6</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>sửa chữa nhà Quận 6</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="https://kientrucsaokhue.com/">https://kientrucsaokhue.com/</a></li>
  <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi" rel="noopener noreferrer" target="_blank">https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>

<figure class="article-figure article-figure--inline">
<img src="/images/cai-tao/cai-tao-05.jpg" alt="sua-chua-nha-quan-6-3" loading="lazy" decoding="async" />
<figcaption>sua-chua-nha-quan-6-3</figcaption>
</figure>$content$,
  $img$/images/cai-tao/cai-tao-02.jpg$img$,
  $mt$sửa chữa nhà Quận 6 | Sao Khuê$mt$,
  $md$Dịch vụ sửa chữa nhà Quận 6: khảo sát miễn phí, báo giá rõ ràng. Kiến Trúc Sao Khuê — 0909 075 668.$md$,
  $mk$sửa chữa nhà Quận 6, xây nhà TP.HCM, kiến trúc sao khuê$mk$,
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

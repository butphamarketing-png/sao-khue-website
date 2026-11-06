# Module 2 — On-page trang trụ cột

URL: https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026  
Đo HTML production 6/11/2026, file tạm đối chiếu với `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts`. Không đổi title, H1, giá, path.

## Metadata — Đã xác minh

| Mục | HTML production |
|---|---|
| HTTP | 200, Last-Modified 2026-11-06 09:05:17 GMT |
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê |
| Description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở. Một hợp đồng: thiết kế, phần thô, hoàn thiện. Khảo sát miễn phí, bảo hành kết cấu 10 năm. |
| Canonical | đúng URL 2026, một thẻ, https, www, không query |
| Robots | index,follow,max-image-preview:large |
| Open Graph title | trùng title |
| Twitter card | summary_large_image |
| H1 | một H1: Xây nhà trọn gói TPHCM |
| JS bundle | `/assets/index-CEiByksY.js` |

Source `metaTitle` và `metaDescription` khớp HTML. Không có title thứ hai trong HTML tĩnh. Không noindex.

Giữ title và H1. Năm 2026 nằm trong title và bảng giá. H1 không có năm. Đủ cho cụm không năm vì cụm đứng ở đầu H1 và đầu câu mở bài.

## Heading — Đã xác minh trên HTML

H2 trong bài: dịch vụ tại TPHCM, báo giá 2026, hạng mục, vì sao chọn, vật liệu, số tầng, thi công theo quận, quy trình, thanh toán, giấy phép, chi phí phát sinh, công trình, FAQ, liên hệ. Một H1. Không thấy H2 lặp nguyên văn.

## Nội dung

Có giá trị thực tế: một hợp đồng, bảng bốn mức giá, cách nhân sàn ở, ví dụ 4×16 ra 931 triệu và ghi không phải giá ký, khoản tách cọc mái hẻm lệ phí, sáu bước, mốc thanh toán, giấy phép không gộp vào m², bảo hành 10 năm và 12–36 tháng.

Cần bằng chứng, chưa xác minh: “hơn 10 năm”, “hơn 500 công trình”. Sitemap chỉ có bốn hồ sơ `/cong-trinh/`.

Chưa nêu hãng vật tư. Bài nói list nằm trong hợp đồng. Không bịa tên hãng.

## Giá — Đã xác minh trên HTML trụ cột

Bảng khớp số chủ site đưa: thô 3,55–3,8; tiêu chuẩn 4,85–5,5; khá 5,5–6,0; cao cấp 6,0–6,7+ triệu/m². Ví dụ 192 m² × 4,85. Title không chứa “4,85tr”.

Chưa quét hết 114 bài tin để tìm bảng giá cũ lệch số. Đó là việc P2 khi được duyệt, không làm trong lần này.

## Ảnh — Đã xác minh file local và thẻ HTML

| File | Dung lượng | Alt trên bài |
|---|---|---|
| sk-03.jpg | 184.017 byte | có, có cụm xây nhà trọn gói TPHCM |
| sk-11.jpg | 358.413 byte | hố móng |
| sk-24.jpg | 374.106 byte | móng trong hẻm |
| sk-47.jpg | 337.649 byte | cốt thép sàn |
| sk-51.jpg | 380.679 byte | đổ bê tông |

Có `width`, `height`, `loading="lazy"`. Tên file không ghi địa chỉ công trình. Không kết luận ảnh thuộc nhà nào. Không đổi ảnh trong audit này.

LCP: chưa đo. Ảnh hero và font Google là ứng viên, không gán số.

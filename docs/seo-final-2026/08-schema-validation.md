# Module 8 — Schema

Nguồn: JSON-LD trong HTML production của URL 2026, đối chiếu `seo.ts` và `prerender-html.ts`. Không thêm rating. Không thêm review. Không đổi địa chỉ.

## Có trên HTML trụ cột — Đã xác minh

- LocalBusiness + HomeAndConstructionBusiness, `@id` `#localbusiness`, name Kiến Trúc Sao Khuê, telephone +84909075668, email, `priceRange` là `$`.
- WebSite tiếng Việt, publisher trỏ `#localbusiness`.
- Service name “Xây nhà trọn gói TPHCM”, provider HomeAndConstructionBusiness tên pháp lý đầy đủ, `openingHours` Mo-Sa 08:00-17:30, streetAddress 245/8 Bình Lợi, Phường 13, Bình Thạnh.
- AggregateOffer VND, đơn giá theo m² sàn ở.
- BreadcrumbList: Trang chủ → Dịch vụ → Xây nhà trọn gói TPHCM, item là URL 2026.
- FAQPage bám các H3 đang có.
- HowTo sáu bước, bám H2 “Quy trình”.

Không thấy aggregateRating hay Review trong đoạn JSON-LD đã đọc. `SiteHead.tsx` có nhánh gắn rating 4.9 nếu có từ ba lời chứng thực. HTML tĩnh lần này không phát nhánh đó. Giữ vậy. Không tạo sao.

## Lệch — Đã xác minh

`dateModified` trong Service là `2026-10-21`. Title production đã là bản 6/11. Nguyên nhân: `prerender-html.ts` dòng 723 gán cứng `updatedAt` của slug `xay-nha-tron-goi-tphcm`. Ảnh hưởng: ngày schema cũ hơn nội dung đang sống. Sửa sau khi duyệt, không đụng path.

`priceRange: "$"` không mô tả đơn giá triệu/m². Mức P3. Bỏ hoặc để trống sau khi duyệt. Không điền số bịa.

FAQ schema không bảo đảm Google hiện hộp hỏi đáp. Ghi nhận, không thêm câu hỏi cho đủ số.

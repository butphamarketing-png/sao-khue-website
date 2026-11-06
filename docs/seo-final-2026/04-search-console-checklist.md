# Module 4 — Search Console

Không có quyền Search Console trong lần này. Mọi ô dưới đây là **Chưa xác minh**. HTTP 200 không chứng minh đã index. Mẫu tìm kiếm công khai không phải thứ hạng.

## URL Inspection

Dán lần lượt:

1. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm
2. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026
3. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi

Ghi lại, không suy diễn:

- Page indexing status
- Google-selected canonical
- User-declared canonical
- Last crawl
- Crawled as
- Sitemap
- Referring page

Nếu URL không năm báo “Page with redirect” và URL 2026 báo “URL is on Google”, giữ nguyên path. Nếu URL 2026 báo “Discovered / Crawled – currently not indexed”, vẫn không đảo URL. Việc làm là yêu cầu lập chỉ mục đúng URL 200 sau khi HTML đã khớp.

## Performance

Báo cáo Search results, so 28 ngày với 3 tháng và với 6 tháng nếu có.

Truy vấn:

- xây nhà trọn gói tphcm
- xây nhà trọn gói TP.HCM
- công ty xây nhà trọn gói tphcm
- báo giá xây nhà trọn gói tphcm
- nhà thầu xây nhà tphcm

Cột cần xuất: clicks, impressions, CTR, average position, pages, country, device.

Chưa có số nên không kết luận tăng hay giảm.

## Page indexing

Khi có báo cáo, chỉ phân loại các nhóm: Indexed, Crawled – currently not indexed, Discovered – currently not indexed, Duplicate, Alternate page with proper canonical, Page with redirect. Không xử lý hàng loạt bằng noindex hoặc redirect mới.

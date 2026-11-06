# Báo cáo tổng kết — ổn định SEO 6/11/2026

Giai đoạn A và B. Không sửa mã website, không đổi URL, canonical, redirect, middleware, title trụ cột, H1, giá, địa chỉ.

Quyết định path giữ nguyên: URL trụ cột là https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026

## Trả lời 15 câu

1. URL 2026 được cấu hình đúng trên các tín hiệu đã đo: HTTP 200, canonical tự trỏ, robots index,follow, có trong sitemap, title và H1 khớp source, một H1.
2. Google có đủ tín hiệu kỹ thuật trên HTML: cụm ở H1 và câu đầu, bảng giá, FAQ, HowTo, Service, breadcrumb, link nội bộ từ 141 trang. Chưa biết Google đã chọn canonical nào.
3. Không thấy noindex trên URL trụ cột. Khả năng index thực tế là Chưa xác minh vì không có URL Inspection.
4. Không thấy canonical sai trên URL 2026 và trên 142 URL sitemap.
5. Sitemap 142 URL đều 200. Có URL 2026. Không có URL không năm và URL ngắn.
6. Internal link đang đổ về URL 2026: 414 href, 0 href tới URL không năm. Phần lớn là menu.
7. Trên title/H1/description/H2 của sitemap, không có trang index thứ hai mang đúng H1 của cụm. Bài Đồng Nai và Phú Yên có chữ báo giá cho tỉnh khác. Chưa đủ impression để kết luận cannibal.
8. Ba trang `/bao-gia`, `/xay-moi`, `/thiet-ke` lệch vì `buildMenuSubPages` ghi đè file prerender của `buildStaticPages`. Cùng bundle với trang trụ cột. Chi tiết ở `11-production-deploy-audit.md`.
9. Chưa thống nhất tên pháp lý (hai chuỗi trong mã) và ba địa chỉ. Giờ liên hệ vẫn nói 24/7. Hotline và email khớp.
10. Schema có `dateModified` 21/10 trong khi title là bản 6/11, và `priceRange` là `$`. Không thấy rating giả trên HTML trụ cột.
11. Form chính gửi lead và có toast. Không bắn event chuyển đổi. Chưa gửi form thật nên chưa xác minh backend production và GA4.
12. Không có số LCP, INP, CLS. Chỉ có dung lượng ảnh và kích thước HTML.
13. Có thể sửa sau khi duyệt, không đổi path: bỏ ghi đè prerender ba hub, sửa câu 24/7, bỏ ngày schema cứng, gắn event form.
14. Chủ site cần xác nhận: tên đăng ký, địa chỉ nào là trụ sở, 500 công trình và 10 năm có đúng sổ không, rồi xuất URL Inspection.
15. Cần Search Console cho trạng thái index, Google-selected canonical, last crawl, clicks và impressions. Cần GA4 DebugView cho event. Cần PageSpeed cho CWV. Cần bảng backlink nếu muốn nói về link ngoài.

## Lỗi ưu tiên

Không có P0. URL trụ cột truy cập được, không noindex, canonical đúng.

P1 chờ duyệt: SK-01 ghi đè prerender, SK-02 hotline 24/7, SK-03 dateModified, SK-04 form không đo event, SK-05 tên và địa chỉ chờ xác nhận.

## Xác nhận phạm vi

Không thay đổi URL 2026, không đưa URL không năm về 200, không sửa 41 redirect trong `middleware.js`, không sửa canonical, không sửa sitemap, không sửa robots.

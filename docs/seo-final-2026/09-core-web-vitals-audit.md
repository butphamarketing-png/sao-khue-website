# Module 9 — Hiệu năng

Chưa xác minh LCP, INP, CLS. Không có số PageSpeed hay CrUX trong lần này. Không tuyên bố đạt Core Web Vitals.

## Đã xác minh từ mã và file

- Ảnh trụ cột là JPG 184–381 KB, có width/height và lazy. Ảnh đầu bài nếu là LCP mà vẫn lazy thì có thể chậm. Chưa đo.
- HTML `/bao-gia` 7.370 byte. HTML trụ cột 36.922 byte.
- Font Be Vietnam Pro và Roboto Condensed tải từ Google Fonts trong HTML, chặn render đến khi CSS font về.
- Bundle production `/assets/index-CEiByksY.js` khoảng 4,9 MB chưa nén trên đĩa tải về. Chưa tách phần nào là JS chết.
- Cache Vercel `max-age=0, must-revalidate`. Phản hồi đo được là HIT.
- Không thấy pipeline AVIF/WebP cho ảnh `sk-*.jpg`.

Việc đề xuất sau khi có số đo: xuất WebP cùng kích thước hiển thị, không lazy ảnh LCP, giữ nguyên URL. Chờ phê duyệt và chờ số PageSpeed.

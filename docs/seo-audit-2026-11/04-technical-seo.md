# Technical SEO

Kiểm tra ngày 6/11/2026 trên mã nguồn và trên HTML production của các URL then chốt. Không deploy.

## Công nghệ

React 19, Vite 7, wouter. HTML tĩnh được ghi sau `vite build` bởi `prerender-html.ts`. Vercel phục vụ file đó. Google đọc HTML đầu tiên, rồi React mới chạy.

## HTTP, canonical, redirect

| URL | Kết quả production |
|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 200, canonical tự trỏ, `index,follow` |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301 tới URL 2026 |
| `/dich-vu/xay-nha-tron-goi` | 301 tới URL 2026 |

Không thấy chuỗi 301 hai bước trên hai URL cũ này. `middleware.js` không được sửa. Redirect apex 307 đã ghi ở audit trước; lần này không đo lại apex và không đổi.

## Sitemap và robots

`robots.txt` cho phép `/`, chặn `/admin` và `/api/`, khai báo sitemap.

Sitemap production có 142 URL. Có trụ cột và ba hub. Không có hai URL 301 và không có landing `/xay-nha`, `/cai-tao-nha`.

File `artifacts/api-server/public/sitemap.seed.xml` có 208 dòng `loc`. Đây là file seed, không phải sitemap production vừa tải. Không sửa file này.

## Prerender ghi đè

`buildStaticPages()` tạo title đúng cho `/bao-gia`, `/xay-moi`, `/thiet-ke`. `buildMenuSubPages()` trước đây ghi cùng path với title menu. Working tree hiện có `reservedPaths` và `continue` tại `prerender-html.ts` khoảng dòng 447, nên lần build local không ghi đè.

Production lúc 6/11/2026 vẫn là HTML menu:

- `/bao-gia`: title và H1 “BÁO GIÁ THIẾT KẾ”
- `/xay-moi`: “KINH NGHIỆM XÂY MỚI”
- `/thiet-ke`: “THIẾT KẾ NHÀ ĐẸP TP.HCM”

Cả ba vẫn canonical tự trỏ và `index,follow`. Lỗi là nội dung HTML, không phải status.

Sau khi React chạy, client có thể đổi title. Google đọc HTML tĩnh trước. Production chưa có bản vá.

## Khác biệt HTML tĩnh và React

Ba hub: HTML production mỏng, khoảng một heading menu. Trang React có nội dung dự toán, thiết kế hoặc kinh nghiệm. Đó là lệch đã xác nhận.

Bài viết: prerender in H1 từ `post.title` rồi in thân bài. Các bài index đã đếm không có thẻ H1 thứ hai trong thân.

Ảnh trong bài: `enhanceArticleHtml()` thêm alt nếu thiếu và thêm `loading="lazy"`. Không rà từng file ảnh byte trong lần này.

## Schema

Trụ cột dùng `Service`, breadcrumb và HowTo khi đủ bước. `dateModified` trong mã local lấy `updatedAt` của seed, `2026-11-05`, không còn số cứng `2026-10-21`. Production có thể còn schema cũ cho đến khi deploy.

`priceRange` trong schema tổ chức vẫn là `$$`. Không sửa.

Địa chỉ schema trụ cột là 245/8 Bình Lợi. Trang chủ prerender nêu 36 Đường 27, Vạn Phúc. Không gộp địa chỉ.

## Link tới URL redirect

Hàm `rewriteRetiredHrefsInHtml()` chạy cả lúc prerender và trong `post-body.ts`. Href tương đối của slug đã nghỉ được đổi sang hub. Menu `withTurnkeyNavLabel()` còn đổi riêng `/xay-moi` thành URL trụ cột. Đó là chủ đích trong code, không phải redirect HTTP.

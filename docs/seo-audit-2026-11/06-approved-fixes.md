# Việc đã sửa

Lần audit này không thêm diff mới. Không chạy build lại, vì build còn sinh sitemap và middleware. Không chạy lint, vì repo không có ESLint và không có file code mới.

## Đã có trong working tree, chưa lên production

Phase 1 đã sửa `artifacts/sao-khue/scripts/prerender-html.ts`: `buildMenuSubPages()` bỏ qua path mà `buildStaticPages()` đã tạo. `/bao-gia`, `/xay-moi`, `/thiet-ke` giữ title source.

Build local trước đó, Vite 7.3.2, thoát mã 0, đã ghi HTML:

- `/bao-gia`: title “Dự toán chi phí xây nhà | Kiến Trúc Sao Khuê”, H1 cùng ý, canonical tự trỏ, `index,follow`.
- `/xay-moi`: “Kinh nghiệm xây nhà mới”.
- `/thiet-ke`: “Thiết kế nhà phố TP.HCM”.
- Trụ cột: title và H1 giữ nguyên. `dateModified` trong schema local là `2026-11-05`.

Production lúc kiểm tra lại trong audit này vẫn là title menu. Chưa deploy, nên chưa gọi là đã sửa site đang chạy.

## Không sửa thêm

Href cũ trong 57 bài đã được hàm rewrite xử lý lúc render. Sửa từng bài không đổi HTML xuất ra.

Alt trống đã được `enhanceArticleHtml()` điền. Không sửa hàng loạt ảnh.

Không đổi URL, canonical, redirect, sitemap, robots, H1 trụ cột, giá, địa chỉ, tên pháp lý, hotline.

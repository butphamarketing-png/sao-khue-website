# Audit SEO toàn site — 6/11/2026

Nguồn: mã nguồn React 19.1, Vite 7.3, wouter, prerender sau build (`artifacts/sao-khue/scripts/prerender-html.ts`), host Vercel. Không phải Next.js. Không có số Search Console, thứ hạng, backlink hay lưu lượng trong báo cáo này. Không kết luận trang đang tụt hạng.

## Phạm vi đã đọc

- 6.813 bản ghi seed. 134 bài được `isSitemapIndexablePost` cho vào sitemap. 6.679 bài bị noindex theo policy factory, quận mẫu, hoặc slug đã gom về hub.
- Sitemap production tải ngày 6/11/2026: 142 URL. Có URL trụ cột 2026, `/bao-gia`, `/thiet-ke`, `/xay-moi`. Không có `/dich-vu/xay-nha-tron-goi`, `/dich-vu/xay-nha-tron-goi-tphcm`, `/xay-nha`, `/cai-tao-nha`.
- HTML production đọc trực tiếp: trụ cột và ba hub. Hai URL cũ trả 301 về URL 2026.

## Trang trụ cột

Giữ nguyên.

- URL: `/dich-vu/xay-nha-tron-goi-tphcm-2026`
- Production: HTTP 200, title `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`, H1 `Xây nhà trọn gói TPHCM`, canonical tự trỏ, robots `index,follow,max-image-preview:large`.
- Hai URL cũ: 301 một bước, `Location: /dich-vu/xay-nha-tron-goi-tphcm-2026`.
- Không đổi path, canonical, redirect, H1 hay thân bài trong lần audit này.

## Kết luận ngắn

Không có URL index thứ hai dùng H1 đúng cụm “Xây nhà trọn gói TPHCM”. Cụm này xuất hiện thêm ở bài hỗ trợ, trang tỉnh và trang khuyến mại, với ý định khác.

Lỗi đã xác nhận trên production là ba hub `/bao-gia`, `/thiet-ke`, `/xay-moi` vẫn là vỏ menu: title và H1 là “BÁO GIÁ THIẾT KẾ”, “THIẾT KẾ NHÀ ĐẸP TP.HCM”, “KINH NGHIỆM XÂY MỚI”. Mã local đã chặn `buildMenuSubPages()` ghi đè path tĩnh. Production chưa deploy bản đó.

## Mười một câu nghiệm thu

1. Đã đối chiếu 6.813 bản ghi seed, 142 URL sitemap production, và HTML của trụ cột cùng ba hub. Không đọc hết thân 6.679 bài noindex.
2. Nhóm cùng ý định gần nhau, cần phân vai: báo giá/dự toán, thiết kế nhà phố, sửa nhà/cải tạo. Không có nhóm P0 cùng H1 và cùng ý định thương mại TPHCM.
3. 16 URL index có cụm giao với trụ cột hoặc với hub. Chi tiết ở file 02. Chỉ một URL giữ H1 “Xây nhà trọn gói TPHCM”.
4. Cụm dễ bị trang khác đụng chữ: “xây nhà trọn gói”, “báo giá xây nhà trọn gói”, “thiết kế nhà phố”, “cải tạo nhà”. Địa bàn tỉnh và số tầng làm ý định khác đi.
5. URL chủ lực: `/dich-vu/xay-nha-tron-goi-tphcm-2026`.
6. Bài hỗ trợ: cẩm nang, quy trình, dự toán, công ty uy tín, công trình, mẫu nhà, trang tỉnh.
7. Ba hub trên production là HTML mỏng và sai title. `/tin-tuc/xay-nha-quan-8` khoảng 293 từ, dưới ngưỡng 300 từ dùng trong lần đếm này.
8. Canonical trụ cột tự trỏ. Redirect cũ là 301 một bước. Sitemap live không chứa URL redirect. Schema trụ cột có giá và địa chỉ; không sửa trong audit này vì thuộc nhóm cấm.
9. Không sửa thêm code trong lần audit này. Bản vá prerender ba hub đã nằm ở working tree từ phase 1, chưa lên production.
10. Đổi title đang index, viết lại H1, gộp sửa nhà với cải tạo, đổi menu, tên pháp lý, địa chỉ, số công trình: chờ duyệt. File 07.
11. Deploy bản vá ba hub sẽ đổi title HTML mà Google đang thấy. Đó là thay đổi có thể đổi cách trang được hiểu. Không có dữ liệu để nói thứ hạng sẽ tăng hay giảm.

# Module 11 — Lệch HTML ba trang

Không phải bản deploy cũ. Cùng một build với trang trụ cột. Prerender ghi đè file.

## Đã xác minh trên production 6/11/2026

Cả bốn URL dùng một bundle: `/assets/index-CEiByksY.js` và `/assets/index-CkPhR5Zw.css`.

| URL | Title trong HTML tĩnh | Kích thước | Last-Modified |
|---|---|---|---|
| URL 2026 | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | 36.922 byte | 09:05:17 GMT |
| `/bao-gia` | BÁO GIÁ THIẾT KẾ \| Kiến Trúc Sao Khuê | 7.370 byte | 09:09:17 GMT |
| `/xay-moi` | KINH NGHIỆM XÂY MỚI \| Kiến Trúc Sao Khuê | 7.386 byte | 09:09:17 GMT |
| `/thiet-ke` | THIẾT KẾ NHÀ ĐẸP TP.HCM \| Kiến Trúc Sao Khuê | 7.444 byte | 09:09:17 GMT |

Bundle JS có cả chuỗi mới `Dự toán chi phí xây nhà`, `Kinh nghiệm xây nhà mới` và chuỗi menu `KINH NGHIỆM XÂY MỚI`. Commit `aff1b72` đã có mặt trong JS. HTML tĩnh của ba hub không dùng hằng số SEO.

## Nguyên nhân trong mã — Đã xác minh

`scripts/prerender-html.ts` hàm `main` ghép trang theo thứ tự:

1. `buildStaticPages()` ghi `/bao-gia`, `/thiet-ke`, `/xay-moi` với title đúng (`BAO_GIA_SEO_TITLE`, `THIET_KE_SEO_TITLE`, `XAY_MOI_SEO_TITLE`).
2. `buildMenuSubPages()` ghi lại cùng path.
3. `buildPostPages()` ghi bài, trong đó có URL 2026.

`writePage` ghi theo path. Lần sau đè lần trước.

`buildMenuSubPages` (khoảng dòng 435–502) chỉ chạy với mục menu có `category`. Tiêu đề lấy từ `child.title`:

- `menu.ts` dòng 47, mục THIẾT KẾ, href `/thiet-ke`, title `THIẾT KẾ NHÀ ĐẸP TP.HCM`
- `menu.ts` dòng 51, cùng mục, href `/bao-gia`, title `BÁO GIÁ THIẾT KẾ`
- `menu.ts` dòng 64, mục XÂY TRỌN GÓI, href `/xay-moi`, title `KINH NGHIỆM XÂY MỚI`

Description fallback là `title — Kiến Trúc Sao Khuê`. Khớp từng ký tự với HTML production. H1 là title menu. Thân bài chỉ một đoạn, khoảng 45 từ. Robots vẫn index,follow. Canonical tự trỏ. Trang nằm trong sitemap.

Mục BÁO GIÁ trong menu không có `category` nên bị bỏ qua. `/bao-gia` bị đè bởi mục con của THIẾT KẾ, không phải bởi mục BÁO GIÁ.

`Pricing.tsx` sau khi hydrate gọi `usePageSeo` với `BAO_GIA_SEO_TITLE`. Người dùng có JS có thể thấy title khác HTML mà Google tải lần đầu. Chưa đo bằng trình duyệt. HTML lần đầu là bản menu.

## Rewrite Vercel — Có dấu hiệu, không phải nguyên nhân hiện tại

`vercel.json` dòng 36–43 rewrite `/xay-moi` và `/thiet-ke` về `/index.html`. Production vẫn trả title riêng của từng URL, nên file tĩnh đang được phục vụ. Rewrite chỉ thành rủi ro nếu file tĩnh biến mất. Không sửa rewrite trong lần này.

## Cách sửa khi được duyệt

Trong `buildMenuSubPages`, bỏ qua path đã có trong `buildStaticPages`: `/bao-gia`, `/thiet-ke`, `/xay-moi`, `/xay-nha`, `/cai-tao-nha`. Giữ title menu cho các path bài thật.

Không đổi URL. Không noindex trong cùng một thay đổi trừ khi chủ site duyệt riêng. Không tạo nội dung mới.

## Kiểm thử sau khi sửa

- HTML `/bao-gia` có H1 “Dự toán chi phí xây nhà” và title `BAO_GIA_SEO_TITLE`.
- `/thiet-ke` và `/xay-moi` khớp hằng số SEO, không còn title menu.
- URL 2026 vẫn 200, canonical và title giữ nguyên.
- Một path 301 vẫn 301 một bước.
- Sitemap không thêm URL không năm.

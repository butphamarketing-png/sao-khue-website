# Tối ưu SEO các trang dịch vụ có khả năng ra khách

Ngày kiểm tra: 8/11/2026.  
Repo: `assets/layout-refs/Sao-Khue-Layout`.  
Branch: `seo/pillar-onpage-tphcm`. HEAD: `c52af8f`. Không chuyển branch, không commit, không push, không deploy.

## 1. URL đã kiểm tra

| URL | Việc đã làm |
|---|---|
| `/dich-vu/sua-nha-tron-goi-tphcm` | Tối ưu |
| `/dich-vu/xay-nha-tron-goi-binh-duong` | Tối ưu bản đang được render |
| `/dich-vu/cai-tao-nha-cu` | Tối ưu |
| `/bao-gia` | Tối ưu title giữ nguyên, sửa mô tả và HTML prerender |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | Chỉ sửa ALT ảnh đầu và một liên kết đang 301 |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Chỉ đọc. Không sửa |
| `/thiet-ke`, `/xay-moi` | Chỉ kiểm tra cơ chế prerender |

## 2. URL đã tối ưu

Bốn URL thương mại ở trên, cộng hai sửa an toàn trên bài Phú Yên. Không tạo URL mới.

## 3. Từ khóa mục tiêu

- Sửa nhà: `sửa nhà trọn gói tphcm`, dịch vụ sửa nhà trọn gói, công ty/đơn vị sửa chữa, báo giá sửa nhà, thi công sửa chữa nhà phố.
- Bình Dương: `xây nhà trọn gói bình dương`, công ty/dịch vụ, báo giá, nhà thầu, thi công nhà phố. Giữ Thuận An, Dĩ An, Thủ Dầu Một trong cùng URL.
- Cải tạo: `cải tạo nhà trọn gói tphcm`, dịch vụ/công ty cải tạo, báo giá, thi công nhà phố, cải tạo nhà cũ trọn gói.
- Báo giá: `báo giá xây nhà`, báo giá trọn gói, đơn giá, chi phí nhà phố, dự toán, giá theo m². Không tách trang báo giá mới.
- Phú Yên: giữ `xây nhà trọn gói phú yên` trên URL đang có. Không đổi title, H1, bảng giá.

## 4. Title và meta trước / sau

| URL | Trước | Sau |
|---|---|---|
| Sửa nhà | Title `Sửa Nhà Trọn Gói TP.HCM — Báo Giá 2026 \| Sao Khuê`. H1 `Sửa Nhà Trọn Gói TP.HCM 2026 — Báo Giá Minh Bạch \| Sao Khuê`. Mô tả nêu sơn lát và WC–bếp, kèm số điện thoại. | Title `Sửa nhà trọn gói TP.HCM \| Kiến Trúc Sao Khuê` (44 ký tự). H1 `Sửa nhà trọn gói TP.HCM`. Mô tả: chống thấm, điện nước, sơn lát 1,5–3 triệu/m², khảo sát miễn phí. |
| Bình Dương, bản render | Title `Xây Nhà Trọn Gói Bình Dương 2026 \| Sao Khuê`. H1 `Xây Nhà Trọn Gói Bình Dương — Thuận An, Dĩ An & Lân Cận TP.HCM`. Mô tả nói đơn giá riêng, không copy m² TP.HCM. | Title `Xây nhà trọn gói Bình Dương \| Kiến Trúc Sao Khuê` (48 ký tự). H1 `Xây nhà trọn gói Bình Dương`. Mô tả: Thủ Dầu Một, Thuận An, Dĩ An, trọn gói tiêu chuẩn 4,85–5,5 triệu/m² sàn ở. |
| Cải tạo | Title `Cải Tạo Nhà Cũ Trọn Gói 2026 — Tiết Kiệm, Nâng Tầm Giá Trị \| Sao Khuê`. H1 `Cải Tạo Nhà Cũ Trọn Gói 2026 — Làm Mới Không Gian Sống \| Sao Khuê`. | Title `Cải tạo nhà trọn gói TP.HCM \| Kiến Trúc Sao Khuê` (48 ký tự). H1 `Cải tạo nhà trọn gói TP.HCM`. Mô tả nói đổi bố trí, mặt tiền, gia cố. |
| `/bao-gia` | Title `Dự toán chi phí xây nhà \| Kiến Trúc Sao Khuê`. Mô tả “phần thô từ 3,55, trọn gói từ 4,85”. | Title và H1 giữ nguyên. Mô tả đổi thành khoảng 3,55–3,8 và 4,85–5,5, có “báo giá xây nhà theo m² sàn ở”. |
| Phú Yên | Title và H1 giữ nguyên. | Không đổi title, H1, mô tả, canonical. |

Title mới dài từ 44 ký tự trở lên vì `padShortMetaDescriptions()` tự thêm “2026” và “— Báo giá” khi title ngắn hơn 40 ký tự. Không sửa hàm này.

## 5. Nội dung đã sửa

**Sửa nhà.** Đoạn mở nói rõ đây là sửa chữa, thay thế, hoàn thiện nhà đang có. Đổi bố trí phòng được chuyển sang trang cải tạo. Kết cấu không dùng được thì chuyển sang pillar xây mới. Bước tiếp nhận nói khách gửi ảnh, kích thước và cho biết nhà còn ở hay đã dọn. Bảng giá, quy trình, FAQ và case Quận 3 giữ nguyên.

**Bình Dương.** Trang công khai không lấy bài dài `xay-nha-tron-goi-binh-duong.ts`. `applyMoneyPageOverrides()` thay bằng object trong `money-page-overrides-batch2.ts`. Đã sửa object đó: H1, title, mô tả, câu khách cần gửi địa chỉ lô và số tầng, đơn giá theo khung đã có trên site (thô 3,55–3,8; tiêu chuẩn 4,85–5,5; khá 5,5–6,0; cao cấp 6,0–6,7+). Gỡ câu “thấp hơn 5–15%” và “phần thô khoảng 3,5–5 triệu” vì lệch khung đơn giá đang dùng. Bài dài cũng được sửa liên kết, nhưng bài đó không phải HTML đang xuất.

**Cải tạo.** Đoạn mở tách khỏi sửa nhà: đổi công năng, bố trí, mặt tiền, giếng trời. Hai liên kết `/dich-vu/sua-chua-nha` và `/dich-vu/xay-nha-moi` (đều 301) đổi sang URL đích đang index. Bảng giá cải tạo giữ nguyên.

**Báo giá.** HTML tĩnh thêm H2 “Báo giá xây nhà theo m²” và “Chi phí phụ thuộc vào đâu”, cùng bốn khoảng đơn giá đã có. Không thêm trang báo giá.

**Phú Yên.** ALT và caption ảnh đầu hết là tên file `bao-gia-xay-nha-phu-yen-1`, đổi thành “Báo giá xây nhà trọn gói tại Phú Yên”. Không đụng bảng giá.

## 6. Liên kết nội bộ đã thêm hoặc sửa

- Sửa nhà → `/dich-vu/cai-tao-nha-cu` và `/dich-vu/xay-nha-tron-goi-tphcm-2026`.
- Bình Dương (bản render) → pillar 2026, với neo “xây nhà trọn gói tại TP.HCM”; thêm `/bao-gia`. Gỡ liên kết tự trỏ về chính URL Bình Dương.
- Cải tạo → `/dich-vu/sua-nha-tron-goi-tphcm` thay cho `/dich-vu/sua-chua-nha`; `/dich-vu/xay-nha-tron-goi-tphcm-2026` thay cho `/dich-vu/xay-nha-moi`.
- Phú Yên → cùng pillar, thay cho `/dich-vu/xay-nha-tron-goi-tphcm`.
- HTML `/bao-gia` → pillar, sửa nhà, cải tạo, `/lien-he`.

Không còn các href cũ đó trong nội dung bốn bài sau khi seed được ghép. Canonical từng trang giữ nguyên.

## 7. Lỗi thấy nhưng chưa xử lý

- `buildMenuSubPages()` không còn ghi đè `/bao-gia`, `/thiet-ke`, `/xay-moi`. `reservedPaths` bỏ qua path đã có trong `buildStaticPages()`. Không sửa cơ chế này.
- `/thiet-ke` và `/xay-moi` vẫn là HTML ngắn của chính `buildStaticPages()`: khoảng 97 và 99 từ trong `#root`, gồm menu. Không phải do bị ghi đè. Chưa viết thêm vì không thuộc bốn trang thương mại và không cần đụng middleware.
- Form trang liên hệ (`ContactCTASection`) không gọi `trackAdsConversion`. Popup báo giá và form landing quảng cáo thì có. Nút Hotline/Zalo nổi chỉ ghi click, không phải lead đã xác nhận. Không gửi form production, không sửa tracking.
- Tên pháp lý và địa chỉ vẫn mâu thuẫn trong source. Không chọn một bản.
- Hàm đệm title ngắn vẫn còn. Chỉ né bằng cách viết title đủ 40 ký tự trên các trang này.

## 8. Build và HTML

Chạy `vite build` rồi `prerender-html.ts`. Không chạy `generate-vercel-redirects.ts`, `generate-known-paths.ts`, `generate-sitemap.ts`. Middleware, robots, sitemap không nằm trong diff.

Lần prerender chạy trên `dist/public/index.html` đã bị lần trước ghi nội dung vào sẽ không thay được `#root`. Đã build lại shell Vite rồi prerender một lần. Kết quả: 6.917 trang HTML.

HTML sau lần đó:

- Sửa nhà, Bình Dương, cải tạo, `/bao-gia`, Phú Yên, pillar: title, H1 và canonical như bảng trên. `robots` là `index,follow,max-image-preview:large`. Không có `noindex` mới.
- Pillar vẫn title `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`, H1 `Xây nhà trọn gói TPHCM`, canonical đúng URL 2026.
- `/bao-gia` có hai H2 mới. `#root` khoảng 201 từ, gồm menu.
- `/thiet-ke` H1 `Thiết kế nhà phố TP.HCM`. `/xay-moi` H1 `Kinh nghiệm xây nhà mới`.

## 9. File nguồn đã đổi

- `lib/seed-content/src/articles/sua-nha-tron-goi-tphcm.ts`
- `lib/seed-content/src/articles/money-page-overrides-batch2.ts`
- `lib/seed-content/src/articles/xay-nha-tron-goi-binh-duong.ts` (không phải bản render)
- `lib/seed-content/src/articles/cai-tao-nha-cu.ts`
- `lib/seed-content/src/articles/bao-gia-xay-nha-tron-goi-phu-yen.ts`
- `artifacts/sao-khue/src/lib/seo.ts` (chỉ `BAO_GIA_SEO_DESCRIPTION`)
- `artifacts/sao-khue/scripts/prerender-html.ts` (chỉ thân HTML `/bao-gia`)

`dist/` bị build ghi đè và đang bị gitignore. Không commit.

## 10. Việc doanh nghiệp cần xác nhận

- Chọn một tên pháp lý. Source đang có cả “Công ty TNHH Kiến Trúc Sao Khuê” và “Công ty TNHH Thiết kế và Xây dựng Sao Khuê”.
- Chọn địa chỉ công khai: 36 Đường 27, KDC Vạn Phúc, Thủ Đức, và 245/8 Bình Lợi, Bình Thạnh, đều đang được dùng.
- “Hơn 10 năm” và “hơn 500 công trình” vẫn nằm trong bài Bình Dương dài, nhưng bài đó không được xuất ra HTML. Trang sửa nhà đang xuất câu “hơn 10 năm”.
- Câu cải tạo “tiết kiệm 30–50% so với xây mới” là câu cũ, vẫn còn ở phần sau của trang cải tạo.
- Bảng giá Phú Yên khác khung đơn giá TP.HCM. Giữ nguyên vì trang này đang có thứ hạng.

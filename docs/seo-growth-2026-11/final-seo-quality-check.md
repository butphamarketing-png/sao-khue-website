# Kiểm tra chất lượng SEO lần cuối — cụm xây nhà trọn gói TPHCM

Ngày kiểm tra local: 10/11/2026. Báo cáo này bổ sung cho `url-architecture-restoration-report.md`. Cấu trúc URL giữ nguyên. Không commit, không push, không deploy, không mở Search Console. Production vẫn là bản trước khi sửa source.

## 1. Nội dung đã cải thiện

### Bài tin tức `/tin-tuc/xay-nha-tron-goi-tphcm-2026`

Bài cũ dài 611 từ, phần lớn nhắc lại đơn giá, giờ làm việc, địa chỉ và bảo hành của trang dịch vụ. Bài mới dài 1.385 từ, viết theo nhu cầu tìm hiểu của gia chủ:

- **Chuẩn bị trước khi gặp nhà thầu:** giấy tờ lô đất, ảnh lối vào hẻm, nhu cầu sử dụng, chừa hố thang máy, tách ngân sách xây khỏi nội thất và tiền ở tạm, lưu hiện trạng nhà bên khi có tường chung.
- **Bảng 10 mục cần đọc trong hợp đồng:** phạm vi, cách tính diện tích, danh mục vật tư, khoản tách riêng, tiến độ, thanh toán, nghiệm thu, phụ lục thay đổi, bảo hành, pháp nhân nhận tiền. Mỗi mục ghi rõ cần thấy gì và khi nào nên hỏi lại.
- **Tám yếu tố làm tổng tiền thay đổi:** số sàn ở, nền đất, lối vào, mái và sân thượng, mức vật tư hoàn thiện, hạng mục ngoài gói, thay đổi giữa chừng, giấy phép. Không có con số.
- **Sáu mốc giám sát:** trước khi đào móng, trước khi đổ bê tông, trước khi trát tường, trước khi lát gạch khu ướt, giai đoạn hoàn thiện, nghiệm thu tổng thể. Kèm cách giữ hồ sơ và đối chiếu thanh toán.
- **Những gì làm chậm tiến độ**, một mục nói rõ bài không có số liệu thị trường, 3 câu hỏi thường gặp và một khối đọc tiếp.

Bài không còn bảng giá, giờ làm việc, địa chỉ, email hay khối liên hệ. Giá và điều khoản của Sao Khuê được dẫn về trang dịch vụ.

Độ trùng với thân trang dịch vụ: 0/62 câu trùng nguyên văn; 3/1.465 cụm 8 từ trùng nhau (0,2%).

Title và H1 đổi theo nội dung mới. Description viết lại. URL, slug, category và canonical không đổi.

### Liên kết tới bài tin tức

| Trang | Anchor |
|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm` (thân bài, mục báo giá) | kinh nghiệm xây nhà trọn gói TP.HCM 2026 |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` (sau danh sách điều khoản hợp đồng) | kinh nghiệm xây nhà trọn gói TP.HCM 2026 |
| `/tin-tuc/du-toan-chi-phi-xay-nha` (sau mục so sánh dự toán) | kinh nghiệm xây nhà trọn gói TP.HCM 2026 |

Câu dẫn trên trang dịch vụ đổi thành “Chuẩn bị hồ sơ và đọc hợp đồng trước khi ký” cho khớp nội dung mới. URL tin tức không được đặt vào menu, footer, sidebar hay các nút đang dẫn tới trang dịch vụ.

### Dọn liên kết lặp trong mẫu bài tự sinh

Trong `lib/seed-content/src/rebuild-thin-articles.ts`, khối “Liên quan” có hai liên kết tới slug đã noindex. Lúc render, cả hai bị rewrite thành trang dịch vụ:

- “đơn giá xây nhà” (`/tin-tuc/don-gia-xay-nha-tphcm`) thành liên kết thứ hai tới trang dịch vụ, ngay cạnh “dịch vụ xây nhà”, trên 59 trang. Đã bỏ anchor này. Khối vẫn giữ “dịch vụ xây nhà” và “bảng báo giá”.
- “thiết kế nhà đẹp” (`/tin-tuc/thiet-ke-nha-dep-tphcm`) dẫn sai sang trang xây nhà trên 11 trang. Đã trỏ lại về `/dich-vu/thiet-ke-nha`. Trang này 200 và có trong sitemap.

### File đã sửa trong lần này

- `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm-2026.ts`
- `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts` (một câu dẫn)
- `lib/seed-content/src/articles/money-page-overrides.ts` (một đoạn trong bài công ty)
- `lib/seed-content/src/articles/du-toan-chi-phi-xay-nha.ts` (một đoạn)
- `lib/seed-content/src/rebuild-thin-articles.ts` (hai liên kết trong khối “Liên quan”)

Đã thử thêm liên kết vào `quy-trinh-xay-nha-tron-goi-a-z.ts` rồi hoàn tác, vì nội dung viết tay của bài đó không được render (xem mục 6).

## 2. Nội dung còn cần dữ liệu xác thực

- Không có giá trung bình thị trường TP.HCM năm 2026, xu hướng giá vật liệu hay số liệu cấp phép. Bài nói rõ điều này.
- Không có ảnh chụp riêng cho bài. Ảnh đại diện lấy từ kho ảnh theo slug (`nha-2-tang-15.jpg`).
- Một số lời khuyên là thực hành chung cho gia chủ, không phải chính sách đã ký của Sao Khuê: chụp hiện trạng nhà bên, chụp đường điện nước trước khi trát, hỏi cách thử nước chống thấm. Bài viết các mục này ở dạng việc gia chủ nên làm, không viết thành cam kết của công ty.
- Tiến độ thi công không ghi số vì hai bài nguồn đang mâu thuẫn: trang dịch vụ ghi nhà phố 3–4 tầng 4–7 tháng, bài quy trình ghi nhà phố 2–3 tầng 5–8 tháng. Bài tin tức chỉ dẫn sang bài quy trình.
- `datePublished` và `dateModified` của bài tin tức đang là giá trị mặc định 2026-01-15. Chưa có ngày đăng thật vì bài chưa lên production.

## 3. HTML và metadata (prerender local)

Hai file HTML khác nhau: dịch vụ 32.288 byte, tin tức 20.347 byte.

| | Trang dịch vụ | Bài tin tức |
|---|---|---|
| Title | Xây nhà trọn gói TPHCM 2026 từ 4,85tr | Kinh nghiệm xây nhà trọn gói TPHCM 2026 — Sao Khuê |
| H1 | Xây nhà trọn gói TPHCM | Kinh nghiệm xây nhà trọn gói tại TP.HCM năm 2026: chuẩn bị, hợp đồng, chi phí, giám sát |
| Description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở… (141 ký tự) | Kinh nghiệm cho gia chủ TP.HCM năm 2026: giấy tờ cần chuẩn bị… (149 ký tự) |
| Canonical | `/dich-vu/xay-nha-tron-goi-tphcm` | `/tin-tuc/xay-nha-tron-goi-tphcm-2026` |
| Robots | index,follow,max-image-preview:large | index,follow,max-image-preview:large |
| og:url | bằng canonical | bằng canonical |
| og:title | bằng title | bằng title |
| JSON-LD của trang | Service (AggregateOffer 4.850.000–6.700.000 VND/m² sàn ở), BreadcrumbList, FAQPage, HowTo | BlogPosting (wordCount 1.385), BreadcrumbList, FAQPage |
| Breadcrumb | Trang chủ › Dịch vụ › Xây nhà trọn gói TPHCM | Trang chủ › Tin tức › tiêu đề bài |

Hai URL breadcrumb cuối là hai URL khác nhau. Bài tin tức không có schema Service và breadcrumb không chứa mục Dịch vụ.

Cả hai trang có `og:type=article`. Đây là mặc định của mọi trang bài viết trong prerender, không đổi trong lần này.

## 4. Internal links (209 trang trong sitemap seed)

### Liên kết tới trang dịch vụ

Trước khi dọn: 442 href. Sau khi dọn: 373 href, có mặt trên cả 209 trang.

| Loại | Số href | Ghi chú |
|---|---:|---|
| Điều hướng chính (thanh “Điều hướng” của HTML prerender) | 208 | Một liên kết mỗi trang, trừ chính trang dịch vụ |
| Trong thân bài viết | 155 | Trước khi dọn là 224 |
| Phần thân khác của trang tĩnh | 4 | Trang chủ 2, `/bao-gia` 1, `/xay-moi` 1 |
| Breadcrumb | 0 | Trang dịch vụ là mục cuối, không có liên kết |
| Tự trỏ trên chính trang dịch vụ | 6 | 1 ở thanh điều hướng, 5 trong thân bài cũ; giữ nguyên |

69 href đã bỏ chính là hai nhóm lặp ở mục 1.

Anchor trong thân bài hiện nay: “dịch vụ xây nhà” 58 (khối “Liên quan” của mẫu tự sinh), “xây nhà trọn gói tphcm” 22, “xây nhà trọn gói” 10, phần còn lại rải rác. Trang có nhiều liên kết thân bài nhất là `/tin-tuc/xay-nha-tan-phu` (6), sau đó `/tin-tuc/xay-nha-quan-7` và `/tin-tuc/xay-nha-go-vap` (5 mỗi trang).

### Liên kết tới bài tin tức

3 href, từ 3 trang ở bảng mục 1.

### Liên kết tới URL redirect

0 href tới `/dich-vu/xay-nha-tron-goi-tphcm-2026`, `/tin-tuc/xay-nha-tron-goi-tphcm` hoặc `/dich-vu/xay-nha-tron-goi` trên 209 trang.

### Phạm vi của lần quét

Lần quét dùng HTML prerender. Thanh bên SPA chỉ render sau khi tải JavaScript nên không nằm trong 373 href. Kiểm tra source: `BaoGiaSidebar.tsx` có 5 nút cùng trỏ về trang dịch vụ (BÁO GIÁ TRỌN GÓI TP.HCM, ĐƠN GIÁ XÂY NHÀ, CHI PHÍ XÂY NHÀ, XÂY NHÀ GIÁ RẺ, XÂY NHÀ TRỌN GÓI). `XayMoiSidebar.tsx` có 3 nút (XÂY NHÀ TRỌN GÓI, NHÀ PHỐ, BÁO GIÁ XÂY MỚI). Bớt nút là thay đổi giao diện nên chưa làm.

## 5. Sitemap và redirect

Sitemap seed: 209 loc, 209/209 có file HTML. Mỗi URL sau có đúng một lần:

- `/dich-vu/xay-nha-tron-goi-tphcm`
- `/tin-tuc/xay-nha-tron-goi-tphcm-2026`

Không có `/dich-vu/xay-nha-tron-goi-tphcm-2026`, `/tin-tuc/xay-nha-tron-goi-tphcm` hay `/dich-vu/xay-nha-tron-goi`.

Gọi trực tiếp `artifacts/api-server/middleware.js` và đi theo từng bước redirect:

| URL | Kết quả | Số bước |
|---|---|---:|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 301 → `/dich-vu/xay-nha-tron-goi-tphcm`, rồi 200 | 1 |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 200 | 0 |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 200 | 0 |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | 301 → `/tin-tuc/xay-nha-tron-goi-tphcm-2026`, rồi 200 | 1 |
| `/dich-vu/xay-nha-tron-goi` | 301 → `/dich-vu/xay-nha-tron-goi-tphcm`, rồi 200 | 1 |

Không có vòng lặp. Hồi quy, đều 200 trực tiếp: `/dich-vu/xay-nha-tron-goi-binh-duong`, `/dich-vu/xay-nha-tron-goi-dong-nai`, `/dich-vu/sua-nha-tron-goi-tphcm`, `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z`, `/tin-tuc/xay-nha-100m2-tphcm`, `/tin-tuc/xay-nha-binh-thanh`, `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm`, `/tin-tuc/du-toan-chi-phi-xay-nha`, `/xay-moi`, `/bao-gia`.

Lần này không đổi slug hay quy tắc redirect, nên `middleware.js`, `known-paths.json` và `sitemap.seed.xml` không cần sinh lại.

### Build

- `vite build` trong `artifacts/sao-khue`: exit 0. Cảnh báo chunk lớn hơn 500 kB là cảnh báo sẵn có.
- Prerender từ shell `#root` rỗng, không nối database: 6.918 trang HTML + `404.html`, exit 0.
- `pnpm run typecheck` và `pnpm run build` trong `artifacts/api-server`: exit 0.
- Frontend không có script test đơn vị. Không chạy `pnpm build` ở root vì typecheck monorepo đang lỗi sẵn.

## 6. Lỗi còn tồn tại

1. **Production chưa đổi.** https://www.kientrucsaokhue.com/ vẫn 301 cả hai URL mong muốn về `/dich-vu/xay-nha-tron-goi-tphcm-2026` cho đến khi deploy. Google chưa được kiểm tra lại.
2. **Bài quy trình không render nội dung viết tay.** `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` bị `applyThinArticleRebuild` thay bằng mẫu tự sinh (có đoạn “Tình huống thực tế gần đây”). Vì vậy không thể thêm liên kết tới bài tin tức vào bài này mà không đổi cơ chế viết lại bài mỏng.
3. **Anchor theo địa phương trỏ về trang dịch vụ TP.HCM.** Ví dụ “trọn gói Tân Phú”, “xây nhà Đắk Lắk”, “đơn giá xây nhà Đắk Lắk”. Đích cũ của chúng là slug đã ngừng dùng, được `rewriteRetiredHrefsInHtml` gom về hub xây nhà. Hành vi này có từ trước, khi hub còn là URL có năm. Sửa từng trang nằm ngoài phạm vi.
4. **Thanh bên SPA có nút lặp** tới trang dịch vụ (5 trong `BaoGiaSidebar`, 3 trong `XayMoiSidebar`). Cần quyết định về giao diện.
5. **Số liệu tiến độ mâu thuẫn** giữa trang dịch vụ và bài quy trình (xem mục 2).
6. **`og:type=article` trên trang dịch vụ** là mặc định chung của prerender bài viết.

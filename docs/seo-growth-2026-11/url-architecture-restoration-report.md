# Khôi phục cấu trúc URL — xây nhà trọn gói TPHCM

Ngày kiểm tra local: 10/11/2026. Production và Google Search Console không được đụng. Số liệu production dưới đây là lần đo 19:38 ICT cùng ngày, trước khi sửa source. Site đang chạy vẫn là cấu trúc cũ cho đến khi có deploy.

## 1. File source đã đổi

Đã sửa, chưa commit:

- `lib/seed-content/src/public-path.ts` và `artifacts/sao-khue/src/lib/post-url.ts` — bỏ override slug dịch vụ `xay-nha-tron-goi-tphcm` → leaf `xay-nha-tron-goi-tphcm-2026`. Các override khác giữ nguyên.
- `lib/seed-content/src/sitemap-policy.ts` — `HUB_XAY_NHA` về `/dich-vu/xay-nha-tron-goi-tphcm`. Override canonical của URL dịch vụ có năm trỏ về hub không năm. `/tin-tuc/xay-nha-tron-goi-tphcm` trỏ về bài tin tức có năm.
- `lib/seed-content/src/index.ts` — đăng ký bài tin tức; slug dịch vụ này không bị padder nối thêm `| Sao Khuê` vào title 37 ký tự.
- `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts` — title SEO đúng câu yêu cầu; thêm một câu dẫn sang bài tin tức. Bảng giá, bảo hành và nội dung còn lại giữ nguyên.
- `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm-2026.ts` — bản ghi tin tức mới.
- `lib/seed-content/src/articles/index.ts` — export bản ghi mới.
- `lib/seed-content/src/rebuild-thin-articles.ts` — không cho bộ viết lại bài mỏng đè bài tin tức này.
- `artifacts/sao-khue/src/lib/legacy-redirects.ts` — đích hub xây nhà đổi sang URL không năm; thêm hai cặp redirect của cụm này.
- `artifacts/sao-khue/src/App.tsx` — route SPA khớp middleware.
- `artifacts/sao-khue/scripts/generate-vercel-redirects.ts` — fallback `xay-` trỏ hub không năm.
- `artifacts/sao-khue/scripts/generate-sitemap.ts`, `artifacts/sao-khue/scripts/prerender-html.ts`, `artifacts/api-server/src/routes/sitemap.ts` — loc tĩnh của trang dịch vụ là URL không năm.
- Menu, footer, sidebar, trang chủ, SEO mặc định và các bài seed đang hard-code URL dịch vụ có năm: `menu.ts`, `Footer.tsx`, `BaoGiaSidebar.tsx`, `XayMoiSidebar.tsx`, `AboutSection.tsx`, `AdsLandingPage.tsx`, `home-content.ts`, `seo.ts`, `site-settings.ts`, `seed-site-settings.ts`, `verify-posts.ts`, cùng các bài `cai-tao-nha-cu.ts`, `sua-nha-tron-goi-tphcm.ts`, `xay-nha-tron-goi-binh-duong.ts`, `bao-gia-xay-nha-tron-goi-phu-yen.ts`, `money-page-overrides-batch2.ts`.

Sinh lại, không sửa tay:

- `artifacts/api-server/middleware.js`
- `artifacts/api-server/public/known-paths.json`
- `artifacts/api-server/public/sitemap.seed.xml`

HTML prerender nằm trong `artifacts/sao-khue/dist/public` (git bỏ qua).

## 2. Redirect đã xóa, sửa, thêm

Đã gỡ quy tắc làm URL không năm không bao giờ là trang 200:

- Leaf override tự thêm `-2026` cho riêng slug dịch vụ `xay-nha-tron-goi-tphcm`.
- Route frontend và override canonical đang đẩy `/dich-vu/xay-nha-tron-goi-tphcm` sang `/dich-vu/xay-nha-tron-goi-tphcm-2026`.

Đã sửa đích, không xóa các redirect SEO khác. Mọi đích từng là URL dịch vụ có năm và đang dùng hằng `HUB_XAY_NHA` nay về `/dich-vu/xay-nha-tron-goi-tphcm`. Bình Dương và Đồng Nai không đổi.

Đã thêm, HTTP 301 một bước:

| Nguồn | Đích |
|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | `/dich-vu/xay-nha-tron-goi-tphcm` |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | `/tin-tuc/xay-nha-tron-goi-tphcm-2026` |
| `/dich-vu/xay-nha-tron-goi` | `/dich-vu/xay-nha-tron-goi-tphcm` (cặp này đã có, đích được sửa) |

Hai URL chuẩn có trong `KNOWN_PATHS` và không có khóa redirect. Luật fallback `xay-` chỉ chạy khi path không nằm trong map redirect và không nằm trong known paths, nên không bắt `/tin-tuc/xay-nha-tron-goi-tphcm-2026`.

Ngoài bảng yêu cầu, root và `/bai-viet/` vẫn 301 một bước: `/xay-nha-tron-goi-tphcm` và `/bai-viet/xay-nha-tron-goi-tphcm` về trang dịch vụ; `/xay-nha-tron-goi-tphcm-2026` và `/bai-viet/xay-nha-tron-goi-tphcm-2026` về bài tin tức. Đích là URL 200, không thành chuỗi.

## 3. Cách khôi phục trang dịch vụ không năm

Slug `xay-nha-tron-goi-tphcm`, category `dich-vu`, path công khai bằng `/${category}/${slug}`. Không còn lá `-2026`. Title SEO giữ đúng `Xây nhà trọn gói TPHCM 2026 từ 4,85tr` vì padder bỏ qua riêng slug này sau khi đã đệm description. H1 vẫn `Xây nhà trọn gói TPHCM`. Canonical, Open Graph và breadcrumb lấy path đó. Schema trang vẫn là `Service` vì điều kiện slug không đổi.

## 4. Cách tạo bài tin tức 2026

Bản ghi riêng `xayNhaTronGoiTphcm2026Tin`, slug `xay-nha-tron-goi-tphcm-2026`, category `tin-tuc`. `seoPost` đăng ký ngay sau bài dịch vụ. Path là `/tin-tuc/xay-nha-tron-goi-tphcm-2026`. Bài nằm trong known paths và sitemap seed vì không noindex.

Nội dung giải thích cách đọc đơn giá sàn ở đã có trên trang dịch vụ, việc cần gửi trước khi hỏi giá, khác biệt với sửa nhà và cải tạo, rồi trỏ mốc thanh toán và bảo hành về trang dịch vụ. Không chép bảng giá. Có liên kết tới trang dịch vụ, quy trình A–Z, `/bao-gia`, sửa nhà, cải tạo và bài công ty xây nhà phố.

Bộ viết lại bài dưới 1.500 từ đã bị chặn cho slug này. Nếu không chặn, nó thay toàn bộ bài bằng mẫu tự sinh, gồm tình huống gia đình và FAQ ghép từ tiêu đề.

## 5. HTTP status local

Gọi trực tiếp `middleware.js` với host `www.kientrucsaokhue.com`. Pass-through nghĩa là middleware không redirect và không 404; file HTML prerender tồn tại cho hai URL đó.

| URL | HTTP | Đích |
|---|---:|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm` |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 200 | chính URL |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 200 | chính URL |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | 301 | `/tin-tuc/xay-nha-tron-goi-tphcm-2026` |
| `/dich-vu/xay-nha-tron-goi` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm` |

Ba đích 301 ở trên đều pass-through khi gọi bước thứ hai. Không có vòng lặp. Route `App.tsx` cùng đích, nên lớp SPA không đẩy ngược về URL có năm.

Hồi quy cùng lần gọi: `/dich-vu/xay-nha-tron-goi-binh-duong`, `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z`, `/tin-tuc/xay-nha-100m2-tphcm`, `/tin-tuc/xay-nha-binh-thanh` đều pass-through.

## 6. Canonical, title, H1, robots

Hai file HTML prerender khác nhau: dịch vụ 32.307 byte, tin tức 14.055 byte.

Trang dịch vụ:

- Title: `Xây nhà trọn gói TPHCM 2026 từ 4,85tr`
- H1: `Xây nhà trọn gói TPHCM`
- Description: câu cũ bắt đầu bằng `Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở`
- Canonical và `og:url`: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm`
- Robots: `index,follow,max-image-preview:large`
- JSON-LD riêng của trang: `Service`, breadcrumb Dịch vụ, `FAQPage` và `HowTo` lấy từ bài dịch vụ sẵn có

Bài tin tức:

- Title: `Cập nhật xây nhà trọn gói TPHCM năm 2026 — Sao Khuê`
- H1: `Những điểm cần nắm khi xây nhà trọn gói tại TP.HCM năm 2026`
- Description: `Bài đọc năm 2026: phân biệt tin tức với trang đặt dịch vụ, và cách hiểu đơn giá sàn ở 4,85–6,7 triệu/m² cùng các khoản tách khỏi m².`
- Canonical và `og:url`: `https://www.kientrucsaokhue.com/tin-tuc/xay-nha-tron-goi-tphcm-2026`
- Robots: `index,follow,max-image-preview:large`
- JSON-LD riêng: một `BlogPosting`, một `BreadcrumbList` mục Tin tức. Không có schema `Service` của bài. `wordCount` 611

Cả hai trang vẫn có khối LocalBusiness/WebSite dùng chung của site. URL breadcrumb cuối của mỗi trang là đúng canonical của trang đó.

## 7. Sitemap

`artifacts/api-server/public/sitemap.seed.xml` có 209 loc. Đếm đúng một lần:

- `/dich-vu/xay-nha-tron-goi-tphcm`
- `/tin-tuc/xay-nha-tron-goi-tphcm-2026`

Không có URL dịch vụ có năm, URL tin tức không năm, hay `/dich-vu/xay-nha-tron-goi`.

209/209 path trong sitemap seed có file HTML prerender. Đây là sitemap seed local, lớn hơn sitemap production 142 loc đo lúc 19:38. Production chưa đổi.

`known-paths.json` có cả hai URL chuẩn. URL dịch vụ có năm không còn là known path; nó chỉ là khóa 301.

## 8. Liên kết nội bộ

Trước khi sửa, quét HTML production 19:38 trên 142 trang sitemap: 373 href tới `/dich-vu/xay-nha-tron-goi-tphcm-2026`, 0 href đúng URL dịch vụ không năm, 0 href bài tin tức.

Sau khi sửa, quét 209 HTML của sitemap seed:

| href | Số lần |
|---|---:|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 0 |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 442 |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 1 |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | 0 |
| `/dich-vu/xay-nha-tron-goi` | 0 |

442 và 373 không so trực tiếp vì tập trang khác nhau (209 seed so với 142 production). Liên kết tin tức duy nhất nằm trong thân trang dịch vụ, không nằm menu, footer hay sidebar.

## 9. Build và test

- `vite build` trong `artifacts/sao-khue`: thành công, 2.604 module, khoảng 1 phút 58 giây. Cảnh báo chunk lớn hơn 500 kB là cảnh báo sẵn của bundle.
- Prerender từ shell `#root` rỗng, không nối database: 6.918 trang HTML + `404.html`, exit 0. Lần prerender trước đó dùng nhầm `index.html` đã ghép làm khuôn nên bị hủy; số liệu HTML trong báo cáo này lấy từ lần dựng lại.
- `pnpm run typecheck` và `pnpm run build` trong `artifacts/api-server`: cả hai exit 0. Bundle `dist/index.mjs` và `dist/app.mjs`.
- Package frontend không có script test đơn vị. Không chạy `pnpm build` ở root vì typecheck monorepo đang lỗi sẵn, ngoài phạm vi URL này.
- Không commit, không push, không deploy.

## 10. Phần còn thiếu

- Production https://www.kientrucsaokhue.com/ vẫn là bản 19:38: cả hai URL mong muốn 301 một bước về `/dich-vu/xay-nha-tron-goi-tphcm-2026`. Source local chưa lên máy chủ.
- Search Console không được đọc lại. Lần đọc cùng ngày vẫn thấy Google giữ cả URL dịch vụ có năm và URL không năm. Đảo canonical này là thay đổi đường dẫn thứ ba; chưa có dữ liệu Google sau khi sửa source.
- Bài tin tức không có chỉ số thị trường 2026, số công trình mới, giấy phép hay ưu đãi riêng. Đơn giá 4,85–6,7 triệu/m², phần thô 3,55–3,8, bảo hành kết cấu 10 năm và hoàn thiện 12–36 tháng chỉ được nhắc lại từ trang dịch vụ. Bài dài 611 từ vì không dùng mẫu tự sinh để kéo dài.
- Ảnh bài tin tức lấy từ kho ảnh theo slug (`nha-2-tang-15.jpg`), không phải ảnh chụp mới cho bài này.

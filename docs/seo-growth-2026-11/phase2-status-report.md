# Trạng thái Phase 2 — kiểm tra ngày 6/11/2026

Nhánh `seo/pillar-onpage-tphcm`, ngang commit `94a9c4a` với `origin`. `git diff` và `git diff --stat` không có dòng nào. Không có file đã sửa hoặc đã xóa trong vùng theo dõi. Không chạy build, không deploy, không sửa code.

## A. Tổng quan

Phase 2, hiểu là ba việc menu còn trong danh sách chờ duyệt, **chưa thực hiện**.

Phase 1 **đã có trong commit `94a9c4a` và đã có trên HTML production** của ba hub và trang trụ cột. Working tree không còn diff của Phase 1.

## B. Từng hạng mục

| Hạng mục | File | Trạng thái | Bằng chứng |
|---|---|---|---|
| Prerender không ghi đè `/bao-gia`, `/thiet-ke`, `/xay-moi` | `artifacts/sao-khue/scripts/prerender-html.ts` dòng 447 và 781–785 | Hoàn thành | `reservedPaths` lấy path từ `buildStaticPages()`, `buildMenuSubPages()` bỏ qua path đó |
| Title, H1, description, canonical, robots của ba hub | HTML production, đọc trước JavaScript | Hoàn thành | Xem mục HTML bên dưới |
| Menu “BÁO GIÁ XÂY NHÀ” | `artifacts/sao-khue/src/lib/menu.ts` dòng 35 và 51 | Chưa thực hiện | Nhãn vẫn là “BÁO GIÁ THIẾT KẾ”, href `/bao-gia`. Không có chuỗi “BÁO GIÁ XÂY NHÀ” trong repo |
| Menu “KINH NGHIỆM XÂY MỚI” giữ `/xay-moi` | `menu.ts` dòng 64 và `site-settings.ts` dòng 591–594 | Chưa hoàn thành | Trong `menu.ts` href là `/xay-moi`. `withTurnkeyNavLabel()` đổi href đó thành URL trụ cột khi render menu |
| Menu CẢI TẠO bỏ `/cai-tao-nha` | `menu.ts` dòng 86–95 và 105 | Chưa thực hiện | Mục cha trỏ `/dich-vu/sua-nha-tron-goi-tphcm`. Ba mục con và một mục cẩm nang vẫn trỏ landing noindex `/cai-tao-nha` |
| `generate_lead` sau khi gửi lead thành công | `QuoteRequestModal.tsx` dòng 87–95 | Hoàn thành trong mã | `trackAdsConversion("lead", { source: "quote_popup" })` nằm sau `await submitContactLead`. Thiếu tên hoặc số, hoặc đang gửi, thì return trước. Nhánh lỗi không gọi tracking |
| Không đưa tên, số điện thoại vào GA4 | Cùng file, tham số chỉ có `source` | Hoàn thành đối với sự kiện | Toast vẫn hiện tên và số trên màn hình người vừa gửi. Đó không phải payload gtag |
| Không bắn `generate_lead` hai lần | `ads-conversions.ts` | Hoàn thành cho tên sự kiện | Một lần `gtag("event", "generate_lead")`. Nếu có ID và label Ads thì thêm một event `conversion`. Không có lần `generate_lead` thứ hai |
| Giờ làm việc | `Contact.tsx`, `home-content.ts` | Hoàn thành | “Thứ 2–thứ 7, 8:00–17:30”. Số điện thoại không đổi trong các dòng đã đọc |
| `dateModified` trụ cột | `prerender-html.ts` dòng 545–557, `index.ts` dòng 858–859 | Hoàn thành | Seed `2026-11-05T11:00:00.000Z`. HTML production: `"dateModified":"2026-11-05"`. Không còn `2026-10-21` |
| Canonical, sitemap, robots, middleware | Không có diff | Giữ nguyên trong lần kiểm tra này | Không thấy sửa `middleware.js`, `robots.txt` hay file sitemap trong working tree |
| URL và H1 trụ cột | Bài `xay-nha-tron-goi-tphcm.ts` và HTML production | Giữ nguyên | URL 2026. H1 “Xây nhà trọn gói TPHCM”. Title “Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê”. Canonical tự trỏ. Robots `index,follow,max-image-preview:large` |
| Hai URL cũ | HTTP production | Không đảo | Cả `/dich-vu/xay-nha-tron-goi` và `/dich-vu/xay-nha-tron-goi-tphcm` trả 301 về URL 2026 |

## HTML ba hub trên production

Đọc file HTML trả về, không đợi React chạy.

| URL | Title | H1 | Description | Canonical | Robots |
|---|---|---|---|---|---|
| `/bao-gia` | Dự toán chi phí xây nhà \| Kiến Trúc Sao Khuê | Dự toán chi phí xây nhà | Máy tính chi phí xây nhà tại TP.HCM: phần thô từ 3,55 triệu/m², trọn gói từ 4,85 triệu/m². Số hợp đồng chốt sau khi khảo sát. | tự trỏ `/bao-gia` | index,follow,max-image-preview:large |
| `/thiet-ke` | Thiết kế nhà phố TP.HCM \| Kiến Trúc Sao Khuê | Thiết kế nhà phố TP.HCM | Thiết kế nhà phố TP.HCM: mặt bằng 2D/3D, biệt thự và nhà ống. Tối ưu công năng trước khi xây, khảo sát miễn phí. | tự trỏ `/thiet-ke` | index,follow,max-image-preview:large |
| `/xay-moi` | Kinh nghiệm xây nhà mới \| Kiến Trúc Sao Khuê | Kinh nghiệm xây nhà mới | Bài kinh nghiệm xây nhà mới: nhà phố, biệt thự, nhà cấp 4 tại TP.HCM. Đơn giá trọn gói nằm ở trang dịch vụ. | tự trỏ `/xay-moi` | index,follow,max-image-preview:large |

Ba title kỳ vọng đều có trong HTML đang chạy.

## C. Việc còn lại

1. Chưa đổi “BÁO GIÁ THIẾT KẾ” thành “BÁO GIÁ XÂY NHÀ”.
2. Menu đang render không giữ `/xay-moi`, vì `withTurnkeyNavLabel()` ghi đè href.
3. Bốn liên kết menu vẫn mở `/cai-tao-nha`: CẢI TẠO NHÀ CŨ, CẢI TẠO NHÀ PHỐ, CẢI TẠO MẶT TIỀN, Cẩm nang cải tạo nhà.
4. Chưa bấm form trên trình duyệt trong lần kiểm tra này, nên sự kiện `generate_lead` mới được xác nhận bằng thứ tự trong mã, chưa bằng DebugView.
5. Google Ads vẫn cần `VITE_GOOGLE_ADS_ID` và `VITE_GOOGLE_ADS_CONV_LEAD` nếu muốn event `conversion`. Mã không tự điền hai giá trị này.

## D. Build và test

Không chạy build. Lệnh build của app còn sinh sitemap và middleware. Lần kiểm tra này không được ghi đè file.

`artifacts/sao-khue/package.json` không có script `test`. Không chạy test.

Bằng chứng prerender dùng cho báo cáo là HTML production vừa tải, khớp title trong `seo.ts`.

## E. Working tree

Không có thay đổi đã theo dõi. `git diff` rỗng.

Chưa commit, không thuộc Phase 1 hay Phase 2:

- `docs/seo-growth-2026-11/`
- `docs/ads-seo-7m/` gồm file SerpAPI và CSV thứ hạng
- `scripts/audit-*.mjs`, `scripts/audit-*.json`, `scripts/audit-thin-out.txt`, `scripts/check-phuyen.mjs`

## F. Bước tiếp theo

Phase 2 chỉ nên làm sau khi chủ site duyệt đổi menu. Việc đó gồm sửa `menu.ts` và bỏ đoạn đổi href `/xay-moi` trong `withTurnkeyNavLabel()`, nếu không menu vẫn đưa “KINH NGHIỆM XÂY MỚI” sang trụ cột. Chưa duyệt thì giữ nguyên.

Không đổi URL 2026, H1, canonical hay redirect trong bước đó.

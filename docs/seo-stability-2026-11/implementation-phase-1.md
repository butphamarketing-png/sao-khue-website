# Triển khai phase 1 — bốn lỗi đã duyệt

Ngày sửa: 6/11/2026. Sửa local. Chưa deploy production.

URL trụ cột không đổi: https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026  
`middleware.js` không đổi. `sitemap.seed.xml` được build ghi lại rồi đã hoàn nguyên, vì sitemap không nằm trong bốn hạng mục.

## File đã sửa

| File | Hạng mục |
|---|---|
| `artifacts/sao-khue/scripts/prerender-html.ts` | SK-01, SK-03 |
| `artifacts/sao-khue/src/lib/home-content.ts` | SK-02 |
| `artifacts/sao-khue/src/pages/Contact.tsx` | SK-02 |
| `lib/seed-content/src/articles/ve-chung-toi.ts` | SK-02, chỉ câu hotline |
| `artifacts/sao-khue/src/components/QuoteRequestModal.tsx` | SK-04 |

Không sửa SK-05 đến SK-09. Không sửa giá, địa chỉ, tên pháp lý, redirect.

## SK-01 — Prerender không ghi đè ba trang

`buildStaticPages()` vẫn tạo `/bao-gia`, `/xay-moi`, `/thiet-ke`. `buildMenuSubPages()` nhận tập path đó và `continue` khi menu trỏ đúng các path đã có trang tĩnh. Menu các bài khác giữ nguyên.

HTML sau build, trong `artifacts/sao-khue/dist/public`:

| URL | Title | H1 | Canonical | Robots |
|---|---|---|---|---|
| `/bao-gia` | Dự toán chi phí xây nhà \| Kiến Trúc Sao Khuê | Dự toán chi phí xây nhà | tự trỏ `/bao-gia` | index,follow |
| `/xay-moi` | Kinh nghiệm xây nhà mới \| Kiến Trúc Sao Khuê | Kinh nghiệm xây nhà mới | tự trỏ `/xay-moi` | index,follow |
| `/thiet-ke` | Thiết kế nhà phố TP.HCM \| Kiến Trúc Sao Khuê | Thiết kế nhà phố TP.HCM | tự trỏ `/thiet-ke` | index,follow |

Description lần lượt là máy tính chi phí, bài kinh nghiệm, và thiết kế nhà phố. Không còn “BÁO GIÁ THIẾT KẾ”, “KINH NGHIỆM XÂY MỚI”, “THIẾT KẾ NHÀ ĐẸP TP.HCM” trong title.

## SK-02 — Giờ làm việc

Đã bỏ câu hotline 24/7 ở nhãn hotline, hai subtitle liên hệ, meta `/lien-he`, dòng giờ trên trang liên hệ, FAQ liên hệ, và một mục hotline trong bài giới thiệu. Số 0909 075 668 và email giữ nguyên. Câu “báo giá trong 24–48 giờ” là thời gian phản hồi, không phải tổng đài đêm, nên giữ.

HTML `/lien-he` sau build: description “Thứ 2–thứ 7, 8:00–17:30 — khảo sát miễn phí — báo giá trong 24–48 giờ.”

## SK-03 — dateModified

Ngày cứng `2026-10-21` trong schema và trong `mergeSeedSeo` đã bỏ. Ngày lấy từ `getFallbackPost()` trong `lib/seed-content/src/index.ts`: slug trụ cột có `updatedAt` `2026-11-05T11:00:00.000Z`. Đó là ngày nội dung trong seed, không phải ngày build. Không đổi `datePublished`.

Schema HTML sau build: `"dateModified":"2026-11-05"`. Title và H1 trụ cột giữ nguyên.

## SK-04 — generate_lead

`QuoteRequestModal` gọi `trackAdsConversion("lead", { source: "quote_popup" })` chỉ sau khi `submitContactLead` trả thành công. Hàm có sẵn map `lead` sang event `generate_lead`.

Không gọi khi thiếu tên hoặc số điện thoại, khi đang gửi, hoặc khi API lỗi. Tham số gửi đi chỉ có `source`. Không có tên, số điện thoại, địa chỉ. Không thêm `console.log`.

Google Ads chỉ bắn nếu môi trường đã có `VITE_GOOGLE_ADS_ID` dạng `AW-…` và `VITE_GOOGLE_ADS_CONV_LEAD`. Không bịa hai giá trị này. Nếu thiếu, event GA4 vẫn được khai báo, conversion Ads không gửi. Dự án không có lớp consent analytics. Tracking đi cùng đường các nút gọi và Zalo đang dùng.

Chưa bấm form trên production và không gửi lead giả.

## Build và lint

`pnpm --filter @workspace/sao-khue run build` thoát mã 0. Vite 7.3.2, prerender ghi HTML, gồm ba hub và trang trụ cột.

Không có ESLint trong repo. Không chạy lint.

## Trang trụ cột sau build

- Title: Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê
- H1: Xây nhà trọn gói TPHCM
- Canonical: URL 2026
- Robots: index,follow
- Không còn `2026-10-21` trong file HTML đó

## Chưa xong

- Production vẫn là bản cũ cho đến khi chủ site deploy. Chưa deploy.
- Sau deploy, xem HTML gốc của `/bao-gia`, `/xay-moi`, `/thiet-ke`, `/lien-he` và URL 2026. Không chỉ nhìn title sau khi React chạy.
- GA4 DebugView: gửi một lead thật từ form, kiểm event `generate_lead` và chắc payload không có số điện thoại.
- Nếu cần conversion Ads, điền label có sẵn trong môi trường Vercel. Không đoán label.
- `artifacts/api-server/scripts/seed-site-settings.ts` còn một chuỗi 24/7 nhưng file đang lỗi mã hóa. Không sửa trong phase này vì không phải nguồn HTML đang prerender.
)

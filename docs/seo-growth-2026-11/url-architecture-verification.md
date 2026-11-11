# Kiểm tra cấu trúc URL dịch vụ và tin tức

Đo production: 10/11/2026, 19:38 giờ Việt Nam.  
Không sửa source, không commit, không deploy, không mở Search Console trong lần này.

Cấu trúc được nêu để đối chiếu:

- Trang dịch vụ lâu dài: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm`
- Bài tin tức năm 2026: `https://www.kientrucsaokhue.com/tin-tuc/xay-nha-tron-goi-tphcm-2026`

URL thứ ba đang là bản 200 duy nhất của cụm này: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026`.

## 1. HTTP và redirect

Đo bằng HTTP, không để trình duyệt tự nhảy. Cả hai URL được hỏi đều hết một bước tại URL dịch vụ có năm. Không có vòng lặp. Không có header `X-Robots-Tag`.

| URL gọi | Status đầu | Location | Bước tới 200 | Trang 200 cuối |
|---|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL dịch vụ có năm |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL dịch vụ có năm |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 200 | không có | 0 | chính URL này |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL dịch vụ có năm |
| `/dich-vu/xay-nha-tron-goi` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL dịch vụ có năm |

Hai URL được nêu không trả hai tài liệu khác nhau. Cả hai mở cùng HTML 36.922 byte của trang dịch vụ có năm.

## 2. Canonical, title, H1, mô tả, robots

Các trường dưới đây lấy từ HTML của trang 200 sau redirect. Vì đích cuối trùng nhau, hai URL được hỏi có cùng bộ thẻ.

| Mục | Giá trị trên trang 200 |
|---|---|
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê |
| H1 | Xây nhà trọn gói TPHCM |
| Meta description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở. Một hợp đồng: thiết kế, phần thô, hoàn thiện. Khảo sát miễn phí, bảo hành kết cấu 10 năm. |
| Canonical | `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| Robots | `index,follow,max-image-preview:large` |

Không có bản HTML riêng cho `/tin-tuc/xay-nha-tron-goi-tphcm-2026`, nên URL tin tức không có canonical riêng. Canonical duy nhất của cụm này là URL dịch vụ có năm.

## 3. Sitemap

`https://www.kientrucsaokhue.com/sitemap.xml` trả 200, 142 địa chỉ.

| URL | Có trong sitemap |
|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm` | Không |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | Không |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Có, 1 lần |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | Không |
| `/dich-vu/xay-nha-tron-goi` | Không |

## 4. Liên kết nội bộ trên HTML production

Quét 142 URL sitemap, tất cả trả 200.

| Href | Số lần trên 142 trang |
|---|---:|
| `/dich-vu/xay-nha-tron-goi-tphcm` đúng path, không kèm `-2026` | 0 |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 0 |
| `/tin-tuc/xay-nha-tron-goi-tphcm` | 0 |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 373 |

Trang dịch vụ có năm tự chứa 7 href tới chính nó. Trang chủ 3, `/bao-gia` 2, `/xay-nha` 2. Bài quy trình và bài công ty xây nhà phố mỗi bài 3. Không có href production nào tới URL tin tức năm 2026.

## 5. Source có gộp hai URL không

Có. Không có bài seed slug `xay-nha-tron-goi-tphcm-2026`. Bài duy nhất là `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts`, đăng ký ở `lib/seed-content/src/index.ts` với category `dich-vu`, slug `xay-nha-tron-goi-tphcm`.

`artifacts/sao-khue/src/lib/post-url.ts` dòng 11 đổi leaf của slug đó thành `xay-nha-tron-goi-tphcm-2026`. Đường dẫn công khai của bài dịch vụ vì vậy là `/dich-vu/xay-nha-tron-goi-tphcm-2026`.

Redirect tường minh từ URL dịch vụ không năm sang URL dịch vụ có năm:

- `artifacts/api-server/middleware.js` dòng 207
- `artifacts/sao-khue/src/App.tsx` dòng 67–68
- `artifacts/sao-khue/src/lib/legacy-redirects.ts` dòng 33
- `lib/seed-content/src/sitemap-policy.ts` dòng 40 và 183, hằng `HUB_XAY_NHA`

URL tin tức không năm cũng bị trỏ vào hub dịch vụ có năm: `App.tsx` dòng 76–77 và `sitemap-policy.ts` dòng 184.

URL tin tức có năm không có dòng redirect riêng. Production vẫn 301 vì `known-paths.json` chỉ chứa `/dich-vu/xay-nha-tron-goi-tphcm-2026`, không chứa path tin tức. `middleware.js` dòng 726–738: path chưa biết trong `/tin-tuc`, `/bai-viet`, `/dich-vu`, `/cong-trinh`, nếu đoạn cuối bắt đầu bằng `xay-`, nhận 301 về hub dịch vụ có năm. `/tin-tuc/xay-nha-tron-goi-tphcm-2026` rơi vào luật này.

Menu, footer, sidebar và `seo.ts` ghi href URL dịch vụ có năm. Source bài viết còn 165 href path dịch vụ không năm; hàm `rewriteRetiredHrefsInHtml()` đổi chúng sang URL dịch vụ có năm trước khi HTML ra production. Kết quả là 0 href path không năm trên sitemap, như mục 4.

Không thấy href source tới `/tin-tuc/xay-nha-tron-goi-tphcm-2026`.

Chiều redirect thực tế là tin tức và URL dịch vụ không năm cùng đổ về URL dịch vụ có năm. Không có redirect từ trang dịch vụ sang bài tin tức.

## 6. Trang cùng vùng ý định

| URL | Production | Ý định nhìn từ title và H1 | Quan hệ với cụm dịch vụ |
|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 200, index, canonical tự trỏ | Thuê xây trọn gói tại TP.HCM, có báo giá | Bản đang phục vụ |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301 về bản trên | Không còn tài liệu riêng | Đã gộp |
| `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | 301 về bản trên | Không còn tài liệu riêng | Đã gộp bởi luật path chưa biết |
| `/` | 200, index. H1 “Nhà thầu xây nhà phố và biệt thự TPHCM” | Tìm đơn vị | Khác H1, có link sang bản dịch vụ có năm |
| `/bao-gia` | 200, index. H1 “Dự toán chi phí xây nhà” | Cách tính tiền | Hỗ trợ, có link sang bản dịch vụ có năm |
| `/xay-nha` | 200, `noindex,follow`. H1 “Xây nhà trọn gói chìa khóa trao tay” | Quảng cáo, cụm rộng | H1 gần cụm chính. HTML chặn index |
| `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | 200, index. H1 quy trình A–Z | Các bước thi công | Bài hỗ trợ, canonical riêng, link sang dịch vụ |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | 200, index. H1 tiêu chí chọn đơn vị | Cách chọn nhà thầu | Bài hỗ trợ, canonical riêng |
| `/tin-tuc/xay-nha-gia-re-tphcm` | 301 về URL dịch vụ có năm | Không còn bài 200 | Cùng kiểu gộp hub |

Search Console không được đọc lại trong lần này. Số đã ghi ở mục 10 của `comprehensive-pillar-audit.md` vẫn là lần đọc 10/11: URL dịch vụ có năm đã index và được chọn canonical; URL dịch vụ không năm vẫn còn bản index từ lần thu thập 30/10; truy vấn chính xác “xây nhà trọn gói tphcm” vẫn ghi nhận trên URL dịch vụ không năm. Những số đó không phải kết quả HTTP của mục 1.

## 7. Trả lời

1. Hai URL hiện không hoạt động độc lập. Cả hai 301 một bước tới `/dich-vu/xay-nha-tron-goi-tphcm-2026` và dùng chung một HTML.
2. Không có redirect từ trang dịch vụ sang bài tin tức. Có redirect ngược lại: URL tin tức năm 2026 và URL dịch vụ không năm đều về URL dịch vụ có năm. URL tin tức có năm bị gộp bởi luật path chưa biết trong `middleware.js`, không bởi một dòng map riêng.
3. Canonical đang được đặt là `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026`. Sitemap và 373 href production cùng trỏ URL đó.
4. Có lệch với cấu trúc vừa nêu: trang dịch vụ lâu dài không còn là bản 200, và chưa có bài tin tức riêng tại `/tin-tuc/xay-nha-tron-goi-tphcm-2026`. Đây là cấu hình source hiện tại, không phải lỗi phát sinh ngẫu nhiên trên server.
5. Chưa sửa. Nếu duyệt tách hai URL, thứ tự đề xuất là: đọc lại Search Console trước khi đụng redirect; thêm bài tin tức riêng với title và H1 khác trang dịch vụ, đưa path vào `known-paths` để luật `xay-` không 301 nó; sau đó mới quyết định URL dịch vụ nào trả 200 và URL nào 301. Đảo canonical dịch vụ từ bản có năm về bản không năm là lần đổi path thứ ba, trong lúc Google còn giữ cả hai URL dịch vụ. Không làm bước này trước khi có lệnh duyệt.

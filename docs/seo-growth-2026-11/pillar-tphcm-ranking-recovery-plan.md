# Kế hoạch khôi phục thứ hạng trang xây nhà trọn gói TP.HCM

Ngày kiểm tra: 8/11/2026.  
Nhánh `seo/pillar-onpage-tphcm`. HEAD `0c4e5d07f0bbe2c0ba43409229dbe70c42590e00`.  
Không sửa source, không commit, không deploy.  
Production được đo trực tiếp cùng ngày. Commit `0c4e5d0` mới lên GitHub, chưa phải bản đang chạy trên www. Commit này không sửa bài trụ cột.

## 1. Tóm tắt

URL người dùng đang mở, `/dich-vu/xay-nha-tron-goi-tphcm`, trên production trả **301 một bước** tới `/dich-vu/xay-nha-tron-goi-tphcm-2026`. URL ngắn `/dich-vu/xay-nha-tron-goi` cũng 301 một bước tới cùng đích. URL 2026 trả 200, title `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`, H1 `Xây nhà trọn gói TPHCM`, canonical tự trỏ, robots `index,follow,max-image-preview:large`.

Cụm “từ 4,85tr” từng nằm trong title từ 21:50 ngày 21/10 đến 14:46 ngày 30/10, trên URL không năm. 17 phút sau, path chuyển sang URL 2026. Title hiện tại không còn cụm đó. Mô tả vẫn có “từ 4,85 triệu/m² sàn ở”.

File Search Console 4/8–3/11 không có dòng trang cho URL 2026. Truy vấn “xây nhà trọn gói tphcm” trong kỳ đó: 2 nhấp, 127 hiển thị, vị trí 53,54. Hai URL cũ cộng 10 nhấp, vị trí khoảng 36–39. Chưa có lần xuất Search Console mới sau 3/11, nên chưa đo được thứ hạng hôm nay.

## 2. Lịch sử thay đổi URL

| Thời điểm | Commit | Thay đổi | URL bị ảnh hưởng | Rủi ro SEO |
|---|---|---|---|---|
| 19/10 16:12 | `42dbeae` | Link toàn site của cụm xây nhà trọn gói TP.HCM gom về trang dịch vụ | Hub dịch vụ lúc đó | Gom tín hiệu, chưa đổi path năm 2026 |
| 21/10 21:50 | `5f8f546` | Tách URL riêng cho cụm chính. Title `Xây nhà trọn gói TPHCM 2026 từ 4,85tr \| Sao Khuê` | `/dich-vu/xay-nha-tron-goi-tphcm` | Path mới so với URL ngắn trước đó |
| 21/10 22:05 | `384f52d` | Một mức giá trên trang này, giảm cạnh tranh từ trang chủ | Cùng URL không năm | Title và trang chủ cùng đổi trong một buổi |
| 30/10 14:46 | `2d0bc3e` | Bỏ “từ 4,85tr” khỏi title | Vẫn URL không năm | Snippet mất móc giá sau 9 ngày |
| 30/10 15:03 | `341695b` | Canonical và path chuyển sang URL có `-2026`. Title `Xây nhà trọn gói TPHCM 2026 \| Kiến Trúc Sao Khuê` | Cả ba URL | Đổi path lần hai trong 9 ngày, cùng ngày với lần đổi title |
| 6/11 15:47 | `aff1b72` | Title thành `Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê`. Các hub khác thôi giành cụm này | URL 2026 | Thêm một lần đổi title khi URL mới còn mới |
| 7/11 16:12 | `c52af8f` | Menu, footer, sidebar. Href trụ cột vẫn là URL 2026 | Menu | Không đổi URL trụ cột |
| 8/11 21:22 | `0c4e5d0` | Sửa nhà, Bình Dương, cải tạo, `/bao-gia`, một link và ALT bài Phú Yên | Không đụng bài trụ cột | Chưa deploy. Không giải thích được thứ hạng production hôm nay |

Việc một commit đứng trước lúc thấy tụt hạng không đủ để kết luận commit đó là nguyên nhân. Hai việc xảy ra cùng buổi 30/10 có bằng chứng kỹ thuật mạnh hơn: URL 200 đổi chỗ, và title đổi.

## 3. Ba URL trên production, đo 8/11/2026

| | URL ngắn | URL không năm | URL 2026 |
|---|---|---|---|
| Path | `/dich-vu/xay-nha-tron-goi` | `/dich-vu/xay-nha-tron-goi-tphcm` | `/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| HTTP | 301 | 301 | 200 |
| `Location` | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | cùng đích | không redirect |
| Số bước | 1 | 1 | 0 |
| Vòng lặp | không | không | không |
| Canonical HTML | không có, vì không trả HTML 200 | không có | `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| Robots | không có header `X-Robots-Tag` | không có | `index,follow,max-image-preview:large` |
| Title | — | — | `Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê` |
| H1 | — | — | `Xây nhà trọn gói TPHCM` |
| Nội dung chính | không, chỉ redirect | không, chỉ redirect | có. Mô tả mở bằng giá 4,85 triệu/m² sàn ở |
| noindex | không thấy trên response 301 | không thấy | không |
| Sitemap production | không có trong 142 `<loc>` | không có | có |
| Hai URL 200 trùng nội dung | không | không | chỉ một bản 200 |

Source khớp production: `HUB_XAY_NHA` và `CANONICAL_PATH_OVERRIDES` trong `lib/seed-content/src/sitemap-policy.ts` trỏ hai path cũ về URL 2026. `legacy-redirects.ts` cũng trỏ hai path này về URL 2026.

`robots.txt` production: `Allow: /`, chặn `/admin` và `/api/`, khai báo sitemap www. Không chặn ba URL trên.

## 4. Canonical và redirect

Canonical của trang 200 tự trỏ. Không có canonical nào trong HTML 200 của trụ cột trỏ sang URL khác. Hai URL cũ không còn là trang 200 nên không khai báo canonical riêng.

Redirect là một bước, `Location` tương đối, cùng host. Không thấy chuỗi hai bước và không thấy vòng lặp khi gọi riêng URL đích.

## 5. Nội dung trang trụ cột

Đã đọc `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts` và HTML production.

Title và H1 khớp cụm “xây nhà trọn gói TPHCM”. Năm 2026 nằm ở title, mô tả và mục giá, không nằm trong H1. Đoạn đầu nói một hợp đồng gồm khảo sát, thiết kế, thô, hoàn thiện. Các H2 có dịch vụ, báo giá, hạng mục, lý do chọn, vật liệu, số tầng, thi công theo quận, quy trình, thanh toán, giấy phép, phát sinh, công trình, FAQ, liên hệ.

Người tìm dịch vụ thấy được việc làm, khu vực TP.HCM, mốc 4,85 triệu/m² sàn ở, việc gồm và việc tách, cách khảo sát. Đây không phải trang mỏng. Commit thương mại 8/11 không viết lại bài này.

Chưa đánh giá lại schema JSON-LD trong lần đo HTTP này. Lần đo chỉ lấy title, mô tả, robots, canonical và H1.

## 6. Cannibalization

| URL | Title production hoặc source | H1 | Cụm | Ý định | Mức cạnh tranh với trụ cột |
|---|---|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | Xây nhà trọn gói TPHCM | xây nhà trọn gói TPHCM | Thuê xây | Trang nên giữ |
| `/dich-vu/xay-nha-tron-goi` | không có, 301 | — | cùng cụm lịch sử | — | Đã gom |
| `/dich-vu/xay-nha-tron-goi-tphcm` | không có, 301 | — | cùng cụm | — | Đã gom. Google có thể vẫn lưu bản cũ |
| `/` | Kiến Trúc Sao Khuê \| nhà phố, biệt thự TPHCM | Nhà thầu xây nhà phố và biệt thự TPHCM | thương hiệu, nhà phố | Tìm đơn vị | Thấp. H1 khác cụm chính. 4 link trong HTML trỏ URL 2026 |
| `/bao-gia` | Dự toán chi phí xây nhà \| Kiến Trúc Sao Khuê | Dự toán chi phí xây nhà | báo giá, dự toán | Hỏi cách tính | Hỗ trợ. Không phải trang dịch vụ |
| `/xay-nha` | Xây nhà trọn gói chìa khóa trao tay \| Kiến Trúc Sao Khuê | Xây nhà trọn gói chìa khóa trao tay | cụm rộng | Quảng cáo | `noindex,follow`. 3 link tới URL 2026 |
| `/tin-tuc/xay-nha-4-tang-tphcm` | không đo title vì response là 301 | — | xây nhà 4 tầng | Biến thể | 301 về URL 2026 |
| `/tin-tuc/xay-nha-binh-thanh` | Xây nhà Bình Thạnh 2026 từ 4,85tr \| Sao Khuê | Xây Nhà Bình Thạnh — Gần Văn Phòng Sao Khuê, Am Hiểu Hiện Trường | xây nhà Bình Thạnh | Quận | Hỗ trợ. 6 link tới URL 2026, 0 link URL cũ trong HTML |
| `/dich-vu/xay-nha-tron-goi-binh-duong` | trang địa phương | Xây nhà trọn gói Bình Dương trên source đã commit | Bình Dương | Tỉnh khác | Không giành cụm TP.HCM nếu link về trụ cột |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | Báo Giá Xây Nhà Trọn Gói Phú Yên 2026 \| Chi Tiết \| Sao Khuê | giữ nguyên trong commit 8/11 | Phú Yên | Tỉnh khác | Không gộp về TP.HCM |

Trang nên là trụ cột: URL 2026. Trang quận và `/bao-gia` nên hỗ trợ. Landing `/xay-nha` nên tiếp tục noindex. Không tạo thêm URL cùng cụm.

## 7. Internal link

Menu trong `menu.ts` và footer trỏ `XÂY NHÀ TRỌN GÓI TPHCM` tới URL 2026.

Nhiều bài trong `money-page-overrides.ts` và `money-page-overrides-batch2.ts` vẫn viết `href="/dich-vu/xay-nha-tron-goi-tphcm"`. `rewriteRetiredHrefsInHtml()` đổi href đó thành URL 2026 trước khi xuất HTML và trước khi React vẽ thân bài. Ba trang production vừa đo có 0 href URL cũ và có href URL 2026: trang chủ 4, Bình Thạnh 6, `/xay-nha` 3.

Source và HTML đã render khác nhau. Nếu một đường render bỏ hàm rewrite, link 301 sẽ lộ lại. Đó là nợ kỹ thuật, chưa thấy trên ba HTML production vừa tải.

## 8. Technical SEO

HTML production của URL 2026 đã có title, mô tả, H1, canonical và robots trong response đầu, không phụ thuộc việc chờ JavaScript để những thẻ này xuất hiện. Hai URL cũ không có bản HTML 200.

Sitemap www: 142 URL, có URL 2026, không có hai URL 301. Không đo tốc độ và không đo dung lượng ảnh trong lần này. Không thấy 404 trên ba URL trụ cột.

## 9. Nguyên nhân

| Nguyên nhân | Bằng chứng | Độ chắc chắn | Mức ảnh hưởng | Ưu tiên |
|---|---|---|---|---|
| Đổi URL 200 hai lần trong 9 ngày, lần cuối 30/10 15:03 | Git `5f8f546`, `341695b`. Production hôm nay vẫn 301 về URL 2026 | Đã xác minh sự kiện. Chưa có thứ hạng từng ngày để gán đúng số bậc tụt | Cao | P0 để theo dõi, không phải để đảo URL |
| Google còn lưu URL không năm sau khi URL đó đã 301 | Phiên Search Console 7/11: URL 2026 đã index, canonical Google là chính URL đó, crawl 03:37 ngày 7/11. URL không năm vẫn “đã lập chỉ mục”, crawl 30/10, canonical Google lúc đó là chính URL cũ. Chưa kiểm tra lại ngày 8/11 | Dấu hiệu mạnh, dữ liệu cũ một ngày | Cao | P0: đo lại, chưa sửa site |
| Title đổi ba lần: có “4,85tr”, rồi bỏ, rồi “Báo giá Sao Khuê” | `5f8f546`, `2d0bc3e`, `aff1b72` | Đã xác minh các lần đổi. Chưa có thử nghiệm tách riêng tác động của title khỏi tác động của đổi URL | Trung bình | P2. Không đổi title lần nữa trong lúc Google đang hợp canonical |
| File Search Console tới 3/11 chưa ghi nhận trang URL 2026 | `gsc-performance-analysis.md`: 0 dòng trang. Hai URL cũ 6+4 nhấp, vị trí 36,54 và 39,08 | Đã xác minh cho kỳ đó. Không phải thứ hạng hôm nay | Cao với kỳ cũ. Không kết luận vị trí hiện tại | P0: xuất GSC mới |
| Bài source còn href URL cũ | Hàng chục href trong money overrides. HTML production của 3 trang mẫu đã được rewrite | Đã xác minh cả hai vế. Chưa thấy href cũ trên HTML vừa tải | Thấp nếu rewrite luôn chạy | P2 |

Không có bằng chứng trong source hoặc trong file GSC đã lưu để kết luận một bản cập nhật thuật toán là nguyên nhân.

Truy vấn “xây nhà trọn gói tphcm” trong kỳ 4/8–3/11 đã ở vị trí 53,54. Kỳ đó gần như ghi trên URL cũ. Không có số liệu trong repo cho thấy cụm này từng ở trang 1 rồi rơi sau 30/10.

## 10. Ba phương án

### A. An toàn

Giữ URL 2026, giữ 301 một bước, giữ canonical tự trỏ, giữ title và H1 hiện tại.

Việc được phép làm sau, khi có số GSC mới: sửa href trong source cho khớp HTML đã rewrite, để khỏi phụ thuộc hàm rewrite. Không đổi path. Không thêm redirect. Không viết lại bài trụ cột.

### B. Hợp nhất có kiểm soát

Chỉ xét khi lần URL Inspection mới cho thấy Google vẫn chọn URL không năm làm canonical của trang đang index, sau khi đã crawl bản 301.

Khi đó việc cần mô tả trước khi làm: giữ URL 2026 là URL 200 duy nhất, giữ 301 một bước, không đảo chiều. Xin lập chỉ mục URL 2026. Không xin lập chỉ mục URL đang 301. Rollback là không đảo redirect.

Đảo 2026 về URL không năm không thuộc phương án này. Đó là đổi path lần thứ ba.

### C. Tái cấu trúc

Đưa URL không năm trở lại làm 200 và 301 URL 2026 về đó. Tài liệu `URL_STRATEGY_SAO_KHUE.md` ngày 6/11 đã ghi rủi ro: Google gỡ URL đang 301 trước khi URL mới được crawl. Phiên 7/11 cho thấy Google đã chọn URL 2026 làm canonical của chính URL đó. Đảo chiều lúc này có thể bỏ đúng URL vừa được nhận. Không làm.

## 11. Phương án khuyến nghị

Phương án A. Giữ hậu tố `-2026`.

## 12. Lộ trình

| Thứ tự | Công việc | Ưu tiên | Lợi ích | Rủi ro | Điều kiện |
|---|---|---|---|---|---|
| 1 | URL Inspection lại ba URL trong Search Console | P0 | Biết Google còn giữ URL cũ hay đã chuyển canonical | Không đụng site | Người có quyền GSC |
| 2 | Xuất Performance 28 ngày gần nhất cho ba URL và truy vấn “xây nhà trọn gói tphcm” | P0 | Có vị trí sau 3/11 | Không | Cùng tài khoản |
| 3 | Nếu URL cũ vẫn “đã index” và canonical là chính nó: chờ crawl, không bấm yêu cầu lập chỉ mục cho URL 301 | P0 | Tránh củng cố URL cũ | Bấm nhầm URL cũ | Sau bước 1 |
| 4 | Nếu URL 2026 chưa index: yêu cầu lập chỉ mục đúng URL 2026 | P1 | Rút ngắn chờ | Thấp | Chỉ khi inspection nói chưa index |
| 5 | Đổi href source từ URL không năm sang URL 2026, không đổi hàm rewrite | P2 | Source khớp HTML | Thấp | Sau khi GSC không đòi đảo URL |
| 6 | Giữ title, H1, canonical, 301 | P3 | Ngừng đổi tín hiệu | Đổi thêm sẽ làm snippet lệch tiếp | Mặc định |

Việc cần doanh nghiệp xác nhận vẫn là tên pháp lý và địa chỉ, không phải việc chặn thứ hạng của URL này.

Việc chưa nên làm: xóa `-2026`, đảo redirect, đổi canonical, đổi title về “từ 4,85tr”, viết thêm một URL cùng cụm, deploy chỉ để “kéo hạng”.

## 13. Dữ liệu còn thiếu

- URL Inspection ngày 8/11 hoặc mới hơn cho cả ba URL: index, canonical Google chọn, canonical người dùng, ngày crawl, loại Googlebot.
- Performance sau 3/11. File hiện có kết thúc 3/11.
- Không có thứ hạng công khai mới trong repo. Không dùng một kết quả tìm kiếm đơn lẻ để thay số Search Console.

## Trả lời ngắn

- URL trụ cột duy nhất nên là `/dich-vu/xay-nha-tron-goi-tphcm-2026`. Production đang 200 tại đó, canonical tự trỏ, sitemap có URL này, hai URL kia 301 một bước. Phiên Search Console 7/11 đã thấy Google chọn chính URL 2026 cho bản đã index của URL đó.
- Nên giữ hậu tố `-2026`. Bỏ hậu tố là đổi path lần thứ ba kể từ 21/10.
- Chưa cần đổi redirect. Cả hai URL cũ đã 301 một bước, không vòng lặp.
- Chưa cần đổi canonical. Trang 200 tự trỏ.
- Chưa cần viết lại nội dung trụ cột. Bài đã có giá, hạng mục, quy trình, FAQ. Title không nên đưa “từ 4,85tr” trở lại khi URL vừa đổi xong.
- Việc làm trước: mở Search Console, kiểm tra URL không năm còn “đã lập chỉ mục” với canonical là chính nó hay đã thành trang chuyển hướng. Không bấm yêu cầu lập chỉ mục trên URL 301.
- Đổi URL ngược lại, đổi title lần nữa, hoặc xin index URL cũ có nguy cơ làm tụt thêm. Commit `0c4e5d0` không phải việc cần rollback để cứu cụm này.

Việc nên làm đầu tiên: kiểm tra lại URL Inspection của `/dich-vu/xay-nha-tron-goi-tphcm` và URL 2026. Giữ nguyên site cho đến khi bản crawl mới cho thấy URL cũ đã được ghi là redirect và canonical Google của trang còn index là URL 2026.

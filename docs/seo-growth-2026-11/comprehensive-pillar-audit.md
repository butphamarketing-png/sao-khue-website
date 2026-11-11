# Audit SEO trang trụ cột xây nhà trọn gói TPHCM

Ngày đo production lần đầu: 10/11/2026.  
URL trụ cột: https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026  
Không sửa source, không commit, không deploy.

Mục 1–9 là audit production lúc viết báo cáo. Lúc đó Search Console chưa được đọc. Mục 10 ghi lần đọc Search Console cùng ngày và lần đo lại production lúc 19:29 giờ Việt Nam. Hai nguồn tách riêng. Không suy ra hợp nhất tín hiệu từ HTTP 301.

## 1. Tóm tắt hiện trạng

Trên https://www, hai URL cũ trả 301 một bước tới URL 2026. URL 2026 trả 200, title và H1 đúng bản đang giữ, canonical tự trỏ, có trong sitemap, robots cho phép index.

141 trang sitemap trả 200 không còn href tới URL cũ. Trang `/cong-trinh` lần đầu lỗi mạng, lần gọi lại cũng không còn href cũ. Menu, footer và breadcrumb schema trỏ URL 2026.

Source bài viết vẫn có 165 href `/dich-vu/xay-nha-tron-goi-tphcm`. HTML production đã được `rewriteRetiredHrefsInHtml()` đổi sang URL 2026 trước khi xuất. Đó là nợ trong source, chưa thấy trên HTML sitemap vừa tải.

Không có lỗi nghiêm trọng về crawl trên bản www. Chưa có dữ liệu để nói Google đã hợp tín hiệu hay chưa.

## 2. Redirect

Đo bằng HTTP, không để client tự nhảy. Đích cuối của mọi chuỗi dưới đây là URL 2026, HTTP 200, cùng title, H1 và canonical. Không có vòng lặp.

| URL gọi | Status đầu | Số bước tới 200 | Ghi chú |
|---|---|---|---|
| https://www + `/dich-vu/xay-nha-tron-goi` | 301, Location path 2026 | 1 | Đúng yêu cầu |
| https://www + `/dich-vu/xay-nha-tron-goi-tphcm` | 301, cùng Location | 1 | Đúng yêu cầu |
| https://www + URL 2026 | 200 | 0 | Đúng yêu cầu |
| https không www, path cũ | 307 sang https://www cùng path, rồi 301 | 2 | Host, không phải canonical thứ hai |
| http://www, path cũ | 308 sang https://www cùng path, rồi 301 | 2 | Chuẩn hóa HTTPS |
| http không www, path cũ | 308, rồi 307, rồi 301 | 3 | Vẫn kết thúc ở URL 2026 www |

Không đổi redirect. Chuỗi trên www đã là 301 một bước.

Hai URL bài cũ cũng 301 một bước về trụ cột, đo cùng ngày:

- `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm`
- `/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm`

## 3. SEO on-page của URL 2026

Lấy từ HTML production.

| Mục | Giá trị |
|---|---|
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê |
| Meta description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở. Một hợp đồng: thiết kế, phần thô, hoàn thiện. Khảo sát miễn phí, bảo hành kết cấu 10 năm. |
| H1 | Xây nhà trọn gói TPHCM |
| Canonical | https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026 |
| Robots | index,follow,max-image-preview:large |
| Sitemap | Có 1 lần trong 142 loc của /sitemap.xml. Hai URL cũ không có |
| Open Graph | og:type=article. og:title trùng title. og:url là URL 2026. og:description trùng meta description. og:image https://www.kientrucsaokhue.com/images/sao-khue/sk-03.jpg. Alt mô tả giàn giáo và máy trộn trong hẻm |
| Viewport | width=device-width có trong HTML. Cùng một tài liệu cho mobile và desktop. Không chụp hai khung hình |
| Kích thước HTML | 32.204 byte |
| Core Web Vitals | Không đo được. Không có CrUX hay PageSpeed trong môi trường này |

Schema có trong HTML: Service, FAQPage, HowTo, BreadcrumbList, LocalBusiness và HomeAndConstructionBusiness. Breadcrumb hiển thị: Trang chủ `/` , Dịch vụ `/dich-vu`, chữ “Xây nhà trọn gói TPHCM” không phải link. Schema mục 3 trỏ đúng URL 2026.

H2 trong HTML: dịch vụ tại TPHCM, báo giá 2026, hạng mục, lý do chọn, vật liệu, số tầng và mái, thi công theo quận, quy trình, thanh toán, giấy phép, phát sinh, công trình, FAQ, liên hệ.

H3: điều kiện đơn giá, ví dụ nhà 4×16, và các câu FAQ về giá, thời gian, phát sinh, phép, số tầng, thanh toán, tư vấn, Bình Dương và Đồng Nai.

Đoạn đầu trong HTML nói một hợp đồng gồm khảo sát, thiết kế, thô và hoàn thiện, mốc từ 4,85 triệu/m² sàn ở. Title không chứa “từ 4,85tr”.

## 4. Liên kết nội bộ

### HTML đang phục vụ

Quét 142 URL trong sitemap. 141 trang 200 không có href path không năm và không có href path ngắn. 141 trang đó có href URL 2026. `/cong-trinh` được gọi lại: 200, 0 href cũ, 1 href URL 2026.

Các trang gọi riêng:

| URL | Status | Href URL cũ | Href URL 2026 |
|---|---|---|---|
| `/` | 200 | 0 | 3 |
| `/bao-gia` | 200 | 0 | 2 |
| `/xay-nha` | 200, noindex,follow | 0 | 2 |
| `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | 200 | 0 | 3 |
| `/tin-tuc/du-toan-chi-phi-xay-nha` | 200 | 0 | 3 |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | 200 | 0 | 3 |

Menu `artifacts/sao-khue/src/lib/menu.ts` dòng 29–32, 57, 60, 63, 69 trỏ URL 2026. Footer trỏ URL 2026. `BaoGiaSidebar.tsx` và `XayMoiSidebar.tsx` trỏ URL 2026. `site-settings.ts` dòng 581–597 viết lại href menu cũ thành URL 2026 nếu CMS còn lưu path cũ.

Href là đường dẫn gốc bắt đầu bằng `/`.

### Source vẫn ghi URL cũ

165 lần href path không năm trong bài viết. Không thấy href đúng path ngắn `/dich-vu/xay-nha-tron-goi`. Hàm `rewriteRetiredHrefsInHtml()` trong `sitemap-policy.ts` đổi path không năm sang URL 2026 khi prerender và khi React vẽ thân bài (`post-body.ts`).

Nhóm dòng, tất cả đều path không năm:

- `money-page-overrides.ts`: 135, 214, 452, 596, 762, 838, 928, 1182, 1267, 1351, 1415, 1433, 1506, 1524, 1587, 1605, 1681, 1761, 1841, 1920, 1988, 2048, 2065, 2147, 2183, 2200, 2276, 2311, 2328, 2412, 2447, 2464, 2546, 2727, 2811
- `p1-geo-handcraft.ts`: 31, 62, 90, 123, 151, 183, 211, 273, 331, 388, 422, 455, 488, 521, 554, 587, 620
- `money-page-overrides-batch2.ts`: 156, 168, 185, 230, 262, 298, 336, 475, 478, 648, 699
- `short-keyword-tin-tuc-articles-batch15.ts` đến `batch73.ts`: mỗi file một href, quanh dòng 240–325
- `bao-gia-xay-nha-tron-goi-moi-nhat-tphcm.ts`: 14, 202, 207. URL bài này đang 301
- `cong-ty-xay-dung-nha-pho-uy-tin-tphcm.ts`: 50, 54
- `ve-chung-toi.ts`: 37, 41
- `xay-dung-phan-tho.ts`: 23, 55
- `xay-nha-tron-goi-dong-nai.ts`: 26, 50
- `money-page-overrides-batch3.ts`: 360, 361
- `thiet-ke-nha-dep-tphcm.ts`: 72, 112
- Một href mỗi file: `ads-bo-sung-100-xay-nha.ts:60`, `bao-gia-xay-nha-phan-tho-long-an.ts:86`, `cam-nang-xay-nha-2026.ts:13`, `chi-phi-nha-pho-2-tang.ts:113`, `chi-phi-xay-nha-2-tang-dak-lak.ts:78`, `du-toan-chi-phi-xay-nha.ts:136`, `hoan-thien-nha.ts:33`, `khuyen-mai-xay-dung.ts:13`, `kien-truc-sao-khue-don-vi-uy-tin.ts:38`, `luat-xay-dung-moi-nhat.ts:55`, `luu-y-xay-nha-pho.ts:137`, `mau-nha-pho-2-tang-binh-duong.ts:115`, `nha-thau-xay-nha-tron-goi-tphcm.ts:37`, `phong-thuy-nha-o.ts:46`, `quy-trinh-xay-nha-tron-goi-a-z.ts:23`, `so-do-to-chuc.ts:24`, `thiet-ke-nha-biet-thu-thu-duc.ts:15`, `thiet-ke-nha-dep-gia-re.ts:110`, `thiet-ke-nha-pho-dak-lak.ts:68`, `thiet-ke-nha-pho-hien-dai-tphcm.ts:37`, `thiet-ke-nha-phong-cach-hien-dai.ts:36`, `thiet-ke-nha.ts:34`, `thue-thiet-ke-nha-truoc-khi-xay.ts:76`, `xay-dung-nha-long-an.ts:89`, `xay-nha-dep-dak-lak.ts:88`, `xay-nha-moi.ts:32`, `xay-nha-ngan-sach-1-ty-2.ts:60`, `xay-nha-pho-binh-thanh.ts:24`

Mức độ cao nếu một đường render bỏ hàm rewrite. Không nghiêm trọng trên HTML đang phục vụ, vì sitemap 200 không còn href cũ.

Không sửa trong lần này.

## 5. Trùng lặp và cạnh tranh từ khóa

Không kết luận cạnh tranh chỉ vì cùng chữ “trọn gói”.

| URL | Title và H1 production | Ý định | Trùng với trụ cột | Nguy cơ | Đề xuất |
|---|---|---|---|---|---|
| URL 2026 | Title có năm và báo giá. H1 là cụm chính | Thuê xây trọn gói tại TP.HCM | Trang chính | Giữ | Giữ nguyên |
| Path ngắn và path không năm | Không có bản 200 | Cụm cũ | Đã 301 | Không còn hai bản 200 | Giữ 301 |
| `/` | Kiến Trúc Sao Khuê, nhà phố, biệt thự TPHCM. H1 nhà thầu nhà phố và biệt thự | Tìm đơn vị | Khác H1, có link sang trụ cột | Thấp | Giữ |
| `/bao-gia` | Dự toán chi phí xây nhà | Cách tính tiền | Khác dịch vụ thi công | Thấp, hỗ trợ | Giữ |
| `/xay-nha` | Xây nhà trọn gói chìa khóa trao tay. Cùng H1 | Quảng cáo, cụm rộng | H1 gần cụm chính | Trung bình nếu được index. HTML có noindex,follow | Giữ noindex. Không tạo URL index mới |
| `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm` | 301 về trụ cột | Cùng cụm nhà thầu | Không còn 200 | Đã gom | Giữ 301 |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm` | 301 về trụ cột | Báo giá TP.HCM | Không còn 200 | Đã gom | Giữ 301 |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | Công Ty Xây Nhà Phố Uy Tín TP.HCM. H1 là tiêu chí chọn | Chọn nhà thầu | Cùng địa bàn, khác câu hỏi | Thấp. 3 link sang trụ cột | Giữ, không đổi thành bản sao trang dịch vụ |
| `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | Quy trình từ A đến Z | Cách làm | Hỗ trợ, 3 link sang trụ cột | Thấp | Giữ |
| `/tin-tuc/du-toan-chi-phi-xay-nha` | Dự toán chi phí 2026 | Cách lập dự toán | Hỗ trợ, 3 link sang trụ cột | Thấp | Giữ |
| Bình Dương, Đồng Nai, Phú Yên | Địa phương khác | Tỉnh khác | Không cùng ý định TP.HCM | Thấp | Giữ tách địa bàn |
| Bài theo quận, ví dụ Bình Thạnh | Title theo quận | Xây tại một quận | Hỗ trợ địa phương | Thấp | Giữ, link về trụ cột |

Không thấy hai URL 200 cùng H1 “Xây nhà trọn gói TPHCM”.

## 6. Bài hỗ trợ

Đã có bài quy trình, dự toán và trang `/bao-gia`. HTML của chúng link sang URL 2026, không sang URL cũ.

Bài công ty xây nhà phố uy tín trả lời cách chọn đơn vị, khác trang bán gói thi công. Không cần viết bài mới cho cùng ý định.

Hai bài nhà thầu và báo giá mới nhất không còn là bài 200. Không nâng cấp chúng thành trang thứ hai.

## 7. Lỗi thực tế

| Mức | Việc | Bằng chứng |
|---|---|---|
| Không có mức nghiêm trọng trên www | Redirect, canonical, robots, sitemap của trụ cột nhất quán | Đo HTTP 10/11 |
| Cao nếu mất hàm rewrite | 165 href source còn URL không năm | Danh sách mục 4. HTML sitemap không còn các href đó |
| Trung bình | `/xay-nha` có H1 gần cụm chính | HTML noindex,follow. Chỉ thành cạnh tranh nếu Google bỏ qua noindex. Cần GSC |
| Thấp | Http và non-www dài hơn 1–2 bước | Vẫn về cùng URL 2026 và cùng canonical |
| Không đo | Core Web Vitals, ảnh chụp mobile và desktop | Không có số lab hay field |

## 8. Cần xác minh trên Google Search Console

Các mục dưới đây là việc còn mở tại thời điểm audit. Kết quả đọc ngày 10/11 nằm ở mục 10, không thay thế các mục này.

- URL 2026 đã index chưa, lần crawl mới nhất, Google-selected canonical, user-declared canonical.
- URL không năm còn đã lập chỉ mục hay đã thành trang chuyển hướng.
- URL ngắn cùng các mục đó.
- `/xay-nha` có bị index dù HTML ghi noindex hay không.
- Hiệu suất truy vấn “xây nhà trọn gói tphcm” sau 03/11, tách theo từng URL ở tab Trang.
- Không dùng HTTP 301 hay canonical tự trỏ để kết luận tín hiệu đã chuyển.

## 9. Đề xuất, chưa làm

| Ưu tiên | Việc | Lý do | Rủi ro nếu làm ngay |
|---|---|---|---|
| P0 | Chụp URL Inspection ba URL và tab Trang của truy vấn chính | Thiếu dữ liệu Google | Không đụng site |
| P1 | Giữ nguyên URL, 301, title, H1, mô tả | Production www đã đúng | Đổi thêm làm lệch snippet |
| P2 | Sau khi duyệt, đổi 165 href source sang URL 2026, giữ hàm rewrite | Source khớp HTML | Sửa nhầm path tỉnh nếu thay chuỗi quá rộng |
| P3 | Giữ `/xay-nha` noindex | H1 gần cụm chính | Bỏ noindex sẽ tạo trang cạnh tranh |

Không đề xuất bài mới. Không đề xuất bỏ hậu tố `-2026`.

## Việc cần làm trên Search Console

1. URL Inspection URL 2026: index, ngày crawl, hai canonical.
2. URL Inspection URL không năm: còn index hay đã là redirect. Không bấm yêu cầu lập chỉ mục.
3. URL Inspection URL ngắn: cùng cách.
4. URL Inspection `/xay-nha`: có bị index dù noindex hay không.
5. Performance, lọc `xây nhà trọn gói tphcm`, tab Trang: URL nào còn impression.

## 10. Theo dõi 10/11/2026, 19:29 giờ Việt Nam

Không sửa source. Không đổi URL, redirect, canonical, title, H1, meta description. Không commit, không push, không deploy. Không bấm yêu cầu lập chỉ mục. Không mở Google Ads.

### 10.1 Production, đo lại lúc 19:29

Đo HTTP, không để client tự nhảy. So với mục 2 và mục 3 cùng ngày.

| URL gọi trên https://www | Status đầu | Location | Số bước tới 200 | Canonical của trang 200 |
|---|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 200 | không có | 0 | chính URL 2026 |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | chính URL 2026 |
| `/dich-vu/xay-nha-tron-goi` | 301 | cùng Location | 1 | chính URL 2026 |

Không có `X-Robots-Tag` trên ba phản hồi. Không có vòng lặp.

Trang 200 của URL 2026, thân HTML 36.922 byte:

| Mục | Giá trị lúc 19:29 | So với mục 3 |
|---|---|---|
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | Giữ |
| H1 | Xây nhà trọn gói TPHCM | Giữ |
| Meta description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở. Một hợp đồng: thiết kế, phần thô, hoàn thiện. Khảo sát miễn phí, bảo hành kết cấu 10 năm. | Giữ |
| Canonical | https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026 | Giữ |
| Robots | index,follow,max-image-preview:large | Giữ |
| Kích thước HTML | 36.922 byte | Mục 3 ghi 32.204 byte. Title, H1, mô tả, canonical, robots không đổi. Chưa xác định đoạn nào làm thân trang dài thêm |

Sitemap `https://www.kientrucsaokhue.com/sitemap.xml` vẫn 200, 142 loc. URL 2026 có 1 lần. Hai path cũ không có.

Liên kết trong HTML đang phục vụ, href đúng path (kể cả dạng tuyệt đối cùng host):

| Nguồn | Status | Href path không năm | Href path ngắn | Href URL 2026 |
|---|---|---|---|---|
| 142 URL sitemap, lần gọi này đều 200 ngay lần đầu | 200 | 0 trên toàn bộ | 0 trên toàn bộ | 373 lần cộng lại |
| Trang trụ cột | 200 | 0 | 0 | 7 |
| `/` | 200 | 0 | 0 | 3 |
| `/bao-gia` | 200 | 0 | 0 | 2 |
| `/xay-nha` | 200, robots `noindex,follow` | 0 | 0 | 2 |

Mục 4 ghi 141 trang 200 và `/cong-trinh` phải gọi lại. Lần này 142/142 trả 200 ngay, vẫn không còn href cũ. Homepage, `/bao-gia` và `/xay-nha` giữ đúng số href đã ghi.

Source vẫn còn 165 href path không năm. Lần này không đếm lại source và không sửa.

Thay đổi kỹ thuật so với báo cáo trước: redirect, canonical, title, H1, mô tả, robots, sitemap và href production giữ nguyên. Hai điểm khác số liệu: thân HTML trụ cột 36.922 byte thay vì 32.204 byte; quét sitemap không còn lần lỗi mạng ở `/cong-trinh`.

### 10.2 Search Console, đọc ngày 10/11/2026

Đây là số đọc trên giao diện Search Console, property `https://www.kientrucsaokhue.com/`, tài khoản butphamarketing@gmail.com. Không phải kết quả của lệnh HTTP ở mục 10.1. Lần ghi mục 10 không mở lại Search Console.

Chỉ mục:

| URL | Trạng thái trong chỉ mục | Lần thu thập của bản trong chỉ mục | Canonical người dùng khai báo | Canonical Google chọn |
|---|---|---|---|---|
| URL 2026 | Đã lập chỉ mục | 13:49:56, 10/11/2026, Googlebot điện thoại. Có sitemap | Chính URL 2026 | URL được kiểm tra |
| Path không năm | Vẫn đã lập chỉ mục | 05:51:06, 30/10/2026, Googlebot điện thoại. Không có sitemap | Chính path không năm | URL được kiểm tra |
| Path ngắn | Không nằm trên Google. Lý do: trang có lệnh chuyển hướng | 16:50:30, 07/11/2026 | URL 2026 | Giống canonical người dùng khai báo |
| `/xay-nha` | Không nằm trên Google. Lý do: Google không xác định được URL | Không áp dụng | Không áp dụng | Không áp dụng |

Kiểm tra phiên bản hoạt động, không bấm yêu cầu lập chỉ mục:

- Path không năm, 19:16:26 ngày 10/11: tải thành công. Canonical người dùng khai báo trên trang vừa lấy là URL 2026. Canonical Google chọn ghi chỉ được xác định sau khi lập chỉ mục.
- `/xay-nha`: tải thành công. Không được lập chỉ mục vì meta robots có `noindex`. Canonical người dùng khai báo là chính `/xay-nha`.

Hiệu suất, truy vấn khớp chính xác `xây nhà trọn gói tphcm`, Web. Dữ liệu ghi cập nhật khoảng 3 giờ trước lúc đọc.

3 tháng: 4 lượt nhấp, 176 lượt hiển thị, CTR 2,3%, vị trí trung bình 55,3. Tab Trang có 3 hàng: path không năm 4 nhấp / 148 hiển thị / vị trí 56,4; path ngắn 0 / 28 / 54,0; `/thiet-ke` 0 / 1 / 10,0. URL 2026 và `/xay-nha` không có hàng.

7 ngày: 4 lượt nhấp, 95 lượt hiển thị, CTR 4,2%, vị trí 54,9. Một hàng: path không năm, 4 nhấp / 95 hiển thị / vị trí 54,9.

### 10.3 Việc giữ nguyên

HTTP production và chỉ mục Google đang lệch ở path không năm: site trả 301 một bước, bản Google còn giữ là tài liệu đã index từ lần thu thập 30/10. URL 2026 đã có trong chỉ mục với canonical là chính nó, và chưa có hàng hiệu suất cho truy vấn chính xác này.

Chưa có thay đổi kỹ thuật trên production đủ để sửa URL, redirect, title, H1, mô tả, hoặc 165 href source. Lần theo dõi sau, khi được yêu cầu, chỉ đo lại ba URL, canonical, href production, rồi đối chiếu với bảng mục 10.1. Search Console cần một lần đọc mới; không lấy số mục 10.2 cho ngày sau.

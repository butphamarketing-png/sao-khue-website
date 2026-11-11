# Kiểm tra Google nhận diện redirect và URL trụ cột

Ngày đo production: 10/11/2026.  
Website: https://www.kientrucsaokhue.com/  
Không sửa source, không deploy, không push.

Môi trường này không có Google Search Console API và không có file xuất mới sau 03/11/2026. Phần Google dừng tại dữ liệu cũ đã lưu. Không có số thứ hạng, click hay canonical Google chọn cho ngày 10/11.

## 1. Đã xác nhận bằng production

Ba URL được gọi bằng HTTP, không theo redirect tự động. Bản www + HTTPS:

| URL | Status | Location | Bước tới URL cuối | URL cuối |
|---|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL 2026, HTTP 200 |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301 | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 1 | URL 2026, HTTP 200 |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | 200 | không | 0 | chính URL này |

Trang 200:

- Title: `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`
- H1: `Xây nhà trọn gói TPHCM`
- Canonical: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026`
- Robots: `index,follow,max-image-preview:large`
- Đoạn mở trong HTML có “từ 4,85 triệu/m²”. Title không có “từ 4,85tr”.

Sitemap `https://www.kientrucsaokhue.com/sitemap.xml`: HTTP 200, 142 `<loc>`. URL 2026 có 1 lần. Hai URL cũ có 0 lần.

Breadcrumb trong HTML của URL 2026:

- Hiển thị: Trang chủ `/` › Dịch vụ `/dich-vu` › chữ “Xây nhà trọn gói TPHCM” không phải link.
- Schema `BreadcrumbList` mục 3: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026`.

Host và giao thức, cùng ba path, đều kết thúc ở URL 2026 www + HTTPS với cùng title, H1 và canonical. Số bước khác nhau:

| Cách gọi URL cũ không năm | Chuỗi |
|---|---|
| `https://www` | 301 một bước tới path 2026 |
| `https://` không www | 307 sang `https://www` cùng path, rồi 301 sang path 2026 |
| `http://www` | 308 sang `https://www` cùng path, rồi 301 sang path 2026 |
| `http://` không www | 308 sang `https://` không www, 307 sang `https://www`, rồi 301 sang path 2026 |

Canonical trong HTML không đổi theo host. Không có bản 200 thứ hai. Hai bước đầu của http và non-www là chuẩn hóa host, không phải canonical khai báo khác URL 2026.

Internal link trong HTML đã tải, đếm href đúng cụm path cũ và path 2026:

| Trang | Href URL ngắn | Href URL không năm | Href URL 2026 |
|---|---|---|---|
| `/` | 0 | 0 | 4 |
| URL 2026 | 0 | 0 | 12 |
| `/tin-tuc/xay-nha-binh-thanh` | 0 | 0 | 6 |
| `/bao-gia` | 0 | 0 | 3 |

Đây là bốn trang, không phải toàn bộ site.

## 2. Đã xác nhận bằng Search Console

Không có lần đo mới ngày 10/11.

Dữ liệu đã lưu, không dùng để kết luận trạng thái hôm nay:

- File hiệu suất 4/8–3/11/2026: truy vấn “xây nhà trọn gói tphcm” có 2 click, 127 impression, vị trí trung bình 53,54. URL 2026 không có dòng trang trong sheet đó. Hai URL cũ có dòng trang vì gần hết kỳ chúng còn là URL 200 hoặc mới chuyển vào 30/10.
- Phiên URL Inspection ngày 7/11/2026: URL 2026 được ghi là đã index, canonical Google lúc đó là chính URL 2026, crawl 03:37 ngày 7/11. URL không năm vẫn “đã lập chỉ mục”, crawl 30/10, canonical Google lúc bản ghi đó được lưu là chính URL cũ. Đó là bản ghi cũ một ngày so với lần crawl, không phải xác nhận ngày 10/11.

Không so sánh được 28 ngày, 3 tháng, hay trước và sau 30/10 bằng dữ liệu mới. Không lập bảng click/impression cho ngày 10/11.

## 3. Chưa xác minh

- Google ngày 10/11 đã ghi URL cũ là “Page with redirect” hay vẫn “đã lập chỉ mục”.
- Google-selected canonical hiện tại của URL cũ và URL mới.
- User-declared canonical Google đọc được ở lần crawl mới nhất.
- Click, impression, CTR, vị trí của năm truy vấn sau 03/11.
- URL cũ và URL mới có cùng nhận impression cho một truy vấn trong kỳ mới hay không.
- Toàn bộ href của mọi bài, không chỉ bốn trang đã tải.

## 4. Giả thuyết cần kiểm tra

URL không năm có thể vẫn nằm trong chỉ mục với canonical tự trỏ từ crawl 30/10, trong khi HTTP đã 301. Giả thuyết này dựa trên phiên 7/11, chưa được kiểm lại. HTTP 301 và canonical tự trỏ của URL 2026 không chứng minh Google đã chuyển tín hiệu xếp hạng.

## Trả lời

1. Hai URL cũ trên `https://www` đã redirect đúng: 301 một bước, đích là URL 2026, URL cuối HTTP 200. Không có vòng lặp.
2. URL 2026 đủ điều kiện kỹ thuật để được index: HTTP 200, robots index,follow, canonical tự trỏ, có trong sitemap, title và H1 có trong HTML đầu. Điều kiện kỹ thuật không bằng trạng thái index.
3. Chưa xác minh Google hôm nay có chọn URL 2026 làm canonical. Lần gần nhất đã ghi là 7/11, chỉ cho chính URL 2026.
4. Chưa xác minh Google hôm nay còn ghi URL cũ thế nào. Bản ghi 7/11 vẫn để URL không năm ở trạng thái đã index, canonical là chính nó, theo crawl 30/10.
5. Bốn HTML production đã tải không còn href tới hai URL cũ. Breadcrumb schema trỏ URL 2026. Chưa rà hết mọi bài.
6. Không thấy lỗi kỹ thuật trên URL www cần sửa trước khi có GSC mới. Http và non-www dài hơn một hoặc hai bước rồi vẫn về cùng canonical. Không đổi redirect của trụ cột vì chuỗi www đã đúng.
7. Bước tiếp theo: người có quyền Search Console chạy URL Inspection cho URL không năm và URL 2026. Không bấm yêu cầu lập chỉ mục trên URL đang trả 301.
8. Chưa nên bỏ `-2026`, đảo hoặc gỡ 301, đổi title, H1, mô tả, đưa “từ 4,85tr” vào title, tạo URL mới cùng cụm, xin index URL 301, deploy hoặc sửa source.

## Checklist Search Console

Property: `https://www.kientrucsaokhue.com/`.

A. URL Inspection của `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm`

Cần thấy: URL có nằm trên Google không, lý do nếu chưa index, “Page with redirect” hay “đã lập chỉ mục”, lần crawl, Googlebot điện thoại hay máy tính, fetch thành công hay không, user-declared canonical, Google-selected canonical. Không bấm “Yêu cầu lập chỉ mục”.

B. URL Inspection của `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026`

Cần thấy: đã index hay chưa, lần crawl sau 7/11 hay vẫn là 7/11, user-declared canonical, Google-selected canonical có phải đúng URL 2026, trang được phát hiện từ sitemap hay từ liên kết nào.

C. Kiểm tra URL ngắn `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi` cùng các mục ở A. Kỳ vọng kỹ thuật là trang chuyển hướng. Ảnh cần cho thấy Google đã ghi nhận redirect hay vẫn giữ bản index cũ.

D. Performance, kết quả tìm kiếm, bộ lọc truy vấn chính xác `xây nhà trọn gói tphcm`.

Cần thấy khoảng ngày, số click, impression, CTR, vị trí trung bình, và ngày cập nhật của báo cáo. Không suy ra từ một kết quả tìm kiếm đơn lẻ.

E. Cùng bộ lọc đó, mở tab Trang.

Cần thấy từng URL nhận impression: URL 2026, URL không năm, URL ngắn, hoặc URL khác. Không cộng các dòng lại thành một số hạng.

Sau khi có năm ảnh, mới kết luận Google đã hợp canonical hay chưa. Cho đến lúc đó, production chỉ chứng minh máy chủ redirect đúng và trang 2026 đủ tín hiệu kỹ thuật.

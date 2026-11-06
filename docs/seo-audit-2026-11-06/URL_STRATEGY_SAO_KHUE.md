# Phương án URL trụ cột — Kiến Trúc Sao Khuê

Ngày lập: 6/11/2026.  
Không sửa mã, không deploy, không đổi redirect trong bước này.

Quyết định của bước này: **NO-GO**. Chưa chuyển URL 2026 về URL không năm.

Lý do không phải “URL có năm tốt hơn”. Lý do là chưa có Search Console và chưa có bảng backlink, trong khi path này đã đổi hai lần trong 9 ngày. Đảo chiều ngay bây giờ là lần đổi thứ ba.

## 1. Hiện trạng hai URL

Đo HTTP lúc 6/11/2026:

| URL | HTTP | Việc trình duyệt nhận |
|---|---|---|
| https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm | 301 | `Location: /dich-vu/xay-nha-tron-goi-tphcm-2026` |
| https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026 | 200 | HTML title `Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê`, H1 `Xây nhà trọn gói TPHCM`, canonical chính URL này, robots `index,follow` |

URL không năm **không còn thân bài**. Nó chỉ là lệnh chuyển hướng.

Nội dung 200 nằm ở URL 2026: một hợp đồng, bảng 4,85–6,7 triệu/m² sàn ở, ví dụ nhà 4×16, quy trình, FAQ. Năm 2026 nằm trong title, description và mục giá, không nằm trong H1.

Hai URL không phải hai bài khác nhau. Cùng slug nguồn `xay-nha-tron-goi-tphcm`. Khác nhau ở path và ở lần Google đã crawl.

Công cụ tìm kiếm công khai, cùng ngày, vẫn trả hai tài liệu:

- URL không năm, title lưu `Xây nhà trọn gói TPHCM 2026 từ 4,85tr | Sao Khuê`. Đây là title của commit `5f8f546`, trước khi bỏ cụm “4,85tr”.
- URL 2026, title lưu `Xây nhà trọn gói TPHCM 2026 | Kiến Trúc Sao Khuê`. Đây là title của commit `341695b`, cũ hơn title đang sống (`Báo giá Sao Khuê`).

Đó là dấu hiệu cả hai path còn trong chỉ mục công cộng, với bản cũ. **Không phải** dữ liệu Search Console và **không phải** thứ hạng.

Còn một URL thứ ba, ngắn hơn, cùng cụm redirect:

`/dich-vu/xay-nha-tron-goi` cũng 301 một bước tới URL 2026. Đây mới là path sống từ trước 21/10.

## 2. Lịch sử redirect

Từ git, múi giờ +07:

| Thời điểm | Commit | Path canonical | Title lúc đó |
|---|---|---|---|
| Trước 21/10/2026 21:50 | cha của `5f8f546` | `/dich-vu/xay-nha-tron-goi` | bài cùng slug |
| 21/10/2026 21:50 | `5f8f546` | `/dich-vu/xay-nha-tron-goi-tphcm` | `Xây nhà trọn gói TPHCM 2026 từ 4,85tr \| Sao Khuê` |
| 30/10/2026 14:46 | `2d0bc3e` | vẫn URL không năm | bỏ “từ 4,85tr” khỏi title |
| 30/10/2026 15:03 | `341695b` | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | `Xây nhà trọn gói TPHCM 2026 \| Kiến Trúc Sao Khuê` |
| 6/11/2026 15:47 | `aff1b72` | giữ URL 2026 | `Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê` |

URL không năm làm canonical **9 ngày** (21/10 21:50 đến 30/10 15:03). Trước đó hub là URL ngắn không có chữ `tphcm`. Sau 15:03 ngày 30/10, hằng số `HUB_XAY_NHA` trong `lib/seed-content/src/sitemap-policy.ts` trỏ URL 2026.

`artifacts/api-server/middleware.js` có 43 dòng redirect đích là URL 2026, gồm URL ngắn, URL không năm, và các path cũ `/bai-viet/...`, `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm`, `/category/xay-nha-tron-goi`.

## 3. Canonical

HTML 200 của URL 2026 tự canonical về chính nó. URL không năm không có thẻ canonical vì phản hồi 301 không có thân HTML.

Nếu đảo chiều mà quên gỡ 301 cũ, URL không năm vẫn 301 sang 2026 trong khi 2026 301 ngược lại. Đó là vòng lặp.

## 4. Sitemap

Sitemap live 6/11/2026 có 142 URL, tất cả 200. Có URL 2026. Không có URL không năm và không có URL ngắn. File seed `artifacts/api-server/public/sitemap.seed.xml` cũng chỉ có loc 2026.

## 5. Internal link

Bản quét HTML 142 trang sitemap lúc 6/11:

- 414 dòng link trỏ `/dich-vu/xay-nha-tron-goi-tphcm-2026`, từ 141 trang. Phần lớn là menu lặp.
- 0 dòng link trỏ đúng `/dich-vu/xay-nha-tron-goi-tphcm` không kèm `-2026`.

Mã `rewriteRetiredHrefsInHtml` đổi href cũ sang `HUB_XAY_NHA` trước khi xuất HTML. Vì vậy site đang sống không còn gửi người dùng tới URL không năm.

## 6. Backlink

**Không thể kiểm tra.** Không có Ahrefs, Majestic hay Search Console Links trong bước này.

Tìm đúng chuỗi URL trên web công khai chỉ thấy chính hai URL của Sao Khuê. Việc đó không chứng minh là không có backlink. Cũng không chứng minh URL nào nhận nhiều link hơn.

## 7. Search Console

**Không thể kiểm tra** trong bước này. Không mở được báo cáo URL Inspection, trang đã chọn canonical, hay truy vấn còn trỏ URL nào.

Không dùng snippet công cụ tìm kiếm để kết luận URL không năm mạnh hơn.

## 8. Rủi ro khi chuyển ngược

Đảo 2026 về URL không năm là lần đổi path thứ ba kể từ 21/10.

Rủi ro đã biết từ chính lịch sử site: Google bỏ URL đang 301 khỏi kết quả trước khi URL mới được crawl. Khoảng trống đó là thứ đã thấy sau lần chuyển 30/10.

Rủi ro kỹ thuật nếu làm thiếu một chỗ:

- Vòng 301 nếu URL không năm vẫn trỏ sang 2026.
- Chuỗi hai bước nếu URL ngắn vẫn 301 sang 2026 rồi 2026 mới 301 sang URL không năm. 43 rule trong `middleware.js` phải đổi đích cùng lúc, trỏ thẳng URL không năm, một bước.
- Sitemap và menu lệch nhau vài ngày thì Google thấy hai địa chỉ.
- Title đổi lần nữa trong cùng tuần với lần đổi path làm snippet lệch thêm.

Rủi ro không đo được vì thiếu dữ liệu: nếu Google đã chọn URL 2026 làm canonical và đã index, đảo chiều vứt đúng URL vừa được nhận. Nếu Google vẫn giữ URL không năm, đảo chiều có thể khớp bản Google đang lưu. Không có Search Console thì không biết đang ở nhánh nào.

## 9. Phương án đề xuất

Kiến trúc anh muốn là hợp lý **sau khi** biết Google đang giữ URL nào. Chưa đủ điều kiện để bật.

Khi nào được phép làm, cấu hình đúng là:

- URL chính, trả 200: `https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm`
- URL 2026: 301 một bước về URL không năm.
- URL ngắn `/dich-vu/xay-nha-tron-goi` và 43 path cũ: 301 một bước về URL không năm, không đi qua URL 2026.
- Canonical của trang 200: chính URL không năm.
- Sitemap: một loc, URL không năm.
- Menu, footer, bài, công trình: href URL không năm.
- Title đề xuất, 55 ký tự: `Xây nhà trọn gói TP.HCM | Báo giá và thi công Sao Khuê`
- H1: `Xây nhà trọn gói TP.HCM`
- Năm 2026 chỉ trong bảng giá và đoạn mô tả, cập nhật khi đổi giá. Không đưa năm vào path.

Không tạo URL thứ tư. Không mở lại các slug đã 301 (`nha-thau-xay-nha-tron-goi-tphcm`, `bao-gia-xay-nha-tron-goi-moi-nhat-tphcm`, `xay-nha-gia-re-tphcm`). Các bài quận, kích thước, phần thô, quy trình giữ intent riêng và trỏ một anchor về URL trụ cột.

## 10. Các bước triển khai

Chỉ chạy sau quyết định GO ở mục 12. Thứ tự:

1. Xuất URL Inspection của cả hai URL và của URL ngắn. Ghi URL Google chọn làm canonical và ngày crawl cuối.
2. Xuất liên kết ngoài tới cả ba path. Nếu không có công cụ, ghi “không có số”.
3. Sửa `HUB_XAY_NHA` về `/dich-vu/xay-nha-tron-goi-tphcm`.
4. Route URL không năm trả bài. URL 2026 301 tới URL không năm. Mọi rule đang trỏ 2026 đổi đích thẳng URL không năm.
5. Sitemap chỉ còn URL không năm.
6. Title và H1 theo mục 9. Giữ đơn giá triệu/m² trong mô tả. Không viết “4,85tr” trên title.
7. Deploy một lần. Không deploy title trước, path sau.
8. Kiểm tra checklist mục 11 trước khi gửi URL Inspection cho đúng một URL.

## 11. Checklist sau deploy

- URL không năm: 200, canonical tự trỏ, title và H1 đúng mục 9.
- URL 2026: 301, `Location` tương đối hoặc tuyệt đối tới URL không năm, không thêm bước www ở giữa nếu request đã là www.
- URL ngắn: 301 một bước tới URL không năm.
- Một path cũ bất kỳ trong `middleware.js`: một bước, không thành chuỗi 2026 rồi không năm.
- Không có cặp 301 ngược chiều.
- Sitemap không còn loc 2026.
- Trang chủ và một bài công trình: href thấy bằng mắt là URL không năm.
- `/xay-nha` vẫn noindex. Không đưa vào sitemap.

## 12. GO hoặc NO-GO

**Hiện tại: NO-GO.**

Thiếu Search Console và thiếu backlink. Hai mục này nằm trong điều kiện bắt buộc. Không giả định URL không năm mạnh hơn chỉ vì nó không có năm.

Chuyển thành **GO** chỉ khi đủ cả bốn ý:

1. URL Inspection cho biết Google **chưa** chọn URL 2026 làm bản đã index, hoặc vẫn đang giữ URL không năm làm canonical.
2. Đã xem liên kết ngoài, dù kết quả là không có link. Không bỏ qua mục này.
3. Một bản deploy đổi path, canonical, sitemap, 43 redirect và internal link cùng lúc. Không còn chuỗi hai bước và không còn vòng lặp.
4. Sau deploy không đụng path này thêm ít nhất một chu kỳ crawl. Giá 2026 sửa trong thân bài, không sửa bằng cách thêm năm vào URL.

Giữ **NO-GO** nếu URL Inspection cho thấy URL 2026 đã là bản Google chọn. Lúc đó URL không năm chỉ là redirect lịch sử. Đổi lại sẽ lặp đúng lỗi vừa làm tụt trang.

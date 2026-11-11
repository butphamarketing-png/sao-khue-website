# Lộ trình 90 ngày

Mốc bắt đầu là ngày lập kế hoạch, 6/11/2026. Kỳ Search Console đã có sẵn là 4/8–3/11/2026: 292 nhấp, 20.344 hiển thị, CTR 1,44%, vị trí 18,92. Không hứa một thứ hạng cụ thể ở ngày thứ 90.

Mỗi việc gắn với một số trong file. Không tạo URL, không đổi slug, không đảo redirect trong khi chưa có duyệt riêng.

## Ngày 1–30 — giữ chỗ đang có nhấp, đo URL mới

Việc đầu là xuất Search Console lần nữa khi URL 2026 đã có mặt trong phần lớn kỳ đo. Kỳ này URL đó có 0 dòng. Hai URL cũ có 10 nhấp và 584 hiển thị. Lần xuất sau cần thấy nhấp và hiển thị nằm ở URL 200, không còn dồn ở URL 301.

Giữ nguyên bài Phú Yên. Nó đang có vị trí 1,33 cho `xây nhà trọn gói phú yên` (8 nhấp, 63 hiển thị) và trang báo giá Phú Yên có 43 nhấp, vị trí 4,31.

Trên `/dich-vu/sua-nha-tron-goi-tphcm`, rà title và 150 từ đầu sao cho khớp `sửa nhà trọn gói tphcm`. Cụm này có 16 nhấp, 360 hiển thị, vị trí 12,20, CTR 4,44%. URL gốc của trang có CTR 0,91% trên 2.967 hiển thị. Không đổi URL. Không tách mỏ neo thành trang.

Chủ site trả lời một câu: công ty có nhận công trình Quy Nhơn và Bình Định trong 90 ngày này hay không. Ba URL đang 301 chiếm 2.454, 1.726 và 1.636 hiển thị, tất cả 0 nhấp. Câu trả lời quyết định tháng thứ hai. Chưa trả lời thì không sửa middleware.

Đo lại `/bao-gia` sau khi title “Dự toán chi phí xây nhà” đã lên production. Kỳ cũ: 0 nhấp, 60 hiển thị, vị trí 7,25.

## Ngày 31–60 — trang dịch vụ còn 200 và đang ở trang 3–4

Nếu chủ site không làm Quy Nhơn và Bình Định: bỏ qua ba URL 301. Tập trung Bình Dương và Đồng Nai.

`/dich-vu/xay-nha-tron-goi-binh-duong`: 3 nhấp, 573 hiển thị, vị trí 33,02. Bổ sung khu vực Thuận An, Dĩ An, Thủ Dầu Một trong cùng bài, vì các cụm đó có trong file nhưng mỗi cụm dưới 50 hiển thị. Một link sang trụ cột với anchor nói rõ TP.HCM.

`/dich-vu/xay-nha-tron-goi-dong-nai`: 1 nhấp, 253 hiển thị, vị trí 37,98. Cùng cách làm cho Biên Hòa. Không tạo URL Biên Hòa.

`/tin-tuc/cai-tao-nha-binh-dinh` vẫn 200, 1 nhấp, 1.635 hiển thị, vị trí 15,27. Nếu có nhận cải tạo Bình Định, sửa bài này chứ không viết bài thứ hai. Nếu không nhận, để nguyên và không xây cụm Bình Định rộng hơn.

Trụ cột: thêm đoạn ngắn cho “công ty xây nhà trọn gói TP.HCM” và “dịch vụ xây nhà trọn gói TP.HCM” trong thân bài đang có. Hai cụm cộng 16 và 12 hiển thị. Không đổi H1 “Xây nhà trọn gói TPHCM”.

## Ngày 61–90 — đọc kỳ mới rồi mới viết thêm

Xuất file Search Console mới. So với kỳ 4/8–3/11:

- URL 2026 đã có dòng chưa, nhấp và hiển thị bao nhiêu so với 10 nhấp của hai URL cũ.
- `sửa nhà trọn gói tphcm` còn quanh vị trí 12 hay đã sang nhóm 4–10. Mốc để biết việc sửa snippet có dấu hiệu, không phải hạn giao hạng.
- `/bao-gia` còn 0 nhấp hay đã có nhấp sau khi đổi title.
- Ba URL Bình Định và Quy Nhơn còn hiển thị trên URL 301 hay đã mất. Mất hiển thị ở URL 301 là hệ quả đã biết, không phải sự cố mới.

Chỉ đề xuất một bài mới nếu kỳ sau có một cụm trên 100 hiển thị, đúng dịch vụ công ty đang bán, và không còn URL 200 nào khớp địa bàn. Kỳ này chưa có cụm như vậy ngoài các URL đã tồn tại hoặc đang 301.

Nhôm kính và phần thô để ngoài 90 ngày này, trừ khi kỳ sau vị trí phần thô rời khỏi khoảng 70 hoặc chủ site xác nhận nhôm kính là nguồn khách. Phần thô hiện 2 nhấp, 309 hiển thị, vị trí 69,61.

Thiết kế để ngoài cùng. “thiết kế nhà phố TP.HCM” và “thiết kế nhà ở TP.HCM” không có dòng. `/dich-vu/thiet-ke-nha` chỉ 59 hiển thị.

## Việc không nằm trong 90 ngày

Đổi URL trụ cột, đảo 301, tạo trang “báo giá xây nhà trọn gói TP.HCM” riêng, gộp sửa nhà với cải tạo, đổi H1 trụ cột, sửa tên pháp lý hoặc địa chỉ khi chưa có giấy tờ, và deploy hàng loạt bài tỉnh.

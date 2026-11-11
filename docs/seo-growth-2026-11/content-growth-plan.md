# Kế hoạch nội dung

Không viết đợt bài mới trong giai đoạn này. Mỗi mục dưới đây là việc trên URL đang có, hoặc một quyết định chủ site phải chốt trước khi đụng redirect.

## 1. Trang trụ cột — bổ sung trên URL 2026

- Cụm mục tiêu: xây nhà trọn gói TP.HCM. Số file: 2 nhấp, 127 hiển thị, vị trí 53,54.
- Người đọc cần biết đơn vị nào làm tại TP.HCM, giá tính theo m² sàn ở, và bước từ khảo sát đến bàn giao.
- Lý do sửa cùng URL: các biến thể “công ty” (16 và 18 hiển thị), “dịch vụ” (12 hiển thị), “giá 2026” (5 hiển thị) chưa đủ để tách trang. Hai URL cũ đã 301 về đây.
- Phần nên bổ sung, không đổi H1: một đoạn trả lời “công ty xây nhà trọn gói TP.HCM” bằng hồ sơ pháp lý khi chủ site đã chốt tên; một đoạn “nhà thầu” nói người giám sát và hợp đồng; giữ bảng giá hiện có vì cụm giá trong file rất nhỏ.
- Bằng chứng còn thiếu, chưa được bịa trong bài: tên pháp lý thống nhất, một địa chỉ, số công trình có hồ sơ. File Search Console không chứng minh các câu này.
- Liên kết tới: `/bao-gia` cho người hỏi cách tính, `/dich-vu/sua-nha-tron-goi-tphcm` khi nhu cầu là sửa chứ không phải xây mới.
- Khác bài hiện có: không viết lại bài Phú Yên, Bình Dương hay Đồng Nai thành bản sao của trang TP.HCM.

## 2. Trang sửa nhà — chỉnh snippet và phần đầu

- Cụm mục tiêu: sửa nhà trọn gói TP.HCM. 16 nhấp, 360 hiển thị, CTR 4,44%, vị trí 12,20.
- Trang: `/dich-vu/sua-nha-tron-goi-tphcm`, 27 nhấp, 2.967 hiển thị, CTR 0,91%, vị trí 21,89.
- Người đọc cần biết hạng mục sửa, cách tính tiền, khu vực trong TP.HCM.
- Lý do chưa tạo URL: cụm “dịch vụ sửa chữa nhà trọn gói tphcm 2026” có 4 nhấp, 72 hiển thị, vị trí 10,14. Nó cùng ý với trang đang có.
- Việc: đối chiếu title và đoạn mô tả với cụm đang được bấm. CTR của URL gốc 0,91% trong khi cụm có chữ TP.HCM được bấm 4,44%. Phần lớn 2.967 hiển thị của URL có thể đến từ cụm rộng “sửa nhà trọn gói” (662 hiển thị, 1 nhấp, vị trí 22,19) và từ các cụm bị ẩn.
- Không biến các mỏ neo `#bao-gia-sua-nha...` thành URL mới. Chúng đã có hàng trăm hiển thị và gần như 0 nhấp.

## 3. Ba URL đang 301 nhưng chiếm hiển thị

Chỉ làm sau khi chủ site xác nhận có nhận công trình ở địa bàn đó.

| URL hiện 301 | Hiển thị trong kỳ | Vị trí | Truy vấn khớp chữ | Đích 301 hiện tại |
|---|---|---|---|---|
| `/tin-tuc/xay-nha-2-tang-binh-dinh` | 2.454 | 6,97 | xây nhà phố 2 tầng bình định, 2.465 hiển thị, vị trí 7,15, 0 nhấp | Trụ cột TP.HCM |
| `/tin-tuc/sua-chua-nha-quy-nhon` | 1.726 | 12,19 | sửa chữa cải tạo nhà quy nhơn, 2.771 hiển thị, vị trí 11,93, 0 nhấp | Sửa nhà TP.HCM |
| `/tin-tuc/xay-nha-quy-nhon` | 1.636 | 26,12 | xây nhà trọn gói quy nhơn - an nhơn, 1.632 hiển thị, vị trí 26,19, 0 nhấp | Trụ cột TP.HCM |

Người đọc các cụm này cần thợ tại Bình Định hoặc Quy Nhơn, không cần trang TP.HCM. Nếu công ty không làm hai nơi này, 0 nhấp là tín hiệu phù hợp và không nên gỡ 301 chỉ để lấy hiển thị. Nếu công ty có làm, đích 301 hiện tại đang đưa người tìm Quy Nhơn sang bài TP.HCM.

`/tin-tuc/cai-tao-nha-binh-dinh` vẫn 200: 1 nhấp, 1.635 hiển thị, vị trí 15,27. Sửa bài này trước khi nghĩ tới bài mới, vì nó đã được giữ index trong `RANKING_KEYWORD_SLUGS`.

## 4. Bình Dương và Đồng Nai — sửa trang dịch vụ

- Bình Dương: trang `/dich-vu/xay-nha-tron-goi-binh-duong`, 3 nhấp, 573 hiển thị, vị trí 33,02. Cụm “xây nhà trọn gói bình dương” 174 hiển thị, vị trí 27,21. “công ty xây nhà trọn gói bình dương” 42 hiển thị, vị trí 21,24.
- Đồng Nai: trang `/dich-vu/xay-nha-tron-goi-dong-nai`, 1 nhấp, 253 hiển thị, vị trí 37,98. Cụm cùng tên 35 hiển thị, vị trí 39,89.
- Người đọc cần biết khu vực nhận thi công và đơn giá có khác TP.HCM hay không.
- Không tạo URL quận, phường. Các biến thể Thuận An, Dĩ An, Thủ Dầu Một, Biên Hòa trong file đều dưới 50 hiển thị mỗi cụm.

## 5. Phú Yên — không viết thêm

Bài báo giá Phú Yên đã có 43 nhấp và vị trí 4,31. Cụm “xây nhà trọn gói phú yên” ở vị trí 1,33 với 8 nhấp. Bài thi công nhà phố Phú Yên có 7 nhấp, 165 hiển thị, vị trí 7,12. Bài Tuy Hòa có 8 nhấp, 72 hiển thị, vị trí 4,06. Giữ các URL này. Không chuyển chúng về trụ cột TP.HCM.

## 6. Thiết kế — chưa đủ số để viết mới

`/dich-vu/thiet-ke-nha` có 59 hiển thị và 1 nhấp ở vị trí 8,58. Cụm “thiết kế nhà phố TP.HCM” và “thiết kế nhà ở TP.HCM” không có dòng. Việc hợp lý là chỉnh title cho khớp vai “thiết kế nhà ở TP.HCM” khi chủ site duyệt, trên đúng URL đang có. Chưa lập bài mới.

## 7. Phần thô và nhôm kính

`xây dựng phần thô tphcm`: 2 nhấp, 283 hiển thị, vị trí 70,45. Trang `/dich-vu/xay-dung-phan-tho`: 2 nhấp, 309 hiển thị, vị trí 69,61. Còn xa top 10. Chỉ bổ sung liên kết từ trụ cột, không nhân bản bài.

Nhôm kính: trang nhà thầu 575 hiển thị, 1 nhấp, vị trí 21,83. Cụm “nhà thầu thi công cửa nhôm cao cấp tại tp.hcm” 343 hiển thị, 0 nhấp, vị trí 21,38. Để sau khi chủ site xác nhận đây là dịch vụ lấy khách, không phải bài phụ.

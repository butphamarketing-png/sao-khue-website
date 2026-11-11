# Phân tích Search Console

Nguồn duy nhất: file `https___www.kientrucsaokhue.com_-Performance-on-Search-2026-11-06.xlsx`, xuất ngày 6/11/2026. Không có số liệu nào ngoài file này và đối chiếu URL với mã nguồn, sitemap production, HTTP lúc lập kế hoạch.

## Kỳ đo

Sheet Bộ lọc: loại tìm kiếm Web, giá trị ngày “3 tháng trước”.

Sheet Sơ đồ có 92 ngày, từ 4/8/2026 đến 3/11/2026. Ngày 4–6/11 không có trong biểu đồ. Search Console thường chậm vài ngày so với ngày xuất file.

## Tổng site

Lấy từ sheet Sơ đồ, cộng từng ngày. Sheet Thiết bị cộng lại đúng các số này.

| Chỉ số | Số |
|---|---|
| Lượt nhấp | 292 |
| Lượt hiển thị | 20.344 |
| CTR | 1,44% (292 / 20.344) |
| Vị trí trung bình, nhân theo lượt hiển thị từng ngày | 18,92 |

## Truy vấn bị ẩn và truy vấn không được bấm

Sheet Cụm từ tìm kiếm có 457 dòng. Cộng lại: 48 lượt nhấp và 13.789 lượt hiển thị.

Phần còn lại so với sheet Sơ đồ là 244 lượt nhấp và 6.555 lượt hiển thị. Google không ghi cụm từ của phần này vào file. Đây là truy vấn bị ẩn, không phải truy vấn có 0 lượt hiển thị. 244 / 292 lượt nhấp của cả site nằm ở nhóm bị ẩn. Mọi bảng từ khóa bên dưới chỉ mô tả 457 cụm được xuất, tức 48 lượt nhấp nhìn thấy chữ.

Trong 457 cụm được xuất, nhiều dòng có lượt hiển thị và 0 lượt nhấp. Những dòng đó là truy vấn thật, đã hiện trên Google, người dùng không bấm.

## Sheet Trang không dùng làm tổng site

741 dòng trang cộng thành 297 lượt nhấp và 27.291 lượt hiển thị, cao hơn sheet Sơ đồ. Nguyên nhân nhìn thấy trong file: cùng một bài có thêm nhiều dòng URL kèm `#`. Trang sửa nhà có 21 dòng mỏ neo bên cạnh URL gốc. Một lần hiện kết quả có thể được ghi ở URL gốc và ở mỏ neo. Báo cáo này dùng URL không có `#` khi nói về một trang. Dòng `#` không được tính là trang SEO riêng.

## Thiết bị

| Thiết bị | Nhấp | Hiển thị | CTR | Vị trí |
|---|---|---|---|---|
| Điện thoại | 171 | 4.833 | 3,54% | 15,13 |
| Máy tính | 120 | 15.463 | 0,78% | 20,07 |
| Máy tính bảng | 1 | 48 | 2,08% | 29,96 |

Điện thoại chiếm 171 / 292 lượt nhấp. Máy tính chiếm 15.463 / 20.344 lượt hiển thị nhưng CTR 0,78%.

## Quốc gia

Việt Nam: 291 lượt nhấp, 19.988 lượt hiển thị, CTR 1,46%, vị trí 18,73. Hoa Kỳ: 0 nhấp, 177 hiển thị, vị trí 24,66. Đài Loan: 1 nhấp, 1 hiển thị. Các quốc gia còn lại trong file đều 0 nhấp và dưới 30 lượt hiển thị mỗi nước.

## Hình thức xuất hiện

Sheet này chỉ có dòng tiêu đề, không có số.

## Trang nhận nhiều hiển thị nhất

Số dưới đây là dòng URL không có `#`.

| URL | Nhấp | Hiển thị | CTR | Vị trí | HTTP lúc lập kế hoạch |
|---|---|---|---|---|---|
| `/dich-vu/sua-nha-tron-goi-tphcm` | 27 | 2.967 | 0,91% | 21,89 | Trang dịch vụ đang index |
| `/tin-tuc/xay-nha-2-tang-binh-dinh` | 0 | 2.454 | 0% | 6,97 | 301 về URL trụ cột 2026 |
| `/tin-tuc/sua-chua-nha-quy-nhon` | 0 | 1.726 | 0% | 12,19 | 301 về `/dich-vu/sua-nha-tron-goi-tphcm` |
| `/tin-tuc/xay-nha-quy-nhon` | 0 | 1.636 | 0% | 26,12 | 301 về URL trụ cột 2026 |
| `/tin-tuc/cai-tao-nha-binh-dinh` | 1 | 1.635 | 0,06% | 15,27 | 200, có trong sitemap |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | 43 | 646 | 6,66% | 4,31 | 200, có trong sitemap |
| `/tin-tuc/nha-thau-thi-cong-nhom-kinh-tphcm` | 1 | 575 | 0,17% | 21,83 | Không đối chiếu thêm HTTP |
| `/dich-vu/xay-nha-tron-goi-binh-duong` | 3 | 573 | 0,52% | 33,02 | Trang dịch vụ trong source |
| `/tin-tuc/bao-gia-cua-nhom-xingfa-tphcm` | 2 | 464 | 0,43% | 31,15 | Không đối chiếu thêm HTTP |
| `/dich-vu/xay-nha-tron-goi` | 6 | 393 | 1,53% | 36,54 | 301 về URL 2026 |
| `/` | 53 | 353 | 15,01% | 5,58 | Trang chủ |
| `/dich-vu/xay-dung-phan-tho` | 2 | 309 | 0,65% | 69,61 | Trang dịch vụ |
| `/dich-vu/xay-nha-tron-goi-dong-nai` | 1 | 253 | 0,40% | 37,98 | Trang dịch vụ |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 4 | 191 | 2,09% | 39,08 | 301 về URL 2026 |

URL `/dich-vu/xay-nha-tron-goi-tphcm-2026` không có dòng nào trong sheet Trang. Kỳ đo kết thúc 3/11/2026. URL này mới là bản 200 từ 30/10/2026, nên gần như cả kỳ vẫn ghi nhận trên hai URL cũ.

Ba URL Bình Định và Quy Nhơn nằm trong nhóm factory của `sitemap-policy.ts` và không có trong sitemap production đã tải. `cai-tao-nha-binh-dinh` nằm trong `RANKING_KEYWORD_SLUGS` nên vẫn 200 và có trong sitemap.

## Truy vấn được xuất, nhiều hiển thị nhất

| Truy vấn | Nhấp | Hiển thị | CTR | Vị trí |
|---|---|---|---|---|
| sửa chữa cải tạo nhà quy nhơn | 0 | 2.771 | 0% | 11,93 |
| xây nhà phố 2 tầng bình định | 0 | 2.465 | 0% | 7,15 |
| xây nhà trọn gói quy nhơn - an nhơn | 0 | 1.632 | 0% | 26,19 |
| sửa nhà trọn gói | 1 | 662 | 0,15% | 22,19 |
| sửa nhà trọn gói tphcm | 16 | 360 | 4,44% | 12,20 |
| nhà thầu thi công cửa nhôm cao cấp tại tp.hcm | 0 | 343 | 0% | 21,38 |
| xây dựng phần thô tphcm | 2 | 283 | 0,71% | 70,45 |
| xây nhà trọn gói bình dương | 1 | 174 | 0,57% | 27,21 |
| sửa chữa nhà trọn gói | 0 | 142 | 0% | 20,53 |
| xây nhà trọn gói tphcm | 2 | 127 | 1,57% | 53,54 |
| xây nhà trọn gói phú yên | 8 | 63 | 12,70% | 1,33 |

`sửa nhà trọn gói tphcm` là cụm thương mại TP.HCM có nhiều nhấp nhất trong số cụm nhìn thấy chữ: 16 nhấp. `xây nhà trọn gói tphcm` chỉ có 127 hiển thị và 2 nhấp trong cả kỳ. Danh sách từ khóa chủ site muốn đẩy không trùng với chỗ file đang có nhiều hiển thị.

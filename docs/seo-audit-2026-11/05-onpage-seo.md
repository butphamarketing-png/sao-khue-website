# SEO on-page

Đối chiếu 134 bài được index trong seed, cộng các route tĩnh trong sitemap. Title dưới đây là title trong dữ liệu, trừ ba hub production được ghi riêng vì HTML live khác source.

## Title và description

134 bài index đều có meta description dài hơn 20 ký tự. Không có title trùng nhau trong nhóm này.

Title dài hơn 65 ký tự:

- `/dich-vu/cai-tao-nha-cu` — 69
- `/dich-vu/xay-dung-phan-tho` — 71
- `/tin-tuc/xay-nha-ngan-sach-1-ty-2` — 66
- `/tin-tuc/thiet-ke-xay-dung-nha-pho-mien-nam` — 76

Chưa rút. Rút title của trang dịch vụ đang index cần duyệt.

Ba hub production ngắn và sai vai, như file 04. Source local đã có title “Dự toán chi phí xây nhà”, “Kinh nghiệm xây nhà mới”, “Thiết kế nhà phố TP.HCM”.

## Heading

Bài viết: một H1, lấy từ `post.title`. H2 nằm trong thân. Không thấy bài index nào có hai H1 trong HTML thân.

Trụ cột: một H1 “Xây nhà trọn gói TPHCM”. Title khác H1 vì title thêm năm và “Báo giá Sao Khuê”. Giữ cả hai.

Trang chủ prerender: H1 “Nhà thầu xây nhà phố và biệt thự TPHCM”, không lấy cụm trụ cột làm H1.

## Nội dung mỏng

`/tin-tuc/xay-nha-quan-8`: khoảng 293 từ. Các bài index còn lại trong phép đếm đều từ 300 từ trở lên. Ba hub production là vỏ menu, mỏng hơn hẳn so với trang React.

Không viết thêm đoạn trong lần này.

## Ảnh và link

Alt trống trong HTML bài được hàm enhance điền bằng alt của bài. Chưa lập danh sách ảnh thiếu width/height.

Anchor menu lặp nhiều lần cùng URL trụ cột: “BÁO GIÁ TRỌN GÓI”, “ĐƠN GIÁ XÂY NHÀ”, “CHI PHÍ XÂY NHÀ”, “XÂY NHÀ GIÁ RẺ”, “NHÀ PHỐ”, “XÂY NHÀ TRỌN GÓI TPHCM”, “BÁO GIÁ XÂY MỚI”. Cùng đích là đúng để khỏi tạo URL mới. Nhãn thì khác nội dung đích. Đổi nhãn menu cần duyệt.

## Schema và Open Graph

Prerender gắn canonical, robots, Open Graph và JSON-LD cho từng bài. Bài thường là `BlogPosting`. Hai trang sửa nhà và xây trọn gói là `Service`. Không thấy JSON-LD vỡ cú pháp trong hàm dựng schema. Lệch địa chỉ và `priceRange: "$$"` là lệch dữ liệu, không phải lỗi thiếu dấu.

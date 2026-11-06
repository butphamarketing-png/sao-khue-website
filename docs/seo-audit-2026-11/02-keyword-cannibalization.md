# Trùng từ khóa

Từ khóa dưới đây là từ khóa dự kiến do đối chiếu title, H1, description và H2. Site có field `metaKeywords` ở một số bài. Field đó không được xem là thứ hạng hay search intent đã đo.

Chỉ xét trang được index. Bài noindex và URL 301 không tính là đối thủ đang index.

## P0

Không có. Không thấy URL index thứ hai có H1 “Xây nhà trọn gói TPHCM”. Hai path cũ trả 301 về URL 2026.

## P1 — gần ý định, cần phân vai

| URL | Title hoặc H1 đang thấy | Vì sao gần nhau | Việc nên làm, chưa thực hiện |
|---|---|---|---|
| `/bao-gia` | Production: BÁO GIÁ THIẾT KẾ. Source local: Dự toán chi phí xây nhà | Cùng URL vừa là máy tính chi phí, vừa bị menu gọi là báo giá thiết kế | Giữ URL. Deploy HTML đúng vai dự toán. Không tạo URL giá mới |
| `/thiet-ke` | Production: THIẾT KẾ NHÀ ĐẸP TP.HCM. Source: Thiết kế nhà phố TP.HCM | Hub thiết kế đè lên `/dich-vu/thiet-ke-nha` | Hub là cổng nhà phố. Trang dịch vụ giữ hồ sơ 2D/3D |
| `/dich-vu/thiet-ke-nha` | Thiết Kế Nhà Ở TP.HCM | Cùng cụm thiết kế với hub và một công trình | Giữ làm trang dịch vụ. Công trình chỉ là case study |
| `/xay-moi` | Production: KINH NGHIỆM XÂY MỚI | Menu `withTurnkeyNavLabel` đang đổi href `/xay-moi` thành URL trụ cột | Trang kinh nghiệm và trang bán dịch vụ đang dùng chung một cú nhấp menu |
| `/dich-vu/sua-nha-tron-goi-tphcm` | Sửa Nhà Trọn Gói TP.HCM | Cùng nhu cầu sửa/cải tạo với trang dưới | Giữ làm hub sửa chữa |
| `/dich-vu/cai-tao-nha-cu` | Cải Tạo Nhà Cũ Trọn Gói | Cùng thành phố, khác mức độ: làm mới nhà cũ | Bài hỗ trợ của hub sửa, không gộp |
| `/cai-tao-nha` | Landing ads, noindex | Menu CẢI TẠO vẫn trỏ vào URL noindex | Không đưa vào sitemap. Đổi menu thì cần duyệt |

## P2 — có chữ chung, ý định khác

| URL | Cụm giao | Ý định riêng |
|---|---|---|
| `/dich-vu/xay-nha-tron-goi-binh-duong` | xây nhà trọn gói | Bình Dương |
| `/dich-vu/xay-nha-tron-goi-dong-nai` | xây nhà trọn gói, báo giá | Đồng Nai |
| `/tin-tuc/xay-nha-tron-goi-dak-lak` | xây nhà trọn gói | Đắk Lắk |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | báo giá xây nhà trọn gói | Phú Yên |
| `/dich-vu/xay-dung-nha-2-tang` | trọn gói | Nhà 2 tầng |
| `/dich-vu/xay-dung-nha-3-tang` | trọn gói | Nhà 3 tầng |
| `/dich-vu/xay-dung-biet-thu` | trọn gói | Biệt thự |
| `/dich-vu/khuyen-mai` | xây nhà trọn gói TP.HCM trong mô tả | Chương trình tặng thiết kế |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | xây nhà trọn gói TP.HCM trong heading | Cách chọn nhà thầu |
| `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | quy trình | Hướng dẫn |
| `/tin-tuc/du-toan-chi-phi-xay-nha` | chi phí | Cách lập dự toán |
| `/cong-trinh/thiet-ke-nha-phong-cach-hien-dai` | thiết kế nhà phố | Một công trình |

Các trang kích thước nhà, nếu đang index, giữ nguyên title. Không đề xuất đổi trong audit này.

## P3

`/bai-viet/ve-chung-toi` nhắc thiết kế, cải tạo và xây trọn gói trong bài giới thiệu. Đó là trang hồ sơ, không phải trang dịch vụ thứ hai.

## Link nội bộ tới URL cũ

57 bài seed còn `href` tương đối tới `/dich-vu/xay-nha-tron-goi-tphcm` hoặc slug đã gom. `rewriteRetiredHrefsInHtml()` đổi các href đó sang hub lúc prerender và lúc React render. Không sửa 57 file bài, vì đường dẫn xuất ra đã được hàm này xử lý.

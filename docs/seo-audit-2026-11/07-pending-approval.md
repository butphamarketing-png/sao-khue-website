# Chờ phê duyệt

Chưa làm các mục này.

## Có thể ảnh hưởng trang đang index

- Deploy bản vá ba hub. Title HTML production sẽ đổi từ nhãn menu sang title source. Cần chủ site bấm deploy. Không tự deploy.
- Rút bốn title dài hơn 65 ký tự, nhất là phần thô và cải tạo nhà cũ.
- Viết thêm cho `/tin-tuc/xay-nha-quan-8` nếu muốn qua ngưỡng nội dung mỏng.
- Đổi menu “KINH NGHIỆM XÂY MỚI”: đang mở URL trụ cột. Trả về `/xay-moi` sẽ đúng vai kinh nghiệm và giảm một lối menu vào trụ cột.
- Đổi nhãn “BÁO GIÁ THIẾT KẾ” vì href là `/bao-gia`, trong khi vai đã chốt là dự toán chi phí xây nhà.
- Menu CẢI TẠO đang mở `/cai-tao-nha`, URL noindex. Có thể trỏ sang `/dich-vu/sua-nha-tron-goi-tphcm`. Đó là đổi điều hướng, chưa làm.

## Không gộp và không tạo URL

- Không gộp `/dich-vu/sua-nha-tron-goi-tphcm` với `/dich-vu/cai-tao-nha-cu`.
- Không tạo trang “báo giá xây nhà trọn gói TP.HCM” mới.
- Không đảo 301. Không đưa URL không năm trở lại làm trụ cột.
- Không đổi title các trang kích thước nhà.

## Cấm sửa khi chưa có căn cứ

- Tên pháp lý đang lệch giữa “CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ” và “Công ty TNHH Kiến Trúc Sao Khuê”.
- Địa chỉ 245/8 Bình Lợi và 36 Đường 27, Vạn Phúc.
- Câu “hơn 500 công trình” và “hơn 10 năm” nếu chưa có hồ sơ.
- `priceRange: "$$"`.
- Số điện thoại 0909 075 668 và email.
- Redirect apex.

## Cách xem production sau khi duyệt deploy

Mở HTML gốc, trước khi trang chạy JavaScript, của `/bao-gia`, `/xay-moi`, `/thiet-ke` và URL 2026. Title hub phải khớp source. Title trụ cột phải còn `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`, H1 còn `Xây nhà trọn gói TPHCM`, canonical vẫn tự trỏ.

# Module 10 — Chuyển đổi

Không gửi form lên production. Không khẳng định event tới GA4.

## Hotline — Đã xác minh mã và HTML

Số 0909 075 668 có trong bài trụ cột và schema. `FloatingButtons.tsx` có `tel:` và gọi `trackAdsConversion("call")`. Sự kiện GA4 trong mã tên `click_call`. Chưa bấm trên trình duyệt.

## Zalo — Đã xác minh mã

`zalo.me/` cộng số `0909075668` từ `zaloPhone`. Nút nổi gọi `trackAdsConversion("zalo")`, event `click_zalo`. Chưa mở app Zalo trong audit này.

## Form báo giá — Đã xác minh mã, chưa gửi

`QuoteRequestModal.tsx` khoảng dòng 83 gọi `submitContactLead` với name, phone, service, message, source `quote-popup`. Thành công thì toast “Đã gửi yêu cầu báo giá”. Lỗi thì toast thất bại. Không gọi `trackAdsConversion`. Không có event `generate_lead` trên form này.

`AdsLeadForm.tsx` có `trackAdsConversion("lead")`. Form đó thuộc landing ads, không phải form chính của trang trụ cột.

Backend nhận lead: có hàm API và bảng `contact-leads`. Chưa xác minh request production vì không gửi dữ liệu giả.

Chống spam và nội dung đồng ý xử lý dữ liệu cá nhân: chưa đọc hết form. Ghi **Chưa xác minh**.

## CTA

Bài có hotline, link `/lien-he`, link `/bao-gia`. Header và nút nổi mở modal. Chưa chụp mobile. **Chưa xác minh** vị trí CTA trên điện thoại.

## Analytics — Có trong mã, chưa xác minh trên production

`SiteHead.tsx` chèn GA4 sau khi React chạy. HTML tĩnh trụ cột không chứa `googletagmanager`. ID mặc định `G-WGDHV88C2B` có thể bị settings trong database ghi đè. Không có GTM, không có Meta Pixel trong mã đã grep. Google Ads conversion chỉ chạy khi có biến `AW-` và label. Không in giá trị env. Không vào tài khoản Ads.

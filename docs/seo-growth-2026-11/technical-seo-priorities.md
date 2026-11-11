# Việc kỹ thuật, theo dữ liệu kỳ này

Không sửa code, không deploy, không đổi canonical hay redirect trong đợt lập kế hoạch.

## Index và canonical

URL 2026 có trong sitemap production đã tải (142 URL) và trả 200, canonical tự trỏ, `index,follow`. Sheet Trang của kỳ 4/8–3/11 không có dòng của URL này.

Hai URL cũ có 6 và 4 nhấp trong kỳ rồi hiện trả 301 một bước về URL 2026. Sitemap production không chứa hai URL đó.

`/bao-gia` lúc kiểm tra HTTP trong phiên này đã có title “Dự toán chi phí xây nhà | Kiến Trúc Sao Khuê”, canonical tự trỏ, `index,follow`. Số Search Console của trang này (0 nhấp, 60 hiển thị, vị trí 7,25) là trước khoảng thời gian title này lên production, vì kỳ đo dừng ngày 3/11.

## Redirect đang nuốt hiển thị

Đã đo bằng HTTP, không theo redirect:

| URL | Kết quả | Hiển thị trong file | Vị trí |
|---|---|---|---|
| `/tin-tuc/xay-nha-2-tang-binh-dinh` | 301, Location URL 2026 | 2.454 | 6,97 |
| `/tin-tuc/xay-nha-quy-nhon` | 301, Location URL 2026 | 1.636 | 26,12 |
| `/tin-tuc/sua-chua-nha-quy-nhon` | 301, Location trang sửa TP.HCM | 1.726 | 12,19 |

Cơ chế trong mã: ba slug nằm trong batch miền Trung, thuộc `THIN_FACTORY_SLUGS`, không nằm trong `RANKING_KEYWORD_SLUGS`. Slug bắt đầu bằng `xay-` được `hubForRetiredSlug()` đưa về trụ cột xây. Slug bắt đầu bằng `sua-` được đưa về hub sửa nhà. `cai-tao-nha-binh-dinh` được loại khỏi noindex và vẫn 200.

Đây là việc cần chủ site quyết, vì gỡ 301 là sửa redirect. Giữ nguyên cũng là một quyết định: Google sẽ thôi xếp các URL 301, và hiển thị 2.454 + 1.636 + 1.726 của kỳ này không tự chuyển thành thứ hạng của trang TP.HCM.

## Schema và HTML prerender

Schema trụ cột loại Service, giá theo m², `dateModified` trong mã lấy ngày seed 5/11/2026. `priceRange` tổ chức vẫn `$$`. Hai địa chỉ 245/8 Bình Lợi và 36 Đường 27 chưa được gộp. Không sửa khi chưa có văn bản pháp lý.

Prerender đã bỏ ghi đè `/bao-gia`, `/xay-moi`, `/thiet-ke` trong commit `94a9c4a`. `/bao-gia` trên production đã thấy title mới. Chưa đo lại `/xay-moi` và `/thiet-ke` trong phiên lập kế hoạch này.

## Đo chuyển đổi

Không sửa tracking. Kỳ Search Console không chứa sự kiện gọi điện, Zalo hay form.

Trong mã, nút gọi và Zalo đi qua `trackAdsConversion`. Form báo giá trong `QuoteRequestModal` gọi `generate_lead` chỉ sau khi `submitContactLead` thành công, tham số chỉ có `source`. Google Ads chỉ gửi khi môi trường có ID và label. Không bịa hai giá trị đó. File Search Console không cho biết form đã phát sinh bao nhiêu lead.

## Việc kỹ thuật xếp theo ảnh hưởng tới số đang có

1. Chốt có hay không phục vụ Quy Nhơn và Bình Định trước khi đụng ba redirect ở trên.
2. Xuất lại Search Console sau khi URL 2026 đã nằm trong kỳ đo ít nhất vài tuần. So dòng URL 2026 với hai dòng URL cũ của kỳ này.
3. Đo CTR `/bao-gia` ở kỳ sau, vì title HTML đã đổi sau ngày 3/11.
4. Giữ canonical tự trỏ và sitemap không chứa URL 301.
5. Để nguyên schema giá, địa chỉ và tracking cho đến khi có chứng từ hoặc một lỗi đo được, không phải một cảm giác.

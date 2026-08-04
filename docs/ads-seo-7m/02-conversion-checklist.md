# Checklist Conversion — GA4 ↔ Google Ads

Mục tiêu: Ads nhận được lead thật (form, gọi, Zalo) để tối ưu và tính CPL đúng.

## A. Trong Google Ads (UI)

1. **Công cụ → Đo lường → Chuyển đổi → Tóm tắt**
2. Tạo ít nhất 3 conversion (loại Website / Secondary hoặc Primary tùy giai đoạn):
   - `lead_form_submit` — Gửi biểu mẫu (Primary sau khi ổn định)
   - `click_call` — Nhấp vào số điện thoại
   - `click_zalo` — Nhấp chat Zalo
3. Với mỗi conversion, chọn **Sử dụng thẻ Google** (gtag) hoặc **Nhập từ GA4**.
4. Ghi lại:
   - Conversion ID dạng `AW-XXXXXXXXX`
   - Conversion Label cho từng sự kiện

### Cách khuyến nghị tháng 1
- **GA4 events** → liên kết GA4 với Google Ads → **Import** các event:
  - `generate_lead` (form)
  - `click_call`
  - `click_zalo`
- Hoặc dùng `AW-` + label nếu đã có thẻ Ads sẵn.

## B. Trong website (đã hỗ trợ code)

Site load GA4 qua admin (`gaTrackingId`, mặc định `G-WGDHV88C2B`).

Thêm biến môi trường frontend (Vercel / `.env`):

```bash
# Google Ads Conversion ID (AW-...)
VITE_GOOGLE_ADS_ID=AW-XXXXXXXXX

# Labels từ Google Ads (để trống nếu chỉ import từ GA4)
VITE_GOOGLE_ADS_CONV_LEAD=
VITE_GOOGLE_ADS_CONV_CALL=
VITE_GOOGLE_ADS_CONV_ZALO=
```

Sau khi set env → **redeploy** frontend.

### Sự kiện tự fire
| Hành động | Event GA4 | Ads send_to (nếu có label) |
|-----------|-----------|----------------------------|
| Form Ads lead gửi thành công | `generate_lead` | `AW-.../LEAD_LABEL` |
| Click `tel:` | `click_call` | `AW-.../CALL_LABEL` |
| Click Zalo | `click_zalo` | `AW-.../ZALO_LABEL` |

## C. Checklist kỹ thuật

- [ ] GA4 property nhận realtime khi submit form trên `/xay-nha` hoặc `/cai-tao-nha`
- [ ] Google Ads ↔ GA4 linked (cùng tài khoản quản trị)
- [ ] Import conversion từ GA4 **hoặc** điền `VITE_GOOGLE_ADS_*` + deploy
- [ ] Test 1 form thật (hoặc test lead) → Ads → Conversions có “Đã ghi nhận” trong 24–48h
- [ ] Click hotline trên mobile → event `click_call`
- [ ] Click Zalo → event `click_zalo`
- [ ] Không đếm trùng: form = 1 conversion / lead; call/zalo = secondary nếu cần

## D. GA4 — Mark as conversion (nếu import)

1. GA4 → Admin → Events
2. Đánh dấu `generate_lead`, `click_call`, `click_zalo` là conversion
3. Ads → Import những conversion đó
4. Primary: `generate_lead`; Secondary: call/zalo (tránh tối ưu sai)

## E. Không làm

- Maximize conversions khi chưa có ≥15–30 conversion / 30 ngày
- Chỉ nhìn “click” để kết luận hiệu quả
- Gắn Location asset nếu khách không muốn hiện địa chỉ

## F. Sau khi tracking OK

Chuyển dần bidding (tháng 2+): Maximize conversions với target CPA thử nghiệm khi đã có data ổn định.

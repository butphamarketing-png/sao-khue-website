# Template vận hành tuần — Google Ads Sao Khuê

Copy các bảng dưới vào Google Sheet (1 tab / bảng) hoặc dùng file CSV kèm theo.

## Tab 1 — Tổng quan tuần

| Cột | Ý nghĩa |
|-----|---------|
| week_start | Ngày bắt đầu tuần (T2) |
| spend_cai_tao | Chi tiêu Campaign Cải tạo |
| spend_xay_moi | Chi tiêu Campaign Xây mới |
| spend_total | Tổng chi |
| clicks | Tổng click |
| impressions | Tổng hiển thị |
| ctr | CTR % |
| avg_cpc | CPC TB |
| leads_form | Số form lead |
| leads_call | Số click gọi (hoặc cuộc gọi) |
| leads_zalo | Số click Zalo |
| leads_qualified | Lead đủ điều kiện (khảo sát/báo giá thật) |
| cpl_soft | spend_total / (form+call+zalo unique) |
| cpl_qualified | spend_total / leads_qualified |
| notes | Ghi chú |

**Ngưỡng cảnh báo tháng 1**
- CPC TB > 80.000đ liên tục + 0 lead → kiểm tra QS / LP / từ khóa
- CPL mềm > 1.200.000đ → siết negative + pause keyword yếu
- Lost IS (budget) cao trên ad group thắng → lấy từ buffer 500k

## Tab 2 — Search terms (hàng ngày / 2–3 lần tuần)

| date | campaign | search_term | match_type | clicks | cost | conversions | action |
|------|----------|-------------|------------|--------|------|-------------|--------|
| | Cai Tao / Xay Moi | | | | | | keep / exact / negative / pause |

**Quy tắc action**
- `negative`: intent học, tuyển dụng, free, định nghĩa, sai ngành
- `exact`: term tốt chưa có trong keyword list → thêm Exact
- `pause`: keyword gốc đốt tiền, 0 lead sau ≥15–20 click
- `keep`: có lead hoặc CTR tốt + đúng intent

## Tab 3 — Keyword / Ad group scorecard (cuối tuần)

| campaign | ad_group | keyword | match | cost | clicks | conv | cpl | decision |
|----------|----------|---------|-------|------|--------|------|-----|----------|
| | | | | | | | | scale / hold / pause |

**Pause nếu (tháng 1, dữ liệu đủ nhỏ thì nới lỏng):**
- ≥ 15 click, 0 conversion, CPC không giảm
- Search terms toàn rác dù đã negative

**Scale nếu:**
- Có ≥ 2 lead đủ điều kiện hoặc CPL mềm ổn định dưới mục tiêu
- CTR ≥ 5–8% và đúng intent

## Tab 4 — Pause / Scale rules (tham chiếu nhanh)

| Tín hiệu | Hành động |
|----------|-----------|
| Ad group CPL tốt nhất tuần | +10–20% budget từ buffer hoặc ad group kém |
| Campaign Lost IS (budget) > 30% trên nhóm thắng | Tăng ngân sách ngày nhẹ |
| Lost IS (rank) cao | Sửa RSA + LP + bid; không chỉ tăng budget |
| Keyword thiết kế lẫn vào | Pause ngay, không mở rộng |
| Form 0 nhưng call/zalo có | Giữ; tối ưu form LP |
| Form + call = 0 sau 7 ngày & >1tr spend | Audit tracking trước khi kết luận Ads xấu |

## Tab 5 — SEO sync (tuần)

| week | money_url | gsc_status | action |
|------|-----------|------------|--------|
| | /xay-nha | Indexed / Discovered / Crawled | request index / fix / ok |

## Cadence

- **Hàng ngày (10–15 phút):** chi tiêu, search terms mới → negative
- **Cuối tuần (45–60 phút):** scorecard, pause/scale, 1 quyết định budget
- **Ngày 30:** so sánh Cải tạo vs Xây mới → giữ 4/2.5 hay đảo tỷ lệ

## Không làm khi vận hành

- Tắt cả 2 campaign vì 2–3 ngày không lead
- Bật Broad hàng loạt trước khi negative ổn
- Tăng gấp đôi budget trước khi tracking đúng

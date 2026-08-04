# Sao Khuê — Google Ads + SEO (7 triệu/tháng)

Bộ deliverable triển khai theo chiến lược đã duyệt.

| File | Nội dung |
|------|----------|
| [01-campaign-setup-keywords-rsa.md](./01-campaign-setup-keywords-rsa.md) | 2 campaign, keyword Exact/Phrase, RSA, negatives, checklist setup |
| [02-conversion-checklist.md](./02-conversion-checklist.md) | GA4 ↔ Ads, env `VITE_GOOGLE_ADS_*`, test events |
| [03-seo-30d-backlog.md](./03-seo-30d-backlog.md) | Technical deploy, money pages, backlog viết 30 ngày |
| [04-weekly-ops-template.md](./04-weekly-ops-template.md) | Quy tắc vận hành tuần + ngưỡng pause/scale |
| [weekly-overview.csv](./weekly-overview.csv) | Sheet tổng quan tuần |
| [search-terms-log.csv](./search-terms-log.csv) | Log Search terms |
| [keyword-scorecard.csv](./keyword-scorecard.csv) | Scorecard keyword |

## Code hỗ trợ đã gắn

- `artifacts/sao-khue/src/lib/ads-conversions.ts` — fire `generate_lead` / `click_call` / `click_zalo`
- Form Ads, shell Ads, FloatingButtons gọi conversion
- `SiteHead` config `AW-*` nếu có `VITE_GOOGLE_ADS_ID`
- `.env.example` bổ sung biến Ads

## Thứ tự làm tiếp trên tài khoản live

1. Import keyword + RSA từ file `01`
2. Làm conversion theo `02` (env + Ads UI)
3. Deploy technical SEO trong `03`
4. Copy CSV vào Google Sheet, vận hành theo `04`

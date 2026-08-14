# SEO 30 ngày — Money pages + kỹ thuật

## A. Technical deploy checklist (code đã có local — cần deploy)

| Hạng mục | File | Trạng thái code | Việc còn lại |
|----------|------|-----------------|--------------|
| Soft-404 `/404` trả HTTP 404 | `artifacts/api-server/src/app.ts` | Đã vá | Deploy API |
| Redirect 1 bước (www + bỏ slash) | `artifacts/sao-khue/scripts/generate-vercel-redirects.ts` + `middleware.js` | Đã regenerate | Deploy |
| Sitemap ưu tiên file tĩnh | `artifacts/api-server/src/routes/sitemap.ts` | Đã vá | Deploy + kiểm tra GSC |
| Bài mới nhà thầu | `lib/seed-content/.../nha-thau-xay-nha-tron-goi-tphcm.ts` | Đã seed | Build/prerender + seed DB nếu cần |
| Ads conversion events | `ads-conversions.ts` + form/call/Zalo | Đã gắn | Set `VITE_GOOGLE_ADS_*` + redeploy |

### Sau deploy — Search Console
1. Xác nhận `https://www.kientrucsaokhue.com/sitemap.xml` = 200 + XML hợp lệ
2. Kiểm tra URL Inspection: `/`, `/xay-nha`, `/cai-tao-nha`, `/bao-gia`
3. Chỉ **Yêu cầu lập chỉ mục** các money pages dưới đây — không spam toàn bộ thin factory
4. Theo dõi báo cáo “Trang” — nhóm Crawled not indexed: kỳ vọng giảm dần trên URL quan trọng

---

## B. Money pages ưu tiên củng cố (tuần 1–2)

Không viết mới trước — củng cố + internal link + đảm bảo index:

| # | URL | Vai trò |
|---|-----|---------|
| 1 | `/xay-nha` | Ads LP xây mới |
| 2 | `/cai-tao-nha` | Ads LP cải tạo |
| 3 | `/bao-gia` | Intent báo giá + calculator |
| 4 | `/dich-vu/xay-nha-tron-goi` | Service hub xây |
| 5 | `/dich-vu/sua-chua-nha` | Service hub sửa/cải tạo |
| 6 | `/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm` | Money pricing xây |
| 7 | `/tin-tuc/bao-gia-cai-tao-nha-tphcm` | Money pricing cải tạo |
| 7b | `/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm` | Money pricing sửa nhà (Ads A3) |
| 8 | `/tin-tuc/cai-tao-nha-tphcm` | Hub SEO cải tạo |
| 9 | `/tin-tuc/chi-phi-xay-nha-tphcm` | Chi phí xây |
| 10 | `/tin-tuc/xay-nha-tphcm` | Hub SEO xây |
| 11 | `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm` | Bài mới (sau live) |
| 12 | `/lien-he` | Conversion thuần |

**Internal link rule:** từ `/xay-nha` và `/cai-tao-nha` trỏ rõ sang báo giá + dịch vụ + công trình; không đẩy Ads traffic vào bài thin/geo factory.

---

## C. Backlog viết hand-crafted (tối đa 1–2 bài/tuần)

Ưu tiên intent cao, chưa thin, hỗ trợ Ads:

| Ưu tiên | Keyword / slug gợi ý | Lý do |
|---------|----------------------|-------|
| P0 | `bao-gia-sua-nha-tron-goi-tphcm` | Khớp Ads A3 — đã seed |
| P0 | Geo cải tạo 6 quận + `cong-ty-sua-chua-nha-tphcm` | Ads 100 KW — đã seed |
| P1 | `cai-tao-nha-dang-o-tphcm` · `nang-tang-nha-cu-tphcm` · `chong-tham-san-thuong-tphcm` | Đã seed |
| P1 | `thi-cong-phan-tho-tphcm` · `bao-gia-xay-nha-2026` · chìa khóa trao tay | Ads B — đã seed |
| P2 | `cong-ty-xay-nha-tron-goi-uy-tin-tphcm` | Khác góc với bài nhà thầu |
| P2 | Long An / Bình Dương money **1 bài/khu** nếu Ads mở geo | Không làm full calendar |

**Không làm trong 30 ngày:** thêm batch factory 50–100 slug; noindex những thin đã gắn policy.

---

## D. Lịch SEO 30 ngày (tóm tắt)

| Tuần | Việc |
|------|------|
| 1 | Deploy technical + conversion env; GSC kiểm tra sitemap & 8–12 money URLs |
| 2 | Internal link Ads LP ↔ money pages; 1 bài P0 |
| 3 | Search terms Ads → ý tưởng negative + 1 bài P0/P1 |
| 4 | Review indexing money pages; quyết định bài tuần sau theo CPL Ads |

---

## E. KPI SEO hỗ trợ Ads

- Money pages chính: trạng thái “Đã lập chỉ mục” trong GSC
- Không tăng mạnh “Crawled – not indexed” vì publish thin mới
- Organic click vào `/bao-gia`, `/xay-nha`, `/cai-tao-nha` tăng dần (theo dõi GSC Performance)

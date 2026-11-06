# Module 3 — Technical SEO và khả năng lập chỉ mục

Đo 6/11/2026. Không sửa redirect, robots, sitemap, canonical.

## HTTP — Đã xác minh

| URL | Status |
|---|---|
| URL 2026 | 200 |
| URL không năm | 301 → `/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| URL ngắn `/dich-vu/xay-nha-tron-goi` | 301 → cùng đích, một bước |
| `/bao-gia`, `/xay-moi`, `/thiet-ke` | 200 |
| Sitemap 142 URL (lần quét cùng ngày) | 200 hết |
| Path lạ `/khong-ton-tai-audit-2026` | 404, robots noindex,nofollow |
| https://kientrucsaokhue.com/ | 307 → https://www.kientrucsaokhue.com/ |
| http apex | 308 → https apex |
| http www | 308 → https www |

Không thấy vòng 301 giữa URL 2026 và URL không năm. Không thấy chuỗi hai bước trên www cho hai path cũ. 307 apex là host, ngoài phạm vi sửa.

## Canonical — Đã xác minh

142 URL sitemap tự canonical. URL 2026 tự canonical. URL 301 không có thẻ canonical vì không có HTML.

## Robots — Đã xác minh

`robots.txt` cho phép `/`, chặn `/admin` và `/api/`, khai báo sitemap. Trang trụ cột `index,follow`. `/xay-nha` là `noindex,follow` và không nằm sitemap. Không có X-Robots-Tag trên các URL vừa đo header.

## Sitemap — Đã xác minh

142 loc, không có sitemap index. Có URL 2026. Không có URL không năm, không có URL ngắn. Không có URL 301 trong 142 loc.

## Redirect — Đã xác minh, không sửa

`artifacts/api-server/middleware.js` có 41 dòng map đích `/dich-vu/xay-nha-tron-goi-tphcm-2026`. Gồm `/dich-vu/xay-nha-tron-goi`, `/dich-vu/xay-nha-tron-goi-tphcm`, `/bai-viet/nha-thau-xay-nha-tron-goi-tphcm`, `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm`, `/category/xay-nha-tron-goi`, `/xay-nha-gia-re-tphcm`, `/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm`. Status thực tế của hai path chính là 301. Chưa gọi từng rule trong 41 dòng. Không mở lại slug đã 301.

## Host

307 từ apex sang www không gộp tín hiệu mạnh bằng 301. Ghi nhận. Không đổi trong nhiệm vụ này.

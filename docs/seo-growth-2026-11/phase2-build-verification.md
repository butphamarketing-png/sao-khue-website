# Kiểm tra build Phase 2 trên bản sao

Ngày 6/11/2026. Nhánh gốc `seo/pillar-onpage-tphcm`, commit `94a9c4a`. Không sửa code, không commit, không push, không deploy. Không chạy build trên working tree gốc.

## Working tree trước khi sao chép

`git diff --name-only` và `git diff --stat` chỉ có hai file:

- `artifacts/sao-khue/src/lib/menu.ts` — 6 dòng
- `artifacts/sao-khue/src/lib/site-settings.ts` — 37 dòng

Tổng 25 dòng thêm, 18 dòng xóa. Ngoài ra còn file chưa theo dõi trong `docs/ads-seo-7m/`, `docs/seo-growth-2026-11/` và `scripts/audit-*`. Không reset, checkout hay stash.

## Bản sao

Đường dẫn: `D:\tmp\sao-khue-phase2-build`

Robocopy toàn bộ monorepo, gồm source, `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.npmrc`, cấu hình Vite/TypeScript, các package workspace và `.git`. Loại `node_modules`, `dist`, `.turbo` và `.env`. 37.308 file, 1,137 GB. `git diff` trong bản sao so với `94a9c4a` vẫn chỉ hai file menu. Hash hai file trùng working tree gốc:

- `menu.ts` `ae8441e470ba74c82e3484337d6fa22d82a6991c`
- `site-settings.ts` `090b47702432819ae5042e073f7a310326d807c1`

`pnpm` 9.15 không đọc được lockfile của pnpm 10. `corepack pnpm` 10.7.0 với `--frozen-lockfile` dừng vì `overrides` trong `pnpm-workspace.yaml` chưa có trong lockfile. Đây là lệch có sẵn, không phải do Phase 2. Cài trong bản sao bằng `corepack pnpm install --no-frozen-lockfile`: tải 522 gói vào bản sao, ghi lại `pnpm-lock.yaml` chỉ trong bản sao. Script `preinstall` gốc gọi `sh` và thất bại trên Windows sau khi gói đã được thêm. Lệnh build của site vẫn chạy được.

## Lệnh build

Đúng lệnh site, trùng `buildCommand` của Vercel, chỉ chạy trong bản sao:

`corepack pnpm --filter @workspace/sao-khue run build`

Script này chạy `vite build`, `prerender-html.ts`, `generate-vercel-redirects.ts`, `generate-known-paths.ts`, `generate-sitemap.ts`. `DATABASE_URL` và `SUPABASE_DATABASE_URL` được bỏ trong tiến trình này để prerender dùng seed, không nối database.

Kết quả: thoát mã 0. Vite 7.3.2, 2.603 module, 26,85 giây. Prerender ghi 6.917 trang HTML + `404.html`. Redirect: 400 rule + 214 known paths. Sitemap seed: 208 URL. Log: `D:\tmp\sao-khue-phase2-build-log.txt`.

## Menu trong bundle

Bundle `dist/public/assets/index-CBZpoZwh.js` chứa menu đã render:

| Mục | Trong bundle |
|---|---|
| BÁO GIÁ XÂY NHÀ | `/bao-gia` (cả mục trong BÁO GIÁ và THIẾT KẾ) |
| KINH NGHIỆM XÂY MỚI | `/xay-moi` |
| CẢI TẠO NHÀ CŨ trong menu | `/dich-vu/cai-tao-nha-cu` |
| CẢI TẠO NHÀ PHỐ | `/cai-tao-nha` |
| CẢI TẠO MẶT TIỀN | `/cai-tao-nha` |
| Cẩm nang cải tạo nhà | `/cai-tao-nha` |

Hàm `withTurnkeyNavLabel` trong bundle vẫn đổi nhãn “BÁO GIÁ THIẾT KẾ” + `/bao-gia` thành “BÁO GIÁ XÂY NHÀ”, giữ “KINH NGHIỆM XÂY MỚI” ở `/xay-moi`, và chỉ đưa “CẢI TẠO NHÀ CŨ” từ `/cai-tao-nha` sang `/dich-vu/cai-tao-nha-cu`.

Hai chỗ cứng, không thuộc `defaultNavMenu`, vẫn ghi “CẢI TẠO NHÀ CŨ” tới `/cai-tao-nha`: `Footer.tsx` và `BaoGiaSidebar.tsx`. Phase 2 không sửa hai file này.

## SEO metadata trong HTML đã sinh

| Trang | Title | H1 | Canonical | Robots |
|---|---|---|---|---|
| `/bao-gia` | Dự toán chi phí xây nhà \| Kiến Trúc Sao Khuê | Dự toán chi phí xây nhà | `https://www.kientrucsaokhue.com/bao-gia` | index,follow,max-image-preview:large |
| `/thiet-ke` | Thiết kế nhà phố TP.HCM \| Kiến Trúc Sao Khuê | Thiết kế nhà phố TP.HCM | `.../thiet-ke` | index,follow,max-image-preview:large |
| `/xay-moi` | Kinh nghiệm xây nhà mới \| Kiến Trúc Sao Khuê | Kinh nghiệm xây nhà mới | `.../xay-moi` | index,follow,max-image-preview:large |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | Xây nhà trọn gói TPHCM | `.../dich-vu/xay-nha-tron-goi-tphcm-2026` | index,follow,max-image-preview:large |

Description `/bao-gia` có “3,55 triệu/m²” và “4,85 triệu/m²”. Description trụ cột có “từ 4,85 triệu/m² sàn ở”.

## Redirect trong middleware đã sinh

`artifacts/api-server/middleware.js` của bản sao dùng `Response.redirect(..., 301)`.

- `/dich-vu/xay-nha-tron-goi` → `/dich-vu/xay-nha-tron-goi-tphcm-2026`
- `/dich-vu/xay-nha-tron-goi-tphcm` → `/dich-vu/xay-nha-tron-goi-tphcm-2026`

`/xay-moi`, `/bao-gia` và `/cai-tao-nha` không có rule redirect. File middleware sinh ra trùng byte với file đang commit (SHA-256 `2CB07FB62578`).

## File sinh tự động

| File | So với bản đang commit |
|---|---|
| `artifacts/api-server/middleware.js` | Trùng |
| `artifacts/api-server/public/robots.txt` | Trùng. Allow `/`, chặn `/admin` và `/api/`, sitemap `https://www.kientrucsaokhue.com/sitemap.xml` |
| `artifacts/sao-khue/dist/public/robots.txt` | Trùng nội dung robots trên |
| `vercel.json` | Trùng. `redirects` vẫn là mảng rỗng |
| `known-paths.json` (dist và api-server public) | Trùng. 214 path, gồm `/bao-gia`, `/xay-moi`, `/cai-tao-nha`, `/dich-vu/cai-tao-nha-cu`, URL trụ cột 2026 |
| `sitemap.seed.xml` | 208 URL, cùng tập `<loc>` với bản commit. Không có hai URL cũ của trụ cột, không có `/xay-nha`, không có `/cai-tao-nha`. Mọi `<lastmod>` đổi từ `2026-10-30` sang `2026-11-06` |

## Working tree gốc sau build

`git status --short`, `git diff --name-only` và `git diff --stat` giữ nguyên như trước khi sao chép. Hash hai file menu không đổi. `middleware.js`, `sitemap.seed.xml`, `robots.txt` và `vercel.json` không có thay đổi mới.

## Lỗi còn lại

- Lockfile không cài được ở chế độ frozen vì `overrides` chưa được ghi vào `pnpm-lock.yaml`. Bản sao đã tự ghi lại lockfile. Gốc không đổi.
- `preinstall` cần `sh`, không có trên Windows. Không chặn build site lần này.
- `Footer.tsx` và `BaoGiaSidebar.tsx` vẫn gắn nhãn “CẢI TẠO NHÀ CŨ” với `/cai-tao-nha`.
- Sitemap sinh ra cập nhật `lastmod` toàn bộ 208 URL sang ngày build. Tập URL không đổi. Nếu build trên cây gốc, file `sitemap.seed.xml` sẽ bị ghi đè phần ngày.

## Kết luận

BUILD THÀNH CÔNG – ĐỦ ĐIỀU KIỆN CHUYỂN SANG PREVIEW.

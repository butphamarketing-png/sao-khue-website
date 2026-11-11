# Triển khai Phase 2 — menu

Ngày 6/11/2026. Nhánh `seo/pillar-onpage-tphcm`. Nền `94a9c4a`. Không commit, không push, không deploy.

## A. Tổng quan

Đã đổi nhãn báo giá, giữ mục kinh nghiệm ở `/xay-moi`, và chuyển “CẢI TẠO NHÀ CŨ” sang trang dịch vụ đang trả 200.

Chưa đổi “CẢI TẠO NHÀ PHỐ”, “CẢI TẠO MẶT TIỀN” và “Cẩm nang cải tạo nhà”. Bài đúng chủ đề của hai mục đầu đang 301. Không có cẩm nang cải tạo nào đang index để thay landing.

Menu cha “CẢI TẠO” giữ `/dich-vu/sua-nha-tron-goi-tphcm`.

## B. Thay đổi

| File | Vị trí | Cũ | Mới | Lý do |
|---|---|---|---|---|
| `artifacts/sao-khue/src/lib/menu.ts` | dòng 35 và 51 | BÁO GIÁ THIẾT KẾ, href `/bao-gia` | BÁO GIÁ XÂY NHÀ, href `/bao-gia` | Đúng nhãn đã duyệt. Có hai mục cùng nhãn và cùng href |
| `artifacts/sao-khue/src/lib/menu.ts` | dòng 90 | CẢI TẠO NHÀ CŨ → `/cai-tao-nha` | `/dich-vu/cai-tao-nha-cu` | Trang dịch vụ 200, title và thân bài nói về cải tạo nhà cũ |
| `artifacts/sao-khue/src/lib/site-settings.ts` | `withTurnkeyNavLabel`, khoảng dòng 576–605 | Mọi href `/xay-moi` thành URL 2026 | Mục “KINH NGHIỆM XÂY MỚI” giữ `/xay-moi`. Href `/xay-moi` của mục khác vẫn về URL 2026 | Chỉ gỡ ghi đè đúng một mục |
| Cùng hàm | | Không đổi nhãn báo giá lúc render | Nếu JSON menu còn “BÁO GIÁ THIẾT KẾ” và href `/bao-gia`, render thành “BÁO GIÁ XÂY NHÀ” | Menu lưu trong cấu hình site vẫn ra nhãn mới |
| Cùng hàm | | | “CẢI TẠO NHÀ CŨ” đang trỏ `/cai-tao-nha` được đổi thành `/dich-vu/cai-tao-nha-cu` | Cùng lý do với `menu.ts`, kể cả khi menu lấy từ JSON cũ |

`ThietKeSidebar.tsx` vẫn có nhãn “BÁO GIÁ THIẾT KẾ” nhưng href là `/tin-tuc/thiet-ke-nha-dep-gia-re`. Không đổi, vì đó không phải mục menu `/bao-gia`.

## C. Menu cải tạo

| Menu | URL cũ | URL sau sửa | Căn cứ |
|---|---|---|---|
| CẢI TẠO (mục cha) | `/dich-vu/sua-nha-tron-goi-tphcm` | Giữ | Bài sửa nhà trọn gói liệt kê kết cấu, chống thấm, mặt tiền và nâng tầng. Đây là trang index cho cả nhóm, không phải trang của riêng “nhà cũ” |
| CẢI TẠO NHÀ CŨ | `/cai-tao-nha` | `/dich-vu/cai-tao-nha-cu` | HTTP 200. Title “Cải Tạo Nhà Cũ Trọn Gói 2026”. Thân bài phân biệt cải tạo với sửa chữa và nói làm mới mặt tiền, bố trí phòng, gia cố |
| CẢI TẠO NHÀ TRỌN GÓI | `/dich-vu/sua-nha-tron-goi-tphcm` | Giữ | Đúng bài sửa và cải tạo trọn gói |
| CẢI TẠO NHÀ PHỐ | `/cai-tao-nha` | Giữ | `/tin-tuc/cai-tao-nha-pho-tphcm` có bài “Cải tạo nhà phố TP.HCM” nhưng HTTP 301 về trang sửa nhà. Không trỏ menu vào URL đang chuyển hướng. Không lấy trang nhà cũ thay cho nhà phố |
| NÂNG TẦNG NHÀ PHỐ | `/dich-vu/nang-tang-nha-pho` | Giữ | Bài riêng, title “Nâng Tầng Nhà Phố Trọn Gói 2026” |
| CHỐNG THẤM NHÀ | `/dich-vu/sua-nha-tron-goi-tphcm` | Giữ | Không có trang chống thấm index riêng trong phạm vi đã đọc. Không mở rộng sang mục này |
| CẢI TẠO MẶT TIỀN | `/cai-tao-nha` | Giữ | `/tin-tuc/cai-tao-mat-tien-nha-tphcm` có bài mặt tiền nhưng HTTP 301 về trang sửa nhà. Trang sửa nhà chỉ có một gạch đầu về mặt tiền, không phải trang mặt tiền |
| Cẩm nang cải tạo nhà | `/cai-tao-nha` | Giữ | `/tin-tuc/bao-gia-cai-tao-nha-cu` là bài giá, HTTP 200, không phải cẩm nang. Cẩm nang xây nhà 2026 là bài xây mới |

`/cai-tao-nha` vẫn 200, noindex, H1 “Cải tạo nhà phố — giữ kết cấu, làm mới công năng”. Không đổi noindex, không thêm redirect, không xóa landing.

Chủ site cần quyết nếu muốn mở lại index cho bài nhà phố và bài mặt tiền. Việc đó đụng redirect và noindex, nằm ngoài Phase 2.

## D. Kiểm tra

- Báo giá: hai mục trong `menu.ts` là “BÁO GIÁ XÂY NHÀ”, href `/bao-gia`.
- Kinh nghiệm: nhãn giữ nguyên. Hàm render gán `/xay-moi` trước nhánh đổi href sang URL 2026. Các mục “XÂY MỚI” khác nếu còn href `/xay-moi` vẫn về trụ cột.
- Cải tạo: chỉ “CẢI TẠO NHÀ CŨ” rời `/cai-tao-nha`. Ba mục còn lại giữ landing.
- Trụ cột: không sửa file bài, H1, title, canonical.
- `git diff --name-only` chỉ có hai file menu. Không có `middleware.js`, sitemap, `robots.txt`.

## E. Build và test

Đã chạy `pnpm exec tsc -p tsconfig.json --noEmit` trong `artifacts/sao-khue`. Thoát mã 2. Lỗi là `TS6305` thiếu file khai báo đã build và `SiteSettingsFull` thiếu field. Không có lỗi ở `menu.ts`. Đây là lỗi typecheck có từ trước, không phát sinh từ hai nhánh href mới.

Không chạy `pnpm --filter @workspace/sao-khue run build`. Script build gọi prerender rồi `generate-vercel-redirects.ts` và `generate-sitemap.ts`, sẽ ghi middleware và sitemap.

Không có script test.

## F. Git

```
artifacts/sao-khue/src/lib/menu.ts          | 6 ++---
artifacts/sao-khue/src/lib/site-settings.ts | 37 +++++++++++++++++------------
2 files changed, 25 insertions(+), 18 deletions(-)
```

Chưa commit. Chưa push. Production chưa nhận bản này.

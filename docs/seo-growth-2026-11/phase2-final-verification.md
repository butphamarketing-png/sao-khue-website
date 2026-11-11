# Kiểm tra cuối Phase 2

Ngày 6/11/2026. Nhánh `seo/pillar-onpage-tphcm`. Nền `94a9c4a`. Không sửa code, không commit, không push, không deploy, không chạy build.

## TypeScript

Lệnh `pnpm exec tsc -p tsconfig.json --noEmit` trong `artifacts/sao-khue` thoát mã 2, 161 lỗi. `tsconfig.json` đặt `noEmit: true` và không bật incremental. Lệnh này không ghi file nguồn.

| Mã | Số lần | Kết luận |
|---|---|---|
| TS2339 | 118 | Có từ trước |
| TS6305 | 27 | Có từ trước |
| TS2353 | 4 | Có từ trước |
| TS7006 | 4 | Có từ trước |
| TS2345 | 4 | Có từ trước |
| TS2551 | 4 | Có từ trước |

`menu.ts` không có dòng nào trong log.

`site-settings.ts` có 14 lỗi. 13 lỗi nằm ở dòng 1 và 402–450, phía trên hàm đã sửa. Dòng 402 trên commit `94a9c4a` vẫn là `merged.address1`. Các lỗi `hotline1`, `logoUrl`, `companyName` cũng có trong file của commit đó. Dòng 647 của bản đang sửa là `return s.hotline1`, cùng câu đã có ở commit nền, chỉ lệch số dòng vì hàm menu dài thêm. Hunk sửa bắt đầu ở dòng 578. Không có lỗi TypeScript nào nằm trong hunk đó.

TS6305 là thiếu `lib/api-client-react/dist/index.d.ts` và file khai báo của `replit-auth-web`. Hai file nguồn đó không nằm trong diff. Lỗi xuất hiện khi dist của package chưa được build, trên cả commit nền lẫn working tree.

Không có lỗi phát sinh từ Phase 2.

## Menu sau render

Desktop dùng `MainNav`. Mobile dùng danh sách trong `Header`. Footer lấy `useNavMenu()` cho cột dịch vụ. Cả ba đọc cùng một mảng sau `withTurnkeyNavLabel()`. Không có mảng menu riêng cho mobile.

JSON mặc định là `JSON.stringify(defaultNavMenu)` trong `site-settings.ts`. Nếu cơ sở dữ liệu còn menu cũ, cùng hàm vẫn đổi nhãn và href khi title khớp. Không đọc được JSON đang lưu trên production trong lần kiểm tra này.

Đã chạy hàm hiện tại lên `defaultNavMenu` và lên một JSON giả còn nhãn cũ.

| Mục | Sau render | Đúng yêu cầu |
|---|---|---|
| BÁO GIÁ XÂY NHÀ, cả mục trong BÁO GIÁ và THIẾT KẾ | `/bao-gia` | Có |
| JSON cũ “BÁO GIÁ THIẾT KẾ” + `/bao-gia` | thành “BÁO GIÁ XÂY NHÀ”, `/bao-gia` | Có |
| KINH NGHIỆM XÂY MỚI | `/xay-moi` | Có |
| Mục “XÂY MỚI” nếu href vẫn là `/xay-moi` | nhãn “XÂY TRỌN GÓI”, href URL 2026 | Hành vi cũ được giữ |
| CẢI TẠO NHÀ CŨ | `/dich-vu/cai-tao-nha-cu` | Có |
| CẢI TẠO NHÀ PHỐ, CẢI TẠO MẶT TIỀN, Cẩm nang cải tạo nhà | `/cai-tao-nha` | Giữ như đã quyết |
| Menu cha CẢI TẠO | `/dich-vu/sua-nha-tron-goi-tphcm` | Không đổi |

Trong `defaultNavMenu` chỉ có một href `/xay-moi`, đúng mục kinh nghiệm. Không có mục “xây mới” thứ hai trong menu mặc định.

HTML prerender không in menu dropdown. `navHome()` chỉ là vài link tĩnh, trong đó có trụ cột. `buildMenuSubPages()` đọc `defaultNavMenu` nhưng bỏ path đã được trang tĩnh giữ.

Chưa bấm menu trên trình duyệt.

## Git

`git diff --name-only` chỉ có:

- `artifacts/sao-khue/src/lib/menu.ts`
- `artifacts/sao-khue/src/lib/site-settings.ts`

`git diff --stat`: 2 file, 25 dòng thêm, 18 dòng xóa.

`git diff --check` không báo lỗi khoảng trắng. Chỉ có cảnh báo Git sẽ đổi LF thành CRLF khi commit.

`git status --short` còn file chưa theo dõi: `docs/seo-growth-2026-11/`, `docs/ads-seo-7m/`, và script audit trong `scripts/`. Chúng không phải diff của hai file menu.

## Bảo vệ SEO

Diff không đụng bài trụ cột, canonical, `middleware.js`, `robots.txt`, sitemap, hay file redirect. Không thêm path mới trong routing. Href mới `/dich-vu/cai-tao-nha-cu` là trang dịch vụ đã có, HTTP 200 từ lần đo trước.

## Build

Script `build` của `@workspace/sao-khue` chạy lần lượt:

1. `vite build` ghi `artifacts/sao-khue/dist`.
2. `prerender-html.ts` ghi HTML trong dist.
3. `generate-vercel-redirects.ts` ghi `artifacts/api-server/middleware.js` và xóa mảng redirects trong `vercel.json`.
4. `generate-known-paths.ts` ghi `known-paths.json` ở dist và `artifacts/api-server/public`. Menu nằm trong tập path này.
5. `generate-sitemap.ts` ghi `dist/public/robots.txt`, `artifacts/api-server/public/sitemap.seed.xml` và `artifacts/api-server/public/robots.txt`. Có thể xóa `sitemap.xml` tĩnh nếu file đó còn.

`vercel.json` gọi đúng script đó rồi copy dist sang public của API. Vite build không chạy `tsc`. Lỗi typecheck cũ không chặn lệnh build, nhưng lệnh build vẫn ghi middleware, sitemap và robots.

Không có cách chạy script này mà không ghi các file đó. Một bản sao thư mục nằm ngoài working tree thì build được mà không đụng cây hiện tại. Lần này không tạo bản sao và không chạy build.

## Kết luận

Chưa đủ điều kiện chạy build trên working tree hiện tại.

Hai file menu đã đúng phạm vi và không thêm lỗi TypeScript. Build chỉ an toàn sau khi chủ site chấp nhận hoàn nguyên middleware, sitemap và robots nếu script ghi đè, hoặc build trên một bản sao tách khỏi cây này.

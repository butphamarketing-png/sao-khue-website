# Module 1 — Kiến trúc website

Ngày đo: 6/11/2026. Giai đoạn A và B. Không sửa mã website.

Site không phải Next.js. Không có App Router hay Pages Router.

| Thành phần | File thực tế | Vai trò | Rủi ro |
|---|---|---|---|
| Framework | `pnpm-workspace.yaml` (React 19.1.0, Vite 7), `artifacts/sao-khue/package.json` | SPA React, router `wouter` | Google đọc HTML do prerender tạo, không đọc state React |
| Routing | `artifacts/sao-khue/src/App.tsx` | `/`, `/bao-gia`, `/thiet-ke`, `/xay-moi`, `/xay-nha`, `/cai-tao-nha`, `/dich-vu/:slug`, `/tin-tuc/:slug`, `/cong-trinh/:slug` | Route ads và route nội dung dễ trùng path với menu |
| Metadata | `artifacts/sao-khue/src/lib/seo.ts`, `scripts/prerender-html.ts` | Title, description, canonical, JSON-LD | Prerender ghi file theo path. Bản ghi sau đè bản ghi trước |
| Canonical | `seo.ts` `setCanonical`, prerender inject | URL tuyệt đối www | Trang trụ cột đang tự trỏ đúng |
| Sitemap | `artifacts/api-server/src/routes/sitemap.ts`, rewrite `/sitemap.xml` trong `vercel.json` | XML lúc request | Seed `sitemap.seed.xml` không phải file Google đọc |
| Robots | `artifacts/sao-khue/public/robots.txt`, rewrite `/robots.txt` | Allow `/`, chặn `/admin` và `/api/` | Không chặn CSS/JS/ảnh |
| Schema | `seo.ts`, `SiteHead.tsx`, prerender | LocalBusiness, Service, FAQ, HowTo | `dateModified` của bài trụ cột bị gán cứng |
| Redirect | `artifacts/api-server/middleware.js` | Map path cũ sang hub | 41 đích trỏ URL 2026. Không sửa trong audit này |
| Hosting | `vercel.json` | Build Vite, copy `dist/public` vào `artifacts/api-server/public` | Rewrite `/xay-moi` và `/thiet-ke` về `/index.html` nếu file tĩnh mất |
| Cache | Header `Cache-Control: public, max-age=0, must-revalidate`, `X-Vercel-Cache` | CDN Vercel | HIT không giữ HTML của bản build khác khi hash JS đã đổi |
| Ảnh | `public/images/sao-khue/*.jpg` | JPG tĩnh, không pipeline AVIF | 180–381 KB mỗi ảnh trụ cột |
| Render | `prerender-html.ts` sau `vite build` | HTML tĩnh cho crawler, React hydrate sau | Title trong HTML và title sau khi chạy JS có thể khác |
| Header / menu | `src/components/Header.tsx`, `src/lib/menu.ts` | Menu và link hub | Mục menu trùng path `/bao-gia`, `/thiet-ke`, `/xay-moi` |
| Footer | component footer trong `artifacts/sao-khue/src/components` | Liên hệ, hotline | Địa chỉ lấy từ settings, chưa chốt trụ sở |
| Breadcrumb | `src/components/Breadcrumbs.tsx`, `buildBreadcrumbSchema` | Crumb + schema | Khớp path bài |
| CTA | `FloatingButtons.tsx`, `Header.tsx` | Gọi, Zalo, mở báo giá | Form chính không bắn event GA4 |
| Form | `QuoteRequestModal.tsx`, `AdsLeadForm.tsx` | Lead về API `submitContactLead` | Hai form không cùng một lớp tracking |
| Analytics | `SiteHead.tsx` `injectGA` | GA4 sau hydrate. ID mặc định `G-WGDHV88C2B` | HTML tĩnh không chứa gtag. ID production có thể bị settings ghi đè |

Nội dung bài nằm ở `lib/seed-content`. Database Postgres chỉ dùng khi không build trên Vercel. Build Vercel dùng seed (`prerender-html.ts` khoảng dòng 744).

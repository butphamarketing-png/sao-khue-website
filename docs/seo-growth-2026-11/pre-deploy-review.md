# Kiểm tra SEO trước khi triển khai — Kiến Trúc Sao Khuê

Ngày kiểm tra: 2026-11-10 · Nhánh: `seo/pillar-onpage-tphcm` · Phạm vi: **chỉ báo cáo**.

- Không sửa source, không đổi 2 URL chuẩn, không đổi redirect.
- Không commit / push / deploy, không thao tác Search Console.
- Toàn bộ số liệu lấy từ **bản build local** (`artifacts/sao-khue/dist/public`, prerender seed, `middleware.js` generated). **Production chưa thay đổi** — production vẫn chạy build cũ.

URL chuẩn (giữ nguyên):

| Vai trò | URL |
| --- | --- |
| Dịch vụ (money page) | `/dich-vu/xay-nha-tron-goi-tphcm` |
| Tin tức (thông tin) | `/tin-tuc/xay-nha-tron-goi-tphcm-2026` |

---

## Cập nhật 2026-11-11 — đã xử lý ở local (chưa commit / deploy)

Các mục 1–6 bên dưới giữ nguyên làm **ảnh chụp lúc kiểm tra 2026-11-10**. Sau đó, theo duyệt của chủ site, đã sửa source local như sau. Kết quả kiểm bằng bản build local seed: so trước/sau trên 27.639 path qua middleware và 6.893 trang prerender (HTML đã chuẩn hóa bỏ tên asset).

| Mục | Trạng thái | Thay đổi |
| --- | --- | --- |
| Khôi phục bài `/tin-tuc/xay-nha-tron-goi-tan-phu` | **Đã làm** | `sitemap-policy.ts`: thêm slug vào `PROMOTED_GEO_SLUGS`. URL trả 200, canonical tự trỏ, robots `index,follow`, có 1 lần trong sitemap (210 URL). Nội dung là bài viết tay gốc trong `p1-geo-handcraft.ts`, không viết lại. Alias `/xay-nha-tron-goi-tan-phu` và `/bai-viet/xay-nha-tron-goi-tan-phu` 301 về bài (1 bước). |
| Mục 1 — link Tân Phú (#1, #3, #5, #6) | **Đã xử lý gián tiếp** | Khi bài Tân Phú được khôi phục, 4 anchor "trọn gói Tân Phú" dẫn đúng bài `/tin-tuc/xay-nha-tron-goi-tan-phu` thay vì trang dịch vụ. Chữ anchor giữ nguyên vì giờ khớp đích. |
| Mục 1 — link CTA #4 | **Đã làm** | `money-page-overrides.ts`: bỏ link "Trọn gói Tân Phú" ở CTA, còn "Hotline 0909 075 668". |
| Mục 1 — "xây nhà trong hẻm" (#2) | **Đã làm** | Đổi thành `<a href="/tin-tuc/do-be-tong-nha-trong-hem-tphcm">đổ bê tông nhà trong hẻm</a>` trên `/tin-tuc/xay-nha-tan-phu` (`money-page-overrides-batch2.ts`) và trên bài trọn gói Tân Phú (`p1-geo-handcraft.ts`). |
| Mục 2 — anchor Đắk Lắk | **Đã làm** | `dak-lak-tin-tuc-articles-batch4.ts` (template): "xây nhà Đắk Lắk" → `/tin-tuc/xay-dung-nha-dak-lak`. `xay-dung-nha-3-tang.ts`: "xây nhà 3 tầng Đắk Lắk" → `<a href="/tin-tuc/xay-nha-tron-goi-dak-lak">xây nhà trọn gói Đắk Lắk</a>`. `chi-phi-xay-nha-2-tang-dak-lak.ts`: gộp 2 link đơn giá/báo giá thành `<a href="/tin-tuc/xay-nha-tron-goi-dak-lak">bảng giá xây nhà trọn gói Đắk Lắk</a>`. Template batch4 dùng chung nên ~130 trang Đắk Lắk (phần lớn noindex) cùng đổi đúng 1 link này. **Redirect Đắk Lắk không đổi.** |
| Mục 2 — "trọn gói Bình Thạnh" | **Đã làm (đợt 2)** | `xay-nha-pho-binh-thanh.ts`: bỏ link "trọn gói Bình Thạnh" (đích noindex, bị viết lại về trang dịch vụ). Link hub "xây nhà Bình Thạnh" ngay cạnh giữ nguyên. |
| Mục 3 — ngày đăng bài tin tức | **Đã làm (đợt 2)** | `index.ts` (`toFallbackPost`): `createdAt`/`updatedAt` của `xay-nha-tron-goi-tphcm-2026` = `2026-11-11` (ngày bài lên production). `prerender-html.ts`: `datePublished` / `article:published_time` lấy `createdAt` của fallback post khi bản build dùng seed. Các bài khác không đổi ngày. |
| Mục 4 — thời gian thi công | **Đã làm (đợt 2)** | Chủ site chốt: mặt tiền/đường lớn 4–7 tháng, hẻm hẹp 5–8 tháng. Hai trang index còn ghi 5–8 không điều kiện đã ghi rõ điều kiện: `/tin-tuc/xay-nha-tron-goi-tan-phu` và `/tin-tuc/xay-nha-cu-chi` (`p1-geo-handcraft.ts`). Các chỗ 5–8 còn lại nằm ở trang noindex hoặc đã ghi "hẻm". |
| Mục 5a — 5 link tự trỏ trang dịch vụ | **Đã làm** | `xay-nha-tron-goi-tphcm.ts`: bỏ "1 trệt 2 lầu", "nhà 4 tầng" khỏi dòng "Cách tính theo khổ đất khác"; bỏ 3 câu "Xem … " trong "Số tầng và kiểu mái". Còn 1 link tự trỏ ở nav. Title, H1, canonical giữ nguyên. |
| Mục 5b — nút sidebar | **Đã làm (đợt 2)** | `BaoGiaSidebar.tsx`: 5 nút cùng trỏ trang dịch vụ còn 1 ("BÁO GIÁ XÂY NHÀ TRỌN GÓI TP.HCM"); "CHI PHÍ XÂY NHÀ" đổi thành "DỰ TOÁN CHI PHÍ XÂY NHÀ" → `/tin-tuc/du-toan-chi-phi-xay-nha`. `XayMoiSidebar.tsx`: bỏ "NHÀ PHỐ" và "BÁO GIÁ XÂY MỚI" (trùng đích). |

Kết quả kiểm sau khi sửa:

- Trạng thái HTTP: so với trước khi khôi phục Tân Phú, chỉ 3 path đổi (bài Tân Phú → 200 và 2 alias của nó). Các bước sửa link sau đó không đổi trạng thái path nào. Sitemap 210 URL, không trùng.
- Hai URL chuẩn vẫn 200; 3 redirect của đợt tách URL vẫn đúng 1 bước; không có vòng lặp.
- Anchor địa phương → trang dịch vụ: từ 13 trường hợp còn 1 ("trọn gói Bình Thạnh").
- Link thân bài từ `/tin-tuc/xay-nha-tan-phu` về trang dịch vụ: từ 6 còn 0.

---

## Nguyên nhân chung (đọc trước mục 1 và 2)

Hầu hết link "lạ" trỏ về trang dịch vụ **không được viết trỏ thẳng vào trang dịch vụ**. Source trỏ tới các slug tin tức đã retire (noindex). Lúc render, `rewriteRetiredHrefsInHtml` → `canonicalInternalPath` → `hubForRetiredSlug` đổi href thành `HUB_XAY_NHA = /dich-vu/xay-nha-tron-goi-tphcm`. Middleware cũng 301 các slug đó về trang dịch vụ.

Hệ quả: **anchor giữ nguyên chữ của bài cũ** (Tân Phú, Đắk Lắk, Bình Thạnh, "trong hẻm", "4 tầng"…), còn đích đến là trang dịch vụ TPHCM chung. Vì vậy cách sửa đúng là sửa ở **source anchor / href gốc**, không phải ở redirect.

---

## 1. Sáu link thân bài trên `/tin-tuc/xay-nha-tan-phu` → trang dịch vụ

Tổng: 7 link tới trang dịch vụ trên trang này, gồm 1 link nav và **6 link trong thân bài**.

| # | Anchor (render) | Href gốc trong source | Vị trí (H2 chứa) | Nguồn |
| --- | --- | --- | --- | --- |
| 1 | trọn gói Tân Phú | `/tin-tuc/xay-nha-tron-goi-tan-phu` | "Xây nhà Tân Phú — đặc điểm khu vực", dòng liên kết cuối mục | `money-page-overrides-batch2.ts:449` |
| 2 | xây nhà trong hẻm | `/tin-tuc/xay-nha-trong-hem-tphcm` | cùng dòng với #1 | `money-page-overrides-batch2.ts:449` |
| 3 | xây nhà trọn gói Tân Phú | `/tin-tuc/xay-nha-tron-goi-tan-phu` | "Trọn gói vs thô tại Tân Phú" | `money-page-overrides-batch2.ts:772` (block bổ sung) |
| 4 | Trọn gói Tân Phú | `/tin-tuc/xay-nha-tron-goi-tan-phu` | "Gửi hồ sơ khảo sát Tân Phú" (CTA) | `money-page-overrides.ts:2820` (block bổ sung) |
| 5 | trọn gói Tân Phú | `/tin-tuc/xay-nha-tron-goi-tan-phu` | "Nhà phố Tân Phú — mặt tiền vs hẻm" | `money-page-overrides.ts:2853` (block bổ sung) |
| 6 | trọn gói Tân Phú | `/tin-tuc/xay-nha-tron-goi-tan-phu` | "So trọn gói Tân Phú" | `soft-seo-depth-r3.ts:52` |

Middleware local: `/tin-tuc/xay-nha-tron-goi-tan-phu` → 301 → dịch vụ; `/tin-tuc/xay-nha-trong-hem-tphcm` → 301 → dịch vụ.

### Đoạn chứa link và đánh giá

**#1 — "trọn gói Tân Phú"**
- Đoạn: `trọn gói Tân Phú · xây nhà trong hẻm · cải tạo Tân Phú.` (dòng liên kết trần, không có câu dẫn).
- Liên quan: trung bình. Trang đích là dịch vụ TPHCM chung; thân trang chỉ nhắc "Tân Phú" 1 lần.
- Tự nhiên: thấp, vì đây là danh sách từ khóa ngăn bằng "·".
- **Đề xuất: Sửa anchor.** Ví dụ "dịch vụ xây nhà trọn gói TP.HCM", hoặc viết thành câu có ngữ cảnh.

**#2 — "xây nhà trong hẻm"**
- Đoạn: cùng dòng với #1.
- Liên quan: **lệch.** Anchor hứa một bài hướng dẫn về hẻm, nhưng trang đích là trang dịch vụ.
- Tự nhiên: thấp.
- **Đề xuất: Xóa link**, hoặc đổi đích sang một bài hẻm đang index. Sitemap có `/tin-tuc/xin-phep-xay-nha-trong-hem-tphcm`, `/tin-tuc/thi-cong-mong-nha-trong-hem-tphcm`, `/tin-tuc/do-be-tong-nha-trong-hem-tphcm`. Không nên để anchor "trong hẻm" trỏ về trang dịch vụ.

**#3 — "xây nhà trọn gói Tân Phú"**
- Đoạn: `Nhà phố 3–4 tầng hẻm xe hơi: trọn gói đỡ phát sinh hoàn thiện. Hẻm siêu hẹp: có thể tách thô rồi hoàn thiện sau. Chi tiết: …`
- Liên quan: **cao nhất.** Đoạn này so sánh trọn gói với thô, nên dẫn sang trang dịch vụ trọn gói là hợp lý.
- Tự nhiên: khá.
- **Đề xuất: Giữ link, sửa anchor** thành "xây nhà trọn gói TP.HCM", vì đích không phải trang riêng Tân Phú. Nên đây là link chính được giữ lại.

**#4 — "Trọn gói Tân Phú"**
- Đoạn: `Ảnh hẻm, cao độ nền so đường, số tầng. Khu thấp: hỏi van thoát và cao trệt. Trọn gói Tân Phú · 0909 075 668.`
- Liên quan: thấp. Đây là CTA gửi hồ sơ, và hotline đã có sẵn ngay cạnh.
- Tự nhiên: thấp, anchor là cụm cụt.
- **Đề xuất: Xóa link** (giữ chữ hoặc giữ hotline).

**#5 — "trọn gói Tân Phú"**
- Đoạn: `… Không dùng một đơn giá m² cho cả hai. Xem trọn gói Tân Phú.`
- Liên quan: trung bình, vì câu nói về đơn giá.
- Tự nhiên: trung bình.
- **Đề xuất: Xóa link.** Link này trùng đích và trùng anchor với #3; nếu vẫn muốn giữ thì sửa anchor thành "bảng giá trọn gói TP.HCM".

**#6 — "trọn gói Tân Phú"**
- Đoạn: H2 `So trọn gói Tân Phú` + `Xem trọn gói Tân Phú nếu muốn một HĐ chìa khóa. Gửi ảnh hẻm + số tầng qua hotline.`
- Liên quan: trung bình.
- Tự nhiên: thấp. Đây là block soft-SEO ngắn, lặp anchor.
- **Đề xuất: Xóa link.**

**Tóm tắt mục 1:** 6 link cùng đích trên một trang, 5 link dùng biến thể "trọn gói Tân Phú". Đây là dấu hiệu over-optimization, và anchor theo địa phương không khớp với trang đích TPHCM.
- Đề xuất: giữ 1 link (#3, sửa anchor).
- Tùy chọn giữ link thứ 2 (#1, sửa anchor).
- Xóa #4, #5, #6.
- Xóa hoặc đổi đích #2.
- Chưa thực hiện thay đổi nào.

---

## 2. Anchor chứa địa danh trỏ tới trang dịch vụ TPHCM

Phương pháp: quét prose của toàn bộ **209 URL trong sitemap**, lấy các link có href render là `/dich-vu/xay-nha-tron-goi-tphcm` và anchor chứa địa danh. Địa danh quét: Tân Phú, Tân Bình, Quận N, Gò Vấp, Bình Thạnh, Thủ Đức, Bình Tân, Phú Nhuận, Nhà Bè, Củ Chi, Hóc Môn, Bình Chánh, Đắk Lắk, Buôn Ma Thuột, Bình Dương, Đồng Nai, Long An.

**Kết quả: 13 trường hợp trên 7 trang.** Không có anchor Quận N / Gò Vấp / Thủ Đức… nào trỏ về trang dịch vụ trong bản build local.

| Trang | Anchor | Href gốc | Mức độ |
| --- | --- | --- | --- |
| `/tin-tuc/xay-nha-tan-phu` | trọn gói Tân Phú (×4), xây nhà trọn gói Tân Phú (×1) | `/tin-tuc/xay-nha-tron-goi-tan-phu` | Trung bình — Tân Phú thuộc TP.HCM (chi tiết ở mục 1) |
| `/cong-trinh/xay-nha-pho-binh-thanh` | trọn gói Bình Thạnh | `/tin-tuc/xay-nha-tron-goi-binh-thanh` | Trung bình — `/tin-tuc/xay-nha-binh-thanh` (200, có trong sitemap) nằm ngay cạnh |
| `/dich-vu/xay-dung-nha-3-tang` | xây nhà 3 tầng Đắk Lắk | `/tin-tuc/xay-nha-3-tang-dak-lak` | **Cao** — anchor Đắk Lắk → trang TPHCM |
| `/tin-tuc/chi-phi-xay-nha-2-tang-dak-lak` | đơn giá xây nhà Đắk Lắk | `/tin-tuc/don-gia-xay-nha-dak-lak` | **Cao** |
| `/tin-tuc/chi-phi-xay-nha-2-tang-dak-lak` | báo giá xây nhà Đắk Lắk | `/tin-tuc/bao-gia-xay-nha-dak-lak` | **Cao** |
| `/tin-tuc/sua-chua-nha-tron-goi-dak-lak` | xây nhà Đắk Lắk | `/tin-tuc/xay-nha-dak-lak` | **Cao** |
| `/tin-tuc/sua-nha-tham-dot-dak-lak` | xây nhà Đắk Lắk | `/tin-tuc/xay-nha-dak-lak` | **Cao** |
| `/tin-tuc/cai-tao-nha-ong-dak-lak` | xây nhà Đắk Lắk | `/tin-tuc/xay-nha-dak-lak` | **Cao** |

Ghi chú:
- **Ba trang sửa chữa / thấm dột / cải tạo Đắk Lắk** cùng sinh ra từ một template: `dak-lak-tin-tuc-articles-batch4.ts:571` (`Xem thêm <a href="/tin-tuc/xay-nha-dak-lak">xây nhà Đắk Lắk</a>…`). Sửa template một lần sẽ xử lý cả 3 trang.
- **Nặng nhất là nhóm Đắk Lắk.** Người dùng ở Đắk Lắk bấm link "xây nhà Đắk Lắk" lại sang trang dịch vụ TP.HCM. Trong sitemap đang có trang Đắk Lắk index được và trả 200: `/tin-tuc/xay-nha-tron-goi-dak-lak`, `/tin-tuc/xay-dung-nha-dak-lak`, `/tin-tuc/xay-nha-dep-dak-lak`. Đây là các ứng viên đổi đích khi được duyệt sửa.
- Vấn đề cùng loại ở tầng redirect: middleware đang 301 các slug Đắk Lắk retire (`/tin-tuc/xay-nha-dak-lak`, `don-gia-…`, `bao-gia-…`, `xay-nha-3-tang-dak-lak`) về trang dịch vụ TPHCM. Redirect này **không thuộc nhóm 3 redirect đã hoàn thiện** của đợt khôi phục URL. Theo yêu cầu, tôi chỉ ghi nhận, không đổi.
- **Chưa sửa hàng loạt.** Mỗi trường hợp cần được duyệt riêng.

---

## 3. `datePublished` / `dateModified` của trang tin tức

### Giá trị hiện tại trong bản build local

| Trường | `/tin-tuc/xay-nha-tron-goi-tphcm-2026` | `/dich-vu/xay-nha-tron-goi-tphcm` |
| --- | --- | --- |
| JSON-LD `datePublished` | `2026-01-15` | (Service schema, không có) |
| JSON-LD `dateModified` | `2026-01-15` | `2026-11-05` |
| `article:published_time` | `2026-01-15T00:00:00.000Z` | `2026-01-15T00:00:00.000Z` |
| `article:modified_time` | `2026-01-15T00:00:00.000Z` | `2026-11-05T11:00:00.000Z` |
| Sitemap `<lastmod>` | `2026-11-10` (ngày build) | `2026-11-10` (ngày build) |
| Ngày hiển thị (client, `PostPage.tsx:244`) | `createdAt` → 15/1/2026 nếu lấy từ fallback | — |

**Vấn đề:** `2026-01-15` là **placeholder**, không phải ngày đăng thật. Bài tin tức được viết lại trong đợt này (11/2026), nên `datePublished` hiện đang sớm hơn ngày bài tồn tại. Ngoài ra sitemap (`lastmod` = ngày build) và JSON-LD đang lệch nhau.

### Ngày được gán từ đâu (code path)

1. **Seed** (`lib/seed-content`): seed post không có `createdAt` / `updatedAt`.
   - `toFallbackPost` (`index.ts:856–870`) gán `createdAt = FALLBACK_TIMESTAMP = "2026-01-15T00:00:00.000Z"`.
   - `updatedAt` cũng là giá trị đó, trừ 2 slug cứng: `sua-nha-tron-goi-tphcm` (`2026-10-16`) và `xay-nha-tron-goi-tphcm` (`2026-11-05`).
2. **Prerender** (`scripts/prerender-html.ts:553–555, 638–639`):
   - `published = post.createdAt ?? "2026-01-15"`
   - `modified = post.updatedAt ?? getFallbackPost(slug).updatedAt ?? createdAt ?? "2026-01-15"`
   - Trên Vercel (`VERCEL` có, `PRERENDER_USE_DB !== "1"`), prerender dùng seed nên rơi về `2026-01-15`.
3. **DB** (`lib/db/src/schema/posts.ts`):
   - `created_at` / `updated_at` có `defaultNow()`.
   - API `PUT` (`api-server/src/routes/posts.ts:169`) set `updatedAt: new Date()`.
   - Nếu prerender chạy với DB (`PRERENDER_USE_DB=1`) và DB có row cho slug này, ngày lấy theo row. Row tạo lúc publish sẽ có ngày thật.
4. **Sitemap**:
   - `generate-sitemap.ts:105` dùng `p.updatedAt ?? p.createdAt`. Seed không có cả hai nên dùng `BUILD_DATE`.
   - API `routes/sitemap.ts:134` dùng `p.updatedAt` của DB.

### Cách gán ngày thật khi publish (đề xuất, chưa thực hiện, không đặt ngày giả)

- **Phương án A (khuyến nghị, không cần code):** khi deploy, tạo row DB cho `xay-nha-tron-goi-tphcm-2026` qua admin/API **tại thời điểm publish thật**, rồi build với `PRERENDER_USE_DB=1`.
  - `created_at` = thời điểm insert, là ngày thật.
  - JSON-LD, OG và sitemap API sẽ khớp nhau.
- **Phương án B (cần sửa code, cần duyệt):**
  - Thêm trường tùy chọn `publishedAt` / `updatedAt` vào `SeedPost`. `toFallbackPost` và prerender ưu tiên trường này trước `FALLBACK_TIMESTAMP`.
  - **Chỉ điền giá trị vào ngày deploy thực tế**, không điền trước.
  - Đồng thời, `generate-sitemap.ts` nên lấy cùng nguồn ngày đó để `lastmod` khớp `dateModified`.
- Trong lúc chờ, **không nên** sửa tay `FALLBACK_TIMESTAMP` hay cứng một ngày "dự kiến".

---

## 4. Thời gian thi công: trang dịch vụ và bài quy trình

Bài `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` **bị `applyThinArticleRebuild` thay nội dung**, vì bài chưa đủ 1.500 từ và không nằm trong skip regex. Vì vậy nội dung render khác nội dung viết tay trong source.

| Nguồn | Câu về thời gian | Có render? |
| --- | --- | --- |
| Dịch vụ — thân bài + FAQ (+ FAQ JSON-LD) | "Nhà phố 3–4 tầng thường thi công 4–7 tháng. Mùa mưa và hẻm hẹp có thể dài hơn." | Có |
| Quy trình — FAQ template rebuild (`rebuild-thin-articles.ts:335`) | "Nhà phố 1 trệt 2–3 lầu thường 4–7 tháng; biệt thự 6–9 tháng." | Có |
| Quy trình — FAQ source (`quy-trinh-xay-nha-tron-goi-a-z.ts:98`) | "Nhà phố 2–3 tầng thường 5–8 tháng (chưa kể xin phép)." | **Không** (bị rebuild thay) |
| Quy trình — bảng source (`…:72–74`) | 1 tầng 8–12 tuần · phố 2–3 tầng 16–20 tuần · 4–5 tầng 20–26 tuần | **Không** |
| Template rebuild cho slug `3-tang` (`rebuild-thin-articles.ts:134`) | "nhà 3 tầng (1 trệt 2 lầu) … 4–6 tháng thi công" | Có (ở các bài 3 tầng, ngoài 2 trang so sánh) |

**Mâu thuẫn ghi nhận (không chọn số, không sửa):**

1. **Bản render hiện tại của hai trang không mâu thuẫn.** "1 trệt 2–3 lầu" tương đương 3–4 tầng, và cả hai trang đều ghi 4–7 tháng.
2. **Source quy trình (chưa render) mâu thuẫn với trang dịch vụ.** Source ghi nhà 2–3 tầng mất 5–8 tháng, tức ít tầng hơn nhưng lâu hơn mức 4–7 tháng cho 3–4 tầng của trang dịch vụ.
3. **Source quy trình tự mâu thuẫn.** Bảng ghi phố 2–3 tầng 16–20 tuần (khoảng 4–5 tháng), còn FAQ ghi 5–8 tháng. Hai con số có thể khác nhau do FAQ "chưa kể xin phép", nhưng bảng không ghi rõ phạm vi.
4. **Lệch nhỏ toàn site:** template bài 3 tầng ghi 4–6 tháng, trong khi dịch vụ và quy trình ghi 4–7 tháng.
5. **Rủi ro:** nếu sau này bài quy trình được thêm vào skip regex hoặc vượt 1.500 từ, nội dung source sẽ render, và mâu thuẫn 2–3 sẽ xuất hiện công khai. Cần chủ doanh nghiệp chốt một khung thời gian chuẩn trước khi xử lý.

---

## 5. Link tự trỏ trên trang dịch vụ và nút sidebar `/bao-gia`, `/xay-moi`

### 5a. Sáu link tự trỏ trên `/dich-vu/xay-nha-tron-goi-tphcm`

| # | Anchor | Vị trí | Href gốc |
| --- | --- | --- | --- |
| 1 | Xây nhà trọn gói TPHCM | Nav chính | trực tiếp |
| 2 | 1 trệt 2 lầu | "Ví dụ nhà phố 4×16" — dòng "Cách tính theo khổ đất khác" | `/tin-tuc/xay-nha-pho-1-tret-2-lau-tphcm` (301 → dịch vụ) |
| 3 | nhà 4 tầng | cùng dòng | `/tin-tuc/xay-nha-4-tang-tphcm` (301 → dịch vụ) |
| 4 | nhà phố 1 trệt 2 lầu | "Số tầng và kiểu mái" | `/tin-tuc/xay-nha-pho-1-tret-2-lau-tphcm` |
| 5 | xây nhà 4 tầng | "Số tầng và kiểu mái" | `/tin-tuc/xay-nha-4-tang-tphcm` |
| 6 | xây nhà 5 tầng | "Số tầng và kiểu mái" | `/tin-tuc/xay-nha-5-tang-tphcm` (301 → dịch vụ) |

Nhận xét UX: các link #2–#6 tải lại chính trang đang đọc, nên người dùng bấm "Xem xây nhà 4 tầng" mà không thấy nội dung mới. Link nav #1 tự trỏ là bình thường.

Đề xuất (chưa thực hiện):
- Bỏ thẻ `<a>` ở #2–#6, giữ chữ.
- Hoặc đổi đích sang trang đang index và trả 200 có nội dung tương ứng: `/dich-vu/xay-dung-nha-3-tang` (cho "1 trệt 2 lầu"), `/mau-nha/3-tang`. Với 4 và 5 tầng, hiện chưa có trang riêng đang index nên nên bỏ link.
- Hoặc biến chúng thành anchor nội trang tới mục "Số tầng và kiểu mái" (`#…`).
- Các link `nhà 4×15`, `nhà 5×20`, `nhà khoảng 80 m²` cùng dòng vẫn trả 200, không bị ảnh hưởng.

### 5b. Tám nút sidebar trỏ trang dịch vụ

| Sidebar | Nút trỏ `/dich-vu/xay-nha-tron-goi-tphcm` |
| --- | --- |
| `BaoGiaSidebar.tsx` (`/bao-gia`) | BÁO GIÁ TRỌN GÓI TP.HCM · ĐƠN GIÁ XÂY NHÀ · CHI PHÍ XÂY NHÀ · XÂY NHÀ GIÁ RẺ · XÂY NHÀ TRỌN GÓI (5/9 nút) |
| `XayMoiSidebar.tsx` (`/xay-moi`) | XÂY NHÀ TRỌN GÓI · NHÀ PHỐ · BÁO GIÁ XÂY MỚI (3/13 nút) |

Ghi chú: sidebar render phía client, **không có trong HTML prerender**. Googlebot vẫn thấy sau khi render JS.

Nhận xét UX:
- 5 nút màu khác nhau ở `/bao-gia` dẫn tới cùng một trang. Người dùng kỳ vọng 5 nội dung khác nhau (đơn giá, chi phí, giá rẻ…) nhưng nhận cùng một trang, nên trải nghiệm bị "lừa click".
- Nút "XÂY NHÀ GIÁ RẺ" gắn với trang dịch vụ có đơn giá cụ thể; cần chủ doanh nghiệp xác nhận thông điệp này có phù hợp không.
- "NHÀ PHỐ" ở `/xay-moi` nằm giữa các nút mẫu nhà (`/mau-nha/biet-thu`, `/mau-nha/cap-4`…), nên người dùng kỳ vọng sang trang mẫu nhà phố. `/mau-nha/nha-pho` hiện trả **404**, nên không thể đổi đích sang đó nếu chưa có trang.

Đề xuất (chưa thực hiện, không đổi UI):
- `/bao-gia`: gộp 5 nút thành **1 nút** "BÁO GIÁ XÂY NHÀ TRỌN GÓI TP.HCM". Hoặc giữ nút nhưng trỏ tới mục tương ứng trên trang dịch vụ (`#bang-gia`, `#chi-phi`… nếu có id) hoặc tới `#tinh-chi-phi` trên chính `/bao-gia`.
- `/xay-moi`: gộp "XÂY NHÀ TRỌN GÓI" và "BÁO GIÁ XÂY MỚI" thành 1 nút. Với "NHÀ PHỐ": bỏ nút, hoặc chờ có trang mẫu nhà phố.
- Mỗi sidebar nên chỉ có tối đa 1–2 nút tới trang dịch vụ. Trang dịch vụ đã có link từ nav, footer và prose.

---

## 6. Tóm tắt việc cần duyệt trước deploy

| Mục | Mức | Hành động đề xuất (chưa làm) |
| --- | --- | --- |
| Anchor Đắk Lắk → trang TPHCM (7 link / 5 trang) | Cao | Đổi đích sang trang Đắk Lắk đang index hoặc bỏ link; sửa template `batch4:571` |
| `datePublished` placeholder `2026-01-15` của bài tin tức | Cao | Gán ngày thật lúc publish (DB row hoặc trường `publishedAt` điền đúng ngày deploy) |
| 6 link Tân Phú | Trung bình | Giữ #3 (sửa anchor); sửa #1; xóa #4–#6; xóa hoặc đổi đích #2 |
| Anchor "xây nhà trong hẻm" → trang dịch vụ | Trung bình | Đổi đích sang bài hẻm đang index hoặc bỏ |
| 5 link tự trỏ trong prose trang dịch vụ | Trung bình | Bỏ `<a>` hoặc đổi đích hợp lệ |
| Sidebar 8 nút trùng đích | Thấp–Trung bình | Gộp nút (UX), chờ duyệt thiết kế |
| Thời gian thi công trong source quy trình | Thấp (chưa render) | Chủ doanh nghiệp chốt một khung chuẩn |
| "trọn gói Bình Thạnh" | Thấp | Cân nhắc đổi đích `/tin-tuc/xay-nha-binh-thanh` hoặc bỏ |

Trạng thái giữ nguyên, kiểm tra lại bằng middleware local:
- `/dich-vu/xay-nha-tron-goi-tphcm` → 200.
- `/tin-tuc/xay-nha-tron-goi-tphcm-2026` → 200.
- `/dich-vu/xay-nha-tron-goi-tphcm-2026` → 301 (1 hop) → dịch vụ.
- `/tin-tuc/xay-nha-tron-goi-tphcm` → 301 (1 hop) → tin tức.
- `/dich-vu/xay-nha-tron-goi` → 301 (1 hop) → dịch vụ.

Đợt kiểm tra này **không sửa file source nào**; chỉ thêm file báo cáo này.

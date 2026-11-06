# Báo cáo chi tiết — ổn định SEO Kiến Trúc Sao Khuê

Ngày đo: 6/11/2026, khoảng 16:05–16:44 giờ Việt Nam.  
Site: https://www.kientrucsaokhue.com/  
Mã đối chiếu: commit `aff1b72` trên máy, đã có mặt trong bundle production.  
Phạm vi: đọc mã và HTML đang chạy. Không sửa URL, canonical, redirect, `middleware.js`, title trụ cột, H1, giá, địa chỉ.

Nhãn: **Đã xác minh** là đo được trên HTML hoặc đọc được trong mã. **Có dấu hiệu** là khớp cơ chế nhưng chưa bấm trên trình duyệt. **Chưa xác minh** là không có quyền hoặc không có công cụ.

Quyết định path, do chủ site chốt và lần đo này không đổi: URL trụ cột duy nhất là

https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026

Từ khóa chính “xây nhà trọn gói TP.HCM” phục vụ trên URL này. Không tạo URL riêng cho biến thể “công ty”, “báo giá”, “nhà thầu”, “2026”, “giá rẻ”.

---

## 1. Kết luận trước

Trang trụ cột đang được cấu hình đúng trên những gì đo được. Google có một URL 200, canonical tự trỏ, cho index, có trong sitemap, có bảng giá, quy trình, FAQ và hàng trăm link nội bộ. Không có lỗi P0 đang chặn crawl.

Việc không làm là đảo URL về đường dẫn không năm. Path đã đổi hai lần từ 21/10 đến 30/10. Đảo lại là lần thứ ba. Search Console và backlink chưa có, nên không có căn cứ để nói URL không năm mạnh hơn.

Việc nên sửa sau khi duyệt, và không đụng path:

1. Prerender đang ghi đè HTML của `/bao-gia`, `/xay-moi`, `/thiet-ke` bằng tiêu đề menu. Ba trang vẫn index, mỗi trang khoảng 45 từ.
2. Trang liên hệ vẫn nói hotline 24/7.
3. Schema để ngày sửa bài là 21/10 dù title đã là bản 6/11.
4. Form báo giá gửi được lead trong mã nhưng không bắn sự kiện đo chuyển đổi.
5. Tên pháp lý và ba địa chỉ cần chủ doanh nghiệp chốt trước khi sửa.

Không có số thứ hạng, không có LCP/INP/CLS, không có clicks hay impressions.

---

## 2. Website đang chạy bằng gì

Đây không phải site Next.js. Không có App Router.

| Thành phần | Thực tế | Bằng chứng |
|---|---|---|
| Giao diện | React 19.1.0, Vite 7, router wouter | `pnpm-workspace.yaml`, `artifacts/sao-khue/package.json` |
| HTML cho Google | Prerender sau khi Vite build | script `build` gọi `scripts/prerender-html.ts` |
| Host | Vercel | header `Server: Vercel` |
| Build | `pnpm --filter @workspace/sao-khue run build` rồi copy `dist/public` vào `artifacts/api-server/public` | `vercel.json` |
| Sitemap và robots | Rewrite sang API | `vercel.json` dòng 16–22 |
| Redirect cũ | `artifacts/api-server/middleware.js` | 41 dòng đích là URL 2026 |
| Bài viết | Seed TypeScript trong `lib/seed-content`. Build Vercel không nối database | `prerender-html.ts` khoảng dòng 744 |
| Đo lường | GA4 chèn sau khi React chạy. ID mặc định `G-WGDHV88C2B` | `SiteHead.tsx`. HTML tĩnh không chứa gtag |

Cache lúc đo: `Cache-Control: public, max-age=0, must-revalidate`, `X-Vercel-Cache: HIT`.

---

## 3. Lịch sử ba URL

Cùng một bài, slug `xay-nha-tron-goi-tphcm`. Chỉ path đổi.

| Thời điểm (+07) | Commit | Path đang là bản 200 |
|---|---|---|
| Trước 21:50 ngày 21/10/2026 | cha của `5f8f546` | `/dich-vu/xay-nha-tron-goi` |
| 21:50 ngày 21/10 đến 15:03 ngày 30/10 | `5f8f546` | `/dich-vu/xay-nha-tron-goi-tphcm` |
| 14:46 ngày 30/10 | `2d0bc3e` | vẫn URL không năm, bỏ “từ 4,85tr” khỏi title |
| Từ 15:03 ngày 30/10 | `341695b` | `/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| 15:47 ngày 6/11 | `aff1b72` | giữ URL 2026, title thành “Báo giá Sao Khuê” |

URL không năm chỉ làm canonical 9 ngày. Trước đó hub là URL ngắn, không có chữ `tphcm` trong path.

Đo HTTP ngày 6/11:

| URL | Kết quả |
|---|---|
| `.../xay-nha-tron-goi-tphcm-2026` | 200. Last-Modified 09:05:17 GMT. 36.922 byte |
| `.../xay-nha-tron-goi-tphcm` | 301, `Location: /dich-vu/xay-nha-tron-goi-tphcm-2026` |
| `.../xay-nha-tron-goi` | 301, cùng đích, một bước |
| `https://kientrucsaokhue.com/` | 307 sang www |

Không có vòng lặp 301. Không có chuỗi hai bước trên www đối với hai path cũ. 307 của apex là việc host, không sửa trong đợt này.

`middleware.js` có 41 rule đổ thẳng về URL 2026, gồm URL ngắn, URL không năm, `/bai-viet/nha-thau-xay-nha-tron-goi-tphcm`, `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm`, `/category/xay-nha-tron-goi`, `/xay-nha-gia-re-tphcm`. Không mở lại các slug đó.

---

## 4. Trang trụ cột đang sống

Đã xác minh trên HTML production.

| Mục | Giá trị |
|---|---|
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê |
| Description | Xây nhà trọn gói TPHCM 2026 từ 4,85 triệu/m² sàn ở. Một hợp đồng: thiết kế, phần thô, hoàn thiện. Khảo sát miễn phí, bảo hành kết cấu 10 năm. |
| Canonical | đúng URL 2026, một thẻ, https, www, không query |
| Robots | index,follow,max-image-preview:large |
| H1 | một H1: Xây nhà trọn gói TPHCM |
| Open Graph | trùng title |
| Twitter | summary_large_image |
| Bundle | `/assets/index-CEiByksY.js` |

Source `lib/seed-content/src/articles/xay-nha-tron-goi-tphcm.ts` khớp title, description và H1. Không có title thứ hai trong HTML tĩnh. Không noindex.

H2 có: dịch vụ tại TPHCM, báo giá 2026, hạng mục thi công, vì sao chọn Sao Khuê, vật liệu, số tầng và mái, thi công theo quận, quy trình, thanh toán, giấy phép, chi phí phát sinh, công trình, câu hỏi thường gặp, liên hệ.

Nội dung trả được ý định tìm nhà thầu và xem giá: một hợp đồng, bốn mức đơn giá, cách nhân sàn ở, ví dụ nhà 4×16, khoản không gồm, sáu bước, mốc thanh toán, giấy phép tách khỏi m², bảo hành.

Giá trên HTML khớp số đã công bố:

| Gói | Đơn giá |
|---|---|
| Phần thô | 3,55–3,8 triệu/m² |
| Trọn gói tiêu chuẩn | 4,85–5,5 triệu/m² |
| Khá | 5,5–6,0 triệu/m² |
| Cao cấp | 6,0–6,7+ triệu/m² |

Ví dụ: lô 4×16, một trệt hai lầu, ba sàn ở, 192 m² × 4,85 ≈ 931 triệu. Bài ghi đây là phép nhân để hình dung, không phải giá ký. Chưa gồm cọc, mái, hẻm dưới 3 m, lệ phí. Title không chứa “4,85tr”.

Schema trên cùng HTML: LocalBusiness kèm HomeAndConstructionBusiness, WebSite, Service, AggregateOffer, BreadcrumbList, FAQPage, HowTo sáu bước. Không thấy AggregateRating hay Review. Điện thoại +84909075668. Giờ Mo-Sa 08:00-17:30. Địa chỉ schema: 245/8 Bình Lợi, Phường 13, Bình Thạnh.

Hai điểm schema sai thực tế đang sống:

- `dateModified` là `2026-10-21`. Title đã là bản 6/11. `prerender-html.ts` dòng 723 gán cứng ngày này cho slug trụ cột.
- `priceRange` là `$`, không mô tả đơn giá triệu/m².

Ảnh trong bài: sk-03.jpg 184 KB, sk-11.jpg 358 KB, sk-24.jpg 374 KB, sk-47.jpg 338 KB, sk-51.jpg 381 KB. Có width, height, alt, lazy. Tên file không ghi địa chỉ công trình.

---

## 5. Sitemap và link nội bộ

Sitemap live cùng ngày: 142 URL, lần quét tất cả trả 200. Có URL 2026. Không có URL không năm. Không có URL ngắn. Không có URL 301 trong danh sách đó.

Phân bổ: 1 trang chủ, 1 báo giá, 1 liên hệ, 4 bài gốc, 14 dịch vụ kể cả hub, 5 công trình kể cả hub, 114 tin kể cả hub, 2 hub `/thiet-ke` và `/xay-moi`. `/xay-nha` và `/cai-tao-nha` không nằm sitemap. `/xay-nha` là noindex,follow.

Quét href trong 142 trang:

- 414 dòng trỏ URL 2026, từ 141 trang. Phần lớn là menu.
- 0 dòng trỏ URL không năm. Mã `rewriteRetiredHrefsInHtml` đổi href cũ sang hub trước khi xuất HTML.

Menu trong `menu.ts` đã trỏ “XÂY NHÀ TRỌN GÓI TPHCM”, “BÁO GIÁ TRỌN GÓI”, “ĐƠN GIÁ XÂY NHÀ”, “CHI PHÍ XÂY NHÀ” về URL 2026. Bài trụ cột còn link máy tính chi phí, liên hệ, phần thô, hoàn thiện, các quận, ba công trình, Bộ Xây dựng và Google Maps.

Không có trang mồ côi trong 142 URL vì header lặp mọi trang. Anchor menu lặp không thay cho một câu link trong thân bài.

---

## 6. Vì sao /bao-gia, /xay-moi, /thiet-ke vẫn là HTML cũ

Đây không phải deploy chưa xong. Bốn URL dùng cùng file JS `index-CEiByksY.js`. Trong bundle có cả câu mới “Dự toán chi phí xây nhà” và câu menu “KINH NGHIỆM XÂY MỚI”. Trang trụ cột đã hiện title mới. Ba hub thì không.

HTML production:

| URL | Title Google đọc được trong HTML | Kích thước |
|---|---|---|
| `/bao-gia` | BÁO GIÁ THIẾT KẾ \| Kiến Trúc Sao Khuê | 7.370 byte |
| `/xay-moi` | KINH NGHIỆM XÂY MỚI \| Kiến Trúc Sao Khuê | 7.386 byte |
| `/thiet-ke` | THIẾT KẾ NHÀ ĐẸP TP.HCM \| Kiến Trúc Sao Khuê | 7.444 byte |

Description là chính title đó cộng “ — Kiến Trúc Sao Khuê”. H1 là title menu. Robots vẫn index,follow. Canonical tự trỏ. Cả ba có trong sitemap.

Cơ chế, đã đọc trong `artifacts/sao-khue/scripts/prerender-html.ts`:

1. `buildStaticPages()` ghi ba path này với title đúng: “Dự toán chi phí xây nhà”, “Thiết kế nhà phố TP.HCM”, “Kinh nghiệm xây nhà mới”.
2. `buildMenuSubPages()` ghi lại cùng path. Hàm này khoảng dòng 435–502. Title lấy từ `child.title` của menu. Description fallback là `title — Kiến Trúc Sao Khuê`.
3. `writePage` ghi theo đường dẫn. Lần sau đè lần trước.

Khớp từng mục trong `artifacts/sao-khue/src/lib/menu.ts`:

- Dòng 47: “THIẾT KẾ NHÀ ĐẸP TP.HCM” → `/thiet-ke`
- Dòng 51: “BÁO GIÁ THIẾT KẾ” → `/bao-gia`
- Dòng 64: “KINH NGHIỆM XÂY MỚI” → `/xay-moi`

Mục “BÁO GIÁ” của menu không có `category` nên bị bỏ qua. `/bao-gia` bị đè bởi mục con của “THIẾT KẾ”, không phải bởi mục báo giá.

`Pricing.tsx` sau khi trình duyệt chạy JS có thể đổi title sang câu “Dự toán…”. HTML lần đầu, thứ Google tải khi không chạy JS, vẫn là vỏ menu. Chưa đo bằng trình duyệt có JS. Đó là có dấu hiệu từ mã, đã xác minh ở HTML tĩnh.

`vercel.json` dòng 36–43 còn rewrite `/xay-moi` và `/thiet-ke` về `/index.html`. Hiện file tĩnh vẫn được trả vì title từng trang khác nhau. Rewrite chỉ thành rủi ro nếu file tĩnh mất. Không sửa rewrite trong lần này.

Cách sửa khi được duyệt: trong `buildMenuSubPages`, không ghi đè `/bao-gia`, `/thiet-ke`, `/xay-moi`. Giữ URL. Giữ index cho đến khi HTML đúng được xem lại. Không tạo trang mới.

---

## 7. Trang nào đang gần cụm từ khóa

Quét title, H1, description và H2 của 142 URL. Chưa đọc hết thân 114 bài tin. Chưa có impression nên không kết luận trang nào đang cướp hạng.

| Trang | Nhận định |
|---|---|
| URL 2026 | Trụ cột. H1 đúng cụm |
| Trang chủ | H1 là “Nhà thầu xây nhà phố và biệt thự TPHCM”. Description có chữ gói trọn gói. Hỗ trợ, không đổi H1 |
| Bài công ty xây nhà phố uy tín | Có biến thể “công ty xây nhà trọn gói”. Giữ làm bài hỗ trợ nếu link về URL 2026 |
| `/dich-vu/khuyen-mai` | Có chữ TP.HCM. Không biến thành trang giá |
| Đồng Nai, Phú Yên | Có “báo giá xây nhà trọn gói” cho tỉnh khác. Không gộp vào trang TPHCM |
| 4×15, 5×20, 80 m² | Query kích thước. Không đổi title, không đổi URL |
| Ba hub menu | HTML không mang cụm trụ cột. Vấn đề là trang mỏng đang index, không phải trang thứ hai cùng H1 |

Slug đã 301, để nguyên: `nha-thau-xay-nha-tron-goi-tphcm`, `bao-gia-xay-nha-tron-goi-moi-nhat-tphcm`, `xay-nha-gia-re-tphcm`.

---

## 8. Thông tin doanh nghiệp đang lệch

Hotline 0909 075 668 và email kientrucsaokhue@gmail.com khớp giữa bài, schema và cài đặt mặc định.

| Mục | Đang ghi | Nơi |
|---|---|---|
| Thương hiệu | Kiến Trúc Sao Khuê | title, LocalBusiness |
| Tên pháp lý A | CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ | schema Service, `site-settings.ts` |
| Tên pháp lý B | Công ty TNHH Kiến Trúc Sao Khuê | `home-content.ts` khoảng dòng 259 |
| Tên trong bài | Công ty TNHH Thiết kế và Xây dựng Sao Khuê | HTML trụ cột |
| Giờ đúng | Thứ 2–thứ 7, 8:00–17:30 | bài trụ cột và schema |
| Giờ lệch | Hotline 24/7 | meta `/lien-he`, `Contact.tsx` dòng 114, subtitle banner liên hệ |
| Địa chỉ | 245/8 Bình Lợi, Phường 13, Bình Thạnh | schema và thân bài |
| Địa chỉ | 36 Đường 27, KDC Vạn Phúc, Thủ Đức | `address1` mặc định và đoạn cuối bài |
| Địa chỉ | Xuân Thạnh 2, Tây Hòa, Đắk Lắk | `address2` và bài |

Không thấy 245/5 trên HTML trụ cột lần này. Không tự chọn địa chỉ nào làm trụ sở. Không sửa tên pháp lý trước khi có đăng ký kinh doanh.

Bảo hành khớp: kết cấu 10 năm, hoàn thiện 12–36 tháng.

“Hơn 500 công trình” và “hơn 10 năm” có trong HTML trụ cột. Sitemap chỉ có bốn hồ sơ: nhà phố Bình Thạnh, Thuận An, biệt thự Thủ Đức, nhà phố hiện đại. Mô tả `/cong-trinh` nói “ảnh minh họa”. Bài trụ cột nói ảnh là của Sao Khuê. Con số 500 là chưa xác minh. Không tạo công trình mới trong báo cáo này.

---

## 9. Chuyển đổi và đo lường

Đã xác minh trong mã, chưa bấm trên site và chưa vào GA4.

- Nút gọi nổi dùng `tel:` và `trackAdsConversion("call")`. Tên event trong mã: `click_call`.
- Zalo mở `zalo.me/0909075668`. Nút nổi bắn `click_zalo`.
- Form chính `QuoteRequestModal.tsx` khoảng dòng 83 gọi `submitContactLead`. Có toast khi thành công và khi lỗi. Không gọi `trackAdsConversion`. Không có `generate_lead` trên form này.
- Form landing ads `AdsLeadForm.tsx` có bắn lead. Landing `/xay-nha` là noindex và không nằm sitemap. Không biến landing thành trang trụ cột.
- HTML tĩnh không chứa script gtag. GA4 được chèn sau hydrate. ID mặc định có thể bị cài đặt trong database ghi đè. Chưa xác minh ID nào đang chạy.
- Không thấy Google Tag Manager hay Meta Pixel trong mã đã tìm.
- Không gửi form thử lên production.

---

## 10. Hiệu năng

Chưa xác minh LCP, INP, CLS. Không tuyên bố đạt Core Web Vitals.

Đã đo được: HTML trụ cột 37 KB, HTML `/bao-gia` 7 KB, ảnh JPG 184–381 KB, font Google trong HTML, bundle JS tải về khoảng 4,9 MB chưa tách phần chết. Ảnh có kích thước và lazy. Nếu ảnh đầu trang là LCP mà vẫn lazy thì có thể chậm. Đó là giả thuyết, chưa có số.

---

## 11. Search Console và backlink

Chưa xác minh toàn bộ mục này.

Chủ site cần dán vào URL Inspection:

1. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm
2. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026
3. https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi

Ghi Google-selected canonical, user-declared canonical, trạng thái index, last crawl, crawled as, sitemap, referring page.

Performance, so 28 ngày với 3 tháng, truy vấn: xây nhà trọn gói tphcm, công ty xây nhà trọn gói tphcm, báo giá xây nhà trọn gói tphcm, nhà thầu xây nhà tphcm. Cột: clicks, impressions, CTR, average position, pages.

HTTP 200 không chứng minh đã index. Mẫu tìm kiếm công khai ngày 6/11 không có domain trong nhóm link đầu của bốn truy vấn đó. Mẫu ấy không được ghi thành hạng.

Backlink: không có Ahrefs hay Majestic. Tìm đúng chuỗi URL chỉ thấy chính site. Việc đó không chứng minh là không có link ngoài.

Nếu URL Inspection cho thấy URL 2026 đã được Google chọn, tiếp tục giữ path. Nếu URL 2026 chưa index, việc làm là yêu cầu lập chỉ mục đúng URL 200. Không đảo về URL không năm chỉ vì báo cáo ấy.

---

## 12. Việc chờ duyệt và việc không làm

| Mã | Mức | Việc | Đụng path không |
|---|---|---|---|
| SK-01 | P1 | Không để menu prerender đè `/bao-gia`, `/thiet-ke`, `/xay-moi` | Không |
| SK-02 | P1 | Đổi câu hotline 24/7 thành thứ 2–thứ 7, 8:00–17:30 | Không |
| SK-03 | P1 | Bỏ `dateModified` cứng 21/10 | Không |
| SK-04 | P1 | Bắn `generate_lead` khi form chính thành công, rồi xem DebugView | Không |
| SK-05 | P1 | Chốt tên pháp lý và một địa chỉ schema sau khi chủ site trả lời | Không, cho đến khi có câu trả lời |
| SK-06 | P2 | Đối soát 500 công trình trước khi giữ câu ấy | Không |
| SK-07 | P2 | Apex 307. Ghi nhận, không sửa host | Không |
| SK-08 | P3 | `priceRange` `$`. Bỏ hoặc để trống | Không |
| SK-09 | P3 | Ảnh JPG nặng. Làm WebP sau khi có số LCP | Không |

Không làm: đưa URL không năm về 200, chuyển URL 2026 thành 301, sửa 41 redirect, đổi canonical, noindex trang trụ cột, tạo URL thứ tư, tạo trang báo giá 2026 riêng, đổi title 4×15 / 5×20 / 80 m², đổi giá, đổi bảo hành, bịa đánh giá, bịa thứ hạng.

---

## 13. 30 ngày, không đổi path

Ngày 1–3. Phần đọc đã xong trong báo cáo này. Chủ site xuất ba URL Inspection và bảng Performance.

Ngày 4–7. Nếu duyệt SK-01, sửa `buildMenuSubPages` rồi kiểm HTML ba hub đã hết title menu, trong khi URL 2026 vẫn nguyên title và canonical.

Ngày 8–14. Nếu duyệt SK-02 và SK-03, sửa giờ liên hệ và ngày schema. Tên và địa chỉ chỉ sửa sau bảng xác nhận.

Ngày 15–21. Gắn event form. Giữ mọi href thương mại về URL 2026.

Ngày 22–30. Đo lại HTTP, canonical, sitemap, HTML ba hub. Điền số Search Console nếu đã có file. Không kết luận tăng trưởng khi chưa có hai mốc số.

---

## 14. Câu trả lời ngắn

URL 2026 đang là bản 200 duy nhất, canonical đúng, được sitemap và link nội bộ chỉ vào. Google có đủ tín hiệu kỹ thuật trên trang để hiểu cụm “xây nhà trọn gói TP.HCM”. Chưa chứng minh được Google đã index URL ấy.

Ba trang mỏng lệch vì prerender menu ghi đè, không phải vì deploy thất bại. Thông tin chưa thống nhất là tên pháp lý, ba địa chỉ, câu 24/7, và số 500 công trình. Form có đường gửi lead, chưa có event. Hiệu năng chưa có số đo.

Không có rủi ro kỹ thuật nào trong lần đo này buộc phải đổi URL trụ cột.
)

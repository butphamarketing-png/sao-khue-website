# Kiểm toán SEO Kiến Trúc Sao Khuê

Ngày đo: 6/11/2026, khoảng 16:11 giờ Việt Nam.  
Site: https://www.kientrucsaokhue.com/  
Mã nguồn đối chiếu: commit `aff1b72` trong repo `sao-khue-website`.  
Không sửa mã website. Không gửi form. Không bịa thứ hạng, traffic, backlink hay Core Web Vitals.

Nhãn dùng trong báo cáo: **Đã xác minh**, **Có dấu hiệu**, **Chưa xác minh**, **Không thể kiểm tra**.

## A. Tóm tắt điều hành

Nền tảng kỹ thuật đủ để Google đọc được: React prerender ra HTML, sitemap 142 URL đều trả 200, canonical tự trỏ, robots cho phép crawl trừ `/admin` và `/api/`. Trang dịch vụ xây nhà đã có bảng đơn giá, ví dụ 4×16, quy trình, FAQ và schema.

Điểm đang chặn thứ hạng không phải thiếu một đoạn chữ. URL mà brief gọi là trụ cột đang **301**. Google từng lưu các URL cũ. URL đang sống mới ổn định từ 30/10/2026 và đã đổi title thêm lần nữa ngày 6/11. Mẫu kết quả công khai hôm nay không có domain này ở nhóm đầu. Đó không phải số hạng Google.

HTML đang phục vụ của `/bao-gia`, `/xay-moi`, `/thiet-ke` vẫn là bản cũ, trong khi commit `aff1b72` đã viết title mới. Trang trụ cột thì đã hiện title mới. Ba trang shell vẫn index và rất mỏng.

## B. Kiến trúc website và công nghệ

| Hạng mục | Kết quả | Bằng chứng |
|---|---|---|
| Framework | React 19.1.0, Vite 7, router wouter. Không phải Next.js hay WordPress. | `pnpm-workspace.yaml`, `artifacts/sao-khue/package.json` |
| Ngôn ngữ | TypeScript | cùng package |
| Render | `vite build` rồi `scripts/prerender-html.ts` ghi HTML tĩnh | script `build` |
| Host | Vercel | header `Server: Vercel`, `vercel.json` |
| API | Express trong `artifacts/api-server`, rewrite `/api/:path*` | `vercel.json` |
| Database | Postgres qua Drizzle. Build Vercel bỏ DB, dùng seed. | `lib/db`, `prerender-html.ts` dòng 744–746 |
| CMS | Admin React tự viết, bài seed trong `lib/seed-content` | `Admin.tsx`, `lib/seed-content` |
| Font | Be Vietnam Pro và Roboto Condensed từ Google Fonts | HTML live `/bao-gia` |
| Đo lường | GA4 chèn sau khi React chạy. Không thấy GTM hay Meta Pixel trong mã. | `SiteHead.tsx` |

Thư mục chính: `artifacts/sao-khue` (giao diện), `artifacts/api-server` (API, sitemap, redirect), `lib/seed-content` (bài), `lib/db` (bảng).

Route tĩnh trong `App.tsx`: `/`, `/lien-he`, `/bao-gia`, `/thiet-ke`, `/xay-moi`, `/xay-nha`, `/cai-tao-nha`, `/mau-nha`, `/dich-vu`, `/cong-trinh`, `/tin-tuc`, `/admin`. Bài viết đi theo `/:category/:slug`.

Header, footer, nút gọi, Zalo, modal báo giá là component dùng chung (`Header.tsx`, `FloatingButtons.tsx`, `QuoteRequestModal.tsx`). Breadcrumb có trên bài và trang liên hệ. Title, description, canonical, JSON-LD đi qua `artifacts/sao-khue/src/lib/seo.ts` và bản prerender.

Sitemap live 6/11/2026: 142 `<loc>`, mọi URL trả 200. Phân loại theo path:

| Nhóm | Số URL trong sitemap |
|---|---|
| Trang chủ | 1 |
| Báo giá | 1 |
| Liên hệ | 1 |
| Giới thiệu / bài gốc | 4 |
| Dịch vụ | 14 kể cả hub danh mục |
| Công trình | 5 kể cả hub |
| Tin tức | 114 kể cả hub |
| Hub khác (`/thiet-ke`, `/xay-moi`) | 2 |

`/xay-nha` và `/cai-tao-nha` không có trong sitemap. `/xay-nha` live là `noindex,follow`.

Bảng title, H1, description của từng URL nằm ở `seo_all_urls.csv` và `seo_metadata.csv`. Các trang khung:

| URL | Title live | H1 live | Mục đích |
|---|---|---|---|
| `/` | Kiến Trúc Sao Khuê \| nhà phố, biệt thự TPHCM | Nhà thầu xây nhà phố và biệt thự TPHCM | Thương hiệu, không giành đúng cụm trụ cột |
| `/bai-viet/ve-chung-toi` | Về Chúng Tôi — Kiến Trúc Sao Khuê \| 10+ Năm Kinh Nghiệm | Về Sao Khuê — Hơn 10 Năm Thiết Kế & Xây Dựng TP.HCM | Giới thiệu |
| `/dich-vu` | Dịch vụ thiết kế, xây dựng và sửa nhà \| Kiến Trúc Sao Khuê | cùng H1 | Danh mục |
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | Xây nhà trọn gói TPHCM | Trang thương mại chính |
| `/bao-gia` | BÁO GIÁ THIẾT KẾ \| Kiến Trúc Sao Khuê | BÁO GIÁ THIẾT KẾ | HTML live mỏng. Mã mới muốn đổi thành máy tính chi phí |
| `/cong-trinh` | Công trình nhà phố đã thi công \| Kiến Trúc Sao Khuê | cùng H1 | Danh mục hồ sơ |
| `/tin-tuc` | Kinh nghiệm xây nhà \| Kiến Trúc Sao Khuê | cùng H1 | Blog |
| `/lien-he` | Liên hệ Kiến Trúc Sao Khuê \| Hotline 0909 075 668 | Liên hệ | Liên hệ |
| `/xay-nha` | Xây nhà trọn gói chìa khóa trao tay \| Kiến Trúc Sao Khuê | không nằm sitemap | Landing ads, noindex |

## C. SEO Technical Audit

### C.1 Index và crawl

**Đã xác minh**

- `robots.txt` cho phép `/`, chặn `/admin` và `/api/`, khai báo sitemap.
- Sitemap một file, không phải sitemap index. 142 URL, 0 URL trong sitemap trả khác 200.
- URL lạ `/khong-ton-tai-audit-2026` trả 404, robots `noindex,nofollow`. Không phải soft 404 trang chủ.
- Canonical của 142 URL khớp chính URL đó.
- Không có `noindex` nào lọt vào sitemap.
- `/dich-vu/xay-nha-tron-goi` và `/dich-vu/xay-nha-tron-goi-tphcm` đều 301 một bước tới URL 2026.
- https apex trả **307** sang www. http apex 308 sang https apex. http www 308 sang https www.
- Lịch sử path, từ git log: `341695b` (30/10) chuyển canonical sang URL 2026. `2d0bc3e` bỏ đơn giá khỏi title. `aff1b72` (6/11) đổi title thành “Báo giá Sao Khuê”.

**Chưa xác minh:** URL 2026 đã vào chỉ mục chưa. Cần URL Inspection trong Search Console. Mẫu tìm kiếm công khai không thay cho chỉ mục.

**Không thấy** tham số phân trang trong sitemap. Mã `CategoryPage.tsx` gắn `noindex` khi `trang` lớn hơn 1. Chưa tải `?trang=2`.

Trang nào cũng có menu nên không có orphan trong 142 URL sitemap. 141 URL có ít nhất một link tới URL 2026. Phần lớn là menu lặp, không phải 141 bài viết riêng.

### C.2 On-page toàn site

- Không URL sitemap nào có title dài hơn 60 ký tự.
- 7 description dưới 120 ký tự, ngắn nhất là `/bao-gia` 37, `/xay-moi` 40, `/thiet-ke` 44, `/lien-he` 59.
- Không trang sitemap nào thiếu H1 hoặc có hai H1.
- HTML dưới 400 từ: `/bao-gia`, `/xay-moi`, `/thiet-ke`, `/lien-he`, `/tin-tuc`, `/dich-vu`, `/cong-trinh`, `/tin-tuc/xay-nha-quan-8` (396 từ). Ba hub danh mục mỏng là bình thường nếu chỉ là danh sách. Ba trang `/bao-gia`, `/xay-moi`, `/thiet-ke` thì đang index như một bài.

Open Graph và Twitter Card có trên trang trụ cột. Breadcrumb schema có trên bài dịch vụ.

### C.3 Schema trang trụ cột

JSON-LD live gồm LocalBusiness + HomeAndConstructionBusiness, WebSite, Service, AggregateOffer, BreadcrumbList, FAQPage, HowTo. Không có Review, AggregateRating, Person trong đoạn đã đọc.

Khớp nội dung hiển thị: đơn giá 4,85–6,7 triệu/m², giờ Mo-Sa 08:00–17:30, điện thoại +84909075668, địa chỉ schema 245/8 Bình Lợi. `priceRange` là `$`. `dateModified` là `2026-10-21` trong khi title live đã là bản 6/11. Nguyên nhân trong mã: `prerender-html.ts` dòng 723 gán cứng ngày này cho slug trụ cột.

Không thêm sao đánh giá. `SiteHead.tsx` có nhánh gắn `aggregateRating` 4.9 nếu có từ 3 lời chứng thực. Đoạn JSON-LD đã lấy trên trang trụ cột không chứa aggregateRating.

### C.4 Hiệu năng

**Đã xác minh:** HTML `/bao-gia` 7.370 byte. Ảnh trụ cột JPG: sk-03 184 KB, sk-11 358 KB, sk-24 374 KB, sk-47 338 KB, sk-51 381 KB. Ảnh trong bài có `width`, `height`, `loading="lazy"`. Font Google chặn render cho đến khi CSS font về. Cache Vercel `max-age=0, must-revalidate`, phản hồi `/bao-gia` lúc đo là HIT, khoảng 50–360 ms tùy URL.

**Không thể kiểm tra:** LCP, INP, CLS. PageSpeed API từng hết quota. Không điền số.

## D. SEO On-page Audit

Chi tiết từng URL: các file CSV cùng thư mục. Heading: `seo_heading_structure.csv` (1.881 dòng). Ảnh: `seo_image_audit.csv` (341 ảnh lấy từ HTML, tối đa 12 ảnh mỗi trang). Link nội bộ: `seo_internal_links.csv` (3.328 link).

## E. Trang xây nhà trọn gói TP.HCM

### E.1 Ý định tìm kiếm

Người gõ “xây nhà trọn gói TP.HCM” cần biết ai nhận thi công, gói gồm gì, đơn giá năm nay, cách tính m², hẻm và móng có cộng vào không, mất bao lâu, trả tiền thế nào, xem nhà đã làm. Trang 2026 trả được các câu đó bằng bảng giá, ví dụ 4×16 khoảng 931 triệu ghi rõ không phải giá ký, danh sách việc gồm và không gồm, 6 bước, FAQ.

Chưa trả bằng chứng mạnh: tên vật tư trong hợp đồng mẫu, một công trình có đủ mét và số tháng, người ký kỹ thuật, điều khoản chậm tiến độ.

### E.2 On-page đã đo trên URL 200

| Mục | Giá trị live |
|---|---|
| URL | `/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê (46 ký tự) |
| Description | 141 ký tự, có cụm và “4,85 triệu/m²” |
| H1 | Xây nhà trọn gói TPHCM |
| Từ khóa | Cụm đứng đầu câu đầu, trong H1, title, một H2 giá và FAQ |
| Số từ HTML | 2.626 kể cả menu và footer |
| Ảnh | sk-03, sk-11, sk-24, sk-47, sk-51, có alt |
| Robots | index,follow,max-image-preview:large |
| Canonical | đúng URL 2026 |

H2 chính trong mã bài `xay-nha-tron-goi-tphcm.ts`: dịch vụ, báo giá 2026, hạng mục, vì sao chọn, vật liệu, số tầng, thi công theo quận, quy trình, thanh toán, giấy phép, phát sinh, công trình, FAQ, liên hệ.

### E.3 Chất lượng

Bài không còn kiểu “từ 4,85tr” trên title. Đơn giá ghi triệu/m² và tách cọc, mái, hẻm, lệ phí. Đó là phần rõ hơn nhiều trang đối thủ chỉ nhân “diện tích quy đổi”.

Thiếu chiều sâu có chủ đích hoặc chưa có dữ liệu: không nêu hãng vật tư, không có biên bản nghiệm thu, bốn công trình được link không mang số liệu cùng một mẫu. Câu “hơn 500 công trình” và “hơn 10 năm” xuất hiện trong bài. **Chưa xác minh** bằng sổ. `foundingDate` schema là 2014.

### E.4 Nhất quán thông tin

| Thông tin | Nơi A | Nơi B |
|---|---|---|
| Tên | Schema dịch vụ: CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ | LocalBusiness: Kiến Trúc Sao Khuê. `home-content.ts` mục giới thiệu: Công ty TNHH Kiến Trúc Sao Khuê |
| Địa chỉ schema dịch vụ | 245/8 Bình Lợi, Phường 13, Bình Thạnh | Settings mặc định `address1`: 36 Đường 27, KDC Vạn Phúc, Thủ Đức |
| Đắk Lắk | Bài: Xuân Thạnh 2, Tây Hòa | Settings `address2`: cùng ý, khác cách ghi |
| Giờ | Bài và schema: T2–T7 8:00–17:30 | Meta `/lien-he` và `Contact.tsx` dòng 114: hotline 24/7 |
| Giá | Bài: thô 3,55–3,8; trọn gói 4,85–6,7+ triệu/m² sàn ở | Không thấy trang index khác công bố đơn giá thứ hai cho TPHCM |
| Bảo hành | Kết cấu 10 năm, hoàn thiện 12–36 tháng | Khớp giữa bài, FAQ chủ và schema mô tả |
| 500 công trình | Bài trụ cột và highlight giới thiệu | Sitemap chỉ 4 hồ sơ |
| Ảnh | Bài nói ảnh của Sao Khuê | Mô tả `/cong-trinh` nói ảnh minh họa |

Hotline 0909 075 668 và email kientrucsaokhue@gmail.com khớp các chỗ đã đọc.

## F. Nội dung

Xem `seo_content_gaps.csv`. Không đề xuất viết lại từ đầu. Bài trụ cột đã đủ khung một trang thương mại. Việc cần là bằng chứng và sửa các câu mâu thuẫn, không phải thêm một URL.

## G. Cannibalization

Quét title, H1, description và H2 của 142 URL sitemap. Không quét toàn bộ thân 114 bài tin, nên bảng này là **đã xác minh trên vùng meta và heading**, chưa phải mọi câu trong body.

| Từ khóa | URL đang mang cụm ở title/H1/description/H2 | Mức trùng | Đề xuất |
|---|---|---|---|
| xây nhà trọn gói tphcm | Chỉ URL 2026 | Thấp trên vùng đã quét | Giữ làm trụ cột |
| xây nhà trọn gói tp.hcm | `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm`, `/dich-vu/khuyen-mai` | Trung bình | Giữ bài công ty làm hỗ trợ thương hiệu. Khuyến mại không nên thành trang giá |
| công ty xây nhà trọn gói | Bài công ty xây nhà phố | Thấp | Giữ bài hỗ trợ, link đúng cụm về URL 2026 |
| báo giá xây nhà trọn gói | URL 2026, Đồng Nai, Phú Yên | Khác địa bàn | Không gộp Phú Yên hay Đồng Nai vào trang TPHCM |
| nhà thầu xây nhà trọn gói | Không thấy trên vùng đã quét. H1 trang chủ là nhà thầu nhà phố và biệt thự | Thấp | Không tạo URL “nhà thầu” riêng |
| xây nhà trọn gói giá rẻ | Không thấy đúng cụm. “giá rẻ” có ở Đồng Nai và bài thiết kế giá rẻ | Thấp | Không làm trang giá rẻ TPHCM |

Trụ cột: URL 2026. Bài hỗ trợ: quy trình A–Z, kích thước 4×15 và 5×20, phần thô, bốn công trình. Không redirect chỉ vì cùng có chữ “trọn gói”. Các slug đã 301 trong `middleware.js` (nhà thầu, báo giá trọn gói mới nhất, xây nhà giá rẻ TPHCM) cứ để 301. Không mở lại.

`/bao-gia` live không còn cụm trụ cột trên title. Mã `aff1b72` cố ý đổi thành “Dự toán chi phí xây nhà” để nhường cụm. HTML production chưa theo mã này.

## H. Internal link

Sơ đồ nên giữ:

- Trang chủ: một link chữ “dịch vụ xây nhà trọn gói” tới URL 2026. H1 chủ không lặp cụm.
- Giới thiệu, quy trình A–Z, bài dự toán, mỗi công trình: một anchor đúng “xây nhà trọn gói TPHCM”.
- Trang quận đã index: link lên trụ cột, không tạo thêm cửa ngõ quận.
- `/bao-gia`: link sang trụ cột với anchor đơn giá, không lấy title “báo giá xây nhà trọn gói 2026”.

Đã thấy link bài trụ cột tới `/bao-gia`, `/lien-he`, phần thô, hoàn thiện, các quận, công trình Bình Thạnh, Thủ Đức, Thuận An, Bộ Xây dựng, Google Maps. Anchor menu lặp trên gần như mọi trang. Đó là điều hướng, không thay anchor trong bài.

## I. Hình ảnh và công trình

Năm ảnh trên trang trụ cột là JPG hiện trường (giàn giáo, móng, cốt thép, đổ bê tông), có alt và caption. Không kết luận được ảnh đó thuộc công trình nào vì file không ghi địa chỉ trong tên (`sk-03.jpg` …).

Bốn hồ sơ đang index:

- `/cong-trinh/xay-nha-pho-binh-thanh` — title có 4 tầng, khoảng 672 từ HTML
- `/cong-trinh/xay-nha-pho-thuan-an` — Bình Dương, 4 tầng
- `/cong-trinh/thiet-ke-nha-biet-thu-thu-duc` — 200 m² trong title
- `/cong-trinh/thiet-ke-nha-phong-cach-hien-dai`

**Chưa đọc từng thân bài** để xác nhận đủ mét đất, phạm vi, số tháng, ảnh móng và ảnh bàn giao. Title cho thấy có địa điểm và quy mô. Mô tả danh mục tự gọi là ảnh minh họa.

Mẫu hồ sơ nên có: địa chỉ mức phường, đất và số sàn, phạm vi ký, tháng thi công, một ảnh móng và một ảnh bàn giao, một đoạn bài toán (hẻm, tường chung), link về URL 2026. Chỉ xuất bản khi có số thật.

## J. Chuyển đổi

Đã có số điện thoại, nút gọi nổi, Zalo `zalo.me/0909075668`, modal báo giá, form landing ads. CTA nằm ở floating và cuối bài.

Sự kiện trong mã:

- `click_call`, `click_zalo` trên nút nổi
- `generate_lead` trên form ads
- Form chính `QuoteRequestModal.tsx` chỉ gọi `submitContactLead`, không gọi `trackAdsConversion`

GA4 mặc định `G-WGDHV88C2B` được chèn bằng JS, không có trong HTML tĩnh vừa tải. **Chưa xác minh** ID này còn là ID đang chạy, và sự kiện có tới GA4 hay chưa. Không có GTM, không có Meta Pixel, không thấy call tracking.

Không đề xuất sự kiện `qualified_lead` khi chưa có CRM.

## K. Đối thủ

Mẫu lúc 6/11/2026 từ công cụ tìm kiếm công khai, **không phải thứ hạng Google**. Domain `kientrucsaokhue.com` không nằm trong các link đầu của bốn truy vấn đã hỏi: “xây nhà trọn gói tphcm”, “công ty xây nhà trọn gói TP.HCM”, “báo giá xây nhà trọn gói TP.HCM”, “nhà thầu xây nhà TP.HCM”.

| Site trong mẫu | URL | Title mẫu | Điểm họ đang dùng | Sao Khuê khác được |
|---|---|---|---|---|
| Nhà Xanh Sài Gòn | `/xay-nha-tron-goi/` | Xây nhà trọn gói từ A đến Z | Bảng giá, quy trình, số công trình họ tự công bố | Cách tính sàn ở, tách cọc và hẻm |
| Nam Long / listicle | bài top công ty | List 2026 | Trang danh sách, không phải nhà thầu | Không cạnh tranh bằng bài “top 20” |
| Minh Duy | `/bao-gia-xay-nha-tron-goi.html` | Có 2026 và báo giá trong title | Bảng gói và vật tư họ nêu | Không chép đơn giá |
| KASAI | trang đơn giá | Đơn giá trọn gói | Bảng theo loại nhà | Giữ đơn giá Sao Khuê |
| DXD Home | bài top 17 | List công ty | Bảng so sánh, MST | Hồ sơ công trình thật thay vì list |
| Ngôi Nhà Hoàn Hảo | `/gia-xay-nha-tron-goi-tphcm-2026/` | Giá 2026 | Đơn giá và ghi gồm cả móng, mái | Nói rõ mẫu số khác: họ cộng hệ số, Sao Khuê nhân sàn ở |
| Việt Quang | bảng giá 2026 | Báo giá năm 2026 | Điều kiện hẻm, diện tích tối thiểu | Cùng kiểu điều kiện, dùng số của mình |
| PCC | đơn giá 2026 | Đơn giá 2026 | Hệ số móng 30–70%, mái 30–70% | Giải thích khác mẫu số, không đổi công thức |
| An Cư | trang chủ | Xây nhà trọn gói TPHCM | Năm thành lập, MST, xưởng | MST và hồ sơ chỉ khi công ty cung cấp |
| TDArchitects | `/xay-nha-tron-goi/` | Dịch vụ tại TP.HCM | Một hợp đồng, quy trình | Cùng mô hình, cần công trình |

Backlink đối thủ: **không thể kiểm tra**. Không có Ahrefs trong phiên này.

## L. Bản đồ nội dung

Không tạo thêm URL địa phương hàng loạt. Các quận đã có bài index thì sửa dần, không nhân bản.

| Nhóm | URL hiện có | Việc |
|---|---|---|
| Trụ cột | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Giữ. Bổ sung bằng chứng, không đổi slug |
| Dự toán | `/bao-gia` | Máy tính. Không lấy cụm báo giá trọn gói làm title |
| Phần thô | `/dich-vu/xay-dung-phan-tho` | Giữ đơn giá 3,55–3,8 |
| Sửa nhà | `/dich-vu/sua-nha-tron-goi-tphcm` | Intent khác, không gộp |
| Quy trình | `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | Hỗ trợ |
| Kích thước | 4×15, 5×20, 80 m² | Không đổi title các trang đang có thứ hạng kích thước |
| Công trình | 4 URL `/cong-trinh/` | Viết đủ số liệu trước khi thêm hồ sơ mới |
| Quận | Bình Thạnh, Thủ Đức, Gò Vấp, Quận 7 và các slug đã index | Chỉ những nơi có công trình |

## M. Lỗi cần sửa

Đầy đủ cột ở `seo_technical_issues.csv`.

| Mã | Mức | Việc |
|---|---|---|
| SK-001 | Critical | URL brief đang 301. Giữ URL 2026, không thêm redirect |
| SK-002 | High | HTML `/bao-gia`, `/xay-moi`, `/thiet-ke` lệch commit `aff1b72` |
| SK-003 | High | Ba trang đó index nhưng HTML khoảng 45 từ |
| SK-005 | High | Địa chỉ, tên pháp lý, câu 24/7 không khớp |
| SK-004 | Medium | Apex 307 |
| SK-006 | Medium | `dateModified` kẹt 21/10 |
| SK-007 | Medium | 500 công trình so với 4 hồ sơ |
| SK-008 | Medium | Form chính không có sự kiện |
| SK-011 | Medium | Rewrite Vercel có thể đè HTML tĩnh của bốn hub |
| SK-009, SK-010, SK-012 | Low | Ảnh JPG, `priceRange` `$`, title Quận 8 còn “4,85tr” |

Critical chỉ gán cho việc đã đo: URL được xem là trụ cột trả 301.

## N. 30 / 60 / 90 ngày

**30 ngày.** Khóa URL 2026. Xác nhận bản Vercel. Xin lập chỉ mục một URL trong Search Console. Sửa 24/7, một địa chỉ schema, một tên pháp lý. Gắn `generate_lead` và xem DebugView. Không viết thêm trang quận.

**60 ngày.** Bốn hồ sơ công trình đủ số. Phụ lục vật tư nếu có list hợp đồng. Ảnh WebP. Bỏ ngày schema cứng. Gỡ rewrite đè file tĩnh nếu xác nhận nó nuốt prerender.

**90 ngày.** Chỉ sau khi URL 2026 có ấn tượng trong Search Console mới chỉnh title tiếp. Xin vài liên kết từ hồ sơ đối tác thật tới đúng URL 2026. Không mua link. Không cam kết hạng.

## O. Dữ liệu còn thiếu

- Search Console: URL 2026 đã index chưa, truy vấn nào còn trỏ URL 301, số ấn tượng 28 ngày.
- GA4: phiên organic, sự kiện `click_call`, `click_zalo`, form.
- PageSpeed field data: LCP, INP, CLS.
- Hồ sơ công ty: MST, tên đăng ký, địa chỉ trụ sở, số công trình có sổ.
- Google Business Profile: **chưa xác minh** trong phiên này.
- Backlink và hạng chính xác: không có công cụ trả phí.

## Kết luận

1. Nền tảng SEO **đủ dùng về kỹ thuật** (HTML tĩnh, sitemap, canonical, schema) và **yếu ở tín hiệu URL**. Đổi path hai lần trong mười ngày là lý do trang biến khỏi kết quả, không phải vì bài mới viết kém.
2. Trang 2026 **đủ làm trụ cột về nội dung**. URL mà brief ghi (`/dich-vu/xay-nha-tron-goi-tphcm`) **không đủ**, vì nó là 301.
3. Mười vấn đề lớn: URL 301, HTML shell lệch mã, ba hub mỏng vẫn index, địa chỉ và tên pháp lý lệch, câu 24/7, ngày schema cũ, bốn hồ sơ so với câu 500 công trình, form không đo, apex 307, URL mới chưa được xác nhận trong Search Console.
4. Mười việc ngay: giữ URL 2026, kiểm tra deploy, lập chỉ mục một URL, sửa giờ và địa chỉ schema, bỏ title “BÁO GIÁ THIẾT KẾ” trên production, không mở trang giá thứ hai, gắn sự kiện form, không đưa “4,85tr” vào title, không thêm redirect, không đụng bài kích thước đang có thứ hạng.
5. **Không viết lại toàn bộ.** Sửa bằng chứng, câu mâu thuẫn và phần shell. Khung bài trụ cột giữ.
6. **Không tạo trang mới** cho cùng ý định. Hồ sơ công trình mới chỉ khi có một nhà thật.
7. Internal link: menu một lần, mỗi bài hỗ trợ một anchor đúng cụm về URL 2026, trang chủ không lấy H1 của cụm đó.
8. Sao Khuê cần đưa: tên đăng ký và MST, một địa chỉ trụ sở, list vật tư một hợp đồng đã ký (có thể che tên khách), bốn công trình với mét và số tháng, ảnh móng và ảnh bàn giao đúng nhà đó.
9. Chỉ Search Console và GA4 trả lời được: đã index chưa, tụt từ ngày nào, truy vấn nào còn URL cũ, bao nhiêu cuộc gọi từ organic.
10. Kế hoạch 30/60/90 nằm ở mục N. Không có việc nào trong 30 ngày là đổi URL lần nữa.

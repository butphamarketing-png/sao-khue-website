# Báo cáo chi tiết — audit SEO toàn site Kiến Trúc Sao Khuê

Ngày đo: 6/11/2026, khoảng 17:00 giờ Việt Nam.  
Site: https://www.kientrucsaokhue.com/  
Phạm vi: mã nguồn seed, sitemap production, HTML gốc của trang trụ cột và ba hub. Không deploy. Không đổi URL, canonical, redirect, `middleware.js`, H1 trụ cột, giá, địa chỉ, tên pháp lý, hotline.

Nhãn: **Đã xác minh** là đọc được trên HTML production hoặc trong mã lúc đo. **Trong mã local** là đã sửa trên máy, production chưa nhận bản đó. **Chưa xác minh** là không có Search Console, công cụ thứ hạng, backlink hoặc số liệu tốc độ.

Quyết định giữ nguyên, do chủ site đã chốt:

https://www.kientrucsaokhue.com/dich-vu/xay-nha-tron-goi-tphcm-2026

Từ khóa dự kiến của URL này: xây nhà trọn gói TP.HCM. Cụm này là kết quả đối chiếu title và H1, không phải thứ hạng đã đo.

---

## 1. Kết luận

Trang trụ cột trên production đang đúng các tín hiệu đã đo: HTTP 200, title `Xây nhà trọn gói TPHCM 2026 | Báo giá Sao Khuê`, H1 `Xây nhà trọn gói TPHCM`, canonical tự trỏ, robots `index,follow,max-image-preview:large`. Hai URL cũ trả 301 một bước về URL này. Sitemap production có URL 2026 và không có hai URL đang chuyển hướng.

Không có trang index thứ hai dùng cùng H1. Không xếp mức P0 cho trùng từ khóa.

Việc production đang sai, và mã local đã vá nhưng chưa lên site, là HTML của ba hub:

| URL | HTML production đang phát | HTML đúng trong source local |
|---|---|---|
| `/bao-gia` | BÁO GIÁ THIẾT KẾ | Dự toán chi phí xây nhà |
| `/xay-moi` | KINH NGHIỆM XÂY MỚI | Kinh nghiệm xây nhà mới |
| `/thiet-ke` | THIẾT KẾ NHÀ ĐẸP TP.HCM | Thiết kế nhà phố TP.HCM |

Ba trang vẫn index, canonical tự trỏ. Google đọc HTML tĩnh này trước khi React chạy. Deploy sẽ đổi title Google đang thấy. Không có dữ liệu để nói thứ hạng sẽ tăng hay giảm.

Các file chi tiết cùng thư mục: `01` đến `07`.

---

## 2. Site được dựng bằng gì

Đây là React 19.1, Vite 7.3, router wouter. Không có App Router của Next.js.

HTML cho Google được ghi sau Vite build bằng `artifacts/sao-khue/scripts/prerender-html.ts`. Bài viết nằm trong seed TypeScript, 6.813 bản ghi. Policy `isSitemapIndexablePost` cho 134 bài vào sitemap. 6.679 bài còn lại noindex vì là bài factory, mẫu theo quận, hoặc slug đã gom về hub.

Sitemap production tải lúc đo có 142 URL. Có `/bao-gia`, `/thiet-ke`, `/xay-moi` và URL 2026. Không có `/dich-vu/xay-nha-tron-goi`, `/dich-vu/xay-nha-tron-goi-tphcm`, `/xay-nha`, `/cai-tao-nha`.

`robots.txt` cho phép `/`, chặn `/admin` và `/api/`.

---

## 3. Trang trụ cột

| Tín hiệu | Production lúc đo |
|---|---|
| Status | 200. Last-Modified 6/11/2026 09:05:17 GMT |
| Title | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê |
| H1 | Xây nhà trọn gói TPHCM |
| Canonical | Chính URL 2026 |
| Robots | index,follow,max-image-preview:large |
| `/dich-vu/xay-nha-tron-goi-tphcm` | 301, Location URL 2026 |
| `/dich-vu/xay-nha-tron-goi` | 301, cùng đích, một bước |

Thân bài trong seed khoảng 2.345 từ. Schema loại Service. Trong mã local, `dateModified` lấy ngày seed `2026-11-05`. Production có thể còn ngày cũ cho đến khi deploy. Không đổi `datePublished`, không đổi H1, không đổi giá trong bài.

Địa chỉ trong schema trụ cột là 245/8 Bình Lợi, Phường 13, Bình Thạnh. Shell trang chủ nêu 36 Đường 27, KDC Vạn Phúc, Thủ Đức. Hai địa chỉ này chưa được gộp.

---

## 4. Trùng từ khóa

Chỉ tính URL được index. URL 301 và bài noindex không tính là đối thủ đang index. Từ khóa là từ khóa dự kiến.

### P0

Không có.

### P1 — cùng vùng nhu cầu, cần giữ vai

`/bao-gia` trên production đang mang title menu “BÁO GIÁ THIẾT KẾ”, trong khi vai đã chốt là dự toán chi phí. Menu vẫn dùng nhãn đó cho đúng URL này.

`/thiet-ke` trên production mang “THIẾT KẾ NHÀ ĐẸP TP.HCM”. Source muốn hub này là cổng thiết kế nhà phố. Trang dịch vụ `/dich-vu/thiet-ke-nha` giữ hồ sơ 2D/3D, title “Thiết Kế Nhà Ở TP.HCM”. Công trình `/cong-trinh/thiet-ke-nha-phong-cach-hien-dai` là một nhà đã làm.

`/xay-moi` trên production là vỏ “KINH NGHIỆM XÂY MỚI”. Hàm `withTurnkeyNavLabel` trong `site-settings.ts` còn đổi href menu `/xay-moi` thành URL trụ cột. Người bấm mục kinh nghiệm đang vào trang bán dịch vụ.

`/dich-vu/sua-nha-tron-goi-tphcm` là hub sửa nhà. `/dich-vu/cai-tao-nha-cu` là cải tạo nhà cũ, cùng thành phố, khác mức độ. Giữ hai URL. `/cai-tao-nha` là landing quảng cáo, noindex, và menu CẢI TẠO vẫn mở URL đó.

### P2 — có chữ chung, nhu cầu khác

| URL | Chữ giao | Nhu cầu riêng |
|---|---|---|
| `/dich-vu/xay-nha-tron-goi-binh-duong` | xây nhà trọn gói | Bình Dương |
| `/dich-vu/xay-nha-tron-goi-dong-nai` | xây nhà trọn gói, báo giá | Đồng Nai |
| `/tin-tuc/xay-nha-tron-goi-dak-lak` | xây nhà trọn gói | Đắk Lắk |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | báo giá xây nhà trọn gói | Phú Yên |
| `/dich-vu/xay-dung-nha-2-tang` | trọn gói | Nhà 2 tầng |
| `/dich-vu/xay-dung-nha-3-tang` | trọn gói | Nhà 3 tầng |
| `/dich-vu/xay-dung-biet-thu` | trọn gói | Biệt thự |
| `/dich-vu/khuyen-mai` | xây nhà trọn gói TP.HCM trong mô tả | Tặng thiết kế |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | cụm TP.HCM trong heading | Cách chọn nhà thầu |
| `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` | quy trình | Hướng dẫn |
| `/tin-tuc/du-toan-chi-phi-xay-nha` | chi phí | Cách lập dự toán |

### P3

`/bai-viet/ve-chung-toi` nhắc thiết kế, cải tạo và xây trọn gói vì đó là trang giới thiệu.

16 URL index có cụm giao với trụ cột hoặc với hub. Một URL giữ H1 “Xây nhà trọn gói TPHCM”.

57 bài seed còn href tương đối tới path cũ. `rewriteRetiredHrefsInHtml()` đổi các href đó sang hub lúc ghi HTML và lúc React render. Không sửa 57 file bài.

---

## 5. Bản đồ vai trò

Không tạo URL mới.

| Nhu cầu | URL giữ vai chính | URL đứng cạnh |
|---|---|---|
| Thuê xây nhà trọn gói tại TP.HCM | `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Cẩm nang, quy trình, bài chọn nhà thầu, công trình, trang tỉnh |
| Xem đơn giá và cách tính | `/bao-gia` sau khi HTML đúng vai dự toán | Bài dự toán, trang phần thô. Trụ cột được nhắc giá, không biến thành máy tính |
| Thiết kế nhà phố | `/thiet-ke` là cổng, `/dich-vu/thiet-ke-nha` là hồ sơ | Bài xu hướng, công trình, Đắk Lắk |
| Kinh nghiệm xây mới | `/xay-moi` | Quy trình A–Z, cẩm nang |
| Sửa và cải tạo | `/dich-vu/sua-nha-tron-goi-tphcm` | Cải tạo nhà cũ, nâng tầng, bài theo phường. `/cai-tao-nha` không làm URL chủ lực |
| Xem mẫu | `/mau-nha` và từng loại nhà | Link sang trụ cột khi người đọc hỏi giá |

Title các trang kích thước nhà giữ nguyên.

---

## 6. On-page đã đếm trong seed

134 bài index đều có meta description. Không có title trùng nhau trong nhóm này.

Title dài hơn 65 ký tự, chưa rút:

- `/dich-vu/cai-tao-nha-cu` — 69 ký tự
- `/dich-vu/xay-dung-phan-tho` — 71
- `/tin-tuc/xay-nha-ngan-sach-1-ty-2` — 66
- `/tin-tuc/thiet-ke-xay-dung-nha-pho-mien-nam` — 76

Mỗi bài index có một H1 lấy từ `post.title`. Thân bài không thêm H1 thứ hai. `/tin-tuc/xay-nha-quan-8` khoảng 293 từ. Các bài index còn lại trong phép đếm từ 300 từ trở lên.

Ba hub production mỏng hơn trang React: HTML đầu chỉ là heading menu. Ảnh trong bài được hàm `enhanceArticleHtml()` điền alt nếu trống và gắn lazy-load. Chưa đo width, height từng file.

Menu lặp nhiều anchor vào cùng URL 2026: báo giá trọn gói, đơn giá, chi phí, xây nhà giá rẻ, nhà phố, xây trọn gói TPHCM, báo giá xây mới. Cùng đích để khỏi mở URL mới. Nhãn thì rộng hơn nội dung đích.

`priceRange` trong schema tổ chức vẫn là `$$`. Không sửa.

---

## 7. Prerender

`buildStaticPages()` tạo title đúng cho ba hub. `buildMenuSubPages()` từng ghi đè cùng path bằng title menu. Working tree có `reservedPaths` và bỏ qua path đã có trang tĩnh, khoảng dòng 447 của `prerender-html.ts`.

Build local trước audit đã ghi HTML đúng ba title source, canonical tự trỏ, robots index. Title và H1 trụ cột trong bản build đó không đổi. Lần audit này không build lại, để khỏi sinh lại sitemap và middleware.

Production chưa có bản đó. Last-Modified của trụ cột vẫn 09:05:17 GMT ngày 6/11.

---

## 8. Đã làm và chưa làm

Trong mã local, từ phase 1, đã có:

- Chặn ghi đè HTML ba hub.
- Giờ làm việc thứ 2–thứ 7, 8:00–17:30 thay câu hotline 24/7 trên các chỗ đã sửa. Số 0909 075 668 giữ nguyên.
- `dateModified` trụ cột lấy ngày seed `2026-11-05`.
- Form báo giá chỉ gọi `generate_lead` sau khi gửi lead thành công, không gửi tên hay số điện thoại. Google Ads chỉ chạy khi môi trường đã có ID và label. Hai giá trị đó không được bịa.

Audit này không thêm sửa code và không deploy. Site đang chạy vẫn là HTML menu ở ba hub.

Chờ chủ site:

- Bấm deploy nếu muốn production nhận bản vá.
- Quyết định menu “KINH NGHIỆM XÂY MỚI” có trả về `/xay-moi` hay giữ cú nhấp vào trụ cột.
- Đổi nhãn “BÁO GIÁ THIẾT KẾ” cho khớp vai dự toán.
- Trỏ menu CẢI TẠO khỏi landing noindex `/cai-tao-nha`.
- Rút bốn title dài, viết thêm bài Quận 8, nếu muốn.
- Chốt tên pháp lý, một địa chỉ, và câu “hơn 500 công trình” trước khi đụng các dòng đó.

Không gộp sửa nhà với cải tạo. Không tạo trang báo giá mới. Không đảo 301. Không đưa URL không năm trở lại làm trụ cột.

Sau deploy, xem HTML gốc — trước khi JavaScript chạy — của `/bao-gia`, `/xay-moi`, `/thiet-ke` và URL 2026. Ba hub phải ra title source. Trụ cột phải còn nguyên title, H1 và canonical hiện tại.

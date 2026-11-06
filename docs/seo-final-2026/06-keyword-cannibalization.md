# Module 6 — Cannibalization

Quét title, H1, description và H2 của 142 URL sitemap. Chưa quét hết thân 114 bài tin. Không xóa, không redirect, không noindex, không đổi title trang kích thước.

| URL | Title live | H1 | Cụm thấy ở meta/heading | Ý định | Rủi ro |
|---|---|---|---|---|---|
| `/dich-vu/xay-nha-tron-goi-tphcm-2026` | Xây nhà trọn gói TPHCM 2026 \| Báo giá Sao Khuê | Xây nhà trọn gói TPHCM | đúng cụm chính | Thương mại TPHCM | Trụ cột. Giữ |
| `/` | Kiến Trúc Sao Khuê \| nhà phố, biệt thự TPHCM | Nhà thầu xây nhà phố và biệt thự TPHCM | description có “gói xây nhà trọn gói”, không lấy cụm làm H1 | Thương hiệu | Hỗ trợ. Không đổi H1 |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | theo CSV audit | — | có “xây nhà trọn gói tp.hcm” và “công ty xây nhà trọn gói” | Hồ sơ công ty | Hỗ trợ nếu link về trụ cột |
| `/dich-vu/khuyen-mai` | Khuyến mại xây dựng | — | có biến thể TP.HCM | Khuyến mại | Không biến thành trang giá |
| `/dich-vu/xay-nha-tron-goi-dong-nai` | Xây nhà trọn gói Đồng Nai | — | “báo giá xây nhà trọn gói”, “giá rẻ” | Đồng Nai | Khác địa bàn. Không gộp |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen` | — | — | “báo giá xây nhà trọn gói” | Phú Yên | Khác địa bàn |
| `/bao-gia` | BÁO GIÁ THIẾT KẾ | BÁO GIÁ THIẾT KẾ | không có cụm trụ cột trên HTML tĩnh | HTML đang là vỏ menu | Mỏng, index. Xem module 11. Không tạo URL giá mới |
| `/xay-moi` | KINH NGHIỆM XÂY MỚI | cùng title | không có cụm trụ cột | HTML vỏ menu | Cùng nhóm lệch prerender |
| 4×15, 5×20, 80 m² | giữ nguyên | giữ nguyên | query kích thước | Khác intent | Không đổi title, URL, nội dung |

Slug đã 301 và không mở lại: `nha-thau-xay-nha-tron-goi-tphcm`, `bao-gia-xay-nha-tron-goi-moi-nhat-tphcm`, `xay-nha-gia-re-tphcm`.

Kết luận trên vùng đã quét: cụm chính không có trang index thứ hai cùng H1. Rủi ro còn lại là các vỏ HTML mỏng vẫn index, và các bài tỉnh có chữ “báo giá xây nhà trọn gói” cho địa bàn khác. Chưa đủ dữ liệu Search Console để nói trang nào đang lấy impression của cụm TPHCM.

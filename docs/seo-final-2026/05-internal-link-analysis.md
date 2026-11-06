# Module 5 — Internal link

Nguồn: quét HTML 142 URL sitemap ngày 6/11/2026, file `docs/seo-audit-2026-11-06/seo_internal_links.csv`. Không thêm link mới.

## Phân loại

| Nhóm | Vai trò | Ví dụ |
|---|---|---|
| A Trụ cột | Thương mại cụm chính | `/dich-vu/xay-nha-tron-goi-tphcm-2026` |
| B Hỗ trợ xây | Dịch vụ khác intent hoặc địa bàn khác | phần thô, sửa nhà TPHCM, Bình Dương, Đồng Nai, bài quận đã index |
| C Giá và kiến thức | Máy tính, quy trình, cẩm nang | `/bao-gia`, `/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z` |
| D Công trình | Hồ sơ | 4 URL `/cong-trinh/...` |
| E Kích thước | Query riêng, không đụng title | 4×15, 5×20, 80 m² |
| F Khác | Landing ads | `/xay-nha`, `/cai-tao-nha` không trong sitemap |

## Số đã đếm

- 414 dòng href tới URL 2026, từ 141 trang. Phần lớn là menu `defaultNavMenu` trong `menu.ts`.
- 0 dòng href tới URL không năm trên HTML đã render. `rewriteRetiredHrefsInHtml` đổi href cũ sang `HUB_XAY_NHA` trước khi xuất.
- Không có orphan trong 142 URL sitemap vì header lặp trên mọi trang.
- Bài trụ cột tự link `/bao-gia`, `/lien-he`, phần thô, hoàn thiện, các quận, ba công trình, Bộ Xây dựng, Google Maps.

## Anchor

Menu lặp “XÂY NHÀ TRỌN GÓI TPHCM”, “BÁO GIÁ TRỌN GÓI”, “ĐƠN GIÁ XÂY NHÀ” cùng trỏ URL 2026. Đó là điều hướng, không phải 141 bài biên tập. Anchor trong thân bài mới là tín hiệu ngữ cảnh. Không nhồi thêm anchor giống hệt vào mọi đoạn.

Không tạo link tới URL đang 301.

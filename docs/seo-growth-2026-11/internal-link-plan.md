# Kế hoạch liên kết nội bộ

Chỉ nêu link từ trang đang trả 200. Không thêm link tới URL đang 301. Không tạo URL mới. Không đổi href của trụ cột.

File Search Console không đếm link nội bộ. Các đường dẫn dưới đây dựa trên trang nào đang nhận hiển thị và trang nào đang là đích dịch vụ đúng ý định.

## Trỏ về trụ cột 2026

Chỉ từ bài nói về xây mới tại TP.HCM hoặc từ trang điều hướng đã có sẵn.

| Nguồn đang 200 | Anchor đề xuất | Lý do |
|---|---|---|
| Trang chủ | Xây nhà trọn gói TP.HCM | Trang chủ có 53 nhấp, vị trí 5,58. Link này đã có trong shell prerender |
| `/bao-gia` | Đơn giá gói xây tại trang dịch vụ | `/bao-gia` có 60 hiển thị, vị trí 7,25, 0 nhấp. Người vào đây đang hỏi giá |
| `/xay-moi` | Xem dịch vụ xây nhà trọn gói | 43 hiển thị, vị trí 6,33. Vai trang là kinh nghiệm, đích thương mại là trụ cột |
| `/dich-vu/xay-nha-tron-goi-binh-duong` | Một link “nếu công trình ở TP.HCM” | Trang Bình Dương có 573 hiển thị. Anchor phải nói TP.HCM, không dùng lại nguyên cụm Bình Dương |
| `/dich-vu/xay-nha-tron-goi-dong-nai` | Cùng kiểu, một link | 253 hiển thị ở vị trí 37,98 |

Không lấy bài Phú Yên làm nguồn link chính về trụ cột. Bài đó đang hạng cho Phú Yên.

## Trỏ về trang sửa nhà

Đích: `/dich-vu/sua-nha-tron-goi-tphcm`. Trang này có 27 nhấp và 2.967 hiển thị, vị trí 21,89.

| Nguồn | Khi nào |
|---|---|
| `/dich-vu/cai-tao-nha-cu` | Bài cải tạo đã có. 9 hiển thị, vị trí 6,22. Một link sang hub sửa, anchor “sửa nhà trọn gói TP.HCM” |
| `/tin-tuc/cai-tao-nha-binh-dinh` | Chỉ link nếu đoạn chữ nói tới TP.HCM. Bài đang có 1.635 hiển thị cho Bình Định. Anchor Bình Định không trỏ về TP.HCM |
| Bài cẩm nang và quy trình xây mới | Không đổi thành link sửa nhà |

Menu CẢI TẠO trong `menu.ts` vẫn mở `/cai-tao-nha`, landing noindex. Đổi menu là việc cần duyệt, không làm trong đợt kế hoạch.

## Không làm

- Không trỏ bài Quy Nhơn hay Bình Định sang trụ cột thêm lần nữa. Ba URL đó đã 301 về trụ cột hoặc về trang sửa TP.HCM.
- Không dùng anchor “xây nhà trọn gói TP.HCM” trên bài Phú Yên, Bình Dương, Đồng Nai như thể bài đó cùng một thành phố.
- Không nhân anchor giống hệt trên mọi dòng menu. Menu đã có nhiều nhãn cùng mở URL 2026: báo giá trọn gói, đơn giá, chi phí, xây nhà giá rẻ, nhà phố, báo giá xây mới.
- Không sửa 57 bài còn href path cũ trong source. `rewriteRetiredHrefsInHtml()` đã đổi href đó lúc render.

## Mỏ neo trên trang sửa nhà

Các dòng `#` có hàng trăm hiển thị và gần 0 nhấp. Giữ làm mục lục trong cùng URL. Không tách thành đường dẫn mới, không trỏ menu vào từng mỏ neo.

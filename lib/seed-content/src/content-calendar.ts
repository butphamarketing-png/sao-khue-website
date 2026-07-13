/**
 * Lịch nội dung SEO — 30 bài (1 dòng = 1 bài).
 * Cập nhật `status` khi đã có slug trong seedPosts.
 *
 * Batch 6 (sửa nhà miền Trung): #171–#196. Batch 7 (xây nhà miền Trung): #197–#246.
 * Batch 8 (Đắk Lắk — xây/sửa/cải tạo): #247–#296.
 * Batch 9 (Đắk Lắk + TP.HCM mở rộng): #297–#396.
 * Batch 10 (TP.HCM 100 từ khóa sạch): #397–#496.
 * Batch 11 (100 từ khóa xây nhà TP.HCM): #597–#696.
 * Batch 12 (100 từ khóa xây/cải tạo TP.HCM): #697–#796.
 * Batch 13 (100 từ khóa phường/hẻm/gia cố TP.HCM): #797–#896.
 *
 * Chuẩn bài: 1500–2500 từ, 2–3 ảnh (alt = từ khóa), TOC tự chèn (≥3 H2).
 */
export type ContentCalendarItem = {
  no: number;
  title: string;
  keyword: string;
  slug?: string;
  status: "done" | "planned";
};

export { phuYenDakLakKeywordCalendar } from "./phu-yen-dak-lak-keyword-calendar";
export { phuYenDakLakKeywordCalendarBatch3 } from "./phu-yen-dak-lak-keyword-calendar-batch3";
export { longAnDongNaiKeywordCalendar } from "./long-an-dong-nai-keyword-calendar";
export { binhDuongTphcmKeywordCalendar } from "./binh-duong-tphcm-keyword-calendar";
export { mienTrungSuaNhaKeywordCalendar } from "./mien-trung-sua-nha-keyword-calendar";
export { mienTrungXayNhaKeywordCalendar } from "./mien-trung-xay-nha-keyword-calendar";
export { dakLakKeywordCalendarBatch4 } from "./dak-lak-keyword-calendar-batch4";
export { dakLakTphcmKeywordCalendarBatch5 } from "./dak-lak-tphcm-keyword-calendar-batch5";
export { tphcmKeywordCalendarBatch6 } from "./tphcm-keyword-calendar-batch6";
export { xayNhaTphcmKeywordCalendarBatch7 } from "./xay-nha-tphcm-keyword-calendar-batch7";
export { xayCaiTaoTphcmKeywordCalendarBatch8 } from "./xay-cai-tao-tphcm-keyword-calendar-batch8";
export { xayCaiTaoTphcmKeywordCalendarBatch9 } from "./xay-cai-tao-tphcm-keyword-calendar-batch9";

export const contentCalendar: ContentCalendarItem[] = [
  { no: 1, title: "Công Ty Xây Dựng Nhà Phố Uy Tín Tại TP.HCM", keyword: "xây dựng nhà phố TP.HCM", slug: "cong-ty-xay-dung-nha-pho-uy-tin-tphcm", status: "done" },
  { no: 2, title: "Báo Giá Xây Nhà Trọn Gói Mới Nhất Tại TP.HCM", keyword: "báo giá xây nhà TP.HCM", slug: "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", status: "done" },
  { no: 3, title: "Thiết Kế Nhà Phố Hiện Đại Đẹp Tại TP.HCM", keyword: "thiết kế nhà phố TP.HCM", slug: "thiet-ke-nha-pho-hien-dai-tphcm", status: "done" },
  { no: 4, title: "Đơn Vị Xây Nhà Trọn Gói Chuyên Nghiệp Tại Bình Dương", keyword: "xây nhà trọn gói Bình Dương", slug: "xay-nha-tron-goi-binh-duong", status: "done" },
  { no: 5, title: "Mẫu Nhà Phố 2 Tầng Đẹp Được Ưa Chuộng Tại Bình Dương", keyword: "nhà phố 2 tầng Bình Dương", slug: "mau-nha-pho-2-tang-binh-duong", status: "done" },
  { no: 6, title: "Xây Nhà Trọn Gói Giá Tốt Tại Đồng Nai", keyword: "xây nhà trọn gói Đồng Nai", slug: "xay-nha-tron-goi-dong-nai", status: "done" },
  { no: 7, title: "Thiết Kế Và Thi Công Nhà Phố Hiện Đại Tại Đồng Nai", keyword: "thi công nhà phố Đồng Nai", slug: "thiet-ke-thi-cong-nha-pho-dong-nai", status: "done" },
  { no: 8, title: "Công Ty Xây Dựng Nhà Uy Tín Tại Long An", keyword: "xây dựng nhà Long An", slug: "xay-dung-nha-long-an", status: "done" },
  { no: 9, title: "Báo Giá Xây Nhà Phần Thô Tại Long An", keyword: "báo giá xây nhà phần thô Long An", slug: "bao-gia-xay-nha-phan-tho-long-an", status: "done" },
  { no: 10, title: "Mẫu Nhà Ống Đẹp Phù Hợp Gia Đình Trẻ Tại Long An", keyword: "mẫu nhà ống đẹp Long An", slug: "mau-nha-ong-dep-long-an", status: "done" },
  { no: 11, title: "Dịch Vụ Thiết Kế Nhà Phố Đẹp Tại Đắk Lắk", keyword: "thiết kế nhà phố Đắk Lắk", slug: "thiet-ke-nha-pho-dak-lak", status: "done" },
  { no: 12, title: "Xây Nhà Trọn Gói Tại Đắk Lắk Uy Tín Chất Lượng", keyword: "xây nhà trọn gói Đắk Lắk", slug: "xay-nha-tron-goi-dak-lak", status: "done" },
  { no: 13, title: "Chi Phí Xây Nhà 2 Tầng Tại Đắk Lắk Bao Nhiêu?", keyword: "chi phí xây nhà 2 tầng Đắk Lắk", slug: "chi-phi-xay-nha-2-tang-dak-lak", status: "done" },
  { no: 14, title: "Thi Công Nhà Phố Hiện Đại Tại Phú Yên", keyword: "thi công nhà phố Phú Yên", slug: "thi-cong-nha-pho-phu-yen", status: "done" },
  { no: 15, title: "Thiết Kế Nhà Đẹp Phú Yên", keyword: "thiết kế nhà đẹp Phú Yên", slug: "thiet-ke-nha-dep-phu-yen", status: "done" },
  { no: 16, title: "Báo Giá Xây Nhà Trọn Gói Tại Phú Yên Chi Tiết", keyword: "báo giá xây nhà Phú Yên", slug: "bao-gia-xay-nha-tron-goi-phu-yen", status: "done" },
  { no: 17, title: "Kinh Nghiệm Xây Nhà Tiết Kiệm Chi Phí Năm 2026", keyword: "kinh nghiệm xây nhà", slug: "cam-nang-xay-nha-2026", status: "done" },
  { no: 18, title: "Những Lưu Ý Quan Trọng Khi Xây Nhà Phố", keyword: "lưu ý xây nhà phố", slug: "luu-y-xay-nha-pho", status: "done" },
  { no: 19, title: "Cách Dự Toán Chi Phí Xây Nhà Chính Xác", keyword: "dự toán chi phí xây nhà", slug: "du-toan-chi-phi-xay-nha", status: "done" },
  { no: 20, title: "Xu Hướng Thiết Kế Nhà Phố Hiện Đại Được Ưa Chuộng", keyword: "xu hướng thiết kế nhà phố", slug: "xu-huong-thiet-ke-nha-pho-hien-dai", status: "done" },
  { no: 21, title: "Nhà Phố 2 Tầng Hiện Đại Có Chi Phí Bao Nhiêu?", keyword: "chi phí nhà phố 2 tầng", slug: "chi-phi-nha-pho-2-tang", status: "done" },
  { no: 22, title: "Mẫu Nhà Phố 3 Tầng Đẹp Và Tối Ưu Công Năng", keyword: "mẫu nhà phố 3 tầng đẹp", slug: "mau-nha-pho-3-tang-dep", status: "done" },
  { no: 23, title: "Thiết Kế Nhà Đẹp Theo Ngân Sách Gia Đình Trẻ", keyword: "thiết kế nhà đẹp giá rẻ", slug: "thiet-ke-nha-dep-gia-re", status: "done" },
  { no: 24, title: "Giải Pháp Xây Nhà Chỉ Với Ngân Sách Từ 1 Tỷ 2", keyword: "xây nhà 1 tỷ 2", slug: "xay-nha-ngan-sach-1-ty-2", status: "done" },
  { no: 25, title: "Xây Nhà Trọn Gói Có Thực Sự Tiết Kiệm Chi Phí?", keyword: "xây nhà trọn gói", slug: "xay-nha-tron-goi-tphcm", status: "done" },
  { no: 26, title: "Vì Sao Nên Thuê Đơn Vị Thiết Kế Trước Khi Xây Nhà?", keyword: "thuê thiết kế nhà", slug: "thue-thiet-ke-nha-truoc-khi-xay", status: "done" },
  { no: 27, title: "Quy Trình Xây Nhà Trọn Gói Từ A Đến Z", keyword: "quy trình xây nhà trọn gói", slug: "quy-trinh-xay-nha-tron-goi-a-z", status: "done" },
  { no: 28, title: "Top Mẫu Nhà Phố Đẹp Dẫn Đầu Xu Hướng Hiện Nay", keyword: "mẫu nhà phố đẹp", slug: "top-mau-nha-pho-dep-xu-huong", status: "done" },
  { no: 29, title: "Đơn Vị Thiết Kế Và Xây Dựng Nhà Phố Uy Tín Miền Nam", keyword: "thiết kế xây dựng nhà phố", slug: "thiet-ke-xay-dung-nha-pho-mien-nam", status: "done" },
  { no: 30, title: "Kiến Trúc Sao Khuê – Đơn Vị Thiết Kế Xây Dựng Nhà Phố Chuyên Nghiệp", keyword: "Kiến Trúc Sao Khuê", slug: "kien-truc-sao-khue-don-vi-uy-tin", status: "done" },
  { no: 31, title: "Báo Giá Xây Nhà Mới Trọn Gói 2026", keyword: "báo giá xây nhà mới", slug: "bao-gia-xay-nha-moi", status: "done" },
  { no: 32, title: "Thiết Kế Nhà Đẹp Đồng Nai", keyword: "thiết kế nhà đẹp Đồng Nai", slug: "thiet-ke-nha-dep-dong-nai", status: "done" },
  { no: 33, title: "Thiết Kế Nhà Đẹp Long An", keyword: "thiết kế nhà đẹp Long An", slug: "thiet-ke-nha-dep-long-an", status: "done" },
  { no: 34, title: "Thiết Kế Nhà Đẹp Bình Dương", keyword: "thiết kế nhà đẹp Bình Dương", slug: "thiet-ke-nha-dep-binh-duong", status: "done" },
  { no: 35, title: "Thiết Kế Nhà Đẹp Đắk Lắk", keyword: "thiết kế nhà đẹp Đắk Lắk", slug: "thiet-ke-nha-dep-dak-lak", status: "done" },
  { no: 36, title: "Thiết Kế Nhà Đẹp TP.HCM", keyword: "thiết kế nhà đẹp TP.HCM", slug: "thiet-ke-nha-dep-tphcm", status: "done" },
];

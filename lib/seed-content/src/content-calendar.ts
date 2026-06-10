/**
 * Lịch nội dung SEO — 30 bài (1 dòng = 1 bài).
 * Cập nhật `status` khi đã có slug trong seedPosts (category tin-tuc).
 *
 * Quy tắc slug:
 * - Tin tức: `/tin-tuc/{slug}` — không dùng lại slug trang Dịch vụ (`/dich-vu/...`).
 * - Rút gọn vùng: `tphcm` (không `tai-tp-hcm`) — khớp bài đã index.
 * - Mỗi slug duy nhất; bài #4/#6 có trang dịch vụ cùng chủ đề nhưng slug khác.
 *
 * Chuẩn bài: 1500–2500 từ, 2–3 ảnh (alt = từ khóa), TOC tự chèn (≥3 H2).
 */
export type ContentCalendarItem = {
  no: number;
  title: string;
  keyword: string;
  /** Slug DB — bài tin-tuc (hoặc ghi chú nếu là trang khác) */
  slug?: string;
  status: "done" | "planned";
  /** Ghi chú trùng / trang dịch vụ liên quan */
  note?: string;
};

export const contentCalendar: ContentCalendarItem[] = [
  {
    no: 1,
    title: "Công Ty Xây Dựng Nhà Phố Uy Tín Tại TP.HCM",
    keyword: "xây dựng nhà phố TP.HCM",
    slug: "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
    status: "done",
  },
  {
    no: 2,
    title: "Báo Giá Xây Nhà Trọn Gói Mới Nhất Tại TP.HCM",
    keyword: "báo giá xây nhà TP.HCM",
    slug: "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
    status: "done",
  },
  {
    no: 3,
    title: "Thiết Kế Nhà Phố Hiện Đại Đẹp Tại TP.HCM",
    keyword: "thiết kế nhà phố TP.HCM",
    slug: "thiet-ke-nha-pho-hien-dai-tphcm",
    status: "done",
  },
  {
    no: 4,
    title: "Đơn Vị Xây Nhà Trọn Gói Chuyên Nghiệp Tại Bình Dương",
    keyword: "xây nhà trọn gói Bình Dương",
    slug: "don-vi-xay-nha-tron-goi-binh-duong",
    status: "planned",
    note: "Trang DV: /dich-vu/xay-nha-tron-goi-binh-duong — slug tin-tuc phải khác",
  },
  {
    no: 5,
    title: "Mẫu Nhà Phố 2 Tầng Đẹp Được Ưa Chuộng Tại Bình Dương",
    keyword: "nhà phố 2 tầng Bình Dương",
    slug: "mau-nha-pho-2-tang-binh-duong",
    status: "done",
  },
  {
    no: 6,
    title: "Xây Nhà Trọn Gói Giá Tốt Tại Đồng Nai",
    keyword: "xây nhà trọn gói Đồng Nai",
    slug: "xay-nha-tron-goi-gia-tot-dong-nai",
    status: "planned",
    note: "Trang DV: /dich-vu/xay-nha-tron-goi-dong-nai — slug tin-tuc phải khác",
  },
  {
    no: 7,
    title: "Thiết Kế Và Thi Công Nhà Phố Hiện Đại Tại Đồng Nai",
    keyword: "thi công nhà phố Đồng Nai",
    slug: "thiet-ke-thi-cong-nha-pho-dong-nai",
    status: "done",
  },
  {
    no: 8,
    title: "Công Ty Xây Dựng Nhà Uy Tín Tại Long An",
    keyword: "xây dựng nhà Long An",
    slug: "cong-ty-xay-dung-nha-long-an",
    status: "planned",
  },
  {
    no: 9,
    title: "Báo Giá Xây Nhà Phần Thô Tại Long An",
    keyword: "báo giá xây nhà phần thô Long An",
    slug: "bao-gia-xay-nha-phan-tho-long-an",
    status: "planned",
    note: "Không trùng slug DV xay-dung-phan-tho",
  },
  {
    no: 10,
    title: "Mẫu Nhà Ống Đẹp Phù Hợp Gia Đình Trẻ Tại Long An",
    keyword: "mẫu nhà ống đẹp Long An",
    slug: "mau-nha-ong-dep-long-an",
    status: "planned",
  },
  {
    no: 11,
    title: "Dịch Vụ Thiết Kế Nhà Phố Đẹp Tại Đắk Lắk",
    keyword: "thiết kế nhà phố Đắk Lắk",
    slug: "thiet-ke-nha-pho-dak-lak",
    status: "planned",
  },
  {
    no: 12,
    title: "Xây Nhà Trọn Gói Tại Đắk Lắk Uy Tín Chất Lượng",
    keyword: "xây nhà trọn gói Đắk Lắk",
    slug: "xay-nha-tron-goi-dak-lak",
    status: "planned",
  },
  {
    no: 13,
    title: "Chi Phí Xây Nhà 2 Tầng Tại Đắk Lắk Bao Nhiêu?",
    keyword: "chi phí xây nhà 2 tầng Đắk Lắk",
    slug: "chi-phi-xay-nha-2-tang-dak-lak",
    status: "planned",
  },
  {
    no: 14,
    title: "Thi Công Nhà Phố Hiện Đại Tại Phú Yên",
    keyword: "thi công nhà phố Phú Yên",
    slug: "thi-cong-nha-pho-phu-yen",
    status: "planned",
  },
  {
    no: 15,
    title: "Công Ty Thiết Kế Nhà Đẹp Tại Phú Yên",
    keyword: "thiết kế nhà đẹp Phú Yên",
    slug: "thiet-ke-nha-dep-phu-yen",
    status: "planned",
  },
  {
    no: 16,
    title: "Báo Giá Xây Nhà Trọn Gói Tại Phú Yên Chi Tiết",
    keyword: "báo giá xây nhà Phú Yên",
    slug: "bao-gia-xay-nha-tron-goi-phu-yen",
    status: "planned",
  },
  {
    no: 17,
    title: "Kinh Nghiệm Xây Nhà Tiết Kiệm Chi Phí Năm 2026",
    keyword: "kinh nghiệm xây nhà",
    slug: "cam-nang-xay-nha-2026",
    status: "done",
  },
  {
    no: 18,
    title: "Những Lưu Ý Quan Trọng Khi Xây Nhà Phố",
    keyword: "lưu ý xây nhà phố",
    slug: "luu-y-quan-trong-khi-xay-nha-pho",
    status: "planned",
  },
  {
    no: 19,
    title: "Cách Dự Toán Chi Phí Xây Nhà Chính Xác",
    keyword: "dự toán chi phí xây nhà",
    slug: "du-toan-chi-phi-xay-nha-chinh-xac",
    status: "planned",
  },
  {
    no: 20,
    title: "Xu Hướng Thiết Kế Nhà Phố Hiện Đại Được Ưa Chuộng",
    keyword: "xu hướng thiết kế nhà phố",
    slug: "xu-huong-thiet-ke-nha-pho-hien-dai",
    status: "planned",
    note: "Không trùng cong-trinh/thiet-ke-nha-phong-cach-hien-dai",
  },
  {
    no: 21,
    title: "Nhà Phố 2 Tầng Hiện Đại Có Chi Phí Bao Nhiêu?",
    keyword: "chi phí nhà phố 2 tầng",
    slug: "chi-phi-nha-pho-2-tang-hien-dai",
    status: "planned",
    note: "Không trùng #5 mau-nha-pho-2-tang-binh-duong (góc Bình Dương)",
  },
  {
    no: 22,
    title: "Mẫu Nhà Phố 3 Tầng Đẹp Và Tối Ưu Công Năng",
    keyword: "mẫu nhà phố 3 tầng đẹp",
    slug: "mau-nha-pho-3-tang-dep",
    status: "planned",
  },
  {
    no: 23,
    title: "Thiết Kế Nhà Đẹp Theo Ngân Sách Gia Đình Trẻ",
    keyword: "thiết kế nhà đẹp giá rẻ",
    slug: "thiet-ke-nha-dep-theo-ngan-sach",
    status: "planned",
  },
  {
    no: 24,
    title: "Giải Pháp Xây Nhà Chỉ Với Ngân Sách Từ 1 Tỷ 2",
    keyword: "xây nhà 1 tỷ 2",
    slug: "xay-nha-ngan-sach-1-ty-2",
    status: "planned",
  },
  {
    no: 25,
    title: "Xây Nhà Trọn Gói Có Thực Sự Tiết Kiệm Chi Phí?",
    keyword: "xây nhà trọn gói",
    slug: "xay-nha-tron-goi-co-tiet-kiem-chi-phi",
    status: "planned",
    note: "KHÔNG dùng slug xay-nha-tron-goi-tphcm (trang /dich-vu/xay-nha-tron-goi)",
  },
  {
    no: 26,
    title: "Vì Sao Nên Thuê Đơn Vị Thiết Kế Trước Khi Xây Nhà?",
    keyword: "thuê thiết kế nhà",
    slug: "thue-thiet-ke-nha-truoc-khi-xay",
    status: "planned",
    note: "Không trùng slug DV thiet-ke-nha",
  },
  {
    no: 27,
    title: "Quy Trình Xây Nhà Trọn Gói Từ A Đến Z",
    keyword: "quy trình xây nhà trọn gói",
    slug: "quy-trinh-xay-nha-tron-goi-a-z",
    status: "planned",
  },
  {
    no: 28,
    title: "Top Mẫu Nhà Phố Đẹp Dẫn Đầu Xu Hướng Hiện Nay",
    keyword: "mẫu nhà phố đẹp",
    slug: "top-mau-nha-pho-dep-xu-huong",
    status: "planned",
  },
  {
    no: 29,
    title: "Đơn Vị Thiết Kế Và Xây Dựng Nhà Phố Uy Tín Miền Nam",
    keyword: "thiết kế xây dựng nhà phố",
    slug: "don-vi-thiet-ke-xay-dung-nha-pho-mien-nam",
    status: "planned",
    note: "Không trùng #1 cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  },
  {
    no: 30,
    title: "Kiến Trúc Sao Khuê – Đơn Vị Thiết Kế Xây Dựng Nhà Phố Chuyên Nghiệp",
    keyword: "Kiến Trúc Sao Khuê",
    slug: "kien-truc-sao-khue-uy-tin",
    status: "planned",
    note: "Bài tin-tuc thương hiệu — không dùng ve-chung-toi (/bai-viet/)",
  },
];

/** Slug tin-tuc đã dùng — kiểm tra trùng trước khi thêm bài mới */
export function reservedTinTucSlugs(): string[] {
  return contentCalendar
    .filter((item) => item.slug && item.status === "done")
    .map((item) => item.slug!);
}

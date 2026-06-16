import { slugImage } from "./site-images";

/** 22 bài tin tức còn thiếu (lịch #8–#29, trừ #30 gioi-thieu). */

export type TinTucBrief = {
  calendarNo: number;
  slug: string;
  title: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  image: string;
};

export const TIN_TUC_BATCH: TinTucBrief[] = [
  {
    calendarNo: 8,
    slug: "xay-dung-nha-long-an",
    title: "Công Ty Xây Dựng Nhà Uy Tín Tại Long An",
    focusKeyword: "xây dựng nhà Long An",
    secondaryKeywords: ["xây nhà trọn gói Long An", "thi công nhà phố Long An", "báo giá xây nhà Long An"],
    image: slugImage("xay-dung-nha-long-an"),
  },
  {
    calendarNo: 9,
    slug: "bao-gia-xay-nha-phan-tho-long-an",
    title: "Báo Giá Xây Nhà Phần Thô Tại Long An",
    focusKeyword: "báo giá xây nhà phần thô Long An",
    secondaryKeywords: ["xây phần thô Long An", "đơn giá phần thô", "nhà phố Long An"],
    image: slugImage("bao-gia-xay-nha-phan-tho-long-an"),
  },
  {
    calendarNo: 10,
    slug: "mau-nha-ong-dep-long-an",
    title: "Mẫu Nhà Ống Đẹp Phù Hợp Gia Đình Trẻ Tại Long An",
    focusKeyword: "mẫu nhà ống đẹp Long An",
    secondaryKeywords: ["thiết kế nhà ống", "nhà phố hẹp Long An", "công năng nhà ống"],
    image: slugImage("mau-nha-ong-dep-long-an"),
  },
  {
    calendarNo: 11,
    slug: "thiet-ke-nha-pho-dak-lak",
    title: "Dịch Vụ Thiết Kế Nhà Phố Đẹp Tại Đắk Lắk",
    focusKeyword: "thiết kế nhà phố Đắk Lắk",
    secondaryKeywords: ["kiến trúc nhà phố Buôn Ma Thuột", "bản vẽ nhà phố", "thiết kế 3D"],
    image: slugImage("thiet-ke-nha-pho-dak-lak"),
  },
  {
    calendarNo: 12,
    slug: "xay-nha-tron-goi-dak-lak",
    title: "Xây Nhà Trọn Gói Tại Đắk Lắk Uy Tín Chất Lượng",
    focusKeyword: "xây nhà trọn gói Đắk Lắk",
    secondaryKeywords: ["nhà thầu Đắk Lắk", "thi công trọn gói", "bảo hành kết cấu"],
    image: slugImage("xay-nha-tron-goi-dak-lak"),
  },
  {
    calendarNo: 13,
    slug: "chi-phi-xay-nha-2-tang-dak-lak",
    title: "Chi Phí Xây Nhà 2 Tầng Tại Đắk Lắk Bao Nhiêu?",
    focusKeyword: "chi phí xây nhà 2 tầng Đắk Lắk",
    secondaryKeywords: ["báo giá nhà 2 tầng", "dự toán xây nhà", "đơn giá vật liệu"],
    image: slugImage("chi-phi-xay-nha-2-tang-dak-lak"),
  },
  {
    calendarNo: 14,
    slug: "thi-cong-nha-pho-phu-yen",
    title: "Thi Công Nhà Phố Hiện Đại Tại Phú Yên",
    focusKeyword: "thi công nhà phố Phú Yên",
    secondaryKeywords: ["xây nhà Phú Yên", "nhà phố Tuy Hòa", "thi công trọn gói"],
    image: slugImage("thi-cong-nha-pho-phu-yen"),
  },
  {
    calendarNo: 15,
    slug: "thiet-ke-nha-dep-phu-yen",
    title: "Công Ty Thiết Kế Nhà Đẹp Tại Phú Yên",
    focusKeyword: "thiết kế nhà đẹp Phú Yên",
    secondaryKeywords: ["kiến trúc Phú Yên", "mẫu nhà phố biển", "phối cảnh 3D"],
    image: slugImage("thiet-ke-nha-dep-phu-yen"),
  },
  {
    calendarNo: 16,
    slug: "bao-gia-xay-nha-tron-goi-phu-yen",
    title: "Báo Giá Xây Nhà Trọn Gói Tại Phú Yên Chi Tiết",
    focusKeyword: "báo giá xây nhà Phú Yên",
    secondaryKeywords: ["xây nhà trọn gói Phú Yên", "đơn giá thi công", "dự toán minh bạch"],
    image: slugImage("bao-gia-xay-nha-tron-goi-phu-yen"),
  },
  {
    calendarNo: 18,
    slug: "luu-y-xay-nha-pho",
    title: "Những Lưu Ý Quan Trọng Khi Xây Nhà Phố",
    focusKeyword: "lưu ý xây nhà phố",
    secondaryKeywords: ["kinh nghiệm xây nhà phố", "pháp lý xây dựng", "chống thấm nhà phố"],
    image: slugImage("luu-y-xay-nha-pho"),
  },
  {
    calendarNo: 19,
    slug: "du-toan-chi-phi-xay-nha",
    title: "Cách Dự Toán Chi Phí Xây Nhà Chính Xác",
    focusKeyword: "dự toán chi phí xây nhà",
    secondaryKeywords: ["bảng dự toán", "chi phí ẩn", "bóc tách khối lượng"],
    image: slugImage("du-toan-chi-phi-xay-nha"),
  },
  {
    calendarNo: 20,
    slug: "xu-huong-thiet-ke-nha-pho-hien-dai",
    title: "Xu Hướng Thiết Kế Nhà Phố Hiện Đại Được Ưa Chuộng",
    focusKeyword: "xu hướng thiết kế nhà phố",
    secondaryKeywords: ["nhà phố hiện đại 2026", "mặt tiền nhà phố", "công năng thông minh"],
    image: slugImage("xu-huong-thiet-ke-nha-pho-hien-dai"),
  },
  {
    calendarNo: 21,
    slug: "chi-phi-nha-pho-2-tang",
    title: "Nhà Phố 2 Tầng Hiện Đại Có Chi Phí Bao Nhiêu?",
    focusKeyword: "chi phí nhà phố 2 tầng",
    secondaryKeywords: ["báo giá nhà 2 tầng", "xây nhà trọn gói", "mẫu nhà 2 tầng"],
    image: slugImage("chi-phi-nha-pho-2-tang"),
  },
  {
    calendarNo: 22,
    slug: "mau-nha-pho-3-tang-dep",
    title: "Mẫu Nhà Phố 3 Tầng Đẹp Và Tối Ưu Công Năng",
    focusKeyword: "mẫu nhà phố 3 tầng đẹp",
    secondaryKeywords: ["thiết kế nhà 3 tầng", "mặt bằng nhà phố", "nhà phố hiện đại"],
    image: slugImage("mau-nha-pho-3-tang-dep"),
  },
  {
    calendarNo: 23,
    slug: "thiet-ke-nha-dep-gia-re",
    title: "Thiết Kế Nhà Đẹp Theo Ngân Sách Gia Đình Trẻ",
    focusKeyword: "thiết kế nhà đẹp giá rẻ",
    secondaryKeywords: ["tối ưu chi phí thiết kế", "nhà phố giá rẻ", "công năng cơ bản"],
    image: slugImage("thiet-ke-nha-dep-gia-re"),
  },
  {
    calendarNo: 24,
    slug: "xay-nha-ngan-sach-1-ty-2",
    title: "Giải Pháp Xây Nhà Chỉ Với Ngân Sách Từ 1 Tỷ 2",
    focusKeyword: "xây nhà 1 tỷ 2",
    secondaryKeywords: ["xây nhà tiết kiệm", "phương án mặt bằng", "vật liệu hợp lý"],
    image: slugImage("xay-nha-ngan-sach-1-ty-2"),
  },
  {
    calendarNo: 26,
    slug: "thue-thiet-ke-nha-truoc-khi-xay",
    title: "Vì Sao Nên Thuê Đơn Vị Thiết Kế Trước Khi Xây Nhà?",
    focusKeyword: "thuê thiết kế nhà",
    secondaryKeywords: ["hồ sơ thiết kế", "tránh phát sinh", "thiết kế trước thi công"],
    image: slugImage("thue-thiet-ke-nha-truoc-khi-xay"),
  },
  {
    calendarNo: 27,
    slug: "quy-trinh-xay-nha-tron-goi-a-z",
    title: "Quy Trình Xây Nhà Trọn Gói Từ A Đến Z",
    focusKeyword: "quy trình xây nhà trọn gói",
    secondaryKeywords: ["các bước xây nhà", "nghiệm thu hạng mục", "bàn giao công trình"],
    image: slugImage("quy-trinh-xay-nha-tron-goi-a-z"),
  },
  {
    calendarNo: 28,
    slug: "top-mau-nha-pho-dep-xu-huong",
    title: "Top Mẫu Nhà Phố Đẹp Dẫn Đầu Xu Hướng Hiện Nay",
    focusKeyword: "mẫu nhà phố đẹp",
    secondaryKeywords: ["nhà phố hiện đại", "mặt tiền ấn tượng", "portfolio công trình"],
    image: slugImage("top-mau-nha-pho-dep-xu-huong"),
  },
  {
    calendarNo: 29,
    slug: "thiet-ke-xay-dung-nha-pho-mien-nam",
    title: "Đơn Vị Thiết Kế Và Xây Dựng Nhà Phố Uy Tín Miền Nam",
    focusKeyword: "thiết kế xây dựng nhà phố",
    secondaryKeywords: ["nhà thầu miền Nam", "TP.HCM Bình Dương Đồng Nai", "trọn gói uy tín"],
    image: slugImage("thiet-ke-xay-dung-nha-pho-mien-nam"),
  },
  {
    calendarNo: 30,
    slug: "kien-truc-sao-khue-don-vi-uy-tin",
    title: "Kiến Trúc Sao Khuê – Đơn Vị Thiết Kế Xây Dựng Nhà Phố Chuyên Nghiệp",
    focusKeyword: "Kiến Trúc Sao Khuê",
    secondaryKeywords: ["thiết kế xây dựng Sao Khuê", "xây nhà trọn gói TP.HCM", "bảo hành 10 năm"],
    image: slugImage("kien-truc-sao-khue-don-vi-uy-tin"),
  },
];

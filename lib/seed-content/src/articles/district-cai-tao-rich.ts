/**
 * Khung bài cải tạo theo quận — mỗi slug có H2, bảng giá, quy trình, FAQ, case riêng.
 * Dùng chung đợt 1–3 Ads (không copy-paste cùng 5 H2 + bảng giá).
 */
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";

export type DistrictCaiTaoBrief = {
  slug: string;
  district: string;
  keyword: string;
  repairKeyword: string;
  streets: string;
  housing: string;
  issues: [string, string, string, string];
  permitNote: string;
  priceNote: string;
  faqA: string;
};

type SeoArticle = {
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  content: string;
  imageAlt?: string;
  imageCaption?: string;
};

type PriceBand = {
  light: string;
  mid: string;
  deep: string;
  extraLabel: string;
  extraValue: string;
  lightWeeks: string;
  midWeeks: string;
  deepWeeks: string;
};

type DistrictDepth = {
  example: string;
  stay: string;
  rain: string;
  process: [string, string, string, string, string];
  price: PriceBand;
  faqStay: string;
  faqTime: string;
  faqPermit: string;
  relatedHtml: string;
};

const CORE: PriceBand = {
  light: "1,2 – 2,2 triệu/m²",
  mid: "2,8 – 4,0 triệu/m²",
  deep: "4,0 – 5,8 triệu/m²",
  extraLabel: "Logistics trung tâm / giờ ồn",
  extraValue: "+10 – 20%",
  lightWeeks: "2–4 tuần",
  midWeeks: "7–12 tuần",
  deepWeeks: "3–5 tháng",
};

const INNER: PriceBand = {
  light: "1,1 – 2,1 triệu/m²",
  mid: "2,6 – 3,8 triệu/m²",
  deep: "3,8 – 5,5 triệu/m²",
  extraLabel: "Hẻm xe ba gác",
  extraValue: "+8 – 12%",
  lightWeeks: "2–4 tuần",
  midWeeks: "6–10 tuần",
  deepWeeks: "2–4 tháng",
};

const CANAL: PriceBand = {
  light: "1,0 – 2,0 triệu/m²",
  mid: "2,5 – 3,6 triệu/m²",
  deep: "3,6 – 5,2 triệu/m²",
  extraLabel: "Gia cố nền / khảo sát móng",
  extraValue: "Tách dòng, không gộp đơn giá ảo",
  lightWeeks: "2–5 tuần",
  midWeeks: "6–11 tuần",
  deepWeeks: "3–5 tháng",
};

const OUTER: PriceBand = {
  light: "0,9 – 1,8 triệu/m²",
  mid: "2,2 – 3,4 triệu/m²",
  deep: "3,2 – 4,6 triệu/m²",
  extraLabel: "Di chuyển tổ đội (gói nhỏ)",
  extraValue: "Ghi phụ phí hoặc gộp nếu trọn gói",
  lightWeeks: "2–4 tuần",
  midWeeks: "5–9 tuần",
  deepWeeks: "2–4 tháng",
};

const DEPTH: Record<string, DistrictDepth> = {
  "cai-tao-nha-binh-thanh": {
    example:
      "Nhà phố 4×16m 3 tầng hẻm Nơ Trang Long: chống thấm sân, thay tủ điện, sơn–lát 2 tầng đang ở — thường 6–9 tuần, gia đình giữ 1 WC tầng trệt.",
    stay: "Bình Thạnh sát văn phòng Sao Khuê (Bình Lợi): khảo sát trong ngày. Che bạt tầng đang ngủ; đục tường chịu lực xếp cuối tuần hoặc khi có chỗ ở tạm 5–10 ngày.",
    rain: "Mùa mưa (tháng 5–11) ưu tiên chống thấm sân trước sơn mặt tiền. Hẻm Bình Lợi–Xô Viết Nghệ Tĩnh dễ ngập cục bộ — kê vật tư trên pallet, không để xi măng sát nền.",
    process: [
      "Gửi ảnh mặt tiền + sân thượng + WC qua Zalo — ước lượng trong ngày vì đội gần Bình Lợi.",
      "Kỹ sư đo dốc mái, tủ điện, bề rộng hẻm (xe tải hay ba gác).",
      "Dự toán tách: chống thấm / điện / hoàn thiện / vận chuyển phế thải hẻm.",
      "Thi công: sân thượng → ống đứng → sơn–lát từng tầng khi đang ở.",
      "Nghiệm thu ngâm sân 24–48h; bảo hành hoàn thiện 12–36 tháng, kết cấu tới 10 năm nếu gia cố.",
    ],
    price: {
      ...INNER,
      extraLabel: "Hẻm Bình Lợi – Nơ Trang Long",
      extraValue: "+5 – 10% vận chuyển phế thải",
    },
    faqStay:
      "Được nếu chia tầng: WC–bếp trệt giữ hoạt động, sửa lầu trước. Đục dầm/cột: chuyển tạm 1 tuần. Sao Khuê hút bụi cuối ngày vì hẻm đông.",
    faqTime: "Làm mới 2–4 tuần; sửa công năng 6–9 tuần; gia cố + mặt tiền 3–4 tháng.",
    faqPermit:
      "Đục tường chịu lực / nâng tum cần đối chiếu GPXD. Sơn–lát–chống thấm thường không xin phép. Bình Thạnh siết lộ giới đường lớn.",
    relatedHtml:
      '<a href="/tin-tuc/chong-tham-san-thuong-tphcm">chống thấm sân thượng</a> · <a href="/tin-tuc/cai-tao-nha-dang-o-tphcm">cải tạo nhà đang ở</a> · <a href="/tin-tuc/xay-nha-binh-thanh">xây nhà Bình Thạnh</a>',
  },
  "cai-tao-nha-thu-duc": {
    example:
      "Cấp 4 Linh Xuân / Hiệp Bình muốn lên thêm 1 tầng: khảo sát móng trước — nhiều nền gần rạch không nâng được nếu cột gạch. Gói làm mới giữ khung thường 8–14 tuần.",
    stay: "Nhà phố Thủ Đức hay có sân trước: để vật tư ngoài sân, giảm bụi trong nhà. Cấp 4 đang ở: làm mái và WC phụ trước khi đụng phòng ngủ.",
    rain: "Mùa mưa Thủ Đức kéo dài, sân trồng cây hay đọng nước. Ưu tiên thoát nước + chống thấm trước sơn. Khu Hiệp Bình Chánh chú ý chân tường ẩm.",
    process: [
      "Ảnh móng lộ (nếu có), sân thượng, vết nứt cột — ước lượng sơ bộ.",
      "Khảo sát phường cũ (Q.2 / Q.9 / Thủ Đức): chỉ giới, số tầng cho phép.",
      "Nếu nâng tầng: khoan kiểm tra móng hoặc tư vấn không nâng, chỉ làm mới.",
      "Thi công: gia cố (nếu có) → mái/sân → điện nước → hoàn thiện.",
      "Bàn giao hồ sơ bảo hành; nâng tầng có biên bản nghiệm thu kết cấu.",
    ],
    price: {
      light: "Cấp 4 làm mới 80 – 250 triệu/căn (tùy m² đụng)",
      mid: "Phố 2–3 tầng 250 – 500 triệu",
      deep: "Nâng tầng + gia cố: báo sau khảo sát móng",
      extraLabel: "Nền yếu gần rạch",
      extraValue: "Gia cố tách dòng",
      lightWeeks: "3–5 tuần",
      midWeeks: "7–12 tuần",
      deepWeeks: "3–6 tháng",
    },
    faqStay:
      "Cấp 4 làm mới: ở được nếu che mái tạm. Nâng tầng / khoan cọc: không ở — rung và bụi.",
    faqTime: "Làm mới cấp 4 3–6 tuần; phố sửa trọn gói 8–14 tuần; nâng tầng 4–7 tháng kể cả phép.",
    faqPermit:
      "TP. Thủ Đức quy hoạch từng phường khác nhau. Xin phép nâng tầng phải đúng số tầng và chỉ giới — Sao Khuê không hứa tầng khi chưa tra quy hoạch.",
    relatedHtml:
      '<a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a> · <a href="/tin-tuc/xay-nha-thu-duc">xây nhà Thủ Đức</a> · <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a>',
  },
  "cai-tao-nha-go-vap": {
    example:
      "Ống 4×16m 2 tầng hẻm Lê Đức Thọ: giếng trời nhỏ, thay mái/sân tầng 2, điện máy lạnh — phụ phí ba gác 8–12%, thi công 7–10 tuần khi đang ở.",
    stay: "Hẻm Gò Vấp hẹp: phế thải cuối ngày, không để gạch chắn lối. Gia đình giữ phòng sau; thợ làm mặt tiền và sân trước.",
    rain: "Sân thượng nhà ống Gò Vấp hay dột xuống tầng 3–4. Làm chống thấm + dốc thoát trước mùa mưa; không sơn mặt tiền khi tường còn ẩm.",
    process: [
      "Đo bề rộng hẻm (mở xe tải được không) + ảnh giếng trời / mái.",
      "Khảo sát: tường chịu lực trước khi hứa đập thông lấy sáng.",
      "Dự toán gồm dòng vận chuyển hẻm &lt; 3m — không phụ thu miệng sau.",
      "Thi công: mái/sân → giếng trời (nếu phép) → điện → sơn–lát từng phòng.",
      "Nghiệm thu thoát nước sân; bảo hành chống thấm theo gói đã ký.",
    ],
    price: {
      ...INNER,
      extraLabel: "Hẻm &lt; 3m (Quang Trung, Lê Đức Thọ)",
      extraValue: "+8 – 12%",
    },
    faqStay:
      "Ống hẹp vẫn ở được nếu làm từng phòng. Đập thông / giếng trời lớn: chuyển 1–2 tuần vì bụi xuyên suốt chiều sâu nhà.",
    faqTime: "Sửa công năng 2 tầng 6–10 tuần; thêm giếng trời + mặt tiền 10–14 tuần.",
    faqPermit: "Đổi kết cấu / đục mái lấy sáng cần kiểm tra GPXD. Hẻm không phải lý do làm chui.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">giếng trời nhà phố</a> · <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà ống</a> · <a href="/tin-tuc/xay-nha-go-vap">xây nhà Gò Vấp</a>',
  },
  "cai-tao-nha-tan-binh": {
    example:
      "Nhà 2 tầng mặt tiền Cộng Hòa kết hợp quán: cửa kính chống ồn, điện 3 pha, WC khách tách WC nhà — hoàn thiện mặt đứng cao hơn hẻm trong 10–15%.",
    stay: "Gần sân bay: máy đục ca sáng, hạn chế 12h–13h30 và sau 18h. Gia đình ở tầng trên khi sửa trệt quán.",
    rain: "Tường ngoài bám bụi + rêu: rửa áp lực, xử lý nứt rồi mới sơn chống thấm. Không sơn đè lên rêu.",
    process: [
      "Xác định nhà ở thuần hay kết hợp kinh doanh (tải điện, PCCC).",
      "Khảo sát giờ ồn phường / hàng xóm; ghi ca máy vào phụ lục.",
      "Dự toán tách mặt tiền, điện 3 pha, chống ồn cửa, hoàn thiện trong.",
      "Thi công trệt (quán) xong mới đụng lầu ở — giữ lối riêng nếu được.",
      "Bàn giao biên bản điện + chống thấm; bảo hành cửa kính theo hãng.",
    ],
    price: {
      light: "1,0 – 2,0 triệu/m² (hẻm, ở thuần)",
      mid: "2,8 – 4,2 triệu/m²",
      deep: "3,5 – 5,5 triệu/m² (mặt tiền + điện quán)",
      extraLabel: "Mặt tiền Cộng Hòa – Hoàng Văn Thụ",
      extraValue: "+10 – 15% hoàn thiện mặt đứng",
      lightWeeks: "2–4 tuần",
      midWeeks: "6–10 tuần",
      deepWeeks: "2–4 tháng",
    },
    faqStay:
      "Quán trệt + ở lầu: làm được. Cả nhà chống ồn (thay cửa toàn bộ): ồn 3–7 ngày — nên cho trẻ/người già tránh máy cắt kính.",
    faqTime: "Sửa nhẹ 2–4 tuần; quán + mặt tiền 8–12 tuần.",
    faqPermit:
      "Đổi mặt đứng lớn / công năng ở→quán: hỏi phường Tân Bình. Sơn–lát trong không cần phép.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">nhà kết hợp kinh doanh</a> · <a href="/tin-tuc/xin-giay-phep-cai-tao-nha-tphcm">xin phép cải tạo</a>',
  },
  "cai-tao-nha-tan-phu": {
    example:
      "Cấp 4 lô 4×16m Lũy Bán Bích / Gò Dầu: sơn, lát, WC, mái tôn — 120–280 triệu, 4–7 tuần, ở được. Nâng tầng chỉ sau khi khoan/kiểm móng.",
    stay: "Cấp 4 một lớp: làm nửa nhà trước. Giữ bếp tạm ngoài hiên nếu đụng bếp chính.",
    rain: "Mái tôn cấp 4 Tân Phú hay dột diềm. Thay tôn + diềm + ống xả trước mùa mưa, rồi mới ốp trong.",
    process: [
      "Phân loại: làm mới giữ khung / cải tạo sâu / nâng tầng.",
      "Đối chiếu sổ và mật độ phường trước khi hứa thêm tầng.",
      "Dự toán cấp 4 theo m² đụng + mái; nâng tầng tách hồ sơ kết cấu.",
      "Thi công mái → WC → sơn–lát; nâng tầng (nếu có) sau gia cố.",
      "Nghiệm thu mái mưa giả hoặc chờ trận mưa; bảo hành tôn theo tấm.",
    ],
    price: {
      light: "Làm mới cấp 4 1,0 – 2,0 triệu/m² (120–280 triệu/căn 4×16)",
      mid: "Cải tạo sâu + mái 2,5 – 4,0 triệu/m² (250–450 triệu)",
      deep: "Nâng tầng: sau khảo sát móng",
      extraLabel: "Lô 4×12 – 5×16",
      extraValue: "Báo theo m² sàn đụng, không gộp đất trống",
      lightWeeks: "3–6 tuần",
      midWeeks: "6–10 tuần",
      deepWeeks: "4–7 tháng",
    },
    faqStay: "Làm mới cấp 4: ở được nếu che mái tạm. Nâng tầng: chuyển chỗ.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu 8–12 tuần; nâng tầng theo phép.",
    faqPermit:
      "Nhiều cấp 4 trên đất ở — nâng tầng phải đúng số tầng quy hoạch phường Tân Phú. Sao Khuê tra trước, không đúc tum chui.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a> · <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a> · <a href="/tin-tuc/xay-nha-tan-phu">xây nhà Tân Phú</a>',
  },
  "cai-tao-nha-quan-7": {
    example:
      "Nhà phố PMH / Nguyễn Thị Thập cho thuê: mặt tiền, điện quán, chống thấm sân–hồ. Hẻm Tân Thuận cùng quận nhưng nội quy và vật tư khác — không báo một giá.",
    stay: "KDC PMH: giờ thi công theo BQL, rác tập kết đúng điểm. Nhà hẻm Tân Thuận linh hoạt hơn nhưng vẫn che chắn nếu hàng xóm sát.",
    rain: "Sân thượng + chòi + hồ cá hay thấm chân tường. Xử lý cổ ống và dốc sàn trước sơn đá/granite mặt đứng.",
    process: [
      "Xác định khu: PMH (nội quy BQL) hay hẻm phường Q.7.",
      "Khảo sát mặt đứng, PCCC tầng trệt nếu shophouse.",
      "Dự toán tách hoàn thiện PMH (cao hơn) vs hẻm Tân Thuận.",
      "Thi công ngoài giờ BQL nếu khu đô thị; hẻm thì ca ngày.",
      "Bàn giao đúng facade/vật tư list — PMH hay soi lệch màu.",
    ],
    price: {
      light: "Hẻm Tân Thuận 2,5 – 3,5 triệu/m²",
      mid: "Phố Q.7 công năng 2,5 – 4,0 triệu/m²",
      deep: "Biệt thự mini + sân 4 – 7 triệu/m²",
      extraLabel: "Hoàn thiện PMH vs hẻm",
      extraValue: "PMH cao hơn 15 – 25%",
      lightWeeks: "3–5 tuần",
      midWeeks: "7–12 tuần",
      deepWeeks: "3–5 tháng",
    },
    faqStay: "Nhà phố thuê từng tầng: làm tầng trống trước. Biệt thự đang ở: chia cánh nhà.",
    faqTime: "Mặt tiền shophouse 4–8 tuần; biệt thự mini 3–5 tháng.",
    faqPermit:
      "PMH: nội quy thi công + mặt đứng. Nhà hẻm: GPXD phường Q.7. Hai hồ sơ không dùng chung.",
    relatedHtml:
      '<a href="/tin-tuc/xay-nha-quan-7">xây nhà Quận 7</a> · <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">mặt tiền kinh doanh</a>',
  },
  "cai-tao-nha-quan-1": {
    example:
      "Nhà cũ Pasteur / Cô Giang 3–4 tầng: cầu thang hẹp, không xe tải đêm. Sửa nội thất + WC từng tầng, gia cố lan can — lịch ca sáng, 8–14 tuần.",
    stay: "Trung tâm: hạn chế ồn. Ở được nếu không đục dầm. Khách sạn/nhà nghỉ nhỏ: làm từng phòng để còn cho thuê.",
    rain: "Tường tiếp giáp nhà cổ hay thấm ngang. Xử lý khe lún trước sơn trong.",
    process: [
      "Xin khung giờ vận chuyển với phường / hàng xóm hẻm.",
      "Khảo sát kết cấu nhà cũ — nhiều nhà Q.1 không được đục cột.",
      "Dự toán +10–20% logistics so quận ven; ghi xe nhỏ / ca đêm (nếu được).",
      "Thi công từng tầng, hoàn thiện mặt tiền theo nội quy khu.",
      "Nghiệm thu ồn–rác đúng cam kết phụ lục.",
    ],
    price: CORE,
    faqStay: "Nhà ở: chia tầng. Homestay: chừa phòng chạy. Đục kết cấu: chuyển hết.",
    faqTime: "Nội thất + WC 6–10 tuần; gia cố nhà cũ 3–5 tháng.",
    faqPermit: "Q.1 siết giờ ồn và mặt đứng. Đổi kết cấu / mặt tiền: kiểm tra GPXD trước khi đục.",
    relatedHtml:
      '<a href="/tin-tuc/xin-giay-phep-cai-tao-nha-tphcm">xin phép cải tạo</a> · <a href="/tin-tuc/gia-co-nha-cu-tphcm">gia cố nhà cũ</a>',
  },
  "cai-tao-nha-quan-3": {
    example:
      "Ống Trần Quốc Thảo / Lê Văn Sỹ 4×16m: đập thông lấy sáng, sửa bếp–WC ẩm, mặt tiền 4–5m. Công trình mẫu: cải tạo nhà phố Quận 3.",
    stay: "Hẻm không mở xe tải: vật tư ba gác, gia đình đi cửa sau nếu có. Đập thông: bụi cả nhà — chuyển 10–14 ngày.",
    rain: "Nhà sâu Q.3 thiếu nắng, ẩm WC quanh năm. Chống thấm + thông gió trước sơn.",
    process: [
      "Khảo sát tường nào được đập (không phải chịu lực).",
      "Lập phương án giếng trời / cửa sổ giếng nếu GPXD cho.",
      "Dự toán 280–450 triệu cho 2 tầng công năng (cộng hẻm).",
      "Thi công kết cấu nhẹ → WC–bếp → sơn–lát khi đang ở phần còn lại.",
      "Bàn giao; tham chiếu case đã làm tại Q.3 nếu chủ nhà muốn xem.",
    ],
    price: {
      ...INNER,
      extraLabel: "Ống 4×16m 2 tầng (công năng)",
      extraValue: "280 – 450 triệu + phụ phí hẻm",
    },
    faqStay: "Sơn–lát: ở được. Đập thông nhà sâu: nên chuyển tạm.",
    faqTime: "Sửa nhẹ 3–5 tuần; đập thông + mặt tiền 10–14 tuần.",
    faqPermit: "Đục tường chịu lực cần phép. Hẻm hẹp không miễn phép.",
    relatedHtml:
      '<a href="/cong-trinh/sua-nha-quan-3">cải tạo nhà phố Quận 3</a> · <a href="/tin-tuc/cai-tao-bep-wc-tphcm">cải tạo bếp–WC</a>',
  },
  "cai-tao-nha-quan-8": {
    example:
      "Cấp 4 / phố 2 tầng Phạm Thế Hiển gần rạch: chân tường ẩm, mái dột. Khảo sát móng trước mọi ý định nâng tầng.",
    stay: "Nhà gần kênh: kê vật tư cao. Ở được khi chỉ sửa mái–WC; gia cố móng thì chuyển.",
    rain: "Mùa mưa Q.8 chân tường và sàn trệt hay ẩm ngược. Chống thấm đứng + dốc thoát, không chỉ trét trong.",
    process: [
      "Xem hiện trạng móng / lún / nứt chân tường.",
      "Tách gói: chống thấm + mái (an toàn) vs nâng tầng (chỉ khi móng đủ).",
      "Dự toán gia cố nền là dòng riêng — không nuốt vào đơn giá m².",
      "Thi công thoát nước → chống thấm → mái → hoàn thiện.",
      "Phá dỡ (nếu có) ghi phạm vi, che chắn hàng xóm sát rạch.",
    ],
    price: CANAL,
    faqStay: "Làm mới mái–sơn: ở được. Khoan cọc / gia cố: không ở.",
    faqTime: "Cấp 4 làm mới 4–8 tuần; gia cố nền + phố 3–6 tháng.",
    faqPermit: "Nâng tầng khu gần rạch: khảo sát móng bắt buộc. Phá dỡ ghi rõ phạm vi với phường.",
    relatedHtml:
      '<a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng / gia cố</a> · <a href="/tin-tuc/chong-tham-san-thuong-tphcm">chống thấm</a>',
  },
  "cai-tao-nha-quan-10": {
    example:
      "Nhà ống Hòa Hảo / Thành Thái vừa ở vừa bán: cải tạo bếp–WC ca đêm hoặc sáng sớm, điện 3 pha quán, chống thấm sân — hẻm ba gác +8–12%.",
    stay: "Kinh doanh tầng trệt: làm lầu trước hoặc làm quán ngoài giờ bán. Giữ 1 WC khách.",
    rain: "Sân thượng nhà ống Q.10 hay đọng. Làm dốc + cổ ống trước mùa mưa để quán trệt không thấm.",
    process: [
      "Hỏi phường nếu đổi mặt tiền quán / công năng.",
      "Khảo sát tải điện hiện tại vs máy lạnh + bếp quán.",
      "Dự toán tách nhà ở và phần kinh doanh (PCCC, 3 pha).",
      "Thi công WC–ống đứng → điện → mặt tiền (sau giờ bán).",
      "Nghiệm thu điện + ngâm WC; bàn giao list thiết bị quán.",
    ],
    price: {
      ...INNER,
      extraLabel: "Mặt tiền + điện quán",
      extraValue: "3,5 – 5,0 triệu/m² phần đụng",
    },
    faqStay: "Quán vẫn mở được nếu chia ca. Đục mặt tiền: đóng 3–7 ngày.",
    faqTime: "Bếp–WC 3–6 tuần; cả nhà + quán 8–12 tuần.",
    faqPermit: "Đổi công năng nhà ở + quán: hỏi phường trước khi đục mặt tiền.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-bep-wc-tphcm">cải tạo bếp–WC</a> · <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">nhà kết hợp kinh doanh</a>',
  },
  "cai-tao-nha-quan-12": {
    example:
      "Cấp 4 / phố 2 tầng Tân Chánh Hiệp lô 4×12–5×16: làm mới hoặc nâng tầng nếu quy hoạch phường cho. Vận chuyển dễ hơn nội thành.",
    stay: "Đường lớn Q.12: xe tải vào được nhiều tuyến. Ở được khi làm mới; nâng tầng thì chuyển.",
    rain: "Sân cấp 4 Q.12 hay dột. Làm mái + chống thấm trước, sơn sau khi khô.",
    process: [
      "Tra số tầng / mật độ theo phường (Q.12 không đồng nhất).",
      "Khảo sát móng nếu chủ nhà muốn nâng.",
      "Dự toán sát bảng TP, ít phụ phí hẻm hơn Gò Vấp.",
      "Thi công mái → WC → sơn–lát; nâng tầng theo hồ sơ.",
      "Bàn giao; tư vấn giai đoạn 2 nếu ngân sách dãn.",
    ],
    price: {
      ...OUTER,
      extraLabel: "Vận chuyển",
      extraValue: "Thường sát mốc bảng chung (đường lớn)",
    },
    faqStay: "Làm mới cấp 4: ở được. Nâng tầng: không ở.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu 8–12 tuần.",
    faqPermit: "Quy hoạch từng phường khác nhau — kiểm tra số tầng trước khi hứa nâng.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a> · <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a>',
  },
  "cai-tao-nha-phu-nhuan": {
    example:
      "Ống 3,5–5m Phan Xích Long 3–4 tầng, hẻm xe máy: giếng trời, tối ưu phòng khách, WC ẩm, mặt tiền cho thuê trệt — 320–520 triệu công năng 3 tầng.",
    stay: "Hẻm PN rất hẹp: chuyển vật tư ban đêm hoặc sáng sớm. Gia đình đi bộ ra mặt tiền; không để gạch giữa hẻm.",
    rain: "Nhà sâu thiếu nắng: ẩm WC quanh năm. Giếng trời + chống thấm WC trước sơn.",
    process: [
      "Đo hẻm, lập phương án ba gác / khiêng bộ.",
      "Khảo sát đục tường chịu lực — nhiều nhà PN 4 tầng không đập thông tự do.",
      "Dự toán gồm logistics hẻm; tách mặt tiền thuê trệt.",
      "Thi công giếng/cầu thang (nếu phép) → WC–bếp → hoàn thiện từng tầng.",
      "Nghiệm thu thoát nước giếng trời (nếu có) để khỏi ngập trệt.",
    ],
    price: {
      light: "1,2 – 2,2 triệu/m²",
      mid: "2,5 – 3,5 triệu/m² sàn đụng",
      deep: "3,5 – 5,0 triệu/m² (đập thông + mặt tiền)",
      extraLabel: "Nhà 4×12m 3 tầng công năng",
      extraValue: "320 – 520 triệu (gồm hẻm)",
      lightWeeks: "3–5 tuần",
      midWeeks: "8–12 tuần",
      deepWeeks: "3–5 tháng",
    },
    faqStay: "Hẻm hẹp vẫn ở được nếu làm từng tầng. Đập thông liên tầng: chuyển tạm.",
    faqTime: "Công năng 8–12 tuần; thêm giếng trời 12–16 tuần.",
    faqPermit: "Đục tường chịu lực cần phép. Hẻm xe máy không miễn GPXD.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">giếng trời / cầu thang</a> · <a href="/tin-tuc/cai-tao-gac-lung-nha-pho-tphcm">gác lửng nhà phố</a>',
  },
  "cai-tao-nha-binh-tan": {
    example:
      "Phố 4×16–5×20 Tên Lửa / Lê Văn Quới: thấm sân–WC, cải tạo bếp, sơn trọn gói. Đường lớn dễ xe; hẻm trong vẫn ba gác.",
    stay: "Khu Aeon / Tên Lửa: hàng xóm nhà mới — che bụi mặt tiền bắt buộc. Ở được khi sơn–lát từng tầng.",
    rain: "Sân thượng phố mới hay trồng cây — cổ ống thủng. Xử lý sân trước sơn ngoài.",
    process: [
      "Phân nhà phố mới vs cấp 4 cần nâng.",
      "Khảo sát móng nếu chủ muốn thêm tầng.",
      "Dự toán sát bảng TP; mặt tiền đường lớn +8–15%.",
      "Thi công sân/WC → bếp → sơn; nâng tầng riêng hồ sơ.",
      "Bàn giao; bảo hành sơn theo số lớp đã ghi.",
    ],
    price: {
      ...INNER,
      extraLabel: "Mặt tiền đường lớn vs hẻm",
      extraValue: "Đường lớn cao hơn 8 – 15%",
    },
    faqStay: "Sơn–bếp–WC: ở được. Nâng tầng: chuyển.",
    faqTime: "Sơn trọn gói 2–4 tuần; sửa công năng 6–10 tuần.",
    faqPermit: "Xin phép theo phường Bình Tân. Đường lớn dễ xe không có nghĩa được xây vượt tầng.",
    relatedHtml:
      '<a href="/tin-tuc/son-nha-va-noi-that-tphcm">sơn nhà trọn gói</a> · <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a>',
  },
  "cai-tao-nha-nha-be": {
    example:
      "Cấp 4 / nhà vườn Phú Xuân – Nguyễn Bình: mái, WC, điện. Nền gần rạch: khảo sát móng trước nâng. Lịch khảo sát chốt trước 1 ngày (xa Bình Thạnh).",
    stay: "Nhà vườn rộng: để vật tư sân, ở được khi sửa trong. Gia cố lún: chuyển.",
    rain: "Mái cấp 4 + ẩm chân tường mùa mưa. Thoát nước sân vườn trước chống thấm tường.",
    process: [
      "Hẹn khảo sát trước 1 ngày — khoảng cách từ Bình Thạnh.",
      "Xem nền gần rạch / vết lún.",
      "Gói nhỏ: có thể phụ phí di chuyển; trọn gói thường gộp.",
      "Thi công mái → điện nước → WC → sơn.",
      "Không nâng tầng khi móng chưa đủ — ghi rõ trong tư vấn.",
    ],
    price: {
      ...CANAL,
      extraLabel: "Di chuyển tổ đội",
      extraValue: "Phụ phí gói nhỏ; trọn gói thường gộp",
    },
    faqStay: "Cấp 4 làm mới: ở được. Khoan cọc: không ở.",
    faqTime: "Làm mới 3–6 tuần; gia cố nền 2–4 tháng.",
    faqPermit: "Nền gần rạch: khảo sát móng bắt buộc trước nâng tầng.",
    relatedHtml:
      '<a href="/tin-tuc/xay-nha-nha-be">xây nhà Nhà Bè</a> · <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a>',
  },
  "cai-tao-nha-binh-chanh": {
    example:
      "Cấp 4 Vĩnh Lộc / Tân Kiên trên đất lớn: mái tôn hoặc mái thái, tường nứt, điện cũ. Đường đất mùa mưa có thể chậm tiến độ 1–2 tuần.",
    stay: "Lô rộng: ở được, vật tư để sân. Phá dỡ phần hỏng: cách ly khu ở.",
    rain: "Đường đất: xe vật tư kẹt. Chốt lịch đổ bê tông / tôn tránh đỉnh mưa.",
    process: [
      "Kiểm tra sổ (nông nghiệp / thổ cư lẫn) trước khi hứa cải tạo lớn.",
      "Khảo sát nứt tường vs lún nền.",
      "Dự toán rẻ vận chuyển hơn hẻm nội thành; ghi rủi ro mùa mưa.",
      "Thi công mái → điện → tường nứt → sơn.",
      "Nâng tầng chỉ khi quy hoạch xã/phường cho và móng đủ.",
    ],
    price: OUTER,
    faqStay: "Làm mới cấp 4: ở được. Phá dỡ lớn: chuyển tạm khu bị đụng.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu 8–12 tuần (cộng mưa).",
    faqPermit: "Đất hỗn hợp: đối chiếu sổ trước khi đập tường ngoài / nâng tầng.",
    relatedHtml:
      '<a href="/tin-tuc/xay-nha-kdc-binh-chanh">xây nhà KDC Bình Chánh</a> · <a href="/tin-tuc/cai-tao-nha-cho-thue-tphcm">cải tạo nhà nát</a>',
  },
  "cai-tao-nha-hoc-mon": {
    example:
      "Cấp 4 5×16–5×20 Bà Điểm / Đông Thạnh: làm mới 100–260 triệu. Mở rộng chỉ khi còn chỉ giới — đối chiếu sổ đất hỗn hợp.",
    stay: "Nhà 1 trệt 1 lầu: ở tầng còn lại. Cấp 4: che mái tạm.",
    rain: "Mái tôn + sân: làm trước mùa mưa. Đường huyện dễ xe hơn hẻm Phú Nhuận.",
    process: [
      "Đối chiếu sổ và chỉ giới trước khi đập tường ngoài.",
      "Khảo sát mái, WC, điện.",
      "Dự toán làm mới cấp 4 4×16m 100–260 triệu.",
      "Thi công mái → WC → sơn–lát; mở rộng (nếu phép) tách hợp đồng.",
      "Bàn giao; tư vấn nâng 1 lầu nếu móng và quy hoạch đủ.",
    ],
    price: {
      ...OUTER,
      extraLabel: "Làm mới cấp 4 4×16m",
      extraValue: "100 – 260 triệu",
    },
    faqStay: "Làm mới: ở được. Đập tường ngoài / mở rộng: tùy phạm vi.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu + mái 8–12 tuần.",
    faqPermit: "Hóc Môn nhiều đất hỗn hợp — không đập tường ngoài khi chưa đối chiếu sổ.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a> · <a href="/tin-tuc/xin-giay-phep-cai-tao-nha-tphcm">xin phép cải tạo</a>',
  },
  "cai-tao-nha-quan-4": {
    example:
      "Ống 2–4 tầng Hoàng Diệu / Nguyễn Tất Thành gần rạch: chân tường ẩm, tầng trệt để xe/quán. Gia cố nếu lún — tách dòng, không gộp m².",
    stay: "Nhà sát kênh: ồn đục truyền xa. Ca sáng; ở lầu khi sửa trệt.",
    rain: "Ngập cục bộ: điện trệt nâng cao, ốp chân tường sau chống thấm đứng.",
    process: [
      "Khảo sát móng / lún trước mọi ý nâng tầng.",
      "Giờ ồn theo phường Q.4.",
      "Dự toán gia cố nền riêng.",
      "Thi công thoát + chống thấm chân tường → trệt quán/xe → WC–bếp lầu.",
      "Không hứa nâng khi nền yếu.",
    ],
    price: CANAL,
    faqStay: "Sửa trệt: ở lầu được. Gia cố móng: chuyển.",
    faqTime: "Công năng 6–10 tuần; gia cố nền 3–5 tháng.",
    faqPermit: "Gần rạch: khảo sát móng bắt buộc. Giờ ồn theo phường.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">tầng trệt quán</a> · <a href="/tin-tuc/nang-tang-nha-cu-tphcm">gia cố / nâng tầng</a>',
  },
  "cai-tao-nha-quan-5": {
    example:
      "Mặt tiền Trần Hưng Đạo / Nguyễn Trãi: cửa nhôm kính, điện 3 pha, WC quán; lầu ở chống thấm WC. Hoàn thiện mặt tiền +10–20% so nhà ở thuần.",
    stay: "Quán đông: thi công ngoài giờ bán hoặc làm lầu trước. Hẻm ống sâu: ba gác.",
    rain: "WC lầu thấm xuống quán — ưu tiên chống thấm WC trước mặt tiền cho “đẹp”.",
    process: [
      "Hỏi phường đổi mặt tiền quán.",
      "Tách điện ở / điện quán, PCCC tối thiểu.",
      "Dự toán mặt tiền kinh doanh cao hơn nhà ở.",
      "Thi công WC lầu → điện → cửa kính mặt tiền.",
      "Bàn giao list kính–nhôm–thiết bị.",
    ],
    price: {
      light: "Nhà ở thuần 2,5 – 3,5 triệu/m²",
      mid: "Mặt tiền quán 3,5 – 5,0 triệu/m²",
      deep: "Cả nhà + 3 pha + PCCC: báo sau khảo sát",
      extraLabel: "Hoàn thiện mặt tiền kinh doanh",
      extraValue: "+10 – 20% vs nhà ở thuần",
      lightWeeks: "3–5 tuần",
      midWeeks: "7–12 tuần",
      deepWeeks: "3–4 tháng",
    },
    faqStay: "Lầu ở được khi sửa quán. Đổi cửa mặt tiền: ồn 2–5 ngày.",
    faqTime: "Mặt tiền + WC 4–8 tuần; cả nhà 10–14 tuần.",
    faqPermit: "Đổi mặt tiền quán: hỏi phường. Hẻm xe ba gác ghi logistics.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">nhà kết hợp kinh doanh</a> · <a href="/tin-tuc/chong-tham-tuong-wc-tphcm">chống thấm WC</a>',
  },
  "cai-tao-nha-quan-6": {
    example:
      "Cấp 4 xen phố Hậu Giang / Phạm Văn Chí, hẻm chật: thay mái tôn, sơn–lát đang ở, chống thấm sân. Logistics hẻm &lt; 3m +8–12%.",
    stay: "Hẻm Q.6: không chắn lối. Sơn từng phòng; thay tôn ca ngày tránh mưa.",
    rain: "Mái tôn cũ dột diềm. Thay tôn + xả trước sơn trong.",
    process: [
      "Đo hẻm, ghi phụ phí vận chuyển ngay dự toán.",
      "Khảo sát mái, sân, cấp 4 vs phố.",
      "Thi công mái → sân → sơn–lát khi đang ở.",
      "Không nâng tầng khi chưa tra phép phường.",
      "Nghiệm thu mái sau mưa hoặc phun thử.",
    ],
    price: {
      ...INNER,
      extraLabel: "Hẻm &lt; 3m",
      extraValue: "+8 – 12% logistics",
    },
    faqStay: "Sơn–lát–mái: ở được. Đục kết cấu: chuyển.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu 8–12 tuần.",
    faqPermit: "Hẻm hẹp vẫn cần phép khi đục kết cấu. Phụ phí vận chuyển ghi trước khi ký.",
    relatedHtml:
      '<a href="/tin-tuc/chong-tham-tuong-wc-tphcm">thay mái tôn / chống thấm</a> · <a href="/tin-tuc/cai-tao-nha-dang-o-tphcm">cải tạo nhà đang ở</a>',
  },
  "cai-tao-nha-quan-9": {
    example:
      "Phố mới / cấp 4 Lê Văn Việt – Long Thạnh Mỹ (TP. Thủ Đức): làm mới 3–4 tầng, giếng trời, sân thượng. Đường lớn dễ xe; xin phép theo phường cũ Q.9.",
    stay: "Khu phố mới: hàng xóm nhạy bụi. Che mặt tiền. Ở được khi sơn–lát.",
    rain: "Sân thượng phố mới hay đọng. Chống thấm + dốc trước lát gạch trang trí.",
    process: [
      "Xin phép theo phường cũ Q.9 (nay Thủ Đức).",
      "Khảo sát nâng tầng nếu chủ muốn thêm tum.",
      "Đơn giá sát bảng TP — đường lớn ít phụ phí hẻm.",
      "Thi công sân → giếng/ban công → hoàn thiện.",
      "Bàn giao; liên kết hub xây Thủ Đức nếu xây mới hơn sửa.",
    ],
    price: {
      ...INNER,
      extraLabel: "Đường lớn",
      extraValue: "Đơn giá sát bảng TP, ít phụ phí hẻm",
    },
    faqStay: "Phố mới sửa công năng: ở được. Nâng tầng: chuyển.",
    faqTime: "Công năng 6–10 tuần; nâng tầng theo phép.",
    faqPermit: "Thuộc TP. Thủ Đức — hồ sơ theo phường cũ Q.9, không nhầm quy hoạch Q.2.",
    relatedHtml:
      '<a href="/tin-tuc/xay-nha-thu-duc">xây nhà Thủ Đức</a> · <a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">giếng trời / ban công</a>',
  },
  "cai-tao-nha-quan-11": {
    example:
      "Ống 4–5m 3–4 tầng sát Đầm Sen (Lạc Long Quân): nhà tối, WC nhiều tầng, tường chung thấm, sơn mặt tiền. 4×12m 3 tầng công năng thường 280–450 triệu.",
    stay: "Hẻm đông chợ: che chắn bụi bắt buộc. Làm từng tầng; giữ 1 WC.",
    rain: "Tường chung thấm ngang. Xử lý khe + chống thấm đứng, không chỉ sơn trong.",
    process: [
      "Khảo sát cầu thang / giếng trời — tường nào được đục.",
      "Đo hẻm, lịch tránh giờ chợ nếu cần.",
      "Dự toán 280–450 triệu công năng 4×12m 3 tầng; đập thông tính gia cố.",
      "Thi công WC từng tầng → giếng/cầu thang (nếu phép) → sơn mặt tiền.",
      "Nghiệm thu thấm tường chung với hàng xóm (nếu đụng).",
    ],
    price: {
      ...INNER,
      extraLabel: "Nhà 4×12m 3 tầng công năng",
      extraValue: "280 – 450 triệu; đập thông tính gia cố",
    },
    faqStay: "Hẻm đông: ở được nếu che bụi và chia tầng. Thông tầng: chuyển tạm.",
    faqTime: "Sửa WC nhiều tầng 4–8 tuần; giếng trời + mặt tiền 10–14 tuần.",
    faqPermit: "Đục cầu thang / giếng trời lớn cần kiểm tra GPXD. Che chắn bắt buộc khi đang ở.",
    relatedHtml:
      '<a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">cầu thang / giếng trời</a> · <a href="/tin-tuc/chong-tham-tuong-wc-tphcm">chống thấm tường</a>',
  },
  "cai-tao-nha-cu-chi": {
    example:
      "Cấp 4 / nhà vườn Quốc lộ 22 – Tân Thông Hội: mái tôn, tường nứt, điện cũ. Xa nội thành: khảo sát hẹn trước; gói nhỏ có phụ phí di chuyển.",
    stay: "Nhà vườn: ở được, vật tư sân. Đất hỗn hợp: không đập tường ngoài khi chưa xem sổ.",
    rain: "Đường huyện mưa: chậm xe. Chốt tôn / sơn tránh đỉnh mưa.",
    process: [
      "Hẹn khảo sát trước (không drop-in trong ngày như Bình Thạnh).",
      "Kiểm tra sổ đất hỗn hợp.",
      "Gói nhỏ: phụ phí di chuyển; trọn gói thường gộp.",
      "Thi công mái → điện → tường nứt → sơn.",
      "Mở rộng chỉ khi còn chỉ giới.",
    ],
    price: OUTER,
    faqStay: "Làm mới cấp 4: ở được. Mở rộng / đập ngoài: tùy sổ.",
    faqTime: "Làm mới 3–6 tuần; cải tạo sâu 8–12 tuần (cộng lịch đội).",
    faqPermit: "Xa nội thành + đất hỗn hợp: kiểm tra sổ trước khi đập. Khảo sát hẹn trước 1 ngày.",
    relatedHtml:
      '<a href="/tin-tuc/xay-nha-tron-goi-cu-chi">xây nhà trọn gói Củ Chi</a> · <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4</a>',
  },
};

function fallbackDepth(b: DistrictCaiTaoBrief): DistrictDepth {
  return {
    example: `Nhà ${b.housing} quanh ${b.streets}: Sao Khuê khảo sát hiện trạng rồi mới chốt gói — không báo giá ảo qua ảnh.`,
    stay: `Gia đình tại ${b.district} có thể ở khi chia khu WC–bếp; đục kết cấu nên chuyển tạm.`,
    rain: `Mùa mưa ưu tiên chống thấm và mái tại ${b.district} trước sơn mặt tiền.`,
    process: [
      "Ảnh + mô tả — ước lượng trong ngày.",
      `Khảo sát miễn phí tại ${b.district}.`,
      "Dự toán từng dòng, lịch che chắn nếu đang ở.",
      "Thi công: kết cấu → chống thấm → điện nước → hoàn thiện.",
      "Nghiệm thu, bảo hành hoàn thiện 12–36 tháng.",
    ],
    price: INNER,
    faqStay: "Được nếu chia khu. Đục tường lớn: chuyển 1–2 tuần.",
    faqTime: "Làm mới 2–4 tuần; công năng 6–10 tuần; sâu 2–4 tháng.",
    faqPermit: b.permitNote.replace(/<[^>]+>/g, "").slice(0, 220),
    relatedHtml:
      '<a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a> · <a href="/tin-tuc/cai-tao-nha-dang-o-tphcm">cải tạo nhà đang ở</a>',
  };
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function imgs(slug: string, focus: string) {
  return {
    a: imageFigure(slugImage(slug, 0), focus, 1),
    b: imageFigure(slugImage(slug, 1), focus, 2),
    c: imageFigure(slugImage(slug, 2), focus, 3),
  };
}

export function buildDistrictCaiTaoRich(b: DistrictCaiTaoBrief): SeoArticle {
  const d = DEPTH[b.slug] ?? fallbackDepth(b);
  const { a, b: img2, c } = imgs(b.slug, b.keyword);
  const h1kw = cap(b.keyword);

  return {
    title: `Cải Tạo Nhà ${b.district} 2026 — Hiện Trạng, Giá & Ở Được Khi Sửa`,
    excerpt: `${b.keyword} tại ${b.streets}: ${b.housing}. Khảo sát miễn phí, dự toán từng hạng mục. Sao Khuê — 0909 075 668.`,
    metaTitle: `Cải Tạo Nhà ${b.district} TP.HCM 2026 | Sao Khuê`,
    metaDescription: `${b.keyword}, ${b.repairKeyword}: ${b.housing}. ${d.price.mid}. Khảo sát miễn phí — 0909 075 668.`,
    metaKeywords: `${b.keyword}, ${b.repairKeyword}, sửa nhà ${b.district.toLowerCase()}, cải tạo nhà đang ở ${b.district.toLowerCase()}, sao khuê`,
    imageAlt: `${b.keyword} — Kiến Trúc Sao Khuê`,
    imageCaption: `${b.keyword} do Kiến Trúc Sao Khuê khảo sát và thi công tại ${b.district}`,
    content: `
<h2>${h1kw} ở ${b.streets} khác gì quận khác?</h2>
<p>Nhà tại <strong>${b.district}</strong> quanh ${b.streets} thường là ${b.housing}. <strong>${b.keyword}</strong> vì vậy không dùng chung một đơn giá m² với quận hẻm khác. <strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Bình Thạnh) khảo sát tận nơi, tách hạng mục bắt buộc / hoãn được, rồi mới lập dự toán.</p>
<p>Gói <strong>${b.repairKeyword}</strong> khi chỉ xử lý thấm, WC, điện nước; gói cải tạo khi đổi công năng hoặc mặt tiền. Có thể gộp một hợp đồng sau khảo sát.</p>
${homeLinkParagraph()}
${a}

<h2>Việc hay phải làm khi ${b.keyword}</h2>
<ul>
  <li>${b.issues[0]}</li>
  <li>${b.issues[1]}</li>
  <li>${b.issues[2]}</li>
  <li>${b.issues[3]}</li>
</ul>
<p>Liên quan: ${d.relatedHtml}.</p>

<h2>Ví dụ nhà điển hình tại ${b.district}</h2>
<p>${d.example}</p>
${img2}

<h2>Ở trong nhà khi ${b.repairKeyword}</h2>
<p>${d.stay}</p>

<h2>Mùa mưa, hẻm và vật tư tại ${b.district}</h2>
<p>${d.rain}</p>
<p>${b.permitNote}</p>

<h2>Chi phí ${b.keyword} (tham khảo 2026)</h2>
<p>${b.priceNote}</p>
<table>
  <thead><tr><th>Mức độ tại ${b.district}</th><th>Đơn giá / mốc</th><th>Thời gian</th></tr></thead>
  <tbody>
    <tr><td>Làm mới / sửa nhẹ</td><td>${d.price.light}</td><td>${d.price.lightWeeks}</td></tr>
    <tr><td>Sửa công năng / trọn gói</td><td>${d.price.mid}</td><td>${d.price.midWeeks}</td></tr>
    <tr><td>Cải tạo sâu / gia cố</td><td>${d.price.deep}</td><td>${d.price.deepWeeks}</td></tr>
    <tr><td>${d.price.extraLabel}</td><td colspan="2">${d.price.extraValue}</td></tr>
  </tbody>
</table>
<p>Số chính thức sau khảo sát. Ước lượng: <a href="/bao-gia">máy tính báo giá</a> · <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a>.</p>

<h2>Quy trình ${b.keyword} với Sao Khuê</h2>
<ol>
  <li>${d.process[0]}</li>
  <li>${d.process[1]}</li>
  <li>${d.process[2]}</li>
  <li>${d.process[3]}</li>
  <li>${d.process[4]}</li>
</ol>
${c}
${faqSection([
  { q: `${h1kw} hết bao nhiêu?`, a: b.faqA },
  { q: `Sửa nhà ${b.district} khi đang ở được không?`, a: d.faqStay },
  { q: `${h1kw} mất bao lâu?`, a: d.faqTime },
  { q: `Giấy phép khi ${b.repairKeyword} tại ${b.district}?`, a: d.faqPermit },
  {
    q: `Khảo sát ${b.district} có mất phí không?`,
    a: /củ chi|nhà bè|bình chánh|hóc môn/i.test(b.district)
      ? "Huyện / xa nội thành: khảo sát miễn phí nhưng hẹn trước 1 ngày. Gọi 0909 075 668."
      : "Nội thành TP.HCM: khảo sát miễn phí. Gọi 0909 075 668.",
  },
])}
${seoCtaBlock(b.keyword)}
<h2>Kết luận</h2>
<p>Muốn <strong>${b.keyword}</strong> đúng hiện trạng ${b.district}, đừng chốt giá qua ảnh. Sao Khuê gửi dự toán minh bạch sau khảo sát — <strong>0909 075 668</strong> · <a href="/lien-he">liên hệ</a> · <a href="/cai-tao-nha">cải tạo nhà</a>.</p>
`.trim(),
  };
}

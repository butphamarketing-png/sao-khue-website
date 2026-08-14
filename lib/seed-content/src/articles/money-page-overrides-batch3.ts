/**
 * Hand-crafted money pages — batch 3 (20 bài geo trọn gói theo quận).
 */
import type { MoneyPageOverride } from "./money-page-overrides";

type DistrictTurnkeyBrief = {
  slug: string;
  district: string;
  keyword: string;
  localNote: string;
  priceHint: string;
  caseLink?: { href: string; label: string };
  hubLink?: { href: string; label: string };
};

type TurnkeyDepth = {
  typical: string;
  soil: string;
  includeExtra: string;
  p3: string;
  p4: string;
  surcharge: string;
  duration: string;
  permitFaq: string;
  checklist: [string, string, string, string];
};

const TURNKEY_DEPTH: Record<string, TurnkeyDepth> = {
  "xay-nha-tron-goi-quan-1": {
    typical: "Lô hẹp trung tâm, xây mới trên nền cũ hoặc cải tạo sâu hơn là đất trống. Xe tải hạn giờ.",
    soil: "Nền cũ + lộ giới đường lớn — khoan/kiểm tra móng hiện hữu trước khi phá dỡ.",
    includeExtra: "Lịch ca ồn và phương án xe nhỏ / cẩu đêm (nếu phường cho).",
    p3: "4,0 – 5,8 tỷ",
    p4: "5,2 – 7,5 tỷ",
    surcharge: "Logistics + giờ ồn +10–20%",
    duration: "Nhà phố 4 tầng Q.1 thường 6–9 tháng vì giờ thi công hạn chế.",
    permitFaq: "Q.1 siết mặt đứng và giờ ồn. Hồ sơ GPXD + nội quy khu; không đổ bê tông đêm nếu phường cấm.",
    checklist: [
      "Đối chiếu lộ giới và GPXD cũ trước khi phá.",
      "Khung giờ vận chuyển ghi phụ lục hợp đồng.",
      "Vật tư hoàn thiện mặt đứng đúng nội quy khu trung tâm.",
      "Bảo hành kết cấu 10 năm bằng văn bản.",
    ],
  },
  "xay-nha-tron-goi-quan-3": {
    typical: "Phố cũ 3–4 tầng, hẻm không mở xe tải. Nhiều chủ nhà đập xây trên nền.",
    soil: "Nhà liền kề — chống lún lệch hàng xóm, vách chung.",
    includeExtra: "Biện pháp chống sập tường giáp và chống thấm khe lún.",
    p3: "3,8 – 5,5 tỷ",
    p4: "4,8 – 6,8 tỷ",
    surcharge: "Hẻm ba gác +8–15%",
    duration: "5–8 tháng; đập nhà cũ thêm 2–4 tuần phá dỡ có kiểm soát.",
    permitFaq: "Xây mới trên nền: hồ sơ GPXD mới. Tham khảo case cải tạo Q.3 nếu giữ khung.",
    checklist: [
      "Biên bản hiện trạng nhà liền kề trước phá dỡ.",
      "Phương án vận chuyển hẻm hẹp.",
      "Bản vẽ kết cấu phù hợp nhà phố sâu.",
      "Cam kết bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-4": {
    typical: "Ống hẹp gần kênh rạch, tầng trệt hay để xe / quán.",
    soil: "Đất yếu ven rạch — ép cọc / cọc khoan nhồi phổ biến, không móng đơn đại trà.",
    includeExtra: "Khảo sát địa chất và phương án chống thấm chân tường mùa ngập.",
    p3: "3,5 – 5,0 tỷ (chưa kể cọc nếu phát sinh)",
    p4: "4,5 – 6,2 tỷ",
    surcharge: "Móng cọc có thể 12–18% tổng giá trị",
    duration: "6–9 tháng kể cả chờ khảo sát địa chất.",
    permitFaq: "Khu gần rạch: xác nhận chỉ giới và cao độ nền với phường trước khi đổ móng.",
    checklist: [
      "Khoan địa chất trước chốt móng.",
      "Tách dòng ép cọc trong hợp đồng.",
      "Cao độ nền / chống ngập tầng trệt.",
      "Bảo hành kết cấu + chống thấm chân tường.",
    ],
  },
  "xay-nha-tron-goi-quan-5": {
    typical: "Mật độ cao Chợ Lớn, hẻm chật, shophouse trệt + ở lầu.",
    soil: "Nền cũ lẫn nhà cổ — kiểm tra tường chung trước khi đào móng.",
    includeExtra: "Kế hoạch lưu trữ vật tư tại chỗ (không bãi tập kết rộng).",
    p3: "3,6 – 5,2 tỷ",
    p4: "4,6 – 6,5 tỷ",
    surcharge: "Hẻm &lt; 3m +8–15%",
    duration: "5–8 tháng; mặt tiền kính thêm 2–3 tuần hoàn thiện.",
    permitFaq: "Shophouse: hỏi công năng thương mại / PCCC tầng trệt khi xin GPXD.",
    checklist: [
      "Phương án vận chuyển và bãi tạm.",
      "Tách điện quán / điện ở.",
      "Mặt tiền kính ghi hệ nhôm.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-6": {
    typical: "Mix cấp 4 lên phố và khu dân cư mới sau sáp nhập.",
    soil: "Một số phường nền yếu — xác nhận quy hoạch chiều cao theo phường mới.",
    includeExtra: "Tra cứu số tầng sau sáp nhập, không lấy chỉ tiêu phường cũ miệng.",
    p3: "3,5 – 5,2 tỷ",
    p4: "4,4 – 6,0 tỷ",
    surcharge: "Hẻm hẹp +8–12%",
    duration: "5–8 tháng nhà phố 3–4 tầng.",
    permitFaq: "Quy hoạch chiều cao xác nhận theo phường hiện hành, không copy hồ sơ nhà bên cạnh.",
    checklist: [
      "Xác nhận số tầng / mật độ phường.",
      "Bản vẽ kết cấu đúng địa chất.",
      "Vật tư thô ghi mác bê tông, thép.",
      "Bảo hành kết cấu bằng văn bản.",
    ],
  },
  "xay-nha-tron-goi-quan-7": {
    typical: "KDC PMH / Tân Phong quy chuẩn vs hẻm Tân Thuận — hai gói khác nhau.",
    soil: "KDC có cao độ và facade đồng bộ; hẻm huyện cũ tự do hơn nhưng GPXD phường Q.7.",
    includeExtra: "Tuân thủ quy chế BQL (giờ, rác, mặt đứng) nếu xây trong KDC.",
    p3: "3,8 – 5,8 tỷ (hẻm)",
    p4: "5,0 – 8,0 tỷ (KDC hoàn thiện cao)",
    surcharge: "Facade KDC cao cấp tách dòng hoàn thiện",
    duration: "KDC 6–10 tháng vì duyệt mặt đứng; hẻm 5–8 tháng.",
    permitFaq: "PMH: GPXD + nội quy BQL. Hẻm Tân Thuận: phường Q.7. Không dùng chung hồ sơ.",
    checklist: [
      "Xác định khu KDC hay hẻm trước khi báo giá.",
      "Duyệt facade nếu BQL yêu cầu.",
      "Vật tư hoàn thiện đúng list KDC.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-8": {
    typical: "Ven sông / rạch, nhà phố giá cạnh tranh hơn nội thành.",
    soil: "Đất yếu một số phường — khảo sát địa chất trước thiết kế móng.",
    includeExtra: "Phương án chống thấm chân tường và thoát nước sân trệt.",
    p3: "3,3 – 4,8 tỷ",
    p4: "4,2 – 5,8 tỷ",
    surcharge: "Cọc nền yếu tách dòng",
    duration: "5–8 tháng; mùa mưa Q.8 có thể chậm đổ sàn 1–2 tuần.",
    permitFaq: "Khu ven sông: cao độ nền và chỉ giới rạch — hỏi phường trước đào móng.",
    checklist: [
      "Khoan địa chất.",
      "Cao độ chống ngập.",
      "Hợp đồng ghi mác bê tông móng.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-9": {
    typical: "Lô rộng cũ Q.9 (nay Thủ Đức), phố 4–5 tầng hoặc cho thuê.",
    soil: "Nền tương đối tốt hơn ven rạch nội thành; vẫn khoan nếu gần kênh.",
    includeExtra: "Tối ưu cho thuê (WC từng tầng, điện 3 pha) nếu chủ đầu tư.",
    p3: "3,2 – 4,6 tỷ",
    p4: "4,0 – 5,6 tỷ",
    surcharge: "Lô rộng: đơn giá/m² sàn có thể thấp hơn nội thành 5–10%",
    duration: "5–8 tháng; đường lớn dễ xe — ít chậm logistics.",
    permitFaq: "Hồ sơ theo phường cũ Q.9 thuộc TP. Thủ Đức — không nhầm quy hoạch Q.2.",
    checklist: [
      "Tra quy hoạch Thủ Đức / phường cũ Q.9.",
      "Chốt công năng ở hay cho thuê.",
      "Bản vẽ 4–5 tầng đúng chỉ giới.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-10": {
    typical: "Hẻm sâu, shophouse trệt + ở lầu, tải điện quán.",
    soil: "Nhà liền kề — vách chung, hẻm 2,5–3,5m.",
    includeExtra: "Tách điện tải và PCCC tầng trệt cho kinh doanh.",
    p3: "3,5 – 5,0 tỷ",
    p4: "4,5 – 6,3 tỷ",
    surcharge: "Hẻm sâu + điện 3 pha tách dòng",
    duration: "5–8 tháng; hoàn thiện quán thêm 2–4 tuần.",
    permitFaq: "Công năng thương mại tầng trệt: hỏi phường khi xin GPXD.",
    checklist: [
      "PCCC / lối thoát tầng trệt.",
      "Tủ điện tách ở–quán.",
      "Phương án cẩu hẻm sâu.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-11": {
    typical: "Ống 4–5m, 3 tầng cho gia đình 4–5 người, hẻm 2,5–3,5m gần Đầm Sen.",
    soil: "Mật độ cao — chống ồn và che chắn hàng xóm suốt quá trình đổ sàn.",
    includeExtra: "Phương án cẩu vật liệu cụ thể (không để chủ nhà tự xoay).",
    p3: "3,4 – 4,9 tỷ",
    p4: "4,3 – 6,0 tỷ",
    surcharge: "Cẩu / ba gác +8–12%",
    duration: "5–8 tháng nhà 3 tầng; 6–9 tháng nếu 4 tầng.",
    permitFaq: "Hẻm đông: phụ lục giờ đổ bê tông. GPXD theo phường Q.11.",
    checklist: [
      "Bề rộng hẻm và bán kính cẩu.",
      "Che chắn hàng xóm.",
      "Giếng trời lấy sáng nhà sâu.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-quan-12": {
    typical: "Cân bằng giá đất và kết nối TP; nhiều KDC tự phát lâu năm.",
    soil: "Giáp Đồng Nai — xác minh quy hoạch trước khi đầu tư lớn (đường, chỉ giới).",
    includeExtra: "Tra cứu quy hoạch treo / lộ giới trước khi chốt số tầng.",
    p3: "3,2 – 4,6 tỷ",
    p4: "4,0 – 5,5 tỷ",
    surcharge: "Đường lớn ít phụ phí hẻm; quy hoạch rủi ro hơn logistics",
    duration: "5–7 tháng nếu đường xe tải; thêm thời gian nếu chờ phép quy hoạch.",
    permitFaq: "Q.12 nhiều khu tự phát — Sao Khuê không thi công khi quy hoạch chưa rõ.",
    checklist: [
      "Xác minh quy hoạch / lộ giới.",
      "Sổ đỏ sạch.",
      "Bản vẽ đúng số tầng cho phép.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-tan-binh": {
    typical: "Gần sân bay, một số phường hạn chế chiều cao; hẻm Phạm Văn Hai giờ hành chính.",
    soil: "Nền phố ổn định; hạn chế chính là chiều cao và ồn.",
    includeExtra: "Kiểm tra hạn chế độ cao hàng không / quy hoạch phường trước thiết kế 4–5 tầng.",
    p3: "3,6 – 5,2 tỷ",
    p4: "4,6 – 6,5 tỷ",
    surcharge: "Ca hành chính + hoàn thiện mặt tiền đường lớn",
    duration: "6–9 tháng vì giờ ồn; không đổ đêm gần sân bay nếu cấm.",
    permitFaq: "Một số phường Tân Bình hạn chế tầng — tra trước, không vẽ 5 tầng ảo.",
    checklist: [
      "Tra chiều cao cho phép.",
      "Phụ lục giờ máy.",
      "Cửa / cách âm nếu gần bay.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-binh-tan": {
    typical: "Mix KDC mới (An Lạc, Bình Hưng Hòa) và phố cũ cần xây lại.",
    soil: "KDC mới đường xe tải — giảm vận chuyển; phố cũ hẻm vẫn ba gác.",
    includeExtra: "Chọn gói KDC (dễ xe) hoặc hẻm cũ (phụ phí) ngay từ báo giá.",
    p3: "3,3 – 4,8 tỷ",
    p4: "4,2 – 5,8 tỷ",
    surcharge: "KDC mới: logistics thấp hơn hẻm nội thành",
    duration: "5–8 tháng; KDC mới thường đúng tiến độ hơn hẻm.",
    permitFaq: "KDC: quy chế chủ đầu tư + GPXD. Phố cũ: phường Bình Tân.",
    checklist: [
      "Xác định KDC hay hẻm cũ.",
      "Quy chế facade nếu KDC.",
      "Vật tư thô ghi rõ.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-tan-phu": {
    typical: "Nhà phố thế hệ 2 Tân Sơn Nhì / Phú Thạnh, ngân sách trung bình.",
    soil: "Hẻm ổn định, ít rạch; móng phổ thông sau khảo sát.",
    includeExtra: "Tối ưu 1 trệt 2 lầu cho gia đình 2 thế hệ.",
    p3: "3,3 – 4,7 tỷ",
    p4: "4,2 – 5,8 tỷ",
    surcharge: "Cạnh tranh; hẻm hẹp vẫn +5–10%",
    duration: "5–8 tháng nhà phố 3–4 tầng.",
    permitFaq: "GPXD theo phường Tân Phú; mật độ cấp 4 lên phố cần đúng quy hoạch.",
    checklist: [
      "Sổ và chỉ giới.",
      "Chốt số tầng thực tế.",
      "Thanh toán theo giai đoạn móng–thô–hoàn thiện.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-phu-nhuan": {
    typical: "Lô nhỏ, giá đất cao — tối ưu m² bằng giếng trời và 4 tầng.",
    soil: "Hẻm xe máy, nhà liền kề sát — chống lún lệch bắt buộc.",
    includeExtra: "Thiết kế giếng trời + cầu thang hẹp; logistics khiêng bộ / ba gác.",
    p3: "3,8 – 5,6 tỷ",
    p4: "4,8 – 7,0 tỷ",
    surcharge: "Chi phí/m² cao vì hẻm và hoàn thiện",
    duration: "6–9 tháng vì hẻm và nhà sát.",
    permitFaq: "Lô nhỏ vẫn cần GPXD đủ tầng. Không xây vượt chỉ giới để “gỡ giá đất”.",
    checklist: [
      "Hiện trạng nhà liền kề.",
      "Giếng trời trong bản vẽ công năng.",
      "Phương án vận chuyển hẻm xe máy.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-hoc-mon": {
    typical: "Lô rộng, nhà vườn 1–2 tầng hoặc phố 1 trệt 1 lầu.",
    soil: "Một số nền nông nghiệp chuyển thổ — kiểm tra sổ trước thiết kế móng nặng.",
    includeExtra: "Tối ưu sân vườn / nhà kho; đường huyện dễ xe tải.",
    p3: "2,8 – 4,2 tỷ (phố 3 tầng)",
    p4: "3,6 – 5,2 tỷ",
    surcharge: "Đơn giá trọn gói thấp hơn nội thành 10–18%",
    duration: "4–7 tháng; gói nhỏ có phụ phí di chuyển đội.",
    permitFaq: "Đất hỗn hợp: không khởi công khi sổ chưa rõ thổ cư / chỉ giới.",
    checklist: [
      "Sổ thổ cư / chỉ giới.",
      "Chốt 1–2 tầng vườn hay phố 3 tầng.",
      "Phụ phí di chuyển nếu gói nhỏ.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-binh-chanh": {
    typical: "KDC ven TP, biệt thự mini hoặc phố 4 tầng theo quy chế chủ đầu tư.",
    soil: "Đường đất một số xã mùa mưa — lịch đổ bê tông tránh ngập đường.",
    includeExtra: "Tuân quy chế KDC (nếu có) và khảo sát giao thông vật liệu mùa mưa.",
    p3: "3,2 – 4,8 tỷ",
    p4: "4,2 – 6,5 tỷ (biệt thự mini cao hơn)",
    surcharge: "Biệt thự mini / KDC tách hoàn thiện",
    duration: "5–9 tháng; mùa mưa có thể chậm 2–3 tuần đường đất.",
    permitFaq: "KDC: quy chế CĐT + GPXD. Đất xã: quy hoạch nông nghiệp/thổ cư.",
    checklist: [
      "Quy chế KDC nếu xây trong khu.",
      "Lịch mùa mưa / đường đất.",
      "Chốt phố 4 tầng hay biệt thự mini.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-nha-be": {
    typical: "Biệt thự / phố view kênh, sân vườn — móng và chống lún quan trọng.",
    soil: "Ven sông: địa chất bắt buộc; không móng nông đại trà.",
    includeExtra: "Khảo sát địa chất + cao độ chống triều / ngập.",
    p3: "3,6 – 5,5 tỷ (phố)",
    p4: "Biệt thự 6 – 15 tỷ+ tùy quy mô",
    surcharge: "Cọc + chống thấm chân tường tách dòng",
    duration: "Phố 6–9 tháng; biệt thự 9–14 tháng.",
    permitFaq: "Ven kênh: chỉ giới và cao độ — hỏi phường/xã Nhà Bè trước thiết kế.",
    checklist: [
      "Khoan địa chất.",
      "Cao độ nền chống ngập.",
      "Tách gói thô / hoàn thiện nếu giãn ngân sách.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-tron-goi-cu-chi": {
    typical: "Lô rộng, nhà vườn, homestay, đường xe tải — đơn giá thấp nhất các huyện TP.",
    soil: "Nền nông nghiệp chuyển — kiểm tra sổ và sức chịu tải trước móng.",
    includeExtra: "Lịch khảo sát hẹn trước (xa Bình Thạnh); gói nhỏ phụ phí di chuyển.",
    p3: "2,6 – 4,0 tỷ",
    p4: "3,4 – 5,0 tỷ",
    surcharge: "Trọn gói thấp; gói nhỏ + di chuyển đội",
    duration: "4–7 tháng nhà vườn 1–2 tầng; phố 3 tầng 5–8 tháng.",
    permitFaq: "Đất hỗn hợp Củ Chi: sổ sạch trước khi vẽ 3–4 tầng.",
    checklist: [
      "Sổ và chỉ giới.",
      "Hẹn khảo sát trước 1 ngày.",
      "Chốt nhà vườn hay phố.",
      "Bảo hành kết cấu 10 năm.",
    ],
  },
  "xay-nha-nha-be": {
    typical: "Xây nhà (không chỉ gói trọn gói marketing): hướng sân vườn, biệt thự ven kênh, nhịp sống khác hẻm nội thành.",
    soil: "Ven sông — địa chất và chống lún; có thể tách thô rồi hoàn thiện theo quý.",
    includeExtra: "Tư vấn tách gói thô / hoàn thiện nếu ngân sách giãn theo quý.",
    p3: "Phần thô phố 3 tầng: báo theo m² sau khảo sát",
    p4: "Trọn gói: xem thêm bài xây nhà trọn gói Nhà Bè",
    surcharge: "Nên tách thô và hoàn thiện nếu cashflow theo quý",
    duration: "Thô 4–6 tháng; hoàn thiện thêm 2–4 tháng.",
    permitFaq: "GPXD Nhà Bè + cao độ nền. Trọn gói hay chỉ thô: chốt trong hợp đồng, không để miệng.",
    checklist: [
      "Chốt thô hay trọn gói.",
      "Khoan địa chất.",
      "Cao độ chống ngập.",
      "Bảo hành kết cấu phần Sao Khuê thi công.",
    ],
  },
};

function capKw(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function buildDistrictTurnkey(b: DistrictTurnkeyBrief): MoneyPageOverride {
  const caseLine = b.caseLink
    ? `<p>Công trình tham chiếu: <a href="${b.caseLink.href}">${b.caseLink.label}</a>.</p>`
    : "";
  const hubLine = b.hubLink
    ? `<p>Xem thêm: <a href="${b.hubLink.href}">${b.hubLink.label}</a> · <a href="/tin-tuc/xay-nha-tphcm">hub xây nhà TP.HCM</a> · <a href="/dich-vu/xay-nha-tron-goi">dịch vụ trọn gói</a>.</p>`
    : `<p>Hub: <a href="/tin-tuc/xay-nha-tphcm">xây nhà TP.HCM</a> · <a href="/dich-vu/xay-nha-tron-goi">dịch vụ trọn gói</a> · <a href="/bao-gia">máy tính báo giá</a>.</p>`;
  const d = TURNKEY_DEPTH[b.slug];
  const typical = d?.typical ?? `Nhà phố / lô đất tại ${b.district}.`;
  const soil = d?.soil ?? `Khảo sát địa chất khu ${b.district} trước khi chốt móng.`;
  const includeExtra = d?.includeExtra ?? "Giám sát cốt thép và chống thấm mái.";
  const p3 = d?.p3 ?? "3,2 – 4,5 tỷ";
  const p4 = d?.p4 ?? "4 – 5,8 tỷ";
  const surcharge = d?.surcharge ?? "+5 – 12% hẻm hẹp";
  const duration = d?.duration ?? "Thường 5–8 tháng tùy mùa mưa và hoàn thiện.";
  const permitFaq =
    d?.permitFaq ?? `Có tư vấn hồ sơ theo quy định từng phường tại ${b.district}.`;
  const checklist = d?.checklist ?? [
    "Sổ đỏ/hợp đồng đất rõ ràng.",
    `Bản vẽ kết cấu phù hợp địa chất khu ${b.district}.`,
    "Hợp đồng ghi chủng loại vật tư & tiến độ thanh toán.",
    "Cam kết bảo hành kết cấu bằng văn bản.",
  ];

  return {
    title:
      b.slug === "xay-nha-nha-be"
        ? `Xây Nhà Nhà Bè — Sân Vườn, Ven Kênh 2026`
        : `Xây Nhà Trọn Gói ${b.district} — Báo Giá & Hiện Trạng 2026`,
    excerpt: `${capKw(b.keyword)}: ${typical} Sao Khuê BH kết cấu 10 năm — 0909 075 668.`,
    metaTitle:
      b.slug === "xay-nha-nha-be"
        ? `Xây Nhà Nhà Bè 2026 — Sân Vườn | Sao Khuê`
        : `Xây Nhà Trọn Gói ${b.district} 2026 | Sao Khuê`,
    metaDescription: `${capKw(b.keyword)}: ${b.priceHint} Khảo sát miễn phí — 0909 075 668.`.slice(0, 160),
    metaKeywords: `${b.keyword}, xây nhà trọn gói tphcm, nhà thầu ${b.district.toLowerCase()}, sao khuê`,
    imageAlt: `Xây nhà trọn gói ${b.district} — Kiến Trúc Sao Khuê`,
    content: `<h2>${capKw(b.keyword)} — nhà điển hình tại ${b.district}</h2>
<p>${typical} ${b.localNote} <strong>Kiến Trúc Sao Khuê</strong> khảo sát miễn phí, báo giá theo hạng mục, bảo hành kết cấu <strong>10 năm</strong>.</p>
${hubLine}
${caseLine}

<h2>Địa chất, hẻm và thi công tại ${b.district}</h2>
<p>${soil}</p>
<p>${b.priceHint}</p>

<h2>Gói trọn gói tại ${b.district} gồm gì?</h2>
<ul>
  <li>Khảo sát đất &amp; tư vấn quy hoạch sơ bộ tại ${b.district}.</li>
  <li>Thiết kế 2D/3D (theo gói hợp đồng).</li>
  <li>Thi công móng → thô → hoàn thiện cơ bản.</li>
  <li>Giám sát cốt thép, chống thấm mái/sân thượng.</li>
  <li>${includeExtra}</li>
  <li>Nghiệm thu &amp; bàn giao hồ sơ bảo hành kết cấu 10 năm.</li>
</ul>

<h2>Chi phí ${b.keyword} (tham khảo 2026)</h2>
<table>
  <thead><tr><th>Quy mô tại ${b.district}</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng</td><td>${p3}</td></tr>
    <tr><td>Nhà phố 4 tầng / quy mô lớn hơn</td><td>${p4}</td></tr>
    <tr><td>Phụ phí / đặc thù</td><td>${surcharge}</td></tr>
  </tbody>
</table>
<p>Số chính thức sau khảo sát. Ước lượng: <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Tiến độ thi công tại ${b.district}</h2>
<p>${duration} Mùa mưa TP.HCM (tháng 5–11) có thể dời ngày đổ sàn ngoài trời — mốc hợp đồng tính ngày làm việc + điều khoản mưa.</p>
<p>Không copy đơn giá quận khác: ${typical} Phụ phí đặc thù: ${surcharge}.</p>

<h2>Checklist ký hợp đồng xây tại ${b.district}</h2>
<ol>
  <li>${checklist[0]}</li>
  <li>${checklist[1]}</li>
  <li>${checklist[2]}</li>
  <li>${checklist[3]}</li>
</ol>

<h2>FAQ — ${capKw(b.keyword)}</h2>
<details><summary>Thời gian thi công tại ${b.district}?</summary><p>${duration} Sao Khuê ghi tiến độ trong hợp đồng.</p></details>
<details><summary>Xin giấy phép xây tại ${b.district} thế nào?</summary><p>${permitFaq}</p></details>
<details><summary>Khảo sát ${b.district} có phí không?</summary><p>${/củ chi|nhà bè|hóc môn|bình chánh/i.test(b.district) ? "Miễn phí, hẹn trước 1 ngày vì khoảng cách từ Bình Thạnh." : "Nội thành: khảo sát miễn phí. 0909 075 668."}</p></details>

<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">Đặt lịch khảo sát</a> · <a href="/xay-nha">landing xây nhà</a></p>`,
  };
}

const DISTRICT_TURNKEY_BRIEFS: DistrictTurnkeyBrief[] = [
  {
    slug: "xay-nha-tron-goi-quan-1",
    district: "Quận 1",
    keyword: "xây nhà trọn gói Quận 1",
    localNote:
      "Q.1 ít lô trống, nhiều cải tạo sâu hoặc xây mới trên nền cũ — cần kiểm tra lộ giới trung tâm và giờ thi công hạn chế tiếng ồn.",
    priceHint:
      "Chi phí Q.1 thường cao hơn trung bình TP.HCM 10–20% do logistics và yêu cầu hoàn thiện.",
  },
  {
    slug: "xay-nha-tron-goi-quan-3",
    district: "Quận 3",
    keyword: "xây nhà trọn gói Quận 3",
    localNote:
      "Q.3 tập trung nhà phố cũ 3–4 tầng — hay gặp nhu cầu cải tạo toàn diện hoặc xây mới trên nền. Tham khảo case <a href=\"/cong-trinh/sua-nha-quan-3\">cải tạo Q.3</a>.",
    priceHint: "Nhà phố Q.3 trọn gói: 3,8 – 6 tỷ tùy phạm vi đập/xây.",
    caseLink: { href: "/cong-trinh/sua-nha-quan-3", label: "Cải tạo nhà phố Quận 3" },
  },
  {
    slug: "xay-nha-tron-goi-quan-4",
    district: "Quận 4",
    keyword: "xây nhà trọn gói Quận 4",
    localNote:
      "Q.4 gần kênh rạch — khảo sát móng và chống thấm là ưu tiên số 1 khi xây nhà trọn gói.",
    priceHint: "Móng cọc/ép cọc có thể chiếm 12–18% tổng giá trị ở khu ven sông.",
  },
  {
    slug: "xay-nha-tron-goi-quan-5",
    district: "Quận 5",
    keyword: "xây nhà trọn gói Quận 5",
    localNote:
      "Q.5 (Chợ Lớn) mật độ cao, hẻm chật — cần kế hoạch vận chuyển vật liệu và lưu trữ tại chỗ.",
    priceHint: "Hẻm &lt; 3m thường tăng chi phí thi công 8–15%.",
  },
  {
    slug: "xay-nha-tron-goi-quan-6",
    district: "Quận 6",
    keyword: "xây nhà trọn gói Quận 6",
    localNote:
      "Q.6 có mix nhà phố cũ và khu dân cư mới — quy hoạch chiều cao cần xác nhận theo phường sau sáp nhập.",
    priceHint: "Trọn gói nhà phố 3–4 tầng Q.6: 3,5 – 5,2 tỷ.",
  },
  {
    slug: "xay-nha-tron-goi-quan-7",
    district: "Quận 7",
    keyword: "xây nhà trọn gói Quận 7",
    localNote:
      "Q.7 (Phú Mỹ Hưng, Tân Phong, Tân Hưng) nhiều KDC quy chuẩn — phải tuân thủ quy chế xây dựng ban quản lý.",
    priceHint: "KDC cao cấp thường yêu cầu vật liệu và facade đồng bộ — giá hoàn thiện cao hơn.",
    hubLink: { href: "/tin-tuc/xay-nha-quan-7", label: "Xây nhà Quận 7" },
  },
  {
    slug: "xay-nha-tron-goi-quan-8",
    district: "Quận 8",
    keyword: "xây nhà trọn gói Quận 8",
    localNote:
      "Q.8 ven sông Đồng Nai, Bình Đông — đất yếu một số phường, cần khảo sát địa chất trước thiết kế móng.",
    priceHint: "Nhà phố Q.8 trọn gói thường cạnh tranh về giá so với nội thành.",
  },
  {
    slug: "xay-nha-tron-goi-quan-9",
    district: "Quận 9",
    keyword: "xây nhà trọn gói Quận 9",
    localNote:
      "Khu cũ Q.9 (nay thuộc TP. Thủ Đức) nhiều lô rộng, phù hợp nhà phố 4–5 tầng hoặc cho thuê.",
    priceHint: "Lô rộng hơn nội thành — đơn giá/m² sàn có thể thấp hơn 5–10%.",
    hubLink: { href: "/tin-tuc/xay-nha-thu-duc", label: "Xây nhà Thủ Đức" },
  },
  {
    slug: "xay-nha-tron-goi-quan-10",
    district: "Quận 10",
    keyword: "xây nhà trọn gói Quận 10",
    localNote:
      "Q.10 nhà phố hẻm sâu, nhiều hộ kinh doanh tầng trệt — thiết kế shophouse + ở trên lầu phổ biến.",
    priceHint: "Kết hợp kinh doanh cần tách điện tải và PCCC tầng trệt.",
    hubLink: { href: "/tin-tuc/xay-shophouse-tphcm", label: "Xây shophouse TP.HCM" },
  },
  {
    slug: "xay-nha-tron-goi-quan-11",
    district: "Quận 11",
    keyword: "xây nhà trọn gói Quận 11",
    localNote:
      "Q.11 (Hòa Bình, Lạc Long Quân…) mật độ dân cư cao, hẻm 2,5–3,5m — cẩu vật liệu cần phương án cụ thể.",
    priceHint: "Trọn gói 3 tầng phổ biến cho gia đình 4–5 người.",
  },
  {
    slug: "xay-nha-tron-goi-quan-12",
    district: "Quận 12",
    keyword: "xây nhà trọn gói Quận 12",
    localNote:
      "Q.12 giáp Đồng Nai, nhiều khu dân cư tự phát lâu năm — cần xác minh quy hoạch trước khi đầu tư lớn.",
    priceHint: "Q.12 là lựa chọn cân bằng giữa giá đất và kết nối về TP.HCM.",
  },
  {
    slug: "xay-nha-tron-goi-tan-binh",
    district: "Tân Bình",
    keyword: "xây nhà trọn gói Tân Bình",
    localNote:
      "Tân Bình gần sân bay — một số phường hạn chế chiều cao; hẻm Phạm Văn Hai, Hoàng Văn Thụ thi công cần giờ hành chính.",
    priceHint: "Nhà phố Tân Bình trọn gói: 3,6 – 5,5 tỷ.",
    hubLink: { href: "/tin-tuc/xay-nha-tan-phu", label: "Xây nhà Tân Phú lân cận" },
  },
  {
    slug: "xay-nha-tron-goi-binh-tan",
    district: "Bình Tân",
    keyword: "xây nhà trọn gói Bình Tân",
    localNote:
      "Bình Tân mở rộng nhanh — mix KDC mới (An Lạc, Bình Hưng Hòa) và nhà phố cũ cần cải tạo.",
    priceHint: "KDC mới thường có đường xe tải — giảm chi phí vận chuyển so với hẻm nội thành.",
  },
  {
    slug: "xay-nha-tron-goi-tan-phu",
    district: "Tân Phú",
    keyword: "xây nhà trọn gói Tân Phú",
    localNote:
      "Tân Phú (Tân Sơn Nhì, Phú Thạnh) nhà phố hẻm ổn định — nhu cầu xây mới thế hệ 2 phổ biến.",
    priceHint: "Trọn gói Tân Phú cạnh tranh, phù hợp ngân sách trung bình.",
    hubLink: { href: "/tin-tuc/xay-nha-tan-phu", label: "Xây nhà Tân Phú" },
  },
  {
    slug: "xay-nha-tron-goi-phu-nhuan",
    district: "Phú Nhuận",
    keyword: "xây nhà trọn gói Phú Nhuận",
    localNote:
      "Phú Nhuận diện tích nhỏ, giá đất cao — tối ưu từng m² bằng giếng trời và thiết kế gác/4 tầng.",
    priceHint: "Chi phí/m² cao hơn vì logistics hẻm và yêu cầu hoàn thiện.",
  },
  {
    slug: "xay-nha-tron-goi-hoc-mon",
    district: "Hóc Môn",
    keyword: "xây nhà trọn gói Hóc Môn",
    localNote:
      "Hóc Môn lô đất rộng hơn — phù hợp nhà ở kết hợp trang trại nhỏ, nhà vườn 1–2 tầng.",
    priceHint: "Đơn giá trọn gói Hóc Môn thường thấp hơn nội thành 10–18%.",
  },
  {
    slug: "xay-nha-tron-goi-binh-chanh",
    district: "Bình Chánh",
    keyword: "xây nhà trọn gói Bình Chánh",
    localNote:
      "Bình Chánh nhiều KDC ven TP.HCM — cần tuân quy chế chủ đầu tư và khảo sát giao thông vật liệu.",
    priceHint: "Biệt thự mini và nhà phố 4 tầng KDC là phân khúc mạnh.",
    hubLink: { href: "/tin-tuc/xay-nha-kdc-binh-chanh", label: "Xây nhà KDC Bình Chánh" },
  },
  {
    slug: "xay-nha-tron-goi-nha-be",
    district: "Nhà Bè",
    keyword: "xây nhà trọn gói Nhà Bè",
    localNote:
      "Nhà Bè ven sông, nhiều biệt thự và nhà phố view nước — móng và chống lún quan trọng.",
    priceHint: "Biệt thự Nhà Bè trọn gói: 6 – 15 tỷ+ tùy quy mô.",
    hubLink: { href: "/tin-tuc/xay-nha-nha-be", label: "Xây nhà Nhà Bè" },
  },
  {
    slug: "xay-nha-tron-goi-cu-chi",
    district: "Củ Chi",
    keyword: "xây nhà trọn gói Củ Chi",
    localNote:
      "Củ Chi lô rộng, đường xe tải — thích hợp nhà vườn, homestay, nhà ở kết hợp kinh doanh.",
    priceHint: "Chi phí trọn gói Củ Chi thấp nhất trong các huyện TP.HCM.",
  },
  {
    slug: "xay-nha-nha-be",
    district: "Nhà Bè",
    keyword: "xây nhà Nhà Bè",
    localNote:
      "Xây nhà tại Nhà Bè thường hướng tới không gian rộng, sân vườn và biệt thự ven kênh — khác nhịp sống hẻm nội thành.",
    priceHint: "Nên tách gói thô và hoàn thiện nếu ngân sách giãn theo quý.",
    hubLink: { href: "/tin-tuc/xay-nha-tron-goi-nha-be", label: "Trọn gói Nhà Bè" },
  },
];

export const MONEY_PAGE_OVERRIDE_SLUGS_BATCH3: string[] = DISTRICT_TURNKEY_BRIEFS.map((b) => b.slug);

export const moneyPageOverridesBatch3: Record<string, MoneyPageOverride> = Object.fromEntries(
  DISTRICT_TURNKEY_BRIEFS.map((b) => [b.slug, buildDistrictTurnkey(b)]),
);

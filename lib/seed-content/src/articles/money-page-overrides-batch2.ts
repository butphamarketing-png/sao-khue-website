/**
 * Hand-crafted money pages — batch 2 (20 bài).
 * Mỗi bài unique H2 / bảng giá / FAQ — không khung 2 đoạn mỏng.
 */
import { faqSection } from "../article-seo-blocks";
import type { MoneyPageOverride } from "./money-page-overrides";

export const MONEY_PAGE_OVERRIDE_SLUGS_BATCH2: string[] = [
  "cai-tao-nha-tphcm",
  "chi-phi-cai-tao-nha-tphcm",
  "bao-gia-xay-nha-phan-tho-tphcm",
  "xay-nha-tron-goi-binh-thanh",
  "xay-nha-tron-goi-thu-duc",
  "xay-nha-tron-goi-go-vap",
  "xay-nha-tron-goi-quan-2",
  "xay-nha-tron-goi-binh-duong",
  "xay-nha-quan-2",
  "xay-nha-tan-phu",
  "xay-nha-4-tang-tphcm",
  "xay-nha-uy-tin-tphcm",
  "thiet-ke-thi-cong-nha-pho-tphcm",
  "cai-tao-nha-ong-tphcm",
  "nang-tang-nha-tphcm",
  "xay-nha-mat-tien-tphcm",
  "xay-biet-thu-tphcm",
  "sua-dien-nuoc-nha-tphcm",
  "xay-nha-5-tang-tphcm",
  "xay-shophouse-tphcm",
];

export const moneyPageOverridesBatch2: Record<string, MoneyPageOverride> = {
  "cai-tao-nha-tphcm": {
    title: "Cải Tạo Nhà TP.HCM — Hub Quy Trình, Chi Phí & Nhà Thầu 2026",
    excerpt:
      "Cải tạo nhà TP.HCM: khảo sát kết cấu, chống thấm, nâng tầng, mặt tiền. Sao Khuê trực tiếp thi công, BH 10 năm — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà TP.HCM 2026 — Hub A–Z | Sao Khuê",
    metaDescription:
      "Cải tạo nhà TP.HCM: quy trình, chi phí, chống thấm, nâng tầng. Nhà thầu trực tiếp, báo giá minh bạch. Hotline 0909 075 668.",
    metaKeywords:
      "cải tạo nhà tphcm, cải tạo nhà trọn gói, sửa nhà tphcm, nâng tầng nhà phố, sao khuê",
    imageAlt: "Cải tạo nhà TP.HCM — thi công bởi Kiến Trúc Sao Khuê",
    content: `<h2>Cải tạo nhà TP.HCM — bắt đầu từ khảo sát, không từ “giá một cục”</h2>
<p><strong>Cải tạo nhà TP.HCM</strong> không chỉ sơn lại. Gia đình thường cần mở công năng, chống thấm mùa mưa, nâng điện nước, làm mới mặt tiền hoặc <strong>nâng tầng</strong> trên khung cũ. <strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Bình Thạnh) khảo sát miễn phí, tách hạng mục bắt buộc / hoãn được, rồi mới lập dự toán.</p>
<p>Đi sâu: <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a> · <a href="/tin-tuc/cai-tao-nha-tron-goi-tphcm">trọn gói</a> · <a href="/tin-tuc/chi-phi-cai-tao-nha-tphcm">chi phí</a> · <a href="/cong-trinh/sua-nha-quan-3">case Q.3</a> · landing Ads <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>
<h2>Ba nhóm cải tạo phổ biến tại Sài Gòn</h2>
<ol>
  <li><strong>Làm mới nhẹ:</strong> sơn, lát, đèn — 2–6 tuần, 80–300 triệu.</li>
  <li><strong>Cải tạo sâu:</strong> đập thông, WC/bếp, chống thấm — 2–4 tháng, 2,5–5 triệu/m² sàn đụng.</li>
  <li><strong>Nâng tầng / gia cố:</strong> cần kết cấu + giấy phép — <a href="/tin-tuc/nang-tang-nha-pho-tphcm">nâng tầng nhà phố</a>.</li>
</ol>
<h2>Ở trong nhà khi cải tạo</h2>
<p>Sơn–lát–WC từng phòng: ở được nếu chia khu. Đục dầm, nâng tầng, khoan cọc: chuyển tạm. Sao Khuê ghi lịch che chắn trong hợp đồng — không để chủ nhà tự xoay với đội thợ.</p>
<h2>Quy trình cải tạo Sao Khuê</h2>
<ol>
  <li>Ảnh hiện trạng + mô tả (Zalo / form) — ước lượng trong ngày.</li>
  <li>Kỹ sư khảo sát tận nhà.</li>
  <li>Dự toán từng dòng, vật tư, tiến độ.</li>
  <li>Thi công: kết cấu → chống thấm → điện nước → hoàn thiện.</li>
  <li>Nghiệm thu, BH hoàn thiện 12–36 tháng, kết cấu tới 10 năm nếu gia cố.</li>
</ol>
${faqSection([
  { q: "Cải tạo nhà TP.HCM có rẻ hơn xây mới không?", a: "Thường tiết kiệm 30–50% nếu móng–khung còn tốt. Móng yếu hoặc đổi quy mô lớn: xây mới an toàn hơn dài hạn." },
  { q: "Ở trong nhà khi sửa được không?", a: "Cải tạo từng khu được. Đập tường lớn + điện toàn nhà nên chuyển tạm 1–2 tuần." },
  { q: "Khảo sát có phí không?", a: "Nội thành TP.HCM miễn phí. 0909 075 668." },
])}
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">Liên hệ</a> · <a href="/bao-gia">Bảng báo giá</a></p>`,
  },

  "chi-phi-cai-tao-nha-tphcm": {
    title: "Chi Phí Cải Tạo Nhà TP.HCM 2026 — Bảng Giá Theo Hạng Mục",
    excerpt:
      "Chi phí cải tạo nhà TP.HCM: sơn, chống thấm, đập thông, nâng tầng — bảng tham khảo 2026. Sao Khuê báo giá minh bạch.",
    metaTitle: "Chi Phí Cải Tạo Nhà TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Chi phí cải tạo nhà TP.HCM theo hạng mục: nhẹ, sâu, nâng tầng. Mẹo tiết kiệm không cắt kết cấu. Gọi 0909 075 668.",
    metaKeywords: "chi phí cải tạo nhà tphcm, giá cải tạo nhà, báo giá sửa nhà, cải tạo nhà phố",
    imageAlt: "Chi phí cải tạo nhà TP.HCM — bảng giá tham khảo",
    content: `<h2>Chi phí cải tạo nhà TP.HCM phụ thuộc vào đâu?</h2>
<p><strong>Chi phí cải tạo nhà TP.HCM</strong> không có một con số cố định. Ba yếu tố: phạm vi đập/sửa, chất lượng vật tư, và công trường (hẻm hẹp, tầng cao, phế thải). Sao Khuê lập dự toán theo hạng mục — chủ nhà biết đâu bắt buộc, đâu hoãn được.</p>
<h2>Bảng chi phí cải tạo tham khảo 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mức (VNĐ)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Sơn lại + điện nhẹ</td><td>80 – 180 triệu</td><td>Nhà phố 1–2 tầng, ít đập</td></tr>
    <tr><td>Cải tạo WC + chống thấm</td><td>120 – 350 triệu</td><td>Ưu tiên trước mùa mưa</td></tr>
    <tr><td>Đập thông + bếp mới</td><td>200 – 500 triệu</td><td>Có thể gia cố dầm</td></tr>
    <tr><td>Cải tạo toàn nhà phố</td><td>0,6 – 1,8 tỷ</td><td>2–4 tháng</td></tr>
    <tr><td>Nâng tầng / gia cố</td><td>Sau khảo sát móng</td><td>Không báo ảo qua ảnh</td></tr>
  </tbody>
</table>
<p>Xem <a href="/tin-tuc/bao-gia-cai-tao-nha-tphcm">báo giá cải tạo</a> · <a href="/tin-tuc/cai-tao-nha-tphcm">hub cải tạo</a> · <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">sửa trọn gói</a>.</p>
<h2>5 khoản dễ quên trong dự toán</h2>
<ul>
  <li>Vận chuyển phế thải hẻm &lt; 3m (+8–12%).</li>
  <li>Che chắn hàng xóm, giờ ồn.</li>
  <li>Thay cửa khi đổi mặt bằng.</li>
  <li>Thấm ẩn sau khi tháo lớp cũ.</li>
  <li>Điện tăng tải máy lạnh / bếp từ.</li>
</ul>
<h2>Cách tiết kiệm không cắt kết cấu</h2>
<p>Giữ khung, cắt gạch ốp và đèn. Không giảm keo chống thấm hay thép gia cố — sửa lại đắt hơn làm đúng lần đầu.</p>
${faqSection([
  { q: "Có phát sinh chi phí cải tạo không?", a: "Không phát sinh khi không đổi phạm vi. Mở tường gặp mục kết cấu: báo biên bản trước khi làm tiếp." },
  { q: "Cải tạo toàn nhà phố 4×16m hết khoảng bao nhiêu?", a: "Công năng 2 tầng thường 280–450 triệu; sâu + mặt tiền 0,6–1,2 tỷ. Số sau đo nhà." },
])}
<p>Hotline <strong>0909 075 668</strong> — khảo sát và dự toán chi tiết.</p>`,
  },

  "bao-gia-xay-nha-phan-tho-tphcm": {
    title: "Báo Giá Xây Nhà Phần Thô TP.HCM 2026 — Đơn Giá & Gói Việc",
    excerpt:
      "Báo giá xây nhà phần thô TP.HCM: móng, khung, mái, tường — đơn giá/m² và hạng mục không nằm trong gói thô.",
    metaTitle: "Báo Giá Xây Nhà Phần Thô TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Báo giá xây nhà phần thô TP.HCM: đơn giá tham khảo, hạng mục gồm/không gồm, hẻm & địa chất. Sao Khuê 0909 075 668.",
    metaKeywords: "báo giá xây nhà phần thô tphcm, xây thô tphcm, đơn giá xây thô, xây phần thô",
    imageAlt: "Báo giá xây nhà phần thô TP.HCM",
    content: `<h2>Báo giá xây nhà phần thô TP.HCM gồm những gì?</h2>
<p><strong>Báo giá xây nhà phần thô TP.HCM</strong> thường gồm: đào móng, bê tông móng, cốt thép, xây tường, dầm sàn, mái (tôn hoặc BTCT), điện nước chờ. <em>Không</em> gồm ốp lát, sơn, cửa, thiết bị WC, nội thất. Gói thô phù hợp chủ nhà tự chọn hoàn thiện theo quý.</p>
<p>So sánh: <a href="/dich-vu/xay-dung-phan-tho">dịch vụ xây phần thô</a> · <a href="/tin-tuc/thi-cong-phan-tho-tphcm">thi công phần thô</a> · <a href="/tin-tuc/don-gia-xay-nha-tphcm">đơn giá xây nhà</a> · <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá 2026</a>.</p>
<h2>Đơn giá xây thô tham khảo (2026)</h2>
<table>
  <thead><tr><th>Loại</th><th>Đơn giá thô / m² sàn</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3–4 tầng, móng phổ thông</td><td>3,5 – 5,5 triệu</td></tr>
    <tr><td>Hẻm &lt; 3m / vận chuyển khó</td><td>+5 – 12%</td></tr>
    <tr><td>Ép cọc / nền yếu</td><td>Tách dòng, không nuốt vào đơn giá thô</td></tr>
  </tbody>
</table>
<h2>Khi nào chọn thô thay vì trọn gói?</h2>
<ul>
  <li>Muốn tách ngân sách thô / hoàn thiện theo quý.</li>
  <li>Có người giám sát hoàn thiện riêng.</li>
  <li>Chủ động mua gạch, sơn thương hiệu cụ thể.</li>
</ul>
<p>Rủi ro hai nhà thầu đổ lỗi: một đầu mối trọn gói thường ít tranh chấp hơn. Nếu tách, hợp đồng thô phải ghi mác bê tông, thép, chống thấm mái chờ.</p>
${faqSection([
  { q: "Đơn giá thô đã gồm móng cọc chưa?", a: "Thường chưa. Ép/khoan cọc tách theo địa chất — xem bài ép cọc nhà phố." },
  { q: "Xây thô xong bao lâu mới hoàn thiện được?", a: "Có thể hoàn thiện ngay khi bê tông đủ tuổi và chống thấm mái xong. Không để thô phơi mưa nhiều mùa." },
])}
<p>Gọi <strong>0909 075 668</strong> · <a href="/bao-gia">Máy tính báo giá</a></p>`,
  },

  "xay-nha-tron-goi-binh-thanh": {
    title: "Xây Nhà Trọn Gói Bình Thạnh — Hẻm, Giấy Phép & Báo Giá 2026",
    excerpt:
      "Xây nhà trọn gói Bình Thạnh: đơn giá 4,85–5,5 triệu/m², hẻm Nơ Trang Long, GPXD. Văn phòng 245/8 Bình Lợi — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Bình Thạnh 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Bình Thạnh: đơn giá 4,85–5,5 triệu/m², hẻm hẹp, GPXD. Văn phòng Bình Lợi — khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói bình thạnh, xây nhà trọn gói giá rẻ bình thạnh, xây nhà bình thạnh, nhà thầu bình thạnh, sao khuê",
    imageAlt: "Xây nhà trọn gói Bình Thạnh — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Bình Thạnh — đặc thù quận nội thành</h2>
<p><strong>Xây nhà trọn gói Bình Thạnh</strong> là gói một nhà thầu đảm nhận khảo sát, thiết kế, thi công phần thô, hoàn thiện và bàn giao nhà phố tại quận. Bình Thạnh mật độ dân cư cao: lô 4–5m mặt tiền, hẻm 2,5–4m, nhiều nhà cũ phá dỡ hoặc xây trên nền. <strong>Kiến Trúc Sao Khuê</strong> đặt văn phòng tại <strong>245/8 Bình Lợi, Phường 13</strong> — giám sát hiện trường nhanh hơn quận xa, khảo sát thường trong ngày làm việc.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-binh-thanh">xây nhà Bình Thạnh</a> · Pillar: <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói TP.HCM</a> · Cải tạo: <a href="/tin-tuc/cai-tao-nha-binh-thanh">cải tạo nhà Bình Thạnh</a> · <a href="/bao-gia">máy tính báo giá</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Bình Thạnh (2026)</h2>
<p>Đơn giá trọn gói phụ thuộc quy mô sàn, vật tư hoàn thiện và logistics hẻm — không có một con số cho cả quận. Mốc tham khảo sau khảo sát:</p>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá (đ/m² sàn)</th><th>Ghi chú Bình Thạnh</th></tr></thead>
  <tbody>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Thô + hoàn thiện cơ bản</td></tr>
    <tr><td>Trọn gói khá</td><td>5,5 – 6,0 triệu</td><td>Vật tư tầm trung–khá</td></tr>
    <tr><td>Chỉ phần thô</td><td>3,55 – 3,8 triệu</td><td>Chưa hoàn thiện, chưa cọc</td></tr>
  </tbody>
</table>
<p>Nhà phố 4×16, 1 trệt 2 lầu trọn gói cơ bản thường <strong>3,5 – 4,8 tỷ</strong> (chưa cọc nếu nền yếu). 4 tầng ~80–120m² sàn: <strong>3,5 – 5,5 tỷ</strong>. Muốn gói ngân sách thấp hơn: xem <a href="/tin-tuc/xay-nha-gia-re-tphcm">xây nhà trọn gói giá rẻ TP.HCM</a> — cắt phào/đèn, không cắt thép–chống thấm.</p>
<p><strong>Xây nhà trọn gói giá rẻ Bình Thạnh</strong> vẫn phải tách phụ phí hẻm &lt; 3m (+8–12%), ép cọc nền gần rạch (nếu có) và giờ đổ bê tông — ghi rõ trong dự toán, không “nuốt” vào m².</p>

<h2>Hẻm, logistics và giờ đổ bê tông tại Bình Thạnh</h2>
<p>Bình Thạnh nhiều tuyến hẻm Nơ Trang Long, Bình Lợi, Xô Viết Nghệ Tĩnh, Điện Biên Phủ. Trước khi ký hợp đồng, Sao Khuê đo bề rộng hẻm và chốt phương án vận chuyển:</p>
<ul>
  <li><strong>Hẻm ≥ 4m, xe tải vào được:</strong> đổ bê tông tại chỗ, tiến độ thuận hơn.</li>
  <li><strong>Hẻm 3–4m:</strong> bơm bê tông từ mặt tiền hoặc xe trộn nhỏ; ca đổ sớm (6h–8h).</li>
  <li><strong>Hẻm &lt; 3m, xe máy:</strong> khiêng/ba gác, phụ phí logistics ghi phụ lục; phế thải cuối ngày vì hẻm đông.</li>
</ul>
<p>Nhà liền kề: biên bản hiện trạng tường chung trước đào móng; khe nhiệt, chống thấm vách giáp. Không khoan sang nhà bên. Mật độ cao → thông báo hàng xóm và khung giờ ồn ghi trong HĐ.</p>

<h2>Giấy phép xây dựng và quy hoạch phường Bình Thạnh</h2>
<p>Nhiều tuyến Bình Thạnh có lộ giới đường lớn, nhà sát chỉ giới — không copy số tầng nhà bên cạnh. Xây mới trên nền cũ cần hồ sơ GPXD mới; đổi kết cấu/vượt tầng phải tra quy hoạch phường hiện hành.</p>
<p>Nhà 4–5 tầng cho thuê: hỏi PCCC và lối thoát sớm. Shophouse trệt + ở lầu: hỏi công năng thương mại khi nộp GPXD. Sao Khuê tư vấn hiện trạng trong phạm vi HĐ — không thi công vượt phép. Chi tiết: <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin giấy phép xây dựng TP.HCM</a>.</p>

<h2>Quy trình xây nhà trọn gói 6 bước (Sao Khuê)</h2>
<p>Quy trình chuẩn giống <a href="/dich-vu/xay-nha-tron-goi">pillar trọn gói TP.HCM</a>, áp dụng riêng cho Bình Thạnh:</p>
<ol>
  <li><strong>Tiếp nhận:</strong> Hotline / Zalo / <a href="/lien-he">form liên hệ</a> — gửi ảnh hẻm + mặt tiền + sổ (che số).</li>
  <li><strong>Khảo sát:</strong> Đo lô, hẻm, nền; kiểm tra tường chung; ước lượng logistics.</li>
  <li><strong>Thiết kế:</strong> 2D/3D, giếng trời nếu nhà sâu; đối chiếu lộ giới.</li>
  <li><strong>Báo giá &amp; HĐ:</strong> List thép–xi măng–sơn; tách cọc/hẻm; cam kết không phát sinh khi không đổi thiết kế.</li>
  <li><strong>Thi công:</strong> Móng → thô → hoàn thiện; ảnh cốt thép trước đổ; nghiệm thu từng mốc.</li>
  <li><strong>Bàn giao:</strong> BH kết cấu <strong>10 năm</strong>, hoàn thiện 12–36 tháng.</li>
</ol>

<h2>Công trình mẫu tại Bình Thạnh</h2>
<p>Case tham chiếu quy mô và tiêu chuẩn thi công — <strong>không phải cam kết giá copy-paste</strong>:</p>
<ul>
  <li><a href="/cong-trinh/xay-nha-pho-binh-thanh">Nhà phố 4 tầng Bình Thạnh</a> — lô phố cũ, giếng trời, hoàn thiện cơ bản.</li>
  <li>Khu Bình Lợi – Xô Viết Nghệ Tĩnh: lô 4×16 hẻm xe hơi, 1 trệt 2 lầu trọn gói cơ bản khoảng 3,5–4,8 tỷ (chưa cọc).</li>
</ul>
<p>Gửi ảnh hiện trạng + chiều ngang hẻm khi gọi hotline — báo đúng gói thô/trọn trước khi hẹn đo đất.</p>

<h2>Vật tư, nghiệm thu và giám sát gần văn phòng</h2>
<p>Trụ sở ngay Bình Lợi giúp kỹ sư xuống hiện trường nhanh khi nghiệm thu móng, sàn, chống thấm. Hợp đồng ghi rõ mác bê tông, đường kính thép, hãng sơn–keo chống thấm. Không nhận “giá mạng” khi chưa đo hẻm và nền.</p>
<p>Thanh toán theo mốc: móng → sàn các tầng → mái chờ → hoàn thiện; giữ lại 5–10% đến bàn giao. Landing Ads (không tranh organic): <a href="/xay-nha">/xay-nha</a>.</p>

${faqSection([
  { q: "Hẻm Bình Lợi – Nơ Trang Long xây 4 tầng được không?", a: "Theo GPXD và lộ giới từng thửa, không theo ý chủ nhà. Sao Khuê tra quy hoạch phường trước khi vẽ 3D — không hứa tầng khi chưa có xác nhận." },
  { q: "Khảo sát Bình Thạnh có trong ngày không?", a: "Thường được vì văn phòng 245/8 Bình Lợi. Gọi 0909 075 668 gửi ảnh hẻm + sổ (che số) để xếp lịch." },
  { q: "Xây nhà trọn gói giá rẻ Bình Thạnh bao nhiêu?", a: "Gói tiêu chuẩn 4,85–5,5 triệu/m² sàn + phụ phí hẻm/cọc tách dòng. Xem mốc giá rẻ city-wide tại trang giá rẻ TP.HCM — không chốt một cục qua Zalo." },
  { q: "Hẻm dưới 3m có xây trọn gói được không?", a: "Được với phương án bơm bê tông từ mặt tiền, xe phế thải nhỏ, ca sớm. Phụ phí logistics ghi rõ trong dự toán trước khi ký." },
  { q: "Sao Khuê có bảo hành kết cấu không?", a: "Có — 10 năm kết cấu theo hạng mục trong HĐ khi thi công trọn gói. Biên bản ảnh cốt thép lưu trong hồ sơ bảo hành." },
  { q: "Nên chọn thô hay trọn gói tại Bình Thạnh?", a: "Trọn gói khi muốn một đầu mối facade + chống thấm. Tách thô nếu nội thất cao cấp chọn sau — xem /dich-vu/xay-dung-phan-tho." },
])}
<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">Đặt lịch khảo sát</a> · <a href="/bao-gia">/bao-gia</a> · 245/8 Bình Lợi, P.13, Bình Thạnh · kientrucsaokhue.com</p>`,
  },

  "xay-nha-tron-goi-thu-duc": {
    title: "Xây Nhà Trọn Gói Thủ Đức — Nhà Phố, Biệt Thự & KDC Mới 2026",
    excerpt:
      "Xây nhà trọn gói Thủ Đức: KDC mới vs phố cũ, móng ven rạch, facade CĐT. Sao Khuê BH 10 năm — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Thủ Đức 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Thủ Đức: nhà phố 3,5–6 tỷ, KDC vs hẻm Hiệp Bình, GPXD phường mới. Khảo sát miễn phí 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói thủ đức, xây nhà trọn gói giá rẻ thủ đức, xây nhà thủ đức, nhà thầu thủ đức, sao khuê",
    imageAlt: "Xây nhà trọn gói Thủ Đức — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Thủ Đức — từ nhà phố đến biệt thự</h2>
<p><strong>Xây nhà trọn gói Thủ Đức</strong> gom khảo sát, thiết kế, thi công móng–thô–hoàn thiện và bàn giao một đầu mối. TP. Thủ Đức sau sáp nhập gồm khu cũ Q.2, Q.9 và Thủ Đức — quy hoạch và thủ tục GPXD theo <strong>phường hiện hành</strong>, không copy hồ sơ nhà bên cạnh. Sao Khuê nhận nhà phố hẻm, KDC mới lô rộng và biệt thự sân vườn; BH kết cấu <strong>10 năm</strong>.</p>
<p><a href="/tin-tuc/xay-nha-thu-duc">Xây nhà Thủ Đức</a> · <a href="/tin-tuc/xay-nha-tron-goi-quan-2">trọn gói Q.2 cũ</a> · <a href="/dich-vu/xay-nha-tron-goi">pillar TP.HCM</a> · <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Thủ Đức (2026)</h2>
<p>Hai “Thủ Đức” trong thực tế báo giá — <strong>KDC đường lớn</strong> khác <strong>phố cũ hẻm Hiệp Bình / Linh Xuân</strong> — không dùng chung một đơn giá m²:</p>
<table>
  <thead><tr><th>Phân khúc</th><th>Mốc trọn gói (tham khảo)</th><th>Đặc thù</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng, lô 4×16 KDC</td><td>3,5 – 4,8 tỷ</td><td>Logistics dễ, facade theo quy chế CĐT</td></tr>
    <tr><td>Nhà phố 4 tầng, ~100m² sàn</td><td>3,5 – 6 tỷ</td><td>Tùy hoàn thiện và hẻm</td></tr>
    <tr><td>Biệt thự 200m²+ sàn</td><td>8 – 15 tỷ+</td><td>Sân–hồ tách phụ lục</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Chưa cọc ven rạch</td></tr>
  </tbody>
</table>
<p><strong>Xây nhà trọn gói giá rẻ Thủ Đức</strong> nên hiểu là gói tiêu chuẩn + cắt hạng mục thẩm mỹ (phào, đèn), không cắt móng–thép–chống thấm. Chi tiết city-wide: <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a>.</p>

<h2>KDC mới vs phố cũ — logistics và thi công</h2>
<p><strong>KDC mới</strong> (Long Thạnh Mỹ, Lê Văn Việt, nhiều khu ven xa lộ): đường xe tải, ít phụ phí hẻm; nhưng <strong>facade, màu sơn, hàng rào</strong> phải đúng quy chế chủ đầu tư — hỏi trước khi chọn đá ốp/cửa kính lớn.</p>
<p><strong>Phố cũ / ven rạch</strong> (Hiệp Bình, Linh Xuân, một số tuyến gần sông): hẻm hẹp, nền yếu — khoan địa chất trước khi hứa 4 tầng. Cọc/ep cọc có thể <strong>12–18% tổng giá trị</strong>, tách dòng khỏi m² trọn gói. Tường vây chống sụt hàng xóm khi đào sâu.</p>

<h2>Giấy phép xây dựng tại TP. Thủ Đức</h2>
<p>Thủ tục GPXD nộp theo phường thuộc TP. Thủ Đức. Phường cũ Q.2 (Thảo Điền, An Khánh) khác quy hoạch phường cũ Q.9 (Long Thạnh Mỹ) — tra đúng tên phường trước khi vẽ 3D.</p>
<p>Đất ven sông: xác nhận chỉ giới, cao độ nền; móng cọc và biện pháp chống sụt tính riêng. KDC: GPXD + quy chế ban quản lý. Sao Khuê không thi công khi quy hoạch chưa rõ. Xem thêm: <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin GPXD TP.HCM</a>.</p>

<h2>Quy trình trọn gói 6 bước tại Thủ Đức</h2>
<ol>
  <li>Gửi ảnh: hẻm/mặt tiền, sổ (che số), số tầng, KDC hay phố cũ, thô hay trọn gói.</li>
  <li>Khảo sát tận lô: địa chất (ven rạch), quy chế facade (KDC), logistics.</li>
  <li>Thiết kế 2D/3D + danh mục vật tư; phụ lục facade KDC nếu có.</li>
  <li>Báo giá minh bạch; ký HĐ — list thép, xi măng, sơn; mốc thanh toán.</li>
  <li>Thi công 5–8 tháng (nhà phố 3–4 tầng); biệt thự 8–14 tháng. Mùa mưa có thể dời ca đổ.</li>
  <li>Nghiệm thu, bàn giao, BH kết cấu 10 năm.</li>
</ol>
<p>Chi tiết quy trình: <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói TP.HCM</a>.</p>

<h2>Công trình mẫu tại Thủ Đức</h2>
<ul>
  <li><a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">Thiết kế &amp; thi công biệt thự Thủ Đức</a> — quy mô tham chiếu, không copy giá.</li>
  <li>Nhà phố KDC đường lớn: logistics thuận, tiến độ thường đúng HĐ hơn hẻm sâu nội thành.</li>
</ul>
<p>Cải tạo sâu trên nền cũ: <a href="/tin-tuc/cai-tao-nha-thu-duc">cải tạo nhà Thủ Đức</a>.</p>

<h2>Thời gian, thanh toán và một đầu mối</h2>
<p>Đường lớn Thủ Đức dễ xe — ít phụ phí hẻm hơn Gò Vấp / Phú Nhuận. Vẫn cần biên bản hàng xóm khi đào móng liền kề. Thanh toán chia mốc; giữ % đến bàn giao. Không đặt cọc lớn trước HĐ.</p>
<p>Văn phòng Sao Khuê: 245/8 Bình Lợi, Bình Thạnh — đội thi công xuống Thủ Đức theo lịch hẹn. Landing: <a href="/xay-nha">/xay-nha</a>.</p>

${faqSection([
  { q: "Xây ở Long Thạnh Mỹ / Lê Văn Việt xin phép thế nào?", a: "Hồ sơ theo phường thuộc TP. Thủ Đức (khu cũ Q.9) — không nhầm quy hoạch Q.2. Tra phường trước khi nộp." },
  { q: "Nền Hiệp Bình yếu có xây 4 tầng được không?", a: "Sau khảo sát móng và khoan địa chất. Không hứa tầng khi chưa có kết quả địa chất và GPXD." },
  { q: "Xây nhà trọn gói giá rẻ Thủ Đức khác TP.HCM chỗ nào?", a: "KDC rộng giảm logistics; ven rạch tăng cọc. Đơn giá m² city-wide là mốc — số chính sau khảo sát từng lô." },
  { q: "KDC có bắt facade đồng bộ không?", a: "Thường có quy chế CĐT về màu, hàng rào, chiều cao. Hỏi ban quản lý trước khi chốt vật tư mặt đứng." },
  { q: "Thủ Đức mất bao lâu?", a: "Nhà phố 3–4 tầng: 5–8 tháng. Biệt thự 200m²+: 8–14 tháng. Chưa kể thời gian chờ GPXD nếu phức tạp." },
  { q: "Khảo sát Thủ Đức có phí không?", a: "Miễn phí theo lịch hẹn. Gửi 3 ảnh (hẻm, mặt tiền, sổ che số) + mô tả KDC/phố cũ khi gọi 0909 075 668." },
])}
<p><strong>0909 075 668</strong> · <a href="/lien-he">Khảo sát miễn phí</a> · <a href="/bao-gia">/bao-gia</a> · kientrucsaokhue.com</p>`,
  },

  "xay-nha-tron-goi-go-vap": {
    title: "Xây Nhà Trọn Gói Gò Vấp — Nhà Phố Hẻm & Lô 4×16 2026",
    excerpt:
      "Xây nhà trọn gói Gò Vấp: lô 4×16, giếng trời, hẻm Quang Trung. Báo giá minh bạch — Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Gò Vấp 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Gò Vấp: lô 4×16, hẻm hẹp, giếng trời, 3,2–5,8 tỷ. BH kết cấu 10 năm — khảo sát 0909 075 668.",
    metaKeywords:
      "xây nhà trọn gói gò vấp, xây nhà trọn gói giá rẻ gò vấp, xây nhà gò vấp, nhà thầu gò vấp, sao khuê",
    imageAlt: "Xây nhà trọn gói Gò Vấp — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà trọn gói Gò Vấp — hẻm sâu và nhà ống 4×16</h2>
<p><strong>Xây nhà trọn gói Gò Vấp</strong> phục vụ nhà phố hẻm Quang Trung, Lê Đức Thọ, Phan Văn Trị, Nguyễn Văn Lượng — lô <strong>4×16</strong> hoặc 4×18 phổ biến, cần giếng trời lấy sáng. Sao Khuê khảo sát miễn phí, thi công trực tiếp (không bán thầu phụ), BH kết cấu <strong>10 năm</strong>. Hẻm hẹp phải tính điểm đổ bê tông, cẩu/ba gác và giờ hành chính ngay từ dự toán.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-go-vap">xây nhà Gò Vấp</a> · <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">nhà phố 4×16</a> · <a href="/dich-vu/xay-nha-tron-goi">trọn gói TP.HCM</a> · Cải tạo: <a href="/tin-tuc/cai-tao-nha-go-vap">cải tạo Gò Vấp</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đơn giá và gói giá rẻ tại Gò Vấp (2026)</h2>
<table>
  <thead><tr><th>Quy mô Gò Vấp</th><th>Mốc trọn gói (tham khảo)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Ống 4×16, 1 trệt 2 lầu</td><td>3,2 – 4,8 tỷ</td><td>+ logistics hẻm 8–12%</td></tr>
    <tr><td>4 tầng, ~80–100m² sàn</td><td>4,0 – 5,8 tỷ</td><td>Chưa cọc nếu nền yếu</td></tr>
    <tr><td>Đơn giá m² tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Tách phụ phí hẻm</td></tr>
  </tbody>
</table>
<p>Lô 4×16 Quang Trung – Phan Văn Trị: liền kề cần khe nhiệt, chống thấm tường chung. <strong>Xây nhà trọn gói giá rẻ Gò Vấp</strong> = gói tiêu chuẩn + cắt phào/đèn hợp lý — xem <a href="/tin-tuc/xay-nha-gia-re-tphcm">giá rẻ TP.HCM</a>, không cắt thép–chống thấm.</p>

<h2>Hẻm, đổ bê tông và logistics Gò Vấp</h2>
<ul>
  <li><strong>Hẻm &lt; 3m:</strong> bơm bê tông từ mặt tiền; không để xe trộn chắn lối; ca đổ sớm.</li>
  <li><strong>Hẻm xe máy:</strong> khiêng/ba gác — phụ phí ghi phụ lục, không nuốt vào m².</li>
  <li><strong>Phế thải:</strong> thu dọn cuối ngày — hẻm đông, hàng xóm sát.</li>
  <li><strong>Liền kề:</strong> biên bản hiện trạng tường chung trước đào móng; không khoan sang nhà bên.</li>
</ul>
<p>Gửi ảnh mặt tiền + chiều ngang hẻm, sổ (che số), số tầng mong muốn — Sao Khuê ước lượng trong ngày làm việc rồi hẹn đo đất.</p>

<h2>Giếng trời và thiết kế nhà ống Gò Vấp</h2>
<p>Nhà sâu 16–20m thiếu giếng trời sẽ tối và ẩm — không bắt buộc pháp lý nhưng nên chốt từ <strong>bản vẽ móng</strong>, không khoét dầm sau (tốn và rủi ro kết cấu). Kích thước tối thiểu ~1,2×1,5m cạnh cầu thang. Nhà cũ thiếu sáng: <a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">cải tạo giếng trời</a>.</p>
<p>Mặt bằng tối ưu ánh sáng, móng phù hợp khu dân cư lâu năm, chống thấm mái/sân thượng chuẩn mưa TP.HCM.</p>

<h2>Giấy phép và quy hoạch phường Gò Vấp</h2>
<p>Số tầng theo quy hoạch phường — không theo “nhà bên cạnh đang 4 tầng”. Xây mới trên nền: GPXD mới. Nhà cho thuê nhiều phòng: hỏi PCCC sớm. Sao Khuê tra hiện trạng trước khi vẽ 3D vượt phép.</p>

<h2>Quy trình trọn gói 6 bước tại Gò Vấp</h2>
<ol>
  <li>Tiếp nhận &amp; ảnh hiện trạng (Zalo/hotline).</li>
  <li>Khảo sát: đo hẻm, lô, tường chung; chốt logistics.</li>
  <li>Thiết kế 2D/3D + giếng trời; list vật tư.</li>
  <li>Báo giá &amp; HĐ — phụ phí hẻm ghi trước khi ký.</li>
  <li>Thi công móng → thô → hoàn thiện; ảnh cốt thép; nghiệm thu từng mốc.</li>
  <li>Bàn giao, BH 10 năm kết cấu.</li>
</ol>
<p>Quy trình đầy đủ: <a href="/dich-vu/xay-nha-tron-goi">pillar trọn gói</a>.</p>

<h2>Công trình và phân khúc điển hình</h2>
<p>Gò Vấp mạnh nhà ống 4×16, 1 trệt 2 lầu hoặc 3–4 tầng gia đình. Mặt tiền kinh doanh một số tuyến: tách điện quán–nhà ở, WC khách trệt. So sánh kích thước lô: <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">xây nhà 4×16 TP.HCM</a>.</p>

<h2>Gói Sao Khuê — cam kết minh bạch</h2>
<ul>
  <li>List thép–xi măng–sơn trong HĐ; ảnh cốt thép trước đổ.</li>
  <li>Phụ phí hẻm ghi rõ — không phụ thu miệng cuối gói.</li>
  <li>Giám sát từ văn phòng 245/8 Bình Lợi, Bình Thạnh.</li>
  <li>Máy tính mốc: <a href="/bao-gia">/bao-gia</a>; HĐ chính thức sau khảo sát hiện trường.</li>
</ul>

${faqSection([
  { q: "Hẻm xe máy Gò Vấp xây được không?", a: "Được nếu có phương án khiêng/ba gác và bơm bê tông. Khảo sát đo hẻm trước khi hứa cẩu hoặc xe trộn vào." },
  { q: "Nhà ống Gò Vấp có bắt buộc giếng trời không?", a: "Không bắt buộc pháp lý, nhưng nhà sâu 16–20m nên có giếng ~1,2×1,5m — chốt từ bản vẽ móng." },
  { q: "Xây nhà trọn gói giá rẻ Gò Vấp bao nhiêu?", a: "Ống 4×16 trọn gói cơ bản thường 3,2–4,8 tỷ + logistics hẻm. Đơn giá m² là mốc — số chính sau đo đất." },
  { q: "Hẻm Gò Vấp dưới 3m xây được không?", a: "Được: bơm từ mặt tiền, xe phế thải nhỏ, ca sớm. Phụ phí ghi rõ trong dự toán." },
  { q: "Thời gian thi công Gò Vấp?", a: "Nhà phố 3–4 tầng: 5–8 tháng tùy hẻm và mùa mưa. Hẻm hẹp có thể kéo dài ca đổ." },
  { q: "Khảo sát Gò Vấp mất phí không?", a: "Miễn phí nội thành theo lịch. Gọi 0909 075 668 · văn phòng Bình Lợi." },
])}
<p>Gọi <strong>0909 075 668</strong> · <a href="/lien-he">/lien-he</a> · Landing Ads: <a href="/xay-nha">/xay-nha</a></p>`,
  },

  "xay-nha-tron-goi-quan-2": {
    title: "Xây Nhà Trọn Gói Quận 2 — Thảo Điền, An Khánh & Ven Sông",
    excerpt:
      "Xây nhà trọn gói Quận 2: lô ven sông, nhà phố cao cấp. Sao Khuê tư vấn móng, phép — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Quận 2 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Quận 2: Thảo Điền, An Khánh, móng đất yếu. Thiết kế–thi công — 0909 075 668.",
    metaKeywords: "xây nhà trọn gói quận 2, xây nhà quận 2, nhà thầu quận 2",
    imageAlt: "Xây nhà trọn gói Quận 2",
    content: `<h2>Xây nhà trọn gói Quận 2 — tiêu chuẩn cao hơn trung bình</h2>
<p>Khu cũ Q.2 (nay thuộc TP. Thủ Đức) nhiều lô ven sông, Thảo Điền, An Khánh: hoàn thiện cao, móng đất yếu. <strong>Xây nhà trọn gói Quận 2</strong> cần khoan địa chất, chống sụt hàng xóm khi đào sâu.</p>
<p><a href="/tin-tuc/xay-nha-quan-2">xây nhà Quận 2</a> · <a href="/tin-tuc/xay-nha-mat-tien-tphcm">nhà mặt tiền</a>.</p>
<h2>Checklist trước khi khởi công</h2>
<ul>
  <li>Quy hoạch &amp; lộ giới theo phường mới (Thủ Đức).</li>
  <li>Biện pháp chống sụt móng gần hàng xóm.</li>
  <li>Hồ sơ phép nếu vượt cấp / đổi kết cấu.</li>
  <li>Facade khu dân cư thấp tầng — hàng xóm soi hoàn thiện.</li>
</ul>
<h2>Chi phí</h2>
<p>Trọn gói nhà phố Q.2 thường cao hơn quận ven 10–20% do logistics và vật tư. Móng cọc có thể 12–18% tổng giá trị ở khu ven sông.</p>
${faqSection([
  { q: "Thảo Điền xây biệt thự mini được không?", a: "Tùy chỉ giới và quy hoạch. Sao Khuê tra trước, không vẽ vượt phép." },
  { q: "Đất yếu Q.2 có dùng móng đơn không?", a: "Thường không. Khoan địa chất rồi mới chốt cọc / bè." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-nha-tron-goi-binh-duong": {
    title: "Xây Nhà Trọn Gói Bình Dương — Thuận An, Dĩ An & Lân Cận TP.HCM",
    excerpt:
      "Xây nhà trọn gói Bình Dương: nhà phố, biệt thự. Sao Khuê nhận từ TP.HCM — 0909 075 668.",
    metaTitle: "Xây Nhà Trọn Gói Bình Dương 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trọn gói Bình Dương: Thuận An, Dĩ An, Thủ Dầu Một. Báo giá minh bạch, BH 10 năm. 0909 075 668.",
    metaKeywords: "xây nhà trọn gói bình dương, xây nhà bình dương, nhà thầu bình dương",
    imageAlt: "Xây nhà trọn gói Bình Dương",
    content: `<h2>Xây nhà trọn gói Bình Dương — lợi thế so với nội thành</h2>
<p>Bình Dương thường lô rộng hơn, đường xe tải, chi phí đất thấp hơn TP.HCM — phù hợp phố 4–5 tầng hoặc biệt thự. Sao Khuê thi công Thuận An, Dĩ An và huyện lân cận; điều phối từ Bình Thạnh. Gói nhỏ có thể ghi phụ phí di chuyển; trọn gói thường gộp.</p>
<p>Case: <a href="/cong-trinh/xay-nha-pho-thuan-an">nhà phố Thuận An</a> · <a href="/dich-vu/xay-nha-tron-goi-binh-duong">dịch vụ Bình Dương</a>.</p>
<h2>Đơn giá tham khảo</h2>
<p>Trọn gói nhà phố Bình Dương thường <strong>thấp hơn 5–15%</strong> so cùng quy mô nội thành TP.HCM (trước chi phí đi lại). Phần thô khoảng 3,5–5 triệu/m² sàn.</p>
<h2>Pháp lý</h2>
<p>GPXD theo tỉnh Bình Dương, không dùng hồ sơ TP.HCM. Sao Khuê hỗ trợ tra quy hoạch và bản vẽ xin phép.</p>
${faqSection([
  { q: "Sao Khuê có nhận Thủ Dầu Một / Tân Uyên không?", a: "Có theo thỏa thuận lịch đội. Gói nhỏ hẹn khảo sát trước 1 ngày." },
  { q: "Bảo hành kết cấu ở Bình Dương?", a: "10 năm bằng văn bản, như công trình TP.HCM do Sao Khuê thi công." },
])}
<p><strong>0909 075 668</strong> · <a href="/bao-gia">Báo giá</a></p>`,
  },

  "xay-nha-quan-2": {
    title: "Xây Nhà Quận 2 — Lưu Ý Quy Hoạch, Móng & Chọn Nhà Thầu",
    excerpt:
      "Xây nhà Quận 2: ven sông, Thảo Điền, An Phú. Chọn gói thô/trọn gói, tránh phát sinh — Sao Khuê.",
    metaTitle: "Xây Nhà Quận 2 TP.HCM — Hướng Dẫn 2026",
    metaDescription:
      "Xây nhà Quận 2: quy hoạch Thủ Đức, móng đất yếu, trọn gói vs thô. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords: "xây nhà quận 2, xây nhà thảo điền, xây nhà tp hcm quận 2",
    imageAlt: "Xây nhà Quận 2 TP.HCM",
    content: `<h2>Xây nhà Quận 2 — khác quận nội đô đông đúc</h2>
<p><strong>Xây nhà Quận 2</strong> gắn ven sông, Thảo Điền, An Khánh: lô rộng hơn, thẩm mỹ và móng cao hơn. Sau sáp nhập, xác nhận <strong>phường/quy hoạch Thủ Đức</strong> trước khi thiết kế. Bài này hướng dẫn chọn gói; trang trọn gói chi tiết: <a href="/tin-tuc/xay-nha-tron-goi-quan-2">xây nhà trọn gói Quận 2</a>.</p>
<p>Hub: <a href="/tin-tuc/xay-nha-tphcm">xây nhà TP.HCM</a> · <a href="/tin-tuc/xay-nha-thu-duc">xây nhà Thủ Đức</a>.</p>
<h2>3 lỗi thường gặp khi xây Q.2</h2>
<ol>
  <li>Thiết kế không tính hướng nắng tây — nhà nóng, tốn điện.</li>
  <li>Móng cạn trên nền yếu ven kênh.</li>
  <li>Vật liệu ngoại thất không chịu mưa phù sa / ẩm.</li>
</ol>
<h2>Thô hay trọn gói?</h2>
<p>Khu cao cấp: trọn gói dễ đồng bộ facade. Ngân sách giãn: thô rồi hoàn thiện theo quý — ghi rõ mác bê tông để đội sau không đổ lỗi.</p>
${faqSection([
  { q: "Xây nhà Q.2 có cần khảo sát địa chất không?", a: "Ven sông/rạch: bắt buộc. Khu nền ổn định hơn vẫn nên khoan nếu nhà 4–5 tầng." },
  { q: "Khác gì xây nhà Thủ Đức?", a: "Q.2 cũ là một phần Thủ Đức. Hồ sơ xin phép theo phường hiện hành, không ghi “Quận 2” trên giấy cũ." },
])}
<p>Khảo sát: <strong>0909 075 668</strong></p>`,
  },

  "xay-nha-tan-phu": {
    title: "Xây Nhà Tân Phú — Nhà Phố Hẻm & Khu Dân Cư Ổn Định",
    excerpt:
      "Xây nhà Tân Phú: nhà phố, hẻm Phú Thạnh, Tân Sơn Nhì. Sao Khuê thi công trọn gói — báo giá rõ.",
    metaTitle: "Xây Nhà Tân Phú 2026 | Nhà Thầu Trọn Gói",
    metaDescription:
      "Xây nhà Tân Phú: thiết kế, thi công hẻm hẹp, chống thấm. Kinh nghiệm Tân Sơn Nhì — 0909 075 668.",
    metaKeywords: "xây nhà tân phú, xây nhà quận tân phú, nhà thầu tân phú",
    imageAlt: "Xây nhà Tân Phú",
    content: `<h2>Xây nhà Tân Phú — đặc điểm khu vực</h2>
<p><strong>Xây nhà Tân Phú</strong> (Tân Sơn Nhì, Phú Thạnh, Gò Dầu, Lũy Bán Bích): mật độ phố cao, hẻm nối Tân Bình. Một số phường thấp trũng — thoát nước mưa và cao độ nền cần tính từ bản vẽ. Chiều cao theo tuyến hẻm / GPXD, không theo nhà hàng xóm miệng.</p>
<p><a href="/tin-tuc/xay-nha-tron-goi-tan-phu">trọn gói Tân Phú</a> · <a href="/tin-tuc/xay-nha-trong-hem-tphcm">xây nhà trong hẻm</a> · <a href="/tin-tuc/cai-tao-nha-tan-phu">cải tạo Tân Phú</a>.</p>
<h2>Quy mô phổ biến</h2>
<ul>
  <li>1 trệt 1 lầu: gia đình trẻ, ngân sách vừa.</li>
  <li>1 trệt 2 lầu / 4 tầng: ở + cho thuê trệt.</li>
  <li>Cấp 4 lên phố: khảo sát móng trước khi hứa thêm tầng.</li>
</ul>
<h2>Chi phí</h2>
<p>Trọn gói Tân Phú cạnh tranh nội thành: phố 3 tầng thường 3,3–4,7 tỷ; 4 tầng 4,2–5,8 tỷ. Hẻm hẹp +5–10%.</p>
${faqSection([
  { q: "Tân Phú có hạn chế tầng gần sân bay không?", a: "Hạn chế chiều cao chủ yếu một số phường Tân Bình. Tân Phú vẫn tra GPXD từng thửa." },
  { q: "Xây trên nền cấp 4 cũ được không?", a: "Được nếu móng đủ hoặc gia cố. Không đổ thêm tầng khi chưa khảo sát." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-nha-4-tang-tphcm": {
    title: "Xây Nhà 4 Tầng TP.HCM — Chi Phí, Kết Cấu & Thời Gian",
    excerpt:
      "Xây nhà 4 tầng TP.HCM: diện tích sàn, móng, thang máy. Bảng chi phí 2026 và phép xây dựng.",
    metaTitle: "Xây Nhà 4 Tầng TP.HCM 2026 — Chi Phí & Kỹ Thuật",
    metaDescription:
      "Xây nhà 4 tầng TP.HCM: chi phí 3,8–8 tỷ, thời gian 5–8 tháng, kết cấu. Trọn gói BH 10 năm — 0909 075 668.",
    metaKeywords: "xây nhà 4 tầng tphcm, chi phí nhà 4 tầng, nhà phố 4 tầng",
    imageAlt: "Xây nhà 4 tầng TP.HCM",
    content: `<h2>Xây nhà 4 tầng TP.HCM — khi nào hợp lý?</h2>
<p><strong>Xây nhà 4 tầng TP.HCM</strong> phổ biến lô 4×15 – 5×20: tối đa diện tích khi quy hoạch cho phép. Cần bản vẽ kết cấu đúng tải, thang bộ + thoát hiểm, chống thấm sân thượng. So sánh 3 tầng: <a href="/tin-tuc/xay-nha-3-tang-tphcm">xây nhà 3 tầng</a> · 5 tầng: <a href="/tin-tuc/xay-nha-5-tang-tphcm">xây nhà 5 tầng</a>.</p>
<p>Case: <a href="/cong-trinh/xay-nha-pho-binh-thanh">4 tầng Bình Thạnh</a>.</p>
<h2>Chi phí tham khảo (2026)</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Ước tính</th></tr></thead>
  <tbody>
    <tr><td>Trọn gói cơ bản (~100m² sàn)</td><td>3,8 – 5,2 tỷ</td></tr>
    <tr><td>Trọn gói khá / mặt tiền kỹ</td><td>5,5 – 8 tỷ+</td></tr>
    <tr><td>Thời gian thi công</td><td>5 – 8 tháng</td></tr>
  </tbody>
</table>
<h2>Kỹ thuật cần chú ý</h2>
<ul>
  <li>Móng cọc nếu đất yếu / nhà sát.</li>
  <li>Giằng chống xoắn khung BTCT.</li>
  <li>Chống thấm WC + mái trước lát.</li>
  <li>PCCC / thang nếu cho thuê nhiều tầng.</li>
</ul>
${faqSection([
  { q: "Nhà 4×12 xây 4 tầng được không?", a: "Theo quy hoạch phường, không theo kích thước lô. Kiểm tra phép trước khi vẽ." },
  { q: "4 tầng có nên làm thang máy?", a: "Gia đình người già / cho thuê: nên chừa hố thang từ bản vẽ, dù lắp sau." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-nha-uy-tin-tphcm": {
    title: "Xây Nhà Uy Tín TP.HCM — 7 Tiêu Chí Chọn Nhà Thầu Đúng",
    excerpt:
      "Xây nhà uy tín TP.HCM: tránh bán thầu, hợp đồng rõ, bảo hành kết cấu. Sao Khuê trực tiếp thi công.",
    metaTitle: "Xây Nhà Uy Tín TP.HCM — 7 Tiêu Chí Nhà Thầu",
    metaDescription:
      "Xây nhà uy tín TP.HCM: 7 tiêu chí nhà thầu minh bạch, trực tiếp thi công. Sao Khuê BH 10 năm — 0909 075 668.",
    metaKeywords: "xây nhà uy tín tphcm, nhà thầu uy tín, công ty xây dựng uy tín tphcm",
    imageAlt: "Xây nhà uy tín TP.HCM — Sao Khuê",
    content: `<h2>Xây nhà uy tín TP.HCM — đừng chỉ nhìn báo giá rẻ</h2>
<p><strong>Xây nhà uy tín TP.HCM</strong> là nhà thầu làm đúng cam kết: vật tư đúng chủng loại, tiến độ rõ, bảo hành có thực, không bán thầu trá hình. Sao Khuê trực tiếp thi công, trụ sở 245/8 Bình Lợi, BH kết cấu 10 năm.</p>
<p><a href="/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm">công ty uy tín</a> · <a href="/bai-viet/ve-chung-toi">về Sao Khuê</a> · <a href="/cong-trinh">công trình</a>.</p>
<h2>7 tiêu chí kiểm tra nhà thầu</h2>
<ol>
  <li>Hợp đồng ghi vật tư, đơn giá, mốc thanh toán.</li>
  <li>Giám sát hiện trường (ảnh móng, cốt thép).</li>
  <li>Không ứng quá 50% trước hạng mục tương ứng.</li>
  <li>Công trình tham chiếu cùng quy mô.</li>
  <li>Bảo hành kết cấu bằng văn bản.</li>
  <li>Phát sinh báo trước khi làm.</li>
  <li>Pháp nhân rõ, xuất hóa đơn khi cần.</li>
</ol>
<h2>Dấu hiệu bán thầu</h2>
<p>Báo giá thấp 20–30% thị trường, đội thợ thay đổi liên tục, không cho xem cốt thép, thanh toán mặt. Sao Khuê không nhận “khoán miệng”. Landing: <a href="/xay-nha">/xay-nha</a>.</p>
${faqSection([
  { q: "Giá rẻ hơn 25% có đáng lo không?", a: "Thường cắt thép, chống thấm hoặc bán thầu. So hạng mục, không so một con số." },
  { q: "Sao Khuê có pháp nhân không?", a: "Có. Hợp đồng công ty, bảo hành viết, hotline 0909 075 668." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "thiet-ke-thi-cong-nha-pho-tphcm": {
    title: "Thiết Kế Thi Công Nhà Phố TP.HCM — Một Đầu Mối, Ít Sai Sót",
    excerpt:
      "Thiết kế thi công nhà phố TP.HCM: cùng đơn vị từ bản vẽ đến bàn giao. Giảm lệch bản vẽ–hiện trường.",
    metaTitle: "Thiết Kế Thi Công Nhà Phố TP.HCM | Sao Khuê",
    metaDescription:
      "Thiết kế + thi công nhà phố TP.HCM một đầu mối. Phối cảnh 3D, bảo hành kết cấu 10 năm. 0909 075 668.",
    metaKeywords: "thiết kế thi công nhà phố tphcm, thiết kế và thi công, nhà phố tphcm",
    imageAlt: "Thiết kế thi công nhà phố TP.HCM",
    content: `<h2>Thiết kế thi công nhà phố TP.HCM — vì sao nên gộp?</h2>
<p>Khi thiết kế và thi công tách đơn vị, dễ phát sinh: bản vẽ đẹp nhưng không tối ưu chi phí, thợ hiện trường đòi đổi chi tiết. <strong>Thiết kế thi công nhà phố TP.HCM</strong> một đầu mối: Sao Khuê chịu từ phối cảnh 3D đến nghiệm thu.</p>
<p><a href="/dich-vu/thiet-ke-nha">Thiết kế</a> · <a href="/tin-tuc/thiet-ke-nha-pho-tphcm">thiết kế nhà phố</a> · <a href="/cong-trinh/thiet-ke-nha-phong-cach-hien-dai">mẫu hiện đại</a>.</p>
<h2>Quy trình thiết kế + thi công</h2>
<ol>
  <li>Brief &amp; khảo sát đất/hẻm/quy hoạch.</li>
  <li>Mặt bằng + phối cảnh 3D duyệt.</li>
  <li>Bản vẽ thi công + dự toán (thô / trọn gói).</li>
  <li>Thi công giám sát đúng bản vẽ — đổi chi tiết phải phụ lục.</li>
  <li>Bàn giao hồ sơ hoàn công / bảo hành.</li>
</ol>
<h2>Chi phí thiết kế</h2>
<p>Nhà phố: thường 2–4 tuần. Có thể miễn phí / trừ vào HĐ thi công theo chương trình — hỏi rõ khi ký, không để miệng.</p>
${faqSection([
  { q: "Chỉ thuê thiết kế, tự tìm thầu khác được không?", a: "Được. Hồ sơ Sao Khuê đủ để đội khác thi công; rủi ro lệch hiện trường do đơn vị thi công chịu." },
  { q: "3D có gồm bản vẽ kết cấu không?", a: "Phối cảnh khác hồ sơ kết cấu. Gói thi công gồm bản vẽ kỹ thuật; gói 3D đơn thuần thì ghi rõ phạm vi." },
])}
<p>Gọi <strong>0909 075 668</strong>.</p>`,
  },

  "cai-tao-nha-ong-tphcm": {
    title: "Cải Tạo Nhà Ống TP.HCM — Lấy Sáng, Thông Gió & Mở Công Năng",
    excerpt:
      "Cải tạo nhà ống TP.HCM: giếng trời, thông tầng, chống ẩm. Giải pháp nhà sâu 15–25m.",
    metaTitle: "Cải Tạo Nhà Ống TP.HCM — Sáng & Thoáng",
    metaDescription:
      "Cải tạo nhà ống TP.HCM: giếng trời, điện nước, chống thấm khu giữa nhà. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords: "cải tạo nhà ống tphcm, nhà ống sài gòn, sửa nhà ống",
    imageAlt: "Cải tạo nhà ống TP.HCM",
    content: `<h2>Cải tạo nhà ống TP.HCM — bài toán ánh sáng</h2>
<p>Nhà ống (mặt tiền hẹp, sâu 15–25m) phổ biến Bình Thạnh, Tân Bình, Q.3, Gò Vấp. <strong>Cải tạo nhà ống TP.HCM</strong> ưu tiên giếng trời, cầu thang lấy sáng, thông gió chéo, chống ẩm khu giữa nhà. Đập thông chỉ khi tường không chịu lực hoặc đã gia cố.</p>
<p><a href="/tin-tuc/cai-tao-nha-tphcm">hub cải tạo</a> · <a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">giếng trời</a> · <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cấp 4 / ống</a>.</p>
<h2>Giải pháp thường dùng</h2>
<ul>
  <li>Giếng trời + kính chống nóng, thoát nước đáy giếng.</li>
  <li>Đập vách không chịu lực để mở phòng khách.</li>
  <li>Chống thấm WC giữa nhà (hay thấm sang phòng ngủ).</li>
  <li>Điện nước âm, quạt hút tầng giữa.</li>
</ul>
<h2>Chi phí</h2>
<p>Ống 4×16 sửa công năng 2 tầng thường 280–420 triệu. Thêm giếng trời + mặt tiền: 3,5–5 triệu/m² sàn đụng. Hẻm hẹp cộng vận chuyển.</p>
${faqSection([
  { q: "Đập thông nhà ống có sập không?", a: "Rủi ro nếu đục cột/dầm. Sao Khuê không đục khi chưa có phương án gia cố." },
  { q: "Giếng trời có dột không?", a: "Dột nếu sai dốc và cổ ống. Nghiệm thu thoát nước, không chỉ lắp kính cho đẹp." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "nang-tang-nha-tphcm": {
    title: "Nâng Tầng Nhà TP.HCM — Khi Nào Được Phép & Chi Phí",
    excerpt:
      "Nâng tầng nhà TP.HCM: khảo sát kết cấu, giấy phép, gia cố. Sao Khuê tư vấn an toàn trước khi thi công.",
    metaTitle: "Nâng Tầng Nhà TP.HCM — Kỹ Thuật & Pháp Lý",
    metaDescription:
      "Nâng tầng nhà TP.HCM: điều kiện kết cấu, chi phí, xin phép. Không nâng bừa — khảo sát trước. 0909 075 668.",
    metaKeywords: "nâng tầng nhà tphcm, nâng tầng nhà phố, gia cố nâng tầng",
    imageAlt: "Nâng tầng nhà TP.HCM",
    content: `<h2>Nâng tầng nhà TP.HCM — không phải lúc nào cũng được</h2>
<p><strong>Nâng tầng nhà TP.HCM</strong> cần: (1) quy hoạch cho phép chiều cao, (2) móng/khung chịu thêm tải, (3) giấy phép. Sao Khuê không cam kết nâng khi chưa khảo sát kết cấu. Chi tiết kỹ thuật: <a href="/tin-tuc/nang-tang-nha-pho-tphcm">nâng tầng nhà phố</a> · <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a> · <a href="/tin-tuc/gia-co-nha-cu-tphcm">gia cố nhà cũ</a>.</p>
<h2>Quy trình nâng tầng an toàn</h2>
<ol>
  <li>Khảo sát móng, cột, dầm hiện có (khoan/kiểm nếu cần).</li>
  <li>Bản vẽ kết cấu tăng tầng + gia cố.</li>
  <li>Xin phép &amp; thông báo hàng xóm.</li>
  <li>Thi công gia cố → đổ tầng mới → chống thấm mái.</li>
  <li>Nghiệm thu kết cấu, BH tới 10 năm phần gia cố.</li>
</ol>
<h2>Chi phí</h2>
<p>Không có đơn giá m² ảo. Phụ thuộc gia cố móng, số tầng thêm, hoàn thiện. Cấp 4 lên 1 tầng khác hẳn phố 3 tầng thêm tum.</p>
${faqSection([
  { q: "Nhà cấp 4 20 năm có nâng được không?", a: "Nhiều căn không đủ móng. Khảo sát trước — có thể chỉ làm mới, không nâng." },
  { q: "Nâng tum sân thượng có cần phép không?", a: "Tum / đổi số tầng thường cần kiểm tra GPXD. Không đổ chui." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-nha-mat-tien-tphcm": {
    title: "Xây Nhà Mặt Tiền TP.HCM — Kinh Doanh + Ở Kết Hợp",
    excerpt:
      "Xây nhà mặt tiền TP.HCM: shophouse, cửa hàng tầng trệt. Thiết kế facade và quy hoạch vỉa hè.",
    metaTitle: "Xây Nhà Mặt Tiền TP.HCM | Shophouse 2026",
    metaDescription:
      "Xây nhà mặt tiền TP.HCM: kinh doanh + ở, thiết kế facade, điện tách. Trọn gói Sao Khuê — 0909 075 668.",
    metaKeywords: "xây nhà mặt tiền tphcm, nhà phố kinh doanh, shophouse tphcm",
    imageAlt: "Xây nhà mặt tiền TP.HCM",
    content: `<h2>Xây nhà mặt tiền TP.HCM — thiết kế cho dòng tiền</h2>
<p><strong>Xây nhà mặt tiền TP.HCM</strong> thường kết hợp kinh doanh trệt + ở lầu. Cần lộ giới, vỉa hè, bảng hiệu, tải điện riêng quán, cách âm tầng ở. Khác nhà hẻm thuần ở: hoàn thiện mặt đứng cao hơn 10–20%.</p>
<p><a href="/tin-tuc/xay-shophouse-tphcm">xây shophouse</a> · <a href="/tin-tuc/cai-tao-mat-tien-nha-tphcm">cải tạo mặt tiền</a> · <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">cải tạo kết hợp kinh doanh</a>.</p>
<h2>Yếu tố facade</h2>
<ul>
  <li>Cửa kính / cuốn cho shop, hệ nhôm ghi hợp đồng.</li>
  <li>Loggia tầng 2+ tách không gian ở.</li>
  <li>Thoát hiểm &amp; PCCC theo quy mô kinh doanh.</li>
  <li>Điện 3 pha, WC khách tách WC nhà.</li>
</ul>
${faqSection([
  { q: "Mở quán tầng trệt có cần đổi công năng không?", a: "Đổi mặt tiền / công năng: hỏi phường khi xin GPXD. Sơn trong không cần." },
  { q: "Nhà mặt tiền Cộng Hòa khác hẻm trong thế nào?", a: "Hoàn thiện mặt đứng và giờ ồn khắt khe hơn — dự toán tách dòng." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-biet-thu-tphcm": {
    title: "Xây Biệt Thự TP.HCM — Sân Vườn, Kết Cấu & Ngân Sách",
    excerpt:
      "Xây biệt thự TP.HCM: sân vườn, mái Thái, hồ bơi. Sao Khuê thi công cao cấp — BH 10 năm.",
    metaTitle: "Xây Biệt Thự TP.HCM | Thiết Kế & Thi Công",
    metaDescription:
      "Xây biệt thự TP.HCM: sân vườn, kết cấu, báo giá 8–25 tỷ+. Kinh nghiệm Thủ Đức, Nhà Bè. 0909 075 668.",
    metaKeywords: "xây biệt thự tphcm, thi công biệt thự, xây nhà vườn tphcm",
    imageAlt: "Xây biệt thự TP.HCM",
    content: `<h2>Xây biệt thự TP.HCM — khác nhà phố ở đâu?</h2>
<p><strong>Xây biệt thự TP.HCM</strong> (Thủ Đức, Nhà Bè, Bình Chánh, Q.7): quy hoạch sân vườn, kết cấu tải lớn hơn, hoàn thiện cao cấp, tiến độ dài hơn. Ngân sách tính m² xây + m² sân/hồ, không chỉ m² sàn nhà phố.</p>
<p><a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a> · <a href="/tin-tuc/xay-nha-nha-be">xây nhà Nhà Bè</a> · <a href="/tin-tuc/thiet-ke-nha-dep-tphcm">thiết kế nhà đẹp</a>.</p>
<h2>Chi phí tham khảo</h2>
<p>Biệt thự 200–400m² sàn, trọn gói: <strong>8 – 25 tỷ+</strong> tùy nội thất và hồ bơi. Thời gian 9–14 tháng. Ven kênh: địa chất bắt buộc.</p>
<h2>Hạng mục dễ phát sinh</h2>
<ul>
  <li>Hàng rào, cổng, sân, chiếu sáng ngoài.</li>
  <li>Hồ bơi / giếng trời lớn — chống thấm chuyên sâu.</li>
  <li>Cảnh quan cây — không gộp vào đơn giá thô.</li>
</ul>
${faqSection([
  { q: "Biệt thự mini 5×20 có tính biệt thự không?", a: "Thường là nhà phố sân vườn. Biệt thự đúng nghĩa cần lô và khoảng lùi. Chốt trên bản vẽ, không tranh cãi tên gọi." },
  { q: "Có tách thô / hoàn thiện không?", a: "Được nếu ghi hợp đồng. Biệt thự hay giãn ngân sách theo quý." },
])}
<p><strong>0909 075 668</strong> · <a href="/lien-he">Tư vấn</a></p>`,
  },

  "sua-dien-nuoc-nha-tphcm": {
    title: "Sửa Điện Nước Nhà TP.HCM — An Toàn & Báo Giá Theo Điểm",
    excerpt:
      "Sửa điện nước nhà TP.HCM: thay ống cũ, tăng tải, chống rò. Sao Khuê làm trọn gói, nghiệm thu an toàn.",
    metaTitle: "Sửa Điện Nước Nhà TP.HCM | An Toàn 2026",
    metaDescription:
      "Sửa điện nước nhà TP.HCM: thay dây, ống, bảng điện. Báo giá theo hạng mục, chống giật. 0909 075 668.",
    metaKeywords: "sửa điện nước nhà tphcm, thay điện nước nhà cũ, sửa ống nước",
    imageAlt: "Sửa điện nước nhà TP.HCM",
    content: `<h2>Sửa điện nước nhà TP.HCM — đừng trì hoãn</h2>
<p>Dây nhôm, ống sắt cũ, tủ điện thiếu chống giật: nguy cơ cháy và thấm. <strong>Sửa điện nước nhà TP.HCM</strong> nên làm đồng bộ khi <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a> — tránh đục tường hai lần. Gói lớn: <a href="/tin-tuc/cong-ty-sua-chua-nha-tphcm">công ty sửa chữa nhà</a>.</p>
<h2>Hạng mục thường gặp</h2>
<ul>
  <li>Thay dây + ổ cắt đạt tải máy lạnh / bếp từ.</li>
  <li>Ống PPR/UPVC, van khóa từng tầng.</li>
  <li>Bồn nước, bơm, chống rò WC.</li>
  <li>Tủ điện, chống giật, tiếp địa.</li>
</ul>
<h2>Báo giá tham khảo</h2>
<p>Nhà phố 2–3 tầng, điện nước cơ bản: <strong>80 – 250 triệu</strong> (số điểm + đục tường). Nhà đang ở: làm từng tầng, không cắt điện cả nhà trừ khi thay tủ.</p>
${faqSection([
  { q: "Chỉ thay dây, giữ ống nước cũ được không?", a: "Được nếu ống còn tốt. Ống sắt rỉ / nối kém: nên thay cùng lúc kẻo đục lại." },
  { q: "Có bảo hành điện nước không?", a: "Có theo biên bản nghiệm thu. Chống giật và chống thấm cổ ống ghi rõ thời hạn." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-nha-5-tang-tphcm": {
    title: "Xây Nhà 5 Tầng TP.HCM — Pháp Lý, Kết Cấu & Chi Phí",
    excerpt:
      "Xây nhà 5 tầng TP.HCM: quy hoạch, thang máy, PCCC. Sao Khuê tư vấn kỹ thuật trước khi ký HĐ.",
    metaTitle: "Xây Nhà 5 Tầng TP.HCM 2026 — Phép & Chi Phí",
    metaDescription:
      "Xây nhà 5 tầng TP.HCM: giấy phép, kết cấu, chi phí 5–9 tỷ, 7–11 tháng. Nhà thầu kinh nghiệm — 0909 075 668.",
    metaKeywords: "xây nhà 5 tầng tphcm, nhà phố 5 tầng, chi phí nhà 5 tầng",
    imageAlt: "Xây nhà 5 tầng TP.HCM",
    content: `<h2>Xây nhà 5 tầng TP.HCM — không chỉ “thêm một tầng”</h2>
<p><strong>Xây nhà 5 tầng TP.HCM</strong> thường cho thuê hoặc gia đình đông. Cần chiều cao tối đa theo quy hoạch, thang máy (nếu yêu cầu), PCCC, tải móng. Khung BTCT phải có bản vẽ kết cấu — không đúc thêm tầng lên nhà 4 tầng cũ khi chưa gia cố.</p>
<p>So sánh: <a href="/tin-tuc/xay-nha-4-tang-tphcm">4 tầng</a> · <a href="/tin-tuc/xay-nha-lech-tang-tphcm">lệch tầng</a> · <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">giấy phép xây dựng</a>.</p>
<h2>Chi phí &amp; thời gian</h2>
<p>Trọn gói ~120–180m² sàn: <strong>5 – 9 tỷ</strong>, thi công <strong>7 – 11 tháng</strong>. Một số phường (gần sân bay, lộ giới) không cho 5 tầng — tra trước khi vẽ.</p>
<h2>PCCC và thang máy</h2>
<p>Nhà nhiều phòng cho thuê dễ thuộc diện PCCC. Chừa hố thang từ móng nếu dự kiến lắp máy — khoan sau đắt và rủi ro kết cấu.</p>
${faqSection([
  { q: "Nhà phố hẻm 3m xây 5 tầng được không?", a: "Tùy GPXD, không tùy bề rộng hẻm. Hẻm hẹp còn hạn chế máy thi công." },
  { q: "Nâng nhà 4 tầng lên 5 tầng?", a: "Chỉ khi móng–khung đủ và có phép. Thường phải gia cố, không đổ thêm “cho vui”." },
])}
<p><strong>0909 075 668</strong></p>`,
  },

  "xay-shophouse-tphcm": {
    title: "Xây Shophouse TP.HCM — Mặt Tiền Kinh Doanh + Ở Trên Lầu",
    excerpt:
      "Xây shophouse TP.HCM: shop tầng trệt, ở tầng 2+. Sao Khuê trọn gói — tối ưu facade và điện tải.",
    metaTitle: "Xây Shophouse TP.HCM | Thiết Kế & Thi Công",
    metaDescription:
      "Xây shophouse TP.HCM: kinh doanh + ở, mặt tiền kính, điện tách, PCCC. Báo giá minh bạch — 0909 075 668.",
    metaKeywords: "xây shophouse tphcm, nhà phố kinh doanh, xây nhà mặt tiền kinh doanh",
    imageAlt: "Xây shophouse TP.HCM",
    content: `<h2>Xây shophouse TP.HCM — thiết kế cho thuê &amp; tự kinh doanh</h2>
<p>Shophouse: mặt bằng thương mại trệt + khu ở riêng lầu. <strong>Xây shophouse TP.HCM</strong> cần tách điện, âm thanh, mùi bếp; khách vào shop không xuyên khu sinh hoạt. Khác nhà trọ: <a href="/tin-tuc/xay-nha-cho-thue-tphcm">xây nhà cho thuê</a> · mặt tiền: <a href="/tin-tuc/xay-nha-mat-tien-tphcm">xây nhà mặt tiền</a>.</p>
<h2>Checklist shophouse</h2>
<ul>
  <li>Facade &amp; cửa kính theo nhận diện.</li>
  <li>Ống thoát / hút mùi quán ăn.</li>
  <li>WC khách tầng trệt.</li>
  <li>PCCC, lối thoát theo quy mô.</li>
  <li>Hợp đồng thuê vs sở hữu — ảnh hưởng vách ngăn.</li>
</ul>
<h2>Chi phí</h2>
<p>Hoàn thiện trệt kinh doanh thường +10–20% so nhà ở thuần. Điện 3 pha tách dòng. Q.5, Q.10, Q.1 hay kết hợp buôn bán — hỏi phường công năng khi xin phép.</p>
${faqSection([
  { q: "Shophouse có tính nhà ở không?", a: "Phần lầu ở là nhà ở; trệt thương mại có thể cần công năng phù hợp GPXD." },
  { q: "Làm xong mới xin mở quán được không?", a: "Đổi mặt đứng lớn nên hỏi trước. Làm xong mới xin dễ bị yêu cầu hoàn trả." },
])}
<p><strong>0909 075 668</strong> · <a href="/bao-gia">Báo giá</a></p>`,
  },
};

const BATCH2_DEPTH: Record<string, string> = {
  "cai-tao-nha-tphcm": `<h2>Nên cải tạo hay xây mới tại TP.HCM?</h2><p>Nhà phố 15–25 năm, móng cọc còn tốt, không lún lệch: cải tạo sâu thường đủ. Nhà cấp 4 nền yếu, nứt cột, muốn thêm 2 tầng: tính xây mới. Sao Khuê nói thẳng sau khảo sát — không bán gói cải tạo khi khung không cứu được. Geo: <a href="/tin-tuc/cai-tao-nha-binh-thanh">Bình Thạnh</a> · <a href="/tin-tuc/cai-tao-nha-go-vap">Gò Vấp</a> · <a href="/tin-tuc/cai-tao-nha-thu-duc">Thủ Đức</a>.</p>`,
  "chi-phi-cai-tao-nha-tphcm": `<h2>Ví dụ chi phí nhà phố 4×16m 2 tầng</h2><p>Làm mới sơn–lát–WC: 120–220 triệu. Sửa công năng (bếp, điện, chống thấm sân): 280–450 triệu. Đập thông + mặt tiền: 0,6–1,0 tỷ. Hẻm &lt; 3m cộng 8–12%. Đây là mốc 2026, không phải báo giá ký HĐ — số chính thức sau đo nhà.</p>`,
  "bao-gia-xay-nha-phan-tho-tphcm": `<h2>Nghiệm thu phần thô trước khi trả đợt</h2><p>Kiểm tra mác bê tông, đường kính thép, neo đai, chống thấm mái chờ, ổ điện nước đúng vị trí bản vẽ. Không thanh toán hết thô khi sân thượng chưa ngâm thử. Ảnh cốt thép lưu trong hồ sơ bảo hành kết cấu 10 năm.</p>`,
  "xay-nha-tron-goi-quan-2": `<h2>Móng ven sông Thảo Điền – An Khánh</h2><p>Đất yếu: cọc có thể 12–18% tổng giá. Chống sụt nhà liền kề khi đào hố — biên bản hiện trạng hàng xóm trước khởi công. Hoàn thiện khu này thường cao hơn Gò Vấp vì mặt đứng và vật tư.</p>`,
  "xay-nha-tron-goi-binh-duong": `<h2>Thuận An, Dĩ An — lịch đội từ Bình Thạnh</h2><p>Gói trọn gói nhà phố 3–4 tầng: khảo sát hẹn trước, ít phụ phí hơn gói sửa nhỏ. GPXD theo tỉnh Bình Dương. Case Thuận An trên mục công trình là tham chiếu quy mô, không phải cam kết giá copy-paste.</p>`,
  "xay-nha-quan-2": `<h2>Chọn nhà thầu xây tại Q.2</h2><p>Ưu tiên đơn vị am hiểu Thủ Đức sau sáp nhập, có phương án móng đất yếu và không hứa số tầng khi chưa tra quy hoạch. So với trọn gói: bài này giúp chốt thô hay trọn gói trước khi ký.</p>`,
  "xay-nha-tan-phu": `<h2>Thoát nước và cao độ nền Tân Phú</h2><p>Một số tuyến Lũy Bán Bích / Tân Sơn Nhì thấp hơn đường: trệt cần cao độ và chống thấm chân tường. Cấp 4 lên phố: khảo sát móng bắt buộc. Trọn gói chi tiết: trang xây nhà trọn gói Tân Phú.</p>`,
  "xay-nha-4-tang-tphcm": `<h2>4 tầng cho ở hay cho thuê?</h2><p>Ở gia đình: ưu tiên giếng trời, 1 bếp, 3–4 phòng ngủ. Cho thuê: WC từng tầng, điện tách, PCCC. Chừa hố thang máy từ móng nếu người già hoặc 5–7 năm nữa lắp máy. Không đục sàn sau.</p>`,
  "xay-nha-uy-tin-tphcm": `<h2>Hợp đồng mẫu nên có gì?</h2><p>Danh mục thép, xi măng, sơn, keo chống thấm; mốc nghiệm thu móng–thô–hoàn thiện; giữ lại 5–10% đến bàn giao; BH kết cấu 10 năm. Thiếu các dòng này thì “uy tín” chỉ là slogan.</p>`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `<h2>Lệch 3D và hiện trường</h2><p>3D hay vẽ ban công, giếng trời lớn hơn kết cấu cho phép. Gói một đầu mối buộc kiến trúc sư và giám sát cùng chịu: đổi chi tiết phải phụ lục, không để thợ “cải tiến” tại chỗ.</p>`,
  "cai-tao-nha-ong-tphcm": `<h2>Nhà ống 4m sâu 20m — thứ tự làm</h2><p>Chống thấm WC giữa nhà trước sơn. Giếng trời / cầu thang lấy sáng sau khi kỹ sư xác nhận dầm. Mặt tiền làm cuối khi tường khô. Ở được nếu chia nửa nhà; đập thông: chuyển 10–14 ngày.</p>`,
  "nang-tang-nha-tphcm": `<h2>Dấu hiệu không nên nâng tầng</h2><p>Nứt cột chéo, lún lệch cửa, móng gạch không cọc, GPXD hết tầng. Khi đó làm mới hoặc xây lại an toàn hơn. Sao Khuê từ chối nâng nếu khảo sát không đạt — không bán gói cho đủ hợp đồng.</p>`,
  "xay-nha-mat-tien-tphcm": `<h2>Điện và PCCC tầng trệt kinh doanh</h2><p>Tách tủ điện quán / nhà ở, chống giật, tải bếp–máy lạnh shop. WC khách không dùng chung WC gia đình. Mặt tiền kính: ghi hệ nhôm, bản lề, độ dày kính — đừng chỉ ghi “cửa kính” chung chung.</p>`,
  "xay-biet-thu-tphcm": `<h2>Biệt thự Thủ Đức vs Nhà Bè</h2><p>Thủ Đức: KDC quy chuẩn, facade đồng bộ. Nhà Bè: ven kênh, địa chất và cao độ chống ngập. Cùng chữ “biệt thự” nhưng móng và phụ phí khác nhau — không dùng một đơn giá m² cho cả hai.</p>`,
  "sua-dien-nuoc-nha-tphcm": `<h2>Nhà đang ở — cắt điện từng tầng</h2><p>Thay tủ điện: cắt cả nhà vài giờ, hẹn trước. Thay nhánh từng tầng: giữ tầng còn lại. Ống đứng WC: làm khi có WC phụ. Gói điện nước nên đi cùng chống thấm WC nếu đục sàn.</p>`,
  "xay-nha-5-tang-tphcm": `<h2>5 tầng và hạn chế chiều cao</h2><p>Gần sân bay Tân Bình, lộ giới đường lớn, khu quy hoạch thấp tầng: có thể không cho 5 tầng. Tra phường trước khi vẽ 3D. Cho thuê 5 tầng: hỏi PCCC sớm, đừng hoàn thiện xong mới biết thiếu thang thoát hiểm.</p>`,
  "xay-shophouse-tphcm": `<h2>Shophouse Q.5, Q.10, Q.1</h2><p>Mặt tiền kinh doanh + lầu ở: giờ ồn, xe hàng, PCCC. Hỏi công năng khi xin GPXD. Hoàn thiện trệt cao hơn nhà ở thuần 10–20%. Liên kết cải tạo quán: trang cải tạo nhà kết hợp kinh doanh.</p>`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

/** Khối 2 — đẩy money page batch 2 lên ngưỡng ~1.800 ký tự stripped. */
const BATCH2_DEPTH_MORE: Record<string, string> = {
  "xay-nha-mat-tien-tphcm": `<h2>Lộ giới, vỉa hè và bảng hiệu</h2><p>Nhà mặt tiền đường lớn: chỉ giới xây dựng, lam chắn mưa, giờ ồn. Shophouse xem <a href="/tin-tuc/xay-shophouse-tphcm">xây shophouse</a>. Cải tạo quán sẵn: <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">cải tạo kết hợp kinh doanh</a>.</p><h2>Chi phí mặt đứng so nhà hẻm</h2><p>Hoàn thiện facade thường +10–20% so nhà ống trong hẻm cùng số tầng. Báo tách dòng cửa kính, đá ốp, đèn biển — không nuốt vào m² trọn gói. Hotline <strong>0909 075 668</strong>.</p>`,
  "sua-dien-nuoc-nha-tphcm": `<h2>Dây nhôm và ống sắt nhà cũ</h2><p>Nhà trước năm 2000 hay dây nhôm + ống sắt rỉ. Nên thay đồng bộ khi cải tạo để khỏi đục hai lần. Mốc 80–250 triệu nhà phố 2–3 tầng tùy số điểm. Kết hợp <a href="/tin-tuc/chong-tham-tuong-wc-tphcm">chống thấm WC</a> nếu đục sàn.</p>`,
  "xay-nha-4-tang-tphcm": `<h2>Phép xây và PCCC nhà 4 tầng</h2><p>Số tầng theo quy hoạch phường, không theo kích thước lô. Gần sân bay / lộ giới có thể không cho 4–5 tầng. Tra phép trước khi vẽ 3D. Case: <a href="/cong-trinh/xay-nha-pho-binh-thanh">nhà phố Bình Thạnh</a>.</p>`,
  "xay-nha-tron-goi-quan-2": `<h2>Q.2 cũ sau sáp nhập Thủ Đức</h2><p>Xin phép theo phường mới. Đường lớn dễ xe; hẻm cũ vẫn hẹp. Chốt thô hay trọn gói trước khi ký — so <a href="/tin-tuc/xay-nha-quan-2">xây nhà Q.2</a>. Gọi <strong>0909 075 668</strong>.</p>`,
  "xay-nha-tan-phu": `<h2>Trọn gói vs thô tại Tân Phú</h2><p>Nhà phố 3–4 tầng hẻm xe hơi: trọn gói đỡ phát sinh hoàn thiện. Hẻm siêu hẹp: có thể tách thô rồi hoàn thiện sau. Chi tiết: <a href="/tin-tuc/xay-nha-tron-goi-tan-phu">xây nhà trọn gói Tân Phú</a>.</p>`,
  "xay-biet-thu-tphcm": `<h2>Hạng mục sân vườn và hồ</h2><p>Hàng rào, cổng, sân, hồ bơi, cây xanh tính riêng khỏi đơn giá thô. Hồ cần chống thấm chuyên sâu. Thời gian 9–14 tháng với biệt thự 200–400m² sàn. Case: <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a>.</p>`,
  "xay-shophouse-tphcm": `<h2>Mặt bằng trệt quán</h2><p>Cửa kính, điện 3 pha, hút mùi, WC khách, sàn chống trơn. Lầu ở nên có lối riêng nếu được. Cải tạo nhà sẵn: <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">cải tạo kết hợp kinh doanh</a>.</p>`,
  "xay-nha-5-tang-tphcm": `<h2>Kết cấu và thang máy 5 tầng</h2><p>Tải lớn hơn 3 tầng: móng cọc, giằng, chống thấm sân bắt buộc. Chừa hố thang từ móng. So sánh: <a href="/tin-tuc/xay-nha-4-tang-tphcm">xây nhà 4 tầng</a>.</p>`,
  "xay-nha-tron-goi-binh-duong": `<h2>Khác đơn giá TP.HCM chỗ nào?</h2><p>Nhân công và vận chuyển khác; hoàn thiện có thể rẻ hơn nội thành nếu chọn vật tư địa phương. Không áp bảng m² Sài Gòn lên lô Dĩ An / Thuận An.</p>`,
  "cai-tao-nha-ong-tphcm": `<h2>Lấy sáng nhà ống hẹp</h2><p>Giếng 1,2–2,0m, màu sáng, cửa kính lầu. Không đục dầm chui. Xem <a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">cải tạo giếng trời</a> · <a href="/tin-tuc/cai-tao-gac-lung-nha-pho-tphcm">gác lửng</a>.</p>`,
  "nang-tang-nha-tphcm": `<h2>Nâng 1 tầng nhà phố 3 tầng cũ</h2><p>Kiểm tra cột–móng, gia cố nếu thiếu, xin phép. Thời gian 2–4 tháng tùy gia cố. Không đổ tum vượt phép. Gọi <strong>0909 075 668</strong>.</p>`,
  "xay-nha-uy-tin-tphcm": `<h2>Dấu hiệu nhà thầu rủi ro</h2><p>Báo giá miệng không list vật tư, đòi 50% trước khi đào móng, không có địa chỉ văn phòng, không cho xem công trình đang làm. Sao Khuê: 245/8 Bình Lợi, khảo sát miễn phí, hợp đồng chi tiết.</p>`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `<h2>Quy trình thiết kế kèm thi công</h2><p>Khảo sát đất → phương án → bản vẽ xin phép → móng–thô–hoàn thiện. Chủ nhà duyệt vật tư trước khi mua. Landing: <a href="/xay-nha">/xay-nha</a> · <a href="/thiet-ke">/thiet-ke</a>.</p>`,
  "xay-nha-quan-2": `<h2>Hẻm vs đường lớn tại Q.2</h2><p>Đường xe hơi giảm logistics. Hẻm 3m: máy cọc nhỏ hoặc khoan nhồi. Gửi ảnh hẻm + sổ khi gọi <strong>0909 075 668</strong>.</p>`,
  "chi-phi-cai-tao-nha-tphcm": `<h2>Chi phí ẩn hay bị bỏ sót</h2><p>Giàn giáo mặt tiền, xe phế thải giờ hạn chế, che chắn nhà đang ở, thay ống đứng khi đục WC. Sao Khuê liệt kê phụ lục, không phát sinh miệng cuối gói.</p>`,
  "bao-gia-xay-nha-phan-tho-tphcm": `<h2>Thô chưa gồm những gì?</h2><p>Cọc/khoan nhồi, hoàn thiện sơn–lát–cửa, nội thất gỗ, điều hòa. Hẻm hẹp cộng nhân công khiêng. Xem <a href="/tin-tuc/thi-cong-phan-tho-tphcm">thi công phần thô</a>.</p>`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH_MORE)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

const BATCH2_META_DESC: Record<string, string> = {
  "xay-nha-mat-tien-tphcm":
    "Xây nhà mặt tiền TP.HCM: kinh doanh trệt + ở lầu, facade, điện tách, PCCC, lộ giới. Trọn gói Sao Khuê khảo sát miễn phí — 0909 075 668.",
  "sua-dien-nuoc-nha-tphcm":
    "Sửa điện nước nhà TP.HCM: thay dây nhôm, ống sắt, tủ điện chống giật. Nhà đang ở làm từng tầng, báo giá theo điểm — 0909 075 668.",
  "xay-nha-4-tang-tphcm":
    "Xây nhà 4 tầng TP.HCM: chi phí 3,8–8 tỷ, tiến độ 5–8 tháng, kết cấu–PCCC, chừa hố thang. Trọn gói BH 10 năm — 0909 075 668.",
  "xay-nha-tron-goi-quan-2":
    "Xây nhà trọn gói Quận 2 / Thủ Đức: móng đất yếu Thảo Điền, hẻm An Khánh, báo giá 2026 minh bạch — 0909 075 668.",
  "xay-nha-tan-phu":
    "Xây nhà Tân Phú: cao độ nền chống ngập, thoát nước, hẻm hẹp, trọn gói hoặc phần thô. Khảo sát miễn phí — 0909 075 668.",
  "xay-biet-thu-tphcm":
    "Xây biệt thự TP.HCM: sân vườn, hồ bơi, kết cấu Thủ Đức / Nhà Bè. Báo giá 8–25 tỷ+, BH kết cấu 10 năm — 0909 075 668.",
  "xay-shophouse-tphcm":
    "Xây shophouse TP.HCM: trệt quán, lầu ở, điện 3 pha, PCCC, cửa kính mặt tiền. Trọn gói Sao Khuê — 0909 075 668.",
  "xay-nha-5-tang-tphcm":
    "Xây nhà 5 tầng TP.HCM: tra quy hoạch chiều cao, PCCC, thang máy, móng cọc. Khảo sát phép trước khi vẽ — 0909 075 668.",
  "xay-nha-tron-goi-binh-duong":
    "Xây nhà trọn gói Bình Dương (Thuận An, Dĩ An): GPXD tỉnh, đơn giá riêng, không copy m² TP.HCM — 0909 075 668.",
  "cai-tao-nha-ong-tphcm":
    "Cải tạo nhà ống TP.HCM: giếng trời, WC giữa nhà, mặt tiền, ở được khi chia khu. Khảo sát kết cấu — 0909 075 668.",
  "nang-tang-nha-tphcm":
    "Nâng tầng nhà TP.HCM: khảo sát móng–cột, xin phép, gia cố. Từ chối nếu khung yếu. Sao Khuê — 0909 075 668.",
  "xay-nha-uy-tin-tphcm":
    "Xây nhà uy tín TP.HCM: hợp đồng list vật tư, nghiệm thu từng mốc, BH kết cấu 10 năm. Văn phòng Bình Lợi — 0909 075 668.",
  "thiet-ke-thi-cong-nha-pho-tphcm":
    "Thiết kế thi công nhà phố TP.HCM một đầu mối: 3D khớp kết cấu, phụ lục khi đổi, BH 10 năm — 0909 075 668.",
  "xay-nha-quan-2":
    "Xây nhà Quận 2 / Thủ Đức: đất yếu, hẻm 3m, thô hoặc trọn gói. Khảo sát miễn phí — 0909 075 668.",
};

for (const [slug, desc] of Object.entries(BATCH2_META_DESC)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.metaDescription = desc;
}

const BATCH2_DEPTH_3: Record<string, string> = {
  "sua-dien-nuoc-nha-tphcm": `<h2>Khi nào nên thay cả hệ thống?</h2><p>Chập từng nhánh, aptomat nhảy liên tục, ống nhỏ giọt trong tường: thay từng điểm chỉ trì hoãn. Nhà phố 3 tầng dây nhôm + ống sắt: gói đồng bộ rẻ hơn đục ba lần. Sao Khuê lập sơ đồ tủ điện trước khi đục, nghiệm thu chống giật. Gói lớn ghép <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a>.</p>`,
  "xay-nha-tron-goi-quan-2": `<h2>Ngân sách trọn gói Q.2 / Thảo Điền</h2><p>Lô 5×20 đường lớn khác hẻm An Khánh. Cọc ven sông tách dòng. Hoàn thiện mặt đứng khu này hay chọn cửa kính lớn — báo phụ lục, không gộp m². Khảo sát miễn phí: gửi sổ + ảnh hẻm, gọi <strong>0909 075 668</strong>.</p>`,
  "xay-nha-4-tang-tphcm": `<h2>Tiến độ nhà 4 tầng thực tế</h2><p>Móng–đài 3–5 tuần (cọc thêm nếu nền yếu). Thô mỗi sàn 2–3 tuần. Hoàn thiện 6–10 tuần. Tổng 5–8 tháng nhà phố, chưa kể phép chậm. Mùa mưa đổ bê tông có thể dời ngày — HĐ ghi ngày làm việc.</p>`,
  "cai-tao-nha-ong-tphcm": `<h2>Nhà ống đang ở — chia khu thi công</h2><p>Giữ 1 WC và lối ra hẻm. Sơn–lát từng tầng. Đục giếng / thông tầng: chuyển 10–14 ngày. Hẻm &lt; 3m: xe phế thải nhỏ, phụ phí ghi rõ. Landing: <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "xay-shophouse-tphcm": `<h2>Xin phép shophouse khác nhà ở thuần</h2><p>Đổi công năng trệt quán: hỏi phường khi nộp GPXD. Biển hiệu, vỉa hè, giờ ồn. Không hoàn thiện kính xong mới xin. Sao Khuê tư vấn hiện trạng, không thi công vượt phép.</p>`,
  "xay-nha-5-tang-tphcm": `<h2>Chi phí 5 tầng so 4 tầng</h2><p>Thêm một sàn + tải móng + PCCC. Đừng lấy đơn giá 3 tầng nhân 5/3. Cho thuê: WC từng tầng, điện tách. Tra phép trước. So <a href="/tin-tuc/xay-nha-4-tang-tphcm">4 tầng</a> · <a href="/tin-tuc/xay-nha-lech-tang-tphcm">lệch tầng</a>.</p>`,
  "xay-nha-tan-phu": `<h2>Hẻm Tân Phú và giờ đổ bê tông</h2><p>Nhiều hẻm xe máy: bơm từ mặt tiền, ca sớm. Tuyến ngập: cao độ trệt + van một chiều thoát. Cấp 4 lên 3 tầng: khảo sát móng bắt buộc, không “đổ thêm” lên tường gạch.</p>`,
  "xay-nha-quan-2": `<h2>Thô hay trọn gói tại Q.2?</h2><p>Trọn gói khi muốn một đầu mối facade + chống thấm. Tách thô nếu nội thất cao cấp chọn sau. Đất yếu: chốt cọc trước khi so m². Xem <a href="/tin-tuc/xay-nha-tron-goi-quan-2">trọn gói Q.2</a>.</p>`,
  "nang-tang-nha-tphcm": `<h2>Hồ sơ nâng tầng nên có</h2><p>GPXD cũ, ảnh nứt, đo lún (nếu có), bản vẽ gia cố. Phường có thể yêu cầu thẩm tra kết cấu. Sao Khuê không đổ sàn thêm khi chưa có phương án kỹ sư. Liên hệ 245/8 Bình Lợi.</p>`,
  "xay-biet-thu-tphcm": `<h2>Chọn nhà thầu biệt thự</h2><p>Cần đội am hiểu địa chất ven kênh và KDC. HĐ tách sân–hồ–nhà. BH kết cấu 10 năm. Không nhận “giá nhà phố” cho biệt thự. Case: <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">Thủ Đức</a> · <a href="/tin-tuc/xay-nha-nha-be">Nhà Bè</a>.</p>`,
  "xay-nha-tron-goi-binh-duong": `<h2>Tiến độ đội thi công Bình Dương</h2><p>Khảo sát hẹn trước (không drop-in như nội thành). Gói 3–4 tầng: lịch đổ bê tông theo xa lộ. GPXD tỉnh khác TP.HCM — chốt hồ sơ trước đào móng.</p>`,
  "xay-nha-mat-tien-tphcm": `<h2>Nhà mặt tiền cho thuê vs ở</h2><p>Cho thuê trệt: PCCC, WC khách, điện 3 pha. Ở thuần: facade vẫn cần chỉ giới nhưng tải điện thấp hơn. Đừng dùng một bản vẽ cho cả hai. Cải tạo sẵn: <a href="/tin-tuc/cai-tao-mat-tien-nha-tphcm">cải tạo mặt tiền</a>.</p>`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `<h2>Một HĐ thiết kế–thi công lợi gì?</h2><p>Tránh KTS vẽ 3D không thi công được, thầu cắt chi tiết. Đổi cửa/giếng giữa chừng: phụ lục giá. BH kết cấu 10 năm khi Sao Khuê thi công đúng bản vẽ duyệt.</p>`,
  "xay-nha-uy-tin-tphcm": `<h2>Xem công trình đang làm</h2><p>Nhà thầu uy tín cho xem hiện trường (hẹn trước). Kiểm tra cốt thép, nhật ký, biên bản nghiệm thu. Văn phòng 245/8 Bình Lợi. Không chuyển khoản lớn trước khi có HĐ và địa chỉ rõ.</p>`,
  "bao-gia-xay-nha-phan-tho-tphcm": `<h2>Bảng thô 2026 — đọc đúng</h2><p>3,5–5,5 triệu/m² nhà phố thường chưa cọc, chưa hoàn thiện. Hẻm hẹp + nền yếu làm m² “rẻ” trên mạng thành đắt thật. Máy tính <a href="/bao-gia">/bao-gia</a> chỉ mốc; HĐ sau khảo sát.</p>`,
  "chi-phi-cai-tao-nha-tphcm": `<h2>Cách chốt ngân sách cải tạo</h2><p>Gửi ảnh hiện trạng + việc muốn làm (WC, giếng, mặt tiền). Sao Khuê tách bắt buộc / hoãn được. Đừng chốt “một cục” khi chưa đo nhà. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH_3)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

for (const page of Object.values(moneyPageOverridesBatch2)) {
  if (page.metaDescription.length >= 120) continue;
  const base = page.metaDescription.replace(/\s*[—–-]\s*0909.*$/u, "").trim();
  page.metaDescription = `${base} Khảo sát miễn phí, báo giá minh bạch — 0909 075 668.`.slice(0, 160);
}

/** Khối 4 — bổ sung FAQ ngắn + đoạn thực địa để vượt ngưỡng ~1.800 ký tự. */
const BATCH2_DEPTH_4: Record<string, string> = {
  "cai-tao-nha-tphcm": `${faqSection([
    { q: "Cải tạo nhà TP.HCM mất bao lâu?", a: "Làm mới nhẹ 2–4 tuần; cải tạo sâu 1–3 tháng; nâng tầng / gia cố dài hơn tùy khảo sát móng." },
    { q: "Có hỗ trợ xin phép cải tạo không?", a: "Khi đổi mặt đứng lớn, đập tường chịu lực hoặc nâng tầng — Sao Khuê tư vấn hồ sơ theo phường trong phạm vi HĐ." },
  ])}`,
  "chi-phi-cai-tao-nha-tphcm": `${faqSection([
    { q: "Chi phí cải tạo có bao gồm nội thất không?", a: "Thường không. Gói cải tạo gồm xây–hoàn thiện theo HĐ; tủ bếp, sofa, điều hòa tính riêng trừ khi ghi rõ." },
  ])}<h2>So sánh nhanh với xây mới</h2><p>Cải tạo sâu nhà phố 2 tầng thường tiết kiệm 30–50% so xây lại nếu móng còn tốt. Khi nứt cột / lún lệch: tính xây mới an toàn hơn — Sao Khuê nói thẳng sau khảo sát.</p>`,
  "bao-gia-xay-nha-phan-tho-tphcm": `${faqSection([
    { q: "Phần thô có bảo hành không?", a: "Kết cấu theo HĐ (thường tới 10 năm khi Sao Khuê thi công thô). Hoàn thiện sau do bên khác không thuộc BH thô." },
  ])}`,
  "xay-nha-tron-goi-quan-2": `${faqSection([
    { q: "Quận 2 cũ còn gọi Q.2 trên giấy phép không?", a: "Xin phép theo tên phường thuộc TP. Thủ Đức. Tra đúng phường trước khi nộp hồ sơ." },
  ])}`,
  "xay-nha-tron-goi-binh-duong": `${faqSection([
    { q: "Thi công Bình Dương có phụ phí đi lại không?", a: "Gói nhà phố 3–4 tầng thường gộp lịch đội; sửa nhỏ / phát sinh giữa chừng có thể tính công tác — ghi rõ khi báo giá." },
  ])}`,
  "xay-nha-quan-2": `${faqSection([
    { q: "Nên ký thô hay trọn gói tại Q.2?", a: "Trọn gói khi muốn một đầu mối facade + chống thấm. Tách thô nếu nội thất cao cấp chọn sau vài tháng." },
  ])}`,
  "xay-nha-tan-phu": `${faqSection([
    { q: "Nhà Tân Phú khu thấp có cần cao độ nền?", a: "Có — một số tuyến thấp hơn đường: nâng trệt và chống thấm chân tường để giảm ngập." },
  ])}`,
  "xay-nha-4-tang-tphcm": `${faqSection([
    { q: "Nhà 4 tầng có bắt buộc thang máy không?", a: "Không bắt buộc nhà ở riêng lẻ, nhưng nên chừa hố từ móng nếu người già hoặc lắp sau 5–7 năm." },
  ])}`,
  "xay-nha-uy-tin-tphcm": `${faqSection([
    { q: "Làm sao kiểm tra nhà thầu trước khi ký?", a: "Xem HĐ list vật tư, địa chỉ văn phòng, công trình đang làm, biên bản nghiệm thu. Tránh đặt cọc lớn trước khi có HĐ." },
  ])}`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `${faqSection([
    { q: "Đổi thiết kế giữa thi công có được không?", a: "Được qua phụ lục giá. Đổi cột–dầm sau đổ bê tông rất đắt — nên chốt bản vẽ trước khởi công." },
  ])}`,
  "cai-tao-nha-ong-tphcm": `${faqSection([
    { q: "Cải tạo nhà ống có ở được trong lúc sửa không?", a: "Sơn–lát–WC từng khu: ở được. Đập thông / giếng trời lớn: nên chuyển tạm 10–14 ngày." },
  ])}`,
  "nang-tang-nha-tphcm": `${faqSection([
    { q: "Khi nào Sao Khuê từ chối nâng tầng?", a: "Khi khảo sát thấy móng–cột không đủ, nứt lệch, hoặc vượt quy hoạch. Khi đó tư vấn làm mới / xây lại thay vì bán gói rủi ro." },
  ])}`,
  "xay-nha-mat-tien-tphcm": `${faqSection([
    { q: "Nhà mặt tiền kinh doanh cần xin gì thêm?", a: "Hỏi công năng khi GPXD, biển hiệu / vỉa hè, PCCC nếu quán đông khách. Điện tách quán–nhà ở." },
  ])}`,
  "xay-biet-thu-tphcm": `${faqSection([
    { q: "Báo giá biệt thự có gồm sân vườn không?", a: "Thường tách: nhà thô–hoàn thiện một gói; sân, cổng, hồ bơi phụ lục. Hỏi rõ trước khi so m²." },
  ])}`,
  "sua-dien-nuoc-nha-tphcm": `${faqSection([
    { q: "Sửa điện nước nhà đang ở mất bao lâu?", a: "Thay nhánh từng tầng: vài ngày đến 2 tuần. Đồng bộ cả nhà phố 3 tầng: thường 1–3 tuần tùy số điểm." },
  ])}`,
  "xay-nha-5-tang-tphcm": `${faqSection([
    { q: "Có khu nào không cho xây 5 tầng?", a: "Gần sân bay, lộ giới lớn, khu quy hoạch thấp tầng. Tra phường trước khi vẽ 3D 5 tầng." },
  ])}`,
  "xay-shophouse-tphcm": `${faqSection([
    { q: "Shophouse khác nhà ở thuần chỗ nào trên HĐ?", a: "Trệt quán: điện 3 pha, WC khách, sàn chống trơn, PCCC. Lầu ở nên có lối riêng nếu được — ghi rõ công năng." },
  ])}`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH_4)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

/** Khối 5 — đoạn thực địa dài hơn để vượt ~1.800 ký tự stripped. */
const BATCH2_DEPTH_5: Record<string, string> = {
  "xay-nha-5-tang-tphcm": `<h2>Checklist trước khi chốt 5 tầng</h2><p>Tra quy hoạch chiều cao phường, hỏi PCCC nếu cho thuê, chốt cọc/móng với kỹ sư, chừa hố thang máy từ đầu. Đừng duyệt 3D 5 tầng khi chưa có xác nhận phép — tránh đập bỏ tầng tum. So sánh ngân sách với <a href="/tin-tuc/xay-nha-4-tang-tphcm">nhà 4 tầng</a> trước khi vay thêm một sàn.</p>`,
  "cai-tao-nha-ong-tphcm": `<h2>Thứ tự hạng mục nhà ống đang ở</h2><p>Chống thấm WC giữa nhà → điện nước âm → lát/sơn → mặt tiền cuối. Giữ một lối thoát hiểm và một WC dùng được. Hẻm &lt; 3m: phụ phí xe phế thải ghi phụ lục. Landing Ads: <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "xay-nha-quan-2": `<h2>Gửi hồ sơ khảo sát Q.2 / Thủ Đức</h2><p>Ảnh mặt tiền + hẻm, sổ đỏ (che số nếu cần), số tầng mong muốn, thô hay trọn gói. Sao Khuê ước lượng trong ngày làm việc rồi hẹn đo đất. Hotline <strong>0909 075 668</strong> · văn phòng Bình Lợi.</p>`,
  "xay-nha-tan-phu": `<h2>Cấp 4 lên phố tại Tân Phú</h2><p>Khảo sát móng bắt buộc trước khi “đổ thêm tầng”. Nhiều nhà cấp 4 tường gạch không đủ cho 3–4 tầng. Phương án: gia cố hoặc tháo dựng lại trọn gói — Sao Khuê tư vấn sau đo nhà, không bán gói nâng khi khung yếu.</p>`,
  "xay-nha-4-tang-tphcm": `<h2>Cho thuê từng tầng nhà 4 tầng</h2><p>Nên tách điện từng tầng, WC riêng, lối đi chung rõ. Hỏi PCCC sớm. Nội thất phòng trọ khác nhà ở gia đình — báo phụ lục hoàn thiện. Case tham chiếu: <a href="/cong-trinh/xay-nha-pho-binh-thanh">nhà phố Bình Thạnh</a>.</p>`,
  "xay-biet-thu-tphcm": `<h2>Tiến độ biệt thự thực tế</h2><p>Nhà 200–400m² sàn thường 9–14 tháng gồm phép, móng, thô, hoàn thiện và sân. Hồ bơi / hàng rào đá tự nhiên kéo dài thêm. HĐ nên ghi mốc nghiệm thu từng khối (nhà / sân / hồ) để chủ nhà kiểm soát dòng tiền.</p>`,
  "xay-nha-tron-goi-quan-2": `<h2>Vật tư facade khu Thảo Điền</h2><p>Cửa kính lớn, đá ốp, đèn âm — báo tách dòng, không nuốt vào m² trọn gói. Đất yếu: cọc 12–18% tổng. Biên bản hiện trạng hàng xóm trước đào hố. Gọi <strong>0909 075 668</strong>.</p>`,
  "xay-shophouse-tphcm": `<h2>Giờ ồn và hàng xóm shophouse</h2><p>Quán mở sớm/khuya: cách âm sàn trệt–lầu 1, cửa kính kín gió. Xe hàng không chắn hẻm. Hỏi công năng khi xin GPXD — làm xong mới xin dễ bị yêu cầu hoàn trả mặt đứng.</p>`,
  "xay-nha-tron-goi-binh-duong": `<h2>Case Thuận An / Dĩ An</h2><p>Lô KDC đường xe hơi giảm logistics; GPXD tỉnh Bình Dương khác TP.HCM. Đơn giá hoàn thiện có thể thấp hơn nội thành nếu chọn vật tư địa phương — không copy bảng m² Sài Gòn. Xem <a href="/cong-trinh/xay-nha-pho-thuan-an">công trình Thuận An</a>.</p>`,
  "nang-tang-nha-tphcm": `<h2>Chi phí nâng 1 tầng tham khảo</h2><p>Gia cố cột–móng + sàn mới + hoàn thiện tum: thường vài trăm triệu đến hơn 1 tỷ tùy nhà phố 3–4 tầng cũ. Số sau khảo sát; không báo “giá m² nâng” khi chưa khoan kiểm tra.</p>`,
  "sua-dien-nuoc-nha-tphcm": `<h2>Nghiệm thu điện nước</h2><p>Đo chống giật, thử áp lực nước, chụp ống trước khi trát lại tường. Giữ sơ đồ tủ điện trong hồ sơ bảo hành. Gói lớn nên ghép <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a> nếu đục nhiều.</p>`,
  "xay-nha-mat-tien-tphcm": `<h2>Bảng hiệu và chỉ giới</h2><p>Biển hộp đèn, lam chắn mưa, bậc cấp không lấn lộ giới. Vỉa hè / cổng: hỏi phường. Cải tạo mặt đứng sẵn: <a href="/tin-tuc/cai-tao-mat-tien-nha-tphcm">cải tạo mặt tiền</a>.</p>`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `<h2>Bàn giao hồ sơ khi một HĐ</h2><p>Chủ nhà nhận bản vẽ as-built, danh mục vật tư đã dùng, biên bản nghiệm thu và cam kết BH kết cấu 10 năm. Đổi cửa/giếng giữa chừng: phụ lục trước khi thợ làm.</p>`,
  "xay-nha-uy-tin-tphcm": `<h2>Cam kết Sao Khuê trên HĐ</h2><p>List thép–xi măng–sơn–keo chống thấm; nghiệm thu móng–thô–hoàn thiện; giữ lại % đến bàn giao; địa chỉ 245/8 Bình Lợi. Không nhận đặt cọc lớn trước khi có HĐ và lịch khảo sát.</p>`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH_5)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

/** Khối 6 — đẩy 3 money page còn sát ngưỡng 1.800 ký tự. */
const BATCH2_DEPTH_6: Record<string, string> = {
  "cai-tao-nha-ong-tphcm": `<h2>Ngân sách cải tạo nhà ống tham khảo</h2><p>Sơn–lát–WC: vài chục đến hơn trăm triệu. Đập thông + giếng + mặt tiền: thường 0,4–1,2 tỷ tùy độ sâu. Số sau đo nhà — không chốt “một cục” qua Zalo. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "xay-nha-tron-goi-quan-2": `<h2>Checklist khởi công Q.2 / Thủ Đức</h2><p>GPXD đúng phường mới, biên bản hàng xóm trước đào móng, phương án cọc nếu đất yếu, list vật tư facade. Không đổ móng khi chưa chốt các điểm này. Hotline <strong>0909 075 668</strong>.</p>`,
};

for (const [slug, extra] of Object.entries(BATCH2_DEPTH_6)) {
  const page = moneyPageOverridesBatch2[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}


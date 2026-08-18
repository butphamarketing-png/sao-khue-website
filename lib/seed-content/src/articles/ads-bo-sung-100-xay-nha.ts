/**
 * Money pages Ads — cụm 100 từ khóa bổ sung (Xây nhà).
 */
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";

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

function article(_slug: string, focus: string, rest: Omit<SeoArticle, "imageAlt" | "imageCaption">): SeoArticle {
  return {
    ...rest,
    imageAlt: `${focus} — Kiến Trúc Sao Khuê`,
    imageCaption: `${focus} do Kiến Trúc Sao Khuê thiết kế / thi công`,
  };
}

function imgs(slug: string, focus: string) {
  return {
    a: imageFigure(slugImage(slug, 0), focus, 1),
    b: imageFigure(slugImage(slug, 1), focus, 2),
    c: imageFigure(slugImage(slug, 2), focus, 3),
  };
}

const xayNhaChiaKhoaTraoTay = (() => {
  const slug = "xay-nha-chia-khoa-trao-tay-tphcm";
  const focus = "xây nhà chìa khóa trao tay";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Chìa Khóa Trao Tay TP.HCM — Công Ty & Nhà Thầu",
    excerpt:
      "Xây nhà chìa khóa trao tay TP.HCM: một đầu mối từ thiết kế đến bàn giao. Công ty xây nhà, nhà thầu nhà phố — Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Chìa Khóa Trao Tay TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà chìa khóa trao tay, công ty xây nhà TP.HCM, nhà thầu xây nhà phố. BH kết cấu 10 năm — 0909 075 668.",
    metaKeywords:
      "xây nhà chìa khóa trao tay tphcm, xây nhà chìa khóa trao tay giá rẻ tphcm, công ty xây nhà tphcm, nhà thầu xây nhà phố tphcm, xây nhà trọn gói tphcm",
    content: `
<h2>Xây nhà chìa khóa trao tay là gì?</h2>
<p><strong>Xây nhà chìa khóa trao tay</strong> là gói một nhà thầu chịu từ khảo sát, thiết kế, giấy phép (hỗ trợ), <strong>thi công nhà phố TP.HCM</strong> phần thô + hoàn thiện cơ bản đến bàn giao chìa khóa. Chủ nhà không tự điều phối nhiều đội. Đây là mô hình <strong>công ty xây nhà TP.HCM</strong> làm đúng nghĩa — khác đội thô xong “bỏ của chạy lấy người”.</p>
<p><strong>Nhà thầu xây nhà phố TP.HCM</strong> cần am hiểu hẻm, địa chất và quy hoạch quận. Sao Khuê (245/8 Bình Lợi, Bình Thạnh) nhận Bình Thạnh, Thủ Đức, Gò Vấp, Quận 7 và nội thành.</p>
${homeLinkParagraph()}
${a}

<h2>Gói chìa khóa trao tay gồm / không gồm</h2>
<ul>
  <li><strong>Gồm:</strong> móng–khung, xây tô, điện nước âm, chống thấm, sơn, lát, cửa, thiết bị WC theo danh mục, dọn bàn giao.</li>
  <li><strong>Tùy hợp đồng:</strong> nội thất gỗ, smart home, hồ bơi, thang máy.</li>
  <li><strong>Thường tách:</strong> lệ phí nhà nước, ở tạm, vật tư chủ nhà tự mua ngoài list.</li>
</ul>
<p>So sánh nhà thầu: <a href="/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm">nhà thầu xây nhà trọn gói</a> · dịch vụ <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói TP.HCM</a>.</p>
${b}

<h2>Xây nhà trọn gói theo quận (Ads geo)</h2>
<p>Sao Khuê đã có trang riêng: <a href="/tin-tuc/xay-nha-tron-goi-binh-thanh">xây nhà trọn gói Bình Thạnh</a> · <a href="/tin-tuc/xay-nha-tron-goi-thu-duc">Thủ Đức</a> · <a href="/tin-tuc/xay-nha-tron-goi-go-vap">Gò Vấp</a> · <a href="/tin-tuc/xay-nha-tron-goi-quan-7">Quận 7</a>. Landing Ads: <a href="/xay-nha">/xay-nha</a>.</p>

<h2>Đơn giá chìa khóa trao tay 2026</h2>
<table>
  <thead><tr><th>Loại</th><th>Mốc trọn gói</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng ~80m² sàn</td><td>3,2 – 4,5 tỷ</td></tr>
    <tr><td>Nhà phố 4 tầng ~100m² sàn</td><td>4,0 – 5,8 tỷ</td></tr>
    <tr><td>Hẻm hẹp / nền yếu</td><td>+5 – 15%</td></tr>
  </tbody>
</table>
<p>Bảng chi tiết năm: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá xây nhà 2026</a>.</p>
${c}
${faqSection([
  {
    q: "Công ty xây nhà TP.HCM khác nhà thầu cá nhân thế nào?",
    a: "Công ty có MST, hợp đồng, bảo hành, giám sát. Cá nhân rẻ hơn nhưng rủi ro khi thấm, nứt sau bàn giao.",
  },
  {
    q: "Thi công nhà phố TP.HCM mất bao lâu?",
    a: "Nhà 3–4 tầng thường 5–8 tháng tùy mùa mưa và hoàn thiện. Ghi mốc trong hợp đồng.",
  },
  {
    q: "Xây nhà chìa khóa trao tay TP.HCM khác xây nhà trọn gói thế nào?",
    a: "Cùng một mô hình: một đầu mối từ thiết kế đến bàn giao. Trang dịch vụ: xây nhà trọn gói TP.HCM. Gói ngân sách: xây nhà trọn gói giá rẻ TP.HCM.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Xây nhà chìa khóa trao tay</strong> chỉ an toàn khi hợp đồng ghi vật tư, mốc nghiệm thu và bảo hành. Gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const baoGiaXayNha2026 = (() => {
  const slug = "bao-gia-xay-nha-2026";
  const focus = "báo giá xây nhà 2026";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Báo Giá Xây Nhà 2026 TP.HCM — Đơn Giá, Dự Toán, Phần Thô",
    excerpt:
      "Báo giá xây nhà 2026, đơn giá xây nhà, giá xây nhà trọn gói TP.HCM, bảng dự toán và báo giá phần thô. Sao Khuê — 0909 075 668.",
    metaTitle: "Báo Giá Xây Nhà 2026 TP.HCM | Sao Khuê",
    metaDescription:
      "Báo giá xây nhà 2026, chi phí xây nhà phố, đơn giá, bảng dự toán, phần thô TP.HCM. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "báo giá xây nhà 2026, đơn giá xây nhà 2026 tphcm, giá xây nhà trọn gói tphcm, chi phí xây nhà phố tphcm, bảng dự toán xây nhà tphcm, báo giá xây nhà phần thô",
    content: `
<h2>Báo giá xây nhà 2026 tại TP.HCM đọc thế nào?</h2>
<p><strong>Báo giá xây nhà 2026</strong> chỉ có ý nghĩa khi ghi rõ: tính m² sàn thế nào, phần thô hay trọn gói, thương hiệu thép–xi măng–sơn, và hạng mục ngoài. <strong>Đơn giá xây nhà 2026 TP.HCM</strong> trên mạng thường là mốc; <strong>bảng dự toán xây nhà TP.HCM</strong> của Sao Khuê tách từng dòng sau khảo sát đất.</p>
<p><strong>Chi phí xây nhà phố TP.HCM</strong> đội vì hẻm, nền yếu, giấy phép. <strong>Giá xây nhà trọn gói TP.HCM</strong> cao hơn phần thô 35–55% vì gồm hoàn thiện cơ bản.</p>
${homeLinkParagraph()}
${a}

<h2>Đơn giá xây nhà 2026 (tham khảo)</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá</th><th>Phạm vi</th></tr></thead>
  <tbody>
    <tr><td>Xây nhà phần thô</td><td>3,5 – 5,5 triệu/m²</td><td>Móng, khung, tường, mái, điện nước chờ</td></tr>
    <tr><td>Trọn gói cơ bản</td><td>6,5 – 9,5 triệu/m²</td><td>Thô + sơn, lát, cửa, WC</td></tr>
    <tr><td>Trọn gói khá</td><td>9,5 – 13 triệu/m²</td><td>Vật tư thương hiệu, mặt tiền kỹ</td></tr>
  </tbody>
</table>
<p><strong>Báo giá xây nhà phần thô</strong> chi tiết: <a href="/tin-tuc/bao-gia-xay-nha-phan-tho-tphcm">bao-gia-xay-nha-phan-tho-tphcm</a>. Trọn gói: <a href="/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm">báo giá xây nhà trọn gói</a>. Máy tính: <a href="/bao-gia">/bao-gia</a>.</p>
${b}

<h2>Cách đọc bảng dự toán xây nhà</h2>
<ol>
  <li>Diện tích sàn: có tính móng, mái, sân thượng, ban công không?</li>
  <li>Thép, xi măng, gạch: ghi mác / thương hiệu.</li>
  <li>Chống thấm mái, WC: có dòng riêng.</li>
  <li>Phụ phí hẻm, ép cọc: tách, không “nuốt” vào đơn giá ảo.</li>
  <li>Tiến độ thanh toán theo nghiệm thu.</li>
</ol>
<p>Thi công thô: <a href="/tin-tuc/thi-cong-phan-tho-tphcm">thi công phần thô TP.HCM</a>.</p>
${c}
${faqSection([
  {
    q: "Báo giá xây nhà 2026 có tăng giữa năm không?",
    a: "Hợp đồng chốt vật tư thì giữ giá trong thời hạn ghi. Thép biến động mạnh: phụ lục điều chỉnh theo biên bản, không tự ý.",
  },
  {
    q: "Chi phí xây nhà phố TP.HCM 4×16m 3 tầng khoảng bao nhiêu?",
    a: "Trọn gói cơ bản thường 3,2–4,5 tỷ tùy hẻm và hoàn thiện. Chỉ là mốc — dự toán sau đo đất.",
  },
  {
    q: "Bảng dự toán xây nhà khác báo giá 1 trang thế nào?",
    a: "Dự toán có khối lượng từng việc. Báo giá 1 trang dễ thiếu chống thấm, phế thải, điện 3 pha.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p>Lấy <strong>báo giá xây nhà 2026</strong> để so nhà thầu: cùng checklist khối lượng + vật tư. Sao Khuê gửi dự toán sau khảo sát — <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const thiCongPhanThoTphcm = (() => {
  const slug = "thi-cong-phan-tho-tphcm";
  const focus = "thi công phần thô tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Thi Công Phần Thô TP.HCM — Xây Nhà Phần Thô Đúng Kết Cấu",
    excerpt:
      "Thi công phần thô TP.HCM, xây nhà phần thô: móng, khung, tường, mái. Sao Khuê giám sát cốt thép, BH kết cấu 10 năm — 0909 075 668.",
    metaTitle: "Thi Công Phần Thô TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Thi công phần thô, xây nhà phần thô TP.HCM: móng–khung–mái, giám sát thép. Báo giá minh bạch — 0909 075 668.",
    metaKeywords:
      "thi công phần thô tphcm, xây nhà phần thô, xây nhà phần thô tphcm, báo giá xây nhà phần thô, thi công nhà phố tphcm",
    content: `
<h2>Xây nhà phần thô / thi công phần thô TP.HCM gồm gì?</h2>
<p><strong>Thi công phần thô TP.HCM</strong> (còn gọi <strong>xây nhà phần thô</strong>) gồm: móng, cột, dầm, sàn, tường, cầu thang, mái, ống chờ điện nước, chống thấm kết cấu. Chưa gồm sơn, gạch lát, cửa, thiết bị WC. Nhiều chủ nhà tách thô + hoàn thiện để kiểm soát dòng tiền.</p>
${homeLinkParagraph()}
${a}

<h2>Báo giá xây nhà phần thô 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Phần thô nhà phố</td><td>3,5 – 5,5 triệu/m² sàn</td></tr>
    <tr><td>Ép cọc / khoan cọc (nếu cần)</td><td>Tính riêng theo địa chất</td></tr>
    <tr><td>Hẻm &lt; 3m</td><td>+5 – 12% logistics</td></tr>
  </tbody>
</table>
<p>Chi tiết: <a href="/tin-tuc/bao-gia-xay-nha-phan-tho-tphcm">báo giá xây nhà phần thô TP.HCM</a> · dịch vụ <a href="/dich-vu/xay-dung-phan-tho">xây dựng phần thô</a>.</p>
${b}

<h2>Nghiệm thu phần thô — đừng bỏ qua</h2>
<ol>
  <li>Cốt thép: đường kính, khoảng cách, lớp bảo vệ.</li>
  <li>Bê tông: mác, bảo dưỡng, không rỗ.</li>
  <li>Tường: mạch no, cửa sổ đúng trục.</li>
  <li>Chống thấm WC, mái trước khi hoàn thiện.</li>
  <li>Ống chờ điện nước đúng vị trí bản vẽ.</li>
</ol>
${c}
${faqSection([
  {
    q: "Xây nhà phần thô xong bao lâu mới hoàn thiện?",
    a: "Nên để bê tông đạt cường độ (thường 2–4 tuần tùy hạng mục) rồi ốp lát. Hoàn thiện ngay khi bê tông còn ướt dễ nứt gạch.",
  },
  {
    q: "Có nên thuê hai nhà thầu thô và hoàn thiện?",
    a: "Được nếu có giám sát. Rủi ro: thấm, ống sai vị trí — hai bên đùn đẩy. Gói chìa khóa trao tay một đầu mối giảm tranh cãi.",
  },
  {
    q: "Thi công phần thô nhà trong hẻm được không?",
    a: "Được. Cần phương án cẩu, xe nhỏ, đổ bê tông thương phẩm. Xem xây nhà trong hẻm TP.HCM.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Thi công phần thô TP.HCM</strong> quyết định tuổi thọ nhà. Sao Khuê giám sát thép từng đợt — gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const xayNhaPho1Tret2Lau = (() => {
  const slug = "xay-nha-pho-1-tret-2-lau-tphcm";
  const focus = "xây nhà phố 1 trệt 2 lầu";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Phố 1 Trệt 2 Lầu TP.HCM — 2 Tầng, 4 Tầng, Hẻm",
    excerpt:
      "Xây nhà phố 1 trệt 2 lầu, xây nhà 2 tầng / 4 tầng TP.HCM, nhà trong hẻm. Sao Khuê trọn gói — 0909 075 668.",
    metaTitle: "Xây Nhà Phố 1 Trệt 2 Lầu TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà phố 1 trệt 2 lầu, 2 tầng, 4 tầng, nhà trong hẻm TP.HCM. Báo giá 2026 — 0909 075 668.",
    metaKeywords:
      "xây nhà phố 1 trệt 2 lầu, xây nhà 2 tầng tphcm, xây nhà 4 tầng tphcm, xây nhà trong hẻm tphcm, xây biệt thự mini tphcm",
    content: `
<h2>Xây nhà phố 1 trệt 2 lầu — quy mô phổ biến TP.HCM</h2>
<p><strong>Xây nhà phố 1 trệt 2 lầu</strong> (3 tầng: trệt + lầu 1 + lầu 2, có thể tum) phù hợp lô 4×12 đến 5×20, gia đình 4–6 người. Khác <strong>xây nhà 2 tầng TP.HCM</strong> (1 trệt 1 lầu) về diện tích sàn và giấy phép số tầng. <strong>Xây nhà 4 tầng TP.HCM</strong> cần kiểm tra quy hoạch và móng kỹ hơn.</p>
<p><strong>Xây nhà trong hẻm TP.HCM</strong>: hạn chế xe tải, đổ bê tông thương phẩm, phòng cháy. <strong>Xây biệt thự mini TP.HCM</strong> trên lô rộng hơn (sân, khoảng lùi) — đơn giá hoàn thiện thường cao hơn nhà ống.</p>
${homeLinkParagraph()}
${a}

<h2>Chi phí theo loại nhà (mốc 2026)</h2>
<table>
  <thead><tr><th>Loại</th><th>Ghi chú ngân sách</th></tr></thead>
  <tbody>
    <tr><td>Nhà 2 tầng</td><td>Thấp hơn 1 trệt 2 lầu ~25–35% sàn</td></tr>
    <tr><td>1 trệt 2 lầu (3 tầng)</td><td>Phổ biến 3,2–4,8 tỷ (lô 4×16, trọn gói cơ bản)</td></tr>
    <tr><td>Nhà 4 tầng</td><td>4,0–5,8 tỷ+; cần phép số tầng</td></tr>
    <tr><td>Trong hẻm</td><td>+5–15% logistics</td></tr>
    <tr><td>Biệt thự mini</td><td>Đơn giá/m² cao hơn nhà phố 10–25%</td></tr>
  </tbody>
</table>
<p>Hub: <a href="/tin-tuc/xay-nha-2-tang-tphcm">xây nhà 2 tầng</a> · <a href="/tin-tuc/xay-nha-4-tang-tphcm">4 tầng</a> · <a href="/tin-tuc/xay-nha-trong-hem-tphcm">trong hẻm</a> · <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá 2026</a>.</p>
${b}

<h2>Mặt bằng gợi ý 1 trệt 2 lầu (4×16m)</h2>
<ul>
  <li>Trệt: khách, bếp, WC, để xe.</li>
  <li>Lầu 1: 2 phòng ngủ + WC.</li>
  <li>Lầu 2: 1 phòng + thờ / phòng làm việc + sân thượng.</li>
</ul>
<p>Cấp 4 mái thái (1 tầng): xem <a href="/tin-tuc/xay-nha-cap-4-mai-thai-tphcm">xây nhà cấp 4 mái thái TP.HCM</a>.</p>
${c}
${faqSection([
  {
    q: "1 trệt 2 lầu có tính là 3 tầng xin phép không?",
    a: "Thường tính 3 tầng nổi (trệt + 2 lầu); tum/sân thượng theo quy định phường. Kỹ sư Sao Khuê đối chiếu quy hoạch trước khi vẽ.",
  },
  {
    q: "Xây nhà trong hẻm 3m được mấy tầng?",
    a: "Phụ thuộc quy hoạch và PCCC, không phụ thuộc chỉ bề rộng hẻm. Phải xem chỉ giới và giấy phép.",
  },
  {
    q: "Xây biệt thự mini khác nhà phố thế nào?",
    a: "Có khoảng lùi, sân, mái dốc hoặc hình khối tự do. Kết cấu và hoàn thiện mặt đứng tốn hơn nhà ống sát hàng xóm.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p>Chốt số tầng (<strong>2 tầng</strong>, <strong>1 trệt 2 lầu</strong> hay <strong>4 tầng</strong>) theo phép và móng, rồi mới chốt giá. Gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const xayNhaCap4MaiThai = (() => {
  const slug = "xay-nha-cap-4-mai-thai-tphcm";
  const focus = "xây nhà cấp 4 mái thái tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Cấp 4 Mái Thái TP.HCM — Chi Phí & Lưu Ý Mái",
    excerpt:
      "Xây nhà cấp 4 mái thái TP.HCM: kết cấu mái, chống nóng, đơn giá 2026. Sao Khuê trọn gói — 0909 075 668.",
    metaTitle: "Xây Nhà Cấp 4 Mái Thái TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà cấp 4 mái thái TP.HCM: báo giá, chống nóng, thoát nước mái. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "xây nhà cấp 4 mái thái tphcm, xây nhà cấp 4, mái thái tphcm, xây nhà cấp 4 tphcm",
    content: `
<h2>Xây nhà cấp 4 mái thái TP.HCM phù hợp lô nào?</h2>
<p><strong>Xây nhà cấp 4 mái thái TP.HCM</strong> hợp lô còn khoảng lùi / sân, hoặc nhà vườn ven TP; nhà ống sát hàng xóm 4m mặt tiền thường khó làm mái thái đúng tỷ lệ (dễ thành mái giả). Cấp 4 một tầng rẻ hơn phố 3 tầng, nhưng mái thái tốn vì xà gồ, ngói, diềm, chống nóng.</p>
${homeLinkParagraph()}
${a}

<h2>Chi phí xây nhà cấp 4 mái thái 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Phần thô cấp 4</td><td>3,2 – 5,0 triệu/m²</td></tr>
    <tr><td>Mái thái (khung + ngói + chống nóng)</td><td>Tính riêng hoặc gộp — thường +8–15% so mái bằng</td></tr>
    <tr><td>Trọn gói cơ bản</td><td>5,5 – 8,5 triệu/m²</td></tr>
  </tbody>
</table>
<p>Cải tạo cấp 4 cũ thay vì xây mới: <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4 TP.HCM</a>. Báo giá năm: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá xây nhà 2026</a>.</p>
${b}

<h2>Kỹ thuật mái thái ở khí hậu Sài Gòn</h2>
<ul>
  <li>Dốc mái đủ để thoát mưa lớn.</li>
  <li>Tấm chống nóng / trần giả giảm nhiệt trệt.</li>
  <li>Máng xối, diềm, chống dột giao mái.</li>
  <li>Không “dán ngói trang trí” trên mái bằng rồi gọi là mái thái nếu chủ nhà cần mái thật.</li>
</ul>
${c}
${faqSection([
  {
    q: "Nhà cấp 4 mái thái sau này nâng tầng được không?",
    a: "Khó hơn mái bằng: phải tháo mái, kiểm tra móng. Nếu dự định nâng tầng 3–5 năm nữa, nên thiết kế móng chờ và cân nhắc mái bằng.",
  },
  {
    q: "Xây cấp 4 mái thái trong hẻm được không?",
    a: "Được nếu phép cho 1 tầng và vận chuyển ngói được. Hẻm siêu hẹp tăng phụ phí và hạn chế cần cẩu.",
  },
  {
    q: "Thời gian thi công?",
    a: "Cấp 4 trọn gói thường 3–5 tháng, mái thái thêm 1–3 tuần so mái bằng.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Xây nhà cấp 4 mái thái TP.HCM</strong> đẹp khi lô đủ tỷ lệ mái và thoát nước đúng. Gọi <strong>0909 075 668</strong> để xem đất có hợp mái thái không.</p>
`.trim(),
  });
})();

export const adsBoSung100XayNhaBySlug: Record<string, SeoArticle> = {
  "xay-nha-chia-khoa-trao-tay-tphcm": xayNhaChiaKhoaTraoTay,
  "bao-gia-xay-nha-2026": baoGiaXayNha2026,
  "thi-cong-phan-tho-tphcm": thiCongPhanThoTphcm,
  "xay-nha-pho-1-tret-2-lau-tphcm": xayNhaPho1Tret2Lau,
  "xay-nha-cap-4-mai-thai-tphcm": xayNhaCap4MaiThai,
};

export const ADS_BO_SUNG_100_XAY_NHA_SLUGS = Object.keys(adsBoSung100XayNhaBySlug);

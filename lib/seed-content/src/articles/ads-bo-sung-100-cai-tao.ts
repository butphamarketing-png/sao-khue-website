/**
 * Money pages Ads — cụm 100 từ khóa bổ sung (Cải tạo / Sửa nhà).
 * Mỗi bài unique H1/H2/FAQ; slug đưa vào MONEY_PAGE_OVERRIDE_SLUGS để index.
 */
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";
import { buildDistrictCaiTaoRich, type DistrictCaiTaoBrief } from "./district-cai-tao-rich";

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
    imageCaption: `${focus} do Kiến Trúc Sao Khuê khảo sát và thi công`,
  };
}

function imgs(slug: string, focus: string) {
  return {
    a: imageFigure(slugImage(slug, 0), focus, 1),
    b: imageFigure(slugImage(slug, 1), focus, 2),
    c: imageFigure(slugImage(slug, 2), focus, 3),
  };
}

const caiTaoNhaDangOTphcm = (() => {
  const slug = "cai-tao-nha-dang-o-tphcm";
  const focus = "cải tạo nhà đang ở tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà Đang Ở TP.HCM — Che Bụi, Ở Được Khi Sửa",
    excerpt:
      "Cải tạo nhà đang ở TP.HCM: chia khu thi công, che chắn, sửa WC–bếp trước. Sao Khuê khảo sát miễn phí — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Đang Ở TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Cải tạo nhà đang ở TP.HCM, sửa nhà đang ở: lịch chia khu, chống bụi, không cắt điện cả nhà. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà đang ở tphcm, cải tạo nhà đang ở, sửa nhà đang ở tphcm, sửa nhà đang ở, sửa nhà không phát sinh",
    content: `
<h2>Cải tạo nhà đang ở TP.HCM khác sửa nhà trống thế nào?</h2>
<p><strong>Cải tạo nhà đang ở TP.HCM</strong> là gói thi công khi gia đình vẫn sinh hoạt trong nhà: phải chia khu, che bạt, hút bụi, giữ WC–bếp hoạt động luân phiên. Khác với đập thông nhà trống, tiến độ chậm hơn 15–25% nhưng tiết kiệm chi phí thuê chỗ ở tạm.</p>
<p><strong>Sửa nhà đang ở TP.HCM</strong> phù hợp nhà phố 2–4 tầng, nhà ống hẹp: làm từng tầng hoặc từng phòng. Sao Khuê lập lịch “ở được” ngay trong hợp đồng — không để chủ nhà tự xoay với đội thợ.</p>
${homeLinkParagraph()}
${a}

<h2>Khi nào nên ở lại, khi nào nên chuyển tạm?</h2>
<ul>
  <li><strong>Ở được:</strong> sơn, lát, thay WC từng phòng, chống thấm sân thượng, sửa điện nước từng nhánh.</li>
  <li><strong>Nên chuyển 1–2 tuần:</strong> đục tường chịu lực, nâng tầng, thay toàn bộ ống đứng, phá mái.</li>
  <li><strong>Không ở:</strong> gia cố móng, khoan cọc, tháo dầm — bụi và rung ảnh hưởng sức khỏe.</li>
</ul>
<p>Gói liên quan: <a href="/tin-tuc/cong-ty-sua-chua-nha-tphcm">công ty sửa chữa nhà TP.HCM</a> · <a href="/dich-vu/cai-tao-nha-cu">cải tạo nhà cũ</a>.</p>

<h2>Biện pháp che chắn khi sửa nhà đang ở</h2>
<ol>
  <li>Bạt nilon + ván phủ sàn phòng chưa đụng tới.</li>
  <li>Vách tạm gypsum ngăn khu thợ và khu ngủ.</li>
  <li>Giữ 1 WC và 1 bếp phụ hoạt động suốt gói.</li>
  <li>Cắt điện theo tầng, không cắt cả nhà trừ khi thay tủ điện.</li>
  <li>Dọn phế thải cuối ngày — hẻm &lt; 3m cần xe nhỏ, ghi rõ phụ phí.</li>
</ol>
${b}

<h2>Chi phí cải tạo nhà đang ở so với nhà trống</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Nhà đang ở</th><th>Nhà trống</th></tr></thead>
  <tbody>
    <tr><td>Nhân công</td><td>+10–20% (chia ca, che chắn)</td><td>Mốc chuẩn</td></tr>
    <tr><td>Tiến độ</td><td>Dài hơn 2–4 tuần</td><td>Liền mạch</td></tr>
    <tr><td>Thuê chỗ ở tạm</td><td>0</td><td>8–20 triệu/tháng</td></tr>
  </tbody>
</table>
<p>Nhiều gia đình chọn <strong>cải tạo nhà đang ở</strong> vì tổng chi phí vẫn thấp hơn thuê nhà + sửa ồ ạt. Dự toán: <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a>.</p>
${c}
${faqSection([
  {
    q: "Sửa nhà đang ở có ồn nhiều không?",
    a: "Đục, cắt gạch ồn. Sao Khuê hạn chế máy lớn 12h–13h30 và sau 18h nếu hàng xóm phản ánh; ghi trong phụ lục hợp đồng.",
  },
  {
    q: "Trẻ nhỏ / người già ở được khi cải tạo không?",
    a: "Sơn và lát được nếu cách ly phòng. Đục tường, chống thấm hóa chất: nên cho trẻ/người già ở nhà người thân vài ngày.",
  },
  {
    q: "Có cam kết không phát sinh khi đang ở không?",
    a: "Phát sinh chỉ khi mở tường phát hiện mục kết cấu hoặc chủ nhà đổi thiết kế. Xem thêm sửa nhà không phát sinh tại bài công ty sửa chữa.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Cải tạo nhà đang ở TP.HCM</strong> làm được nếu chia khu và giữ WC–bếp. Gọi <strong>0909 075 668</strong> để kỹ sư xem nhà rồi chốt lịch “ở được”. Landing Ads: <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>
`.trim(),
  });
})();

const congTySuaChuaNhaTphcm = (() => {
  const slug = "cong-ty-sua-chua-nha-tphcm";
  const focus = "công ty sửa chữa nhà tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Công Ty Sửa Chữa Nhà TP.HCM — Không Phát Sinh, Một Hợp Đồng",
    excerpt:
      "Công ty sửa chữa nhà TP.HCM: sửa nhà phố, nhà cũ, cam kết không phát sinh ngoài hạng mục đã chốt. Sao Khuê — 0909 075 668.",
    metaTitle: "Công Ty Sửa Chữa Nhà TP.HCM Uy Tín | Sao Khuê",
    metaDescription:
      "Công ty sửa chữa nhà TP.HCM: sửa nhà cũ, nhà phố, không phát sinh. Dự toán từng hạng mục — 0909 075 668.",
    metaKeywords:
      "công ty sửa chữa nhà tphcm, sửa nhà cũ tphcm, sửa nhà phố tphcm, sửa nhà không phát sinh, sửa nhà đang ở tphcm",
    content: `
<h2>Công ty sửa chữa nhà TP.HCM khác đội thợ tự do thế nào?</h2>
<p><strong>Công ty sửa chữa nhà TP.HCM</strong> có pháp nhân, hợp đồng, bảo hành viết rõ và kỹ sư giám sát. Đội thợ báo miệng rẻ hơn 15–25% nhưng khi thấm lại, nứt lại, chủ nhà không có chỗ đòi. Sao Khuê nhận <strong>sửa nhà phố TP.HCM</strong> và <strong>sửa nhà cũ TP.HCM</strong> theo dự toán từng dòng.</p>
<p>Cam kết <strong>sửa nhà không phát sinh</strong>: chỉ cộng tiền khi chủ nhà đổi vật tư/thiết kế, hoặc mở tường phát hiện mục cột — có biên bản hiện trường, không “phụ thu miệng”.</p>
${homeLinkParagraph()}
${a}

<h2>Gói sửa nhà phố / nhà cũ thường gồm</h2>
<ul>
  <li>Chống thấm WC, sân thượng, tường ngoài.</li>
  <li>Thay điện nước âm, tủ điện, chống giật.</li>
  <li>Sơn, lát, trần, cửa; làm mới bếp–WC.</li>
  <li>Gia cố lan can, cầu thang nhà ống.</li>
</ul>
<p>Không gồm (trừ khi ghi hợp đồng): xin phép đổi kết cấu, thiết bị vệ sinh cao cấp ngoài danh mục, vận chuyển hẻm siêu hẹp.</p>

<h2>Cách chọn công ty sửa chữa nhà không bị ‘vẽ’ thêm việc</h2>
<ol>
  <li>Đòi bảng khối lượng (m² / cái) cạnh đơn giá.</li>
  <li>Ghi thương hiệu sơn, keo chống thấm, ống nước.</li>
  <li>Thanh toán theo nghiệm thu — không 100% trước.</li>
  <li>Xem công trình thật: <a href="/cong-trinh/sua-nha-quan-3">cải tạo nhà phố Quận 3</a>.</li>
</ol>
${b}

<h2>Đơn giá sửa nhà cũ / nhà phố 2026</h2>
<table>
  <thead><tr><th>Gói</th><th>Đơn giá</th><th>Phù hợp</th></tr></thead>
  <tbody>
    <tr><td>Sửa nhà cũ (làm mới)</td><td>1,0 – 2,0 triệu/m²</td><td>Sơn, lát, WC điểm</td></tr>
    <tr><td>Sửa nhà phố trọn gói</td><td>2,5 – 3,5 triệu/m²</td><td>Đổi bếp–WC, điện nước</td></tr>
    <tr><td>Cải tạo sâu</td><td>3,5 – 5,0 triệu/m²</td><td>Đục tường, mặt tiền</td></tr>
  </tbody>
</table>
<p>Bảng chi tiết: <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói TP.HCM</a>. Dịch vụ: <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a>.</p>
${c}
${faqSection([
  {
    q: "Sửa nhà không phát sinh là cam kết thế nào?",
    a: "Giá chốt theo khối lượng đã đo. Phát sinh chỉ khi đổi thiết kế hoặc phát hiện hư kết cấu sau tháo dỡ — có biên bản hai bên.",
  },
  {
    q: "Sửa nhà phố TP.HCM mất bao lâu?",
    a: "Làm mới 2–4 tuần; trọn gói công năng 6–10 tuần; đập thông + mặt tiền 2–4 tháng.",
  },
  {
    q: "Công ty sửa chữa nhà có bảo hành không?",
    a: "Sao Khuê: hoàn thiện 12–36 tháng, chống thấm theo hạng mục 24–60 tháng, kết cấu tới 10 năm nếu gia cố.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p>Chọn <strong>công ty sửa chữa nhà TP.HCM</strong> có dự toán dòng, bảo hành và giám sát — đó là cách <strong>sửa nhà không phát sinh</strong> thật. Gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const chongThamSanThuongTphcm = (() => {
  const slug = "chong-tham-san-thuong-tphcm";
  const focus = "chống thấm sân thượng tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Chống Thấm Sân Thượng TP.HCM — Sửa Mái, Hết Dột",
    excerpt:
      "Chống thấm sân thượng TP.HCM, sửa mái, sửa nhà thấm dột: xử lý tận gốc, nghiệm thu ngâm nước. Sao Khuê — 0909 075 668.",
    metaTitle: "Chống Thấm Sân Thượng TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Chống thấm sân thượng, sửa mái nhà, sửa nhà thấm dột TP.HCM. Nghiệm thu ngâm nước — 0909 075 668.",
    metaKeywords:
      "chống thấm sân thượng tphcm, chống thấm sân thượng, sửa mái nhà tphcm, sửa nhà thấm dột tphcm, cải tạo sân thượng tphcm, cải tạo mặt tiền nhà tphcm",
    content: `
<h2>Chống thấm sân thượng TP.HCM — vì sao hay thất bại?</h2>
<p><strong>Chống thấm sân thượng TP.HCM</strong> thất bại khi chỉ quét một lớp phủ lên nền nứt, không xử lý cổ ống, khe co giãn và dốc thoát nước. Mùa mưa Sài Gòn, nước đọng 24–48 giờ là đủ thấm xuống phòng dưới. Sao Khuê khảo sát dốc, khe, cổ ống rồi mới chọn màng / keo / vữa.</p>
<p>Cùng gói thường kèm <strong>sửa mái nhà TP.HCM</strong> (tôn, ngói, mái BTCT) và <strong>sửa nhà thấm dột TP.HCM</strong> ở tường, WC, hộp kỹ thuật. <strong>Cải tạo sân thượng TP.HCM</strong> (lát lại, chòi, trồng cây) chỉ làm sau khi chống thấm đạt.</p>
${homeLinkParagraph()}
${a}

<h2>Đơn giá chống thấm / sửa mái 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Đơn giá tham khảo</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Chống thấm sân thượng</td><td>150.000 – 350.000 đ/m²</td><td>Tùy màng, số lớp, dốc</td></tr>
    <tr><td>Sửa mái tôn / ngói</td><td>Theo mét dài + tấm</td><td>Thay diềm, máng, vít</td></tr>
    <tr><td>Sửa nhà thấm dột (điểm)</td><td>Từ 2–8 triệu/điểm</td><td>WC, tường, hộp kỹ thuật</td></tr>
    <tr><td>Cải tạo sân thượng (lát + lan can)</td><td>0,8 – 2,0 triệu/m²</td><td>Sau chống thấm</td></tr>
  </tbody>
</table>
<p>Không gộp giá “trọn sân” nếu chưa đo dốc và cổ ống. So với gói nhà: <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a>.</p>
${b}

<h2>Quy trình chống thấm sân thượng đúng</h2>
<ol>
  <li>Ngâm / phun thử tìm đường nước.</li>
  <li>Đục lớp phủ hỏng, vệ sinh, vá nứt.</li>
  <li>Xử lý cổ ống, chân tường 15–20 cm.</li>
  <li>Lớp chống thấm theo hồ sơ (màng khò / polyurethane / vữa).</li>
  <li>Tạo dốc, nghiệm thu ngâm nước 24–48 giờ.</li>
  <li>Mới lát gạch hoặc <strong>cải tạo sân thượng</strong>.</li>
</ol>
<p>Mặt tiền ẩm mốc: xem <a href="/tin-tuc/cai-tao-mat-tien-nha-tphcm">cải tạo mặt tiền nhà TP.HCM</a>. Điện nước ẩm: <a href="/tin-tuc/sua-dien-nuoc-nha-tphcm">sửa điện nước nhà</a>.</p>
${c}
${faqSection([
  {
    q: "Chống thấm sân thượng bảo hành bao lâu?",
    a: "Sao Khuê bảo hành 24–60 tháng tùy hệ thống. Điều kiện: không khoan thủng lớp phủ, không để cây đâm rễ nếu chưa có lớp bảo vệ.",
  },
  {
    q: "Sửa mái nhà TP.HCM có cần chống thấm mái BTCT không?",
    a: "Mái bê tông dột: chống thấm như sân thượng. Mái tôn dột: thay tấm, diềm, silicon — khác vật tư.",
  },
  {
    q: "Sửa nhà thấm dột có cần đục hết gạch WC không?",
    a: "Nếu thấm từ mạch gạch/cổ ống thì thường phải tháo lớp ốp khu vực hỏng. Chỉ trét ngoài dễ tái phát sau 1 mùa mưa.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Chống thấm sân thượng TP.HCM</strong> chỉ bền khi xử lý dốc + cổ ống + nghiệm thu ngâm nước. Gọi <strong>0909 075 668</strong> khi nhà đang <strong>thấm dột</strong> hoặc cần <strong>sửa mái</strong>.</p>
`.trim(),
  });
})();

const nangTangNhaCuTphcm = (() => {
  const slug = "nang-tang-nha-cu-tphcm";
  const focus = "nâng tầng nhà cũ tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Nâng Tầng Nhà Cũ TP.HCM — Báo Giá & Gia Cố An Toàn",
    excerpt:
      "Nâng tầng nhà cũ TP.HCM, báo giá nâng tầng nhà phố: khảo sát móng–cột, gia cố, xin phép. Sao Khuê BH kết cấu 10 năm — 0909 075 668.",
    metaTitle: "Nâng Tầng Nhà Cũ TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Nâng tầng nhà cũ, báo giá nâng tầng nhà phố, gia cố nhà phố TP.HCM. Khảo sát kết cấu miễn phí — 0909 075 668.",
    metaKeywords:
      "nâng tầng nhà cũ tphcm, nâng tầng nhà cũ, báo giá nâng tầng nhà phố, gia cố nhà phố tphcm, cải tạo nhà cấp 4",
    content: `
<h2>Nâng tầng nhà cũ TP.HCM — khi nào được, khi nào không?</h2>
<p><strong>Nâng tầng nhà cũ TP.HCM</strong> chỉ an toàn sau khi kỹ sư kiểm tra móng, cột, dầm. Nhà cấp 4 hoặc 1–2 tầng xây 15–25 năm thường cần <strong>gia cố nhà phố TP.HCM</strong> (cột thép, dầm BTCT, neo) trước khi đổ tầng mới. Không nâng nếu móng quá yếu mà chủ nhà từ chối gia cố.</p>
<p><strong>Báo giá nâng tầng nhà phố</strong> không tính theo m² hoàn thiện thông thường: phần kết cấu + giấy phép chiếm tỷ trọng lớn. Sao Khuê tách: khảo sát → phương án gia cố → đơn giá tầng mới → hoàn thiện.</p>
${homeLinkParagraph()}
${a}

<h2>Báo giá nâng tầng nhà phố 2026 (tham khảo)</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Khảo sát + đánh giá kết cấu</td><td>Miễn phí nội thành (gói thi công)</td></tr>
    <tr><td>Gia cố cột / dầm</td><td>Theo hồ sơ — thường 80–250 triệu</td></tr>
    <tr><td>Tầng mới phần thô</td><td>Theo m² sàn tầng thêm</td></tr>
    <tr><td>Hoàn thiện tầng mới</td><td>Gộp hoặc tách, ghi hợp đồng</td></tr>
  </tbody>
</table>
<p>Ví dụ nhà phố 4×16m thêm 1 tầng: gia cố + thô + hoàn thiện cơ bản thường <strong>450–850 triệu</strong> tùy hiện trạng. Dịch vụ: <a href="/dich-vu/nang-tang-nha-pho">nâng tầng nhà phố</a> · bài kỹ thuật <a href="/tin-tuc/nang-tang-nha-pho-tphcm">nâng tầng nhà phố TP.HCM</a>.</p>
${b}

<h2>Giấy phép khi nâng tầng nhà cũ</h2>
<p>Đổi số tầng, thay đổi kết cấu: cần giấy phép / điều chỉnh GPXD theo quy hoạch phường. Sao Khuê tư vấn hồ sơ; không thi công vượt tầng cho phép. Nhà hẻm: kiểm tra lộ giới và khoảng lùi trước khi chốt phương án.</p>
<p>Nếu chỉ <strong>cải tạo nhà cấp 4</strong> (làm mới, không thêm tầng): rẻ và nhanh hơn — xem <a href="/tin-tuc/cai-tao-nha-cap-4-tphcm">cải tạo nhà cấp 4 TP.HCM</a>.</p>
${c}
${faqSection([
  {
    q: "Nâng tầng nhà cũ có phải phá hết nhà không?",
    a: "Không. Giữ khung tốt, gia cố điểm yếu, rồi dựng tầng mới. Phá toàn bộ chỉ khi móng/cột không cứu được — lúc đó nên xây mới.",
  },
  {
    q: "Gia cố nhà phố TP.HCM mất bao lâu?",
    a: "Gia cố 2–6 tuần tùy số cột. Tầng mới thô thêm 6–10 tuần. Hoàn thiện 4–8 tuần.",
  },
  {
    q: "Báo giá nâng tầng nhà phố online có chính xác không?",
    a: "Ảnh chỉ loại trừ trường hợp quá nguy hiểm. Đơn giá chính thức sau đo móng, cột, xem sổ và quy hoạch.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Nâng tầng nhà cũ TP.HCM</strong> bắt đầu từ khảo sát kết cấu, không từ báo giá Facebook. Gọi <strong>0909 075 668</strong> để nhận <strong>báo giá nâng tầng nhà phố</strong> sau khi kỹ sư xem nhà.</p>
`.trim(),
  });
})();

const caiTaoNhaCap4Tphcm = (() => {
  const slug = "cai-tao-nha-cap-4-tphcm";
  const focus = "cải tạo nhà cấp 4 tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà Cấp 4 TP.HCM — Nhà Ống, Làm Mới Nhà Cũ",
    excerpt:
      "Cải tạo nhà cấp 4 TP.HCM, cải tạo nhà ống, làm mới nhà cũ: giữ khung hoặc nâng cấp công năng. Sao Khuê — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Cấp 4 TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Cải tạo nhà cấp 4, nhà ống, làm mới nhà cũ TP.HCM. Báo giá minh bạch — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà cấp 4, cải tạo nhà ống tphcm, cải tạo nhà ống, làm mới nhà cũ tphcm, làm mới nhà cũ",
    content: `
<h2>Cải tạo nhà cấp 4 TP.HCM hay xây mới?</h2>
<p><strong>Cải tạo nhà cấp 4</strong> hợp khi móng–cột còn tốt, chủ nhà muốn làm mới mái, WC, bếp, điện nước mà chưa cần thêm tầng. Nếu muốn 2–3 tầng hoặc nền lún nặng, tính <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a> hoặc <a href="/xay-nha">xây nhà mới</a>.</p>
<p><strong>Cải tạo nhà ống TP.HCM</strong> (mặt hẹp, sâu): ưu tiên giếng trời, cửa sổ chéo, màu sáng — tránh chỉ sơn lại mà nhà vẫn tối. <strong>Làm mới nhà cũ TP.HCM</strong> là gói nhẹ: sơn, lát, đèn, WC; rẻ hơn cải tạo sâu 40–60%.</p>
${homeLinkParagraph()}
${a}

<h2>Ba mức: làm mới — cải tạo cấp 4 — cải tạo nhà ống</h2>
<table>
  <thead><tr><th>Mức</th><th>Phạm vi</th><th>Đơn giá</th></tr></thead>
  <tbody>
    <tr><td>Làm mới nhà cũ</td><td>Sơn, lát, thiết bị điểm</td><td>1,0 – 2,0 triệu/m²</td></tr>
    <tr><td>Cải tạo nhà cấp 4</td><td>Mái, chống thấm, điện nước, WC–bếp</td><td>2,0 – 3,5 triệu/m²</td></tr>
    <tr><td>Cải tạo nhà ống sâu</td><td>Đục tường, giếng trời, mặt tiền</td><td>3,5 – 5,0 triệu/m²</td></tr>
  </tbody>
</table>
${b}

<h2>Lưu ý nhà ống hẹp khi cải tạo</h2>
<ul>
  <li>Vận chuyển gạch, cát qua hẻm: phụ phí 5–12%.</li>
  <li>Chống thấm mái bằng / sân thượng trước khi lát.</li>
  <li>Không đục cột giữa nếu chưa có phương án gia cố.</li>
  <li>Mặt tiền: xem <a href="/tin-tuc/cai-tao-mat-tien-nha-tphcm">cải tạo mặt tiền</a>.</li>
</ul>
<p>Theo quận: <a href="/tin-tuc/cai-tao-nha-binh-thanh">Bình Thạnh</a> · <a href="/tin-tuc/cai-tao-nha-go-vap">Gò Vấp</a> · <a href="/tin-tuc/cai-tao-nha-thu-duc">Thủ Đức</a>.</p>
${c}
${faqSection([
  {
    q: "Cải tạo nhà cấp 4 có được ở trong lúc sửa không?",
    a: "Sơn–lát được. Lợp mái / chống thấm hóa chất: nên chuyển tạm vài ngày. Xem cải tạo nhà đang ở TP.HCM.",
  },
  {
    q: "Làm mới nhà cũ khác cải tạo thế nào?",
    a: "Làm mới không đụng kết cấu. Cải tạo có thể đổi công năng, mái, điện nước toàn nhà.",
  },
  {
    q: "Cải tạo nhà ống hết bao lâu?",
    a: "Làm mới 3–5 tuần; cải tạo sâu 8–14 tuần tùy giếng trời và mặt tiền.",
  },
])}
${seoCtaBlock(focus)}
<h2>Kết luận</h2>
<p><strong>Cải tạo nhà cấp 4 TP.HCM</strong> và <strong>cải tạo nhà ống</strong> bắt đầu từ khảo sát khung. Gọi <strong>0909 075 668</strong> để chốt gói làm mới hay cải tạo sâu.</p>
`.trim(),
  });
})();

const DISTRICTS: DistrictCaiTaoBrief[] = [
  {
    slug: "cai-tao-nha-binh-thanh",
    district: "Bình Thạnh",
    keyword: "cải tạo nhà bình thạnh",
    repairKeyword: "sửa nhà bình thạnh",
    streets: "Bình Lợi, Xô Viết Nghệ Tĩnh, Nơ Trang Long, Phạm Văn Đồng",
    housing: "phố 3–4 tầng, hẻm xe hơi và hẻm xe máy",
    issues: [
      "<strong>Chống thấm sân thượng</strong> nhà phố sát nhau, dốc mái kém.",
      "<strong>Sửa điện nước</strong> nhà xây 15–20 năm, tủ điện quá tải.",
      "<strong>Cải tạo mặt tiền</strong> nhà ống mặt tiền 4–5m.",
      "<strong>Gia cố cầu thang</strong> nhà hẹp, lan can rỉ.",
    ],
    permitNote:
      "Bình Thạnh siết lộ giới đường lớn; đục tường chịu lực / nâng tầng cần kiểm tra GPXD. Văn phòng Sao Khuê ngay Bình Lợi — khảo sát trong ngày.",
    priceNote:
      "Hẻm nhỏ quanh Bình Lợi–Nơ Trang Long thường +5–10% vận chuyển phế thải so với nhà mặt tiền.",
    faqA:
      "Làm mới 1–2 triệu/m², sửa trọn gói 2,5–3,5 triệu/m², cải tạo sâu 3,5–5 triệu/m². Nhà hẻm hẹp cộng vận chuyển. Số sau khảo sát.",
  },
  {
    slug: "cai-tao-nha-thu-duc",
    district: "Thủ Đức",
    keyword: "cải tạo nhà thủ đức",
    repairKeyword: "sửa nhà thủ đức",
    streets: "Kha Vạn Cân, Võ Văn Ngân, Hiệp Bình, Linh Xuân, Tam Bình",
    housing: "cấp 4 lên tầng, nhà phố mới xen nhà cũ nền đất yếu gần rạch",
    issues: [
      "<strong>Nâng tầng nhà cũ</strong> cấp 4 — cần khảo sát móng.",
      "<strong>Chống thấm</strong> mùa mưa kéo dài, sân thượng trồng cây.",
      "<strong>Sửa nhà thấm dột</strong> tường tiếp giáp hàng xóm.",
      "<strong>Làm mới nhà cũ</strong> giữ ở được khi thi công.",
    ],
    permitNote:
      "TP. Thủ Đức quy hoạch từng phường khác nhau (cũ Q.2 / Q.9 / Thủ Đức). Xin phép nâng tầng phải đúng chỉ giới và số tầng cho phép.",
    priceNote:
      "Khu Hiệp Bình–Linh Xuân vận chuyển dễ hơn hẻm trung tâm; nền yếu có thể phát sinh gia cố — ghi rõ sau khảo sát.",
    faqA:
      "Cấp 4 làm mới thường 80–250 triệu; nhà phố 2–3 tầng sửa trọn gói 250–500 triệu tùy diện tích đụng. Nâng tầng báo riêng.",
  },
  {
    slug: "cai-tao-nha-go-vap",
    district: "Gò Vấp",
    keyword: "cải tạo nhà gò vấp",
    repairKeyword: "sửa nhà gò vấp",
    streets: "Quang Trung, Phan Văn Trị, Lê Đức Thọ, Nguyễn Oanh",
    housing: "nhà ống 4–5m mặt tiền, sâu 12–20m, hẻm chật",
    issues: [
      "<strong>Cải tạo nhà ống</strong> — giếng trời, lấy sáng.",
      "<strong>Sửa mái / sân thượng</strong> dột xuống tầng 3–4.",
      "<strong>Điện nước</strong> quá tải vì máy lạnh nhiều phòng.",
      "<strong>Mặt tiền</strong> ốp lại, cửa nhôm kính.",
    ],
    permitNote:
      "Gò Vấp nhiều hẻm không mở được xe tải; lập phương án chuyển vật tư bằng xe ba gác. Đổi kết cấu vẫn cần phép.",
    priceNote:
      "Phụ phí hẻm &lt; 3m phổ biến 8–12%. Nên ghi trong dự toán trước khi ký.",
    faqA:
      "Nhà ống 4×16m sửa công năng 2 tầng thường 280–420 triệu (mức 2,5–3,5 triệu/m² sàn đụng). Hẻm hẹp cộng vận chuyển.",
  },
  {
    slug: "cai-tao-nha-tan-binh",
    district: "Tân Bình",
    keyword: "cải tạo nhà tân bình",
    repairKeyword: "sửa nhà tân bình",
    streets: "Cộng Hòa, Hoàng Văn Thụ, Lý Thường Kiệt, khu sân bay",
    housing: "nhà phố 2–4 tầng, một số nhà cũ 2 tầng cần gia cố",
    issues: [
      "<strong>Chống ồn / cửa</strong> gần sân bay — cửa kính, trần.",
      "<strong>Chống thấm</strong> tường ngoài bám bụi, rêu.",
      "<strong>Sửa điện</strong> nhà kết hợp kinh doanh.",
      "<strong>Cải tạo đang ở</strong> vì gia đình không chuyển nổi.",
    ],
    permitNote:
      "Khu hạn chế giờ ồn (gần sân bay / đường lớn): máy đục ưu tiên ca sáng. Xin phép theo phường Tân Bình.",
    priceNote:
      "Nhà mặt tiền Cộng Hòa–Hoàng Văn Thụ hoàn thiện thường cao hơn hẻm trong 10–15% do yêu cầu mặt đứng.",
    faqA:
      "Sửa nhẹ 1–2 triệu/m²; nhà phố kết hợp quán/văn phòng 3–5 triệu/m² nếu đụng mặt tiền và điện 3 pha.",
  },
  {
    slug: "cai-tao-nha-tan-phu",
    district: "Tân Phú",
    keyword: "cải tạo nhà tân phú",
    repairKeyword: "sửa nhà tân phú",
    streets: "Lũy Bán Bích, Hòa Bình, Tân Sơn Nhì, Gò Dầu",
    housing: "nhà cấp 4, phố 2–3 tầng, lô đất 4×12 đến 5×16",
    issues: [
      "<strong>Cải tạo nhà cấp 4</strong> thành không gian hiện đại, chưa nâng tầng.",
      "<strong>Làm mới nhà cũ</strong> sơn, lát, WC.",
      "<strong>Chống thấm sân thượng</strong> nhà 2–3 tầng.",
      "<strong>Nâng tầng</strong> nếu móng cho phép.",
    ],
    permitNote:
      "Tân Phú nhiều nhà cấp 4 trên sổ đất ở — nâng tầng phải đúng mật độ và số tầng quy hoạch phường.",
    priceNote:
      "Gói làm mới nhà cấp 4 4×16m thường 120–280 triệu; cải tạo sâu + mái 250–450 triệu.",
    faqA:
      "Làm mới cấp 4 1–2 triệu/m²; cải tạo sâu 2,5–4 triệu/m². Nâng tầng báo sau khảo sát móng.",
  },
  {
    slug: "cai-tao-nha-quan-7",
    district: "Quận 7",
    keyword: "cải tạo nhà quận 7",
    repairKeyword: "sửa nhà quận 7",
    streets: "Phú Mỹ Hưng, Nguyễn Thị Thập, Huỳnh Tấn Phát, Tân Thuận",
    housing: "nhà phố thương mại, biệt thự mini, và nhà hẻm huyện cũ",
    issues: [
      "<strong>Cải tạo mặt tiền</strong> nhà phố cho thuê / shophouse.",
      "<strong>Sửa điện nước</strong> nhà ở kết hợp kinh doanh.",
      "<strong>Chống thấm</strong> sân thượng, hồ cá, chòi.",
      "<strong>Sửa nhà đang ở</strong> căn hộ thấp tầng / nhà phố.",
    ],
    permitNote:
      "Khu đô thị Phú Mỹ Hưng có nội quy thi công (giờ, rác, mặt đứng). Nhà hẻm Tân Thuận theo phường Q.7 — kiểm tra GPXD riêng.",
    priceNote:
      "Hoàn thiện khu PMH thường cao hơn hẻm Tân Thuận 15–25% vì vật tư và yêu cầu mặt đứng.",
    faqA:
      "Nhà phố Q.7 sửa công năng 2,5–4 triệu/m²; biệt thự mini cải tạo nội thất + sân 4–7 triệu/m² tùy vật tư.",
  },
];

export const adsBoSung100CaiTaoBySlug: Record<string, SeoArticle> = {
  "cai-tao-nha-dang-o-tphcm": caiTaoNhaDangOTphcm,
  "cong-ty-sua-chua-nha-tphcm": congTySuaChuaNhaTphcm,
  "chong-tham-san-thuong-tphcm": chongThamSanThuongTphcm,
  "nang-tang-nha-cu-tphcm": nangTangNhaCuTphcm,
  "cai-tao-nha-cap-4-tphcm": caiTaoNhaCap4Tphcm,
  ...Object.fromEntries(DISTRICTS.map((d) => [d.slug, buildDistrictCaiTaoRich(d)])),
};

export const ADS_BO_SUNG_100_CAI_TAO_SLUGS = Object.keys(adsBoSung100CaiTaoBySlug);

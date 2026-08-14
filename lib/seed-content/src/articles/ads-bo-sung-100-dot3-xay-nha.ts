/**
 * Money pages Ads — 100 từ khóa đợt 3 (Xây nhà).
 */
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";
import { applyAdsTopicDepth } from "./ads-topic-depth";

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

const epCoc = (() => {
  const slug = "ep-coc-nha-pho-tphcm";
  const focus = "ép cọc nhà phố tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Ép Cọc Nhà Phố TP.HCM — Chi Phí, Giám Sát Thi Công",
    excerpt:
      "Ép cọc nhà phố TP.HCM, chi phí ép cọc, giám sát thi công. Sao Khuê khảo sát địa chất — 0909 075 668.",
    metaTitle: "Ép Cọc Nhà Phố TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Ép cọc nhà phố, chi phí ép cọc, giám sát thi công nhà phố TP.HCM. 0909 075 668.",
    metaKeywords:
      "ép cọc nhà phố tphcm, chi phí ép cọc nhà phố, giám sát thi công nhà phố, ép cọc nhà phố",
    content: `
<h2>Ép cọc nhà phố TP.HCM khi nào cần?</h2>
<p><strong>Ép cọc nhà phố TP.HCM</strong> khi nền yếu (gần rạch, ao cũ, Q.7–Nhà Bè–Bình Chánh–Q.4–Q.8). Hẻm không mở máy ép: chuyển <strong>khoan cọc nhồi</strong>. <strong>Chi phí ép cọc nhà phố</strong> tách khỏi đơn giá thô — không để nhà thầu “nuốt” vào m² ảo. <strong>Giám sát thi công nhà phố</strong>: số cọc, độ sâu, biên bản thí nghiệm.</p>
${homeLinkParagraph()}
${a}
<h2>Chi phí ép cọc và hạng mục giám sát</h2>
<p>Giá theo số cọc × mét sâu + máy + phụ phí hẻm. Nền yếu có thể chiếm 12–18% tổng xây. Sao Khuê ghi số cọc dự kiến sau khảo sát đất, không báo “trọn gói cọc” miệng.</p>
<ul>
  <li>Biên bản giao nhận cọc, nhật ký độ sâu.</li>
  <li>Thí nghiệm nén (khi hồ sơ yêu cầu).</li>
  <li>Hẻm 3m: máy nhỏ hoặc khoan nhồi — khảo sát lối vào trước.</li>
</ul>
<p>Thô: <a href="/tin-tuc/thi-cong-phan-tho-tphcm">thi công phần thô</a> · giá năm: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá 2026</a>.</p>
${b}
${c}
${faqSection([
  { q: "Chi phí ép cọc nhà phố khoảng bao nhiêu?", a: "Theo số cọc × mét sâu + máy. Hẻm hẹp đội giá. Báo sau khảo sát đất." },
  { q: "Hẻm 3m ép cọc được không?", a: "Máy ép nhỏ hoặc chuyển khoan nhồi. Khảo sát lối vào trước." },
  { q: "Ép cọc có ồn hàng xóm không?", a: "Có. Ghi ca máy, thông báo hàng xóm. Khu hạn giờ ồn (Q.1, gần sân bay) lập phụ lục." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const lechTang = (() => {
  const slug = "xay-nha-lech-tang-tphcm";
  const focus = "xây nhà lệch tầng tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Lệch Tầng TP.HCM — Gara, 5 Tầng",
    excerpt:
      "Xây nhà lệch tầng, nhà có gara, nhà 5 tầng TP.HCM. Sao Khuê tính kết cấu — 0909 075 668.",
    metaTitle: "Xây Nhà Lệch Tầng TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà lệch tầng TP.HCM: gara, thông tầng, 4–5 tầng. Khảo sát miễn phí, báo giá minh bạch — 0909 075 668.",
    metaKeywords:
      "xây nhà lệch tầng tphcm, xây nhà có gara tphcm, xây nhà 5 tầng tphcm",
    content: `
<h2>Xây nhà lệch tầng TP.HCM — lấy sáng, để xe</h2>
<p><strong>Xây nhà lệch tầng TP.HCM</strong> tạo thông tầng / giếng trời, phù hợp ống hẹp. <strong>Xây nhà có gara TP.HCM</strong>: trệt xe, dốc, chiều cao cửa. <strong>Xây nhà 5 tầng TP.HCM</strong> cần đúng quy hoạch và PCCC — xem <a href="/tin-tuc/xay-nha-5-tang-tphcm">xây nhà 5 tầng</a>.</p>
${homeLinkParagraph()}
${a}
<h2>Khi nào nên lệch tầng?</h2>
<ul>
  <li>Ống 4–5m cần thông tầng lấy sáng giữa nhà.</li>
  <li>Trệt gara, lửng giếng trời, lầu ngủ đều tầng phía sau.</li>
  <li>Không lệch tầng chỉ để “đẹp 3D” nếu kết cấu đội 5–12% mà công năng không tăng.</li>
</ul>
<p>Hầm: <a href="/tin-tuc/xay-nha-co-ham-tphcm">xây nhà có hầm</a>. Giếng trời cải tạo: <a href="/tin-tuc/cai-tao-gieng-troi-nha-pho-tphcm">cải tạo giếng trời</a>.</p>
${b}
${c}
${faqSection([
  { q: "Lệch tầng có tốn hơn nhà đều tầng không?", a: "Kết cấu và ván khuôn phức tạp hơn, thường +5–12% phần khung." },
  { q: "Gara trong nhà ống 4m được không?", a: "Cần bề rộng cửa và bán kính quay. Khảo sát đo hẻm." },
  { q: "Lệch tầng có khó xin phép không?", a: "Vẫn là nhà phố trong GPXD. Quan trọng là số tầng / chiều cao / mật độ, không phải chữ “lệch tầng”." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const xay4x12 = (() => {
  const slug = "xay-nha-4x12-tphcm";
  const focus = "xây nhà 4x12 tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà 4x12 TP.HCM — Lô 5x16, Báo Giá",
    excerpt:
      "Xây nhà 4x12, 5x16 TP.HCM, báo giá xây nhà 4x12. Sao Khuê trọn gói — 0909 075 668.",
    metaTitle: "Xây Nhà 4x12 TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà 4x12, 5x16 TP.HCM: mặt bằng, giếng trời, báo giá 2,6–4,0 tỷ, hẻm hẹp. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "xây nhà 4x12 tphcm, xây nhà 5x16 tphcm, báo giá xây nhà 4x12",
    content: `
<h2>Xây nhà 4x12 TP.HCM — lô hẹp phổ biến</h2>
<p>Lô <strong>4×12m</strong> (~48m² đất): trệt xe + bếp, 2–3 lầu ngủ, giếng trời bắt buộc nếu muốn nhà không tối. <strong>Xây nhà 5×16</strong> thoáng hơn khoảng 32m² đất. <strong>Báo giá xây nhà 4x12</strong> 1 trệt 2 lầu trọn gói cơ bản thường <strong>2,6–4,0 tỷ</strong> tùy hẻm và móng.</p>
${homeLinkParagraph()}
${a}
<h2>Mặt bằng 4×12 so với 4×16</h2>
<ul>
  <li>4×12: cầu thang chiếm tỷ lệ lớn — ưu tiên bản thang hẹp, giếng trời.</li>
  <li>4×16: thêm phòng khách / giếng giữa. Xem <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">xây nhà phố 4x16</a>.</li>
  <li>5×16: dễ để xe + bếp tách, phòng ngủ rộng hơn.</li>
</ul>
${b}
${c}
${faqSection([
  { q: "Nhà 4x12 xây 4 tầng được không?", a: "Theo quy hoạch phường, không theo ý chủ nhà. Kiểm tra phép trước khi vẽ." },
  { q: "5x16 khác 4x12 thế nào?", a: "Thêm ~32m² đất: phòng khách rộng, cầu thang thoáng hơn, chi phí sàn tăng theo." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const hoanThien = (() => {
  const slug = "don-gia-hoan-thien-nha-2026";
  const focus = "đơn giá hoàn thiện nhà 2026";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Đơn Giá Hoàn Thiện Nhà 2026 — Nhà Phố TP.HCM",
    excerpt:
      "Đơn giá hoàn thiện nhà 2026, hoàn thiện nhà phố TP.HCM: sơn, lát, cửa, WC. Sao Khuê — 0909 075 668.",
    metaTitle: "Đơn Giá Hoàn Thiện Nhà 2026 | Sao Khuê",
    metaDescription:
      "Đơn giá hoàn thiện nhà 2026 nhà phố TP.HCM: sơn, lát, cửa, WC. Mốc 2,5–5,5 triệu/m², chưa gồm nội thất gỗ — 0909 075 668.",
    metaKeywords:
      "đơn giá hoàn thiện nhà 2026, hoàn thiện nhà phố tphcm, giá hoàn thiện nhà phố",
    content: `
<h2>Đơn giá hoàn thiện nhà 2026 (nhà phố)</h2>
<p><strong>Đơn giá hoàn thiện nhà 2026</strong> sau phần thô: sơn, lát, trần, cửa, thiết bị WC cơ bản. <strong>Hoàn thiện nhà phố TP.HCM</strong> thường 2,5–5,5 triệu/m² tùy vật tư — chưa gồm nội thất gỗ.</p>
${homeLinkParagraph()}
${a}
<table>
  <thead><tr><th>Mức</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Cơ bản</td><td>2,5 – 3,5 triệu/m²</td></tr>
    <tr><td>Khá</td><td>3,5 – 5,0 triệu/m²</td></tr>
    <tr><td>Cao</td><td>5,0 triệu/m²+</td></tr>
  </tbody>
</table>
${b}
<p>Hub hoàn thiện: <a href="/tin-tuc/hoan-thien-nha-tphcm">hoàn thiện nhà TP.HCM</a> · thô: <a href="/tin-tuc/thi-cong-phan-tho-tphcm">phần thô</a>.</p>
${c}
${faqSection([
  { q: "Hoàn thiện có gồm điều hòa, tủ bếp không?", a: "Thường không. Ghi list nếu muốn gộp." },
  { q: "Làm hoàn thiện khi đang ở được không?", a: "Sơn–lát từng tầng được. Xem cải tạo nhà đang ở." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const tietKiem = (() => {
  const slug = "xay-nha-tiet-kiem-tphcm";
  const focus = "xây nhà tiết kiệm tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Tiết Kiệm TP.HCM — Không Cắt Kết Cấu",
    excerpt:
      "Xây nhà tiết kiệm TP.HCM: cắt hoàn thiện, không cắt thép–chống thấm. Chi phí xin phép. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây Nhà Tiết Kiệm TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà tiết kiệm TP.HCM: cắt hoàn thiện đúng chỗ, không cắt thép–chống thấm. Chi phí xin phép xây nhà — 0909 075 668.",
    metaKeywords:
      "xây nhà tiết kiệm tphcm, chi phí xin phép xây nhà tphcm, giấy phép xây dựng nhà phố tphcm",
    content: `
<h2>Xây nhà tiết kiệm TP.HCM — cắt đúng chỗ</h2>
<p><strong>Xây nhà tiết kiệm TP.HCM</strong>: giữ mác bê tông, thép, chống thấm; cắt gạch ốp, gỗ, đèn. Cắt kết cấu là nợ lãi thấm–nứt. <strong>Giấy phép xây dựng nhà phố TP.HCM</strong> và <strong>chi phí xin phép xây nhà</strong> (lệ phí + bản vẽ) nên tính vào ngân sách — xem <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">xin giấy phép xây dựng</a>.</p>
${homeLinkParagraph()}
${a}
<p>Long An: <a href="/tin-tuc/xay-dung-nha-long-an">xây dựng nhà Long An</a>. Trả góp theo tiến độ: <a href="/tin-tuc/xay-nha-tra-gop-tphcm">xây nhà trả góp</a>.</p>
${b}
${c}
${faqSection([
  { q: "Tiết kiệm 20% bằng cách nào?", a: "Mái bằng thay thái, gạch trung cấp, làm thô xong hoàn thiện sau. Không giảm thép." },
  { q: "Chi phí xin phép xây nhà hết bao nhiêu?", a: "Lệ phí nhà nước + hồ sơ thiết kế. Sao Khuê báo phần tư vấn; lệ phí chủ nhà nộp." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

export const adsBoSung100Dot3XayNhaBySlug: Record<string, SeoArticle> = applyAdsTopicDepth({
  "ep-coc-nha-pho-tphcm": epCoc,
  "xay-nha-lech-tang-tphcm": lechTang,
  "xay-nha-4x12-tphcm": xay4x12,
  "don-gia-hoan-thien-nha-2026": hoanThien,
  "xay-nha-tiet-kiem-tphcm": tietKiem,
});

export const ADS_BO_SUNG_100_DOT3_XAY_NHA_SLUGS = Object.keys(adsBoSung100Dot3XayNhaBySlug);

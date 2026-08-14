/**
 * Money pages Ads — 100 từ khóa đợt 2 (Xây nhà).
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

const xayNhaCoHam = (() => {
  const slug = "xay-nha-co-ham-tphcm";
  const focus = "xây nhà có hầm tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Có Hầm TP.HCM — Tum, Mái Bằng, Chống Thấm",
    excerpt:
      "Xây nhà có hầm, tum, mái bằng TP.HCM: móng hố, thoát nước, PCCC. Sao Khuê BH kết cấu 10 năm — 0909 075 668.",
    metaTitle: "Xây Nhà Có Hầm TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà có hầm / tum / mái bằng TP.HCM: địa chất, chống thấm, chi phí tham khảo. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "xây nhà có hầm tphcm, xây nhà có tum tphcm, xây nhà mái bằng tphcm, nhà thầu xây nhà cấp 4",
    content: `
<h2>Xây nhà có hầm TP.HCM — khi nào nên làm?</h2>
<p><strong>Xây nhà có hầm TP.HCM</strong> hợp lô cần chỗ để xe, kho, kỹ thuật; chi phí móng–hố–chống thấm tăng rõ so nhà không hầm. Nền ngập / gần rạch: kỹ sư tính mực nước và bơm. <strong>Xây nhà có tum</strong> (tầng lửng mái) và <strong>xây nhà mái bằng</strong> phổ biến nhà phố — tum phải đúng phép, mái bằng bắt buộc chống thấm sân thượng.</p>
${homeLinkParagraph()}
${a}
<ul>
  <li>Hầm: tường vây, chống thấm ngược, thoát nước, thông gió, PCCC.</li>
  <li>Tum: diện tích và chiều cao theo quy hoạch phường.</li>
  <li>Mái bằng: dốc, cổ ống, nghiệm thu ngâm nước.</li>
</ul>
<p>Cấp 4 không hầm: <a href="/tin-tuc/xay-nha-cap-4-mai-thai-tphcm">cấp 4 mái thái</a> hoặc <strong>nhà thầu xây nhà cấp 4</strong> qua <a href="/tin-tuc/xay-nha-chia-khoa-trao-tay-tphcm">chìa khóa trao tay</a>.</p>
${b}
<p>Đơn giá: hầm tính riêng (thường +15–30% phần móng so không hầm). Báo giá năm: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá xây nhà 2026</a>.</p>
${c}
${faqSection([
  {
    q: "Nhà phố 4m có làm hầm được không?",
    a: "Tùy lộ giới, hàng xóm và máy thi công. Hẻm siêu hẹp hạn chế tường vây — khảo sát tại chỗ.",
  },
  {
    q: "Tum có tính tầng xin phép không?",
    a: "Phụ thuộc quy định phường (diện tích tum / chiều cao). Không tự ý đổ tum vượt phép.",
  },
])}
${seoCtaBlock(focus)}
<p>Gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const xayNha4x16 = (() => {
  const slug = "xay-nha-pho-4x16-tphcm";
  const focus = "xây nhà phố 4x16 tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Phố 4x16 TP.HCM — Lô 5x20, Liền Kề",
    excerpt:
      "Xây nhà phố 4x16, 5x20, nhà liền kề TP.HCM: mặt bằng, chi phí, hẻm. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây Nhà Phố 4x16 TP.HCM | Sao Khuê",
    metaDescription:
      "Xây nhà phố 4x16, 5x20, liền kề TP.HCM: mặt bằng, chi phí 3,2–5,8 tỷ, hẻm. Sao Khuê — 0909 075 668.",
    metaKeywords:
      "xây nhà phố 4x16 tphcm, xây nhà 5x20 tphcm, xây nhà liền kề tphcm, báo giá xây nhà 4x16",
    content: `
<h2>Xây nhà phố 4x16 TP.HCM — mặt bằng thực tế</h2>
<p>Lô <strong>4×16m</strong> (~64m² đất) là phổ biến Gò Vấp, Tân Bình, Bình Tân: trệt để xe + khách–bếp, 2–3 lầu ngủ. <strong>Xây nhà 5×20</strong> rộng hơn, dễ giếng trời và phòng khách. <strong>Xây nhà liền kề TP.HCM</strong> (sát hai bên) cần khe nhiệt, chống thấm tường chung, thỏa thuận hàng xóm khi đào móng.</p>
${homeLinkParagraph()}
${a}
<h2>Báo giá xây nhà 4x16 (mốc 2026)</h2>
<table>
  <thead><tr><th>Quy mô</th><th>Trọn gói cơ bản</th></tr></thead>
  <tbody>
    <tr><td>4×16 — 1 trệt 2 lầu</td><td>3,2 – 4,8 tỷ</td></tr>
    <tr><td>4×16 — 4 tầng</td><td>4,0 – 5,8 tỷ</td></tr>
    <tr><td>5×20 — 3 tầng</td><td>4,5 – 6,5 tỷ</td></tr>
  </tbody>
</table>
<p>Chi tiết: <a href="/tin-tuc/chi-phi-xay-nha-3-tang-tphcm">chi phí xây nhà 3 tầng</a> · <a href="/tin-tuc/xay-nha-pho-1-tret-2-lau-tphcm">1 trệt 2 lầu</a>.</p>
${b}
<p>Liền kề: giám sát cốt thép tường chung, không khoan sang nhà bên.</p>
${c}
${faqSection([
  {
    q: "Nhà 4x16 trong hẻm 3m xây được mấy tầng?",
    a: "Theo quy hoạch và PCCC, không chỉ theo bề rộng hẻm. Xem giấy phép.",
  },
  {
    q: "Nhà liền kề có cần khe hở không?",
    a: "Tùy bản vẽ: khe nhiệt / tường độc lập. Sao Khuê ghi rõ trong hồ sơ.",
  },
])}
${seoCtaBlock(focus)}
<p>Hotline <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const xayNhaChoThue = (() => {
  const slug = "xay-nha-cho-thue-tphcm";
  const focus = "xây nhà cho thuê tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Cho Thuê TP.HCM — Tối Ưu Phòng, WC, PCCC",
    excerpt:
      "Xây nhà cho thuê TP.HCM: nhiều phòng, WC riêng, điện 3 pha, PCCC. Sao Khuê trọn gói — 0909 075 668.",
    metaTitle: "Xây Nhà Cho Thuê TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà cho thuê TP.HCM: mặt bằng phòng trọ / nhà nguyên căn. BH 10 năm — 0909 075 668.",
    metaKeywords: "xây nhà cho thuê tphcm, xây nhà cho thuê, nhà phố cho thuê tphcm",
    content: `
<h2>Xây nhà cho thuê TP.HCM khác nhà ở gia đình</h2>
<p><strong>Xây nhà cho thuê TP.HCM</strong> tối ưu số phòng hợp pháp, WC, lối thoát hiểm, đồng hồ điện nước. Không nhồi phòng vượt phép. Shophouse trệt + ở trên: xem thêm gói trọn gói quận.</p>
${homeLinkParagraph()}
${a}
<ul>
  <li>Phòng 12–20m² + WC: dễ cho thuê phòng.</li>
  <li>Nhà nguyên căn 1 trệt 2 lầu: gia đình thuê.</li>
  <li>Điện 3 pha nếu nhiều máy lạnh / bếp trọ.</li>
</ul>
${b}
<p>Cải tạo nhà sẵn: <a href="/tin-tuc/cai-tao-nha-cho-thue-tphcm">cải tạo nhà cho thuê</a>. Chi phí: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá 2026</a>.</p>
${c}
${faqSection([
  {
    q: "Xây nhà trọ có cần PCCC không?",
    a: "Nhà nhiều phòng cho thuê thường thuộc diện PCCC / nghiệm thu. Tư vấn theo quy mô thực tế.",
  },
  {
    q: "Có nên xây hầm để xe cho nhà thuê không?",
    a: "Khu khan chỗ đậu: hầm hoặc trệt để xe tăng giá thuê. Tính thêm chi phí hầm: <a href=\"/tin-tuc/xay-nha-co-ham-tphcm\">xây nhà có hầm</a>.",
  },
])}
${seoCtaBlock(focus)}
<p>Gọi <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const chiPhi3Tang = (() => {
  const slug = "chi-phi-xay-nha-3-tang-tphcm";
  const focus = "chi phí xây nhà 3 tầng tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Chi Phí Xây Nhà 3 Tầng TP.HCM 2026 — Cấp 4, 4x16, Phần Thô",
    excerpt:
      "Chi phí xây nhà 3 tầng, giá xây nhà cấp 4, báo giá 4x16, đơn giá xây thô 2026 TP.HCM. Sao Khuê — 0909 075 668.",
    metaTitle: "Chi Phí Xây Nhà 3 Tầng TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Chi phí xây nhà 3 tầng, giá cấp 4, báo giá 4x16, đơn giá xây thô 2026. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "chi phí xây nhà 3 tầng tphcm, giá xây nhà cấp 4 tphcm, báo giá xây nhà 4x16, đơn giá xây thô 2026",
    content: `
<h2>Chi phí xây nhà 3 tầng TP.HCM 2026</h2>
<p><strong>Chi phí xây nhà 3 tầng TP.HCM</strong> (1 trệt 2 lầu) phụ thuộc lô, hẻm, móng. Lô 4×16 trọn gói cơ bản thường <strong>3,2–4,8 tỷ</strong>. <strong>Giá xây nhà cấp 4 TP.HCM</strong> thấp hơn vì ít sàn: thô 3,2–5 triệu/m², trọn gói 5,5–8,5 triệu/m². <strong>Đơn giá xây thô 2026</strong> nhà phố: 3,5–5,5 triệu/m².</p>
${homeLinkParagraph()}
${a}
<table>
  <thead><tr><th>Gói</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Cấp 4 trọn gói</td><td>5,5 – 8,5 triệu/m²</td></tr>
    <tr><td>Thô nhà phố</td><td>3,5 – 5,5 triệu/m²</td></tr>
    <tr><td>3 tầng trọn gói cơ bản</td><td>6,5 – 9,5 triệu/m²</td></tr>
    <tr><td>Báo giá xây nhà 4x16 (3 tầng)</td><td>3,2 – 4,8 tỷ</td></tr>
  </tbody>
</table>
${b}
<p>Bảng đầy đủ: <a href="/tin-tuc/bao-gia-xay-nha-2026">báo giá xây nhà 2026</a> · thô: <a href="/tin-tuc/thi-cong-phan-tho-tphcm">thi công phần thô</a> · máy tính <a href="/bao-gia">/bao-gia</a>.</p>
${c}
${faqSection([
  {
    q: "Đơn giá xây thô 2026 đã gồm móng cọc chưa?",
    a: "Thường chưa. Ép/khoan cọc tách dòng theo địa chất.",
  },
  {
    q: "Giá xây nhà cấp 4 mái thái cao hơn mái bằng không?",
    a: "Mái thái thường +8–15%. Xem bài cấp 4 mái thái.",
  },
])}
${seoCtaBlock(focus)}
<p>Hotline <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const xayNhaTraGop = (() => {
  const slug = "xay-nha-tra-gop-tphcm";
  const focus = "xây nhà trả góp tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xây Nhà Trả Góp TP.HCM — Thanh Toán Theo Tiến Độ, Thời Gian Thi Công",
    excerpt:
      "Xây nhà trả góp TP.HCM: tạm ứng theo nghiệm thu, thời gian xây nhà trọn gói 5–8 tháng. Sao Khuê — 0909 075 668.",
    metaTitle: "Xây Nhà Trả Góp TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Xây nhà trả góp, thời gian xây nhà trọn gói TP.HCM. Thanh toán theo mốc — 0909 075 668.",
    metaKeywords:
      "xây nhà trả góp tphcm, xây nhà trả góp, thời gian xây nhà trọn gói",
    content: `
<h2>Xây nhà trả góp TP.HCM nghĩa là gì?</h2>
<p><strong>Xây nhà trả góp TP.HCM</strong> tại Sao Khuê là <em>thanh toán theo tiến độ nghiệm thu</em> (móng, thô, hoàn thiện, bàn giao) — không phải gói ngân hàng 0% trừ khi bạn tự vay. Không yêu cầu 100% trước. <strong>Thời gian xây nhà trọn gói</strong> nhà phố 3–4 tầng thường <strong>5–8 tháng</strong>, ghi mốc trong hợp đồng.</p>
${homeLinkParagraph()}
${a}
<ol>
  <li>Tạm ứng khi ký (thường 10–20%).</li>
  <li>Sau móng / tầng 1.</li>
  <li>Sau phần thô.</li>
  <li>Hoàn thiện.</li>
  <li>Quyết toán bàn giao.</li>
</ol>
${b}
<p>Geo trọn gói đã có trang: <a href="/tin-tuc/xay-nha-tron-goi-tan-binh">Tân Bình</a> · <a href="/tin-tuc/xay-nha-tron-goi-tan-phu">Tân Phú</a> · <a href="/tin-tuc/xay-nha-tron-goi-binh-tan">Bình Tân</a> · <a href="/tin-tuc/xay-nha-tron-goi-nha-be">Nhà Bè</a> · <a href="/tin-tuc/xay-nha-tron-goi-quan-2">Q.2</a> · <a href="/tin-tuc/xay-nha-tron-goi-quan-12">Q.12</a> · <a href="/tin-tuc/xay-nha-tron-goi-binh-duong">Bình Dương</a> · <a href="/tin-tuc/xay-nha-tron-goi-dong-nai">Đồng Nai</a>.</p>
${c}
${faqSection([
  {
    q: "Sao Khuê có cho vay xây nhà không?",
    a: "Không phải tổ chức tín dụng. Hỗ trợ hồ sơ dự toán nếu bạn vay ngân hàng. Thanh toán công trình theo mốc nghiệm thu.",
  },
  {
    q: "Thời gian xây nhà trọn gói có chậm mùa mưa không?",
    a: "Đổ bê tông ngoài trời có thể dời ngày. Mốc hợp đồng tính ngày làm việc + điều khoản mưa.",
  },
])}
${seoCtaBlock(focus)}
<p>Gọi <strong>0909 075 668</strong> để nhận lịch thanh toán mẫu.</p>
`.trim(),
  });
})();

export const adsBoSung100Dot2XayNhaBySlug: Record<string, SeoArticle> = applyAdsTopicDepth({
  "xay-nha-co-ham-tphcm": xayNhaCoHam,
  "xay-nha-pho-4x16-tphcm": xayNha4x16,
  "xay-nha-cho-thue-tphcm": xayNhaChoThue,
  "chi-phi-xay-nha-3-tang-tphcm": chiPhi3Tang,
  "xay-nha-tra-gop-tphcm": xayNhaTraGop,
});

export const ADS_BO_SUNG_100_DOT2_XAY_NHA_SLUGS = Object.keys(adsBoSung100Dot2XayNhaBySlug);

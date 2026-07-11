/** 6 bài báo giá pillar — chuẩn form báo giá, hiển thị hub /bao-gia */
import { homeLinkParagraph, imageFigure, seoCtaBlock, faqSection } from "../article-seo-blocks";
import { slugImage } from "../site-images";

type PricingRow = { label: string; price: string; note: string };
type BaoGiaConfig = {
  slug: string;
  serviceSlug: string;
  serviceLabel: string;
  focusKeyword: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  imageAlt: string;
  imageCaption: string;
  intro: string;
  definition: string;
  pricingRows: PricingRow[];
  examples: string[];
  included: string[];
  factors: string[];
  faq: { q: string; a: string }[];
};

function buildBaoGiaArticle(cfg: BaoGiaConfig) {
  const img1 = slugImage(cfg.slug, 0);
  const img2 = slugImage(cfg.slug, 1);
  const serviceUrl = `/dich-vu/${cfg.serviceSlug}`;

  const pricingTable = cfg.pricingRows
    .map((r) => `<tr><td>${r.label}</td><td><strong>${r.price}</strong></td><td>${r.note}</td></tr>`)
    .join("\n    ");

  const examplesHtml = cfg.examples.map((e) => `<p>${e}</p>`).join("\n");
  const includedHtml = cfg.included.map((i) => `<li>${i}</li>`).join("\n  ");
  const factorsHtml = cfg.factors.map((f) => `<li>${f}</li>`).join("\n  ");

  return {
    title: cfg.title,
    excerpt: cfg.excerpt,
    metaTitle: cfg.metaTitle,
    metaDescription: cfg.metaDescription,
    metaKeywords: cfg.metaKeywords,
    imageAlt: cfg.imageAlt,
    imageCaption: cfg.imageCaption,
    content: `
<h2>${cfg.focusKeyword} — Báo giá cập nhật 2026 tại Sao Khuê</h2>
<p>${cfg.intro}</p>
<p><strong>Công ty TNHH Kiến Trúc Sao Khuê</strong> công bố <strong>báo giá ${cfg.focusKeyword}</strong> minh bạch, khảo sát miễn phí và dự toán chi tiết từng hạng mục. Xem thêm dịch vụ <a href="${serviceUrl}">${cfg.serviceLabel}</a> và dùng <a href="/bao-gia">công cụ tính chi phí</a> để ước lượng nhanh.</p>

${imageFigure(img1, cfg.focusKeyword, 1)}

<h2>Báo giá ${cfg.focusKeyword} là gì?</h2>
<p>${cfg.definition}</p>
<p>Báo giá chính thức chỉ được lập sau <strong>khảo sát thực tế</strong> — không báo giá qua điện thoại mù. Liên hệ hotline <strong>0909 075 668</strong> hoặc <a href="/lien-he">đặt lịch khảo sát</a>.</p>

<h2>Bảng báo giá ${cfg.focusKeyword} tham khảo 2026</h2>
<p>Đơn giá dưới đây mang tính <strong>tham khảo</strong> — phụ thuộc quy mô, vật liệu và mặt bằng:</p>
<table>
  <thead>
    <tr><th>Hạng mục / Gói</th><th>Đơn giá tham khảo</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    ${pricingTable}
  </tbody>
</table>
<p><em>Lưu ý:</em> Giá tính theo diện tích sàn quy đổi hoặc hạng mục cụ thể — chi tiết trong dự toán sau khảo sát.</p>

<h2>Ví dụ tính nhanh chi phí</h2>
${examplesHtml}
<p>Dùng <a href="/bao-gia">máy tính báo giá xây dựng</a> trên website hoặc xem <a href="/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm">báo giá xây nhà trọn gói mới nhất</a> để so sánh.</p>

${imageFigure(img2, cfg.focusKeyword, 2)}

<h2>Báo giá ${cfg.focusKeyword} gồm những hạng mục nào?</h2>
<ul>
  ${includedHtml}
</ul>
<p>Chi tiết dịch vụ: <a href="${serviceUrl}">${cfg.serviceLabel} trọn gói</a> · <a href="/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z">quy trình A–Z</a>.</p>

<h2>Yếu tố ảnh hưởng báo giá</h2>
<ul>
  ${factorsHtml}
</ul>
<p>Sao Khuê cam kết <strong>không phát sinh</strong> khi không thay đổi thiết kế và hạng mục đã ký hợp đồng.</p>

<h2>Quy trình nhận báo giá chính thức</h2>
<ol>
  <li><strong>Liên hệ:</strong> Hotline <strong>0909 075 668</strong>, Zalo hoặc <a href="/lien-he">form liên hệ</a>.</li>
  <li><strong>Khảo sát miễn phí:</strong> Kỹ sư đến công trình đo đạc, đánh giá hiện trạng.</li>
  <li><strong>Chốt phương án:</strong> Mặt bằng, vật liệu, mức hoàn thiện.</li>
  <li><strong>Nhận dự toán:</strong> Bảng hạng mục, đơn giá, tiến độ thanh toán.</li>
  <li><strong>Ký hợp đồng:</strong> Bảo hành kết cấu <strong>10 năm</strong>.</li>
</ol>

<h2>Vì sao chọn báo giá tại Sao Khuê?</h2>
<ul>
  <li><strong>Minh bạch</strong> — dự toán từng hạng mục, không báo giá mơ hồ.</li>
  <li><strong>Trực tiếp thi công</strong> — không chào giá rẻ rồi bán thầu phụ.</li>
  <li><strong>Bảo hành kết cấu 10 năm</strong> — cam kết bằng văn bản.</li>
  <li><strong>Hơn 500 công trình</strong> — xem <a href="/cong-trinh">công trình tiêu biểu</a>.</li>
</ul>

${homeLinkParagraph()}

${faqSection(cfg.faq)}

${seoCtaBlock(cfg.focusKeyword)}
`.trim(),
  };
}

export const baoGiaXayNhaMoi = buildBaoGiaArticle({
  slug: "bao-gia-xay-nha-moi",
  serviceSlug: "xay-nha-moi",
  serviceLabel: "Xây nhà mới",
  focusKeyword: "xây nhà mới",
  title: "Báo Giá Xây Nhà Mới Trọn Gói 2026 — Đơn Giá Minh Bạch | Sao Khuê",
  excerpt:
    "Báo giá xây nhà mới 2026: trọn gói 4,85–6,7 triệu/m², phần thô 3,55–3,8 triệu/m². Khảo sát miễn phí — Hotline 0909 075 668.",
  metaTitle: "Báo Giá Xây Nhà Mới 2026 — Trọn Gói | Sao Khuê",
  metaDescription:
    "Báo giá xây nhà mới trọn gói TP.HCM 2026. Đơn giá minh bạch, khảo sát miễn phí, bảo hành 10 năm. Gọi 0909 075 668.",
  metaKeywords:
    "báo giá xây nhà mới, chi phí xây nhà mới 2026, xây nhà mới giá bao nhiêu, đơn giá xây nhà mới tphcm, sao khuê",
  imageAlt: "báo giá xây nhà mới trọn gói — Kiến Trúc Sao Khuê",
  imageCaption: "Báo giá xây nhà mới — thiết kế và thi công trọn gói Sao Khuê",
  intro:
    "<strong>Báo giá xây nhà mới</strong> là thông tin chủ đất cần nắm trước khi đầu tư xây dựng trên lô đất trống hoặc sau khi tháo dỡ nhà cũ. Tại TP.HCM và các tỉnh lân cận, đơn giá xây nhà mới trọn gói dao động theo vật liệu, số tầng và mức hoàn thiện.",
  definition:
    "<strong>Báo giá xây nhà mới</strong> là bảng dự toán chi phí thi công công trình xây dựng mới hoàn toàn — từ móng, kết cấu, mái đến hoàn thiện cơ bản và bàn giao. Khác với báo giá chỉ phần thô hoặc chỉ hoàn thiện, báo giá trọn gói giúp chủ nhà có một con số tổng thể để lập ngân sách.",
  pricingRows: [
    { label: "Xây nhà mới trọn gói tiêu chuẩn", price: "4,85 – 5,5 triệu/m²", note: "Thô + hoàn thiện cơ bản" },
    { label: "Trọn gói khá", price: "5,5 – 6,0 triệu/m²", note: "Vật tư tầm trung–khá" },
    { label: "Trọn gói cao cấp", price: "6,0 – 6,7 triệu/m²", note: "Biệt thự, thiết bị tốt" },
    { label: "Chỉ phần thô", price: "3,55 – 3,8 triệu/m²", note: "Móng, khung BTCT, mái" },
  ],
  examples: [
    "<strong>Ví dụ 1:</strong> Nhà phố 3 tầng, sàn ~250 m², gói tiêu chuẩn 5 triệu/m² → khoảng <strong>1,25 tỷ</strong>.",
    "<strong>Ví dụ 2:</strong> Nhà 2 tầng, sàn ~160 m², gói khá 5,7 triệu/m² → khoảng <strong>912 triệu</strong>.",
  ],
  included: [
    "<strong>Khảo sát &amp; thiết kế</strong> sơ bộ (miễn phí khi ký trọn gói theo quy mô).",
    "<strong>Thi công móng, cột, dầm, sàn, mái</strong> — kết cấu BTCT.",
    "<strong>Điện, nước âm tường</strong> — hệ thống cơ bản.",
    "<strong>Hoàn thiện:</strong> trát, sơn, ốp lát, cửa, thiết bị vệ sinh cơ bản.",
    "<strong>Bảo hành kết cấu 10 năm</strong> — nghiệm thu từng giai đoạn.",
  ],
  factors: [
    "<strong>Địa chất &amp; móng:</strong> Đất yếu, cọc khoan — tăng chi phí móng.",
    "<strong>Số tầng &amp; nhịp kết cấu:</strong> Tầng cao, nhịp lớn cần thép nhiều hơn.",
    "<strong>Vật liệu hoàn thiện:</strong> Gạch, sơn, thiết bị vệ sinh — chênh lệch rõ.",
    "<strong>Vị trí:</strong> Hẻm hẹp, vận chuyển khó — có thể tăng nhân công.",
  ],
  faq: [
    { q: "Báo giá xây nhà mới bao nhiêu một mét vuông?", a: "Tham khảo <strong>4,85–6,7 triệu/m² sàn</strong> trọn gói tùy gói. Báo giá chính thức sau khảo sát miễn phí." },
    { q: "Xây nhà mới mất bao lâu?", a: "Nhà phố 3 tầng thường <strong>4–7 tháng</strong> trọn gói. Tiến độ cam kết trong hợp đồng." },
    { q: "Có miễn phí thiết kế không?", a: "Có chương trình <strong>miễn phí thiết kế</strong> khi ký hợp đồng xây trọn gói — theo quy mô công trình." },
    { q: "Sao Khuê xây nhà mới ở đâu?", a: "TP.HCM, Bình Dương, Đồng Nai, Long An, Đắk Lắk. Xem <a href=\"/dich-vu/xay-nha-moi\">dịch vụ xây nhà mới</a>." },
  ],
});

export const baoGiaCaiTaoNhaCu = buildBaoGiaArticle({
  slug: "bao-gia-cai-tao-nha-cu",
  serviceSlug: "cai-tao-nha-cu",
  serviceLabel: "Cải tạo nhà cũ",
  focusKeyword: "cải tạo nhà cũ",
  title: "Báo Giá Cải Tạo Nhà Cũ 2026 — Chi Phí Minh Bạch | Sao Khuê",
  excerpt:
    "Báo giá cải tạo nhà cũ 2026: 4–8 triệu/m² tùy mức. Khảo sát miễn phí, bảo hành kết cấu 10 năm. Hotline 0909 075 668.",
  metaTitle: "Báo Giá Cải Tạo Nhà Cũ 2026 | Sao Khuê",
  metaDescription:
    "Báo giá cải tạo nhà cũ TP.HCM 2026 minh bạch. Tiết kiệm 30–50% so với xây mới. Khảo sát miễn phí — 0909 075 668.",
  metaKeywords:
    "báo giá cải tạo nhà cũ, chi phí cải tạo nhà cũ 2026, cải tạo nhà cũ giá bao nhiêu, sửa chữa nhà cũ tphcm, sao khuê",
  imageAlt: "báo giá cải tạo nhà cũ — Kiến Trúc Sao Khuê",
  imageCaption: "Báo giá cải tạo nhà cũ — làm mới không gian sống Sao Khuê",
  intro:
    "<strong>Báo giá cải tạo nhà cũ</strong> giúp gia đình lập kế hoạch tài chính khi căn nhà đã xuống cấp nhưng kết cấu còn tốt. Cải tạo thường tiết kiệm <strong>30–50%</strong> so với xây mới hoàn toàn.",
  definition:
    "<strong>Báo giá cải tạo nhà cũ</strong> là dự toán chi phí làm mới, sửa chữa hoặc nâng cấp công trình đang sử dụng — gồm gia cố (nếu cần), thay hệ thống điện nước, trát sơn, ốp lát, cải tạo WC/bếp và hoàn thiện.",
  pricingRows: [
    { label: "Cải tạo nhẹ (sơn, lát, WC)", price: "1,5 – 3 triệu/m²", note: "Không đụng kết cấu lớn" },
    { label: "Cải tạo trung bình", price: "4 – 6 triệu/m²", note: "WC, bếp, điện nước, trần" },
    { label: "Cải tạo toàn diện", price: "6 – 8 triệu/m²", note: "Gia cố, mở rộng nhỏ" },
    { label: "Gia cố kết cấu", price: "Báo giá riêng", note: "Sau khảo sát kỹ thuật" },
  ],
  examples: [
    "<strong>Ví dụ:</strong> Nhà phố 3 tầng ~240 m² sàn, cải tạo trung bình 5 triệu/m² → khoảng <strong>1,2 tỷ</strong>.",
    "<strong>Ví dụ:</strong> Cải tạo WC + bếp ~25 m², gói khá → khoảng <strong>120 – 150 triệu</strong>.",
  ],
  included: [
    "<strong>Khảo sát hiện trạng</strong> — thấm, nứt, điện nước cũ.",
    "<strong>Gia cố</strong> (nếu cần) — cột, dầm, chống thấm.",
    "<strong>Cải tạo WC, bếp, phòng ngủ</strong> — theo thiết kế.",
    "<strong>Trát, sơn, ốp lát, trần</strong> — hoàn thiện.",
    "<strong>Bảo hành</strong> theo hạng mục — kết cấu 10 năm.",
  ],
  factors: [
    "<strong>Mức xuống cấp:</strong> Nhà 20–30 năm thường cần thay điện nước toàn bộ.",
    "<strong>Gia cố ẩn:</strong> Mở tường có thể phát hiện hư hỏng — dự trù 10–15%.",
    "<strong>Vật liệu:</strong> Gạch, thiết bị vệ sinh, tủ bếp — chênh lệch lớn.",
    "<strong>Đang ở trong nhà:</strong> Che chắn, thi công từng phần — có thể kéo tiến độ.",
  ],
  faq: [
    { q: "Báo giá cải tạo nhà cũ bao nhiêu?", a: "Tham khảo <strong>4–8 triệu/m²</strong> tùy mức cải tạo. Báo giá chính thức sau khảo sát." },
    { q: "Cải tạo có rẻ hơn xây mới không?", a: "Thường tiết kiệm <strong>30–50%</strong> nếu kết cấu còn tốt. Xem <a href=\"/dich-vu/xay-nha-moi\">xây nhà mới</a> để so sánh." },
    { q: "Cải tạo mất bao lâu?", a: "Cải tạo trung bình <strong>2–4 tháng</strong> tùy quy mô và mức gia cố." },
    { q: "Có cần xin phép không?", a: "Cải tạo lớn, thay đổi kết cấu cần giấy phép. Sao Khuê tư vấn khi khảo sát." },
  ],
});

export const baoGiaXayDungNha2Tang = buildBaoGiaArticle({
  slug: "bao-gia-xay-dung-nha-2-tang",
  serviceSlug: "xay-dung-nha-2-tang",
  serviceLabel: "Xây dựng nhà 2 tầng",
  focusKeyword: "xây dựng nhà 2 tầng",
  title: "Báo Giá Xây Dựng Nhà 2 Tầng 2026 — Đơn Giá Trọn Gói | Sao Khuê",
  excerpt:
    "Báo giá xây nhà 2 tầng 2026: trọn gói 4,85–6 triệu/m². Nhà phố 2 tầng ~700 triệu – 1,1 tỷ. Khảo sát miễn phí — 0909 075 668.",
  metaTitle: "Báo Giá Xây Dựng Nhà 2 Tầng 2026 | Sao Khuê",
  metaDescription:
    "Báo giá xây dựng nhà 2 tầng TP.HCM 2026. Đơn giá trọn gói minh bạch, bảo hành 10 năm. Gọi 0909 075 668.",
  metaKeywords:
    "báo giá xây nhà 2 tầng, chi phí xây nhà 2 tầng 2026, xây nhà 2 tầng giá bao nhiêu, đơn giá nhà 2 tầng, sao khuê",
  imageAlt: "báo giá xây dựng nhà 2 tầng — Sao Khuê",
  imageCaption: "Báo giá xây nhà 2 tầng — nhà phố hiện đại Sao Khuê",
  intro:
    "<strong>Báo giá xây dựng nhà 2 tầng</strong> phổ biến với gia đình 4–6 người trên lô đất 60–80 m². Nhà 2 tầng thi công nhanh hơn, chi phí thấp hơn nhà 3 tầng khoảng 20–35%.",
  definition:
    "<strong>Báo giá xây dựng nhà 2 tầng</strong> là dự toán chi phí thi công công trình 1 trệt + 1 lầu (hoặc 2 tầng sàn) — bao gồm móng, kết cấu, mái và hoàn thiện theo gói đã chọn.",
  pricingRows: [
    { label: "Trọn gói tiêu chuẩn", price: "4,85 – 5,5 triệu/m²", note: "Nhà phố 2 tầng" },
    { label: "Trọn gói khá", price: "5,5 – 6 triệu/m²", note: "Vật tư tốt hơn" },
    { label: "Chỉ phần thô", price: "3,55 – 3,8 triệu/m²", note: "Móng + khung + mái" },
    { label: "Thiết kế riêng", price: "Liên hệ", note: "Theo quy mô" },
  ],
  examples: [
    "<strong>Ví dụ:</strong> Nhà 2 tầng MT 5m × 14m, sàn ~160 m², gói 5 triệu/m² → khoảng <strong>800 triệu</strong>.",
    "<strong>Ví dụ:</strong> Nhà ống 4×15m, sàn ~140 m², gói khá 5,7 triệu/m² → khoảng <strong>798 triệu</strong>.",
  ],
  included: [
    "<strong>Thiết kế mặt bằng 2 tầng</strong> — tối ưu công năng.",
    "<strong>Móng, cột, dầm, sàn, mái</strong> — kết cấu BTCT.",
    "<strong>Hoàn thiện trọn gói</strong> — trát, sơn, ốp, cửa.",
    "<strong>Điện nước, thoát nước</strong> — hệ thống cơ bản.",
    "<strong>Bảo hành kết cấu 10 năm</strong>.",
  ],
  factors: [
    "<strong>Diện tích lô:</strong> 4×15 m vs 5×20 m — khác diện tích sàn quy đổi.",
    "<strong>Loại mái:</strong> Mái bằng BTCT vs mái Thái — chi phí khác nhau.",
    "<strong>Móng:</strong> Đất yếu cần gia cố móng.",
    "<strong>Hoàn thiện:</strong> Tiêu chuẩn vs khá — chênh 15–25%.",
  ],
  faq: [
    { q: "Xây nhà 2 tầng bao nhiêu tiền?", a: "Tham khảo <strong>700 triệu – 1,1 tỷ</strong> trọn gói cho ~150–200 m² sàn. Báo giá chính thức sau khảo sát." },
    { q: "Xây nhà 2 tầng mất bao lâu?", a: "Thường <strong>3–5 tháng</strong> trọn gói." },
    { q: "Lô 60 m² xây 2 tầng được không?", a: "Có, phổ biến MT 4m × 15m. Cần thiết kế tối ưu thông gió." },
    { q: "So với nhà 3 tầng?", a: "Nhà 2 tầng rẻ hơn <strong>20–35%</strong> và thi công nhanh hơn." },
  ],
});

export const baoGiaXayDungNha3Tang = buildBaoGiaArticle({
  slug: "bao-gia-xay-dung-nha-3-tang",
  serviceSlug: "xay-dung-nha-3-tang",
  serviceLabel: "Xây dựng nhà 3 tầng",
  focusKeyword: "xây dựng nhà 3 tầng",
  title: "Báo Giá Xây Dựng Nhà 3 Tầng 2026 — Đơn Giá Trọn Gói | Sao Khuê",
  excerpt:
    "Báo giá xây nhà 3 tầng 2026: trọn gói 4,85–6,7 triệu/m². Nhà phố 3 tầng ~1–1,7 tỷ. Khảo sát miễn phí — 0909 075 668.",
  metaTitle: "Báo Giá Xây Dựng Nhà 3 Tầng 2026 | Sao Khuê",
  metaDescription:
    "Báo giá xây dựng nhà 3 tầng TP.HCM 2026. Đơn giá minh bạch, bảo hành 10 năm. Hotline 0909 075 668.",
  metaKeywords:
    "báo giá xây nhà 3 tầng, chi phí xây nhà 3 tầng 2026, xây nhà 3 tầng giá bao nhiêu, đơn giá nhà 3 tầng, sao khuê",
  imageAlt: "báo giá xây dựng nhà 3 tầng — Sao Khuê",
  imageCaption: "Báo giá xây nhà 3 tầng — nhà phố 3 lầu Sao Khuê",
  intro:
    "<strong>Báo giá xây dựng nhà 3 tầng</strong> là nhu cầu phổ biến tại TP.HCM khi gia đình cần thêm phòng trên lô đất hạn chế. Nhà 3 tầng tối ưu diện tích sử dụng so với xây ngang.",
  definition:
    "<strong>Báo giá xây dựng nhà 3 tầng</strong> là dự toán chi phí thi công công trình 3 sàn (trệt + 2 lầu hoặc 3 tầng) — từ móng đến hoàn thiện theo gói trọn gói hoặc từng phần.",
  pricingRows: [
    { label: "Trọn gói tiêu chuẩn", price: "4,85 – 5,5 triệu/m²", note: "Nhà phố 3 tầng" },
    { label: "Trọn gói khá", price: "5,5 – 6 triệu/m²", note: "Vật tư tốt" },
    { label: "Trọn gói cao cấp", price: "6 – 6,7 triệu/m²", note: "Hoàn thiện đẹp" },
    { label: "Chỉ phần thô", price: "3,55 – 3,8 triệu/m²", note: "Kết cấu + mái" },
  ],
  examples: [
    "<strong>Ví dụ:</strong> Nhà 3 tầng MT 5m × 16m, sàn ~250 m², gói 5 triệu/m² → khoảng <strong>1,25 tỷ</strong>.",
    "<strong>Ví dụ:</strong> Nhà 3 tầng sàn ~300 m², gói khá 5,7 triệu/m² → khoảng <strong>1,71 tỷ</strong>.",
  ],
  included: [
    "<strong>Thiết kế 3 tầng</strong> — mặt bằng, phối cảnh 3D.",
    "<strong>Móng, khung BTCT 3 tầng</strong> — tính toán tải trọng.",
    "<strong>Mái, ban công</strong> — theo thiết kế.",
    "<strong>Hoàn thiện trọn gói</strong> — bàn giao ở được.",
    "<strong>Bảo hành kết cấu 10 năm</strong>.",
  ],
  factors: [
    "<strong>Diện tích sàn:</strong> ~240–300 m² phổ biến cho nhà phố 3 tầng.",
    "<strong>Cầu thang &amp; thang máy:</strong> Thang máy báo giá riêng.",
    "<strong>Chống thấm sân thượng:</strong> Hạng mục quan trọng tầng 3.",
    "<strong>Móng:</strong> 3 tầng cần móng đủ lực — đất yếu tăng chi phí.",
  ],
  faq: [
    { q: "Xây nhà 3 tầng bao nhiêu tiền?", a: "Tham khảo <strong>1 – 1,7 tỷ</strong> trọn gói cho ~240–300 m² sàn." },
    { q: "Xây nhà 3 tầng mất bao lâu?", a: "Thường <strong>4–6 tháng</strong> trọn gói." },
    { q: "Lô 80 m² xây 3 tầng được không?", a: "Có, phổ biến MT 4–5m, sâu 15–18m." },
    { q: "Có cần thang máy không?", a: "Gia đình thường không bắt buộc. Thang máy tùy chọn — báo giá riêng." },
  ],
});

export const baoGiaXayDungBietThu = buildBaoGiaArticle({
  slug: "bao-gia-xay-dung-biet-thu",
  serviceSlug: "xay-dung-biet-thu",
  serviceLabel: "Xây dựng biệt thự",
  focusKeyword: "xây dựng biệt thự",
  title: "Báo Giá Xây Dựng Biệt Thự 2026 — Đơn Giá Cao Cấp | Sao Khuê",
  excerpt:
    "Báo giá xây biệt thự 2026: 6–9 triệu/m² tùy hoàn thiện. Biệt thự 3 tầng ~2–5 tỷ+. Khảo sát miễn phí — 0909 075 668.",
  metaTitle: "Báo Giá Xây Dựng Biệt Thự 2026 | Sao Khuê",
  metaDescription:
    "Báo giá xây dựng biệt thự TP.HCM 2026. Đơn giá cao cấp minh bạch, bảo hành 10 năm. Gọi 0909 075 668.",
  metaKeywords:
    "báo giá xây biệt thự, chi phí xây biệt thự 2026, xây biệt thự giá bao nhiêu, đơn giá biệt thự, sao khuê",
  imageAlt: "báo giá xây dựng biệt thự — Sao Khuê",
  imageCaption: "Báo giá xây biệt thự — thiết kế và thi công cao cấp Sao Khuê",
  intro:
    "<strong>Báo giá xây dựng biệt thự</strong> cao hơn nhà phố do diện tích lớn, thiết kế phức tạp và yêu cầu hoàn thiện cao cấp. Biệt thự 2–3 tầng thường từ <strong>2 tỷ trở lên</strong> trọn gói.",
  definition:
    "<strong>Báo giá xây dựng biệt thự</strong> là dự toán chi phí thi công nhà ở quy mô lớn — thường có sân vườn, mái đa dạng, nội thất cao cấp và hạng mục cảnh quan riêng.",
  pricingRows: [
    { label: "Trọn gói tiêu chuẩn", price: "6 – 7 triệu/m²", note: "Biệt thự cơ bản" },
    { label: "Trọn gói cao cấp", price: "7 – 9 triệu/m²", note: "Vật liệu &amp; thiết bị tốt" },
    { label: "Chỉ phần thô", price: "4 – 5 triệu/m²", note: "Kết cấu + mái" },
    { label: "Hồ bơi / cảnh quan", price: "Báo giá riêng", note: "Theo thiết kế" },
  ],
  examples: [
    "<strong>Ví dụ:</strong> Biệt thự 3 tầng sàn ~350 m², gói cao cấp 7 triệu/m² → khoảng <strong>2,45 tỷ</strong>.",
    "<strong>Ví dụ:</strong> Biệt thự 2 tầng sàn ~280 m², gói 6,5 triệu/m² → khoảng <strong>1,82 tỷ</strong> (chưa hồ bơi).",
  ],
  included: [
    "<strong>Thiết kế biệt thự</strong> — kiến trúc, nội thất sơ bộ.",
    "<strong>Kết cấu BTCT</strong> — móng, khung, mái phức tạp.",
    "<strong>Hoàn thiện cao cấp</strong> — đá, gỗ, thiết bị tốt.",
    "<strong>Điện nước, smart home</strong> — theo yêu cầu.",
    "<strong>Bảo hành kết cấu 10 năm</strong>.",
  ],
  factors: [
    "<strong>Quy mô &amp; thiết kế:</strong> Mái Thái, giếng trời, nhịp lớn — tăng chi phí.",
    "<strong>Cảnh quan:</strong> Sân vườn, hồ bơi — báo giá riêng.",
    "<strong>Nội thất:</strong> Thường không gồm trong báo giá thô/cơ bản.",
    "<strong>Vị trí:</strong> Khu ven đô, logistics vật liệu.",
  ],
  faq: [
    { q: "Xây biệt thự bao nhiêu tiền?", a: "Tham khảo từ <strong>2 – 5 tỷ+</strong> tùy diện tích sàn và hoàn thiện." },
    { q: "Xây biệt thự mất bao lâu?", a: "Thường <strong>6–12 tháng</strong> tùy quy mô." },
    { q: "Có gồm hồ bơi không?", a: "Hồ bơi, sân vườn báo giá riêng hoặc gói bổ sung." },
    { q: "Cần giấy phép không?", a: "Có. Sao Khuê hỗ trợ tư vấn hồ sơ sơ bộ." },
  ],
});

export const baoGiaNangTangNhaPho = buildBaoGiaArticle({
  slug: "bao-gia-nang-tang-nha-pho",
  serviceSlug: "nang-tang-nha-pho",
  serviceLabel: "Nâng tầng nhà phố",
  focusKeyword: "nâng tầng nhà phố",
  title: "Báo Giá Nâng Tầng Nhà Phố 2026 — Gia Cố An Toàn | Sao Khuê",
  excerpt:
    "Báo giá nâng tầng nhà phố 2026: 4,5–6 triệu/m² sàn tầng mới + gia cố riêng. Khảo sát kết cấu miễn phí — 0909 075 668.",
  metaTitle: "Báo Giá Nâng Tầng Nhà Phố 2026 | Sao Khuê",
  metaDescription:
    "Báo giá nâng tầng nhà phố TP.HCM 2026. Gia cố an toàn, thi công trọn gói, bảo hành 10 năm. Gọi 0909 075 668.",
  metaKeywords:
    "báo giá nâng tầng nhà phố, chi phí nâng tầng nhà phố 2026, nâng tầng giá bao nhiêu, gia cố nâng tầng, sao khuê",
  imageAlt: "báo giá nâng tầng nhà phố — Sao Khuê",
  imageCaption: "Báo giá nâng tầng nhà phố — khảo sát kết cấu Sao Khuê",
  intro:
    "<strong>Báo giá nâng tầng nhà phố</strong> phụ thuộc mức gia cố kết cấu, số tầng thêm và diện tích sàn mới — không có đơn giá cố định/m² nếu chưa khảo sát móng, cột.",
  definition:
    "<strong>Báo giá nâng tầng nhà phố</strong> gồm hai phần chính: <strong>gia cố kết cấu</strong> (cột, dầm, móng nếu cần) và <strong>thi công tầng mới</strong> (dựng khung + hoàn thiện). Phải khảo sát kỹ thuật trước khi báo giá.",
  pricingRows: [
    { label: "Nâng 1 tầng + hoàn thiện", price: "4,5 – 6 triệu/m² sàn mới", note: "Chưa gồm gia cố lớn" },
    { label: "Gia cố kết cấu", price: "Báo giá riêng", note: "Tùy mức yếu móng/cột" },
    { label: "Nâng 2 tầng + gia cố", price: "Liên hệ khảo sát", note: "Quy mô lớn" },
    { label: "Thủ tục xin phép", price: "Tư vấn miễn phí", note: "Phí hồ sơ theo quy định" },
  ],
  examples: [
    "<strong>Ví dụ:</strong> Nâng 1 tầng ~80 m² sàn, gia cố vừa, hoàn thiện khá → khoảng <strong>360 – 480 triệu</strong>.",
    "<strong>Ví dụ:</strong> Nâng 1 tầng + gia cố toàn bộ cột → có thể thêm <strong>100 – 200 triệu</strong> tùy hiện trạng.",
  ],
  included: [
    "<strong>Khảo sát kết cấu</strong> — móng, cột, dầm, tường chịu lực.",
    "<strong>Thiết kế gia cố + tầng mới</strong> — bản vẽ 2D/3D.",
    "<strong>Thi công gia cố</strong> — trước khi dựng tầng mới.",
    "<strong>Hoàn thiện tầng mới</strong> — trát, sơn, ốp, điện nước.",
    "<strong>Bảo hành kết cấu 10 năm</strong> — phần gia cố và tầng mới.",
  ],
  factors: [
    "<strong>Kết cấu hiện tại:</strong> Móng yếu, cột nứt — cần gia cố lớn.",
    "<strong>Số tầng thêm:</strong> 1 tầng vs 2 tầng — khác mức gia cố.",
    "<strong>Giấy phép:</strong> Nâng tầng thường cần xin phép cải tạo.",
    "<strong>Đang ở trong nhà:</strong> Che chắn, an toàn tầng dưới.",
  ],
  faq: [
    { q: "Nâng 1 tầng nhà phố bao nhiêu tiền?", a: "Tham khảo <strong>360 – 480 triệu</strong> cho ~80 m² sàn + gia cố vừa. Báo giá sau khảo sát." },
    { q: "Nâng tầng mất bao lâu?", a: "Thường <strong>2–4 tháng</strong> tùy gia cố và hoàn thiện." },
    { q: "Nhà 1 tầng nâng lên 3 tầng được không?", a: "Có thể nếu móng đủ điều kiện hoặc được gia cố. Kỹ sư đánh giá khi khảo sát." },
    { q: "Có phải di dời không?", a: "Tùy phương án. Nhiều công trình vẫn ở tầng dưới với biện pháp an toàn." },
  ],
});

export const BAO_GIA_PILLAR_SLUGS = [
  "bao-gia-xay-nha-moi",
  "bao-gia-cai-tao-nha-cu",
  "bao-gia-xay-dung-nha-2-tang",
  "bao-gia-xay-dung-nha-3-tang",
  "bao-gia-xay-dung-biet-thu",
  "bao-gia-nang-tang-nha-pho",
] as const;

export const baoGiaPillarArticlesBySlug = {
  "bao-gia-xay-nha-moi": baoGiaXayNhaMoi,
  "bao-gia-cai-tao-nha-cu": baoGiaCaiTaoNhaCu,
  "bao-gia-xay-dung-nha-2-tang": baoGiaXayDungNha2Tang,
  "bao-gia-xay-dung-nha-3-tang": baoGiaXayDungNha3Tang,
  "bao-gia-xay-dung-biet-thu": baoGiaXayDungBietThu,
  "bao-gia-nang-tang-nha-pho": baoGiaNangTangNhaPho,
} as const;

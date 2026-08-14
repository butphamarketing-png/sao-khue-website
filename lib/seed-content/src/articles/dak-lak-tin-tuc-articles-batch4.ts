/**
 * 50 bài tin tức SEO — Đắk Lắk batch #247–#296 (xây nhà, sửa chữa, cải tạo).
 * Chuẩn: 1500+ từ, ≥6 H2, 3 ảnh, alt slugified đúng, meta Rank Math.
 */
import { buildCtrExcerpt, buildCtrMetaDescription, buildCtrMetaTitle, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { dakLakKeywordCalendarBatch4 } from "../dak-lak-keyword-calendar-batch4";
import { slugImage } from "../site-images";

type SeoArticleShape = {
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  content: string;
  imageAlt?: string;
  imageCaption?: string;
};

type Category = "build" | "repair" | "renovate";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  category: Category;
  topic: string;
  locality?: string;
};

const DAK_LAK_HUB = [
  { href: "/tin-tuc/xay-dung-nha-dak-lak", label: "xây dựng nhà Đắk Lắk" },
  { href: "/tin-tuc/xay-nha-tron-goi-dak-lak", label: "xây nhà trọn gói Đắk Lắk" },
  { href: "/tin-tuc/xay-nha-dep-dak-lak", label: "xây nhà đẹp Đắk Lắk" },
  { href: "/tin-tuc/sua-chua-nha-dak-lak", label: "sửa chữa nhà Đắk Lắk" },
  { href: "/tin-tuc/cai-tao-nha-dak-lak", label: "cải tạo nhà Đắk Lắk" },
];

const LOCALITY_MAP: Record<string, string> = {
  "krong-ana": "Krông Ana",
  "krong-nang": "Krông Năng",
  "krong-bong": "Krông Bông",
  "krong-pak": "Krông Pắk",
  "krong-buk": "Krông Búk",
  "cu-mgar": "Cư M'gar",
  "lak-dak": "Lắk",
  mdak: "M'Đrắk",
  "ea-sup": "Ea Súp",
  "ea-kar": "Ea Kar",
  "buon-ma-thuot": "Buôn Ma Thuột",
  "buon-ho": "Buôn Hồ",
};

function categoryOf(slug: string): Category {
  if (
    slug.startsWith("sua-") ||
    slug.includes("sua-chua") ||
    slug.includes("sua-nha") ||
    slug.includes("sua-mai") ||
    slug.includes("sua-dien") ||
    slug.includes("sua-tuong")
  )
    return "repair";
  if (
    slug.startsWith("cai-tao") ||
    slug.includes("nang-cap") ||
    slug.includes("tai-thiet") ||
    slug.includes("lam-moi") ||
    slug.includes("thay-mai")
  )
    return "renovate";
  return "build";
}

function detectLocality(slug: string): string | undefined {
  for (const [key, label] of Object.entries(LOCALITY_MAP)) {
    if (slug.includes(key)) return label;
  }
  return undefined;
}

function detectTopic(slug: string): string {
  if (slug.includes("don-gia") || slug.includes("chi-phi")) return "pricing";
  if (slug.includes("phan-tho") || slug.includes("nha-tho")) return "rough";
  if (slug.includes("phan-hoan-thien")) return "finish";
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("tro")) return "rental";
  if (slug.includes("kinh-doanh")) return "commercial";
  if (slug.includes("4-tang") || slug.includes("2-tang") || slug.includes("cap-3")) return "floors";
  if (slug.includes("doi-tho")) return "crew";
  if (slug.includes("tham-dot") || slug.includes("mai-nha") || slug.includes("thay-mai")) return "roof";
  if (slug.includes("dien-nuoc")) return "utilities";
  if (slug.includes("tuong-nut") || slug.includes("gia-co")) return "structural";
  if (slug.includes("mat-tien")) return "facade";
  if (slug.includes("san-thuong")) return "rooftop";
  if (slug.includes("nha-ong")) return "rowhouse";
  if (slug.includes("tai-thiet")) return "redesign";
  if (slug.includes("nha-cu") || slug.includes("lam-moi")) return "oldhouse";
  if (slug.includes("nha-pho")) return "townhouse";
  if (detectLocality(slug)) return "locality";
  if (slug.includes("uy-tin") || slug.includes("moi-dak")) return "general";
  return "general";
}

function hubLinksHtml(excludeSlug: string): string {
  return DAK_LAK_HUB.filter((l) => !l.href.endsWith(excludeSlug))
    .slice(0, 3)
    .map((l) => `<a href="${l.href}">${l.label}</a>`)
    .join(", ");
}

function buildMetaKeywords(kw: string, category: Category): string {
  const pool: Record<Category, string[]> = {
    build: ["xây dựng nhà Đắk Lắk", "thi công nhà Đắk Lắk", "nhà phố Buôn Ma Thuột", "báo giá xây nhà Đắk Lắk"],
    repair: ["sửa chữa nhà Đắk Lắk", "chống thấm nhà Đắk Lắk", "gia cố nhà cũ Đắk Lắk", "sửa nhà Buôn Ma Thuột"],
    renovate: ["cải tạo nhà Đắk Lắk", "nâng cấp nhà cũ Đắk Lắk", "làm mới nhà cũ Đắk Lắk", "cải tạo nhà phố Đắk Lắk"],
  };
  const extras = pool[category].filter((k) => k.toLowerCase() !== kw.toLowerCase()).slice(0, 4);
  return [kw, ...extras, "kiến trúc sao khuê"].join(", ");
}

function introParagraph(b: Brief): string {
  const loc = b.locality ? ` tại <strong>${b.locality}</strong>` : "";
  const climate =
    "khí hậu cao nguyên mát, mưa lớn theo mùa (tháng 5–11) và nền đất bazan phổ biến tại Buôn Ma Thuột, Buôn Hồ, Ea Kar và các huyện";
  if (b.category === "repair") {
    return `<p><strong>${b.focusKeyword}</strong> là nhu cầu cấp thiết khi nhà ở${loc} tại <strong>Đắk Lắk</strong> đã xuống cấp sau 10–25 năm sử dụng — xuất hiện thấm mái, nứt tường, sàn lún nhẹ, hệ thống điện nước lỗi thời. Với ${climate}, việc sửa chữa đúng kỹ thuật giúp kéo dài tuổi thọ công trình và tránh phát sinh chi phí khi làm ẩu.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (TP.HCM) triển khai <strong>${b.focusKeyword}</strong> — khảo sát hiện trạng miễn phí, báo giá từng hạng mục rõ ràng, thi công có giám sát kỹ thuật và bảo hành theo biên bản nghiệm thu.</p>`;
  }
  if (b.category === "renovate") {
    return `<p><strong>${b.focusKeyword}</strong> giúp nâng cấp không gian sống${loc} tại <strong>Đắk Lắk</strong> mà không cần phá bỏ xây mới hoàn toàn — phù hợp nhà 15–30 năm cần làm mới mặt tiền, tái bố trí phòng, mở rộng bếp hoặc WC. ${climate.charAt(0).toUpperCase() + climate.slice(1)} đòi hỏi xử lý chống thấm và gia cố kết cấu trước khi hoàn thiện.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> nhận <strong>${b.focusKeyword}</strong> trọn gói: khảo sát, thiết kế phương án 2D/3D (nếu cần), thi công và bàn giao — cam kết minh bạch tiến độ, vật liệu đúng hợp đồng.</p>`;
  }
  return `<p><strong>${b.focusKeyword}</strong> là nhu cầu thực tế của nhiều gia đình và nhà đầu tư${loc} tại <strong>Đắk Lắk</strong> — đặc biệt khu vực <strong>Buôn Ma Thuột</strong> và các huyện lân cận. Với ${climate}, việc chọn đơn vị có kinh nghiệm giúp tránh phát sinh do thấm nước, nứt kết cấu, thiết kế thiếu thông gió hoặc quản lý vật tư kém.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> triển khai <strong>${b.focusKeyword}</strong> từ khảo sát, thiết kế kiến trúc, thi công kết cấu đến hoàn thiện và bàn giao — cam kết <strong>bảo hành kết cấu 10 năm</strong>, báo cáo tiến độ hàng tuần qua Zalo.</p>`;
}

function whenNeededSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.category === "repair") {
    return `<h2>Khi nào nên ${kw}?</h2>
<p>Gia chủ nên chủ động sửa chữa khi phát hiện một hoặc nhiều dấu hiệu sau tại nhà ở Đắk Lắk:</p>
<ul>
  <li><strong>Trần, tường bị ố vàng, bong tróc</strong> sau mùa mưa — dấu hiệu thấm mái hoặc khe hở mái hiên.</li>
  <li><strong>Tường nứt dọc, ngang</strong> rộng hơn 2 mm — cần đánh giá gia cố trước khi trát lại.</li>
  <li><strong>Điện chập, nước yếu, ống gỉ</strong> — nguy cơ cháy nổ, rò rỉ ngầm.</li>
  <li><strong>Sàn lún, nghiêng cửa</strong> — có thể liên quan móng hoặc nền đất.</li>
  <li><strong>Chuẩn bị cho thuê hoặc bán nhà</strong> — nâng cấp nhanh để tăng giá trị tài sản.</li>
</ul>
<p>Hoãn sửa chữa khi trời mưa liên tục có thể khiến hư hỏng lan rộng — đặc biệt tại Tây Nguyên mùa mưa kéo dài.</p>`;
  }
  if (b.category === "renovate") {
    return `<h2>Khi nào nên ${kw}?</h2>
<p><strong>Cải tạo nhà</strong> phù hợp khi kết cấu còn tốt nhưng không gian sống không còn đáp ứng nhu cầu:</p>
<ul>
  <li>Gia đình thêm thành viên — cần thêm phòng ngủ, WC.</li>
  <li>Nhà cũ thiếu ánh sáng — bổ sung giếng trời, mở rộng cửa sổ.</li>
  <li>Mặt tiền lỗi thời — muốn làm mới để kinh doanh hoặc tăng giá trị.</li>
  <li>Chuyển đổi công năng — tầng trệt kinh doanh, tầng trên ở.</li>
  <li>Nhà đã sửa chữa nhiều lần rời rạc — cần tái thiết đồng bộ.</li>
</ul>`;
  }
  return `<h2>Khi nào nên ${kw}?</h2>
<p>Chủ đất nên triển khai <strong>${kw}</strong> khi đã có các điều kiện sau:</p>
<ul>
  <li><strong>Sổ đỏ / giấy tờ đất</strong> rõ ràng, xác định được quyền sử dụng và quy hoạch.</li>
  <li><strong>Ngân sách và nhu cầu</strong> đã thống nhất — diện tích, số tầng, phong cách.</li>
  <li><strong>Giấy phép xây dựng</strong> (nếu công trình yêu cầu) — Sao Khuê hỗ trợ hồ sơ.</li>
  <li><strong>Lộ trình thi công</strong> phù hợp mùa khô — ưu tiên đổ móng, khung tháng 12 – tháng 4.</li>
</ul>
<p>Nếu chưa có bản vẽ, nên bắt đầu từ tư vấn thiết kế — xem thêm <a href="/tin-tuc/thiet-ke-nha-pho-dak-lak">thiết kế nhà phố Đắk Lắk</a>.</p>`;
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.locality;

  switch (b.topic) {
    case "pricing":
      return `<h2>Bảng đơn giá tham khảo — ${kw}</h2>
<p>Đơn giá <strong>${kw}</strong> tại Đắk Lắk năm 2026 phụ thuộc quy mô, vật liệu và gói thi công. Bảng dưới đây mang tính tham khảo — Sao Khuê lập dự toán chi tiết sau khảo sát lô đất.</p>
<table>
  <thead><tr><th>Hạng mục</th><th>Đơn giá (2026)</th><th>Bao gồm</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,0 – 4,2 triệu đ/m² sàn</td><td>Móng, khung BTCT, mái, tường</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>6 – 8,5 triệu đ/m² sàn</td><td>Hoàn thiện cơ bản, cửa nhôm, sơn</td></tr>
    <tr><td>Trọn gói cao cấp</td><td>9 – 13 triệu đ/m² sàn</td><td>Vật liệu tốt, thiết bị nhập khẩu</td></tr>
  </tbody>
</table>
<h3>Yếu tố ảnh hưởng đơn giá tại Đắk Lắk</h3>
<ul>
  <li>Diện tích sàn, số tầng, độ phức tạp móng trên đất bazan.</li>
  <li>Vận chuyển vật tư từ TP.HCM — thường cao hơn 5–10% so với thi công tại miền Nam.</li>
  <li>Thời điểm thi công — mùa mưa có thể kéo dài tiến độ, ảnh hưởng chi phí nhân công.</li>
</ul>
<p>Dùng <a href="/bao-gia">báo giá online</a> hoặc hotline <strong>0909 075 668</strong> để nhận dự toán theo m² thực tế.</p>`;
    case "rough":
      return `<h2>${kw} — Phạm vi và tiêu chuẩn kỹ thuật</h2>
<p>Gói <strong>phần thô</strong> bao gồm toàn bộ kết cấu chịu lực — chưa hoàn thiện nội thất. Đây là lựa chọn phổ biến khi chủ nhà muốn tự hoàn thiện hoặc chia giai đoạn đầu tư.</p>
<h3>Hạng mục trong gói phần thô</h3>
<ul>
  <li><strong>Móng:</strong> Đào đất, cốt thép, đổ bê tông theo khảo sát địa chất bazan Đắk Lắk.</li>
  <li><strong>Khung BTCT:</strong> Cột, dầm, sàn — nghiệm thu cốt thép trước mỗi lần đổ.</li>
  <li><strong>Tường xây:</strong> Gạch block hoặc gạch đỏ theo bản vẽ kiến trúc.</li>
  <li><strong>Mái:</strong> Kết cấu mái dốc, chống thấm cơ bản — quan trọng mùa mưa Tây Nguyên.</li>
</ul>
<p>Sau phần thô, chủ nhà có thể ký tiếp gói hoàn thiện với Sao Khuê — tránh lệch bản vẽ và phát sinh giữa hai nhà thầu khác nhau.</p>`;
    case "floors":
      return `<h2>${kw} — Quy mô, kỹ thuật và thời gian</h2>
<p>Nhà nhiều tầng tại Đắk Lắk đòi hỏi thiết kế cầu thang, giếng trời và thông tầng hợp lý — đồng thời móng phải chịu tải tổng thể ổn định trên nền bazan.</p>
<h3>Lưu ý kỹ thuật nhà nhiều tầng</h3>
<ul>
  <li><strong>Móng:</strong> Khảo sát địa chất — có thể dùng móng băng, cọc ép tùy địa hình.</li>
  <li><strong>Giàn giáo:</strong> An toàn lao động, che chắn hàng xóm — đặc biệt khu phố đông dân Buôn Ma Thuột.</li>
  <li><strong>Nghiệm thu sàn:</strong> Từng tầng trước khi dựng tầng tiếp theo.</li>
  <li><strong>Thời gian:</strong> Nhà 2–3 tầng 120–200 m² sàn thường 5–8 tháng (trọn gôi tiêu chuẩn).</li>
</ul>`;
    case "locality":
      return `<h2>${kw} — Đặc thù tại ${loc ?? "Đắk Lắk"}</h2>
<p>Sao Khuê đã triển khai nhiều công trình tại <strong>${loc ?? "các huyện Đắk Lắk"}</strong> — am hiểu quy hoạch địa phương, thủ tục giấy phép xây dựng và nguồn nhân công tại chỗ.</p>
<h3>Thực tế thi công tại ${loc ?? "khu vực"}</h3>
<ul>
  <li>Khảo sát lô đất tận nơi hoặc trực tuyến (video call + ảnh thực địa).</li>
  <li>Điều chỉnh tiến độ theo mùa mưa — ưu tiên kết cấu mùa khô.</li>
  <li>Phối hợp vận chuyển vật tư từ kho tỉnh hoặc từ TP.HCM — tối ưu chi phí.</li>
  <li>Giám sát kỹ thuật định kỳ từ TP.HCM + đội hiện trường tại ${loc ?? "Đắk Lắk"}.</li>
</ul>
<p>Chủ đất tại ${loc ?? "huyện"} có thể tham khảo thêm <a href="/tin-tuc/xay-dung-nha-dak-lak">xây dựng nhà Đắk Lắk</a> và <a href="/tin-tuc/bao-gia-xay-nha-dak-lak">báo giá xây nhà Đắk Lắk</a>.</p>`;
    case "roof":
      return `<h2>${kw} — Kỹ thuật mái và chống thấm tại Đắk Lắk</h2>
<p>Mùa mưa Tây Nguyên kéo dài, lượng mưa lớn — <strong>${kw}</strong> cần xử lý triệt để tại mái, sân thượng, khe hồi và ống thoát nước.</p>
<h3>Quy trình xử lý chống thấm</h3>
<ol>
  <li>Kiểm tra kết cấu mái, dầm, tôn — sửa hư hỏng trước khi chống thấm.</li>
  <li>Thi công lớp primer + waterproof 2–3 lớp theo tiêu chuẩn nhà sản xuất.</li>
  <li>Nghiệm thu ngâm nước 24–48 giờ trước lát gạch hoặc hoàn thiện.</li>
  <li>Bảo trì định kỳ 2–3 năm — kiểm tra khe hở, ống thoát.</li>
</ol>
<p>Mái tôn, mái ngói hoặc mái bằng đều cần độ dốc tối thiểu 15° tại Đắk Lắk — tránh đọng nước gây rỉ sét, thấm trần. Sao Khuê khảo sát hiện trạng mái miễn phí trước khi báo giá.</p>`;
    case "finish":
      return `<h2>${kw} — Phạm vi hoàn thiện và tiêu chuẩn bàn giao</h2>
<p>Gói <strong>phần hoàn thiện</strong> áp dụng khi chủ nhà đã có phần thô ổn định — hoặc muốn tách giai đoạn đầu tư. <strong>${kw}</strong> bao gồm toàn bộ công việc “mặt mũi” căn nhà.</p>
<h3>Hạng mục hoàn thiện tiêu chuẩn</h3>
<ul>
  <li>Trát trong, trát ngoài, cán nền, sơn nước 2–3 lớp.</li>
  <li>Lát gạch nền, ốp tường WC, bếp theo bản vẽ.</li>
  <li>Lắp cửa nhôm kính, lan can, cửa gỗ phòng ngủ.</li>
  <li>Điện nước hoàn thiện: ống âm tường, thiết bị vệ sinh, đèn, ổ cắm.</li>
</ul>
<p>Hoàn thiện đúng vật liệu hợp đồng là yếu tố then chốt — Sao Khuê nghiệm thu từng phòng trước khi chuyển sang hạng mục tiếp theo.</p>`;
    case "turnkey":
      return `<h2>${kw} — Mô hình một đầu mối tại Đắk Lắk</h2>
<p><strong>Trọn gói</strong> giúp chủ đất không phải tự quản lý thợ điện, thợ nước, thợ hồ riêng lẻ — giảm phát sinh và tranh chấp tiến độ. <strong>${kw}</strong> tại Sao Khuê gồm khảo sát, thiết kế (nếu cần), thi công kết cấu, hoàn thiện và bàn giao.</p>
<h3>Lợi ích gói trọn gói</h3>
<ul>
  <li>Báo giá cố định theo m² sàn sau khi duyệt bản vẽ — hạn chế phát sinh ngoài hợp đồng.</li>
  <li>Giám sát kỹ thuật từ TP.HCM, báo cáo tiến độ hàng tuần.</li>
  <li>Bảo hành kết cấu 10 năm, hoàn thiện theo hạng mục.</li>
  <li>Một đầu mối chịu trách nhiệm — không đổ lỗi giữa các nhà thầu phụ.</li>
</ul>`;
    case "rental":
      return `<h2>${kw} — Thiết kế tối ưu cho cho thuê</h2>
<p><strong>${kw}</strong> cần cân bằng chi phí đầu tư và khả năng thu hồi vốn — đặc biệt gần trường học, khu công nghiệp Buôn Ma Thuột, Buôn Hồ.</p>
<h3>Nguyên tắc thiết kế nhà trọ</h3>
<ul>
  <li><strong>Phòng độc lập:</strong> WC riêng, cửa sổ thông gió — tiêu chuẩn tối thiểu thuê ổn định.</li>
  <li><strong>Hành lang, cầu thang rộng:</strong> An toàn PCCC, thoát hiểm.</li>
  <li><strong>Điện nước tổng:</strong> Đồng hồ riêng từng phòng hoặc chia tỷ lệ rõ ràng.</li>
  <li><strong>Vật liệu bền, dễ bảo trì:</strong> Gạch chống trơn WC, sơn ngoại thất chống bám bụi.</li>
</ul>
<p>Thời gian hoàn vốn nhà trọ Đắk Lắk thường 8–12 năm tùy vị trí — Sao Khuê tư vấn quy mô phòng phù hợp ngân sách.</p>`;
    case "commercial":
      return `<h2>${kw} — Nhà kinh doanh kết hợp ở tại Đắk Lắk</h2>
<p>Mô hình <strong>tầng trệt kinh doanh, tầng trên sinh hoạt</strong> phổ biến tại phố Buôn Ma Thuột. <strong>${kw}</strong> đòi hỏi thiết kế mặt tiền thu hút, hệ thống điện nước tách biệt và thông tầng linh hoạt.</p>
<h3>Yêu cầu kỹ thuật</h3>
<ul>
  <li>Mặt tiền kính, cửa cuốn, biển hiệu — đúng quy hoạch phường.</li>
  <li>Tải điện tầng trệt lớn hơn tầng ở — máy lạnh, tủ lạnh, thiết bị bếp.</li>
  <li>WC tầng trệt phục vụ khách — tách khu vực sinh hoạt gia đình.</li>
  <li>Chống thấm tầng trệt kỹ — tránh ảnh hưởng kho hàng, quầy bán.</li>
</ul>`;
    case "crew":
      return `<h2>${kw} — Đội thợ và giám sát tại công trình</h2>
<p>Khi chủ đất đã có bản vẽ và vật tư, <strong>${kw}</strong> là lựa chọn tiết kiệm nếu tự quản lý được tiến độ. Sao Khuê cung cấp đội thợ có kinh nghiệm Tây Nguyên — am hiểu địa hình, mùa mưa.</p>
<h3>Phạm vi đội thợ Sao Khuê</h3>
<ul>
  <li>Thợ hồ, thợ điện nước, thợ sắt theo yêu cầu hạng mục.</li>
  <li>Giám sát kỹ thuật định kỳ từ TP.HCM (tùy gói).</li>
  <li>Nghiệm thu cốt thép, điện âm tường trước khi đóng tường.</li>
</ul>
<p>Lưu ý: đổi thợ giữa chừng dễ lệch chất lượng — nên ký hợp đồng rõ phạm vi và thời gian.</p>`;
    case "utilities":
      return `<h2>${kw} — Hệ thống điện nước an toàn</h2>
<p>Hệ thống MEP lỗi thời là nguyên nhân cháy nổ, rò rỉ ngầm phổ biến tại nhà cũ Đắk Lắk. <strong>${kw}</strong> cần thay toàn bộ đường ống, dây điện âm tường theo tiêu chuẩn hiện hành.</p>
<h3>Tiêu chuẩn thi công</h3>
<ul>
  <li>Ống nước PPR, dây điện Cadivi hoặc tương đương — đúng tiết diện tải.</li>
  <li>Aptomat chống giật từng khu vực — WC, bếp, phòng ngủ.</li>
  <li>Ống thoát nước PVC đúng độ dốc — tránh tắc, hôi.</li>
  <li>Nghiệm thu áp lực nước, kiểm tra điện trước khi trát tường.</li>
</ul>`;
    case "structural":
      return `<h2>${kw} — Gia cố kết cấu trước khi hoàn thiện</h2>
<p>Tường nứt, sàn lún không được “vá” bằng trát lại — cần đánh giá nguyên nhân: móng, sụt nền, thiếu neo thép. <strong>${kw}</strong> tại Sao Khuê bắt đầu từ khảo sát kỹ thuật có biên bản.</p>
<h3>Phương án gia cố phổ biến</h3>
<ul>
  <li>Bơm epoxy chữa nứt kết cấu, bọc thép cột–dầm yếu.</li>
  <li>Gia cường móng, cọc ép khi nền lún.</li>
  <li>Thay dầm sàn, lan can không đạt tải.</li>
</ul>
<p>Sau gia cố mới tiến hành trát, sơn — đảm bảo an toàn lâu dài cho gia đình.</p>`;
    case "facade":
      return `<h2>${kw} — Làm mới diện mạo căn nhà</h2>
<p><strong>${kw}</strong> là hạng mục hiệu quả nhất để tăng giá trị nhà cũ — đặc biệt nhà phố Buôn Ma Thuột cần cạnh tranh thẩm mỹ với hàng xóm.</p>
<h3>Giải pháp mặt tiền</h3>
<ul>
  <li>Ốp đá granite, gạch thẻ, lam gỗ hoặc sơn ngoại thất cao cấp.</li>
  <li>Thay cửa nhôm kính, lan can inox hoặc kính cường lực.</li>
  <li>Bổ sung đèn LED trang trí, mái hiên che mưa.</li>
  <li>Xin phép UBND phường nếu thay đổi lớn cố định ngoài nhà.</li>
</ul>`;
    case "rooftop":
      return `<h2>${kw} — Tận dụng sân thượng an toàn</h2>
<p>Sân thượng tại Đắk Lắk thường bị bỏ trống hoặc thấm nước — <strong>${kw}</strong> giúp tạo không gian phơi đồ, sân vườn mini hoặc khu sinh hoạt ngoài trời.</p>
<h3>Quy trình cải tạo sân thượng</h3>
<ul>
  <li>Kiểm tra tải sàn, chống thấm 2–3 lớp trước khi lát gạch.</li>
  <li>Lan can đạt chiều cao an toàn ≥ 1,1 m.</li>
  <li>Thoát nước mưa, ống thoát không tắc.</li>
  <li>Che chắn nắng mưa — mái tôn hoặc lam che nếu cần.</li>
</ul>
<p>Sau cải tạo, nên lát gạch chống trơn và thoát nước tốt — sân thượng Đắk Lắk dễ trơn khi mưa. Sao Khuê tư vấn phương án sân vườn nhẹ hoặc khu phơi có mái che tùy tải sàn.</p>`;
    case "rowhouse":
      return `<h2>${kw} — Đặc thù nhà ống hẹp</h2>
<p>Nhà ống mặt tiền 3–4 m phổ biến tại khu phố Đắk Lắk — <strong>${kw}</strong> cần giải pháp lấy sáng, thông gió giữa các tầng.</p>
<h3>Giải pháp thiết kế</h3>
<ul>
  <li>Giếng trời giữa nhà, cầu thang lộ thiên.</li>
  <li>Phòng ngủ cửa kính hướng giếng trời — không bí khí.</li>
  <li>Gác lửng hoặc tầng lửng tối ưu diện tích.</li>
  <li>WC, bếp đặt gần giếng trời — dễ thoát ẩm.</li>
</ul>
<p>Nhà ống cải tạo tại Đắk Lắk nên ưu tiên xử lý thấm giếng trời và mái che trước khi hoàn thiện — tránh ẩm mốc lặp lại sau mùa mưa. Sao Khuê khảo sát luồng gió tự nhiên để giảm chi phí điều hòa ban đêm se lạnh.</p>`;
    case "oldhouse":
      return `<h2>${kw} — Đánh giá hiện trạng nhà cũ</h2>
<p>Nhà 20–40 năm tại Đắk Lắk thường có: mái thấm, điện nước cũ, công năng không còn phù hợp. <strong>${kw}</strong> bắt đầu bằng khảo sát toàn diện — quyết định sửa, cải tạo hay xây mới.</p>
<h3>Tiêu chí quyết định</h3>
<ul>
  <li><strong>Kết cấu còn tốt:</strong> Ưu tiên cải tạo — tiết kiệm 30–50% so với xây mới.</li>
  <li><strong>Móng, cột yếu:</strong> Cần gia cố hoặc phá dỡ có kiểm soát.</li>
  <li><strong>Quy hoạch:</strong> Nếu được phép nâng tầng — tính toán tải móng.</li>
</ul>
<p>Sao Khuê tư vấn miễn phí: sửa chữa, cải tạo hay xây mới phù hợp ngân sách.</p>`;
    case "redesign":
      return `<h2>${kw} — Tái thiết không gian sống</h2>
<p><strong>Tái thiết nhà</strong> là bước cải tạo sâu hơn sơn sửa — thay đổi bố trí phòng, cầu thang, ánh sáng và công năng để phù hợp nhu cầu hiện tại. <strong>${kw}</strong> tại Đắk Lắk thường áp dụng cho nhà 15–25 năm cần “làm mới” toàn diện.</p>
<h3>Phạm vi tái thiết</h3>
<ul>
  <li>Đục tường, mở rộng phòng khách, bếp mở liên thông.</li>
  <li>Thay cầu thang, bổ sung giếng trời lấy sáng.</li>
  <li>Làm mới toàn bộ điện nước, sàn, trần, cửa.</li>
  <li>Gia cố kết cấu trước khi thay đổi lớn — bắt buộc có khảo sát.</li>
</ul>
<p>Sao Khuê phác thảo phương án 2D/3D trước khi thi công — chủ nhà hình dung rõ không gian sau tái thiết.</p>`;
    case "townhouse":
      return `<h2>${kw} — Nhà phố hiện đại tại Đắk Lắk</h2>
<p><strong>${kw}</strong> là phân khúc phổ biến nhất tại Buôn Ma Thuột — mặt tiền 4–6 m, 2–3 tầng, gara ô tô hoặc kinh doanh tầng trệt.</p>
<h3>Xu hướng nhà phố 2026</h3>
<ul>
  <li>Phong cách hiện đại tối giản — trắng, xám, gỗ, kính.</li>
  <li>Phòng khách thông tầng, bếp mở liên thông.</li>
  <li>Mái dốc, giếng trời — thích hợp khí hậu cao nguyên.</li>
  <li>Nhà thông minh cơ bản — đèn cảm biến, chuông cửa có hình.</li>
</ul>
<p>Tham khảo <a href="/tin-tuc/thiet-ke-nha-pho-dak-lak">thiết kế nhà phố Đắk Lắk</a> trước khi khởi công.</p>`;
    case "general":
      return `<h2>${kw} — Tiêu chí chọn đơn vị uy tín</h2>
<p>Thị trường xây dựng Đắk Lắk có nhiều nhà thầu — chủ đất nên đánh giá <strong>${kw}</strong> theo các tiêu chí khách quan:</p>
<ul>
  <li><strong>Hồ sơ công trình:</strong> Ảnh thực tế, địa điểm, quy mô tương tự yêu cầu của bạn.</li>
  <li><strong>Hợp đồng rõ ràng:</strong> Vật liệu, tiến độ, thanh toán, bảo hành — không cam kết mơ hồ.</li>
  <li><strong>Giám sát kỹ thuật:</strong> Nghiệm thu từng giai đoạn, nhật ký thi công.</li>
  <li><strong>Phản hồi khách hàng:</strong> Zalo, Google Maps, Facebook — đối chiếu nhiều nguồn.</li>
</ul>
<p>Sao Khuê minh bạch báo giá và cam kết bảo hành kết cấu 10 năm cho công trình xây mới.</p>`;
    default:
      break;
  }

  if (b.category === "repair") {
    return `<h2>${kw} — Hạng mục sửa chữa phổ biến</h2>
<p>Dịch vụ <strong>${kw}</strong> tại Đắk Lắk thường bao gồm các nhóm công việc sau — có thể chọn từng hạng mục hoặc gói trọn:</p>
<h3>Nhóm kết cấu và chống thấm</h3>
<ul>
  <li>Chống thấm mái, sân thượng, ban công, WC.</li>
  <li>Gia cố cột, dầm, tường nứt — đặc biệt nhà 20–30 năm.</li>
  <li>Sửa sàn lún, nền không đều.</li>
</ul>
<h3>Nhóm hoàn thiện và MEP</h3>
<ul>
  <li>Trát, sơn lại tường trong và ngoài.</li>
  <li>Thay điện, nước — ống PPR, dây Cadivi, aptomat chống giật.</li>
  <li>Lát gạch mới WC, bếp, phòng khách.</li>
</ul>`;
  }
  if (b.category === "renovate") {
    return `<h2>${kw} — Giải pháp cải tạo toàn diện</h2>
<p><strong>${kw}</strong> tại Đắk Lắk không chỉ “sơn lại cho đẹp” — mà tái cấu trúc không gian sống phù hợp gia đình hiện tại. Tái thiết đồng bộ giúp tránh tình trạng mỗi lần sửa một kiểu, màu sơn và vật liệu không khớp nhau.</p>
<h3>Hạng mục cải tạo thường gặp</h3>
<ul>
  <li><strong>Tái bố trí phòng:</strong> Gộp phòng, tách WC, mở rộng bếp.</li>
  <li><strong>Mặt tiền:</strong> Ốp đá, sơn, thay cửa nhôm kính, lan can mới.</li>
  <li><strong>Công năng:</strong> Thêm phòng ngủ, gara, sân phơi trên sân thượng.</li>
  <li><strong>Hệ thống:</strong> Điện nước mới, máy lạnh, nóng lạnh đồng bộ.</li>
</ul>`;
  }
  return `<h2>${kw} — Dịch vụ trọn gói từ Sao Khuê</h2>
<p>Sao Khuê cung cấp <strong>${kw}</strong> theo mô hình một đầu mối — từ khảo sát đến bàn giao, giảm rủi ro phát sinh khi tự quản lý nhiều thợ rời.</p>
<h3>Phạm vi dịch vụ</h3>
<ul>
  <li><strong>Tư vấn &amp; khảo sát:</strong> Đo đạc, đánh giá địa chất, nhu cầu gia đình.</li>
  <li><strong>Thiết kế:</strong> Mặt bằng 2D, phối cảnh 3D, hồ sơ kỹ thuật thi công.</li>
  <li><strong>Thi công:</strong> Phần thô, hoàn thiện hoặc trọn gói — giám sát chéo từ TP.HCM.</li>
  <li><strong>Bàn giao:</strong> Hồ sơ hoàn công, hướng dẫn bảo trì, bảo hành kết cấu 10 năm.</li>
</ul>`;
}

function materialsSection(b: Brief): string {
  if (b.category !== "build") return "";
  const kw = b.focusKeyword;
  return `<h2>Vật liệu thi công khi ${kw}</h2>
<p>Sao Khuê cam kết vật liệu đúng chủng loại hợp đồng — có phiếu xuất xưởng, kiểm tra tại công trình Đắk Lắk.</p>
<h3>Vật liệu kết cấu</h3>
<ul>
  <li><strong>Bê tông:</strong> Mác 250–300 tùy hạng mục (móng, cột, dầm).</li>
  <li><strong>Cốt thép:</strong> Thép Việt Nhật, Hòa Phát — đúng chủng loại bản vẽ.</li>
  <li><strong>Gạch xây:</strong> Block hoặc gạch đỏ tiêu chuẩn TCVN.</li>
</ul>
<h3>Vật liệu hoàn thiện (gói trọn gói)</h3>
<ul>
  <li>Gạch lát nền, ốp tường WC — theo cấp hạng hợp đồng.</li>
  <li>Sơn nước trong / ngoài — Jotun, Dulux hoặc tương đương.</li>
  <li>Cửa nhôm Xingfa, kính cường lực — đúng hãng thỏa thuận.</li>
</ul>`;
}

function processSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.category === "repair") {
    return `<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Tiếp nhận &amp; khảo sát:</strong> Ghi nhận hiện trạng — thấm, nứt, điện nước, ảnh chụp từng khu vực.</li>
  <li><strong>Báo giá chi tiết:</strong> Tách từng hạng mục, thời gian, vật tư — không ép ký gói thừa.</li>
  <li><strong>Che chắn &amp; thi công:</strong> Bảo vệ đồ đạc, vệ sinh hàng ngày, giám sát kỹ thuật.</li>
  <li><strong>Nghiệm thu từng phần:</strong> Chống thấm, điện nước, hoàn thiện — ký biên bản.</li>
  <li><strong>Bảo hành:</strong> Theo hạng mục — chống thấm 3–5 năm, hoàn thiện 1–2 năm.</li>
</ol>
<p>Tham khảo thêm: ${hubLinksHtml(b.slug)}.</p>`;
  }
  if (b.category === "renovate") {
    return `<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Khảo sát &amp; đề xuất:</strong> Đo hiện trạng, phác thảo phương án mới, phối cảnh 3D (nếu đổi mặt tiền).</li>
  <li><strong>Dự toán &amp; hợp đồng:</strong> Tiến độ, thanh toán 4–5 đợt theo giai đoạn.</li>
  <li><strong>Gia cố (nếu cần):</strong> Xử lý kết cấu trước khi đục tường, mở rộng phòng.</li>
  <li><strong>Thi công cải tạo:</strong> Điện nước âm tường, hoàn thiện, lắp cửa thiết bị.</li>
  <li><strong>Bàn giao &amp; bảo hành:</strong> Vệ sinh, hướng dẫn sử dụng, biên bản nghiệm thu.</li>
</ol>
<p>Tham khảo: ${hubLinksHtml(b.slug)}.</p>`;
  }
  return `<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Tư vấn &amp; khảo sát:</strong> Trao đổi nhu cầu, đo đạc lô đất, đánh giá địa chất bazan tại Đắk Lắk.</li>
  <li><strong>Thiết kế 2D/3D:</strong> Mặt bằng, phối cảnh ngoại thất — chỉnh sửa đến khi chủ nhà duyệt.</li>
  <li><strong>Dự toán &amp; hợp đồng:</strong> Báo giá từng hạng mục, tiến độ, chuẩn vật liệu, điều khoản bảo hành.</li>
  <li><strong>Thi công kết cấu:</strong> Móng, khung, mái — nghiệm thu từng giai đoạn, nhật ký + ảnh tiến độ.</li>
  <li><strong>Hoàn thiện &amp; bàn giao:</strong> Trát, lát, sơn, lắp cửa thiết bị — đúng hợp đồng.</li>
</ol>
<p>Tham khảo thêm: ${hubLinksHtml(b.slug)}.</p>`;
}

function costSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.category === "repair") {
    return `<h2>Chi phí ${kw} (ước tính 2026)</h2>
<table>
  <thead><tr><th>Loại sửa chữa</th><th>Đơn giá tham khảo</th><th>Thời gian</th></tr></thead>
  <tbody>
    <tr><td>Sửa nhẹ (sơn, lát)</td><td>1,5 – 3 triệu đ/m²</td><td>2–4 tuần</td></tr>
    <tr><td>Sửa WC, bếp, mái</td><td>4 – 7 triệu đ/m²</td><td>1–2 tháng</td></tr>
    <tr><td>Sửa toàn diện + gia cố</td><td>8 – 15 triệu đ/m²</td><td>2–4 tháng</td></tr>
  </tbody>
</table>
<p><em>Giá chưa gồm thiết kế nội thất. Liên hệ để khảo sát và báo giá chính xác theo hiện trạng nhà.</em></p>`;
  }
  if (b.category === "renovate") {
    return `<h2>Chi phí ${kw} (ước tính 2026)</h2>
<table>
  <thead><tr><th>Phạm vi cải tạo</th><th>Đơn giá tham khảo</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Cải tạo một phần (bếp, WC)</td><td>3 – 6 triệu đ/m²</td><td>Không đụng kết cấu</td></tr>
    <tr><td>Cải tạo toàn căn</td><td>6 – 12 triệu đ/m²</td><td>Điện nước + hoàn thiện mới</td></tr>
    <tr><td>Tái thiết + gia cố</td><td>10 – 18 triệu đ/m²</td><td>Thay đổi lớn công năng</td></tr>
  </tbody>
</table>`;
  }
  return `<h2>Chi phí ${kw} (tham khảo 2026)</h2>
<table>
  <thead><tr><th>Gói thi công</th><th>Đơn giá (đ/m² sàn)</th><th>Đặc điểm</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>3.000.000 – 4.200.000</td><td>Móng, khung, mái</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>6.000.000 – 8.500.000</td><td>Hoàn thiện cơ bản</td></tr>
    <tr><td>Trọn gói cao cấp</td><td>9.000.000 – 13.000.000</td><td>Vật liệu tốt, thiết bị cao cấp</td></tr>
  </tbody>
</table>
<p><em>(*) Chưa gồm nội thất rời. Nhà 2 tầng 100 m² sàn trọn gói tiêu chuẩn khoảng 600 triệu – 850 triệu (tham khảo).</em></p>`;
}

function mistakesSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.category === "repair") {
    return `<h2>Sai lầm thường gặp khi ${kw}</h2>
<ul>
  <li><strong>Chỉ trát lại mà không xử lý thấm gốc</strong> — ố vàng tái phát sau mùa mưa.</li>
  <li><strong>Tự thuê thợ rời</strong> — không đồng bộ tiến độ, khó đòi bảo hành.</li>
  <li><strong>Bỏ qua gia cố</strong> khi tường nứt lớn — nguy cơ an toàn.</li>
  <li><strong>Không nghiệm thu chống thấm</strong> — thi công lớp waterproof ẩu.</li>
</ul>`;
  }
  if (b.category === "renovate") {
    return `<h2>Sai lầm thường gặp khi ${kw}</h2>
<ul>
  <li><strong>Đục tường không đánh giá kết cấu</strong> — ảnh hưởng cột, dầm chịu lực.</li>
  <li><strong>Cải tạo từng phần rời rạc</strong> — màu sơn, gạch không đồng bộ.</li>
  <li><strong>Tiết kiệm chống thấm</strong> — sân thượng thấm sau 1–2 mùa mưa.</li>
  <li><strong>Không xin phép</strong> khi thay đổi mặt tiền, nâng tầng — rủi ro pháp lý.</li>
</ul>`;
  }
  return `<h2>Sai lầm thường gặp khi ${kw}</h2>
<ul>
  <li><strong>Không khảo sát địa chất</strong> — móng sai, phát sinh đắt trên đất bazan.</li>
  <li><strong>Thi công mùa mưa không che chắn</strong> — bê tông ảnh hưởng chất lượng.</li>
  <li><strong>Chọn nhà thầu giá rẻ bất thường</strong> — đổi vật tệ, phát sinh giữa chừng.</li>
  <li><strong>Không có hợp đồng rõ ràng</strong> — tranh chấp tiến độ, bảo hành.</li>
  <li><strong>Bỏ qua thiết kế</strong> — nhà thiếu sáng, thông gió kém tại cao nguyên.</li>
</ul>`;
}

function notesSection(): string {
  return `<h2>Lưu ý khi triển khai tại Đắk Lắk</h2>
<p>Đắk Lắk có đặc thù khí hậu và địa hình khác vùng đồng bằng — áp dụng kinh nghiệm thi công miền Nam cần điều chỉnh:</p>
<ul>
  <li><strong>Cách nhiệt:</strong> Tường, mái, kính Low-E — tiết kiệm điện sưởi/điều hòa ban đêm se lạnh.</li>
  <li><strong>Mái dốc ≥ 15°:</strong> Thoát nước mưa nhanh — tránh đọng nước, thấm trần.</li>
  <li><strong>Móng trên bazan:</strong> Khảo sát kỹ — tránh đào sâu vùng đá, xử lý nền yếu.</li>
  <li><strong>Mùa thi công:</strong> Ưu tiên đổ móng, khung tháng 12 – tháng 4; hoàn thiện có thể mùa mưa nếu mái kín.</li>
  <li><strong>Vận chuyển:</strong> Lên kế hoạch vật tư đặc chủng sớm — khoảng cách từ TP.HCM ~340 km.</li>
</ul>`;
}

function whyChooseSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Vì sao chọn Sao Khuê cho ${kw}?</h2>
<ul>
  <li><strong>Kinh nghiệm Tây Nguyên &amp; miền Nam:</strong> Đã triển khai nhiều công trình tại Đắk Lắk — am hiểu khí hậu, địa hình.</li>
  <li><strong>Một đầu mối:</strong> Thiết kế + thi công (hoặc sửa chữa trọn gói) — tránh lệch bản vẽ và phát sinh.</li>
  <li><strong>Bảo hành kết cấu 10 năm</strong> (xây mới) / bảo hành theo hạng mục (sửa, cải tạo).</li>
  <li><strong>Báo giá minh bạch:</strong> Dự toán từng hạng mục — thanh toán theo tiến độ nghiệm thu.</li>
  <li><strong>Giám sát từ xa:</strong> Ảnh, video tiến độ hàng tuần qua Zalo — thuận tiện chủ nhà ở TP.HCM.</li>
</ul>
<p>Xem thêm <a href="/dich-vu/xay-nha-tron-goi">dịch vụ xây nhà trọn gói</a> và <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> trên website Sao Khuê.</p>`;
}

function checklistSection(b: Brief): string {
  const kw = b.focusKeyword;
  const verb = b.category === "build" ? "khởi công" : "bắt đầu sửa chữa/cải tạo";
  return `<h2>Checklist trước khi ${verb} — ${kw}</h2>
<p>Chuẩn bị kỹ trước khi ký hợp đồng giúp giảm rủi ro phát sinh và tranh chấp tiến độ tại Đắk Lắk:</p>
<ul>
  <li><strong>Giấy tờ đất:</strong> Sổ đỏ, quy hoạch, ranh giới — xác nhận không tranh chấp.</li>
  <li><strong>Khảo sát địa chất:</strong> Đặc biệt đất bazan, vùng dốc — ảnh hưởng móng và chi phí.</li>
  <li><strong>Ngân sách dự phòng:</strong> Thêm 10–15% cho phát sinh ngoài dự kiến (điện nước ngầm, đất yếu).</li>
  <li><strong>Thời gian sinh hoạt:</strong> Nếu ở trong nhà khi sửa — lên kế hoạch tách khu vực thi công.</li>
  <li><strong>Giấy phép xây dựng:</strong> Sao Khuê hỗ trợ hồ sơ nếu công trình yêu cầu.</li>
  <li><strong>Phong cách &amp; công năng:</strong> Số phòng, gara, kinh doanh — thống nhất trước khi vẽ.</li>
</ul>`;
}

function timelineSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.category === "repair") {
    return `<h2>Thời gian thi công ${kw}</h2>
<table>
  <thead><tr><th>Quy mô</th><th>Thời gian ước tính</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Sửa một phòng (WC, bếp)</td><td>2 – 3 tuần</td><td>Không đụng kết cấu</td></tr>
    <tr><td>Sửa mái, chống thấm</td><td>1 – 2 tuần</td><td>Ưu tiên mùa khô</td></tr>
    <tr><td>Sửa toàn căn</td><td>2 – 4 tháng</td><td>Gia cố + hoàn thiện</td></tr>
  </tbody>
</table>
<p>Tiến độ thực tế phụ thuộc hiện trạng nhà và thời tiết — Sao Khuê cam kết báo cáo tiến độ hàng tuần.</p>`;
  }
  if (b.category === "renovate") {
    return `<h2>Thời gian thi công ${kw}</h2>
<table>
  <thead><tr><th>Phạm vi</th><th>Thời gian ước tính</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Cải tạo mặt tiền</td><td>3 – 6 tuần</td><td>Có thể ở trong nhà</td></tr>
    <tr><td>Cải tạo toàn căn</td><td>2 – 4 tháng</td><td>Điện nước + hoàn thiện</td></tr>
    <tr><td>Tái thiết + gia cố</td><td>4 – 6 tháng</td><td>Thay đổi lớn công năng</td></tr>
  </tbody>
</table>`;
  }
  return `<h2>Thời gian thi công ${kw}</h2>
<table>
  <thead><tr><th>Quy mô nhà</th><th>Thời gian trọn gói</th><th>Giai đoạn chính</th></tr></thead>
  <tbody>
    <tr><td>Nhà 1 tầng 80–100 m² sàn</td><td>4 – 5 tháng</td><td>Móng 3–4 tuần, khung 6–8 tuần, hoàn thiện 6–8 tuần</td></tr>
    <tr><td>Nhà 2 tầng 120–150 m² sàn</td><td>5 – 7 tháng</td><td>Thêm thời gian giàn giáo, cầu thang</td></tr>
    <tr><td>Nhà 3–4 tầng</td><td>7 – 10 tháng</td><td>Nghiệm thu từng tầng</td></tr>
  </tbody>
</table>
<p>Ưu tiên đổ móng, khung tháng 12 – tháng 4 (mùa khô Đắk Lắk) — rút ngắn rủi ro mưa ảnh hưởng bê tông.</p>`;
}

function contractSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Hợp đồng và thanh toán khi ${kw}</h2>
<p>Sao Khuê áp dụng mô hình thanh toán theo tiến độ nghiệm thu — minh bạch, bảo vệ quyền lợi chủ đầu tư:</p>
<ol>
  <li><strong>Đợt 1 (20–30%):</strong> Ký hợp đồng, triển khai móng hoặc khảo sát + chuẩn bị mặt bằng.</li>
  <li><strong>Đợt 2 (25–30%):</strong> Hoàn thành khung BTCT / gia cố kết cấu chính.</li>
  <li><strong>Đợt 3 (25–30%):</strong> Hoàn thành mái, tường, điện nước âm tường.</li>
  <li><strong>Đợt 4 (15–20%):</strong> Hoàn thiện, nghiệm thu, bàn giao.</li>
</ol>
<p>Hợp đồng ghi rõ: vật liệu, đơn giá, thời gian, bảo hành, xử lý phát sinh. Chủ nhà không thanh toán đợt tiếp theo khi hạng mục trước chưa nghiệm thu.</p>
<p>Liên hệ <strong>0909 075 668</strong> hoặc <a href="/bao-gia">báo giá online</a> để nhận mẫu hợp đồng và dự toán chi tiết cho <strong>${kw}</strong>.</p>`;
}

function faqSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.locality ? ` tại ${b.locality}` : " tại Đắk Lắk";
  const buildFaq = `
<h3>${kw} có cần giấy phép xây dựng không?</h3>
<p>Tùy quy mô và quy hoạch. Nhà ở riêng lẻ dưới ngưỡng quy định có thể miễn giấy phép — nhưng nên xác nhận với UBND phường/xã${loc}. Sao Khuê hỗ trợ làm hồ sơ khi cần.</p>
<h3>Chi phí ${kw} tính theo m² sàn hay diện tích đất?</h3>
<p>Đơn giá xây dựng thường tính theo <strong>m² sàn xây dựng</strong> (tổng diện tích các tầng). Diện tích đất chỉ ảnh hưởng móng, sân vườn — báo riêng trong dự toán.</p>
<h3>Sao Khuê ở TP.HCM, thi công${loc} có giám sát không?</h3>
<p>Có. Đội hiện trường tại Đắk Lắk + giám sát kỹ thuật từ TP.HCM. Báo cáo ảnh, video tiến độ hàng tuần qua Zalo — chủ nhà theo dõi từ xa.</p>
<h3>Bảo hành ${kw} bao lâu?</h3>
<p>Xây mới: bảo hành kết cấu 10 năm. Sửa chữa, cải tạo: chống thấm 3–5 năm, hoàn thiện 1–2 năm — theo biên bản nghiệm thu từng hạng mục.</p>
<h3>Có khảo sát miễn phí không?</h3>
<p>Có — khảo sát sơ bộ lô đất hoặc hiện trạng nhà miễn phí trong phạm vi Đắk Lắk. Báo giá chi tiết sau khi có số đo và nhu cầu rõ ràng.</p>
<h3>Nên thi công mùa nào tại Đắk Lắk?</h3>
<p>Ưu tiên móng, khung tháng 12 – tháng 4 (mùa khô). Hoàn thiện có thể mùa mưa nếu mái đã kín và che chắn tốt.</p>`;
  const repairFaq = `
<h3>${kw} mất bao lâu?</h3>
<p>Sửa nhẹ 2–4 tuần; sửa toàn căn 2–4 tháng tùy hiện trạng. Sao Khuê báo tiến độ cụ thể sau khảo sát.</p>
<h3>Có thể ở trong nhà khi sửa không?</h3>
<p>Có thể với sửa từng phần — Sao Khuê che chắn, vệ sinh hàng ngày. Sửa toàn diện nên tạm chuyển khu vực sinh hoạt.</p>
<h3>Chi phí ${kw} phát sinh thường do đâu?</h3>
<p>Phát hiện thêm hư hỏng kết cấu, điện nước ngầm, tường nứt sâu — cần báo chủ nhà trước khi thi công bổ sung.</p>
<h3>Sửa xong có bảo hành không?</h3>
<p>Có — chống thấm 3–5 năm, hoàn thiện 1–2 năm theo hạng mục. Biên bản nghiệm thu kèm hợp đồng.</p>
<h3>Sao Khuê có nhận sửa từng hạng mục không?</h3>
<p>Có — không bắt buộc gói trọn. Chủ nhà chọn sửa mái, WC, điện nước riêng lẻ hoặc trọn gói.</p>
<h3>Khi nào nên gia cố thay vì chỉ trát lại?</h3>
<p>Khi vết nứt rộng hơn 2 mm, sàn lún, cột nghiêng — cần kỹ sư đánh giá trước khi hoàn thiện.</p>`;
  const renovateFaq = `
<h3>${kw} khác sửa chữa thế nào?</h3>
<p>Cải tạo thay đổi công năng, mặt tiền, bố trí phòng — sửa chữa chủ yếu khắc phục hư hỏng. Cải tạo thường đầu tư lớn hơn nhưng nâng giá trị nhà rõ rệt.</p>
<h3>Cải tạo nhà cũ${loc} có cần phá tường không?</h3>
<p>Tùy phương án — mở rộng phòng, giếng trời cần đục tường có đánh giá kết cấu. Sao Khuê khảo sát trước khi đề xuất.</p>
<h3>Chi phí ${kw} so với xây mới?</h3>
<p>Thường tiết kiệm 30–50% nếu kết cấu còn tốt. Nếu móng yếu, có thể xây mới kinh tế hơn — tư vấn miễn phí.</p>
<h3>Có thiết kế 3D trước khi cải tạo không?</h3>
<p>Có — đặc biệt khi đổi mặt tiền, bố trí phòng. Chủ nhà duyệt phối cảnh trước khi thi công.</p>
<h3>Thời gian cải tạo ảnh hưởng kinh doanh tầng trệt?</h3>
<p>Sao Khuê lên tiến độ tách giai đoạn — thi công ban đêm hoặc theo từng mặt tiền nếu cần giảm gián đoạn.</p>
<h3>Bảo hành sau cải tạo?</h3>
<p>Theo hạng mục: chống thấm 3–5 năm, hoàn thiện 1–2 năm, gia cố theo thỏa thuận hợp đồng.</p>`;
  const body =
    b.category === "repair" ? repairFaq : b.category === "renovate" ? renovateFaq : buildFaq;
  return `<h2>Câu hỏi thường gặp về ${kw}</h2>${body}`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const materials = materialsSection(b);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, {
      slug: b.slug,
      intent: b.category === "repair" ? "repair" : b.category === "renovate" ? "renovation" : "build",
      location: "Đắk Lắk",
    }),
    metaTitle: buildCtrMetaTitle(kw, {
      slug: b.slug,
      intent: b.category === "repair" ? "repair" : b.category === "renovate" ? "renovation" : "build",
    }),
    metaDescription: buildCtrMetaDescription(kw, {
      slug: b.slug,
      intent: b.category === "repair" ? "repair" : b.category === "renovate" ? "renovation" : "build",
      location: "Đắk Lắk",
    }),
    metaKeywords: buildMetaKeywords(kw, b.category),
    imageAlt: kw,
    imageCaption: `${kw} — thi công Sao Khuê`,
    content: `
<h2>${h2Lead} — Giải pháp chuyên nghiệp tại Đắk Lắk</h2>
${introParagraph(b)}

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${whenNeededSection(b)}

${topicSection(b)}

${materials}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

${processSection(b)}

${costSection(b)}

${mistakesSection(b)}

${checklistSection(b)}

${timelineSection(b)}

${contractSection(b)}

${notesSection()}

${whyChooseSection(b)}

${clusterLinksSection(b)}

${faqSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

function briefFromInput(input: { slug: string; title: string; focusKeyword: string }): Brief {
  return {
    slug: input.slug,
    title: input.title,
    focusKeyword: input.focusKeyword,
    category: categoryOf(input.slug),
    topic: detectTopic(input.slug),
    locality: detectLocality(input.slug),
  };
}

/** Dùng chung cho batch4, phu-yen-dak-lak (region DL) và mien-trung-sua (province DL). */
export function buildDakLakSeoArticle(input: {
  slug: string;
  title: string;
  focusKeyword: string;
}): SeoArticleShape {
  return buildArticle(briefFromInput(input));
}

function clusterLinksSection(b: Brief): string {
  const kw = b.focusKeyword;
  const pillars = [
    { href: "/tin-tuc/xay-dung-nha-dak-lak", label: "xây dựng nhà Đắk Lắk" },
    { href: "/tin-tuc/sua-chua-nha-dak-lak", label: "sửa chữa nhà Đắk Lắk" },
    { href: "/tin-tuc/cai-tao-nha-dak-lak", label: "cải tạo nhà Đắk Lắk" },
    { href: "/tin-tuc/xay-nha-tron-goi-dak-lak", label: "xây nhà trọn gói Đắk Lắk" },
    { href: "/tin-tuc/xay-nha-dep-dak-lak", label: "xây nhà đẹp Đắk Lắk" },
  ].filter((p) => !p.href.endsWith(b.slug));

  const relatedPool = dakLakKeywordCalendarBatch4
    .map((item) => ({ slug: item.slug!, keyword: item.keyword }))
    .filter((item) => item.slug !== b.slug && categoryOf(item.slug) === b.category);

  const localityMatch = b.locality
    ? relatedPool.find((r) => detectLocality(r.slug) === b.locality)
    : undefined;
  const related = [
    ...(localityMatch ? [localityMatch] : []),
    ...relatedPool.filter((r) => r.slug !== localityMatch?.slug),
  ].slice(0, 4);

  const pillarList = pillars
    .slice(0, 3)
    .map((p) => `<li><a href="${p.href}">${p.label}</a></li>`)
    .join("\n  ");
  const relatedList = related
    .map((r) => `<li><a href="/tin-tuc/${r.slug}">${r.keyword}</a></li>`)
    .join("\n  ");

  return `<h2>Bài viết liên quan — ${kw}</h2>
<p>Tham khảo thêm các trang trụ cột và bài cùng chủ đề tại <strong>Đắk Lắk</strong>:</p>
<h3>Trang trụ cột</h3>
<ul>
  ${pillarList}
</ul>
<h3>Cùng nhóm dịch vụ</h3>
<ul>
  ${relatedList}
</ul>`;
}

const briefs: Brief[] = dakLakKeywordCalendarBatch4.map((item) => briefFromInput({
  slug: item.slug!,
  title: item.title,
  focusKeyword: item.keyword,
}));

export const dakLakBatch4ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const dakLakBatch4Slugs = briefs.map((b) => b.slug);

export function getDakLakBatch4Article(slug: string): SeoArticleShape | undefined {
  return dakLakBatch4ArticlesBySlug[slug];
}

/**
 * 50 bài tin tức SEO — nhôm kính TP.HCM batch #14 (#897–#946).
 * Chuẩn: 1500+ từ, ≥6 H2, 1 ảnh/bài (không logo), meta Rank Math.
 */
import {
  buildCtrExcerpt,
  buildCtrMetaDescription,
  buildCtrMetaTitle,
  homeLinkParagraph,
  imageFigure,
  seoCtaBlock,
} from "../article-seo-blocks";
import { nhomKinhKeywordCalendarBatch10 } from "../nhom-kinh-keyword-calendar-batch10";
import { nhomKinhArticleImage } from "../site-images";

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

type Topic =
  | "service"
  | "door"
  | "pricing"
  | "partition"
  | "facade"
  | "specialty"
  | "guide"
  | "district";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  topic: Topic;
  districtLabel?: string;
};

const NHOM_KINH_HUB = [
  { href: "/tin-tuc/cua-nhom-kinh-tphcm", label: "cửa nhôm kính TP.HCM" },
  { href: "/tin-tuc/thi-cong-nhom-kinh-tron-goi-tphcm", label: "thi công nhôm kính trọn gói" },
  { href: "/tin-tuc/bang-gia-nhom-kinh-tphcm", label: "bảng giá nhôm kính TP.HCM" },
  { href: "/tin-tuc/vach-ngan-nhom-kinh-van-phong", label: "vách ngăn nhôm kính văn phòng" },
  { href: "/tin-tuc/mat-dung-nhom-kinh-tphcm", label: "mặt dựng nhôm kính TP.HCM" },
];

function detectTopic(slug: string): Topic {
  if (
    slug.includes("nen-chon") ||
    slug.includes("khac-nhau") ||
    slug.includes("cach-chon") ||
    slug.includes("uu-nhuoc") ||
    slug.includes("xu-huong") ||
    slug.includes("phu-kien") ||
    slug.includes("kinh-nghiem")
  )
    return "guide";
  if (
    slug.includes("bao-gia") ||
    slug.includes("bang-gia") ||
    slug.includes("gia-cua") ||
    slug.includes("gia-thi-cong") ||
    slug.includes("chi-phi")
  )
    return "pricing";
  if (slug.includes("mat-dung") || slug.includes("thi-cong-mat-dung")) return "facade";
  if (
    slug.includes("vach-ngan") ||
    slug.includes("vach-kinh") ||
    slug.includes("mau-vach")
  )
    return "partition";
  if (
    slug.includes("lan-can") ||
    slug.includes("cau-thang") ||
    slug.includes("phong-tam") ||
    slug.includes("buong-tam") ||
    slug.includes("mai-kinh") ||
    slug.includes("tu-bep") ||
    slug.includes("cua-luoi")
  )
    return "specialty";
  if (
    slug.includes("cua-nhom") ||
    slug.includes("cua-di") ||
    slug.includes("mau-cua")
  )
    return "door";
  if (
    slug.includes("quan-7") ||
    slug.includes("thu-duc") ||
    slug.includes("binh-tan") ||
    slug.includes("tan-phu")
  )
    return "district";
  if (slug.includes("thi-cong") || slug.includes("nha-thau")) return "service";
  return "service";
}

function districtFromSlug(slug: string): string | undefined {
  const map: Record<string, string> = {
    "quan-7": "Quận 7",
    "thu-duc": "TP. Thủ Đức",
    "binh-tan": "Quận Bình Tân",
    "tan-phu": "Quận Tân Phú",
  };
  for (const [key, label] of Object.entries(map)) {
    if (slug.includes(key)) return label;
  }
  return undefined;
}

function buildMetaKeywords(kw: string, topic: Topic): string {
  const pool: Record<Topic, string[]> = {
    service: ["thi công nhôm kính TP.HCM", "nhà thầu nhôm kính", "lắp đặt cửa nhôm kính", "nhôm kính trọn gói"],
    door: ["cửa nhôm kính TP.HCM", "cửa nhôm Xingfa", "cửa nhôm slim", "cửa đi nhôm kính"],
    pricing: ["báo giá cửa nhôm kính", "giá nhôm kính 1m2", "bảng giá nhôm kính 2026", "chi phí nhôm kính"],
    partition: ["vách ngăn nhôm kính", "vách kính cường lực", "vách ngăn văn phòng", "phân chia không gian kính"],
    facade: ["mặt dựng nhôm kính", "facade nhôm kính", "vách dựng kính", "thi công mặt dựng"],
    specialty: ["lan can kính", "cầu thang kính", "phòng tắm kính", "buồng tắm kính cường lực"],
    guide: ["kinh nghiệm nhôm kính", "chọn cửa nhôm kính", "nhôm Xingfa hệ 55", "phụ kiện cửa nhôm"],
    district: ["nhôm kính TP.HCM", "thi công nhôm kính quận", "cửa nhôm kính giá rẻ", "lắp cửa nhôm kính"],
  };
  const extras = pool[topic].filter((k) => k.toLowerCase() !== kw.toLowerCase()).slice(0, 4);
  return [kw, ...extras, "kiến trúc sao khuê"].join(", ");
}

function introParagraph(b: Brief): string {
  const loc = b.districtLabel ? ` tại <strong>${b.districtLabel}</strong>` : " tại <strong>TP.HCM</strong>";
  const kw = b.focusKeyword;
  return `<p><strong>${kw}</strong> là chủ đề được nhiều chủ nhà, kiến trúc sư và nhà thầu quan tâm${loc}. Nhôm kính ngày càng phổ biến trong thiết kế nhà phố, biệt thự, văn phòng và showroom nhờ khả năng lấy sáng tự nhiên, thẩm mỹ hiện đại và độ bền vượt trội so với khung gỗ hay sắt thông thường.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) tư vấn và thi công <strong>${kw}</strong> — khảo sát miễn phí, báo giá minh bạch theo hạng mục, bảo hành thi công và vật tư theo hợp đồng. Hotline <strong>0909 075 668</strong>.</p>`;
}

function whenNeededSection(b: Brief): string {
  const kw = b.focusKeyword;
  const items: Record<Topic, string[]> = {
    service: [
      "Xây mới hoặc cải tạo nhà — cần lắp cửa, vách, lan can đồng bộ.",
      "Thay thế cửa gỗ, cửa sắt cũ — muốn giảm bảo trì, tăng độ bền.",
      "Mở rộng mặt tiền kính — tăng ánh sáng cho nhà phố hẹp.",
      "Hoàn thiện giai đoạn cuối công trình — cần đơn vị thi công nhôm kính uy tín.",
    ],
    door: [
      "Cửa chính, cửa phòng ngủ, cửa ban công cần cách âm, cách nhiệt.",
      "Nhà phố cần cửa lùa tiết kiệm diện tích mở.",
      "Biệt thự, penthouse ưu tiên cửa slim hoặc Xingfa cao cấp.",
      "Showroom, văn phòng cần cửa kính lớn tạo điểm nhấn.",
    ],
    pricing: [
      "Chuẩn bị ngân sách trước khi ký hợp đồng thi công.",
      "So sánh báo giá giữa nhiều đơn vị — cần bảng giá chi tiết.",
      "Lên kế hoạch đầu tư cho từng hạng mục nhôm kính.",
      "Tránh phát sinh do thiếu thông số kỹ thuật trong báo giá.",
    ],
    partition: [
      "Văn phòng cần phân chia phòng họp, khu làm việc mà vẫn lấy sáng.",
      "Nhà phố muốn ngăn phòng khách – bếp bằng vách kính.",
      "Showroom, spa cần không gian mở, sang trọng.",
      "Căn hộ cần tách phòng ngủ mà không làm tối không gian.",
    ],
    facade: [
      "Tòa nhà văn phòng, trung tâm thương mại cần mặt dựng kính.",
      "Showroom, cửa hàng thời trang — mặt tiền kính thu hút khách.",
      "Biệt thự hiện đại — facade nhôm kính tạo điểm nhấn kiến trúc.",
      "Cải tạo mặt tiền nhà phố — thay tường gạch bằng kính.",
    ],
    specialty: [
      "Cầu thang, ban công cần lan can kính an toàn, thẩm mỹ.",
      "Phòng tắm, buồng tắm — kính cường lực chống bám nước.",
      "Sân thượng, sân vườn — mái kính lấy sáng.",
      "Nhà bếp — tủ bếp nhôm kính chống ẩm, dễ vệ sinh.",
    ],
    guide: [
      "Lần đầu làm nhôm kính — cần hiểu loại nhôm, kính, phụ kiện.",
      "Phân vân giữa Xingfa, slim, Việt Pháp.",
      "Muốn tránh mua phải nhôm kém chất lượng.",
      "Cần kinh nghiệm thực tế trước khi ký hợp đồng.",
    ],
    district: [
      "Chủ nhà tại khu vực cần đơn vị thi công gần, khảo sát nhanh.",
      "Công trình nhà phố, biệt thự khu dân cư mới.",
      "Văn phòng, shophouse cần hoàn thiện nhôm kính.",
      "Cải tạo nhà cũ — thay cửa, vách ngăn mới.",
    ],
  };
  const list = items[b.topic]
    .map((item) => `<li>${item}</li>`)
    .join("\n  ");
  return `<h2>Khi nào cần ${kw}?</h2>
<p>Gia chủ và chủ đầu tư nên quan tâm <strong>${kw}</strong> trong các trường hợp sau:</p>
<ul>
  ${list}
</ul>`;
}

function pricingTableSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Bảng giá tham khảo — ${kw}</h2>
<p>Giá <strong>${kw}</strong> năm 2026 phụ thuộc hệ nhôm (Xingfa hệ 55/93, slim, Việt Pháp), loại kính (cường lực 8–12mm, kính dán an toàn, Low-E), phụ kiện (Kinlong, CMECH, HOPO) và độ phức tạp thi công. Bảng dưới mang tính tham khảo — Sao Khuê báo giá chính xác sau khảo sát.</p>
<table>
  <thead><tr><th>Hạng mục</th><th>Đơn giá tham khảo (2026)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Cửa nhôm Xingfa hệ 55</td><td>1.500.000 – 2.200.000 đ/m²</td><td>Cửa sổ, cửa đi 1–2 cánh</td></tr>
    <tr><td>Cửa nhôm Xingfa hệ 93</td><td>1.700.000 – 2.500.000 đ/m²</td><td>Cửa lùa, cửa lớn</td></tr>
    <tr><td>Cửa nhôm slim</td><td>3.500.000 – 6.500.000 đ/m²</td><td>Khung mỏng, cao cấp</td></tr>
    <tr><td>Vách ngăn nhôm kính</td><td>850.000 – 1.800.000 đ/m²</td><td>Vách cố định, ray lùa</td></tr>
    <tr><td>Mặt dựng nhôm kính</td><td>2.200.000 – 5.500.000 đ/m²</td><td>Facade, vách dựng</td></tr>
    <tr><td>Lan can kính cường lực</td><td>1.200.000 – 2.500.000 đ/m</td><td>Tay vịn inox + kính 10–12mm</td></tr>
    <tr><td>Buồng tắm kính</td><td>2.500.000 – 5.000.000 đ/bộ</td><td>Tùy kích thước, phụ kiện</td></tr>
  </tbody>
</table>
<p>Yếu tố ảnh hưởng giá: độ dày nhôm (1.4–2.0mm), màu sơn (trắng, đen, gỗ), kính màu, phụ kiện nhập khẩu, vận chuyển và lắp đặt tại công trình. Liên hệ <a href="/bao-gia">báo giá online</a> hoặc hotline <strong>0909 075 668</strong>.</p>`;
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.districtLabel ?? "TP.HCM";

  switch (b.topic) {
    case "door":
      return `<h2>${kw} — Loại cửa và ứng dụng</h2>
<p><strong>Cửa nhôm kính</strong> là hạng mục phổ biến nhất trong ngành nhôm kính. Tùy vị trí lắp đặt và nhu cầu sử dụng, có các loại chính:</p>
<ul>
  <li><strong>Cửa mở quay:</strong> 1–4 cánh, phù hợp cửa chính, phòng ngủ, WC — mở tối đa 100% khung cửa.</li>
  <li><strong>Cửa lùa trượt:</strong> Tiết kiệm diện tích, lý tưởng ban công, cửa ra sân vườn.</li>
  <li><strong>Cửa xếp trượt:</strong> Mở rộng không gian liên thông phòng khách – sân vườn.</li>
  <li><strong>Cửa slim:</strong> Khung mỏng 20–35mm, thẩm mỹ cao cấp cho biệt thự, penthouse.</li>
</ul>
<h3>Hệ nhôm phổ biến tại ${loc}</h3>
<ul>
  <li><strong>Xingfa hệ 55:</strong> Cửa sổ, cửa đi nhỏ — giá tốt, bền.</li>
  <li><strong>Xingfa hệ 93:</strong> Cửa lùa, cửa lớn — chịu lực tốt hơn.</li>
  <li><strong>Nhôm slim:</strong> Khung siêu mỏng, kính lớn — xu hướng 2026.</li>
</ul>
<p>Kính thường dùng: cường lực 8–10mm (cửa đi), 6–8mm (cửa sổ). Phụ kiện Kinlong, CMECH đảm bảo cửa vận hành êm, bền.</p>`;
    case "partition":
      return `<h2>${kw} — Giải pháp phân chia không gian</h2>
<p><strong>Vách ngăn nhôm kính</strong> thay thế tường gạch truyền thống — tối ưu ánh sáng tự nhiên, mở rộng tầm nhìn mà vẫn phân chia công năng rõ ràng.</p>
<h3>Các loại vách ngăn phổ biến</h3>
<ul>
  <li><strong>Vách cố định:</strong> Khung nhôm + kính cường lực — phòng họp, cầu thang.</li>
  <li><strong>Vách ray lùa:</strong> Cánh trượt trên ray âm/nổi — tiết kiệm không gian.</li>
  <li><strong>Vách kính cường lực:</strong> Không khung hoặc khung tối giản — sang trọng.</li>
</ul>
<p>Ứng dụng: văn phòng, nhà phố, showroom, spa, phòng khách – bếp. Sao Khuê thi công vách ngăn đúng tiêu chuẩn an toàn kính cường lực TCVN.</p>`;
    case "facade":
      return `<h2>${kw} — Mặt dựng hiện đại</h2>
<p><strong>Mặt dựng nhôm kính</strong> (facade) bao che ngoại thất tòa nhà — thay thế tường gạch, tối ưu ánh sáng và tạo diện mạo kiến trúc ấn tượng.</p>
<h3>Hệ mặt dựng phổ biến</h3>
<ul>
  <li><strong>Hệ lộ đố:</strong> Khung nhôm lộ bên ngoài — giá tốt, thi công nhanh.</li>
  <li><strong>Hệ giấu đố:</strong> Khung ẩn — thẩm mỹ cao, phù hợp cao ốc.</li>
  <li><strong>Hệ spider (chân nhện):</strong> Kính điểm treo — showroom, sảnh lớn.</li>
</ul>
<p>Ứng dụng: văn phòng, TTTM, khách sạn, showroom ô tô. Cần tính toán gió, tải trọng và chống thấm kỹ thuật.</p>`;
    case "specialty":
      return `<h2>${kw} — Sản phẩm chuyên biệt</h2>
<p>Ngoài cửa và vách ngăn, ngành nhôm kính còn nhiều hạng mục chuyên biệt phục vụ nhu cầu cụ thể:</p>
<ul>
  <li><strong>Lan can kính cường lực:</strong> Cầu thang, ban công — tay vịn inox + kính 10–12mm.</li>
  <li><strong>Cầu thang kính:</strong> Lan can kính dán hoặc trụ đỡ — sang trọng, hiện đại.</li>
  <li><strong>Phòng tắm / buồng tắm kính:</strong> Kính cường lực 8–10mm, phụ kiện chống bám nước.</li>
  <li><strong>Mái kính nhôm:</strong> Sân thượng, sân vườn — lấy sáng, chống UV.</li>
  <li><strong>Tủ bếp nhôm kính:</strong> Chống ẩm, dễ vệ sinh — thay thế tủ gỗ.</li>
  <li><strong>Cửa lưới chống muỗi:</strong> Kết hợp cửa nhôm — thông gió, chống côn trùng.</li>
</ul>`;
    case "guide":
      return `<h2>${kw} — Kiến thức cần biết</h2>
<p>Trước khi đầu tư nhôm kính, chủ nhà nên nắm các kiến thức cơ bản để chọn đúng sản phẩm và tránh rủi ro:</p>
<h3>So sánh hệ nhôm</h3>
<ul>
  <li><strong>Xingfa hệ 55:</strong> Độ dày profile ~55mm — cửa sổ, cửa đi nhỏ, giá tốt.</li>
  <li><strong>Xingfa hệ 93:</strong> Profile ~93mm — cửa lùa, cửa lớn, cách âm tốt hơn.</li>
  <li><strong>Slim:</strong> Khung 20–35mm — thẩm mỹ cao, giá cao hơn 50–100%.</li>
</ul>
<h3>Phụ kiện nên chọn</h3>
<p>Kinlong, CMECH, HOPO — phụ kiện nhập khẩu đảm bảo cửa vận hành êm, bền 10–15 năm. Tránh phụ kiện không rõ nguồn gốc — dễ hỏng bản lề, khóa sau 2–3 năm.</p>
<h3>Xu hướng 2026</h3>
<p>Khung slim mỏng, kính lớn, màu đen nhám, cửa lùa ray âm, kính Low-E cách nhiệt — đang dẫn đầu thị trường TP.HCM.</p>`;
    case "pricing":
      return pricingTableSection(b);
    case "district":
      return `<h2>${kw} — Đặc thù tại ${loc}</h2>
<p>Sao Khuê triển khai <strong>${kw}</strong> tại <strong>${loc}</strong> — khảo sát thực địa, đo đạc chính xác, thi công đúng tiến độ và bàn giao có biên bản nghiệm thu.</p>
<h3>Thực tế thi công tại ${loc}</h3>
<ul>
  <li>Am hiểu quy hoạch, điều kiện vận chuyển vật tư vào hẻm, chung cư.</li>
  <li>Đội thợ có kinh nghiệm nhà phố, biệt thự khu vực.</li>
  <li>Báo giá minh bạch — không phát sinh ngoài hợp đồng.</li>
  <li>Bảo hành thi công và vật tư theo cam kết.</li>
</ul>`;
    default:
      return `<h2>${kw} — Dịch vụ trọn gói</h2>
<p><strong>Thi công nhôm kính trọn gói</strong> gồm: khảo sát, đo đạc, gia công tại xưởng, vận chuyển và lắp đặt tại công trình. Sao Khuê đảm bảo vật tư đúng hợp đồng — nhôm Xingfa chính hãng, kính cường lực đạt chuẩn, phụ kiện đồng bộ.</p>
<h3>Quy trình thi công</h3>
<ol>
  <li>Khảo sát hiện trường — đo kích thước chính xác.</li>
  <li>Báo giá chi tiết theo hạng mục — ký hợp đồng.</li>
  <li>Gia công tại xưởng — kiểm tra chất lượng trước khi xuất kho.</li>
  <li>Lắp đặt tại công trình — nghiệm thu từng hạng mục.</li>
  <li>Bàn giao và bảo hành theo hợp đồng.</li>
</ol>`;
  }
}

function materialsSection(): string {
  return `<h2>Vật liệu và tiêu chuẩn kỹ thuật</h2>
<p>Chất lượng <strong>nhôm kính</strong> phụ thuộc trực tiếp vào vật tư đầu vào. Sao Khuê cam kết sử dụng:</p>
<ul>
  <li><strong>Nhôm định hình:</strong> Xingfa Quảng Đông / Xingfa Việt Nam — độ dày 1.4–2.0mm, sơn tĩnh điện chống oxy hóa.</li>
  <li><strong>Kính:</strong> Cường lực 8–12mm (cửa đi, lan can), kính dán an toàn 6.38–8.38mm (mặt dựng), kính Low-E (cách nhiệt).</li>
  <li><strong>Phụ kiện:</strong> Kinlong, CMECH, HOPO — bản lề, khóa, tay nắm nhập khẩu.</li>
  <li><strong>Keo silicon:</strong> Dow Corning, GE — chống thấm, chịu UV.</li>
</ul>
<p>Yêu cầu kiểm tra: tem nhôm Xingfa, chứng nhận kính cường lực, bảo hành phụ kiện từ nhà sản xuất.</p>`;
}

function processSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Quy trình ${kw} tại Sao Khuê</h2>
<ol>
  <li><strong>Tiếp nhận &amp; tư vấn:</strong> Hotline/Zalo — lắng nghe nhu cầu, hẹn khảo sát.</li>
  <li><strong>Khảo sát miễn phí:</strong> Đo đạc tại công trình, tư vấn hệ nhôm, loại kính phù hợp.</li>
  <li><strong>Báo giá chi tiết:</strong> Bảng giá từng hạng mục — ký hợp đồng khi thống nhất.</li>
  <li><strong>Gia công xưởng:</strong> Cắt nhôm, ép góc, lắp kính — kiểm tra QC trước xuất kho.</li>
  <li><strong>Lắp đặt thi công:</strong> Đội thợ chuyên nghiệp — nghiệm thu từng hạng mục.</li>
  <li><strong>Bàn giao &amp; bảo hành:</strong> Biên bản nghiệm thu, hướng dẫn bảo trì, bảo hành theo HĐ.</li>
</ol>`;
}

function mistakesSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Lỗi thường gặp khi ${kw}</h2>
<ul>
  <li><strong>Chọn nhôm kém chất lượng:</strong> Nhôm mỏng, không tem — dễ cong, phai màu sau 2–3 năm.</li>
  <li><strong>Kính không đạt chuẩn:</strong> Kính thường thay cường lực — nguy hiểm khi vỡ.</li>
  <li><strong>Phụ kiện rẻ tiền:</strong> Bản lề, khóa hỏng sớm — cửa kẹt, khó đóng mở.</li>
  <li><strong>Thi công ẩu:</strong> Keo silicon kém, khe hở — thấm nước, ồn.</li>
  <li><strong>Báo giá thiếu hạng mục:</strong> Phát sinh vận chuyển, phụ kiện — vượt ngân sách.</li>
</ul>
<p>Chọn đơn vị có công trình tham chiếu, hợp đồng rõ ràng và bảo hành cụ thể — tránh rủi ro khi <strong>${kw}</strong>.</p>`;
}

function checklistSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Checklist trước khi ký hợp đồng ${kw}</h2>
<ul>
  <li>☐ Xác nhận hệ nhôm (Xingfa hệ 55/93, slim) và nguồn gốc tem.</li>
  <li>☐ Loại kính (cường lực, dán an toàn) và độ dày (mm).</li>
  <li>☐ Thương hiệu phụ kiện (Kinlong, CMECH…) và thời hạn bảo hành.</li>
  <li>☐ Màu sơn nhôm (trắng, đen, gỗ…) — mẫu màu ký nhận.</li>
  <li>☐ Thời gian thi công và tiến độ thanh toán.</li>
  <li>☐ Phạm vi bảo hành: thi công, vật tư, phụ kiện.</li>
  <li>☐ Công trình tham chiếu — xem ảnh thực tế hoặc thăm công trình.</li>
</ul>`;
}

function faqSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Câu hỏi thường gặp — ${kw}</h2>
<h3>Giá ${kw} bao nhiêu?</h3>
<p>Giá phụ thuộc hệ nhôm, loại kính, kích thước và số lượng. Cửa Xingfa hệ 55 thường 1.5–2.2 triệu đ/m²; slim 3.5–6.5 triệu đ/m². Liên hệ hotline <strong>0909 075 668</strong> để báo giá chính xác.</p>
<h3>Thời gian thi công bao lâu?</h3>
<p>Cửa nhôm 5–10 bộ: 3–7 ngày. Vách ngăn 20–50m²: 5–10 ngày. Mặt dựng lớn: 2–4 tuần tùy quy mô. Gia công xưởng 5–10 ngày trước khi lắp.</p>
<h3>Bảo hành như thế nào?</h3>
<p>Sao Khuê bảo hành thi công 2 năm, vật tư theo nhà sản xuất (nhôm 5–10 năm, phụ kiện 2–5 năm). Hỗ trợ bảo trì sau bảo hành.</p>
<h3>Có khảo sát miễn phí không?</h3>
<p>Có — khảo sát và tư vấn miễn phí trong nội thành TP.HCM. Báo giá chi tiết sau khảo sát, không phát sinh khi chưa thống nhất.</p>`;
}

function clusterLinksSection(b: Brief): string {
  const kw = b.focusKeyword;
  const related = nhomKinhKeywordCalendarBatch10
    .filter((item) => item.slug !== b.slug && detectTopic(item.slug!) === b.topic)
    .slice(0, 4);

  const pillarList = NHOM_KINH_HUB.filter((p) => !p.href.endsWith(b.slug))
    .slice(0, 3)
    .map((p) => `<li><a href="${p.href}">${p.label}</a></li>`)
    .join("\n  ");
  const relatedList = related
    .map((r) => `<li><a href="/tin-tuc/${r.slug}">${r.keyword}</a></li>`)
    .join("\n  ");

  return `<h2>Bài viết liên quan — ${kw}</h2>
<h3>Trang trụ cột nhôm kính</h3>
<ul>
  ${pillarList}
</ul>
<h3>Cùng chủ đề</h3>
<ul>
  ${relatedList}
</ul>`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const loc = b.districtLabel ?? "TP.HCM";
  const img = nhomKinhArticleImage(b.slug);

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic: b.topic }),
    metaDescription: buildCtrMetaDescription(kw, { slug: b.slug, batchTopic: b.topic, location: loc }),
    metaKeywords: buildMetaKeywords(kw, b.topic),
    imageAlt: kw,
    imageCaption: `${kw} — thi công Sao Khuê`,
    content: `
<h2>${h2Lead} — Giải pháp chuyên nghiệp tại ${loc}</h2>
${introParagraph(b)}

${imageFigure(img, kw, 1)}

${whenNeededSection(b)}

${topicSection(b)}

${materialsSection()}

${processSection(b)}

${mistakesSection(b)}

${checklistSection(b)}

${clusterLinksSection(b)}

${faqSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}
`.trim(),
  };
}

const briefs: Brief[] = nhomKinhKeywordCalendarBatch10.map((item) => ({
  slug: item.slug!,
  title: item.title,
  focusKeyword: item.keyword,
  topic: detectTopic(item.slug!),
  districtLabel: districtFromSlug(item.slug!),
}));

export const nhomKinhBatch10ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const nhomKinhBatch10Slugs = briefs.map((b) => b.slug);

export function getNhomKinhBatch10Article(slug: string): SeoArticleShape | undefined {
  return nhomKinhBatch10ArticlesBySlug[slug];
}

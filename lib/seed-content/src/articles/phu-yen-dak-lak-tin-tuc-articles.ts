/**
 * 30 bài tin tức SEO — Phú Yên & Đắk Lắk (batch #31–#60).
 * Sinh từ lịch từ khóa; mỗi bài: H1=title, slug, meta, 3 ảnh, không FAQ.
 */
import { homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { buildDakLakSeoArticle } from "./dak-lak-tin-tuc-articles-batch4";
import { phuYenDakLakKeywordCalendar } from "../phu-yen-dak-lak-keyword-calendar";
import { phuYenDakLakKeywordCalendarBatch3 } from "../phu-yen-dak-lak-keyword-calendar-batch3";
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

type Region = "phu-yen" | "dak-lak";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  region: Region;
  topic: string;
};

const PHU_YEN_HUB = [
  "/tin-tuc/xay-dung-nha-phu-yen",
  "/tin-tuc/thi-cong-nha-pho-phu-yen",
  "/tin-tuc/thiet-ke-nha-dep-phu-yen",
  "/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen",
];

const DAK_LAK_HUB = [
  "/tin-tuc/xay-dung-nha-dak-lak",
  "/tin-tuc/thiet-ke-nha-pho-dak-lak",
  "/tin-tuc/xay-nha-tron-goi-dak-lak",
  "/tin-tuc/chi-phi-xay-nha-2-tang-dak-lak",
];

function regionOf(slug: string): Region {
  if (slug.includes("dak-lak") || slug.includes("buon-") || slug.includes("ea-kar") || slug.includes("krong-buk"))
    return "dak-lak";
  return "phu-yen";
}

function detectTopic(slug: string): string {
  if (slug.includes("sua-chua")) return "renovation";
  if (slug.includes("cai-tao")) return "renovation";
  if (slug.includes("nang-tang")) return "extend";
  if (slug.includes("giay-phep")) return "permit";
  if (slug.includes("gia-re")) return "budget";
  if (slug.includes("homestay")) return "homestay";
  if (slug.includes("shophouse")) return "shophouse";
  if (slug.includes("nha-ong")) return "rowhouse";
  if (slug.includes("nha-vuon") || slug.includes("vuon-phu-yen")) return "garden";
  if (slug.includes("tron-goi")) return "turnkey";
  if (slug.includes("cong-ty") || slug.includes("nha-thau")) return "contractor";
  if (slug.includes("chi-phi") || slug.includes("bao-gia")) return "pricing";
  if (slug.includes("mau-nha") || slug.includes("kien-truc")) return "sample";
  if (slug.includes("thiet-ke")) return "design";
  if (slug.includes("phan-tho")) return "rough";
  if (slug.includes("hoan-thien")) return "finish";
  if (slug.includes("biet-thu")) return "villa";
  if (slug.includes("cap-4")) return "cap4";
  if (slug.includes("ven-bien")) return "coastal";
  if (slug.includes("2-tang") || slug.includes("3-tang") || slug.includes("1-tret")) return "floors";
  if (
    slug.includes("tuy-hoa") ||
    slug.includes("song-cau") ||
    slug.includes("buon-ma-thuot") ||
    slug.includes("buon-ho") ||
    slug.includes("dong-hoa") ||
    slug.includes("tuy-an") ||
    slug.includes("ea-kar") ||
    slug.includes("krong-buk")
  )
    return "locality";
  if (slug.includes("nha-pho")) return "townhouse";
  return "general";
}

function regionLabel(r: Region): string {
  return r === "phu-yen" ? "Phú Yên" : "Đắk Lắk";
}

function regionCity(r: Region): string {
  return r === "phu-yen" ? "Tuy Hòa" : "Buôn Ma Thuột";
}

function hubLinks(r: Region, excludeSlug: string): string {
  const hubs = r === "phu-yen" ? PHU_YEN_HUB : DAK_LAK_HUB;
  const labels =
    r === "phu-yen"
      ? ["xây dựng nhà Phú Yên", "thi công nhà phố Phú Yên", "thiết kế nhà đẹp Phú Yên", "báo giá xây nhà Phú Yên"]
      : ["xây dựng nhà Đắk Lắk", "thiết kế nhà phố Đắk Lắk", "xây nhà trọn gói Đắk Lắk", "chi phí xây nhà 2 tầng Đắk Lắk"];
  return hubs
    .filter((h) => !h.endsWith(excludeSlug))
    .slice(0, 3)
    .map((h, i) => `<a href="${h}">${labels[i]}</a>`)
    .join(", ");
}

function introParagraph(b: Brief): string {
  const city = regionCity(b.region);
  const climate =
    b.region === "phu-yen"
      ? "khí hậu ven biển nắng gió, hơi muối và mùa mưa bão"
      : "khí hậu cao nguyên mát, mưa lớn theo mùa và nền đất bazan";
  return `<p><strong>${b.focusKeyword}</strong> là nhu cầu thực tế của nhiều gia đình và nhà đầu tư tại <strong>${regionLabel(b.region)}</strong> — đặc biệt khu vực <strong>${city}</strong> và các huyện lân cận. Với ${climate}, việc chọn đơn vị có kinh nghiệm giúp tránh phát sinh chi phí do thấm nước, nứt kết cấu hoặc thiết kế không phù hợp.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (TP.HCM) triển khai dịch vụ <strong>${b.focusKeyword}</strong> từ khảo sát, tư vấn, thi công đến bàn giao — cam kết <strong>bảo hành kết cấu 10 năm</strong> và báo giá minh bạch theo hạng mục.</p>`;
}

function topicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const r = b.region;
  const city = regionCity(r);

  switch (b.topic) {
    case "contractor":
      return `<h2>${kw} — Tiêu chí chọn đơn vị uy tín</h2>
<ul>
  <li><strong>Hồ sơ pháp lý rõ ràng:</strong> Giấy phép kinh doanh, hợp đồng thi công chi tiết.</li>
  <li><strong>Công trình tham chiếu:</strong> Ảnh tiến độ, biên bản nghiệm thu tại ${regionLabel(r)}.</li>
  <li><strong>Giám sát kỹ thuật:</strong> Nghiệm thu móng, cốt thép, chống thấm từng giai đoạn.</li>
  <li><strong>Bảo hành bằng văn bản:</strong> Kết cấu 10 năm, hạng mục hoàn thiện theo biên bản.</li>
</ul>
<h2>Dịch vụ ${kw} của Sao Khuê</h2>
<p>Sao Khuê nhận <strong>thiết kế + thi công trọn gói</strong> hoặc từng hạng mục tại ${city} và toàn tỉnh. Hotline <strong>0909 075 668</strong>.</p>`;

    case "pricing":
      return `<h2>Bảng giá tham khảo — ${kw}</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Đơn giá (2026)</th><th>Ghi chú</th></tr></thead>
  <tbody>
    <tr><td>Phần thô</td><td>${r === "phu-yen" ? "3,2 – 4,5" : "3,0 – 4,2"} triệu đ/m² sàn</td><td>Móng, khung, mái</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>${r === "phu-yen" ? "6,5 – 9" : "6 – 8,5"} triệu đ/m² sàn</td><td>Hoàn thiện cơ bản</td></tr>
    <tr><td>Trọn gói cao cấp</td><td>${r === "phu-yen" ? "10 – 14" : "9 – 13"} triệu đ/m² sàn</td><td>Vật liệu tốt, nội thất</td></tr>
  </tbody>
</table>
<h2>Yếu tố ảnh hưởng ${kw}</h2>
<ul>
  <li>Diện tích sàn, số tầng, độ phức tạp móng.</li>
  <li>Vật liệu hoàn thiện (gạch, sơn, thiết bị vệ sinh).</li>
  <li>Vị trí công trình — chi phí vận chuyển vật tư tại ${regionLabel(r)}.</li>
</ul>
<p>Dùng <a href="/bao-gia">báo giá online</a> hoặc gọi hotline để nhận dự toán theo m² thực tế.</p>`;

    case "sample":
    case "design":
      return `<h2>${kw} — Phong cách và công năng</h2>
<p>Sao Khuê tư vấn <strong>mặt bằng tối ưu</strong>, phối cảnh 3D và hồ sơ kỹ thuật thi công — phù hợp ${r === "phu-yen" ? "nhà phố ven biển, giếng trời thông gió" : "nhà phố cao nguyên, mái dốc thoát mưa"}.</p>
<ul>
  <li><strong>Hiện đại:</strong> Mặt tiền gọn, kính cường lực, ban công xanh.</li>
  <li><strong>Tối giản:</strong> Chi phí hợp lý, công năng đủ dùng cho gia đình trẻ.</li>
  <li><strong>Indochine / Tropical:</strong> ${r === "phu-yen" ? "Mái hiên rộng, chịu nắng gió biển" : "Sân vườn, hành lang thoáng Tây Nguyên"}.</li>
</ul>
<h2>Hồ sơ thiết kế bàn giao</h2>
<p>Mặt bằng các tầng, mặt đứng, mặt cắt, phối cảnh 3D, dự toán sơ bộ và tư vấn xin phép xây dựng tại ${regionLabel(r)}.</p>`;

    case "rough":
      return `<h2>${kw} — Phạm vi và tiêu chuẩn</h2>
<p>Gói <strong>phần thô</strong> bao gồm: đào móng, cốt thép, đổ bê tông, xây tường, dầm sàn, kết cấu mái — chưa hoàn thiện nội thất.</p>
<ul>
  <li><strong>Móng:</strong> Theo khảo sát địa chất ${regionLabel(r)}.</li>
  <li><strong>Khung BTCT:</strong> Nghiệm thu cốt thép trước mỗi lần đổ.</li>
  <li><strong>Mái:</strong> ${r === "phu-yen" ? "Chống bão, thoát nước nhanh" : "Dốc đủ, chống thấm trần mùa mưa"}.</li>
</ul>
<p>Chủ nhà có thể tự hoàn thiện hoặc ký tiếp gói trọn gói với Sao Khuê.</p>`;

    case "finish":
      return `<h2>${kw} — Hạng mục hoàn thiện</h2>
<ul>
  <li><strong>Trát, sơn, lát gạch</strong> — WC, bếp, phòng ngủ.</li>
  <li><strong>Trần thạch cao, cửa, lan can</strong> theo bản vẽ.</li>
  <li><strong>Điện nước, chống giật</strong> — an toàn cho gia đình.</li>
  <li><strong>Nội thất tùy chọn:</strong> Tủ bếp, tủ âm tường theo ngân sách.</li>
</ul>
<p>Sao Khuê khảo sát nhà phần thô hiện có tại ${city} trước khi báo giá — tránh phát sinh bất ngờ.</p>`;

    case "villa":
      return `<h2>${kw} — Giải pháp Sao Khuê</h2>
<p>Biệt thự tại ${regionLabel(r)} thường trên lô đất rộng — cần thiết kế sân vườn, hồ bơi (nếu có) và ${r === "phu-yen" ? "chống muối biển" : "cách nhiệt tốt cho khí hậu cao nguyên"}.</p>
<ul>
  <li>Thiết kế 2D/3D theo phong cách chủ nhà.</li>
  <li>Kết cấu chịu tải, móng phù hợp địa hình.</li>
  <li>Hoàn thiện cao cấp hoặc tiêu chuẩn — linh hoạt ngân sách.</li>
</ul>`;

    case "cap4":
      return `<h2>${kw} — Giải pháp tiết kiệm</h2>
<p>Nhà cấp 4 phù hợp gia đình ngân sách vừa phải tại ${regionLabel(r)}: 1 trệt, móng đơn hoặc băng, thi công nhanh 2–4 tháng.</p>
<ul>
  <li>Diện tích 60–120 m² sàn phổ biến.</li>
  <li>Có thể nâng cấp lên 1 trệt 1 lầu khi tài chính ổn định.</li>
  <li>Sao Khuê tư vấn mở rộng sau này ngay từ khâu móng.</li>
</ul>`;

    case "coastal":
      return `<h2>${kw} — Kỹ thuật chống muối và chống bão</h2>
<ul>
  <li><strong>Vật liệu:</strong> Thép, bu lông inox gần biển; sơn chống muối.</li>
  <li><strong>Chống thấm:</strong> Mái, ban công, tường hướng biển — lớp waterproof kép.</li>
  <li><strong>Mái và cửa sổ:</strong> Chịu gió, neo chắc theo tiêu chuẩn vùng bão.</li>
</ul>
<p>Khu Sông Cầu, Tuy An, Đông Hòa là các khu vực Sao Khuê thường triển khai <strong>${kw}</strong>.</p>`;

    case "floors":
      return `<h2>${kw} — Quy mô và chi phí</h2>
<p>Nhà nhiều tầng tại ${city} cần khảo sát móng kỹ — đặc biệt ${r === "phu-yen" ? "đất đồi ven biển" : "đất bazan và đồi Tây Nguyên"}.</p>
<ul>
  <li><strong>Thiết kế:</strong> Cầu thang, giếng trời, thông tầng hợp lý.</li>
  <li><strong>Thi công:</strong> Giàn giáo an toàn, nghiệm thu sàn từng tầng.</li>
  <li><strong>Thời gian:</strong> Thường 4–8 tháng tùy diện tích và gói hoàn thiện.</li>
</ul>`;

    case "locality":
      return `<h2>${kw} — Đặc thù địa phương</h2>
<p>Sao Khuê đã triển khai nhiều công trình tại khu vực này — am hiểu quy hoạch, giấy phép xây dựng và đội thợ địa phương có tay nghề.</p>
<ul>
  <li>Khảo sát lô đất tận nơi hoặc trực tuyến.</li>
  <li>Báo giá theo hạng mục, tiến độ thanh toán rõ ràng.</li>
  <li>Giám sát kỹ thuật từ TP.HCM + hiện trường.</li>
</ul>`;

    case "townhouse":
      return `<h2>${kw} — Tối ưu mặt tiền hẹp</h2>
<p>Nhà phố tại ${city} thường mặt tiền 4–5 m, sâu 15–20 m. Sao Khuê tối ưu <strong>giếng trời, thông tầng</strong> và phòng ngủ đủ sáng.</p>
<ul>
  <li>2–4 tầng, kinh doanh tầng trệt (nếu cần).</li>
  <li>Chống thấm sân thượng — bắt buộc tại ${regionLabel(r)}.</li>
  <li>Nội thất hiện đại, tiết kiệm điện.</li>
</ul>`;

    case "renovation":
      return `<h2>${kw} — Khảo sát và thi công</h2>
<p>Sao Khuê nhận <strong>sửa chữa, cải tạo nhà cũ</strong> tại ${regionLabel(r)}: chống thấm, gia cố kết cấu, thay điện nước, tái bố trí phòng.</p>
<ul>
  <li>Khảo sát hiện trạng miễn phí trước khi báo giá.</li>
  <li>Báo giá theo hạng mục — tránh phát sinh bất ngờ.</li>
  <li>Che chắn công trình, vệ sinh hàng ngày khi thi công.</li>
</ul>`;

    case "extend":
      return `<h2>${kw} — Gia cố trước khi mở rộng</h2>
<p><strong>Nâng tầng nhà phố</strong> tại ${city} cần đánh giá móng, cột, tường chịu lực. Sao Khuê lập phương án gia cố và hồ sơ xin phép trước khi thi công.</p>
<ul>
  <li>Khảo sát kết cấu hiện hữu bằng kỹ thuật.</li>
  <li>Thiết kế tầng mới đồng bộ mặt tiền.</li>
  <li>Thi công an toàn, nghiệm thu từng giai đoạn.</li>
</ul>`;

    case "permit":
      return `<h2>${kw} — Hỗ trợ hồ sơ pháp lý</h2>
<p>Xây dựng tại ${regionLabel(r)} cần <strong>giấy phép xây dựng</strong> đúng quy định. Sao Khuê tư vấn chuẩn bị hồ sơ: bản vẽ, sổ đất, đơn đề nghị theo mẫu địa phương.</p>
<ul>
  <li>Tư vấn loại công trình được phép xây.</li>
  <li>Hồ sơ thiết kế đạt chuẩn nộp cơ quan.</li>
  <li>Đồng hành chủ nhà trong quá trình thẩm định.</li>
</ul>`;

    case "budget":
      return `<h2>${kw} — Tối ưu ngân sách</h2>
<p>Sao Khuê đề xuất phương án <strong>xây nhà tiết kiệm</strong> tại ${regionLabel(r)}: mặt bằng gọn, vật liệu hợp lý, thi công trọn gói một đầu mối — tránh phát sinh.</p>
<ul>
  <li>Chọn gói phần thô hoặc trọn gói tiêu chuẩn.</li>
  <li>Ưu tiên công năng thiết yếu trước trang trí.</li>
  <li>Dự toán minh bạch từng hạng mục.</li>
</ul>`;

    case "homestay":
      return `<h2>${kw} — Thiết kế lưu trú ven biển</h2>
<p><strong>Homestay Phú Yên</strong> cần thiết kế riêng phòng, sân chung, bếp và ${r === "phu-yen" ? "chống muối biển" : "không gian mở thoáng"}.</p>
<ul>
  <li>Phòng ngủ đủ tiện nghi, WC riêng hoặc chung.</li>
  <li>Khu vực check-in, bãi xe, sân BBQ.</li>
  <li>Vật liệu bền, dễ bảo trì khi cho thuê.</li>
</ul>`;

    case "shophouse":
      return `<h2>${kw} — Kết hợp ở và kinh doanh</h2>
<p>Shophouse tại ${city} — tầng trệt kinh doanh, tầng trên sinh hoạt. Sao Khuê tối ưu mặt tiền, thang máy (nếu cần) và hệ thống điện nước tách biệt.</p>
<ul>
  <li>Thiết kế mặt tiền thu hút khách.</li>
  <li>Kết cấu chịu tải khu vực bán hàng.</li>
  <li>Thông thoáng, an toàn PCCC.</li>
</ul>`;

    case "rowhouse":
      return `<h2>${kw} — Tối ưu nhà ống hẹp</h2>
<p><strong>Nhà ống</strong> mặt tiền 3,5–4 m tại ${regionLabel(r)} — giải pháp giếng trời, cầu thang sáng và phòng ngủ đủ thông gió.</p>
<ul>
  <li>2–4 tầng, công năng đủ cho gia đình 4–6 người.</li>
  <li>Tận dụng sân sau, phòng thờ (nếu cần).</li>
  <li>Chi phí hợp lý hơn nhà ngang rộng.</li>
</ul>`;

    case "garden":
      return `<h2>${kw} — Không gian xanh</h2>
<p>Nhà vườn tại ${regionLabel(r)} — sân trước, sân sau, cây cảnh. Sao Khuê thiết kế mở rộng sinh hoạt ngoài trời, mái hiên che mưa nắng.</p>
<ul>
  <li>Lô đất rộng 150–300 m² phổ biến.</li>
  <li>Kết hợp 1–2 tầng, gara, sân BBQ.</li>
  <li>Móng phù hợp địa hình ${r === "phu-yen" ? "đồi ven biển" : "cao nguyên"}.</li>
</ul>`;

    case "turnkey":
      return `<h2>${kw} — Một đầu mối từ A đến Z</h2>
<p>Gói <strong>thi công trọn gói</strong> tại ${regionLabel(r)}: thiết kế (nếu cần), vật tư, nhân công, giám sát, bàn giao — chủ nhà không phải tự chạy nhiều nhà thầu.</p>
<ul>
  <li>Báo giá khóa theo hợp đồng hoặc theo hạng mục.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
  <li>Tiến độ rõ ràng, cập nhật hình ảnh công trình.</li>
</ul>`;

    default:
      return `<h2>${kw} — Dịch vụ trọn gói</h2>
<p>Sao Khuê cung cấp trọn gói: khảo sát → thiết kế → thi công → bàn giao tại ${regionLabel(r)}. Một đầu mối, tránh lệch bản vẽ và phát sinh giữa chừng.</p>
<ul>
  <li>Báo giá minh bạch từng hạng mục.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
  <li>Hỗ trợ hồ sơ pháp lý xây dựng.</li>
</ul>`;
  }
}

function processSection(b: Brief): string {
  return `<h2>Quy trình ${b.focusKeyword} tại Sao Khuê</h2>
<ol>
  <li><strong>Tư vấn &amp; khảo sát:</strong> Trao đổi nhu cầu, đo đạc lô đất tại ${regionLabel(b.region)}.</li>
  <li><strong>Thiết kế / dự toán:</strong> Phương án và báo giá chi tiết.</li>
  <li><strong>Hợp đồng:</strong> Tiến độ, thanh toán theo giai đoạn.</li>
  <li><strong>Thi công:</strong> Giám sát, nhật ký, hình ảnh tiến độ.</li>
  <li><strong>Nghiệm thu &amp; bảo hành:</strong> Bàn giao hồ sơ hoàn công.</li>
</ol>
<p>Tham khảo thêm: ${hubLinks(b.region, b.slug)}.</p>`;
}

function notesSection(b: Brief): string {
  const tips =
    b.region === "phu-yen"
      ? `<ul>
  <li><strong>Chống thấm &amp; muối biển</strong> — bắt buộc gần biển.</li>
  <li><strong>Móng đất đồi:</strong> Khảo sát địa chất trước khi đào.</li>
  <li><strong>Mùa thi công:</strong> Tránh bão kéo dài khi đổ mái.</li>
</ul>`
      : `<ul>
  <li><strong>Cách nhiệt:</strong> Tiết kiệm điện sưởi/điều hòa.</li>
  <li><strong>Mái dốc:</strong> Thoát nước mưa nhanh — tránh thấm trần.</li>
  <li><strong>Móng bazan:</strong> Không đào quá sâu vùng đá.</li>
</ul>`;
  return `<h2>Lưu ý khi triển khai tại ${regionLabel(b.region)}</h2>${tips}`;
}

function buildArticle(b: Brief): SeoArticleShape {
  if (b.region === "dak-lak") {
    return buildDakLakSeoArticle({
      slug: b.slug,
      title: b.title,
      focusKeyword: b.focusKeyword,
    });
  }

  const img1 = slugImage(b.slug, 0);
  const img2 = slugImage(b.slug, 1);
  const img3 = slugImage(b.slug, 2);
  const kw = b.focusKeyword;
  const metaKw = `${kw}, xây nhà ${regionLabel(b.region)}, xây nhà trọn gói ${regionLabel(b.region)}, ${regionCity(b.region)}, kiến trúc sao khuê`;

  const excerpt =
    b.region === "phu-yen"
      ? `${kw}: thiết kế, thi công trọn gói tại Tuy Hòa, Sông Cầu. Sao Khuê bảo hành 10 năm — 0909 075 668.`
      : `${kw}: nhà phố, biệt thự Buôn Ma Thuột. Báo giá minh bạch, giám sát kỹ thuật — 0909 075 668.`;

  const metaTitle =
    kw.length > 42 ? `${kw} | Sao Khuê` : `${kw.charAt(0).toUpperCase() + kw.slice(1)} | Sao Khuê`;

  const metaDescription = `Dịch vụ ${kw} uy tín: khảo sát miễn phí, báo giá rõ ràng, bảo hành kết cấu 10 năm. Kiến Trúc Sao Khuê — 0909 075 668.`;

  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);

  return {
    title: b.title,
    excerpt,
    metaTitle: metaTitle.length > 65 ? `${kw} | Sao Khuê` : metaTitle,
    metaDescription: metaDescription.slice(0, 160),
    metaKeywords: metaKw,
    imageAlt: kw,
    imageCaption: `${kw} — Sao Khuê`,
    content: `
<h2>${h2Lead} — Giải pháp chuyên nghiệp tại ${regionLabel(b.region)}</h2>
${introParagraph(b)}

${imageFigure(img1, kw, 1)}

${topicSection(b)}

${imageFigure(img2, kw, 2)}

${processSection(b)}

${notesSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(img3, kw, 3)}
`.trim(),
  };
}

const ALL_KEYWORD_CALENDAR = [...phuYenDakLakKeywordCalendar, ...phuYenDakLakKeywordCalendarBatch3];

const briefs: Brief[] = ALL_KEYWORD_CALENDAR.map((item) => ({
  slug: item.slug!,
  title: item.title,
  focusKeyword: item.keyword,
  region: regionOf(item.slug!),
  topic: detectTopic(item.slug!),
}));

export const phuYenDakLakTinTucArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const phuYenDakLakTinTucSlugs = briefs.map((b) => b.slug);

/** camelCase export names — dùng khi cần import riêng lẻ */
export function getPhuYenDakLakArticle(slug: string): SeoArticleShape | undefined {
  return phuYenDakLakTinTucArticlesBySlug[slug];
}

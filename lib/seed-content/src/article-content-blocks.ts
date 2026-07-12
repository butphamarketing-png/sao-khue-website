/**
 * Khối nội dung SEO dùng chung — FAQ, bảng giá, lưu ý địa phương cho batch bài viết.
 */

export type ContentIntent = "repair" | "renovation" | "build" | "pricing" | "design" | "general";

export type ContentRegion =
  | "tphcm"
  | "binh-duong"
  | "dong-nai"
  | "long-an"
  | "phu-yen"
  | "dak-lak"
  | "mien-trung"
  | "general";

export function detectContentRegion(location = "", slug = ""): ContentRegion {
  const text = `${location} ${slug}`.toLowerCase();
  if (/tphcm|quan-|go-vap|binh-thanh|thu-duc|tan-phu|nha-be/.test(text)) return "tphcm";
  if (/binh-duong|thu-dau-mot|di-an|tan-uyen/.test(text)) return "binh-duong";
  if (/dong-nai|bien-hoa|long-thanh|nhon-trach/.test(text)) return "dong-nai";
  if (/long-an|tan-an|ben-luc|can-giuoc/.test(text)) return "long-an";
  if (/phu-yen|tuy-hoa|song-cau/.test(text)) return "phu-yen";
  if (/dak-lak|buon-ma-thuot|buon-/.test(text)) return "dak-lak";
  if (/mien-trung|binh-dinh|quy-nhon|khanh-hoa|nha-trang|gia-lai|quang-ngai|hue|kon-tum/.test(text))
    return "mien-trung";
  return "general";
}

function slugVariant(slug: string, count: number): number {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % count;
}

type PriceRow = { label: string; price: string };

const BUILD_PRICES: Record<ContentRegion, PriceRow[]> = {
  tphcm: [
    { label: "Phần thô", price: "3,8 – 5,5 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5,5 – 8 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "8 – 11 triệu đ/m² sàn" },
  ],
  "binh-duong": [
    { label: "Phần thô", price: "3,5 – 5 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5,2 – 7,5 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "7,5 – 10 triệu đ/m² sàn" },
  ],
  "dong-nai": [
    { label: "Phần thô", price: "3,5 – 5 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5,2 – 7,8 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "7,8 – 10 triệu đ/m² sàn" },
  ],
  "long-an": [
    { label: "Phần thô", price: "3,4 – 4,8 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5 – 6,5 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "6,5 – 9 triệu đ/m² sàn" },
  ],
  "phu-yen": [
    { label: "Phần thô", price: "3,6 – 5 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5,3 – 7,2 triệu đ/m² sàn" },
    { label: "Trọn gói ven biển", price: "7 – 9,5 triệu đ/m² sàn" },
  ],
  "dak-lak": [
    { label: "Phần thô", price: "3,5 – 4,9 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5 – 6,8 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "6,8 – 9 triệu đ/m² sàn" },
  ],
  "mien-trung": [
    { label: "Phần thô", price: "3,5 – 5,2 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5,2 – 7,5 triệu đ/m² sàn" },
    { label: "Trọn gói ven biển", price: "7 – 9,5 triệu đ/m² sàn" },
  ],
  general: [
    { label: "Phần thô", price: "3,5 – 5,5 triệu đ/m² sàn" },
    { label: "Trọn gói tiêu chuẩn", price: "5 – 7,5 triệu đ/m² sàn" },
    { label: "Trọn gói cao cấp", price: "7,5 – 10 triệu đ/m² sàn" },
  ],
};

const REPAIR_PRICES: PriceRow[] = [
  { label: "Sơn, trát, lát nhẹ", price: "1,5 – 3 triệu đ/m²" },
  { label: "Cải tạo WC, bếp", price: "4 – 7 triệu đ/m²" },
  { label: "Chống thấm, gia cố", price: "5 – 9 triệu đ/m²" },
  { label: "Cải tạo toàn căn", price: "8 – 15 triệu đ/m²" },
];

function pricingTableHtml(rows: PriceRow[]): string {
  const body = rows
    .map((r) => `<tr><td>${r.label}</td><td><strong>${r.price}</strong></td></tr>`)
    .join("\n    ");
  return `<table>
  <thead><tr><th>Gói / Hạng mục</th><th>Đơn giá tham khảo (2026)</th></tr></thead>
  <tbody>
    ${body}
  </tbody>
</table>`;
}

/** Bảng giá theo intent — dùng trong thân bài batch. */
export function articlePricingTableBlock(
  intent: ContentIntent,
  location = "",
  slug = "",
  keyword = "",
): string {
  const region = detectContentRegion(location, slug);
  const kw = keyword || "dịch vụ";
  if (intent === "repair" || intent === "renovation") {
    return `<h2>Chi phí ${kw} (ước tính 2026)</h2>
<p>Giá phụ thuộc hiện trạng nhà, vật liệu và phạm vi thi công — bảng dưới đây mang tính <strong>tham khảo</strong>:</p>
${pricingTableHtml(REPAIR_PRICES)}
<p>Dùng <a href="/bao-gia">công cụ báo giá online</a> hoặc gọi <strong>0909 075 668</strong> để nhận dự toán sau khảo sát tận nơi.</p>`;
  }
  if (intent === "pricing" || intent === "build") {
    const rows = BUILD_PRICES[region];
    return `<h2>Bảng giá ${kw} tham khảo 2026</h2>
<p>Đơn giá tại <strong>${location || "khu vực của bạn"}</strong> — cập nhật theo thị trường, chưa gồm thiết kế phức tạp hoặc móng đặc biệt:</p>
${pricingTableHtml(rows)}
<p><em>Lưu ý:</em> Báo giá chính thức chỉ sau khảo sát thực tế. Xem thêm <a href="/bao-gia">máy tính chi phí xây dựng</a>.</p>`;
  }
  return "";
}

/** Khi nào cần dịch vụ — đoạn mở rộng theo intent. */
export function articleWhenNeededBlock(intent: ContentIntent, keyword: string, location = ""): string {
  const loc = location ? ` tại ${location}` : "";
  const hooks: Record<ContentIntent, string> = {
    repair: `<h2>Khi nào nên ${keyword}?</h2>
<ul>
  <li>Tường loang, bong tróc sơn sau 5–10 năm ở nhà cũ${loc}.</li>
  <li>Mái, sân thượng thấm dột mỗi mùa mưa — cần xử lý gốc rễ.</li>
  <li>Điện nước cũ, chập chờn hoặc ống gỉ — an toàn gia đình.</li>
  <li>Chuẩn bị cho thuê, bán nhà — cần sửa nhanh, đẹp, đúng ngân sách.</li>
</ul>`,
    renovation: `<h2>Khi nào nên ${keyword}?</h2>
<ul>
  <li>Nhà 15–30 năm${loc} — bố trí lỗi thời, thiếu ánh sáng, WC nhỏ.</li>
  <li>Muốn mở rộng bếp, thêm phòng ngủ mà không xây mới.</li>
  <li>Mặt tiền xuống cấp — cần làm mới để tăng giá trị bất động sản.</li>
  <li>Tiết kiệm 30–50% so với xây mới khi kết cấu còn tốt.</li>
</ul>`,
    build: `<h2>Khi nào nên ${keyword}?</h2>
<ul>
  <li>Có đất/lô đất sạch${loc}, cần xây mới trọn gói một đầu mối.</li>
  <li>Đầu tư nhà ở, shophouse, cho thuê — cần tiến độ và bảo hành rõ.</li>
  <li>Muốn thiết kế riêng (2D/3D) trước khi thi công — tránh phát sinh.</li>
  <li>Cần hồ sơ, giám sát kỹ thuật và bàn giao đúng hợp đồng.</li>
</ul>`,
    pricing: `<h2>Vì sao cần báo giá chi tiết trước khi ký hợp đồng?</h2>
<ul>
  <li>Tránh phát sinh 15–30% do không khảo sát móng, địa hình${loc}.</li>
  <li>So sánh gói phần thô / trọn gói / cao cấp theo ngân sách thực tế.</li>
  <li>Biết rõ hạng mục nào gồm trong báo giá — vật tư, nhân công, hoàn thiện.</li>
</ul>`,
    design: `<h2>Khi nào nên đầu tư thiết kế trước khi xây?</h2>
<ul>
  <li>Lô đất hẹp, hình thế khó${loc} — cần tối ưu mặt bằng và thông gió.</li>
  <li>Xây nhà 2–3 tầng, biệt thự — cần phối cảnh 3D duyệt trước thi công.</li>
  <li>Xin giấy phép xây dựng — cần bản vẽ kỹ thuật đúng quy hoạch.</li>
</ul>`,
    general: `<h2>${keyword} — Ai nên quan tâm?</h2>
<p>Chủ nhà, nhà đầu tư${loc} cần đơn vị uy tín, báo giá minh bạch và bảo hành kết cấu bằng văn bản.</p>`,
  };
  return hooks[intent];
}

/** Lỗi thường gặp — tăng độ sâu nội dung. */
export function articleMistakesBlock(intent: ContentIntent, keyword: string, location = ""): string {
  const loc = location ? ` tại ${location}` : "";
  const items: Record<ContentIntent, string[]> = {
    repair: [
      "Chỉ sơn đè lên tường thấm — không xử lý nguồn nước, 6 tháng lại bong.",
      "Không khảo sát kết cấu trước khi đục tường — dễ ảnh hưởng cột, dầm.",
      "Chọn thợ không bảo hành chống thấm — chi phí sửa lại cao hơn ban đầu.",
    ],
    renovation: [
      "Cải tạo không có bản vẽ — phát sinh chi phí và tranh chấp tiến độ.",
      "Bỏ qua gia cố móng khi nâng tầng — rủi ro an toàn lớn.",
      "Gói giá quá rẻ, không rõ vật tư — hoàn thiện kém, nhanh xuống cấp.",
    ],
    build: [
      "Ký hợp đồng mơ hồ — không nêu rõ đơn giá từng giai đoạn thanh toán.",
      "Không giám sát móng, cốt thép — khó phát hiện gian lận vật tư.",
      "Thi công mùa mưa không che chắn — ảnh hưởng chất lượng bê tông.",
    ],
    pricing: [
      "Tin báo giá qua điện thoại không khảo sát — dễ phát sinh 20–40%.",
      "So sánh gói trọn gói với phần thô mà không đọc kỹ hạng mục.",
      "Không hỏi chính sách bảo hành kết cấu và chống thấm.",
    ],
    design: [
      "Thiết kế đẹp nhưng không phù hợp khí hậu${loc} — nóng, thấm, tốn điện.",
      "Không có bản vẽ thi công — thợ hiểu sai, phát sinh liên tục.",
      "Bỏ qua quy hoạch, lộ giới — rủi ro khi xin phép.",
    ],
    general: [
      "Chọn nhà thầu không có công trình tham chiếu tại khu vực.",
      "Thanh toán quá nhanh trước khi nghiệm thu từng hạng mục.",
    ],
  };
  const list = items[intent]
    .map((i) => `<li>${i}</li>`)
    .join("\n  ");
  return `<h2>Lỗi thường gặp khi ${keyword}</h2>
<ul>
  ${list}
</ul>
<p>Sao Khuê cam kết báo giá theo hạng mục, nghiệm thu từng giai đoạn — hotline <strong>0909 075 668</strong>.</p>`;
}

/** FAQ theo intent — hỗ trợ schema FAQPage khi prerender. */
export function buildIntentFaq(intent: ContentIntent, keyword: string, location = ""): string {
  const loc = location ? ` tại ${location}` : "";
  const faqs: Record<ContentIntent, { q: string; a: string }[]> = {
    repair: [
      {
        q: `${keyword} mất bao lâu?`,
        a: "Sửa nhẹ 2–4 tuần; cải tạo WC/bếp 4–8 tuần; sửa toàn căn 2–4 tháng. Sao Khuê báo tiến độ cụ thể sau khảo sát.",
      },
      {
        q: `Chi phí ${keyword} tính như thế nào?`,
        a: "Tính theo m² diện tích thi công hoặc từng hạng mục (chống thấm, điện nước, hoàn thiện). Khảo sát miễn phí trước khi báo giá.",
      },
      {
        q: "Có bảo hành sau sửa chữa không?",
        a: "Có — chống thấm 3–5 năm, hoàn thiện 1–2 năm theo biên bản nghiệm thu từng hạng mục.",
      },
      {
        q: `Sao Khuê có nhận ${keyword}${loc} không?`,
        a: "Có — khảo sát tận nơi, báo giá minh bạch, không ép ký gói thừa. Liên hệ 0909 075 668.",
      },
    ],
    renovation: [
      {
        q: `${keyword} khác sửa chữa thế nào?`,
        a: "Cải tạo thay đổi bố trí, mặt tiền, công năng — sửa chữa chủ yếu khắc phục hư hỏng. Cải tạo thường đầu tư lớn hơn nhưng tăng giá trị nhà rõ.",
      },
      {
        q: `Cải tạo có tiết kiệm hơn xây mới${loc}?`,
        a: "Thường tiết kiệm 30–50% nếu móng và khung còn tốt. Kỹ sư khảo sát sẽ tư vấn phương án tối ưu.",
      },
      {
        q: "Có thiết kế 3D trước khi thi công không?",
        a: "Có — đặc biệt khi đổi mặt tiền, mở rộng phòng. Chủ nhà duyệt phối cảnh trước khi thi công.",
      },
      {
        q: "Thời gian cải tạo bao lâu?",
        a: "Cải tạo nhà phố 2–4 tháng; biệt thự 4–6 tháng tùy quy mô và hạng mục.",
      },
    ],
    build: [
      {
        q: `${keyword} mất bao lâu?`,
        a: "Nhà phố 1 trệt 1 lầu: 4–6 tháng; 2–3 tầng: 6–9 tháng. Tiến độ cụ thể trong hợp đồng sau khi chốt thiết kế.",
      },
      {
        q: `Giá ${keyword} bao nhiêu${loc}?`,
        a: "Phần thô từ 3,5 triệu đ/m² sàn; trọn gói 5–8 triệu đ/m² tùy vật liệu. Dùng công cụ /bao-gia hoặc gọi khảo sát miễn phí.",
      },
      {
        q: "Bảo hành kết cấu bao lâu?",
        a: "Sao Khuê bảo hành kết cấu 10 năm — cam kết bằng văn bản trong hợp đồng.",
      },
      {
        q: "Có hỗ trợ xin giấy phép xây dựng không?",
        a: "Có — hỗ trợ tra cứu quy hoạch và hoàn thiện hồ sơ theo quy định địa phương.",
      },
    ],
    pricing: [
      {
        q: `Bảng giá ${keyword} có chính xác không?`,
        a: "Bảng trên website mang tính tham khảo. Báo giá chính thức chỉ sau khảo sát thực tế — không phát sinh khi không đổi hạng mục.",
      },
      {
        q: "Có khảo sát miễn phí không?",
        a: "Có — kỹ sư đến công trình đo đạc, đánh giá hiện trạng và lập dự toán chi tiết.",
      },
      {
        q: "Thanh toán theo tiến độ ra sao?",
        a: "Chia theo giai đoạn: móng, thân nhà, hoàn thiện — nghiệm thu xong mới thanh toán hạng mục tiếp theo.",
      },
    ],
    design: [
      {
        q: `${keyword} gồm những gì?`,
        a: "Mặt bằng 2D, phối cảnh 3D, hồ sơ kỹ thuật thi công và dự toán sơ bộ — tùy gói thiết kế.",
      },
      {
        q: "Thiết kế mất bao lâu?",
        a: "Nhà phố: 2–4 tuần; biệt thự: 4–8 tuần tùy yêu cầu chỉnh sửa phối cảnh.",
      },
      {
        q: "Có tư vấn phong thủy / công năng không?",
        a: "Có — tư vấn hướng nhà, bố trí phòng, thông gió và ánh sáng tự nhiên phù hợp khí hậu.",
      },
    ],
    general: [
      {
        q: `Sao Khuê triển khai ${keyword} như thế nào?`,
        a: "Khảo sát miễn phí → báo giá hạng mục → thi công có giám sát → nghiệm thu và bảo hành.",
      },
      {
        q: "Liên hệ tư vấn?",
        a: "Hotline 0909 075 668, form /lien-he hoặc fanpage Kiến Trúc Sao Khuê.",
      },
    ],
  };
  const body = faqs[intent]
    .map((item) => `<h3>${item.q}</h3>\n<p>${item.a}</p>`)
    .join("\n");
  return `<h2>Câu hỏi thường gặp về ${keyword}</h2>\n${body}`;
}

export type RepairSubtopic = "waterproof" | "electrical" | "structural" | "roof" | "general";

export function detectRepairSubtopic(slug: string): RepairSubtopic {
  const s = slug.toLowerCase();
  if (/chong-tham|tham-dot|chong-muoi/.test(s)) return "waterproof";
  if (/sua-dien|dien-nuoc|dien-tro/.test(s)) return "electrical";
  if (/gia-co|tuong-nut|sua-tuong|nut-tuong/.test(s)) return "structural";
  if (/sua-mai|thay-mai|mai-nha/.test(s)) return "roof";
  return "general";
}

/** Giá tham khảo ngắn cho meta description. */
export function metaPriceHint(intent: ContentIntent, location = "", slug = ""): string {
  const region = detectContentRegion(location, slug);
  if (intent === "repair") return "từ 1,5 triệu/m²";
  if (intent === "renovation") return "tiết kiệm 30–50% so với xây mới";
  if (intent === "pricing" || intent === "build") {
    const rough = BUILD_PRICES[region][1]?.price.split("–")[0]?.trim() ?? "5 triệu";
    const full = BUILD_PRICES[region][1]?.price ?? "5 – 7,5 triệu đ/m² sàn";
    return intent === "pricing" ? `trọn gói ${full}` : `trọn gói ${full}`;
  }
  return "khảo sát miễn phí";
}

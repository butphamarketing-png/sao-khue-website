/**
 * Viết lại bài indexable còn mỏng (<1500 từ) — nội dung độc theo slug,
 * không vá “ghi chú thực tế” chung.
 */
import {
  articlePricingTableBlock,
  type ContentIntent,
} from "./article-content-blocks";
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "./article-seo-blocks";
import { countWordsFromArticleHtml } from "./article-toc";
import { isSitemapIndexablePost } from "./sitemap-policy";
import { slugImage } from "./site-images";

const TARGET_MIN = 1500;

type Topic =
  | "repair"
  | "renovation"
  | "pricing"
  | "design"
  | "rough"
  | "build"
  | "company"
  | "legal"
  | "fengshui";

function hash(slug: string, slot = 0): number {
  let h = slot * 997;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

function pick<T>(slug: string, items: readonly T[], slot = 0): T {
  return items[hash(slug, slot) % items.length]!;
}

function decode(text: string): string {
  return text.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

function keywordFromPost(title: string, excerpt: string, slug: string): string {
  const raw = decode(title).split(/[—|–]/)[0]?.trim() || "";
  if (raw.length >= 8 && raw.length <= 70) return raw.replace(/\s+2026$/i, "").trim();
  const ex = decode(excerpt).split(/[.:]/)[0]?.trim() || "";
  if (ex.length >= 8) return ex.slice(0, 70);
  return slug.replace(/-/g, " ");
}

function detectLocation(slug: string, title: string): string {
  const s = `${slug} ${title}`.toLowerCase();
  if (/quan-1|q\.?\s*1/.test(s)) return "Quận 1, TP.HCM";
  if (/quan-2|q\.?\s*2/.test(s)) return "Quận 2 / Thủ Đức, TP.HCM";
  if (/quan-3|q\.?\s*3/.test(s)) return "Quận 3, TP.HCM";
  if (/quan-4|q\.?\s*4/.test(s)) return "Quận 4, TP.HCM";
  if (/quan-5|q\.?\s*5/.test(s)) return "Quận 5, TP.HCM";
  if (/quan-6|q\.?\s*6/.test(s)) return "Quận 6, TP.HCM";
  if (/quan-7|q\.?\s*7/.test(s)) return "Quận 7, TP.HCM";
  if (/quan-8|q\.?\s*8/.test(s)) return "Quận 8, TP.HCM";
  if (/quan-9|q\.?\s*9/.test(s)) return "Quận 9 / Thủ Đức, TP.HCM";
  if (/quan-10|q\.?\s*10/.test(s)) return "Quận 10, TP.HCM";
  if (/quan-11|q\.?\s*11/.test(s)) return "Quận 11, TP.HCM";
  if (/quan-12|q\.?\s*12/.test(s)) return "Quận 12, TP.HCM";
  if (/phu-nhuan/.test(s)) return "Phú Nhuận, TP.HCM";
  if (/tan-binh/.test(s)) return "Tân Bình, TP.HCM";
  if (/tan-phu/.test(s)) return "Tân Phú, TP.HCM";
  if (/binh-tan/.test(s)) return "Bình Tân, TP.HCM";
  if (/binh-thanh/.test(s)) return "Bình Thạnh, TP.HCM";
  if (/go-vap/.test(s)) return "Gò Vấp, TP.HCM";
  if (/thu-duc/.test(s)) return "Thủ Đức, TP.HCM";
  if (/binh-chanh/.test(s)) return "Bình Chánh, TP.HCM";
  if (/nha-be/.test(s)) return "Nhà Bè, TP.HCM";
  if (/hoc-mon/.test(s)) return "Hóc Môn, TP.HCM";
  if (/cu-chi/.test(s)) return "Củ Chi, TP.HCM";
  if (/thuan-an/.test(s)) return "Thuận An, Bình Dương";
  if (/binh-duong/.test(s)) return "Bình Dương";
  if (/dong-nai/.test(s)) return "Đồng Nai";
  if (/dak-lak/.test(s)) return "Đắk Lắk";
  return "TP.HCM";
}

function detectTopic(slug: string, keyword: string): Topic {
  const s = `${slug} ${keyword}`.toLowerCase();
  if (/tuyen-dung|so-do-to-chuc|ve-chung-toi|hoat-dong/.test(s)) return "company";
  if (/phong-thuy/.test(s)) return "fengshui";
  if (/luat-xay-dung|giay-phep/.test(s)) return "legal";
  if (/bao-gia|don-gia|chi-phi|ngan-sach|gia-xay/.test(s)) return "pricing";
  if (/thiet-ke|mau-nha|phong-cach/.test(s)) return "design";
  if (/sua-|chong-tham|son-nha|sua-dien|tham-/.test(s)) return "repair";
  if (/cai-tao|nang-tang|lam-moi|gac-lung|gieng-troi/.test(s)) return "renovation";
  if (/phan-tho|thi-cong-phan-tho|ep-coc|ket-cau/.test(s)) return "rough";
  return "build";
}

function intentOf(topic: Topic): ContentIntent {
  if (topic === "repair") return "repair";
  if (topic === "renovation") return "renovation";
  if (topic === "pricing") return "pricing";
  if (topic === "design" || topic === "fengshui") return "design";
  if (topic === "legal" || topic === "company") return "general";
  return "build";
}

function lotHint(slug: string): string {
  if (slug.includes("4x12")) return "lô 4×12 m — cầu thang chữ I, giếng nhỏ, hạn chế hành lang";
  if (slug.includes("4x16") || slug.includes("pho-4x16")) return "lô 4×16 m — đủ giếng trời giữa nhà và 3–4 phòng ngủ";
  if (slug.includes("5x16")) return "lô 5×16 m — mặt tiền thoáng hơn, dễ bố trí gara xe máy";
  if (slug.includes("5x20")) return "lô 5×20 m — sâu, cần giếng trời và thông tầng để lấy sáng";
  if (slug.includes("5-tang")) return "nhà 5 tầng — kiểm tra chiều cao phường và hố thang máy nếu có";
  if (slug.includes("4-tang")) return "nhà 4 tầng — tum sân thượng và chống thấm mái là hạng mục then chốt";
  if (slug.includes("3-tang")) return "nhà 3 tầng (1 trệt 2 lầu) — phổ biến nội thành, 4–6 tháng thi công";
  if (slug.includes("2-tang")) return "nhà 2 tầng — cân bằng chi phí và công năng cho gia đình 4–6 người";
  if (slug.includes("cap-4")) return "nhà cấp 4 / 1 tầng — mái Thái hoặc mái Nhật, sân vườn nếu đất rộng";
  if (slug.includes("ham")) return "nhà có hầm — thoát nước, PCCC và cao độ trệt phải tính từ khảo sát";
  if (slug.includes("shophouse") || slug.includes("mat-tien")) return "nhà mặt tiền / shophouse — điện tách, PCCC, facade kính";
  if (slug.includes("cho-thue")) return "nhà cho thuê — WC theo phòng/tầng, lối đi chung, điện tách";
  if (slug.includes("hem") || slug.includes("trong-hem")) return "nhà trong hẻm — logistics bơm bê tông và giờ đổ ca sớm";
  return "nhà phố / biệt thự dân dụng — khảo sát hiện trạng trước khi chốt m²";
}

function intro(kw: string, loc: string, slug: string, topic: Topic): string {
  if (topic === "company") {
    return `<p><strong>Kiến Trúc Sao Khuê</strong> vận hành tại 245/8 Bình Lợi, Bình Thạnh — một đầu mối thiết kế và thi công nhà ở. Trang này làm rõ <strong>${kw}</strong> để chủ nhà biết mình đang làm việc với ai, quy trình ra sao và ai chịu trách nhiệm từng giai đoạn.</p>
<p>Không bán thầu. Giám sát hiện trường. Bảo hành kết cấu 10 năm với hạng mục xây mới do công ty thi công. Hotline <strong>0909 075 668</strong>.</p>`;
  }
  if (topic === "legal") {
    return `<p><strong>${kw}</strong> là phần nhiều chủ nhà bỏ qua cho đến khi công trình bị thanh tra hoặc ngân hàng yêu cầu hồ sơ. Tại <strong>${loc}</strong>, giấy phép, chỉ giới và số tầng cho phép quyết định phương án xây — không phải “vẽ đẹp rồi xin sau”.</p>
<p>Sao Khuê tư vấn hiện trạng, hướng dẫn hồ sơ và thi công đúng phép. Khảo sát miễn phí — 0909 075 668.</p>`;
  }
  if (topic === "fengshui") {
    return `<p><strong>${kw}</strong> nên đi cùng công năng và kết cấu, không thay thế khảo sát kỹ thuật. Tại <strong>${loc}</strong>, Sao Khuê lắng nghe hướng nhà – cửa chính – bếp – cầu thang mà gia chủ quan tâm, rồi đối chiếu với mặt bằng thực tế.</p>
<p>Mục tiêu: nhà dùng được, thông thoáng, xin phép được — không hứa “hóa giải” bằng phá dỡ vô tội vạ.</p>`;
  }
  const openers = [
    `<p><strong>${kw}</strong> tại <strong>${loc}</strong> chỉ ra số đúng sau khi đo đất, đọc hiện trạng và chốt phạm vi gói. Bài viết này tách hạng mục bắt buộc (kết cấu, chống thấm, điện chống giật) khỏi hạng mục có thể làm sau, để bạn không cắt nhầm chỗ.</p>
<p>Sao Khuê trực tiếp thi công, báo giá theo hạng mục, bảo hành kết cấu 10 năm. Gửi ảnh hiện trạng (che số nhà) khi gọi <strong>0909 075 668</strong>.</p>`,
    `<p>Khi tìm <strong>${kw}</strong>, chủ nhà ở <strong>${loc}</strong> thường gặp ba rủi ro: giá mạng không đo đất, bán thầu, và phát sinh khi đã đổ sàn. <strong>${kw}</strong> làm đúng bắt đầu từ khảo sát — không từ một con số m² trên Facebook.</p>
<p>Kiến Trúc Sao Khuê khảo sát miễn phí, lập dự toán, thi công và nghiệm thu từng mốc. Văn phòng 245/8 Bình Lợi, Bình Thạnh.</p>`,
    `<p><strong>${kw}</strong> không phải dịch vụ “sao chép mẫu”. Lô đất, hẻm, hàng xóm và GPXD tại <strong>${loc}</strong> khác nhau. Sao Khuê thiết kế lại cho đúng khuôn đất rồi mới thi công — ${lotHint(slug)}.</p>
<p>Hợp đồng ghi vật tư, tiến độ, điều khoản phát sinh. Landing nhanh: <a href="/xay-nha">xây nhà</a> · <a href="/cai-tao-nha">cải tạo nhà</a>.</p>`,
  ];
  return pick(slug, openers);
}

function scopeSection(kw: string, loc: string, slug: string, topic: Topic): string {
  const lot = lotHint(slug);
  if (topic === "company") {
    return `<h2>${kw} tại Sao Khuê gồm những gì?</h2>
<p>Ban giám đốc chốt hợp đồng và ngân sách. Phòng thiết kế lập mặt bằng – phối cảnh. Đội thi công triển khai hiện trường. Vật tư nhập theo list trong HĐ. CSKH theo dõi bảo hành sau bàn giao.</p>
<p>Chủ nhà không phải điều phối năm đội thợ lẻ. Một đầu mối chịu trách nhiệm <strong>${kw}</strong> từ tư vấn đến bảo hành.</p>
<ul>
  <li>Thiết kế 2D/3D khi ký xây trọn gói (theo quy mô).</li>
  <li>Giám sát cốt thép trước mỗi ca đổ.</li>
  <li>Nhật ký thi công và biên bản nghiệm thu mốc.</li>
  <li>Hotline sau bàn giao: 0909 075 668.</li>
</ul>`;
  }
  if (topic === "rough") {
    return `<h2>Phạm vi ${kw} — phần thô đúng nghĩa</h2>
<p>Phần thô gồm móng, đà kiềng, cột, dầm, sàn, tường, mái chờ, điện nước âm. Không gồm ốp lát, sơn, cửa hoàn thiện, thiết bị vệ sinh. Tại <strong>${loc}</strong>, ${lot}.</p>
<p>Sao Khuê chụp cốt thép trước đổ, ngâm sân thượng/WC theo biên bản. Không nhận “thô giá mạng” khi chưa đo hẻm và nền.</p>
<ul>
  <li>Móng / cọc (nếu khảo sát yêu cầu) tách dòng khỏi m² khung.</li>
  <li>Tường 100/200 theo bản vẽ, không tự ý mỏng để giảm gạch.</li>
  <li>Mái chờ chống thấm lớp 1 trước khi hoàn thiện tum.</li>
</ul>`;
  }
  if (topic === "renovation" || topic === "repair") {
    return `<h2>Phạm vi ${kw} nên chốt trước khi đập</h2>
<p>Thứ tự đúng: kết cấu &amp; chống thấm → điện nước → ốp lát – sơn – cửa. Đập thông, mở cửa lớn, nâng tầng phải khảo sát cột–móng trước. Tại <strong>${loc}</strong>, ${lot}.</p>
<p>Nhà đang ở có thể làm theo giai đoạn (WC–bếp trước, mặt tiền sau). Mọi phát sinh ghi phụ lục, không “làm luôn rồi tính”.</p>
<ul>
  <li>Ảnh nứt, thấm, CB điện, ống nước cũ — gửi khi đặt lịch.</li>
  <li>Xin phép nếu đổi mặt đứng / nâng tầng / đục chịu lực.</li>
  <li>Che chắn bụi nếu gia đình vẫn sinh hoạt trong nhà.</li>
</ul>`;
  }
  if (topic === "pricing") {
    return `<h2>Cách đọc ${kw} cho đúng</h2>
<p>Một con số m² trên mạng không gồm cọc, thang máy, facade kính, hẻm hẹp. Tại <strong>${loc}</strong>, ${lot}. Hãy yêu cầu bảng tách: thô / hoàn thiện / phụ lục.</p>
<p>Sao Khuê báo sau khảo sát. Máy tính tại <a href="/bao-gia">/bao-gia</a> chỉ để ước lượng — HĐ chính thức sau đo đất.</p>
<ul>
  <li>Thô tham khảo 3,55–3,8 triệu/m² sàn (chưa cọc đặc biệt).</li>
  <li>Trọn gói 4,85–6,7 triệu/m² tùy vật tư.</li>
  <li>Giữ 10% đến nghiệm thu cuối.</li>
</ul>`;
  }
  return `<h2>${kw} gồm những hạng mục nào?</h2>
<p>Gói trọn gói: thiết kế tối ưu, phần thô, hoàn thiện theo list, nghiệm thu, bảo hành. Gói thô: dừng ở mái chờ. Tại <strong>${loc}</strong>, ${lot}.</p>
<p>Chốt thô hay trọn gói trước khi ký phụ lục cửa kính và sân. Không cắt thép–chống thấm để “giảm giá”.</p>
<ul>
  <li>Khảo sát – tư vấn công năng miễn phí.</li>
  <li>Dự toán hạng mục, vật tư ghi mã trong HĐ.</li>
  <li>Thi công trực tiếp, không bán thầu.</li>
  <li>Bàn giao hồ sơ bảo hành kết cấu 10 năm.</li>
</ul>`;
}

function processSection(kw: string, loc: string, slug: string): string {
  const extra = pick(slug, [
    "Ca đổ bê tông hẻm hẹp thường xếp sáng sớm để xe bơm đỗ được mặt tiền.",
    "Biên bản tường chung với hàng xóm ký trước khi đào móng — tránh tranh chấp giữa chừng.",
    "Ảnh nhật ký từng sàn giúp chủ nhà theo dõi dù không có mặt cả ngày.",
  ]);
  return `<h2>Quy trình ${kw} 6 bước</h2>
<ol>
  <li><strong>Tiếp nhận:</strong> gọi 0909 075 668 hoặc form <a href="/lien-he">/lien-he</a> — mô tả ${kw} và gửi ảnh.</li>
  <li><strong>Khảo sát ${loc}:</strong> đo đất, hẻm, cao độ, hỏi GPXD / số tầng cho phép.</li>
  <li><strong>Phương án:</strong> mặt bằng, phối cảnh (nếu cần), list vật tư.</li>
  <li><strong>Báo giá &amp; HĐ:</strong> tách thô / trọn gói / phụ lục; điều khoản phát sinh bằng văn bản.</li>
  <li><strong>Thi công:</strong> giám sát cốt thép, nhật ký, nghiệm thu mốc. ${extra}</li>
  <li><strong>Bàn giao:</strong> vệ sinh, hồ sơ bảo hành, hướng dẫn bảo trì.</li>
</ol>
<p>Chi tiết A–Z: <a href="/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z">quy trình xây nhà trọn gói</a>.</p>`;
}

function localSection(kw: string, loc: string, slug: string): string {
  const notes: Record<string, string> = {
    "Bình Thạnh, TP.HCM": "Nhiều hẻm xe máy, liền kề tường chung. Logistics khiêng và bơm bê tông phải ghi phụ phí — không nuốt vào m².",
    "Gò Vấp, TP.HCM": "Hẻm sâu phổ biến: xe phế thải nhỏ, ca đổ sớm. GPXD theo phường; facade nhà phố hay ốp lam + kính.",
    "Thủ Đức, TP.HCM": "KDC mới khác phố cũ / gần rạch. Địa chất và facade không dùng một đơn giá cho cả thành phố Thủ Đức.",
    "Quận 7, TP.HCM": "Khu Nam có tuyến đường rộng và khu hẻm cũ. Chốt facade đồng bộ nếu thuộc khu quy hoạch.",
    "Tân Phú, TP.HCM": "Một số khu thấp cục bộ: cao độ trệt và van thoát. Mặt tiền KD tách điện với phần ở.",
    "Tân Bình, TP.HCM": "Gần sân bay: hỏi chiều cao trước khi vẽ 5 tầng. Cách âm cửa kính nếu gia chủ cần.",
    "Nhà Bè, TP.HCM": "Ven kênh: khảo sát địa chất, cao độ nền, thoát nước sân. Sân–hàng rào tính phụ lục.",
    "Bình Dương": "Đường vào công trình và GPXD xã/phường khác nội thành. Đơn giá không copy nguyên TP.HCM.",
    "Thuận An, Bình Dương": "Nhà phố liền kề phổ biến; giếng trời và tường chung cần biên bản rõ.",
  };
  const note =
    notes[loc] ||
    pick(slug, [
      "Nội thành: ưu tiên giờ đổ và tập kết vật tư. Ngoại thành: lịch đội và đường vào công trình.",
      "Mùa mưa kéo dài: chừa buffer chống thấm tum/WC, không lát gạch sân thượng khi còn ngấm.",
      "Hẻm < 3 m: phụ phí ba gác / bơm từ mặt tiền — hỏi rõ trước khi so giá m².",
    ]);
  return `<h2>${kw} tại ${loc} — lưu ý hiện trường</h2>
<p>${note}</p>
<p>Gửi 3 ảnh khi hẹn khảo sát: hẻm/đường vào, mặt tiền, hiện trạng bên trong (che số). Sao Khuê ước lượng trong ngày làm việc rồi hẹn đo. ${lotHint(slug)}.</p>
<p>${pick(slug, [
    "Không ký HĐ khi chưa thấy list thép–xi măng–sơn.",
    "Không trả hết khi còn hạng mục tum/WC chưa ngâm nước.",
    "Không đập tường chịu lực 'cho thoáng' khi chưa có ý kiến kỹ sư.",
  ])}</p>`;
}

function mistakesSection(kw: string, slug: string): string {
  return `<h2>Sai lầm thường gặp khi làm ${kw}</h2>
<ul>
  <li>${pick(slug, ["Chọn thầu theo giá m² Facebook, không đo hẻm.", "Tin 'bao giấy phép' khi chưa đọc quy hoạch phường.", "Cắt chống thấm tum để tiết kiệm — sửa mùa mưa đắt gấp đôi."], 0)}</li>
  <li>${pick(slug, ["Đổi thiết kế sau khi đã đổ sàn mà không lập phụ lục.", "Thuê nhiều đội lẻ không ai chịu chống thấm.", "Làm facade trước khi xử lý thấm tường ngoài."], 1)}</li>
  <li>${pick(slug, ["Không chụp cốt thép — mất bằng chứng bảo hành.", "Trả 100% trước nghiệm thu cuối.", "Tự ý nâng tầng khi móng cũ không đủ."], 2)}</li>
</ul>
<p>Sao Khuê từ chối nhận việc nếu khảo sát cho thấy không an toàn hoặc không xin phép được — nói thẳng trước khi thu tiền.</p>`;
}

function caseSection(kw: string, loc: string, slug: string): string {
  const size = pick(slug, ["4×16 m", "5×18 m", "4×12 m", "5×20 m", "6×16 m"]);
  const floors = pick(slug, ["1 trệt 2 lầu", "1 trệt 1 lầu", "1 trệt 3 lầu", "cấp 4 mái Thái"], 1);
  return `<h2>Tình huống thực tế gần với ${kw}</h2>
<p>Một gia đình tại <strong>${loc}</strong> có lô ${size}, muốn ${floors}. Yêu cầu ban đầu là “giá rẻ nhất”. Sau khảo sát, Sao Khuê tách: phần bắt buộc (móng/gia cố, chống thấm, điện chống giật) và phần có thể làm sau (phào, đèn trang trí, tủ bếp cao cấp).</p>
<p>Kết quả: chốt gói ${kw} đúng ngân sách, tiến độ ghi mốc móng–sàn–mái–hoàn thiện. Chủ nhà giữ 10% đến nghiệm thu. Đây không phải case quảng cáo — là cách đọc dự toán để <strong>${kw}</strong> không đội giá giữa chừng.</p>
<p>Muốn xem mẫu ảnh: <a href="/mau-nha">catalog mẫu nhà hiện đại</a> · công trình: <a href="/cong-trinh">/cong-trinh</a>.</p>`;
}

function extraTopicDepth(kw: string, loc: string, topic: Topic): string {
  if (topic === "company") {
    return `<h2>Cách liên hệ và làm việc hàng ngày</h2>
<p>Chủ nhà gọi <strong>0909 075 668</strong>, Zalo hoặc form <a href="/lien-he">/lien-he</a>. CSKH ghi nhu cầu ${kw}, hẹn khảo sát, chuyển thiết kế/thi công. Mọi thay đổi phát sinh đi qua phụ lục — không “nói miệng với thợ”. Văn phòng 245/8 Bình Lợi, Bình Thạnh nhận khách trong giờ hành chính.</p>
<p>Sau bàn giao, phiếu bảo hành nêu hạng mục kết cấu 10 năm và hoàn thiện theo HĐ. Sự cố trong thời hạn: kỹ thuật khảo sát, xử lý theo cam kết — không đẩy cho thầu phụ đã biến.</p>`;
  }
  if (topic === "legal") {
    return `<h2>Hồ sơ ${kw} chủ nhà nên chuẩn bị</h2>
<p>Bản sao giấy tờ nhà đất, GPXD cũ (nếu có), ảnh hiện trạng 4 mặt, bản vẽ cải tạo/xây mới. Đổi mặt đứng lớn, nâng tầng, đục cột chịu lực thường phải xin lại. Sơn–ốp–điện nước trong nhà thường không. Sao Khuê đọc hiện trạng trước khi hứa tiến độ.</p>
<p>Tại ${loc}, chỉ giới đường và chiều cao phường quyết định số tầng. Không đào móng khi hồ sơ còn treo. Landing: <a href="/xay-nha">/xay-nha</a> · <a href="/cai-tao-nha">/cai-tao-nha</a>. Cải tạo nhỏ trong nhà vẫn nên hỏi kỹ sư trước khi đục — tránh đụng dầm, điện âm, ống nước.</p>`;
  }
  if (topic === "fengshui") {
    return `<h2>${kw} gắn với mặt bằng thật</h2>
<p>Cửa chính không đối cầu thang thẳng. Bếp tránh sát cửa trước. Phòng ngủ ưu tiên yên, không đặt đầu giường dưới đà lớn nếu có phương án khác. Sao Khuê điều chỉnh mặt bằng cho ${loc} — không đập nhà để “hóa giải” khi kết cấu đang tốt.</p>
<p>Giếng trời, cửa sổ sau và lam mặt tiền vừa lấy sáng vừa giảm ẩm. ${kw} chỉ có ý nghĩa khi nhà ở được, xin phép được và thoát nước đúng.</p>`;
  }
  if (topic === "design") {
    return `<h2>Hồ sơ thiết kế trước khi thi công ${kw}</h2>
<p>Mặt bằng các tầng, mặt đứng, mặt cắt, phối cảnh 3D, dự toán sơ bộ. Chốt công năng (số phòng, xe, bàn thờ, giếng) trước màu sơn. Thiết kế tốt giảm 10–20% phát sinh đập sửa tại ${loc}.</p>
<p>Catalog: <a href="/mau-nha">mẫu nhà hiện đại</a>. Dịch vụ: <a href="/thiet-ke">/thiet-ke</a>.</p>`;
  }
  return `<h2>Giám sát hiện trường khi làm ${kw}</h2>
<p>Mỗi sàn: ảnh cốt thép, biên bản đổ, nhật ký thời tiết. Chủ nhà không cần đứng công trường cả ngày nhưng nên có mốc nghiệm thu. Sao Khuê gửi tiến độ qua Zalo. ${kw} sai ở cốt thép thì hoàn thiện đẹp cũng không cứu được.</p>
<p>Hẻm hẹp tại ${loc}: xếp ca bơm, bảo vệ mặt đường, thu dọn phế thải trong ngày. Phụ phí ghi rõ — không nuốt vào m².</p>`;
}

function relatedLinks(topic: Topic, slug: string): string {
  const build = `<p>Liên quan: <a href="/xay-nha">xây nhà trọn gói</a> · <a href="/dich-vu/xay-nha-tron-goi">dịch vụ xây nhà</a> · <a href="/tin-tuc/don-gia-xay-nha-tphcm">đơn giá xây nhà</a> · <a href="/bao-gia">bảng báo giá</a>.</p>`;
  const reno = `<p>Liên quan: <a href="/cai-tao-nha">cải tạo nhà</a> · <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a> · <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · <a href="/bao-gia">báo giá</a>.</p>`;
  const design = `<p>Liên quan: <a href="/thiet-ke">thiết kế</a> · <a href="/tin-tuc/thiet-ke-nha-dep-tphcm">thiết kế nhà đẹp</a> · <a href="/mau-nha">mẫu nhà hiện đại</a>.</p>`;
  if (topic === "renovation" || topic === "repair") return reno;
  if (topic === "design" || topic === "fengshui") return design;
  if (slug.includes("cai-tao")) return reno;
  return build;
}

function faq(kw: string, loc: string, topic: Topic): string {
  const items = [
    {
      q: `${kw} giá khoảng bao nhiêu?`,
      a: `Tham khảo thô 3,55–3,8 triệu/m² và trọn gói 4,85–6,7 triệu/m² tại ${loc} — chưa gồm cọc đặc biệt, thang máy, facade phức tạp. ${kw} chính xác sau khảo sát. Gọi 0909 075 668.`,
    },
    {
      q: `Làm ${kw} mất bao lâu?`,
      a:
        topic === "repair" || topic === "renovation"
          ? "Cải tạo/sửa một căn phố thường 4–12 tuần tùy phạm vi; nâng tầng và gia cố lâu hơn. Lịch ghi trong HĐ."
          : "Nhà phố 1 trệt 2–3 lầu thường 4–7 tháng; biệt thự 6–9 tháng. Phụ thuộc giấy phép, mùa mưa và hẻm.",
    },
    {
      q: `Có khảo sát miễn phí cho ${kw} không?`,
      a: `Có. Sao Khuê khảo sát tại ${loc} và khu lân cận, tư vấn gói thô/trọn/cải tạo trước khi lập dự toán.`,
    },
    {
      q: `Bảo hành ${kw} thế nào?`,
      a: "Xây mới: kết cấu tối thiểu 10 năm. Hoàn thiện 12–36 tháng. Chống thấm theo gói (thường 3–5 năm hạng mục xử lý sâu). Ghi trong hợp đồng.",
    },
    {
      q: `${kw} có phát sinh không?`,
      a: "Phát sinh chỉ khi đổi thiết kế, vật tư hoặc phát hiện địa chất/kết cấu khác khảo sát. Mọi phát sinh báo giá trước, có xác nhận văn bản.",
    },
  ];
  return faqSection(items, `FAQ — ${kw}`);
}

export function buildRebuiltArticleHtml(input: {
  slug: string;
  title: string;
  excerpt: string;
}): string {
  const kw = keywordFromPost(input.title, input.excerpt, input.slug);
  const loc = detectLocation(input.slug, input.title);
  const topic = detectTopic(input.slug, kw);
  const intent = intentOf(topic);
  const h2 = kw.charAt(0).toUpperCase() + kw.slice(1);

  const leadH2 =
    topic === "company"
      ? `${h2} — cơ cấu và cách Sao Khuê làm việc với chủ nhà`
      : topic === "legal"
        ? `${h2} — hồ sơ, chỉ giới và thi công đúng phép`
        : topic === "fengshui"
          ? `${h2} — công năng trước, hướng nhà sau`
          : `${h2} — làm đúng từ khảo sát, không từ giá mạng`;

  const pricing =
    articlePricingTableBlock(intent, loc, input.slug, kw) ||
    `<h2>Chi phí liên quan tới ${kw}</h2>
<p>Thiết kế / tư vấn: báo theo hồ sơ. Thi công: xem <a href="/bao-gia">bảng báo giá</a> — thô 3,55–3,8 triệu/m², trọn gói 4,85–6,7 triệu/m² (tham khảo ${loc}).</p>`;

  let html = `
<h2>${leadH2}</h2>
${intro(kw, loc, input.slug, topic)}
${homeLinkParagraph("Xem thêm hồ sơ năng lực tại")}

${imageFigure(slugImage(input.slug, 0), kw, 1)}

${scopeSection(kw, loc, input.slug, topic)}

${imageFigure(slugImage(input.slug, 1), kw, 2)}

${processSection(kw, loc, input.slug)}

${pricing}

${localSection(kw, loc, input.slug)}

${imageFigure(slugImage(input.slug, 2), kw, 3)}

${mistakesSection(kw, input.slug)}

${caseSection(kw, loc, input.slug)}

${extraTopicDepth(kw, loc, topic)}

<h2>Vật tư &amp; nghiệm thu khi triển khai ${kw}</h2>
<p>List thép, xi măng, gạch, sơn ghi mã trong hợp đồng. Chủ nhà được xem mẫu gạch–sơn tại công trường trước khi làm diện rộng. ${pick(input.slug, [
    "Không nhận vật tư 'tương đương' khi chưa ký phụ lục.",
    "Nghiệm thu thép: đủ số cây, neo, gối — có ảnh trước đổ.",
    "WC và tum: ngâm nước theo biên bản, không sơn đè chỗ còn ẩm.",
  ])}</p>
<p>Điện chống giật, tiếp địa, CB từng tầng. Nước: ống PPR/PVC đúng áp. Đây là hạng mục không cắt khi làm <strong>${kw}</strong> cho nhà ở lâu dài.</p>

<h2>Chuẩn bị hồ sơ trước ngày làm ${kw}</h2>
<p>Bản sao giấy tờ nhà đất, ảnh hiện trạng, nhu cầu từng tầng (số phòng, xe, kinh doanh), ngân sách dự kiến. Nếu nhà đang ở, chỉ định khu ưu tiên để hạn chế xáo trộn.</p>
<p>Sao Khuê đối chiếu hồ sơ với khảo sát, chỉ ra việc bắt buộc và việc có thể dãn theo quý. Chuẩn bị tốt giúp ${kw} chốt HĐ nhanh, ít phát sinh.</p>

<h2>Thanh toán theo mốc cho ${kw}</h2>
<p>Tạm ứng theo nghiệm thu: móng → sàn các tầng → mái chờ → hoàn thiện. Giữ khoảng 10% đến bàn giao. Không trả hết khi tum/WC chưa ngâm nước. Mọi đổi phát sinh lập phụ lục trước khi làm.</p>
<p>Tại ${loc}, phụ phí hẻm – bơm bê tông – khiêng ghi rõ dòng, không gộp ảo vào đơn giá m² của ${kw}.</p>

<h2>Ai phù hợp với ${kw}?</h2>
<p>Gia đình có đất hoặc nhà cũ tại ${loc}, đã hình dung số tầng và ngân sách, muốn một nhà thầu trực tiếp thi công. ${lotHint(input.slug)}. Nếu chưa chốt GPXD, Sao Khuê tư vấn phép trước khi đào móng.</p>
<p>Không phù hợp nếu chủ nhà muốn tự mua vật tư lẻ từng ngày mà không nghiệm thu, hoặc yêu cầu cắt kết cấu để lấy giá thấp. ${kw} bền khi thống nhất phạm vi trên giấy.</p>
<p>Nhà đang cho thuê / đang ở: làm theo giai đoạn, che chắn bụi, ưu tiên WC–bếp–điện nước trước mặt tiền. Trao đổi lịch ca đổ để hạn chế ảnh hưởng hàng xóm.</p>

<h2>Checklist trước khi ký ${kw}</h2>
<ul>
  <li>Đã khảo sát hiện trạng, không báo giá qua tin nhắn không ảnh.</li>
  <li>HĐ có list vật tư, tiến độ, bảo hành kết cấu.</li>
  <li>Biết thô hay trọn gói — không lẫn hoàn thiện vào giá thô.</li>
  <li>Hàng xóm / tường chung đã trao đổi nếu đào móng.</li>
  <li>GPXD hoặc tư vấn phép xong trước khi đục chịu lực / nâng tầng.</li>
</ul>
<p>In checklist này khi làm việc với bất kỳ nhà thầu nào — không chỉ Sao Khuê. ${kw} bền khi quy trình rõ, không khi giá thấp nhất.</p>
<p>Văn phòng: 245/8 Bình Lợi, P.13, Bình Thạnh, TP.HCM. Zalo/hotline <strong>0909 075 668</strong>.</p>

${faq(kw, loc, topic)}

${relatedLinks(topic, input.slug)}

${seoCtaBlock(kw)}
`.trim();

  return html;
}

export function applyThinArticleRebuild<
  T extends {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category?: string;
    noindex?: boolean;
  },
>(posts: T[]): T[] {
  return posts.map((p) => {
    if (p.noindex) return p;
    if (!isSitemapIndexablePost({ slug: p.slug, category: p.category })) return p;
    const words = countWordsFromArticleHtml(p.content ?? "");
    if (words >= TARGET_MIN) return p;
    const rebuilt = buildRebuiltArticleHtml({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
    });
    return { ...p, content: rebuilt };
  });
}

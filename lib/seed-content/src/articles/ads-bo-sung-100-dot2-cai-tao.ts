/**
 * Money pages Ads — 100 từ khóa đợt 2 (Cải tạo / Sửa nhà).
 */
import { faqSection, homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";
import { buildDistrictCaiTaoRich, type DistrictCaiTaoBrief } from "./district-cai-tao-rich";
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

const DISTRICTS: DistrictCaiTaoBrief[] = [
  {
    slug: "cai-tao-nha-quan-1",
    district: "Quận 1",
    keyword: "cải tạo nhà quận 1",
    repairKeyword: "sửa nhà quận 1",
    streets: "Pasteur, Nguyễn Thái Học, Cô Giang, khu trung tâm",
    housing: "phố hẹp, nhà cũ nhiều tầng, hạn chế giờ ồn và xe tải",
    issues: [
      "<strong>Gia cố</strong> nhà cũ, cầu thang hẹp.",
      "<strong>Cải tạo nội thất / bếp–WC</strong> tối ưu mét vuông.",
      "<strong>Chống thấm</strong> tường tiếp giáp.",
      "<strong>Mặt tiền</strong> theo nội quy khu trung tâm.",
    ],
    permitNote:
      "Q.1 siết giờ ồn và vận chuyển. Đục kết cấu / đổi mặt đứng cần kiểm tra GPXD. Sao Khuê lập lịch ca sáng, xe nhỏ.",
    priceNote: "Logistics trung tâm thường +10–20% so với quận ven.",
    faqA: "Làm mới 1–2 triệu/m²; sửa công năng 2,5–4 triệu/m²; nhà cũ gia cố báo riêng sau khảo sát.",
  },
  {
    slug: "cai-tao-nha-quan-3",
    district: "Quận 3",
    keyword: "cải tạo nhà quận 3",
    repairKeyword: "sửa nhà quận 3",
    streets: "Lê Văn Sỹ, Nguyễn Thị Minh Khai, Trần Quốc Thảo",
    housing: "phố 2–4 tầng, một số nhà cũ cần giữ khung",
    issues: [
      "<strong>Đập thông / giếng trời</strong> nhà sâu.",
      "<strong>Sửa nhà vệ sinh, bếp</strong> ẩm mốc.",
      "<strong>Sơn – lát</strong> làm mới khi đang ở.",
      "<strong>Mặt tiền</strong> nhà ống 4–5m.",
    ],
    permitNote:
      "Q.3 nhiều hẻm không mở xe tải. Công trình mẫu: <a href=\"/cong-trinh/sua-nha-quan-3\">cải tạo nhà phố Quận 3</a>.",
    priceNote: "Nhà ống 4×16m sửa công năng 2 tầng thường 280–450 triệu + phụ phí hẻm.",
    faqA: "Sửa nhẹ 1–2 triệu/m²; trọn gói 2,5–3,5 triệu/m². Gia cố nhà cũ tính riêng.",
  },
  {
    slug: "cai-tao-nha-quan-8",
    district: "Quận 8",
    keyword: "cải tạo nhà quận 8",
    repairKeyword: "sửa nhà quận 8",
    streets: "Tạ Quang Bửu, Phạm Thế Hiển, khu rạch",
    housing: "cấp 4 và phố 2–3 tầng, một số nền gần kênh",
    issues: [
      "<strong>Chống thấm</strong> mùa mưa, chân tường ẩm.",
      "<strong>Cải tạo nhà cấp 4</strong> / làm mới mái.",
      "<strong>Sửa điện nước</strong> nhà cũ.",
      "<strong>Gia cố</strong> nếu lún, nứt.",
    ],
    permitNote: "Khu gần rạch cần xem hiện trạng móng trước khi nâng tầng. Phá dỡ ghi rõ phạm vi.",
    priceNote: "Nền yếu có thể phát sinh gia cố — tách dòng trong dự toán, không nuốt vào đơn giá ảo.",
    faqA: "Cấp 4 làm mới 80–250 triệu; phố 2 tầng sửa trọn gói 220–400 triệu tùy diện tích đụng.",
  },
  {
    slug: "cai-tao-nha-quan-10",
    district: "Quận 10",
    keyword: "cải tạo nhà quận 10",
    repairKeyword: "sửa nhà quận 10",
    streets: "3 Tháng 2, Hòa Hảo, Nhật Tảo, Thành Thái",
    housing: "ống sâu, hẻm chật, nhiều nhà ở kết hợp buôn bán",
    issues: [
      "<strong>Cải tạo nhà bếp – WC</strong> cho nhà đang kinh doanh.",
      "<strong>Sửa trần, sơn</strong> từng tầng khi đang ở.",
      "<strong>Điện 3 pha</strong> nếu mở quán.",
      "<strong>Chống thấm sân thượng</strong>.",
    ],
    permitNote: "Hẻm Q.10 thường xe ba gác. Đổi công năng nhà ở + quán: hỏi phường trước khi đục mặt tiền.",
    priceNote: "Phụ phí hẻm &lt; 3m khoảng 8–12%.",
    faqA: "Sửa công năng 2,5–3,5 triệu/m²; mặt tiền + điện quán 3,5–5 triệu/m².",
  },
  {
    slug: "cai-tao-nha-quan-12",
    district: "Quận 12",
    keyword: "cải tạo nhà quận 12",
    repairKeyword: "sửa nhà quận 12",
    streets: "Hà Huy Giáp, Nguyễn Ảnh Thủ, Tân Chánh Hiệp",
    housing: "cấp 4, phố 2–3 tầng, lô 4×12 đến 5×16",
    issues: [
      "<strong>Cải tạo nhà cấp 4</strong> hoặc nâng tầng nếu móng cho phép.",
      "<strong>Sửa nhà cấp 4</strong> sơn, mái, WC.",
      "<strong>Chống thấm sân</strong>.",
      "<strong>Làm mới nhà cũ</strong> khi đang ở.",
    ],
    permitNote: "Q.12 quy hoạch từng phường khác nhau — kiểm tra số tầng trước khi hứa nâng.",
    priceNote: "Vận chuyển dễ hơn nội thành; đơn giá nhân công sát mốc bảng chung.",
    faqA: "Làm mới cấp 4 1–2 triệu/m²; cải tạo sâu 2,5–4 triệu/m². Nâng tầng báo sau khảo sát móng.",
  },
  {
    slug: "cai-tao-nha-phu-nhuan",
    district: "Phú Nhuận",
    keyword: "cải tạo nhà phú nhuận",
    repairKeyword: "sửa nhà phú nhuận",
    streets: "Phan Xích Long, Hoàng Văn Thụ, Phan Đăng Lưu",
    housing: "ống 3,5–5m mặt tiền, 3–4 tầng, hẻm xe máy",
    issues: [
      "<strong>Giếng trời / lấy sáng</strong> nhà sâu.",
      "<strong>Cải tạo nội thất, phòng khách</strong> hẹp.",
      "<strong>Sửa WC–bếp</strong> ẩm.",
      "<strong>Mặt tiền</strong> nhà phố cho thuê tầng trệt.",
    ],
    permitNote: "Hẻm PN rất hẹp — lập phương án chuyển vật tư. Đục tường chịu lực cần phép.",
    priceNote: "Nhà 4×12m 3 tầng sửa công năng thường 320–520 triệu (sàn đụng + hẻm).",
    faqA: "Trọn gói 2,5–3,5 triệu/m²; đập thông + mặt tiền 3,5–5 triệu/m².",
  },
  {
    slug: "cai-tao-nha-binh-tan",
    district: "Bình Tân",
    keyword: "cải tạo nhà bình tân",
    repairKeyword: "sửa nhà bình tân",
    streets: "Tên Lửa, Kinh Dương Vương, Lê Văn Quới, Aeon",
    housing: "phố mới 3–4 tầng xen cấp 4, lô 4×16–5×20",
    issues: [
      "<strong>Sửa nhà bình tân</strong> — thấm sân, WC.",
      "<strong>Cải tạo nhà bếp</strong> nhà phố.",
      "<strong>Sơn nhà trọn gói</strong>.",
      "<strong>Nâng tầng nhà cũ</strong> nếu móng đủ.",
    ],
    permitNote: "Bình Tân đường lớn dễ xe; hẻm trong vẫn cần ba gác. Xin phép theo phường.",
    priceNote: "Đơn giá sát bảng TP; hoàn thiện mặt tiền đường lớn cao hơn hẻm 8–15%.",
    faqA: "Làm mới 1–2 triệu/m²; sửa trọn gói 2,5–3,5 triệu/m².",
  },
  {
    slug: "cai-tao-nha-nha-be",
    district: "Nhà Bè",
    keyword: "cải tạo nhà nhà bè",
    repairKeyword: "sửa nhà nhà bè",
    streets: "Nguyễn Bình, Lê Văn Lương, Phú Xuân, Hiệp Phước",
    housing: "cấp 4, nhà vườn, phố 2 tầng, một số nền yếu",
    issues: [
      "<strong>Chống thấm / sửa mái</strong> nhà cấp 4.",
      "<strong>Cải tạo nhà nát</strong> giữ khung hoặc phá dỡ có kiểm soát.",
      "<strong>Gia cố</strong> nếu lún.",
      "<strong>Làm mới</strong> WC, điện nước.",
    ],
    permitNote: "Nền gần rạch: khảo sát móng bắt buộc trước nâng tầng. Khoảng cách từ Bình Thạnh xa hơn — lịch khảo sát chốt trước 1 ngày.",
    priceNote: "Di chuyển tổ đội có thể ghi phụ phí nếu gói nhỏ; gói trọn gói thường gộp.",
    faqA: "Cấp 4 làm mới 80–220 triệu; cải tạo sâu 2–4 triệu/m². Gia cố nền báo riêng.",
  },
  {
    slug: "cai-tao-nha-binh-chanh",
    district: "Bình Chánh",
    keyword: "cải tạo nhà bình chánh",
    repairKeyword: "sửa nhà bình chánh",
    streets: "Vĩnh Lộc, Tân Kiên, Phong Phú, Quốc lộ 50",
    housing: "cấp 4, nhà trên đất lớn, một số nhà phố mới",
    issues: [
      "<strong>Cải tạo nhà cấp 4</strong>, mái tôn / mái thái.",
      "<strong>Sửa tường nứt</strong>, nền lún nhẹ.",
      "<strong>Phá dỡ có kiểm soát</strong> phần hỏng.",
      "<strong>Điện nước</strong> nhà cũ.",
    ],
    permitNote: "Đất nông nghiệp / thổ cư lẫn: kiểm tra sổ trước khi hứa cải tạo lớn. Nâng tầng theo quy hoạch xã/phường.",
    priceNote: "Lô rộng rẻ vận chuyển hơn hẻm nội thành; đường đất mùa mưa có thể chậm tiến độ.",
    faqA: "Làm mới cấp 4 1–2 triệu/m²; cải tạo sâu 2–3,5 triệu/m² tùy mái và nền.",
  },
  {
    slug: "cai-tao-nha-hoc-mon",
    district: "Hóc Môn",
    keyword: "cải tạo nhà hóc môn",
    repairKeyword: "sửa nhà hóc môn",
    streets: "Quang Trung, Nguyễn Ảnh Thủ, Bà Điểm, Đông Thạnh",
    housing: "cấp 4, phố 1 trệt 1 lầu, lô 5×16–5×20",
    issues: [
      "<strong>Cải tạo nhà cấp 4</strong> thành không gian hiện đại.",
      "<strong>Sửa nhà cấp 4</strong> mái, WC.",
      "<strong>Chống thấm sân</strong>.",
      "<strong>Mở rộng</strong> nếu đất còn chỉ giới.",
    ],
    permitNote: "Hóc Môn nhiều nhà trên đất hỗn hợp — đối chiếu sổ và chỉ giới trước khi đập tường ngoài.",
    priceNote: "Gói làm mới cấp 4 4×16m thường 100–260 triệu.",
    faqA: "Làm mới 1–2 triệu/m²; cải tạo sâu + mái 2,5–4 triệu/m².",
  },
];

const caiTaoBepWc = (() => {
  const slug = "cai-tao-bep-wc-tphcm";
  const focus = "cải tạo nhà bếp tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà Bếp &amp; WC TP.HCM — Sửa Nhà Vệ Sinh Trọn Gói",
    excerpt:
      "Cải tạo nhà bếp, cải tạo / sửa nhà vệ sinh TP.HCM: chống thấm, ống nước, thiết bị. Sao Khuê — 0909 075 668.",
    metaTitle: "Cải Tạo Bếp & WC TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Cải tạo nhà bếp, sửa nhà vệ sinh TP.HCM: chống thấm, đường ống, lát mới. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà bếp tphcm, cải tạo nhà vệ sinh tphcm, sửa nhà vệ sinh tphcm, cải tạo nhà bếp",
    content: `
<h2>Cải tạo nhà bếp TP.HCM — vì sao hay kèm WC?</h2>
<p><strong>Cải tạo nhà bếp TP.HCM</strong> và <strong>sửa nhà vệ sinh TP.HCM</strong> thường làm cùng lúc vì chung trục ống, chống thấm sàn và điện. Làm lệch pha dễ thấm sang phòng bên. Sao Khuê khảo sát dốc sàn, cổ ống, rồi mới ốp lát.</p>
${homeLinkParagraph()}
${a}
<h2>Đơn giá bếp / WC 2026</h2>
<table>
  <thead><tr><th>Hạng mục</th><th>Mốc</th></tr></thead>
  <tbody>
    <tr><td>Sửa nhà vệ sinh (1 phòng)</td><td>18 – 55 triệu</td></tr>
    <tr><td>Cải tạo nhà vệ sinh + chống thấm</td><td>35 – 80 triệu</td></tr>
    <tr><td>Cải tạo nhà bếp (không đảo tường lớn)</td><td>40 – 120 triệu</td></tr>
    <tr><td>Đục thông bếp–phòng</td><td>Báo theo tường chịu lực</td></tr>
  </tbody>
</table>
${b}
<ol>
  <li>Ngâm thử / tìm thấm.</li>
  <li>Tháo ốp, xử lý cổ ống.</li>
  <li>Ống nước, thoát, chống thấm, nghiệm thu ngâm.</li>
  <li>Ốp lát, thiết bị theo list hợp đồng.</li>
</ol>
<p>Gói cả nhà: <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a> · <a href="/tin-tuc/chong-tham-san-thuong-tphcm">chống thấm</a>.</p>
${c}
${faqSection([
  {
    q: "Sửa nhà vệ sinh có ở được không?",
    a: "Cần 1 WC phụ. Nhà 1 WC: làm nhanh 5–10 ngày hoặc thuê nhà vệ sinh tạm.",
  },
  {
    q: "Cải tạo nhà bếp có phải xin phép không?",
    a: "Đổi nội thất không. Đục tường chịu lực / đổi ống đứng: cần kỹ sư và có thể xin phép.",
  },
])}
${seoCtaBlock(focus)}
<p>Gọi <strong>0909 075 668</strong> khi bếp ẩm mốc hoặc WC dột xuống tầng dưới.</p>
`.trim(),
  });
})();

const sonNoiThat = (() => {
  const slug = "son-nha-va-noi-that-tphcm";
  const focus = "sơn nhà trọn gói tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Sơn Nhà Trọn Gói TP.HCM — Trần, Gạch, Nội Thất Nhà Phố",
    excerpt:
      "Sơn nhà trọn gói, sửa trần, thay gạch nền, cải tạo nội thất / phòng khách nhà phố TP.HCM. Sao Khuê — 0909 075 668.",
    metaTitle: "Sơn Nhà Trọn Gói TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Sơn nhà trọn gói, sửa trần, thay gạch nền, cải tạo nội thất nhà phố TP.HCM. Báo giá rõ — 0909 075 668.",
    metaKeywords:
      "sơn nhà trọn gói tphcm, cải tạo nội thất nhà phố, sửa trần nhà tphcm, thay gạch nền nhà tphcm, cải tạo phòng khách nhà phố",
    content: `
<h2>Sơn nhà trọn gói khác “gọi thợ sơn lẻ”</h2>
<p><strong>Sơn nhà trọn gói TP.HCM</strong> gồm bả, lót, phủ, che chắn, dọn — ghi số lớp và thương hiệu. Gói Sao Khuê hay kèm <strong>sửa trần nhà</strong> (thạch cao ố, thấm) và <strong>thay gạch nền nhà</strong> nếu mạch vỡ. <strong>Cải tạo nội thất nhà phố</strong> / <strong>cải tạo phòng khách nhà phố</strong> là bước tiếp: đèn, vách, kệ — sau sơn–lát.</p>
${homeLinkParagraph()}
${a}
<table>
  <thead><tr><th>Hạng mục</th><th>Đơn giá tham khảo</th></tr></thead>
  <tbody>
    <tr><td>Sơn trong (bả + 2–3 lớp)</td><td>90.000 – 180.000 đ/m²</td></tr>
    <tr><td>Sửa trần thạch cao</td><td>theo m² + xử lý thấm</td></tr>
    <tr><td>Thay gạch nền</td><td>220.000 – 450.000 đ/m² (gồm keo, nhân công; gạch theo list)</td></tr>
  </tbody>
</table>
${b}
<p>Nhà đang ở: sơn từng phòng, che đồ. Xem <a href="/tin-tuc/cai-tao-nha-dang-o-tphcm">cải tạo nhà đang ở</a>.</p>
${c}
${faqSection([
  {
    q: "Sơn nhà trọn gói có gồm chống thấm ngoài trời không?",
    a: "Sơn trong khác sơn chống thấm tường ngoài / sân. Ghi tách dòng nếu cần cả hai.",
  },
  {
    q: "Thay gạch nền có đục hết không?",
    a: "Thường tháo lớp cũ để đảm bảo dốc và chống thấm WC. Ốp đè lên gạch cũ dễ phồng.",
  },
])}
${seoCtaBlock(focus)}
<p>Hotline <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

const caiTao2Tang = (() => {
  const slug = "cai-tao-nha-2-tang-tphcm";
  const focus = "cải tạo nhà 2 tầng tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà 2 Tầng &amp; 3 Tầng TP.HCM — Đập Thông, Mở Rộng",
    excerpt:
      "Cải tạo nhà 2 tầng / 3 tầng TP.HCM, mở rộng, đập thông nhà phố. Sao Khuê khảo sát kết cấu — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà 2 Tầng TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Cải tạo nhà 2 tầng, 3 tầng, mở rộng, đập thông nhà phố TP.HCM. Gia cố khi cần — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà 2 tầng tphcm, cải tạo nhà 3 tầng tphcm, mở rộng nhà phố tphcm, đập thông nhà phố tphcm",
    content: `
<h2>Cải tạo nhà 2 tầng TP.HCM khác nhà 1 tầng thế nào?</h2>
<p><strong>Cải tạo nhà 2 tầng TP.HCM</strong> và <strong>cải tạo nhà 3 tầng</strong> phải kiểm tra sàn, cầu thang, ống đứng giữa các tầng. <strong>Đập thông nhà phố</strong> (gộp phòng, giếng trời) chỉ làm khi tường không phải chịu lực hoặc đã có phương án gia cố. <strong>Mở rộng nhà phố TP.HCM</strong> (thêm hiên, lùi chỉ giới, tum) cần đối chiếu giấy phép.</p>
${homeLinkParagraph()}
${a}
<table>
  <thead><tr><th>Việc</th><th>Lưu ý</th></tr></thead>
  <tbody>
    <tr><td>Đập thông</td><td>Kỹ sư xác nhận tường</td></tr>
    <tr><td>Mở rộng</td><td>Chỉ giới, mật độ</td></tr>
    <tr><td>Thêm tầng</td><td>Xem <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng nhà cũ</a></td></tr>
  </tbody>
</table>
${b}
<p>Đơn giá cải tạo sâu 3,5–5 triệu/m² sàn đụng. Landing: <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>
${c}
${faqSection([
  {
    q: "Đập thông nhà phố có sập không?",
    a: "Rủi ro nếu đục cột/dầm. Sao Khuê không đục khi chưa có phương án gia cố.",
  },
  {
    q: "Cải tạo nhà 3 tầng khi đang ở được không?",
    a: "Làm từng tầng. Đập thông liên tầng nên chuyển tạm.",
  },
])}
${seoCtaBlock(focus)}
<p>Gọi <strong>0909 075 668</strong> trước khi đục tường.</p>
`.trim(),
  });
})();

const caiTaoChoThue = (() => {
  const slug = "cai-tao-nha-cho-thue-tphcm";
  const focus = "cải tạo nhà cho thuê tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà Cho Thuê TP.HCM — Nhà Nát, Phá Dỡ, Tường Nứt",
    excerpt:
      "Cải tạo nhà cho thuê, sửa nhà trước khi cho thuê, cải tạo nhà nát, phá dỡ, sửa tường nứt TP.HCM. Sao Khuê — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Cho Thuê TP.HCM | Sao Khuê",
    metaDescription:
      "Cải tạo nhà cho thuê, nhà nát, phá dỡ, sửa tường nứt TP.HCM. Dự toán rõ — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà cho thuê tphcm, sửa nhà trước khi cho thuê, cải tạo nhà nát tphcm, phá dỡ nhà cũ tphcm, sửa tường nứt nhà tphcm",
    content: `
<h2>Cải tạo nhà cho thuê TP.HCM — chốt hạng mục ra tiền</h2>
<p><strong>Cải tạo nhà cho thuê TP.HCM</strong> / <strong>sửa nhà trước khi cho thuê</strong> ưu tiên: WC không thấm, điện an toàn, sơn–lát sạch, PCCC tối thiểu. Không cần nội thất đắt nếu giá thuê không tăng tương ứng.</p>
<p><strong>Cải tạo nhà nát TP.HCM</strong>: khảo sát cột–móng trước. <strong>Phá dỡ nhà cũ TP.HCM</strong> có kiểm soát (không phá chui) khi khung không cứu được. <strong>Sửa tường nứt nhà TP.HCM</strong>: nứt chân chim khác nứt kết cấu — đừng trét che nếu cột yếu.</p>
${homeLinkParagraph()}
${a}
<table>
  <thead><tr><th>Tình trạng</th><th>Hướng xử lý</th></tr></thead>
  <tbody>
    <tr><td>Nhà cũ cho thuê</td><td>WC, điện, sơn, khóa cửa</td></tr>
    <tr><td>Nhà nát, nứt cột</td><td>Gia cố hoặc phá dỡ + xây lại</td></tr>
    <tr><td>Nứt tường ô tô đi gần</td><td>Khảo sát kết cấu</td></tr>
  </tbody>
</table>
${b}
<p>Xây mới cho thuê: <a href="/tin-tuc/xay-nha-cho-thue-tphcm">xây nhà cho thuê TP.HCM</a>. Gia cố: <a href="/tin-tuc/nang-tang-nha-cu-tphcm">nâng tầng / gia cố</a>.</p>
${c}
${faqSection([
  {
    q: "Phá dỡ nhà cũ có cần phép không?",
    a: "Phá toàn bộ / ảnh hưởng hàng xóm: làm việc với phường, có biện pháp che chắn. Sao Khuê không phá chui.",
  },
  {
    q: "Sửa tường nứt hết bao nhiêu?",
    a: "Nứt vữa: vài triệu/mảng. Nứt kết cấu: theo hồ sơ gia cố, không báo giá ảo qua ảnh.",
  },
])}
${seoCtaBlock(focus)}
<p>Hotline <strong>0909 075 668</strong>.</p>
`.trim(),
  });
})();

export const adsBoSung100Dot2CaiTaoBySlug: Record<string, SeoArticle> = applyAdsTopicDepth({
  "cai-tao-bep-wc-tphcm": caiTaoBepWc,
  "son-nha-va-noi-that-tphcm": sonNoiThat,
  "cai-tao-nha-2-tang-tphcm": caiTao2Tang,
  "cai-tao-nha-cho-thue-tphcm": caiTaoChoThue,
  ...Object.fromEntries(DISTRICTS.map((d) => [d.slug, buildDistrictCaiTaoRich(d)])),
});

export const ADS_BO_SUNG_100_DOT2_CAI_TAO_SLUGS = Object.keys(adsBoSung100Dot2CaiTaoBySlug);

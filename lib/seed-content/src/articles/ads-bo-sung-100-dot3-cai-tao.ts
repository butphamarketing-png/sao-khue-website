/**
 * Money pages Ads — 100 từ khóa đợt 3 (Cải tạo).
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
    slug: "cai-tao-nha-quan-4",
    district: "Quận 4",
    keyword: "cải tạo nhà quận 4",
    repairKeyword: "sửa nhà quận 4",
    streets: "Hoàng Diệu, Nguyễn Tất Thành, khu rạch",
    housing: "ống hẹp, 2–4 tầng, một số nền gần kênh",
    issues: [
      "<strong>Chống thấm</strong> chân tường, sân.",
      "<strong>Cải tạo tầng trệt</strong> để xe / quán.",
      "<strong>Sửa WC–bếp</strong>.",
      "<strong>Gia cố</strong> nếu lún.",
    ],
    permitNote: "Gần rạch: khảo sát móng trước nâng tầng. Giờ ồn theo phường.",
    priceNote: "Nền yếu tách dòng gia cố, không gộp đơn giá ảo.",
    faqA: "Sửa công năng 2,5–3,5 triệu/m²; gia cố nền báo sau khảo sát.",
  },
  {
    slug: "cai-tao-nha-quan-5",
    district: "Quận 5",
    keyword: "cải tạo nhà quận 5",
    repairKeyword: "sửa nhà quận 5",
    streets: "Trần Hưng Đạo, Nguyễn Trãi, An Dương Vương",
    housing: "phố mặt tiền kinh doanh + hẻm ống sâu",
    issues: [
      "<strong>Cải tạo nhà kết hợp kinh doanh</strong>.",
      "<strong>Mặt tiền / cửa nhôm kính</strong>.",
      "<strong>Điện 3 pha</strong> quán.",
      "<strong>Chống thấm WC</strong> tầng lầu ở.",
    ],
    permitNote: "Đổi mặt tiền quán: hỏi phường. Hẻm xe ba gác.",
    priceNote: "Mặt tiền kinh doanh thường +10–20% hoàn thiện so nhà ở thuần.",
    faqA: "Nhà ở 2,5–3,5 triệu/m²; mặt tiền quán 3,5–5 triệu/m².",
  },
  {
    slug: "cai-tao-nha-quan-6",
    district: "Quận 6",
    keyword: "cải tạo nhà quận 6",
    repairKeyword: "sửa nhà quận 6",
    streets: "Hậu Giang, Phạm Văn Chí, Bình Phú",
    housing: "cấp 4 xen phố 2–3 tầng, hẻm chật",
    issues: [
      "<strong>Cải tạo nhà cấp 4 / ống hẹp</strong>.",
      "<strong>Thay mái tôn</strong>.",
      "<strong>Sơn – lát</strong> khi đang ở.",
      "<strong>Chống thấm sân</strong>.",
    ],
    permitNote: "Hẻm Q.6 hẹp — phụ phí vận chuyển ghi dự toán.",
    priceNote: "Hẻm &lt; 3m +8–12% logistics.",
    faqA: "Làm mới 1–2 triệu/m²; cải tạo sâu 2,5–4 triệu/m².",
  },
  {
    slug: "cai-tao-nha-quan-9",
    district: "Quận 9 (TP. Thủ Đức)",
    keyword: "cải tạo nhà quận 9",
    repairKeyword: "sửa nhà quận 9",
    streets: "Lê Văn Việt, Đỗ Xuân Hợp, Long Thạnh Mỹ",
    housing: "phố mới, cấp 4, biệt thự mini",
    issues: [
      "<strong>Làm mới nhà phố</strong> 3–4 tầng.",
      "<strong>Cải tạo giếng trời / ban công</strong>.",
      "<strong>Chống thấm sân thượng</strong>.",
      "<strong>Nâng tầng</strong> nếu phép cho.",
    ],
    permitNote: "Thuộc TP. Thủ Đức — xin phép theo phường cũ Q.9.",
    priceNote: "Đường lớn dễ xe; đơn giá sát bảng TP.",
    faqA: "Sửa công năng 2,5–3,5 triệu/m². Nâng tầng báo riêng.",
  },
  {
    slug: "cai-tao-nha-quan-11",
    district: "Quận 11",
    keyword: "cải tạo nhà quận 11",
    repairKeyword: "sửa nhà quận 11",
    streets: "Lạc Long Quân, 3 Tháng 2, Ông Ích Khiêm",
    housing: "ống 4–5m, 3–4 tầng, sát chợ Đầm Sen",
    issues: [
      "<strong>Cải tạo cầu thang / giếng trời</strong> nhà tối.",
      "<strong>Sửa nhà vệ sinh</strong> nhiều tầng.",
      "<strong>Chống thấm tường chung</strong>.",
      "<strong>Sơn mặt tiền</strong>.",
    ],
    permitNote: "Hẻm đông — che chắn bụi bắt buộc nếu đang ở.",
    priceNote: "Nhà 4×12m 3 tầng sửa công năng thường 280–450 triệu.",
    faqA: "2,5–3,5 triệu/m² sàn đụng; đập thông tính gia cố.",
  },
  {
    slug: "cai-tao-nha-cu-chi",
    district: "Củ Chi",
    keyword: "cải tạo nhà củ chi",
    repairKeyword: "sửa nhà củ chi",
    streets: "Quốc lộ 22, Tân Thông Hội, Tân Phú Trung",
    housing: "cấp 4, nhà vườn, phố 1 trệt 1 lầu",
    issues: [
      "<strong>Cải tạo nhà cấp 4</strong>, mái tôn.",
      "<strong>Sửa tường nứt / nền</strong>.",
      "<strong>Điện nước</strong> nhà cũ.",
      "<strong>Mở rộng</strong> nếu đất còn chỉ giới.",
    ],
    permitNote: "Xa nội thành: khảo sát hẹn trước. Đất hỗn hợp — kiểm tra sổ trước khi đập.",
    priceNote: "Gói nhỏ có phụ phí di chuyển; gói trọn gói thường gộp.",
    faqA: "Làm mới cấp 4 1–2 triệu/m²; cải tạo sâu 2–3,5 triệu/m².",
  },
];

const giengTroi = (() => {
  const slug = "cai-tao-gieng-troi-nha-pho-tphcm";
  const focus = "cải tạo giếng trời nhà phố";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Giếng Trời, Cầu Thang, Ban Công, Tầng Trệt Nhà Phố",
    excerpt:
      "Cải tạo giếng trời, cầu thang, ban công, tầng trệt nhà phố TP.HCM. Sao Khuê khảo sát kết cấu — 0909 075 668.",
    metaTitle: "Cải Tạo Giếng Trời Nhà Phố TP.HCM | Sao Khuê",
    metaDescription:
      "Cải tạo giếng trời, cầu thang, ban công, tầng trệt, thông tầng nhà phố. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "cải tạo giếng trời nhà phố, cải tạo cầu thang nhà phố, cải tạo ban công, cải tạo tầng trệt, thông tầng nhà phố tphcm, sửa cửa nhà phố tphcm",
    content: `
<h2>Cải tạo giếng trời nhà phố — lấy sáng nhà ống</h2>
<p><strong>Cải tạo giếng trời nhà phố</strong> giảm tối và ẩm. Kèm <strong>cải tạo cầu thang nhà phố</strong> (đổi vị trí, lan can), <strong>cải tạo ban công</strong>, <strong>cải tạo tầng trệt</strong> (để xe, khách). <strong>Thông tầng nhà phố TP.HCM</strong> chỉ làm khi không cắt dầm chịu lực — hoặc đã gia cố.</p>
${homeLinkParagraph()}
${a}
<p><strong>Sửa cửa nhà phố</strong> / thay cửa nhôm kính: ghi hệ nhôm, kính, bản lề. Sơn mặt tiền tách dòng.</p>
${b}
<p>Xin phép nếu đục mái / thông tầng lớn: <a href="/tin-tuc/xin-giay-phep-cai-tao-nha-tphcm">xin giấy phép cải tạo nhà</a>.</p>
${c}
${faqSection([
  { q: "Thông tầng có cần phép không?", a: "Đổi kết cấu / giếng trời lớn: kiểm tra GPXD. Không đục chui." },
  { q: "Cải tạo tầng trệt hết bao nhiêu?", a: "Lát + cửa + điện 40–150 triệu; đục tường chịu lực báo sau khảo sát." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const kinhDoanh = (() => {
  const slug = "cai-tao-nha-ket-hop-kinh-doanh-tphcm";
  const focus = "cải tạo nhà kết hợp kinh doanh";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Cải Tạo Nhà Kết Hợp Kinh Doanh — Mặt Tiền, Ngập, Nhà 4 Tầng",
    excerpt:
      "Cải tạo nhà kết hợp kinh doanh, mặt tiền quán, sửa sau ngập, nhà cũ 4 tầng, nhà thầu cải tạo TP.HCM. 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Kết Hợp Kinh Doanh TP.HCM | Sao Khuê",
    metaDescription:
      "Cải tạo nhà kết hợp kinh doanh, mặt tiền, sửa sau mưa ngập, nhà 4 tầng. Sao Khuê — 0909 075 668.",
    metaKeywords:
      "cải tạo nhà kết hợp kinh doanh, cải tạo nhà mặt tiền kinh doanh, sửa nhà sau mưa ngập tphcm, cải tạo nhà cũ 4 tầng tphcm, nhà thầu cải tạo nhà tphcm, sửa nhà khẩn cấp tphcm",
    content: `
<h2>Cải tạo nhà kết hợp kinh doanh — tách ở và quán</h2>
<p><strong>Cải tạo nhà kết hợp kinh doanh</strong> / <strong>cải tạo nhà mặt tiền kinh doanh</strong>: trệt quán (cửa kính, điện 3 pha, WC khách), lầu ở riêng lối. <strong>Nhà thầu cải tạo nhà TP.HCM</strong> Sao Khuê nhận <strong>dịch vụ cải tạo nhà phố</strong> một hợp đồng.</p>
<p><strong>Sửa nhà sau mưa ngập TP.HCM</strong>: điện, ốp chân tường, chống thấm, máy bơm. <strong>Sửa nhà khẩn cấp</strong> (dột, chập): xử lý điểm rồi mới gói lớn. <strong>Cải tạo nhà cũ 4 tầng</strong>: kiểm tra sàn, ống đứng, PCCC.</p>
${homeLinkParagraph()}
${a}
${b}
<p>Gói ở thuần: <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa trọn gói</a>.</p>
${c}
${faqSection([
  { q: "Mở quán tầng trệt có cần phép không?", a: "Đổi công năng / mặt tiền: hỏi phường. Sao Khuê tư vấn hiện trạng." },
  { q: "Sửa khẩn cấp trong ngày?", a: "Dột điểm, mất điện nhánh: xử lý tạm. Gói lớn vẫn cần khảo sát." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const gacLung = (() => {
  const slug = "cai-tao-gac-lung-nha-pho-tphcm";
  const focus = "làm gác lửng nhà phố";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Làm Gác Lửng Nhà Phố — Ống 4m, Ống Hẹp TP.HCM",
    excerpt:
      "Làm gác lửng, cải tạo nhà ống 4m / ống hẹp TP.HCM. Sao Khuê tính tải trọng — 0909 075 668.",
    metaTitle: "Làm Gác Lửng Nhà Phố TP.HCM | Sao Khuê",
    metaDescription:
      "Làm gác lửng nhà phố, cải tạo nhà ống 4m / ống hẹp TP.HCM. Khảo sát tải trọng cột–dầm, không hàn treo tường gạch — 0909 075 668.",
    metaKeywords:
      "làm gác lửng nhà phố, cải tạo nhà có gác lửng, cải tạo nhà ống 4m, cải tạo nhà ống hẹp tphcm, cải tạo phòng ngủ nhà phố",
    content: `
<h2>Làm gác lửng nhà phố — thêm chỗ ngủ khi đất hẹp</h2>
<p><strong>Làm gác lửng nhà phố</strong> / <strong>cải tạo nhà có gác lửng</strong> cần chiều cao thông thủy và dầm chịu tải. <strong>Cải tạo nhà ống 4m</strong> / <strong>cải tạo nhà ống hẹp TP.HCM</strong>: ưu tiên giếng trời, màu sáng, cầu thang nhỏ. <strong>Cải tạo phòng ngủ nhà phố</strong> trên gác: cách âm, điện, thoát hiểm.</p>
${homeLinkParagraph()}
${a}
<p>Không tự hàn sắt treo gác lên tường gạch. Sao Khuê neo vào cột/dầm hoặc gia cố.</p>
${b}
${c}
${faqSection([
  { q: "Nhà ống 4m làm gác được không?", a: "Được nếu cao đủ và kết cấu cho phép. Khảo sát đo tầng." },
  { q: "Gác lửng có tính tầng xin phép không?", a: "Tùy diện tích / chiều cao theo phường. Tư vấn trước khi làm." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const thamTuongWc = (() => {
  const slug = "chong-tham-tuong-wc-tphcm";
  const focus = "chống thấm wc tphcm";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Chống Thấm WC &amp; Tường Ngoài — Thay Mái Tôn, Sửa Sàn",
    excerpt:
      "Chống thấm WC, tường ngoài, thay mái tôn, sửa sàn nhà TP.HCM. Nghiệm thu ngâm nước — 0909 075 668.",
    metaTitle: "Chống Thấm WC TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Chống thấm WC, tường ngoài, thay mái tôn, sửa sàn TP.HCM. Tháo ốp, xử lý cổ ống, ngâm thử — 0909 075 668.",
    metaKeywords:
      "chống thấm wc tphcm, chống thấm tường ngoài tphcm, thay mái tôn nhà tphcm, sửa sàn nhà tphcm, sơn mặt tiền nhà phố, thay cửa nhôm kính nhà phố",
    content: `
<h2>Chống thấm WC TP.HCM — đừng chỉ trét keo mặt</h2>
<p><strong>Chống thấm WC TP.HCM</strong> bền khi tháo ốp, xử lý cổ ống, ngâm thử. <strong>Chống thấm tường ngoài</strong> khác sơn trang trí: cần xử lý nứt, chân tường. <strong>Thay mái tôn nhà TP.HCM</strong> khi dột diềm, vít, tấm. <strong>Sửa sàn nhà</strong> (phồng gạch, dốc sai) làm sau chống thấm.</p>
${homeLinkParagraph()}
${a}
<p><strong>Sơn mặt tiền nhà phố</strong> và <strong>thay cửa nhôm kính nhà phố</strong> nên sau khi tường khô.</p>
${b}
<p>Sân thượng: <a href="/tin-tuc/chong-tham-san-thuong-tphcm">chống thấm sân thượng</a> · WC gói lớn: <a href="/tin-tuc/cai-tao-bep-wc-tphcm">cải tạo bếp–WC</a>.</p>
${c}
${faqSection([
  { q: "Chống thấm WC bảo hành?", a: "24–60 tháng tùy hệ thống, không khoan thủng lớp phủ." },
  { q: "Thay mái tôn hết bao lâu?", a: "Nhà phố 1–4 ngày tùy diện tích và mưa." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

const xinPhepCaiTao = (() => {
  const slug = "xin-giay-phep-cai-tao-nha-tphcm";
  const focus = "xin giấy phép cải tạo nhà";
  const { a, b, c } = imgs(slug, focus);
  return article(slug, focus, {
    title: "Xin Giấy Phép Cải Tạo Nhà TP.HCM — Khi Nào Bắt Buộc",
    excerpt:
      "Xin giấy phép cải tạo nhà TP.HCM: đục kết cấu, đổi mặt tiền, nâng tầng. Sao Khuê tư vấn hồ sơ — 0909 075 668.",
    metaTitle: "Xin Giấy Phép Cải Tạo Nhà TP.HCM | Sao Khuê",
    metaDescription:
      "Xin giấy phép cải tạo nhà TP.HCM: khi nào bắt buộc, hồ sơ, lệ phí, đục kết cấu / đổi mặt tiền. Tư vấn 0909 075 668.",
    metaKeywords: "xin giấy phép cải tạo nhà, giấy phép cải tạo nhà tphcm, phép sửa nhà tphcm",
    content: `
<h2>Xin giấy phép cải tạo nhà — việc nào cần, việc nào không</h2>
<p><strong>Xin giấy phép cải tạo nhà</strong> thường cần khi: đổi kết cấu, số tầng, mặt đứng lớn, công năng (ở → quán). Sơn, lát, thay thiết bị WC: thường không. Sao Khuê không thi công vượt phép.</p>
${homeLinkParagraph()}
${a}
<p>Xây mới: <a href="/tin-tuc/xin-giay-phep-xay-dung-tphcm">giấy phép xây dựng nhà phố</a>.</p>
${b}
${c}
${faqSection([
  { q: "Sơn nhà có cần phép không?", a: "Không. Đục cột, thông tầng, nâng tum: cần kiểm tra GPXD." },
  { q: "Sao Khuê làm hồ sơ giúp?", a: "Tư vấn hiện trạng + hỗ trợ hồ sơ theo phường. Lệ phí nhà nước chủ nhà nộp." },
])}
${seoCtaBlock(focus)}
<p><strong>0909 075 668</strong></p>
`.trim(),
  });
})();

export const adsBoSung100Dot3CaiTaoBySlug: Record<string, SeoArticle> = applyAdsTopicDepth({
  "cai-tao-gieng-troi-nha-pho-tphcm": giengTroi,
  "cai-tao-nha-ket-hop-kinh-doanh-tphcm": kinhDoanh,
  "cai-tao-gac-lung-nha-pho-tphcm": gacLung,
  "chong-tham-tuong-wc-tphcm": thamTuongWc,
  "xin-giay-phep-cai-tao-nha-tphcm": xinPhepCaiTao,
  ...Object.fromEntries(DISTRICTS.map((d) => [d.slug, buildDistrictCaiTaoRich(d)])),
});

export const ADS_BO_SUNG_100_DOT3_CAI_TAO_SLUGS = Object.keys(adsBoSung100Dot3CaiTaoBySlug);

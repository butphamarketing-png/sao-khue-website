/**
 * Hand-crafted money pages — batch 3 (20 bài geo trọn gói theo quận).
 */
import type { MoneyPageOverride } from "./money-page-overrides";

type DistrictTurnkeyBrief = {
  slug: string;
  district: string;
  keyword: string;
  localNote: string;
  priceHint: string;
  caseLink?: { href: string; label: string };
  hubLink?: { href: string; label: string };
};

function buildDistrictTurnkey(b: DistrictTurnkeyBrief): MoneyPageOverride {
  const caseLine = b.caseLink
    ? `<p>Tham khảo: <a href="${b.caseLink.href}">${b.caseLink.label}</a>.</p>`
    : "";
  const hubLine = b.hubLink
    ? `<p>Xem thêm: <a href="${b.hubLink.href}">${b.hubLink.label}</a> · <a href="/tin-tuc/xay-nha-tphcm">hub xây nhà TP.HCM</a>.</p>`
    : `<p>Hub: <a href="/tin-tuc/xay-nha-tphcm">xây nhà TP.HCM</a> · <a href="/dich-vu/xay-nha-tron-goi-tphcm">dịch vụ trọn gói</a>.</p>`;

  return {
    title: `Xây Nhà Trọn Gói ${b.district} — Báo Giá & Quy Trình 2026`,
    excerpt: `Xây nhà trọn gói ${b.district}: khảo sát, thiết kế, thi công một đầu mối. Sao Khuê BH kết cấu 10 năm — 0909 075 668.`,
    metaTitle: `Xây Nhà Trọn Gói ${b.district} 2026 | Sao Khuê`,
    metaDescription: `Xây nhà trọn gói ${b.district}: báo giá minh bạch, am hiểu quy hoạch địa phương. Hotline 0909 075 668.`,
    metaKeywords: `${b.keyword}, xây nhà trọn gói tphcm, nhà thầu ${b.district.toLowerCase()}, sao khuê`,
    imageAlt: `Xây nhà trọn gói ${b.district} — Kiến Trúc Sao Khuê`,
    content: `<h2>Xây nhà trọn gói ${b.district} — đặc thù địa phương</h2>
<p><strong>${b.keyword.charAt(0).toUpperCase() + b.keyword.slice(1)}</strong> cần nhà thầu am hiểu quy hoạch, điều kiện hẻm và thói quen thi công tại khu vực. ${b.localNote} <strong>Kiến Trúc Sao Khuê</strong> khảo sát miễn phí, báo giá theo hạng mục, bảo hành kết cấu <strong>10 năm</strong>.</p>
${hubLine}
${caseLine}

<h2>Gói trọn gói bao gồm</h2>
<ul>
  <li>Khảo sát đất &amp; tư vấn quy hoạch sơ bộ.</li>
  <li>Thiết kế 2D/3D (theo gói hợp đồng).</li>
  <li>Thi công móng → thô → hoàn thiện cơ bản.</li>
  <li>Giám sát cốt thép, chống thấm mái/sân thượng.</li>
  <li>Nghiệm thu &amp; bàn giao hồ sơ bảo hành.</li>
</ul>

<h2>Chi phí tham khảo tại ${b.district}</h2>
<p>${b.priceHint}</p>
<table>
  <thead><tr><th>Quy mô</th><th>Trọn gói (ước tính)</th></tr></thead>
  <tbody>
    <tr><td>Nhà phố 3 tầng ~80m² sàn</td><td>3,2 – 4,5 tỷ</td></tr>
    <tr><td>Nhà phố 4 tầng ~100m² sàn</td><td>4 – 5,8 tỷ</td></tr>
    <tr><td>Hẻm hẹp / vận chuyển khó</td><td>+5 – 12%</td></tr>
  </tbody>
</table>

<h2>Checklist trước khi ký hợp đồng</h2>
<ol>
  <li>Sổ đỏ/hợp đồng đất rõ ràng.</li>
  <li>Bản vẽ kết cấu phù hợp địa chất khu ${b.district}.</li>
  <li>Hợp đồng ghi chủng loại vật tư &amp; tiến độ thanh toán.</li>
  <li>Cam kết bảo hành kết cấu bằng văn bản.</li>
</ol>

<h2>FAQ — ${b.district}</h2>
<details><summary>Thời gian thi công nhà phố 4 tầng?</summary><p>Thường <strong>5–8 tháng</strong> tùy mùa mưa và hoàn thiện. Sao Khuê cam kết tiến độ trong hợp đồng.</p></details>
<details><summary>Có hỗ trợ xin giấy phép không?</summary><p>Có tư vấn và hỗ trợ hồ sơ theo quy định từng phường tại ${b.district}.</p></details>

<p>Hotline <strong>0909 075 668</strong> · <a href="/lien-he">Đặt lịch khảo sát</a> · <a href="/bao-gia">Bảng báo giá</a></p>`,
  };
}

const DISTRICT_TURNKEY_BRIEFS: DistrictTurnkeyBrief[] = [
  {
    slug: "xay-nha-tron-goi-quan-1",
    district: "Quận 1",
    keyword: "xây nhà trọn gói Quận 1",
    localNote:
      "Q.1 ít lô trống, nhiều cải tạo sâu hoặc xây mới trên nền cũ — cần kiểm tra lộ giới trung tâm và giờ thi công hạn chế tiếng ồn.",
    priceHint:
      "Chi phí Q.1 thường cao hơn trung bình TP.HCM 10–20% do logistics và yêu cầu hoàn thiện.",
  },
  {
    slug: "xay-nha-tron-goi-quan-3",
    district: "Quận 3",
    keyword: "xây nhà trọn gói Quận 3",
    localNote:
      "Q.3 tập trung nhà phố cũ 3–4 tầng — hay gặp nhu cầu cải tạo toàn diện hoặc xây mới trên nền. Tham khảo case <a href=\"/cong-trinh/sua-nha-quan-3\">cải tạo Q.3</a>.",
    priceHint: "Nhà phố Q.3 trọn gói: 3,8 – 6 tỷ tùy phạm vi đập/xây.",
    caseLink: { href: "/cong-trinh/sua-nha-quan-3", label: "Cải tạo nhà phố Quận 3" },
  },
  {
    slug: "xay-nha-tron-goi-quan-4",
    district: "Quận 4",
    keyword: "xây nhà trọn gói Quận 4",
    localNote:
      "Q.4 gần kênh rạch — khảo sát móng và chống thấm là ưu tiên số 1 khi xây nhà trọn gói.",
    priceHint: "Móng cọc/ép cọc có thể chiếm 12–18% tổng giá trị ở khu ven sông.",
  },
  {
    slug: "xay-nha-tron-goi-quan-5",
    district: "Quận 5",
    keyword: "xây nhà trọn gói Quận 5",
    localNote:
      "Q.5 (Chợ Lớn) mật độ cao, hẻm chật — cần kế hoạch vận chuyển vật liệu và lưu trữ tại chỗ.",
    priceHint: "Hẻm &lt; 3m thường tăng chi phí thi công 8–15%.",
  },
  {
    slug: "xay-nha-tron-goi-quan-6",
    district: "Quận 6",
    keyword: "xây nhà trọn gói Quận 6",
    localNote:
      "Q.6 có mix nhà phố cũ và khu dân cư mới — quy hoạch chiều cao cần xác nhận theo phường sau sáp nhập.",
    priceHint: "Trọn gói nhà phố 3–4 tầng Q.6: 3,5 – 5,2 tỷ.",
  },
  {
    slug: "xay-nha-tron-goi-quan-7",
    district: "Quận 7",
    keyword: "xây nhà trọn gói Quận 7",
    localNote:
      "Q.7 (Phú Mỹ Hưng, Tân Phong, Tân Hưng) nhiều KDC quy chuẩn — phải tuân thủ quy chế xây dựng ban quản lý.",
    priceHint: "KDC cao cấp thường yêu cầu vật liệu và facade đồng bộ — giá hoàn thiện cao hơn.",
    hubLink: { href: "/tin-tuc/xay-nha-quan-7", label: "Xây nhà Quận 7" },
  },
  {
    slug: "xay-nha-tron-goi-quan-8",
    district: "Quận 8",
    keyword: "xây nhà trọn gói Quận 8",
    localNote:
      "Q.8 ven sông Đồng Nai, Bình Đông — đất yếu một số phường, cần khảo sát địa chất trước thiết kế móng.",
    priceHint: "Nhà phố Q.8 trọn gói thường cạnh tranh về giá so với nội thành.",
  },
  {
    slug: "xay-nha-tron-goi-quan-9",
    district: "Quận 9",
    keyword: "xây nhà trọn gói Quận 9",
    localNote:
      "Khu cũ Q.9 (nay thuộc TP. Thủ Đức) nhiều lô rộng, phù hợp nhà phố 4–5 tầng hoặc cho thuê.",
    priceHint: "Lô rộng hơn nội thành — đơn giá/m² sàn có thể thấp hơn 5–10%.",
    hubLink: { href: "/tin-tuc/xay-nha-thu-duc", label: "Xây nhà Thủ Đức" },
  },
  {
    slug: "xay-nha-tron-goi-quan-10",
    district: "Quận 10",
    keyword: "xây nhà trọn gói Quận 10",
    localNote:
      "Q.10 nhà phố hẻm sâu, nhiều hộ kinh doanh tầng trệt — thiết kế shophouse + ở trên lầu phổ biến.",
    priceHint: "Kết hợp kinh doanh cần tách điện tải và PCCC tầng trệt.",
    hubLink: { href: "/tin-tuc/xay-shophouse-tphcm", label: "Xây shophouse TP.HCM" },
  },
  {
    slug: "xay-nha-tron-goi-quan-11",
    district: "Quận 11",
    keyword: "xây nhà trọn gói Quận 11",
    localNote:
      "Q.11 (Hòa Bình, Lạc Long Quân…) mật độ dân cư cao, hẻm 2,5–3,5m — cẩu vật liệu cần phương án cụ thể.",
    priceHint: "Trọn gói 3 tầng phổ biến cho gia đình 4–5 người.",
  },
  {
    slug: "xay-nha-tron-goi-quan-12",
    district: "Quận 12",
    keyword: "xây nhà trọn gói Quận 12",
    localNote:
      "Q.12 giáp Đồng Nai, nhiều khu dân cư tự phát lâu năm — cần xác minh quy hoạch trước khi đầu tư lớn.",
    priceHint: "Q.12 là lựa chọn cân bằng giữa giá đất và kết nối về TP.HCM.",
  },
  {
    slug: "xay-nha-tron-goi-tan-binh",
    district: "Tân Bình",
    keyword: "xây nhà trọn gói Tân Bình",
    localNote:
      "Tân Bình gần sân bay — một số phường hạn chế chiều cao; hẻm Phạm Văn Hai, Hoàng Văn Thụ thi công cần giờ hành chính.",
    priceHint: "Nhà phố Tân Bình trọn gói: 3,6 – 5,5 tỷ.",
    hubLink: { href: "/tin-tuc/xay-nha-tan-phu", label: "Xây nhà Tân Phú lân cận" },
  },
  {
    slug: "xay-nha-tron-goi-binh-tan",
    district: "Bình Tân",
    keyword: "xây nhà trọn gói Bình Tân",
    localNote:
      "Bình Tân mở rộng nhanh — mix KDC mới (An Lạc, Bình Hưng Hòa) và nhà phố cũ cần cải tạo.",
    priceHint: "KDC mới thường có đường xe tải — giảm chi phí vận chuyển so với hẻm nội thành.",
  },
  {
    slug: "xay-nha-tron-goi-tan-phu",
    district: "Tân Phú",
    keyword: "xây nhà trọn gói Tân Phú",
    localNote:
      "Tân Phú (Tân Sơn Nhì, Phú Thạnh) nhà phố hẻm ổn định — nhu cầu xây mới thế hệ 2 phổ biến.",
    priceHint: "Trọn gói Tân Phú cạnh tranh, phù hợp ngân sách trung bình.",
    hubLink: { href: "/tin-tuc/xay-nha-tan-phu", label: "Xây nhà Tân Phú" },
  },
  {
    slug: "xay-nha-tron-goi-phu-nhuan",
    district: "Phú Nhuận",
    keyword: "xây nhà trọn gói Phú Nhuận",
    localNote:
      "Phú Nhuận diện tích nhỏ, giá đất cao — tối ưu từng m² bằng giếng trời và thiết kế gác/4 tầng.",
    priceHint: "Chi phí/m² cao hơn vì logistics hẻm và yêu cầu hoàn thiện.",
  },
  {
    slug: "xay-nha-tron-goi-hoc-mon",
    district: "Hóc Môn",
    keyword: "xây nhà trọn gói Hóc Môn",
    localNote:
      "Hóc Môn lô đất rộng hơn — phù hợp nhà ở kết hợp trang trại nhỏ, nhà vườn 1–2 tầng.",
    priceHint: "Đơn giá trọn gói Hóc Môn thường thấp hơn nội thành 10–18%.",
  },
  {
    slug: "xay-nha-tron-goi-binh-chanh",
    district: "Bình Chánh",
    keyword: "xây nhà trọn gói Bình Chánh",
    localNote:
      "Bình Chánh nhiều KDC ven TP.HCM — cần tuân quy chế chủ đầu tư và khảo sát giao thông vật liệu.",
    priceHint: "Biệt thự mini và nhà phố 4 tầng KDC là phân khúc mạnh.",
    hubLink: { href: "/tin-tuc/xay-nha-kdc-binh-chanh", label: "Xây nhà KDC Bình Chánh" },
  },
  {
    slug: "xay-nha-tron-goi-nha-be",
    district: "Nhà Bè",
    keyword: "xây nhà trọn gói Nhà Bè",
    localNote:
      "Nhà Bè ven sông, nhiều biệt thự và nhà phố view nước — móng và chống lún quan trọng.",
    priceHint: "Biệt thự Nhà Bè trọn gói: 6 – 15 tỷ+ tùy quy mô.",
    hubLink: { href: "/tin-tuc/xay-nha-nha-be", label: "Xây nhà Nhà Bè" },
  },
  {
    slug: "xay-nha-tron-goi-cu-chi",
    district: "Củ Chi",
    keyword: "xây nhà trọn gói Củ Chi",
    localNote:
      "Củ Chi lô rộng, đường xe tải — thích hợp nhà vườn, homestay, nhà ở kết hợp kinh doanh.",
    priceHint: "Chi phí trọn gói Củ Chi thấp nhất trong các huyện TP.HCM.",
  },
  {
    slug: "xay-nha-nha-be",
    district: "Nhà Bè",
    keyword: "xây nhà Nhà Bè",
    localNote:
      "Xây nhà tại Nhà Bè thường hướng tới không gian rộng, sân vườn và biệt thự ven kênh — khác nhịp sống hẻm nội thành.",
    priceHint: "Nên tách gói thô và hoàn thiện nếu ngân sách giãn theo quý.",
    hubLink: { href: "/tin-tuc/xay-nha-tron-goi-nha-be", label: "Trọn gói Nhà Bè" },
  },
];

export const MONEY_PAGE_OVERRIDE_SLUGS_BATCH3: string[] = DISTRICT_TURNKEY_BRIEFS.map((b) => b.slug);

export const moneyPageOverridesBatch3: Record<string, MoneyPageOverride> = Object.fromEntries(
  DISTRICT_TURNKEY_BRIEFS.map((b) => [b.slug, buildDistrictTurnkey(b)]),
);

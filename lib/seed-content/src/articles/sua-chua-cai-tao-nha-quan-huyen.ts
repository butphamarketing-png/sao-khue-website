/** Bài SEO sửa chữa / cải tạo nhà theo quận TP.HCM */
import { homeLinkParagraph, imageFigure, seoCtaBlock } from "../article-seo-blocks";
import { slugImage } from "../site-images";
type DistrictOpts = {
  slug: string;
  districtLabel: string;
  focusKeyword: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  localNote: string;
  commonIssues: string[];
};

function districtArticle(o: DistrictOpts) {
  const img1 = slugImage(o.slug, 0);
  const img2 = slugImage(o.slug, 1);
  const issues = o.commonIssues.map((i) => `<li>${i}</li>`).join("\n  ");

  return {
    title: o.title,
    excerpt: o.excerpt,
    metaTitle: o.metaTitle,
    metaDescription: o.metaDescription,
    metaKeywords: `${o.focusKeyword}, sửa chữa cải tạo nhà TP.HCM, sửa nhà trọn gói ${o.districtLabel}, cải tạo nhà cũ ${o.districtLabel}, kiến trúc sao khuê`,
    imageAlt: o.focusKeyword,
    imageCaption: `${o.focusKeyword} — Sao Khuê`,
    content: `
<h2>${o.focusKeyword} — Dịch vụ trọn gói tại ${o.districtLabel}</h2>
<p><strong>${o.focusKeyword}</strong> là nhu cầu thiết thực khi nhà ở tại <strong>${o.districtLabel}</strong> đã xuống cấp sau nhiều năm sử dụng. ${o.localNote}</p>
<p><strong>Kiến Trúc Sao Khuê</strong> nhận khảo sát, báo giá và thi công <strong>sửa chữa cải tạo nhà TP.HCM</strong> tại ${o.districtLabel} và các phường, xã trực thuộc — một đầu mối từ phương án đến bàn giao.</p>

${imageFigure(img1, o.focusKeyword, 1)}

<h2>Hạng mục sửa chữa phổ biến tại ${o.districtLabel}</h2>
<ul>
  ${issues}
  <li><strong>Thay điện nước, chống giật</strong> — an toàn cho gia đình.</li>
  <li><strong>Cải tạo nội thất:</strong> Bếp, WC, phòng ngủ theo nhu cầu mới.</li>
</ul>
<p>Tham khảo <a href="/tin-tuc/sua-chua-cai-tao-nha-tphcm">sửa chữa cải tạo nhà TP.HCM</a> (bản đồ quận huyện), <a href="/dich-vu/sua-nha-tron-goi-tphcm">sửa nhà trọn gói</a> và <a href="/dich-vu/nang-tang-nha-pho">nâng tầng nhà phố</a> nếu cần mở rộng diện tích.</p>

<h2>Quy trình thi công tại ${o.districtLabel}</h2>
<ol>
  <li>Khảo sát tận nhà — đo đạc, chụp hiện trạng, ghi nhận thấm/nứt.</li>
  <li>Báo giá chi tiết theo hạng mục — không ép ký gói thừa.</li>
  <li>Thi công có giám sát, che chắn bụi, vệ sinh mỗi ngày.</li>
  <li>Nghiệm thu từng giai đoạn — bàn giao và bảo hành.</li>
</ol>

${imageFigure(img2, o.focusKeyword, 2)}

<h2>Chi phí ${o.focusKeyword} (ước tính)</h2>
<p>Giá phụ thuộc diện tích, độ phức tạp và vật liệu. Tham khảo: sửa nhẹ 1,5–3 triệu đ/m²; cải tạo toàn diện 8–15 triệu đ/m². Liên hệ <strong>0909 075 668</strong> hoặc <a href="/bao-gia">/bao-gia</a> để nhận dự toán chính xác cho nhà tại ${o.districtLabel}.</p>

${homeLinkParagraph()}

${seoCtaBlock(o.focusKeyword)}
`.trim(),
  };
}

export const suaChuaCaiTaoNhaBinhThanh = districtArticle({
  slug: "sua-chua-cai-tao-nha-binh-thanh",
  districtLabel: "Quận Bình Thạnh",
  focusKeyword: "sửa chữa cải tạo nhà Bình Thạnh",
  title: "Sửa Chữa Cải Tạo Nhà Bình Thạnh — Trọn Gói Uy Tín",
  excerpt:
    "Sửa chữa cải tạo nhà Bình Thạnh: nhà phố, chung cư thấp tầng. Chống thấm sân thượng, gia cố, cải tạo nội thất. Sao Khuê — 0909 075 668.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Bình Thạnh | Sao Khuê",
  metaDescription:
    "Dịch vụ sửa chữa cải tạo nhà Bình Thạnh uy tín: chống thấm, sửa nhà cũ, cải tạo trọn gói. Khảo sát miễn phí. Hotline 0909 075 668.",
  localNote:
    "Khu vực Bình Lợi, Phạm Văn Đồng, Xô Viết Nghệ Tĩnh có nhiều nhà phố 3–4 tầng cần chống thấm mái và cải tạo WC.",
  commonIssues: [
    "<strong>Chống thấm sân thượng, mái</strong> — mùa mưa TP.HCM.",
    "<strong>Gia cố cầu thang, lan can</strong> nhà ống hẹp.",
    "<strong>Mở rộng phòng ngủ</strong> cho gia đình đông người.",
  ],
});

export const suaChuaCaiTaoNhaThuDuc = districtArticle({
  slug: "sua-chua-cai-tao-nha-thu-duc",
  districtLabel: "TP. Thủ Đức",
  focusKeyword: "sửa chữa cải tạo nhà Thủ Đức",
  title: "Sửa Chữa Cải Tạo Nhà Thủ Đức — Thi Công Trọn Gói",
  excerpt:
    "Sửa chữa cải tạo nhà Thủ Đức: Hiệp Phú, Linh Trung, Long Bình… Nâng tầng, hoàn thiện, sửa nhà cũ. Sao Khuê khảo sát miễn phí.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Thủ Đức | Trọn Gói | Sao Khuê",
  metaDescription:
    "Sửa chữa cải tạo nhà Thủ Đức: nhà phố, biệt thự khu đô thị. Báo giá minh bạch, bảo hành hạng mục. Gọi 0909 075 668.",
  localNote:
    "Thủ Đức có nhiều khu đô thị mới xen kẽ nhà cũ — chủ nhà thường cần hoàn thiện nội thất hoặc nâng thêm tầng.",
  commonIssues: [
    "<strong>Hoàn thiện nhà phố</strong> mới xây phần thô.",
    "<strong>Nâng tầng, mở rộng</strong> theo quy hoạch.",
    "<strong>Cải tạo biệt thự</strong> — sân vườn, hồ bơi.",
  ],
});

export const suaChuaCaiTaoNhaQuan7 = districtArticle({
  slug: "sua-chua-cai-tao-nha-quan-7",
  districtLabel: "Quận 7",
  focusKeyword: "sửa chữa cải tạo nhà Quận 7",
  title: "Sửa Chữa Cải Tạo Nhà Quận 7 — Chuyên Nghiệp",
  excerpt:
    "Sửa chữa cải tạo nhà Quận 7: Phú Mỹ Hưng, Tân Hưng, Bình Thuận. Cải tạo biệt thự, chống thấm, nội thất cao cấp.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Quận 7 | Sao Khuê",
  metaDescription:
    "Dịch vụ sửa chữa cải tạo nhà Quận 7: biệt thự, nhà phố khu Nam. Khảo sát miễn phí, thi công trọn gói. 0909 075 668.",
  localNote:
    "Quận 7 có nhiều biệt thự và nhà phố khu Nam — yêu cầu thẩm mỹ và vật liệu hoàn thiện cao hơn trung bình.",
  commonIssues: [
    "<strong>Cải tạo nội thất cao cấp</strong> — phòng khách, bếp mở.",
    "<strong>Chống thấm hồ bơi, sân thượng</strong>.",
    "<strong>Nâng cấp hệ thống điện</strong> cho thiết bị smart home.",
  ],
});

export const suaChuaCaiTaoNhaGoVap = districtArticle({
  slug: "sua-chua-cai-tao-nha-go-vap",
  districtLabel: "Quận Gò Vấp",
  focusKeyword: "sửa chữa cải tạo nhà Gò Vấp",
  title: "Sửa Chữa Cải Tạo Nhà Gò Vấp — Báo Giá Minh Bạch",
  excerpt:
    "Sửa chữa cải tạo nhà Gò Vấp: nhà ống, nhà cũ 20–30 năm. Chống thấm, gia cố, sửa WC. Sao Khuê — 0909 075 668.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Gò Vấp | Trọn Gói | Sao Khuê",
  metaDescription:
    "Sửa chữa cải tạo nhà Gò Vấp uy tín: sửa nhà cũ, chống thấm, cải tạo trọn gói. Khảo sát tận nơi. Hotline 0909 075 668.",
  localNote:
    "Gò Vấp mật độ dân cư cao — nhà ống 4×15 m cần tối ưu ánh sáng và thông gió khi cải tạo.",
  commonIssues: [
    "<strong>Sửa nhà cũ 20–30 năm</strong> — thấm tường, sơn bong.",
    "<strong>Cải tạo WC, bếp</strong> chật hẹp.",
    "<strong>Gia cố sàn, cầu thang</strong> khi thêm phòng.",
  ],
});

export const suaChuaCaiTaoNhaBinhChanh = districtArticle({
  slug: "sua-chua-cai-tao-nha-binh-chanh",
  districtLabel: "Huyện Bình Chánh",
  focusKeyword: "sửa chữa cải tạo nhà Bình Chánh",
  title: "Sửa Chữa Cải Tạo Nhà Bình Chánh — Trọn Gói",
  excerpt:
    "Sửa chữa cải tạo nhà Bình Chánh: nhà cấp 4, nhà vườn, mở rộng diện tích. Gia cố móng, chống thấm. Sao Khuê.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Bình Chánh | Sao Khuê",
  metaDescription:
    "Sửa chữa cải tạo nhà Bình Chánh: Vĩnh Lộc, Tân Nhựt, Bình Hưng… Báo giá rõ ràng, thi công uy tín. 0909 075 668.",
  localNote:
    "Bình Chánh có nhiều nhà vườn, nhà cấp 4 — thường cần gia cố móng và mở rộng phía sau.",
  commonIssues: [
    "<strong>Gia cố móng, nền</strong> trên đất yếu.",
    "<strong>Mở rộng nhà phía sau</strong> — thêm phòng ngủ.",
    "<strong>Chống thấm tường ngoài</strong> — mùa mưa.",
  ],
});

export const suaChuaCaiTaoNhaTanPhu = districtArticle({
  slug: "sua-chua-cai-tao-nha-tan-phu",
  districtLabel: "Quận Tân Phú",
  focusKeyword: "sửa chữa cải tạo nhà Tân Phú",
  title: "Sửa Chữa Cải Tạo Nhà Tân Phú — Uy Tín TP.HCM",
  excerpt:
    "Sửa chữa cải tạo nhà Tân Phú: Tân Sơn Nhì, Phú Thọ Hòa… Sửa nhà cũ, chống thấm, cải tạo nội thất trọn gói.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Tân Phú | Sao Khuê",
  metaDescription:
    "Dịch vụ sửa chữa cải tạo nhà Tân Phú: khảo sát miễn phí, báo giá hạng mục. Sao Khuê — 0909 075 668.",
  localNote:
    "Tân Phú có mix nhà phố và chung cư thấp tầng — hạng mục sửa từng phần hoặc trọn gói đều phù hợp.",
  commonIssues: [
    "<strong>Sửa chữa nhà phố</strong> — trát, sơn, lát gạch.",
    "<strong>Chống thấm WC, ban công</strong>.",
    "<strong>Tái bố trí phòng</strong> cho gia đình trẻ.",
  ],
});

export const suaChuaCaiTaoNhaQuan1 = districtArticle({
  slug: "sua-chua-cai-tao-nha-quan-1",
  districtLabel: "Quận 1",
  focusKeyword: "sửa chữa cải tạo nhà Quận 1",
  title: "Sửa Chữa Cải Tạo Nhà Quận 1 — Chuyên Nghiệp",
  excerpt:
    "Sửa chữa cải tạo nhà Quận 1: nhà phố trung tâm, shophouse. Gia cố, chống thấm, cải tạo nội thất cao cấp.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Quận 1 | Sao Khuê",
  metaDescription:
    "Sửa chữa cải tạo nhà Quận 1: kinh nghiệm nhà phố hẹp, shophouse. Báo giá minh bạch. Gọi 0909 075 668.",
  localNote:
    "Quận 1 — diện tích nhỏ, yêu cầu thi công gọn, ít ảnh hưởng hàng xóm và tuân thủ giờ thi công.",
  commonIssues: [
    "<strong>Cải tạo shophouse</strong> — mặt tiền kinh doanh.",
    "<strong>Gia cố nhà cũ</strong> trước khi mở rộng.",
    "<strong>Nội thất cao cấp</strong> — tối ưu không gian hẹp.",
  ],
});

export const suaChuaCaiTaoNhaHocMon = districtArticle({
  slug: "sua-chua-cai-tao-nha-hoc-mon",
  districtLabel: "Huyện Hóc Môn",
  focusKeyword: "sửa chữa cải tạo nhà Hóc Môn",
  title: "Sửa Chữa Cải Tạo Nhà Hóc Môn — Trọn Gói",
  excerpt:
    "Sửa chữa cải tạo nhà Hóc Môn: nhà cấp 4, nhà vườn các xã Đông Thạnh, Trung Chánh… Gia cố, mở rộng, chống thấm.",
  metaTitle: "Sửa Chữa Cải Tạo Nhà Hóc Môn | Sao Khuê",
  metaDescription:
    "Sửa chữa cải tạo nhà Hóc Môn uy tín: sửa nhà cũ, cải tạo trọn gói theo xã. Khảo sát miễn phí — 0909 075 668.",
  localNote:
    "Hóc Môn — nhà vườn rộng, nhiều công trình cần mở rộng diện tích sinh hoạt hoặc nâng cấp nhà cấp 4.",
  commonIssues: [
    "<strong>Nâng cấp nhà cấp 4</strong> lên nhà phố 2 tầng.",
    "<strong>Chống thấm mái tôn, mái ngói</strong>.",
    "<strong>Mở rộng bếp, phòng ngủ</strong> phía sau.",
  ],
});

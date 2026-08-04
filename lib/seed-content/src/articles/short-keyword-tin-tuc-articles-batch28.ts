/**
 * 100 bài tin tức SEO — batch 28 từ khóa ngắn (#2247–#2346).
 * Chuẩn: 1500+ từ, ≥6 H2, 3 ảnh (alt = từ khóa), FAQ, bảng giá, internal link.
 * Cluster: geo phường/KĐT TP.HCM và vùng phụ cận.
 */
import {
  buildCtrExcerpt,
  buildCtrMetaDescription,
  buildCtrMetaTitle,
  homeLinkParagraph,
  imageFigure,
  seoCtaBlock,
} from "../article-seo-blocks";
import {
  articlePricingTableBlock,
  buildIntentFaq,
  type ContentIntent,
} from "../article-content-blocks";
import { shortKeywordCalendarBatch28 } from "../short-keyword-calendar-batch28";
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

type Topic =
  | "repair"
  | "renovation"
  | "pricing"
  | "design"
  | "rough"
  | "floors"
  | "process"
  | "turnkey"
  | "geo"
  | "finish"
  | "interior";

type Brief = {
  slug: string;
  title: string;
  focusKeyword: string;
  topic: Topic;
  location: string;
};

function slugVariant(slug: string, count: number): number {
  let h = 0;
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % count;
}

function detectTopic(slug: string, keyword: string): Topic {
  const s = `${slug} ${keyword}`.toLowerCase();
  if (
    /can-tho|vung-tau|ba-ria|tay-ninh|binh-phuoc|trang-bom|long-khanh|thu-duc|hiep-binh|linh-xuan|tam-binh|binh-chieu/.test(
      s,
    )
  )
    return "geo";
  if (/bao-gia|gia-xay|don-gia|bang-gia|chi-phi|2026|tra-gop|vay-ngan|thanh-toan|dat-coc|phat-sinh/.test(s))
    return "pricing";
  if (/mong-|do-mong|do-cot|do-san|do-tran|da-kieng|ep-coc|khoan-coc|dia-chat|ket-cau|gia-co-cot|gia-co-dam|gia-co-san/.test(s))
    return "rough";
  if (/mai-|lam-mai|sua-mai|thay-mai|thoat-nuoc|chong-dot|cach-nhiet|tran-ton|xa-go/.test(s))
    return "finish";
  if (/sua-mai|sua-nha|chong-dot/.test(s)) return "repair";
  if (/xay-phong|xay-kho|xay-gara|xay-san|xay-gieng|xay-cau|xay-lung|xay-tang|phong-ngu|phong-khach|phong-bep|phong-wc/.test(s))
    return "floors";
  if (/hay-|nen-|mat-bao-lau|giay-to|kien-truc-su|checklist|loi-thuong|mua-nao|mua-mua|chuan-bi|sau-ban-giao|dau-hieu|hoi-thau|cach-tiet|cach-tranh|cam-ket|bao-hanh-10|nghiem-thu/.test(s))
    return "process";
  if (/cai-tao/.test(s)) return "renovation";
  return "turnkey";
}

function detectLocation(slug: string, keyword: string): string {
  const s = `${slug} ${keyword}`.toLowerCase();
  if (/can-tho|cần thơ/.test(s)) return "Cần Thơ";
  if (/vung-tau|vũng tàu/.test(s)) return "Vũng Tàu";
  if (/ba-ria|bà rịa/.test(s)) return "Bà Rịa";
  if (/tay-ninh|tây ninh/.test(s)) return "Tây Ninh";
  if (/binh-phuoc|bình phước/.test(s)) return "Bình Phước";
  if (/trang-bom|trảng bom/.test(s)) return "Trảng Bom, Đồng Nai";
  if (/long-khanh|long khánh/.test(s)) return "Long Khánh, Đồng Nai";
  if (/hiep-binh|hiệp bình/.test(s)) return "Hiệp Bình, Thủ Đức";
  if (/linh-xuan|linh xuân/.test(s)) return "Linh Xuân, Thủ Đức";
  if (/tam-binh|tam bình/.test(s)) return "Tam Bình, Thủ Đức";
  if (/binh-chieu|bình chiếu/.test(s)) return "Bình Chiểu, Thủ Đức";
  if (/thu-duc|thủ đức/.test(s)) return "Thủ Đức, TP.HCM";
  return "TP.HCM";
}

function intentOf(topic: Topic): ContentIntent {
  if (topic === "repair") return "repair";
  if (topic === "renovation" || topic === "finish") return "renovation";
  if (topic === "pricing") return "pricing";
  if (topic === "design" || topic === "interior") return "design";
  return "build";
}

function buildMetaKeywords(kw: string, topic: Topic): string {
  const extras: Record<Topic, string> = {
    repair: "sửa nhà, sửa chữa nhà, chống thấm",
    renovation: "cải tạo nhà, nâng tầng, làm mới nhà",
    pricing: "báo giá xây nhà, đơn giá m2, chi phí xây dựng",
    design: "thiết kế nhà, mẫu nhà đẹp, kiến trúc sư",
    rough: "xây phần thô, móng nhà, nhân công xây thô",
    floors: "nhà phố, nhà 2 tầng, xây nhà hẻm",
    process: "quy trình xây nhà, giấy phép xây dựng, giám sát",
    turnkey: "xây nhà trọn gói, nhà thầu xây nhà, chìa khóa trao tay",
    geo: "xây nhà tỉnh, thi công trọn gói, khảo sát miễn phí",
    finish: "hoàn thiện nhà, ốp lát, sơn nước, trần thạch cao",
    interior: "nội thất nhà phố, thiết kế phòng, tủ bếp",
  };
  return `${kw}, ${extras[topic]}, kiến trúc sao khuê, 0909 075 668`;
}

function introParagraph(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.location;
  const variants = [
    `<p><strong>${kw}</strong> là nhu cầu thực tế của nhiều gia đình tại <strong>${loc}</strong> khi muốn kiểm soát ngân sách, tiến độ và chất lượng công trình. Thị trường có nhiều nhà thầu — nhưng không phải đơn vị nào cũng trực tiếp thi công, minh bạch vật tư và bảo hành đủ dài.</p>
<p><strong>Kiến Trúc Sao Khuê</strong> (36 Đường 27, KDC Vạn Phúc, Thủ Đức) triển khai <strong>${kw}</strong> theo hướng: khảo sát miễn phí → dự toán chi tiết → thi công trực tiếp → bàn giao bảo hành kết cấu <strong>10 năm</strong>.</p>`,
    `<p>Khi tìm <strong>${kw}</strong>, chủ nhà thường quan tâm 3 việc: chi phí thật, lịch thi công và rủi ro phát sinh. Tại <strong>${loc}</strong>, mặt bằng hẹp, hẻm sâu và quy định giấy phép khiến công trình dễ đội giá nếu thiếu khảo sát kỹ.</p>
<p><strong>Sao Khuê</strong> hỗ trợ <strong>${kw}</strong> từ tư vấn đến thi công — không bán thầu, báo giá theo hạng mục, hotline <strong>0909 075 668</strong>.</p>`,
    `<p><strong>${kw}</strong> không chỉ là “làm cho xong”. Đúng quy trình giúp nhà bền, ít thấm dột và dễ bảo trì. Bài viết này tóm tắt cách chọn gói, ước lượng chi phí và checklist làm việc với nhà thầu tại <strong>${loc}</strong>.</p>
<p>Sao Khuê đã thi công nhiều nhà phố, cải tạo và xây mới — sẵn sàng khảo sát hiện trạng miễn phí trước khi bạn quyết định.</p>`,
  ];
  return variants[slugVariant(b.slug, variants.length)]!;
}

function whenNeededSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.location;
  if (b.topic === "finish") {
    return `<h2>Khi nào nên làm ${kw}?</h2>
<ul>
  <li>Phần thô đã đạt, cần hoàn thiện để bàn giao ở được.</li>
  <li>Cải tạo thẩm mỹ mà kết cấu còn tốt.</li>
  <li>Muốn đồng bộ vật tư (gạch, sơn, cửa, trần) trong một gói.</li>
  <li>Ở ${loc}: ưu tiên chống ẩm, chống nóng trước trang trí.</li>
</ul>
<p>Làm ${kw} đúng chuẩn giúp giảm bảo trì và giữ giá trị nhà lâu hơn.</p>`;
  }
  if (b.topic === "interior") {
    return `<h2>Khi nào cần ${kw}?</h2>
<ul>
  <li>Muốn tối ưu công năng từng phòng theo lối sống gia đình.</li>
  <li>Nhà mới xây xong phần thô / thô+hoàn thiện cơ bản.</li>
  <li>Cải tạo căn cũ nhưng muốn thay đổi không gian sống rõ rệt.</li>
  <li>Cần đồng bộ màu sắc – ánh sáng – lưu trữ tại ${loc}.</li>
</ul>`;
  }
  if (b.topic === "repair" || b.topic === "renovation") {
    return `<h2>Khi nào nên chọn ${kw}?</h2>
<ul>
  <li>Nhà thấm dột, nứt tường, điện nước xuống cấp.</li>
  <li>Cần đổi công năng (thêm phòng, mở bếp, WC) mà chưa muốn xây mới.</li>
  <li>Muốn nâng tầng / làm mới mặt tiền trong ngân sách kiểm soát.</li>
  <li>Ở ${loc}: ưu tiên chống thấm và gia cố trước hạng mục thẩm mỹ.</li>
</ul>
<p>Nếu khung kết cấu yếu hoặc muốn đổi quy mô lớn, kỹ sư sẽ tư vấn xây mới thay vì ${kw} để an toàn dài hạn.</p>`;
  }
  if (b.topic === "pricing") {
    return `<h2>${kw} — những yếu tố làm tăng/giảm giá</h2>
<ul>
  <li><strong>Diện tích &amp; số tầng:</strong> càng cao tầng, chi phí kết cấu và vận chuyển càng tăng.</li>
  <li><strong>Vật tư:</strong> tiêu chuẩn / khá / cao cấp chênh nhau rõ ở phần hoàn thiện.</li>
  <li><strong>Hiện trạng đất:</strong> đất yếu, hẻm nhỏ, cần gia cố móng.</li>
  <li><strong>Phạm vi gói:</strong> phần thô khác trọn gói chìa khóa trao tay.</li>
</ul>
<p>Con số trên mạng chỉ mang tính tham khảo. <strong>${kw}</strong> chính xác chỉ có sau khảo sát thực tế.</p>`;
  }
  if (b.topic === "design") {
    return `<h2>Vì sao cần ${kw} trước khi xây?</h2>
<ul>
  <li>Tối ưu công năng theo nhu cầu gia đình (số người, xe, kinh doanh).</li>
  <li>Ước lượng ngân sách sớm, tránh “vẽ đẹp — xây không nổi”.</li>
  <li>Xin giấy phép và làm việc với thầu thi công trơn tru hơn.</li>
  <li>Giảm phát sinh phá dỡ khi đã chốt mặt bằng 2D/3D.</li>
</ul>`;
  }
  return `<h2>Khi nào gia đình nên bắt đầu ${kw}?</h2>
<ul>
  <li>Đã có đất sạch pháp lý hoặc nhà cũ cần thay thế.</li>
  <li>Ngân sách dự kiến rõ (phần thô / trọn gói / hoàn thiện).</li>
  <li>Cần bàn giao đúng hạn để ở hoặc cho thuê.</li>
  <li>Muốn một đầu mối chịu trách nhiệm thiết kế + thi công tại ${loc}.</li>
</ul>`;
}

function deepTopicSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.location;
  const v = slugVariant(b.slug, 3);

  if (b.topic === "finish") {
    return `<h2>${kw} — hạng mục nên chốt trước khi thi công</h2>
<ul>
  <li>Chủng loại gạch, sơn, cửa, trần và phụ kiện đi kèm.</li>
  <li>Thứ tự thi công: chống thấm → ốp lát → trần → sơn → thiết bị.</li>
  <li>Mẫu thực tế duyệt tại công trường trước khi làm diện rộng.</li>
  <li>Kế hoạch vệ sinh bảo vệ hạng mục đã hoàn thiện.</li>
</ul>
<p>${v === 0 ? "Hoàn thiện đúng chuẩn giúp giảm bảo trì 2–3 năm đầu." : v === 1 ? "Nên giữ 5–10% dự phòng cho phát sinh vật tư theo mẫu." : "Đồng bộ màu – ánh sáng – vật liệu giúp nhà nhìn cao cấp hơn với cùng ngân sách."}</p>
<p>Hub: <a href="/dich-vu/hoan-thien-nha">hoàn thiện nhà</a> · <a href="/bao-gia">báo giá</a>.</p>`;
  }

  if (b.topic === "interior") {
    return `<h2>${kw} — nguyên tắc công năng tại ${loc}</h2>
<ul>
  <li>Ưu tiên lưu trữ âm tường, lối đi thông thoáng.</li>
  <li>Ánh sáng tự nhiên + đèn tầng lớp (ambient / task / accent).</li>
  <li>Vật liệu dễ vệ sinh, phù hợp khí hậu ẩm.</li>
  <li>Đồng bộ với kiến trúc mặt tiền và cầu thang.</li>
</ul>
<p>${v === 0 ? "Nội thất gắn với kết cấu sẵn có giúp giảm phá dỡ." : v === 1 ? "Chốt concept 3D trước khi đặt sản xuất tủ – sàn – cửa." : "Phòng nhỏ: dùng màu sáng và gương để mở không gian."}</p>
<p>Tham khảo: <a href="/thiet-ke">thiết kế</a> · <a href="/cai-tao-nha">cải tạo nhà</a>.</p>`;
  }

  if (b.topic === "pricing") {
    return `<h2>${kw} theo gói phổ biến tại ${loc}</h2>
<p>Để đọc hiểu <strong>${kw}</strong>, hãy tách rõ 3 lớp chi phí:</p>
<ol>
  <li><strong>Phần thô:</strong> móng, khung, sàn, tường, mái, điện nước âm — khoảng 3,55–3,8 triệu/m² (tham khảo).</li>
  <li><strong>Hoàn thiện:</strong> ốp lát, sơn, cửa, thiết bị — biến động mạnh theo vật tư.</li>
  <li><strong>Trọn gói:</strong> gộp thô + hoàn thiện cơ bản — khoảng 4,85–6,7 triệu/m² tùy tiêu chuẩn.</li>
</ol>
<p>${v === 0 ? "Nên yêu cầu bảng dự toán theo hạng mục, không chỉ một con số tổng." : v === 1 ? "Giữ 10–15% dự phòng cho địa chất và phát sinh giấy phép." : "So sánh báo giá theo cùng chủng loại vật tư mới công bằng."}</p>
<p>Xem thêm: <a href="/bao-gia">máy tính &amp; bảng báo giá</a> · <a href="/xay-nha">landing xây nhà</a>.</p>`;
  }

  if (b.topic === "renovation" || b.topic === "repair") {
    return `<h2>Phạm vi ${kw} Sao Khuê thường nhận</h2>
<ul>
  <li>Chống thấm mái, sân thượng, WC, tường ngoài.</li>
  <li>Sửa điện nước, thay đường ống, cải tạo bếp – WC.</li>
  <li>Đập thông không gian, làm mới mặt tiền nhà phố.</li>
  <li>Gia cố / nâng tầng khi khảo sát kết cấu đạt.</li>
</ul>
<p>${v === 0 ? "Thứ tự đúng: kết cấu &amp; chống thấm → MEP → hoàn thiện thẩm mỹ." : v === 1 ? "Nhà đang ở có thể thi công theo giai đoạn để giảm xáo trộn." : "Ảnh hiện trạng + kích thước sơ bộ giúp báo giá nhanh hơn."}</p>
<p>Hub liên quan: <a href="/cai-tao-nha">cải tạo nhà</a> · <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ TP.HCM</a>.</p>`;
  }

  if (b.topic === "design") {
    return `<h2>${kw} — nội dung hồ sơ nên có</h2>
<ul>
  <li>Mặt bằng các tầng, mặt đứng, mặt cắt.</li>
  <li>Phối cảnh 3D giúp chốt phong cách trước khi xây.</li>
  <li>Dự toán sơ bộ gắn với phương án thiết kế.</li>
  <li>Gợi ý vật liệu phù hợp khí hậu ${loc}.</li>
</ul>
<p>${v === 0 ? "Thiết kế tốt giúp giảm 10–20% phát sinh thi công so với tự ý chỉnh tại công trường." : v === 1 ? "Ưu tiên ánh sáng tự nhiên và thông gió cho nhà phố hẹp." : "Chốt công năng trước trang trí — tránh đập sửa tốn kém."}</p>
<p>Tham khảo: <a href="/thiet-ke">thiết kế kiến trúc</a> · <a href="/tin-tuc/thiet-ke-nha-dep-tphcm">thiết kế nhà đẹp TP.HCM</a>.</p>`;
  }

  if (b.topic === "rough") {
    return `<h2>${kw} gồm những hạng mục nào?</h2>
<ul>
  <li>Đào móng, đà kiềng, cột, dầm, sàn.</li>
  <li>Xây tường, tô tường cơ bản.</li>
  <li>Điện nước âm tường theo bản vẽ.</li>
  <li>Chống thấm sàn vệ sinh / mái (tùy hợp đồng).</li>
</ul>
<p>Phần thô quyết định tuổi thọ nhà. Sao Khuê giám sát thép, bê tông và cao độ từng giai đoạn — không khoán mù.</p>`;
  }

  if (b.topic === "floors") {
    return `<h2>Lưu ý kỹ thuật khi ${kw}</h2>
<ul>
  <li>Khảo sát địa chất / hiện trạng móng trước khi chốt số tầng.</li>
  <li>Nhà hẻm: kế hoạch vận chuyển vật tư, giờ thi công, đổ phế thải.</li>
  <li>Tầng cao: cầu thang, giếng trời, PCCC theo quy định.</li>
  <li>Mặt tiền: cân bằng thẩm mỹ và quy hoạch lộ giới.</li>
</ul>
<p>${v === 0 ? "Với đất hẹp, ưu tiên công năng thẳng đứng và ánh sáng từ giếng trời." : v === 1 ? "Nhà có thang máy cần chừa hố pit và tải móng phù hợp từ đầu." : "Nhà tiền chế / khung thép phù hợp tiến độ nhanh nhưng cần chống cháy – chống ồn đúng chuẩn."}</p>`;
  }

  if (b.topic === "process") {
    return `<h2>${kw} đúng chuẩn — giảm rủi ro pháp lý &amp; kỹ thuật</h2>
<ol>
  <li>Rà soát sổ đỏ, quy hoạch, chỉ giới xây dựng.</li>
  <li>Lập hồ sơ xin phép (nếu thuộc diện phải xin).</li>
  <li>Khảo sát → thiết kế → dự toán → hợp đồng.</li>
  <li>Thi công có nhật ký, nghiệm thu từng giai đoạn.</li>
  <li>Bàn giao hồ sơ hoàn công / bảo hành.</li>
</ol>
<p>Sao Khuê hỗ trợ tư vấn thủ tục và giám sát hiện trường để <strong>${kw}</strong> không bị “treo” giữa chừng.</p>`;
  }

  if (b.topic === "geo") {
    return `<h2>${kw} tại ${loc} — điểm khác biệt cần biết</h2>
<p>Mỗi khu vực có địa chất, mật độ xây và logistics khác nhau. Khi làm <strong>${kw}</strong> tại <strong>${loc}</strong>, Sao Khuê khảo sát tận nơi, lập tiến độ phù hợp đường vào công trình và mùa mưa.</p>
<ul>
  <li>Báo giá theo hiện trạng thực tế, không copy đơn giá tỉnh khác.</li>
  <li>Ưu tiên vật tư dễ bảo trì, phù hợp khí hậu địa phương.</li>
  <li>Kết nối với hub: <a href="/xay-nha">xây nhà</a> · <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a>.</li>
</ul>`;
  }

  return `<h2>${kw} trọn gói hay tách hạng mục?</h2>
<p>Hai lựa chọn phổ biến khi triển khai <strong>${kw}</strong> tại ${loc}:</p>
<ol>
  <li><strong>Trọn gói chìa khóa trao tay:</strong> một đầu mối thiết kế – thi công – bàn giao; dễ kiểm soát tổng ngân sách.</li>
  <li><strong>Phần thô + hoàn thiện riêng:</strong> linh hoạt vật liệu, cần giám sát chặt hai giai đoạn.</li>
</ol>
<p>${v === 0 ? "Gia đình bận việc nên ưu tiên trọn gói để giảm đầu mối." : v === 1 ? "Nếu đã có KTS riêng, có thể thuê Sao Khuê thi công theo hồ sơ." : "Cam kết không bán thầu giúp đồng bộ chất lượng từ móng đến hoàn thiện."}</p>
<p>Đọc thêm: <a href="/xay-nha">xây nhà trọn gói</a> · <a href="/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z">quy trình A–Z</a>.</p>`;
}

function materialsSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Vật tư &amp; tiêu chuẩn khi làm ${kw}</h2>
<p>Sao Khuê ghi rõ chủng loại trong hợp đồng — đúng cái đã báo giá:</p>
<ul>
  <li>Thép, xi măng, gạch theo tiêu chuẩn đã chốt.</li>
  <li>Chống thấm: ưu tiên hạng mục “không thấy nhưng quyết định tuổi thọ”.</li>
  <li>Điện nước: ống, dây, thiết bị đúng thông số bản vẽ.</li>
  <li>Hoàn thiện: gạch, sơn, cửa — có mẫu duyệt trước khi thi công diện rộng.</li>
</ul>
<p>Bạn có thể yêu cầu xem chứng từ vật tư tại công trường liên quan <strong>${kw}</strong>.</p>`;
}

function processSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Quy trình ${kw} tại Kiến Trúc Sao Khuê</h2>
<ol>
  <li><strong>Tiếp nhận &amp; tư vấn</strong> — nghe nhu cầu, ngân sách, thời gian mong muốn.</li>
  <li><strong>Khảo sát miễn phí</strong> — đo đạc, chụp hiện trạng, nhận diện rủi ro kỹ thuật.</li>
  <li><strong>Phương án &amp; báo giá</strong> — dự toán theo hạng mục, chốt vật tư.</li>
  <li><strong>Ký hợp đồng</strong> — tiến độ, bảo hành, điều khoản phát sinh rõ ràng.</li>
  <li><strong>Thi công &amp; giám sát</strong> — nhật ký công trình, nghiệm thu từng giai đoạn.</li>
  <li><strong>Bàn giao</strong> — vệ sinh, hướng dẫn sử dụng, kích hoạt bảo hành.</li>
</ol>
<p>Hotline xuyên suốt: <strong>0909 075 668</strong> (Zalo cùng số).</p>`;
}

function costSection(b: Brief): string {
  const kw = b.focusKeyword;
  const intent = intentOf(b.topic);
  return `<h2>Chi phí liên quan ${kw}</h2>
<p>Bảng dưới mang tính <strong>tham khảo 2026</strong> tại ${b.location}. Báo giá chính xác sau khảo sát.</p>
${articlePricingTableBlock(intent, b.location, b.slug, kw)}
<p>Muốn ước lượng nhanh: dùng <a href="/bao-gia">công cụ báo giá</a> hoặc để lại SĐT để kỹ sư gọi lại.</p>`;
}

function mistakesSection(b: Brief): string {
  const kw = b.focusKeyword;
  const items = [
    ["Chọn thầu chỉ vì giá rẻ nhất", "Dễ cắt vật tư, kéo dài tiến độ, phát sinh ngầm."],
    ["Không khảo sát đã chốt thiết kế", "Sai hiện trạng → đập sửa tốn kém."],
    ["Bỏ qua chống thấm / điện nước", "Chi phí sửa sau cao gấp nhiều lần làm đúng từ đầu."],
    ["Hợp đồng mơ hồ", "Thiếu chủng loại vật tư và mốc nghiệm thu."],
    ["Tự ý thêm hạng mục giữa chừng", "Làm lệch ngân sách và tiến độ ${kw}."],
  ];
  const start = slugVariant(b.slug, items.length);
  const picked = [0, 1, 2, 3].map((i) => items[(start + i) % items.length]!);
  return `<h2>Sai lầm thường gặp khi ${kw}</h2>
<ul>
${picked.map(([t, d]) => `  <li><strong>${t}:</strong> ${d}</li>`).join("\n")}
</ul>`;
}

function checklistSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Checklist trước khi chốt ${kw}</h2>
<ul>
  <li>☐ Đã khảo sát hiện trạng / đất?</li>
  <li>☐ Có dự toán theo hạng mục (không chỉ tổng giá)?</li>
  <li>☐ Hợp đồng ghi rõ vật tư, tiến độ, bảo hành?</li>
  <li>☐ Hiểu phạm vi: thô / trọn gói / cải tạo từng phần?</li>
  <li>☐ Có phương án chống thấm và thoát nước?</li>
  <li>☐ Đã xem công trình thực tế hoặc ảnh nghiệm thu?</li>
</ul>
<p>Nếu còn mục chưa tick — nên làm rõ trước khi đặt cọc <strong>${kw}</strong>.</p>`;
}

function timelineSection(b: Brief): string {
  const kw = b.focusKeyword;
  if (b.topic === "repair" || b.topic === "renovation") {
    return `<h2>Thời gian ${kw} mất bao lâu?</h2>
<p>Cải tạo nhẹ: vài tuần. Cải tạo sâu / nâng tầng: 1–4 tháng tùy diện tích. Làm mới mặt tiền hoặc chống thấm cục bộ có thể nhanh hơn nếu chuẩn bị mặt bằng tốt.</p>`;
  }
  if (b.topic === "design") {
    return `<h2>Thời gian hoàn thiện ${kw}</h2>
<p>Phương án sơ bộ: 3–7 ngày. Hồ sơ chi tiết 2D/3D: 2–4 tuần tùy quy mô. Chốt càng sớm, thi công càng ít phát sinh.</p>`;
  }
  return `<h2>Tiến độ ${kw} tham khảo</h2>
<ul>
  <li>Nhà phố 1 trệt 1–2 lầu: thường 4–7 tháng (tùy hoàn thiện).</li>
  <li>Phần thô: ngắn hơn trọn gói; phụ thuộc mùa mưa và logistics.</li>
  <li>Sao Khuê ghi mốc nghiệm thu trong hợp đồng để bám tiến độ.</li>
</ul>`;
}

function whyChooseSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Vì sao chọn Sao Khuê cho ${kw}?</h2>
<ul>
  <li><strong>Không bán thầu</strong> — trực tiếp thi công và giám sát.</li>
  <li><strong>Báo giá minh bạch</strong> — dự toán hạng mục, cam kết không phát sinh ảo.</li>
  <li><strong>Bảo hành kết cấu 10 năm</strong> — hoàn thiện theo hợp đồng.</li>
  <li><strong>Khảo sát miễn phí</strong> tại ${b.location} và khu vực lân cận.</li>
  <li><strong>Một quy trình</strong> từ tư vấn → thiết kế → thi công → bàn giao.</li>
</ul>`;
}

function clusterLinksSection(b: Brief): string {
  const kw = b.focusKeyword;
  const related = shortKeywordCalendarBatch28
    .filter((item) => item.slug !== b.slug)
    .filter((item) => detectTopic(item.slug!, item.keyword) === b.topic)
    .slice(slugVariant(b.slug, 5), slugVariant(b.slug, 5) + 4);

  const fallback = shortKeywordCalendarBatch28
    .filter((item) => item.slug !== b.slug)
    .slice(0, 4);

  const list = (related.length >= 3 ? related : fallback)
    .slice(0, 4)
    .map((r) => `<li><a href="/tin-tuc/${r.slug}">${r.keyword}</a></li>`)
    .join("\n  ");

  return `<h2>Bài viết liên quan tới ${kw}</h2>
<p>Đọc thêm các chủ đề gần để so sánh gói dịch vụ và chi phí:</p>
<ul>
  ${list}
</ul>
<p>Trang trụ cột: <a href="/xay-nha">Xây nhà</a> · <a href="/cai-tao-nha">Cải tạo nhà</a> · <a href="/bao-gia">Báo giá</a> · <a href="/lien-he">Liên hệ</a>.</p>`;
}

function faqSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.location;
  const intent = intentOf(b.topic);
  return `${buildIntentFaq(intent, kw, loc)}
<details><summary>${kw} có khảo sát miễn phí không?</summary><p>Có. Sao Khuê khảo sát tận nơi tại ${loc}, tư vấn sơ bộ trước khi lập dự toán chi tiết.</p></details>
<details><summary>Bảo hành ${kw} bao lâu?</summary><p>Bảo hành kết cấu tối thiểu 10 năm với hạng mục xây mới; cải tạo/sửa chữa bảo hành theo hạng mục ghi trong hợp đồng (thường 12–36 tháng hoàn thiện, chống thấm 3–5 năm tùy gói).</p></details>`;
}

function localTipsSection(b: Brief): string {
  const kw = b.focusKeyword;
  const loc = b.location;
  const tips = [
    `<p>Tại <strong>${loc}</strong>, mùa mưa kéo dài ảnh hưởng tiến độ bê tông và chống thấm. Lịch <strong>${kw}</strong> nên chừa buffer 1–2 tuần cho thời tiết.</p>
<p>Nhà trong hẻm cần kế hoạch tập kết vật tư buổi sáng sớm hoặc khung giờ cho phép — tránh phát sinh thuê xe cải tiến đột xuất.</p>
<p>Nên chụp ảnh hiện trạng điện nước, thấm dột, nứt tường trước khi thi công để đối chiếu nghiệm thu rõ ràng.</p>`,
    `<p>Chủ nhà nên giữ một người đầu mối quyết định thay đổi phát sinh khi làm <strong>${kw}</strong>. Nhiều ý kiến giữa chừng dễ làm lệch bản vẽ và ngân sách.</p>
<p>Với ${loc}, ưu tiên hệ thống thoát nước sân thượng / sân trước đạt chuẩn trước khi hoàn thiện thẩm mỹ mặt tiền.</p>
<p>Yêu cầu nhật ký đổ bê tông và biên bản nghiệm thu thép — đây là bằng chứng bảo hành kết cấu sau này.</p>`,
    `<p>Khi triển khai <strong>${kw}</strong>, hãy hỏi rõ đơn vị có tự thi công hay khoán lại. Sao Khuê cam kết không bán thầu để kiểm soát chất lượng đồng nhất.</p>
<p>Ngân sách nên tách: bắt buộc (an toàn, chống thấm, kết cấu) và tùy chọn (trang trí). Cắt sai thứ tự sẽ tốn gấp đôi khi sửa lại.</p>
<p>Địa chỉ liên hệ nhanh: 36 Đường 27, KDC Vạn Phúc, Thủ Đức — hotline 0909 075 668.</p>`,
  ];
  return `<h2>Kinh nghiệm thực tế khi làm ${kw} tại ${loc}</h2>
${tips[slugVariant(b.slug, tips.length)]!}`;
}

function compareOptionsSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>So sánh nhanh các hướng triển khai ${kw}</h2>
<table>
  <thead><tr><th>Hướng đi</th><th>Ưu điểm</th><th>Nhược điểm</th></tr></thead>
  <tbody>
    <tr><td>Thuê thầu khoán giá thấp</td><td>Rẻ ban đầu</td><td>Khó kiểm soát vật tư, dễ phát sinh</td></tr>
    <tr><td>Tự mua VT + thuê nhân công</td><td>Chủ động vật liệu</td><td>Tốn thời gian giám sát, rủi ro tiến độ</td></tr>
    <tr><td>Trọn gói với đơn vị trực tiếp thi công</td><td>Một đầu mối, bảo hành rõ</td><td>Cần chọn đúng đối tác uy tín</td></tr>
  </tbody>
</table>
<p>Với đa số gia đình bận việc, <strong>${kw}</strong> theo mô hình trọn gói + giám sát minh bạch thường an toàn hơn về tổng chi phí vòng đời nhà.</p>`;
}

function warrantySection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Bảo hành &amp; bàn giao sau ${kw}</h2>
<ul>
  <li><strong>Kết cấu:</strong> bảo hành tối thiểu 10 năm với hạng mục xây mới do Sao Khuê thi công.</li>
  <li><strong>Hoàn thiện:</strong> thường 12–36 tháng tùy vật tư và hạng mục.</li>
  <li><strong>Chống thấm:</strong> theo gói đã ký (thường 3–5 năm cho hạng mục xử lý chuyên sâu).</li>
  <li><strong>Hỗ trợ sau bàn giao:</strong> hướng dẫn sử dụng, xử lý bảo trì định kỳ nếu khách yêu cầu.</li>
</ul>
<p>Mọi cam kết bảo hành của <strong>${kw}</strong> được ghi trong hợp đồng — không chỉ口头.</p>`;
}

function prepSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Chuẩn bị hồ sơ &amp; mặt bằng cho ${kw}</h2>
<p>Trước ngày khởi công <strong>${kw}</strong>, hãy chuẩn bị: giấy tờ nhà đất (bản sao), ảnh hiện trạng, nhu cầu công năng từng tầng/phòng, và khoảng ngân sách dự kiến. Nếu đang ở trong nhà khi sửa/cải tạo, trao đổi trước khu vực ưu tiên để hạn chế xáo trộn sinh hoạt.</p>
<p>Sao Khuê sẽ đối chiếu hồ sơ với khảo sát thực tế, chỉ ra hạng mục bắt buộc (an toàn, chống thấm, kết cấu) và hạng mục có thể làm theo giai đoạn nếu ngân sách cần dãn.</p>
<p>Việc chuẩn bị tốt giúp báo giá <strong>${kw}</strong> sát thực tế hơn, giảm phát sinh và rút ngắn thời gian chốt hợp đồng.</p>`;
}

function whatYouGetSection(b: Brief): string {
  const kw = b.focusKeyword;
  return `<h2>Bạn nhận được gì khi đặt ${kw} tại Sao Khuê?</h2>
<ol>
  <li>Buổi khảo sát &amp; tư vấn hiện trạng miễn phí.</li>
  <li>Phương án kỹ thuật + dự toán theo hạng mục.</li>
  <li>Hợp đồng rõ vật tư, tiến độ, điều khoản phát sinh.</li>
  <li>Thi công có giám sát, nghiệm thu từng giai đoạn.</li>
  <li>Bàn giao – kích hoạt bảo hành – hỗ trợ sau bán.</li>
</ol>
<p>Mục tiêu không chỉ “xong việc”, mà giúp ngôi nhà vận hành ổn định nhiều năm sau khi hoàn tất <strong>${kw}</strong>.</p>`;
}

function buildArticle(b: Brief): SeoArticleShape {
  const kw = b.focusKeyword;
  const h2Lead = kw.charAt(0).toUpperCase() + kw.slice(1);
  const batchTopic =
    b.topic === "geo" || b.topic === "finish"
      ? "turnkey"
      : b.topic === "interior"
        ? "design"
        : b.topic;

  return {
    title: b.title,
    excerpt: buildCtrExcerpt(kw, { slug: b.slug, batchTopic, location: b.location }),
    metaTitle: buildCtrMetaTitle(kw, { slug: b.slug, batchTopic }),
    metaDescription: buildCtrMetaDescription(kw, {
      slug: b.slug,
      batchTopic,
      location: b.location,
    }),
    metaKeywords: buildMetaKeywords(kw, b.topic),
    imageAlt: kw,
    imageCaption: `${kw} — Kiến Trúc Sao Khuê thi công`,
    content: `
<h2>${h2Lead} — giải pháp uy tín tại ${b.location}</h2>
${introParagraph(b)}

${imageFigure(slugImage(b.slug, 0), kw, 1)}

${whenNeededSection(b)}

${deepTopicSection(b)}

${compareOptionsSection(b)}

${materialsSection(b)}

${imageFigure(slugImage(b.slug, 1), kw, 2)}

${processSection(b)}

${costSection(b)}

${localTipsSection(b)}

${prepSection(b)}

${mistakesSection(b)}

${checklistSection(b)}

${timelineSection(b)}

${warrantySection(b)}

${whatYouGetSection(b)}

${whyChooseSection(b)}

${clusterLinksSection(b)}

${faqSection(b)}

${homeLinkParagraph()}

${seoCtaBlock(kw)}

${imageFigure(slugImage(b.slug, 2), kw, 3)}
`.trim(),
  };
}

const briefs: Brief[] = shortKeywordCalendarBatch28.map((item) => {
  const slug = item.slug!;
  return {
    slug,
    title: item.title,
    focusKeyword: item.keyword,
    topic: detectTopic(slug, item.keyword),
    location: detectLocation(slug, item.keyword),
  };
});

export const shortKeywordBatch28ArticlesBySlug: Record<string, SeoArticleShape> = Object.fromEntries(
  briefs.map((b) => [b.slug, buildArticle(b)]),
);

export const shortKeywordBatch28Slugs = briefs.map((b) => b.slug);

export function getShortKeywordBatch28Article(slug: string): SeoArticleShape | undefined {
  return shortKeywordBatch28ArticlesBySlug[slug];
}

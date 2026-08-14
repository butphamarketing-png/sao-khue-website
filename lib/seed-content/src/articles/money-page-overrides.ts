/**
 * Hand-crafted SEO content overrides for top money pages.
 * Each entry is intentionally unique (H2s, local tips, FAQ, pricing notes).
 */
import {
  MONEY_PAGE_OVERRIDE_SLUGS_BATCH2,
  moneyPageOverridesBatch2,
} from "./money-page-overrides-batch2";
import {
  MONEY_PAGE_OVERRIDE_SLUGS_BATCH3,
  moneyPageOverridesBatch3,
} from "./money-page-overrides-batch3";

export type MoneyPageOverride = {
  title?: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  content: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const MONEY_PAGE_OVERRIDE_SLUGS: string[] = [
  "xay-nha-tphcm",
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm",
  "cai-tao-nha-cu-tphcm",
  "cai-tao-nha-tron-goi-tphcm",
  "cai-tao-nha-pho-tphcm",
  "sua-chua-nha-tron-goi-tphcm",
  "nang-tang-nha-pho-tphcm",
  "chong-tham-nha-tphcm",
  "thiet-ke-nha-dep-tphcm",
  "chi-phi-xay-nha-tphcm",
  "don-gia-xay-nha-tphcm",
  "bao-gia-sua-chua-nha-tphcm",
  "bao-gia-sua-nha-tron-goi-tphcm",
  "bao-gia-cai-tao-nha-tphcm",
  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm",
  "xay-nha-gia-re-tphcm",
  "xay-nha-2-tang-tphcm",
  "xay-nha-3-tang-tphcm",
  "xay-nha-trong-hem-tphcm",
  "xin-giay-phep-xay-dung-tphcm",
  "hoan-thien-nha-tphcm",
  "gia-co-nha-cu-tphcm",
  "cai-tao-mat-tien-nha-tphcm",
  "xay-nha-binh-thanh",
  "xay-nha-thu-duc",
  "xay-nha-quan-7",
  "xay-nha-go-vap",
  "thiet-ke-nha-pho-tphcm",
  "cam-nang-xay-nha-2026",
  "sua-nha-cu-tphcm",
  "lam-moi-nha-cu-tphcm",
  "cai-tao-nha-dang-o-tphcm",
  "cong-ty-sua-chua-nha-tphcm",
  "chong-tham-san-thuong-tphcm",
  "nang-tang-nha-cu-tphcm",
  "cai-tao-nha-cap-4-tphcm",
  "cai-tao-nha-binh-thanh",
  "cai-tao-nha-thu-duc",
  "cai-tao-nha-go-vap",
  "cai-tao-nha-tan-binh",
  "cai-tao-nha-tan-phu",
  "cai-tao-nha-quan-7",
  "xay-nha-chia-khoa-trao-tay-tphcm",
  "bao-gia-xay-nha-2026",
  "thi-cong-phan-tho-tphcm",
  "xay-nha-pho-1-tret-2-lau-tphcm",
  "xay-nha-cap-4-mai-thai-tphcm",
  "cai-tao-nha-quan-1",
  "cai-tao-nha-quan-3",
  "cai-tao-nha-quan-8",
  "cai-tao-nha-quan-10",
  "cai-tao-nha-quan-12",
  "cai-tao-nha-phu-nhuan",
  "cai-tao-nha-binh-tan",
  "cai-tao-nha-nha-be",
  "cai-tao-nha-binh-chanh",
  "cai-tao-nha-hoc-mon",
  "cai-tao-bep-wc-tphcm",
  "son-nha-va-noi-that-tphcm",
  "cai-tao-nha-2-tang-tphcm",
  "cai-tao-nha-cho-thue-tphcm",
  "xay-nha-co-ham-tphcm",
  "xay-nha-pho-4x16-tphcm",
  "xay-nha-cho-thue-tphcm",
  "chi-phi-xay-nha-3-tang-tphcm",
  "xay-nha-tra-gop-tphcm",
  "cai-tao-nha-quan-4",
  "cai-tao-nha-quan-5",
  "cai-tao-nha-quan-6",
  "cai-tao-nha-quan-9",
  "cai-tao-nha-quan-11",
  "cai-tao-nha-cu-chi",
  "cai-tao-gieng-troi-nha-pho-tphcm",
  "cai-tao-nha-ket-hop-kinh-doanh-tphcm",
  "cai-tao-gac-lung-nha-pho-tphcm",
  "chong-tham-tuong-wc-tphcm",
  "xin-giay-phep-cai-tao-nha-tphcm",
  "ep-coc-nha-pho-tphcm",
  "xay-nha-lech-tang-tphcm",
  "xay-nha-4x12-tphcm",
  "don-gia-hoan-thien-nha-2026",
  "xay-nha-tiet-kiem-tphcm",
  ...MONEY_PAGE_OVERRIDE_SLUGS_BATCH2,
  ...MONEY_PAGE_OVERRIDE_SLUGS_BATCH3,
];

export const moneyPageOverridesBySlug: Record<string, MoneyPageOverride> = {
  "xay-nha-tphcm": {
    title: "Xây Nhà TP.HCM — Hướng Dẫn Chọn Gói & Nhà Thầu 2026",
    excerpt:
      "Xây nhà TP.HCM cần tính địa chất, hẻm hẹp và giấy phép. Sao Khuê tư vấn khảo sát miễn phí, bảo hành kết cấu 10 năm — 0909 075 668.",
    metaTitle: "Xây Nhà TP.HCM 2026 — Chọn Gói Đúng | Sao Khuê",
    metaDescription:
      "Xây nhà TP.HCM: quy trình từ khảo sát đến bàn giao, lưu ý hẻm & giấy phép, đơn giá tham khảo. Hotline 0909 075 668.",
    metaKeywords:
      "xây nhà tphcm, xây nhà tp hồ chí minh, nhà thầu xây nhà tphcm, xây nhà trọn gói tphcm, sao khuê",
    imageAlt: "Xây nhà TP.HCM — thi công nhà phố bởi Kiến Trúc Sao Khuê",
    imageCaption: "Công trình xây nhà TP.HCM do Kiến Trúc Sao Khuê thi công",
    content: `<h2>Xây nhà TP.HCM khác gì so với tỉnh lân cận?</h2>
<p><strong>Xây nhà TP.HCM</strong> không chỉ là đổ bê tông và xây tường. Mặt bằng thường hẹp, đường hẻm hạn chế xe tải, địa chất nhiều khu vực yếu (đặc biệt gần kênh rạch), và thủ tục giấy phép xây dựng chặt theo quy hoạch từng quận. <strong>Kiến Trúc Sao Khuê</strong> (245/8 Bình Lợi, Q. Bình Thạnh) đã thi công nhiều nhà phố, nhà trong hẻm và công trình cải tạo tại nội thành — bảo hành kết cấu <strong>10 năm</strong>.</p>
<p>Bài viết giúp bạn nắm quy trình thực tế, các gói phổ biến và cách tránh phát sinh khi chọn nhà thầu. Xem thêm dịch vụ <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói TP.HCM</a> hoặc ước lượng nhanh tại <a href="/bao-gia">bảng báo giá</a>.</p>

<h2>Ba lựa chọn phổ biến khi xây nhà tại TP.HCM</h2>
<ol>
  <li><strong>Trọn gói chìa khóa trao tay:</strong> một đầu mối từ thiết kế đến hoàn thiện cơ bản — phù hợp gia đình bận, muốn kiểm soát tổng ngân sách.</li>
  <li><strong>Phần thô + hoàn thiện riêng:</strong> linh hoạt chọn vật liệu sau, nhưng cần giám sát chặt hai giai đoạn.</li>
  <li><strong>Tự mua vật tư, thuê nhân công:</strong> dễ “vỡ” tiến độ nếu thiếu kinh nghiệm giám sát tại công trường đông đúc nội thành.</li>
</ol>
<p>Với nhà phố 4×16–5×20m thường gặp ở Bình Thạnh, Gò Vấp, Tân Bình, đa số chủ nhà chọn trọn gói hoặc thô + hoàn thiện để giảm rủi ro.</p>

<h2>Checklist trước khi ký hợp đồng xây nhà</h2>
<ul>
  <li>Sổ đỏ/hợp đồng đất rõ ràng; kiểm tra lộ giới, quy hoạch, mật độ xây dựng.</li>
  <li>Khảo sát hiện trạng: chiều ngang hẻm, điểm đổ vật liệu, ảnh hưởng hàng xóm.</li>
  <li>Bản vẽ kết cấu phù hợp địa chất — không “copy” bản vẽ nhà khác.</li>
  <li>Hợp đồng ghi chủng loại vật tư, tiến độ thanh toán, điều khoản phát sinh.</li>
  <li>Cam kết bảo hành kết cấu (Sao Khuê: 10 năm) và hoàn thiện theo hạng mục.</li>
</ul>

<h2>Bảng chi phí xây nhà TP.HCM tham khảo 2026</h2>
<p>Đơn giá mang tính tham khảo theo m² sàn xây dựng quy đổi; báo giá chính thức sau khảo sát:</p>
<table>
  <thead>
    <tr><th>Hạng mục</th><th>Đơn giá (đ/m²)</th><th>Ghi chú thực tế TP.HCM</th></tr>
  </thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu</td><td>Móng sâu / cọc tăng thêm theo địa chất</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Phù hợp nhà phố ở thường</td></tr>
    <tr><td>Trọn gói khá – cao cấp</td><td>5,5 – 6,7 triệu+</td><td>Vật tư &amp; chi tiết kiến trúc nâng cấp</td></tr>
    <tr><td>Phụ phí hẻm hẹp</td><td>Theo thực tế</td><td>Vận chuyển thủ công, giờ thi công hạn chế</td></tr>
  </tbody>
</table>
<p>Nhà trong hẻm dưới 3m thường phát sinh chi phí vận chuyển và thời gian thi công dài hơn 10–20% so với mặt tiền đường lớn.</p>

<h2>Lưu ý địa phương: mưa dầm &amp; chống thấm</h2>
<p>Mùa mưa TP.HCM kéo dài ảnh hưởng đổ bê tông và hoàn thiện ngoài trời. Nên ưu tiên chống thấm sân thượng, WC, tường tiếp giáp hàng xóm ngay từ giai đoạn thô — tránh sửa lại sau khi đã ốp lát. Sao Khuê luôn ghi rõ hạng mục chống thấm trong dự toán để chủ nhà không bị “sót” khi so sánh giá.</p>

<h2>Quy trình làm việc tại Sao Khuê</h2>
<ol>
  <li>Tư vấn nhu cầu &amp; ngân sách (hotline <strong>0909 075 668</strong>).</li>
  <li>Khảo sát mặt bằng tại công trình.</li>
  <li>Thiết kế sơ bộ + dự toán chi tiết.</li>
  <li>Ký hợp đồng, xin phép (nếu trong phạm vi hỗ trợ).</li>
  <li>Thi công – nghiệm thu từng giai đoạn – bàn giao &amp; bảo hành.</li>
</ol>

<h2>Câu hỏi thường gặp về xây nhà TP.HCM</h2>
<details>
  <summary>Xây nhà TP.HCM mất bao lâu với nhà phố 3–4 tầng?</summary>
  <p>Thông thường 5–8 tháng tùy diện tích, điều kiện hẻm và thời tiết. Nhà trong hẻm rất hẹp có thể kéo dài hơn do vận chuyển vật liệu chậm. Sao Khuê lập tiến độ theo tuần và cập nhật chủ nhà định kỳ.</p>
</details>
<details>
  <summary>Có cần khảo sát địa chất không?</summary>
  <p>Với nhà từ 3 tầng trở lên hoặc nền đất yếu (gần kênh, khu san lấp), nên khoan địa chất để chọn phương án móng đúng — tiết kiệm hơn việc “đoán” rồi sửa móng giữa chừng.</p>
</details>
<details>
  <summary>Sao Khuê nhận thi công những quận nào?</summary>
  <p>Ưu tiên TP.HCM (Bình Thạnh, Thủ Đức, Gò Vấp, Q.7, Tân Bình…) và các tỉnh giáp ranh theo năng lực đội thi công. Liên hệ 0909 075 668 hoặc văn phòng 245/8 Bình Lợi để xếp lịch khảo sát.</p>
</details>

<h2>Bắt đầu khảo sát miễn phí</h2>
<p>Gọi <strong>0909 075 668</strong> hoặc gửi thông tin mặt bằng qua <a href="/lien-he">trang liên hệ</a>. Đội kỹ thuật Sao Khuê sẽ đề xuất gói phù hợp trước khi bạn chốt ngân sách.</p>`,
  },

  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm": {
    title: "Báo Giá Xây Nhà Trọn Gói Mới Nhất TP.HCM 2026",
    excerpt:
      "Báo giá xây nhà trọn gói TP.HCM 2026: 4,85–6,7 triệu/m². Minh bạch hạng mục, không ẩn phụ phí — khảo sát miễn phí 0909 075 668.",
    metaTitle: "Báo Giá Xây Nhà Trọn Gói TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Báo giá xây nhà trọn gói mới nhất TP.HCM: bảng giá theo gói, cách tính m² sàn, khoản ngoài đơn giá. Gọi 0909 075 668.",
    metaKeywords:
      "báo giá xây nhà trọn gói, báo giá xây nhà tphcm, đơn giá xây nhà 2026, xây nhà trọn gói giá bao nhiêu",
    imageAlt: "Bảng báo giá xây nhà trọn gói mới nhất tại TP.HCM",
    content: `<h2>Cách đọc báo giá xây nhà trọn gói cho đúng</h2>
<p><strong>Báo giá xây nhà trọn gói mới nhất tại TP.HCM</strong> chỉ hữu ích khi bạn hiểu phạm vi: phần thô, hoàn thiện, thiết bị nào được gồm, và diện tích tính theo m² sàn quy đổi chứ không phải diện tích đất. <strong>Kiến Trúc Sao Khuê</strong> công bố đơn giá tham khảo 2026 kèm điều kiện áp dụng — tránh so sánh “quả táo với quả cam” giữa các nhà thầu.</p>
<p>Ước lượng nhanh tại <a href="/bao-gia">máy tính báo giá</a>, rồi đặt lịch khảo sát để nhận dự toán chính thức. Dịch vụ chi tiết: <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a>.</p>

<h2>Bảng báo giá theo gói (cập nhật 2026)</h2>
<table>
  <thead>
    <tr><th>Gói</th><th>Đơn giá/m² sàn</th><th>Bao gồm chính</th><th>Không gồm (thường)</th></tr>
  </thead>
  <tbody>
    <tr><td>Tiêu chuẩn</td><td><strong>4,85 – 5,5 triệu</strong></td><td>Thô + hoàn thiện cơ bản, TBVS phổ thông</td><td>Nội thất gỗ, điều hòa</td></tr>
    <tr><td>Khá</td><td><strong>5,5 – 6,0 triệu</strong></td><td>Vật tư tầm trung–khá, hoàn thiện đẹp hơn</td><td>Đá tự nhiên lớn, thiết bị nhập cao cấp</td></tr>
    <tr><td>Cao cấp</td><td><strong>6,0 – 6,7 triệu+</strong></td><td>Chi tiết kiến trúc &amp; thiết bị tốt</td><td>Smart home full, sân vườn lớn</td></tr>
    <tr><td>Chỉ phần thô</td><td><strong>3,55 – 3,8 triệu</strong></td><td>Móng–khung–tường–mái–điện nước âm</td><td>Sơn, ốp, cửa, trần</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý giá:</strong> Đơn giá trên áp dụng nhà ở riêng lẻ nội thành khi mặt bằng tiếp cận xe tải hợp lý. Hẻm dưới 2,5m hoặc cần cọc khoan sâu sẽ điều chỉnh trong phụ lục dự toán.</p>

<h2>Ví dụ tính tiền thực tế (không phải cam kết giá khóa)</h2>
<ul>
  <li>Nhà phố 4 tầng, sàn quy đổi 300 m² × 5,2 triệu ≈ <strong>1,56 tỷ</strong> (gói tiêu chuẩn–khá).</li>
  <li>Nhà 3 tầng mặt tiền 4m, sàn 220 m² × 5,0 triệu ≈ <strong>1,1 tỷ</strong>.</li>
  <li>Chỉ thô 280 m² × 3,7 triệu ≈ <strong>1,036 tỷ</strong>, hoàn thiện ký sau.</li>
</ul>

<h2>Những dòng chữ nhỏ làm lệch ngân sách</h2>
<p>Khi nhận <strong>báo giá xây nhà trọn gói</strong>, hãy hỏi rõ:</p>
<ul>
  <li>Diện tích quy đổi mái, ban công, sân có mái che tính thế nào?</li>
  <li>Chống thấm sân thượng, bể nước, WC có trong gói không?</li>
  <li>Cửa nhôm kính: độ dày profile, loại kính?</li>
  <li>Phí vận chuyển vào hẻm, giàn giáo, điện nước tạm ai chịu?</li>
</ul>
<p>Sao Khuê liệt kê từng nhóm trong dự toán; phát sinh chỉ khi chủ nhà đổi thiết kế hoặc chủng loại vật tư — lập phụ lục, không “bù miệng”.</p>

<h2>So sánh nhanh: trọn gói vs tách giai đoạn</h2>
<p>Trọn gói giúp một bảo hành kết cấu <strong>10 năm</strong> và một đầu mối nghiệm thu. Tách thô/hoàn thiện có thể tối ưu vật liệu nhưng dễ lệch tiến độ nếu hai nhà thầu không đồng bộ cao độ, vị trí ổ cắm, độ dốc thoát nước. Tại TP.HCM, gia đình lần đầu xây thường chọn trọn gói để giảm rủi ro.</p>

<h2>Quy trình nhận báo giá chính thức tại Sao Khuê</h2>
<p>Sau khi xem khung <strong>báo giá xây nhà trọn gói mới nhất tại TP.HCM</strong> trên web, bước tiếp theo là gửi khổ đất, số tầng dự kiến và ảnh hẻm. Kỹ sư khảo sát, chốt giả định quy đổi m², rồi phát hành dự toán theo hạng mục. Bạn có thể đối chiếu từng dòng với ngân sách trước khi ký.</p>
<ul>
  <li>Tiếp nhận thông tin &amp; tư vấn sơ bộ qua 0909 075 668.</li>
  <li>Khảo sát hiện trường (miễn phí theo chương trình).</li>
  <li>Dự toán chi tiết + giải thích điều kiện áp dụng.</li>
  <li>Thương thảo vật tư &amp; tiến độ thanh toán.</li>
  <li>Ký hợp đồng — bảo hành kết cấu 10 năm.</li>
</ul>

<h2>FAQ báo giá xây nhà trọn gói</h2>
<details>
  <summary>Báo giá trên web có phải giá khóa không?</summary>
  <p>Không. Đây là khung tham khảo 2026. Giá khóa sau khảo sát địa chất, bản vẽ và danh mục vật tư đã chốt trong hợp đồng.</p>
</details>
<details>
  <summary>Có được trừ tiền nếu bỏ bớt hạng mục?</summary>
  <p>Có — nếu bạn tự cung cấp cửa hoặc thiết bị vệ sinh, Sao Khuê điều chỉnh dự toán tương ứng và ghi rõ trong hợp đồng để tránh tranh chấp khi bàn giao.</p>
</details>
<details>
  <summary>Thanh toán thường chia mấy đợt?</summary>
  <p>Thường theo móc: ký hợp đồng – móng – sàn các tầng – hoàn thiện – bàn giao. Không yêu cầu 100% trước khởi công. Chi tiết thỏa thuận theo quy mô công trình.</p>
</details>

<h2>Nhận báo giá chính thức</h2>
<p>Hotline <strong>0909 075 668</strong> · Văn phòng 245/8 Bình Lợi, Bình Thạnh. Mang theo sổ đỏ/scan mặt bằng để kỹ sư lập dự toán nhanh hơn.</p>`,
  },

  "cai-tao-nha-cu-tphcm": {
    title: "Cải Tạo Nhà Cũ TP.HCM — Khi Nào Nên Sửa, Khi Nào Xây Lại",
    excerpt:
      "Cải tạo nhà cũ TP.HCM: đánh giá kết cấu, chống thấm, bố trí lại công năng. Sao Khuê khảo sát miễn phí — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Cũ TP.HCM — Đánh Giá Trước Khi Sửa",
    metaDescription:
      "Cải tạo nhà cũ TP.HCM: tiêu chí giữ khung hay phá dựng, chi phí tham khảo, chống thấm mùa mưa. Gọi 0909 075 668.",
    metaKeywords:
      "cải tạo nhà cũ tphcm, sửa nhà cũ, nâng cấp nhà phố, cải tạo nhà trọn gói tphcm",
    imageAlt: "Cải tạo nhà cũ tại TP.HCM — trước và sau khi thi công",
    content: `<h2>Cải tạo nhà cũ TP.HCM: giữ khung hay xây mới?</h2>
<p><strong>Cải tạo nhà cũ TP.HCM</strong> phù hợp khi kết cấu còn khỏe, chỉ xuống cấp hoàn thiện, thấm dột hoặc công năng lạc hậu. Nếu cột dầm nứt nguy hiểm, nền lún lệch hoặc muốn thêm tầng vượt khả năng chịu lực, xây mới an toàn hơn về lâu dài. <strong>Kiến Trúc Sao Khuê</strong> khảo sát miễn phí trước khi khuyên phương án — không “bán” phá dỡ nếu sửa là đủ.</p>
<p>Tham khảo dịch vụ liên quan: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> và <a href="/bao-gia">ước lượng chi phí</a>.</p>

<h2>Dấu hiệu nhà cũ cần cải tạo sớm</h2>
<ul>
  <li>Thấm tường chung cư/nhà phố tiếp giáp, sàn WC ngấm xuống tầng dưới.</li>
  <li>Điện cũ nhôm hoặc ổ cắm thiếu, không đủ tải điều hòa.</li>
  <li>Bố trí phòng chật, thiếu ánh sáng — cần mở giếng trời / lấy sáng hông.</li>
  <li>Mặt tiền cũ kỹ, ảnh hưởng giá trị bán/cho thuê.</li>
</ul>

<h2>Thứ tự hạng mục cải tạo hợp lý</h2>
<ol>
  <li>Đánh giá kết cấu &amp; chống thấm (ưu tiên trước thẩm mỹ).</li>
  <li>Hệ điện nước mới theo tải sử dụng thực tế.</li>
  <li>Đập thông / ngăn lại không gian theo nhu cầu gia đình.</li>
  <li>Hoàn thiện: ốp lát, sơn, trần, cửa.</li>
  <li>Mặt tiền và hàng rào (nếu có) sau khi “ruột” ổn định.</li>
</ol>
<p>Làm ngược (sơn đẹp trước, xử lý thấm sau) là lỗi phổ biến khiến chi phí đội lần hai.</p>

<h2>Bảng chi phí cải tạo nhà cũ tham khảo</h2>
<table>
  <thead>
    <tr><th>Phạm vi cải tạo</th><th>Mức chi (tham khảo)</th><th>Thời gian ước tính</th></tr>
  </thead>
  <tbody>
    <tr><td>Sơn lại + sửa điện nước nhẹ</td><td>80 – 200 triệu</td><td>2–4 tuần</td></tr>
    <tr><td>Cải tạo WC + chống thấm + lát lại</td><td>120 – 350 triệu</td><td>3–6 tuần</td></tr>
    <tr><td>Cải tạo toàn bộ nhà phố 1–2 tầng</td><td>0,6 – 1,5 tỷ+</td><td>2–4 tháng</td></tr>
    <tr><td>Cải tạo có gia cố / thay đổi kết cấu</td><td>Theo khảo sát</td><td>3–6 tháng</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú giá:</strong> Nhà ống sâu, hẻm nhỏ ở Quận 3, 10, Bình Thạnh thường tăng chi phí vận chuyển phế thải và vật liệu mới.</p>

<h2>Mẹo địa phương mùa mưa</h2>
<p>Nếu cải tạo sân thượng hoặc mái tôn trước mùa mưa lớn, hãy chốt lớp chống thấm và thoát nước trước khi ốp gạch trang trí. TP.HCM mưa dầm dễ “ngâm” lớp keo nếu thi công vội.</p>

<h2>Cải tạo nhà cũ có giữ được phong cách cũ không?</h2>
<p>Có thể giữ vài chi tiết có giá trị (cửa gỗ còn đẹp, ô thông tầng) trong khi thay hệ kỹ thuật. <strong>Cải tạo nhà cũ TP.HCM</strong> không nhất thiết “làm mới hoàn toàn thành nhà kính”. Sao Khuê phân loại hạng mục: bắt buộc an toàn, nên làm, và tùy chọn thẩm mỹ — giúp ngân sách không bị kéo vào đồ trang trí trước khi xử lý thấm–điện.</p>
<ol>
  <li>An toàn: điện, kết cấu, thoát hiểm.</li>
  <li>Khô ráo: chống thấm, thoát nước.</li>
  <li>Công năng: bếp, WC, phòng ngủ.</li>
  <li>Thẩm mỹ: sơn, mặt tiền, đèn.</li>
</ol>

<h2>FAQ cải tạo nhà cũ</h2>
<details>
  <summary>Cải tạo có cần xin giấy phép không?</summary>
  <p>Thay đổi kết cấu, cơi nới, nâng tầng thường cần phép. Sửa hoàn thiện trong khuôn khổ hiện trạng có thể đơn giản hơn — kỹ sư Sao Khuê tư vấn theo hiện trạng thực tế từng quận.</p>
</details>
<details>
  <summary>Ở tạm trong nhà khi cải tạo được không?</summary>
  <p>Với cải tạo từng khu vực (ví dụ chỉ tầng trên), có thể ở tạm. Cải tạo toàn bộ điện nước + đập tường lớn nên chuyển đồ và hạn chế ở lại vì bụi, tiếng ồn và an toàn.</p>
</details>
<details>
  <summary>Bảo hành cải tạo thế nào?</summary>
  <p>Sao Khuê bảo hành hoàn thiện theo hạng mục; phần gia cố/kết cấu liên quan được gắn với cam kết bảo hành kết cấu tới 10 năm khi thuộc phạm vi thi công của chúng tôi.</p>
</details>

<h2>Đặt lịch khảo sát nhà cũ</h2>
<p>Gọi <strong>0909 075 668</strong> — kỹ sư đến xem hiện trạng tại TP.HCM. Văn phòng: 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "cai-tao-nha-tron-goi-tphcm": {
    title: "Cải Tạo Nhà Trọn Gói TP.HCM — Một Đầu Mối Từ A Đến Z",
    excerpt:
      "Cải tạo nhà trọn gói TP.HCM: thiết kế lại công năng, thi công và bàn giao. Minh bạch hạng mục — 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Trọn Gói TP.HCM | Một Đầu Mối",
    metaDescription:
      "Cải tạo nhà trọn gói TP.HCM: quy trình, bảng giá theo mức độ, ưu điểm một nhà thầu. Hotline 0909 075 668.",
    metaKeywords:
      "cải tạo nhà trọn gói tphcm, cải tạo nhà chìa khóa trao tay, sửa nhà trọn gói",
    imageAlt: "Cải tạo nhà trọn gói TP.HCM — Kiến Trúc Sao Khuê",
    content: `<h2>Cải tạo nhà trọn gói TP.HCM mang lại gì cho chủ nhà?</h2>
<p><strong>Cải tạo nhà trọn gói TP.HCM</strong> nghĩa là một đơn vị chịu trách nhiệm từ khảo sát, thiết kế điều chỉnh, tháo dỡ có kiểm soát, thi công đến nghiệm thu — thay vì thuê nhiều thợ rời rạc. <strong>Kiến Trúc Sao Khuê</strong> áp dụng mô hình này cho nhà phố, nhà cũ cần làm mới công năng mà vẫn giữ khung (hoặc gia cố có tính toán).</p>
<p>Xem thêm <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> nếu phạm vi nhỏ hơn, hoặc <a href="/bao-gia">báo giá nhanh</a>.</p>

<h2>Phạm vi gói trọn gói thường gồm</h2>
<ul>
  <li>Khảo sát kết cấu &amp; đo đạc hiện trạng.</li>
  <li>Phương án mặt bằng mới (bếp, WC, phòng ngủ, giếng trời).</li>
  <li>Tháo dỡ – gia cố (nếu cần) – xây mới hạng mục.</li>
  <li>Điện nước, chống thấm, hoàn thiện.</li>
  <li>Vệ sinh bàn giao và hướng dẫn bảo hành.</li>
</ul>

<h2>Bảng giá cải tạo trọn gói theo mức độ</h2>
<table>
  <thead>
    <tr><th>Mức độ</th><th>Mô tả</th><th>Chi phí tham khảo</th></tr>
  </thead>
  <tbody>
    <tr><td>Gói làm mới</td><td>Sơn, lát, điện nước, WC</td><td>1,2 – 2,5 triệu/m² sàn cải tạo</td></tr>
    <tr><td>Gói cải tạo sâu</td><td>Đập thông, đổi công năng, chống thấm toàn diện</td><td>2,5 – 4,5 triệu/m²</td></tr>
    <tr><td>Gói có gia cố</td><td>Bổ sung cột/dầm, xử lý lún nhẹ</td><td>Theo hồ sơ kết cấu</td></tr>
    <tr><td>Gói mặt tiền + nội thất cơ bản</td><td>Ốp mặt tiền, cửa, chiếu sáng</td><td>Báo riêng theo mét ngang</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> “Trọn gói” không đồng nghĩa giá thấp nhất thị trường — đồng nghĩa phạm vi rõ, một bảo hành, ít đầu mối đổ lỗi khi có sự cố.</p>

<h2>Vì sao nhà phố TP.HCM hợp cải tạo trọn gói?</h2>
<p>Nhà ống dài, hàng xóm sát tường hai bên: thi công ồn, bụi, cần lịch đổ bê tông và vận chuyển phế thải khớp giờ cho phép của khu phố. Một nhà thầu điều phối tốt hơn năm đội thợ tự do chen lịch.</p>

<h2>Quy trình 6 bước tại Sao Khuê</h2>
<ol>
  <li>Tiếp nhận nhu cầu &amp; ngân sách.</li>
  <li>Khảo sát tại nhà.</li>
  <li>Phác thảo phương án + dự toán.</li>
  <li>Ký hợp đồng, thống nhất vật tư mẫu.</li>
  <li>Thi công theo giai đoạn, nghiệm thu từng phần.</li>
  <li>Bàn giao; bảo hành kết cấu liên quan tới 10 năm (khi thuộc phạm vi gia cố/xây mới của Sao Khuê).</li>
</ol>

<h2>Khi nào nên chọn cải tạo trọn gói thay vì thuê từng thợ?</h2>
<p>Nếu công việc đụng tới từ 3 hạng mục trở lên (điện, nước, chống thấm, đập tường, sơn), một nhà thầu điều phối giúp khớp cao độ sàn, vị trí ổ cắm và lịch đổ phế thải. Tại TP.HCM, thuê rời thường phát sinh “khoảng trống trách nhiệm” khi thợ A làm xong nhưng thợ B bảo nền chưa đạt. <strong>Kiến Trúc Sao Khuê</strong> gom nghiệm thu vào một biên bản để chủ nhà không phải đứng giữa các bên.</p>
<p>Gói trọn gói cũng thuận lợi hơn khi nhà trong hẻm: chỉ một đội xin lối tập kết, hạn chế ùn tắc lòng hẻm nhiều ngày.</p>
<h3>Checklist vật tư mẫu trước khi ký</h3>
<ul>
  <li>Mẫu gạch, mã sơn, profile cửa đã chốt bằng văn bản.</li>
  <li>Thương hiệu thiết bị vệ sinh và phụ kiện đi kèm.</li>
  <li>Loại vật liệu chống thấm và số lớp tối thiểu.</li>
  <li>Hình thức bàn giao: vệ sinh, bàn giao khóa, hướng dẫn bảo dưỡng.</li>
</ul>

<h2>Nghiệm thu cải tạo trọn gói theo từng lớp</h2>
<p>Đừng đợi đến ngày bàn giao mới xem. Nghiệm thu sau chống thấm, sau hệ điện nước, và sau hoàn thiện bề mặt. <strong>Cải tạo nhà trọn gói TP.HCM</strong> có nhiều lớp bị che — nghiệm thu sớm giảm đục phá lại.</p>

<h2>FAQ cải tạo trọn gói</h2>
<details>
  <summary>Trọn gói có gồm nội thất tủ bếp không?</summary>
  <p>Gói cơ bản thường dừng ở hoàn thiện xây dựng (ốp, sơn, cửa, TBVS). Tủ bếp, giường tủ có thể ký phụ lục riêng nếu bạn muốn một đầu mối.</p>
</details>
<details>
  <summary>Có ở lại nhà trong lúc cải tạo trọn gói được không?</summary>
  <p>Với gói cải tạo sâu, nên chuyển tạm để rút ngắn tiến độ và đảm bảo an toàn. Gói làm mới từng tầng có thể linh hoạt hơn.</p>
</details>
<details>
  <summary>Làm sao tránh phát sinh?</summary>
  <p>Chốt mẫu gạch, sơn, thiết bị trước khi thi công lớn; mọi đổi ý lập phụ lục. Sao Khuê không khuyến khích “làm trước tính sau”.</p>
</details>

<h2>Liên hệ nhận phương án</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh. Mang ảnh hiện trạng và mặt bằng sơ bộ để tư vấn nhanh hơn.</p>`,
  },

  "cai-tao-nha-pho-tphcm": {
    title: "Cải Tạo Nhà Phố TP.HCM — Tối Ưu Chiếu Sáng & Công Năng",
    excerpt:
      "Cải tạo nhà phố TP.HCM: mở giếng trời, kéo dài tầm nhìn, xử lý tường chung. Tư vấn khảo sát 0909 075 668.",
    metaTitle: "Cải Tạo Nhà Phố TP.HCM — Sáng Hơn, Ở Tốt Hơn",
    metaDescription:
      "Cải tạo nhà phố TP.HCM: giải pháp lấy sáng, thông gió, chống thấm tường chung. Hotline Sao Khuê 0909 075 668.",
    metaKeywords:
      "cải tạo nhà phố tphcm, sửa nhà ống, cải tạo nhà mặt phố, giếng trời nhà phố",
    imageAlt: "Cải tạo nhà phố TP.HCM — không gian sáng và thông thoáng",
    content: `<h2>Cải tạo nhà phố TP.HCM: bài toán nhà ống hẹp</h2>
<p><strong>Cải tạo nhà phố TP.HCM</strong> thường xoay quanh ba việc: lấy sáng, thông gió và tách khu vực ướt khỏi khu vực ở. Nhà ống 3,5–5m mặt tiền dễ tối sâu — Sao Khuê ưu tiên giải pháp giếng trời, ô thoáng liên tầng và bố trí cầu thang hợp lý trước khi bàn chuyện ốp đá đắt tiền.</p>
<p>Dịch vụ hỗ trợ: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · <a href="/dich-vu/xay-nha-tron-goi">xây mới trọn gói</a> nếu cải tạo không còn hiệu quả.</p>

<h2>Giải pháp kỹ thuật hay dùng cho nhà phố</h2>
<ul>
  <li><strong>Giếng trời + mái kính/polycarbonate:</strong> sáng tầng giữa, cần chống nóng và thoát nước kỹ.</li>
  <li><strong>Kéo bếp ra sau / đảo bếp:</strong> giảm mùi lan phòng khách.</li>
  <li><strong>WC khép kín từng tầng:</strong> thuận tiện nhà nhiều thế hệ.</li>
  <li><strong>Vách kính lấy sáng hông</strong> (khi khoảng lùi hoặc hành lang kỹ thuật cho phép).</li>
</ul>

<h2>Bảng đầu tư cải tạo nhà phố theo mục tiêu</h2>
<table>
  <thead>
    <tr><th>Mục tiêu</th><th>Hạng mục chính</th><th>Ngân sách gợi ý</th></tr>
  </thead>
  <tbody>
    <tr><td>Sáng &amp; thoáng</td><td>Giếng trời, cầu thang mới, ô thoáng</td><td>150 – 450 triệu</td></tr>
    <tr><td>Ở thêm người</td><td>Ngăn phòng, thêm WC, điện nước</td><td>200 – 600 triệu</td></tr>
    <tr><td>Kinh doanh tầng trệt</td><td>Mặt tiền, sàn chịu tải, điện 3 pha (nếu cần)</td><td>250 – 800 triệu+</td></tr>
    <tr><td>Toàn diện</td><td>Ruột + mặt tiền + chống thấm</td><td>0,8 – 2 tỷ+</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Nhà mặt tiền đường lớn chi phí mặt dựng cao hơn nhà trong hẻm, nhưng dễ vận chuyển vật liệu hơn — tổng tiến độ thường ngắn hơn.</p>

<h2>Tường chung &amp; hàng xóm — lưu ý bắt buộc</h2>
<p>Trước khi đục tường chung hoặc gia cố sát biên, cần khảo sát ảnh hưởng nhà bên cạnh. Sao Khuê khuyến nghị chụp hiện trạng hai bên, thỏa thuận thời gian thi công ồn và có phương án chống thấm khe tiếp giáp — đây là nguồn tranh chấp phổ biến tại TP.HCM.</p>

<h2>Cải tạo tầng trệt kinh doanh: tách luồng khách và gia đình</h2>
<p>Nhiều nhà phố TP.HCM kết hợp ở và buôn bán. Khi <strong>cải tạo nhà phố</strong>, nên tách lối đi khách, khu để hàng và khu sinh hoạt bằng vách/cửa để giữ riêng tư. Điện 3 pha hoặc tủ điện đủ tải chỉ lắp khi thực sự cần — tránh nâng cấp “cho chắc” gây lãng phí.</p>
<p>Mặt tiền kính lớn hợp kinh doanh nhưng hướng Tây cần lam che hoặc cây xanh để giảm nóng. Sao Khuê thường đề xuất mái đón vừa đủ theo chỉ giới, không lấn chiếm lòng đường.</p>
<h3>Ánh sáng nhân tạo hỗ trợ nhà ống</h3>
<p>Giếng trời giải quyết ban ngày; ban đêm cần đèn ấm ở khu sinh hoạt và đèn đủ lux ở khu bếp–WC. Tránh chỉ gắn đèn giữa trần khiến góc sâu nhà ống vẫn tối.</p>

<h2>Cải tạo nhà phố liền kề: khe nhiệt và tường chung</h2>
<p>Nhà liền kề cần chú ý khe co giãn và đường ống đứng. Khi <strong>cải tạo nhà phố TP.HCM</strong> dạng này, đừng bịt kín toàn bộ khe bằng vữa cứng nếu thiết kế yêu cầu khe mềm. Xử lý sai gây nứt lan hai nhà. Sao Khuê khảo sát cả phía tiếp giáp trước khi đục.</p>
<p>Văn phòng: 245/8 Bình Lợi, Bình Thạnh · 0909 075 668.</p>

<h2>FAQ cải tạo nhà phố</h2>
<details>
  <summary>Nhà phố cũ có nên nâng tầng luôn khi cải tạo?</summary>
  <p>Chỉ khi kiểm tra móng–khung đủ khả năng hoặc có phương án gia cố. Cải tạo thẩm mỹ không tự động cho phép thêm tầng.</p>
</details>
<details>
  <summary>Giếng trời có làm nhà nóng hơn không?</summary>
  <p>Nếu thiết kế sai (thiếu thông gió thoát nhiệt, kính không đúng loại) có thể nóng. Giải pháp đúng kết hợp lấy sáng khuếch tán, che nắng và đối lưu không khí.</p>
</details>
<details>
  <summary>Cải tạo nhà phố mất bao lâu?</summary>
  <p>Gói công năng + hoàn thiện vừa phải thường 6–12 tuần; gói toàn diện có thể 3–5 tháng tùy giấy phép và hẻm.</p>
</details>

<h2>Khảo sát nhà phố của bạn</h2>
<p>Hotline <strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh. Bảo hành kết cấu liên quan tới hạng mục gia cố/xây mới: <strong>10 năm</strong>.</p>`,
  },

  "sua-chua-nha-tron-goi-tphcm": {
    title: "Sửa Chữa Nhà Trọn Gói TP.HCM — Xử Lý Đúng Gốc Vấn Đề",
    excerpt:
      "Sửa chữa nhà trọn gói TP.HCM: thấm, nứt, điện nước, hoàn thiện. Một hợp đồng — hotline 0909 075 668.",
    metaTitle: "Sửa Chữa Nhà Trọn Gói TP.HCM | Sao Khuê",
    metaDescription:
      "Sửa chữa nhà trọn gói TP.HCM: chống thấm, điện nước, nứt tường. Báo giá sau khảo sát — 0909 075 668.",
    metaKeywords:
      "sửa chữa nhà trọn gói tphcm, sửa nhà trọn gói, sửa chữa nhà tphcm",
    imageAlt: "Sửa chữa nhà trọn gói tại TP.HCM",
    content: `<h2>Sửa chữa nhà trọn gói TP.HCM khác thuê thợ lẻ thế nào?</h2>
<p><strong>Sửa chữa nhà trọn gói TP.HCM</strong> gói các hạng mục liên quan vào một hợp đồng: tìm nguyên nhân thấm, xử lý kết cấu nhẹ nếu cần, sửa điện nước và hoàn thiện lại bề mặt. Thuê thợ lẻ dễ “vá chỗ A hỏng chỗ B”. <strong>Kiến Trúc Sao Khuê</strong> khảo sát trước, báo đúng gốc vấn đề.</p>
<p>Chi tiết dịch vụ: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · ước lượng: <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Các gói sửa chữa hay được chọn</h2>
<ul>
  <li>Gói chống thấm + hoàn thiện lại khu vực ướt.</li>
  <li>Gói điện nước toàn nhà (thay đường ống cũ, tủ điện mới).</li>
  <li>Gói xử lý nứt tường/trần + sơn lại.</li>
  <li>Gói sửa đa hạng mục trước khi cho thuê.</li>
</ul>

<h2>Bảng giá sửa chữa trọn gói tham khảo</h2>
<table>
  <thead>
    <tr><th>Gói sửa</th><th>Phạm vi</th><th>Chi phí gợi ý</th></tr>
  </thead>
  <tbody>
    <tr><td>Chống thấm WC/sân thượng</td><td>Tháo lớp hỏng – chống thấm – lát lại</td><td>2,5 – 6 triệu/m² khu vực xử lý</td></tr>
    <tr><td>Sửa điện toàn nhà phố</td><td>Tủ điện, dây, ổ cắm theo tải mới</td><td>40 – 120 triệu</td></tr>
    <tr><td>Sửa nước + thoát sàn</td><td>Ống PPR/PVC, van, máy bơm</td><td>30 – 90 triệu</td></tr>
    <tr><td>Sửa đa hạng mục trọn gói</td><td>Theo checklist khảo sát</td><td>Báo sau khi xem hiện trạng</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý giá:</strong> Nhà đã ốp đá/garanium cao cấp: chi phí tháo và lát lại chiếm tỷ trọng lớn — đôi khi cao hơn tiền vật liệu chống thấm.</p>

<h2>Quy trình sửa chữa có kiểm soát</h2>
<ol>
  <li>Khảo sát &amp; chụp hiện trạng.</li>
  <li>Chẩn đoán nguyên nhân (không chỉ “trát đè”).</li>
  <li>Báo giá theo hạng mục + vật tư.</li>
  <li>Thi công – nghiệm thu từng lớp (đặc biệt chống thấm).</li>
  <li>Bàn giao hướng dẫn bảo dưỡng.</li>
</ol>

<h2>Sửa chữa trước mùa mưa: ưu tiên nào trước?</h2>
<p>Với khí hậu TP.HCM, lịch sửa nên ưu tiên sân thượng, mái tôn, cổ ống xuyên sàn và WC tầng trên trước khi sơn trần nhà dưới. Sơn trước rồi xử lý thấm sau sẽ bong và tốn gấp đôi. Gói <strong>sửa chữa nhà trọn gói</strong> của Sao Khuê xếp hạng mục theo mức rủi ro ngấm nước.</p>
<h3>Khi nào cần dừng sửa và chuyển gia cố?</h3>
<p>Trong lúc đục lớp hoàn thiện, nếu lộ cột nứt sâu, thép gỉ nặng hoặc sàn võng bất thường, kỹ sư sẽ dừng và đề xuất đánh giá kết cấu. Không “trát đè” để giao cho xong — đây là điểm khác biệt so với vá tạm.</p>
<p>Liên hệ sớm qua <strong>0909 075 668</strong> nếu nhà đang thấm mạnh gần mùa mưa cao điểm.</p>

<h2>Gói sửa chữa trọn gói trước khi bàn giao nhà thuê</h2>
<p>Chủ nhà cho thuê thường cần lịch cố định và biên bản bàn giao sạch. Gói <strong>sửa chữa nhà trọn gói TP.HCM</strong> có thể gồm sơn, xử lý thấm điểm, thay thiết bị hỏng và vệ sinh cuối — một hóa đơn, một đầu mối bảo hành hạng mục.</p>
<ul>
  <li>Checklist trước cho thuê do kỹ sư lập.</li>
  <li>Ưu tiên việc ảnh hưởng người thuê (nước, điện, WC).</li>
  <li>Chụp ảnh trước–sau để lưu hồ sơ.</li>
</ul>

<h2>FAQ sửa chữa trọn gói</h2>
<details>
  <summary>Sửa thấm có bảo hành không?</summary>
  <p>Có, thời hạn bảo hành chống thấm ghi trong hợp đồng theo đúng quy trình và vật liệu đã dùng. Bảo hành không áp dụng nếu chủ nhà tự đục phá lớp đã xử lý.</p>
</details>
<details>
  <summary>Có nhận sửa nhà đang cho thuê không?</summary>
  <p>Có — cần lịch trống căn và thỏa thuận giờ ồn với người thuê. Gói sửa nhanh trước mùa mưa được ưu tiên xếp lịch.</p>
</details>
<details>
  <summary>Nhà nứt chân chim có nguy hiểm không?</summary>
  <p>Nứt chân chim bề mặt thường do co ngót/sơn; nứt theo đường chéo gần cột/dầm cần kỹ sư xem. Đừng tự khoan cắt nếu chưa rõ nguyên nhân.</p>
</details>

<h2>Gọi thợ khảo sát</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh. Cam kết bảo hành kết cấu <strong>10 năm</strong> với hạng mục gia cố thuộc phạm vi Sao Khuê.</p>`,
  },

  "nang-tang-nha-pho-tphcm": {
    title: "Nâng Tầng Nhà Phố TP.HCM — Điều Kiện Kết Cấu & Giấy Phép",
    excerpt:
      "Nâng tầng nhà phố TP.HCM: kiểm tra móng, gia cố, xin phép. Sao Khuê khảo sát chịu lực trước khi thi công — 0909 075 668.",
    metaTitle: "Nâng Tầng Nhà Phố TP.HCM — An Toàn Trước Đẹp",
    metaDescription:
      "Nâng tầng nhà phố TP.HCM: đánh giá chịu lực, chi phí gia cố, thủ tục phép. Hotline 0909 075 668.",
    metaKeywords:
      "nâng tầng nhà phố tphcm, cơi nới tầng, xây thêm tầng, gia cố nhà phố",
    imageAlt: "Nâng tầng nhà phố tại TP.HCM",
    content: `<h2>Nâng tầng nhà phố TP.HCM: đừng làm khi chưa biết móng</h2>
<p><strong>Nâng tầng nhà phố TP.HCM</strong> là hạng mục rủi ro nếu chỉ nhìn “nhà hàng xóm cũng thêm tầng”. Mỗi móng, mỗi địa chất khác nhau. <strong>Kiến Trúc Sao Khuê</strong> bắt buộc khảo sát/đánh giá chịu lực trước khi lập phương án gia cố hoặc khuyên xây mới.</p>
<p>Liên quan: <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> · <a href="/dich-vu/sua-chua-nha">sửa chữa – gia cố</a>.</p>

<h2>Điều kiện kỹ thuật tối thiểu</h2>
<ul>
  <li>Móng và cột còn đủ khả năng hoặc có giải pháp gia cố (cọc bổ sung, đai cột, dầm chuyển…).</li>
  <li>Không vượt quy hoạch chiều cao / số tầng được phép.</li>
  <li>Giấy phép xây dựng (hoặc điều chỉnh) đúng quy định địa phương.</li>
  <li>Phương án thi công không làm sập/lún nhà liền kề.</li>
</ul>

<h2>Bảng chi phí nâng tầng tham khảo</h2>
<table>
  <thead>
    <tr><th>Hạng mục</th><th>Chi phí gợi ý</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    <tr><td>Khảo sát + hồ sơ kết cấu</td><td>Theo quy mô</td><td>Bắt buộc trước thi công</td></tr>
    <tr><td>Gia cố móng/cột</td><td>80 – 400 triệu+</td><td>Biến động mạnh theo hiện trạng</td></tr>
    <tr><td>Xây thêm 1 tầng (thô + HT cơ bản)</td><td>4,8 – 6,5 triệu/m² tầng mới</td><td>Chưa gồm gia cố</td></tr>
    <tr><td>Cầu thang nối tầng</td><td>40 – 150 triệu</td><td>BTCT hoặc kết hợp thép</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Nhiều chủ nhà chỉ so giá “đổ sàn thêm tầng” mà quên khoản gia cố — đây mới là phần quyết định an toàn và ngân sách thật.</p>

<h2>Trình tự thi công an toàn</h2>
<ol>
  <li>Đánh giá hiện trạng &amp; xin phép.</li>
  <li>Gia cố (nếu có) → nghiệm thu.</li>
  <li>Thi công khung tầng mới.</li>
  <li>Điện nước – chống thấm mái/sân thượng mới.</li>
  <li>Hoàn thiện &amp; bàn giao; bảo hành kết cấu 10 năm với phần Sao Khuê thi công.</li>
</ol>

<h2>Ảnh hưởng hàng xóm khi nâng tầng — cần làm gì?</h2>
<p>Nâng tầng nhà phố sát tường chung dễ gây rung, bụi và lo ngại lún. Trước thi công, Sao Khuê khuyến nghị: chụp hiện trạng nhà liền kề, thông báo lịch khoan/đổ bê tông, và có biện pháp chống đỡ tạm nếu đục liên kết cũ. Chi phí này nên nằm trong dự toán, không để phát sinh miệng.</p>
<h3>Nâng tầng có kèm cải tạo mặt tiền không?</h3>
<p>Nên đồng bộ mặt đứng sau khi thêm tầng để tỷ lệ cửa sổ–tường hài hòa. Làm mặt tiền trước rồi nâng tầng sau thường phải tháo lại — lãng phí. Kết hợp với chống thấm mái mới ngay sau khi đổ sàn tum/sân thượng.</p>
<p>Văn phòng hỗ trợ: 245/8 Bình Lợi, Bình Thạnh.</p>

<h2>Chi phí ẩn khi nâng tầng nhà phố nội thành</h2>
<p>Ngoài đổ sàn và xây tường tầng mới, chủ nhà thường gặp: thuê nhà ở tạm, gia cố đột xuất khi đục lộ thép gỉ, phí bơm bê tông đường ống dài trong hẻm, và hoàn thiện lại mặt đứng sau khi đổi tỷ lệ tầng. Dự toán <strong>nâng tầng nhà phố TP.HCM</strong> nên có dòng dự phòng riêng 10–15% cho nhóm này.</p>
<p>Sao Khuê tách báo giá gia cố và báo giá xây tầng mới để bạn thấy rõ đâu là khoản bắt buộc an toàn. Hotline <strong>0909 075 668</strong>.</p>
<ul>
  <li>Chụp hiện trạng trước–sau từng bước gia cố.</li>
  <li>Nghiệm thu thép trước mọi lần đổ bê tông.</li>
  <li>Chống thấm mái mới ngay, không để “để đó chờ hoàn thiện”.</li>
</ul>

<h2>Hồ sơ cần chuẩn bị khi làm việc với kỹ sư nâng tầng</h2>
<p>Mang sổ đỏ, ảnh hiện trạng, bản vẽ cũ (nếu có), và mô tả mục tiêu thêm tầng để ở hay cho thuê. Giúp đánh giá <strong>nâng tầng nhà phố TP.HCM</strong> nhanh hơn.</p>

<h2>FAQ nâng tầng</h2>
<details>
  <summary>Nhà xây cách đây 15–20 năm có nâng được không?</summary>
  <p>Có thể nếu móng thiết kế dư tải hoặc gia cố được. Tuổi nhà không phải tiêu chí duy nhất — hồ sơ thiết kế cũ và hiện trạng nứt/lún quan trọng hơn.</p>
</details>
<details>
  <summary>Nâng tầng có bắt buộc phá mái cũ không?</summary>
  <p>Thường phải tháo mái/sân thượng hiện hữu để nối thép và đồng bộ cao độ. Giữ nguyên mái rồi “chồng” thêm là cách làm nguy hiểm.</p>
</details>
<details>
  <summary>Thời gian thi công thêm một tầng?</summary>
  <p>Khoảng 6–12 tuần cho phần xây mới sau khi gia cố xong; tổng dự án có thể dài hơn nếu thủ tục phép kéo dài.</p>
</details>

<h2>Đặt lịch kiểm tra chịu lực</h2>
<p>Gọi <strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "chong-tham-nha-tphcm": {
    title: "Chống Thấm Nhà TP.HCM — Ưu Tiên Đúng Vị Trí Trước Mùa Mưa",
    excerpt:
      "Chống thấm nhà TP.HCM: sân thượng, WC, tường chung, mái tôn. Xử lý đúng quy trình — 0909 075 668.",
    metaTitle: "Chống Thấm Nhà TP.HCM — Trước Mùa Mưa",
    metaDescription:
      "Chống thấm nhà TP.HCM: sân thượng, WC, khe tường chung. Quy trình và đơn giá tham khảo — 0909 075 668.",
    metaKeywords:
      "chống thấm nhà tphcm, chống thấm sân thượng, chống thấm wc, xử lý thấm dột",
    imageAlt: "Chống thấm nhà tại TP.HCM — sân thượng và khu vực ướt",
    content: `<h2>Chống thấm nhà TP.HCM: mưa dầm không tha nhà “vá tạm”</h2>
<p><strong>Chống thấm nhà TP.HCM</strong> cần làm đúng lớp và đúng vị trí: sân thượng, sàn WC, tường tiếp giáp, hộp kỹ thuật, mái tôn. Trát xi măng mỏng rồi sơn chống thấm lên bề mặt ướt sẵn thường thất bại sau một mùa mưa. <strong>Kiến Trúc Sao Khuê</strong> xử lý theo quy trình tháo lớp hỏng – tạo dốc – quét/phủ – nghiệm thu giữ nước.</p>
<p>Khi thấm kèm hư hoàn thiện lớn, xem <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a>.</p>

<h2>Vị trí thấm phổ biến tại nhà phố</h2>
<ul>
  <li>Sân thượng đọng nước, cổ ống xuyên sàn.</li>
  <li>WC tầng trên thấm trần nhà dưới.</li>
  <li>Tường chung bị nước mưa “đi” theo mạch gạch.</li>
  <li>Mái tôn thủng / gioăng đinh gỉ.</li>
</ul>

<h2>Bảng đơn giá chống thấm tham khảo</h2>
<table>
  <thead>
    <tr><th>Hạng mục</th><th>Đơn giá gợi ý</th><th>Ghi chú thi công</th></tr>
  </thead>
  <tbody>
    <tr><td>Chống thấm sân thượng (có tạo dốc)</td><td>350.000 – 750.000 đ/m²</td><td>Chưa gồm lát gạch mới</td></tr>
    <tr><td>Chống thấm WC (tháo lát)</td><td>2,5 – 5,5 triệu/m²</td><td>Gồm hoàn thiện lát lại cơ bản</td></tr>
    <tr><td>Xử lý tường thấm ngoài</td><td>200.000 – 450.000 đ/m²</td><td>Tùy độ bong tróc</td></tr>
    <tr><td>Mái tôn / khe co giãn</td><td>Báo theo mét dài</td><td>Thay tôn nếu thủng nặng</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Giá rẻ chỉ “phun phủ” trên nền đang ngấm thường không kèm bảo hành dài. Hỏi rõ có thử nước (water test) trước khi lát lại không.</p>

<h2>Quy trình chống thấm sân thượng đúng</h2>
<ol>
  <li>Vệ sinh, đục lớp hỏng, xử lý cổ ống.</li>
  <li>Tạo dốc về họng thu; kiểm tra thoát nước.</li>
  <li>Quét/phủ vật liệu chống thấm đủ số lớp.</li>
  <li>Ngâm nước thử ≥ 24–48 giờ.</li>
  <li>Lát bảo vệ / sơn phủ theo thiết kế.</li>
</ol>

<h2>Chống thấm tường chung: vì sao khó hơn sân thượng?</h2>
<p>Tường chung nhà phố TP.HCM thường không tiếp cận mặt ngoài phía hàng xóm. Nước mưa đi theo mạch gạch, khe co giãn hoặc ống đứng. Giải pháp thực tế: xử lý phía trong bằng hệ thống quét/phủ phù hợp, khắc phục nguyên nhân đọng nước trên cao (mái, ban công), và cải thiện thoát nước thay vì chỉ sơn chống thấm trang trí.</p>
<h3>Vật liệu nào phù hợp khu vực nào?</h3>
<ul>
  <li>Sân thượng: màng/phủ đàn hồi + lớp bảo vệ.</li>
  <li>WC: chống thấm gốc xi măng hoặc hệ thống chuyên dụng khu ướt + ngâm thử.</li>
  <li>Mái tôn: thay tấm hỏng, Gioăng/bitum khe, kiểm tra độ dốc.</li>
</ul>
<p>Đừng tin “một sản phẩm cho mọi chỗ” — từng vị trí cơ chế thấm khác nhau.</p>

<h2>Bảo dưỡng sau chống thấm: việc nhỏ giữ bảo hành</h2>
<p>Sau khi xử lý <strong>chống thấm nhà TP.HCM</strong>, hãy giữ họng thu thông, không khoan lỗ mới trên lớp phủ, và không để đọng nước lâu trên sân thượng. Lan can và chậu cây cần đế kê cao. Vi phạm các điểm này là lý do bảo hành bị từ chối phổ biến.</p>
<p>Nếu nhà vừa chống thấm vừa sơn lại mặt tiền, làm chống thấm và thoát nước trước — sơn sau. Thứ tự ngược lại khiến lớp sơn ngoại thất sớm ố vàng do ẩm.</p>
<ol>
  <li>Vệ sinh họng thu mỗi mùa mưa.</li>
  <li>Kiểm tra cổ ống máy nước nóng năng lượng mặt trời.</li>
  <li>Báo sớm khi thấy loang ẩm thay vì chờ nấm mốc lan rộng.</li>
</ol>

<h2>Phân biệt thấm ngược và thấm mưa</h2>
<p>Thấm mưa thường gắn thời tiết; thấm ngược/ống dò có thể xảy ra cả ngày nắng. Chẩn đoán đúng mới chọn giải pháp. Đội <strong>chống thấm nhà TP.HCM</strong> của Sao Khuê kiểm tra cả hai khả năng trước khi báo giá.</p>

<h2>FAQ chống thấm</h2>
<details>
  <summary>Có cần đục hết gạch sân thượng không?</summary>
  <p>Nếu gạch bong, dốc sai hoặc lớp dưới đã hỏng: nên đục. Chỉ phủ lên gạch đang phồng rộp dễ thất bại sớm.</p>
</details>
<details>
  <summary>Chống thấm mùa mưa có làm được không?</summary>
  <p>Có thể nhưng phải can trời và che chắn; một số lớp cần thời gian khô. Ưu tiên xử lý trước cao điểm mưa nếu chủ động được lịch.</p>
</details>
<details>
  <summary>Bảo hành chống thấm bao lâu?</summary>
  <p>Theo vật liệu và hạng mục ghi hợp đồng. Phần liên quan kết cấu/gia cố của Sao Khuê vẫn theo cam kết bảo hành kết cấu 10 năm khi thuộc phạm vi thi công.</p>
</details>

<h2>Đặt lịch xử lý thấm</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "thiet-ke-nha-dep-tphcm": {
    title: "Thiết Kế Nhà Đẹp TP.HCM — Đẹp Phải Ở Được Thật",
    excerpt:
      "Thiết kế nhà đẹp TP.HCM: cân bằng thẩm mỹ, công năng và chi phí xây. Tư vấn miễn phí 0909 075 668.",
    metaTitle: "Thiết Kế Nhà Đẹp TP.HCM — Đẹp & Ở Được",
    metaDescription:
      "Thiết kế nhà đẹp TP.HCM: nhà phố, tối ưu mặt tiền hẹp, đồng bộ thi công. Hotline 0909 075 668.",
    metaKeywords:
      "thiết kế nhà đẹp tphcm, thiết kế nhà phố, mẫu nhà đẹp tphcm, kiến trúc sao khuê",
    imageAlt: "Thiết kế nhà đẹp TP.HCM — phối cảnh nhà phố",
    content: `<h2>Thiết kế nhà đẹp TP.HCM bắt đầu từ mặt bằng, không từ “mặt tiền Pinterest”</h2>
<p><strong>Thiết kế nhà đẹp TP.HCM</strong> phải tôn trọng bề ngang hẹp, chiều sâu dài, quy định lộ giới và ngân sách xây thực tế. Bản vẽ đẹp nhưng không thi công được trong hẻm 2,5m hoặc đội giá gấp đôi là thiết kế thất bại. <strong>Kiến Trúc Sao Khuê</strong> gắn thiết kế với dự toán và biện pháp thi công ngay từ đầu.</p>
<p>Khi đã có thiết kế, triển khai <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> giúp đồng bộ từ ý tưởng đến bàn giao.</p>

<h2>Phong cách phù hợp khí hậu &amp; đô thị TP.HCM</h2>
<ul>
  <li>Hiện đại tối giản: dễ bảo trì mặt tiền, hợp nhà phố.</li>
  <li>Nhiệt đới: lấy sáng, thông gió, che mưa che nắng.</li>
  <li>Bán cổ điển nhẹ: chỉ dùng chi tiết vừa đủ để kiểm soát chi phí đắp phào.</li>
</ul>

<h2>Bảng phí thiết kế tham khảo</h2>
<table>
  <thead>
    <tr><th>Gói thiết kế</th><th>Phí gợi ý</th><th>Đầu ra</th></tr>
  </thead>
  <tbody>
    <tr><td>Kiến trúc cơ bản</td><td>Theo m² hoặc gói</td><td>Mặt bằng, mặt đứng, mặt cắt</td></tr>
    <tr><td>Kiến trúc + kết cấu</td><td>Theo hồ sơ</td><td>Bản vẽ thi công kết cấu</td></tr>
    <tr><td>Trọn bộ xin phép</td><td>Theo quận &amp; quy mô</td><td>Hồ sơ nộp cấp phép</td></tr>
    <tr><td>Thiết kế khi ký xây trọn gói</td><td>Ưu đãi theo CTKM</td><td>Đồng bộ với dự toán xây</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Phí thiết kế thường nhỏ hơn rất nhiều so với chi phí phát sinh vì đổi ý giữa chừng khi đang thi công.</p>

<h2>Quy trình thiết kế thực dụng</h2>
<ol>
  <li>Khảo sát đất, hướng, hiện trạng hàng xóm.</li>
  <li>Lấy brief: số người ở, có kinh doanh tầng trệt không, ngân sách.</li>
  <li>Phương án mặt bằng 1–2 lựa chọn.</li>
  <li>Chốt mặt đứng &amp; vật liệu.</li>
  <li>Hồ sơ thi công / xin phép.</li>
</ol>

<h2>Thiết kế đẹp gắn với ngân sách xây: ba mức quyết định sớm</h2>
<p>Khi làm <strong>thiết kế nhà đẹp TP.HCM</strong>, hãy chốt sớm: (1) số tầng và công năng bắt buộc, (2) mức hoàn thiện tiêu chuẩn/khá/cao cấp, (3) chi tiết mặt đứng được phép “chơi”. Đổi ý ở bước (3) sau khi đã làm bản vẽ thi công tốn kém hơn đổi màu sơn.</p>
<h3>Nhà phố hẹp vẫn tạo điểm nhấn</h3>
<p>Dùng một vật liệu chủ đạo, một điểm nhấn (ô cửa hoặc mảng tường), và chiếu sáng đúng chỗ. Quá nhiều chi tiết trên mặt tiền 4m khiến nhà rối và đắt nhân công đắp.</p>
<p>Sao Khuê có thể đi từ concept đến hồ sơ xin phép và thi công trọn gói — một mạch để tránh lệch bản vẽ và hiện trường.</p>

<h2>Thiết kế nhà đẹp gắn thi công: giảm lệch bản vẽ</h2>
<p>Nhiều nhà “đẹp trên 3D” nhưng thợ không làm được chi tiết phức tạp trong hẻm hẹp. <strong>Thiết kế nhà đẹp TP.HCM</strong> của Sao Khuê ưu tiên giải pháp hiện trường: vật liệu sẵn có, chi tiết thi công được, và dự toán kèm theo. Đó là cách giữ cái đẹp mà không phá ngân sách giữa chừng.</p>
<ol>
  <li>Concept bám brief ngân sách.</li>
  <li>Chi tiết thi công rõ ràng.</li>
  <li>Đồng bộ với đội xây trọn gói.</li>
</ol>

<h2>FAQ thiết kế nhà đẹp</h2>
<details>
  <summary>Nhà 4m mặt tiền có làm đẹp được không?</summary>
  <p>Có — tập trung tỷ lệ cửa sổ, vật liệu ít màu, chiếu sáng mặt đứng và công năng bên trong. Tránh quá nhiều chi tiết nhỏ khiến mặt tiền rối.</p>
</details>
<details>
  <summary>Có cần thiết kế 3D không?</summary>
  <p>3D giúp chủ nhà hình dung nhanh, giảm đổi ý. Với nhà phố tiêu chuẩn, bộ 2D thi công vẫn là bắt buộc để thợ làm đúng.</p>
</details>
<details>
  <summary>Thiết kế xong có bắt buộc xây với Sao Khuê?</summary>
  <p>Không bắt buộc với hợp đồng thiết kế độc lập. Nếu ký gói xây trọn gói, thiết kế được tối ưu theo năng lực thi công và bảo hành kết cấu 10 năm.</p>
</details>

<h2>Đặt lịch tư vấn thiết kế</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "chi-phi-xay-nha-tphcm": {
    title: "Chi Phí Xây Nhà TP.HCM — Dự Toán Đủ Hạng Mục, Ít Sốc Giá",
    excerpt:
      "Chi phí xây nhà TP.HCM gồm thô, hoàn thiện, phép, dự phòng. Sao Khuê lập dự toán minh bạch — 0909 075 668.",
    metaTitle: "Chi Phí Xây Nhà TP.HCM 2026 — Dự Toán Đủ",
    metaDescription:
      "Chi phí xây nhà TP.HCM: các khoản cần dự trù, ví dụ tính nhanh, dự phòng 8–12%. Gọi 0909 075 668.",
    metaKeywords:
      "chi phí xây nhà tphcm, xây nhà hết bao nhiêu, dự toán xây nhà, ngân sách xây nhà",
    imageAlt: "Chi phí xây nhà TP.HCM — dự toán minh bạch",
    content: `<h2>Chi phí xây nhà TP.HCM không chỉ là đơn giá/m²</h2>
<p>Nhiều chủ nhà nhân diện tích đất với một con số trên mạng rồi thiếu tiền giữa chừng. <strong>Chi phí xây nhà TP.HCM</strong> gồm: xây dựng (thô/hoàn thiện), giấy phép, điện nước tạm, vận chuyển hẻm, nội thất, và quỹ dự phòng. <strong>Kiến Trúc Sao Khuê</strong> lập dự toán theo hạng mục để bạn thấy rõ từng khoản.</p>
<p>Công cụ hỗ trợ: <a href="/bao-gia">tính chi phí online</a> · dịch vụ <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a>.</p>

<h2>Các nhóm chi phí cần liệt kê</h2>
<ul>
  <li><strong>Xây dựng:</strong> móng, khung, tường, mái, hoàn thiện.</li>
  <li><strong>Pháp lý:</strong> phí thiết kế xin phép, lệ phí nhà nước.</li>
  <li><strong>Phụ trợ công trường:</strong> điện nước tạm, giàn giáo, vệ sinh phế thải.</li>
  <li><strong>Nội thất &amp; thiết bị:</strong> bếp, điều hòa, đèn, rèm.</li>
  <li><strong>Dự phòng:</strong> 8–12% cho phát sinh có kiểm soát.</li>
</ul>

<h2>Bảng phân bổ ngân sách mẫu</h2>
<table>
  <thead>
    <tr><th>Nhóm chi</th><th>Tỷ trọng gợi ý</th><th>Ví dụ quỹ 2 tỷ (xây+HT)</th></tr>
  </thead>
  <tbody>
    <tr><td>Phần thô / kết cấu</td><td>45–55%</td><td>~0,9 – 1,1 tỷ</td></tr>
    <tr><td>Hoàn thiện</td><td>30–40%</td><td>~0,6 – 0,8 tỷ</td></tr>
    <tr><td>Pháp lý + phụ trợ</td><td>5–8%</td><td>~100 – 160 triệu</td></tr>
    <tr><td>Dự phòng</td><td>8–12%</td><td>~160 – 240 triệu</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Nội thất cao cấp có thể bằng cả phần hoàn thiện xây — nên tách quỹ riêng kẻo “cắt” chất lượng kết cấu.</p>

<h2>Yếu tố làm chi phí TP.HCM tăng nhanh</h2>
<ol>
  <li>Hẻm hẹp, cẩu/xe không vào.</li>
  <li>Địa chất yếu cần cọc.</li>
  <li>Thiết kế nhịp lớn, console, đá tự nhiên.</li>
  <li>Đổi vật tư giữa chừng.</li>
</ol>

<h2>Ví dụ dòng tiền theo giai đoạn (tham khảo)</h2>
<p>Với tổng xây ~2 tỷ, chủ nhà có thể hình dung: tạm ứng hợp đồng 10–15%, sau móng 20–25%, các sàn tiếp theo chia đều, hoàn thiện 20–25%, bàn giao còn lại. Tỷ lệ cụ thể ghi trong hợp đồng <strong>Kiến Trúc Sao Khuê</strong> theo quy mô. Giữ quỹ dự phòng ngoài các đợt này để không “vay nóng” khi phát sinh có kiểm soát.</p>
<h3>Chi phí ẩn hay quên khi lập ngân sách</h3>
<ul>
  <li>Phí quản lý đô thị / vệ sinh phế thải theo địa bàn.</li>
  <li>Đền bù hoặc hỗ trợ hàng xóm (nếu thỏa thuận).</li>
  <li>Thuê nhà ở tạm 3–6 tháng.</li>
  <li>Lệ phí điện nước đấu nối tăng công suất.</li>
</ul>
<p>Lập bảng Excel đơn giản ngay từ tuần đầu sẽ giúp so sánh báo giá các nhà thầu công bằng hơn.</p>

<h2>So sánh chi phí xây mới và cải tạo trên cùng một nền</h2>
<p>Trên đất Bình Thạnh hay Gò Vấp giá cao, nhiều chủ nhà phân vân sửa hay phá. Cách tính nhanh: ước chi phí cải tạo sâu + tuổi thọ còn lại của khung; nếu tổng gần 70–80% chi phí xây mới mà vẫn ràng buộc công năng cũ thì xây mới thường sòng phẳng hơn dài hạn. Đây là cách nhìn <strong>chi phí xây nhà TP.HCM</strong> theo vòng đời, không chỉ theo lần chi đầu.</p>
<p>Sao Khuê hỗ trợ lập hai phương án song song sau khảo sát để bạn chọn. Văn phòng: 245/8 Bình Lợi, Q. Bình Thạnh.</p>
<ul>
  <li>Phương án A: cải tạo/gia cố.</li>
  <li>Phương án B: phá dựng + xây trọn gói.</li>
  <li>So sánh tiến độ, phép và tổng tiền 5–10 năm.</li>
</ul>

<h2>Theo dõi chi phí thực tế trong suốt thi công</h2>
<p>Giữ file Excel: đã thanh toán, khối lượng nghiệm thu, phụ lục phát sinh. <strong>Chi phí xây nhà TP.HCM</strong> kiểm soát được khi bạn soi dòng tiền hàng tháng, không chỉ nhìn tổng ban đầu.</p>

<h2>FAQ chi phí xây nhà</h2>
<details>
  <summary>Nhà 5×20m 4 tầng roughly bao nhiêu?</summary>
  <p>Sàn quy đổi thường ~350–400 m² tùy cách tính mái/ban công. Nhân với 5–6 triệu/m² trọn gói cho khung tham khảo 1,75–2,4 tỷ (chưa nội thất). Cần khảo sát để chốt.</p>
</details>
<details>
  <summary>Có nên giữ dự phòng trong tài khoản riêng?</summary>
  <p>Nên — tránh tiêu hết quỹ dự phòng vào nội thất ngay tháng đầu thi công.</p>
</details>
<details>
  <summary>Sao Khuê có cam kết không phát sinh?</summary>
  <p>Không phát sinh khi không đổi thiết kế/hạng mục đã ký. Đổi ý sẽ lập phụ lục. Bảo hành kết cấu 10 năm với phần thi công của chúng tôi.</p>
</details>

<h2>Nhận dự toán cho lô đất của bạn</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "don-gia-xay-nha-tphcm": {
    title: "Đơn Giá Xây Nhà TP.HCM 2026 — Đọc Đúng Trước Khi So Sánh",
    excerpt:
      "Đơn giá xây nhà TP.HCM theo thô và trọn gói. Cách tính m² sàn quy đổi — Sao Khuê 0909 075 668.",
    metaTitle: "Đơn Giá Xây Nhà TP.HCM 2026 — Đọc Đúng",
    metaDescription:
      "Đơn giá xây nhà TP.HCM: thô 3,55–3,8 triệu/m², trọn gói từ 4,85 triệu. Cách tính sàn quy đổi — 0909 075 668.",
    metaKeywords:
      "đơn giá xây nhà tphcm, đơn giá xây dựng, giá xây nhà theo m2, đơn giá phần thô",
    imageAlt: "Đơn giá xây nhà TP.HCM theo m² sàn",
    content: `<h2>Đơn giá xây nhà TP.HCM: con số nào mới đáng tin?</h2>
<p><strong>Đơn giá xây nhà TP.HCM</strong> chỉ có ý nghĩa khi kèm phạm vi (thô hay trọn gói), chủng loại vật tư và cách tính diện tích sàn quy đổi. Hai nhà thầu báo cùng 5 triệu/m² có thể chênh nhau nửa tỷ vì một bên gồm cửa + chống thấm, một bên không. <strong>Kiến Trúc Sao Khuê</strong> luôn gửi chú thích đơn giá kèm dự toán.</p>
<p>So sánh thêm tại <a href="/bao-gia">bảng báo giá</a> và gói <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a>.</p>

<h2>Khung đơn giá tham khảo 2026</h2>
<table>
  <thead>
    <tr><th>Loại đơn giá</th><th>Khung (đ/m²)</th><th>Áp dụng khi</th></tr>
  </thead>
  <tbody>
    <tr><td>Phần thô tiêu chuẩn</td><td>3,55 – 3,8 triệu</td><td>Nhà phố BTCT, tiếp cận xe hợp lý</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Thô + HT cơ bản</td></tr>
    <tr><td>Trọn gói khá</td><td>5,5 – 6,0 triệu</td><td>Vật tư nâng cấp</td></tr>
    <tr><td>Trọn gói cao cấp</td><td>6,0 – 6,7 triệu+</td><td>Chi tiết &amp; thiết bị tốt</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú đơn giá:</strong> Chưa gồm nội thất gỗ, điều hòa, phí cọc khoan đặc biệt, phụ phí hẻm siêu hẹp.</p>

<h2>Cách tính m² sàn quy đổi (hiểu nhanh)</h2>
<ul>
  <li>Tầng nổi: thường tính 100% diện tích sàn.</li>
  <li>Mái BTCT / sân thượng: theo quy ước hợp đồng (thường 30–50% hoặc thỏa thuận).</li>
  <li>Ban công có mái che: có thể tính một phần.</li>
  <li>Móng: đôi khi quy đổi riêng tùy nhà thầu.</li>
</ul>
<p>Hãy yêu cầu bảng quy đổi in trong phụ lục — đây là chỗ dễ “lệch” nhất khi so đơn giá.</p>

<h2>Khi nào đơn giá thấp lại đắt?</h2>
<ol>
  <li>Thiếu chống thấm, thiếu cửa trong gói.</li>
  <li>Thép, xi măng không ghi mác rõ.</li>
  <li>Thanh toán dồn sớm, nghiệm thu mơ hồ.</li>
  <li>Không bảo hành kết cấu dài hạn.</li>
</ol>
<p>Sao Khuê bảo hành kết cấu <strong>10 năm</strong> cho phần thi công — yếu tố cần đem ra so với đơn giá “rẻ trên giấy”.</p>

<h2>Đơn giá theo tỉnh/thành khác nhau như thế nào?</h2>
<p><strong>Đơn giá xây nhà TP.HCM</strong> thường phản ánh nhân công, vận chuyển đô thị và yêu cầu hoàn thiện cao hơn một số tỉnh. So sánh với Bình Dương/Đồng Nai cần điều chỉnh yếu tố hẻm và giờ thi công. Sao Khuê báo riêng theo địa bàn khảo sát — không áp một bảng giá cho mọi nền đất.</p>
<h3>Hỏi nhà thầu 5 câu trước khi tin đơn giá</h3>
<ol>
  <li>m² tính theo quy ước nào?</li>
  <li>Gồm cửa và chống thấm chưa?</li>
  <li>Mác bê tông / chủng loại thép?</li>
  <li>Phụ phí hẻm ghi ở đâu?</li>
  <li>Bảo hành kết cấu bao lâu?</li>
</ol>
<p>Đủ 5 câu trả lời rõ, bạn đã loại được phần lớn báo giá “ảo”.</p>

<h2>Đơn giá và bảo hành: hai mặt của cùng một quyết định</h2>
<p>Chênh 200.000 đ/m² trên 300 m² là 60 triệu — nhỏ hơn nhiều so với rủi ro kết cấu nếu nhà thầu cắt thép. Khi so <strong>đơn giá xây nhà TP.HCM</strong>, hãy gắn với bảo hành kết cấu (Sao Khuê 10 năm), quy trình nghiệm thu và pháp nhân rõ. Đơn giá chỉ là một dòng trong bảng quyết định.</p>
<ul>
  <li>Đơn giá + phạm vi.</li>
  <li>Quy trình nghiệm thu.</li>
  <li>Bảo hành và địa chỉ văn phòng.</li>
</ul>

<h2>FAQ đơn giá xây nhà</h2>
<details>
  <summary>Đơn giá có thay đổi theo quý không?</summary>
  <p>Có thể điều chỉnh theo biến động vật tư. Giá trong hợp đồng đã ký được giữ theo điều khoản; phụ lục chỉ khi đổi phạm vi hoặc vật tư.</p>
</details>
<details>
  <summary>Nhà trong hẻm có đơn giá riêng không?</summary>
  <p>Thường cộng hệ số vận chuyển/nhân công hoặc dòng phụ phí — không nên so sánh thẳng với nhà mặt tiền đường container vào được.</p>
</details>
<details>
  <summary>Làm sao nhận đơn giá chính xác cho lô của tôi?</summary>
  <p>Gửi khổ đất, số tầng dự kiến, ảnh hẻm và ngân sách. Hotline 0909 075 668 — khảo sát tại 245/8 Bình Lợi hoặc tận nơi.</p>
</details>

<h2>Yêu cầu bảng đơn giá chi tiết</h2>
<p>Liên hệ <strong>0909 075 668</strong> để nhận dự toán theo đúng đơn giá áp dụng thực tế.</p>`,
  },

  "bao-gia-sua-chua-nha-tphcm": {
    title: "Báo Giá Sửa Chữa Nhà TP.HCM — Từng Hạng Mục, Không Gộp Cục",
    excerpt:
      "Báo giá sửa nhà / sửa chữa nhà TP.HCM theo bệnh: thấm, điện nước, sơn. Khảo sát trước khi chốt — 0909 075 668.",
    metaTitle: "Báo Giá Sửa Chữa Nhà TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Báo giá sửa nhà TP.HCM theo hạng mục: thấm, điện, nước, sơn. Gói trọn gói xem trang riêng. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "báo giá sửa chữa nhà tphcm, báo giá sửa nhà, giá sửa nhà, chi phí sửa chữa nhà, sửa nhà hết bao nhiêu",
    imageAlt: "Báo giá sửa chữa nhà tại TP.HCM",
    content: `<h2>Báo giá sửa nhà TP.HCM nên tách theo bệnh, không gộp “một cục”</h2>
<p><strong>Báo giá sửa nhà</strong> (sửa chữa theo hạng mục) minh bạch khi liệt kê từng bệnh: thấm WC, thay đường ống, sơn lại, sửa mái… Gộp một giá trọn nhà dễ thiếu hạng mục. Nếu bạn cần gói đồng bộ cả nhà, xem <a href="/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm">báo giá sửa nhà trọn gói</a>. <strong>Kiến Trúc Sao Khuê</strong> khảo sát hiện trạng rồi mới chốt số.</p>
<p>Dịch vụ: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · <a href="/cai-tao-nha">cải tạo nhà</a> · <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Bảng báo giá theo hạng mục thường gặp</h2>
<table>
  <thead>
    <tr><th>Hạng mục sửa</th><th>Đơn giá / gói</th><th>Thời gian tham khảo</th></tr>
  </thead>
  <tbody>
    <tr><td>Sơn lại nhà phố (trong + ngoài cơ bản)</td><td>90.000 – 180.000 đ/m² tường</td><td>1–3 tuần</td></tr>
    <tr><td>Xử lý thấm WC</td><td>2,5 – 5,5 triệu/m²</td><td>5–12 ngày/khu</td></tr>
    <tr><td>Thay tủ điện + dây khu vực</td><td>15 – 60 triệu</td><td>3–10 ngày</td></tr>
    <tr><td>Sửa mái tôn / xà gồ</td><td>Theo mét / tấm</td><td>2–7 ngày</td></tr>
    <tr><td>Sửa đa hạng mục trước cho thuê</td><td>Báo theo checklist</td><td>2–6 tuần</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý báo giá:</strong> Chi phí tháo dỡ và đổ phế thải trong hẻm nhỏ cần ghi riêng — dễ bị bỏ quên khi so giá.</p>

<h2>Quy trình nhận báo giá nhanh</h2>
<ol>
  <li>Gửi ảnh + mô tả hiện tượng (có video tốt hơn).</li>
  <li>Kỹ sư đến xem (với việc lớn / thấm phức tạp).</li>
  <li>Báo giá từng dòng + vật tư.</li>
  <li>Ký hợp đồng nhỏ / biên bản khối lượng.</li>
  <li>Thi công – nghiệm thu – bảo hành hạng mục.</li>
</ol>

<h2>Mẹo giảm chi phí sửa chữa thật</h2>
<ul>
  <li>Gom việc một lần (sơn + điện) thay vì gọi thợ 4–5 đợt.</li>
  <li>Xử lý thấm trước khi sơn lại trần.</li>
  <li>Chọn vật tư đúng việc, không “rẻ nhất” với khu vực ướt.</li>
</ul>

<h2>Báo giá sửa chữa theo ảnh có giới hạn gì?</h2>
<p>Ảnh giúp ước lượng sơn, thay thiết bị, nhưng khó chẩn đoán thấm ngược, dò ống âm tường hoặc nứt kết cấu. Vì vậy <strong>báo giá sửa chữa nhà TP.HCM</strong> chính thức của Sao Khuê thường chốt sau khảo sát với việc vừa–lớn. Việc nhỏ có thể báo nhanh hơn nếu phạm vi rõ.</p>
<h3>Gói sửa theo mục tiêu sử dụng</h3>
<ul>
  <li>Ở tiếp: ưu tiên an toàn điện và khô ráo.</li>
  <li>Cho thuê: ưu tiên bền, dễ vệ sinh, mặt tiền sạch.</li>
  <li>Bán nhà: ưu tiên “nhìn nhanh” nhưng vẫn xử lý thấm lộ thiên.</li>
</ul>
<p>Nói rõ mục tiêu để kỹ sư không đề xuất gói vượt nhu cầu.</p>

<h2>Báo giá sửa chữa theo mức độ khẩn</h2>
<p>Thấm đang nhỏ xuống nhà dưới, cháy tủ điện hoặc gãy lan can là việc ưu tiên xếp lịch. Sơn lại cho “đẹp tuần sau” có thể xếp sau. Khi gọi <strong>0909 075 668</strong>, hãy nói rõ mức khẩn để điều phối đúng đội. <strong>Báo giá sửa chữa nhà TP.HCM</strong> việc khẩn có thể cao hơn ngoài giờ hoặc cần vật tư sẵn kho.</p>
<p>Giữ hóa đơn vật tư và biên bản nghiệm thu từng lớp chống thấm — cần cho bảo hành và cho lần sửa sau.</p>
<ul>
  <li>Việc khẩn: an toàn + chống nước.</li>
  <li>Việc kế hoạch: thẩm mỹ, nâng cấp tiện nghi.</li>
  <li>Việc gói: gom nhiều hạng mục một lần để giảm chi phí cố định.</li>
</ul>

<h2>Sau sửa chữa: bàn giao và theo dõi bảo hành</h2>
<p>Nhận biên bản hạng mục, hướng dẫn bảo dưỡng và số hotline. Với chống thấm, giữ bằng chứng water test. <strong>Báo giá sửa chữa nhà TP.HCM</strong> đã gồm bảo hành sẽ ghi thời hạn trên giấy — đừng chỉ nhớ lời nói.</p>

<h2>FAQ báo giá sửa chữa</h2>
<details>
  <summary>Sửa nhỏ dưới 20 triệu có cần hợp đồng không?</summary>
  <p>Nên có ít nhất biên bản khối lượng và cam kết bảo hành bằng văn bản/tin nhắn xác nhận để tránh hiểu nhầm phạm vi.</p>
</details>
<details>
  <summary>Báo giá online có chính xác không?</summary>
  <p>Chỉ mang tính định hướng. Thấm và nứt cần xem tận nơi mới báo đúng.</p>
</details>
<details>
  <summary>Có bảo hành sau sửa không?</summary>
  <p>Có theo hạng mục. Với phần gia cố kết cấu thuộc Sao Khuê, áp dụng bảo hành kết cấu tới 10 năm.</p>
</details>

<h2>Nhận báo giá sửa chữa</h2>
<p>Gọi <strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "bao-gia-cai-tao-nha-tphcm": {
    title: "Báo Giá Cải Tạo Nhà TP.HCM — Theo Mức Độ Can Thiệp",
    excerpt:
      "Báo giá cải tạo nhà TP.HCM: làm mới, cải tạo sâu, có gia cố. Dự toán sau khảo sát — 0909 075 668.",
    metaTitle: "Báo Giá Cải Tạo Nhà TP.HCM 2026 | Sao Khuê",
    metaDescription:
      "Báo giá cải tạo nhà TP.HCM theo mức độ: làm mới đến gia cố. Bảng giá tham khảo — 0909 075 668.",
    metaKeywords:
      "báo giá cải tạo nhà tphcm, chi phí cải tạo nhà, giá cải tạo nhà phố, cải tạo nhà hết bao nhiêu",
    imageAlt: "Báo giá cải tạo nhà TP.HCM theo mức độ",
    content: `<h2>Báo giá cải tạo nhà TP.HCM phụ thuộc mức “đụng” kết cấu</h2>
<p><strong>Báo giá cải tạo nhà TP.HCM</strong> thay đổi mạnh giữa sơn-sửa và đập thông gia cố. Đừng lấy giá nhà hàng xóm làm chuẩn nếu mức can thiệp khác nhau. <strong>Kiến Trúc Sao Khuê</strong> phân mức độ trước khi đưa số liệu.</p>
<p>Tham khảo <a href="/bao-gia">công cụ báo giá</a> và dịch vụ <a href="/dich-vu/sua-chua-nha">sửa chữa – cải tạo</a>.</p>

<h2>Bảng báo giá theo mức độ cải tạo</h2>
<table>
  <thead>
    <tr><th>Mức độ</th><th>Đơn giá / tổng gợi ý</th><th>Phạm vi điển hình</th></tr>
  </thead>
  <tbody>
    <tr><td>Làm mới bề mặt</td><td>1,0 – 2,0 triệu/m²</td><td>Sơn, lát, đèn, WC nhẹ</td></tr>
    <tr><td>Cải tạo công năng</td><td>2,0 – 3,5 triệu/m²</td><td>Đổi bếp–WC, điện nước mới</td></tr>
    <tr><td>Cải tạo sâu</td><td>3,5 – 5,0 triệu/m²</td><td>Đập tường, giếng trời, chống thấm lớn</td></tr>
    <tr><td>Có gia cố / nâng tầng</td><td>Báo theo hồ sơ</td><td>Cột–dầm–móng bổ sung</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Mét vuông cải tạo đôi khi chỉ tính phần sàn/tường thực đụng tới, không phải toàn bộ diện tích nhà — hỏi rõ cách đo khi nhận báo giá.</p>

<h2>Ví dụ ngân sách cải tạo nhà phố 4×18m</h2>
<ul>
  <li>Làm mới 2 tầng: khoảng 250–450 triệu.</li>
  <li>Cải tạo công năng toàn nhà: khoảng 0,7–1,3 tỷ.</li>
  <li>Cải tạo sâu + mặt tiền: thường trên 1,2 tỷ tùy vật liệu.</li>
</ul>

<h2>Hạng mục hay bị quên trong báo giá</h2>
<ol>
  <li>Chi phí ở tạm / kho đồ.</li>
  <li>Phế thải và vệ sinh cuối.</li>
  <li>Xin phép (nếu đổi kết cấu).</li>
  <li>Chống mối, xử lý ẩm nền cũ.</li>
</ol>

<h2>Cách đọc báo giá cải tạo không bị “lạc đơn vị”</h2>
<p>Một số báo giá tính theo m² sàn nhà, số khác theo m² tường/sàn thực đụng. Khi nhận <strong>báo giá cải tạo nhà TP.HCM</strong>, hãy yêu cầu cột “khối lượng” và “đơn giá”. Thiếu khối lượng thì không so sánh được giữa các nhà thầu.</p>
<h3>Kịch bản cải tạo theo ngân sách</h3>
<ol>
  <li>Dưới 300 triệu: làm mới WC–bếp–sơn, xử lý thấm điểm.</li>
  <li>300–800 triệu: đổi công năng một phần, điện nước mới.</li>
  <li>Trên 800 triệu: cải tạo sâu hoặc có gia cố — cần hồ sơ kỹ thuật.</li>
</ol>
<p>Sao Khuê tư vấn chọn kịch bản trước khi vẽ chi tiết để khớp khả năng chi trả.</p>

<h2>Vật tư cải tạo: giữ, thay hay nâng cấp?</h2>
<p>Cửa còn tốt có thể giữ để giảm <strong>báo giá cải tạo nhà TP.HCM</strong>. Gạch WC đã ngấm keo hỏng thì thay cả hệ — giữ lại chỉ để rồi thấm lại. Sơn tường trong nhà thường nên làm mới toàn mảng thay vì vá loang lỗ. Kỹ sư Sao Khuê sẽ đánh dấu trên sơ đồ nhà: giữ / thay / nâng cấp để bạn thấy tiền đi đâu.</p>
<ol>
  <li>Giữ: cửa, lan can còn chắc và thẩm mỹ chấp nhận được.</li>
  <li>Thay: ống nước cũ, ổ cắm lỏng, lớp chống thấm hết tuổi.</li>
  <li>Nâng cấp: mặt tiền, bếp, hệ đèn khi ngân sách dư sau phần kỹ thuật.</li>
</ol>

<h2>Cải tạo từng phần theo dòng tiền</h2>
<p>Nếu chưa đủ ngân sách làm một lần, có thể chia: năm nay WC–điện–thấm, năm sau bếp–mặt tiền. <strong>Báo giá cải tạo nhà TP.HCM</strong> theo giai đoạn cần bản đồ ưu tiên để không phá phần đã làm. Sao Khuê lập lộ trình 2–3 đợt nếu bạn yêu cầu.</p>

<h2>FAQ báo giá cải tạo</h2>
<details>
  <summary>Cải tạo có rẻ hơn xây mới không?</summary>
  <p>Thường có nếu khung còn tốt. Nếu phải gia cố nặng + đập gần hết, tổng chi phí có thể tiệm cận xây mới — lúc đó Sao Khuê sẽ nói thẳng.</p>
</details>
<details>
  <summary>Có báo giá trong ngày không?</summary>
  <p>Gói nhỏ có thể ước lượng sau khi xem ảnh. Gói cải tạo sâu cần khảo sát tận nơi mới báo chính xác.</p>
</details>
<details>
  <summary>Thanh toán cải tạo thế nào?</summary>
  <p>Theo giai đoạn: tạm ứng – sau tháo dỡ/gia cố – hoàn thiện – bàn giao. Không yêu cầu 100% trước.</p>
</details>

<h2>Đặt lịch lập báo giá cải tạo</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh · Bảo hành kết cấu 10 năm với phần gia cố thuộc phạm vi thi công.</p>`,
  },

  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm": {
    title: "Công Ty Xây Dựng Nhà Phố Uy Tín TP.HCM — Tiêu Chí Chọn Đúng",
    excerpt:
      "Công ty xây dựng nhà phố uy tín TP.HCM: hợp đồng rõ, bảo hành 10 năm, công trình thật. Sao Khuê — 0909 075 668.",
    metaTitle: "Công Ty Xây Nhà Phố Uy Tín TP.HCM | Sao Khuê",
    metaDescription:
      "Chọn công ty xây dựng nhà phố uy tín TP.HCM: tiêu chí hợp đồng, bảo hành, tham quan công trình. 0909 075 668.",
    metaKeywords:
      "công ty xây dựng nhà phố uy tín tphcm, nhà thầu nhà phố, xây nhà phố tphcm, kiến trúc sao khuê",
    imageAlt: "Công ty xây dựng nhà phố uy tín TP.HCM — Kiến Trúc Sao Khuê",
    content: `<h2>Công ty xây dựng nhà phố uy tín TP.HCM nhìn vào đâu?</h2>
<p>Tìm <strong>công ty xây dựng nhà phố uy tín TP.HCM</strong> đừng chỉ xem fanpage đẹp. Cần hợp đồng chi tiết, tiến độ thanh toán hợp lý, công trình đã làm có thể thăm, và bảo hành kết cấu rõ ràng. <strong>Kiến Trúc Sao Khuê</strong> làm nhà phố nội thành nhiều năm, văn phòng tại 245/8 Bình Lợi, Q. Bình Thạnh — bảo hành kết cấu <strong>10 năm</strong>.</p>
<p>Triển khai qua <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> hoặc xem <a href="/bao-gia">báo giá</a>.</p>

<h2>Checklist 8 tiêu chí trước khi ký</h2>
<ol>
  <li>Pháp nhân, địa chỉ văn phòng kiểm chứng được.</li>
  <li>Hợp đồng có danh mục vật tư và bản vẽ đính kèm.</li>
  <li>Không đòi thanh toán gần hết trước khi có móng.</li>
  <li>Có giám sát/nghiệm thu cốt thép trước đổ bê tông.</li>
  <li>Cam kết bảo hành kết cấu dài hạn.</li>
  <li>Biện pháp an toàn và hạn chế ảnh hưởng hàng xóm.</li>
  <li>Tiến độ tuần/tháng cập nhật được.</li>
  <li>Xử lý phát sinh bằng phụ lục, không miệng.</li>
</ol>

<h2>Bảng so sánh cách thuê nhà thầu</h2>
<table>
  <thead>
    <tr><th>Hình thức</th><th>Ưu</th><th>Nhược</th><th>Phù hợp</th></tr>
  </thead>
  <tbody>
    <tr><td>Công ty trọn gói</td><td>Một đầu mối, bảo hành tập trung</td><td>Giá tổng cao hơn thuê lẻ</td><td>Gia đình bận, lần đầu xây</td></tr>
    <tr><td>Đội thợ quen</td><td>Linh hoạt</td><td>Khó truy bảo hành, rủi ro pháp lý</td><td>Chủ nhà am hiểu giám sát</td></tr>
    <tr><td>Thầu lại nhiều lớp</td><td>Giá chào thấp</td><td>Dễ mất kiểm soát chất lượng</td><td>Không khuyến nghị nhà phố</td></tr>
  </tbody>
</table>

<h2>Vì sao nhà phố cần nhà thầu am hiểu đô thị?</h2>
<p>Hẻm nhỏ, giờ đổ bê tông hạn chế, tường chung, xin phép theo từng quận — kinh nghiệm hiện trường quan trọng hơn brochure. Sao Khuê ưu tiên biện pháp thi công thực tế trước khi hứa “nhanh nhất – rẻ nhất”.</p>

<h2>Tham quan công trình: nên xem những gì?</h2>
<p>Khi đánh giá <strong>công ty xây dựng nhà phố uy tín TP.HCM</strong>, hãy xem công trình đang làm (không chỉ ảnh đã edit): độ thẳng tường, vệ sinh cốt thép trước đổ, cách che chắn hàng xóm, và thái độ tổ trưởng công trường. Hỏi chủ nhà cũ về phát sinh và bảo hành nếu được giới thiệu.</p>
<h3>Cam kết của Sao Khuê trên giấy</h3>
<ul>
  <li>Hợp đồng + phụ lục vật tư.</li>
  <li>Bảo hành kết cấu 10 năm.</li>
  <li>Địa chỉ văn phòng cố định: 245/8 Bình Lợi, Bình Thạnh.</li>
  <li>Hotline kỹ thuật 0909 075 668.</li>
</ul>
<p>Uy tín là sự nhất quán giữa lời chào và điều khoản hợp đồng — không phải slogan.</p>

<h2>Hợp đồng xây nhà phố: những điều khoản đừng bỏ qua</h2>
<p>Ngoài đơn giá, hãy đọc điều khoản nghiệm thu, bảo hành, phạt chậm (nếu có), và cách xử lý phát sinh. <strong>Công ty xây dựng nhà phố uy tín TP.HCM</strong> sẵn sàng giải thích từng điểm thay vì đẩy bạn ký nhanh. Sao Khuê khuyến khích chủ nhà mang hợp đồng về đọc kỹ trước khi đặt cọc.</p>
<ul>
  <li>Phạm vi công việc đính kèm bản vẽ.</li>
  <li>Danh mục vật tư có thể thay tương đương khi thiếu hàng — có chữ ký hai bên.</li>
  <li>Bảo hành kết cấu 10 năm ghi rõ điều kiện.</li>
  <li>Địa chỉ thanh toán trùng pháp nhân.</li>
</ul>

<h2>Sau bàn giao: dịch vụ bảo hành và bảo trì</h2>
<p>Nhà thầu uy tín còn lại sau ngày cắt bánh. <strong>Công ty xây dựng nhà phố uy tín TP.HCM</strong> phải nghe máy khi có thấm bảo hành hoặc nứt cần xem. Sao Khuê tiếp nhận qua 0909 075 668 và hỗ trợ tại 245/8 Bình Lợi, Bình Thạnh.</p>

<h2>FAQ chọn công ty xây dựng</h2>
<details>
  <summary>Có nên chọn đơn vị báo giá thấp nhất?</summary>
  <p>Chỉ khi cùng phạm vi và cùng vật tư. Giá thấp bất thường thường cắt thép, chống thấm hoặc nhân công tay nghề.</p>
</details>
<details>
  <summary>Làm sao kiểm tra uy tín Sao Khuê?</summary>
  <p>Tham quan công trình đang/đã làm, xem hợp đồng mẫu, gọi hotline 0909 075 668 và đến văn phòng Bình Lợi.</p>
</details>
<details>
  <summary>Công ty có nhận sửa–cải tạo nhà phố không?</summary>
  <p>Có. Nhiều nhà phố không cần xây mới — xem dịch vụ sửa chữa nhà trên website.</p>
</details>

<h2>Liên hệ tư vấn</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-gia-re-tphcm": {
    title: "Xây Nhà Giá Rẻ TP.HCM — Tiết Kiệm Đúng Chỗ, Không Cắt Kết Cấu",
    excerpt:
      "Xây nhà giá rẻ TP.HCM: tối ưu thiết kế & vật tư hoàn thiện, giữ an toàn kết cấu. Tư vấn 0909 075 668.",
    metaTitle: "Xây Nhà Giá Rẻ TP.HCM — Tiết Kiệm Đúng",
    metaDescription:
      "Xây nhà giá rẻ TP.HCM: cắt giảm hạng mục nào an toàn, ngân sách mẫu. Sao Khuê 0909 075 668.",
    metaKeywords:
      "xây nhà giá rẻ tphcm, xây nhà tiết kiệm, nhà phố giá rẻ, tối ưu chi phí xây nhà",
    imageAlt: "Xây nhà giá rẻ TP.HCM — tối ưu ngân sách an toàn",
    content: `<h2>Xây nhà giá rẻ TP.HCM: rẻ vẫn phải đứng vững</h2>
<p><strong>Xây nhà giá rẻ TP.HCM</strong> là mục tiêu hợp lý nếu bạn cắt đúng chỗ: đơn giản mặt đứng, giảm đá tự nhiên, chọn gói hoàn thiện vừa đủ — <em>không</em> cắt thép, không bỏ chống thấm, không thuê nhà thầu không bảo hành. <strong>Kiến Trúc Sao Khuê</strong> tư vấn tối ưu ngân sách trên nguyên tắc an toàn.</p>
<p>Tham khảo <a href="/bao-gia">báo giá</a> và <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a>.</p>

<h2>Những chỗ nên tiết kiệm</h2>
<ul>
  <li>Mặt tiền ít chi tiết đắp nổi.</li>
  <li>Gạch ốp tầm trung, sơn tốt nhưng không siêu cao cấp.</li>
  <li>Trần thạch cao đơn giản.</li>
  <li>Thiết bị vệ sinh phổ thông thương hiệu rõ.</li>
  <li>Thiết kế mặt bằng ít “góc chết” để giảm diện tích sàn lãng phí.</li>
</ul>

<h2>Những chỗ không nên tiết kiệm</h2>
<ol>
  <li>Móng và kết cấu BTCT.</li>
  <li>Chống thấm khu ướt &amp; sân thượng.</li>
  <li>Hệ điện đúng tải.</li>
  <li>Giấy phép và hồ sơ kỹ thuật.</li>
</ol>

<h2>Bảng ngân sách tiết kiệm mẫu</h2>
<table>
  <thead>
    <tr><th>Hạng mục</th><th>Phương án tiết kiệm</th><th>Rủi ro nếu cắt quá tay</th></tr>
  </thead>
  <tbody>
    <tr><td>Kết cấu</td><td>Thiết kế đúng tải, không “phóng”</td><td>Nứt, lún, nguy hiểm</td></tr>
    <tr><td>Hoàn thiện</td><td>Gói tiêu chuẩn 4,85–5,5 triệu/m²</td><td>Thẩm mỹ vừa phải — chấp nhận được</td></tr>
    <tr><td>Mặt dựng</td><td>Sơn + điểm nhấn gạch</td><td>Ít “sang” nhưng bền</td></tr>
    <tr><td>Nội thất</td><td>Làm theo giai đoạn 2</td><td>Chậm tiện nghi, không ảnh hưởng khung nhà</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú giá:</strong> “Giá rẻ” trong hẻm hẹp đôi khi đắt hơn mặt tiền vì vận chuyển — hãy tính cả phụ phí thực tế.</p>

<h2>Lộ trình xây nhà tiết kiệm theo 2 giai đoạn</h2>
<p>Giai đoạn 1: thô + hoàn thiện đủ ở (sơn, lát, WC, bếp tối giản). Giai đoạn 2 (6–18 tháng sau): nâng cấp mặt tiền, tủ bếp, đá ốp. Cách này giúp <strong>xây nhà giá rẻ TP.HCM</strong> mà vẫn giữ chất lượng khung nhà. Lưu ý chống thấm và điện phải làm đúng ngay giai đoạn 1 — không để “tiết kiệm” thành nợ kỹ thuật.</p>
<h3>Thiết kế tiết kiệm diện tích sàn</h3>
<p>Giảm hành lang thừa, chồng WC, hạn chế phòng khách quá lớn so với nhu cầu thực. Mỗi m² sàn tiết kiệm được nhân với đơn giá 5 triệu là một khoản lớn trên giấy.</p>

<h2>Thi công tiết kiệm nhưng vẫn kiểm soát chất lượng</h2>
<p>Yêu cầu nhà thầu gửi ảnh nghiệm thu thép, hóa đơn xi măng–thép theo đợt, và cho bạn xem mẫu vật tư trước khi ốp diện rộng. <strong>Xây nhà giá rẻ TP.HCM</strong> thất bại khi chủ nhà chỉ nhìn tổng giá mà không có bằng chứng thi công. Sao Khuê duy trì quy trình nghiệm thu từng giai đoạn kể cả gói tiêu chuẩn.</p>
<p>Tránh mua vật tư “rẻ không rõ nguồn” cho kết cấu. Tiết kiệm hãy để ở lớp hoàn thiện có thể thay sau.</p>
<ul>
  <li>Ưu tiên mác bê tông đúng thiết kế.</li>
  <li>Không giảm số thanh thép so với bản vẽ.</li>
  <li>Chống thấm khu ướt làm đủ lớp.</li>
</ul>

<h2>Ví dụ cắt giảm hạng mục thẩm mỹ an toàn</h2>
<p>Bỏ đá tự nhiên mặt tiền, giảm phào chỉ, chọn gạch 60×60 phổ thông, để trống một phần tủ âm — có thể tiết kiệm rõ trên giấy. <strong>Xây nhà giá rẻ TP.HCM</strong> vẫn giữ nguyên chống thấm và hệ điện. Đó là ranh giới Sao Khuê không thương lượng.</p>

<h2>FAQ xây nhà giá rẻ</h2>
<details>
  <summary>Có xây nhà 1 tỷ ở TP.HCM được không?</summary>
  <p>Phụ thuộc diện tích sàn. Nhà nhỏ 1–2 tầng phần thô + HT tối giản có thể tiếp cận; nhà 4–5 tầng sàn lớn thì 1 tỷ thường không đủ nếu tính đủ pháp lý và hoàn thiện.</p>
</details>
<details>
  <summary>Xây thô trước, hoàn thiện sau có tiết kiệm không?</summary>
  <p>Có thể giãn dòng tiền. Cần chống thấm và bảo vệ phần thô tốt kẻo chờ lâu bị xuống cấp.</p>
</details>
<details>
  <summary>Sao Khuê có gói tiết kiệm không?</summary>
  <p>Có gói tiêu chuẩn và tư vấn cắt giảm hạng mục thẩm mỹ. Bảo hành kết cấu vẫn 10 năm — không đổi vì gói giá.</p>
</details>

<h2>Tư vấn tối ưu ngân sách</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-2-tang-tphcm": {
    title: "Xây Nhà 2 Tầng TP.HCM — Công Năng Gọn, Chi Phí Kiểm Soát",
    excerpt:
      "Xây nhà 2 tầng TP.HCM: mặt bằng mẫu, chi phí tham khảo, lưu ý hẻm. Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà 2 Tầng TP.HCM — Gọn & Đủ Ở",
    metaDescription:
      "Xây nhà 2 tầng TP.HCM: bố trí công năng, đơn giá, thời gian thi công. Hotline 0909 075 668.",
    metaKeywords:
      "xây nhà 2 tầng tphcm, nhà phố 2 tầng, chi phí nhà 2 tầng, mẫu nhà 2 tầng",
    imageAlt: "Xây nhà 2 tầng tại TP.HCM",
    content: `<h2>Xây nhà 2 tầng TP.HCM phù hợp gia đình nào?</h2>
<p><strong>Xây nhà 2 tầng TP.HCM</strong> hợp hộ 3–5 người, ngân sách vừa, hoặc đất nhỏ muốn giảm tải móng so với nhà cao tầng. Vẫn cần thiết kế lấy sáng vì nhà ống dễ tối. <strong>Kiến Trúc Sao Khuê</strong> tối ưu tầng trệt (khách–bếp) và tầng 1 (ngủ–WC) trước khi trang trí mặt tiền.</p>
<p>Xem <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a> · <a href="/bao-gia">tính chi phí</a>.</p>

<h2>Gợi ý mặt bằng nhà 2 tầng mặt tiền 4–5m</h2>
<ul>
  <li>Trệt: khách + bếp + WC hoặc để xe máy.</li>
  <li>Lầu 1: 2–3 phòng ngủ + WC.</li>
  <li>Giếng trời nhỏ gần cầu thang để sáng giữa nhà.</li>
  <li>Sân thượng nhẹ / mái chống nóng tùy ngân sách.</li>
</ul>

<h2>Bảng chi phí xây nhà 2 tầng tham khảo</h2>
<table>
  <thead>
    <tr><th>Quy mô sàn quy đổi</th><th>Gói tiêu chuẩn</th><th>Gói khá</th></tr>
  </thead>
  <tbody>
    <tr><td>~120 m²</td><td>~0,58 – 0,66 tỷ</td><td>~0,66 – 0,72 tỷ</td></tr>
    <tr><td>~160 m²</td><td>~0,78 – 0,88 tỷ</td><td>~0,88 – 0,96 tỷ</td></tr>
    <tr><td>~200 m²</td><td>~0,97 – 1,10 tỷ</td><td>~1,10 – 1,20 tỷ</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Chưa gồm nội thất và phụ phí hẻm. Đơn giá gốc khoảng 4,85–6,0 triệu/m² tùy gói.</p>

<h2>Thời gian &amp; giấy phép</h2>
<p>Nhà 2 tầng thường nhanh hơn nhà 4–5 tầng: khoảng 4–6 tháng tùy mặt bằng. Vẫn cần giấy phép đúng quy định — đừng chủ quan vì “chỉ 2 tầng”.</p>

<h2>Nhà 2 tầng có sân thượng: nên hay không?</h2>
<p>Sân thượng giúp phơi đồ và đặt máy, nhưng cần chống thấm và lan can an toàn. Với <strong>xây nhà 2 tầng TP.HCM</strong>, sân thượng nhẹ (không chất đồ quá tải) là hợp lý. Nếu muốn làm phòng tum, phải tính vào phép và kết cấu từ đầu.</p>
<h3>Vật liệu phù hợp nhà thấp tầng</h3>
<p>Mái bằng BTCT dễ chống thấm sân thượng; mái tôn tiết kiệm hơn nhưng ồn mưa — cân nhắc khu ngủ sát mái. Cửa nhôm kính phổ thông đủ dùng; không cần hệ cao cấp nếu ngân sách eo hẹp.</p>
<p>Khảo sát: 0909 075 668.</p>

<h2>Nhà 2 tầng kết hợp cho thuê tầng trệt</h2>
<p>Nhiều hộ tại TP.HCM để tầng trệt kinh doanh/cho thuê và ở tầng trên. Khi <strong>xây nhà 2 tầng TP.HCM</strong>, hãy tách đồng hồ điện nếu cần, thiết kế lối đi riêng và WC tầng trệt độc lập. Cách âm trần trệt rất đáng đầu tư nếu ở trên.</p>
<p>Đơn giá xây không đổi nhiều, nhưng công năng ME và cửa đi phải tính từ đầu — cải tạo sau đắt hơn. Liên hệ 0909 075 668 để xem phương án mặt bằng.</p>
<ol>
  <li>Lối vào ở riêng / thuê riêng.</li>
  <li>WC và bếp thuê đủ dùng.</li>
  <li>Khu để xe không chắn lối thoát hiểm.</li>
</ol>

<h2>Nhà 2 tầng trên đất 4×12–4×16</h2>
<p>Đất ngắn cần mặt bằng tinh gọn: hạn chế phòng khách quá sâu, ưu tiên giếng trời nhỏ và WC chồng. <strong>Xây nhà 2 tầng TP.HCM</strong> trên đất ngắn vẫn ở tốt nếu thiết kế không tham phòng. Khảo sát: 0909 075 668.</p>
<ul>
  <li>Trệt: khách–bếp liên thông vừa đủ.</li>
  <li>Lầu: 2 ngủ + WC.</li>
  <li>Mái: chống nóng và thoát nước rõ.</li>
</ul>

<h2>FAQ nhà 2 tầng</h2>
<details>
  <summary>Sau này muốn nâng thành 3 tầng có được không?</summary>
  <p>Nên thiết kế móng dư tải từ đầu nếu có kế hoạch. Nâng tầng sau bắt buộc đánh giá lại — xem bài nâng tầng nhà phố.</p>
</details>
<details>
  <summary>Nhà 2 tầng có cần thang máy không?</summary>
  <p>Thường không. Ưu tiên cầu thang êm và chiếu sáng tốt.</p>
</details>
<details>
  <summary>Có xây 2 tầng trong hẻm 3m được không?</summary>
  <p>Được, phổ biến ở TP.HCM. Cần biện pháp vận chuyển vật liệu và chống ồn hàng xóm.</p>
</details>

<h2>Nhận tư vấn nhà 2 tầng</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh · Bảo hành kết cấu 10 năm.</p>`,
  },

  "xay-nha-3-tang-tphcm": {
    title: "Xây Nhà 3 Tầng TP.HCM — Cân Bằng Diện Tích Ở & Ngân Sách",
    excerpt:
      "Xây nhà 3 tầng TP.HCM: bố trí 3 thế hệ, chi phí sàn, lưu ý kết cấu. Hotline 0909 075 668.",
    metaTitle: "Xây Nhà 3 Tầng TP.HCM — Đủ Cho 3 Thế Hệ",
    metaDescription:
      "Xây nhà 3 tầng TP.HCM: công năng, đơn giá tham khảo, tiến độ. Sao Khuê 0909 075 668.",
    metaKeywords:
      "xây nhà 3 tầng tphcm, nhà phố 3 tầng, chi phí nhà 3 tầng, mẫu nhà 3 tầng tphcm",
    imageAlt: "Xây nhà 3 tầng tại TP.HCM",
    content: `<h2>Xây nhà 3 tầng TP.HCM: lựa chọn “vừa đủ” phổ biến nhất</h2>
<p><strong>Xây nhà 3 tầng TP.HCM</strong> đáp ứng đa số gia đình đa thế hệ: trệt tiếp khách/để xe, lầu 1–2 dành ngủ và sinh hoạt. Cao hơn nữa tăng chi phí kết cấu và hoàn thiện rõ rệt. <strong>Kiến Trúc Sao Khuê</strong> hay đề xuất 3 tầng + sân thượng nhẹ khi đất 4×16–5×20m.</p>
<p><a href="/dich-vu/xay-nha-tron-goi">Xây trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Gợi ý phân tầng công năng</h2>
<ul>
  <li>Trệt: gara xe máy/ô tô nhỏ + khách + bếp hoặc bếp sau.</li>
  <li>Lầu 1: phòng sinh hoạt chung + 1 ngủ.</li>
  <li>Lầu 2: phòng ngủ master + ngủ con.</li>
  <li>Sân thượng: phơi đồ, máy nước nóng năng lượng mặt trời (nếu có).</li>
</ul>

<h2>Bảng chi phí nhà 3 tầng tham khảo</h2>
<table>
  <thead>
    <tr><th>Sàn quy đổi</th><th>Trọn gói tiêu chuẩn</th><th>Trọn gói khá</th></tr>
  </thead>
  <tbody>
    <tr><td>220 m²</td><td>~1,07 – 1,21 tỷ</td><td>~1,21 – 1,32 tỷ</td></tr>
    <tr><td>280 m²</td><td>~1,36 – 1,54 tỷ</td><td>~1,54 – 1,68 tỷ</td></tr>
    <tr><td>320 m²</td><td>~1,55 – 1,76 tỷ</td><td>~1,76 – 1,92 tỷ</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Địa chất yếu hoặc hẻm &lt; 2,5m có thể cộng thêm khoản móng/vận chuyển ngoài bảng.</p>

<h2>Lưu ý kỹ thuật nhà 3 tầng</h2>
<ol>
  <li>Cầu thang chiếm diện tích — đặt lệch để lấy sáng giữa nhà.</li>
  <li>WC mỗi tầng giảm va chạm giờ cao điểm.</li>
  <li>Chống thấm sân thượng làm ngay khi đổ mái.</li>
  <li>Điện dự phòng cho điều hòa nhiều phòng.</li>
</ol>

<h2>Nhà 3 tầng và bài toán người cao tuổi</h2>
<p>Khi thiết kế <strong>xây nhà 3 tầng TP.HCM</strong> cho gia đình có ông bà, nên bố trí phòng ngủ và WC tầng trệt hoặc lửng thấp, cầu thang tay vịn chắc, chiếu sáng tốt. Thang máy nhỏ chỉ nên cân nhắc nếu ngân sách và diện tích cho phép từ giai đoạn móng.</p>
<h3>Điện nước cho nhà 3 tầng</h3>
<ul>
  <li>Tủ điện chia mạch theo tầng.</li>
  <li>Máy nước nóng vị trí gần điểm dùng chính.</li>
  <li>Ống cấp–thoát chồng trục để dễ bảo trì.</li>
</ul>
<p>Làm đúng kỹ thuật ME sớm giảm đục phá khi hoàn thiện.</p>

<h2>Chọn mái và sân thượng cho nhà 3 tầng</h2>
<p>Mái bằng thuận làm sân thượng phơi đồ và đặt máy; mái dốc/mái Thái đẹp hơn ở một số khu nhưng giảm diện tích sử dụng mái. Với <strong>xây nhà 3 tầng TP.HCM</strong>, hãy quyết mái cùng lúc với mặt đứng để kết cấu đỡ chuyển giữa chừng.</p>
<ul>
  <li>Sân thượng: chống thấm + lan can + ổ cắm ngoại thất.</li>
  <li>Mái tôn: cách nhiệt và chống ồn mưa.</li>
  <li>Tum thang: che mưa và chứa máy.</li>
</ul>
<p>Bảo hành kết cấu 10 năm áp dụng phần khung Sao Khuê thi công tại 245/8 Bình Lợi hỗ trợ sau bàn giao.</p>

<h2>Dự phòng chi phí nội thất sau khi xây 3 tầng</h2>
<p>Khung nhà xong chưa phải hết tiền. Điều hòa, tủ bếp, giường tủ có thể chiếm 15–30% thêm. Khi lập ngân sách <strong>xây nhà 3 tầng TP.HCM</strong>, tách quỹ nội thất để không cắt vật tư hoàn thiện xây dựng.</p>
<ol>
  <li>Quỹ xây + hoàn thiện.</li>
  <li>Quỹ nội thất.</li>
  <li>Quỹ dự phòng phát sinh.</li>
</ol>

<h2>FAQ nhà 3 tầng</h2>
<details>
  <summary>Nhà 3 tầng xây bao lâu?</summary>
  <p>Thường 5–7 tháng với mặt bằng thuận. Mưa kéo dài hoặc phép chậm sẽ đội tiến độ.</p>
</details>
<details>
  <summary>Có nên làm tầng tum không?</summary>
  <p>Tầng tum hữu ích để máy và phơi đồ nhưng tính vào quy hoạch/phép — hỏi kỹ trước khi thiết kế.</p>
</details>
<details>
  <summary>Bảo hành thế nào?</summary>
  <p>Sao Khuê bảo hành kết cấu 10 năm cho phần thi công theo hợp đồng.</p>
</details>

<h2>Đặt khảo sát đất xây 3 tầng</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-trong-hem-tphcm": {
    title: "Xây Nhà Trong Hẻm TP.HCM — Biện Pháp Thi Công & Chi Phí Phát Sinh",
    excerpt:
      "Xây nhà trong hẻm TP.HCM: vận chuyển vật liệu, chống ồn, phụ phí thực tế. Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Trong Hẻm TP.HCM — Chi Phí Thật",
    metaDescription:
      "Xây nhà trong hẻm TP.HCM: xe không vào được xử lý sao, phụ phí, tiến độ. Gọi 0909 075 668.",
    metaKeywords:
      "xây nhà trong hẻm tphcm, xây nhà hẻm nhỏ, thi công nhà trong hẻm, chi phí xây nhà hẻm",
    imageAlt: "Xây nhà trong hẻm nhỏ tại TP.HCM",
    content: `<h2>Xây nhà trong hẻm TP.HCM: giá mặt tiền không áp dụng nguyên si</h2>
<p><strong>Xây nhà trong hẻm TP.HCM</strong> đối mặt hạn chế xe tải, giờ đổ bê tông, tập kết vật liệu và phản ánh hàng xóm. Đơn giá/m² quảng cáo trên đường lớn thường thiếu phụ phí “bốc vác”. <strong>Kiến Trúc Sao Khuê</strong> khảo sát bề ngang hẻm trước khi chốt dự toán.</p>
<p>Gói thi công: <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Phân loại hẻm &amp; ảnh hưởng thi công</h2>
<ul>
  <li><strong>Hẻm ≥ 4m:</strong> xe nhỏ vào được — phát sinh ít.</li>
  <li><strong>Hẻm 3–4m:</strong> tập kết đầu hẻm, bốc tay một đoạn.</li>
  <li><strong>Hẻm &lt; 3m / hẻm cụt:</strong> chi phí nhân công vận chuyển tăng rõ, tiến độ chậm hơn.</li>
</ul>

<h2>Bảng phụ phí &amp; đơn giá liên quan hẻm</h2>
<table>
  <thead>
    <tr><th>Tình huống</th><th>Ảnh hưởng chi phí</th><th>Ảnh hưởng tiến độ</th></tr>
  </thead>
  <tbody>
    <tr><td>Bốc vác vật liệu đường dài</td><td>+3–12% tùy quãng</td><td>Chậm ngày đổ bê tông</td></tr>
    <tr><td>Máy bơm bê tông xa</td><td>Phí bơm + đường ống</td><td>Phụ thuộc giờ cho phép</td></tr>
    <tr><td>Hạn chế thi công đêm/ồn</td><td>Tăng ca ngày</td><td>Kéo dài tuần</td></tr>
    <tr><td>Thuê kho trung chuyển</td><td>Thuê tháng</td><td>Ổn định hơn nếu có</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Hãy yêu cầu nhà thầu ghi phụ phí hẻm thành dòng riêng — dễ kiểm soát hơn cộng ẩn vào đơn giá/m².</p>

<h2>Biện pháp giảm ồn–bụi với hàng xóm</h2>
<ol>
  <li>Thông báo lịch đổ bê tông trước.</li>
  <li>Che chắn bụi, tưới nước khi cắt gạch.</li>
  <li>Không tập kết chiếm hết lòng hẻm.</li>
  <li>Vệ sinh đoạn hẻm cuối ngày.</li>
</ol>

<h2>An toàn giàn giáo và lối đi trong hẻm hẹp</h2>
<p><strong>Xây nhà trong hẻm TP.HCM</strong> phải giữ lối đi tối thiểu cho người và xe máy hàng xóm. Giàn giáo không được chiếm hết mặt cắt hẻm. Sao Khuê yêu cầu đội thi công thu gọn vật tư cuối ngày, có đèn cảnh báo nếu có hố móng gần lối đi.</p>
<h3>Đổ bê tông trong hẻm: chọn bơm hay tạ?</h3>
<p>Bơm bê tông phù hợp khi xe bơm đứng được đầu hẻm và đường ống không quá dài gây tắc. Nếu không khả thi, phải có phương án vận chuyển thủ công kiểm soát mác và thời gian đông kết — không đổ bê tông “rã” vì chờ quá lâu.</p>

<h2>Lịch đổ bê tông và thỏa thuận cộng đồng trong hẻm</h2>
<p>Hẻm đông cần thông báo trước ngày đổ sàn. Xe bơm đứng đầu hẻm có thể gây kẹt tạm — nên chọn khung giờ ít xe. Đây là chi phí “xã hội” của <strong>xây nhà trong hẻm TP.HCM</strong> ít được ghi trên báo giá mạng nhưng ảnh hưởng tiến độ thật.</p>
<p>Sao Khuê lập lịch tuần và gửi chủ nhà để chia sẻ với hàng xóm. Giữ mối quan hệ tốt giảm khiếu nại làm dừng thi công.</p>
<ul>
  <li>Không tập kết vật tư chiếm hết lối đi.</li>
  <li>Vệ sinh đoạn hẻm cuối ngày.</li>
  <li>Che chắn khi cắt gạch, trộn vữa.</li>
</ul>

<h2>Bảo hiểm và an toàn lao động trong hẻm</h2>
<p>Công trường hẹp dễ tai nạn giao thông nhỏ và va chạm hàng xóm. Nhà thầu chuyên nghiệp có biện pháp bảo hộ, rào chắn và quy trình. Đây là phần “không nhìn thấy” trong giá <strong>xây nhà trong hẻm TP.HCM</strong> nhưng rất đáng trả.</p>

<h2>FAQ xây nhà trong hẻm</h2>
<details>
  <summary>Hẻm 2m còn xây được nhà phố không?</summary>
  <p>Vẫn xây được nhưng chi phí vận chuyển và thời gian tăng. Cần biện pháp an toàn giàn giáo và lối thoát hiểm tạm.</p>
</details>
<details>
  <summary>Có nên chọn bê tông tươi hay trộn thủ công?</summary>
  <p>Ưu tiên bê tông tươi + bơm nếu tiếp cận được; trộn thủ công khó đồng đều và chậm. Sao Khuê ưu tiên phương án đảm bảo mác thiết kế.</p>
</details>
<details>
  <summary>Bảo hành kết cấu có khác nhà mặt tiền?</summary>
  <p>Không — vẫn 10 năm với phần Sao Khuê thi công, miễn đúng quy trình và không tự ý đục phá kết cấu sau bàn giao.</p>
</details>

<h2>Khảo sát hẻm trước khi báo giá</h2>
<p>Gửi ảnh bề ngang hẻm + vị trí nhà. Hotline <strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xin-giay-phep-xay-dung-tphcm": {
    title: "Xin Giấy Phép Xây Dựng TP.HCM — Hồ Sơ & Lưu Ý Theo Hiện Trạng",
    excerpt:
      "Xin giấy phép xây dựng TP.HCM: thành phần hồ sơ, nhà cải tạo/nâng tầng. Hỗ trợ tư vấn 0909 075 668.",
    metaTitle: "Xin Giấy Phép Xây Dựng TP.HCM — Hồ Sơ",
    metaDescription:
      "Xin giấy phép xây dựng TP.HCM: giấy tờ cần có, nhà mới &amp; cải tạo. Tư vấn Sao Khuê 0909 075 668.",
    metaKeywords:
      "xin giấy phép xây dựng tphcm, giấy phép xây dựng, thủ tục xin phép xây nhà, hồ sơ xin phép",
    imageAlt: "Xin giấy phép xây dựng tại TP.HCM",
    content: `<h2>Xin giấy phép xây dựng TP.HCM: làm đúng để tránh phạt &amp; tháo dỡ</h2>
<p><strong>Xin giấy phép xây dựng TP.HCM</strong> là bước pháp lý trước khi đào móng hoặc thay đổi kết cấu lớn. Mỗi quận/huyện có quy trình tiếp nhận theo phân cấp; hồ sơ cần khớp quy hoạch và hiện trạng đất. <strong>Kiến Trúc Sao Khuê</strong> hỗ trợ tư vấn hồ sơ khi đi kèm thiết kế–thi công.</p>
<p>Sau khi có phép, triển khai <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> đúng bản vẽ được duyệt.</p>

<h2>Thành phần hồ sơ thường gặp (nhà ở riêng lẻ)</h2>
<ul>
  <li>Đơn đề nghị cấp giấy phép.</li>
  <li>Giấy tờ quyền sử dụng đất.</li>
  <li>Bản vẽ thiết kế (mặt bằng, đứng, cắt…) theo quy định.</li>
  <li>Các giấy tờ liên quan khác tùy trường hợp (cam kết, bản vẽ hiện trạng…).</li>
</ul>
<p>Danh mục chính xác phụ thuộc loại công trình và nơi nộp — nên xác nhận tại bộ phận tiếp nhận trước khi in nhiều bản.</p>

<h2>Bảng chi phí &amp; thời gian liên quan phép (tham khảo)</h2>
<table>
  <thead>
    <tr><th>Khoản mục</th><th>Ghi chú</th><th>Ai thường chịu</th></tr>
  </thead>
  <tbody>
    <tr><td>Thiết kế hồ sơ xin phép</td><td>Theo quy mô &amp; đơn vị thiết kế</td><td>Chủ nhà / gói thiết kế</td></tr>
    <tr><td>Lệ phí nhà nước</td><td>Theo quy định hiện hành</td><td>Chủ nhà</td></tr>
    <tr><td>Thời gian thẩm định</td><td>Phụ thuộc nơi nộp &amp; hồ sơ đủ</td><td>—</td></tr>
    <tr><td>Điều chỉnh phép khi đổi thiết kế</td><td>Phát sinh nếu sửa lớn</td><td>Chủ nhà</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Đổi số tầng, chỉ giới xây dựng sau khi đã có phép thường phải điều chỉnh — đừng thi công lệch bản vẽ.</p>

<h2>Các tình huống đặc thù</h2>
<ol>
  <li><strong>Xây mới trên đất trống:</strong> hồ sơ chuẩn theo nhà ở riêng lẻ.</li>
  <li><strong>Phá dỡ xây lại:</strong> cần hiện trạng và phương án tháo dỡ an toàn.</li>
  <li><strong>Cải tạo / nâng tầng:</strong> thường phức tạp hơn về đánh giá kết cấu.</li>
  <li><strong>Nhà trong hẻm lộ giới:</strong> kiểm tra chỉ giới và quy hoạch trước.</li>
</ol>

<h2>Chuẩn bị thực tế trước khi nộp hồ sơ xin phép</h2>
<p>In nhiều bộ bản vẽ khi chưa chốt mặt đứng là lãng phí. Hãy chốt công năng, số tầng, chỉ giới với kiến trúc sư trước. Với <strong>xin giấy phép xây dựng TP.HCM</strong>, hồ sơ thiếu hoặc lệch hiện trạng đất là lý do trả về phổ biến — đo đạc lại nếu sổ và thực tế lệch.</p>
<h3>Sau khi có phép cần tuân thủ gì?</h3>
<ol>
  <li>Xây đúng tầng cao, chỉ giới, mật độ được duyệt.</li>
  <li>Giữ phép và bản vẽ tại công trình khi có kiểm tra.</li>
  <li>Xin điều chỉnh nếu đổi lớn thiết kế.</li>
</ol>
<p>Sao Khuê nhắc chủ nhà: phép là điều kiện thi công hợp pháp, không phải “giấy trang trí”.</p>

<h2>Xin phép cải tạo khác xin phép xây mới thế nào?</h2>
<p>Cải tạo/nâng tầng thường cần hiện trạng và thuyết minh kết cấu rõ hơn. <strong>Xin giấy phép xây dựng TP.HCM</strong> cho từng tình huống có thành phần hồ sơ khác nhau — đừng dùng chung một checklist internet. Sao Khuê tư vấn theo đúng loại việc bạn dự định thi công.</p>

<h2>FAQ xin giấy phép</h2>
<details>
  <summary>Sửa nội thất có cần phép không?</summary>
  <p>Sửa hoàn thiện không làm thay đổi kết cấu/quy mô thường không cùng mức với xây mới. Thay đổi kết cấu, cơi nới thì cần xem lại — đừng tự suy diễn.</p>
</details>
<details>
  <summary>Sao Khuê có làm hộ toàn bộ thủ tục không?</summary>
  <p>Hỗ trợ hồ sơ thiết kế và hướng dẫn quy trình khi nằm trong hợp đồng. Chủ nhà vẫn là người đứng tên và nộp theo yêu cầu cơ quan chức năng.</p>
</details>
<details>
  <summary>Xây không phép rủi ro gì?</summary>
  <p>Có thể bị đình chỉ, xử phạt, buộc khắc phục/tháo dỡ — chi phí và thời gian lớn hơn làm đúng từ đầu.</p>
</details>

<h2>Tư vấn trước khi nộp hồ sơ</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "hoan-thien-nha-tphcm": {
    title: "Hoàn Thiện Nhà TP.HCM — Từ Nhà Thô Đến Ở Được",
    excerpt:
      "Hoàn thiện nhà TP.HCM: ốp lát, sơn, trần, cửa, điện nước lộ. Đồng bộ vật tư — 0909 075 668.",
    metaTitle: "Hoàn Thiện Nhà TP.HCM — Từ Thô Đến Ở",
    metaDescription:
      "Hoàn thiện nhà TP.HCM: hạng mục, đơn giá tham khảo, trình tự thi công. Hotline 0909 075 668.",
    metaKeywords:
      "hoàn thiện nhà tphcm, hoàn thiện nhà thô, chi phí hoàn thiện nhà, thi công hoàn thiện",
    imageAlt: "Hoàn thiện nhà thô tại TP.HCM",
    content: `<h2>Hoàn thiện nhà TP.HCM: giai đoạn quyết định trải nghiệm ở</h2>
<p><strong>Hoàn thiện nhà TP.HCM</strong> biến phần thô thành không gian sạch, kín nước, đủ điện. Sai trình tự (sơn trước khi xử lý thấm, lát trước khi chạy ống) gây sửa đi sửa lại. <strong>Kiến Trúc Sao Khuê</strong> lập tiến độ hoàn thiện theo lớp: kỹ thuật → ướt → khô → lắp đặt.</p>
<p>Nếu chưa có thô, xem <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a>. Sửa hoàn thiện cũ: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a>.</p>

<h2>Hạng mục hoàn thiện tiêu chuẩn</h2>
<ul>
  <li>Trát tô, chống thấm WC/sân thượng (nếu chưa xong ở thô).</li>
  <li>Ốp lát sàn – tường ướt.</li>
  <li>Trần, sơn nước.</li>
  <li>Cửa đi/sổ, lan can, cầu thang hoàn thiện.</li>
  <li>Thiết bị vệ sinh, ổ cắm–công tắc, đèn cơ bản.</li>
</ul>

<h2>Bảng chi phí hoàn thiện tham khảo</h2>
<table>
  <thead>
    <tr><th>Gói hoàn thiện</th><th>Đơn giá gợi ý /m²</th><th>Mức vật tư</th></tr>
  </thead>
  <tbody>
    <tr><td>Cơ bản</td><td>1,5 – 2,2 triệu</td><td>Phổ thông, bền</td></tr>
    <tr><td>Trung bình khá</td><td>2,2 – 3,2 triệu</td><td>Đẹp hơn, TBVS tốt hơn</td></tr>
    <tr><td>Cao cấp</td><td>3,2 triệu+</td><td>Đá, cửa, thiết bị nâng cấp</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Đơn giá phụ thuộc nhà thô đã có sẵn chống thấm/điện nước âm đúng chưa. Thô kém làm hoàn thiện đội giá “vá”.</p>

<h2>Trình tự hoàn thiện nên giữ</h2>
<ol>
  <li>Nghiệm thu thô &amp; xử lý sai lệch.</li>
  <li>Chống thấm khu ướt → ngâm thử.</li>
  <li>Ốp lát → trần → sơn.</li>
  <li>Lắp cửa &amp; thiết bị.</li>
  <li>Vệ sinh – bàn giao checklist.</li>
</ol>

<h2>Nghiệm thu hoàn thiện: checklist cầm tay</h2>
<p>Trước khi thanh toán đợt cuối <strong>hoàn thiện nhà TP.HCM</strong>, kiểm tra: độ dốc thoát sàn WC, khe co giãn cửa sổ, độ đồng màu sơn, các góc ốp, hoạt động khóa cửa, áp lực nước và chống thấm đã thử. Chụp ảnh từng hạng mục để đối chiếu bảo hành.</p>
<h3>Hoàn thiện nhà mua lại phần thô từ chủ khác</h3>
<p>Cần khảo sát phần thô kỹ: cao độ lệch, ống âm sai vị trí, thấm sẵn. Dự toán hoàn thiện phải gồm khoản sửa thô — nếu không, đơn giá/m² hoàn thiện sẽ “vỡ” giữa chừng.</p>

<h2>Chọn vật liệu hoàn thiện theo khí hậu TP.HCM</h2>
<p>Độ ẩm cao đòi hỏi sơn kháng nấm ở khu tối, keo ốp phù hợp khu ướt, và gỗ công nghiệp có chống ẩm nếu làm tủ. <strong>Hoàn thiện nhà TP.HCM</strong> dùng vật liệu miền khô lạnh dễ phồng, cong. Sao Khuê tư vấn mẫu theo từng khu vực nhà thay vì một loại gạch cho mọi chỗ.</p>
<ol>
  <li>WC/ban công: chống trơn, chống thấm đồng bộ.</li>
  <li>Phòng ngủ: sơn sạch, trần gọn, ổ cắm đủ.</li>
  <li>Khách–bếp: dễ lau, chịu dầu mỡ.</li>
</ol>
<p>Xem thêm báo giá tại <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Đồng bộ màu và ánh sáng khi hoàn thiện</h2>
<p>Chọn bảng màu sớm: sàn, tường, cửa. Đèn ấm cho khu sinh hoạt, đèn trắng sạch cho bếp–WC. <strong>Hoàn thiện nhà TP.HCM</strong> lệch màu giữa các phòng thường do mua vật tư nhiều đợt không giữ mã. Chốt mã trước khi mua số lượng lớn.</p>

<h2>FAQ hoàn thiện nhà</h2>
<details>
  <summary>Nhà thô để lâu có hoàn thiện được không?</summary>
  <p>Được nhưng cần kiểm tra thấm, nứt, han gỉ sắt chờ. Có thể phải xử lý lại trước khi ốp sơn.</p>
</details>
<details>
  <summary>Chủ nhà tự mua gạch được không?</summary>
  <p>Được nếu thống nhất quy cách và tiến độ giao hàng. Trễ gạch làm đội nhân công chờ — nên ghi rõ trách nhiệm trong hợp đồng.</p>
</details>
<details>
  <summary>Hoàn thiện có bảo hành không?</summary>
  <p>Có theo hạng mục (sơn, chống thấm, lắp đặt). Phần kết cấu gốc nếu do Sao Khuê làm thô vẫn theo bảo hành 10 năm.</p>
</details>

<h2>Nhận báo giá hoàn thiện</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "gia-co-nha-cu-tphcm": {
    title: "Gia Cố Nhà Cũ TP.HCM — Khi Nứt, Lún, Muốn Thêm Tầng",
    excerpt:
      "Gia cố nhà cũ TP.HCM: đánh giá chịu lực, phương án cột–dầm–móng. An toàn trước thẩm mỹ — 0909 075 668.",
    metaTitle: "Gia Cố Nhà Cũ TP.HCM — An Toàn Kết Cấu",
    metaDescription:
      "Gia cố nhà cũ TP.HCM: khi nào cần, chi phí tham khảo, quy trình. Kỹ sư khảo sát — 0909 075 668.",
    metaKeywords:
      "gia cố nhà cũ tphcm, gia cố kết cấu, nhà bị lún, gia cố cột dầm",
    imageAlt: "Gia cố nhà cũ tại TP.HCM — xử lý kết cấu",
    content: `<h2>Gia cố nhà cũ TP.HCM không phải “trát thêm xi măng”</h2>
<p><strong>Gia cố nhà cũ TP.HCM</strong> là bài toán kết cấu: bổ sung khả năng chịu lực khi nhà nứt nguy hiểm, lún lệch, cải tạo tải tăng hoặc chuẩn bị nâng tầng. Làm sai cách có thể hại hơn không làm. <strong>Kiến Trúc Sao Khuê</strong> khảo sát hiện trạng trước, lập phương án rồi mới thi công — bảo hành kết cấu <strong>10 năm</strong> với phần gia cố thuộc phạm vi hợp đồng.</p>
<p>Liên quan: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · nếu khung quá yếu có thể cân nhắc <a href="/dich-vu/xay-nha-tron-goi">xây lại trọn gói</a>.</p>

<h2>Dấu hiệu cần kỹ sư xem mặt</h2>
<ul>
  <li>Nứt chéo gần miệng cửa, cột, dầm.</li>
  <li>Sàn võng, cửa lệch khó đóng.</li>
  <li>Lún lệch giữa các gối móng.</li>
  <li>Muốn thêm tầng / đặt máy nặng / khoét tường chịu lực.</li>
</ul>

<h2>Bảng chi phí gia cố tham khảo</h2>
<table>
  <thead>
    <tr><th>Phương án</th><th>Chi phí gợi ý</th><th>Khi nào dùng</th></tr>
  </thead>
  <tbody>
    <tr><td>Đai cột / bổ sung thép đai</td><td>Theo từng cột</td><td>Cột yếu cục bộ</td></tr>
    <tr><td>Bổ dầm – giằng</td><td>30 – 150 triệu+/khu</td><td>Mở nhịp, rung sàn</td></tr>
    <tr><td>Gia cố móng / cọc bổ sung</td><td>80 – 400 triệu+</td><td>Lún, nâng tầng</td></tr>
    <tr><td>Khung thép hỗ trợ</td><td>Theo tấn kế</td><td>Không khoan phá nhiều BTCT</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Báo giá gia cố chỉ chính xác sau khảo sát — đừng chốt thợ “làm đại” theo mét vuông tường.</p>

<h2>Quy trình gia cố an toàn</h2>
<ol>
  <li>Khảo sát + thu thập hồ sơ cũ (nếu có).</li>
  <li>Phương án kết cấu &amp; biện pháp thi công.</li>
  <li>Chống đỡ tạm (nếu cần) trước khi đục phá.</li>
  <li>Thi công gia cố – nghiệm thu.</li>
  <li>Hoàn thiện lại bề mặt / chống thấm chỗ đục.</li>
</ol>

<h2>Gia cố tạm và gia cố lâu dài khác nhau thế nào?</h2>
<p>Chống đỡ tạm bằng gỗ/thép phục vụ thi công an toàn trong thời gian ngắn. <strong>Gia cố nhà cũ TP.HCM</strong> lâu dài phải theo phương án kết cấu (đai, cọc, dầm mới…) và nghiệm thu. Lẫn hai khái niệm dễ khiến chủ nhà nghĩ đã “chữa xong” trong khi mới chỉ chống tạm.</p>
<h3>Chi phí khảo sát có đáng không?</h3>
<p>Chi phí khảo sát/phương án nhỏ hơn rất nhiều so với đổ thêm tầng sai hoặc xử lý sự cố. Sao Khuê luôn tách báo giá khảo sát–phương án và báo giá thi công để chủ nhà quyết định từng bước.</p>

<h2>Gia cố nhà cũ trước khi lắp thiết bị nặng</h2>
<p>Đặt bể nước lớn trên sân thượng, máy phát hoặc két sắt tầng cao làm tăng tải cục bộ. Nếu nhà cũ chưa tính các tải này, cần xem xét <strong>gia cố nhà cũ TP.HCM</strong> trước khi lắp. Nhiều sự cố nứt xuất hiện sau khi “chỉ thêm một bể nước”.</p>
<ul>
  <li>Tính lại tải sàn/sân thượng.</li>
  <li>Kiểm tra liên kết lan can và hộp kỹ thuật.</li>
  <li>Ưu tiên đưa bể xuống thấp nếu có thể.</li>
</ul>
<p>Gọi 0909 075 668 để kỹ sư xem hiện trạng trước khi mua thiết bị.</p>

<h2>Theo dõi nhà sau gia cố</h2>
<p>Sau <strong>gia cố nhà cũ TP.HCM</strong>, quan sát khe nứt cũ có mở rộng không trong vài tháng đầu, đặc biệt mùa mưa. Báo sớm nếu có dấu hiệu lạ. Bảo hành kết cấu 10 năm của Sao Khuê đi kèm điều kiện không tự ý đục phá phần đã gia cố.</p>

<h2>FAQ gia cố nhà cũ</h2>
<details>
  <summary>Nhà nứt chân chim có cần gia cố không?</summary>
  <p>Thường không — đó là nứt bề mặt. Gia cố dành cho nứt kết cấu hoặc thiếu khả năng chịu lực.</p>
</details>
<details>
  <summary>Gia cố xong có nâng tầng ngay được không?</summary>
  <p>Chỉ khi phương án gia cố được thiết kế đúng cho tải tầng mới và đã có phép. Không tự ý đổ thêm sàn.</p>
</details>
<details>
  <summary>Có làm trong hẻm hẹp được không?</summary>
  <p>Được, nhưng máy khoan/cọc mini và vận chuyển phế thải cần lên kế hoạch — phổ biến ở nội thành TP.HCM.</p>
</details>

<h2>Đặt lịch kiểm tra kết cấu</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "cai-tao-mat-tien-nha-tphcm": {
    title: "Cải Tạo Mặt Tiền Nhà TP.HCM — Diện Mạo Mới, Kết Cấu An Toàn",
    excerpt:
      "Cải tạo mặt tiền nhà TP.HCM: ốp, sơn, cửa, mái đón. Không khoan cắt lung tung — 0909 075 668.",
    metaTitle: "Cải Tạo Mặt Tiền Nhà TP.HCM | Diện Mạo Mới",
    metaDescription:
      "Cải tạo mặt tiền nhà TP.HCM: vật liệu, chi phí theo mét ngang, lưu ý tường cũ. Gọi 0909 075 668.",
    metaKeywords:
      "cải tạo mặt tiền nhà tphcm, ốp mặt tiền, sửa mặt dựng nhà phố, nâng cấp mặt tiền",
    imageAlt: "Cải tạo mặt tiền nhà phố tại TP.HCM",
    content: `<h2>Cải tạo mặt tiền nhà TP.HCM: đẹp nhưng đừng làm yếu tường</h2>
<p><strong>Cải tạo mặt tiền nhà TP.HCM</strong> thay đổi cảm nhận cả căn: cửa, ốp, sơn, đèn, mái đón. Nhà phố cũ hay bị khoan quá nhiều để ốp đá nặng trên tường gạch không gia cố — rủi ro bong và nguy hiểm. <strong>Kiến Trúc Sao Khuê</strong> chọn vật liệu theo khả năng chịu của tường hiện trạng.</p>
<p>Kết hợp sửa bên trong: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · xây mới: <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a>.</p>

<h2>Các hướng nâng cấp mặt dựng phổ biến</h2>
<ul>
  <li>Sơn lại + điểm nhấn thanh nhôm/gạch.</li>
  <li>Ốp gạch thông minh / gạch thẻ nhẹ.</li>
  <li>Đổi hệ cửa nhôm kính lấy sáng.</li>
  <li>Làm mái đón / sảnh nhỏ đúng chỉ giới.</li>
  <li>Chiếu sáng mặt đứng tiết chế (không lóa hàng xóm).</li>
</ul>

<h2>Bảng chi phí cải tạo mặt tiền theo mét ngang</h2>
<table>
  <thead>
    <tr><th>Phương án</th><th>Chi phí gợi ý (nhà 4–5m)</th><th>Thời gian</th></tr>
  </thead>
  <tbody>
    <tr><td>Sơn + sửa vữa</td><td>25 – 70 triệu</td><td>1–2 tuần</td></tr>
    <tr><td>Ốp nhẹ + cửa mới</td><td>80 – 220 triệu</td><td>2–4 tuần</td></tr>
    <tr><td>Ốp đá / vật liệu nặng</td><td>150 – 400 triệu+</td><td>3–6 tuần</td></tr>
    <tr><td>Mặt tiền + tầng trệt kinh doanh</td><td>Theo fit-out</td><td>4–8 tuần</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú giá:</strong> Nhà mặt tiền đường lớn thường đầu tư cao hơn nhà trong hẻm vì yếu tố diện mạo và biển hiệu.</p>

<h2>Lưu ý kỹ thuật trước khi ốp</h2>
<ol>
  <li>Kiểm tra tường có thấm, rỗng, nứt không.</li>
  <li>Neo/khung đỡ đúng với trọng lượng vật liệu.</li>
  <li>Xử lý chống thấm mép cửa và ban công.</li>
  <li>Giữ khoảng an toàn với đường điện trước nhà.</li>
</ol>

<h2>Mặt tiền nhà phố cho thuê: tối ưu gì?</h2>
<p>Với nhà cho thuê, <strong>cải tạo mặt tiền</strong> nên ưu tiên bền, dễ lau, hệ cửa chắc và đèn đủ sáng buổi tối. Tránh vật liệu dễ bong trong mưa dầm. Biển hiệu (nếu có) cần chừa vị trí neo đúng kỹ thuật, không khoan lung tung lên lớp ốp mới.</p>
<h3>Màu sắc và tỷ lệ</h3>
<p>Nhà hẹp nên dùng màu trung tính, điểm nhấn một dải ngang hoặc khung cửa. Quá nhiều màu làm mặt tiền “vỡ” tỷ lệ — đặc biệt với nhà 3–4 tầng mặt tiền 4m.</p>

<h2>Thi công mặt tiền và an toàn người đi đường</h2>
<p>Nhà sát vỉa hè phải có biện pháp chống rơi vật liệu khi <strong>cải tạo mặt tiền nhà TP.HCM</strong>. Lưới che, biển cảnh báo và thu dọn cuối ngày là bắt buộc đạo đức nghề — không chỉ “cho đẹp hồ sơ”. Sao Khuê yêu cầu đội thi công thực hiện khi làm mặt dựng tầng cao.</p>
<ol>
  <li>Không để gạch/vữa rơi xuống lối đi.</li>
  <li>Giữ khoảng cách an toàn với đường điện.</li>
  <li>Hoàn thiện khe tiếp giáp tường hàng xóm cẩn thận.</li>
</ol>

<h2>Mặt tiền và phong thủy dân gian: giữ thực dụng</h2>
<p>Nhiều chủ nhà quan tâm hướng cửa và màu. Sao Khuê tôn trọng nhu cầu đó trong khuôn khổ kết cấu và chỉ giới — không để yếu tố trang trí phá thoát nước hoặc an toàn. <strong>Cải tạo mặt tiền nhà TP.HCM</strong> đẹp phải đi với kỹ thuật đúng.</p>

<h2>FAQ cải tạo mặt tiền</h2>
<details>
  <summary>Có cần xin phép khi chỉ sửa mặt tiền không?</summary>
  <p>Thay đổi lớn về kiến trúc/chỉ giới có thể liên quan thủ tục. Sửa bề mặt trong khuôn khổ hiện trạng thường đơn giản hơn — vẫn nên hỏi xác nhận theo địa bàn.</p>
</details>
<details>
  <summary>Ốp xong nhà có nóng hơn không?</summary>
  <p>Một số vật liệu hấp nhiệt. Nên chọn màu sáng vừa phải, có khe thông gió hoặc lớp cách nhiệt nếu hướng Tây nắng gắt.</p>
</details>
<details>
  <summary>Làm mặt tiền mùa mưa được không?</summary>
  <p>Được nếu che chắn tốt; keo/vữa cần điều kiện khô phù hợp. Ưu tiên khung cửa và chống thấm trước lớp trang trí.</p>
</details>

<h2>Nhận tư vấn mặt tiền</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-binh-thanh": {
    title: "Xây Nhà Bình Thạnh — Gần Văn Phòng Sao Khuê, Am Hiểu Hiện Trường",
    excerpt:
      "Xây nhà Bình Thạnh: hẻm nhỏ, đất nền cũ, giấy phép địa bàn. Sao Khuê tại Bình Lợi — 0909 075 668.",
    metaTitle: "Xây Nhà Bình Thạnh 2026 — Sao Khuê Tại Bình Lợi",
    metaDescription:
      "Xây nhà Bình Thạnh: đơn giá, lưu ý hẻm & nền đất, khảo sát nhanh gần văn phòng Bình Lợi. Hotline 0909 075 668.",
    metaKeywords:
      "xây nhà bình thạnh, xây nhà phố bình thạnh, nhà thầu bình thạnh, sao khuê bình lợi",
    imageAlt: "Xây nhà tại quận Bình Thạnh — Kiến Trúc Sao Khuê",
    content: `<h2>Xây nhà Bình Thạnh: địa bàn “sân nhà” của Sao Khuê</h2>
<p><strong>Xây nhà Bình Thạnh</strong> thường gặp nền đất khu vực gần kênh, nhà trong hẻm cụt và mật độ xây dày. Văn phòng <strong>Kiến Trúc Sao Khuê</strong> tại <strong>245/8 Bình Lợi, Q. Bình Thạnh</strong> giúp khảo sát nhanh, giám sát hiện trường sát sao hơn nhiều quận xa.</p>
<p>Triển khai <a href="/dich-vu/xay-nha-tron-goi">xây nhà trọn gói</a> · ước lượng <a href="/bao-gia">báo giá</a>.</p>

<h2>Đặc thù thi công tại Bình Thạnh</h2>
<ul>
  <li>Hẻm xe hơi và hẻm xe máy đan xen — cần đo bề ngang trước khi chọn biện pháp bơm bê tông.</li>
  <li>Nhà cũ cải tạo/phá dựng nhiều; ảnh hưởng tường chung cần khảo sát hai bên.</li>
  <li>Giao thông giờ cao điểm ảnh hưởng giờ đổ bê tông.</li>
</ul>

<h2>Bảng chi phí xây nhà Bình Thạnh tham khảo</h2>
<table>
  <thead>
    <tr><th>Gói</th><th>Đơn giá/m²</th><th>Ghi chú địa bàn</th></tr>
  </thead>
  <tbody>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu</td><td>Cộng móng nếu nền yếu</td></tr>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Phổ biến nhà phố 3–4 tầng</td></tr>
    <tr><td>Trọn gói khá</td><td>5,5 – 6,0 triệu</td><td>Hoàn thiện đẹp hơn</td></tr>
    <tr><td>Phụ phí hẻm hẹp</td><td>Theo mét vận chuyển</td><td>Hay gặp ở các trục phụ Bình Lợi, Xô Viết Nghệ Tĩnh…</td></tr>
  </tbody>
</table>

<h2>Quy trình làm việc gần văn phòng</h2>
<ol>
  <li>Gọi 0909 075 668 hoặc ghé 245/8 Bình Lợi.</li>
  <li>Khảo sát đất trong ngày/khung giờ thỏa thuận.</li>
  <li>Thiết kế + dự toán.</li>
  <li>Thi công – nghiệm thu – bảo hành kết cấu 10 năm.</li>
</ol>

<h2>Các trục thường thi công quanh Bình Thạnh</h2>
<p>Sao Khuê thường nhận việc quanh Bình Lợi, Xô Viết Nghệ Tĩnh, Nơ Trang Long, khu gần kênh và các hẻm liên thông sang Gò Vấp/Phú Nhuận. Am hiểu giờ cấm/kẹt xe giúp xếp lịch đổ bê tông thực tế hơn nhà thầu “nhảy” từ tỉnh vào.</p>
<h3>Cải tạo vs xây mới tại Bình Thạnh</h3>
<p>Nhiều nền nhà cũ giá trị đất cao — cải tạo hoặc phá dựng xây lại cần tính toán kỹ tổng ROI. Chúng tôi tư vấn thẳng nếu khung còn dùng được để tránh phá không cần thiết.</p>

<h2>Vì sao chọn nhà thầu gần công trình Bình Thạnh?</h2>
<p>Giám sát bất chợt, xử lý phát sinh trong ngày và hiểu giờ cấm xe cục bộ giúp tiến độ ổn. <strong>Xây nhà Bình Thạnh</strong> với Sao Khuê tận dụng lợi thế văn phòng ngay 245/8 Bình Lợi — khoảng cách hiện trường ngắn hơn mang đội từ tỉnh.</p>
<ul>
  <li>Khảo sát nhanh khi cần đổi phương án.</li>
  <li>Bảo hành tiện đến trực tiếp.</li>
  <li>Am hiểu hẻm và nền đất khu vực.</li>
</ul>
<p>Hotline 0909 075 668.</p>

<h2>Quy trình làm việc khi nhà cách văn phòng vài phút</h2>
<p>Với <strong>xây nhà Bình Thạnh</strong>, giám sát có thể đến hiện trường nhanh khi đổ bê tông hoặc nghiệm thu thép. Chủ nhà cũng dễ ghé 245/8 Bình Lợi để xem mẫu vật tư. Đây là lợi thế địa bàn không phải nhà thầu nào cũng có.</p>
<ul>
  <li>Khảo sát linh hoạt khung giờ.</li>
  <li>Xử lý phát sinh trong ngày.</li>
  <li>Bảo hành tiện liên hệ trực tiếp.</li>
</ul>
<p>Gọi 0909 075 668 để xếp lịch.</p>

<h2>FAQ xây nhà Bình Thạnh</h2>
<details>
  <summary>Khu vực gần kênh có bắt buộc khoan địa chất không?</summary>
  <p>Nên làm với nhà nhiều tầng để chọn móng đúng — tiết kiệm hơn sửa lún sau.</p>
</details>
<details>
  <summary>Có nhận cải tạo nhà cũ Bình Thạnh không?</summary>
  <p>Có — chiếm tỷ lệ lớn công việc địa bàn. Xem thêm dịch vụ sửa chữa nhà.</p>
</details>
<details>
  <summary>Thời gian khảo sát mất bao lâu?</summary>
  <p>Thường 30–60 phút tại nền; phức tạp hơn nếu cần xem cả nhà liền kề.</p>
</details>

<h2>Liên hệ ngay tại Bình Thạnh</h2>
<p>Hotline <strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "xay-nha-thu-duc": {
    title: "Xây Nhà Thủ Đức — Nhà Phố, Đất Nền & Biện Pháp Thi Công Phù Hợp",
    excerpt:
      "Xây nhà Thủ Đức: đất nền dự án, nhà phố hẻm, đơn giá tham khảo. Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Thủ Đức — Nhà Phố & Đất Nền",
    metaDescription:
      "Xây nhà Thủ Đức: lưu ý quy hoạch, đơn giá, tiến độ. Khảo sát miễn phí — 0909 075 668.",
    metaKeywords:
      "xây nhà thủ đức, xây nhà phố thủ đức, nhà thầu thủ đức, xây nhà tp thủ đức",
    imageAlt: "Xây nhà tại TP. Thủ Đức",
    content: `<h2>Xây nhà Thủ Đức: đa dạng hiện trạng từ đất nền đến nhà hẻm</h2>
<p><strong>Xây nhà Thủ Đức</strong> (TP. Thủ Đức) gồm cả đất dự án tương đối chuẩn và nhà trong khu dân cư cũ đường nhỏ. Cần đọc kỹ quy hoạch, chỉ giới và tiện ích ngầm trước khi đào. <strong>Kiến Trúc Sao Khuê</strong> nhận khảo sát và thi công theo năng lực đội — bảo hành kết cấu 10 năm.</p>
<p><a href="/dich-vu/xay-nha-tron-goi">Xây trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Lưu ý khi xây tại Thủ Đức</h2>
<ul>
  <li>Đất nền: kiểm tra cao độ san nền, thoát nước khu vực.</li>
  <li>Khu cũ: đo hẻm, tường chung, đường dây điện.</li>
  <li>Nhà gần trục xa lộ: chống ồn mặt đứng nếu cần.</li>
  <li>Mùa mưa: ưu tiên thoát nước móng và đường công vụ tạm.</li>
</ul>

<h2>Bảng đơn giá xây nhà Thủ Đức tham khảo</h2>
<table>
  <thead>
    <tr><th>Hạng mục</th><th>Khung giá</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    <tr><td>Trọn gói tiêu chuẩn</td><td>4,85 – 5,5 triệu/m²</td><td>Nhà phố phổ thông</td></tr>
    <tr><td>Trọn gói khá – cao cấp</td><td>5,5 – 6,7 triệu+/m²</td><td>Vật tư nâng cấp</td></tr>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu/m²</td><td>Chưa hoàn thiện</td></tr>
    <tr><td>San nền / đắp thêm</td><td>Báo theo khối lượng</td><td>Hay gặp đất nền thấp</td></tr>
  </tbody>
</table>

<h2>Gợi ý quy mô nhà phố Thủ Đức</h2>
<ol>
  <li>Đất 5×20: 3 tầng + sân thượng là phổ biến.</li>
  <li>Đất rộng hơn: có thể bố trí giếng trời lớn, garage ô tô.</li>
  <li>Nhà ống sâu: ưu tiên thông gió trục giữa.</li>
</ol>

<h2>Đất nền Thủ Đức: kiểm tra gì trước khi đặt cọc?</h2>
<p>Kiểm tra cao độ so với đường, hướng thoát nước mưa khu vực, và tiện ích ngầm nếu có thông tin. <strong>Xây nhà Thủ Đức</strong> trên nền thấp có thể cần đắp/san — khoản này phải có trong dự toán trước khi so đơn giá/m² xây.</p>
<h3>Nhà hướng Tây ở các trục lớn</h3>
<p>Cần che nắng mặt đứng, cây xanh hoặc hành lang đệm. Thiết kế chỉ “kính full” dễ nóng và tốn điều hòa.</p>

<h2>Tiến độ xây nhà Thủ Đức theo loại mặt bằng</h2>
<p>Đất nền dự án đường lớn thường nhanh hơn nhà trong hẻm khu cũ vì xe tải vào được. Khi lập hợp đồng <strong>xây nhà Thủ Đức</strong>, hãy để nhà thầu ghi rõ giả định tiếp cận mặt bằng — nếu thực tế khác, tiến độ và phụ phí sẽ đổi.</p>
<ol>
  <li>Mặt bằng đường lớn: ưu tiên bê tông tươi + bơm.</li>
  <li>Hẻm trung bình: kết hợp trung chuyển.</li>
  <li>Hẻm hẹp: nhân công vận chuyển tăng, cần lịch dài hơn.</li>
</ol>

<h2>Chọn gói thô hoặc trọn gói tại Thủ Đức</h2>
<p>Đất nền sạch, chủ nhà am hiểu vật tư có thể xây thô rồi hoàn thiện sau. Gia đình bận nên chọn trọn gói. <strong>Xây nhà Thủ Đức</strong> với Sao Khuê được tư vấn chọn gói theo năng lực giám sát của bạn, không áp một mô hình.</p>
<ol>
  <li>Trọn gói: một đầu mối, bảo hành tập trung.</li>
  <li>Thô: kiểm soát khung, linh hoạt hoàn thiện.</li>
  <li>Hybrid: thô + hoàn thiện cơ bản, nội thất sau.</li>
</ol>
<p>0909 075 668 · 245/8 Bình Lợi.</p>

<h2>FAQ xây nhà Thủ Đức</h2>
<details>
  <summary>Xây nhà trong khu đô thị có khác nhà ngoài?</summary>
  <p>Thường có quy định kiến trúc/màu sắc của ban quản lý — cần tuân thủ thêm ngoài giấy phép xây dựng.</p>
</details>
<details>
  <summary>Sao Khuê có đến khảo sát Thủ Đức không?</summary>
  <p>Có. Đặt lịch qua 0909 075 668; văn phòng tại Bình Thạnh thuận đường sang nhiều khu Thủ Đức.</p>
</details>
<details>
  <summary>Thời gian xây nhà 3 tầng khoảng bao lâu?</summary>
  <p>Khoảng 5–7 tháng nếu mặt bằng thuận và phép sẵn.</p>
</details>

<h2>Đặt khảo sát Thủ Đức</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-quan-7": {
    title: "Xây Nhà Quận 7 — Nhà Phố, Nhà Liền Kề & Yêu Cầu Hoàn Thiện Cao",
    excerpt:
      "Xây nhà Quận 7: khu dân cư hiện đại, hoàn thiện kỹ, chống thấm chuẩn. Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Quận 7 — Hoàn Thiện Chuẩn Đô Thị",
    metaDescription:
      "Xây nhà Quận 7: đơn giá, lưu ý quy hoạch khu dân cư, vật liệu. Hotline 0909 075 668.",
    metaKeywords:
      "xây nhà quận 7, xây nhà phố quận 7, nhà thầu quận 7, xây nhà q7",
    imageAlt: "Xây nhà tại Quận 7 TP.HCM",
    content: `<h2>Xây nhà Quận 7: kỳ vọng hoàn thiện thường cao hơn mặt bằng chung</h2>
<p><strong>Xây nhà Quận 7</strong> gắn với nhiều khu dân cư quy hoạch, nhà liền kề và yêu cầu mặt đứng sạch sẽ. Chủ nhà thường quan tâm vật liệu cửa, đá, chống ồn hơn là chỉ “xây xong”. <strong>Kiến Trúc Sao Khuê</strong> lập dự toán tách phần kỹ thuật và phần thẩm mỹ để kiểm soát ngân sách.</p>
<p><a href="/dich-vu/xay-nha-tron-goi">Xây trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Điểm cần lưu ý khi xây Q7</h2>
<ul>
  <li>Quy định kiến trúc khu (nếu có) về chiều cao, màu, hàng rào.</li>
  <li>Nhà liền kề: chống thấm khe nhiệt và tường chung.</li>
  <li>Nền một số khu san lấp — xem xét khoan địa chất.</li>
  <li>Giao thông nội khu: giờ xe bê tông phải xin lối.</li>
</ul>

<h2>Bảng giá tham khảo xây nhà Quận 7</h2>
<table>
  <thead>
    <tr><th>Gói</th><th>Đơn giá/m²</th><th>Phù hợp</th></tr>
  </thead>
  <tbody>
    <tr><td>Tiêu chuẩn</td><td>4,85 – 5,5 triệu</td><td>Nhà ở gia đình</td></tr>
    <tr><td>Khá</td><td>5,5 – 6,0 triệu</td><td>Hoàn thiện đẹp, cửa tốt hơn</td></tr>
    <tr><td>Cao cấp</td><td>6,0 – 6,7 triệu+</td><td>Đá, thiết bị, chi tiết kỹ</td></tr>
    <tr><td>Phần thô</td><td>3,55 – 3,8 triệu</td><td>Chủ tự hoàn thiện sau</td></tr>
  </tbody>
</table>
<p><strong>Ghi chú:</strong> Nhiều chủ nhà Q7 chọn gói khá trở lên cho mặt dựng — nên giữ quỹ dự phòng 8–12%.</p>

<h2>Gợi ý thiết kế nhà phố Q7</h2>
<ol>
  <li>Tầng trệt cao thoáng nếu để xe và khách.</li>
  <li>Cách âm phòng ngủ mặt đường.</li>
  <li>Sân thượng có mái che máy &amp; khu phơi.</li>
</ol>

<h2>Hoàn thiện chuẩn khu dân cư Quận 7</h2>
<p>Chủ nhà Q7 thường yêu cầu khe hoàn thiện mỏng, cửa nhôm tốt hơn và chống ồn. Dự toán <strong>xây nhà Quận 7</strong> nên tách dòng vật tư mặt dựng để kiểm soát. Đừng ép gói tiêu chuẩn rồi đòi chi tiết cao cấp giữa chừng.</p>
<h3>Thi công trong khu có bảo vệ</h3>
<p>Cần đăng ký xe ra vào, giờ làm việc và vệ sinh đường nội khu. Sao Khuê chủ động xin lịch với BQL để tránh dừng việc đột xuất.</p>

<h2>Ngân sách hoàn thiện “ăn khớp” khu Q7</h2>
<p>Nhiều căn quanh các khu dân cư Q7 có mặt đứng đồng bộ; nhà lệch chuẩn quá thấp hoặc quá “dát” đều khó chịu. <strong>Xây nhà Quận 7</strong> nên chọn vật liệu cửa–sơn–ốp ở mức khá nếu ngân sách cho phép, thay vì dồn hết tiền vào nội thất rời.</p>
<ul>
  <li>Cửa và khóa: dùng hàng bền, ít bảo trì.</li>
  <li>Chống ồn phòng ngủ mặt đường.</li>
  <li>Sân thượng máy sạch sẽ, có lối bảo trì.</li>
</ul>

<h2>Đối soát nội quy khu trước khi khởi công Q7</h2>
<p>In nội quy giờ làm việc, lối xe công trường và yêu cầu vệ sinh. Đưa vào phụ lục hợp đồng để đội thi công tuân thủ. <strong>Xây nhà Quận 7</strong> suôn sẻ khi pháp lý khu và giấy phép nhà nước khớp nhau từ đầu.</p>
<ul>
  <li>Giờ cấm ồn.</li>
  <li>Đăng ký xe.</li>
  <li>Khu tập kết phế thải.</li>
</ul>

<h2>FAQ xây nhà Quận 7</h2>
<details>
  <summary>Nhà trong khu compound có cần nhà thầu “niêm yết” không?</summary>
  <p>Một số ban quản lý yêu cầu đăng ký ra vào công trường — Sao Khuê hỗ trợ thủ tục ra vào theo nội quy khu.</p>
</details>
<details>
  <summary>Có nhận thi công cải tạo nhà Q7 không?</summary>
  <p>Có, đặc biệt cải tạo mặt tiền và hoàn thiện lại trước khi ở/cho thuê.</p>
</details>
<details>
  <summary>Bảo hành?</summary>
  <p>Kết cấu 10 năm với phần thi công Sao Khuê; hoàn thiện theo hạng mục hợp đồng.</p>
</details>

<h2>Khảo sát công trình Q7</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "xay-nha-go-vap": {
    title: "Xây Nhà Gò Vấp — Nhà Ống Hẻm, Tối Ưu Diện Tích & Chi Phí",
    excerpt:
      "Xây nhà Gò Vấp: nhà ống mặt tiền hẹp, hẻm xe hơi, đơn giá thực tế. Sao Khuê 0909 075 668.",
    metaTitle: "Xây Nhà Gò Vấp — Nhà Ống & Hẻm Nhỏ",
    metaDescription:
      "Xây nhà Gò Vấp: giải pháp nhà ống, phụ phí hẻm, khung giá 2026. Gọi 0909 075 668.",
    metaKeywords:
      "xây nhà gò vấp, xây nhà phố gò vấp, nhà thầu gò vấp, xây nhà ống gò vấp",
    imageAlt: "Xây nhà tại quận Gò Vấp",
    content: `<h2>Xây nhà Gò Vấp: bài toán nhà ống sâu &amp; hẻm đông</h2>
<p><strong>Xây nhà Gò Vấp</strong> đặc trưng mặt tiền 3,5–5m, chiều sâu lớn, hẻm xe máy/xe hơi ken dày. Ưu tiên công năng và lấy sáng hơn mặt đứng rườm rà. <strong>Kiến Trúc Sao Khuê</strong> tối ưu giếng trời, cầu thang và bố trí WC mỗi sàn cho gia đình đông.</p>
<p><a href="/dich-vu/xay-nha-tron-goi">Xây trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Thực tế hiện trường Gò Vấp</h2>
<ul>
  <li>Giờ đổ bê tông cần tránh kẹt xe giờ cao điểm.</li>
  <li>Hẻm hẹp: tính phí bốc vác vào dự toán ngay từ đầu.</li>
  <li>Nhà cũ phá dựng: thỏa thuận hàng xóm về rung–bụi.</li>
  <li>Mưa dầm: che chắn cốt thép và đường công vụ tạm.</li>
</ul>

<h2>Bảng chi phí xây nhà Gò Vấp tham khảo</h2>
<table>
  <thead>
    <tr><th>Quy mô</th><th>Sàn ước tính</th><th>Trọn gói tiêu chuẩn (gợi ý)</th></tr>
  </thead>
  <tbody>
    <tr><td>Nhà 3 tầng MT 4m</td><td>~200–240 m²</td><td>~1,0 – 1,3 tỷ</td></tr>
    <tr><td>Nhà 4 tầng MT 4m</td><td>~260–320 m²</td><td>~1,3 – 1,75 tỷ</td></tr>
    <tr><td>Phần thô cùng quy mô</td><td>—</td><td>Theo 3,55–3,8 triệu/m²</td></tr>
    <tr><td>Phụ phí hẻm</td><td>—</td><td>+3–12% tùy điều kiện</td></tr>
  </tbody>
</table>

<h2>Gợi ý thiết kế tiết kiệm diện tích</h2>
<ol>
  <li>Cầu thang giữa hoặc lệch để chia sáng.</li>
  <li>Bếp sau + thông gió ống kỹ thuật.</li>
  <li>Ban công nhỏ lấy sáng, không chiếm hết chiều sâu.</li>
  <li>Nội thất đóng theo tường để giảm “chết” diện tích.</li>
</ol>

<h2>Nhà ống Gò Vấp: tối ưu tầng lửng có nên không?</h2>
<p>Tầng lửng tăng diện tích nhưng ảnh hưởng chiều cao thông thủy và đôi khi liên quan quy định phép. Với <strong>xây nhà Gò Vấp</strong>, chỉ nên làm lửng khi chiều cao cho phép và công năng thực sự cần (để xe + kho). Lửng “cho có” dễ tạo cảm giác thấp và bí.</p>
<h3>Chống ồn mặt hẻm đông</h3>
<p>Cửa kính dày hơn ở phòng ngủ mặt hẻm, tường xây đủ khối — giải pháp đơn giản hiệu quả hơn dán nhiều vật liệu đắt tiền.</p>

<h2>Phá nhà cũ xây mới tại Gò Vấp: trình tự gọn</h2>
<p>Tháo dỡ có kiểm soát → rào chắn → móng mới. Với <strong>xây nhà Gò Vấp</strong> mật độ dày, tháo dỡ ồ ạt gây khiếu nại nhanh. Sao Khuê lên biện pháp rung–bụi và giờ cắt phá trước khi khởi công.</p>
<ol>
  <li>Ngắt điện nước, kiểm tra tường chung.</li>
  <li>Tháo từng phần, đổ phế thải đúng nơi.</li>
  <li>Khảo sát lại nền sau tháo trước khi ép cọc/đào móng.</li>
</ol>
<p>Liên hệ 0909 075 668.</p>

<h2>Nhà phố Gò Vấp 4 tầng: có nên không?</h2>
<p>Phụ thuộc phép, chịu lực và nhu cầu ở thật. Nhiều hộ chọn 3 tầng + sân thượng để giảm tải và chi phí. Nếu quyết <strong>xây nhà Gò Vấp</strong> 4 tầng trên mặt tiền hẹp, thiết kế phải tối ưu cầu thang và chiếu sáng giữa nhà — tránh tạo ống tối.</p>
<ol>
  <li>Kiểm tra quy hoạch số tầng.</li>
  <li>Tính móng đủ tải.</li>
  <li>Giếng trời / ô thoáng bắt buộc với nhà sâu.</li>
</ol>
<p>Tư vấn: 0909 075 668.</p>

<h2>FAQ xây nhà Gò Vấp</h2>
<details>
  <summary>Nhà mặt tiền 3,5m có làm 4 tầng được không?</summary>
  <p>Phụ thuộc quy hoạch và kết cấu. Kỹ thuật vẫn làm được nhà hẹp nếu thiết kế đúng — quan trọng là phép và chịu lực.</p>
</details>
<details>
  <summary>Có khảo sát cuối tuần không?</summary>
  <p>Có thể xếp lịch qua hotline 0909 075 668 tùy tải đội kỹ thuật.</p>
</details>
<details>
  <summary>Bảo hành?</summary>
  <p>Kết cấu 10 năm — văn phòng hỗ trợ tại 245/8 Bình Lợi, Bình Thạnh.</p>
</details>

<h2>Đặt lịch xây nhà Gò Vấp</h2>
<p>Gọi <strong>0909 075 668</strong>.</p>`,
  },

  "thiet-ke-nha-pho-tphcm": {
    title: "Thiết Kế Nhà Phố TP.HCM — Mặt Bằng Thực Dụng Cho Đất Hẹp",
    excerpt:
      "Thiết kế nhà phố TP.HCM: tối ưu tầng, giếng trời, đồng bộ xây dựng. Tư vấn 0909 075 668.",
    metaTitle: "Thiết Kế Nhà Phố TP.HCM — Đất Hẹp Vẫn Đủ",
    metaDescription:
      "Thiết kế nhà phố TP.HCM: nguyên tắc mặt bằng, phí thiết kế, gắn với thi công. 0909 075 668.",
    metaKeywords:
      "thiết kế nhà phố tphcm, thiết kế nhà ống, mặt bằng nhà phố, kiến trúc nhà phố",
    imageAlt: "Thiết kế nhà phố TP.HCM — mặt bằng và phối cảnh",
    content: `<h2>Thiết kế nhà phố TP.HCM: thước đo là ở được, không chỉ “nhìn sang”</h2>
<p><strong>Thiết kế nhà phố TP.HCM</strong> giải quyết đất hẹp, sâu, tiếp giáp hai bên. Bản vẽ tốt phải chỉ ra lối thoát hiểm, thông gió, vị trí ống kỹ thuật và cách thi công trong hẻm. <strong>Kiến Trúc Sao Khuê</strong> gắn thiết kế với dự toán xây để tránh “vẽ xong không xây nổi”.</p>
<p>Sau thiết kế: <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a> · <a href="/bao-gia">báo giá</a>.</p>

<h2>Nguyên tắc mặt bằng nhà phố</h2>
<ul>
  <li>Trục giao thông nội bộ rõ (cầu thang + hành lang tối thiểu).</li>
  <li>Khu ướt chồng tầng để ngắn ống.</li>
  <li>Lấy sáng giữa nhà bằng giếng trời/ô thoáng.</li>
  <li>Để xe và kho không “ăn” hết chiều sâu sinh hoạt.</li>
</ul>

<h2>Bảng phí &amp; gói thiết kế nhà phố</h2>
<table>
  <thead>
    <tr><th>Gói</th><th>Nội dung</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    <tr><td>Concept mặt bằng</td><td>1–2 phương án bố trí</td><td>Chốt công năng sớm</td></tr>
    <tr><td>Hồ sơ xin phép</td><td>Bản vẽ theo yêu cầu nộp</td><td>Theo địa bàn quận</td></tr>
    <tr><td>Hồ sơ thi công</td><td>Chi tiết KT–KC–ME cơ bản</td><td>Để thợ làm đúng</td></tr>
    <tr><td>Kèm xây trọn gói</td><td>Ưu đãi theo chương trình</td><td>Đồng bộ bảo hành 10 năm kết cấu</td></tr>
  </tbody>
</table>

<h2>Các lỗi thiết kế nhà phố hay gặp</h2>
<ol>
  <li>Cầu thang chiếm quá nhiều diện tích hữu dụng.</li>
  <li>WC không chồng ống — đục phá khi thi công.</li>
  <li>Mặt tiền kính lớn hướng Tây thiếu che nắng.</li>
  <li>Không chừa vị trí máy lạnh, máy nước nóng.</li>
</ol>

<h2>Từ brief đến bản vẽ thi công: bao lâu?</h2>
<p>Nhà phố tiêu chuẩn thường 2–4 tuần cho phương án và chỉnh sửa cơ bản, lâu hơn nếu xin phép phức tạp hoặc chủ nhà đổi ý nhiều. <strong>Thiết kế nhà phố TP.HCM</strong> nhanh chỉ tốt khi brief rõ số người ở, ngân sách và có/không kinh doanh tầng trệt.</p>
<h3>Đồng bộ kiến trúc – kết cấu – điện nước</h3>
<p>Chốt vị trí giếng trời, cầu thang và trục kỹ thuật sớm để kết cấu và ME không “đụng” nhau trên công trường. Đây là lý do Sao Khuê thích thiết kế gắn thi công.</p>

<h2>Thiết kế nhà phố có tầng hầm/để xe ô tô</h2>
<p>Tầng hầm hoặc trệt để ô tô cần độ dốc, chiều cao thông thủy và thoát nước đúng. Không phải lô đất hẹp nào cũng nên cố. Trong <strong>thiết kế nhà phố TP.HCM</strong>, Sao Khuê sẽ nói rõ nếu khổ đất không đủ để xe vào an toàn thay vì vẽ “cho đẹp hồ sơ”.</p>
<ul>
  <li>Đo chiều ngang cổng và bán kính quay.</li>
  <li>Tính chiều cao xe + ống kỹ thuật.</li>
  <li>Chống thấm và chống trơn dốc để xe.</li>
</ul>

<h2>Brief thiết kế nhà phố: mẫu câu hỏi Sao Khuê hay dùng</h2>
<p>Bao nhiêu người ở? Có người già/trẻ nhỏ? Có để xe ô tô? Ngân sách xây khoảng bao nhiêu? Có kinh doanh tầng trệt? Trả lời rõ giúp <strong>thiết kế nhà phố TP.HCM</strong> đi đúng hướng ngay phương án 1, giảm vòng chỉnh.</p>
<ul>
  <li>Nhu cầu phòng ngủ–WC.</li>
  <li>Thói quen nấu nướng / làm việc tại nhà.</li>
  <li>Ưu tiên ánh sáng hay diện tích phòng lớn.</li>
</ul>

<h2>FAQ thiết kế nhà phố</h2>
<details>
  <summary>Có cần thiết kế kết cấu riêng không?</summary>
  <p>Có với nhà nhiều tầng hoặc địa chất phức tạp. Đừng dùng bản vẽ “mẫu mạng” để đổ móng.</p>
</details>
<details>
  <summary>Đổi thiết kế giữa chừng tốn kém thế nào?</summary>
  <p>Đổi sau khi đã đổ sàn/cột rất đắt. Chốt mặt bằng kỹ ở giai đoạn giấy.</p>
</details>
<details>
  <summary>Nhà phố có thang máy nhỏ được không?</summary>
  <p>Được nếu chừa hố và tải thiết kế từ đầu; cải tạo chèn sau khó và đắt hơn.</p>
</details>

<h2>Đặt lịch thiết kế</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  "cam-nang-xay-nha-2026": {
    title: "Cẩm Nang Xây Nhà 2026 — Checklist Thực Tế Cho Chủ Nhà TP.HCM",
    excerpt:
      "Cẩm nang xây nhà 2026: tài chính, phép, nhà thầu, giám sát, nghiệm thu. Sao Khuê 0909 075 668.",
    metaTitle: "Cẩm Nang Xây Nhà 2026 — Checklist Chủ Nhà",
    metaDescription:
      "Cẩm nang xây nhà 2026: từng bước từ ngân sách đến bàn giao, tránh phát sinh. Hotline 0909 075 668.",
    metaKeywords:
      "cẩm nang xây nhà 2026, kinh nghiệm xây nhà, xây nhà lần đầu, checklist xây nhà",
    imageAlt: "Cẩm nang xây nhà 2026 — hướng dẫn chủ nhà",
    content: `<h2>Cẩm nang xây nhà 2026: làm chủ cuộc chơi trước khi đào đất</h2>
<p><strong>Cẩm nang xây nhà 2026</strong> dành cho chủ nhà TP.HCM muốn giảm rủi ro: tiền thiếu giữa chừng, thầu bỏ việc, thấm sau một mùa mưa. <strong>Kiến Trúc Sao Khuê</strong> rút kinh nghiệm hiện trường thành checklist ngắn — kèm bảo hành kết cấu 10 năm khi thi công với chúng tôi.</p>
<p>Công cụ: <a href="/bao-gia">tính chi phí</a> · dịch vụ <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a> · <a href="/dich-vu/sua-chua-nha">sửa chữa</a>.</p>

<h2>Bước 1 — Khoanh ngân sách thật</h2>
<ul>
  <li>Tách quỹ: xây + nội thất + dự phòng 8–12%.</li>
  <li>Không lấy đơn giá mạng nhân diện tích đất.</li>
  <li>Tính phụ phí hẻm nếu xe tải không vào.</li>
</ul>

<h2>Bước 2 — Pháp lý &amp; hiện trạng</h2>
<ol>
  <li>Sổ/đất sạch quy hoạch.</li>
  <li>Đo hẻm, lộ giới, hàng xóm.</li>
  <li>Xin giấy phép trước khi thi công lớn.</li>
</ol>

<h2>Bước 3 — Chọn nhà thầu bằng hợp đồng</h2>
<table>
  <thead>
    <tr><th>Tiêu chí 2026</th><th>Đạt</th><th>Không đạt</th></tr>
  </thead>
  <tbody>
    <tr><td>Vật tư ghi rõ</td><td>Có thương hiệu/mác</td><td>Chỉ ghi “loại tốt”</td></tr>
    <tr><td>Thanh toán</td><td>Theo móc nghiệm thu</td><td>Đòi gần hết trước</td></tr>
    <tr><td>Bảo hành kết cấu</td><td>≥ 10 năm (Sao Khuê)</td><td>Không ghi hoặc rất ngắn</td></tr>
    <tr><td>Phát sinh</td><td>Phụ lục văn bản</td><td>Thỏa thuận miệng</td></tr>
  </tbody>
</table>

<h2>Bước 4 — Giám sát những nút thắt</h2>
<ul>
  <li>Nghiệm thu cốt thép trước đổ bê tông.</li>
  <li>Water test chống thấm trước ốp lát.</li>
  <li>Đối chiếu ổ cắm–điều hòa với bản vẽ.</li>
</ul>

<h2>Bước 5 — Nghiệm thu bàn giao</h2>
<p>Checklist điện nước, cửa, thấm, biên bản bảo hành. Giữ hồ sơ bản vẽ hoàn công để sửa sau này.</p>

<h2>Cập nhật tư duy xây nhà năm 2026</h2>
<p>Vật tư và nhân công biến động; chủ nhà nên chốt hợp đồng có điều khoản rõ khi đổi giá. Ưu tiên năng lượng (máy nước nóng NLMT, đèn LED, thông gió tự nhiên) ngay từ thiết kế thay vì gắn thêm sau. <strong>Cẩm nang xây nhà 2026</strong> của Sao Khuê nhấn mạnh: pháp lý đúng – kết cấu chắc – hoàn thiện đủ – nội thất làm sau nếu cần.</p>
<h3>Ba sai lầm vẫn lặp lại</h3>
<ol>
  <li>Chọn thầu chỉ vì giá thấp nhất.</li>
  <li>Đổi thiết kế khi đã đổ xong nhiều sàn.</li>
  <li>Bỏ chống thấm để “tiết kiệm”.</li>
</ol>

<h2>Tài liệu chủ nhà nên giữ suốt vòng đời nhà</h2>
<p>Giấy phép, bản vẽ hoàn công, hợp đồng, biên bản bảo hành, hóa đơn vật tư quan trọng. <strong>Cẩm nang xây nhà 2026</strong> khuyến nghị lưu bản số hóa. Khi sửa sau này hoặc bán nhà, bộ hồ sơ này tiết kiệm thời gian và tăng niềm tin người mua.</p>
<ol>
  <li>Scan hợp đồng và phụ lục.</li>
  <li>Ảnh nghiệm thu thép từng sàn.</li>
  <li>Sơ đồ điện nước thực tế.</li>
</ol>
<p>Sao Khuê bàn giao hồ sơ kèm hướng dẫn bảo dưỡng cơ bản.</p>

<h2>Checklist in mang theo khi ký hợp đồng 2026</h2>
<p>In trang này: phạm vi việc, vật tư, tiến độ, thanh toán, bảo hành, phụ lục phát sinh, địa chỉ pháp nhân. <strong>Cẩm nang xây nhà 2026</strong> không thay luật sư, nhưng giúp bạn không quên câu hỏi quan trọng trước khi đặt cọc.</p>
<ol>
  <li>☐ Đã khảo sát hiện trường?</li>
  <li>☐ Đã đọc kỹ phụ lục vật tư?</li>
  <li>☐ Đã hiểu cách tính m²?</li>
  <li>☐ Đã giữ quỹ dự phòng?</li>
</ol>
<p>Sao Khuê: 0909 075 668 · 245/8 Bình Lợi, Bình Thạnh · bảo hành kết cấu 10 năm.</p>

<h2>FAQ cẩm nang 2026</h2>
<details>
  <summary>Nên xây mùa khô hay mùa mưa?</summary>
  <p>Mùa khô dễ tiến độ ngoài trời hơn. Vẫn xây được mùa mưa nếu nhà thầu có biện pháp che chắn và lịch đổ bê tông linh hoạt.</p>
</details>
<details>
  <summary>Tự giám sát được không?</summary>
  <p>Được nếu am hiểu; nếu không hãy chọn trọn gói có nghiệm thu từng giai đoạn rõ.</p>
</details>
<details>
  <summary>Liên hệ Sao Khuê thế nào?</summary>
  <p>0909 075 668 · 245/8 Bình Lợi, Bình Thạnh.</p>
</details>

<h2>Bắt đầu với khảo sát miễn phí</h2>
<p>Gọi <strong>0909 075 668</strong> để được hướng dẫn theo đúng nền đất của bạn.</p>`,
  },

  "sua-nha-cu-tphcm": {
    title: "Sửa Nhà Cũ TP.HCM — Vá Đúng Bệnh, Giữ Ngân Sách Gọn",
    excerpt:
      "Sửa nhà cũ TP.HCM: thấm, nứt, điện nước, sơn sửa. Khảo sát đúng gốc — 0909 075 668.",
    metaTitle: "Sửa Nhà Cũ TP.HCM — Vá Đúng Bệnh",
    metaDescription:
      "Sửa nhà cũ TP.HCM: hạng mục ưu tiên, bảng giá tham khảo, quy trình. Hotline 0909 075 668.",
    metaKeywords:
      "sửa nhà cũ tphcm, sửa chữa nhà cũ, nâng cấp nhà cũ, thợ sửa nhà tphcm",
    imageAlt: "Sửa nhà cũ tại TP.HCM",
    content: `<h2>Sửa nhà cũ TP.HCM: ưu tiên an toàn &amp; khô ráo trước “làm đẹp”</h2>
<p><strong>Sửa nhà cũ TP.HCM</strong> nên xếp thứ tự: kết cấu → thấm → điện nước → thẩm mỹ. Sơn đè lên tường đang ngấm chỉ đẹp được vài tháng. <strong>Kiến Trúc Sao Khuê</strong> chẩn đoán trước khi báo giá — tránh vá tạm.</p>
<p>Dịch vụ: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a> · cải tạo lớn xem thêm báo giá trên <a href="/bao-gia">/bao-gia</a>.</p>

<h2>Các việc sửa nhà cũ hay làm trong năm</h2>
<ul>
  <li>Chống thấm WC, sân thượng trước mùa mưa.</li>
  <li>Thay đường ống nước cũ gỉ / dò.</li>
  <li>Nâng cấp tủ điện cho điều hòa.</li>
  <li>Sơn lại, thay gạch vỡ, sửa cửa xệ.</li>
  <li>Cải tạo bếp nhỏ gọn hơn.</li>
</ul>

<h2>Bảng giá sửa nhà cũ tham khảo</h2>
<table>
  <thead>
    <tr><th>Việc sửa</th><th>Chi phí gợi ý</th><th>Ghi chú</th></tr>
  </thead>
  <tbody>
    <tr><td>Sơn lại toàn nhà phố</td><td>40 – 120 triệu</td><td>Tùy diện tích tường</td></tr>
    <tr><td>Xử lý thấm từng khu</td><td>Theo m² xử lý</td><td>Xem thêm chống thấm</td></tr>
    <tr><td>Sửa bếp + tủ + điện nước khu vực</td><td>50 – 180 triệu</td><td>Chưa gồm thiết bị cao cấp</td></tr>
    <tr><td>Gói sửa trước cho thuê</td><td>80 – 250 triệu</td><td>Checklist theo hiện trạng</td></tr>
  </tbody>
</table>

<h2>Quy trình sửa gọn cho nhà đang ở</h2>
<ol>
  <li>Chia khu vực thi công, che chắn đồ.</li>
  <li>Làm ướt / bụi trước (đục, chống thấm).</li>
  <li>Hoàn thiện khô (sơn, lắp đặt).</li>
  <li>Vệ sinh và bàn giao từng khu.</li>
</ol>

<h2>Sửa nhà cũ đang có người ở: lịch hợp lý</h2>
<p>Chia việc theo khu vực và giờ ồn. WC làm trước hoặc sắp xếp WC tạm. Sơn vào khung giờ thông thoáng. Gói <strong>sửa nhà cũ TP.HCM</strong> của Sao Khuê có thể lập tiến độ “ở được từng phần” nếu hiện trạng cho phép.</p>
<h3>Khi nào nên dừng vá và lên phương án cải tạo?</h3>
<p>Nếu mỗi năm sửa thấm–điện–nứt lặp lại, tổng chi phí có thể vượt một lần cải tạo bài bản. Kỹ sư sẽ giúp cộng dồn lịch sử sửa để bạn quyết định.</p>

<h2>Sửa nhà cũ theo mùa: mưa và nắng</h2>
<p>Trước mưa: thấm, mái, thoát nước. Mùa khô: sơn ngoại thất, ốp mặt tiền. Lịch này giúp <strong>sửa nhà cũ TP.HCM</strong> ít phải làm lại. Nếu chỉ có một kỳ nghỉ ngắn để sửa, hãy ưu tiên hạng mục nước–điện trước sơn trang trí.</p>
<ul>
  <li>Mưa: chống thấm + thoát sàn.</li>
  <li>Nắng: sơn ngoài + mặt dựng.</li>
  <li>Quanh năm: điện an toàn, ổ cắm lỏng.</li>
</ul>

<h2>Sửa nhà cũ và chống mối, ẩm nền</h2>
<p>Nhà cũ nền thấp dễ ẩm. Khi <strong>sửa nhà cũ TP.HCM</strong>, xem xét xử lý ẩm chân tường, thông gió và chống mối nếu khu vực có dấu hiệu. Bỏ qua sẽ làm sơn–gỗ mới xuống cấp nhanh.</p>
<ul>
  <li>Kiểm tra chân tường phồng rộp.</li>
  <li>Bổ sung thông gió khu tối.</li>
  <li>Xử lý ổ mối trước khi đóng trần.</li>
</ul>
<p>0909 075 668.</p>

<h2>FAQ sửa nhà cũ</h2>
<details>
  <summary>Nhà cũ 30 năm có nên sửa hay xây lại?</summary>
  <p>Nếu kết cấu còn tốt và công năng chỉ cần chỉnh: sửa/cải tạo. Nếu cột dầm xuống cấp nặng hoặc muốn thêm nhiều tầng: cân nhắc xây lại.</p>
</details>
<details>
  <summary>Sửa có bảo hành không?</summary>
  <p>Có theo hạng mục. Gia cố kết cấu thuộc Sao Khuê: hướng tới cam kết bảo hành kết cấu 10 năm.</p>
</details>
<details>
  <summary>Có nhận sửa ngoài giờ hành chính không?</summary>
  <p>Tùy việc và nội quy khu phố (ồn). Liên hệ 0909 075 668 để xếp lịch.</p>
</details>

<h2>Gọi sửa nhà cũ</h2>
<p><strong>0909 075 668</strong> · 245/8 Bình Lợi, Bình Thạnh.</p>`,
  },

  "lam-moi-nha-cu-tphcm": {
    title: "Làm Mới Nhà Cũ TP.HCM — Diện Mạo & Công Năng Chỉ Trong Vài Tuần",
    excerpt:
      "Làm mới nhà cũ TP.HCM: sơn, lát, đèn, bếp–WC, mặt tiền nhẹ. Nhanh gọn — 0909 075 668.",
    metaTitle: "Làm Mới Nhà Cũ TP.HCM — Nhanh & Gọn",
    metaDescription:
      "Làm mới nhà cũ TP.HCM: gói thẩm mỹ + công năng nhẹ, bảng giá, tiến độ. Hotline 0909 075 668.",
    metaKeywords:
      "làm mới nhà cũ tphcm, refresh nhà cũ, sơn sửa nhà, nâng cấp nhà nhanh",
    imageAlt: "Làm mới nhà cũ tại TP.HCM",
    content: `<h2>Làm mới nhà cũ TP.HCM khác cải tạo sâu ở điểm nào?</h2>
<p><strong>Làm mới nhà cũ TP.HCM</strong> tập trung thay “lớp da” và chỉnh nhẹ công năng: sơn, lát, đèn, tủ bếp module, TBVS, mặt tiền nhẹ — không đập phá kết cấu lớn. Phù hợp nhà còn chắc, muốn ở tiếp hoặc cho thuê nhanh. <strong>Kiến Trúc Sao Khuê</strong> gói việc theo checklist để chốt ngân sách gọn.</p>
<p>Nếu cần đập thông/gia cố: chuyển sang <a href="/dich-vu/sua-chua-nha">sửa chữa – cải tạo</a>. Xây mới: <a href="/dich-vu/xay-nha-tron-goi">xây trọn gói</a>.</p>

<h2>Gói làm mới hay chọn</h2>
<ul>
  <li><strong>Refresh 7–14 ngày:</strong> sơn, đèn, xử lý thấm nhỏ, vệ sinh sâu.</li>
  <li><strong>Refresh + bếp/WC:</strong> 2–4 tuần.</li>
  <li><strong>Refresh + mặt tiền nhẹ:</strong> 3–5 tuần.</li>
</ul>

<h2>Bảng giá làm mới nhà cũ</h2>
<table>
  <thead>
    <tr><th>Gói</th><th>Ngân sách gợi ý</th><th>Phạm vi</th></tr>
  </thead>
  <tbody>
    <tr><td>Làm mới cơ bản</td><td>60 – 150 triệu</td><td>Sơn, đèn, vá tường, xử lý thấm điểm</td></tr>
    <tr><td>Làm mới + bếp</td><td>150 – 350 triệu</td><td>Thêm tủ bếp, ốp, điện nước khu vực</td></tr>
    <tr><td>Làm mới + WC</td><td>120 – 280 triệu</td><td>Lát lại, TBVS, chống thấm</td></tr>
    <tr><td>Full refresh nhà phố nhỏ</td><td>250 – 550 triệu</td><td>Trong + mặt tiền nhẹ</td></tr>
  </tbody>
</table>
<p><strong>Lưu ý:</strong> Gói làm mới giả định không phát hiện hỏng kết cấu. Nếu lộ nứt nguy hiểm khi tháo lớp cũ, Sao Khuê sẽ dừng để tư vấn gia cố trước khi làm đẹp tiếp.</p>

<h2>Thứ tự thi công “nhanh mà sạch”</h2>
<ol>
  <li>Xử lý ẩm/thấm điểm.</li>
  <li>Điện nước chỉnh sửa.</li>
  <li>Ốp lát khu vực đổi mới.</li>
  <li>Sơn – trần – đèn.</li>
  <li>Lắp tủ, TBVS, vệ sinh bàn giao.</li>
</ol>

<h2>Làm mới để cho thuê: điểm chạm quyết định</h2>
<p>Người thuê nhìn nhanh: cửa chính, WC, bếp, mùi ẩm, đèn. Gói <strong>làm mới nhà cũ TP.HCM</strong> nên dồn ngân sách vào các điểm này trước đồ trang trí. Sơn kháng khuẩn khu ẩm và quạt hút WC giảm khiếu nại sau này.</p>
<h3>Thời điểm làm mới tốt trong năm</h3>
<p>Tránh cao điểm mưa nếu phải sơn ngoài trời nhiều. Nội thất và sơn trong nhà linh hoạt hơn. Đặt lịch sớm qua 0909 075 668 để xếp thợ trước sóng nhu cầu cuối năm.</p>

<h2>Ngân sách làm mới theo từng phòng ưu tiên</h2>
<p>Thứ tự gợi ý: WC → bếp → phòng khách/mặt tiền → phòng ngủ. Người vào nhà đánh giá nhanh sự sạch sẽ khu ướt trước. Gói <strong>làm mới nhà cũ TP.HCM</strong> theo thứ tự này cho hiệu quả cảm nhận cao nhất trên mỗi đồng chi.</p>
<ol>
  <li>WC: chống thấm, lát, TBVS, quạt hút.</li>
  <li>Bếp: tủ, ốp, bếp nấu, hút mùi.</li>
  <li>Khách + mặt tiền: sơn, đèn, cửa.</li>
  <li>Ngủ: sơn, rèm, ổ cắm.</li>
</ol>
<p>Đặt lịch: 0909 075 668 · 245/8 Bình Lợi, Bình Thạnh.</p>

<h2>Làm mới nhà cũ không cần chuyển hết đồ</h2>
<p>Che chắn từng phòng, làm tuần tự, chuyển đồ theo cụm. Gói <strong>làm mới nhà cũ TP.HCM</strong> “ở được trong lúc làm” phù hợp gia đình không thuê nhà ngoài. Cần chịu mùi sơn và bụi nhẹ — nếu dị ứng nặng nên chuyển tạm vài ngày khi sơn.</p>
<ol>
  <li>Dọn một phòng làm kho tạm.</li>
  <li>Thi công phòng trống trước.</li>
  <li>Vệ sinh từng khu rồi chuyển đồ lại.</li>
</ol>
<p>Đặt lịch: 0909 075 668 · 245/8 Bình Lợi.</p>

<h2>FAQ làm mới nhà cũ</h2>
<details>
  <summary>Có ở trong nhà khi làm mới được không?</summary>
  <p>Thường được nếu làm từng khu và chịu được mùi sơn/bụi nhẹ. Làm bếp–WC nên sắp xếp nấu ăn tạm.</p>
</details>
<details>
  <summary>Làm mới có tăng giá thuê không?</summary>
  <p>Mặt tiền sạch, bếp–WC mới và đèn đủ thường giúp cho thuê nhanh hơn — hiệu quả với căn hộ/nhà phố cho thuê tại TP.HCM.</p>
</details>
<details>
  <summary>Bảo hành thế nào?</summary>
  <p>Bảo hành hạng mục hoàn thiện theo hợp đồng. Nếu phát sinh gia cố, phần kết cấu theo cam kết 10 năm của Sao Khuê.</p>
</details>

<h2>Đặt lịch làm mới nhà</h2>
<p>Hotline <strong>0909 075 668</strong> · Văn phòng 245/8 Bình Lợi, Q. Bình Thạnh.</p>`,
  },

  ...moneyPageOverridesBatch2,
  ...moneyPageOverridesBatch3,
};

/**
 * Soft-depth — đẩy money page còn ~1.800–2.000 ký tự lên ngưỡng SEO chắc hơn.
 * Mỗi slug 1–2 H2 riêng, không copy khung.
 */
const MONEY_SOFT_DEPTH: Record<string, string> = {
  "xay-nha-4-tang-tphcm": `<h2>Ngân sách 4 tầng — đọc đúng mốc</h2><p>Nhà phố 4×16–5×18 nội thành thường vài tỷ (chưa cọc nếu nền yếu). Đừng lấy đơn giá 3 tầng nhân 4/3. Cho thuê: WC từng tầng + điện tách tính riêng. Tra phép chiều cao trước khi vay thêm một sàn. Hotline <strong>0909 075 668</strong>.</p>`,
  "xay-nha-quan-2": `<h2>Checklist khảo sát Q.2 / Thủ Đức</h2><p>Ảnh hẻm + mặt tiền, sổ (che số), số tầng mong muốn, thô hay trọn gói. Đất ven sông: hỏi cọc sớm. Sao Khuê ước lượng trong ngày làm việc rồi hẹn đo. Landing <a href="/xay-nha">/xay-nha</a>.</p>`,
  "xay-shophouse-tphcm": `<h2>Vật tư trệt quán hay bị quên</h2><p>Sàn chống trơn, tủ điện 3 pha, hút mùi, cửa kính đúng hệ nhôm. Báo tách dòng — không nuốt vào m² “nhà ở”. Cải tạo sẵn: <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">cải tạo kết hợp kinh doanh</a>.</p>`,
  "xay-nha-mat-tien-tphcm": `<h2>Tiến độ nhà mặt tiền</h2><p>Facade thường làm sau khi tường khô. Biển hộp đèn / lam: phụ lục. Chỉ giới lộ giới hỏi phường trước khi đúc bậc cấp. Gọi <strong>0909 075 668</strong> gửi ảnh mặt đứng hiện trạng.</p>`,
  "xay-nha-5-tang-tphcm": `<h2>Cho thuê 5 tầng — PCCC sớm</h2><p>Hỏi thoát hiểm và số tầng được phép trước khi vẽ 3D. Điện tách từng tầng, WC riêng. So <a href="/tin-tuc/xay-nha-4-tang-tphcm">4 tầng</a> nếu quy hoạch không cho 5.</p>`,
  "don-gia-hoan-thien-nha-2026": `<h2>Cách đọc đơn giá hoàn thiện</h2><p>Mốc 2,5–5,5 triệu/m² thường chưa nội thất gỗ và điều hòa. Gạch/sơn/cửa ghi mã rõ. Nhà thô: nghiệm thu chống thấm WC–sân trước khi ốp. Xem <a href="/dich-vu/hoan-thien-nha">dịch vụ hoàn thiện</a>.</p>`,
  "xay-biet-thu-tphcm": `<h2>Hợp đồng biệt thự nên tách gì?</h2><p>Nhà / sân / hàng rào / hồ — nghiệm thu từng khối. Không dùng “giá nhà phố” cho biệt thự 200m²+. Case: <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a>.</p>`,
  "sua-dien-nuoc-nha-tphcm": `<h2>Báo giá theo điểm vs gói đồng bộ</h2><p>Vài ổ cắm: tính điểm. Cả nhà dây nhôm + ống sắt: gói đồng bộ rẻ hơn đục ba lần. Gửi sơ đồ tầng khi gọi hotline.</p>`,
  "xay-nha-tan-phu": `<h2>Gửi hồ sơ khảo sát Tân Phú</h2><p>Ảnh hẻm, cao độ nền so đường, số tầng. Khu thấp: hỏi van thoát và cao trệt. <a href="/tin-tuc/xay-nha-tron-goi-tan-phu">Trọn gói Tân Phú</a> · 0909 075 668.</p>`,
  "nang-tang-nha-tphcm": `<h2>Sau khi được phép nâng tầng</h2><p>Gia cố → đổ sàn → tường → chống thấm tum → hoàn thiện. Không ở tum khi chưa nghiệm thu chống thấm. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "xay-nha-tron-goi-binh-thanh": `<h2>Vật tư và nghiệm thu Bình Thạnh</h2><p>List thép–xi măng–sơn trong HĐ. Ảnh cốt thép trước đổ. Văn phòng Bình Lợi — giám sát hiện trường nhanh. Gửi ảnh hẻm: <strong>0909 075 668</strong>.</p>`,
  "xay-nha-tron-goi-binh-duong": `<h2>Xin phép Bình Dương khác TP.HCM chỗ nào?</h2><p>Hồ sơ theo UBND tỉnh/phường mới. Đơn giá không copy Sài Gòn. Hẹn khảo sát trước (không drop-in). Case <a href="/cong-trinh/xay-nha-pho-thuan-an">Thuận An</a>.</p>`,
  "xay-nha-tron-goi-quan-10": `<h2>Hẻm và giờ đổ bê tông Q.10</h2><p>Nhiều hẻm xe máy: bơm từ mặt tiền, ca sớm. Liền kề: biên bản tường chung. Báo phụ phí logistics rõ trong dự toán.</p>`,
  "xay-nha-tron-goi-thu-duc": `<h2>Gửi ảnh khảo sát Thủ Đức</h2><p>KDC hay phố cũ? Ven rạch? Facade CĐT? Trả lời 3 câu này giúp báo đúng gói. Hotline <strong>0909 075 668</strong>.</p>`,
  "xay-nha-tron-goi-quan-6": `<h2>Nhà phố Q.6 — mặt tiền vs hẻm</h2><p>Mặt tiền kinh doanh: điện tách, PCCC. Hẻm: logistics. Không dùng một đơn giá m² cho cả hai. Landing <a href="/xay-nha">/xay-nha</a>.</p>`,
  "xay-nha-tron-goi-quan-5": `<h2>Shophouse / nhà ở Q.5</h2><p>Trệt quán đông khách: hỏi công năng khi GPXD. Lầu ở lối riêng nếu được. Xem <a href="/tin-tuc/xay-shophouse-tphcm">xây shophouse</a>.</p>`,
  "xay-nha-tiet-kiem-tphcm": `<h2>Cắt gì được, cắt gì không?</h2><p>Được: phào chỉ, đèn dư, nội thất phụ. Không: thép–bê tông–chống thấm–điện chống giật. Sao Khuê ghi rõ trong dự toán trước khi ký.</p>`,
  "xay-nha-tron-goi-tan-phu": `<h2>Tiến độ đội Tân Phú</h2><p>Hẻm hẹp: ca đổ sớm. Ngập cục bộ: cao độ trệt + chống thấm chân tường. Gửi ảnh hiện trạng khi gọi hotline.</p>`,
  "thiet-ke-thi-cong-nha-pho-tphcm": `<h2>Khi nào nên tách thiết kế riêng?</h2><p>Nếu chưa chốt thầu: thuê thiết kế trước vẫn được. Ký trọn gói Sao Khuê: thường miễn phí thiết kế theo chương trình — xem <a href="/dich-vu/khuyen-mai">khuyến mại</a>.</p>`,
  "xay-nha-tron-goi-quan-8": `<h2>Nền và kênh khu Q.8</h2><p>Một số tuyến gần kênh: khảo sát địa chất trước khi hứa 4 tầng. Phụ phí cọc tách dòng khỏi m² trọn gói.</p>`,
  "xay-nha-tron-goi-quan-11": `<h2>Checklist khởi công Q.11</h2><p>GPXD đúng phường, biên bản hàng xóm, list vật tư facade, lịch đổ bê tông. Không đào móng khi chưa chốt 4 điểm này.</p>`,
  "bao-gia-xay-nha-phan-tho-tphcm": `<h2>Thanh toán phần thô theo mốc</h2><p>Móng → sàn các tầng → mái chờ. Giữ lại % đến nghiệm thu thô (ngâm sân thượng). Không trả hết khi còn hạng mục chờ.</p>`,
  "xay-nha-cho-thue-tphcm": `<h2>Mặt bằng cho thuê hiệu quả</h2><p>WC từng phòng/tầng, điện tách, lối đi chung rõ. Đừng copy nhà ở gia đình rồi “chia phòng sau”. PCCC hỏi sớm nếu nhiều phòng.</p>`,
  "xay-nha-tron-goi-nha-be": `<h2>Sân vườn và cao độ Nhà Bè</h2><p>Ven kênh: cao độ nền + thoát nước. Sân–hàng rào tính phụ lục. Có thể tách thô rồi hoàn thiện theo quý nếu cashflow giãn.</p>`,
  "xay-nha-tron-goi-phu-nhuan": `<h2>Hẻm Phú Nhuận và liền kề</h2><p>Nhiều tuyến hẹp: xe phế thải nhỏ, bơm bê tông từ mặt tiền. Biên bản tường chung trước đào móng. Gọi <strong>0909 075 668</strong>.</p>`,
  "xay-nha-tron-goi-hoc-mon": `<h2>Đất nền Hóc Môn</h2><p>Khu dân cư mới vs đất vườn: địa chất và đường vào khác nhau. Không áp đơn giá nội thành. Khảo sát tận lô trước khi ký.</p>`,
  "xay-nha-4x12-tphcm": `<h2>Công năng lô 4×12</h2><p>Cầu thang chữ I, giếng nhỏ, ít hành lang. 1 trệt 2–3 lầu phổ biến. Xem thêm <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">4×16</a> nếu lô sâu hơn.</p>`,
  "xin-giay-phep-cai-tao-nha-tphcm": `<h2>Hồ sơ cải tạo thường cần</h2><p>GPXD cũ (nếu có), ảnh hiện trạng, bản vẽ cải tạo, cam kết an toàn. Đổi mặt đứng lớn / nâng tầng: không làm xong mới xin. Sao Khuê tư vấn hiện trạng trong HĐ.</p>`,
  "xay-nha-tron-goi-binh-tan": `<h2>Logistics Bình Tân</h2><p>Đường lớn dễ xe; hẻm trong khu: phụ phí khiêng. GPXD theo phường. Báo giá sau đo đất — không chốt “giá mạng”.</p>`,
  "xay-nha-tron-goi-cu-chi": `<h2>Công trình Củ Chi — lịch đội</h2><p>Xa trung tâm: khảo sát hẹn trước, lịch đổ theo xa lộ. Đất vườn / nền mới: khoan địa chất. Hotline <strong>0909 075 668</strong>.</p>`,
  "xay-nha-tron-goi-quan-7": `<h2>Q.7 / khu Nam — facade và hẻm</h2><p>Khu đô thị mới: facade đồng bộ hơn. Hẻm cũ: logistics. Chốt thô hay trọn gói trước khi ký phụ lục cửa kính.</p>`,
  "xay-nha-tron-goi-tan-binh": `<h2>Gần sân bay Tân Bình</h2><p>Một số tuyến hạn chế chiều cao. Tra phường trước khi vẽ 5 tầng. Ồn máy bay: cách âm cửa kính nếu cần — báo phụ lục.</p>`,
  "xay-nha-uy-tin-tphcm": `<h2>Sau bàn giao — bảo hành</h2><p>CSKH lập phiếu, kỹ thuật khảo sát hạng mục trong HĐ. Kết cấu tới 10 năm. Không “thợ cũ tự vá” ngoài quy trình. Văn phòng 245/8 Bình Lợi.</p>`,
  "cai-tao-nha-tphcm": `<h2>Gửi ảnh để ước lượng nhanh</h2><p>WC, giếng, mặt tiền, nứt cột (nếu có). Sao Khuê tách việc bắt buộc / hoãn được. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "chi-phi-cai-tao-nha-tphcm": `<h2>Ví dụ cashflow cải tạo</h2><p>Chia đợt: chống thấm → điện nước → lát/sơn → mặt tiền. Giữ 10% dự phòng. Không trả hết trước nghiệm thu cuối.</p>`,
};

for (const [slug, extra] of Object.entries(MONEY_SOFT_DEPTH)) {
  const page = moneyPageOverridesBySlug[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

/** Vòng 2 — đẩy soft-thin còn lại qua ngưỡng ~2000 ký tự (unique theo slug). */
const MONEY_SOFT_DEPTH_R2: Record<string, string> = {
  "don-gia-hoan-thien-nha-2026": `<h2>Ba gói hoàn thiện hay gặp</h2><p>Cơ bản (gạch–sơn–cửa gỗ công nghiệp), trung (đá ốp WC, cửa nhôm kính), cao (gỗ tự nhiên, thiết bị vệ sinh nhập). Mỗi gói ghi mã vật tư trong HĐ — tránh “gói A/B” mơ hồ. Nội thất rời và điều hòa luôn phụ lục. Hotline <strong>0909 075 668</strong> gửi ảnh nhà thô để ước lượng đúng gói.</p>`,
  "xay-nha-tiet-kiem-tphcm": `<h2>Lịch thanh toán khi siết ngân sách</h2><p>Chia mốc móng–sàn–mái–hoàn thiện; giữ 10% đến nghiệm thu. Đừng cắt chống thấm tum/WC để “giảm giá” — sửa sau đắt hơn. Có thể làm thô trước, hoàn thiện theo quý nếu cashflow giãn. Landing <a href="/xay-nha">/xay-nha</a>.</p>`,
  "xay-nha-cho-thue-tphcm": `<h2>Xin phép và PCCC nhà cho thuê</h2><p>Nhiều phòng / nhà trọ: hỏi số tầng và lối thoát trước khi vẽ. Điện tách từng phòng giúp thu tiền và an toàn. Không chia phòng sau khi đã đổ sàn theo mặt bằng gia đình. Sao Khuê tư vấn công năng khi khảo sát — gọi <strong>0909 075 668</strong>.</p>`,
  "xay-nha-4x12-tphcm": `<h2>Ngân sách lô 4×12 nội thành</h2><p>1 trệt 2–3 lầu phổ biến vài tỷ (chưa cọc nếu nền yếu). Hẻm hẹp: phụ phí bơm bê tông. Giếng trời nhỏ + cửa sổ sau lấy sáng. So <a href="/tin-tuc/xay-nha-pho-4x16-tphcm">4×16</a> nếu cần phòng ngủ thêm. Báo giá sau đo đất — không chốt theo m² mạng.</p>`,
  "xin-giay-phep-cai-tao-nha-tphcm": `<h2>Cải tạo nào hay phải xin lại phép?</h2><p>Đổi mặt đứng lớn, nâng tầng, đục cột chịu lực, mở cửa lớn sang hàng xóm — thường cần hồ sơ. Sơn–ốp–điện nước trong nhà: thường không. Sao Khuê đọc hiện trạng trước khi hứa “làm nhanh không phép”. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
  "xay-nha-tan-phu": `<h2>Nhà phố Tân Phú — mặt tiền vs hẻm</h2><p>Mặt tiền kinh doanh: điện tách, PCCC. Hẻm sâu: logistics + giờ đổ. Khu thấp: cao độ trệt và van thoát. Không dùng một đơn giá m² cho cả hai. Xem <a href="/tin-tuc/xay-nha-tron-goi-tan-phu">trọn gói Tân Phú</a>.</p>`,
  "xay-nha-5-tang-tphcm": `<h2>Kết cấu và thang máy 5 tầng</h2><p>Cột–móng theo số tầng thực tế; không “cộng thêm một sàn” vào bản 4 tầng. Thang máy (nếu có) tính hố + điện 3 pha phụ lục. Tra chiều cao phường trước khi vay. So <a href="/tin-tuc/xay-nha-4-tang-tphcm">4 tầng</a> nếu quy hoạch không cho 5.</p>`,
  "xay-nha-lech-tang-tphcm": `<h2>Lệch tầng — khi nào nên chọn?</h2><p>Lô sâu hẹp, cần giếng trời lệch, hoặc tách khu ở / cho thuê từng nửa nhà. Kết cấu và chống thấm sàn lệch phức tạp hơn nhà đều tầng — dự toán không copy m² nhà thẳng. Khảo sát hiện trạng trước khi vẽ 3D. Hotline <strong>0909 075 668</strong>.</p><h2>Xin phép lệch tầng</h2><p>Chiều cao tổng và chỉ giới phải khớp GPXD. Không tự đúc thêm nửa sàn sau khi đã nghiệm thu. Sao Khuê ghi rõ số tầng / sàn lệch trong HĐ và biên bản hàng xóm nếu ảnh hưởng tường chung.</p>`,
  "sua-dien-nuoc-nha-tphcm": `<h2>Dấu hiệu nên thay hệ thống cũ</h2><p>Ổ nóng, CB nhảy liên tục, ống nước gỉ / áp yếu tầng trên, dây nhôm lộ. Nhà cải tạo WC: đổi ống PVC đồng bộ trước khi ốp. Báo theo điểm hoặc gói đồng bộ — gửi sơ đồ tầng khi gọi hotline. Liên quan: <a href="/dich-vu/sua-chua-nha">sửa chữa nhà</a>.</p>`,
  "xay-biet-thu-tphcm": `<h2>Tiến độ biệt thự TP.HCM</h2><p>Thường 9–14 tháng với 200–400m² sàn (chưa sân–hồ phức tạp). Địa chất ven kênh / KDC quyết định cọc. HĐ tách nhà / sân / hàng rào / hồ. Case: <a href="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc">biệt thự Thủ Đức</a> · hotline <strong>0909 075 668</strong>.</p>`,
  "xay-shophouse-tphcm": `<h2>Xin phép shophouse / nhà ở kết hợp</h2><p>Trệt quán: hỏi công năng khi GPXD, lối thoát, điện 3 pha. Lầu ở lối riêng nếu được. Facade kính–biển tính phụ lục. Không dùng đơn giá “nhà ở thuần” cho trệt kinh doanh. Xem <a href="/tin-tuc/cai-tao-nha-ket-hop-kinh-doanh-tphcm">cải tạo kết hợp KD</a>.</p>`,
  "xay-nha-tron-goi-go-vap": `<h2>Trọn gói Gò Vấp — khảo sát gì?</h2><p>Ảnh hẻm + mặt tiền, sổ (che số), số tầng, thô hay trọn gói. Nhiều tuyến hẹp: bơm bê tông từ mặt tiền, ca sớm. Liền kề: biên bản tường chung. Sao Khuê ước lượng trong ngày làm việc rồi hẹn đo. Landing <a href="/xay-nha">/xay-nha</a> · <strong>0909 075 668</strong>.</p><h2>Vật tư và nghiệm thu</h2><p>List thép–xi măng–sơn trong HĐ. Ảnh cốt thép trước đổ. Không nhận “giá mạng” không đo đất.</p>`,
  "xay-nha-tron-goi-quan-4": `<h2>Nhà phố Q.4 — logistics và nền</h2><p>Hẻm gần kênh / thấp: hỏi cao độ trệt và thoát nước. Xe phế thải nhỏ, giờ đổ sớm. Mặt tiền kinh doanh: điện tách. Báo phụ phí logistics rõ — không nuốt vào m². Hotline <strong>0909 075 668</strong>.</p><h2>Gói thô vs trọn gói Q.4</h2><p>Thô: móng–khung–mái chờ. Trọn gói: thêm hoàn thiện theo list. Chốt gói trước khi ký phụ lục cửa kính facade.</p>`,
  "xay-nha-tron-goi-thu-duc": `<h2>KDC vs phố cũ Thủ Đức</h2><p>KDC: facade đồng bộ, đường rộng hơn. Phố cũ / gần rạch: địa chất + hẻm. Không một đơn giá cho cả TP. Thủ Đức. Gửi 3 ảnh (hẻm, mặt tiền, sổ che số) khi gọi hotline — báo đúng gói thô/trọn.</p>`,
  "nang-tang-nha-tphcm": `<h2>Khi nào không nên nâng tầng?</h2><p>Móng/cột yếu không gia cố được trong ngân sách, quy hoạch không cho thêm sàn, hoặc hàng xóm không đồng thuận tường chung. Sao Khuê khảo sát kết cấu trước khi hứa “thêm một lầu”. Thay bằng cải tạo công năng nếu phép không cho. Landing <a href="/cai-tao-nha">/cai-tao-nha</a>.</p>`,
};

for (const [slug, extra] of Object.entries(MONEY_SOFT_DEPTH_R2)) {
  const page = moneyPageOverridesBySlug[slug];
  if (page) page.content = `${page.content}\n${extra}`;
}

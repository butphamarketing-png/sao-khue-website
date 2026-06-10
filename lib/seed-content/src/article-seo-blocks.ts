/** Khối HTML dùng chung — CTA, ảnh, link trang chủ (chuẩn brief SEO). */

export const SITE_HOME = "https://kientrucsaokhue.com/";
export const SITE_FANPAGE = "https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi";

export function slugifyAlt(focusKeyword: string): string {
  return focusKeyword
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function imageFigure(
  src: string,
  focusKeyword: string,
  index: 1 | 2 | 3 | 4 | 5,
): string {
  const alt = `${slugifyAlt(focusKeyword)}-${index}`;
  return `<figure class="article-figure article-figure--inline">
<img src="${src}" alt="${alt}" loading="lazy" decoding="async" />
<figcaption>${alt}</figcaption>
</figure>`;
}

/** Ba liên kết trang chủ trong đoạn văn (yêu cầu brief). */
export function homeLinkParagraph(intro = "Tham khảo thêm thông tin tại"): string {
  return `<p>${intro} <a href="${SITE_HOME}" rel="noopener">Kiến Trúc Sao Khuê</a> — website chính thức <a href="${SITE_HOME}">kientrucsaokhue.com</a> và <a href="${SITE_HOME}">dịch vụ thiết kế xây dựng</a> trọn gói tại TP.HCM và các tỉnh lân cận.</p>`;
}

export function seoCtaBlock(focusKeyword: string): string {
  return `<h2>Liên hệ tư vấn ${focusKeyword}</h2>
<p>Nếu bạn đang tìm kiếm giải pháp <strong>${focusKeyword}</strong> chuyên nghiệp, hãy liên hệ <strong>Kiến Trúc Sao Khuê</strong> để được tư vấn miễn phí và nhận báo giá chi tiết.</p>
<ul>
  <li><strong>Website:</strong> <a href="${SITE_HOME}">${SITE_HOME}</a></li>
  <li><strong>Fanpage:</strong> <a href="${SITE_FANPAGE}" rel="noopener noreferrer" target="_blank">${SITE_FANPAGE}</a></li>
  <li><strong>Hotline:</strong> 0909 075 668 · <strong>Email:</strong> kientrucsaokhue@gmail.com</li>
  <li><strong>Địa chỉ:</strong> 245/8 Bình Lợi, P.13, Q. Bình Thạnh, TP.HCM</li>
</ul>
<p>Hoặc để lại thông tin tại <a href="/lien-he">form liên hệ</a> — đội ngũ phản hồi trong giờ hành chính.</p>`;
}

export function faqSection(
  items: { q: string; a: string }[],
  heading = "FAQ — Câu hỏi thường gặp",
): string {
  const body = items
    .map((item) => `<h3>${item.q}</h3>\n<p>${item.a}</p>`)
    .join("\n");
  return `<h2>${heading}</h2>\n${body}`;
}

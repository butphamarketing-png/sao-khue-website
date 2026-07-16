import { CONG_TRINH_CASE_STUDIES } from "./hub-links";

/** Khối HTML chéo giữa các case study + link về hub tin-tuc. */
export function caseStudyRelatedBlock(currentSlug: string): string {
  const others = CONG_TRINH_CASE_STUDIES.filter((c) => !c.href.endsWith(`/${currentSlug}`));
  const items = others
    .map((c) => `<li><a href="${c.href}">${c.label}</a></li>`)
    .join("\n  ");

  return `
<h2>Công trình liên quan</h2>
<ul>
  ${items}
</ul>
<p>Xem thêm hướng dẫn: <a href="/tin-tuc/xay-nha-tphcm">xây nhà TP.HCM</a> · <a href="/tin-tuc/cai-tao-nha-cu-tphcm">cải tạo nhà cũ</a> · <a href="/cong-trinh">tất cả công trình</a>.</p>`.trim();
}

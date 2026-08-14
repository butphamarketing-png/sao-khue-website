/**
 * Internal linking — hub pillars, topic clusters, case studies.
 * Dùng runtime (PostPage) và có thể tái sử dụng trong seed HTML.
 */

export type HubLink = { href: string; label: string };

export const CONG_TRINH_CASE_STUDIES: HubLink[] = [
  { href: "/cong-trinh/xay-nha-pho-binh-thanh", label: "Xây nhà phố Bình Thạnh 4 tầng" },
  { href: "/cong-trinh/xay-nha-pho-thuan-an", label: "Xây nhà phố Thuận An" },
  { href: "/cong-trinh/sua-nha-quan-3", label: "Cải tạo nhà phố Quận 3" },
  { href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", label: "Biệt thự sân vườn Thủ Đức" },
  { href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai", label: "Nhà phố phong cách hiện đại" },
];

export const TIN_TUC_MAIN_HUBS: HubLink[] = [
  { href: "/tin-tuc/xay-nha-tphcm", label: "Xây nhà TP.HCM" },
  { href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", label: "Báo giá xây nhà trọn gói" },
  { href: "/tin-tuc/don-gia-xay-nha-tphcm", label: "Đơn giá xây nhà" },
  { href: "/tin-tuc/chi-phi-xay-nha-tphcm", label: "Chi phí xây nhà" },
  { href: "/tin-tuc/xay-nha-gia-re-tphcm", label: "Xây nhà giá rẻ" },
  { href: "/tin-tuc/cai-tao-nha-cu-tphcm", label: "Cải tạo nhà cũ TP.HCM" },
  { href: "/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm", label: "Báo giá sửa nhà trọn gói" },
  { href: "/tin-tuc/thiet-ke-nha-pho-tphcm", label: "Thiết kế nhà phố" },
  { href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", label: "Công ty xây dựng uy tín" },
];

const BUILD_CLUSTER: HubLink[] = [
  { href: "/dich-vu/xay-nha-tron-goi", label: "Dịch vụ xây nhà trọn gói" },
  { href: "/xay-moi", label: "Xây nhà mới trọn gói" },
  { href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", label: "Báo giá xây nhà trọn gói" },
  { href: "/tin-tuc/chi-phi-xay-nha-tphcm", label: "Chi phí xây nhà TP.HCM" },
  { href: "/tin-tuc/don-gia-xay-nha-tphcm", label: "Đơn giá xây nhà TP.HCM" },
  { href: "/tin-tuc/xay-nha-gia-re-tphcm", label: "Xây nhà giá rẻ" },
  { href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", label: "Công ty xây dựng uy tín" },
];

const RENOVATION_CLUSTER: HubLink[] = [
  { href: "/dich-vu/cai-tao-nha-cu", label: "Dịch vụ cải tạo nhà cũ" },
  { href: "/tin-tuc/cai-tao-nha-cu-tphcm", label: "Cải tạo nhà cũ TP.HCM" },
  { href: "/tin-tuc/cai-tao-nha-tron-goi-tphcm", label: "Cải tạo nhà trọn gói TP.HCM" },
  { href: "/tin-tuc/bao-gia-cai-tao-nha-tphcm", label: "Báo giá cải tạo nhà" },
  { href: "/tin-tuc/chi-phi-cai-tao-nha-tphcm", label: "Chi phí cải tạo nhà" },
  { href: "/tin-tuc/nang-tang-nha-pho-tphcm", label: "Nâng tầng nhà phố" },
];

const REPAIR_CLUSTER: HubLink[] = [
  { href: "/tin-tuc/sua-chua-nha-tron-goi-tphcm", label: "Sửa chữa nhà trọn gói" },
  { href: "/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm", label: "Báo giá sửa nhà trọn gói" },
  { href: "/tin-tuc/chong-tham-nha-tphcm", label: "Chống thấm nhà TP.HCM" },
  { href: "/tin-tuc/bao-gia-sua-chua-nha-tphcm", label: "Báo giá sửa chữa nhà" },
  { href: "/tin-tuc/gia-co-nha-cu-tphcm", label: "Gia cố nhà cũ" },
];

const DESIGN_CLUSTER: HubLink[] = [
  { href: "/dich-vu/thiet-ke-nha", label: "Dịch vụ thiết kế nhà" },
  { href: "/tin-tuc/thiet-ke-nha-pho-tphcm", label: "Thiết kế nhà phố TP.HCM" },
  { href: "/tin-tuc/thiet-ke-nha-dep-tphcm", label: "Thiết kế nhà đẹp TP.HCM" },
  { href: "/tin-tuc/thiet-ke-nha-dep-gia-re", label: "Thiết kế nhà đẹp giá rẻ" },
  { href: "/thiet-ke", label: "Trang thiết kế kiến trúc" },
];

const DISTRICT_HUBS: { match: RegExp; link: HubLink }[] = [
  { match: /tron-goi-quan-7|xay-nha-quan-7/, link: { href: "/tin-tuc/xay-nha-tron-goi-quan-7", label: "Trọn gói Quận 7" } },
  { match: /tron-goi-quan-3|quan-3/, link: { href: "/tin-tuc/xay-nha-tron-goi-quan-3", label: "Trọn gói Quận 3" } },
  { match: /tron-goi-tan-binh|tan-binh/, link: { href: "/tin-tuc/xay-nha-tron-goi-tan-binh", label: "Trọn gói Tân Bình" } },
  { match: /tron-goi-binh-tan|binh-tan/, link: { href: "/tin-tuc/xay-nha-tron-goi-binh-tan", label: "Trọn gói Bình Tân" } },
  { match: /tron-goi-nha-be|xay-nha-nha-be/, link: { href: "/tin-tuc/xay-nha-tron-goi-nha-be", label: "Trọn gói Nhà Bè" } },
  { match: /binh-thanh/, link: { href: "/tin-tuc/xay-nha-binh-thanh", label: "Xây nhà Bình Thạnh" } },
  { match: /thu-duc/, link: { href: "/tin-tuc/xay-nha-thu-duc", label: "Xây nhà Thủ Đức" } },
  { match: /quan-7/, link: { href: "/tin-tuc/xay-nha-quan-7", label: "Xây nhà Quận 7" } },
  { match: /go-vap/, link: { href: "/tin-tuc/xay-nha-go-vap", label: "Xây nhà Gò Vấp" } },
  { match: /tan-phu/, link: { href: "/tin-tuc/xay-nha-tan-phu", label: "Xây nhà Tân Phú" } },
  { match: /quan-2/, link: { href: "/tin-tuc/xay-nha-quan-2", label: "Xây nhà Quận 2" } },
  { match: /nha-be/, link: { href: "/tin-tuc/xay-nha-nha-be", label: "Xây nhà Nhà Bè" } },
  { match: /quan-3/, link: { href: "/tin-tuc/sua-nha-cu-tphcm", label: "Sửa nhà cũ TP.HCM" } },
];

type PostTopic = "build" | "renovation" | "repair" | "design" | "pricing" | "general";

function classifyPostTopic(slug: string): PostTopic {
  const s = slug.toLowerCase();
  if (/bao-gia|chi-phi|don-gia|gia-/.test(s)) return "pricing";
  if (/thiet-ke|mau-nha|kien-truc|phoi-canh/.test(s)) return "design";
  if (/chong-tham|gia-co|sua-nha|sua-chua|sua-tuong|sua-mai|tham-dot|sua-dien/.test(s)) return "repair";
  if (/cai-tao|nang-tang|nang-cap|lam-moi|mo-rong|pha-do|tai-thiet/.test(s)) return "renovation";
  if (/xay-nha|xay-dung|tron-goi|thi-cong|nha-pho|biet-thu|nha-thau|cong-ty-xay/.test(s)) return "build";
  return "general";
}

function parentHubForTopic(topic: PostTopic, slug: string): HubLink | null {
  switch (topic) {
    case "build":
      return { href: "/tin-tuc/xay-nha-tphcm", label: "Hub xây nhà TP.HCM" };
    case "renovation":
    case "repair":
      return { href: "/tin-tuc/cai-tao-nha-cu-tphcm", label: "Hub cải tạo & sửa nhà TP.HCM" };
    case "design":
      return { href: "/tin-tuc/thiet-ke-nha-dep-tphcm", label: "Hub thiết kế nhà TP.HCM" };
    case "pricing":
      if (slug.includes("sua")) {
        return { href: "/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm", label: "Báo giá sửa nhà trọn gói" };
      }
      return slug.includes("cai-tao")
        ? { href: "/tin-tuc/bao-gia-cai-tao-nha-tphcm", label: "Báo giá cải tạo nhà" }
        : { href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", label: "Báo giá xây nhà trọn gói" };
    default:
      return null;
  }
}

function clusterForTopic(topic: PostTopic): HubLink[] {
  switch (topic) {
    case "build":
      return BUILD_CLUSTER;
    case "renovation":
      return RENOVATION_CLUSTER;
    case "repair":
      return REPAIR_CLUSTER;
    case "design":
      return DESIGN_CLUSTER;
    case "pricing":
      return [
        { href: "/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", label: "Báo giá xây nhà trọn gói" },
        { href: "/tin-tuc/don-gia-xay-nha-tphcm", label: "Đơn giá xây nhà TP.HCM" },
        { href: "/tin-tuc/chi-phi-xay-nha-tphcm", label: "Chi phí xây nhà TP.HCM" },
        { href: "/tin-tuc/xay-nha-gia-re-tphcm", label: "Xây nhà giá rẻ" },
        { href: "/tin-tuc/bao-gia-cai-tao-nha-tphcm", label: "Báo giá cải tạo nhà" },
        { href: "/tin-tuc/bao-gia-sua-nha-tron-goi-tphcm", label: "Báo giá sửa nhà trọn gói" },
        { href: "/bao-gia", label: "Bảng báo giá xây dựng" },
      ];
    default:
      return TIN_TUC_MAIN_HUBS.slice(0, 4);
  }
}

function districtHubForSlug(slug: string): HubLink | null {
  for (const { match, link } of DISTRICT_HUBS) {
    if (match.test(slug)) return link;
  }
  return null;
}

function dedupeLinks(links: HubLink[]): HubLink[] {
  const seen = new Set<string>();
  return links.filter((l) => {
    if (seen.has(l.href)) return false;
    seen.add(l.href);
    return true;
  });
}

/** Hub links hiển thị dưới bài viết tin-tuc / dich-vu. */
export function resolvePostHubLinks(slug: string, category = "tin-tuc"): HubLink[] {
  const normalized = category.trim().toLowerCase();

  if (normalized === "cong-trinh") {
    return dedupeLinks([
      { href: "/cong-trinh", label: "Tất cả công trình tiêu biểu" },
      ...CONG_TRINH_CASE_STUDIES.filter((c) => !c.href.endsWith(`/${slug}`)),
      { href: "/tin-tuc/xay-nha-tphcm", label: "Xây nhà TP.HCM" },
      { href: "/tin-tuc/cai-tao-nha-cu-tphcm", label: "Cải tạo nhà cũ" },
      { href: "/bao-gia", label: "Bảng báo giá" },
      { href: "/lien-he", label: "Đặt lịch khảo sát" },
    ]).slice(0, 10);
  }

  const topic = classifyPostTopic(slug);
  const parent = parentHubForTopic(topic, slug);
  const district = districtHubForSlug(slug);
  const selfPath = `/tin-tuc/${slug}`;

  const links = dedupeLinks([
    ...(parent && parent.href !== selfPath ? [parent] : []),
    ...(district && district.href !== selfPath ? [district] : []),
    ...clusterForTopic(topic).filter((l) => l.href !== selfPath),
    { href: "/bao-gia", label: "Bảng báo giá xây dựng" },
    { href: "/lien-he", label: "Liên hệ khảo sát miễn phí" },
  ]);

  return links.slice(0, 10);
}

/** Case study phù hợp theo quận / chủ đề bài tin-tuc. */
export function resolveRelevantCaseStudies(slug: string): HubLink[] {
  const s = slug.toLowerCase();
  const picks: HubLink[] = [];

  if (/binh-thanh|go-vap|tan-binh|phu-nhuan/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[0]!);
  }
  if (/thu-duc|biet-thu/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[3]!);
  }
  if (/quan-3|cai-tao|sua-nha|lam-moi|chong-tham/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[2]!);
  }
  if (/thiet-ke|hien-dai|mau-nha/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[4]!);
  }
  if (/binh-duong|thuan-an|dong-nai/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[1]!);
  }
  if (/xay-nha|tron-goi|nha-pho/.test(s) && picks.length < 2) {
    picks.push(CONG_TRINH_CASE_STUDIES[0]!);
  }

  return dedupeLinks(picks).slice(0, 3);
}

/** Đoạn HTML liên kết hub — dùng trong seed content. */
export function hubLinkParagraph(links: HubLink[]): string {
  if (!links.length) return "";
  const anchors = links.map((l) => `<a href="${l.href}">${l.label}</a>`).join(" · ");
  return `<p><strong>Tham khảo thêm:</strong> ${anchors}.</p>`;
}

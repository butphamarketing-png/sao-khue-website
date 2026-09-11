/**
 * Internal linking — hub pillars, topic clusters, case studies.
 * Dùng runtime (PostPage) và có thể tái sử dụng trong seed HTML.
 */
import { HUB_CAI_TAO, HUB_SUA_NHA, HUB_XAY_NHA } from "./sitemap-policy";


export type HubLink = { href: string; label: string };

export const CONG_TRINH_CASE_STUDIES: HubLink[] = [
  { href: "/cong-trinh/xay-nha-pho-binh-thanh", label: "Xây nhà phố Bình Thạnh 4 tầng" },
  { href: "/cong-trinh/xay-nha-pho-thuan-an", label: "Xây nhà phố Thuận An" },
  { href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai", label: "Nhà phố phong cách hiện đại" },
  { href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", label: "Biệt thự sân vườn Thủ Đức" },
];

export const TIN_TUC_MAIN_HUBS: HubLink[] = [
  { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" },
  { href: "/bao-gia", label: "Bảng báo giá xây nhà" },
  { href: HUB_CAI_TAO, label: "Cải tạo nhà cũ TP.HCM" },
  { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" },
  { href: "/dich-vu/thiet-ke-nha", label: "Thiết kế nhà phố" },
  { href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", label: "Công ty xây dựng uy tín" },
];

const BUILD_CLUSTER: HubLink[] = [
  { href: HUB_XAY_NHA, label: "Dịch vụ xây nhà trọn gói" },
  { href: "/bao-gia", label: "Bảng báo giá & máy tính" },
  { href: "/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm", label: "Công ty xây dựng uy tín" },
  { href: "/tin-tuc/quy-trinh-xay-nha-tron-goi-a-z", label: "Quy trình chìa khóa trao tay" },
  { href: "/mau-nha/2-tang", label: "Mẫu nhà 2 tầng" },
  { href: "/mau-nha/3-tang", label: "Mẫu nhà 3 tầng" },
  { href: "/cong-trinh/xay-nha-pho-binh-thanh", label: "Công trình nhà phố Bình Thạnh" },
];

const RENOVATION_CLUSTER: HubLink[] = [
  { href: HUB_CAI_TAO, label: "Cải tạo nhà cũ TP.HCM" },
  { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" },
  { href: "/dich-vu/nang-tang-nha-pho", label: "Nâng tầng nhà phố" },
  { href: "/cong-trinh/sua-nha-quan-3", label: "Công trình cải tạo Quận 3" },
  { href: "/bao-gia", label: "Bảng báo giá" },
];

const REPAIR_CLUSTER: HubLink[] = [
  { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" },
  { href: HUB_CAI_TAO, label: "Cải tạo nhà cũ" },
  { href: "/dich-vu/nang-tang-nha-pho", label: "Nâng tầng nhà phố" },
  { href: "/cong-trinh/sua-nha-quan-3", label: "Công trình sửa nhà Quận 3" },
  { href: "/bao-gia", label: "Bảng báo giá" },
];

const DESIGN_CLUSTER: HubLink[] = [
  { href: "/dich-vu/thiet-ke-nha", label: "Dịch vụ thiết kế nhà" },
  { href: "/thiet-ke", label: "Trang thiết kế kiến trúc" },
  { href: "/cong-trinh/thiet-ke-nha-phong-cach-hien-dai", label: "Nhà phố hiện đại" },
  { href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc", label: "Biệt thự Thủ Đức" },
  { href: HUB_XAY_NHA, label: "Xây nhà trọn gói" },
];

const DISTRICT_HUBS: { match: RegExp; link: HubLink }[] = [
  { match: /cai-tao|sua-nha|sua-chua|nang-tang|chong-tham/, link: { href: HUB_SUA_NHA, label: "Sửa & cải tạo nhà TP.HCM" } },
  { match: /xay-nha|tron-goi|thi-cong/, link: { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" } },
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
      return { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" };
    case "renovation":
    case "repair":
      return { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" };
    case "design":
      return { href: "/dich-vu/thiet-ke-nha", label: "Thiết kế nhà TP.HCM" };
    case "pricing":
      if (slug.includes("sua") || slug.includes("cai-tao")) {
        return { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" };
      }
      return { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" };
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
        { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" },
        { href: "/bao-gia", label: "Bảng báo giá xây dựng" },
        { href: HUB_CAI_TAO, label: "Cải tạo nhà cũ" },
        { href: HUB_SUA_NHA, label: "Sửa nhà trọn gói TP.HCM" },
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
      { href: HUB_XAY_NHA, label: "Xây nhà trọn gói TP.HCM" },
      { href: HUB_CAI_TAO, label: "Cải tạo nhà cũ" },
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
  if (/quan-3|cai-tao|sua-nha|lam-moi|chong-tham|hien-dai/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[2]!);
  }
  if (/thiet-ke|mau-nha/.test(s)) {
    picks.push(CONG_TRINH_CASE_STUDIES[2]!);
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

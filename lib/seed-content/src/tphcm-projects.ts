/**
 * Công trình thực tế hiển thị ở mục "Công trình thực tế tại TP.HCM" trên trang dịch vụ.
 * Chỉ điền số liệu có hồ sơ (hợp đồng, biên bản bàn giao, ảnh hiện trường). Trường bỏ trống thì không hiển thị.
 */
export type TphcmProjectPhoto = {
  /** Đường dẫn trong `public/images`, ví dụ `/images/sao-khue/sk-24.jpg`. */
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type TphcmProject = {
  name: string;
  /** Trang công trình chi tiết, nếu có. */
  href?: string;
  /** Mô tả ngắn hiện sau tên, khi chưa có thông số. */
  summary: string;
  district?: string;
  /** Ví dụ "5 × 18 m". */
  lot?: string;
  /** Ví dụ "4 tầng + sân thượng". */
  floors?: string;
  /** Tổng diện tích sàn, m². */
  floorAreaM2?: number;
  /** Thời gian thi công thực tế, ví dụ "6 tháng". */
  duration?: string;
  /** Năm bàn giao. */
  handoverYear?: number;
  photos?: TphcmProjectPhoto[];
};

export const TPHCM_PROJECTS: TphcmProject[] = [
  {
    name: "Nhà phố Bình Thạnh",
    href: "/cong-trinh/xay-nha-pho-binh-thanh",
    summary: "thi công nội thành, giám sát hiện trường.",
  },
  {
    name: "Biệt thự sân vườn Thủ Đức",
    href: "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc",
    summary: "thiết kế và thi công cùng một đơn vị.",
  },
  {
    name: "Nhà phố Thuận An",
    href: "/cong-trinh/xay-nha-pho-thuan-an",
    summary: "mẫu chìa khóa trao tay đã bàn giao, giáp ranh TP.HCM.",
  },
];

function projectFacts(p: TphcmProject): string[] {
  const facts: string[] = [];
  if (p.district) facts.push(p.district);
  if (p.lot) facts.push(`lô ${p.lot}`);
  if (p.floors) facts.push(p.floors);
  if (p.floorAreaM2) facts.push(`${p.floorAreaM2.toLocaleString("vi-VN")} m² sàn`);
  if (p.duration) facts.push(`thi công ${p.duration}`);
  if (p.handoverYear) facts.push(`bàn giao ${p.handoverYear}`);
  return facts;
}

function projectItem(p: TphcmProject): string {
  const name = p.href ? `<a href="${p.href}">${p.name}</a>` : p.name;
  const facts = projectFacts(p);
  const detail = facts.length > 0 ? `${facts.join(" · ")}.` : p.summary;
  return `<li>${name} — ${detail}</li>`;
}

function projectFigure(photo: TphcmProjectPhoto): string {
  return `<figure>
  <img src="${photo.src}" alt="${photo.alt}" width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async" />
  <figcaption>${photo.caption}</figcaption>
</figure>`;
}

/** Danh sách công trình + ảnh của từng công trình (nếu có). */
export function tphcmProjectsBlock(projects: TphcmProject[] = TPHCM_PROJECTS): string {
  const figures = projects.flatMap((p) => p.photos ?? []).map(projectFigure);
  const items = projects.map(projectItem);
  return [
    ...figures,
    `<ul>\n  ${[...items, `<li><a href="/cong-trinh">Công trình tiêu biểu</a> — xem thêm ảnh hiện trường.</li>`].join("\n  ")}\n</ul>`,
  ].join("\n");
}

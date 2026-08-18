/** Catalog mẫu nhà hiện đại — ảnh thật trong public/images. */

export type HouseModel = {
  slug: string;
  name: string;
  size: string;
  style: string;
  image: string;
};

export type HouseCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  cover: string;
  models: HouseModel[];
};

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function cap4(n: number, slug: string, name: string, size: string, style: string): HouseModel {
  return {
    slug,
    name,
    size,
    style,
    image: `/images/nha-cap-4/nha-cap-4-${pad(n)}.jpg`,
  };
}

function tang2(n: number, slug: string, name: string, size: string, style: string): HouseModel {
  return {
    slug,
    name,
    size,
    style,
    image: `/images/nha-2-tang/nha-2-tang-${pad(n)}.jpg`,
  };
}

function xay(n: number, slug: string, name: string, size: string, style: string): HouseModel {
  return {
    slug,
    name,
    size,
    style,
    image: `/images/xay-nha/xay-nha-${pad(n)}.jpg`,
  };
}

function sk(n: number, slug: string, name: string, size: string, style: string): HouseModel {
  return {
    slug,
    name,
    size,
    style,
    image: `/images/sao-khue/sk-${pad(n)}.jpg`,
  };
}

export const MAU_NHA_CATEGORIES: HouseCategory[] = [
  {
    slug: "cap-4",
    title: "Mẫu nhà cấp 4",
    shortTitle: "Nhà cấp 4",
    description:
      "Mẫu nhà cấp 4 hiện đại — mái Thái, mái Nhật, gác lửng và sân vườn. Phù hợp đất nền TP.HCM, Bình Dương, Đồng Nai.",
    cover: "/images/nha-cap-4/nha-cap-4-01.jpg",
    models: [
      cap4(1, "mai-thai-hien-dai", "Nhà cấp 4 mái Thái hiện đại", "8 × 16 m", "Mái Thái"),
      cap4(2, "mai-nhat-toi-gian", "Nhà cấp 4 mái Nhật tối giản", "7 × 18 m", "Mái Nhật"),
      cap4(3, "san-vuon-chu-l", "Nhà cấp 4 sân vườn chữ L", "9 × 20 m", "Sân vườn"),
      cap4(4, "gac-lung-5x20", "Nhà cấp 4 gác lửng 5x20", "5 × 20 m", "Gác lửng"),
      cap4(5, "mai-bang-8x14", "Nhà cấp 4 mái bằng hiện đại", "8 × 14 m", "Mái bằng"),
      cap4(6, "mat-tien-hep-6x16", "Nhà cấp 4 mặt tiền hẹp", "6 × 16 m", "Mặt tiền hẹp"),
      cap4(7, "mai-lech-hien-dai", "Nhà cấp 4 mái lệch", "8 × 18 m", "Mái lệch"),
      cap4(8, "mini-6x12", "Nhà cấp 4 mini 6x12", "6 × 12 m", "Mini"),
      cap4(9, "vuon-9x18", "Nhà cấp 4 vườn 9x18", "9 × 18 m", "Nhà vườn"),
    ],
  },
  {
    slug: "2-tang",
    title: "Mẫu nhà phố 2 tầng",
    shortTitle: "Nhà 2 tầng",
    description:
      "Mẫu nhà phố 2 tầng hiện đại — lam gỗ, kính, ban công thoáng. Tối ưu lô 4–6 m mặt tiền.",
    cover: "/images/nha-2-tang/nha-2-tang-01.jpg",
    models: [
      tang2(1, "pho-hien-dai-4x16", "Nhà phố 2 tầng hiện đại 4x16", "4 × 16 m", "Hiện đại"),
      tang2(2, "lam-go-5x18", "Nhà phố 2 tầng lam gỗ", "5 × 18 m", "Lam gỗ"),
      tang2(3, "kinh-ban-cong-5x16", "Nhà phố 2 tầng kính ban công", "5 × 16 m", "Kính"),
      tang2(4, "mai-bang-4x20", "Nhà phố 2 tầng mái bằng 4x20", "4 × 20 m", "Mái bằng"),
      tang2(5, "toi-gian-6x16", "Nhà phố 2 tầng tối giản", "6 × 16 m", "Tối giản"),
      tang2(6, "mat-tien-da-5x15", "Nhà phố 2 tầng mặt tiền đá", "5 × 15 m", "Ốp đá"),
      tang2(7, "chu-l-7x16", "Nhà phố 2 tầng chữ L", "7 × 16 m", "Chữ L"),
      tang2(8, "ban-cong-hoa-4x18", "Nhà phố 2 tầng ban công hoa", "4 × 18 m", "Ban công"),
      tang2(9, "phong-cach-scandi", "Nhà phố 2 tầng Scandinavian", "5 × 17 m", "Scandinavian"),
      tang2(10, "mau-trang-den-4x14", "Nhà phố 2 tầng trắng đen", "4 × 14 m", "Tối giản"),
      tang2(11, "gieng-troi-5x20", "Nhà phố 2 tầng giếng trời", "5 × 20 m", "Giếng trời"),
      tang2(12, "mai-thai-6x18", "Nhà phố 2 tầng mái Thái", "6 × 18 m", "Mái Thái"),
      tang2(13, "indochine-5x16", "Nhà phố 2 tầng Indochine", "5 × 16 m", "Indochine"),
      tang2(14, "thoang-sang-4x16", "Nhà phố 2 tầng thoáng sáng", "4 × 16 m", "Thoáng sáng"),
      tang2(15, "hien-dai-6x20", "Nhà phố 2 tầng 6x20", "6 × 20 m", "Hiện đại"),
    ],
  },
  {
    slug: "3-tang",
    title: "Mẫu nhà phố 3 tầng",
    shortTitle: "Nhà 3 tầng",
    description:
      "Mẫu nhà phố 3 tầng đẹp — công năng 4–6 phòng ngủ, phù hợp gia đình đông người tại TP.HCM.",
    cover: "/images/nha-2-tang/nha-2-tang-09.jpg",
    models: [
      tang2(9, "pho-3-tang-4x16", "Nhà phố 3 tầng 4x16", "4 × 16 m", "Hiện đại"),
      tang2(10, "pho-3-tang-5x18", "Nhà phố 3 tầng 5x18", "5 × 18 m", "Hiện đại"),
      tang2(11, "pho-3-tang-lam-dung", "Nhà phố 3 tầng lam đứng", "4 × 18 m", "Lam đứng"),
      tang2(12, "pho-3-tang-kinh", "Nhà phố 3 tầng mặt kính", "5 × 16 m", "Kính"),
      tang2(13, "pho-3-tang-6x16", "Nhà phố 3 tầng 6x16", "6 × 16 m", "Rộng mặt tiền"),
      tang2(14, "pho-3-tang-toi-gian", "Nhà phố 3 tầng tối giản", "4 × 20 m", "Tối giản"),
      tang2(15, "pho-3-tang-ban-cong", "Nhà phố 3 tầng ban công rộng", "5 × 17 m", "Ban công"),
      xay(1, "pho-3-tang-tron-goi", "Nhà phố 3 tầng trọn gói", "5 × 16 m", "Trọn gói"),
      xay(2, "pho-3-tang-hoan-thien", "Nhà phố 3 tầng hoàn thiện", "4 × 16 m", "Hoàn thiện"),
      sk(35, "pho-3-tang-sk-01", "Nhà phố 3 tầng hiện đại SK", "5 × 18 m", "Hiện đại"),
      sk(37, "pho-3-tang-sk-02", "Nhà phố 3 tầng ánh sáng", "4 × 17 m", "Thoáng sáng"),
      sk(39, "pho-3-tang-sk-03", "Nhà phố 3 tầng tối màu", "5 × 15 m", "Tối giản"),
    ],
  },
  {
    slug: "4-tang",
    title: "Mẫu nhà phố 4 tầng",
    shortTitle: "Nhà 4 tầng",
    description:
      "Mẫu nhà phố 4 tầng — kết hợp ở và kinh doanh, tum sân thượng, tối ưu lô phố trung tâm.",
    cover: "/images/sao-khue/sk-40.jpg",
    models: [
      xay(3, "pho-4-tang-o-ket-hop", "Nhà phố 4 tầng ở kết hợp", "4 × 16 m", "Ở + KD"),
      xay(4, "pho-4-tang-tum", "Nhà phố 4 tầng tum sân thượng", "5 × 16 m", "Tum"),
      sk(36, "pho-4-tang-hien-dai", "Nhà phố 4 tầng hiện đại", "4 × 18 m", "Hiện đại"),
      sk(38, "pho-4-tang-kinh", "Nhà phố 4 tầng mặt kính", "5 × 15 m", "Kính"),
      sk(40, "pho-4-tang-lam-go", "Nhà phố 4 tầng lam gỗ", "4 × 20 m", "Lam gỗ"),
      sk(41, "pho-4-tang-toi-gian", "Nhà phố 4 tầng tối giản", "5 × 18 m", "Tối giản"),
      sk(42, "pho-4-tang-sang-trong", "Nhà phố 4 tầng sang trọng", "6 × 16 m", "Sang trọng"),
      sk(43, "pho-4-tang-mat-tien-hep", "Nhà phố 4 tầng mặt tiền hẹp", "4 × 14 m", "Mặt tiền hẹp"),
      sk(44, "pho-4-tang-ban-cong", "Nhà phố 4 tầng ban công", "5 × 17 m", "Ban công"),
    ],
  },
  {
    slug: "biet-thu",
    title: "Mẫu biệt thự hiện đại",
    shortTitle: "Biệt thự",
    description:
      "Mẫu biệt thự hiện đại — sân vườn, hồ cá, không gian nghỉ dưỡng cho đất rộng.",
    cover: "/images/sao-khue/sk-48.jpg",
    models: [
      sk(45, "biet-thu-pho-hien-dai", "Biệt thự phố hiện đại", "10 × 20 m", "Biệt thự phố"),
      sk(48, "biet-thu-vuon", "Biệt thự vườn 1 mặt tiền", "12 × 22 m", "Nhà vườn"),
      sk(52, "biet-thu-sang-trong", "Biệt thự hiện đại sang trọng", "14 × 24 m", "Sang trọng"),
      sk(43, "biet-thu-toi-gian", "Biệt thự tối giản", "10 × 18 m", "Tối giản"),
      sk(40, "biet-thu-2-tang", "Biệt thự 2 tầng mái bằng", "11 × 20 m", "2 tầng"),
      sk(36, "biet-thu-3-tang", "Biệt thự 3 tầng hiện đại", "12 × 18 m", "3 tầng"),
    ],
  },
  {
    slug: "nha-ong",
    title: "Mẫu nhà ống hiện đại",
    shortTitle: "Nhà ống",
    description:
      "Mẫu nhà ống mặt tiền 3,5–5 m — giếng trời, thông tầng, tối ưu ánh sáng cho lô phố hẹp.",
    cover: "/images/nha-2-tang/nha-2-tang-03.jpg",
    models: [
      tang2(2, "ong-3m5x16", "Nhà ống 3,5x16 hiện đại", "3,5 × 16 m", "Mặt tiền hẹp"),
      tang2(3, "ong-4x12", "Nhà ống 4x12", "4 × 12 m", "Nhà ống"),
      tang2(5, "ong-4x16-gieng-troi", "Nhà ống 4x16 giếng trời", "4 × 16 m", "Giếng trời"),
      tang2(7, "ong-4x18", "Nhà ống 4x18", "4 × 18 m", "Nhà ống"),
      tang2(10, "ong-5x15", "Nhà ống 5x15 hiện đại", "5 × 15 m", "Nhà ống"),
      tang2(12, "ong-4x20", "Nhà ống 4x20 thông tầng", "4 × 20 m", "Thông tầng"),
      tang2(14, "ong-5x16", "Nhà ống 5x16", "5 × 16 m", "Nhà ống"),
      sk(38, "ong-hep-hien-dai", "Nhà ống hẹp hiện đại", "3,5 × 18 m", "Mặt tiền hẹp"),
    ],
  },
];

export function getMauNhaCategory(slug: string | undefined): HouseCategory | undefined {
  if (!slug) return undefined;
  return MAU_NHA_CATEGORIES.find((c) => c.slug === slug);
}

export function getMauNhaModel(
  categorySlug: string | undefined,
  modelSlug: string | undefined,
): { category: HouseCategory; model: HouseModel } | undefined {
  const category = getMauNhaCategory(categorySlug);
  if (!category || !modelSlug) return undefined;
  const model = category.models.find((m) => m.slug === modelSlug);
  if (!model) return undefined;
  return { category, model };
}

export function collectMauNhaPaths(): string[] {
  const paths = ["/mau-nha"];
  for (const category of MAU_NHA_CATEGORIES) {
    paths.push(`/mau-nha/${category.slug}`);
    for (const model of category.models) {
      paths.push(`/mau-nha/${category.slug}/${model.slug}`);
    }
  }
  return paths;
}

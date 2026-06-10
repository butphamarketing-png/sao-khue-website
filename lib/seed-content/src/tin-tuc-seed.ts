/** Đăng ký 30 bài tin tức — khớp content-calendar + luật/phong thủy bổ sung. */
import type { SeoArticle } from "./articles";
import {
  baoGiaXayNhaTronGoiMoiNhatTphcm,
  baoGiaXayNhaPhanThoLongAn,
  baoGiaXayNhaTronGoiPhuYen,
  camNangXayNha2026,
  chiPhiNhaPho2Tang,
  chiPhiXayNha2TangDakLak,
  congTyXayDungNhaPhoUyTinTphcm,
  duToanChiPhiXayNha,
  kienTrucSaoKhueDonViUyTin,
  luatXayDungMoiNhat,
  luuYXayNhaPho,
  mauNhaOngDepLongAn,
  mauNhaPho2TangBinhDuong,
  mauNhaPho3TangDep,
  phongThuyNhaO,
  quyTrinhXayNhaTronGoiAZ,
  thiCongNhaPhoPhuYen,
  thietKeNhaDepGiaRe,
  thietKeNhaDepPhuYen,
  thietKeNhaPhoDakLak,
  thietKeNhaPhoHienDaiTphcm,
  thietKeThiCongNhaPhoDongNai,
  thietKeXayDungNhaPhoMienNam,
  thueThietKeNhaTruocKhiXay,
  topMauNhaPhoDepXuHuong,
  xayDungNhaLongAn,
  xayNhaNganSach1Ty2,
  xayNhaTronGoiDakLak,
  xuHuongThietKeNhaPhoHienDai,
} from "./articles";
import { TIN_TUC_BATCH } from "./tin-tuc-calendar-data";

export type TinTucSeedEntry = { slug: string; image: string; article: SeoArticle };

const ARTICLE_BY_SLUG: Record<string, SeoArticle> = {
  "xay-dung-nha-long-an": xayDungNhaLongAn,
  "bao-gia-xay-nha-phan-tho-long-an": baoGiaXayNhaPhanThoLongAn,
  "mau-nha-ong-dep-long-an": mauNhaOngDepLongAn,
  "thiet-ke-nha-pho-dak-lak": thietKeNhaPhoDakLak,
  "xay-nha-tron-goi-dak-lak": xayNhaTronGoiDakLak,
  "chi-phi-xay-nha-2-tang-dak-lak": chiPhiXayNha2TangDakLak,
  "thi-cong-nha-pho-phu-yen": thiCongNhaPhoPhuYen,
  "thiet-ke-nha-dep-phu-yen": thietKeNhaDepPhuYen,
  "bao-gia-xay-nha-tron-goi-phu-yen": baoGiaXayNhaTronGoiPhuYen,
  "luu-y-xay-nha-pho": luuYXayNhaPho,
  "du-toan-chi-phi-xay-nha": duToanChiPhiXayNha,
  "xu-huong-thiet-ke-nha-pho-hien-dai": xuHuongThietKeNhaPhoHienDai,
  "chi-phi-nha-pho-2-tang": chiPhiNhaPho2Tang,
  "mau-nha-pho-3-tang-dep": mauNhaPho3TangDep,
  "thiet-ke-nha-dep-gia-re": thietKeNhaDepGiaRe,
  "xay-nha-ngan-sach-1-ty-2": xayNhaNganSach1Ty2,
  "thue-thiet-ke-nha-truoc-khi-xay": thueThietKeNhaTruocKhiXay,
  "quy-trinh-xay-nha-tron-goi-a-z": quyTrinhXayNhaTronGoiAZ,
  "top-mau-nha-pho-dep-xu-huong": topMauNhaPhoDepXuHuong,
  "thiet-ke-xay-dung-nha-pho-mien-nam": thietKeXayDungNhaPhoMienNam,
  "kien-truc-sao-khue-don-vi-uy-tin": kienTrucSaoKhueDonViUyTin,
};

const PLAN = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200";
const BUILD = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200";
const DESIGN = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200";
const HERO = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200";

/** 30 bài tin tức theo lịch nội dung (calendar #1–#30, bài #30 = tin tức thương hiệu). */
export const TIN_TUC_SEED_ENTRIES: TinTucSeedEntry[] = [
  { slug: "cong-ty-xay-dung-nha-pho-uy-tin-tphcm", image: "/images/project_3.jpg", article: congTyXayDungNhaPhoUyTinTphcm },
  { slug: "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", image: PLAN, article: baoGiaXayNhaTronGoiMoiNhatTphcm },
  { slug: "thiet-ke-nha-pho-hien-dai-tphcm", image: "/images/project_2.jpg", article: thietKeNhaPhoHienDaiTphcm },
  { slug: "mau-nha-pho-2-tang-binh-duong", image: "/images/project_2.jpg", article: mauNhaPho2TangBinhDuong },
  { slug: "thiet-ke-thi-cong-nha-pho-dong-nai", image: DESIGN, article: thietKeThiCongNhaPhoDongNai },
  ...TIN_TUC_BATCH.map((b) => ({
    slug: b.slug,
    image: b.image,
    article: ARTICLE_BY_SLUG[b.slug]!,
  })),
  { slug: "cam-nang-xay-nha-2026", image: HERO, article: camNangXayNha2026 },
  { slug: "luat-xay-dung-moi-nhat", image: HERO, article: luatXayDungMoiNhat },
  { slug: "phong-thuy-nha-o", image: HERO, article: phongThuyNhaO },
];

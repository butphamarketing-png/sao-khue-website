/** Đăng ký 30 bài tin tức — khớp content-calendar + luật/phong thủy bổ sung. */
import type { SeoArticle } from "./articles";
import {
  baoGiaXayNhaMoi,
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
import { featuredImageForSlug } from "./site-images";

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

/** 30 bài tin tức theo lịch nội dung (calendar #1–#30, bài #30 = tin tức thương hiệu). */
export const TIN_TUC_SEED_ENTRIES: TinTucSeedEntry[] = [
  { slug: "bao-gia-xay-nha-moi", image: featuredImageForSlug("bao-gia-xay-nha-moi"), article: baoGiaXayNhaMoi },
  { slug: "cong-ty-xay-dung-nha-pho-uy-tin-tphcm", image: featuredImageForSlug("cong-ty-xay-dung-nha-pho-uy-tin-tphcm"), article: congTyXayDungNhaPhoUyTinTphcm },
  { slug: "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm", image: featuredImageForSlug("bao-gia-xay-nha-tron-goi-moi-nhat-tphcm"), article: baoGiaXayNhaTronGoiMoiNhatTphcm },
  { slug: "thiet-ke-nha-pho-hien-dai-tphcm", image: featuredImageForSlug("thiet-ke-nha-pho-hien-dai-tphcm"), article: thietKeNhaPhoHienDaiTphcm },
  { slug: "mau-nha-pho-2-tang-binh-duong", image: featuredImageForSlug("mau-nha-pho-2-tang-binh-duong"), article: mauNhaPho2TangBinhDuong },
  { slug: "thiet-ke-thi-cong-nha-pho-dong-nai", image: featuredImageForSlug("thiet-ke-thi-cong-nha-pho-dong-nai"), article: thietKeThiCongNhaPhoDongNai },
  ...TIN_TUC_BATCH.map((b) => ({
    slug: b.slug,
    image: b.image,
    article: ARTICLE_BY_SLUG[b.slug]!,
  })),
  { slug: "cam-nang-xay-nha-2026", image: featuredImageForSlug("cam-nang-xay-nha-2026"), article: camNangXayNha2026 },
  { slug: "luat-xay-dung-moi-nhat", image: featuredImageForSlug("luat-xay-dung-moi-nhat"), article: luatXayDungMoiNhat },
  { slug: "phong-thuy-nha-o", image: featuredImageForSlug("phong-thuy-nha-o"), article: phongThuyNhaO },
];

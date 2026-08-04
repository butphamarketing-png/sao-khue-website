/** Slug theo batch — dùng cho script gửi lập chỉ mục. */
import { xayNhaTphcmBatch7Slugs } from "./articles/xay-nha-tphcm-tin-tuc-articles-batch7";
import { xayCaiTaoTphcmBatch8Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch8";
import { xayCaiTaoTphcmBatch9Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch9";
import { nhomKinhBatch10Slugs } from "./articles/nhom-kinh-tin-tuc-articles-batch10";
import { shortKeywordBatch15Slugs } from "./articles/short-keyword-tin-tuc-articles-batch15";
import { shortKeywordBatch16Slugs } from "./articles/short-keyword-tin-tuc-articles-batch16";
import { shortKeywordBatch17Slugs } from "./articles/short-keyword-tin-tuc-articles-batch17";
import { shortKeywordBatch18Slugs } from "./articles/short-keyword-tin-tuc-articles-batch18";
import { shortKeywordBatch19Slugs } from "./articles/short-keyword-tin-tuc-articles-batch19";

export const INDEXING_BATCH_SLUGS: Record<string, readonly string[]> = {
  "7": xayNhaTphcmBatch7Slugs,
  "8": xayCaiTaoTphcmBatch8Slugs,
  "9": xayCaiTaoTphcmBatch9Slugs,
  "10": nhomKinhBatch10Slugs,
  "15": shortKeywordBatch15Slugs,
  "16": shortKeywordBatch16Slugs,
  "17": shortKeywordBatch17Slugs,
  "18": shortKeywordBatch18Slugs,
  "19": shortKeywordBatch19Slugs,
};

export {
  xayNhaTphcmBatch7Slugs,
  xayCaiTaoTphcmBatch8Slugs,
  xayCaiTaoTphcmBatch9Slugs,
  nhomKinhBatch10Slugs,
  shortKeywordBatch15Slugs,
  shortKeywordBatch16Slugs,
  shortKeywordBatch17Slugs,
  shortKeywordBatch18Slugs,
  shortKeywordBatch19Slugs,
};

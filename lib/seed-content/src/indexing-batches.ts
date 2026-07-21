/** Slug theo batch — dùng cho script gửi lập chỉ mục. */
import { xayNhaTphcmBatch7Slugs } from "./articles/xay-nha-tphcm-tin-tuc-articles-batch7";
import { xayCaiTaoTphcmBatch8Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch8";
import { xayCaiTaoTphcmBatch9Slugs } from "./articles/xay-cai-tao-tphcm-tin-tuc-articles-batch9";
import { nhomKinhBatch10Slugs } from "./articles/nhom-kinh-tin-tuc-articles-batch10";

export const INDEXING_BATCH_SLUGS: Record<string, readonly string[]> = {
  "7": xayNhaTphcmBatch7Slugs,
  "8": xayCaiTaoTphcmBatch8Slugs,
  "9": xayCaiTaoTphcmBatch9Slugs,
  "10": nhomKinhBatch10Slugs,
};

export { xayNhaTphcmBatch7Slugs, xayCaiTaoTphcmBatch8Slugs, xayCaiTaoTphcmBatch9Slugs, nhomKinhBatch10Slugs };

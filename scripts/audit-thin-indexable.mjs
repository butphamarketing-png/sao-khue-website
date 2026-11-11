import { seedPosts, shouldNoindexPostSlug, isSitemapIndexablePost } from "../lib/seed-content/src/index.ts";

function words(html) {
  return (html || "")
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const tin = seedPosts.filter(
  (p) =>
    (p.category || "").toLowerCase() === "tin-tuc" &&
    isSitemapIndexablePost(p) &&
    !shouldNoindexPostSlug(p.slug),
);

const ranked = tin
  .map((p) => ({ slug: p.slug, w: words(p.content), title: p.title }))
  .sort((a, b) => a.w - b.w);

console.log("indexable tin-tuc", tin.length);
console.log("--- thinnest 50 ---");
for (const x of ranked.slice(0, 50)) console.log(`${x.w}\t${x.slug}`);

const patterns = {
  districtCaiTao: /^cai-tao-nha-(quan-|binh-|go-vap|thu-duc|tan-|hoc-mon|cu-chi|nha-be)/,
  districtSua: /^sua-nha-(quan-|binh-|go-vap|thu-duc|tan-|hoc-mon)/,
  districtXay: /^xay-nha-(tron-goi-)?(quan-|binh-|go-vap|thu-duc|tan-|hoc-mon)/,
  adsBoSung: /ads|ngan$|sk\d+$/,
  under800: (w) => w < 800,
};

const under800 = ranked.filter((x) => x.w < 800);
const under1200 = ranked.filter((x) => x.w < 1200);
console.log("under800", under800.length, "under1200", under1200.length);

const geo = ranked.filter(
  (x) =>
    /-(quan-|binh-thanh|binh-tan|binh-chanh|go-vap|thu-duc|tan-binh|tan-phu|hoc-mon|cu-chi|nha-be|phu-nhuan)/.test(
      x.slug,
    ) || /^(cai-tao-nha|sua-nha|xay-nha)-/.test(x.slug),
);
console.log("geo-ish", geo.length);
console.log("--- geo under1200 sample ---");
for (const x of geo.filter((g) => g.w < 1200).slice(0, 40)) console.log(`${x.w}\t${x.slug}`);

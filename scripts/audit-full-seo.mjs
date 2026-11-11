/**
 * Full live SEO audit: all SerpAPI keywords, indexable seed URLs, sitemap, redirect destinations.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const csvPath = path.join(root, "docs/ads-seo-7m/site-tin-tuc-rank-audit-serpapi.csv");
const seedUrl = pathToFileURL(path.join(root, "lib/seed-content/src/index.ts")).href;
const redirectsFile = path.join(root, "artifacts/sao-khue/src/lib/legacy-redirects.ts");

function parseRank(v) {
  const t = String(v || "").trim();
  const m = t.match(/^#(\d+)$/);
  return m ? Number(m[1]) : null;
}

function slugifyKw(kw) {
  return kw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseCsv(raw) {
  const lines = raw.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean).slice(1);
  const rows = [];
  for (const line of lines) {
    const idx = line.lastIndexOf(",");
    const rest = line.slice(0, idx);
    const idx2 = rest.lastIndexOf(",");
    const serp = rest.slice(idx2 + 1);
    const rest2 = rest.slice(0, idx2);
    const idx3 = rest2.lastIndexOf(",");
    const hang = rest2.slice(idx3 + 1);
    const rest3 = rest2.slice(0, idx3);
    const idx4 = rest3.lastIndexOf(",");
    const kw = rest3.slice(idx4 + 1);
    const bai = rest3.slice(0, idx4);
    rows.push({ bai, kw: kw.trim(), hang, serp: serp.trim() });
  }
  return rows;
}

async function probe(pathname) {
  const url = pathname.startsWith("http")
    ? pathname
    : `https://www.kientrucsaokhue.com${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 18000);
  try {
    const res = await fetch(url, {
      redirect: "manual",
      signal: ac.signal,
      headers: { "user-agent": "Mozilla/5.0 SaoKhueAudit" },
    });
    const loc = res.headers.get("location") || "";
    let robots = "";
    let title = "";
    if (res.status >= 300 && res.status < 400 && loc) {
      const next = loc.startsWith("http") ? loc : `https://www.kientrucsaokhue.com${loc}`;
      const r2 = await fetch(next, {
        redirect: "follow",
        signal: ac.signal,
        headers: { "user-agent": "Mozilla/5.0 SaoKhueAudit" },
      });
      const html = await r2.text();
      robots = (html.match(/name=["']robots["'][^>]*content=["']([^"']+)/i) || [])[1] || "";
      title = (html.match(/<title[^>]*>([^<]+)/i) || [])[1] || "";
      return {
        status: res.status,
        loc,
        finalStatus: r2.status,
        robots,
        title: title.slice(0, 80),
        final: `${res.status}->${r2.status}`,
      };
    }
    if (res.status === 200) {
      const html = await res.text();
      robots = (html.match(/name=["']robots["'][^>]*content=["']([^"']+)/i) || [])[1] || "";
      title = (html.match(/<title[^>]*>([^<]+)/i) || [])[1] || "";
    }
    return {
      status: res.status,
      loc,
      finalStatus: res.status,
      robots,
      title: title.slice(0, 80),
      final: String(res.status),
    };
  } catch (e) {
    return {
      status: 0,
      loc: "",
      finalStatus: 0,
      robots: "",
      title: "",
      final: `err`,
    };
  } finally {
    clearTimeout(t);
  }
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}

function classify(live) {
  if (live.finalStatus === 404 || live.final === "301->404" || live.final.endsWith("->404")) {
    return live.status >= 300 && live.status < 400 ? "301to404" : "404";
  }
  if (live.finalStatus === 200 && /noindex/i.test(live.robots)) return "200noindex";
  if (live.finalStatus === 200) return "200ok";
  if (live.status >= 300 && live.status < 400) return "redirect";
  return "other";
}

const seed = await import(seedUrl);
const posts = seed.seedPosts;
const shouldNoindex = seed.shouldNoindexPostSlug;
const getPath = seed.getPostPublicPath;

const byKw = new Map();
const bySlug = new Map();
for (const p of posts) {
  bySlug.set(p.slug, p);
  if (p.keyword) byKw.set(String(p.keyword).toLowerCase().trim(), p);
}

const indexablePosts = posts.filter((p) => !shouldNoindex(p.slug) && !p.noindex);
const indexablePaths = [...new Set(indexablePosts.map((p) => getPath(p)))];

const csv = parseCsv(fs.readFileSync(csvPath, "utf8")).filter((r) => r.kw && r.kw !== "SKIP");

function matchPost(kw) {
  let post = byKw.get(kw.toLowerCase());
  const slugGuess = slugifyKw(kw);
  if (!post) post = bySlug.get(slugGuess);
  if (!post) {
    post = posts.find(
      (p) => p.slug === slugGuess || p.slug.startsWith(slugGuess) || slugGuess.startsWith(p.slug),
    );
  }
  return { post, slugGuess };
}

const redirectSrc = fs.readFileSync(redirectsFile, "utf8");
const dests = new Set();
for (const m of redirectSrc.matchAll(/\["(\/[^"]+)",\s*"(\/[^"]+)"\]/g)) {
  dests.add(m[2]);
}
for (const m of redirectSrc.matchAll(/"[^"]+":\s*"(\/[^"]+)"/g)) {
  dests.add(m[1]);
}

const smXml = await fetch("https://www.kientrucsaokhue.com/sitemap.xml").then((r) => r.text());
const sitemapLocs = [...smXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
  try {
    return new URL(m[1]).pathname.replace(/\/$/, "") || "/";
  } catch {
    return m[1];
  }
});

const hubs = [
  "/",
  "/bao-gia",
  "/lien-he",
  "/thiet-ke",
  "/xay-moi",
  "/xay-nha",
  "/cai-tao-nha",
  "/dich-vu",
  "/dich-vu/xay-nha-tron-goi",
  "/dich-vu/sua-nha-tron-goi-tphcm",
  "/dich-vu/sua-chua-nha",
  "/dich-vu/xay-dung-phan-tho",
  "/cong-trinh",
  "/tin-tuc",
  "/tin-tuc/xay-nha-tphcm",
  "/tin-tuc/cam-nang-xay-nha-2026",
  "/tin-tuc/bao-gia-xay-nha-tron-goi-phu-yen",
];

const pathSet = new Set([...indexablePaths, ...sitemapLocs, ...dests, ...hubs]);

console.log(
  JSON.stringify({
    seedTotal: posts.length,
    seedNoindex: posts.length - indexablePosts.length,
    seedIndexable: indexablePosts.length,
    csvKeywords: csv.length,
    uniquePathsToProbe: pathSet.size,
    sitemapLocs: sitemapLocs.length,
    redirectDests: dests.size,
  }),
);

const pathList = [...pathSet];
const pathLive = new Map();
await mapPool(pathList, 5, async (p) => {
  const live = await probe(p);
  pathLive.set(p, live);
  process.stdout.write(`path ${classify(live)} ${p} ${live.final}\n`);
  return live;
});

function bucket(paths) {
  const b = { "200ok": [], "200noindex": [], 404: [], "301to404": [], redirect: [], other: [] };
  for (const p of paths) {
    const live = pathLive.get(p) || { final: "?", finalStatus: 0, robots: "", status: 0 };
    b[classify(live)].push({ path: p, ...live });
  }
  return Object.fromEntries(Object.entries(b).map(([k, v]) => [k, { n: v.length, sample: v.slice(0, 25) }]));
}

const kwRows = [];
for (const row of csv) {
  const { post, slugGuess } = matchPost(row.kw);
  const pathname = post ? getPath(post) : `/tin-tuc/${slugGuess}`;
  let live = pathLive.get(pathname);
  if (!live) {
    live = await probe(pathname);
    pathLive.set(pathname, live);
  }
  const rank = parseRank(row.serp);
  kwRows.push({
    kw: row.kw,
    serp: row.serp,
    rank,
    page1: rank != null && rank <= 10,
    slug: post?.slug || slugGuess,
    path: pathname,
    policyNoindex: post ? Boolean(shouldNoindex(post.slug) || post.noindex) : null,
    class: classify(live),
    live: live.final,
  });
}

function kwStats(rows) {
  const c = { "200ok": 0, "200noindex": 0, 404: 0, "301to404": 0, redirect: 0, other: 0 };
  for (const r of rows) c[r.class] = (c[r.class] || 0) + 1;
  return c;
}

const page1 = kwRows.filter((r) => r.page1);
const notPage1 = kwRows.filter((r) => !r.page1);

const indexableLive = indexablePaths.map((p) => ({ path: p, ...(pathLive.get(p) || {}) }));
const indexableDead = indexableLive.filter((x) => classify(x) === "404" || classify(x) === "301to404");

const destLive = [...dests].map((p) => ({ path: p, ...(pathLive.get(p) || {}) }));
const destDead = destLive.filter((x) => classify(x) === "404" || classify(x) === "301to404");

const smLive = sitemapLocs.map((p) => ({ path: p, ...(pathLive.get(p) || {}) }));
const smDead = smLive.filter((x) => classify(x) === "404" || classify(x) === "301to404");
const smNoindex = smLive.filter((x) => classify(x) === "200noindex");

const out = {
  inventory: {
    seedTotal: posts.length,
    seedNoindex: posts.length - indexablePosts.length,
    seedIndexable: indexablePosts.length,
    csvKeywords: csv.length,
    sitemapLocs: sitemapLocs.length,
    redirectDests: dests.size,
  },
  keywordsAll: kwStats(kwRows),
  keywordsPage1: kwStats(page1),
  keywordsNotPage1: kwStats(notPage1),
  page1Still200: page1.filter((r) => r.class === "200ok"),
  page1Dead: page1.filter((r) => r.class === "404" || r.class === "301to404"),
  indexableDead,
  redirectDestDead: destDead,
  sitemapDead: smDead,
  sitemapNoindex: smNoindex,
  hubs: hubs.map((p) => ({ path: p, class: classify(pathLive.get(p) || {}), ...(pathLive.get(p) || {}) })),
  buckets: {
    indexable: bucket(indexablePaths),
    sitemap: bucket(sitemapLocs),
    redirectDests: bucket([...dests]),
  },
};

fs.writeFileSync(path.join(root, "scripts/audit-full-seo-out.json"), JSON.stringify(out, null, 2));
console.log("\n=== SUMMARY ===");
console.log("keywordsAll", out.keywordsAll);
console.log("keywordsPage1", out.keywordsPage1);
console.log("indexableDead", indexableDead.length, indexableDead.map((x) => x.path));
console.log("redirectDestDead", destDead.length);
console.log("sitemapDead", smDead.length, smDead.map((x) => x.path));
console.log("hubs", out.hubs.map((h) => `${h.path} ${h.final || h.class}`));
console.log("page1 still 200", out.page1Still200.map((x) => x.kw));

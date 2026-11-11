/**
 * One-off: map SerpAPI page-1 keywords → seed posts → live HTTP status.
 * Run: node scripts/audit-rank-urls.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const csvPath = path.join(root, "docs/ads-seo-7m/site-tin-tuc-rank-audit-serpapi.csv");
const seedUrl = pathToFileURL(path.join(root, "lib/seed-content/src/index.ts")).href;

function parseRank(v) {
  const t = String(v || "").trim();
  const m = t.match(/^#(\d+)$/);
  if (m) return Number(m[1]);
  return null;
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

async function probe(pathname) {
  const url = `https://www.kientrucsaokhue.com${pathname}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 20000);
  try {
    const res = await fetch(url, { redirect: "manual", signal: ac.signal, headers: { "user-agent": "Mozilla/5.0" } });
    const loc = res.headers.get("location") || "";
    let robots = "";
    let final = `${res.status}`;
    if (res.status >= 300 && res.status < 400 && loc) {
      const next = loc.startsWith("http") ? loc : `https://www.kientrucsaokhue.com${loc}`;
      const r2 = await fetch(next, { redirect: "follow", signal: ac.signal, headers: { "user-agent": "Mozilla/5.0" } });
      const html = await r2.text();
      robots = (html.match(/name=["']robots["'][^>]*content=["']([^"']+)/i) || [])[1] || "";
      final = `${res.status}->${r2.status} ${loc}`;
      return { status: res.status, loc, finalStatus: r2.status, robots, final };
    }
    if (res.status === 200) {
      const html = await res.text();
      robots = (html.match(/name=["']robots["'][^>]*content=["']([^"']+)/i) || [])[1] || "";
    }
    return { status: res.status, loc, finalStatus: res.status, robots, final: String(res.status) };
  } catch (e) {
    return { status: 0, loc: "", finalStatus: 0, robots: "", final: `err:${e.message}` };
  } finally {
    clearTimeout(t);
  }
}

async function loadSeed() {
  try {
    const mod = await import(seedUrl);
    return mod;
  } catch {
    return null;
  }
}

function parseCsv(raw) {
  const lines = raw.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean).slice(1);
  const rows = [];
  for (const line of lines) {
    const idx = line.lastIndexOf(",");
    const g = line.slice(idx + 1);
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
    rows.push({ bai, kw, hang, serp });
  }
  return rows;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const seed = await loadSeed();
const posts = seed?.seedPosts ?? [];
const shouldNoindex = seed?.shouldNoindexPostSlug ?? (() => false);
const getPath = seed?.getPostPublicPath;

const byKw = new Map();
const bySlug = new Map();
for (const p of posts) {
  bySlug.set(p.slug, p);
  if (p.keyword) byKw.set(String(p.keyword).toLowerCase().trim(), p);
}

const csv = parseCsv(fs.readFileSync(csvPath, "utf8"));
const page1 = csv.filter((r) => parseRank(r.serp) && parseRank(r.serp) <= 10);

const summary = {
  seedTotal: posts.length,
  seedNoindex: posts.filter((p) => shouldNoindex(p.slug) || p.noindex).length,
  seedIndexable: 0,
  page1Keywords: page1.length,
  live404: [],
  live301to404: [],
  live200noindex: [],
  live200ok: [],
  unmatched: [],
};

summary.seedIndexable = posts.length - summary.seedNoindex;

console.log(
  JSON.stringify(
    {
      seedTotal: summary.seedTotal,
      seedNoindex: summary.seedNoindex,
      seedIndexable: summary.seedIndexable,
      page1Keywords: summary.page1Keywords,
    },
    null,
    2,
  ),
);

for (const row of page1) {
  const kw = row.kw.trim();
  let post = byKw.get(kw.toLowerCase());
  const slugGuess = slugifyKw(kw);
  if (!post) post = bySlug.get(slugGuess);
  if (!post) {
    const hit = posts.find((p) => p.slug === slugGuess || p.slug.includes(slugGuess) || slugGuess.includes(p.slug));
    if (hit) post = hit;
  }
  const pathname = post && getPath ? getPath(post) : `/tin-tuc/${slugGuess}`;
  const noindexPolicy = post ? Boolean(shouldNoindex(post.slug) || post.noindex) : null;
  const live = await probe(pathname);
  const rec = {
    kw,
    serp: row.serp,
    slug: post?.slug || slugGuess,
    path: pathname,
    policyNoindex: noindexPolicy,
    live: live.final,
    robots: live.robots,
  };
  if (live.finalStatus === 404 || /->404/.test(live.final)) {
    if (live.status >= 300 && live.status < 400) summary.live301to404.push(rec);
    else summary.live404.push(rec);
  } else if (live.finalStatus === 200 && /noindex/i.test(live.robots)) {
    summary.live200noindex.push(rec);
  } else if (live.finalStatus === 200) {
    summary.live200ok.push(rec);
  } else if (!post) {
    summary.unmatched.push(rec);
  } else {
    summary.unmatched.push(rec);
  }
  console.log(`${row.serp.padEnd(4)} ${live.final.padEnd(28)} ni=${noindexPolicy}  ${kw}  ${pathname}`);
  await sleep(120);
}

const out = {
  seedTotal: summary.seedTotal,
  seedNoindex: summary.seedNoindex,
  seedIndexable: summary.seedIndexable,
  page1: summary.page1Keywords,
  counts: {
    live404: summary.live404.length,
    live301to404: summary.live301to404.length,
    live200noindex: summary.live200noindex.length,
    live200ok: summary.live200ok.length,
    other: summary.unmatched.length,
  },
  live404: summary.live404,
  live301to404: summary.live301to404,
  live200noindex: summary.live200noindex,
};
fs.writeFileSync(path.join(root, "scripts/audit-rank-urls-out.json"), JSON.stringify(out, null, 2));
console.log("\nCOUNTS", out.counts);

/**
 * Live organic rank via SerpAPI. Reads SERPAPI_KEY from env (do not commit).
 * Adds/updates hang_serpapi on site-tin-tuc-rank-audit.csv
 *
 * Usage: node serpapi-rank-audit.js
 */
const fs = require("fs");
const path = require("path");

const CSV_PATH = path.join(__dirname, "site-tin-tuc-rank-audit.csv");
const OUT_PATH = path.join(__dirname, "site-tin-tuc-rank-audit-serpapi.csv");
const PROGRESS_PATH = path.join(__dirname, "serpapi-rank-progress.json");
const DOMAIN = "kientrucsaokhue.com";
const DELAY_MS = 700;

const KEY = process.env.SERPAPI_KEY;
if (!KEY) {
  console.error("Missing SERPAPI_KEY env var");
  process.exit(1);
}

function parseRow(line) {
  const parts = [];
  let rest = line;
  for (let i = 0; i < 3; i++) {
    const idx = rest.lastIndexOf(",");
    if (idx < 0) return null;
    parts.unshift(rest.slice(idx + 1));
    rest = rest.slice(0, idx);
  }
  return { bai: rest, tu_khoa: parts[0], hang: parts[1], ghi_chu: parts[2] };
}

function csvEscape(s) {
  if (s == null) return "";
  const t = String(s);
  if (/[",\n]/.test(t)) return `"${t.replace(/"/g, '""')}"`;
  return t;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function serpSearch(q) {
  const params = new URLSearchParams({
    engine: "google",
    q,
    hl: "vi",
    gl: "vn",
    google_domain: "google.com.vn",
    location: "Ho Chi Minh City, Vietnam",
    num: "10",
    device: "desktop",
    api_key: KEY,
  });
  const url = `https://serpapi.com/search.json?${params.toString()}`;
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 45000);
  try {
    const res = await fetch(url, { signal: ac.signal });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status} ${text.slice(0, 200)}`);
    }
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}

function organicRank(data) {
  const org = Array.isArray(data.organic_results) ? data.organic_results : [];
  const hit = org.find((r) => (r.link || "").includes(DOMAIN));
  if (hit) return `#${hit.position}`;
  return "không trang 1";
}

async function main() {
  const raw = fs.readFileSync(CSV_PATH, "utf8").replace(/^\uFEFF/, "");
  const lines = raw.split(/\r?\n/).filter((l) => l.length > 0);
  const header = lines[0];
  const rows = lines.slice(1).map(parseRow);

  let progress = {};
  if (fs.existsSync(PROGRESS_PATH)) {
    progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"));
  }

  const hasSerpCol = header.includes("hang_serpapi");
  const outHeader = hasSerpCol
    ? header
    : "bai,tu_khoa,hang,hang_serpapi,ghi_chu";

  function writeCsv() {
    const out = [outHeader];
    for (const row of rows) {
      const serp = progress[row.tu_khoa] || "";
      out.push(
        [
          csvEscape(row.bai),
          csvEscape(row.tu_khoa),
          csvEscape(row.hang),
          csvEscape(serp),
          csvEscape(row.ghi_chu),
        ].join(",")
      );
    }
    fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), "utf8");
    try {
      fs.writeFileSync(OUT_PATH, out.join("\n") + "\n", "utf8");
    } catch (e) {
      console.error("WARN write output csv:", e.message);
    }
  }

  let done = 0;
  let searched = 0;
  for (const row of rows) {
    done++;
    if (!row || row.tu_khoa === "SKIP" || row.hang === "skip") {
      progress[row.tu_khoa] = "skip";
      continue;
    }
    if (progress[row.tu_khoa]) continue;
    let attempt = 0;
    let rank = "lỗi";
    while (attempt < 2) {
      attempt++;
      try {
        const data = await serpSearch(row.tu_khoa);
        if (data.search_metadata && data.search_metadata.status !== "Success") {
          throw new Error(data.search_metadata.status || "not success");
        }
        rank = organicRank(data);
        break;
      } catch (e) {
        rank = `lỗi: ${e.message}`;
        if (attempt < 2) await sleep(2000);
      }
    }
    progress[row.tu_khoa] = rank;
    searched++;
    console.log(`${done}/${rows.length}  ${row.tu_khoa}  →  ${rank}`);
    if (searched % 5 === 0) writeCsv();
    await sleep(DELAY_MS);
  }
  writeCsv();
  console.log(`DONE searched=${searched}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

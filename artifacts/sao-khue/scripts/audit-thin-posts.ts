import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { seedPosts, isSitemapIndexablePost } from "../../../lib/seed-content/src/index.ts";
import { countWordsFromArticleHtml } from "../../../lib/seed-content/src/article-toc.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rows = seedPosts
  .filter((p) => isSitemapIndexablePost(p) && !p.noindex)
  .map((p) => {
    const words = countWordsFromArticleHtml(p.content ?? "");
    const h2 = (p.content ?? "").match(/<h2\b/gi)?.length ?? 0;
    return { slug: p.slug, cat: p.category, words, h2, title: p.title, excerpt: p.excerpt };
  })
  .filter((r) => r.words < 900)
  .sort((a, b) => a.words - b.words);

writeFileSync(join(scriptDir, "thin-indexable.json"), JSON.stringify(rows, null, 2), "utf8");
console.log("wrote", rows.length, "rows still <900");
const all = seedPosts.filter((p) => isSitemapIndexablePost(p) && !p.noindex);
const withWords = all.map((p) => countWordsFromArticleHtml(p.content ?? ""));
console.log("indexable", all.length);
console.log("<600", withWords.filter((w) => w < 600).length);
console.log("600-899", withWords.filter((w) => w >= 600 && w < 900).length);
console.log("900-1499", withWords.filter((w) => w >= 900 && w < 1500).length);
console.log(">=1500", withWords.filter((w) => w >= 1500).length);
const mid = all
  .map((p) => ({ slug: p.slug, words: countWordsFromArticleHtml(p.content ?? "") }))
  .filter((r) => r.words >= 900 && r.words < 1500)
  .sort((a, b) => a.words - b.words);
for (const r of mid) console.log(r.words, r.slug);


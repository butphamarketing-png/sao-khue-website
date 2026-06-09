import { getPostPublicPath as seedPath, seedPosts } from "../../../lib/seed-content/src/index.ts";
import { getPostPublicPath as appPath } from "../src/lib/post-url.ts";
import { collectServerRedirects } from "../src/lib/legacy-redirects.ts";

const byPath = new Map<string, string[]>();
for (const p of seedPosts) {
  const path = seedPath(p);
  const list = byPath.get(path) ?? [];
  list.push(p.slug);
  byPath.set(path, list);
}

console.log("=== Duplicate canonical paths (seed-content) ===");
let dup = 0;
for (const [path, slugs] of byPath) {
  if (slugs.length > 1) {
    dup++;
    console.log(`  ${path} <- ${slugs.join(", ")}`);
  }
}
console.log(dup === 0 ? "  (none)" : `  total: ${dup}`);

console.log("\n=== post-url vs seed-content path mismatch ===");
let mismatch = 0;
for (const p of seedPosts) {
  const a = seedPath(p);
  const b = appPath(p);
  if (a !== b) {
    mismatch++;
    console.log(`  ${p.slug}: seed=${a} app=${b}`);
  }
}
console.log(mismatch === 0 ? "  (none)" : `  total: ${mismatch}`);

const map = collectServerRedirects();
const canon = new Set(seedPosts.map((p) => seedPath(p)));

console.log("\n=== Redirects FROM canonical URL (bad) ===");
let bad = 0;
for (const [src, dst] of map) {
  if (canon.has(src)) {
    bad++;
    console.log(`  ${src} -> ${dst}`);
  }
}
console.log(bad === 0 ? "  (none)" : `  total: ${bad}`);

console.log(`\nTotal redirect rules: ${map.size}`);

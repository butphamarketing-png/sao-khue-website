/**
 * Sinh known-paths.json — Express dùng để trả HTTP 404 cho URL không hợp lệ.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { collectKnownPaths } from "../src/lib/known-paths.ts";
import { seedPosts } from "../../../lib/seed-content/src/index.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(scriptDir, "..", "dist", "public");

const paths = [...collectKnownPaths(seedPosts)].sort();
const json = JSON.stringify({ paths }, null, 2);

writeFileSync(join(distDir, "known-paths.json"), json, "utf8");

console.log(`[known-paths] Wrote ${paths.length} paths → dist/public/known-paths.json`);

/**
 * CLI — gửi lập chỉ mục cho URL mới hoặc ping sitemap.
 *
 * Ví dụ:
 *   pnpm run submit-indexing -- --batch 9
 *   pnpm run submit-indexing -- --sitemap-only
 *   INDEXING_SLUGS=slug-a,slug-b pnpm run submit-indexing
 */
import { getPostPublicPath, INDEXING_BATCH_SLUGS } from "@workspace/seed-content";
import { formatSubmitIndexingLog, submitIndexing } from "../src/lib/submit-indexing.ts";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv() {
  const envPath = resolve(process.cwd(), "../../.env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const BATCH_SLUGS: Record<string, readonly string[]> = INDEXING_BATCH_SLUGS;

function resolveSlugs(args: string[]): string[] {
  const sitemapOnly = args.includes("--sitemap-only");
  if (sitemapOnly) return [];

  const batchArg = args.find((a) => a.startsWith("--batch="))?.slice(8)
    ?? (args.includes("--batch") ? args[args.indexOf("--batch") + 1] : undefined)
    ?? process.env.INDEXING_BATCH;

  if (batchArg && BATCH_SLUGS[batchArg]) {
    return [...BATCH_SLUGS[batchArg]];
  }

  const envSlugs = process.env.INDEXING_SLUGS?.split(",").map((s) => s.trim()).filter(Boolean);
  if (envSlugs?.length) return envSlugs;

  return [];
}

function toAbsoluteUrls(slugs: string[]): string[] {
  const origin = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://www.kientrucsaokhue.com").replace(
    /\/$/,
    "",
  );
  return slugs.map((slug) => `${origin}${getPostPublicPath({ slug, category: "tin-tuc" })}`);
}

loadEnv();

async function main() {
  const args = process.argv.slice(2);
  const sitemapOnly = args.includes("--sitemap-only");
  const slugs = resolveSlugs(args);
  const urls = toAbsoluteUrls(slugs);

  console.log(sitemapOnly ? "[indexing] Ping sitemap..." : `[indexing] Gửi ${urls.length} URL...`);

  const result = await submitIndexing({
    urls,
    pingSitemap: true,
    indexNow: !sitemapOnly,
    googleIndexing: !sitemapOnly,
  });

  console.log(formatSubmitIndexingLog(result));
  process.exit(0);
}

main().catch((err) => {
  console.error("[indexing] Lỗi:", err);
  process.exit(1);
});

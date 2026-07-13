import { seedPostsToDatabase } from "../src/lib/bootstrap";
import { formatSubmitIndexingLog, submitIndexing } from "../src/lib/submit-indexing";
import { getPostPublicPath, INDEXING_BATCH_SLUGS } from "@workspace/seed-content";
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

loadEnv();

async function main() {
  console.log("Seeding posts...");
  const count = await seedPostsToDatabase();
  console.log("Done. Total:", count);

  const autoIndex =
    process.env.AUTO_SUBMIT_INDEXING === "1" || process.env.AUTO_SUBMIT_INDEXING === "true";
  if (autoIndex) {
    const batch = process.env.INDEXING_BATCH?.trim();
    const slugs = batch && INDEXING_BATCH_SLUGS[batch] ? [...INDEXING_BATCH_SLUGS[batch]] : [];
    const origin = (process.env.SITE_URL ?? process.env.VITE_SITE_URL ?? "https://www.kientrucsaokhue.com").replace(
      /\/$/,
      "",
    );
    const urls = slugs.map((slug) => `${origin}${getPostPublicPath({ slug, category: "tin-tuc" })}`);
    console.log(slugs.length ? `[indexing] Tự động gửi batch ${batch} (${urls.length} URL)...` : "[indexing] Ping sitemap...");
    const result = await submitIndexing({ urls, pingSitemap: true, indexNow: true, googleIndexing: true });
    console.log(formatSubmitIndexingLog(result));
  }

  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

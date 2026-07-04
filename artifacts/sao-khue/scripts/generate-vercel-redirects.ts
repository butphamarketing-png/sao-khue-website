/**
 * Sinh redirect 301 server-side cho Vercel — Googlebot nhận HTTP redirect, không chỉ JS.
 * Chạy trong `pnpm build`; cập nhật bulk-redirects.json + xóa redirects khỏi vercel.json.
 *
 * Hobby plan: không dùng bulkRedirectsPath (chỉ Pro+). Redirects chạy qua middleware.ts.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { collectServerRedirects } from "../src/lib/legacy-redirects.ts";

export type VercelRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
  has?: Array<{ type: string; value: string }>;
};

type BulkRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

const TRAILING_SLASH_REDIRECT: VercelRedirect = {
  source: "/:path(.+)/",
  destination: "/:path",
  permanent: true,
};

function needsInlineRedirect(source: string): boolean {
  return source.includes(":") || source.includes("(");
}

export function buildGscRedirects(): VercelRedirect[] {
  const map = collectServerRedirects();

  const redirects: VercelRedirect[] = [...map.entries()].map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  }));

  redirects.sort((a, b) => a.source.localeCompare(b.source));
  redirects.push(TRAILING_SLASH_REDIRECT);

  return redirects;
}

function toBulkRedirects(all: VercelRedirect[]): BulkRedirect[] {
  return all
    .filter((rule) => !rule.has && !needsInlineRedirect(rule.source))
    .map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: rule.permanent,
    }));
}

function patchVercelJson(vercelPath: string) {
  const raw = readFileSync(vercelPath, "utf8");
  const config = JSON.parse(raw) as Record<string, unknown>;
  config.redirects = [];
  delete config.bulkRedirectsPath;
  writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..", "..", "..");
const apiServerDir = join(repoRoot, "artifacts", "api-server");
const bulkFile = join(apiServerDir, "bulk-redirects.json");

const all = buildGscRedirects();
const bulk = toBulkRedirects(all);

writeFileSync(bulkFile, `${JSON.stringify(bulk, null, 2)}\n`, "utf8");
patchVercelJson(join(repoRoot, "vercel.json"));
patchVercelJson(join(apiServerDir, "vercel.json"));

console.log(`[redirects] ${bulk.length} rules → bulk-redirects.json (middleware.ts on Hobby)`);

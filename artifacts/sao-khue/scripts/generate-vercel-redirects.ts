/**
 * Sinh redirect 301 server-side cho Vercel — Googlebot nhận HTTP redirect, không chỉ JS.
 * Chạy trong `pnpm build`; cập nhật vercel.json ở root và api-server.
 *
 * Vercel Hobby giới hạn 1.024 routes/deployment — redirect path-to-path chuyển sang
 * bulkRedirectsPath; vercel.json chỉ giữ wildcard / host matching.
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

const HOST_REDIRECTS: VercelRedirect[] = [
  {
    source: "/:path*",
    has: [{ type: "host", value: "kientrucsaokhue.com" }],
    destination: "https://www.kientrucsaokhue.com/:path*",
    permanent: true,
  },
];

/** Wildcard / regex — không hỗ trợ bulkRedirectsPath (đã có trong collectServerRedirects). */
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

  return [...HOST_REDIRECTS, ...redirects];
}

export function splitRedirects(all: VercelRedirect[]): {
  inline: VercelRedirect[];
  bulk: BulkRedirect[];
} {
  const inline: VercelRedirect[] = [];
  const bulk: BulkRedirect[] = [];

  for (const rule of all) {
    if (rule.has || needsInlineRedirect(rule.source)) {
      inline.push(rule);
      continue;
    }
    bulk.push({
      source: rule.source,
      destination: rule.destination,
      permanent: rule.permanent,
    });
  }

  return { inline, bulk };
}

function patchVercelJson(
  vercelPath: string,
  inlineRedirects: VercelRedirect[],
  bulkRedirectsPath: string,
) {
  const raw = readFileSync(vercelPath, "utf8");
  const config = JSON.parse(raw) as Record<string, unknown>;
  config.redirects = inlineRedirects;
  config.bulkRedirectsPath = bulkRedirectsPath;
  writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..", "..", "..");
const apiServerDir = join(repoRoot, "artifacts", "api-server");
const bulkFile = join(apiServerDir, "bulk-redirects.json");

const all = buildGscRedirects();
const { inline, bulk } = splitRedirects(all);

writeFileSync(bulkFile, `${JSON.stringify(bulk, null, 2)}\n`, "utf8");
patchVercelJson(join(repoRoot, "vercel.json"), inline, "artifacts/api-server/bulk-redirects.json");
patchVercelJson(join(apiServerDir, "vercel.json"), inline, "bulk-redirects.json");

console.log(
  `[redirects] ${bulk.length} bulk + ${inline.length} inline → vercel.json (root + api-server)`,
);

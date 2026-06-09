/**
 * Sinh redirect 301 server-side cho Vercel — Googlebot nhận HTTP redirect, không chỉ JS.
 * Chạy trong `pnpm build`; cập nhật vercel.json ở root và api-server.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { collectServerRedirects } from "../src/lib/legacy-redirects.ts";

export type VercelRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export function buildGscRedirects(): VercelRedirect[] {
  const map = collectServerRedirects();

  const redirects: VercelRedirect[] = [...map.entries()].map(([source, destination]) => ({
    source,
    destination,
    permanent: true,
  }));

  redirects.sort((a, b) => a.source.localeCompare(b.source));

  redirects.push({
    source: "/:path(.+)/",
    destination: "/:path",
    permanent: true,
  });

  return redirects;
}

function patchVercelJson(vercelPath: string, redirects: VercelRedirect[]) {
  const raw = readFileSync(vercelPath, "utf8");
  const config = JSON.parse(raw) as Record<string, unknown>;
  config.redirects = redirects;
  writeFileSync(vercelPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..", "..", "..");

const redirects = buildGscRedirects();
patchVercelJson(join(repoRoot, "vercel.json"), redirects);
patchVercelJson(join(repoRoot, "artifacts", "api-server", "vercel.json"), redirects);

console.log(`[redirects] Wrote ${redirects.length} rules → vercel.json (root + api-server)`);

/**
 * Sinh redirect 301 server-side cho Vercel — Googlebot nhận HTTP redirect, không chỉ JS.
 * Chạy trong `pnpm build`; cập nhật vercel.json ở root và api-server.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeCategory, seedPosts, getPostPublicPath } from "../../../lib/seed-content/src/index.ts";
import {
  KNOWN_POST_SLUGS,
  LEGACY_SLUG_REDIRECTS,
  POST_SLUG_ALIASES,
} from "../src/lib/legacy-redirects.ts";

export type VercelRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

function addRedirect(map: Map<string, string>, source: string, destination: string) {
  const src = source.startsWith("/") ? source : `/${source}`;
  const dst = destination.startsWith("/") ? destination : `/${destination}`;
  if (src === dst || src === `${dst}/`) return;
  if (!map.has(src)) map.set(src, dst);
}

export function buildGscRedirects(): VercelRedirect[] {
  const map = new Map<string, string>();

  const staticRoutes: [string, string][] = [
    ["/gioi-thieu", "/bai-viet/ve-chung-toi"],
    ["/kinh-nghiem", "/tin-tuc"],
    ["/kinh-nghiem-xay-dung", "/tin-tuc"],
    ["/contact", "/lien-he"],
    ["/about", "/bai-viet/ve-chung-toi"],
    ["/services", "/dich-vu"],
    ["/projects", "/cong-trinh"],
    ["/pricing", "/bao-gia"],
    ["/du-an", "/cong-trinh"],
    ["/bai-viet/thiet-ke-biet-thu-thu-duc", "/cong-trinh/thiet-ke-nha-biet-thu-thu-duc"],
  ];
  for (const [src, dst] of staticRoutes) addRedirect(map, src, dst);

  addRedirect(map, "/gioi-thieu/:path*", "/bai-viet/ve-chung-toi");
  addRedirect(map, "/kinh-nghiem/:path*", "/tin-tuc");
  addRedirect(map, "/kinh-nghiem-xay-dung/:path*", "/tin-tuc");

  for (const [slug, target] of Object.entries(LEGACY_SLUG_REDIRECTS)) {
    addRedirect(map, `/${slug}`, target);
  }

  for (const slug of KNOWN_POST_SLUGS) {
    const post = seedPosts.find((p) => p.slug === slug);
    if (post) addRedirect(map, `/${slug}`, getPostPublicPath(post));
  }

  for (const post of seedPosts) {
    const canonical = getPostPublicPath(post);
    const cat = normalizeCategory(post.category);

    if (!canonical.startsWith("/bai-viet/")) {
      addRedirect(map, `/bai-viet/${post.slug}`, canonical);
    }

    addRedirect(map, `/${post.slug}`, canonical);

    if (cat === "dich-vu" || cat === "cong-trinh") {
      const leaf = canonical.split("/").pop();
      if (leaf && leaf !== post.slug) {
        addRedirect(map, `/${cat}/${post.slug}`, canonical);
      }
    }
  }

  for (const [alias, realSlug] of Object.entries(POST_SLUG_ALIASES)) {
    const post = seedPosts.find((p) => p.slug === realSlug);
    if (!post) continue;
    const canonical = getPostPublicPath(post);
    addRedirect(map, `/${alias}`, canonical);
    addRedirect(map, `/bai-viet/${alias}`, canonical);
  }

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

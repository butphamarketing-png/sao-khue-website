import type { IncomingMessage, ServerResponse } from "http";
import express, { type Express, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { pinoHttp } from "pino-http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync, readFileSync } from "node:fs";
import router from "./routes";
import sitemapRouter from "./routes/sitemap";
import rssRouter from "./routes/rss";
import { logger } from "./lib/logger";
import { getCorsOptions } from "./lib/cors";
import { authMiddleware } from "./middlewares/authMiddleware";
import { shouldSpaShellFallback } from "@workspace/seed-content";

/** Opaque so Vercel NFT does not pack the entire static tree into api/index. */
function publicDirName(): string {
  return ["pub", "lic"].join("");
}

function loadKnownPaths(frontendDistDir: string): Set<string> | null {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const pub = publicDirName();
  const candidates = [
    path.join(frontendDistDir, "known-paths.json"),
    // Prefer dist copy (small) over scanning the CDN static root.
    path.join(here, "known-paths.json"),
    path.join(here, "..", pub, "known-paths.json"),
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    try {
      const raw = JSON.parse(readFileSync(file, "utf8")) as { paths?: string[] };
      if (Array.isArray(raw.paths) && raw.paths.length > 0) {
        return new Set(raw.paths);
      }
    } catch (err) {
      logger.warn({ err, file }, "failed to load known-paths.json");
    }
  }
  return null;
}

const app: Express = express();
const apiDir = path.dirname(fileURLToPath(import.meta.url));
/**
 * Resolve frontend static root at runtime.
 * Keep paths NFT-opaque: never pass a statically joined `.../sao-khue/...` or
 * literal `public` / `images` segments — Vercel file tracing would pack
 * ~200MB+ of assets into the serverless function.
 * On Vercel, `outputDirectory: public` serves via CDN — skip Express static.
 */
function resolveFrontendDistDir(): string {
  const publicSeg = publicDirName();
  const candidates = [
    path.resolve(apiDir, "..", publicSeg),
    path.resolve(process.cwd(), publicSeg),
  ];
  for (const dir of candidates) {
    if (existsSync(path.join(dir, "index.html"))) return dir;
  }
  return candidates[0]!;
}
const frontendDistDir = resolveFrontendDistDir();
const frontendIndexPath = path.join(frontendDistDir, "index.html");
const isVercel = Boolean(process.env.VERCEL);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: IncomingMessage) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res: ServerResponse) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);
app.use(cors(getCorsOptions()));
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use("/api", router);
/** Root + /api — Vercel rewrite /sitemap.xml|/robots.txt|/feed.xml → /api/... */
app.use(sitemapRouter);
app.use(rssRouter);
app.use("/api", sitemapRouter);
app.use("/api", rssRouter);

/** WordPress-style trailing slashes — /sua-nha-tron-goi-tphcm/ → /sua-nha-tron-goi-tphcm */
app.use((req, res, next) => {
  const pathOnly = req.path;
  if (pathOnly.length > 1 && pathOnly.endsWith("/")) {
    const query = req.url?.slice(pathOnly.length) ?? "";
    res.redirect(301, pathOnly.slice(0, -1) + query);
    return;
  }
  next();
});

// Vercel: static HTML/assets come from outputDirectory (CDN). Shipping them inside
// the serverless function blows the 250MB limit (~110MB+ images/prerender).
if (!isVercel && existsSync(frontendIndexPath)) {
  app.use(express.static(frontendDistDir));

  const notFoundHtmlPath = path.join(frontendDistDir, "404.html");
  const knownPaths = loadKnownPaths(frontendDistDir);

  function resolvePrerenderedHtml(pathOnly: string): string | null {
    if (pathOnly === "/") {
      return existsSync(frontendIndexPath) ? frontendIndexPath : null;
    }
    const nested = path.join(frontendDistDir, pathOnly.slice(1), "index.html");
    return existsSync(nested) ? nested : null;
  }

  function sendNotFound(res: Response) {
    res.set("X-Robots-Tag", "noindex, nofollow");
    if (existsSync(notFoundHtmlPath)) {
      res.status(404).sendFile(notFoundHtmlPath);
      return;
    }
    res.status(404).end("Not found");
  }

  app.get(/^(?!\/api(?:\/|$)|sitemap\.xml$|robots\.txt$|feed\.xml$).*/, (req, res, next) => {
    const pathOnly = req.path.split("?")[0] ?? req.path;
    if (/\.(png|jpe?g|gif|webp|svg|ico|woff2?|ttf|map)$/i.test(pathOnly)) {
      res.status(404).end();
      return;
    }

    // `/404` is a prerendered asset, but it should still respond as a real 404 page.
    if (pathOnly === "/404") {
      sendNotFound(res);
      return;
    }

    // URL không nằm trong seed/menu → hard 404 (không soft-200 SPA shell / homepage).
    if (knownPaths && !knownPaths.has(pathOnly) && pathOnly !== "/404") {
      sendNotFound(res);
      return;
    }

    const htmlPath = resolvePrerenderedHtml(pathOnly);
    if (!htmlPath) {
      // Landing/hub SPA routes: serve shell so ads URLs không 404 khi thiếu prerender.
      if (shouldSpaShellFallback(pathOnly) && existsSync(frontendIndexPath)) {
        res.sendFile(frontendIndexPath, (err) => {
          if (err) next(err);
        });
        return;
      }
      sendNotFound(res);
      return;
    }

    res.sendFile(htmlPath, (err) => {
      if (err) next(err);
    });
  });
} else if (!isVercel) {
  logger.warn(
    { frontendDistDir },
    "Frontend build not found; serving API only",
  );
}

export default app;

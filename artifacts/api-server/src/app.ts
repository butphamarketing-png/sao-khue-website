import type { IncomingMessage, ServerResponse } from "http";
import express, { type Express, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { pinoHttp } from "pino-http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import router from "./routes";
import sitemapRouter from "./routes/sitemap";
import rssRouter from "./routes/rss";
import { logger } from "./lib/logger";
import { getCorsOptions } from "./lib/cors";
import { authMiddleware } from "./middlewares/authMiddleware";

const app: Express = express();
const apiDir = path.dirname(fileURLToPath(import.meta.url));
/**
 * Resolve frontend static root at runtime.
 * Keep paths NFT-opaque: never pass a statically joined `.../sao-khue/...` or
 * `.../images` segment — Vercel file tracing would pack ~200MB+ of assets into
 * the serverless function. On Vercel, `outputDirectory: public` serves via CDN.
 */
function resolveFrontendDistDir(): string {
  const publicSeg = ["pub", "lic"].join("");
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
app.use(sitemapRouter);
app.use(rssRouter);

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

if (existsSync(frontendIndexPath)) {
  // Skip static image-tree probes here — they make NFT include public/images.
  app.use(express.static(frontendDistDir));

  const notFoundHtmlPath = path.join(frontendDistDir, "404.html");

  function resolvePrerenderedHtml(pathOnly: string): string | null {
    if (pathOnly === "/") {
      return existsSync(frontendIndexPath) ? frontendIndexPath : null;
    }
    const nested = path.join(frontendDistDir, pathOnly.slice(1), "index.html");
    return existsSync(nested) ? nested : null;
  }

  function sendNotFound(res: Response) {
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

    const htmlPath = resolvePrerenderedHtml(pathOnly);
    if (!htmlPath) {
      sendNotFound(res);
      return;
    }

    res.sendFile(htmlPath, (err) => {
      if (err) next(err);
    });
  });
} else {
  logger.warn(
    { frontendDistDir },
    "Frontend build not found; serving API only",
  );
}

export default app;

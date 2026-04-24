import express, { type Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";
import router from "./routes";
import { logger } from "./lib/logger";
import { authMiddleware } from "./middlewares/authMiddleware";

const app: Express = express();
const apiDir = path.dirname(fileURLToPath(import.meta.url));
const frontendDistDir = path.resolve(apiDir, "..", "..", "sao-khue", "dist", "public");
const frontendIndexPath = path.join(frontendDistDir, "index.html");

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return { id: req.id, method: req.method, url: req.url?.split("?")[0] };
      },
      res(res) {
        return { statusCode: res.statusCode };
      },
    },
  }),
);
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(authMiddleware);

app.use("/api", router);

if (existsSync(frontendIndexPath)) {
  app.use(express.static(frontendDistDir));

  app.get(/^(?!\/api(?:\/|$)).*/, (_req, res) => {
    res.sendFile(frontendIndexPath);
  });
} else {
  logger.warn(
    { frontendDistDir },
    "Frontend build not found; serving API only",
  );
}

export default app;

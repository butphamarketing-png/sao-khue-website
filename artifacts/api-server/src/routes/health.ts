import { Router, type IRouter, type Request, type Response } from "express";
import { pingDatabase } from "@workspace/db";
import { isSupabaseStorageEnabled } from "../lib/supabase";

const router: IRouter = Router();

router.get("/healthz", async (_req: Request, res: Response) => {
  const dbOk = await pingDatabase();
  const status = dbOk ? "ok" : "degraded";
  res.status(dbOk ? 200 : 503).json({
    status,
    database: dbOk ? "connected" : "disconnected",
    storage: isSupabaseStorageEnabled() ? "supabase" : "not_configured",
    timestamp: new Date().toISOString(),
  });
});

export default router;

import { Router, type IRouter, type Request, type Response } from "express";
import { pingDatabase } from "@workspace/db";
import { isSupabaseStorageEnabled } from "../lib/supabase";

const router: IRouter = Router();

router.get("/healthz", async (_req: Request, res: Response) => {
  const dbOk = await pingDatabase();
  const status = dbOk ? "ok" : "degraded";
  const gmailConfigured = Boolean(
    process.env.GMAIL_USER?.trim() && process.env.GMAIL_APP_PASSWORD?.trim(),
  );
  const resendConfigured = Boolean(process.env.RESEND_API_KEY?.trim());
  res.status(dbOk ? 200 : 503).json({
    status,
    database: dbOk ? "connected" : "disconnected",
    storage: isSupabaseStorageEnabled() ? "supabase" : "not_configured",
    leadNotify: {
      gmail: gmailConfigured,
      resend: resendConfigured,
      to: Boolean((process.env.LEAD_NOTIFY_EMAIL || "butphamarketing@gmail.com").trim()),
      ready: gmailConfigured || resendConfigured,
    },
    timestamp: new Date().toISOString(),
  });
});

export default router;

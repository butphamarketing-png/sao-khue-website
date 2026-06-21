import { Router, type IRouter, type Request, type Response } from "express";
import { isAdmin } from "../lib/auth";
import { fetchAnalyticsTraffic } from "../lib/google-analytics";

const router: IRouter = Router();

function requireAdmin(req: Request, res: Response): boolean {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

router.get("/analytics/traffic", async (req, res) => {
  if (!requireAdmin(req, res)) return;

  const daysRaw = Number(req.query.days ?? 7);
  const days = Number.isFinite(daysRaw) ? Math.min(Math.max(daysRaw, 1), 30) : 7;

  try {
    const data = await fetchAnalyticsTraffic(days);
    res.json(data);
  } catch (err) {
    console.error("[analytics/traffic]", err);
    res.status(500).json({
      configured: false,
      reason: "api_error",
      message: "Lỗi server khi lấy thống kê truy cập.",
    });
  }
});

export default router;

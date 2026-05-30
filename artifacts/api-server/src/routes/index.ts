import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import postsRouter from "./posts";
import { siteSettingsRouter } from "./site-settings";
import uploadsRouter from "./uploads";
import sitemapRouter from "./sitemap";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(uploadsRouter);
router.use(sitemapRouter);
router.use(postsRouter);
router.use(siteSettingsRouter);

export default router;

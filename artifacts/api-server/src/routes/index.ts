import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import postsRouter from "./posts";
import contactLeadsRouter from "./contact-leads";
import { siteSettingsRouter } from "./site-settings";
import uploadsRouter from "./uploads";
import sitemapRouter from "./sitemap";
import rssRouter from "./rss";
import analyticsRouter from "./analytics";
import siteVisitsRouter from "./site-visits";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(uploadsRouter);
router.use(sitemapRouter);
router.use(rssRouter);
router.use(analyticsRouter);
router.use(siteVisitsRouter);
router.use(postsRouter);
router.use(contactLeadsRouter);
router.use(siteSettingsRouter);

export default router;

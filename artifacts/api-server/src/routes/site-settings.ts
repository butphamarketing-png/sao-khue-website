import { Router, type IRouter, type Request, type Response } from "express";
import { db, siteSettingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { isAdmin } from "../lib/auth";

const SettingsInput = z.object({
  companyName: z.string().min(1),
  taxCode: z.string().default(""),
  hotline1: z.string().default(""),
  hotline2: z.string().default(""),
  email: z.string().default(""),
  address1: z.string().default(""),
  address2: z.string().default(""),
  workingHours: z.string().default(""),
  logoUrl: z.string().default(""),
  loadingLogoUrl: z.string().default(""),
  facebookUrl: z.string().default(""),
  youtubeUrl: z.string().default(""),
  instagramUrl: z.string().default(""),
  zaloPhone: z.string().default(""),
  messengerUrl: z.string().default(""),
  footerDescription: z.string().default(""),
  heroSlidesJson: z.string().default("[]"),
  homeCommitmentsJson: z.string().default("[]"),
  homePricingJson: z.string().default("[]"),
  homeVideoUrl: z.string().default(""),
  homeVideoLabel: z.string().default("Xem video"),
  homeAboutEyebrow: z.string().default(""),
  homeAboutTitle: z.string().default(""),
  homeAboutIntro: z.string().default(""),
  homeAboutBody: z.string().default(""),
  homeAboutPointsJson: z.string().default("[]"),
  homeAboutImageUrl: z.string().default(""),
  homeAboutExperienceLabel: z.string().default(""),
  homeAboutExperienceYears: z.string().default(""),
  homeCalculatorConfigJson: z.string().default("{}"),
  homeStatsJson: z.string().default("[]"),
  homeTestimonialsJson: z.string().default("[]"),
  homeFaqJson: z.string().default("[]"),
  homeProcessJson: z.string().default("[]"),
  categoryPagesJson: z.string().default("{}"),
  homeSectionMetaJson: z.string().default("{}"),
  homeCtaJson: z.string().default("{}"),
  homeQuoteServicesJson: z.string().default("[]"),
  homeContactJson: z.string().default("{}"),
  topBarSlogan: z.string().default("Tận tâm — Uy tín — Chất lượng"),
  gaTrackingId: z.string().default(""),
  gscVerification: z.string().default(""),
  googleMapEmbed: z.string().default(""),
  navMenuJson: z.string().default("[]"),
  pageBannersJson: z.string().default("{}"),
  homeFeaturedPostsJson: z.string().default("{}"),
  opengraphImageUrl: z.string().default(""),
});

const router: IRouter = Router();

async function getOrCreate() {
  const [row] = await db
    .select()
    .from(siteSettingsTable)
    .where(eq(siteSettingsTable.id, 1))
    .limit(1);
  if (row) return row;
  const [created] = await db.insert(siteSettingsTable).values({ id: 1 }).returning();
  return created;
}

router.get("/site-settings", async (_req, res) => {
  try {
    const row = await getOrCreate();
    res.json(row);
  } catch (err) {
    console.error("[site-settings] get failed", err);
    res.status(503).json({ error: "Database unavailable. Check DATABASE_URL / Supabase connection." });
  }
});

router.put("/site-settings", async (req: Request, res: Response) => {
  if (!req.isAuthenticated() || !isAdmin(req.user)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const parsed = SettingsInput.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  await getOrCreate();
  const [row] = await db
    .update(siteSettingsTable)
    .set(parsed.data)
    .where(eq(siteSettingsTable.id, 1))
    .returning();
  res.json(row);
});

export { router as siteSettingsRouter };

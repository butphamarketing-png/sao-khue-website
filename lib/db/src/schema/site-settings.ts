import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const siteSettingsTable = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  companyName: text("company_name")
    .notNull()
    .default("CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE"),
  taxCode: text("tax_code").notNull().default(""),
  hotline1: text("hotline1").notNull().default("0936 045 268"),
  hotline2: text("hotline2").notNull().default("0909 075 668"),
  email: text("email").notNull().default("kientrucsaokhue@gmail.com"),
  address1: text("address1")
    .notNull()
    .default("245/8 Binh Loi, Phuong 13, Quan Binh Thanh, TP.HCM"),
  address2: text("address2")
    .notNull()
    .default("146 duong 16, khu do thi Van Phuc"),
  workingHours: text("working_hours").notNull().default("8:00 - 17:30"),
  logoUrl: text("logo_url")
    .notNull()
    .default(
      "https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg",
    ),
  loadingLogoUrl: text("loading_logo_url").notNull().default(""),
  facebookUrl: text("facebook_url")
    .notNull()
    .default("https://facebook.com/kientrucsaokhue"),
  youtubeUrl: text("youtube_url").notNull().default(""),
  instagramUrl: text("instagram_url").notNull().default(""),
  zaloPhone: text("zalo_phone").notNull().default("0936045268"),
  messengerUrl: text("messenger_url").notNull().default(""),
  footerDescription: text("footer_description")
    .notNull()
    .default(
      "Uy tin - Chat luong - Tan tam. Chung toi chuyen thiet ke va thi cong xay dung nha pho, biet thu chuyen nghiep.",
    ),
  heroSlidesJson: text("hero_slides_json").notNull().default("[]"),
  homeCommitmentsJson: text("home_commitments_json").notNull().default("[]"),
  homePricingJson: text("home_pricing_json").notNull().default("[]"),
  homeVideoUrl: text("home_video_url").notNull().default(""),
  homeVideoLabel: text("home_video_label").notNull().default("Xem video"),
  homeAboutEyebrow: text("home_about_eyebrow")
    .notNull()
    .default("Ve chung toi"),
  homeAboutTitle: text("home_about_title")
    .notNull()
    .default("CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE"),
  homeAboutIntro: text("home_about_intro")
    .notNull()
    .default(
      "Chuyen thiet ke, thi cong xay dung, sua chua va cai tao nha tron goi tai TP.HCM, Binh Duong, Dong Nai va cac tinh lan can.",
    ),
  homeAboutBody: text("home_about_body")
    .notNull()
    .default(
      "Voi tam nhin tro thanh cong ty hang dau trong nganh kien truc va xay dung, Sao Khue tu hao so huu doi ngu kien truc su, ky su gioi chuyen mon va giau nhiet huyet.",
    ),
  homeAboutPointsJson: text("home_about_points_json").notNull().default("[]"),
  homeAboutImageUrl: text("home_about_image_url")
    .notNull()
    .default("/images/about.png"),
  homeAboutExperienceLabel: text("home_about_experience_label")
    .notNull()
    .default("Nam Kinh Nghiem\nXay Dung"),
  homeAboutExperienceYears: text("home_about_experience_years")
    .notNull()
    .default("10+"),
  homeCalculatorConfigJson: text("home_calculator_config_json").notNull().default("{}"),
  gaTrackingId: text("ga_tracking_id").notNull().default(""),
  gscVerification: text("gsc_verification").notNull().default(""),
});

export type SiteSettings = typeof siteSettingsTable.$inferSelect;
export type InsertSiteSettings = typeof siteSettingsTable.$inferInsert;

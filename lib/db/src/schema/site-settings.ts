import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const siteSettingsTable = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  companyName: text("company_name")
    .notNull()
    .default("CONG TY TNHH THIET KE VA XAY DUNG SAO KHUE"),
  taxCode: text("tax_code").notNull().default(""),
  hotline1: text("hotline1").notNull().default("0909 085 668"),
  hotline2: text("hotline2").notNull().default(""),
  email: text("email").notNull().default("kientrucsaokhue@gmail.com"),
  address1: text("address1")
    .notNull()
    .default("245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM"),
  address2: text("address2")
    .notNull()
    .default("146 duong 16, khu do thi Van Phuc"),
  workingHours: text("working_hours").notNull().default("8:00 - 17:30"),
  logoUrl: text("logo_url").notNull().default("/images/logo.png"),
  loadingLogoUrl: text("loading_logo_url").notNull().default("/images/logo.png"),
  facebookUrl: text("facebook_url")
    .notNull()
    .default("https://facebook.com/kientrucsaokhue"),
  youtubeUrl: text("youtube_url").notNull().default(""),
  instagramUrl: text("instagram_url").notNull().default(""),
  zaloPhone: text("zalo_phone").notNull().default("0909085668"),
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
  homeStatsJson: text("home_stats_json").notNull().default("[]"),
  homeTestimonialsJson: text("home_testimonials_json").notNull().default("[]"),
  homeFaqJson: text("home_faq_json").notNull().default("[]"),
  homeProcessJson: text("home_process_json").notNull().default("[]"),
  categoryPagesJson: text("category_pages_json").notNull().default("{}"),
  homeSectionMetaJson: text("home_section_meta_json").notNull().default("{}"),
  homeCtaJson: text("home_cta_json").notNull().default("{}"),
  homeQuoteServicesJson: text("home_quote_services_json").notNull().default("[]"),
  homeContactJson: text("home_contact_json").notNull().default("{}"),
  topBarSlogan: text("top_bar_slogan")
    .notNull()
    .default("Tận tâm — Uy tín — Chất lượng"),
  gaTrackingId: text("ga_tracking_id").notNull().default(""),
  gscVerification: text("gsc_verification").notNull().default(""),
  googleMapEmbed: text("google_map_embed").notNull().default(""),
  navMenuJson: text("nav_menu_json").notNull().default("[]"),
  pageBannersJson: text("page_banners_json").notNull().default("{}"),
  homeFeaturedPostsJson: text("home_featured_posts_json").notNull().default("{}"),
  opengraphImageUrl: text("opengraph_image_url").notNull().default(""),
});

export type SiteSettings = typeof siteSettingsTable.$inferSelect;
export type InsertSiteSettings = typeof siteSettingsTable.$inferInsert;

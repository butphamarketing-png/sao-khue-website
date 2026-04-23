import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const siteSettingsTable = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull().default("CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SAO KHUÊ"),
  taxCode: text("tax_code").notNull().default(""),
  hotline1: text("hotline1").notNull().default("0936 045 268"),
  hotline2: text("hotline2").notNull().default("0909 075 668"),
  email: text("email").notNull().default("kientrucsaokhue@gmail.com"),
  address1: text("address1").notNull().default("245/8 Bình Lợi, Phường 13, Quận Bình Thạnh, TP.HCM"),
  address2: text("address2").notNull().default("146 đường 16, khu đô thị Vạn Phúc"),
  workingHours: text("working_hours").notNull().default("8:00 - 17:30"),
  logoUrl: text("logo_url").notNull().default("https://kientrucsaokhue.com/wp-content/uploads/2023/03/z4174323393119_4de9a59b7bd4ac243e066b2c5a15a62b-2.jpg"),
  facebookUrl: text("facebook_url").notNull().default("https://facebook.com/kientrucsaokhue"),
  youtubeUrl: text("youtube_url").notNull().default(""),
  instagramUrl: text("instagram_url").notNull().default(""),
  zaloPhone: text("zalo_phone").notNull().default("0936045268"),
  messengerUrl: text("messenger_url").notNull().default(""),
  footerDescription: text("footer_description").notNull().default("Uy tín – Chất lượng – Tận tâm. Chúng tôi chuyên thiết kế và thi công xây dựng nhà phố, biệt thự chuyên nghiệp."),
  gaTrackingId: text("ga_tracking_id").notNull().default(""),
  gscVerification: text("gsc_verification").notNull().default(""),
});

export type SiteSettings = typeof siteSettingsTable.$inferSelect;
export type InsertSiteSettings = typeof siteSettingsTable.$inferInsert;

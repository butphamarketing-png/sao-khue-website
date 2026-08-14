import { index, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const siteVisitsTable = pgTable(
  "site_visits",
  {
    id: serial("id").primaryKey(),
    ip: text("ip").notNull().default(""),
    path: text("path").notNull().default("/"),
    city: text("city").notNull().default(""),
    region: text("region").notNull().default(""),
    country: text("country").notNull().default(""),
    userAgent: text("user_agent").notNull().default(""),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    index("site_visits_ip_idx").on(table.ip),
    index("site_visits_created_at_idx").on(table.createdAt),
  ],
);

export type SiteVisit = typeof siteVisitsTable.$inferSelect;
export type InsertSiteVisit = typeof siteVisitsTable.$inferInsert;

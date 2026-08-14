import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactLeadsTable = pgTable("contact_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull().default(""),
  service: text("service").notNull().default(""),
  message: text("message").notNull().default(""),
  source: text("source").notNull().default("website"),
  ip: text("ip").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type ContactLead = typeof contactLeadsTable.$inferSelect;
export type InsertContactLead = typeof contactLeadsTable.$inferInsert;

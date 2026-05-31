import { defineConfig } from "drizzle-kit";

const migrationUrl =
  process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? process.env.SUPABASE_DATABASE_URL;

if (!migrationUrl) {
  throw new Error(
    "Set DIRECT_URL (session pooler 5432) or DATABASE_URL before running db push",
  );
}

export default defineConfig({
  schema: "./src/schema/*.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: migrationUrl,
  },
});

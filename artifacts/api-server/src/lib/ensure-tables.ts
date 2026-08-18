import { getPool } from "@workspace/db";
import { logger } from "./logger";

const DDL = `
CREATE TABLE IF NOT EXISTS contact_leads (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL DEFAULT '',
  service TEXT NOT NULL DEFAULT '',
  message TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT 'website',
  ip TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE contact_leads ADD COLUMN IF NOT EXISTS ip TEXT NOT NULL DEFAULT '';

CREATE TABLE IF NOT EXISTS site_visits (
  id SERIAL PRIMARY KEY,
  ip TEXT NOT NULL DEFAULT '',
  path TEXT NOT NULL DEFAULT '/',
  city TEXT NOT NULL DEFAULT '',
  region TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  user_agent TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS site_visits_ip_idx ON site_visits (ip);
CREATE INDEX IF NOT EXISTS site_visits_created_at_idx ON site_visits (created_at DESC);

-- Backend uses DATABASE_URL (BYPASSRLS). RLS + no anon policies blocks Supabase Data API.
DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'sessions',
    'users',
    'contact_leads',
    'site_settings',
    'site_visits',
    'posts'
  ]
  LOOP
    IF to_regclass('public.' || t) IS NOT NULL THEN
      EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
      EXECUTE format('REVOKE ALL ON TABLE public.%I FROM anon, authenticated', t);
    END IF;
  END LOOP;
END $$;
`;

export async function ensureAppTables(): Promise<void> {
  const pool = getPool();
  await pool.query(DDL);
  logger.info("Ensured app tables + RLS (backend-only access)");
}

/** Idempotent for serverless cold starts (Vercel never runs index.ts bootstrap). */
let ensureOnce: Promise<void> | null = null;

export function ensureAppTablesOnce(): Promise<void> {
  if (!ensureOnce) {
    ensureOnce = ensureAppTables().catch((err) => {
      ensureOnce = null;
      throw err;
    });
  }
  return ensureOnce;
}

-- Backend-only tables: API uses DATABASE_URL (role with BYPASSRLS).
-- Enable RLS without anon/authenticated policies so Supabase Data API cannot access rows.
-- Do not FORCE ROW LEVEL SECURITY (would break owner/backend connections).

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

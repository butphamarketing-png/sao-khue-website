-- Chạy một lần trên Supabase SQL Editor (URL Facebook / Messenger thứ 2)
ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS facebook_url2 text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS messenger_url2 text NOT NULL DEFAULT '';

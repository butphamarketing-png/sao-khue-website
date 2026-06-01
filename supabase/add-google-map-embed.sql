-- Chạy một lần trên Supabase SQL Editor (nếu cột chưa có)
ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS google_map_embed text NOT NULL DEFAULT '';

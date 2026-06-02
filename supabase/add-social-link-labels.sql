-- Tên hiển thị khi khách chọn Facebook / Messenger (chạy một lần trên Supabase)
ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS facebook_label1 text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS facebook_label2 text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS messenger_label1 text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS messenger_label2 text NOT NULL DEFAULT '';

-- Facebook + Messenger (2 fanpage / 2 Messenger)
-- QUAN TRỌNG: chạy phần ALTER trước, sau đó mới UPDATE thành công.

ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS facebook_url2 text NOT NULL DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS facebook_label1 text NOT NULL DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS facebook_label2 text NOT NULL DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS messenger_url2 text NOT NULL DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS messenger_label1 text NOT NULL DEFAULT '';
ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS messenger_label2 text NOT NULL DEFAULT '';

UPDATE site_settings
SET
  facebook_url = 'https://www.facebook.com/dichvusuachuanha.caitaonhatrongoi',
  facebook_url2 = 'https://www.facebook.com/kientrucsaokhue',
  facebook_label1 = 'Cải tạo nhà trọn gói',
  facebook_label2 = 'Kiến Trúc Sao Khuê',
  messenger_url = 'https://m.me/dichvusuachuanha.caitaonhatrongoi',
  messenger_url2 = 'https://m.me/kientrucsaokhue',
  messenger_label1 = 'Cải tạo nhà trọn gói',
  messenger_label2 = 'Kiến Trúc Sao Khuê'
WHERE id = 1;

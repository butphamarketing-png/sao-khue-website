-- Google Maps: link mở app + iframe nhúng footer (chạy trên Supabase SQL Editor)

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS google_maps_url text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS google_map_embed text NOT NULL DEFAULT '';

UPDATE site_settings
SET
  google_maps_url = 'https://maps.app.goo.gl/XcU4ACAs2tM159TGA',
  google_map_embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5886520565614!2d106.706948!3d10.842758199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752865f3cba1ab%3A0xf5bc0409b063c587!2zMzYgxJDGsOG7nW5nIDI3LCBLaHUgxJHDtCBUaOG7iyBW4bqhbiBQaMO6YywgSGnhu4dwIELDrG5oLCBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1780382963471!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
WHERE id = 1;

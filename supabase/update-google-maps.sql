-- Google Maps: link mở app + iframe nhúng footer (chạy trên Supabase SQL Editor)

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS google_maps_url text NOT NULL DEFAULT '';

ALTER TABLE site_settings
  ADD COLUMN IF NOT EXISTS google_map_embed text NOT NULL DEFAULT '';

UPDATE site_settings
SET
  google_maps_url = 'https://maps.app.goo.gl/RFwHGqVyQTiAz4zy9',
  google_map_embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125383.31430756926!2d106.55553827453708!3d10.870212079177604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752861c1f1ec3f%3A0x4f641cb39e73c675!2zQ8OUTkcgVFkgVE5ISCBUSEnhur5UIEvhur4gVsOAIFjDglkgROG7sE5HIFNBTyBLSFXDig!5e0!3m2!1svi!2s!4v1780376538610!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
WHERE id = 1;

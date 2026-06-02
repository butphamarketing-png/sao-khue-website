-- Đổi category kinh-nghiem → tin-tuc; 2 bài SEO mới vào Tin tức
-- Chạy trong Supabase SQL Editor sau khi deploy code mới

BEGIN;

UPDATE posts SET category = 'tin-tuc', updated_at = now()
WHERE category = 'kinh-nghiem';

UPDATE posts SET category = 'tin-tuc', updated_at = now()
WHERE slug IN (
  'bao-gia-xay-nha-tron-goi-moi-nhat-tphcm',
  'cong-ty-xay-dung-nha-pho-uy-tin-tphcm'
);

COMMIT;

-- SELECT category, slug, title FROM posts ORDER BY category, slug;

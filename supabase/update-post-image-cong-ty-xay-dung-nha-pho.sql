-- Ảnh đại diện bài: Công Ty Xây Dựng Nhà Phố Uy Tín Tại TP.HCM
-- Supabase SQL Editor → Run
-- Kiểm tra: SELECT slug, image_url FROM posts WHERE slug = 'cong-ty-xay-dung-nha-pho-uy-tin-tphcm';

UPDATE posts
SET
  image_url = '/images/project_3.jpg',
  updated_at = now()
WHERE slug = 'cong-ty-xay-dung-nha-pho-uy-tin-tphcm';

-- Thêm cột alt ảnh cho bài viết (SEO Google Hình ảnh)
ALTER TABLE posts ADD COLUMN IF NOT EXISTS image_alt text NOT NULL DEFAULT '';

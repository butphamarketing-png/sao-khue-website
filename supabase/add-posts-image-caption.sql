-- Chú thích ảnh đại diện (WordPress: Caption) — mặc định trùng alt nếu để trống
ALTER TABLE posts ADD COLUMN IF NOT EXISTS image_caption text NOT NULL DEFAULT '';

-- Cập nhật hotline trên Supabase (chạy sau khi deploy code mới)
UPDATE site_settings
SET
  hotline1 = '0909 075 668',
  zalo_phone = '0909075668'
WHERE hotline1 LIKE '%085 668%' OR hotline1 LIKE '%085668%' OR zalo_phone = '0909075668';

-- Thay số cũ trong nội dung bài (nếu đã seed từ SQL cũ)
UPDATE posts
SET
  excerpt = replace(replace(excerpt, '0909 075 668', '0909 075 668'), '0909075668', '0909075668'),
  content = replace(replace(content, '0909 075 668', '0909 075 668'), '0909075668', '0909075668'),
  meta_description = replace(replace(meta_description, '0909 075 668', '0909 075 668'), '0909075668', '0909075668')
WHERE excerpt LIKE '%085 668%'
   OR content LIKE '%085 668%'
   OR meta_description LIKE '%085 668%';

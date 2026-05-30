# Sao Khuê — Supabase + Render/Vercel

## 1. Tạo project Supabase

1. Vào [supabase.com](https://supabase.com) → **New project**
2. Lưu **Database password**

## 2. Lấy connection string (Database)

**Settings → Database → Connection string → URI (Transaction pooler, port 6543)**

```
postgresql://postgres.[ref]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres
```

Đặt vào server:

```env
DATABASE_URL=postgresql://...
# hoặc
SUPABASE_DATABASE_URL=postgresql://...
```

> Drizzle tự bật SSL khi URL chứa `supabase.co`.

Sau deploy lần đầu, schema được tạo bởi:

```bash
pnpm --filter @workspace/db run push
```

## 3. Storage (upload ảnh admin)

**Storage → New bucket**

- Tên: `media`
- **Public bucket**: bật

Hoặc chạy SQL (SQL Editor):

```sql
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

create policy "Public read media"
on storage.objects for select
using (bucket_id = 'media');

create policy "Service role upload media"
on storage.objects for insert
with check (bucket_id = 'media');
```

**Settings → API** — copy:

```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...   # service_role — KHÔNG đưa vào frontend
SUPABASE_STORAGE_BUCKET=media
```

## 4. Admin login (production)

```env
ADMIN_EMAIL=email-cua-ban@gmail.com
ADMIN_PASSWORD=mat-khau-manh
ADMIN_USER_IDS=render-admin
SITE_URL=https://kientrucsaokhue.com
CORS_ORIGINS=https://kientrucsaokhue.com,https://www.kientrucsaokhue.com
```

## 5. Render (khuyến nghị)

Trong **Environment** của service `sao-khue-web`, thêm tất cả biến trên.

**Xóa** Render Postgres cũ nếu chuyển hẳn sang Supabase — chỉ cần `DATABASE_URL` trỏ Supabase.

Deploy → kiểm tra:

- `https://kientrucsaokhue.com/api/healthz` → `"database":"connected"`
- `https://kientrucsaokhue.com/admin` → đăng nhập → upload ảnh

## 6. Seed bài viết mẫu (tùy chọn)

```bash
DATABASE_URL=... pnpm exec tsx artifacts/api-server/scripts/seed-posts.ts
```

## 7. Kiểm tra đa thiết bị

1. Sửa nội dung / upload ảnh tại `https://kientrucsaokhue.com/admin`
2. Mở cùng URL trên điện thoại (tab mới hoặc ẩn danh)
3. Ảnh lưu trên Supabase Storage → mọi máy thấy giống nhau

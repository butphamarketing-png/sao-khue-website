# Deploy Website Public Tren Render

File nay dung cho repo:

`C:\Users\Admin\Downloads\File-Reader-Tool\File-Reader-Tool`

## Muc tieu

Deploy theo kieu "website that":

- nguoi ngoai vao duoc bang mot URL public
- frontend va `/api` dung chung mot domain
- du lieu bai viet / cai dat website luu trong PostgreSQL
- admin sua noi dung thi may khac vao cung thay

## Cach nhanh nhat

Repo da co san file:

- `render.yaml`

Chi can:

1. Day code len GitHub
2. Tao Blueprint tren Render tu repo do
3. Dien cac bien moi truong can thiet
4. Deploy

## Buoc 1: Dua code len GitHub

Push dung thu muc repo:

- `C:\Users\Admin\Downloads\File-Reader-Tool\File-Reader-Tool`

## Buoc 2: Tao Render Blueprint

Trong Render:

1. `New`
2. `Blueprint`
3. Chon repo GitHub cua ban
4. Render se doc file `render.yaml`

Blueprint nay se tao:

- 1 web service: `sao-khue-web`
- 1 Postgres database: `sao-khue-db`

## Buoc 3: Dien env vars

### Bat buoc

Render da tu cap:

- `DATABASE_URL` tu database
- `BASE_PATH=/`
- `NODE_ENV=production`

### Can dien neu muon admin login production

- `REPL_ID`

Neu chua co `REPL_ID`, website cong khai van co the chay de nguoi khac xem.
Nhung route dang nhap admin theo Replit OIDC se chua hoat dong dung cho den khi ban dien bien nay.

### Tuy chon

- `ADMIN_USER_IDS`

Neu dat bien nay, chi nhung user co ID nam trong danh sach moi vao duoc admin.
Nhap dang:

`id_1,id_2,id_3`

Neu de trong, code hien tai se mo rong admin cho user da dang nhap.

## Buoc 4: Deploy

Sau khi tao Blueprint, Render se tu chay:

1. `pnpm install`
2. build frontend Vite
3. build API server
4. `pnpm --filter @workspace/db run push`
5. start API server

Backend da duoc sua de:

- serve frontend build
- giu `/api` tren cung domain
- fallback SPA routes ve `index.html`

Nghia la khi deploy xong, ban chi can mot URL duy nhat.

## Sau khi deploy xong

Test cac URL:

- `/`
- `/gioi-thieu`
- `/dich-vu`
- `/cong-trinh`
- `/kinh-nghiem-xay-dung`
- `/lien-he`
- `/admin`
- `/api/healthz`

Neu `/api/healthz` tra ve JSON `ok` la backend dang song.

## Domain rieng

Sau khi site chay tren `onrender.com`, ban co the:

1. Vao service `sao-khue-web`
2. `Settings`
3. `Custom Domains`
4. Them domain rieng cua ban
5. Cau hinh DNS theo huong dan Render

## Google de index website

Sau khi co domain public:

1. Mo Google Search Console
2. Them domain hoac URL prefix
3. Xac minh domain
4. Gui sitemap:

`https://ten-mien-cua-ban/sitemap.xml`

## Luu y quan trong

1. Localhost khong phai website that.
   Muon nguoi khac vao duoc, ban bat buoc phai deploy public.

2. Muon admin sua tren may nay va may khac thay ngay:
   - phai dung chung database production
   - phai sua tren URL public, khong phai localhost

3. Login admin production hien dang phu thuoc Replit OIDC.
   Neu ban muon login production de su dung nhu CMS that, buoc tiep theo nen la:
   - cau hinh `REPL_ID`
   hoac
   - doi sang auth don gian hon cho production

## Neu ban muon minh lam tiep

Buoc tiep theo phu hop nhat la:

1. hoan thien auth admin production
2. tao checklist DNS/domain
3. tao checklist Search Console / sitemap / robots / index Google

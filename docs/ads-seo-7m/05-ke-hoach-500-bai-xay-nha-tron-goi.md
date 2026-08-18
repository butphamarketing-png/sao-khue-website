# Kế hoạch SEO — 500 từ khóa “xây nhà trọn gói TP.HCM”

Nguồn KW: [keywords-seo-xay-nha-tron-goi-500.txt](./keywords-seo-xay-nha-tron-goi-500.txt)  
Map KW → URL: [keywords-seo-xay-nha-tron-goi-500-map.csv](./keywords-seo-xay-nha-tron-goi-500-map.csv)

Seed: **xây nhà trọn gói tphcm** · **xây nhà trọn gói giá rẻ tphcm**

---

## 1. Nguyên tắc (bắt buộc)

**500 từ khóa ≠ 500 bài viết.** Google xếp theo *search intent*, không theo số URL.

List 500 là biến thể gần như cùng ý: trọn gói + giá/báo giá/nhà thầu + quận + loại nhà. Viết 1:1 sẽ:

- Cannibalize (nhiều URL tranh một từ khóa)
- Thin / doorway (đúng kiểu factory `*-ngan` đang noindex / 404)
- Pha loãng E-E-A-T của money page `/dich-vu/xay-nha-tron-goi`

**Chuẩn SEO đúng:** gom cụm → **1 intent = 1 URL index**. 500 KW nằm trên ~**54 URL** (17 đã có, 37 cần viết/nâng cấp tay).

Lịch nội dung hiện tại (`content-calendar.ts`) đã có hàng nghìn slug planned/factory. **Không mở batch 500 slug mới.** Chỉ hand-craft các URL trong mục 3–4, đưa vào `MONEY_PAGE_OVERRIDE_SLUGS`, **bỏ noindex**.

Chuẩn bài (đã ghi trong calendar): **1.500–2.500 từ**, ≥3 H2, 2–3 ảnh (alt = KW chính), FAQ schema, CTA hotline.

---

## 2. Kết quả gom cụm (500 KW)

| Nhóm | Số KW | Cách xử lý |
|------|------:|------------|
| Intent city-wide (trọn gói, giá rẻ, báo giá, đơn giá, nhà thầu…) | ~149 | **Gộp** vào money page đã có — không URL mới |
| Geo (quận/huyện/tỉnh) | ~351 → **24 URL** | 1 bài / địa bàn; KW phụ = H2/FAQ |
| Loại nhà (cấp 4, ống, mái thái, 1 trệt 1 lầu…) | ~13 URL | 1 bài / loại; bảng giá + case |
| **Tổng URL đích** | **54** | 17 tồn tại · 37 viết hoặc nâng cấp |

Gom “xây nhà trọn gói giá rẻ quận X” vào bài geo X (H2 “Giá rẻ tại X”), **không** tách bài “giá rẻ” riêng từng quận.

---

## 3. Kiến trúc hub → spoke

```
/dich-vu/xay-nha-tron-goi          ← PILLAR (seed 1)
   ├─ /tin-tuc/xay-nha-gia-re-tphcm              seed 2 (giá rẻ)
   ├─ /tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm
   ├─ /tin-tuc/chi-phi-xay-nha-tphcm
   ├─ /tin-tuc/don-gia-xay-nha-tphcm
   ├─ /tin-tuc/nha-thau-xay-nha-tron-goi-tphcm
   ├─ /tin-tuc/xay-nha-chia-khoa-trao-tay-tphcm
   ├─ /dich-vu/xay-dung-phan-tho
   ├─ GEO: /tin-tuc/xay-nha-tron-goi-{quan}
   └─ TYPE: /tin-tuc/xay-{loai}-tron-goi-tphcm

Ads (noindex / không tranh organic): /xay-nha
Conversion: /bao-gia  ·  /lien-he
```

Nội bộ: spoke → pillar + `/bao-gia` + 1 công trình thật. Pillar liệt kê spoke (không dump 50 link). Không trỏ Ads sang factory.

---

## 4. Việc làm theo ưu tiên

### P0 — Tuần 1–2: củng cố trang đã có (0 URL mới) — **đã làm 18/8/2026**

Nhúng seed + biến thể vào H1/H2/FAQ, không đổi slug.

| URL | KW chính + KW phụ gộp vào |
|-----|---------------------------|
| `/dich-vu/xay-nha-tron-goi` | xây nhà trọn gói tphcm; sài gòn; hồ chí minh; gồm những gì; thời gian; gói tiêu chuẩn/khá/cao cấp; cam kết |
| `/tin-tuc/xay-nha-gia-re-tphcm` | xây nhà trọn gói giá rẻ tphcm; 4–5 triệu/m² |
| `/tin-tuc/bao-gia-xay-nha-tron-goi-moi-nhat-tphcm` | báo giá, bảng giá, 2026 |
| `/tin-tuc/don-gia-xay-nha-tphcm` | đơn giá, m² |
| `/tin-tuc/chi-phi-xay-nha-tphcm` | chi phí, hết bao nhiêu |
| `/tin-tuc/nha-thau-xay-nha-tron-goi-tphcm` | nhà thầu uy tín |
| `/tin-tuc/cong-ty-xay-dung-nha-pho-uy-tin-tphcm` | công ty xây nhà |
| `/tin-tuc/xay-nha-chia-khoa-trao-tay-tphcm` | chìa khóa trao tay |
| `/dich-vu/xay-dung-phan-tho` | phần thô |
| `/tin-tuc/xay-nha-2-tang-tphcm` · `3-tang` · `trong-hem` · `xay-nha-tphcm` | loại nhà đã có |
| `/dich-vu/xay-nha-tron-goi-binh-duong` · `dong-nai` | tỉnh (KW huyện gộp H2 nếu chưa có bài huyện) |

Slug calendar `xay-nha-tron-goi-gia-re-tphcm` (planned #473): **không xuất bài mới** — 301 hoặc canonical về `/tin-tuc/xay-nha-gia-re-tphcm`.

### P1 — Tuần 3–10: geo TP.HCM (nâng cấp, không nhân bản)

Nhiều slug đã có override mỏng (batch 2–3). Việc P1 = **viết đủ 1.800+ từ, ảnh công trình, bảng giá địa phương, FAQ**, rồi index.

Làm trước (nhu cầu + gần văn phòng):

1. Bình Thạnh  
2. Thủ Đức  
3. Gò Vấp  
4. Quận 7  
5. Tân Bình  
6. Tân Phú  
7. Bình Tân  
8. Phú Nhuận  
9. Nhà Bè  
10. Hóc Môn  
11. Củ Chi  
12. Bình Chánh  

Slug: `/tin-tuc/xay-nha-tron-goi-{slug}` — trùng calendar batch 7 (#597–#618). **Promote lên money page, gỡ noindex.**

Quận 1–12 còn lại: đã có override batch 3 → cùng checklist P1, **1 bài/tuần sau khi 12 bài trên đạt index**.

### P2 — Tuần 6–14: loại nhà (URL mới nếu chưa money)

Chỉ viết khi **khác intent** với trang tầng/hẻm đã có.

| URL đề xuất | KW chính | Lưu ý cannibal |
|-------------|----------|----------------|
| `/tin-tuc/xay-nha-cap-4-tron-goi-tphcm` | xây nhà cấp 4 trọn gói tphcm | khác `xay-nha-cap-4-mai-thai-tphcm` (gộp mái thái vào bài này nếu chưa tách) |
| `/tin-tuc/xay-biet-thu-tron-goi-tphcm` | xây biệt thự trọn gói | so `/tin-tuc/xay-biet-thu-tphcm` — 1 URL thắng, 301 URL còn lại |
| `/tin-tuc/xay-nha-ong-tron-goi-tphcm` | nhà ống | khác nhà phố mặt tiền |
| `/tin-tuc/xay-nha-4-tang-tron-goi-tphcm` | nhà 4 tầng | so `xay-nha-4-tang-tphcm` — gộp 1 URL |
| `/tin-tuc/xay-1-tret-1-lau-tron-goi-tphcm` | 1 trệt 1 lầu | |
| `/tin-tuc/xay-1-tret-2-lau-tron-goi-tphcm` | 1 trệt 2 lầu | so `xay-nha-pho-1-tret-2-lau-tphcm` |
| `/tin-tuc/xay-nha-pho-4x16-tron-goi-tphcm` | 4×16 | so `xay-nha-pho-4x16-tphcm` |

**Chưa viết** (volume thấp / trùng): mái nhật, 5 tầng, 1 trệt 3 lầu, nhà phố hiện đại — để H2 trên pillar hoặc bài loại gần nhất. Viết sau khi P1 index và GSC có impression.

### P3 — Chỉ khi có công trình thật

Thuận An, Dĩ An, Biên Hòa, Thủ Dầu Một, Tân Uyên, Bến Cát, Nhơn Trạch, Long Thành, Trảng Bom, Bến Lức, Cần Giuộc, Đức Hòa, Cần Giờ.

Không có ảnh + địa chỉ công trình → **không index bài huyện**. Gộp H2 vào pillar Bình Dương / Đồng Nai / Long An.

---

## 5. Template bài (chuẩn on-page)

Mỗi URL **một** KW focus. Các KW cùng cluster = H2, FAQ, alt ảnh — mật độ tự nhiên, không nhồi.

### 5.1 Bài geo (`xây nhà trọn gói {địa bàn}`)

1. **Title** ≤ 60 ký tự: `Xây Nhà Trọn Gói {Địa bàn} 2026 | Sao Khuê`  
2. **Meta description** 140–155 ký tự: KW + đơn giá mốc + CTA 0909 075 668  
3. **H1** = KW focus (đúng 1 H1)  
4. Intro 80–120 từ: khu vực, hẻm/nền, Sao Khuê nhận thi công  
5. **H2** bắt buộc (đổi nội dung theo quận, không copy khung):  
   - Đơn giá / gói giá rẻ tại {địa bàn}  
   - Hẻm, logistics, giờ đổ bê tông  
   - Giấy phép / quy hoạch phường  
   - Quy trình 6 bước (rút gọn, link pillar)  
   - Công trình mẫu (ảnh thật, địa chỉ phường — che số nhà nếu cần)  
   - FAQ 4–6 câu (có 1 câu chứa “giá rẻ {địa bàn}”)  
6. CTA: form / Zalo / 0909 075 668 + link `/bao-gia` + pillar  
7. Ảnh: 1 hero công trình khu vực + 2 chi tiết thi công; **cấm** poster có chữ nướng sẵn  

### 5.2 Bài loại nhà

Thêm: mặt cắt/lô điển hình, bảng m² sàn, thời gian thi công, so sánh thô vs trọn gói. Link sang geo mạnh (Bình Thạnh, Thủ Đức).

### 5.3 Checklist trước publish

- [ ] KW focus trong H1, 1 lần đoạn đầu, 1 H2, meta  
- [ ] Không trùng H1 với URL khác  
- [ ] ≥3 đoạn **chỉ đúng địa bàn/loại này** (hẻm, nền, GPXD, case)  
- [ ] Bảng giá ghi “tham khảo — chốt sau khảo sát”  
- [ ] 3+ internal link: pillar, báo giá, 1 spoke liên quan  
- [ ] FAQPage schema  
- [ ] Canonical tự trỏ; không noindex  
- [ ] OG ảnh ≠ poster chữ  
- [ ] Nêu NAP: 245/8 Bình Lợi, P.13, Bình Thạnh · kientrucsaokhue.com  

---

## 6. Lịch xuất bản (3 bài hand-craft / tuần)

Nhịp 3/tuần × 12 tuần = 36 URL P1+P2. P0 làm song song tuần 1–2.

| Tuần | Việc | Output |
|------|------|--------|
| 1 | P0 pillar + giá rẻ + báo giá + GSC inspect 8 money URL | 0 bài mới, 4 trang nâng |
| 2 | P0 nhà thầu, chìa khóa, phần thô, chi phí/đơn giá | 4 trang nâng |
| 3 | Geo: Bình Thạnh, Thủ Đức, Gò Vấp | 3 bài index |
| 4 | Q.7, Tân Bình, Tân Phú | 3 |
| 5 | Bình Tân, Phú Nhuận, Nhà Bè | 3 |
| 6 | Hóc Môn, Củ Chi, Bình Chánh | 3 |
| 7 | Type: cấp 4, nhà ống, 1 trệt 1 lầu | 3 |
| 8 | Type: 1 trệt 2 lầu, 4×16, biệt thự (gộp URL cũ) | 3 |
| 9 | Q.1, Q.3, Q.10 (nâng override) | 3 |
| 10 | Q.12, Q.8, Q.4 | 3 |
| 11 | Review GSC: URL nào impression? Bổ sung H2 KW phụ | 0–1 |
| 12 | Chỉ P3 nếu có case Thuận An / Biên Hòa; không thì refresh pillar | 0–2 |

Sau tuần 12: **dừng viết URL mới** cho cluster này. Chỉ cập nhật giá 2026 và thêm case. KW còn lại trong file 500 đã nằm FAQ/H2.

---

## 7. Kỹ thuật SEO kèm nội dung

1. Sitemap chỉ URL money + P1/P2 đã hand-craft.  
2. Factory `*-ngan` và calendar batch 7 chưa promote: **giữ noindex**.  
3. Trùng slug (`xay-nha-4-tang-tphcm` vs `xay-nha-4-tang-tron-goi-tphcm`): giữ 1, 301 cái kia.  
4. `/xay-nha` không xin index tranh pillar (Ads LP).  
5. GSC: mỗi bài mới → URL Inspection sau 48h live. Không bulk request 50 URL/ngày.  
6. Đo 28 ngày: impression, click, CTR, vị trí trung bình; bài geo 0 impression / 8 tuần → kiểm tra nội dung hoặc noindex.

---

## 8. KPI

| Mốc | Mục tiêu |
|-----|----------|
| Tuần 4 | Pillar + 2 seed trong top 20 (GSC, query chính xác) |
| Tuần 8 | 9 geo P1 đã index; ≥3 geo có click |
| Tuần 12 | Pillar top 10 *hoặc* CTR tăng vs baseline 18/8/2026 |
| Không KPI | Số bài xuất bản, số KW trong thẻ meta |

Hiệu quả Ads vẫn đo lead/chi phí — SEO hỗ trợ query thương mại, không thay campaign.

---

## 9. Việc không làm

- Không 500 URL, không batch `*-ngan`, không AI cùng 1 khung đổi tên quận  
- Không bài “uy tín nhất / tốt nhất” thiếu dữ liệu  
- Không trộn sửa nhà / cải tạo vào cluster này  
- Không viết huyện BD/ĐN/LA khi chưa có công trình  
- Không nhồi đủ 500 KW vào một trang  

---

## 10. File làm việc

| File | Dùng để |
|------|---------|
| `keywords-seo-xay-nha-tron-goi-500.txt` | Master KW |
| `keywords-seo-xay-nha-tron-goi-500-map.csv` | Cột `action`: `exists-fold` = gộp; `write-handcraft` = P1/P2 |
| `03-seo-30d-backlog.md` | Technical + money pages hiện tại |
| Bài tay | `lib/seed-content/src/articles/money-page-overrides*.ts` |

Bắt đầu P0: nâng FAQ/H2 hai seed trên pillar (đã gắn meta). P1 bài đầu: **Bình Thạnh** (gần NAP, override sẵn — viết đủ độ sâu).

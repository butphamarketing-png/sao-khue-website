import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const WATERMARK_MIMES = new Set(["image/jpeg", "image/png", "image/webp"]);

function resolveLogoPath(): string {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.join(here, "..", "assets", "watermark-logo.png"),
    path.join(here, "..", "..", "assets", "watermark-logo.png"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error("Khong tim thay file logo dong dau (watermark-logo.png)");
}

export type WatermarkResult = {
  buffer: Buffer;
  contentType: string;
};

/** Gắn logo Sao Khuê góc dưới-phải. Bỏ qua SVG/GIF hoặc ảnh quá nhỏ. */
export async function applyLogoWatermark(
  input: Buffer,
  mimetype: string,
): Promise<WatermarkResult | null> {
  if (!WATERMARK_MIMES.has(mimetype)) return null;

  const base = sharp(input);
  const meta = await base.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  if (width < 80 || height < 80) return null;

  const logoTargetWidth = Math.round(Math.min(width * 0.18, 280));
  const padding = Math.round(Math.max(width * 0.02, 12));

  const logoBuf = await sharp(resolveLogoPath())
    .resize({ width: logoTargetWidth, withoutEnlargement: true })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logoBuf).metadata();
  const logoWidth = logoMeta.width ?? logoTargetWidth;
  const logoHeight = logoMeta.height ?? 0;

  const left = Math.max(0, width - logoWidth - padding);
  const top = Math.max(0, height - logoHeight - padding);

  const composited = await base
    .composite([{ input: logoBuf, left, top, blend: "over" }])
    .toBuffer();

  if (mimetype === "image/jpeg") {
    return {
      buffer: await sharp(composited).jpeg({ quality: 90, mozjpeg: true }).toBuffer(),
      contentType: "image/jpeg",
    };
  }
  if (mimetype === "image/webp") {
    return {
      buffer: await sharp(composited).webp({ quality: 90 }).toBuffer(),
      contentType: "image/webp",
    };
  }
  return {
    buffer: await sharp(composited).png().toBuffer(),
    contentType: "image/png",
  };
}

/**
 * Tạo bản sao ảnh có logo (thư mục *-wm) — KHÔNG ghi đè ảnh gốc dùng cho thumbnail.
 * Ảnh trong nội dung bài dùng CSS overlay (.prose-article .article-figure::before).
 * Chạy khi cần file JPEG đóng dấu sẵn (ví dụ xuất ngoài web):
 *   pnpm --filter @workspace/api-server exec tsx scripts/watermark-public-photos.ts
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyLogoWatermark } from "../src/lib/watermark-image.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const publicImages = path.resolve(scriptDir, "../../sao-khue/public/images");

/** Thư mục nguồn + pattern → ghi vào `{dir}-wm/`. */
const TARGETS: { dir: string; pattern: RegExp }[] = [
  { dir: "sao-khue", pattern: /^sk-\d+\.jpg$/i },
  { dir: "nha-2-tang", pattern: /^nha-2-tang-\d+\.jpg$/i },
  { dir: "nha-cap-4", pattern: /^nha-cap-4-\d+\.jpg$/i },
  { dir: "cai-tao", pattern: /^cai-tao-\d+\.jpg$/i },
  { dir: "xay-nha", pattern: /^xay-nha-\d+\.jpg$/i },
];

async function watermarkDir(relativeDir: string, pattern: RegExp): Promise<number> {
  const srcDir = path.join(publicImages, relativeDir);
  const outDir = path.join(publicImages, `${relativeDir}-wm`);
  let files: string[];
  try {
    files = await readdir(srcDir);
  } catch {
    console.warn("skip dir (missing):", relativeDir);
    return 0;
  }

  await mkdir(outDir, { recursive: true });

  let done = 0;
  for (const file of files.filter((f) => pattern.test(f)).sort()) {
    const filePath = path.join(srcDir, file);
    const input = await readFile(filePath);
    const result = await applyLogoWatermark(input, "image/jpeg");
    if (!result) {
      console.warn("skip:", path.join(relativeDir, file));
      continue;
    }
    await writeFile(path.join(outDir, file), result.buffer);
    done += 1;
    console.log("watermarked:", path.join(`${relativeDir}-wm`, file));
  }
  return done;
}

async function main() {
  let total = 0;
  for (const { dir, pattern } of TARGETS) {
    total += await watermarkDir(dir, pattern);
  }
  console.log(`Done: ${total} watermarked copies in *-wm folders (originals untouched)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

/**
 * Đóng dấu logo lên ảnh public dùng trong bài viết / tin tức.
 * Run: pnpm --filter @workspace/api-server exec tsx scripts/watermark-public-photos.ts
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyLogoWatermark } from "../src/lib/watermark-image.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const publicImages = path.resolve(scriptDir, "../../sao-khue/public/images");

/** Thư mục con + pattern file cần đóng dấu. */
const TARGETS: { dir: string; pattern: RegExp }[] = [
  { dir: "sao-khue", pattern: /^sk-\d+\.jpg$/i },
  { dir: "nha-2-tang", pattern: /^nha-2-tang-\d+\.jpg$/i },
  { dir: "nha-cap-4", pattern: /^nha-cap-4-\d+\.jpg$/i },
  { dir: "cai-tao", pattern: /^cai-tao-\d+\.jpg$/i },
  { dir: "xay-nha", pattern: /^xay-nha-\d+\.jpg$/i },
];

async function watermarkDir(relativeDir: string, pattern: RegExp): Promise<number> {
  const dirPath = path.join(publicImages, relativeDir);
  let files: string[];
  try {
    files = await readdir(dirPath);
  } catch {
    console.warn("skip dir (missing):", relativeDir);
    return 0;
  }

  let done = 0;
  for (const file of files.filter((f) => pattern.test(f)).sort()) {
    const filePath = path.join(dirPath, file);
    const input = await readFile(filePath);
    const result = await applyLogoWatermark(input, "image/jpeg");
    if (!result) {
      console.warn("skip:", path.join(relativeDir, file));
      continue;
    }
    await writeFile(filePath, result.buffer);
    done += 1;
    console.log("watermarked:", path.join(relativeDir, file));
  }
  return done;
}

async function main() {
  let total = 0;
  for (const { dir, pattern } of TARGETS) {
    total += await watermarkDir(dir, pattern);
  }
  console.log(`Done: ${total} images watermarked`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

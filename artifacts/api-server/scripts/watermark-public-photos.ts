/**
 * Đóng dấu logo lên toàn bộ ảnh public/images/sao-khue/sk-*.jpg
 * Run: pnpm --filter @workspace/api-server exec tsx scripts/watermark-public-photos.ts
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyLogoWatermark } from "../src/lib/watermark-image.ts";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const photosDir = path.resolve(scriptDir, "../../sao-khue/public/images/sao-khue");

async function main() {
  const files = (await readdir(photosDir)).filter((f) => /^sk-\d+\.jpg$/i.test(f)).sort();
  let done = 0;
  for (const file of files) {
    const filePath = path.join(photosDir, file);
    const input = await readFile(filePath);
    const result = await applyLogoWatermark(input, "image/jpeg");
    if (!result) {
      console.warn("skip:", file);
      continue;
    }
    await writeFile(filePath, result.buffer);
    done += 1;
    console.log("watermarked:", file);
  }
  console.log(`Done: ${done}/${files.length} images`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

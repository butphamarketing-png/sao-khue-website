/**
 * Sao chép ảnh từ public/Hình ảnh Sao Khuê → public/images/sao-khue/sk-XX.jpg
 * và thay thế unsplash / project_* trong seed tin tức + dịch vụ.
 */
import { cp, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const saoKhueRoot = path.resolve(scriptDir, "..");
const publicDir = path.join(saoKhueRoot, "public");
const destDir = path.join(publicDir, "images", "sao-khue");
const seedRoot = path.resolve(scriptDir, "../../../lib/seed-content/src");
const articlesDir = path.join(seedRoot, "articles");

const OLD_IMAGE_RE =
  /https:\/\/images\.unsplash\.com\/[^"'\s)]+|\/images\/project_[23]\.jpg/g;

async function findSourceFolder(): Promise<string> {
  const entries = await readdir(publicDir, { withFileTypes: true });
  const folder = entries.find((e) => e.isDirectory() && e.name.toLowerCase().includes("sao khu"));
  if (!folder) throw new Error("Khong tim thay thu muc 'Hinh anh Sao Khue' trong public/");
  return path.join(publicDir, folder.name);
}

async function copyPhotos(): Promise<number> {
  const src = await findSourceFolder();
  await mkdir(destDir, { recursive: true });
  const files = (await readdir(src))
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  let i = 0;
  for (const file of files) {
    i += 1;
    const dest = path.join(destDir, `sk-${String(i).padStart(2, "0")}.jpg`);
    await cp(path.join(src, file), dest);
  }
  console.log(`Copied ${i} photos → ${destDir}`);
  return i;
}

function slugFromArticleFile(filename: string): string {
  return filename.replace(/\.ts$/, "");
}

async function patchArticleFile(filePath: string): Promise<boolean> {
  const slug = slugFromArticleFile(path.basename(filePath));
  let content = await readFile(filePath, "utf8");
  if (!OLD_IMAGE_RE.test(content)) {
    OLD_IMAGE_RE.lastIndex = 0;
    return false;
  }
  OLD_IMAGE_RE.lastIndex = 0;

  const urls = [...new Set(content.match(OLD_IMAGE_RE) ?? [])];
  if (urls.length === 0) return false;

  const constLines = urls.map((url, idx) => {
    const name = `SK_IMG_${idx + 1}`;
    return `const ${name} = slugImage("${slug}", ${idx});`;
  });

  if (!content.includes('from "../site-images"')) {
    const importLine = 'import { slugImage } from "../site-images";\n';
    const firstImport = content.indexOf("import ");
    if (firstImport >= 0) {
      const end = content.indexOf("\n", firstImport) + 1;
      content = content.slice(0, end) + importLine + content.slice(end);
    } else {
      content = importLine + content;
    }
  }

  for (let idx = 0; idx < urls.length; idx++) {
    const url = urls[idx]!;
    const name = `SK_IMG_${idx + 1}`;
    content = content.split(url).join(name);
  }

  const insertAfter = content.indexOf('from "../site-images";\n');
  if (insertAfter >= 0) {
    const at = insertAfter + 'from "../site-images";\n'.length;
    content = content.slice(0, at) + constLines.join("\n") + "\n" + content.slice(at);
  }

  // Dọn hằng cũ không còn dùng
  content = content.replace(
    /^const IMG_(P2|P3|DESIGN|PLAN|BUILD|HERO) = [^;]+;\n/gm,
    "",
  );

  await writeFile(filePath, content, "utf8");
  console.log("  article:", slug);
  return true;
}

async function patchSeedIndex(): Promise<void> {
  const file = path.join(seedRoot, "index.ts");
  let content = await readFile(file, "utf8");

  content = content.replace(
    /import \{ TIN_TUC_SEED_ENTRIES \} from "\.\/tin-tuc-seed";/,
    'import { TIN_TUC_SEED_ENTRIES } from "./tin-tuc-seed";\nimport { slugImage } from "./site-images";',
  );

  content = content.replace(
    /const HERO = "[^"]+";\nconst BUILD = "[^"]+";\nconst REPAIR = "[^"]+";\nconst DESIGN = "[^"]+";\nconst TEAM = "[^"]+";\n\n/,
    "",
  );

  content = content.replace(
    /seoPost\(\s*\n?\s*"([^"]+)",\s*\n?\s*"tin-tuc",\s*\n?\s*"[^"]+",/g,
    'seoPost(\n    "$1",\n    "tin-tuc",\n    slugImage("$1"),',
  );

  content = content.replace(
    /seoPost\("([^"]+)", "dich-vu", [^,]+,/g,
    'seoPost("$1", "dich-vu", slugImage("$1"),',
  );

  content = content.replace(
    /seoPost\("([^"]+)", "gioi-thieu", [^,]+,/g,
    'seoPost("$1", "gioi-thieu", slugImage("$1"),',
  );

  content = content.replace(
    /seoPost\("([^"]+)", "cong-trinh", [^,]+,/g,
    'seoPost("$1", "cong-trinh", slugImage("$1"),',
  );

  content = content.replace(
    /\)\.map\(\(e\) => seoPost\(e\.slug, "tin-tuc", e\.image, e\.article\)\)/,
    ').map((e) => seoPost(e.slug, "tin-tuc", slugImage(e.slug), e.article))',
  );

  content = content.replace(
    /seoPost\("cam-nang-xay-nha-2026", "tin-tuc", HERO,/,
    'seoPost("cam-nang-xay-nha-2026", "tin-tuc", slugImage("cam-nang-xay-nha-2026"),',
  );
  content = content.replace(
    /seoPost\("luat-xay-dung-moi-nhat", "tin-tuc", HERO,/,
    'seoPost("luat-xay-dung-moi-nhat", "tin-tuc", slugImage("luat-xay-dung-moi-nhat"),',
  );
  content = content.replace(
    /seoPost\("phong-thuy-nha-o", "tin-tuc", HERO,/,
    'seoPost("phong-thuy-nha-o", "tin-tuc", slugImage("phong-thuy-nha-o"),',
  );

  await writeFile(file, content, "utf8");
  console.log("Patched index.ts");
}

async function patchTinTucCalendar(): Promise<void> {
  const file = path.join(seedRoot, "tin-tuc-calendar-data.ts");
  let content = await readFile(file, "utf8");

  content = `import { slugImage } from "./site-images";\n\n` + content.replace(/^\/\*\*[\s\S]*?\*\/\n\n/, "/** 22 bài tin tức còn thiếu (lịch #8–#29, trừ #30 gioi-thieu). */\n\n");

  content = content.replace(
    /const IMG = \{[\s\S]*?\};\n\n/,
    "",
  );

  content = content.replace(/image: IMG\.\w+,/g, (match, offset) => {
    const before = content.slice(Math.max(0, offset - 400), offset);
    const slugMatch = before.match(/slug: "([^"]+)"/);
    const slug = slugMatch?.[1] ?? "tin-tuc";
    return `image: slugImage("${slug}"),`;
  });

  await writeFile(file, content, "utf8");
  console.log("Patched tin-tuc-calendar-data.ts");
}

async function patchTinTucSeed(): Promise<void> {
  const file = path.join(seedRoot, "tin-tuc-seed.ts");
  let content = await readFile(file, "utf8");

  if (!content.includes('from "./site-images"')) {
    content = content.replace(
      'import { TIN_TUC_BATCH } from "./tin-tuc-calendar-data";',
      'import { TIN_TUC_BATCH } from "./tin-tuc-calendar-data";\nimport { slugImage } from "./site-images";',
    );
  }

  content = content.replace(
    /const PLAN = "[^"]+";\nconst BUILD = "[^"]+";\nconst DESIGN = "[^"]+";\nconst HERO = "[^"]+";\n\n/,
    "",
  );

  content = content.replace(
    /\{ slug: "([^"]+)", image: [^,]+,/g,
    '{ slug: "$1", image: slugImage("$1"),',
  );

  await writeFile(file, content, "utf8");
  console.log("Patched tin-tuc-seed.ts");
}

async function main() {
  const count = await copyPhotos();
  if (count !== 53) {
    console.warn(`Expected 53 images, got ${count}. Update SAO_KHUE_IMAGE_COUNT in site-images.ts`);
  }

  const articleFiles = (await readdir(articlesDir)).filter((f) => f.endsWith(".ts"));
  for (const file of articleFiles) {
    await patchArticleFile(path.join(articlesDir, file));
  }

  await patchTinTucCalendar();
  await patchTinTucSeed();
  await patchSeedIndex();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

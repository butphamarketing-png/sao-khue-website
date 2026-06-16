/** Sửa lỗi thay ảnh: SK_IMG_N phải là biến, không phải chuỗi. */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const articlesDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../lib/seed-content/src/articles",
);

async function fixFile(filePath: string): Promise<void> {
  let content = await readFile(filePath, "utf8");
  const before = content;

  // const IMG_X = "SK_IMG_N" → map alias
  const alias = new Map<string, string>();
  content = content.replace(
    /const (IMG_\w+)\s*=\s*(?:\n\s*)?"(SK_IMG_\d+)";\n?/g,
    (_m, name: string, sk: string) => {
      alias.set(name, sk);
      return "";
    },
  );

  for (const [name, sk] of alias) {
    content = content.replace(new RegExp(`\\b${name}\\b`, "g"), sk);
  }

  content = content.replace(/imageFigure\("(SK_IMG_\d+)"/g, "imageFigure($1");
  content = content.replace(/src="(SK_IMG_\d+)"/g, 'src="${$1}"');

  if (content !== before) {
    await writeFile(filePath, content, "utf8");
    console.log("fixed:", path.basename(filePath));
  }
}

async function main() {
  for (const file of await readdir(articlesDir)) {
    if (file.endsWith(".ts")) await fixFile(path.join(articlesDir, file));
  }
}

main();

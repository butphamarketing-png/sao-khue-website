/**
 * Gỡ khối FAQ khỏi file nguồn bài tin tức + sinh SQL cập nhật Supabase.
 * Usage: pnpm exec tsx --tsconfig tsconfig.prerender.json scripts/strip-tin-tuc-faq-sources.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { TIN_TUC_SEED_ENTRIES } from "../../../lib/seed-content/src/tin-tuc-seed.ts";
import { stripFaqSectionFromHtml } from "../../../lib/seed-content/src/article-seo-blocks.ts";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const articlesDir = join(scriptDir, "..", "..", "..", "lib", "seed-content", "src", "articles");
const repoRoot = join(scriptDir, "..", "..", "..");

const SLUG_TO_FILE: Record<string, string> = {
  "cong-ty-xay-dung-nha-pho-uy-tin-tphcm": "cong-ty-xay-dung-nha-pho-uy-tin-tphcm.ts",
  "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm": "bao-gia-xay-nha-tron-goi-moi-nhat-tphcm.ts",
  "thiet-ke-nha-pho-hien-dai-tphcm": "thiet-ke-nha-pho-hien-dai-tphcm.ts",
  "mau-nha-pho-2-tang-binh-duong": "mau-nha-pho-2-tang-binh-duong.ts",
  "thiet-ke-thi-cong-nha-pho-dong-nai": "thiet-ke-thi-cong-nha-pho-dong-nai.ts",
  "cam-nang-xay-nha-2026": "cam-nang-xay-nha-2026.ts",
  "luat-xay-dung-moi-nhat": "luat-xay-dung-moi-nhat.ts",
  "phong-thuy-nha-o": "phong-thuy-nha-o.ts",
  "xay-dung-nha-long-an": "xay-dung-nha-long-an.ts",
  "bao-gia-xay-nha-phan-tho-long-an": "bao-gia-xay-nha-phan-tho-long-an.ts",
  "mau-nha-ong-dep-long-an": "mau-nha-ong-dep-long-an.ts",
  "thiet-ke-nha-pho-dak-lak": "thiet-ke-nha-pho-dak-lak.ts",
  "xay-nha-tron-goi-dak-lak": "xay-nha-tron-goi-dak-lak.ts",
  "chi-phi-xay-nha-2-tang-dak-lak": "chi-phi-xay-nha-2-tang-dak-lak.ts",
  "thi-cong-nha-pho-phu-yen": "thi-cong-nha-pho-phu-yen.ts",
  "thiet-ke-nha-dep-phu-yen": "thiet-ke-nha-dep-phu-yen.ts",
  "bao-gia-xay-nha-tron-goi-phu-yen": "bao-gia-xay-nha-tron-goi-phu-yen.ts",
  "luu-y-xay-nha-pho": "luu-y-xay-nha-pho.ts",
  "du-toan-chi-phi-xay-nha": "du-toan-chi-phi-xay-nha.ts",
  "xu-huong-thiet-ke-nha-pho-hien-dai": "xu-huong-thiet-ke-nha-pho-hien-dai.ts",
  "chi-phi-nha-pho-2-tang": "chi-phi-nha-pho-2-tang.ts",
  "mau-nha-pho-3-tang-dep": "mau-nha-pho-3-tang-dep.ts",
  "thiet-ke-nha-dep-gia-re": "thiet-ke-nha-dep-gia-re.ts",
  "xay-nha-ngan-sach-1-ty-2": "xay-nha-ngan-sach-1-ty-2.ts",
  "thue-thiet-ke-nha-truoc-khi-xay": "thue-thiet-ke-nha-truoc-khi-xay.ts",
  "quy-trinh-xay-nha-tron-goi-a-z": "quy-trinh-xay-nha-tron-goi-a-z.ts",
  "top-mau-nha-pho-dep-xu-huong": "top-mau-nha-pho-dep-xu-huong.ts",
  "thiet-ke-xay-dung-nha-pho-mien-nam": "thiet-ke-xay-dung-nha-pho-mien-nam.ts",
  "kien-truc-sao-khue-don-vi-uy-tin": "kien-truc-sao-khue-don-vi-uy-tin.ts",
};

function stripFromSourceText(text: string): string {
  let out = text.replace(/\n\$\{faqSection\([\s\S]*?\)\}/g, "");
  out = out.replace(
    /\n<h2>[^<]*(?:FAQ|Câu hỏi thường gặp)[^<]*<\/h2>[\s\S]*?(?=\n<h2\b|\n\$\{|\`\.trim)/g,
    "\n",
  );
  out = out.replace(/,\s*faqSection/g, "");
  out = out.replace(/faqSection,\s*/g, "");
  out = out.replace(
    /import \{([^}]+)\} from "\.\.\/article-seo-blocks";/g,
    (_match, imports: string) => {
      const cleaned = imports
        .split(",")
        .map((part) => part.trim())
        .filter((part) => part && part !== "faqSection")
        .join(", ");
      return cleaned
        ? `import { ${cleaned} } from "../article-seo-blocks";`
        : "";
    },
  );
  return out;
}

function dollarTag(value: string, prefix: string): string {
  let tag = prefix;
  let n = 0;
  while (value.includes(`$${tag}$`)) {
    tag = `${prefix}${++n}`;
  }
  return `$${tag}$${value}$${tag}$`;
}

const touchedFiles = new Set<string>();
const sqlUpdates: string[] = [
  "-- Gỡ khối FAQ khỏi bài tin tức (chạy trên Supabase sau deploy)",
  "BEGIN;",
];

for (const entry of TIN_TUC_SEED_ENTRIES) {
  const fileName = SLUG_TO_FILE[entry.slug];
  if (fileName) {
    const filePath = join(articlesDir, fileName);
    const raw = readFileSync(filePath, "utf8");
    const next = stripFromSourceText(raw);
    if (next !== raw) {
      writeFileSync(filePath, next, "utf8");
      touchedFiles.add(fileName);
    }
  }

  const stripped = stripFaqSectionFromHtml(entry.article.content);
  if (stripped !== entry.article.content) {
    sqlUpdates.push(
      `UPDATE posts SET content = ${dollarTag(stripped, `faq_${entry.slug.replace(/-/g, "_")}`)}, updated_at = NOW() WHERE slug = '${entry.slug}';`,
    );
  }
}

sqlUpdates.push("COMMIT;");

writeFileSync(join(repoRoot, "supabase", "strip-tin-tuc-faq.sql"), `${sqlUpdates.join("\n\n")}\n`, "utf8");

console.log(`[strip-faq] Updated ${touchedFiles.size} article source files`);
console.log(`[strip-faq] SQL updates for ${sqlUpdates.length - 3} posts → supabase/strip-tin-tuc-faq.sql`);

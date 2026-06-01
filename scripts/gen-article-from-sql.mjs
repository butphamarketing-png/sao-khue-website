import fs from "fs";
import path from "path";

const [sqlFile, exportName, outFile] = process.argv.slice(2);
if (!sqlFile || !exportName || !outFile) {
  console.error("Usage: node gen-article-from-sql.mjs <sql> <exportName> <out.ts>");
  process.exit(1);
}

const sql = fs.readFileSync(sqlFile, "utf8");
const start = sql.indexOf("$content$") + "$content$".length;
const end = sql.indexOf("$content$", start);
const content = sql.slice(start, end).trim();

const excerptM = sql.match(/\$excerpt\$([\s\S]*?)\$excerpt\$/);
const titleM = sql.match(/\$title\$([\s\S]*?)\$title\$/);
const mtM = sql.match(/\$mt\$([\s\S]*?)\$mt\$/);
const mdM = sql.match(/\$md\$([\s\S]*?)\$md\$/);
const mkM = sql.match(/\$mk\$([\s\S]*?)\$mk\$/);

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const file = `/** Nội dung bài viết SEO */
export const ${exportName} = {
  title: ${JSON.stringify(titleM?.[1] ?? "")},
  excerpt: ${JSON.stringify(excerptM?.[1] ?? "")},
  metaTitle: ${JSON.stringify(mtM?.[1] ?? "")},
  metaDescription: ${JSON.stringify(mdM?.[1] ?? "")},
  metaKeywords: ${JSON.stringify(mkM?.[1] ?? "")},
  content: \`${esc(content)}\`,
};
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, file, "utf8");
const words = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(/\s+/).length;
console.log("Wrote", outFile, "words:", words);

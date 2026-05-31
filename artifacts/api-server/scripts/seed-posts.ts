import { seedPostsToDatabase } from "../src/lib/bootstrap";

async function main() {
  console.log("Seeding posts...");
  const count = await seedPostsToDatabase();
  console.log("Done. Total:", count);
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

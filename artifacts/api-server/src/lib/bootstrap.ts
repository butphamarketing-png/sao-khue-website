import { db, postsTable, pingDatabase } from "@workspace/db";
import { seedPosts } from "@workspace/seed-content";
import { sql } from "drizzle-orm";
import { logger } from "./logger";

export async function seedPostsToDatabase(): Promise<number> {
  let count = 0;
  for (const p of seedPosts) {
    await db
      .insert(postsTable)
      .values(p)
      .onConflictDoUpdate({
        target: postsTable.slug,
        set: {
          title: p.title,
          category: p.category,
          excerpt: p.excerpt,
          content: p.content,
          imageUrl: p.imageUrl,
          metaTitle: p.metaTitle ?? "",
          metaDescription: p.metaDescription ?? "",
          metaKeywords: p.metaKeywords ?? "",
          updatedAt: sql`now()`,
        },
      });
    count += 1;
  }
  return count;
}

export async function bootstrapDatabase(): Promise<void> {
  const connected = await pingDatabase();
  if (!connected) {
    logger.warn("Database unavailable — API will serve bundled fallback posts");
    return;
  }

  try {
    const count = await seedPostsToDatabase();
    logger.info({ count }, "Database seeded / synced default posts");
  } catch (err) {
    logger.error({ err }, "Failed to seed posts on startup");
  }
}

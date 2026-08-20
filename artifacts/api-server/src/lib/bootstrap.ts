import { db, postsTable, pingDatabase } from "@workspace/db";
import { seedPosts } from "@workspace/seed-content";
import { sql } from "drizzle-orm";
import { logger } from "./logger";
import { ensureAppTables } from "./ensure-tables";

const SEED_BATCH_SIZE = Number(process.env.SEED_BATCH_SIZE ?? 20);

function toInsertRow(p: (typeof seedPosts)[number]) {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    excerpt: p.excerpt,
    content: p.content,
    imageUrl: p.imageUrl,
    imageAlt: p.imageAlt ?? "",
    imageCaption: p.imageCaption ?? p.imageAlt ?? "",
    metaTitle: p.metaTitle ?? "",
    metaDescription: p.metaDescription ?? "",
    metaKeywords: p.metaKeywords ?? "",
  };
}

/** Upsert toàn bộ seedPosts theo batch (giữ created_at cũ khi conflict). */
export async function seedPostsToDatabase(): Promise<number> {
  const rows = seedPosts.map(toInsertRow);
  let count = 0;

  for (let i = 0; i < rows.length; i += SEED_BATCH_SIZE) {
    const batch = rows.slice(i, i + SEED_BATCH_SIZE);
    await db
      .insert(postsTable)
      .values(batch)
      .onConflictDoUpdate({
        target: postsTable.slug,
        set: {
          title: sql`excluded.title`,
          category: sql`excluded.category`,
          excerpt: sql`excluded.excerpt`,
          content: sql`excluded.content`,
          imageUrl: sql`excluded.image_url`,
          imageAlt: sql`excluded.image_alt`,
          imageCaption: sql`excluded.image_caption`,
          metaTitle: sql`excluded.meta_title`,
          metaDescription: sql`excluded.meta_description`,
          metaKeywords: sql`excluded.meta_keywords`,
          updatedAt: sql`now()`,
        },
      });
    count += batch.length;
    if (count % 200 === 0 || count === rows.length) {
      logger.info({ count, total: rows.length }, "seed posts progress");
    }
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
    await ensureAppTables();
  } catch (err) {
    logger.error({ err }, "Failed to ensure app tables");
  }

  try {
    const count = await seedPostsToDatabase();
    logger.info({ count }, "Database seeded / synced default posts");
  } catch (err) {
    logger.error({ err }, "Failed to seed posts on startup");
  }
}

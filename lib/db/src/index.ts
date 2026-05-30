import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

type Database = NodePgDatabase<typeof schema>;

let pool: pg.Pool | undefined;
let database: Database | undefined;

function getConnectionString(): string {
  return (
    process.env.DATABASE_URL ??
    process.env.SUPABASE_DATABASE_URL ??
    ""
  );
}

function shouldUseSsl(connectionString: string): boolean {
  if (process.env.DATABASE_SSL === "false") return false;
  if (process.env.DATABASE_SSL === "true") return true;
  return (
    connectionString.includes("supabase.co") ||
    connectionString.includes("supabase.com")
  );
}

function getDatabase(): Database {
  if (!database) {
    const connectionString = getConnectionString();
    if (!connectionString) {
      throw new Error(
        "DATABASE_URL or SUPABASE_DATABASE_URL must be set. Connect your Supabase project (Settings → Database → Connection string).",
      );
    }

    pool = new pg.Pool({
      connectionString,
      ssl: shouldUseSsl(connectionString)
        ? { rejectUnauthorized: false }
        : undefined,
      max: Number(process.env.DATABASE_POOL_MAX ?? 10),
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });

    pool.on("error", (err) => {
      console.error("[db] Unexpected pool error", err);
    });

    database = drizzle(pool, { schema });
  }
  return database;
}

export async function pingDatabase(): Promise<boolean> {
  try {
    const p = getPool();
    await p.query("SELECT 1");
    return true;
  } catch {
    return false;
  }
}

export const db: Database = new Proxy({} as Database, {
  get(_target, prop, receiver) {
    const target = getDatabase() as object;
    const value = Reflect.get(target, prop, receiver);
    return typeof value === "function" ? value.bind(target) : value;
  },
});

export function getPool(): pg.Pool {
  getDatabase();
  return pool!;
}

export * from "./schema";

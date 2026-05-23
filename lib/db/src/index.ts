import { drizzle, type NodePgDatabase } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

type Database = NodePgDatabase<typeof schema>;

let pool: pg.Pool | undefined;
let database: Database | undefined;

function getDatabase(): Database {
  if (!database) {
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?",
      );
    }
    pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    database = drizzle(pool, { schema });
  }
  return database;
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

import { typedEnv } from "@/env"
import { drizzle } from "drizzle-orm/libsql"
import * as schema from "./schema"

/**
 * Returns a drizzle instance for the database.
 *
 * @example
 * ```ts
 * import { getDb } from "./db/client"
 * const db = getDb()
 * ```
 *
 * @returns A drizzle instance for the database.
 */
export function getDb() {
  const { DATABASE_URL, DATABASE_AUTH_TOKEN } = typedEnv()

  return drizzle({
    connection: {
      url: DATABASE_URL,
      authToken: DATABASE_AUTH_TOKEN
    },
    logger: true,
    schema
  })
}

export type DatabaseClient = ReturnType<typeof getDb>

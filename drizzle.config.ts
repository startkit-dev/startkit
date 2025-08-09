import { defineConfig } from "drizzle-kit"

const dbUrl = process.env.DATABASE_URL!
const dbAuthToken = process.env.DATABASE_AUTH_TOKEN!
const dialect = process.env.DATABASE_URL?.startsWith("file:")
  ? "sqlite"
  : "turso"

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect,
  verbose: true,
  dbCredentials: {
    url: dbUrl,
    authToken: dbAuthToken
  }
})

import { getDb } from "@/db/client"
import * as schema from "@/db/schema"
import { typedEnv } from "@/env"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"

const {
  BETTER_AUTH_SECRET,
  BETTER_AUTH_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET
} = typedEnv()

export const auth = betterAuth({
  secret: BETTER_AUTH_SECRET,
  url: BETTER_AUTH_URL,
  database: drizzleAdapter(getDb(), {
    provider: "sqlite",
    schema: {
      user: schema.usersTable,
      session: schema.sessionsTable,
      account: schema.accountsTable,
      verification: schema.verificationTable
    }
  }),
  socialProviders: {
    github: {
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET
    }
  }
})

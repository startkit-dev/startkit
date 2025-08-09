import * as z from "zod"

const envSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  DATABASE_URL: z.url(),
  DATABASE_AUTH_TOKEN: z.string().optional(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string()
})

export function typedEnv() {
  return envSchema.parse(process.env)
}

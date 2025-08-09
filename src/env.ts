import * as v from "valibot"

const envSchema = v.object({
  BETTER_AUTH_SECRET: v.string(),
  BETTER_AUTH_URL: v.pipe(v.string(), v.url()),
  DATABASE_URL: v.pipe(v.string(), v.url()),
  DATABASE_AUTH_TOKEN: v.optional(v.string()),
  GITHUB_CLIENT_ID: v.string(),
  GITHUB_CLIENT_SECRET: v.string()
})

export function typedEnv() {
  return v.parse(envSchema, process.env)
}

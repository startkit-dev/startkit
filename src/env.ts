import * as z from "zod"

const envSchema = z.object({
  DATABASE_URL: z.url(),
  DATABASE_AUTH_TOKEN: z.string().optional()
})

export function typedEnv() {
  return envSchema.parse(process.env)
}

import { getDb } from "@/db/client"
import { usersTable } from "@/db/schema"
import { queryOptions } from "@tanstack/react-query"
import { createServerFn } from "@tanstack/react-start"
import { count } from "drizzle-orm"

const getUsersCount = createServerFn().handler(async () => {
  const db = getDb()
  const users = await db.select({ count: count() }).from(usersTable)
  return users[0].count
})

/**
 * Query options for the users count
 *
 * @example
 * ```tsx
 * const { data } = useQuery(usersCountQueryOptions())
 * console.log(data)
 * ```
 */
export const usersCountQueryOptions = () =>
  queryOptions({
    queryKey: ["users-count"],
    queryFn: async () => {
      const count = await getUsersCount()
      return count
    }
  })

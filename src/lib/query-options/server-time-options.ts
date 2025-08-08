import { queryOptions } from "@tanstack/react-query"
import { createServerFn } from "@tanstack/react-start"

/**
 * Server function to get the current time
 */
const getServerTime = createServerFn().handler(() => new Date().toISOString())

/**
 * Query options for the server time
 * @example
 * ```tsx
 * const { data } = useQuery(serverTimeQueryOptions())
 * console.log(data)
 * ```
 */
export const serverTimeQueryOptions = () =>
  queryOptions({
    queryKey: ["server-time"],
    queryFn: async () => {
      const serverTime = await getServerTime()
      return new Date(serverTime)
    }
  })

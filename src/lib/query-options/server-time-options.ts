import { queryOptions } from "@tanstack/react-query"
import { createServerFn } from "@tanstack/react-start"

/**
 * Server function to get the current time
 */
const getServerTime = createServerFn().handler(async () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString())
    }, 1000)
  })
})

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

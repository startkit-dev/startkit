import { Wordmark } from "@/components/brand/wordmark"
import { RefreshButton } from "@/components/refresh-button"
import { Button } from "@/components/ui/button"
import { serverTimeQueryOptions } from "@/lib/query-options/server-time-options"
import { usersCountQueryOptions } from "@/lib/query-options/users-count-options"
import { seo } from "@/lib/seo"
import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Suspense } from "react"

export const Route = createFileRoute("/_main/")({
  head: () => {
    return {
      meta: seo({ title: "A sane way to start with Tanstack Start" })
    }
  },
  component: RouteComponent
})

function RouteComponent() {
  return (
    <main className="flex grow items-center justify-center p-2">
      <div className="container mx-auto flex max-w-md flex-col items-start gap-8">
        <div className="flex flex-row items-center gap-2">
          <Wordmark className="h-11" />
        </div>
        <ol className="list-inside list-decimal text-left font-mono text-sm">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="rounded bg-foreground/[.05] px-1 py-0.5 font-semibold">
              src/routes/_main/index.tsx
            </code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="secondary" asChild>
            <a
              href="https://tanstack.com/router/latest/docs/framework/react/start/overview"
              rel="noopener noreferrer"
              target="_blank"
            >
              Documentation
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-1 text-xs">
          <span className="font-bold">Server Time:</span>
          <Suspense fallback="Loading...">
            <ServerTime />
          </Suspense>
        </div>

        <div className="flex items-center justify-center gap-1 text-xs">
          <span className="font-bold">Users:</span>
          <Suspense fallback="Loading...">
            <UsersCount />
          </Suspense>
        </div>
      </div>
    </main>
  )
}

function ServerTime() {
  const { data: serverTime, refetch } = useSuspenseQuery(
    serverTimeQueryOptions()
  )

  return (
    <>
      <span suppressHydrationWarning>{serverTime.toLocaleString()}</span>
      <RefreshButton onClick={refetch} />
    </>
  )
}

function UsersCount() {
  const { data: usersCount, refetch } = useSuspenseQuery(
    usersCountQueryOptions()
  )

  return (
    <>
      <span suppressHydrationWarning>{usersCount}</span>
      <RefreshButton onClick={refetch} />
    </>
  )
}

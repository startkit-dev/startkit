import { Wordmark } from "@/components/brand/wordmark"
import { createFileRoute, Link, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_auth")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link to="/">
          <Wordmark className="h-8" />
        </Link>
      </div>

      <div className="flex flex-1 grow items-center justify-center">
        <div className="w-full max-w-xs">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

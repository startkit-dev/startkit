import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/_main")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

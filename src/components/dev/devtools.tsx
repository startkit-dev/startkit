import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { TailwindIndicator } from "./tailwind-indicator"

export function Devtools() {
  if (import.meta.env.PROD) {
    return null
  }

  return (
    <>
      <TailwindIndicator hidden={import.meta.env.PROD} position="bottom-left" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}

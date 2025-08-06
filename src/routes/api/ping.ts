import { json, type JsonResponse } from "@tanstack/react-start"
import { createServerFileRoute } from "@tanstack/react-start/server"

export const ServerRoute = createServerFileRoute("/api/ping").methods({
  GET: (): JsonResponse<{ ok: true; data: string }> => {
    return json({
      ok: true,
      data: new Date().toISOString()
    })
  }
})

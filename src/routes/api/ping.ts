import { type ApiResponse } from "@/lib/api-fns/api-response"
import { json } from "@tanstack/react-start"
import { createServerFileRoute } from "@tanstack/react-start/server"

export const ServerRoute = createServerFileRoute("/api/ping").methods({
  GET: (): ApiResponse<{ pong: string }> => {
    return json({
      ok: true,
      data: {
        pong: new Date().toISOString()
      }
    })
  }
})

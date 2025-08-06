import { type JsonResponse } from "@tanstack/react-start"

export interface ApiSuccess<T> {
  ok: true
  data: T
}

export interface ApiError {
  ok: false
  error: string
}

export type ApiResponse<T> =
  | JsonResponse<ApiSuccess<T>>
  | JsonResponse<ApiError>

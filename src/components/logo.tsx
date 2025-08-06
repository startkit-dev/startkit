import { cn } from "@/lib/utils"
import { RocketIcon } from "lucide-react"
import type { HTMLAttributes } from "react"

export function Logo({
  className,
  ...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <span
      className={cn(
        "bg-foreground flex aspect-square items-center justify-center rounded-full transition-all hover:scale-105 hover:-rotate-12",
        className
      )}
      {...props}
    >
      <RocketIcon className="text-background size-3/5" />
    </span>
  )
}

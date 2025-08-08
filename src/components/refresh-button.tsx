import { cn } from "@/lib/utils"
import { RefreshCwIcon } from "lucide-react"
import { useState, type ComponentProps } from "react"
import { Button } from "./ui/button"

interface Props extends Omit<ComponentProps<typeof Button>, "onClick"> {
  onClick?: () => Promise<unknown>
}

export function RefreshButton({
  onClick,
  className,
  variant = "ghost",
  size = "icon",
  ...props
}: Props) {
  const [isSpinning, setIsSpinning] = useState(false)

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "size-4 cursor-pointer p-0.5",
        className,
        isSpinning && "animate-spin-once"
      )}
      onClick={async () => {
        if (isSpinning) {
          return
        }

        setIsSpinning(true)
        await onClick?.()
        setTimeout(() => {
          setIsSpinning(false)
        }, 600)
      }}
      {...props}
    >
      <RefreshCwIcon className="size-full" />
    </Button>
  )
}

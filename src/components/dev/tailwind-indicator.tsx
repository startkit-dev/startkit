import { cn } from "@/lib/utils"

interface TailwindIndicatorProps {
  hidden?: boolean
  position?: "bottom-left" | "bottom-right"
}
/**
 * Adds a small indicator to the bottom left of the screen that shows the
 * current breakpoint. This is useful for debugging responsive styles.
 */
export function TailwindIndicator({
  hidden = false,
  position = "bottom-right"
}: TailwindIndicatorProps) {
  if (hidden) {
    return null
  }

  return (
    <div
      className={cn(
        "fixed z-50 bg-foreground px-1 text-xs text-background",
        position === "bottom-left"
          ? "bottom-0 left-0 rounded-tr-sm"
          : "right-0 bottom-0 rounded-tl-sm"
      )}
    >
      <span className="block sm:hidden">xs</span>
      <span className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </span>
      <span className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</span>
      <span className="hidden lg:block xl:hidden 2xl:hidden">lg</span>
      <span className="hidden xl:block 2xl:hidden">xl</span>
      <span className="hidden 2xl:block">2xl</span>
    </div>
  )
}

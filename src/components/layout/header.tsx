import { ThemePicker } from "@/components/theme/theme-picker"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-3xl">
      <div className="flex flex-row items-center justify-between gap-2 p-2">
        <div></div>
        <ThemePicker />
      </div>
    </header>
  )
}

import { ThemePicker } from "../themes/theme-picker"

export function Header() {
  return (
    <header className="bg-background/70 sticky top-0 z-50 w-full backdrop-blur-3xl">
      <div className="flex flex-row items-center justify-between gap-2 p-2">
        <div></div>
        <ThemePicker />
      </div>
    </header>
  )
}

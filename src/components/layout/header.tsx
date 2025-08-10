import { ThemePicker } from "@/components/theme/theme-picker"
import { Button } from "@/components/ui/button"
import { useSession } from "@/lib/auth-client"
import { Link } from "@tanstack/react-router"
import { Wordmark } from "../brand/wordmark"
import { UserDropdown } from "./user-dropdown"

export function Header() {
  const { data: session, isPending } = useSession()

  return (
    <header className="sticky top-0 z-50 h-14 w-full border-b bg-background/30 backdrop-blur-xl">
      <div className="container mx-auto flex h-full flex-row items-center justify-between gap-2 p-2">
        <Link to="/">
          <Wordmark className="h-6" />
        </Link>
        <div className="flex flex-row items-center gap-2">
          <ThemePicker />
          {isPending ? (
            <Button variant="ghost" disabled></Button>
          ) : session ? (
            <UserDropdown user={session.user} />
          ) : (
            <Button variant="secondary" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

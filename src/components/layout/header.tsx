import { ThemePicker } from "@/components/theme/theme-picker"
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "@/lib/auth-client"
import { UserDropdown } from "./user-dropdown"

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-3xl">
      <div className="flex flex-row items-center justify-between gap-2 p-2">
        <div></div>
        <div className="flex flex-row items-center gap-2">
          <ThemePicker />
          {session ? (
            <UserDropdown user={session.user} />
          ) : (
            <Button onClick={() => signIn.social({ provider: "github" })}>
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

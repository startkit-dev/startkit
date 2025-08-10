import { GithubIcon } from "@/components/icons/github-icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/lib/auth-client"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Loader2 } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent
})

const authProviders = [
  {
    name: "GitHub",
    icon: GithubIcon,
    provider: "github"
  }
]

function RouteComponent() {
  const [authenticatingWith, setAuthenticatingWith] = useState<string | null>(
    null
  )

  async function signInWithProvider(provider: string) {
    if (authenticatingWith) {
      return
    }

    try {
      setAuthenticatingWith(provider)
      await signIn.social({ provider })
    } catch {
      setAuthenticatingWith(null)
    }
  }

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Log in to your account</h1>
        <p className="text-sm text-balance text-muted-foreground">
          Choose your preferred provider to log in to your account.
        </p>
      </div>
      <div className="grid gap-6">
        {authProviders.map(({ name, icon: Icon, provider }) => (
          <Button
            variant="outline"
            size="lg"
            className="w-full cursor-pointer"
            onClick={() => signInWithProvider(provider)}
            disabled={!!authenticatingWith}
          >
            {authenticatingWith === provider ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Icon className="size-4" />
            )}
            Continue with {name}
          </Button>
        ))}

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with email
          </span>
        </div>

        <form className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full cursor-not-allowed" disabled>
            Login
          </Button>
        </form>
      </div>
      <div className="text-center text-sm">
        Changed your mind?{" "}
        <Link to="/" className="underline underline-offset-4">
          Go back home
        </Link>
        .
      </div>
    </main>
  )
}

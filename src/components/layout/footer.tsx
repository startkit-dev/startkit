import { siteConfig } from "@/config/site-config"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

const hostingProviders = {
  vercel: {
    name: "Vercel",
    link: "https://vercel.com",
    statusColors: ["bg-foreground/60", "bg-foreground/80"]
  },
  cloudflare: {
    name: "Cloudflare",
    link: "https://www.cloudflare.com",
    statusColors: ["bg-amber-400", "bg-amber-500"]
  },
  localhost: {
    name: "Localhost",
    link: "#",
    statusColors: ["bg-green-400", "bg-green-500"]
  }
}

const hostingProvider = import.meta.env.VITE_VERCEL
  ? hostingProviders.vercel
  : import.meta.env.PROD
    ? hostingProviders.cloudflare
    : hostingProviders.localhost

export function Footer() {
  return (
    <footer className="border-t p-4 text-tiny uppercase underline-offset-4">
      <div className="container mx-auto flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between">
        {/* Left side */}
        <div className="flex flex-1 flex-col items-center sm:items-start">
          <p>
            Built by{" "}
            <a
              href={siteConfig.author.link}
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.author.name}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:underline">
              {siteConfig.name}
            </Link>
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-1 flex-col items-center sm:items-end">
          <div>
            <span className="relative mr-2 inline-flex size-2 items-center">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75",
                  hostingProvider.statusColors[0]
                )}
              ></span>{" "}
              <span
                className={cn(
                  "relative inline-flex size-2 rounded-full",
                  hostingProvider.statusColors[1]
                )}
              ></span>
            </span>
            <span>
              Deployed on{" "}
              <a
                href={hostingProvider.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {hostingProvider.name}
              </a>
            </span>
          </div>
          <div>
            Source on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

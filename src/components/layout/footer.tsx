import { siteConfig } from "@/config/site-config"

export function Footer() {
  return (
    <footer className="pb-2">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="flex items-center justify-between">
          <div className="w-full px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm">
            Built by{" "}
            <a
              href={siteConfig.author.link}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.author.name}
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  )
}

import { siteConfig } from "@/config/site-config"

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 p-8 text-tiny uppercase underline-offset-4">
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-row justify-between sm:flex-col sm:justify-start">
          <div>System Status</div>
          <div>
            <span className="relative mr-2 inline-flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>{" "}
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </span>
            <span>OK</span>
          </div>
        </div>

        <div className="flex flex-row justify-between sm:flex-col sm:items-end sm:justify-start">
          <div>Deployed on</div>
          <HostingProvider />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-4 border-t pt-6 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()}{" "}
          <a href={siteConfig.author.link} className="hover:underline">
            {siteConfig.author.name}
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Source on Github
          </a>
        </div>
      </div>
    </footer>
  )
}

function HostingProvider() {
  const isVercel = !!import.meta.env.VITE_VERCEL
  const isCloudflare = !isVercel && import.meta.env.PROD

  return (
    <a
      href={
        isVercel
          ? "https://vercel.com"
          : isCloudflare
            ? "https://www.cloudflare.com"
            : "http://localhost:3000"
      }
      target="_blank"
      rel="noreferrer"
      className="hover:underline"
    >
      {isVercel ? "Vercel" : isCloudflare ? "Cloudflare" : "Localhost"}
    </a>
  )
}

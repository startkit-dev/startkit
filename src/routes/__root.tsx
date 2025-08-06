/// <reference types="vite/client" />
import "@fontsource-variable/geist"
import "@fontsource-variable/geist-mono"
import { Devtools } from "@/components/dev/devtools"
import { DefaultCatchBoundary } from "@/components/errors/default-catch-boundary"
import { NotFound } from "@/components/errors/not-found"
import { ThemeProvider } from "@/components/themes/theme-provider"
import { seo } from "@/lib/seo"
import appCss from "@/styles/app.css?url"
import monoFont from "@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2?url"
import sansFont from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url"
import { type QueryClient } from "@tanstack/react-query"
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts
} from "@tanstack/react-router"
import { type PropsWithChildren } from "react"

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: light)",
        content: "#FFFFFF"
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: dark)",
        content: "#09090b"
      },
      ...seo()
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preload",
        href: sansFont,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous"
      },
      {
        rel: "preload",
        href: monoFont,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/android-chrome-192x192.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/android-chrome-512x512.png"
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" }
    ]
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Devtools />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

import { siteConfig } from "@/config/site-config"

interface SeoOptions {
  title?: string
  description?: string
  image?: string | URL
  keywords?: string
}

/**
 * Generate SEO tags for a page
 */
export function seo({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords,
  image
}: SeoOptions = {}) {
  const tags = [
    { title: getTitleWithTemplate(title) },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: siteConfig.author.twitter },
    { name: "og:type", content: "website" },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    ...(image
      ? [
          { name: "twitter:image", content: image.toString() },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "og:image", content: image.toString() }
        ]
      : [])
  ]

  return tags
}

/**
 * Get the title of a page with the SEO template
 */
export function getTitleWithTemplate(title: string) {
  return siteConfig.seo.titleTemplate.replace("%s", title)
}

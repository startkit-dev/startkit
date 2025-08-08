import { ScriptOnce } from "@tanstack/react-router"
import { createContext, use, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: "system",
  setTheme: () => {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
})

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme"
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme
  })

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (newTheme === "system") {
      localStorage.removeItem(storageKey)
    } else {
      localStorage.setItem(storageKey, newTheme)
    }
  }

  useEffect(() => {
    const apply = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" &&
          matchMedia("(prefers-color-scheme: dark)").matches)

      document.documentElement.classList.toggle("dark", isDark)
      document.documentElement.style.colorScheme = isDark ? "dark" : "light"
    }

    apply()

    if (theme === "system") {
      const media = matchMedia("(prefers-color-scheme: dark)")
      media.addEventListener("change", apply)
      return () => media.removeEventListener("change", apply)
    }
  }, [theme])

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <ScriptOnce>
        {`(() => {
          const stored = localStorage.getItem('${storageKey}');
          const theme = stored || '${defaultTheme}';
          const isDark = theme === 'dark' ||
            (theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
          document.documentElement.classList.toggle('dark', isDark);
          document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
        })()`}
      </ScriptOnce>
      {children}
    </ThemeContext>
  )
}

export const useTheme = () => use(ThemeContext)

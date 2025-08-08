import { ScriptOnce } from "@tanstack/react-router"
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"

/**
 * Theme provider for TanStack Start applications with dark/light mode support.
 * Handles system preferences, localStorage persistence, and FOUC prevention.
 *
 * @example
 * ```tsx
 * // In your root route component (e.g., __root.tsx)
 * import { ThemeProvider } from '@/components/theme-provider'
 *
 * export default function RootRoute() {
 *   return (
 *     <ThemeProvider defaultTheme="system" storageKey="app-theme">
 *       <Outlet />
 *     </ThemeProvider>
 *   )
 * }
 *
 * // In any component
 * import { useTheme } from '@/components/theme-provider'
 *
 * function ThemeToggle() {
 *   const { theme, setTheme, resolvedTheme } = useTheme()
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current theme: {theme} (displaying: {resolvedTheme})
 *     </button>
 *   )
 * }
 *
 * // For theme-aware images or icons
 * function Logo() {
 *   const { resolvedTheme } = useTheme()
 *
 *   return (
 *     <img
 *       src={resolvedTheme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'}
 *       alt="Logo"
 *     />
 *   )
 * }
 * ```
 */

type Theme = "dark" | "light" | "system"
type ResolvedTheme = "dark" | "light"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme?: ResolvedTheme
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
)

const MEDIA = "(prefers-color-scheme: dark)"
const THEMES = ["light", "dark"] as const

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme"
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme

    try {
      const stored = localStorage.getItem(storageKey) as Theme | null
      return stored ?? defaultTheme
    } catch {
      return defaultTheme
    }
  })

  // Track the resolved theme for "system" mode
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window === "undefined") return "light"
    return window.matchMedia(MEDIA).matches ? "dark" : "light"
  })

  // Apply theme to DOM
  const applyTheme = useCallback((targetTheme: ResolvedTheme) => {
    const root = document.documentElement

    // Only update if different
    if (!root.classList.contains(targetTheme)) {
      root.classList.remove(...THEMES)
      root.classList.add(targetTheme)
    }

    // Also set color-scheme for native elements
    root.style.colorScheme = targetTheme
  }, [])

  // Handle theme changes
  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme)

      try {
        if (newTheme === "system") {
          localStorage.removeItem(storageKey)
        } else {
          localStorage.setItem(storageKey, newTheme)
        }
      } catch {
        // Ignore storage errors (e.g., private browsing)
      }
    },
    [storageKey]
  )

  // Handle system preference changes
  const handleMediaQuery = useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const newResolvedTheme = e.matches ? "dark" : "light"
      setResolvedTheme(newResolvedTheme)

      if (theme === "system") {
        applyTheme(newResolvedTheme)
      }
    },
    [theme, applyTheme]
  )

  // Listen for system preference changes
  useEffect(() => {
    const media = window.matchMedia(MEDIA)

    // Modern browsers
    media.addEventListener("change", handleMediaQuery)
    handleMediaQuery(media) // Initial check

    return () => media.removeEventListener("change", handleMediaQuery)
  }, [handleMediaQuery])

  // Apply theme whenever it changes
  useEffect(() => {
    const targetTheme = theme === "system" ? resolvedTheme : theme
    applyTheme(targetTheme)
  }, [theme, resolvedTheme, applyTheme])

  // Handle storage events for multi-tab sync
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageKey) {
        const newTheme = (e.newValue as Theme) || defaultTheme
        setThemeState(newTheme)
      }
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [storageKey, defaultTheme])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme: theme === "system" ? resolvedTheme : theme
    }),
    [theme, setTheme, resolvedTheme]
  )

  return (
    <ThemeProviderContext value={value}>
      <ScriptOnce>
        {`(() => {
          const stored = localStorage.getItem('${storageKey}');
          const theme = stored || '${defaultTheme}';
          const isDark = theme === 'dark' ||
            (theme === 'system' && window.matchMedia('${MEDIA}').matches);

          document.documentElement.classList.add(isDark ? 'dark' : 'light');
          document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
        })()`}
      </ScriptOnce>
      {children}
    </ThemeProviderContext>
  )
}

export function useTheme() {
  const context = use(ThemeProviderContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}

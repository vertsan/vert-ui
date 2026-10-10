import * as React from "react"

export type ThemeTone = "light" | "dark"
export type ThemeTonePreference = ThemeTone | "system"

const DEFAULT_THEMES = ["vert", "slate", "sand", "midnight", "rose", "ocean"] as const

export interface ThemeProviderProps {
  children?: React.ReactNode
  /** Theme names available to the app. Defaults to the six built-in presets. */
  themes?: readonly string[]
  defaultTheme?: string
  /** `"system"` follows the OS `prefers-color-scheme`. Defaults to `"system"`. */
  defaultTone?: ThemeTonePreference
  /** Base localStorage key; `-theme` and `-tone` suffixes are appended. */
  storageKey?: string
  themeAttribute?: string
  toneAttribute?: string
  darkClassName?: string
  enableSystem?: boolean
  enableColorScheme?: boolean
  disableTransitionOnChange?: boolean
}

export interface ThemeContextValue {
  theme: string
  tone: ThemeTonePreference
  /** The concrete tone in effect right now (`"light"` or `"dark"`). */
  resolvedTone: ThemeTone
  /** The tone the operating system currently reports. */
  systemTone: ThemeTone
  themes: readonly string[]
  setTheme: (theme: string) => void
  setTone: (tone: ThemeTonePreference) => void
}

export interface ThemeScriptOptions {
  storageKey?: string
  defaultTheme?: string
  defaultTone?: ThemeTonePreference
  themeAttribute?: string
  toneAttribute?: string
  darkClassName?: string
  enableSystem?: boolean
  enableColorScheme?: boolean
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key: string, value: string | null): void {
  try {
    if (value === null) window.localStorage.removeItem(key)
    else window.localStorage.setItem(key, value)
  } catch {
    /* private mode or storage disabled — attributes still apply for the session */
  }
}

/**
 * Temporarily disables transitions while the tone flips so colors snap instead
 * of cross-fading every element on the page. The style is removed on the next
 * frame (transform/opacity-only animations stay intact otherwise).
 */
function withoutTransitions(apply: () => void): void {
  if (typeof document === "undefined" || !document.head) {
    apply()
    return
  }
  const style = document.createElement("style")
  style.setAttribute("data-vert-theme-transition", "")
  style.appendChild(
    document.createTextNode(
      "*,*::before,*::after{transition:none!important;animation:none!important}",
    ),
  )
  document.head.appendChild(style)
  apply()
  // Force a reflow so the new values paint once before transitions return.
  void window.getComputedStyle(document.body).opacity
  window.setTimeout(() => {
    if (style.parentNode) style.parentNode.removeChild(style)
  }, 1)
}

/**
 * Headless theme controller. Sets `data-theme`, `data-tone` and a dark class on
 * `<html>` so both the semantic (`styles/vert.css`) and flat
 * (`styles/index.css`) token vocabularies react instantly. SSR-safe: nothing
 * touches the DOM until after mount.
 */
export function ThemeProvider({
  children,
  themes = DEFAULT_THEMES,
  defaultTheme = "vert",
  defaultTone = "system",
  storageKey = "vert-ui",
  themeAttribute = "data-theme",
  toneAttribute = "data-tone",
  darkClassName = "dark",
  enableSystem = true,
  enableColorScheme = true,
  disableTransitionOnChange = true,
}: ThemeProviderProps) {
  const themeKey = `${storageKey}-theme`
  const toneKey = `${storageKey}-tone`

  const [theme, setThemeState] = React.useState(defaultTheme)
  const [tone, setToneState] = React.useState<ThemeTonePreference>(defaultTone)
  const [systemTone, setSystemTone] = React.useState<ThemeTone>("light")
  const [mounted, setMounted] = React.useState(false)

  const resolvedTone: ThemeTone = tone === "system" ? systemTone : tone

  // Read the persisted choice and the OS preference after mount (SSR-safe).
  React.useEffect(() => {
    const storedTheme = readStorage(themeKey)
    const storedTone = readStorage(toneKey)
    if (storedTheme) setThemeState(storedTheme)
    if (storedTone === "light" || storedTone === "dark" || storedTone === "system") {
      setToneState(storedTone)
    }
    if (enableSystem && typeof window.matchMedia === "function") {
      setSystemTone(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
      )
    }
    setMounted(true)
  }, [themeKey, toneKey, enableSystem])

  // Follow the OS while the preference is "system".
  React.useEffect(() => {
    if (!enableSystem || tone !== "system") return
    if (typeof window.matchMedia !== "function") return
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (event: MediaQueryListEvent) =>
      setSystemTone(event.matches ? "dark" : "light")
    mql.addEventListener?.("change", onChange)
    return () => mql.removeEventListener?.("change", onChange)
  }, [enableSystem, tone])

  // Apply to <html> and persist whenever the resolved values change.
  React.useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    const apply = () => {
      root.setAttribute(themeAttribute, theme)
      root.setAttribute(toneAttribute, resolvedTone)
      root.classList.toggle(darkClassName, resolvedTone === "dark")
      if (enableColorScheme) root.style.colorScheme = resolvedTone
    }
    if (disableTransitionOnChange) withoutTransitions(apply)
    else apply()
    writeStorage(themeKey, theme)
    writeStorage(toneKey, tone)
  }, [
    mounted,
    theme,
    tone,
    resolvedTone,
    themeAttribute,
    toneAttribute,
    darkClassName,
    enableColorScheme,
    disableTransitionOnChange,
    themeKey,
    toneKey,
  ])

  const setTheme = React.useCallback((next: string) => setThemeState(next), [])
  const setTone = React.useCallback(
    (next: ThemeTonePreference) => setToneState(next),
    [],
  )

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, tone, resolvedTone, systemTone, themes, setTheme, setTone }),
    [theme, tone, resolvedTone, systemTone, themes, setTheme, setTone],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a <ThemeProvider>.")
  }
  return context
}

/**
 * Returns the inline script that applies the persisted theme before first paint
 * (prevents a flash of the wrong theme). Render it as the first thing in
 * `<head>` — e.g. TanStack Start's `head().scripts` or a raw `<script>` tag.
 */
export function getThemeScript(options: ThemeScriptOptions = {}): string {
  const {
    storageKey = "vert-ui",
    defaultTheme = "vert",
    defaultTone = "system",
    themeAttribute = "data-theme",
    toneAttribute = "data-tone",
    darkClassName = "dark",
    enableSystem = true,
    enableColorScheme = true,
  } = options

  return [
    "(function(){try{",
    "var d=document.documentElement;",
    `var t=localStorage.getItem(${JSON.stringify(`${storageKey}-theme`)})||${JSON.stringify(defaultTheme)};`,
    `var o=localStorage.getItem(${JSON.stringify(`${storageKey}-tone`)})||${JSON.stringify(defaultTone)};`,
    `var m=${enableSystem}&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;`,
    'var r=(o==="system")?(m?"dark":"light"):o;',
    'if(r!=="dark"&&r!=="light"){r="light"}',
    `d.setAttribute(${JSON.stringify(themeAttribute)},t);`,
    `d.setAttribute(${JSON.stringify(toneAttribute)},r);`,
    `if(r==="dark"){d.classList.add(${JSON.stringify(darkClassName)})}else{d.classList.remove(${JSON.stringify(darkClassName)})}`,
    enableColorScheme ? "d.style.colorScheme=r;" : "",
    "}catch(e){}})();",
  ].join("")
}

/** Convenience wrapper around `getThemeScript` for non-TanStack setups. */
export function ThemeScript(options: ThemeScriptOptions = {}) {
  return <script dangerouslySetInnerHTML={{ __html: getThemeScript(options) }} />
}

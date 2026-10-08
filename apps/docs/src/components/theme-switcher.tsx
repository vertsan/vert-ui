import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@vert-ui/ui"
import { useEffect, useState } from "react"

const themes = [
  { value: "vert", label: "Vert (default)" },
  { value: "slate", label: "Slate" },
  { value: "sand", label: "Sand" },
  { value: "midnight", label: "Midnight" },
  { value: "rose", label: "Rose" },
  { value: "ocean", label: "Ocean" },
] as const

type Tone = "light" | "dark"

const THEME_KEY = "vert-ui-theme"
const TONE_KEY = "vert-ui-tone"

function apply(theme: string, tone: Tone) {
  const root = document.documentElement
  root.setAttribute("data-theme", theme)
  root.classList.toggle("dark", tone === "dark")
  root.setAttribute("data-tone", tone)
  try {
    localStorage.setItem(THEME_KEY, theme)
    localStorage.setItem(TONE_KEY, tone)
  } catch {
    /* private mode — attributes still apply for this session */
  }
}

export function readStored(): { theme: string; tone: Tone } | null {
  try {
    const theme = localStorage.getItem(THEME_KEY)
    const tone = localStorage.getItem(TONE_KEY)
    if (!theme && !tone) return null
    return {
      theme: theme ?? "vert",
      tone: tone === "dark" ? "dark" : "light",
    }
  } catch {
    return null
  }
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<string>("vert")
  const [tone, setTone] = useState<Tone>("light")

  useEffect(() => {
    const stored = readStored()
    if (stored) {
      setTheme(stored.theme)
      setTone(stored.tone)
      apply(stored.theme, stored.tone)
      return
    }
    const root = document.documentElement
    const currentTheme = root.getAttribute("data-theme") ?? "vert"
    const prefersDark =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(currentTheme)
    setTone(root.classList.contains("dark") || prefersDark ? "dark" : "light")
  }, [])

  const onTheme = (value: string) => {
    setTheme(value)
    apply(value, tone)
  }

  const onTone = (value: string) => {
    const next = value === "dark" ? "dark" : "light"
    setTone(next)
    apply(theme, next)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Change theme"
          className="flex size-8 items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-4"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={onTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem key={t.value} value={t.value}>
              {t.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Tone</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={tone} onValueChange={onTone}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

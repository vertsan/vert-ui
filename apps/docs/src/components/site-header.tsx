import { Link, useRouterState } from "@tanstack/react-router"
import { ThemeSwitcher } from "./theme-switcher"

const nav = [
  { label: "Home", to: "/" },
  { label: "Guide", to: "/guide" },
  { label: "Components", to: "/components" },
] as const

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 sm:flex-nowrap sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5 outline-none">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground shadow-soft transition-transform duration-[140ms] group-hover:-translate-y-0.5 group-focus-visible:ring-2 group-focus-visible:ring-ring"
          >
            <svg viewBox="0 0 32 32" fill="none" className="size-6">
              <path
                d="m7.5 9 8.25 14L24.5 8"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.5 8h5v5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-tight">vert-ui</span>
          <Badge>beta</Badge>
        </Link>

        <div className="ml-auto flex items-center gap-1.5">
          <nav aria-label="Site">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active =
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to)
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "rounded-md px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="hidden rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-soft-foreground sm:inline">
      {children}
    </span>
  )
}

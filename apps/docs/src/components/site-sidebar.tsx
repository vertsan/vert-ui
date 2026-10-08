import { Link, useRouterState } from "@tanstack/react-router"
import { componentDocs } from "../data/components"

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  return (
    <nav aria-label="Components">
      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Components
      </p>
      <ul className="space-y-0.5">
        {componentDocs.map((component) => {
          const active = pathname === component.href
          return (
            <li key={component.href}>
              <Link
                to={component.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={[
                  "flex items-center justify-between gap-2 rounded-md px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                  active
                    ? "bg-brand-soft font-medium text-brand-soft-foreground"
                    : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                ].join(" ")}
              >
                <span>{component.name}</span>
                {active ? (
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-brand"
                  />
                ) : null}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function SidebarAside() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const catalogActive = pathname === "/components"

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 overflow-y-auto border-r border-border/70 py-8 pr-6 lg:block">
      <div className="space-y-6">
        <div>
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Overview
          </p>
          <Link
            to="/components"
            aria-current={catalogActive ? "page" : undefined}
            className={[
              "flex items-center rounded-md px-3 py-1.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              catalogActive
                ? "bg-brand-soft font-medium text-brand-soft-foreground"
                : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
            ].join(" ")}
          >
            Component catalog
          </Link>
        </div>
        <NavList />
      </div>
    </aside>
  )
}

export function SidebarMobileNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const catalogActive = pathname === "/components"

  return (
    <details className="group border-b border-border/70 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium outline-none transition-colors hover:bg-accent/60 focus-visible:ring-2 focus-visible:ring-ring sm:px-6 [&::-webkit-details-marker]:hidden">
        <span>Browse components</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4 text-muted-foreground transition-transform duration-[140ms] group-open:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <div className="max-h-[60vh] overflow-y-auto border-t border-border/70 bg-card/60 px-4 py-4 sm:px-6">
        <Link
          to="/components"
          aria-current={catalogActive ? "page" : undefined}
          className={[
            "block rounded-md px-3 py-1.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring",
            catalogActive
              ? "bg-brand-soft font-medium text-brand-soft-foreground"
              : "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
          ].join(" ")}
        >
          Component catalog
        </Link>
        <div className="pt-3">
          <NavList />
        </div>
      </div>
    </details>
  )
}

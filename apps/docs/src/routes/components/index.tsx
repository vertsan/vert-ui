import { Badge } from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"
import { useMemo, useState } from "react"
import { comingSoon, componentDocs } from "../../data/components"

export const Route = createFileRoute("/components/")({
  component: ComponentsPage,
})

function ComponentsPage() {
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return componentDocs
    return componentDocs.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="max-w-4xl space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">
          Library
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Components</h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Each page ships a live preview, usage examples, a props table and accessibility
          notes.
        </p>
      </header>

      <div className="relative">
        <label htmlFor="component-search" className="sr-only">
          Search components
        </label>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          id="component-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components…"
          className="h-10 w-full rounded-lg border border-input bg-card pl-9 pr-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <p role="status" className="sr-only">
        {filtered.length} of {componentDocs.length} components shown
      </p>

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-border bg-card p-8 text-center text-sm text-muted-foreground">
          No components match “{query}”. Try “button”, “form” or “layout”.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {filtered.map((component, index) => (
            <li key={component.name}>
              <Link
                to={component.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft outline-none transition-[transform,box-shadow] duration-[140ms] hover:-translate-y-0.5 hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-sm font-bold text-brand-soft-foreground transition-transform duration-[140ms] group-hover:-translate-y-0.5"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2 font-semibold">
                    {component.name}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-3.5 -translate-x-1 opacity-0 transition-[transform,opacity] duration-[140ms] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {component.description}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {comingSoon.length > 0 ? (
        <section
          className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          aria-labelledby="coming-soon"
        >
          <h2 id="coming-soon" className="text-lg font-semibold tracking-tight">
            Coming soon
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Core controls land with the next batch — documented pages follow.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {comingSoon.map((name) => (
              <Badge key={name} variant="secondary">
                {name}
              </Badge>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  )
}

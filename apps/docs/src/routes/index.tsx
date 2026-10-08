import { Badge, Button, Progress, Switch } from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

const stats = [
  { value: "24", label: "Components" },
  { value: "113", label: "Tests passing" },
  { value: "256", label: "Contrast pairs" },
  { value: "25", label: "Registry items" },
]

const features = [
  {
    title: "Original by design",
    body: "Every component is written from scratch. Patterns are studied, code and visuals never copied.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M12 21v-8" />
        <path d="M12 13c0-3 2.5-6 7-7 0 5-3 8-7 8Z" />
        <path d="M12 13C12 10 9.5 7 5 6c0 5 3 8 7 8Z" />
      </svg>
    ),
  },
  {
    title: "Accessible first",
    body: "WCAG AA contrast, keyboard support and screen-reader semantics are acceptance criteria, not polish.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Copy-paste ready",
    body: "shadcn-compatible registry items install straight into your codebase. Own the code, no runtime dependency.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15V5a2 2 0 0 1 2-2h10" />
      </svg>
    ),
  },
]

const swatches = [
  "bg-vert-100",
  "bg-vert-200",
  "bg-vert-300",
  "bg-vert-400",
  "bg-vert-500",
  "bg-vert-600",
  "bg-vert-700",
  "bg-vert-800",
  "bg-vert-900",
]

export function Home() {
  return (
    <div className="overflow-hidden">
      <section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="animate-[vert-fade-in_400ms_ease-out]">
            shadcn-compatible · React 19 · TypeScript
          </Badge>
          <h1 className="animate-[vert-fade-in_500ms_ease-out] mt-6 bg-linear-to-br from-vert-600 via-brand to-vert-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-vert-300 dark:via-vert-400 dark:to-vert-500 sm:text-5xl md:text-6xl">
            Grow with precision.
          </h1>
          <p className="animate-[vert-fade-in_600ms_ease-out] mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            vert-ui is an original UI library of calm, green-accented components with soft
            motion — copy-paste into React 19, style with Tailwind, own forever.
          </p>
          <div className="animate-[vert-fade-in_700ms_ease-out] mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link to="/components">Browse components</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/components/alert">Read a doc page</Link>
            </Button>
          </div>
        </div>

        <div className="animate-[vert-fade-in_800ms_ease-out] mt-14">
          <div className="grain luminous-border rounded-2xl border border-border/60 bg-card/90 p-2 shadow-raised backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 py-2">
              <span className="size-2.5 rounded-full bg-warning/70" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-warning/50" aria-hidden="true" />
              <span className="size-2.5 rounded-full bg-success/60" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground sm:inline-block"
              >
                app.vert.dev/settings
              </span>
            </div>
            <div className="grid gap-4 rounded-xl bg-background/70 p-5 sm:grid-cols-2 sm:p-6">
              <div className="space-y-4 rounded-xl border border-border/70 bg-card p-5 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand">
                    VS
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">Precision workspace</p>
                    <p className="truncate text-xs text-muted-foreground">
                      12 members · synced
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-muted-foreground">Auto-sync</span>
                  <Switch defaultChecked aria-label="Auto-sync" />
                </div>
              </div>
              <div className="space-y-4 rounded-xl border border-border/70 bg-card p-5 shadow-soft">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Storage</span>
                    <span className="text-muted-foreground">64%</span>
                  </div>
                  <Progress value={64} aria-label="Storage used" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-brand/30 bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand-soft-foreground">
                    on track
                  </span>
                  <Badge variant="secondary">weekly</Badge>
                  <Badge variant="outline">v0.1</Badge>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    Save
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Project statistics" className="mx-auto max-w-5xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-border/70 p-6 text-center [&:nth-child(2n)]:border-l [&:nth-child(n+3)]:border-t md:[&:not(:first-child)]:border-l md:[&:nth-child(n+3)]:border-t-0"
            >
              <dt className="text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-foreground">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        aria-labelledby="principles"
        className="mx-auto max-w-5xl space-y-6 px-4 pt-16 sm:px-6"
      >
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Principles
          </p>
          <h2 id="principles" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built like a product, shipped as copy-paste
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow] duration-[140ms] hover:-translate-y-0.5 hover:shadow-raised"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand-soft-foreground transition-transform duration-[140ms] group-hover:-translate-y-0.5">
                {feature.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="signature" className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
        <div className="grid items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Signature
            </p>
            <h2 id="signature" className="text-2xl font-bold tracking-tight">
              Soft grain, luminous edge, generous radius
            </h2>
            <p className="text-sm text-muted-foreground">
              Every surface pairs a fine grain gradient with a thin emerald border and a
              soft elevation shadow — calm enough for all-day tools, distinct enough to
              remember.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>minimal</Badge>
              <Badge variant="secondary">airy</Badge>
              <Badge variant="outline">natural</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div className="grain flex h-24 overflow-hidden rounded-xl border border-border/60 shadow-soft">
              {swatches.map((color) => (
                <span key={color} className={`h-full flex-1 ${color}`} />
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
              <span className="rounded-lg border border-border bg-muted px-3 py-1.5 shadow-xs">
                radius
              </span>
              <span className="rounded-2xl border border-border bg-muted px-3 py-1.5 shadow-soft">
                shadow-soft
              </span>
              <span className="rounded-2xl border border-border bg-background px-3 py-1.5 shadow-raised">
                shadow-raised
              </span>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Get started" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grain rounded-2xl bg-linear-to-br from-vert-600 to-brand p-8 text-center shadow-raised md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-brand-foreground sm:text-3xl">
            Start growing your interface
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-vert-100">
            Twenty-four components, twenty-five registry items, zero lock-in. Open the
            catalog and copy the first one in.
          </p>
          <Button size="lg" variant="secondary" className="mt-6" asChild>
            <Link to="/components">Open the catalog</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

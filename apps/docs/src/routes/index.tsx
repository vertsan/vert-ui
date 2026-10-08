import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Hero } from "../components/hero"
import { cn } from "../lib/utils"

export const Route = createFileRoute("/")({
  component: Home,
})

const stats = [
  { value: "28", label: "Components" },
  { value: "163", label: "Tests passing" },
  { value: "756", label: "Contrast pairs" },
  { value: "30", label: "Registry items" },
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
      <Hero />

      <section aria-label="Project statistics" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Card className="overflow-hidden">
          <dl className="grid grid-cols-2 md:grid-cols-4">
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
        </Card>
      </section>

      <section
        aria-labelledby="principles"
        className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pt-16 sm:px-6"
      >
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">
            Principles
          </p>
          <h2 id="principles" className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built like a product, shipped as copy-paste
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand-soft-foreground">
                  {feature.icon}
                </span>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="signature" className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
        <Card className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-10">
          <CardHeader className="space-y-0 gap-3 p-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Signature
            </p>
            <CardTitle id="signature">Soft grain, luminous edge, generous radius</CardTitle>
            <CardDescription>
              Every surface pairs a fine grain gradient with a thin emerald border and a
              soft elevation shadow — calm enough for all-day tools, distinct enough to
              remember.
            </CardDescription>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge>minimal</Badge>
              <Badge variant="secondary">airy</Badge>
              <Badge variant="outline">natural</Badge>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 p-0">
            <div className="grain flex h-24 overflow-hidden rounded-xl border border-border/60 shadow-soft">
              {swatches.map((color) => (
                <span key={color} className={cn("h-full flex-1", color)} />
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
          </CardContent>
        </Card>
      </section>

      <section aria-label="Get started" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grain rounded-2xl bg-brand p-8 text-center shadow-raised md:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-brand-foreground sm:text-3xl">
            Start growing your interface with precision
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-foreground">
            Twenty-eight components, thirty registry items, zero lock-in. Open the
            catalog and copy the first one in.
          </p>
          <Button size="lg" variant="secondary" className="mt-6" asChild>
            <Link to="/components">Open the catalog</Link>
          </Button>
          <p className="mt-4 text-sm text-brand-foreground">
            New here?{" "}
            <Link
              to="/guide/installation"
              className="font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground"
            >
              Read the installation guide
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

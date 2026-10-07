import { Badge } from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/components/")({
  component: ComponentsPage,
})

const documented = [
  {
    name: "Alert",
    href: "/components/alert",
    description: "Inline status blocks with semantic variants.",
  },
  {
    name: "Dialog",
    href: "/components/dialog",
    description: "Modal surface with focus trap and scroll lock.",
  },
  {
    name: "Dropdown Menu",
    href: "/components/dropdown-menu",
    description: "Action menu with checkbox and radio items.",
  },
  {
    name: "Progress",
    href: "/components/progress",
    description: "Determinate and indeterminate progress bars.",
  },
  {
    name: "Select",
    href: "/components/select",
    description: "Single-value listbox trigger with typeahead.",
  },
  {
    name: "Separator",
    href: "/components/separator",
    description: "Horizontal and vertical dividers.",
  },
  {
    name: "Switch",
    href: "/components/switch",
    description: "Immediate on/off setting control.",
  },
  {
    name: "Tabs",
    href: "/components/tabs",
    description: "Tabbed panels with arrow-key navigation.",
  },
  {
    name: "Tooltip",
    href: "/components/tooltip",
    description: "Hover and focus bubble linked with aria-describedby.",
  },
]

const comingSoon = ["Button", "Input", "Textarea", "Checkbox", "Card", "Badge"]

function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground">
            Each page ships a live preview, usage examples, a props table and accessibility notes.
          </p>
        </header>

        <ul className="grid gap-3 sm:grid-cols-2">
          {documented.map((component) => (
            <li key={component.name}>
              <Link
                to={component.href}
                className="block h-full rounded-xl border border-border bg-card p-4 outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="font-semibold">{component.name}</span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {component.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="space-y-3" aria-labelledby="coming-soon">
          <h2 id="coming-soon" className="text-xl font-semibold">
            Coming soon
          </h2>
          <div className="flex flex-wrap gap-2">
            {comingSoon.map((name) => (
              <Badge key={name} variant="secondary">
                {name}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

import { createFileRoute, Link } from "@tanstack/react-router"
import { Code, GuidePage, Section } from "../../components/guide-page"
import { guideDocs } from "../../data/guide"

export const Route = createFileRoute("/guide/")({
  component: GuideOverviewPage,
})

const delivery = `your repo
├── components/
│   └── vert-ui/
│       └── button.tsx        ← the component source, yours to edit
├── lib/
│   └── vert-ui/
│       └── cn.ts             ← cn() helper (clsx + tailwind-merge)
└── styles/
    └── vert.css              ← theme engine: tokens, tones, base styles`

function GuideOverviewPage() {
  const cards = guideDocs.filter((item) => item.href !== "/guide")

  return (
    <GuidePage
      title="Overview"
      intro="vert-ui is an original React component library delivered as shadcn-compatible registry items — install what you need, edit the source, own it forever."
    >
      <Section label="Guide" title="Where to start" id="guide-start">
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="group rounded-xl border border-border/70 bg-background/70 p-5 outline-none transition-[transform,box-shadow] duration-[140ms] hover:-translate-y-0.5 hover:shadow-raised focus-visible:ring-2 focus-visible:ring-ring"
            >
              <h3 className="text-sm font-semibold group-hover:text-brand">{card.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{card.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section label="Delivery" title="How delivery works" id="guide-delivery">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Every component ships as a registry item: plain TypeScript and CSS embedded in a
            JSON file. The shadcn CLI copies that source into your repository and adds the
            npm dependencies the component needs — there is no <code className="font-mono text-xs text-foreground">@vert-ui/ui</code>{" "}
            package in your <code className="font-mono text-xs text-foreground">node_modules</code> and no
            runtime dependency on this library.
          </p>
          <Code>{delivery}</Code>
          <p>
            From that point the code is yours: rename it, restyle it, delete what you don't
            use. Updates are opt-in — re-run the CLI only where you want the upstream source
            back, and let git diff show you what changed.
          </p>
        </div>
      </Section>

      <Section label="Requirements" title="What you need" id="guide-requirements">
        <ul className="list-disc space-y-2.5 pl-5 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">React 19</span> — components use
            ref forwarding and modern hooks.
          </li>
          <li>
            <span className="font-medium text-foreground">Tailwind CSS v4</span> — CSS-first
            config, no <code className="font-mono text-xs text-foreground">tailwind.config.js</code> required.
          </li>
          <li>
            <span className="font-medium text-foreground">TypeScript</span> — components are
            written in TS; the <code className="font-mono text-xs text-foreground">@/*</code> path alias
            must point at your source directory.
          </li>
          <li>
            <span className="font-medium text-foreground">shadcn CLI</span> — a{" "}
            <code className="font-mono text-xs text-foreground">components.json</code> in the project
            root (create one with <code className="font-mono text-xs text-foreground">npx shadcn@latest init</code> if
            you don't have one yet).
          </li>
        </ul>
      </Section>

      <Section label="Next" title="Framework notes" id="guide-frameworks" tinted>
        <div className="space-y-2.5 text-sm">
          <p>
            vert-ui is framework-agnostic: anything that renders React 19 works — Next.js,
            Vite, TanStack Start, Remix. Components never import a router; where a component
            needs a link (<code className="font-mono text-xs">asChild</code> on Button, for example) you
            pass your own anchor or router link as the child.
          </p>
          <p>
            Ready? Head to{" "}
            <Link
              to="/guide/installation"
              className="font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Installation
            </Link>{" "}
            for the CLI walkthrough, or jump straight to the{" "}
            <Link
              to="/components"
              className="font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              component catalog
            </Link>
            .
          </p>
        </div>
      </Section>
    </GuidePage>
  )
}

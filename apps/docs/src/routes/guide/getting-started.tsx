import { Button, Field, Input } from "@vert-ui/ui"
import { createFileRoute, Link } from "@tanstack/react-router"
import { Callout, Code, GuidePage, Section, Steps } from "../../components/guide-page"

export const Route = createFileRoute("/guide/getting-started")({
  component: GettingStartedPage,
})

const fileTree = `src/
├── components/
│   └── vert-ui/
│       ├── button.tsx
│       └── field.tsx
├── lib/
│   └── vert-ui/
│       └── cn.ts
└── styles/
    └── vert.css`

const themeSnippet = `<!-- light (default) -->
<html data-tone="light">

<!-- dark tone: dark: variants now resolve to [data-tone='dark'] -->
<html data-tone="dark">

<!-- full preset: import styles/themes/slate.css first -->
<html data-theme="slate" data-tone="dark">`

const switchTheme = `// presets: slate, sand, midnight, rose, ocean
document.documentElement.setAttribute("data-theme", "slate")

// tone: "light" | "dark"
document.documentElement.setAttribute("data-tone", "dark")`

const formExample = `<Field label="Workspace name" description="Shown to everyone on your team.">
  {(field) => <Input {...field} defaultValue="Acme Inc." />}
</Field>

<Field label="Slug" error="Already taken.">
  {(field) => <Input {...field} defaultValue="acme" />}
</Field>

<Button>Save changes</Button>`

function GettingStartedPage() {
  return (
    <GuidePage
      title="Getting Started"
      intro="From an installed theme to a themed, accessible screen — five steps, each one a single command or a short snippet."
    >
      <Section label="Walkthrough" title="Your first five minutes" id="start-steps">
        <Steps
          items={[
            {
              title: "Install the theme",
              children: (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <Code>{`npx shadcn add @vert/vert`}</Code>
                  <p>
                    Import it after Tailwind in your CSS entry. Everything else — tokens,
                    focus rings, reduced-motion handling — comes from this file.
                  </p>
                  <Code>{`@import "tailwindcss";
@import "./styles/vert.css";`}</Code>
                </div>
              ),
            },
            {
              title: "Add a component",
              children: (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <Code>{`npx shadcn add @vert/button`}</Code>
                  <p>
                    The source lands in your repo and its npm dependencies are installed.
                    Import it from there — never from a library package.
                  </p>
                </div>
              ),
            },
            {
              title: "Render it",
              children: (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="grain rounded-xl border border-border/60 bg-background/70 p-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <Button>Save changes</Button>
                      <Button variant="outline">Cancel</Button>
                      <Button variant="glow">Deploy</Button>
                    </div>
                  </div>
                  <Code>{`import { Button } from "@/components/vert-ui/button"

<Button>Save changes</Button>
<Button variant="outline">Cancel</Button>
<Button variant="glow">Deploy</Button>`}</Code>
                </div>
              ),
            },
            {
              title: "Pick a tone and a theme",
              children: (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Tone is light or dark. A theme is a full token preset — import the ones
                    you use from <code className="font-mono text-xs text-foreground">styles/themes/</code>,
                    then switch with attributes on <code className="font-mono text-xs text-foreground">&lt;html&gt;</code>:
                  </p>
                  <Code>{themeSnippet}</Code>
                </div>
              ),
            },
            {
              title: "Compose a small screen",
              children: (
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="grain rounded-xl border border-border/60 bg-background/70 p-6">
                    <div className="mx-auto w-full max-w-sm space-y-4">
                      <Field
                        label="Workspace name"
                        description="Shown to everyone on your team."
                      >
                        {(field) => <Input {...field} defaultValue="Acme Inc." />}
                      </Field>
                      <Field label="Slug" error="Already taken.">
                        {(field) => <Input {...field} defaultValue="acme" />}
                      </Field>
                      <Button className="w-full">Save changes</Button>
                    </div>
                  </div>
                  <Code>{formExample}</Code>
                  <p>
                    Field wires label, description and error to the control with stable ids —
                    the accessible part is handled for you.
                  </p>
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section label="Layout" title="What your repo looks like now" id="start-tree">
        <div className="space-y-4 text-sm text-muted-foreground">
          <Code>{fileTree}</Code>
          <p>
            Three directories, all plain source. Nothing is generated, nothing is
            minified — this is the code you maintain from now on.
          </p>
        </div>
      </Section>

      <Section label="Theming" title="Switching themes at runtime" id="start-theming">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Both attributes are plain CSS hooks, so switching is instant and works without
            a re-render — persist the choice in localStorage and set it in your document
            head to avoid a flash on load:
          </p>
          <Code>{switchTheme}</Code>
          <Callout tone="info" title="The dark: variant follows data-tone">
            <p>
              The theme remaps Tailwind's <code className="font-mono text-xs">dark:</code>{" "}
              variant to <code className="font-mono text-xs">[data-tone='dark']</code>, so{" "}
              <code className="font-mono text-xs">dark:bg-surface</code> responds to your tone
              attribute, not the OS setting. An explicit tone always wins.
            </p>
          </Callout>
        </div>
      </Section>

      <Section label="Ownership" title="Make it yours" id="start-customize" tinted>
        <div className="space-y-2.5 text-sm">
          <p>
            Re-skin by editing the CSS variables at the top of{" "}
            <code className="font-mono text-xs">styles/vert.css</code> — brand, muted, accent,
            border, status colors, radii and shadows all live there. Change{" "}
            <code className="font-mono text-xs">--brand</code> and the whole interface follows.
          </p>
          <p>
            Components are edited the same way: they are your files now. The{" "}
            <code className="font-mono text-xs">cn()</code> helper merges Tailwind classes, so
            pass <code className="font-mono text-xs">className</code> overrides freely — every
            component accepts one.
          </p>
        </div>
      </Section>

      <Section label="Accessibility" title="What you get for free" id="start-a11y">
        <ul className="list-disc space-y-2.5 pl-5 text-sm text-muted-foreground">
          <li>WCAG AA contrast across 756 audited colour pairs, light and dark.</li>
          <li>
            Full keyboard support — focus order, arrow-key navigation, focus traps in
            overlays, visible focus rings.
          </li>
          <li>
            Screen-reader semantics: roles, labels and <code className="font-mono text-xs">aria-describedby</code> wiring
            are built in.
          </li>
          <li>
            <code className="font-mono text-xs">prefers-reduced-motion</code> respected; all
            animation is transform/opacity only.
          </li>
          <li>SSR-safe and usable at 320px with no layout shift.</li>
        </ul>
      </Section>

      <Section label="Next" title="Where to go from here" id="start-next">
        <div className="space-y-2.5 text-sm text-muted-foreground">
          <p>
            Each component page in the catalog has a live preview, usage examples, a full
            props table and accessibility notes:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button size="sm" variant="outline" asChild>
              <Link to="/components/button">Button</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/components/field">Field</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/components/dialog">Dialog</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link to="/components">Full catalog</Link>
            </Button>
          </div>
        </div>
      </Section>
    </GuidePage>
  )
}

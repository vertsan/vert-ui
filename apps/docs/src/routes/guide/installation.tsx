import { createFileRoute, Link } from "@tanstack/react-router"
import { Callout, Code, GuidePage, Section } from "../../components/guide-page"

export const Route = createFileRoute("/guide/installation")({
  component: InstallationPage,
})

const componentsJson = `{
  "registries": {
    "@vert": "https://vert-ui.dev/r/{name}.json"
  }
}`

const cssEntry = `@import "tailwindcss";
@import "./styles/vert.css"; /* path is relative to this file */`

const addComponent = `npx shadcn add @vert/button

# multiple at once
npx shadcn add @vert/button @vert/input @vert/card

# or straight from a URL — no registry alias needed
npx shadcn add https://vert-ui.dev/r/field.json`

const installOutput = `Installing components:
- components/vert-ui/button.tsx
- lib/vert-ui/cn.ts

Adding dependencies:
- @radix-ui/react-slot
- class-variance-authority`

function InstallationPage() {
  return (
    <GuidePage
      title="Installation"
      intro="Register the vert registry, install the theme once, then add components one by one — the CLI copies source into your repo and installs its dependencies."
    >
      <Section label="Step 1" title="Prerequisites" id="install-prereqs">
        <ul className="list-disc space-y-2.5 pl-5 text-sm text-muted-foreground">
          <li>A React 19 project with Tailwind CSS v4 wired up (CSS-first, no config file).</li>
          <li>
            A <code className="font-mono text-xs text-foreground">components.json</code> at the project
            root. The shadcn CLI uses it for paths and aliases — create one with{" "}
            <code className="font-mono text-xs text-foreground">npx shadcn@latest init</code>.
          </li>
          <li>
            The <code className="font-mono text-xs text-foreground">@/*</code> path alias in your{" "}
            <code className="font-mono text-xs text-foreground">tsconfig.json</code> pointing at your
            source directory, so installed files can import each other.
          </li>
        </ul>
      </Section>

      <Section label="Step 2" title="Register the vert registry" id="install-registry">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Add the <code className="font-mono text-xs text-foreground">registries</code> map to your{" "}
            <code className="font-mono text-xs text-foreground">components.json</code>. The alias can
            be anything; <code className="font-mono text-xs text-foreground">@vert</code> is the
            convention used throughout these docs.
          </p>
          <Code>{componentsJson}</Code>
          <p>
            After this, <code className="font-mono text-xs text-foreground">@vert/&lt;name&gt;</code> resolves
            to <code className="font-mono text-xs text-foreground">https://vert-ui.dev/r/&lt;name&gt;.json</code> —
            one JSON item per component, plus the theme and helper items.
          </p>
        </div>
      </Section>

      <Section label="Step 3" title="Install the theme" id="install-theme">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            The theme item carries the design tokens, the base styles and the ready-made
            themes. Install it once per project:
          </p>
          <Code>{`npx shadcn add @vert/vert`}</Code>
          <p>It writes these files into your repo:</p>
          <Code>{`styles/vert.css              tokens, utilities, base styles
styles/themes.css             data-theme bridges
styles/themes/slate.css       cool blue-gray preset
styles/themes/sand.css        warm beige preset
styles/themes/midnight.css    dark-first preset
styles/themes/rose.css        muted red preset
styles/themes/ocean.css       deep teal preset`}</Code>
          <p>
            Then import it from your CSS entry. Tailwind must come first — the theme relies
            on Tailwind v4's <code className="font-mono text-xs text-foreground">@theme</code> and{" "}
            <code className="font-mono text-xs text-foreground">@custom-variant</code> at-rules:
          </p>
          <Code>{cssEntry}</Code>
          <Callout tone="warning" title="Import order matters">
            <p>
              <code className="font-mono text-xs">@import "tailwindcss"</code> must precede the vert
              import. If your CSS entry is not at the project root, adjust the relative path
              (for example <code className="font-mono text-xs">../styles/vert.css</code> from{" "}
              <code className="font-mono text-xs">src/</code>).
            </p>
          </Callout>
        </div>
      </Section>

      <Section label="Step 4" title="Add your first component" id="install-component">
        <div className="space-y-4 text-sm text-muted-foreground">
          <Code>{addComponent}</Code>
          <p>For each component the CLI does three things:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              copies the source to{" "}
              <code className="font-mono text-xs text-foreground">components/vert-ui/&lt;name&gt;.tsx</code>,
              rewriting the shared <code className="font-mono text-xs text-foreground">cn()</code> import
              to <code className="font-mono text-xs text-foreground">@/lib/vert-ui/cn</code>;
            </li>
            <li>
              installs the <code className="font-mono text-xs text-foreground">@vert/vert-cn</code> helper
              (<code className="font-mono text-xs text-foreground">lib/vert-ui/cn.ts</code>) the first
              time it is needed;
            </li>
            <li>
              adds the component's npm dependencies — Radix primitives,{" "}
              <code className="font-mono text-xs text-foreground">class-variance-authority</code> and
              friends — to your <code className="font-mono text-xs text-foreground">package.json</code>.
            </li>
          </ul>
          <Code>{installOutput}</Code>
          <p>
            Render it straight away — no provider, no wrapper, no library import:
          </p>
          <Code>{`import { Button } from "@/components/vert-ui/button"

export function Example() {
  return <Button>Save changes</Button>
}`}</Code>
        </div>
      </Section>

      <Section label="Alternative" title="Manual installation" id="install-manual">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            No CLI? Every registry item is plain source in a JSON envelope. Fetch the item
            and paste the file contents into your project:
          </p>
          <Code>{`curl https://vert-ui.dev/r/button.json`}</Code>
          <p>
            Each entry in <code className="font-mono text-xs text-foreground">files[].content</code> is
            ready to paste — the <code className="font-mono text-xs text-foreground">cn()</code> import is
            already rewritten and the npm dependencies are listed in{" "}
            <code className="font-mono text-xs text-foreground">dependencies</code>. You still need the{" "}
            <code className="font-mono text-xs text-foreground">vert-cn</code> helper (item{" "}
            <code className="font-mono text-xs text-foreground">vert-cn</code>) and the theme (item{" "}
            <code className="font-mono text-xs text-foreground">vert</code>) by the same method.
          </p>
        </div>
      </Section>

      <Section label="Maintenance" title="Updates and customization" id="install-updates" tinted>
        <div className="space-y-2.5 text-sm">
          <p>
            You own the installed files. Edit them freely — that is the whole delivery
            model. Two things to keep in mind:
          </p>
          <p>
            <strong>Re-running</strong>{" "}
            <code className="font-mono text-xs">npx shadcn add @vert/button</code> overwrites the local
            file with the upstream source. Commit first so{" "}
            <code className="font-mono text-xs">git diff</code> can show you what changed.
          </p>
          <p>
            <strong>Never blindly overwrite</strong> a component you have heavily customized —
            port the upstream changes by hand instead.
          </p>
        </div>
      </Section>

      <Section label="Next" title="Verify and continue" id="install-next">
        <div className="space-y-2.5 text-sm text-muted-foreground">
          <p>
            Start your dev server — the component should render with the vert theme applied.
            If styles are missing, check that the Tailwind import comes first and that your{" "}
            <code className="font-mono text-xs text-foreground">components.json</code> registry map
            matches the snippet above.
          </p>
          <p>
            Continue with{" "}
            <Link
              to="/guide/getting-started"
              className="font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Getting Started
            </Link>{" "}
            for themes, tones and your first composed screen — or browse the{" "}
            <Link
              to="/components"
              className="font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

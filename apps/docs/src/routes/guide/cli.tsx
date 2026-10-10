import { createFileRoute, Link } from "@tanstack/react-router"
import { Callout, Code, GuidePage, Section } from "../../components/guide-page"

export const Route = createFileRoute("/guide/cli")({
  component: CliPage,
})

const cliInstall = `# any package manager works
pnpm dlx @vert-ui/cli --help
npx @vert-ui/cli --help
bunx @vert-ui/cli --help`

const initDemo = `$ vert-ui init
✓ Created ./components.json
  Registered the @vert registry.
  Next: add your first component, e.g. \`vert-ui add button\``

const addDemo = `$ vert-ui add accordion
› Resolving accordion
✓ components/vert-ui/accordion.tsx
✓ lib/vert-ui/cn.ts
✓ styles/motion.css
  dependencies: @radix-ui/react-accordion, class-variance-authority`

const specifiers = `# bare name — resolved against the default (@vert) registry
vert-ui add button

# aliased — "vert" can be any key of the "registries" map
vert-ui add @vert/button

# direct URL — a self-hosted registry on another domain
vert-ui add https://cdn.example.com/registry/button.json

# local file — a registry item on disk (nice when iterating on a registry)
vert-ui add ./registry/button.json`

const flags = `--cwd <dir>      work in <dir> instead of the current directory
--dry-run        show what would change without touching disk
--overwrite      replace files that already exist
--no-install     skip running your package manager
--json           machine-readable output (view, docs, search)
-s, --silent     suppress non-error output`

function CliPage() {
  return (
    <GuidePage
      title="Command line"
      intro="vert-ui ships its own CLI — init, add, view, docs, search, build and diff. Components are copied into your repo as source you own, with animations that work without installing a theme."
    >
      <Section label="Step 1" title="Install the CLI" id="cli-install">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            No global install needed. Run it per project via your package manager — the bin is{" "}
            <code className="font-mono text-xs text-foreground">vert-ui</code>:
          </p>
          <Code>{cliInstall}</Code>
          <p>
            The CLI reads <code className="font-mono text-xs text-foreground">components.json</code> in
            your project root. Point it elsewhere with{" "}
            <code className="font-mono text-xs text-foreground">--cwd</code>.
          </p>
        </div>
      </Section>

      <Section label="Step 2" title="Initialize" id="cli-init">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <code className="font-mono text-xs text-foreground">init</code> writes a{" "}
            <code className="font-mono text-xs text-foreground">components.json</code> with sensible
            path aliases and the <code className="font-mono text-xs text-foreground">@vert</code> registry
            map:
          </p>
          <Code>{`vert-ui init
vert-ui init --css src/globals.css --base-color zinc
vert-ui init --force   # overwrite an existing components.json`}</Code>
          <Code>{initDemo}</Code>
        </div>
      </Section>

      <Section label="Step 3" title="Add components" id="cli-add">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <code className="font-mono text-xs text-foreground">add</code> resolves the item and every
            <code className="font-mono text-xs text-foreground"> registryDependencies</code> it declares,
            copies each file into your repo, then installs the npm dependencies with your package
            manager.
          </p>
          <Code>{`vert-ui add button
vert-ui add button input card     # multiple at once
vert-ui add accordion --dry-run   # preview, write nothing
vert-ui add accordion --overwrite # replace files you have already customized
vert-ui add accordion --no-install`}</Code>
          <p>Add an accordion to a brand-new project — note the third file:</p>
          <Code>{addDemo}</Code>
          <p>
            <code className="font-mono text-xs text-foreground">styles/motion.css</code> is the
            <code className="font-mono text-xs text-foreground">vert-motion</code> item: shared keyframes
            for every animated component. Accordion, collapsible, dialog, dropdown menu, hover card,
            popover, select, tabs, tooltip, toast, progress and skeleton all install it — so a
            component animates out of the box even if you never install the full theme. You get the
            same file once across all of them.
          </p>
        </div>
      </Section>

      <Section label="Registry specifiers" title="Where items come from" id="cli-specifiers">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Every command that loads an item accepts the same four shapes, in this order of
            resolution:
          </p>
          <Code>{specifiers}</Code>
          <Callout tone="info" title="Local files make registries easy to build and test">
            <p>
              Point at a JSON file on disk and <code className="font-mono text-xs">add</code> will follow its
              registry dependencies and install npm packages exactly as it would for the live
              registry.
            </p>
          </Callout>
        </div>
      </Section>

      <Section label="Inspect" title="view, docs and search" id="cli-inspect">
        <div className="space-y-4 text-sm text-muted-foreground">
          <Code>{`vert-ui view accordion          # description, deps, files
vert-ui view accordion --json  # the raw registry item
vert-ui docs                   # list the whole registry
vert-ui docs accordion         # print the docs link for a component
vert-ui search                 # browse all items
vert-ui search input           # filter by name, title or description`}</Code>
          <p>
            <code className="font-mono text-xs text-foreground">search</code> reads
            <code className="font-mono text-xs text-foreground"> registry.json</code> from the registry
            site. It respects your aliases — search{" "}
            <code className="font-mono text-xs text-foreground">--registry @vert acme</code> to search
            multiple registries in one pass.
          </p>
        </div>
      </Section>

      <Section label="Maintain" title="build and diff" id="cli-maintain">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            <code className="font-mono text-xs text-foreground">build</code> turns a source registry —
            a <code className="font-mono text-xs text-foreground">registry.json</code> whose items reference
            files by path — into shadcn-compatible JSON with the file contents embedded:
          </p>
          <Code>{`vert-ui build registry.json         # writes public/r/<name>.json + registry.json
vert-ui build --output dist/registry`}</Code>
          <p>
            <code className="font-mono text-xs text-foreground">diff</code> compares what is installed
            in your repo against the registry and prints a unified patch for anything that drifted:
          </p>
          <Code>{`$ vert-ui diff accordion
✓ components/vert-ui/accordion.tsx is up to date
  Everything is up to date.`}</Code>
          <p>
            Commit before re-adding, and <code className="font-mono text-xs text-foreground">diff</code>{" "}
            shows exactly what an upstream update would change.
          </p>
        </div>
      </Section>

      <Section label="Reference" title="Flags" id="cli-flags">
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>The useful flags across all commands:</p>
          <Code>{flags}</Code>
        </div>
      </Section>

      <Section label="Next" title="Install the theme and build" id="cli-next">
        <div className="space-y-2.5 text-sm text-muted-foreground">
          <p>
            The CLI gives you source, not a black box. Install the theme once so components pick up
            the full vert look, then follow Getting Started to compose screens.
          </p>
          <p>
            Continue with{" "}
            <Link
              to="/guide/installation"
              className="font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Installation
            </Link>{" "}
            or{" "}
            <Link
              to="/guide/getting-started"
              className="font-medium text-foreground underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Getting Started
            </Link>
            .
          </p>
        </div>
      </Section>
    </GuidePage>
  )
}
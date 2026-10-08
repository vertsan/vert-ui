# vert-ui

**Grow with precision.**

Calm, fresh, green-accented React components with soft motion. Original code, shadcn-compatible
copy-paste delivery — no runtime lock-in.

- **Original** — every component is written from scratch; patterns are studied, code and
  visuals never copied.
- **Accessible** — WCAG AA contrast (756 audited colour pairs), keyboard and screen-reader
  support, `prefers-reduced-motion` respected, usable at 320px, SSR-safe.
- **Themeable** — flat design tokens in the package, semantic `data-theme` / `data-tone`
  themes on the consumer side. Light and dark are both first-class.
- **Copy-paste ready** — shadcn-compatible registry items install straight into your repo.
  You own the code.

## Install

With the [shadcn CLI](https://ui.shadcn.com/docs/cli) pointed at the vert registry:

```jsonc
// components.json
{
  "registries": {
    "@vert": "https://vert-ui.dev/r/{name}.json"
  }
}
```

```bash
npx shadcn add @vert/button
# or a one-off URL
npx shadcn add https://vert-ui.dev/r/field.json
```

Every component depends on `@vert/cn` (the `cn()` helper) and the `@vert` style item carries
the theme. Your CSS entry must import Tailwind first:

```css
@import "tailwindcss";
@import "vert"; /* from the registry: styles/vert.css */
```

Manual alternative: copy files from `packages/ui/src/components` and `packages/ui/src/lib/cn.ts`.

## Documentation

The docs app is the reference: live preview, usage examples, props table and accessibility
notes for every component.

```bash
pnpm install
pnpm --filter @vert-ui/docs dev # http://localhost:3000
```

## Repository

```
apps/docs       TanStack Start docs site (component catalog + doc pages)
packages/ui     The component library (raw TS, consumed via source)
packages/registry  shadcn-compatible registry generator
packages/cli    vert-ui CLI (init, add, diff — in progress)
scripts/        check-contrast.ts — WCAG AA audit over the theme tokens
```

## Development

```bash
pnpm --filter @vert-ui/ui exec vitest run   # unit tests (vitest + jsdom)
pnpm exec tsc -p packages/ui/tsconfig.json --noEmit   # typecheck library
pnpm exec tsc -p apps/docs/tsconfig.json --noEmit     # typecheck docs
pnpm exec tsx scripts/check-contrast.ts    # contrast audit (must stay 0 failed)
pnpm exec tsx packages/registry/src/build.ts  # regenerate registry JSON
pnpm --filter @vert-ui/docs build          # production docs build
```

CI runs the same five checks on every push and pull request.

## Releasing

Versions and changelogs are managed with [changesets](https://github.com/changesets/changesets):

```bash
pnpm exec changeset          # record a change
pnpm exec changeset version  # bump versions + write CHANGELOGs
```

## License

MIT © vert-ui

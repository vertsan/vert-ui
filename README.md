<p align="center">
  <img src="apps/docs/public/vert-logo.svg" alt="vert-ui" width="56" height="56" />
</p>

<h1 align="center">vert-ui</h1>

<p align="center">
  <strong>Grow with precision.</strong><br />
  Calm, fresh, green-accented React&nbsp;19 components with soft motion.<br />
  Original code, shadcn-compatible copy-paste delivery — zero runtime lock-in.
</p>

<p align="center">
  <a href="#install"><img alt="npm" src="https://img.shields.io/npm/v/@vert-ui/ui?color=10b981&label=@vert-ui/ui" /></a>&nbsp;
  <a href="LICENSE"><img alt="MIT" src="https://img.shields.io/badge/license-MIT-green" /></a>&nbsp;
  <a href="#components"><img alt="28 components" src="https://img.shields.io/badge/components-28-10b981" /></a>&nbsp;
  <a href="#accessibility"><img alt="756 contrast pairs" src="https://img.shields.io/badge/contrast_pairs-756-10b981" /></a>
</p>

---

## Highlights

| | |
| --- | --- |
| 🌱 **Original** | Every component is written from scratch. Patterns are studied; code and visuals are never copied. |
| ♿ **Accessible** | WCAG AA contrast (756 audited colour pairs), keyboard & screen-reader support, `prefers-reduced-motion` respected, usable at 320 px, SSR-safe. |
| 🎨 **Themeable** | Flat design tokens in the package, semantic `data-theme` / `data-tone` on the consumer side. Five ready-made presets — **Slate · Sand · Midnight · Rose · Ocean** — plus light and dark as first-class citizens. |
| 📋 **Copy-paste ready** | shadcn-compatible registry items install straight into your codebase. You own the source, no wrapper dependency. |

---

## Components

28 components, 30 registry items:

| Category | Components |
| --- | --- |
| **Inputs** | Button · Input · Textarea · Checkbox · Radio Group · Select · Switch |
| **Layout** | Card · Separator · Skeleton · Table · Field · Field Group |
| **Feedback** | Alert · Badge · Progress · Toast |
| **Overlay** | Dialog · Dropdown Menu · Popover · Tooltip · Hover Card · Command |
| **Disclosure** | Accordion · Collapsible · Tabs |
| **Data display** | Avatar · Carousel · Label |

---

## Install

### Prerequisites

- React **19** project
- Tailwind CSS **v4** (CSS-first — `@import "tailwindcss"`)
- [shadcn CLI](https://ui.shadcn.com/docs/cli) initialised (`npx shadcn@latest init`)
- `@/*` path alias in `tsconfig.json`

### 1 — Point at the vert registry

```jsonc
// components.json
{
  "registries": {
    "@vert": "https://vert-ui.dev/r/{name}.json"
  }
}
```

### 2 — Install the theme

```bash
npx shadcn add @vert/vert
```

This emits:

- `styles/vert.css` — tokens, utilities, base styles
- `styles/themes.css` — theme bridges
- Five presets — `styles/themes/slate.css`, `sand.css`, `midnight.css`, `rose.css`, `ocean.css`

### 3 — Import in your global CSS

Tailwind **must** come first:

```css
@import "tailwindcss";
@import "./styles/vert.css";
```

### 4 — Add components

```bash
# one at a time
npx shadcn add @vert/button

# batch
npx shadcn add @vert/button @vert/input @vert/card

# or via direct URL (no registry config needed)
npx shadcn add https://vert-ui.dev/r/field.json
```

The CLI copies component source into `components/vert-ui/<name>.tsx`, installs the
`cn()` helper (`lib/vert-ui/cn.ts`) on first need, rewrites imports, and pulls in required
dependencies automatically.

### Manual alternative

Copy files from [`packages/ui/src/components`](packages/ui/src/components) and
[`packages/ui/src/lib/cn.ts`](packages/ui/src/lib/cn.ts) directly into your project.

---

## Theming

vert-ui ships two parallel token vocabularies that coexist:

| Layer | Entry | Tokens | Controlled by |
| --- | --- | --- | --- |
| **Flat** (library internals / docs) | `packages/ui/src/styles/index.css` | `--color-primary`, `--color-muted`, `--color-ring`, … | `.dark` class or `prefers-color-scheme` |
| **Semantic** (consumer-facing engine) | `styles/vert.css` (registry item) | `--brand`, `--surface`, `--accent`, `--muted`, … | `data-theme="slate\|sand\|…"` + `data-tone="light\|dark"` on `<html>` |

`vert.css` aliases semantic vars to the flat set, so the same Tailwind utilities resolve in
both entries. Switch themes at runtime by toggling the `data-theme` and `data-tone` attributes.

### Presets

| Preset | Tone |
| --- | --- |
| **Slate** | Cool neutral with emerald accent |
| **Sand** | Warm earth tones |
| **Midnight** | Deep dark with vivid highlights |
| **Rose** | Soft pink undertones |
| **Ocean** | Blue-teal palette |

---

## Accessibility

- **Contrast** — 756 colour pairs (384 semantic + 372 flat) audited against WCAG AA. Run the
  audit yourself:
  ```bash
  pnpm exec tsx scripts/check-contrast.ts
  ```
- **Keyboard** — every interactive component is fully keyboard-navigable.
- **Screen readers** — semantic HTML, ARIA attributes, and Radix primitives provide a solid
  accessible tree.
- **Reduced motion** — all animation respects `prefers-reduced-motion: reduce`.
- **Responsive** — components are tested down to 320 px viewport width.
- **SSR-safe** — no `window`/`document` access at module scope; compatible with server rendering.

---

## Documentation

The docs app is the full reference — live preview, usage examples, props table and accessibility
notes for every component.

```bash
pnpm install
pnpm --filter @vert-ui/docs dev   # → http://localhost:3000
```

---

## Repository layout

```
apps/docs           TanStack Start docs site (catalog + per-component pages)
packages/ui         Component library (consumed as raw TS, no build step)
packages/registry   shadcn-compatible registry generator
packages/cli        vert-ui CLI — init, add, diff (in progress)
scripts/            check-contrast.ts — WCAG AA audit over the theme tokens
styles/             Consumer-facing theme files (vert.css, themes/, presets)
```

---

## Development

```bash
# Install
pnpm install

# Docs dev server
pnpm --filter @vert-ui/docs dev

# Unit tests (vitest + jsdom, 28 components)
pnpm --filter @vert-ui/ui exec vitest run

# Single test file
pnpm --filter @vert-ui/ui exec vitest run src/components/button.test.tsx

# Typecheck
pnpm exec tsc -p packages/ui/tsconfig.json --noEmit
pnpm exec tsc -p apps/docs/tsconfig.json --noEmit

# Contrast audit (must stay 756 passed / 0 failed)
pnpm exec tsx scripts/check-contrast.ts

# Regenerate registry JSON (run after any component / theme edit)
pnpm exec tsx packages/registry/src/build.ts

# Production docs build
pnpm --filter @vert-ui/docs build
```

CI runs the same six checks — both typechecks, unit tests, contrast audit, registry build, and
docs build — on every push and pull request.

---

## Releasing

Versions and changelogs are managed with
[Changesets](https://github.com/changesets/changesets):

```bash
pnpm exec changeset            # record a change
pnpm exec changeset version    # bump versions + write CHANGELOGs
pnpm exec changeset publish    # publish to npm
```

Current version: **0.1.0** — see
[`packages/ui/CHANGELOG.md`](packages/ui/CHANGELOG.md) for the full history.

---

## Contributing

1. Fork the repo and create a feature branch.
2. `pnpm install` at the root.
3. Make your changes — follow the existing component conventions (`cva` variants, `cn()`,
   `data-slot`, `asChild` via Radix Slot, ref forwarding, `displayName`).
4. Add / update tests (`src/components/<name>.test.tsx`).
5. Run the full verification suite:
   ```bash
   pnpm --filter @vert-ui/ui exec vitest run
   pnpm exec tsc -p packages/ui/tsconfig.json --noEmit
   pnpm exec tsx scripts/check-contrast.ts
   pnpm exec tsx packages/registry/src/build.ts
   pnpm --filter @vert-ui/docs build
   ```
6. Open a PR against `main`.

---

## License

[MIT](LICENSE) © vert-ui

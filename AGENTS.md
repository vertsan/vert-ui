<!-- BEGIN:turborepo-agent-rules -->

# This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": false` in the root `turbo.json` or `turbo.jsonc` to opt out; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.
<!-- END:turborepo-agent-rules -->

# vert-ui

Original React 19 + TypeScript UI library, shipped as shadcn-compatible copy-paste components.
pnpm 10 + Turborepo monorepo. Brand facts are in `BRAND.md` (tagline "Grow with precision");
the full product spec lives only in the maintainer's brief — there is no other spec file.

## Ground rules (from the maintainer brief)

- Original code only. shadcn/ui, Aceternity UI, React Bits, Magic UI may be studied for
  principles; never reuse their code, names, or exact visuals.
- Components stay framework-agnostic: no `next/*` / router imports; cross-framework links use
  `asChild` (Radix Slot). No TanStack Query in `@vert-ui/ui` (docs demos only).
- Quality bar: WCAG AA contrast, keyboard + screen-reader support, `prefers-reduced-motion`,
  transform/opacity-only animation, usable at 320px, SSR-safe, no layout shift.
- Work in the maintainer's 6 phases and **stop after each phase for approval**; ask at most 3
  clarifying questions before starting to code. Phases 1–2 (brand/tokens, scaffold + 5 core
  components) are committed; Phase 3 (Alert, Dialog, Dropdown Menu, Progress, Select, Separator,
  Switch, Tabs, Tooltip), Phase 4 (Accordion, Avatar, Collapsible, Label, Popover, Radio
  Group, Skeleton, Table, Toast) and Phase 5 (form batch: Field + FieldGroup wrappers,
  Input/Textarea invalid styling, docs routes for Checkbox, Field, Input, Textarea) are
  implemented — tests, registry items and docs routes for each — and await maintainer review
  before Phase 6.
- Per component deliver: TS source, props table, 2–3 usage examples, accessibility notes.

## Commands (verified)

- Install: `pnpm install`
- Docs dev: `pnpm --filter @vert-ui/docs dev` (port 3000); root `pnpm dev` is the same via turbo.
- Docs build: `pnpm --filter @vert-ui/docs build` — passes (benign "use client" warnings).
- Tests: only `@vert-ui/ui` has tests.
  `pnpm --filter @vert-ui/ui exec vitest run` (120/120, 24 files);
  single file: `pnpm --filter @vert-ui/ui exec vitest run src/components/button.test.tsx`.
  jsdom polyfills (pointer capture, scrollIntoView, ResizeObserver, matchMedia) live in
  `src/test-setup.ts`; jest-dom matchers come from `@testing-library/jest-dom/vitest`.
- Typecheck: no package defines a `typecheck` script. Use
  `pnpm exec tsc -p apps/docs/tsconfig.json --noEmit` and
  `pnpm exec tsc -p packages/ui/tsconfig.json --noEmit` — both pass.
- Registry build: `pnpm exec tsx packages/registry/src/build.ts` regenerates
  `packages/registry/registry.json` + `public/r/*.json`. Run after every component/theme edit
  and commit the generated JSON.
- Contrast audit: `pnpm exec tsx scripts/check-contrast.ts` (must stay 256 passed / 0 failed).
  Its header comment "Run: pnpm contrast" is stale — no such script exists.
- Format: `pnpm format` (see Known failures before running it repo-wide).

### Root turbo commands are no-ops

`pnpm lint`, `pnpm typecheck`, `pnpm test` run `turbo run …` and exit 0 with
"No tasks were executed" — no workspace package defines `lint`/`typecheck`/`test` scripts.
Never treat them as evidence that anything passed.

## Monorepo layout

- `packages/ui` — the library. Consumed as raw TS (`exports` → `./src/index.ts`), no build step;
  `files: ["dist"]` in its package.json is aspirational. Tests colocated as
  `src/components/*.test.tsx` (vitest, jsdom, jest-dom, setup `src/test-setup.ts`).
- `packages/registry` — shadcn-compatible registry generator (see below).
- `packages/cli` — stub (`init`, `add`, `diff` not implemented).
- `apps/docs` — TanStack Start docs site; the only package with real scripts.
- `.github/workflows` is empty (no CI yet). Releases use changesets
  (`baseBranch: main`, docs app ignored).

## Registry (`packages/registry`)

- The `items` array in `src/build.ts` is the source of truth. A component is invisible to
  `npx shadcn add <vert>` until you add an item there (sources are read from `packages/ui/src`,
  embedded content is written into `public/r/<name>.json`).
- Item dependency versions resolve from `@vert-ui/ui` **`dependencies`** only — a devDependency
  (e.g. `@radix-ui/react-checkbox`) makes the build fail.
- Only `from '../lib/cn'` is rewritten to `@/lib/vert-ui/cn` in embedded content. Components must
  import `cn` from `../lib/cn` (all of them do; `src/lib/utils.ts` was deleted because
  `../lib/utils` is neither rewritten nor emitted). The rewrite regex accepts either quote style.
- The consumer CSS entry must `@import "tailwindcss"` *before* the `vert` style item.

## Theme system — two parallel vocabularies (do not mix)

- `packages/ui/src/styles/index.css` (= `base.css` + `dark.css` + `themes.css`): flat tokens
  (`--color-primary`, `--color-muted`, `--color-ring`, `--color-card`), dark via `.dark` class +
  `prefers-color-scheme`. This is what the docs app imports, via the relative path
  `../../../packages/ui/src/styles/index.css` from `apps/docs/src/styles.css` — moving either
  file breaks it silently.
- `styles/vert.css` + `styles/themes.css` + `styles/themes/*.css` (registry item `vert`, the
  consumer-facing engine): semantic raw vars (`--brand`, `--surface`, `--accent`, `--muted`) set
  per `data-theme="slate|sand|midnight"` + `data-tone="light|dark"` on `<html>`; the `dark:`
  variant is remapped to `data-tone="dark"` via `@custom-variant`; motion tokens are
  `--duration-*` / `--ease-*` (the index.css path uses `--motion-duration-*`).
- Components were written against a mix of both: Button/Input/Textarea/Badge/Card use
  `bg-primary` / `bg-accent` / `ring-ring`; Checkbox uses `bg-surface` / `bg-brand` /
  `shadow-soft`. Flat tokens now cover the whole set (`--color-accent`, `--color-secondary`,
  `--color-input`, `--color-border-strong`, `--color-ring`, status `--color-*` +
  `--color-*-soft`), and `vert.css` aliases them to the semantic vars, so the same utility class
  resolves in both entries. Still check which CSS entry you are styling for before copying a
  class from another component.
- Tailwind v4 has **no `--duration-*` namespace**, so `duration-fast` generates nothing — use a
  literal (`duration-[140ms]`), as `checkbox.tsx` does. The `--duration-*` vars exist only for
  hand-written CSS.
- Theme files use hex + oklch pairs; after any token change run `scripts/check-contrast.ts`.

## Tailwind scans only `apps/docs`

Class detection does not reach `packages/ui/src`, so component classes only ship in the docs
build because `apps/docs/src/styles.css` declares `@source "../../../packages/ui/src";`
(three levels up from that file — `../../` is wrong) after the `@import "tailwindcss"` line.
Verified by grepping the built CSS (`.output/public/assets/*.css`) for `.bg-primary`,
`.min-w-\[12rem\]`, `state=checked`. Remove or mis-path that line and component styles vanish.

## Component conventions

- cva variants (`variant`, `size`), `cn()` class merge, `data-slot` + `data-variant` +
  `data-size` (+ `data-invalid`, `aria-*`) for styling states, `asChild` via Radix Slot,
  `displayName`, ref forwarding, export both the component and its variant factory
  (`buttonVariants`).
- One barrel: `packages/ui/src/index.ts` just re-exports `./components`, so add new components to
  `packages/ui/src/components/index.ts` only (every component, including Checkbox, is exported).
- CSS entrypoints: `.grain` / `.luminous-border` utilities and the global reduced-motion
  override live in `styles/index.css`; the same reduced-motion block is duplicated in
  `vert.css` (they drift independently).

## Docs app (`apps/docs`)

- TanStack Start + file router. `src/routeTree.gen.ts` is generated (`pnpm generate-routes` /
  the vite plugin), eslint-ignored — never hand-edit.
- Component docs live at `src/routes/components/<name>.tsx` (one route each) and all render the
  shared `src/components/doc-page.tsx` shell (preview, examples, props table, a11y notes).
  `routes/components/index.tsx` is the catalog; add new pages there. After adding a route run
  `pnpm --filter @vert-ui/docs generate-routes`.
- Lint config at root covers `**/*.{ts,tsx}` incl. react-hooks + jsx-a11y rules, but see below.

## Known failures (re-verify; don't assume you caused them)

- `packages/cli`: `src/index.ts` has no exports while `bin.ts` / `index.test.ts` import
  `createProgram` from it → `pnpm --filter @vert-ui/cli build` and typecheck fail.
- ESLint is configured (`eslint.config.js`) but **not installed** — `pnpm exec eslint` errors.
  Do not claim lint passed unless you installed eslint + typescript-eslint +
  eslint-plugin-react-hooks + eslint-plugin-jsx-a11y + eslint-config-prettier first.
- `pnpm format` rewrites nearly every source file: `.prettierrc` is singleQuote/no-semi while
  most existing components use double quotes/semicolons. Format only files you touched, or agree
  on a repo-wide format first.
- `packages/ui/.vitest/json/output.json` is a committed test artifact, not source.

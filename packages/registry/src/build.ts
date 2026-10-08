/**
 * vert-ui registry builder.
 *
 * Reads component sources from `packages/ui/src`, embeds their content and
 * emits a shadcn-compatible registry:
 *
 *   packages/registry/registry.json          catalog (generated source of truth)
 *   packages/registry/public/r/registry.json catalog, deployed as a static asset
 *   packages/registry/public/r/<name>.json   one item per component (content embedded)
 *
 * Deployed layout supports both install styles:
 *   npx shadcn add https://vert-ui.dev/r/button.json
 *   npx shadcn add @vert/button   (registries: { "@vert": ".../r/{name}.json" })
 *
 * Relative `../lib/cn` imports are rewritten to the `@/lib/vert-ui/cn` alias so
 * installed files resolve in consumer projects (tsconfig paths configured by init).
 *
 * Registry base URL (used for registryDependencies and item urls) defaults to
 * https://vert-ui.dev/r and can be overridden with VERT_UI_REGISTRY_URL.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

type ItemType = 'registry:lib' | 'registry:style' | 'registry:component'

interface ItemFile {
  /** Source file relative to packages/ui/src */
  source: string
  /** Install path relative to the consumer project root */
  path: string
}

interface ItemDef {
  name: string
  type: ItemType
  title: string
  description: string
  /** npm dependencies (names only; versions resolved from packages/ui/package.json) */
  dependencies?: string[]
  /** registry item names this item needs installed first */
  registryDependencies?: string[]
  files: ItemFile[]
}

interface BuiltFile {
  path: string
  type: ItemType
  content?: string
}

const here = dirname(fileURLToPath(import.meta.url))
const registryRoot = resolve(here, '..')
const uiSrc = resolve(registryRoot, '..', 'ui', 'src')
const uiPackagePath = resolve(registryRoot, '..', 'ui', 'package.json')

const baseUrl = (process.env.VERT_UI_REGISTRY_URL ?? 'https://vert-ui.dev/r').replace(/\/$/, '')

const INDEX_SCHEMA = 'https://ui.shadcn.com/schema/registry.json'
const ITEM_SCHEMA = 'https://ui.shadcn.com/schema/registry-item.json'

/** Import rewrites applied to embedded content (consumer-project layout). */
const importRewrites: Array<[RegExp, string]> = [
  [/from (['"])\.\.\/lib\/cn\1/g, "from '@/lib/vert-ui/cn'"],
]

const items: ItemDef[] = [
  {
    name: 'vert',
    type: 'registry:style',
    title: 'Theme',
    description:
      'vert-ui theme engine: design tokens, ready-made themes and base styles. Requires @import "tailwindcss" first.',
    files: [
      { source: 'styles/vert.css', path: 'styles/vert.css' },
      { source: 'styles/themes.css', path: 'styles/themes.css' },
      { source: 'styles/themes/slate.css', path: 'styles/themes/slate.css' },
      { source: 'styles/themes/sand.css', path: 'styles/themes/sand.css' },
      { source: 'styles/themes/midnight.css', path: 'styles/themes/midnight.css' },
    ],
  },
  {
    name: 'vert-cn',
    type: 'registry:lib',
    title: 'cn()',
    description: 'Class name utility: clsx + tailwind-merge.',
    dependencies: ['clsx', 'tailwind-merge'],
    files: [{ source: 'lib/cn.ts', path: 'lib/vert-ui/cn.ts' }],
  },
  {
    name: 'button',
    type: 'registry:component',
    title: 'Button',
    description: 'Button with variants, sizes, loading state and asChild slot support.',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/button.tsx', path: 'components/vert-ui/button.tsx' }],
  },
  {
    name: 'input',
    type: 'registry:component',
    title: 'Input',
    description: 'Single-line text field with validation and adornment-ready sizing.',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/input.tsx', path: 'components/vert-ui/input.tsx' }],
  },
  {
    name: 'textarea',
    type: 'registry:component',
    title: 'Textarea',
    description: 'Multi-line text field with validation and resizable height.',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/textarea.tsx', path: 'components/vert-ui/textarea.tsx' }],
  },
  {
    name: 'checkbox',
    type: 'registry:component',
    title: 'Checkbox',
    description: 'Accessible checkbox with indeterminate state, powered by Radix UI.',
    dependencies: ['@radix-ui/react-checkbox', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/checkbox.tsx', path: 'components/vert-ui/checkbox.tsx' }],
  },
  {
    name: 'badge',
    type: 'registry:component',
    title: 'Badge',
    description: 'Compact status label with semantic color variants and dot mode.',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/badge.tsx', path: 'components/vert-ui/badge.tsx' }],
  },
  {
    name: 'field',
    type: 'registry:component',
    title: 'Field',
    description:
      'Form field wrapper wiring label, description and error to the control with aria-describedby.',
    dependencies: [],
    registryDependencies: ['vert-cn', 'label'],
    files: [{ source: 'components/field.tsx', path: 'components/vert-ui/field.tsx' }],
  },
  {
    name: 'alert',
    type: 'registry:component',
    title: 'Alert',
    description: 'Inline message block with semantic status variants and optional icon.',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/alert.tsx', path: 'components/vert-ui/alert.tsx' }],
  },
  {
    name: 'separator',
    type: 'registry:component',
    title: 'Separator',
    description: 'Horizontal or vertical divider, decorative or exposed to assistive tech.',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/separator.tsx', path: 'components/vert-ui/separator.tsx' }],
  },
  {
    name: 'progress',
    type: 'registry:component',
    title: 'Progress',
    description: 'Progress bar with determinate and indeterminate states, powered by Radix UI.',
    dependencies: ['@radix-ui/react-progress', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/progress.tsx', path: 'components/vert-ui/progress.tsx' }],
  },
  {
    name: 'switch',
    type: 'registry:component',
    title: 'Switch',
    description: 'Immediate on/off control with keyboard support, powered by Radix UI.',
    dependencies: ['@radix-ui/react-switch', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/switch.tsx', path: 'components/vert-ui/switch.tsx' }],
  },
  {
    name: 'tabs',
    type: 'registry:component',
    title: 'Tabs',
    description: 'Tabbed panels with arrow-key navigation, powered by Radix UI.',
    dependencies: ['@radix-ui/react-tabs', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/tabs.tsx', path: 'components/vert-ui/tabs.tsx' }],
  },
  {
    name: 'tooltip',
    type: 'registry:component',
    title: 'Tooltip',
    description: 'Hover/focus bubble linked with aria-describedby, powered by Radix UI.',
    dependencies: ['@radix-ui/react-tooltip'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/tooltip.tsx', path: 'components/vert-ui/tooltip.tsx' }],
  },
  {
    name: 'dropdown-menu',
    type: 'registry:component',
    title: 'Dropdown Menu',
    description: 'Menu with items, checkboxes and radio groups, powered by Radix UI.',
    dependencies: ['@radix-ui/react-dropdown-menu'],
    registryDependencies: ['vert-cn'],
    files: [
      { source: 'components/dropdown-menu.tsx', path: 'components/vert-ui/dropdown-menu.tsx' },
    ],
  },
  {
    name: 'select',
    type: 'registry:component',
    title: 'Select',
    description: 'Single-value listbox trigger with typeahead, powered by Radix UI.',
    dependencies: ['@radix-ui/react-select'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/select.tsx', path: 'components/vert-ui/select.tsx' }],
  },
  {
    name: 'dialog',
    type: 'registry:component',
    title: 'Dialog',
    description: 'Modal surface with focus trap, scroll lock and labelling, powered by Radix UI.',
    dependencies: ['@radix-ui/react-dialog'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/dialog.tsx', path: 'components/vert-ui/dialog.tsx' }],
  },
  {
    name: 'avatar',
    type: 'registry:component',
    title: 'Avatar',
    description: 'User or entity image with initials fallback, powered by Radix UI.',
    dependencies: ['@radix-ui/react-avatar', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/avatar.tsx', path: 'components/vert-ui/avatar.tsx' }],
  },
  {
    name: 'skeleton',
    type: 'registry:component',
    title: 'Skeleton',
    description: 'Decorative loading placeholder, hidden from assistive technology.',
    dependencies: [],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/skeleton.tsx', path: 'components/vert-ui/skeleton.tsx' }],
  },
  {
    name: 'table',
    type: 'registry:component',
    title: 'Table',
    description: 'Data table with semantic headers, rows and a scroll container.',
    dependencies: [],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/table.tsx', path: 'components/vert-ui/table.tsx' }],
  },
  {
    name: 'label',
    type: 'registry:component',
    title: 'Label',
    description: 'Accessible form label wired to its control with htmlFor, powered by Radix UI.',
    dependencies: ['@radix-ui/react-label'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/label.tsx', path: 'components/vert-ui/label.tsx' }],
  },
  {
    name: 'radio-group',
    type: 'registry:component',
    title: 'Radio Group',
    description: 'Single-choice group with arrow-key navigation, powered by Radix UI.',
    dependencies: ['@radix-ui/react-radio-group', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/radio-group.tsx', path: 'components/vert-ui/radio-group.tsx' }],
  },
  {
    name: 'collapsible',
    type: 'registry:component',
    title: 'Collapsible',
    description: 'Disclosure region that expands and collapses on trigger, powered by Radix UI.',
    dependencies: ['@radix-ui/react-collapsible'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/collapsible.tsx', path: 'components/vert-ui/collapsible.tsx' }],
  },
  {
    name: 'accordion',
    type: 'registry:component',
    title: 'Accordion',
    description: 'Stacked disclosure panels with chevron triggers, powered by Radix UI.',
    dependencies: ['@radix-ui/react-accordion', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/accordion.tsx', path: 'components/vert-ui/accordion.tsx' }],
  },
  {
    name: 'popover',
    type: 'registry:component',
    title: 'Popover',
    description: 'Anchored click-open panel with focus management, powered by Radix UI.',
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/popover.tsx', path: 'components/vert-ui/popover.tsx' }],
  },
  {
    name: 'toast',
    type: 'registry:component',
    title: 'Toast',
    description: 'Ephemeral notification with viewport, swipe-out and actions, powered by Radix UI.',
    dependencies: ['@radix-ui/react-toast', 'class-variance-authority'],
    registryDependencies: ['vert-cn'],
    files: [{ source: 'components/toast.tsx', path: 'components/vert-ui/toast.tsx' }],
  },
]

function fail(message: string): never {
  console.error(`✗ registry: ${message}`)
  process.exit(1)
}

function transform(content: string, source: string): string {
  let result = content
  for (const [pattern, replacement] of importRewrites) {
    result = result.replace(pattern, replacement)
  }
  if (result.includes('../lib/cn')) {
    fail(`${source} contains an unhandled relative import of ../lib/cn`)
  }
  return result
}

function main(): void {
  const uiPackage = JSON.parse(readFileSync(uiPackagePath, 'utf8')) as {
    dependencies?: Record<string, string>
  }
  const declared = { ...uiPackage.dependencies }

  const names = new Set<string>()
  for (const item of items) {
    if (names.has(item.name)) fail(`duplicate item name "${item.name}"`)
    names.add(item.name)
  }

  const built = items.map((item) => {
    const dependencies = item.dependencies?.map((dep) => {
      const version = declared[dep]
      if (!version)
        fail(`dependency "${dep}" of item "${item.name}" is not declared in @vert-ui/ui`)
      return `${dep}@${version}`
    })

    const registryDependencies = item.registryDependencies?.map((name) => {
      if (!names.has(name)) fail(`item "${item.name}" references unknown registry item "${name}"`)
      return `${baseUrl}/${name}.json`
    })
    const files: BuiltFile[] = item.files.map((file) => {
      const abs = join(uiSrc, file.source)
      if (!existsSync(abs)) fail(`source file not found: ${file.source}`)
      return {
        path: file.path,
        type: item.type,
        content: transform(readFileSync(abs, 'utf8'), file.source),
      }
    })

    return {
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies,
      registryDependencies,
      files,
    }
  })

  const index = {
    $schema: INDEX_SCHEMA,
    name: 'vert-ui',
    homepage: 'https://vert-ui.dev',
    items: built.map((item) => ({
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies,
      registryDependencies: item.registryDependencies,
      files: item.files.map((file) => ({ path: file.path, type: file.type })),
    })),
  }

  const rDir = join(registryRoot, 'public', 'r')
  mkdirSync(rDir, { recursive: true })

  for (const item of built) {
    writeFileSync(
      join(rDir, `${item.name}.json`),
      `${JSON.stringify({ $schema: ITEM_SCHEMA, ...item }, null, 2)}\n`,
    )
  }

  const indexJson = `${JSON.stringify(index, null, 2)}\n`
  writeFileSync(join(registryRoot, 'registry.json'), indexJson)
  writeFileSync(join(rDir, 'registry.json'), indexJson)

  const fileCount = built.reduce((total, item) => total + item.files.length, 0)
  console.log(`✓ registry: ${built.length} items, ${fileCount} files → public/r/, registry.json`)
}

main()

import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { VertError } from './errors.js'

/** Default registry template. `{name}` is replaced with the item name. */
export const DEFAULT_REGISTRY = 'https://vert-ui.dev/r/{name}.json'
export const CONFIG_FILE = 'components.json'

export interface TailwindConfig {
  config?: string
  css: string
  baseColor?: string
  cssVariables?: boolean
}

export interface ComponentsConfig {
  $schema?: string
  style?: string
  rsc?: boolean
  tsx?: boolean
  tailwind?: TailwindConfig
  aliases?: Record<string, string>
  /** Registry aliases, e.g. `{ "@vert": "https://vert-ui.dev/r/{name}.json" }`. */
  registries?: Record<string, string>
  [key: string]: unknown
}

export function configPath(cwd: string): string {
  return resolve(cwd, CONFIG_FILE)
}

export function createDefaultConfig(
  options: { css?: string; baseColor?: string } = {},
): ComponentsConfig {
  return {
    $schema: 'https://ui.shadcn.com/schema.json',
    style: 'vert',
    rsc: false,
    tsx: true,
    tailwind: {
      config: '',
      css: options.css ?? 'src/styles.css',
      baseColor: options.baseColor ?? 'neutral',
      cssVariables: true,
    },
    aliases: {
      components: '@/components',
      ui: '@/components/vert-ui',
      lib: '@/lib',
      utils: '@/lib/vert-ui/cn',
      hooks: '@/hooks',
    },
    registries: {
      '@vert': DEFAULT_REGISTRY,
    },
  }
}

export function readConfig(cwd: string): ComponentsConfig | null {
  const path = configPath(cwd)
  if (!existsSync(path)) return null
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as ComponentsConfig
  } catch (error) {
    throw new VertError(`Could not parse ${CONFIG_FILE}: ${(error as Error).message}`, 'CONFIG_PARSE')
  }
}

export function writeConfig(
  cwd: string,
  config: ComponentsConfig,
  options: { force?: boolean } = {},
): string {
  const path = configPath(cwd)
  if (existsSync(path) && !options.force) {
    throw new VertError(`${CONFIG_FILE} already exists. Use --force to overwrite.`, 'CONFIG_EXISTS')
  }
  writeFileSync(path, `${JSON.stringify(config, null, 2)}\n`)
  return path
}

/**
 * Merge the built-in `@vert` alias with any user overrides so a project always
 * has a working default registry that `add` / `view` / `search` can resolve.
 */
export function resolveRegistries(config: ComponentsConfig | null): Record<string, string> {
  return { '@vert': DEFAULT_REGISTRY, ...(config?.registries ?? {}) }
}

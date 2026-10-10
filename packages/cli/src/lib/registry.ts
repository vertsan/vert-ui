import { existsSync, readFileSync } from 'node:fs'
import { isAbsolute, resolve } from 'node:path'
import { VertError } from './errors.js'

export interface RegistryFile {
  path: string
  type?: string
  content?: string
  target?: string
}

export interface RegistryItem {
  name: string
  type: string
  title?: string
  description?: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files?: RegistryFile[]
  cssVars?: Record<string, unknown>
  [key: string]: unknown
}

export interface RegistryIndexEntry {
  name: string
  type: string
  title?: string
  description?: string
}

export interface RegistryIndex {
  name: string
  homepage?: string
  items: RegistryIndexEntry[]
  [key: string]: unknown
}

export interface RegistrySource {
  /** Item name, derived from the specifier. */
  name: string
  kind: 'url' | 'file'
  /** URL or absolute path to the item JSON. Also the dedupe key. */
  location: string
}

export interface RegistryContext {
  cwd: string
  registries: Record<string, string>
  fetch: FetchLike
}

/** Structural subset of the Fetch API, injectable for tests. */
export interface FetchLike {
  (input: string): Promise<{
    ok: boolean
    status: number
    json(): Promise<unknown>
    text(): Promise<string>
  }>
}

export function isUrl(value: string): boolean {
  return /^https?:\/\//.test(value)
}

export function nameFromLocation(value: string): string {
  const clean = (value.split('?')[0] ?? value).replace(/\/+$/, '')
  const last = clean.split('/').pop() ?? ''
  return last.replace(/\.json$/, '') || 'registry'
}

/**
 * Turn a user specifier into a fetchable location.
 *
 * Supports: `button` (default registry), `@vert/button` (aliased registry),
 * `https://…/button.json` and local paths to JSON files.
 */
export function resolveSpecifier(
  specifier: string,
  options: { cwd: string; registries?: Record<string, string> },
): RegistrySource {
  const registries = options.registries ?? {}

  if (isUrl(specifier)) {
    return { name: nameFromLocation(specifier), kind: 'url', location: specifier }
  }

  const isPath = specifier.startsWith('.') || specifier.startsWith('/') || isAbsolute(specifier)
  if (isPath) {
    const absolute = isAbsolute(specifier) ? specifier : resolve(options.cwd, specifier)
    if (!existsSync(absolute)) {
      throw new VertError(`No registry file at ${absolute}`, 'FILE_MISSING')
    }
    return { name: nameFromLocation(specifier), kind: 'file', location: absolute }
  }

  if (specifier.startsWith('@')) {
    const slash = specifier.indexOf('/')
    if (slash === -1) {
      throw new VertError(
        `Invalid registry specifier "${specifier}". Expected @scope/name.`,
        'SPECIFIER',
      )
    }
    const alias = specifier.slice(0, slash)
    const name = specifier.slice(slash + 1)
    const template = registries[alias]
    if (!template) {
      throw new VertError(
        `Unknown registry alias "${alias}". Add it under "registries" in components.json.`,
        'REGISTRY_ALIAS',
      )
    }
    return { name, kind: 'url', location: template.replace('{name}', name) }
  }

  const template = registries['@vert'] ?? registries['vert']
  if (!template) {
    throw new VertError('No default registry configured.', 'REGISTRY_ALIAS')
  }
  return { name: specifier, kind: 'url', location: template.replace('{name}', specifier) }
}

export async function loadItem(source: RegistrySource, fetchImpl: FetchLike): Promise<RegistryItem> {
  let raw: unknown
  if (source.kind === 'file') {
    raw = JSON.parse(readFileSync(source.location, 'utf8'))
  } else {
    raw = await fetchJson(source.location, fetchImpl)
  }
  const item = raw as RegistryItem
  if (!item || typeof item !== 'object' || typeof item.name !== 'string') {
    throw new VertError(`Registry item at ${source.location} is missing a "name".`, 'ITEM_SHAPE')
  }
  return item
}

/** Load the requested items only, without following `registryDependencies`. */
export async function loadItems(
  specifiers: string[],
  context: RegistryContext,
): Promise<RegistryItem[]> {
  const items: RegistryItem[] = []
  for (const specifier of specifiers) {
    const source = resolveSpecifier(specifier, {
      cwd: context.cwd,
      registries: context.registries,
    })
    items.push(await loadItem(source, context.fetch))
  }
  return items
}

/** Load the requested items and every `registryDependencies` entry, transitively. */
export async function loadItemGraph(
  specifiers: string[],
  context: RegistryContext,
): Promise<RegistryItem[]> {
  const items: RegistryItem[] = []
  const visited = new Set<string>()
  const queue = [...specifiers]

  while (queue.length > 0) {
    const specifier = queue.shift() as string
    const source = resolveSpecifier(specifier, {
      cwd: context.cwd,
      registries: context.registries,
    })
    if (visited.has(source.location)) continue
    visited.add(source.location)

    const item = await loadItem(source, context.fetch)
    items.push(item)
    for (const dependency of item.registryDependencies ?? []) {
      queue.push(dependency)
    }
  }

  return items
}

export function registryIndexUrl(registries: Record<string, string>): string {
  const template = registries['@vert'] ?? registries['vert'] ?? 'https://vert-ui.dev/r/{name}.json'
  return template.replace('{name}', 'registry')
}

export async function loadIndex(url: string, fetchImpl: FetchLike): Promise<RegistryIndex> {
  const raw = (await fetchJson(url, fetchImpl)) as RegistryIndex
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.items)) {
    throw new VertError(`Registry index at ${url} is missing an "items" array.`, 'INDEX_SHAPE')
  }
  return raw
}

async function fetchJson(url: string, fetchImpl: FetchLike): Promise<unknown> {
  let response
  try {
    response = await fetchImpl(url)
  } catch (error) {
    throw new VertError(`Failed to fetch ${url}: ${(error as Error).message}`, 'FETCH')
  }
  if (!response.ok) {
    throw new VertError(`Failed to fetch ${url} (HTTP ${response.status}).`, 'FETCH')
  }
  return response.json()
}

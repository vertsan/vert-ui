import { readConfig, resolveRegistries } from '../lib/config.js'
import { VertError } from '../lib/errors.js'
import type { Logger } from '../lib/logger.js'
import { loadIndex, registryIndexUrl, type FetchLike } from '../lib/registry.js'

export interface SearchOptions {
  query?: string
  registries?: string[]
  cwd: string
  json?: boolean
  logger: Logger
  fetch?: FetchLike
}

interface SearchHit {
  name: string
  type: string
  title?: string
  description?: string
  registry: string
}

export async function runSearch(options: SearchOptions): Promise<void> {
  const config = readConfig(options.cwd)
  const configured = resolveRegistries(config)
  const fetchImpl = options.fetch ?? (globalThis.fetch as unknown as FetchLike)

  const aliases = options.registries?.length ? options.registries : ['@vert']
  const hits: SearchHit[] = []

  for (const alias of aliases) {
    const template = configured[alias]
    if (!template) {
      options.logger.warn(`Unknown registry "${alias}", skipping.`)
      continue
    }
    const url = alias === '@vert' ? registryIndexUrl(configured) : template.replace('{name}', 'registry')
    const index = await loadIndex(url, fetchImpl)
    for (const item of index.items) {
      hits.push({ ...item, registry: alias })
    }
  }

  if (hits.length === 0) {
    throw new VertError('No registries to search.', 'NO_REGISTRY')
  }

  const query = options.query?.trim().toLowerCase()
  const filtered = query
    ? hits.filter((hit) =>
        [hit.name, hit.title, hit.description]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query)),
      )
    : hits

  if (options.json) {
    console.log(JSON.stringify(filtered, null, 2))
    return
  }

  if (filtered.length === 0) {
    options.logger.info(`No components match "${options.query ?? ''}".`)
    return
  }

  options.logger.info('')
  for (const hit of filtered) {
    const description = hit.description ? ` — ${hit.description}` : ''
    options.logger.info(`  ${hit.registry}/${hit.name}${description}`)
  }
  options.logger.info('')
  options.logger.info(`${filtered.length} component(s). Add one with \`vert-ui add <name>\`.`)
}

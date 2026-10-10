import { readConfig, resolveRegistries } from '../lib/config.js'
import type { Logger } from '../lib/logger.js'
import {
  loadIndex,
  loadItem,
  registryIndexUrl,
  resolveSpecifier,
  type FetchLike,
  type RegistryIndex,
} from '../lib/registry.js'

export interface DocsOptions {
  component?: string
  cwd: string
  json?: boolean
  logger: Logger
  fetch?: FetchLike
}

const DOCS_BASE = 'https://vert-ui.dev/components'

export async function runDocs(options: DocsOptions): Promise<void> {
  const config = readConfig(options.cwd)
  const registries = resolveRegistries(config)
  const fetchImpl = options.fetch ?? (globalThis.fetch as unknown as FetchLike)

  if (!options.component) {
    const index = await loadIndex(registryIndexUrl(registries), fetchImpl)
    if (options.json) {
      console.log(JSON.stringify(index, null, 2))
      return
    }
    options.logger.info('')
    options.logger.info(`${index.name} — ${index.items.length} item(s)`)
    printIndex(index, options.logger)
    options.logger.info('')
    options.logger.info(`Open the docs for a component with \`vert-ui docs <component>\`.`)
    return
  }

  const item = await loadItem(
    resolveSpecifier(options.component, { cwd: options.cwd, registries }),
    fetchImpl,
  )

  if (options.json) {
    console.log(JSON.stringify(item, null, 2))
    return
  }

  options.logger.info('')
  options.logger.info(`${item.title ?? item.name} (${item.type})`)
  if (item.description) options.logger.info(item.description)
  options.logger.info(`docs: ${DOCS_BASE}/${item.name}`)
}

function printIndex(index: RegistryIndex, logger: Logger): void {
  for (const item of index.items) {
    const description = item.description ? ` — ${item.description}` : ''
    logger.info(`  ${item.name}${description}`)
  }
}

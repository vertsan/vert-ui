import { readConfig, resolveRegistries } from '../lib/config.js'
import { VertError } from '../lib/errors.js'
import type { Logger } from '../lib/logger.js'
import { loadItems, type FetchLike } from '../lib/registry.js'

export interface ViewOptions {
  specs: string[]
  cwd: string
  json?: boolean
  logger: Logger
  fetch?: FetchLike
}

export async function runView(options: ViewOptions): Promise<void> {
  if (options.specs.length === 0) {
    throw new VertError('Specify at least one component to view.', 'NO_INPUT')
  }

  const config = readConfig(options.cwd)
  const registries = resolveRegistries(config)
  const fetchImpl = options.fetch ?? (globalThis.fetch as unknown as FetchLike)

  const items = await loadItems(options.specs, {
    cwd: options.cwd,
    registries,
    fetch: fetchImpl,
  })

  if (options.json) {
    console.log(JSON.stringify(items.length === 1 ? items[0] : items, null, 2))
    return
  }

  for (const item of items) {
    options.logger.info('')
    options.logger.info(`${item.title ?? item.name} (${item.type})`)
    if (item.description) options.logger.info(item.description)
    if (item.dependencies?.length) {
      options.logger.info(`dependencies: ${item.dependencies.join(', ')}`)
    }
    if (item.registryDependencies?.length) {
      options.logger.info(`registryDependencies: ${item.registryDependencies.join(', ')}`)
    }
    if (item.files?.length) {
      options.logger.info('files:')
      for (const file of item.files) options.logger.info(`  ${file.target ?? file.path}`)
    }
  }
}

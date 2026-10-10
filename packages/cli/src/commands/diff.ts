import { createTwoFilesPatch } from 'diff'
import { readConfig, resolveRegistries } from '../lib/config.js'
import { VertError } from '../lib/errors.js'
import { readInstalledFile } from '../lib/install.js'
import type { Logger } from '../lib/logger.js'
import { loadItems, type FetchLike } from '../lib/registry.js'

export interface DiffOptions {
  specs: string[]
  cwd: string
  logger: Logger
  fetch?: FetchLike
}

export async function runDiff(options: DiffOptions): Promise<void> {
  if (options.specs.length === 0) {
    throw new VertError('Specify at least one component to diff.', 'NO_INPUT')
  }

  const config = readConfig(options.cwd)
  const registries = resolveRegistries(config)
  const fetchImpl = options.fetch ?? (globalThis.fetch as unknown as FetchLike)

  const items = await loadItems(options.specs, {
    cwd: options.cwd,
    registries,
    fetch: fetchImpl,
  })

  let differences = 0
  for (const item of items) {
    for (const file of item.files ?? []) {
      const relative = file.target ?? file.path
      if (file.content === undefined) continue

      const installed = readInstalledFile(item, relative, options.cwd)
      if (installed === null) {
        options.logger.warn(`${relative} is missing (run \`vert-ui add ${item.name}\`)`)
        differences += 1
        continue
      }
      if (installed === file.content) {
        options.logger.success(`${relative} is up to date`)
        continue
      }

      differences += 1
      options.logger.info('')
      options.logger.info(
        createTwoFilesPatch(relative, relative, installed, file.content, 'local', 'registry'),
      )
    }
  }

  options.logger.info('')
  options.logger.info(
    differences === 0 ? 'Everything is up to date.' : `${differences} file(s) differ.`,
  )
}

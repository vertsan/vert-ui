import { readConfig, resolveRegistries } from '../lib/config.js'
import { VertError } from '../lib/errors.js'
import {
  collectDependencies,
  detectPackageManager,
  installCommand,
  runInstall,
  writeItemFiles,
} from '../lib/install.js'
import type { Logger } from '../lib/logger.js'
import { loadItemGraph, type FetchLike } from '../lib/registry.js'

export interface AddOptions {
  specs: string[]
  cwd: string
  overwrite?: boolean
  dryRun?: boolean
  install?: boolean
  logger: Logger
  fetch?: FetchLike
}

export async function runAdd(options: AddOptions): Promise<void> {
  if (options.specs.length === 0) {
    throw new VertError('Specify at least one component, e.g. `vert-ui add button`.', 'NO_INPUT')
  }

  const config = readConfig(options.cwd)
  const registries = resolveRegistries(config)
  const fetchImpl = options.fetch ?? (globalThis.fetch as unknown as FetchLike)

  options.logger.step(`Resolving ${options.specs.join(', ')}`)
  const items = await loadItemGraph(options.specs, {
    cwd: options.cwd,
    registries,
    fetch: fetchImpl,
  })

  let wrote = false
  for (const item of items) {
    if ((item.files ?? []).length === 0) continue
    const result = writeItemFiles(item, {
      cwd: options.cwd,
      overwrite: options.overwrite,
      dryRun: options.dryRun,
    })
    for (const file of result.written) {
      wrote = true
      options.logger.success(`${options.dryRun ? '(dry run) ' : ''}${file}`)
    }
    for (const file of result.skipped) {
      options.logger.warn(`${file} already exists (use --overwrite to replace)`)
    }
  }

  if (!wrote) options.logger.info('Nothing to write.')

  const { dependencies, devDependencies } = collectDependencies(items)
  if (dependencies.length === 0 && devDependencies.length === 0) return

  const pm = detectPackageManager(options.cwd)
  const all = [...dependencies, ...devDependencies]
  if (options.dryRun || options.install === false) {
    options.logger.info(`Dependencies to install: ${all.join(', ')}`)
    options.logger.info(`Install with: ${installCommand(pm, all).join(' ')}`)
    return
  }

  options.logger.step(`Installing dependencies with ${pm}`)
  const status = runInstall(pm, all, false, options.cwd)
  if (status !== 0) {
    throw new VertError(`Dependency install failed (exit ${status}).`, 'INSTALL')
  }
}

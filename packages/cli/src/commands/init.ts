import { createDefaultConfig, readConfig, writeConfig } from '../lib/config.js'
import { VertError } from '../lib/errors.js'
import type { Logger } from '../lib/logger.js'

export interface InitOptions {
  cwd: string
  css?: string
  baseColor?: string
  force?: boolean
  logger: Logger
}

export function runInit(options: InitOptions): void {
  const existing = readConfig(options.cwd)
  if (existing && !options.force) {
    throw new VertError(
      'components.json already exists. Use --force to overwrite.',
      'CONFIG_EXISTS',
    )
  }

  const config = createDefaultConfig({ css: options.css, baseColor: options.baseColor })
  const path = writeConfig(options.cwd, config, { force: options.force })

  options.logger.success(`Created ${path}`)
  options.logger.info('Registered the @vert registry.')
  options.logger.info('Next: add your first component, e.g. `vert-ui add button`')
}

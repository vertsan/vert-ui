import { resolve } from 'node:path'
import { Command } from 'commander'
import { runAdd } from './commands/add.js'
import { runBuild } from './commands/build.js'
import { runDiff } from './commands/diff.js'
import { runDocs } from './commands/docs.js'
import { runInit } from './commands/init.js'
import { runSearch } from './commands/search.js'
import { runView } from './commands/view.js'
import { createLogger } from './lib/logger.js'

export const VERSION = '0.1.0'

interface CwdFlags {
  cwd: string
  silent?: boolean
}

interface InitFlags extends CwdFlags {
  css?: string
  baseColor?: string
  force?: boolean
}

interface AddFlags extends CwdFlags {
  overwrite?: boolean
  dryRun?: boolean
  install?: boolean
}

interface ViewFlags extends CwdFlags {
  json?: boolean
}

interface DocsFlags extends CwdFlags {
  json?: boolean
}

interface SearchFlags extends CwdFlags {
  json?: boolean
  registry?: string[]
}

interface BuildFlags extends CwdFlags {
  source?: string
  output?: string
}

type DiffFlags = CwdFlags

/** Wrap an action so expected failures print cleanly instead of throwing. */
function action<Args extends unknown[]>(handler: (...args: Args) => Promise<void> | void) {
  return async (...args: Args): Promise<void> => {
    const logger = createLogger((args[args.length - 1] as CwdFlags | undefined)?.silent)
    try {
      await handler(...args)
    } catch (error) {
      logger.error(error instanceof Error ? error.message : String(error))
      process.exitCode = 1
    }
  }
}

const CWD_OPTION: [string, string, string] = ['-c, --cwd <cwd>', 'working directory', process.cwd()]

export function createProgram(): Command {
  const program = new Command()

  program
    .name('vert-ui')
    .description('Add vert-ui components to your project.')
    .version(VERSION)

  program
    .command('init')
    .description('Create components.json and register the @vert registry.')
    .option(...CWD_OPTION)
    .option('--css <path>', 'path to your Tailwind CSS entry file')
    .option('--base-color <color>', 'base color for the theme')
    .option('-f, --force', 'overwrite an existing components.json')
    .option('-s, --silent', 'mute output')
    .action(
      action<[InitFlags]>((options) =>
        runInit({
          cwd: resolve(options.cwd),
          css: options.css,
          baseColor: options.baseColor,
          force: options.force,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('add [components...]')
    .description('Add one or more components and their registry dependencies.')
    .option(...CWD_OPTION)
    .option('-o, --overwrite', 'overwrite existing files')
    .option('-d, --dry-run', 'list files without writing them')
    .option('--no-install', 'skip installing npm dependencies')
    .option('-s, --silent', 'mute output')
    .action(
      action<[string[], AddFlags]>((components, options) =>
        runAdd({
          specs: components,
          cwd: resolve(options.cwd),
          overwrite: options.overwrite,
          dryRun: options.dryRun,
          install: options.install,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('view [components...]')
    .description('Show the metadata of one or more components.')
    .option(...CWD_OPTION)
    .option('--json', 'print raw JSON')
    .option('-s, --silent', 'mute output')
    .action(
      action<[string[], ViewFlags]>((components, options) =>
        runView({
          specs: components,
          cwd: resolve(options.cwd),
          json: options.json,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('docs [component]')
    .description('Browse the registry, or link to a component\'s docs page.')
    .option(...CWD_OPTION)
    .option('--json', 'print raw JSON')
    .option('-s, --silent', 'mute output')
    .action(
      action<[string | undefined, DocsFlags]>((component, options) =>
        runDocs({
          component,
          cwd: resolve(options.cwd),
          json: options.json,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('search [query]')
    .description('Search the registry for components.')
    .option(...CWD_OPTION)
    .option('-r, --registry <names...>', 'registry aliases to search')
    .option('--json', 'print raw JSON')
    .option('-s, --silent', 'mute output')
    .action(
      action<[string | undefined, SearchFlags]>((query, options) =>
        runSearch({
          query,
          registries: options.registry,
          cwd: resolve(options.cwd),
          json: options.json,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('build [registry]')
    .description('Build shadcn-compatible registry JSON with embedded file content.')
    .option(...CWD_OPTION)
    .option('-o, --output <dir>', 'output directory', 'public/r')
    .option('-s, --silent', 'mute output')
    .action(
      action<[string | undefined, BuildFlags]>((registry, options) =>
        runBuild({
          cwd: resolve(options.cwd),
          source: registry ?? options.source,
          output: options.output,
          logger: createLogger(options.silent),
        }),
      ),
    )

  program
    .command('diff [components...]')
    .description('Compare installed component files against the registry.')
    .option(...CWD_OPTION)
    .option('-s, --silent', 'mute output')
    .action(
      action<[string[], DiffFlags]>((components, options) =>
        runDiff({
          specs: components,
          cwd: resolve(options.cwd),
          logger: createLogger(options.silent),
        }),
      ),
    )

  return program
}

export type { ComponentsConfig } from './lib/config.js'
export type { RegistryItem } from './lib/registry.js'
export { VertError } from './lib/errors.js'
export { runAdd } from './commands/add.js'
export { runBuild } from './commands/build.js'
export { runDiff } from './commands/diff.js'
export { runDocs } from './commands/docs.js'
export { runInit } from './commands/init.js'
export { runSearch } from './commands/search.js'
export { runView } from './commands/view.js'

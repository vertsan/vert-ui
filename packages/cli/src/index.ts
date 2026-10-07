import { readFileSync } from 'node:fs'
import { Command } from 'commander'

function readVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
      version?: string
    }
    return pkg.version ?? '0.0.0'
  } catch {
    return '0.0.0'
  }
}

function notImplemented(command: string): () => void {
  return () => {
    console.error(`vert-ui ${command} is not implemented yet — watch the roadmap for updates.`)
    process.exitCode = 1
  }
}

export function createProgram(): Command {
  const program = new Command()

  program
    .name('vert-ui')
    .description('CLI for vert-ui — init, add and diff copy-paste UI components.')
    .version(readVersion())

  program
    .command('init')
    .description('Set up vert-ui in your project: theme CSS, tokens and config.')
    .action(notImplemented('init'))

  program
    .command('add <components...>')
    .description('Add vert-ui components to your project.')
    .action(notImplemented('add'))

  program
    .command('diff <components...>')
    .description('Show the diff between your installed components and the registry.')
    .action(notImplemented('diff'))

  return program
}

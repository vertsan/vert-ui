import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import type { RegistryItem } from './registry.js'

export type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

export function detectPackageManager(cwd: string): PackageManager {
  if (existsSync(resolve(cwd, 'pnpm-lock.yaml'))) return 'pnpm'
  if (existsSync(resolve(cwd, 'yarn.lock'))) return 'yarn'
  if (existsSync(resolve(cwd, 'bun.lockb')) || existsSync(resolve(cwd, 'bun.lock'))) return 'bun'
  return 'npm'
}

export function installCommand(pm: PackageManager, dependencies: string[], dev = false): string[] {
  if (dependencies.length === 0) return []
  switch (pm) {
    case 'pnpm':
      return ['pnpm', 'add', ...(dev ? ['-D'] : []), ...dependencies]
    case 'yarn':
      return ['yarn', 'add', ...(dev ? ['--dev'] : []), ...dependencies]
    case 'bun':
      return ['bun', 'add', ...(dev ? ['--dev'] : []), ...dependencies]
    default:
      return ['npm', 'install', ...(dev ? ['--save-dev'] : []), ...dependencies]
  }
}

export function runInstall(
  pm: PackageManager,
  dependencies: string[],
  dev: boolean,
  cwd: string,
): number {
  const command = installCommand(pm, dependencies, dev)
  if (command.length === 0) return 0
  const [bin, ...args] = command
  const result = spawnSync(bin as string, args, { cwd, stdio: 'inherit', shell: process.platform === 'win32' })
  return result.status ?? 1
}

/** Files an item would touch, resolved relative to the project root. */
export function planFiles(item: RegistryItem): string[] {
  return (item.files ?? []).map((file) => file.target ?? file.path)
}

export interface WriteItemResult {
  /** Every file path the item declares. */
  files: string[]
  /** Paths written to disk this run. */
  written: string[]
  /** Existing paths left untouched unless `overwrite` is set. */
  skipped: string[]
}

export function writeItemFiles(
  item: RegistryItem,
  options: { cwd: string; overwrite?: boolean; dryRun?: boolean },
): WriteItemResult {
  const files = planFiles(item)
  const written: string[] = []
  const skipped: string[] = []

  for (const file of item.files ?? []) {
    if (file.content === undefined) continue
    const relative = file.target ?? file.path
    const absolute = resolve(options.cwd, relative)

    if (existsSync(absolute) && !options.overwrite) {
      skipped.push(relative)
      continue
    }
    if (!options.dryRun) {
      mkdirSync(dirname(absolute), { recursive: true })
      writeFileSync(absolute, file.content)
    }
    written.push(relative)
  }

  return { files, written, skipped }
}

export function readInstalledFile(item: RegistryItem, relative: string, cwd: string): string | null {
  const file = (item.files ?? []).find((candidate) => (candidate.target ?? candidate.path) === relative)
  if (!file) return null
  const absolute = resolve(cwd, relative)
  if (!existsSync(absolute)) return null
  return readFileSync(absolute, 'utf8')
}

export interface ResolvedDependencies {
  dependencies: string[]
  devDependencies: string[]
}

export function collectDependencies(items: RegistryItem[]): ResolvedDependencies {
  const dependencies = new Set<string>()
  const devDependencies = new Set<string>()
  for (const item of items) {
    for (const dependency of item.dependencies ?? []) dependencies.add(dependency)
    for (const dependency of item.devDependencies ?? []) devDependencies.add(dependency)
  }
  return { dependencies: [...dependencies].sort(), devDependencies: [...devDependencies].sort() }
}

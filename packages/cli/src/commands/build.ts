import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { VertError } from '../lib/errors.js'
import type { Logger } from '../lib/logger.js'
import type { RegistryFile, RegistryItem, RegistryIndexEntry } from '../lib/registry.js'

const ITEM_SCHEMA = 'https://ui.shadcn.com/schema/registry-item.json'
const INDEX_SCHEMA = 'https://ui.shadcn.com/schema/registry.json'

export interface BuildOptions {
  cwd: string
  source?: string
  output?: string
  logger: Logger
}

export function runBuild(options: BuildOptions): void {
  const sourcePath = resolve(options.cwd, options.source ?? 'registry.json')
  if (!existsSync(sourcePath)) {
    throw new VertError(`Registry file not found: ${sourcePath}`, 'NO_REGISTRY')
  }

  const root = dirname(sourcePath)
  const registry = JSON.parse(readFileSync(sourcePath, 'utf8')) as {
    name?: string
    items?: RegistryItem[]
  }
  if (!Array.isArray(registry.items)) {
    throw new VertError('registry.json must contain an "items" array.', 'REGISTRY_SHAPE')
  }

  let fileCount = 0
  const items = registry.items.map((item) => {
    const files = (item.files ?? []).map((file) => {
      fileCount += 1
      return buildFile(item, file, root)
    })
    return { ...item, files }
  })

  const outDir = resolve(options.cwd, options.output ?? 'public/r')
  mkdirSync(outDir, { recursive: true })

  for (const item of items) {
    const payload = { $schema: ITEM_SCHEMA, ...item }
    writeFileSync(join(outDir, `${item.name}.json`), `${JSON.stringify(payload, null, 2)}\n`)
  }

  const index = {
    $schema: INDEX_SCHEMA,
    name: registry.name ?? 'vert-ui',
    items: items.map(toIndexEntry),
  }
  writeFileSync(join(outDir, 'registry.json'), `${JSON.stringify(index, null, 2)}\n`)

  options.logger.success(
    `registry: ${items.length} items, ${fileCount} files → ${outDir.replace(`${options.cwd}\\`, '')}`,
  )
}

function buildFile(item: RegistryItem, file: RegistryFile, root: string): RegistryFile {
  const absolute = resolve(root, file.path)
  if (!existsSync(absolute)) {
    throw new VertError(`Item "${item.name}" file not found: ${file.path}`, 'FILE_MISSING')
  }
  return {
    path: file.path,
    type: file.type ?? item.type,
    ...(file.target ? { target: file.target } : {}),
    content: readFileSync(absolute, 'utf8'),
  }
}

function toIndexEntry(item: RegistryItem): RegistryIndexEntry & Record<string, unknown> {
  const entry: RegistryIndexEntry & Record<string, unknown> = {
    name: item.name,
    type: item.type,
  }
  if (item.title) entry.title = item.title
  if (item.description) entry.description = item.description
  if (item.dependencies) entry.dependencies = item.dependencies
  if (item.registryDependencies) entry.registryDependencies = item.registryDependencies
  if (item.files) entry.files = item.files.map((file) => ({ path: file.path, type: file.type }))
  return entry
}

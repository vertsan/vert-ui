import { existsSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  collectDependencies,
  detectPackageManager,
  installCommand,
  planFiles,
  readInstalledFile,
  writeItemFiles,
} from './install'
import type { RegistryItem } from './registry'

const item: RegistryItem = {
  name: 'button',
  type: 'registry:ui',
  files: [
    { path: 'components/vert-ui/button.tsx', type: 'registry:ui', content: 'export const a = 1\n' },
    { path: 'lib/vert-ui/cn.ts', type: 'registry:lib', content: 'export const cn = 1\n' },
  ],
}

describe('install helpers', () => {
  it('detects the package manager from lockfiles', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-pm-'))
    expect(detectPackageManager(dir)).toBe('npm')
    writeFileSync(join(dir, 'pnpm-lock.yaml'), '')
    expect(detectPackageManager(dir)).toBe('pnpm')
  })

  it('builds install commands per manager', () => {
    expect(installCommand('pnpm', ['a', 'b'])).toEqual(['pnpm', 'add', 'a', 'b'])
    expect(installCommand('npm', ['a'], true)).toEqual(['npm', 'install', '--save-dev', 'a'])
    expect(installCommand('yarn', [])).toEqual([])
  })

  it('writes files, then skips them without overwrite', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-write-'))
    const first = writeItemFiles(item, { cwd: dir })
    expect(first.written).toEqual(['components/vert-ui/button.tsx', 'lib/vert-ui/cn.ts'])
    expect(existsSync(join(dir, 'components/vert-ui/button.tsx'))).toBe(true)

    const second = writeItemFiles(item, { cwd: dir })
    expect(second.skipped).toHaveLength(2)
    expect(second.written).toHaveLength(0)

    const third = writeItemFiles(item, { cwd: dir, overwrite: true })
    expect(third.written).toHaveLength(2)
  })

  it('does not touch disk on a dry run', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-dry-'))
    const result = writeItemFiles(item, { cwd: dir, dryRun: true })
    expect(result.written).toHaveLength(2)
    expect(existsSync(join(dir, 'components/vert-ui/button.tsx'))).toBe(false)
  })

  it('plans and reads back installed files', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-read-'))
    expect(planFiles(item)).toEqual(['components/vert-ui/button.tsx', 'lib/vert-ui/cn.ts'])
    expect(readInstalledFile(item, 'components/vert-ui/button.tsx', dir)).toBeNull()
    writeItemFiles(item, { cwd: dir })
    expect(readInstalledFile(item, 'components/vert-ui/button.tsx', dir)).toBe('export const a = 1\n')
  })

  it('collects dependencies across items', () => {
    const deps = collectDependencies([
      { name: 'a', type: 'registry:ui', dependencies: ['z', 'a'] },
      { name: 'b', type: 'registry:ui', dependencies: ['a'], devDependencies: ['vitest'] },
    ])
    expect(deps.dependencies).toEqual(['a', 'z'])
    expect(deps.devDependencies).toEqual(['vitest'])
  })

  it('keeps content when overwriting', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-over-'))
    writeItemFiles(item, { cwd: dir })
    writeFileSync(join(dir, 'components/vert-ui/button.tsx'), 'stale')
    writeItemFiles(item, { cwd: dir, overwrite: true })
    expect(readFileSync(join(dir, 'components/vert-ui/button.tsx'), 'utf8')).toBe(
      'export const a = 1\n',
    )
  })
})

import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import {
  createDefaultConfig,
  DEFAULT_REGISTRY,
  readConfig,
  resolveRegistries,
  writeConfig,
} from './config'

const dirs: string[] = []

function tempDir(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-cli-'))
  dirs.push(dir)
  return dir
}

afterEach(() => {
  while (dirs.length > 0) rmSync(dirs.pop() as string, { recursive: true, force: true })
})

describe('config', () => {
  it('creates a config that registers the @vert default registry', () => {
    const config = createDefaultConfig()
    expect(config.registries).toEqual({ '@vert': DEFAULT_REGISTRY })
    expect(config.tailwind?.css).toBe('src/styles.css')
    expect(config.aliases?.utils).toBe('@/lib/vert-ui/cn')
  })

  it('honours css and baseColor overrides', () => {
    const config = createDefaultConfig({ css: 'app/globals.css', baseColor: 'zinc' })
    expect(config.tailwind?.css).toBe('app/globals.css')
    expect(config.tailwind?.baseColor).toBe('zinc')
  })

  it('round-trips through disk and returns null when absent', () => {
    const dir = tempDir()
    expect(readConfig(dir)).toBeNull()

    writeConfig(dir, createDefaultConfig())
    const path = join(dir, 'components.json')
    expect(existsSync(path)).toBe(true)
    expect(JSON.parse(readFileSync(path, 'utf8'))).toMatchObject({ style: 'vert' })
    expect(readConfig(dir)?.style).toBe('vert')
  })

  it('refuses to overwrite unless forced', () => {
    const dir = tempDir()
    writeConfig(dir, createDefaultConfig())
    expect(() => writeConfig(dir, createDefaultConfig())).toThrow(/already exists/)
    expect(() => writeConfig(dir, createDefaultConfig(), { force: true })).not.toThrow()
  })

  it('merges user registries over the default', () => {
    const config = createDefaultConfig()
    config.registries = { '@acme': 'https://acme.dev/r/{name}.json' }
    const registries = resolveRegistries(config)
    expect(registries['@acme']).toBe('https://acme.dev/r/{name}.json')
    expect(registries['@vert']).toBe(DEFAULT_REGISTRY)
  })
})

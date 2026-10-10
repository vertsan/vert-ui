import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  isUrl,
  loadItemGraph,
  loadItems,
  nameFromLocation,
  resolveSpecifier,
  type FetchLike,
  type RegistryItem,
} from './registry'

const REGISTRIES = { '@vert': 'https://vert.example/r/{name}.json' }

function fakeFetch(items: Record<string, RegistryItem>): FetchLike {
  return async (url) => ({
    ok: url in items,
    status: url in items ? 200 : 404,
    async json() {
      return items[url]
    },
    async text() {
      return ''
    },
  })
}

describe('resolveSpecifier', () => {
  it('detects urls', () => {
    expect(isUrl('https://a.dev/r/button.json')).toBe(true)
    expect(isUrl('button')).toBe(false)
  })

  it('derives an item name from a location', () => {
    expect(nameFromLocation('https://a.dev/r/button.json')).toBe('button')
    expect(nameFromLocation('https://a.dev/r/button.json?x=1')).toBe('button')
  })

  it('resolves a bare name against the default registry', () => {
    const source = resolveSpecifier('button', { cwd: process.cwd(), registries: REGISTRIES })
    expect(source).toEqual({
      name: 'button',
      kind: 'url',
      location: 'https://vert.example/r/button.json',
    })
  })

  it('resolves an aliased registry', () => {
    const source = resolveSpecifier('@vert/accordion', {
      cwd: process.cwd(),
      registries: REGISTRIES,
    })
    expect(source.name).toBe('accordion')
    expect(source.location).toBe('https://vert.example/r/accordion.json')
  })

  it('passes urls through unchanged', () => {
    const source = resolveSpecifier('https://custom.dev/x/menu.json', {
      cwd: process.cwd(),
      registries: {},
    })
    expect(source).toEqual({
      name: 'menu',
      kind: 'url',
      location: 'https://custom.dev/x/menu.json',
    })
  })

  it('reads a local file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-reg-'))
    const file = join(dir, 'thing.json')
    writeFileSync(file, '{"name":"thing","type":"registry:ui"}')
    const source = resolveSpecifier('./thing.json', { cwd: dir, registries: {} })
    expect(source.kind).toBe('file')
  })

  it('throws for an unknown alias', () => {
    expect(() =>
      resolveSpecifier('@nope/button', { cwd: process.cwd(), registries: REGISTRIES }),
    ).toThrow(/Unknown registry alias/)
  })
})

describe('loading items', () => {
  const items: Record<string, RegistryItem> = {
    'https://vert.example/r/accordion.json': {
      name: 'accordion',
      type: 'registry:ui',
      registryDependencies: ['https://vert.example/r/vert-cn.json'],
    },
    'https://vert.example/r/vert-cn.json': { name: 'vert-cn', type: 'registry:lib' },
  }

  it('loads requested items only', async () => {
    const loaded = await loadItems(['accordion'], {
      cwd: process.cwd(),
      registries: REGISTRIES,
      fetch: fakeFetch(items),
    })
    expect(loaded.map((item) => item.name)).toEqual(['accordion'])
  })

  it('follows registryDependencies and de-duplicates', async () => {
    const loaded = await loadItemGraph(['accordion'], {
      cwd: process.cwd(),
      registries: REGISTRIES,
      fetch: fakeFetch(items),
    })
    expect(loaded.map((item) => item.name).sort()).toEqual(['accordion', 'vert-cn'])
  })

  it('surfaces a shape error when name is missing', async () => {
    await expect(
      loadItems(['broken'], {
        cwd: process.cwd(),
        registries: REGISTRIES,
        fetch: fakeFetch({ 'https://vert.example/r/broken.json': {} as RegistryItem }),
      }),
    ).rejects.toThrow(/missing a "name"/)
  })
})

import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import type { RegistryFile, RegistryItem } from '../lib/registry'
import { captureLogger } from '../testing/fixtures'
import { runBuild } from './build'

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-build-'))
  mkdirSync(join(dir, 'components'), { recursive: true })
  writeFileSync(join(dir, 'components', 'button.tsx'), 'export const Button = 1\n')
  writeFileSync(
    join(dir, 'registry.json'),
    JSON.stringify({
      name: 'vert-ui',
      items: [
        {
          name: 'button',
          type: 'registry:ui',
          title: 'Button',
          dependencies: ['class-variance-authority'],
          files: [{ path: 'components/button.tsx', type: 'registry:ui' }],
        },
      ],
    }),
  )
  return dir
}

describe('runBuild', () => {
  it('embeds file content and writes an index', () => {
    const dir = setup()
    const logger = captureLogger()
    runBuild({ cwd: dir, output: 'out', logger })

    const item = JSON.parse(readFileSync(join(dir, 'out', 'button.json'), 'utf8')) as RegistryItem
    expect(item.$schema).toContain('registry-item')
    expect(item.files?.[0]?.content).toBe('export const Button = 1\n')
    expect(item.dependencies).toEqual(['class-variance-authority'])

    const index = JSON.parse(readFileSync(join(dir, 'out', 'registry.json'), 'utf8')) as {
      items: Array<RegistryItem & { files?: RegistryFile[] }>
    }
    expect(index.items[0]?.files?.[0]?.content).toBeUndefined()
    expect(logger.lines.join('\n')).toContain('1 items')
  })

  it('errors when the registry file is missing', () => {
    const dir = mkdtempSync(join(tmpdir(), 'vert-build-missing-'))
    expect(() => runBuild({ cwd: dir, logger: captureLogger() })).toThrow(/not found/)
    expect(existsSync(join(dir, 'public'))).toBe(false)
  })
})

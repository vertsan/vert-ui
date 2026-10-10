import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createDefaultConfig, writeConfig } from '../lib/config'
import type { RegistryItem } from '../lib/registry'
import { captureLogger, fakeRegistry, TEST_REGISTRY } from '../testing/fixtures'
import { runDiff } from './diff'

const items: Record<string, RegistryItem> = {
  'https://vert.example/r/button.json': {
    name: 'button',
    type: 'registry:ui',
    files: [
      {
        path: 'components/vert-ui/button.tsx',
        type: 'registry:ui',
        content: 'export const Button = 1\n',
      },
    ],
  },
}

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-diff-'))
  const config = createDefaultConfig()
  config.registries = { '@vert': TEST_REGISTRY }
  writeConfig(dir, config)
  mkdirSync(join(dir, 'components', 'vert-ui'), { recursive: true })
  return dir
}

describe('runDiff', () => {
  it('reports an up-to-date file', async () => {
    const dir = setup()
    writeFileSync(join(dir, 'components', 'vert-ui', 'button.tsx'), 'export const Button = 1\n')

    const logger = captureLogger()
    await runDiff({ specs: ['button'], cwd: dir, logger, fetch: fakeRegistry(items) })
    expect(logger.lines.join('\n')).toContain('up to date')
  })

  it('prints a patch for a changed file', async () => {
    const dir = setup()
    writeFileSync(join(dir, 'components', 'vert-ui', 'button.tsx'), 'export const Old = 1\n')

    const logger = captureLogger()
    await runDiff({ specs: ['button'], cwd: dir, logger, fetch: fakeRegistry(items) })
    const output = logger.lines.join('\n')
    expect(output).toContain('1 file(s) differ')
    expect(output).toContain('registry')
  })

  it('does not follow registry dependencies', async () => {
    const dir = setup()
    const logger = captureLogger()
    await runDiff({ specs: ['button'], cwd: dir, logger, fetch: fakeRegistry(items) })
    expect(logger.lines.join('\n')).toContain('is missing')
  })
})

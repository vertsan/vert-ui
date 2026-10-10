import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createDefaultConfig, writeConfig } from '../lib/config'
import type { RegistryItem } from '../lib/registry'
import { captureLogger, fakeRegistry, TEST_REGISTRY } from '../testing/fixtures'
import { runView } from './view'

const items: Record<string, RegistryItem> = {
  'https://vert.example/r/button.json': {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    description: 'Triggers an action.',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['https://vert.example/r/vert-cn.json'],
    files: [{ path: 'components/vert-ui/button.tsx', type: 'registry:ui', content: '' }],
  },
}

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-view-'))
  const config = createDefaultConfig()
  config.registries = { '@vert': TEST_REGISTRY }
  writeConfig(dir, config)
  return dir
}

describe('runView', () => {
  it('prints metadata without loading registry dependencies', async () => {
    const logger = captureLogger()
    await runView({
      specs: ['button'],
      cwd: setup(),
      logger,
      fetch: fakeRegistry(items),
    })
    const output = logger.lines.join('\n')
    expect(output).toContain('Button (registry:ui)')
    expect(output).toContain('Triggers an action.')
    expect(output).toContain('class-variance-authority')
    expect(output).toContain('components/vert-ui/button.tsx')
  })

  it('emits JSON with --json', async () => {
    const original = console.log
    let captured = ''
    console.log = (message?: unknown) => {
      captured = String(message)
    }
    try {
      await runView({
        specs: ['button'],
        cwd: setup(),
        json: true,
        logger: captureLogger(),
        fetch: fakeRegistry(items),
      })
    } finally {
      console.log = original
    }
    expect(JSON.parse(captured)).toMatchObject({ name: 'button', title: 'Button' })
  })

  it('requires a component name', async () => {
    await expect(
      runView({ specs: [], cwd: setup(), logger: captureLogger(), fetch: fakeRegistry(items) }),
    ).rejects.toThrow(/at least one component/)
  })
})

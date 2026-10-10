import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createDefaultConfig, writeConfig } from '../lib/config'
import { captureLogger, fakeRegistry, TEST_REGISTRY } from '../testing/fixtures'
import { runDocs } from './docs'

const responses = {
  'https://vert.example/r/registry.json': {
    name: 'vert-ui',
    items: [
      {
        name: 'button',
        type: 'registry:ui',
        title: 'Button',
        description: 'Triggers an action.',
      },
    ],
  },
  'https://vert.example/r/button.json': {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    description: 'Triggers an action.',
  },
}

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-docs-'))
  const config = createDefaultConfig()
  config.registries = { '@vert': TEST_REGISTRY }
  writeConfig(dir, config)
  return dir
}

describe('runDocs', () => {
  it('lists the registry when no component is given', async () => {
    const logger = captureLogger()
    await runDocs({ cwd: setup(), logger, fetch: fakeRegistry(responses) })
    expect(logger.lines.join('\n')).toContain('button — Triggers an action.')
  })

  it('prints a docs link for a component', async () => {
    const logger = captureLogger()
    await runDocs({ component: 'button', cwd: setup(), logger, fetch: fakeRegistry(responses) })
    expect(logger.lines.join('\n')).toContain('https://vert-ui.dev/components/button')
  })
})

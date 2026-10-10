import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createDefaultConfig, writeConfig } from '../lib/config'
import { captureLogger, fakeRegistry, TEST_REGISTRY } from '../testing/fixtures'
import { runSearch } from './search'

const responses = {
  'https://vert.example/r/registry.json': {
    name: 'vert-ui',
    items: [
      { name: 'button', type: 'registry:ui', title: 'Button', description: 'Triggers an action.' },
      { name: 'card', type: 'registry:ui', title: 'Card', description: 'Groups content.' },
      { name: 'accordion', type: 'registry:ui', title: 'Accordion', description: 'Collapsible.' },
    ],
  },
}

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-search-'))
  const config = createDefaultConfig()
  config.registries = { '@vert': TEST_REGISTRY }
  writeConfig(dir, config)
  return dir
}

describe('runSearch', () => {
  it('lists every component without a query', async () => {
    const logger = captureLogger()
    await runSearch({ cwd: setup(), logger, fetch: fakeRegistry(responses) })
    expect(logger.lines.join('\n')).toContain('@vert/accordion')
    expect(logger.lines.join('\n')).toContain('3 component(s)')
  })

  it('filters by name or description', async () => {
    const logger = captureLogger()
    await runSearch({ query: 'group', cwd: setup(), logger, fetch: fakeRegistry(responses) })
    expect(logger.lines.join('\n')).toContain('@vert/card')
    expect(logger.lines.join('\n')).not.toContain('@vert/accordion')
  })

  it('reports an empty result set', async () => {
    const logger = captureLogger()
    await runSearch({ query: 'zzz', cwd: setup(), logger, fetch: fakeRegistry(responses) })
    expect(logger.lines.join('\n')).toContain('No components match')
  })
})

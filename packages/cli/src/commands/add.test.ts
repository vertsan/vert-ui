import { existsSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { createDefaultConfig, writeConfig } from '../lib/config'
import type { RegistryItem } from '../lib/registry'
import { captureLogger, fakeRegistry, TEST_REGISTRY } from '../testing/fixtures'
import { runAdd } from './add'

const items: Record<string, RegistryItem> = {
  'https://vert.example/r/button.json': {
    name: 'button',
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    registryDependencies: ['https://vert.example/r/vert-cn.json'],
    files: [
      {
        path: 'components/vert-ui/button.tsx',
        type: 'registry:ui',
        content: 'export const Button = 1\n',
      },
    ],
  },
  'https://vert.example/r/vert-cn.json': {
    name: 'vert-cn',
    type: 'registry:lib',
    files: [{ path: 'lib/vert-ui/cn.ts', type: 'registry:lib', content: 'export const cn = 1\n' }],
  },
}

function setup(): string {
  const dir = mkdtempSync(join(tmpdir(), 'vert-add-'))
  const config = createDefaultConfig()
  config.registries = { '@vert': TEST_REGISTRY }
  writeConfig(dir, config)
  return dir
}

describe('runAdd', () => {
  it('writes the component and its registry dependencies', async () => {
    const dir = setup()
    await runAdd({
      specs: ['button'],
      cwd: dir,
      install: false,
      logger: captureLogger(),
      fetch: fakeRegistry(items),
    })
    expect(existsSync(join(dir, 'components/vert-ui/button.tsx'))).toBe(true)
    expect(existsSync(join(dir, 'lib/vert-ui/cn.ts'))).toBe(true)
  })

  it('does not write files on a dry run', async () => {
    const dir = setup()
    await runAdd({
      specs: ['button'],
      cwd: dir,
      dryRun: true,
      install: false,
      logger: captureLogger(),
      fetch: fakeRegistry(items),
    })
    expect(existsSync(join(dir, 'components/vert-ui/button.tsx'))).toBe(false)
  })

  it('reports existing files and prints the install command', async () => {
    const dir = setup()
    await runAdd({
      specs: ['button'],
      cwd: dir,
      install: false,
      logger: captureLogger(),
      fetch: fakeRegistry(items),
    })

    const logger = captureLogger()
    await runAdd({
      specs: ['button'],
      cwd: dir,
      install: false,
      logger,
      fetch: fakeRegistry(items),
    })
    const output = logger.lines.join('\n')
    expect(output).toContain('already exists')
    expect(output).toContain('class-variance-authority')
  })

  it('requires at least one component name', async () => {
    await expect(
      runAdd({ specs: [], cwd: setup(), logger: captureLogger(), fetch: fakeRegistry(items) }),
    ).rejects.toThrow(/at least one component/)
  })
})

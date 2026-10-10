import { existsSync, mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { captureLogger } from '../testing/fixtures'
import { runInit } from './init'

function setup(): string {
  return mkdtempSync(join(tmpdir(), 'vert-init-'))
}

describe('runInit', () => {
  it('writes components.json with the @vert registry', () => {
    const dir = setup()
    runInit({ cwd: dir, logger: captureLogger() })

    const config = JSON.parse(readFileSync(join(dir, 'components.json'), 'utf8'))
    expect(config.registries['@vert']).toContain('vert-ui.dev/r/{name}.json')
    expect(config.tailwind.css).toBe('src/styles.css')
  })

  it('honours --css and --base-color', () => {
    const dir = setup()
    runInit({ cwd: dir, css: 'app/globals.css', baseColor: 'zinc', logger: captureLogger() })
    const config = JSON.parse(readFileSync(join(dir, 'components.json'), 'utf8'))
    expect(config.tailwind.css).toBe('app/globals.css')
    expect(config.tailwind.baseColor).toBe('zinc')
  })

  it('refuses to overwrite without --force', () => {
    const dir = setup()
    runInit({ cwd: dir, logger: captureLogger() })
    expect(() => runInit({ cwd: dir, logger: captureLogger() })).toThrow(/already exists/)
    expect(existsSync(join(dir, 'components.json'))).toBe(true)
  })

  it('overwrites with --force', () => {
    const dir = setup()
    runInit({ cwd: dir, logger: captureLogger() })
    expect(() => runInit({ cwd: dir, force: true, logger: captureLogger() })).not.toThrow()
  })
})

import { describe, expect, it } from 'vitest'
import { createProgram } from './index'

describe('createProgram', () => {
  it('is named vert-ui', () => {
    expect(createProgram().name()).toBe('vert-ui')
  })

  it('registers the init, add and diff commands', () => {
    const names = createProgram().commands.map((command) => command.name())
    expect(names).toEqual(expect.arrayContaining(['init', 'add', 'diff']))
  })

  it('parses --version without exiting the process', () => {
    const program = createProgram()
    program.exitOverride()
    program.configureOutput({ writeOut: () => {}, writeErr: () => {} })
    expect(() => program.parse(['--version'], { from: 'user' })).toThrowError(
      expect.objectContaining({ code: 'commander.version' }),
    )
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  ThemeProvider,
  getThemeScript,
  useTheme,
  type ThemeContextValue,
} from './theme-provider'

function Probe() {
  const { theme, tone, resolvedTone, setTheme, setTone } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="tone">{tone}</span>
      <span data-testid="resolved">{resolvedTone}</span>
      <button type="button" onClick={() => setTheme('slate')}>
        slate
      </button>
      <button type="button" onClick={() => setTone('dark')}>
        dark
      </button>
    </div>
  )
}

function setSystemDark(matches: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: query.includes('prefers-color-scheme: dark') ? matches : false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.removeAttribute('data-tone')
  document.documentElement.classList.remove('dark')
  document.documentElement.style.colorScheme = ''
  setSystemDark(false)
})

afterEach(() => {
  window.localStorage.clear()
})

describe('ThemeProvider', () => {
  it('renders its children', () => {
    render(
      <ThemeProvider>
        <p>hello</p>
      </ThemeProvider>,
    )
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('applies the default theme and a resolved tone to <html>', () => {
    render(
      <ThemeProvider disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    expect(document.documentElement).toHaveAttribute('data-theme', 'vert')
    expect(document.documentElement).toHaveAttribute('data-tone', 'light')
    expect(document.documentElement).not.toHaveClass('dark')
    expect(document.documentElement.style.colorScheme).toBe('light')
  })

  it('resolves the system tone to dark when the OS prefers dark', () => {
    setSystemDark(true)
    render(
      <ThemeProvider defaultTone="system" disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    expect(screen.getByTestId('resolved')).toHaveTextContent('dark')
    expect(document.documentElement).toHaveAttribute('data-tone', 'dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('restores a persisted theme and tone', () => {
    window.localStorage.setItem('vert-ui-theme', 'ocean')
    window.localStorage.setItem('vert-ui-tone', 'dark')
    render(
      <ThemeProvider disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    expect(screen.getByTestId('theme')).toHaveTextContent('ocean')
    expect(document.documentElement).toHaveAttribute('data-theme', 'ocean')
    expect(document.documentElement).toHaveAttribute('data-tone', 'dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('updates <html>, state and storage when setTheme is called', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    await user.click(screen.getByRole('button', { name: 'slate' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'slate')
    expect(window.localStorage.getItem('vert-ui-theme')).toBe('slate')
  })

  it('updates <html> and storage when setTone is called', async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    await user.click(screen.getByRole('button', { name: 'dark' }))
    expect(document.documentElement).toHaveAttribute('data-tone', 'dark')
    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem('vert-ui-tone')).toBe('dark')
  })

  it('honours a custom storage key', () => {
    window.localStorage.setItem('acme-theme', 'sand')
    render(
      <ThemeProvider storageKey="acme" disableTransitionOnChange={false}>
        <Probe />
      </ThemeProvider>,
    )
    expect(document.documentElement).toHaveAttribute('data-theme', 'sand')
  })

  it('exposes the six built-in presets by default', () => {
    let captured: ThemeContextValue | undefined
    function Capture() {
      captured = useTheme()
      return null
    }
    render(
      <ThemeProvider disableTransitionOnChange={false}>
        <Capture />
      </ThemeProvider>,
    )
    expect(captured?.themes).toEqual([
      'vert',
      'slate',
      'sand',
      'midnight',
      'rose',
      'ocean',
    ])
  })

  it('throws when useTheme is used outside a provider', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Probe />)).toThrow(/ThemeProvider/)
    consoleError.mockRestore()
  })
})

describe('getThemeScript', () => {
  it('returns an IIFE referencing the storage keys and attributes', () => {
    const script = getThemeScript()
    expect(script).toContain('vert-ui-theme')
    expect(script).toContain('vert-ui-tone')
    expect(script).toContain('data-theme')
    expect(script).toContain('data-tone')
    expect(script).toContain('prefers-color-scheme: dark')
    expect(script.startsWith('(function(){')).toBe(true)
  })

  it('reflects a custom storage key and theme attribute', () => {
    const script = getThemeScript({ storageKey: 'acme', themeAttribute: 'data-scheme' })
    expect(script).toContain('acme-theme')
    expect(script).toContain('data-scheme')
  })
})

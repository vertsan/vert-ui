import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Badge } from './badge'

describe('Badge', () => {
  it('renders with default attributes', () => {
    render(<Badge>Stable</Badge>)
    const badge = screen.getByText('Stable')
    expect(badge).toHaveAttribute('data-slot', 'badge')
    expect(badge).toHaveAttribute('data-variant', 'default')
    expect(badge).toHaveAttribute('data-size', 'md')
  })

  it('exposes variant and size as data attributes', () => {
    render(
      <Badge variant="warning" size="lg">
        Beta
      </Badge>,
    )
    const badge = screen.getByText('Beta')
    expect(badge).toHaveAttribute('data-variant', 'warning')
    expect(badge).toHaveAttribute('data-size', 'lg')
  })

  it('renders a status dot when dot is set', () => {
    const { container } = render(<Badge dot>Online</Badge>)
    expect(container.querySelector('[data-slot="badge-dot"]')).not.toBeNull()
  })

  it('renders the child element with asChild', () => {
    render(
      <Badge asChild>
        <a href="/releases">v1.0</a>
      </Badge>,
    )
    const link = screen.getByRole('link', { name: 'v1.0' })
    expect(link).toHaveAttribute('href', '/releases')
    expect(link).toHaveAttribute('data-slot', 'badge')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription, AlertTitle } from './alert'

describe('Alert', () => {
  it('renders with default variant and size data attributes', () => {
    render(<Alert>Heads up</Alert>)
    const alert = screen.getByText('Heads up').closest('[data-slot="alert"]')
    expect(alert).not.toBeNull()
    expect(alert).toHaveAttribute('data-variant', 'default')
    expect(alert).toHaveAttribute('data-size', 'md')
  })

  it('exposes variant and size as data attributes', () => {
    render(
      <Alert variant="destructive" size="lg">
        Failed
      </Alert>,
    )
    const alert = screen.getByText('Failed').closest('[data-slot="alert"]')
    expect(alert).toHaveAttribute('data-variant', 'destructive')
    expect(alert).toHaveAttribute('data-size', 'lg')
  })

  it('renders a title and description', () => {
    render(
      <Alert>
        <AlertTitle>Scheduled maintenance</AlertTitle>
        <AlertDescription>The service restarts at 02:00 UTC.</AlertDescription>
      </Alert>,
    )
    expect(
      screen.getByRole('heading', { level: 5, name: 'Scheduled maintenance' }),
    ).toBeInTheDocument()
    expect(screen.getByText('The service restarts at 02:00 UTC.')).toBeInTheDocument()
  })

  it('keeps the decorative icon out of the accessibility tree', () => {
    const { container } = render(
      <Alert icon={<svg data-testid="icon" />}>Disk almost full</Alert>,
    )
    const icon = container.querySelector('[data-slot="alert-icon"]')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('passes through a live region role when provided', () => {
    render(
      <Alert role="alert" data-testid="live">
        Connection lost
      </Alert>,
    )
    expect(screen.getByTestId('live')).toHaveAttribute('role', 'alert')
  })

  it('forwards a ref to the root element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Alert ref={ref}>Ref</Alert>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

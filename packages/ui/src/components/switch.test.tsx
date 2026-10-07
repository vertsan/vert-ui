import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Switch } from './switch'

describe('Switch', () => {
  it('renders a switch with the unchecked state', () => {
    render(<Switch aria-label="Notifications" />)
    const control = screen.getByRole('switch')
    expect(control).toHaveAttribute('data-slot', 'switch')
    expect(control).toHaveAttribute('data-size', 'md')
    expect(control).toHaveAttribute('aria-checked', 'false')
    expect(control).toHaveAttribute('type', 'button')
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(<Switch aria-label="Notifications" onCheckedChange={onCheckedChange} />)
    const control = screen.getByRole('switch')
    await user.click(control)
    expect(control).toHaveAttribute('aria-checked', 'true')
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('toggles with the space key', async () => {
    const user = userEvent.setup()
    render(<Switch aria-label="Notifications" />)
    const control = screen.getByRole('switch')
    control.focus()
    await user.keyboard(' ')
    expect(control).toHaveAttribute('aria-checked', 'true')
  })

  it('starts checked when defaultChecked is set', () => {
    render(<Switch aria-label="Notifications" defaultChecked />)
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
  })

  it('does not toggle while disabled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(
      <Switch aria-label="Notifications" disabled onCheckedChange={onCheckedChange} />,
    )
    await user.click(screen.getByRole('switch'))
    expect(onCheckedChange).not.toHaveBeenCalled()
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false')
  })

  it('exposes variant and size data attributes', () => {
    render(<Switch aria-label="Notifications" variant="brand" size="lg" />)
    const control = screen.getByRole('switch')
    expect(control).toHaveAttribute('data-variant', 'brand')
    expect(control).toHaveAttribute('data-size', 'lg')
  })

  it('renders the thumb slot', () => {
    const { container } = render(<Switch aria-label="Notifications" />)
    expect(container.querySelector('[data-slot="switch-thumb"]')).not.toBeNull()
  })
})

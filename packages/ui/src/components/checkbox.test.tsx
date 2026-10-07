import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renders with the checkbox role and unchecked state', () => {
    render(<Checkbox aria-label="Accept terms" />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(checkbox).toHaveAttribute('data-state', 'unchecked')
    expect(checkbox).toHaveAttribute('data-slot', 'checkbox')
    expect(checkbox).toHaveAttribute('type', 'button')
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(<Checkbox aria-label="Accept terms" onCheckedChange={onCheckedChange} />)
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
    expect(onCheckedChange).toHaveBeenCalledWith(true)
    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(onCheckedChange).toHaveBeenLastCalledWith(false)
  })

  it('toggles with the space key', async () => {
    const user = userEvent.setup()
    render(<Checkbox aria-label="Accept terms" />)
    const checkbox = screen.getByRole('checkbox')
    checkbox.focus()
    await user.keyboard(' ')
    expect(checkbox).toHaveAttribute('aria-checked', 'true')
  })

  it('reflects the indeterminate state', () => {
    render(<Checkbox aria-label="Select all" checked="indeterminate" onCheckedChange={() => {}} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toHaveAttribute('aria-checked', 'mixed')
    expect(checkbox).toHaveAttribute('data-state', 'indeterminate')
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(<Checkbox aria-label="Accept terms" disabled onCheckedChange={onCheckedChange} />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
    await user.click(checkbox)
    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('marks itself invalid when invalid is set', () => {
    render(<Checkbox aria-label="Accept terms" invalid />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
  })
})

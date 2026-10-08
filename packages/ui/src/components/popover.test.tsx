import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

function renderPopover() {
  return render(
    <Popover>
      <PopoverTrigger asChild>
        <Button>Details</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Ships in 2–3 days.</p>
      </PopoverContent>
    </Popover>,
  )
}

describe('Popover', () => {
  it('is closed until the trigger is activated', () => {
    renderPopover()
    expect(screen.getByRole('button', { name: 'Details' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByText('Ships in 2–3 days.')).not.toBeInTheDocument()
  })

  it('opens on click and exposes dialog semantics', async () => {
    const user = userEvent.setup()
    renderPopover()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    expect(await screen.findByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Ships in 2–3 days.')).toBeInTheDocument()
  })

  it('closes on escape', async () => {
    const user = userEvent.setup()
    renderPopover()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    await screen.findByRole('dialog')
    await user.keyboard('{Escape}')
    expect(screen.queryByText('Ships in 2–3 days.')).not.toBeInTheDocument()
  })

  it('exposes data-slot attributes', async () => {
    const user = userEvent.setup()
    renderPopover()
    await user.click(screen.getByRole('button', { name: 'Details' }))
    expect(await screen.findByRole('dialog')).toHaveAttribute('data-slot', 'popover-content')
  })
})

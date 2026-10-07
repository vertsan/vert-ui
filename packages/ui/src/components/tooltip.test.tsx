import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './button'
import { Tooltip } from './tooltip'

describe('Tooltip', () => {
  it('renders nothing until it is open', () => {
    render(
      <Tooltip content="Duplicate">
        <Button>Duplicate</Button>
      </Tooltip>,
    )
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })

  it('shows the content and links it to the trigger while open', () => {
    render(
      <Tooltip content="Duplicate this row" open>
        <Button>Duplicate</Button>
      </Tooltip>,
    )
    const bubble = screen.getByRole('tooltip')
    expect(bubble).toHaveTextContent('Duplicate this row')
    const trigger = screen.getByRole('button', { name: 'Duplicate' })
    expect(trigger).toHaveAttribute('aria-describedby', bubble.id)
  })

  it('closes on escape', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    render(
      <Tooltip content="Duplicate" open onOpenChange={onOpenChange} delayDuration={0}>
        <Button>Duplicate</Button>
      </Tooltip>,
    )
    const trigger = screen.getByRole('button', { name: 'Duplicate' })
    trigger.focus()
    await user.keyboard('{Escape}')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('opens on focus with a zero delay', async () => {
    render(
      <Tooltip content="Keyboard hint" delayDuration={0}>
        <Button>Focus me</Button>
      </Tooltip>,
    )
    screen.getByRole('button', { name: 'Focus me' }).focus()
    expect(await screen.findByRole('tooltip')).toHaveTextContent('Keyboard hint')
  })

  it('can hide the arrow', () => {
    const { container } = render(
      <Tooltip content="Tip" open showArrow={false}>
        <Button>Trigger</Button>
      </Tooltip>,
    )
    expect(container.querySelector('[data-slot="tooltip-arrow"]')).not.toBeInTheDocument()
  })
})

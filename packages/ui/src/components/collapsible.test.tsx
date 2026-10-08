import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible'

function renderCollapsible() {
  return render(
    <Collapsible>
      <CollapsibleTrigger>Show details</CollapsibleTrigger>
      <CollapsibleContent>Shipping address</CollapsibleContent>
    </Collapsible>,
  )
}

describe('Collapsible', () => {
  it('keeps content hidden until expanded', () => {
    renderCollapsible()
    const trigger = screen.getByRole('button', { name: 'Show details' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Shipping address')).not.toBeInTheDocument()
  })

  it('toggles content on trigger click', async () => {
    const user = userEvent.setup()
    renderCollapsible()
    const trigger = screen.getByRole('button', { name: 'Show details' })
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Shipping address')).toBeInTheDocument()
    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Shipping address')).not.toBeInTheDocument()
  })

  it('exposes data-slot attributes', () => {
    const { container } = renderCollapsible()
    expect(container.querySelector('[data-slot="collapsible"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="collapsible-trigger"]')).not.toBeNull()
  })
})

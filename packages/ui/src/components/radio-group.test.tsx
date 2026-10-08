import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { RadioGroup, RadioGroupItem } from './radio-group'

function renderGroup(defaultValue = 'a') {
  return render(
    <RadioGroup defaultValue={defaultValue} aria-label="Size">
      <RadioGroupItem value="a" />
      <RadioGroupItem value="b" />
      <RadioGroupItem value="c" />
    </RadioGroup>,
  )
}

describe('RadioGroup', () => {
  it('renders a radiogroup with radio items', () => {
    renderGroup()
    expect(screen.getByRole('radiogroup', { name: 'Size' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  it('marks the default value as checked', () => {
    renderGroup()
    expect(screen.getByRole('radio', { checked: true })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('data-state', 'checked')
  })

  it('selects an item on click', async () => {
    const user = userEvent.setup()
    renderGroup()
    await user.click(screen.getAllByRole('radio')[1])
    expect(screen.getAllByRole('radio')[1]).toHaveAttribute('data-state', 'checked')
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('data-state', 'unchecked')
  })

  it('moves selection with arrow keys', async () => {
    const user = userEvent.setup()
    renderGroup()
    await user.tab()
    // hold the key: Radix moves focus asynchronously, and the item selects
    // itself on focus while the arrow key is still down
    await user.keyboard('{ArrowDown>}')
    await waitFor(() =>
      expect(screen.getAllByRole('radio')[1]).toHaveAttribute('data-state', 'checked'),
    )
    await user.keyboard('{/ArrowDown}')
    expect(screen.getAllByRole('radio')[0]).toHaveAttribute('data-state', 'unchecked')
  })

  it('exposes orientation and item size as data attributes', () => {
    const { container } = render(
      <RadioGroup orientation="horizontal" aria-label="Size">
        <RadioGroupItem value="a" size="lg" />
      </RadioGroup>,
    )
    expect(container.querySelector('[data-slot="radio-group"]')).toHaveAttribute(
      'data-orientation',
      'horizontal',
    )
    expect(container.querySelector('[data-slot="radio-group-item"]')).toHaveAttribute(
      'data-size',
      'lg',
    )
  })
})

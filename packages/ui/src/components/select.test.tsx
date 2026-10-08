import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select'

function renderSelect(onValueChange?: (value: string) => void) {
  return render(
    <Select defaultValue="apple" onValueChange={onValueChange}>
      <SelectTrigger aria-label="Fruit">
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruit</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>,
  )
}

describe('Select', () => {
  it('renders a combobox trigger with the selected value', () => {
    renderSelect()
    const trigger = screen.getByRole('combobox', { name: 'Fruit' })
    expect(trigger).toHaveAttribute('data-slot', 'select-trigger')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveTextContent('Apple')
  })

  it('shows the placeholder until a value is chosen', () => {
    render(
      <Select>
        <SelectTrigger aria-label="Fruit">
          <SelectValue placeholder="Pick a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>,
    )
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent(
      'Pick a fruit',
    )
  })

  it('opens a listbox and selects an option', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    renderSelect(onValueChange)
    await user.click(screen.getByRole('combobox', { name: 'Fruit' }))
    expect(await screen.findByRole('listbox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)

    await user.click(screen.getByRole('option', { name: 'Banana' }))
    expect(onValueChange).toHaveBeenCalledWith('banana')
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument())
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent('Banana')
  })

  it('closes without changing the value on escape', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()
    renderSelect(onValueChange)
    await user.click(screen.getByRole('combobox', { name: 'Fruit' }))
    await screen.findByRole('listbox')
    await user.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument())
    expect(onValueChange).not.toHaveBeenCalled()
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toHaveTextContent('Apple')
  })

  it('marks the selected option', async () => {
    const user = userEvent.setup()
    renderSelect()
    await user.click(screen.getByRole('combobox', { name: 'Fruit' }))
    const selected = await screen.findByRole('option', { name: 'Apple' })
    expect(selected).toHaveAttribute('aria-selected', 'true')
    expect(selected).toHaveAttribute('data-state', 'checked')
  })

  it('sets aria-required when required', () => {
    render(
      <Select required>
        <SelectTrigger aria-label="Fruit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>,
    )
    expect(screen.getByRole('combobox', { name: 'Fruit' })).toBeRequired()
  })

  it('exposes size and invalid on the trigger', () => {
    render(
      <Select>
        <SelectTrigger aria-label="Fruit" size="lg" invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
        </SelectContent>
      </Select>,
    )
    const trigger = screen.getByRole('combobox', { name: 'Fruit' })
    expect(trigger).toHaveAttribute('data-size', 'lg')
    expect(trigger).toHaveAttribute('data-invalid', 'true')
    expect(trigger).toHaveAttribute('aria-invalid', 'true')
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './command'

describe('Command', () => {
  it('renders input and list with data-slots', () => {
    render(
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem>Home</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    )
    expect(screen.getByPlaceholderText('Search…')).toHaveAttribute('data-slot', 'command-input')
    expect(screen.getByRole('listbox')).toHaveAttribute('data-slot', 'command-list')
    expect(screen.getByText('Home')).toHaveAttribute('data-slot', 'command-item')
  })

  it('filters items as the user types', async () => {
    const user = userEvent.setup()
    render(
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandItem>Settings</CommandItem>
          <CommandItem>Dashboard</CommandItem>
        </CommandList>
      </Command>,
    )
    await user.type(screen.getByPlaceholderText('Search…'), 'set')
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument()
  })

  it('shows the empty state when nothing matches', async () => {
    const user = userEvent.setup()
    render(
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
          <CommandItem>Settings</CommandItem>
        </CommandList>
      </Command>,
    )
    await user.type(screen.getByPlaceholderText('Search…'), 'zzz')
    expect(screen.getByText('No results')).toHaveAttribute('data-slot', 'command-empty')
  })

  it('selects an item with the keyboard and calls onSelect', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(
      <Command>
        <CommandInput placeholder="Search…" />
        <CommandList>
          <CommandItem onSelect={onSelect}>Settings</CommandItem>
          <CommandItem onSelect={onSelect}>Dashboard</CommandItem>
        </CommandList>
      </Command>,
    )
    await user.type(screen.getByPlaceholderText('Search…'), 'dash')
    await user.keyboard('{Enter}')
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})

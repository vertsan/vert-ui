import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './dropdown-menu'

function renderMenu(onOpenChange?: (open: boolean) => void) {
  return render(
    <DropdownMenu onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button>Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => {}}>Edit</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => {}}>
            Duplicate
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked onCheckedChange={() => {}}>
          Show grid
        </DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="a" onValueChange={() => {}}>
          <DropdownMenuRadioItem value="a">Option A</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="b">Option B</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>,
  )
}

describe('DropdownMenu', () => {
  it('is closed until the trigger is activated', () => {
    renderMenu()
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Options' })).toHaveAttribute(
      'aria-haspopup',
      'menu',
    )
  })

  it('opens on click and exposes menu semantics', async () => {
    const user = userEvent.setup()
    renderMenu()
    await user.click(screen.getByRole('button', { name: 'Options' }))
    expect(await screen.findByRole('menu')).toBeInTheDocument()
    expect(screen.getAllByRole('menuitem')).toHaveLength(2)
    expect(screen.getByRole('menuitemcheckbox', { name: 'Show grid' })).toHaveAttribute(
      'aria-checked',
      'true',
    )
    expect(screen.getByRole('menuitemradio', { name: 'Option A' })).toHaveAttribute(
      'aria-checked',
      'true',
    )
    expect(screen.getByText('Actions')).toBeInTheDocument()
  })

  it('closes on escape', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    renderMenu(onOpenChange)
    await user.click(screen.getByRole('button', { name: 'Options' }))
    await screen.findByRole('menu')
    await user.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument())
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('moves focus between items with arrow keys', async () => {
    const user = userEvent.setup()
    renderMenu()
    await user.click(screen.getByRole('button', { name: 'Options' }))
    await screen.findByRole('menu')
    await user.keyboard('{ArrowDown}')
    const items = screen.getAllByRole('menuitem')
    expect(items[0]).toHaveAttribute('data-highlighted', '')
  })

  it('runs onSelect and closes', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onSelect}>Archive</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    )
    await user.click(screen.getByRole('button', { name: 'Options' }))
    await user.click(await screen.findByRole('menuitem', { name: 'Archive' }))
    expect(onSelect).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument())
  })
})

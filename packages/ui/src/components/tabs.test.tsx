import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'

function renderTabs() {
  return render(
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Manage your account.</TabsContent>
      <TabsContent value="password">Change your password.</TabsContent>
    </Tabs>,
  )
}

describe('Tabs', () => {
  it('renders tablist, tabs and the selected panel', () => {
    renderTabs()
    expect(screen.getByRole('tablist')).toHaveAttribute('data-slot', 'tabs-list')
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(2)
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('data-state', 'active')
    expect(screen.getByRole('tab', { name: 'Account' })).toBeInTheDocument()
    expect(screen.getByText('Manage your account.')).toBeInTheDocument()
  })

  it('hides inactive panels', () => {
    renderTabs()
    expect(screen.queryByText('Change your password.')).not.toBeInTheDocument()
  })

  it('switches panels when a tab is clicked', async () => {
    const user = userEvent.setup()
    renderTabs()
    await user.click(screen.getByRole('tab', { name: 'Password' }))
    expect(screen.getByText('Change your password.')).toBeInTheDocument()
    expect(screen.queryByText('Manage your account.')).not.toBeInTheDocument()
  })

  it('moves focus and selection with arrow keys', async () => {
    const user = userEvent.setup()
    renderTabs()
    const first = screen.getByRole('tab', { name: 'Account' })
    first.focus()
    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: 'Password' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByRole('tab', { name: 'Account' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('exposes variant and size on the root', () => {
    render(
      <Tabs defaultValue="a" variant="pill" size="sm">
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
        </TabsList>
      </Tabs>,
    )
    const root = screen.getByRole('tablist').parentElement
    expect(root).toHaveAttribute('data-slot', 'tabs')
    expect(root).toHaveAttribute('data-variant', 'pill')
    expect(root).toHaveAttribute('data-size', 'sm')
    expect(screen.getByRole('tab')).toHaveAttribute('data-variant', 'pill')
  })

  it('supports a controlled value', () => {
    render(
      <Tabs value="b" onValueChange={() => {}}>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
        </TabsList>
        <TabsContent value="b">Panel B</TabsContent>
      </Tabs>,
    )
    expect(screen.getByRole('tab', { name: 'B' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Panel B')).toBeInTheDocument()
  })
})

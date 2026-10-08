import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

describe('HoverCard', () => {
  it('renders the trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="/users/ada">@ada</a>
        </HoverCardTrigger>
        <HoverCardContent>Ada Lovelace</HoverCardContent>
      </HoverCard>,
    )
    expect(screen.getByRole('link', { name: '@ada' })).toHaveAttribute(
      'data-slot',
      'hover-card-trigger',
    )
  })

  it('opens content on hover/focus of the trigger', async () => {
    const user = userEvent.setup()
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="/users/ada">@ada</a>
        </HoverCardTrigger>
        <HoverCardContent>Ada Lovelace</HoverCardContent>
      </HoverCard>,
    )
    await user.hover(screen.getByRole('link', { name: '@ada' }))
    await waitFor(() => {
      expect(screen.getByText('Ada Lovelace')).toHaveAttribute('data-slot', 'hover-card-content')
    })
  })

  it('keeps content out of the DOM while closed', () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="/users/ada">@ada</a>
        </HoverCardTrigger>
        <HoverCardContent>Ada Lovelace</HoverCardContent>
      </HoverCard>,
    )
    expect(screen.queryByText('Ada Lovelace')).not.toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

describe('Avatar', () => {
  it('renders the fallback with size and variant attributes', () => {
    const { container } = render(
      <Avatar size="lg" variant="brand">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )
    const avatar = container.querySelector('[data-slot="avatar"]')
    expect(avatar).toHaveAttribute('data-size', 'lg')
    expect(avatar).toHaveAttribute('data-variant', 'brand')
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('uses defaults when no size or variant is given', () => {
    const { container } = render(<Avatar data-testid="avatar" />)
    const avatar = container.querySelector('[data-slot="avatar"]')
    expect(avatar).toHaveAttribute('data-size', 'md')
    expect(avatar).toHaveAttribute('data-variant', 'default')
  })

  it('keeps the fallback visible until the image has loaded', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="/avatar.png" alt="Jane Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
    )
    expect(screen.getByText('JD')).toBeInTheDocument()
    expect(container.querySelector('[data-slot="avatar"]')).toBeInTheDocument()
  })
})

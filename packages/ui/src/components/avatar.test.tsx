import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from './avatar'

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

describe('AvatarGroup', () => {
  const many = (
    <AvatarGroup max={2}>
      {['A', 'B', 'C', 'D'].map((initials) => (
        <Avatar key={initials}>
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      ))}
    </AvatarGroup>
  )

  it('renders only max avatars and an overflow counter', () => {
    const { container } = render(many)
    expect(container.querySelectorAll('[data-slot="avatar-group-item"]')).toHaveLength(2)
    const overflow = container.querySelector('[data-slot="avatar-group-overflow"]')
    expect(overflow).not.toBeNull()
    expect(overflow).toHaveTextContent('+2')
  })

  it('labels the overflow counter for assistive tech', () => {
    const { container } = render(many)
    expect(container.querySelector('[data-slot="avatar-group-overflow"]')).toHaveAttribute(
      'aria-label',
      '2 more',
    )
  })

  it('skips the counter when everything fits', () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    )
    expect(container.querySelector('[data-slot="avatar-group-overflow"]')).toBeNull()
    expect(container.querySelector('[data-slot="avatar-group"]')).not.toHaveAttribute(
      'data-overflow',
    )
  })

  it('forwards a ref to the group container', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(
      <AvatarGroup ref={ref}>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toHaveAttribute('data-slot', 'avatar-group')
  })
})

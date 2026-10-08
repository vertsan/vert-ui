import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('renders a decorative placeholder', () => {
    const { container } = render(<Skeleton className="h-4 w-40" />)
    const skeleton = container.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toBeInTheDocument()
    expect(skeleton).toHaveAttribute('aria-hidden', 'true')
    expect(skeleton).toHaveClass('h-4', 'w-40')
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<Skeleton />)
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })
})

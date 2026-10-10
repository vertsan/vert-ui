import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spacer } from './spacer'

describe('Spacer', () => {
  it('grows to fill available space and is hidden from assistive tech', () => {
    const { container } = render(<Spacer />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'spacer')
    expect(el).toHaveAttribute('aria-hidden', 'true')
    expect(el).toHaveAttribute('data-grow', 'true')
    expect(el).toHaveClass('flex-1')
  })

  it('takes a fixed size on both axes', () => {
    const { container } = render(<Spacer size={4} />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('size-4', 'shrink-0')
    expect(el).not.toHaveClass('flex-1')
    expect(el).not.toHaveAttribute('data-grow')
  })

  it('constrains a single axis', () => {
    const { container: horizontal } = render(<Spacer size={6} axis="horizontal" />)
    expect(horizontal.firstElementChild).toHaveClass('w-6')
    const { container: vertical } = render(<Spacer size={8} axis="vertical" />)
    expect(vertical.firstElementChild).toHaveClass('h-8')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Spacer asChild>
        <hr />
      </Spacer>,
    )
    expect(container.querySelector('hr')).toHaveAttribute('data-slot', 'spacer')
  })
})

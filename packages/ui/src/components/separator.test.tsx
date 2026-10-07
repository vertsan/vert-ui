import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Separator } from './separator'

describe('Separator', () => {
  it('renders an exposed horizontal separator by default', () => {
    const { container } = render(<Separator />)
    const separator = container.firstChild as HTMLElement
    expect(separator).toHaveAttribute('data-slot', 'separator')
    expect(separator).toHaveAttribute('role', 'separator')
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
    expect(separator).not.toHaveAttribute('aria-hidden')
  })

  it('marks a vertical separator with aria-orientation', () => {
    const { container } = render(<Separator orientation="vertical" />)
    expect(container.firstChild).toHaveAttribute('aria-orientation', 'vertical')
    expect(container.firstChild).toHaveAttribute('data-orientation', 'vertical')
  })

  it('hides decorative separators from assistive technology', () => {
    const { container } = render(<Separator decorative />)
    const separator = container.firstChild as HTMLElement
    expect(separator).not.toHaveAttribute('role')
    expect(separator).toHaveAttribute('aria-hidden', 'true')
    expect(separator).not.toHaveAttribute('aria-orientation')
  })

  it('accepts a custom role', () => {
    const { container } = render(<Separator role="presentation" />)
    expect(container.firstChild).toHaveAttribute('role', 'presentation')
  })

  it('forwards a ref', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Separator ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

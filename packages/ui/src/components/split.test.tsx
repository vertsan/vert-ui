import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Split } from './split'

describe('Split', () => {
  it('stacks on mobile and splits at the default breakpoint', () => {
    const { container } = render(<Split />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'split')
    expect(el).toHaveAttribute('data-collapse', 'md')
    expect(el).toHaveClass('grid', 'grid-cols-1', 'gap-6')
    expect(el).toHaveClass('md:[grid-template-columns:var(--vert-split)]')
  })

  it('honours a custom template and collapse point', () => {
    const { container } = render(<Split collapse="lg" templateColumns="1fr 2fr" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-collapse', 'lg')
    expect(el).toHaveClass('lg:[grid-template-columns:var(--vert-split)]')
    expect(el.style.getPropertyValue('--vert-split')).toBe('1fr 2fr')
  })

  it('supports gap and align variants', () => {
    const { container } = render(<Split gap={8} align="start" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('gap-8', 'items-start')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Split asChild>
        <div>
          <span>a</span>
          <span>b</span>
        </div>
      </Split>,
    )
    expect(container.querySelector('div')).toHaveAttribute('data-slot', 'split')
  })
})

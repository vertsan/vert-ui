import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cluster } from './cluster'

describe('Cluster', () => {
  it('renders a wrapping flex row with sensible defaults', () => {
    const { container } = render(<Cluster />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'cluster')
    expect(el).toHaveClass('flex', 'flex-wrap', 'items-center', 'justify-start', 'gap-2')
  })

  it('applies gap, alignment and justification variants', () => {
    const { container } = render(
      <Cluster gap={3} justify="between" align="baseline" smGap={6} />,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('gap-3', 'justify-between', 'items-baseline', 'sm:gap-6')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Cluster asChild>
        <div>
          <span>tag</span>
        </div>
      </Cluster>,
    )
    const el = container.querySelector('div') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'cluster')
    expect(el).toHaveClass('flex-wrap')
  })
})

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AspectRatio } from './aspect-ratio'

describe('AspectRatio', () => {
  it('defaults to a 1:1 box', () => {
    const { container } = render(<AspectRatio>content</AspectRatio>)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'aspect-ratio')
    expect(el).toHaveAttribute('data-ratio', '1')
    expect(parseFloat(el.style.aspectRatio)).toBe(1)
    expect(el).toHaveClass('relative', 'w-full', 'overflow-hidden')
  })

  it('applies a custom ratio', () => {
    const { container } = render(<AspectRatio ratio={16 / 9} />)
    const el = container.firstElementChild as HTMLElement
    expect(parseFloat(el.style.aspectRatio)).toBeCloseTo(16 / 9)
  })

  it('makes children fill the box when fill is set', () => {
    const { container } = render(<AspectRatio fill />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('[&>*]:absolute', '[&>*]:inset-0', '[&>*]:size-full')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <AspectRatio asChild ratio={2}>
        <figure>media</figure>
      </AspectRatio>,
    )
    const el = container.querySelector('figure') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'aspect-ratio')
  })
})

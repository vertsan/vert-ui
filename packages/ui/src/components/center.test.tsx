import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Center } from './center'

describe('Center', () => {
  it('centres content on both axes by default', () => {
    const { container } = render(<Center>content</Center>)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'center')
    expect(el).toHaveAttribute('data-axis', 'both')
    expect(el).toHaveClass('flex', 'items-center', 'justify-center')
  })

  it('centres on a single axis', () => {
    const { container } = render(<Center axis="horizontal" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('justify-center')
    expect(el).not.toHaveClass('items-center')
  })

  it('caps the measure and adds gutters', () => {
    const { container } = render(<Center maxWidth="48rem" padded />)
    const el = container.firstElementChild as HTMLElement
    expect(el.style.maxWidth).toBe('48rem')
    expect(el).toHaveClass('px-4', 'sm:px-6')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Center asChild>
        <main>page</main>
      </Center>,
    )
    const el = container.querySelector('main') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'center')
  })
})

import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Stack } from './stack'

describe('Stack', () => {
  it('stacks vertically with the default gap', () => {
    const { container } = render(<Stack />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'stack')
    expect(el).toHaveAttribute('data-direction', 'column')
    expect(el).toHaveClass('flex', 'flex-col', 'gap-4')
  })

  it('lays out as a row with alignment and justification', () => {
    const { container } = render(
      <Stack direction="row" align="center" justify="between" wrap />,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-direction', 'row')
    expect(el).toHaveClass('flex-row', 'items-center', 'justify-between', 'flex-wrap')
  })

  it('supports responsive gaps', () => {
    const { container } = render(<Stack gap={2} smGap={4} mdGap={6} lgGap={8} />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('gap-2', 'sm:gap-4', 'md:gap-6', 'lg:gap-8')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Stack asChild direction="row">
        <ul>
          <li>a</li>
        </ul>
      </Stack>,
    )
    const el = container.querySelector('ul') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'stack')
    expect(el).toHaveClass('flex-row')
  })
})

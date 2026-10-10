import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Grid, GridItem } from './grid'

describe('Grid', () => {
  it('renders a single-column grid by default', () => {
    const { container } = render(<Grid />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'grid')
    expect(el).toHaveAttribute('data-columns', '1')
    expect(el).toHaveClass('grid', 'grid-cols-1', 'gap-4')
  })

  it('applies responsive column counts', () => {
    const { container } = render(<Grid columns={1} smColumns={2} mdColumns={3} lgColumns={4} />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-columns', '1')
    expect(el).toHaveClass(
      'grid-cols-1',
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4',
    )
  })

  it('does not leak variant props onto the DOM', () => {
    const { container } = render(<Grid columns={2} gap={6} align="center" />)
    const el = container.firstElementChild as HTMLElement
    expect(el.hasAttribute('columns')).toBe(false)
    expect(el.hasAttribute('gap')).toBe(false)
    expect(el.hasAttribute('align')).toBe(false)
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Grid asChild columns={2}>
        <section>cells</section>
      </Grid>,
    )
    const el = container.querySelector('section') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'grid')
    expect(el).toHaveClass('grid-cols-2')
  })

  it('supports auto-fit tracks with a custom minimum width', () => {
    const { container } = render(<Grid autoFit minItemWidth="12rem" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-auto-fit', 'true')
    expect(el.style.gridTemplateColumns).toBe('repeat(auto-fit, minmax(12rem, 1fr))')
    expect(el).not.toHaveAttribute('data-columns')
    expect(el).not.toHaveClass('grid-cols-1')
  })

  it('accepts a fully custom template that overrides columns', () => {
    const { container } = render(
      <Grid templateColumns="minmax(0,1fr) 200px" templateRows="auto 1fr" />,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el.style.gridTemplateColumns).toBe('minmax(0,1fr) 200px')
    expect(el.style.gridTemplateRows).toBe('auto 1fr')
    expect(el).not.toHaveClass('grid-cols-1')
  })
})

describe('GridItem', () => {
  it('renders an item that can span columns responsively', () => {
    const { container } = render(
      <GridItem colSpan="full" mdColSpan={6} rowSpan={2}>
        cell
      </GridItem>,
    )
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'grid-item')
    expect(el).toHaveClass('col-span-full', 'md:col-span-6', 'row-span-2', 'min-w-0')
  })

  it('does not leak variant props onto the DOM', () => {
    const { container } = render(<GridItem colSpan={4} />)
    const el = container.firstElementChild as HTMLElement
    expect(el.hasAttribute('colSpan')).toBe(false)
    expect(el.hasAttribute('rowSpan')).toBe(false)
  })
})

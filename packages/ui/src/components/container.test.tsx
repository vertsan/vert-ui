import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Container } from './container'

describe('Container', () => {
  it('renders a centred, padded container with the default size', () => {
    const { container } = render(<Container>content</Container>)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'container')
    expect(el).toHaveAttribute('data-size', 'lg')
    expect(el).toHaveClass('mx-auto', 'w-full', 'max-w-6xl')
    expect(el).toHaveClass('px-4', 'sm:px-6', 'lg:px-8')
  })

  it('applies the requested size', () => {
    const { container } = render(<Container size="xl" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveAttribute('data-size', 'xl')
    expect(el).toHaveClass('max-w-7xl')
    expect(el).not.toHaveClass('max-w-6xl')
  })

  it('drops the gutters when padded is false', () => {
    const { container } = render(<Container padded={false} />)
    const el = container.firstElementChild as HTMLElement
    expect(el).not.toHaveClass('px-4')
    expect(el).not.toHaveAttribute('data-padded')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Container asChild size="sm">
        <section>child</section>
      </Container>,
    )
    const el = container.querySelector('section') as HTMLElement
    expect(el).toBeInTheDocument()
    expect(el).toHaveAttribute('data-slot', 'container')
    expect(el).toHaveClass('max-w-3xl')
  })
})

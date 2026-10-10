import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Section } from './section'

describe('Section', () => {
  it('renders a section with the default vertical rhythm', () => {
    const { container } = render(<Section>content</Section>)
    const el = container.firstElementChild as HTMLElement
    expect(el.tagName).toBe('SECTION')
    expect(el).toHaveAttribute('data-slot', 'section')
    expect(el).toHaveAttribute('data-size', 'md')
    expect(el).toHaveClass('w-full', 'py-12', 'sm:py-16')
  })

  it('applies the requested size', () => {
    const { container } = render(<Section size="xl" />)
    const el = container.firstElementChild as HTMLElement
    expect(el).toHaveClass('py-20', 'sm:py-32')
  })

  it('lets an arbitrary space override the size scale', () => {
    const { container } = render(<Section size="xl" space="3.5rem" />)
    const el = container.firstElementChild as HTMLElement
    expect(el.style.paddingTop).toBe('3.5rem')
    expect(el.style.paddingBottom).toBe('3.5rem')
    expect(el).not.toHaveClass('py-20')
    expect(el).not.toHaveAttribute('data-size')
  })

  it('renders the child element when asChild is set', () => {
    const { container } = render(
      <Section asChild>
        <article>post</article>
      </Section>,
    )
    const el = container.querySelector('article') as HTMLElement
    expect(el).toHaveAttribute('data-slot', 'section')
  })
})

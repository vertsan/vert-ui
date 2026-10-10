import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

function renderAccordion() {
  return render(
    <Accordion type="single" collapsible defaultValue="one">
      <AccordionItem value="one">
        <AccordionTrigger>What is vert-ui?</AccordionTrigger>
        <AccordionContent>An original component library.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Is it free?</AccordionTrigger>
        <AccordionContent>Yes.</AccordionContent>
      </AccordionItem>
    </Accordion>,
  )
}

describe('Accordion', () => {
  it('renders items with expandable triggers', () => {
    renderAccordion()
    const triggers = screen.getAllByRole('button')
    expect(triggers).toHaveLength(2)
    expect(triggers[0]).toHaveAttribute('aria-expanded', 'true')
    expect(triggers[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('An original component library.')).toBeInTheDocument()
  })

  it('opens the clicked item and closes the previous one (single mode)', async () => {
    const user = userEvent.setup()
    renderAccordion()
    await user.click(screen.getByRole('button', { name: 'Is it free?' }))
    expect(screen.getByRole('button', { name: 'What is vert-ui?' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: 'Is it free?' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByText('Yes.')).toBeInTheDocument()
  })

  it('exposes variant on the root and data-slot on parts', () => {
    const { container } = render(
      <Accordion type="single" variant="bordered">
        <AccordionItem value="a">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(container.querySelector('[data-slot="accordion"]')).toHaveAttribute(
      'data-variant',
      'bordered',
    )
    expect(container.querySelector('[data-slot="accordion-item"]')).toHaveClass(
      'rounded-lg',
      'px-4',
    )
    expect(container.querySelector('[data-slot="accordion-trigger"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="accordion-content"]')).not.toBeNull()
  })

  it('cascades the size variant from the root to triggers and content', () => {
    const { container } = render(
      <Accordion type="single" size="lg" defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    const trigger = screen.getByRole('button', { name: 'Question' })
    expect(trigger).toHaveClass('py-5', 'text-base')
    expect(trigger).toHaveAttribute('data-size', 'lg')
    expect(container.querySelector('[data-slot="accordion"]')).toHaveAttribute('data-size', 'lg')
    expect(container.querySelector('[data-slot="accordion-content-inner"]')).toHaveClass('pb-5')
  })

  it('allows a per-trigger size override', () => {
    render(
      <Accordion type="single" size="lg">
        <AccordionItem value="a">
          <AccordionTrigger size="sm">Compact</AccordionTrigger>
          <AccordionContent>Body</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByRole('button', { name: 'Compact' })).toHaveClass('py-3', 'text-sm')
  })

  it('renders a custom indicator instead of the default chevron', () => {
    const { container } = render(
      <Accordion
        type="single"
        indicator={<span data-testid="dot">+</span>}
      >
        <AccordionItem value="a">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(screen.getByTestId('dot')).toBeInTheDocument()
    expect(container.querySelector('svg')).toBeNull()
  })

  it('omits the indicator when indicator is false', () => {
    const { container } = render(
      <Accordion type="single" indicator={false}>
        <AccordionItem value="a">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    expect(container.querySelector('[data-slot="accordion-indicator"]')).toBeNull()
    expect(container.querySelector('svg')).toBeNull()
  })

  it('places the indicator before the label when position is start', () => {
    render(
      <Accordion type="single" indicatorPosition="start">
        <AccordionItem value="a">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    const trigger = screen.getByRole('button', { name: 'Question' })
    expect(trigger.firstElementChild).toHaveAttribute('data-slot', 'accordion-indicator')
    expect(trigger.lastElementChild).toHaveAttribute('data-slot', 'accordion-label')
  })

  it('applies the height-animation classes to the content', () => {
    const { container } = render(
      <Accordion type="single" defaultValue="a">
        <AccordionItem value="a">
          <AccordionTrigger>Question</AccordionTrigger>
          <AccordionContent>Answer</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )
    const content = container.querySelector('[data-slot="accordion-content"]')
    expect(content?.className).toContain('vert-accordion-down')
    expect(content?.className).toContain('vert-accordion-up')
  })
})

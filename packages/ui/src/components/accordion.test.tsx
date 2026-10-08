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
    expect(container.querySelector('[data-slot="accordion-trigger"]')).not.toBeNull()
    expect(container.querySelector('[data-slot="accordion-content"]')).not.toBeNull()
  })
})

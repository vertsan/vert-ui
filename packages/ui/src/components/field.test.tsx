import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Field, FieldGroup } from './field'
import { Input } from './input'

describe('Field', () => {
  it('links the label to the control', () => {
    render(
      <Field label="Email">
        {(field) => <Input {...field} placeholder="you@example.com" />}
      </Field>,
    )
    const input = screen.getByLabelText(/Email/)
    expect(input).toHaveAttribute('id')
    expect(input.closest('[data-slot="field"]')).not.toBeNull()
  })

  it('links description and error with aria-describedby, error first', () => {
    render(
      <Field label="Email" description="We never share it." error="Required field.">
        {(field) => <Input {...field} />}
      </Field>,
    )
    const input = screen.getByLabelText('Email')
    const describedBy = input.getAttribute('aria-describedby') ?? ''
    const [first, second] = describedBy.split(' ')
    expect(document.getElementById(first)?.textContent).toBe('Required field.')
    expect(document.getElementById(second)?.textContent).toBe('We never share it.')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input.closest('[data-slot="field"]')).toHaveAttribute('data-invalid', 'true')
  })

  it('omits aria-invalid and aria-describedby when clean', () => {
    render(
      <Field label="Name">
        {(field) => <Input {...field} />}
      </Field>,
    )
    const input = screen.getByLabelText('Name')
    expect(input).not.toHaveAttribute('aria-invalid')
    expect(input).not.toHaveAttribute('aria-describedby')
  })

  it('marks required fields natively with a decorative asterisk', () => {
    render(
      <Field label="Email" required>
        {(field) => <Input {...field} />}
      </Field>,
    )
    const input = screen.getByLabelText(/Email/)
    expect(input).toBeRequired()
    const asterisk = screen.getByText('*')
    expect(asterisk).toHaveAttribute('aria-hidden', 'true')
  })

  it('mirrors disabled onto the control', () => {
    render(
      <Field label="Email" disabled>
        {(field) => <Input {...field} />}
      </Field>,
    )
    expect(screen.getByLabelText('Email')).toBeDisabled()
  })

  it('renders a field-group with an accessible name', () => {
    render(
      <FieldGroup label="Billing details">
        <Field label="Card">
          {(field) => <Input {...field} />}
        </Field>
        <Field label="ZIP">
          {(field) => <Input {...field} />}
        </Field>
      </FieldGroup>,
    )
    const group = screen.getByRole('group', { name: 'Billing details' })
    expect(group.querySelectorAll('[data-slot="field"]').length).toBe(2)
  })

  it('forwards a ref to the wrapper element', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Field ref={ref} label="Email">
        {(field) => <Input {...field} />}
      </Field>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})

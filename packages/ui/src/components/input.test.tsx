import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './input'

describe('Input', () => {
  it('renders a text input with default attributes', () => {
    render(<Input placeholder="Email" />)
    const input = screen.getByPlaceholderText('Email')
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('data-slot', 'input')
    expect(input).toHaveAttribute('data-variant', 'default')
    expect(input).toHaveAttribute('data-size', 'md')
    expect(input).not.toHaveAttribute('aria-invalid')
  })

  it('sets aria-invalid and data-invalid when invalid', () => {
    render(<Input invalid aria-label="Email" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('data-invalid', 'true')
  })

  it('keeps a consumer-provided aria-invalid', () => {
    render(<Input aria-invalid="true" aria-label="Email" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts typed values', async () => {
    const user = userEvent.setup()
    render(<Input aria-label="Email" />)
    await user.type(screen.getByLabelText('Email'), 'hi@example.com')
    expect(screen.getByLabelText('Email')).toHaveValue('hi@example.com')
  })

  it('is disabled', () => {
    render(<Input disabled aria-label="Email" />)
    expect(screen.getByLabelText('Email')).toBeDisabled()
  })

  it('forwards a ref to the underlying input', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input ref={ref} aria-label="Email" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })
})

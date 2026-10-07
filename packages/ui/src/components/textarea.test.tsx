import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Textarea } from './textarea'

describe('Textarea', () => {
  it('renders a textarea with default attributes', () => {
    render(<Textarea placeholder="Message" />)
    const textarea = screen.getByPlaceholderText('Message')
    expect(textarea).toHaveAttribute('data-slot', 'textarea')
    expect(textarea).toHaveAttribute('data-size', 'md')
  })

  it('sets aria-invalid and data-invalid when invalid', () => {
    render(<Textarea invalid aria-label="Message" />)
    const textarea = screen.getByLabelText('Message')
    expect(textarea).toHaveAttribute('aria-invalid', 'true')
    expect(textarea).toHaveAttribute('data-invalid', 'true')
  })

  it('accepts typed values', async () => {
    const user = userEvent.setup()
    render(<Textarea aria-label="Message" />)
    await user.type(screen.getByLabelText('Message'), 'hello')
    expect(screen.getByLabelText('Message')).toHaveValue('hello')
  })

  it('forwards a ref to the underlying textarea', () => {
    const ref = createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} aria-label="Message" />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })
})

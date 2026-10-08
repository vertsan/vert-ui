import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Input } from './input'
import { Label } from './label'

describe('Label', () => {
  it('associates with its control via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>,
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('exposes data-slot for styling', () => {
    render(<Label>Email</Label>)
    expect(screen.getByText('Email')).toHaveAttribute('data-slot', 'label')
  })

  it('clicking the label focuses the control', async () => {
    const user = userEvent.setup()
    render(
      <>
        <Label htmlFor="name">Name</Label>
        <Input id="name" />
      </>,
    )
    await user.click(screen.getByText('Name'))
    expect(screen.getByLabelText('Name')).toHaveFocus()
  })
})

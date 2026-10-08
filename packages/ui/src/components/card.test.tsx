import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

describe('Card', () => {
  it('renders its content with the card slot', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Storage</CardTitle>
          <CardDescription>64% of plan used</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Body copy</p>
        </CardContent>
        <CardFooter>
          <button type="button">Upgrade</button>
        </CardFooter>
      </Card>,
    )
    expect(screen.getByRole('heading', { name: 'Storage' })).toBeInTheDocument()
    expect(screen.getByText('64% of plan used')).toBeInTheDocument()
    expect(screen.getByText('Body copy')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Upgrade' })).toBeInTheDocument()
    expect(screen.getByText('Storage').closest('.rounded-2xl')).not.toBeNull()
  })

  it('renders CardTitle as an h3', () => {
    render(<CardTitle>Plan</CardTitle>)
    const heading = screen.getByRole('heading', { level: 3, name: 'Plan' })
    expect(heading.tagName).toBe('H3')
  })

  it('accepts custom class names on every subcomponent', () => {
    render(
      <Card className="card-x">
        <CardHeader className="header-x">
          <CardTitle className="title-x">T</CardTitle>
          <CardDescription className="desc-x">D</CardDescription>
        </CardHeader>
        <CardContent className="content-x">C</CardContent>
        <CardFooter className="footer-x">F</CardFooter>
      </Card>,
    )
    expect(document.querySelector('.card-x')).not.toBeNull()
    expect(document.querySelector('.header-x')).not.toBeNull()
    expect(document.querySelector('.title-x')).not.toBeNull()
    expect(document.querySelector('.desc-x')).not.toBeNull()
    expect(document.querySelector('.content-x')).not.toBeNull()
    expect(document.querySelector('.footer-x')).not.toBeNull()
  })

  it('forwards a ref to the wrapper element', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Card ref={ref}>Body</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.textContent).toBe('Body')
  })

  it('exposes the default variant as a data attribute', () => {
    render(<Card>Plain</Card>)
    expect(screen.getByText('Plain')).toHaveAttribute('data-slot', 'card')
    expect(screen.getByText('Plain')).toHaveAttribute('data-variant', 'default')
  })

  it.each(['interactive', 'raised', 'glow'] as const)(
    'applies the %s variant',
    (variant) => {
      render(<Card variant={variant}>V</Card>)
      expect(screen.getByText('V')).toHaveAttribute('data-variant', variant)
    },
  )
})

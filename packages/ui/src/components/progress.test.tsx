import { render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Progress } from './progress'

describe('Progress', () => {
  it('renders a progressbar with the current value', () => {
    render(<Progress value={40} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('data-slot', 'progress')
    expect(bar).toHaveAttribute('aria-valuenow', '40')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
  })

  it('clamps the value to the max', () => {
    render(<Progress value={150} max={100} />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100')
  })

  it('omits aria-valuenow when indeterminate', () => {
    render(<Progress />)
    expect(screen.getByRole('progressbar')).not.toHaveAttribute('aria-valuenow')
  })

  it('announces a human readable value text', () => {
    render(<Progress value={45} valueText="45 of 100 uploads" />)
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuetext',
      '45 of 100 uploads',
    )
  })

  it('moves the indicator with a transform only', () => {
    const { container } = render(<Progress value={25} />)
    const indicator = container.querySelector('[data-slot="progress-indicator"]')
    expect(indicator).not.toBeNull()
    expect(indicator!.getAttribute('style')).toContain('translateX(-75%)')
  })

  it('exposes variant and size data attributes', () => {
    render(<Progress value={10} variant="destructive" size="lg" />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('data-variant', 'destructive')
    expect(bar).toHaveAttribute('data-size', 'lg')
  })

  it('renders the rounded percent readout beside the bar', () => {
    const { container } = render(<Progress value={64} showPercent />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '64')
    const readout = container.querySelector('[data-slot="progress-percent"]')
    expect(readout).not.toBeNull()
    expect(readout!.textContent).toBe('64%')
    expect(readout).toHaveAttribute('aria-hidden', 'true')
  })

  it('updates the percent readout toward a new value', async () => {
    const { container, rerender } = render(<Progress value={10} showPercent />)
    const readout = () => container.querySelector('[data-slot="progress-percent"]')
    expect(readout()!.textContent).toBe('10%')

    rerender(<Progress value={80} showPercent />)
    await waitFor(() => expect(readout()!.textContent).toBe('80%'))
  })

  it('omits the percent readout when indeterminate', () => {
    const { container } = render(<Progress showPercent />)
    expect(container.querySelector('[data-slot="progress-percent"]')).toBeNull()
  })
})

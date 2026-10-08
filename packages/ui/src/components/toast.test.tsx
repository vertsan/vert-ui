import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast'

function renderToast({
  open = true,
  onOpenChange,
  variant,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: 'default' | 'brand' | 'success' | 'warning' | 'destructive'
} = {}) {
  return render(
    <ToastProvider duration={100000}>
      <Toast open={open} onOpenChange={onOpenChange} variant={variant}>
        <ToastTitle>Saved</ToastTitle>
        <ToastDescription>Changes persisted.</ToastDescription>
        <ToastAction altText="Undo">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>,
  )
}

describe('Toast', () => {
  it('renders title, description and action', () => {
    renderToast()
    expect(screen.getByText('Saved')).toBeInTheDocument()
    expect(screen.getByText('Changes persisted.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  it('dismisses via the close button', async () => {
    const user = userEvent.setup()
    const onOpenChange = vi.fn()
    renderToast({ onOpenChange })
    await user.click(screen.getByRole('button', { name: 'Dismiss' }))
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('exposes variant as a data attribute', () => {
    const { container } = renderToast({ variant: 'success' })
    expect(container.querySelector('[data-slot="toast"]')).toHaveAttribute(
      'data-variant',
      'success',
    )
  })

  it('renders nothing while closed', () => {
    renderToast({ open: false })
    expect(screen.queryByText('Saved')).not.toBeInTheDocument()
  })
})

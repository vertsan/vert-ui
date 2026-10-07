import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const textareaVariants = cva(
  'flex min-h-20 w-full min-w-0 resize-y border bg-surface px-3 py-2 text-sm text-foreground shadow-soft outline-none transition-[border-color,box-shadow,background-color] duration-fast ease-out-quart placeholder:text-muted-foreground hover:border-border-strong focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 read-only:opacity-70 aria-invalid:border-destructive aria-invalid:hover:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive/30',
  {
    variants: {
      variant: {
        default: '',
        ghost:
          'border-transparent bg-transparent shadow-none hover:bg-accent focus-visible:bg-surface focus-visible:ring-ring/20',
      },
      size: {
        sm: 'min-h-16 rounded-sm text-[13px]',
        md: 'min-h-20 rounded-md',
        lg: 'min-h-24 rounded-md text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface TextareaProps
  extends React.ComponentPropsWithRef<'textarea'>, VariantProps<typeof textareaVariants> {
  /** Mark the field as invalid: sets aria-invalid, data-invalid and the destructive ring. */
  invalid?: boolean
}

function Textarea({
  className,
  variant,
  size,
  invalid,
  'aria-invalid': ariaInvalidProp,
  ...props
}: TextareaProps) {
  const ariaInvalid = invalid || ariaInvalidProp

  return (
    <textarea
      data-slot="textarea"
      data-variant={variant ?? 'default'}
      data-size={size ?? 'md'}
      data-invalid={invalid || undefined}
      aria-invalid={ariaInvalid}
      className={cn(textareaVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
export type { VariantProps as TextareaVariantProps }

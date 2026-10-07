import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const inputVariants = cva(
  'w-full min-w-0 border bg-surface px-3 text-sm text-foreground shadow-soft outline-none transition-[border-color,box-shadow,background-color] duration-fast ease-out-quart placeholder:text-muted-foreground hover:border-border-strong focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 read-only:opacity-70 aria-invalid:border-destructive aria-invalid:hover:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive/30',
  {
    variants: {
      variant: {
        default: '',
        ghost:
          'border-transparent bg-transparent shadow-none hover:bg-accent focus-visible:bg-surface focus-visible:ring-ring/20',
      },
      size: {
        sm: 'h-8 rounded-sm text-[13px]',
        md: 'h-9 rounded-md',
        lg: 'h-10 rounded-md text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'size'>, VariantProps<typeof inputVariants> {
  /** Mark the field as invalid: sets aria-invalid, data-invalid and the destructive ring. */
  invalid?: boolean
}

function Input({
  className,
  variant,
  size,
  invalid,
  type = 'text',
  'aria-invalid': ariaInvalidProp,
  ...props
}: InputProps) {
  const ariaInvalid = invalid || ariaInvalidProp

  return (
    <input
      data-slot="input"
      data-variant={variant ?? 'default'}
      data-size={size ?? 'md'}
      data-invalid={invalid || undefined}
      type={type}
      aria-invalid={ariaInvalid}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
export type { VariantProps as InputVariantProps }

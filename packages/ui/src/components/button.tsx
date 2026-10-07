import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,border-color,color,box-shadow,opacity] duration-fast ease-out-quart disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-brand text-brand-foreground shadow-soft hover:bg-brand-hover active:bg-brand-active',
        soft: 'bg-brand-soft text-brand-soft-foreground hover:bg-brand-soft-hover',
        outline:
          'border border-border-strong bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        ghost: 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
        link: 'h-auto bg-transparent px-0 text-brand underline-offset-4 hover:underline',
        destructive:
          'bg-destructive text-destructive-foreground shadow-soft hover:bg-destructive-hover',
      },
      size: {
        sm: 'h-8 gap-1.5 rounded-sm px-3',
        md: 'h-9 gap-2 px-4',
        lg: 'h-10 gap-2 px-5 text-base',
        xl: 'h-11 gap-2.5 px-6 text-base',
        'icon-sm': 'size-8 rounded-sm p-0',
        'icon-md': 'size-9 p-0',
        'icon-lg': 'size-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends React.ComponentPropsWithRef<'button'>, VariantProps<typeof buttonVariants> {
  /** Render the child element instead of <button> (links, router components). */
  asChild?: boolean
  /** Show a spinner, set aria-busy and block interaction. */
  loading?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const spinner = loading && !asChild

  return (
    <Comp
      data-slot="button"
      data-variant={variant ?? 'default'}
      data-size={size ?? 'md'}
      data-loading={loading || undefined}
      type={asChild ? undefined : (type ?? 'button')}
      disabled={asChild ? undefined : disabled || loading}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {spinner ? (
        <>
          <span
            aria-hidden
            className="size-4 rounded-full border-2 border-current border-t-transparent motion-safe:animate-spin"
          />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
export type { VariantProps as ButtonVariantProps }

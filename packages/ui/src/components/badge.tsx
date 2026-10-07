import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full font-medium transition-colors duration-fast [&_svg]:size-3 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-brand-soft text-brand-soft-foreground',
        solid: 'bg-brand text-brand-foreground',
        outline: 'border border-border-strong bg-transparent text-foreground',
        muted: 'bg-muted text-muted-foreground',
        destructive: 'bg-destructive-soft text-destructive-soft-foreground',
        success: 'bg-success-soft text-success-soft-foreground',
        warning: 'bg-warning-soft text-warning-soft-foreground',
        info: 'bg-info-soft text-info-soft-foreground',
      },
      size: {
        sm: 'h-5 px-2 text-[11px]',
        md: 'h-6 px-2.5 text-xs',
        lg: 'h-7 px-3 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
)

export interface BadgeProps
  extends React.ComponentPropsWithRef<'span'>, VariantProps<typeof badgeVariants> {
  /** Render the child element instead of <span> (links, router components). */
  asChild?: boolean
  /** Show a leading status dot that inherits the badge color. */
  dot?: boolean
}

function Badge({
  className,
  variant,
  size,
  asChild = false,
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      data-variant={variant ?? 'default'}
      data-size={size ?? 'md'}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dot ? (
        <>
          <span data-slot="badge-dot" aria-hidden className="size-1.5 rounded-full bg-current" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Badge, badgeVariants }
export type { VariantProps as BadgeVariantProps }

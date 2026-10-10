import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold outline-none transition-[color,background-color,border-color,box-shadow] duration-[140ms] ease-out-quart focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border-border-strong/60 text-foreground",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/90",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/90",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "px-2 py-0 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof badgeVariants> {
  /** Leading status dot tinted with the current text colour. */
  dot?: boolean
  /** Render the child element (e.g. a link) instead of a span. */
  asChild?: boolean
}

function Badge({ className, variant, size, dot, asChild, children, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      data-slot="badge"
      data-variant={variant || "default"}
      data-size={size || "md"}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {dot ? (
            <span
              data-slot="badge-dot"
              aria-hidden="true"
              className="size-1.5 rounded-full bg-current"
            />
          ) : null}
          {children}
        </>
      )}
    </Comp>
  )
}

export { Badge, badgeVariants }

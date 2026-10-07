import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/utils"
import { Slot } from "@radix-ui/react-slot"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground",
        ghost: "border-transparent hover:bg-accent hover:text-accent-foreground",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/90",
      },
      size: {
        sm: "px-2 text-[10px] py-0",
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
  dot?: boolean
  asChild?: boolean
}

function Badge({ className, variant, size, dot, asChild, children, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "div"
  const dotElement = dot ? (
    <span data-slot="badge-dot" className="size-1.5 rounded-full bg-current" />
  ) : null

  if (asChild) {
    return (
      <Comp
        data-slot="badge"
        data-variant={variant || "default"}
        data-size={size || "md"}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      >
        {dotElement}
        {children}
      </Comp>
    )
  }

  return (
    <Comp
      data-slot="badge"
      data-variant={variant || "default"}
      data-size={size || "md"}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    >
      {dotElement}
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const containerVariants = cva("mx-auto w-full", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
  /** Horizontal gutters that scale with the viewport. Defaults to true. */
  padded?: boolean
  /** Arbitrary `max-width` (any CSS length). Overrides `size`. */
  maxWidth?: string
  /** Arbitrary gutter override (any CSS length), used instead of the padded scale. */
  gutter?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, style, size, padded = true, maxWidth, gutter, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="container"
        data-size={maxWidth ? undefined : size || "lg"}
        data-padded={padded ? "true" : undefined}
        className={cn(
          maxWidth ? "mx-auto w-full" : containerVariants({ size }),
          padded && !gutter && "px-4 sm:px-6 lg:px-8",
          className,
        )}
        style={{ maxWidth, paddingLeft: gutter, paddingRight: gutter, ...style }}
        {...props}
      />
    )
  },
)
Container.displayName = "Container"

export { Container, containerVariants }

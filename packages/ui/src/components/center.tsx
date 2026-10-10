import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const centerVariants = cva("flex", {
  variants: {
    axis: {
      both: "items-center justify-center",
      horizontal: "justify-center",
      vertical: "items-center",
    },
  },
  defaultVariants: {
    axis: "both",
  },
})

export interface CenterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof centerVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
  /** Caps the content measure — a readable line length. Any CSS length. */
  maxWidth?: string
  /** Adds responsive horizontal gutters so edge content never touches the viewport. */
  padded?: boolean
}

const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  (
    { className, style, axis, maxWidth, padded = false, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="center"
        data-axis={axis || "both"}
        className={cn(centerVariants({ axis }), padded && "px-4 sm:px-6", className)}
        style={{ maxWidth, ...style }}
        {...props}
      />
    )
  },
)
Center.displayName = "Center"

export { Center, centerVariants }

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const widthScale = {
  0: "w-0",
  1: "w-1",
  2: "w-2",
  3: "w-3",
  4: "w-4",
  5: "w-5",
  6: "w-6",
  8: "w-8",
  10: "w-10",
  12: "w-12",
  16: "w-16",
}

const heightScale = {
  0: "h-0",
  1: "h-1",
  2: "h-2",
  3: "h-3",
  4: "h-4",
  5: "h-5",
  6: "h-6",
  8: "h-8",
  10: "h-10",
  12: "h-12",
  16: "h-16",
}

const bothScale = {
  0: "size-0",
  1: "size-1",
  2: "size-2",
  3: "size-3",
  4: "size-4",
  5: "size-5",
  6: "size-6",
  8: "size-8",
  10: "size-10",
  12: "size-12",
  16: "size-16",
}

const spacerVariants = cva("", {
  variants: {
    grow: {
      true: "flex-1",
      false: "shrink-0",
    },
  },
  defaultVariants: {
    grow: true,
  },
})

export interface SpacerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spacerVariants> {
  /** Render the child element instead of a <div>. */
  asChild?: boolean
  /**
   * Fixed size on the token scale (takes precedence over `grow`).
   * Combined with `axis` it constrains just one dimension.
   */
  size?: keyof typeof widthScale
  /** Which dimension `size` controls. Defaults to both. */
  axis?: "horizontal" | "vertical" | "both"
}

const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size, axis = "both", grow = true, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    const sized = size != null
    const fixed = sized
      ? axis === "horizontal"
        ? widthScale[size]
        : axis === "vertical"
          ? heightScale[size]
          : bothScale[size]
      : undefined
    return (
      <Comp
        ref={ref}
        aria-hidden="true"
        data-slot="spacer"
        data-grow={!sized && grow ? "true" : undefined}
        data-size={sized ? size : undefined}
        data-axis={axis}
        className={cn(spacerVariants({ grow: sized ? false : grow }), fixed, className)}
        {...props}
      />
    )
  },
)
Spacer.displayName = "Spacer"

export { Spacer, spacerVariants }

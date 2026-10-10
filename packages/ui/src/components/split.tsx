import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const gapScale = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
}

const collapseAt = {
  none: "[grid-template-columns:var(--vert-split)]",
  sm: "sm:[grid-template-columns:var(--vert-split)]",
  md: "md:[grid-template-columns:var(--vert-split)]",
  lg: "lg:[grid-template-columns:var(--vert-split)]",
}

const splitVariants = cva("grid grid-cols-1", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    gap: gapScale,
  },
  defaultVariants: {
    align: "stretch",
    gap: 6,
  },
})

export interface SplitProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof splitVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
  /**
   * Two-region template applied once the layout is wide enough,
   * e.g. `"1fr 2fr"` or `"minmax(0,320px) minmax(0,1fr)"`. Any valid grid-template-columns.
   */
  templateColumns?: string
  /** Breakpoint at which the regions sit side by side. Defaults to `md`. */
  collapse?: keyof typeof collapseAt
}

const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  (
    {
      className,
      style,
      align,
      gap,
      templateColumns = "1fr 1fr",
      collapse = "md",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="split"
        data-collapse={collapse}
        className={cn(splitVariants({ align, gap }), collapseAt[collapse], className)}
        style={{ "--vert-split": templateColumns, ...style } as React.CSSProperties}
        {...props}
      />
    )
  },
)
Split.displayName = "Split"

export { Split, splitVariants }

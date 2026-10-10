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

const smGapScale = {
  0: "sm:gap-0",
  1: "sm:gap-1",
  2: "sm:gap-2",
  3: "sm:gap-3",
  4: "sm:gap-4",
  5: "sm:gap-5",
  6: "sm:gap-6",
  8: "sm:gap-8",
  10: "sm:gap-10",
  12: "sm:gap-12",
}

const mdGapScale = {
  0: "md:gap-0",
  1: "md:gap-1",
  2: "md:gap-2",
  3: "md:gap-3",
  4: "md:gap-4",
  5: "md:gap-5",
  6: "md:gap-6",
  8: "md:gap-8",
  10: "md:gap-10",
  12: "md:gap-12",
}

const lgGapScale = {
  0: "lg:gap-0",
  1: "lg:gap-1",
  2: "lg:gap-2",
  3: "lg:gap-3",
  4: "lg:gap-4",
  5: "lg:gap-5",
  6: "lg:gap-6",
  8: "lg:gap-8",
  10: "lg:gap-10",
  12: "lg:gap-12",
}

const stackVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    gap: gapScale,
    smGap: smGapScale,
    mdGap: mdGapScale,
    lgGap: lgGapScale,
  },
  defaultVariants: {
    direction: "column",
    gap: 4,
  },
})

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, align, justify, wrap, gap, smGap, mdGap, lgGap, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="stack"
        data-direction={direction || "column"}
        className={cn(
          stackVariants({ direction, align, justify, wrap, gap, smGap, mdGap, lgGap }),
          className,
        )}
        {...props}
      />
    )
  },
)
Stack.displayName = "Stack"

export { Stack, stackVariants }

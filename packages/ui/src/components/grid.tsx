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

const gridVariants = cva("grid", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      none: "grid-cols-none",
    },
    smColumns: {
      1: "sm:grid-cols-1",
      2: "sm:grid-cols-2",
      3: "sm:grid-cols-3",
      4: "sm:grid-cols-4",
      5: "sm:grid-cols-5",
      6: "sm:grid-cols-6",
      7: "sm:grid-cols-7",
      8: "sm:grid-cols-8",
      9: "sm:grid-cols-9",
      10: "sm:grid-cols-10",
      11: "sm:grid-cols-11",
      12: "sm:grid-cols-12",
      none: "sm:grid-cols-none",
    },
    mdColumns: {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
      5: "md:grid-cols-5",
      6: "md:grid-cols-6",
      7: "md:grid-cols-7",
      8: "md:grid-cols-8",
      9: "md:grid-cols-9",
      10: "md:grid-cols-10",
      11: "md:grid-cols-11",
      12: "md:grid-cols-12",
      none: "md:grid-cols-none",
    },
    lgColumns: {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
      7: "lg:grid-cols-7",
      8: "lg:grid-cols-8",
      9: "lg:grid-cols-9",
      10: "lg:grid-cols-10",
      11: "lg:grid-cols-11",
      12: "lg:grid-cols-12",
      none: "lg:grid-cols-none",
    },
    xlColumns: {
      1: "xl:grid-cols-1",
      2: "xl:grid-cols-2",
      3: "xl:grid-cols-3",
      4: "xl:grid-cols-4",
      5: "xl:grid-cols-5",
      6: "xl:grid-cols-6",
      7: "xl:grid-cols-7",
      8: "xl:grid-cols-8",
      9: "xl:grid-cols-9",
      10: "xl:grid-cols-10",
      11: "xl:grid-cols-11",
      12: "xl:grid-cols-12",
      none: "xl:grid-cols-none",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    gap: gapScale,
    smGap: smGapScale,
    mdGap: mdGapScale,
    lgGap: lgGapScale,
  },
  defaultVariants: {
    columns: 1,
    gap: 4,
  },
})

const gridItemVariants = cva("min-w-0", {
  variants: {
    colSpan: {
      1: "col-span-1",
      2: "col-span-2",
      3: "col-span-3",
      4: "col-span-4",
      5: "col-span-5",
      6: "col-span-6",
      7: "col-span-7",
      8: "col-span-8",
      9: "col-span-9",
      10: "col-span-10",
      11: "col-span-11",
      12: "col-span-12",
      full: "col-span-full",
      auto: "col-auto",
    },
    smColSpan: {
      1: "sm:col-span-1",
      2: "sm:col-span-2",
      3: "sm:col-span-3",
      4: "sm:col-span-4",
      5: "sm:col-span-5",
      6: "sm:col-span-6",
      7: "sm:col-span-7",
      8: "sm:col-span-8",
      9: "sm:col-span-9",
      10: "sm:col-span-10",
      11: "sm:col-span-11",
      12: "sm:col-span-12",
      full: "sm:col-span-full",
      auto: "sm:col-auto",
    },
    mdColSpan: {
      1: "md:col-span-1",
      2: "md:col-span-2",
      3: "md:col-span-3",
      4: "md:col-span-4",
      5: "md:col-span-5",
      6: "md:col-span-6",
      7: "md:col-span-7",
      8: "md:col-span-8",
      9: "md:col-span-9",
      10: "md:col-span-10",
      11: "md:col-span-11",
      12: "md:col-span-12",
      full: "md:col-span-full",
      auto: "md:col-auto",
    },
    lgColSpan: {
      1: "lg:col-span-1",
      2: "lg:col-span-2",
      3: "lg:col-span-3",
      4: "lg:col-span-4",
      5: "lg:col-span-5",
      6: "lg:col-span-6",
      7: "lg:col-span-7",
      8: "lg:col-span-8",
      9: "lg:col-span-9",
      10: "lg:col-span-10",
      11: "lg:col-span-11",
      12: "lg:col-span-12",
      full: "lg:col-span-full",
      auto: "lg:col-auto",
    },
    xlColSpan: {
      1: "xl:col-span-1",
      2: "xl:col-span-2",
      3: "xl:col-span-3",
      4: "xl:col-span-4",
      5: "xl:col-span-5",
      6: "xl:col-span-6",
      7: "xl:col-span-7",
      8: "xl:col-span-8",
      9: "xl:col-span-9",
      10: "xl:col-span-10",
      11: "xl:col-span-11",
      12: "xl:col-span-12",
      full: "xl:col-span-full",
      auto: "xl:col-auto",
    },
    rowSpan: {
      1: "row-span-1",
      2: "row-span-2",
      3: "row-span-3",
      4: "row-span-4",
      5: "row-span-5",
      6: "row-span-6",
      full: "row-span-full",
    },
  },
})

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
  /**
   * Responsive "auto-fit" columns: as many tracks as fit, no breakpoints needed.
   * Overrides `columns` and the `*Columns` variants.
   */
  autoFit?: boolean
  /** Minimum track width used by `autoFit`. Any CSS length. Defaults to `16rem`. */
  minItemWidth?: string
  /** Fully custom `grid-template-columns`. Overrides columns / autoFit. */
  templateColumns?: string
  /** Custom `grid-template-rows`. */
  templateRows?: string
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
      className,
      style,
      columns,
      smColumns,
      mdColumns,
      lgColumns,
      xlColumns,
      align,
      gap,
      smGap,
      mdGap,
      lgGap,
      autoFit = false,
      minItemWidth = "16rem",
      templateColumns,
      templateRows,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div"
    const customTemplate = templateColumns ?? (autoFit ? `repeat(auto-fit, minmax(${minItemWidth}, 1fr))` : undefined)
    return (
      <Comp
        ref={ref}
        data-slot="grid"
        data-columns={customTemplate ? undefined : (columns ?? 1)}
        data-auto-fit={autoFit ? true : undefined}
        className={cn(
          gridVariants({
            columns: customTemplate ? undefined : columns,
            smColumns: customTemplate ? undefined : smColumns,
            mdColumns: customTemplate ? undefined : mdColumns,
            lgColumns: customTemplate ? undefined : lgColumns,
            xlColumns: customTemplate ? undefined : xlColumns,
            align,
            gap,
            smGap,
            mdGap,
            lgGap,
          }),
          className,
        )}
        style={{ gridTemplateColumns: customTemplate, gridTemplateRows: templateRows, ...style }}
        {...props}
      />
    )
  },
)
Grid.displayName = "Grid"

export interface GridItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridItemVariants> {
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
}

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      className,
      colSpan,
      smColSpan,
      mdColSpan,
      lgColSpan,
      xlColSpan,
      rowSpan,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="grid-item"
        className={cn(
          gridItemVariants({
            colSpan,
            smColSpan,
            mdColSpan,
            lgColSpan,
            xlColSpan,
            rowSpan,
          }),
          className,
        )}
        {...props}
      />
    )
  },
)
GridItem.displayName = "GridItem"

export { Grid, GridItem, gridVariants, gridItemVariants }

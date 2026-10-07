import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const separatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  /** Decorative separators are hidden from assistive technology. */
  decorative?: boolean
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (
    { className, orientation, decorative = false, role, ...props },
    ref
  ) => {
    const dir = orientation ?? "horizontal"
    return (
      <div
        ref={ref}
        data-slot="separator"
        data-orientation={dir}
        role={decorative ? undefined : role || "separator"}
        aria-orientation={decorative ? undefined : dir}
        aria-hidden={decorative || undefined}
        className={cn(separatorVariants({ orientation: dir }), className)}
        {...props}
      />
    )
  }
)
Separator.displayName = "Separator"

export { Separator, separatorVariants }

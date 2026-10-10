import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const sectionVariants = cva("w-full", {
  variants: {
    size: {
      sm: "py-8 sm:py-10",
      md: "py-12 sm:py-16",
      lg: "py-16 sm:py-24",
      xl: "py-20 sm:py-32",
      none: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  /** Render the child element instead of a <section> — keeps styles, defers semantics. */
  asChild?: boolean
  /** Arbitrary vertical padding (any CSS length). Overrides `size`. */
  space?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, style, size, space, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "section"
    return (
      <Comp
        ref={ref}
        data-slot="section"
        data-size={space ? undefined : size || "md"}
        className={cn(sectionVariants({ size: space ? undefined : size }), className)}
        style={{ paddingTop: space, paddingBottom: space, ...style }}
        {...props}
      />
    )
  },
)
Section.displayName = "Section"

export { Section, sectionVariants }

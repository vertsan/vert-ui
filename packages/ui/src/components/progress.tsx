import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-muted",
  {
    variants: {
      variant: {
        default: "bg-muted",
        brand: "bg-brand/20",
        destructive: "bg-destructive/20",
      },
      size: {
        sm: "h-1.5",
        md: "h-2.5",
        lg: "h-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const progressIndicatorVariants = cva(
  "h-full w-full origin-left rounded-full bg-primary transition-transform duration-[300ms] ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary",
        brand: "bg-brand",
        destructive: "bg-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof progressVariants> {
  /** Current value; omit for an indeterminate progress bar. */
  value?: number
  max?: number
  /** Readable label announced instead of a raw number (e.g. "45 of 100 uploads"). */
  valueText?: string
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, variant, size, value, max = 100, valueText, ...props }, ref) => {
  const clamped = typeof value === "number" ? Math.min(Math.max(value, 0), max) : undefined
  const percent = typeof clamped === "number" && max > 0 ? (clamped / max) * 100 : undefined

  return (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      data-variant={variant || "default"}
      data-size={size || "md"}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={clamped}
      aria-valuetext={valueText}
      className={cn(progressVariants({ variant, size }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        data-variant={variant || "default"}
        className={progressIndicatorVariants({ variant })}
        style={{ transform: `translateX(-${100 - (percent ?? 100)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = "Progress"

export { Progress, progressVariants, progressIndicatorVariants }

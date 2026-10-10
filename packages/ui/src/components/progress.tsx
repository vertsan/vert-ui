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
  "h-full w-full origin-left rounded-full bg-primary transition-transform duration-[300ms] ease-out-quart group-data-[state=indeterminate]:w-1/3 group-data-[state=indeterminate]:animate-[vert-progress-indeterminate_1.4s_ease-in-out_infinite] group-data-[state=indeterminate]:motion-reduce:animate-none",
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

/**
 * Tween a number toward its target while the bar transitions, so the readout
 * counts up/down in sync instead of jumping. Starts at the target on mount
 * (SSR-safe, no layout shift) and respects `prefers-reduced-motion`.
 */
function useAnimatedPercent(target: number, animate: boolean, duration = 300) {
  const [display, setDisplay] = React.useState(target)
  const fromRef = React.useRef(target)

  React.useEffect(() => {
    if (!animate || fromRef.current === target) {
      fromRef.current = target
      return
    }

    const reduce =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduce || typeof requestAnimationFrame !== "function") {
      fromRef.current = target
      setDisplay(target)
      return
    }

    const from = fromRef.current
    let frame = 0
    let start: number | undefined

    const tick = (now: number) => {
      if (start === undefined) start = now
      const progress = duration <= 0 ? 1 : Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const next = from + (target - from) * eased
      fromRef.current = next
      setDisplay(next)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, animate, duration])

  return display
}

export interface ProgressProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof progressVariants> {
  /** Current value; omit for an indeterminate progress bar. */
  value?: number
  max?: number
  /** Readable label announced instead of a raw number (e.g. "45 of 100 uploads"). */
  valueText?: string
  /** Render a visible, tabular "64%" readout next to the bar (aria-hidden — the value is already announced). */
  showPercent?: boolean
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, variant, size, value, max = 100, valueText, showPercent, ...props }, ref) => {
  const clamped = typeof value === "number" ? Math.min(Math.max(value, 0), max) : undefined
  const percent = typeof clamped === "number" && max > 0 ? (clamped / max) * 100 : undefined
  const animatedPercent = useAnimatedPercent(percent ?? 0, Boolean(showPercent))

  const root = (
    <ProgressPrimitive.Root
      ref={ref}
      data-slot="progress"
      data-variant={variant || "default"}
      data-size={size || "md"}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={clamped}
      aria-valuetext={valueText}
      className={cn("group", progressVariants({ variant, size }), className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        data-variant={variant || "default"}
        className={progressIndicatorVariants({ variant })}
        style={percent === undefined ? undefined : { transform: `translateX(-${100 - percent}%)` }}
      />
    </ProgressPrimitive.Root>
  )

  if (!showPercent || percent === undefined) return root

  return (
    <div data-slot="progress-with-label" className="flex w-full items-center gap-3">
      {root}
      <span
        data-slot="progress-percent"
        aria-hidden="true"
        className="shrink-0 basis-8 text-right text-sm font-medium tabular-nums text-foreground"
      >
        {Math.round(animatedPercent)}%
      </span>
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress, progressVariants, progressIndicatorVariants }

import { Slot } from "@radix-ui/react-slot"
import * as React from "react"
import { cn } from "../lib/cn"

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width divided by height, e.g. `16 / 9` or `1`. Defaults to `1`. */
  ratio?: number
  /** Render the child element instead of a <div> — keeps styles, defers semantics. */
  asChild?: boolean
  /** Makes direct children absolutely fill the box (image/video/overlay pattern). */
  fill?: boolean
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, style, ratio = 1, fill = false, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        ref={ref}
        data-slot="aspect-ratio"
        data-ratio={ratio}
        className={cn(
          "relative w-full overflow-hidden",
          fill && "[&>*]:absolute [&>*]:inset-0 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover",
          className,
        )}
        style={{ aspectRatio: `${ratio}`, ...style }}
        {...props}
      />
    )
  },
)
AspectRatio.displayName = "AspectRatio"

export { AspectRatio }

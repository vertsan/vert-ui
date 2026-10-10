import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as React from "react"
import { cn } from "../lib/cn"

type TooltipSide = "top" | "right" | "bottom" | "left"
type TooltipAlign = "start" | "center" | "end"

export interface TooltipProps
  extends Omit<
      React.ComponentPropsWithRef<typeof TooltipPrimitive.Root>,
      "children" | "asChild"
    > {
  /** Bubble content. Keep it short — it is announced via aria-describedby. */
  content: React.ReactNode
  side?: TooltipSide
  align?: TooltipAlign
  sideOffset?: number
  showArrow?: boolean
  children: React.ReactNode
  className?: string
}

const sideOffsetClass: Record<TooltipSide, string> = {
  top: "origin-bottom",
  right: "origin-left",
  bottom: "origin-top",
  left: "origin-right",
}

/**
 * Tooltip — hover/focus bubble built on Radix.
 *
 * The trigger receives `aria-describedby` while open, so label the trigger
 * itself; never put focusable elements or essential-only information inside
 * `content`.
 */
function Tooltip({
  content,
  side = "top",
  align = "center",
  sideOffset = 6,
  showArrow = true,
  children,
  className,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider skipDelayDuration={200}>
      <TooltipPrimitive.Root {...props}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            data-slot="tooltip-content"
            className={cn(
              "z-50 max-w-[260px] rounded-md border border-border bg-foreground px-2.5 py-1.5 text-xs font-medium leading-snug text-background shadow-pop data-[state=delayed-open]:animate-[vert-pop-in_140ms_ease-out] data-[state=instant-open]:animate-[vert-pop-in_140ms_ease-out] data-[state=closed]:animate-[vert-fade-out_100ms_ease-in]",
              sideOffsetClass[side],
              className
            )}
          >
            {content}
            {showArrow ? (
              <TooltipPrimitive.Arrow
                data-slot="tooltip-arrow"
                className="size-2.5 rotate-45 rounded-[2px] bg-foreground"
              />
            ) : null}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { Tooltip }
export type { TooltipAlign, TooltipSide }

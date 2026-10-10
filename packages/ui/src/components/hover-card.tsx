import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import * as React from "react"
import { cn } from "../lib/cn"

type HoverCardSide = "top" | "right" | "bottom" | "left"
type HoverCardAlign = "start" | "center" | "end"

const sideOffsetClass: Record<HoverCardSide, string> = {
  top: "origin-bottom",
  right: "origin-left",
  bottom: "origin-top",
  left: "origin-right",
}

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof HoverCardPrimitive.Trigger>
>((props, ref) => (
  <HoverCardPrimitive.Trigger ref={ref} data-slot="hover-card-trigger" {...props} />
))
HoverCardTrigger.displayName = "HoverCardTrigger"

export interface HoverCardContentProps
  extends React.ComponentPropsWithRef<typeof HoverCardPrimitive.Content> {
  side?: HoverCardSide
  align?: HoverCardAlign
  sideOffset?: number
}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ className, side = "bottom", align = "center", sideOffset = 6, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      side={side}
      align={align}
      sideOffset={sideOffset}
      collisionPadding={8}
      data-slot="hover-card-content"
      className={cn(
        "z-50 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-card p-4 text-card-foreground shadow-pop outline-none data-[state=open]:animate-[vert-pop-in_140ms_ease-out] data-[state=closed]:animate-[vert-pop-out_120ms_ease-in]",
        sideOffsetClass[side],
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
))
HoverCardContent.displayName = "HoverCardContent"

export { HoverCard, HoverCardTrigger, HoverCardContent }
export type { HoverCardAlign, HoverCardSide }

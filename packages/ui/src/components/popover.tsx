import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"
import { cn } from "../lib/cn"

type PopoverSide = "top" | "right" | "bottom" | "left"
type PopoverAlign = "start" | "center" | "end"

const sideOffsetClass: Record<PopoverSide, string> = {
  top: "origin-bottom",
  right: "origin-left",
  bottom: "origin-top",
  left: "origin-right",
}

function Popover(props: React.ComponentPropsWithRef<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>
>((props, ref) => <PopoverPrimitive.Trigger ref={ref} data-slot="popover-trigger" {...props} />)
PopoverTrigger.displayName = "PopoverTrigger"

const PopoverAnchor = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Anchor>,
  React.ComponentPropsWithRef<typeof PopoverPrimitive.Anchor>
>((props, ref) => <PopoverPrimitive.Anchor ref={ref} data-slot="popover-anchor" {...props} />)
PopoverAnchor.displayName = "PopoverAnchor"

export interface PopoverContentProps
  extends React.ComponentPropsWithRef<typeof PopoverPrimitive.Content> {
  side?: PopoverSide
  align?: PopoverAlign
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, side = "bottom", align = "center", sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      data-slot="popover-content"
      side={side}
      align={align}
      sideOffset={sideOffset}
      collisionPadding={8}
      className={cn(
        "z-50 w-72 rounded-xl border border-border bg-card p-4 text-foreground shadow-pop outline-none data-[state=open]:animate-[vert-pop-in_140ms_ease-out]",
        sideOffsetClass[side],
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
export type { PopoverSide, PopoverAlign }

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const accordionItemVariants = cva("border-b border-border", {
  variants: {
    variant: {
      default: "border-b",
      bordered: "rounded-lg border border-border px-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const accordionTriggerVariants = cva(
  "group/trigger flex flex-1 items-center gap-4 text-left font-medium outline-none transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      size: {
        sm: "py-3 text-sm",
        default: "py-4 text-sm",
        lg: "py-5 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const accordionContentInnerVariants = cva("pt-0", {
  variants: {
    size: {
      sm: "pb-3",
      default: "pb-4",
      lg: "pb-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type AccordionVariant = NonNullable<VariantProps<typeof accordionItemVariants>["variant"]>
type AccordionSize = NonNullable<VariantProps<typeof accordionTriggerVariants>["size"]>
type AccordionIndicatorPosition = "start" | "end"

type AccordionContextValue = {
  variant: AccordionVariant
  size: AccordionSize
  indicator: React.ReactNode | false
  indicatorPosition: AccordionIndicatorPosition
}

const AccordionContext = React.createContext<AccordionContextValue>({
  variant: "default",
  size: "default",
  indicator: undefined,
  indicatorPosition: "end",
})

function AccordionChevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

type AccordionProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Root> & {
  variant?: AccordionVariant
  size?: AccordionSize
  indicator?: React.ReactNode | false
  indicatorPosition?: AccordionIndicatorPosition
}

function Accordion({
  className,
  variant,
  size,
  indicator,
  indicatorPosition,
  ...props
}: AccordionProps) {
  const value = React.useMemo<AccordionContextValue>(
    () => ({
      variant: variant ?? "default",
      size: size ?? "default",
      indicator,
      indicatorPosition: indicatorPosition ?? "end",
    }),
    [variant, size, indicator, indicatorPosition]
  )

  return (
    <AccordionContext.Provider value={value}>
      <AccordionPrimitive.Root
        data-slot="accordion"
        data-variant={value.variant}
        data-size={value.size}
        className={cn(className)}
        {...props}
      />
    </AccordionContext.Provider>
  )
}
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Item> & {
    variant?: AccordionVariant
  }
>(({ className, variant, ...props }, ref) => {
  const { variant: rootVariant } = React.useContext(AccordionContext)
  const resolvedVariant = variant ?? rootVariant
  return (
    <AccordionPrimitive.Item
      ref={ref}
      data-slot="accordion-item"
      data-variant={resolvedVariant}
      className={cn(accordionItemVariants({ variant: resolvedVariant }), className)}
      {...props}
    />
  )
})
AccordionItem.displayName = "AccordionItem"

type AccordionTriggerProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger> & {
  size?: AccordionSize
  indicator?: React.ReactNode | false
  indicatorPosition?: AccordionIndicatorPosition
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, size, indicator, indicatorPosition, ...props }, ref) => {
  const context = React.useContext(AccordionContext)
  const resolvedSize = size ?? context.size
  const resolvedIndicator = indicator === undefined ? context.indicator : indicator
  const resolvedPosition = indicatorPosition ?? context.indicatorPosition

  const indicatorNode =
    resolvedIndicator === false ? null : (
      <span
        data-slot="accordion-indicator"
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center text-muted-foreground transition-transform duration-[200ms] ease-out group-data-[state=open]/trigger:rotate-180"
      >
        {resolvedIndicator ?? <AccordionChevron />}
      </span>
    )

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        data-slot="accordion-trigger"
        data-size={resolvedSize}
        className={cn(accordionTriggerVariants({ size: resolvedSize }), className)}
        {...props}
      >
        {resolvedPosition === "start" ? indicatorNode : null}
        <span data-slot="accordion-label" className="min-w-0 flex-1 text-left">
          {children}
        </span>
        {resolvedPosition === "end" ? indicatorNode : null}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { size } = React.useContext(AccordionContext)
  return (
    <AccordionPrimitive.Content
      ref={ref}
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-[vert-accordion-up_180ms_ease-in] data-[state=open]:animate-[vert-accordion-down_220ms_ease-out]",
        className
      )}
      {...props}
    >
      <div
        data-slot="accordion-content-inner"
        className={cn(accordionContentInnerVariants({ size }))}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
})
AccordionContent.displayName = "AccordionContent"

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentInnerVariants,
}

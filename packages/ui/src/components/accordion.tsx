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

type AccordionProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionItemVariants>

function Accordion({ className, variant, ...props }: AccordionProps) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      data-variant={variant || "default"}
      className={cn(className)}
      {...props}
    />
  )
}
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Item> &
    VariantProps<typeof accordionItemVariants>
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    data-slot="accordion-item"
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      data-slot="accordion-trigger"
      className={cn(
        "flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium outline-none transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-4 shrink-0 text-muted-foreground transition-transform duration-[200ms] ease-out"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    data-slot="accordion-content"
    className={cn(
      "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-[vert-fade-out_140ms_ease-out] data-[state=open]:animate-[vert-fade-in_140ms_ease-out]",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, accordionItemVariants }

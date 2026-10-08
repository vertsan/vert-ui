import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const radioGroupVariants = cva("grid gap-2", {
  variants: {
    orientation: {
      horizontal: "grid-flow-col justify-start",
      vertical: "grid-flow-row",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

const radioGroupItemVariants = cva(
  "peer flex shrink-0 items-center justify-center rounded-full border border-border-strong bg-background text-brand outline-none transition-colors duration-[140ms] hover:border-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-checked:border-brand aria-checked:bg-brand aria-checked:text-brand-foreground data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=checked]:text-brand-foreground",
  {
    variants: {
      size: {
        sm: "size-4 [&_span]:size-1.5",
        md: "size-5 [&_span]:size-2",
        lg: "size-6 [&_span]:size-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

type RadioGroupProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Root> &
  VariantProps<typeof radioGroupVariants>

function RadioGroup({ className, orientation, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      data-orientation={orientation || "vertical"}
      className={cn(radioGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithRef<typeof RadioGroupPrimitive.Item> & VariantProps<typeof radioGroupItemVariants>
>(({ className, size, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    data-slot="radio-group-item"
    data-size={size || "md"}
    className={cn(radioGroupItemVariants({ size }), className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator data-slot="radio-group-indicator">
      <span className="block rounded-full bg-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
))
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem, radioGroupVariants, radioGroupItemVariants }

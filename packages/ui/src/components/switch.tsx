import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent outline-none transition-colors duration-[140ms] ease-out-quart focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
  {
    variants: {
      variant: {
        default: "",
        brand: "data-[state=checked]:bg-brand",
        destructive: "data-[state=checked]:bg-destructive",
      },
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-white shadow-soft transition-transform duration-[140ms] ease-out-quart data-[state=unchecked]:shadow-none",
  {
    variants: {
      size: {
        sm: "size-4 translate-x-0.5 data-[state=checked]:translate-x-[18px]",
        md: "size-5 translate-x-0.5 data-[state=checked]:translate-x-[22px]",
        lg: "size-6 translate-x-0.5 data-[state=checked]:translate-x-[22px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SwitchProps
  extends Omit<React.ComponentPropsWithRef<typeof SwitchPrimitive.Root>, "size">,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, variant, size, ...props }, ref) => (
    <SwitchPrimitive.Root
      ref={ref}
      data-slot="switch"
      data-variant={variant || "default"}
      data-size={size || "md"}
      className={cn(switchVariants({ variant, size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  )
)
Switch.displayName = "Switch"

export { Switch, switchVariants, switchThumbVariants }

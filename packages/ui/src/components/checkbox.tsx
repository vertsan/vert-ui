import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const checkboxVariants = cva(
  "peer flex shrink-0 items-center justify-center border border-border-strong bg-surface text-brand-foreground shadow-soft outline-none transition-[background-color,border-color,color,box-shadow,transform] duration-[140ms] ease-out-quart hover:border-brand focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-brand data-[state=checked]:bg-brand data-[state=indeterminate]:border-brand data-[state=indeterminate]:bg-brand",
  {
    variants: {
      size: {
        sm: "size-4 rounded-[5px] [&_svg]:size-2.5",
        md: "size-5 rounded-md [&_svg]:size-3",
        lg: "size-6 rounded-md [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>, "size">,
    VariantProps<typeof checkboxVariants> {
  /** Mark the field as invalid: sets aria-invalid and the destructive border. */
  invalid?: boolean
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, invalid, "aria-invalid": ariaInvalidProp, ...props }, ref) => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      data-slot="checkbox"
      data-size={size ?? "md"}
      data-invalid={invalid || undefined}
      aria-invalid={invalid || ariaInvalidProp}
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="hidden [[data-state=checked]_&]:block"
        >
          <path d="M2.5 6.5 4.75 8.75 9.5 3.5" />
        </svg>
        <svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="hidden [[data-state=indeterminate]_&]:block"
        >
          <path d="M2.5 6h7" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
export type { VariantProps as CheckboxVariantProps }

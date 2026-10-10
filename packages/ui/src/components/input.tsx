import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background text-sm shadow-sm outline-none transition-[color,background-color,border-color,box-shadow] duration-[140ms] ease-out-quart file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:border-border-strong focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive aria-invalid:focus-visible:border-destructive aria-invalid:focus-visible:ring-destructive disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-9 px-3 py-1",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  invalid?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", size, invalid, "aria-invalid": ariaInvalid, ...props },
    ref
  ) => {
    return (
      <input
        type={type}
        data-slot="input"
        data-size={size ?? "md"}
        data-variant="default"
        data-invalid={invalid || undefined}
        aria-invalid={invalid || ariaInvalid || undefined}
        className={cn(inputVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

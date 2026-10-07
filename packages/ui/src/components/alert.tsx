import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const alertVariants = cva(
  "relative flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:mt-0.5",
  {
    variants: {
      variant: {
        default: "border-border bg-muted text-foreground",
        brand: "border-brand/25 bg-brand-soft text-brand-soft-foreground",
        info: "border-info/25 bg-info-soft text-info-soft-foreground",
        success: "border-success/25 bg-success-soft text-success-soft-foreground",
        warning: "border-warning/25 bg-warning-soft text-warning-soft-foreground",
        destructive:
          "border-destructive/25 bg-destructive-soft text-destructive-soft-foreground",
      },
      size: {
        sm: "px-3 py-2 text-xs [&_svg]:size-3.5",
        md: "px-4 py-3 text-sm",
        lg: "px-5 py-4 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /** Leading visual (icon). Kept out of the accessibility tree by the caller. */
  icon?: React.ReactNode
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="alert"
      data-variant={variant || "default"}
      data-size={size || "md"}
      className={cn(alertVariants({ variant, size }), className)}
      {...props}
    >
      {icon ? (
        <span data-slot="alert-icon" aria-hidden="true" className="contents">
          {icon}
        </span>
      ) : null}
      <div data-slot="alert-body" className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  )
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      data-slot="alert-title"
      className={cn("font-medium leading-snug", className)}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="alert-description"
    className={cn("mt-1 text-sm opacity-90 [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription, alertVariants }

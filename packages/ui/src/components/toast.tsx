import * as ToastPrimitive from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

type ToastProviderProps = React.ComponentPropsWithRef<typeof ToastPrimitive.Provider>

function ToastProvider({ duration = 5000, ...props }: ToastProviderProps) {
  return <ToastPrimitive.Provider duration={duration} swipeDirection="right" {...props} />
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl border p-4 pr-10 text-sm shadow-pop outline-none",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-foreground",
        brand: "border-brand/30 bg-brand-soft text-brand-soft-foreground",
        success: "border-success/30 bg-success-soft text-success-soft-foreground",
        warning: "border-warning/30 bg-warning-soft text-warning-soft-foreground",
        destructive:
          "border-destructive/30 bg-destructive-soft text-destructive-soft-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type ToastProps = React.ComponentPropsWithRef<typeof ToastPrimitive.Root> &
  VariantProps<typeof toastVariants>

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  ToastProps
>(({ className, variant, type, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    type={type || (variant === "destructive" ? "foreground" : undefined)}
    data-slot="toast"
    data-variant={variant || "default"}
    className={cn(
      toastVariants({ variant }),
      "data-[state=open]:animate-[vert-toast-in_200ms_ease-out] data-[state=closed]:animate-[vert-toast-out_150ms_ease-in] data-[swipe=end]:animate-[vert-swipe-out_150ms_ease-out] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0",
      className
    )}
    {...props}
  />
))
Toast.displayName = "Toast"

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    data-slot="toast-title"
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    data-slot="toast-description"
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = "ToastDescription"

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Action>,
  React.ComponentPropsWithRef<typeof ToastPrimitive.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    data-slot="toast-action"
    className={cn(
      "inline-flex h-7 shrink-0 items-center justify-center rounded-md border border-border bg-background px-2.5 text-xs font-medium text-foreground outline-none transition-colors duration-[140ms] ease-out-quart hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = "ToastAction"

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Close>,
  React.ComponentPropsWithRef<typeof ToastPrimitive.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    data-slot="toast-close"
    aria-label="Dismiss"
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-current opacity-70 outline-none transition-[background-color,opacity] duration-[140ms] ease-out-quart hover:bg-current/10 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring",
      className
    )}
    {...props}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-4"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  </ToastPrimitive.Close>
))
ToastClose.displayName = "ToastClose"

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    data-slot="toast-viewport"
    className={cn(
      "fixed inset-x-0 bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-2 p-4 outline-none sm:inset-x-auto sm:right-4 sm:w-[calc(100%-2rem)] sm:max-w-sm",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = "ToastViewport"

export { ToastProvider, Toast, ToastTitle, ToastDescription, ToastAction, ToastClose, ToastViewport, toastVariants }

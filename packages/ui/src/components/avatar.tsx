import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"
import { cn } from "../lib/cn"

const avatarVariants = cva("relative inline-flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-muted text-foreground",
      brand: "bg-brand/15 text-brand",
      surface: "bg-surface text-muted-foreground",
    },
    size: {
      sm: "size-8 text-xs",
      md: "size-10 text-sm",
      lg: "size-12 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface AvatarProps
  extends Omit<React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>, "size">,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, variant, size, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      data-slot="avatar"
      data-variant={variant || "default"}
      data-size={size || "md"}
      className={cn(avatarVariants({ variant, size }), className)}
      {...props}
    />
  )
)
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    data-slot="avatar-image"
    className={cn("size-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    data-slot="avatar-fallback"
    className={cn(
      "flex size-full items-center justify-center rounded-full font-medium",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback, avatarVariants }

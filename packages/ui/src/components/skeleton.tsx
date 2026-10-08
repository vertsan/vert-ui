import * as React from "react"
import { cn } from "../lib/cn"

export type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Skeleton — decorative loading placeholder. Mark your loading region with
 * aria-busy yourself; the skeleton itself is hidden from assistive tech.
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-muted motion-reduce:animate-none", className)}
      {...props}
    />
  )
}
Skeleton.displayName = "Skeleton"

export { Skeleton }

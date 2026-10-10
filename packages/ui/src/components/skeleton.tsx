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
      className={cn(
        "relative overflow-hidden rounded-md bg-muted after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_1.6s_ease-in-out_infinite] after:bg-[linear-gradient(90deg,transparent,var(--color-muted-foreground),transparent)] after:opacity-15 after:motion-reduce:animate-none",
        className
      )}
      {...props}
    />
  )
}
Skeleton.displayName = "Skeleton"

export { Skeleton }

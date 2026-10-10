import type { ButtonProps } from "@vert-ui/ui"
import { Button } from "@vert-ui/ui"
import { MotionConfig, motion, type Variants } from "framer-motion"
import * as React from "react"
import { cn } from "../lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

const headlineStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
}

const lineReveal: Variants = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
}

const panelIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
}

const cardUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.45, ease: EASE },
  },
}

function mergeChild(
  child: React.ReactElement<{ className?: string }>,
  className?: string,
): React.ReactElement {
  return React.cloneElement(child, {
    className: cn(child.props.className, className),
  })
}

export interface HeroCta {
  label?: React.ReactNode
  href?: string
  slot?: React.ReactElement
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}

function CtaButton({
  cta,
  className,
}: {
  cta?: HeroCta
  className?: string
}): React.ReactElement | null {
  if (!cta) return null
  const { slot, href, label, variant, size } = cta
  const child =
    slot ??
    (typeof href === "string" ? (
      <a href={href}>{label}</a>
    ) : null)

  return (
    <Button
      variant={variant ?? "ghost"}
      size={size}
      className={cn(className, cta.className)}
      asChild={Boolean(child)}
    >
      {child ?? label}
    </Button>
  )
}

export function NotchedPanel({
  className,
  media,
  topRightCta,
  floatingCard,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  media?: React.ReactNode
  topRightCta?: React.ReactNode
  floatingCard?: React.ReactNode
}) {
  return (
    <div
      data-slot="notched-panel"
      className={cn("hero-panel", className)}
      {...props}
    >
      <div aria-hidden="true" className="hero-panel__bg" />

      <div className="hero-panel__notches-mobile md:contents">
        <div className="hero-notch hero-notch--tl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headlineStagger}
            className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground"
          >
            <motion.span variants={lineReveal} className="block">
              Grow with
            </motion.span>
            <motion.span variants={lineReveal} className="block">
              <span className="text-primary">precision.</span>
            </motion.span>
          </motion.h1>
        </div>

        {topRightCta ? (
          <div className="hero-notch hero-notch--tr">{topRightCta}</div>
        ) : null}

        {topRightCta ? (
          <div className="hero-notch--tr-mobile">{topRightCta}</div>
        ) : null}
      </div>

      <div data-slot="notched-panel-media" className="hero-panel__media">
        {media}
      </div>

      {floatingCard ? (
        <div className="hero-floating-slot">{floatingCard}</div>
      ) : null}
    </div>
  )
}

export function HeroFloatingCard({
  className,
  title = "Copy-paste ready",
  meta = "shadcn-compatible · React 19 · TypeScript",
  moreLink,
  moreHref,
}: {
  className?: string
  title?: React.ReactNode
  meta?: React.ReactNode
  moreHref?: string
  moreLink?: React.ReactElement<{ className?: string }>
}) {
  const linkClass =
    "mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary outline-none transition-colors hover:text-primary/90 focus-visible:ring-2 focus-visible:ring-ring"

  const more =
    moreLink != null ? (
      mergeChild(moreLink, linkClass)
    ) : typeof moreHref === "string" ? (
      <a href={moreHref} className={linkClass}>
        More info <span aria-hidden="true">+</span>
      </a>
    ) : null

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardUp}
      data-slot="hero-floating-card"
      className={cn("w-full", className)}
    >
      <div className="hero-floating-card__idle rounded-2xl border border-border bg-background/60 p-3 backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-xl border border-border/80 bg-muted"
        >
          <div className="flex gap-1 border-b border-border/70 px-2 py-1.5">
            <span className="size-2 rounded-full bg-muted-foreground/25" />
            <span className="size-2 rounded-full bg-muted-foreground/20" />
            <span className="size-2 rounded-full bg-primary/40" />
          </div>
          <div className="grid grid-cols-3 gap-1 p-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-6 rounded-md bg-background/80",
                  i === 2 && "col-span-2 h-8 bg-primary/15",
                )}
              />
            ))}
          </div>
        </div>

        <h3 className="mt-2.5 text-sm font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {meta}
        </p>
        {more}
      </div>
    </motion.div>
  )
}

export function HeroNotched({
  className,
  media,
  floatingCard,
  subtext,
  cta,
  secondaryCta,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  media?: React.ReactNode
  floatingCard?: React.ReactNode
  subtext?: React.ReactNode
  cta?: HeroCta
  secondaryCta?: HeroCta
}) {
  return (
    <MotionConfig reducedMotion="user">
      <section
        data-slot="hero-notched"
        className={cn(
          "hero-notched mx-auto w-full max-w-6xl px-4 pt-6",
          className,
        )}
        {...props}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={panelIn}
          className="rounded-[28px] border border-border bg-card p-3"
        >
          <NotchedPanel
            media={media}
            topRightCta={cta?.slot ?? (cta ? <CtaButton cta={cta} /> : undefined)}
            floatingCard={floatingCard}
          />
        </motion.div>

        {(subtext || secondaryCta) && (
          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 text-center">
            {subtext ? (
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtext}
              </p>
            ) : null}
            <CtaButton
              cta={{ ...secondaryCta, variant: secondaryCta?.variant ?? "ghost" }}
            />
          </div>
        )}
      </section>
    </MotionConfig>
  )
}

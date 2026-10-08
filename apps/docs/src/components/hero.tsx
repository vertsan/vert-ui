import {
  Avatar,
  AvatarFallback,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Progress,
  Switch,
} from "@vert-ui/ui"
import { Link } from "@tanstack/react-router"
import { MotionConfig, motion, type Variants } from "framer-motion"
import { useEffect, useRef } from "react"
import { HeroCanvas } from "./hero-canvas"

const EASE = [0.22, 1, 0.36, 1] as const

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

const riseLate: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.5, ease: EASE } },
}

const cardRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.85, ease: EASE } },
}

const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.12, staggerChildren: 0.09 } },
}

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.05, staggerChildren: 0.07 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: "0.35em" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

const chipVariants = (index: number): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    rotate: [0, 1.4, 0],
    transition: {
      opacity: { duration: 0.6, delay: 1 + index * 0.15 },
      y: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 },
      rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 },
    },
  },
})

const headlineWords = ["Grow", "with", "precision."]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let dispose: (() => void) | undefined
    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ])
      if (cancelled) return
      gsap.registerPlugin(ScrollTrigger)

      const media = gsap.matchMedia()
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const scene = sceneRef.current
        const section = sectionRef.current
        const tilt = tiltRef.current
        if (scene && section) {
          gsap.to(scene, {
            yPercent: 12,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.6 },
          })
        }
        if (tilt && section && window.matchMedia("(pointer: fine)").matches) {
          gsap.set(tilt, { transformPerspective: 1400, transformOrigin: "50% 50%" })
          const rotateY = gsap.quickTo(tilt, "rotationY", { duration: 0.7, ease: "power3.out" })
          const rotateX = gsap.quickTo(tilt, "rotationX", { duration: 0.7, ease: "power3.out" })
          const onMove = (event: PointerEvent) => {
            const rect = section.getBoundingClientRect()
            const nx = ((event.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1
            const ny = ((event.clientY - rect.top) / Math.max(1, rect.height)) * 2 - 1
            rotateY(nx * 5)
            rotateX(ny * -4)
          }
          const onLeave = () => {
            rotateY(0)
            rotateX(0)
          }
          section.addEventListener("pointermove", onMove)
          section.addEventListener("pointerleave", onLeave)
          return () => {
            section.removeEventListener("pointermove", onMove)
            section.removeEventListener("pointerleave", onLeave)
          }
        }
      })
      dispose = () => media.revert()
    })()
    return () => {
      cancelled = true
      dispose?.()
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-5xl overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-24"
      >
        <HeroCanvas innerRef={sceneRef} />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 hidden xl:block"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={chipVariants(0)}
            className="absolute left-[1.5%] top-[14%]"
          >
            <Badge>copy-paste ready</Badge>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={chipVariants(1)}
            className="absolute left-[2%] top-[30%]"
          >
            <div className="rounded-2xl border border-border/70 bg-card/80 p-2.5 shadow-soft backdrop-blur-sm">
              <Avatar className="size-9">
                <AvatarFallback>VT</AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={chipVariants(2)}
            className="absolute right-[1.5%] top-[15%]"
          >
            <div className="w-36 rounded-2xl border border-border/70 bg-card/80 p-3 shadow-soft backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Registry sync</span>
                <span className="font-medium text-brand">72%</span>
              </div>
              <Progress value={72} size="sm" className="mt-2" aria-label="Registry sync" />
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={chipVariants(3)}
            className="absolute right-[2%] top-[31%] flex flex-col items-end gap-2"
          >
            <Badge variant="secondary">React 19</Badge>
            <Badge variant="outline">WCAG AA</Badge>
          </motion.div>
        </div>

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <motion.div variants={rise}>
            <Badge>shadcn-compatible · React 19 · TypeScript</Badge>
          </motion.div>
          <motion.h1
            variants={wordContainer}
            className="mt-6 bg-linear-to-br from-vert-600 via-brand to-vert-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            {headlineWords.map((wordText, index) => (
              <span key={wordText}>
                <motion.span variants={word} className="inline-block">
                  {wordText}
                </motion.span>
                {index < headlineWords.length - 1 ? " " : null}
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={rise}
            className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            vert-ui is an original UI library of calm, green-accented components with soft
            motion — copy-paste into React 19, style with Tailwind, own forever.
          </motion.p>
          <motion.div variants={rise} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link to="/components">Browse components</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/guide">Get started</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={riseLate}
          className="relative z-10 mt-14"
        >
          <div ref={tiltRef}>
            <div className="grain luminous-border rounded-2xl border border-border/60 bg-card/90 p-2 shadow-raised backdrop-blur-sm">
              <div className="flex items-center gap-2 px-3 py-2">
                <span className="size-2.5 rounded-full bg-warning/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-warning/50" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-success/60" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="ml-3 hidden rounded-md bg-muted px-3 py-0.5 text-xs text-muted-foreground sm:inline-block"
                >
                  app.vert.dev/settings
                </span>
              </div>
              <div className="grid gap-4 rounded-xl bg-background/70 p-5 sm:grid-cols-2 sm:p-6">
                <motion.div initial="hidden" animate="visible" variants={cardRise}>
                  <Card>
                    <CardHeader className="flex-row items-center gap-3 space-y-0 p-5">
                      <Avatar variant="brand">
                        <AvatarFallback>VS</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <CardTitle className="truncate">Precision workspace</CardTitle>
                        <CardDescription className="truncate">
                          12 members · synced
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 p-5 pt-0">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-muted-foreground">Auto-sync</span>
                        <Switch defaultChecked aria-label="Auto-sync" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={cardRise}>
                  <Card>
                    <CardHeader className="flex-row items-center justify-between space-y-0 p-5">
                      <CardTitle>Storage</CardTitle>
                      <span className="text-sm text-muted-foreground">64%</span>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4 p-5 pt-0">
                      <Progress value={64} aria-label="Storage used" />
                      <div className="flex flex-wrap gap-2">
                        <Badge>on track</Badge>
                        <Badge variant="secondary">weekly</Badge>
                        <Badge variant="outline">v0.1</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2 p-5 pt-0">
                      <Button size="sm" className="flex-1">
                        Save
                      </Button>
                      <Button size="sm" variant="ghost" className="flex-1">
                        Cancel
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  )
}

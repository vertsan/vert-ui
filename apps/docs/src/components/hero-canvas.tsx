import { lazy, Suspense, useEffect, useRef, useState, type Ref } from "react"

const HeroScene = lazy(() => import("./hero-scene"))

const scrim =
  "radial-gradient(65% 55% at 50% 35%, color-mix(in srgb, var(--color-background) 88%, transparent) 0%, transparent 100%)"

export function HeroCanvas({ innerRef }: { innerRef?: Ref<HTMLDivElement> }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(true)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setMounted(true)
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener("change", sync)

    const host = hostRef.current
    let observer: IntersectionObserver | undefined
    if (host && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => setInView(entries[0]?.isIntersecting ?? true),
        { rootMargin: "120px" },
      )
      observer.observe(host)
    }
    return () => {
      query.removeEventListener("change", sync)
      observer?.disconnect()
    }
  }, [])

  const setRefs = (element: HTMLDivElement | null) => {
    hostRef.current = element
    if (typeof innerRef === "function") innerRef(element)
    else if (innerRef) innerRef.current = element
  }

  return (
    <div
      ref={setRefs}
      aria-hidden="true"
      className="hero-scene pointer-events-none absolute inset-x-0 -top-[18%] -bottom-[6%] z-0 overflow-hidden"
    >
      {mounted ? (
        <Suspense fallback={null}>
          <HeroScene animate={!reduced && inView} />
        </Suspense>
      ) : null}
      <div className="absolute inset-0" style={{ background: scrim }} />
    </div>
  )
}
